/*
	Shared event observers used by Sargasso classes.

	When these observers have subscribers they watch for events
	and notify the subscriber's specific event handler
	method when they occur.

	Subscribers to these services must imlement handler methods
	EG. watchDOM, watchScroll, watchResize, watchOrientation
*/

import {
	elementTools
}
	from './utils'

const debounce = require('lodash/debounce')

const tracing = false
const trace = (obj, message, blob) => {
	console.log(obj.constructor.name, obj.uid, message, blob || null)
}

class ObserverSubscriptionManager {
	constructor (options) {
		this.options = options
		this.observers = []
		this.pendingAnimationFrame = undefined
		this.frameQueue = []
	}

	subscribe (observer) {
		if (!this.observers.length) {
			this.wakeup()
		}
		this.observers.push(observer)
	}

	unSubscribe (observer) {
		if (tracing) trace(this, 'unSubscribe', observer)

		if (this.observers.indexOf(observer) !== -1) {
			this.observers.splice(this.observers.indexOf(observer), 1)
		}

		if (!this.observers.length) {
			this.sleep()
		}
	}

	sleep () {
		if (tracing) trace(this, 'sleep')
	}

	wakeup () {
		if (tracing) trace(this, 'wakeup')
	}

	notifyObservers (event) {
		for (let i = 0; i < this.observers.length; i++) {
			if (this.observers[i][event]) {
				this.observers[i][event]()
			}
		}
	}

	flushQueue () {
		if (this.pendingAnimationFrame) {
			cancelAnimationFrame(this.pendingAnimationFrame)
			this.pendingAnimationFrame = undefined
		}
		this.frameQueue = []
	}

	queueFrame (frame) {
		this.frameQueue.push(frame.bind(this))
		if (!this.pendingAnimationFrame) {
			this.pendingAnimationFrame = requestAnimationFrame(() => {
				this.processQueue()
			})
		}
	}

	processQueue () {
		this.pendingAnimationFrame = undefined
		var toProcess = this.frameQueue.slice(0)
		this.frameQueue = []
		for (var i = 0; i < toProcess.length; i++) {
			toProcess[i]()
		}
	}
}

class DOMWatcher extends ObserverSubscriptionManager {
	constructor (options) {
		super(options)

		// debounce - just need to know if a change occured, not every change
		this.mutationHandler = debounce((mutations, observer) => {
			this.observeDOM(mutations, observer)
		}, 100, {
			maxWait: 250
		})

		this.mutationObserver = new MutationObserver(this.mutationHandler, false)
	}

	subscribe (observer) {
		super.subscribe(observer)
		observer.watchDOM()
	}

	wakeup () {
		super.wakeup()
		this.mutationObserver.observe(document.body, {
			childList: true,
			subtree: true
		})
	}

	sleep () {
		super.sleep()
		this.mutationObserver.disconnect()
	}

	observeDOM () {
		this.notifyObservers('watchDOM')
	}
}

class ScrollWatcher extends ObserverSubscriptionManager {
	constructor (options) {
		super(options)

		this.scrollElement = this.options.scrollElement || window
		this.lastscroll = this.scrollTop()
		this.scrolling = false

		// use 'scroll' event to start scroll loop unless it's already looping
		this.trigger = () => {
			if (!this.scrolling) {
				this.scrollLoop()
			}
		}

		this.scrollLoop = () => {
			if (this.lastscroll !== this.scrollTop()) { // are we still scrolling?
				this.scrolling = true
				this.lastscroll = this.scrollTop()
				this.watchScroll() // tell our observers
				const frame = () => {
					this.scrollLoop()
				}
				this.queueFrame(frame)
			} else {
				this.scrolling = false // exit the scroll loop and wait for next 'scroll' event
			}
		}
	}

	subscribe (observer) {
		super.subscribe(observer)
		observer.watchScroll()
	}

	wakeup () {
		super.wakeup()
		this.scrollElement.addEventListener('scroll', this.trigger, false)
	}

	sleep () {
		super.sleep()
		this.scrollElement.removeEventListener('scroll', this.trigger)
	}

	inViewPort (element) {
		return elementTools.inViewPort(element, this.scrollElement)
	}

	watchScroll () {
		this.notifyObservers('watchScroll')
	}

	scrollTop (newTop) {
		if (newTop !== undefined) {
			this.scrollElement.scrollTop = newTop
		} else {
			return this.scrollElement.scrollTop
		}
	}
}

class ResizeWatcher extends ObserverSubscriptionManager {
	constructor (options) {
		super(options)

		this.debounce = debounce(() => {
			this.watchResize()
		}, 250)
	}

	subscribe (observer) {
		super.subscribe(observer)
		observer.watchResize()
	}

	wakeup () {
		super.wakeup()
		window.addEventListener('resize', this.debounce, false)
	}

	sleep () {
		super.sleep()
		window.removeEventListener('resize', this.debounce)
	}

	watchResize () {
		this.notifyObservers('watchResize')
	}
}

class OrientationWatcher extends ObserverSubscriptionManager {
	constructor (options) {
		super(options)

		if ('onorientationchange' in window) {
			elementTools.addClass(document.body, 'have-orientation')
		} else {
			elementTools.addClass(document.body, 'no-orientation')
		}

		this.debounce = debounce(() => {
			this.watchOrientation()
		}, 250)
	}

	subscribe (observer) {
		super.subscribe(observer)
		observer.watchOrientation()
	}

	wakeup () {
		super.wakeup()
		if ('onorientationchange' in window) {
			window.addEventListener('orientationchange', this.debounce, false)
		}
	}

	sleep () {
		super.sleep()
		if ('onorientationchange' in window) {
			window.removeEventListener('orientationchange', this.debounce)
		}
	}

	watchOrientation () {
		this.notifyObservers('watchOrientation')
	}
}

// build subscription services

let theDOMWatcher, theScrollWatcher, theResizeWatcher, theOrientationWatcher

const startServices = (options) => {
	theDOMWatcher = new DOMWatcher(options)
	theScrollWatcher = new ScrollWatcher(options)
	theResizeWatcher = new ResizeWatcher(options)
	theOrientationWatcher = new OrientationWatcher(options)
}

export {
	startServices, theDOMWatcher, theScrollWatcher, theResizeWatcher, theOrientationWatcher
}
