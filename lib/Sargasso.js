/**
	Sargasso

	Base class for responsive Sargasso element controllers. Subclass this to
	define specific behavior. If you mutate the DOM in your code you
	should use frames for best results.

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes
**/

import {
	elementTools
}
	from './utils.js'

import {
	theDOMWatcher, theScrollWatcher, theResizeWatcher, theOrientationWatcher, theWorkerWatcher
}
	from './Services.js'

import {
	kebabCase
}
	from './dependencies'

let unique = 0
const liveElements = []

const supportsCustomElements = ('customElements' in window)

/*
	All subclasses of Sargasso must register the class so that
	the SargassoSupervisor can instantiate them.

	EG.
		class mySubclass extends Sargasso {}
		registerSargassoClass('mySubclass',mySubclass)

	Then an instance of mySubclass will be attached to the element
	when it appears in the DOM:

		<div data-sargasso-class="mySubclass"></div>

*/

const tracing = false
const trace = (obj, message, blob) => {
	console.log(obj.constructor.name, obj.uid, message, blob || null)
}

const registeredClasses = {}
window.registeredClasses = registeredClasses // new function() scope is global so....
const registerSargassoClass = (className, object) => {
	registeredClasses[className] = object
	if (supportsCustomElements) {
		/*
			for custom html element scheme <sargasso-class-name></sargasso-class-name>
			we define a little helper class that is a subclass of HTMLElement.
			The browser will instantiate this when the element appears in the DOM
			allowing us to instantiate the required sargasso controller
			and cleanup when the html element is removed from the dom.

			This helper oobject scheme allows us to keep the namespace of
			the element clean.
		*/
		const customElementFactory =
			`
			return class ${className}Element extends HTMLElement {
				constructor(element, options = {}) {
					super()
					this.helperClass= '${className}'
				}

				connectedCallback () {
					this.helper = new registeredClasses[this.helperClass](this)
					this.helper.start()
				}

				disconnectedCallback () {
					this.helper.destroy()
					this.helper = null // nuke the reference for trash collection
				}
			}`

		customElements.define('sargasso-' + kebabCase(className), new Function(customElementFactory)())
	}
}

const eventNames = [
	'DOMChanged', 'didScroll', 'didResize', 'didBreakpoint', 'enterViewport', 'exitViewport', 'enterFullscreen', 'exitFullscreen', 'newPage', 'elementEvent'
]

class Sargasso {
	constructor (element, options = {}) {
		this.uid = ++unique
		this.element = element || this
		this.isCustomElement = (this.element.tagName.toLowerCase() === 'sargasso-' + kebabCase(this.constructor.name))
		this.options = options
		this.pendingAnimationFrame = undefined
		this.frameQueue = []
		this.mortal = true
		this.isInViewport = false
		this.workers = {}
		this.started = false
		if (tracing) trace(this, 'constructor isCustomElement', this.isCustomElement)
	}

	start () {
		const registeredResponsiveControllers = this.getMetaData('registeredResponsiveControllers') || []
		registeredResponsiveControllers.push(this)
		this.setMetaData('registeredResponsiveControllers', registeredResponsiveControllers)
		this.setMetaData(this.constructor.name, this)

		liveElements.push(this)

		// subscribe to desired event services

		if (this.options.watchDOM) {
			theDOMWatcher.subscribe(this)
		}

		if (this.options.watchScroll || this.options.watchViewport) {
			theScrollWatcher.subscribe(this)
		}

		if (this.options.watchResize || this.options.watchViewport) {
			theResizeWatcher.subscribe(this)
		}

		if (this.options.watchOrientation || this.options.watchViewport) {
			theOrientationWatcher.subscribe(this)
		}

		/*
			listen for 'sargasso' events
			Call the method named in e.detail.sargassoEvent or call this.elementEvent
		*/

		this.elementListener = (e) => {
			if (e.detail && e.detail.sargassoEvent && eventNames.indexOf(e.detail.sargassoEvent) !== -1) {
				this[e.detail.sargassoEvent].apply(this, e.detail.sargassoEventOptions || [])
			} else {
				this.elementEvent(e)
			}
		}

		this.element.addEventListener('sargasso', this.elementListener)

		this.started = true

		if (tracing) trace(this, 'start')
	}

	setMetaData (k, v) {
		elementTools.setMetaData(this.element, k, v)
	}

	getMetaData (k) {
		return elementTools.getMetaData(this.element, k)
	}

	on (evt, selector, fn, options) {
		elementTools.on(this.constructor.name + '-' + this.uid, this.element, evt, selector, fn, options)
	}

	off (evt, selector, fn) {
		elementTools.off(this.constructor.name + '-' + this.uid, this.element, evt, selector, fn)
	}

	notifyAll (event, params) {
		if (eventNames.indexOf(event) === -1) {
			throw (new Error('invalid event name ' + event))
		}
		for (let i = 0; i < liveElements.length; i++) {
			const peer = liveElements[i]
			if (peer !== this && peer[event]) {
				peer[event].apply(peer, params)
			}
		}
	}

	notifyElement (element, event, params) {
		if (eventNames.indexOf(event) === -1) {
			throw (new Error('invalid event name ' + event))
		}

		const registeredResponsiveControllers = this.getMetaData('registeredResponsiveControllers')
		if (registeredResponsiveControllers) {
			for (let i = 0; i < registeredResponsiveControllers.length; i++) {
				const peer = registeredResponsiveControllers[i]
				if (peer !== this && peer[event]) {
					peer[event].apply(peer, params)
				}
			}
		}
	}

	/*
		manage the animation frame queue for this element
	*/

	flushQueue () {
		if (this.pendingAnimationFrame) {
			cancelAnimationFrame(this.pendingAnimationFrame)
			this.pendingAnimationFrame = undefined
		}
		this.frameQueue = []
	}

	processQueue () {
		this.pendingAnimationFrame = undefined
		var toProcess = this.frameQueue.slice(0)
		this.frameQueue = []
		for (var i = 0; i < toProcess.length; i++) {
			toProcess[i]()
		}
	}

	/*
		queueFrame - schedule a task in the requestAnimation frame event loop

		Call this to queue functions that mutate the DOM (make changes to html)

		EG:
		let frame = () => {
			this.element.addClass('big')
		}
		this.queueFrame(frame)

		The frame will then be executed in the next requested animation frame
	*/

	queueFrame (frame) {
		this.frameQueue.push(frame.bind(this))
		if (!this.pendingAnimationFrame) {
			this.pendingAnimationFrame = requestAnimationFrame(() => {
				this.processQueue()
			})
		}
	}

	// override this if you have any listeners to clean up that you started in your subclass
	sleep () {
		if (this.options.watchDOM) {
			theDOMWatcher.unSubscribe(this)
		}

		if (this.options.watchScroll || this.options.watchViewport) {
			theScrollWatcher.unSubscribe(this)
		}

		if (this.options.watchResize || this.options.watchViewport) {
			theResizeWatcher.unSubscribe(this)
		}

		if (this.options.watchOrientation || this.options.watchViewport) {
			theOrientationWatcher.unSubscribe(this)
		}

		this.element.removeEventListener('sargasso', this.elementListener)

		this.started = false

		if (tracing) trace(this, 'sleep')
	}

	// called when this.element is removed from the DOM
	// you normally don't need to call this
	destroy () {
		this.stopAllWorkers()

		this.flushQueue()

		if (this.started) {
			this.sleep()
		}

		const registeredResponsiveControllers = this.getMetaData('registeredResponsiveControllers')
		if (registeredResponsiveControllers) {
			if (registeredResponsiveControllers.indexOf(this) !== -1) {
				registeredResponsiveControllers.splice(registeredResponsiveControllers.indexOf(this), 1)
				this.setMetaData('registeredResponsiveControllers', registeredResponsiveControllers)
			}
		}

		this.setMetaData(this.constructor.name, null)

		this.element = null

		if (liveElements.indexOf(this) !== -1) {
			liveElements.splice(liveElements.indexOf(this), 1)
		}

		if (tracing) trace(this, 'destroy')
	}

	// these handlers are called by the event services - prolly should
	// leave these alone

	watchDOM () {
		this.DOMChanged()
	}

	watchScroll () {
		if (this.options.watchViewport) {
			this.inViewport()
		}

		this.didScroll()
	}

	watchResize () {
		if (this.options.watchViewport) {
			this.inViewport()
		}

		this.didResize()
	}

	watchOrientation () {
		if (window.orientation && (window.orientation === 90 || window.orientation === 270)) {
			this.wantFullscreen(true)
		} else {
			this.wantFullscreen(false)
		}
	}

	inViewport () {
		if (theScrollWatcher.inViewPort(this.element)) {
			if (!this.isInViewport) {
				this.enterViewport()
				this.isInViewport = true
			}
		} else {
			if (this.isInViewport) {
				this.exitViewport()
				this.isInViewport = false
			}
		}
	};

	// you can call this from a subclass controller such as an 'enlarge to full screen' button
	// otherwise if watchOrientation is set it will do this when phone is in lanscape
	// it would be nice to acually use the experimental requestFullScreen thing but
	// you can't do that on rotate at the moment, only on click.

	wantFullscreen (want) {
		if (want) {
			this.enterFullscreen()
		} else {
			this.exitFullscreen()
		}
	}

	/*
		Event Handlers:
		Override these methods in your subclass to take action on these events
	*/

	// something changed on the page
	DOMChanged () {}

	// scroll occured
	didScroll () {}

	// resize occured
	didResize () {}

	// new breakpoint
	didBreakpoint () {}

	// element entered the viewport
	enterViewport () {}

	// element exited the viewport
	exitViewport () {}

	// element entered fullscreen
	enterFullscreen () {}

	// element exited fullscreen
	exitFullscreen () {}

	// page changed
	newPage (oldPath, newPath) {}

	// element received a 'sargasso' custom event from somewhere
	elementEvent (e) {}

	// element utilities

	hasClass (cssClass) {
		return elementTools.hasClass(this.element, cssClass)
	}

	addClass (cssClass) {
		elementTools.addClass(this.element, cssClass)
	}

	removeClass (cssClass) {
		elementTools.removeClass(this.element, cssClass)
	}

	setCSS (cssObject) {
		// elementTools.setCSS(this.element, cssObject)
	}

	isVisible () {
		return elementTools.isVisible(this.element)
	}

	scrollTop (newTop) {
		return theScrollWatcher.scrollTop(newTop)
	}

	/*
		Worker management

		Offload compute heavy tasks to a new thread and listen for result

		Pass it a url of a web worker js file or create an inline web worker
		from string of raw code such as:

		let mycode = `onmessage = function (e) {
			// do something. when done:
			postMessage('Done doing pointless stuff: ' + result)
		}`

		this.workerStart('pointless-stuff', mycode)

		this.workerPostMessage('pointless-stuff', 16)
	*/

	workerStart (id, codeOrURL) {
		this.workers[id] = theWorkerWatcher.registerWorker(id, codeOrURL)
		theWorkerWatcher.subscribe(this, id)
		return this.workers[id]
	}

	workerPostMessage (id, message) {
		if (!message.uid) {
			message.uid = this.uid
		}
		if (this.workers[id]) {
			this.workers[id].postMessage(message)
		}
	}

	workerMessage (id, e) {
		if (e.data.uid === this.uid) {
			this.workerOnMessage(id, e.data)
		}
	}

	// subclass should overide this to listen to workers
	workerOnMessage (id, data) {

	}

	// stop a worker
	stopWorker (id) {
		if (this.workers[id]) {
			theWorkerWatcher.unSubscribe(this, id)
			delete this.workers[id]
		}
	}

	// cleanup all workers
	stopAllWorkers () {
		for (const worker in this.workers) {
			this.stopWorker(worker)
		}
	}

	// experimental

	nativeRequestFullScreen () {
		if (document.fullscreenElement) {
			if (document.fullscreenElement === this.element) {
				return
			}
			document.exitFullscreen()
		}

		this.element.requestFullscreen()
	}

	nativeExitFullScreen () {
		if (document.fullscreenElement && document.fullscreenElement === this.element) {
			document.exitFullscreen()
		}
	}
}

registerSargassoClass('Sargasso', Sargasso)

export {
	Sargasso, registerSargassoClass, liveElements, registeredClasses
}
