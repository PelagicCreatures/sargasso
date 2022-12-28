/**
	Sargasso

	Base class for responsive Sargasso element controllers. Subclass this to
	define specific behavior. If you mutate the DOM in your code you
	should use frames for best results.

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020-2023 Michael Rhodes
**/

import {
	elementTools
}
	from './utils'

import {
	DOMWatcher, theObservableObjectWatcher, theDOMWatcher, theScrollWatcher, theResizeWatcher, theOrientationWatcher, theWorkerWatcher
}
	from './Services'

import debounce from 'lodash/debounce'

import kebabCase from 'lodash/kebabCase'

import {
	validate
}
	from './checkArgs'

let unique = 0 // unique IDs for controllers
const liveElements = [] // instantiated controllers

const supportsCustomElements = ('customElements' in window) // browser supports custom elements

const registeredClasses = {}

/*
	@function registerSargassoClass
	@param { String } className - name of class
	@param { Object } object - class reference

	All subclasses of Sargasso must register the class so that
	the SargassoSupervisor can instantiate them.

	EG.
		class mySubclass extends Sargasso {}
		registerSargassoClass('mySubclass',mySubclass)

	Then an instance of mySubclass will be instantiated and attached to the element
	whenever it appears in the DOM usind data tag or custom element tag:

		<div data-sargasso-class="mySubclass"></div>

		- or -

		<sargasso-my-subclass></sargasso-my-subclass>

	*/
const registerSargassoClass = (className, object) => {
	if (registeredClasses[className]) {
		throw (new Error('Sargasso class ' + className + ' is already registered.'))
	}

	registeredClasses[className] = object

	if (supportsCustomElements) {
		/*
			for custom html element scheme <sargasso-class-name sargasso-other-class-name></sargasso-class-name>
			we define a factory to build a class that is a subclass of HTMLElement.
			The browser will instantiate this class when the element appears in the DOM
			allowing us to instantiate the required sargasso controller
			and cleanup when the html element is removed from the dom using
			connectedCallback and disconnectedCallback.

			This scheme allows us to keep the namespace of the element unpolluted with
			sargasso properties and methods.
		*/
		const customElementClassFactory =
			`
			return class ${className}Element extends HTMLElement {
				constructor(element, options = {}) {
					super()
					this.helperClass= '${className}'
					this.helpers = []
				}

				connectedCallback () {
					this.helpers.push(new registeredClasses[this.helperClass](this,{isCustomElement:true}))
					if (this.hasAttributes()) {
						for(let i = 0; i < this.attributes.length; i++) {
							if(this.attributes[i].name.match(/^sargasso-/)) {
								let classname = this.attributes[i].name.replace(/^sargasso-/,'').split('-').map(word=> word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('')
								if(!registeredClasses[classname]) {
									console.log('instantiate by attribute ' + this.attributes[i].name + ' > ' + classname + ' is not a sargasso class')
									continue
								}
								this.helpers.push(new registeredClasses[classname](this,{isCustomElement:true}))
							}
						}
					}

					this.helpers.forEach((helper) => {
						helper.start()
					})
				}

				disconnectedCallback () {
					this.helpers.forEach((helper) => {
						helper.sleep()
						helper.destroy()
				 	})
					this.helpers = [] // nuke the reference for trash collection
				}
			}`

		const fn = new Function('registeredClasses', customElementClassFactory)(registeredClasses)

		const options = window.sargassoOptions || {}
		const prefix = typeof options.customElementPrefix !== 'undefined' ? options.customElementPrefix : 'sargasso-'
		customElements.define(prefix + kebabCase(className), fn)
	}
}

// the public event handlers to implement in subclasses
const eventNames = [
	'DOMChanged',
	'didScroll',
	'didResize',
	'didBreakpoint',
	'enterViewport',
	'exitViewport',
	'enterFullscreen',
	'exitFullscreen',
	'newPage',
	'elementEvent',
	'workerOnMessage',
	'observableChanged'
]

/*
	@class Sargasso -  the superclass for all element controllers
	*/
class Sargasso {
	constructor(element, options = {}) {
		validate('Sargasso constructor element', element, ['isDefined', 'isElement'])
		validate('Sargasso constructor options', options, ['isDefined', ['isObject']])

		this.uid = ++unique
		this.element = element
		if (options.shadowDOM) {
			this._shadowDOM = element.attachShadow({
				mode: 'open'
			})
			this._shadowRoot = document.createElement('div')
			this._shadowDOM.append(this._shadowRoot)
			this._hostElement = this.element
			this.element = this._shadowRoot
		}
		this.options = options
		this._pendingAnimationFrame = undefined
		this._frameQueue = []
		this._isInViewport = false
		this._workers = {}
		this._observables = {}
		this._template = undefined
		this._templateArgs = {}
		this._started = false

		this.render = debounce(() => {
			this._render()
		}, 100, {
			maxWait: 250
		})
	}

	/*
		@function start - called when controller is instantiated

		Override this to perform any initialization such as event listeners

		Note: always call super.start() in at the top of your subclass start method
		*/
	start() {
		const registeredResponsiveControllers = this.getMetaData('registeredResponsiveControllers') || []
		registeredResponsiveControllers.push(this)
		this.setMetaData('registeredResponsiveControllers', registeredResponsiveControllers)
		this.setMetaData(this.constructor.name, this)

		liveElements.push(this)

		// if using shadow DOM, build a DOMWatcher to observe changes
		if (this._shadowDOM) {
			if (!this._shadowDOMWatcher) {
				this._shadowDOMWatcher = new DOMWatcher({
					shadowDOM: this._shadowRoot
				})
			}
			this._shadowDOMWatcher.subscribe(this)
		}

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
			}
			else {
				this.elementEvent(e)
			}
		}

		this.element.addEventListener('sargasso', this.elementListener)

		this._started = true
	}

	/*
		@function sleep - override this to clean up any events or references in your subclass

		Called when element has been removed from DOM just before it is destroyed

		Note: always call super.sleep() at the end of your subclass sleep method
		*/
	sleep() {
		if (this._shadowDOM) {
			this._shadowDOMWatcher.unSubscribe(this)
		}

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

		elementTools.offAll(this.element) // remove all dangling event listeners created with on/once

		this._started = false
	}

	/**************************************************************
	EVENT HOOKS - Override these methods in your subclass as needed
	***************************************************************/

	/*
		@function DOMChanged - something changed on the page
		called if options.watchDOM set, override as needed.
		*/
	DOMChanged(root) {}

	/*
		@function didScroll - scroll occured
		called if options.watchScroll set, override as needed.
		*/
	didScroll() {}

	/*
		@function didResize - resize occured
		called if options.watchResize set, override as needed.
		*/
	didResize() {}

	/*
		@function didBreakpoint - new breakpoint, override as needed.
		*/
	didBreakpoint() {}

	/*
		@function enterViewport - element entered the viewport
		called if options.watchViewport set, override as needed.
		*/
	enterViewport() {}

	/*
		@function exitViewport - element exited the viewport
		called if options.watchViewport set, override as needed.
		*/
	exitViewport() {}

	/*
		@function enterFullscreen - element entered fullscreen, override as needed.
		*/
	enterFullscreen() {}

	/*
		@function exitFullscreen - element exited fullscreen, override as needed.
		*/
	exitFullscreen() {}

	/*
		@function newPage - page changed
		@param { String } oldPath - outgoing page
		@param { String } newPath - incoming page
		*/
	newPage(oldPath, newPath) {}

	/*
		@function elementEvent - element received a 'sargasso' custom event from somewhere
		@param { Object } e - event
		*/
	elementEvent(e) {}

	/*
		@function workerOnMessage - listen for worker postMessage event
		@param { String } id - id of worker started with this._workerstart()
		@param { Object } data - data received from worker
		*/
	workerOnMessage(id, data) {}

	/*
		@function observableChange - listen for changes to observable object
		@param { String } id - id of observable
		@param { String } type - type of observable
		@param { String } path - path that changed
		@param { String } newValue - new value
		@param { String } previousValue - old value
		*/
	observableChanged(id, type, path, newValue, previousValue) {
		this.render()
	}

	/****************************************************
	UTILITY METHODS - callable but normally not overriden
	*****************************************************/

	/*
		@function setMetaData - Set metadata. Key value storage implemented as a weakMap
		@param { String } - key name for value
		@param { Object } - value or JSON object, null will remove from key from metadate
		*/
	setMetaData(k, v) {
		elementTools.setMetaData(this.element, k, v)
	}

	/*
		@function getMetaData - Retrieve metadata
		@param { String } key - name of value to return
		@return { Object } if key is found otherwise undefined
		*/
	getMetaData(k) {
		return elementTools.getMetaData(this.element, k)
	}

	/*
		@function on - add delegated event handler for this.element
		@param { String} evt - HTML element event name
		@param { String } selector - optional element query selector
		@param { Function } fn - event handler function
		@param { Object } [options] - for addEventListener
		*/
	on(evt, selector, fn, options) {
		elementTools.on(this.constructor.name + '-' + this.uid, this.element, evt, selector, fn, options)
	}

	/*
		@function off - Remove delegated event handler
		@param { String} evt - HTML element event name
		@param { String } [selector] - element query selector
		*/
	off(evt, selector) {
		elementTools.off(this.constructor.name + '-' + this.uid, this.element, evt, selector)
	}

	/*
		@function once - add delegated event handler for this.element witch executes only once
		@param { String} evt - HTML element event name
		@param { String } selector - optional element query selector
		@param { Function } fn - event handler function
		@param { Object } [options] - for addEventListener
		*/
	once(evt, selector, fn, options) {
		elementTools.once(this.constructor.name + '-' + this.uid, this.element, evt, selector, fn, options)
	}

	/*
		@function notifyAll - broadcast 'event' to all instantiated sargasso controllers
		@param { String } event - name of sargasso event
		@param { Object } params - array of params to attach to event
		*/
	notifyAll(event, params) {
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

	/*
		@function notifyElement - broadcast event to all sargasso controllers for 'this.element'
		@param { String } event - name of sargasso event
		@param { Object } params - array of params to attach to event
		*/
	notifyElement(element, event, params) {
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
		@function queueFrame - schedule a task in the requestAnimation frame event loop
		@param { function } frame - function to execute

		Call this to queue functions that mutate the DOM (make changes to html)

		EG:
		let frame = () => {
			this.element.addClass('big')
		}
		this.queueFrame(frame)

		The frame will then be executed in the next requested animation frame
		*/
	queueFrame(frame) {
		this._frameQueue.push(frame.bind(this))
		if (!this._pendingAnimationFrame) {
			this._pendingAnimationFrame = requestAnimationFrame(() => {
				this._processQueue()
			})
		}
	}

	/*
		@function wantFullscreen - request full screen
		you can call this from a subclass controller such as an 'enlarge to full screen' button
		otherwise if watchOrientation is set it will call this when phone is in landscape
		it would be nice to acually use the experimental requestFullScreen thing but
		you can't do that on rotate at the moment, only on click.
		*/
	wantFullscreen(want) {
		if (want) {
			this.enterFullscreen()
		}
		else {
			this.exitFullscreen()
		}
	}

	/**********************************************************************
	ELEMENT UTILITIES - convienience methods for manipilating HTML elements
	***********************************************************************/

	hasClass(cssClass) {
		return elementTools.hasClass(this.element, cssClass)
	}

	addClass(cssClasses) {
		elementTools.addClass(this.element, cssClasses)
	}

	removeClass(cssClasses) {
		elementTools.removeClass(this.element, cssClasses)
	}

	setCSS(cssObject) {
		elementTools.setCSS(this.element, cssObject)
	}

	isVisible() {
		return elementTools.isVisible(this.element)
	}

	/*
		@function workerStart - start a web worker
		@param { String } id - id of worker
		@param { String | Url } codeOrURL - javascript worker code or url to download shared worker code

		Offload compute heavy tasks to a new thread and listen for result

		Pass it a url of a web worker js file or create an inline web worker
		from string of raw code such as:

		let mycode = `onmessage = function (e) {
			// e.data contains whatever is passed by this.workerPostMessage()

			// do something here

			// when done send message back to sargasso controller:
			postMessage({
				uid: e.data.uid, // ALWAYS pass this back
				result: 'Done doing pointless stuff: ' + e.data.answer
			})
		}`

		this._workerstart('pointless-stuff', mycode)

		this.workerPostMessage('pointless-stuff', {answer:42})

		*/
	workerStart(id, codeOrURL) {
		this._workers[id] = theWorkerWatcher.registerWorker(id, codeOrURL)
		theWorkerWatcher.subscribe(this, id)
		return this._workers[id]
	}

	/*
		@function workerPostMessage - send a message to a running worker
		@param { String } id - id of worker
		@param { Object } message - data to send to worker
		*/
	workerPostMessage(id, message) {
		if (!message.uid) {
			message.uid = this.uid
		}
		if (this._workers[id]) {
			this._workers[id].postMessage(message)
		}
	}

	/************************************************
	observe observable objects
	get or set observable object by unique id
	obj optional external object
	*************************************************/

	getObservable(id) {
		return this._observables[id]
	}

	getObservableData(id) {
		return this._observables[id].data
	}

	observableStart(id, data) {
		theObservableObjectWatcher.subscribe(this, id, data)
		this._observables[id] = theObservableObjectWatcher.getObservable(id)
		return this._observables[id]
	}

	observableStop(id) {
		if (this._observables[id]) {
			theObservableObjectWatcher.unSubscribe(this, id)
			delete this._observables[id]
		}
	}

	observableStopAll() {
		for (const id in this._observables) {
			this.observableStop(id)
		}
	}

	setTemplate(template) {
		this._template = template
	}

	setRenderer(renderer) {
		this.renderer = renderer
	}

	setTemplateArgs(args = {}) {
		this._templateArgs = args
		this.render()
	}

	getTemplateArgs() {
		const args = this._templateArgs || {}
		return JSON.parse(JSON.stringify(args))
	}

	// this.render is a debounced call to this
	_render() {
		if (this._template && this.renderer) {
			this.renderer(this._template(this.getTemplateArgs()), this.element)
		}
	}

	/************************************************
	PRIVATE METHODS: normally not called or overriden
	*************************************************/

	/*
		@function _flushQueue - disgard all pending frames
		*/
	_flushQueue() {
		if (this._pendingAnimationFrame) {
			cancelAnimationFrame(this._pendingAnimationFrame)
			this._pendingAnimationFrame = undefined
		}
		this._frameQueue = []
	}

	/*
		@function _flushQueue - execute pending frames
		*/
	_processQueue() {
		this._pendingAnimationFrame = undefined
		const toProcess = this._frameQueue.slice(0)
		this._frameQueue = []
		for (let i = 0; i < toProcess.length; i++) {
			toProcess[i]()
		}
	}

	/*
		@function _stopWorker - stop a worker
		*/
	_stopWorker(id) {
		if (this._workers[id]) {
			theWorkerWatcher.unSubscribe(this, id)
			delete this._workers[id]
		}
	}

	/*
		@function _stopAllWorkers - cleanup all workers registered by me
		*/
	_stopAllWorkers() {
		for (const worker in this._workers) {
			this._stopWorker(worker)
		}
	}

	/*
		@function destroy - called when this.element is removed from the DOM
		*/
	destroy() {
		this._stopAllWorkers()
		this.observableStopAll()

		this._flushQueue()

		if (this._started) {
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
	}

	/****************************************************
	EVENT HOOK METHODS - normally not called or overriden
	*****************************************************/

	/*
		@function watchDOM - hook called if options.watchDOM set and DOM changed
		*/
	watchDOM(root) {
		if (root === this._shadowRoot) {
			// something happend this element's my shadow DOM, tell in the DOM about it
			// so dom observers can take actions such as instantiating new sargasso
			// controllers, etc.
			theDOMWatcher.observeDOM(this._shadowRoot)
		}
		else {
			this.DOMChanged(root)
		}
	}

	/*
		@function watchScroll - hook called if options.watchScroll set and Scroll Wrapper scrolled
		*/
	watchScroll() {
		if (this.options.watchViewport) {
			this.inViewport()
		}

		this.didScroll()
	}

	/*
		@function watchResize - hook called if options.watchResize set and window changed size
		*/
	watchResize() {
		if (this.options.watchViewport) {
			this.inViewport()
		}

		this.didResize()
	}

	/*
		@function watchOrientation - hook called if options.watchOrientation set and orientation changes
		*/
	watchOrientation() {
		if (window.orientation && (window.orientation === 90 || window.orientation === -90)) {
			this.wantFullscreen(true)
		}
		else {
			this.wantFullscreen(false)
		}
	}

	/*
		@function inViewport - hook called if options.watchViewPort set and this.element enters viewport
		*/
	inViewport() {
		if (theScrollWatcher.inViewPort(this.element)) {
			if (!this._isInViewport) {
				this.enterViewport()
				this._isInViewport = true
			}
		}
		else {
			if (this._isInViewport) {
				this.exitViewport()
				this._isInViewport = false
			}
		}
	}

	/*
		@function workerMessage - hook called when worker posts a message
		*/
	workerMessage(id, e) {
		if (e.data.uid === this.uid) {
			this.workerOnMessage(id, e.data)
		}
	}

	// experimental

	nativeRequestFullScreen() {
		if (document.fullscreenElement) {
			if (document.fullscreenElement === this.element) {
				return
			}
			document.exitFullscreen()
		}

		this.element.requestFullscreen()
	}

	nativeExitFullScreen() {
		if (document.fullscreenElement && document.fullscreenElement === this.element) {
			document.exitFullscreen()
		}
	}
}

registerSargassoClass('Sargasso', Sargasso)

export {
	Sargasso, registerSargassoClass, liveElements, registeredClasses
}
