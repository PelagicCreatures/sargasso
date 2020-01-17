/**
	Sargasso

	Base class for responsive Sargasso element controllers. Subclass this to
	define specific behavior. If you mutate the DOM in your code you
	should use frames for best results. EG. LazyBackground
**/

import {
	elementTools
}
	from './utils'

import {
	theDOMWatcher, theScrollWatcher, theResizeWatcher, theOrientationWatcher
}
	from './Services'

let unique = 0
const liveElements = []

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

const registeredClasses = {}
const registerSargassoClass = (className, object) => {
	registeredClasses[className] = object
}

const tracing = false
const trace = (obj, message, blob) => {
	console.log(obj.constructor.name, obj.uid, message, blob || null)
}

const eventNames = [
	'DOMChanged', 'didScroll', 'didResize', 'didBreakpoint', 'enterViewport', 'exitViewport', 'enterFullscreen', 'exitFullscreen', 'newPage', 'elementEvent'
]

class Sargasso {
	constructor (element, options = {}) {
		this.uid = ++unique
		this.element = element
		this.options = options
		this.pendingAnimationFrame = undefined
		this.frameQueue = []
		this.mortal = true
		this.isInViewport = false
		this.workers = {}

		if (!this.element.registeredResponsiveControllers) {
			this.element.registeredResponsiveControllers = []
		}
		this.element.registeredResponsiveControllers.push(this)

		liveElements.push(this)
	}

	start () {
		if (tracing) trace(this, 'start')

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
		for (let i = 0; i < this.element.registeredResponsiveControllers.length; i++) {
			const peer = this.element.registeredResponsiveControllers[i]
			if (peer !== this && peer[event]) {
				peer[event].apply(peer, params)
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
	}

	// called when this.element is removed from the DOM
	// you normally don't need to call this
	destroy () {
		if (tracing) trace(this, 'destroy')

		this.flushQueue()

		this.sleep()

		this.stopAllWorkers()

		if (this.element.registeredResponsiveControllers) {
			if (this.element.registeredResponsiveControllers.indexOf(this) !== -1) {
				this.element.registeredResponsiveControllers.splice(this.element.registeredResponsiveControllers.indexOf(this), 1)
			}
		}

		this.element = null

		if (liveElements.indexOf(this) !== -1) {
			liveElements.splice(liveElements.indexOf(this), 1)
		}
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
		elementTools.setCSS(this.element, cssObject)
	}

	isVisible () {
		return elementTools.isVisible(this.element)
	}

	/*
		Worker management

		Offload compute heavy tasks to a new thread and listen for result

		You pass it a url of a web worker js file or create an inine web worker
		from string of raw code such as:

		let mycode = `onmessage = function (e) {
			const baseNumber = e.data
			let result = 0
			for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {
				result += Math.atan(i) * Math.tan(i)
			};
			postMessage('Done doing pointless math: ' + result)
		}`

		this.workerStart('pointless-math', mycode)

		this.workerPost('pointless-math', 16)
	*/

	workerStart (id, codeOrURL) {
		let blobURL = codeOrURL

		let revoke = false
		if (!codeOrURL.match(/^(http|\/)/i)) {
			const blob = new Blob([codeOrURL], {
				type: 'text/javascript'
			})
			blobURL = URL.createObjectURL(blob)
			revoke = true
		}

		this.workers[id] = new Worker(blobURL)

		if (revoke) {
			URL.revokeObjectURL(blobURL)
		}

		this.workers[id].onmessage = (e) => {
			this.workerOnMessage(id, e)
		}

		return this.workers[id]
	}

	workerPost (id, message) {
		if (this.workers[id]) {
			this.workers[id].postMessage(message)
		}
	}

	// subclass can overide this to listen to workers
	workerOnMessage (id, e) {}

	// stop a worker
	stopWorker (id) {
		if (this.workers[id]) {
			this.workers[id].terminate()
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

// shims for borked browsers
// =========================

/**
 * Element.requestFullScreen() polyfill
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!Element.prototype.requestFullscreen) {
	Element.prototype.requestFullscreen = Element.prototype.mozRequestFullscreen || Element.prototype.webkitRequestFullscreen || Element.prototype.msRequestFullscreen
}

/**
 * document.fullscreenElement polyfill
 * Adapted from https://shaka-player-demo.appspot.com/docs/api/lib_polyfill_fullscreen.js.html
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!document.fullscreenElement) {
	Object.defineProperty(document, 'fullscreenElement', {
		get: function () {
			return document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement
		}
	})

	Object.defineProperty(document, 'fullscreenEnabled', {
		get: function () {
			return document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitFullscreenEnabled
		}
	})
}

export {
	Sargasso, registerSargassoClass, liveElements, registeredClasses
}
