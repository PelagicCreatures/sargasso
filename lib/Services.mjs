/**
	Shared event observers used by Sargasso classes.

	When these observers have subscribers they watch for events
	and notify the subscriber's specific event handler
	method when they occur.

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020-2023 Michael Rhodes

	Subscribers to these services must imlement handler methods
	EG. watchDOM, watchScroll, watchResize, watchOrientation
**/

import {
	elementTools
}
	from './utils'

import debounce from 'lodash/debounce'

import {
	ObservableObject, getObservable
}
	from './ObservableObject'

let theDOMWatcher
let theScrollWatcher
let theResizeWatcher
let theOrientationWatcher
let theWorkerWatcher
let theObservableObjectWatcher

class ObserverSubscriptionManager {
	constructor (options) {
		this.options = options
		this.observers = []
		this.pendingAnimationFrame = undefined
		this.frameQueue = []
		this.sleeping = true
	}

	subscribe (observer) {
		if (!this.observers.length && this.sleeping) {
			this.wakeup()
		}
		this.observers.push(observer)
	}

	unSubscribe (observer) {
		if (this.observers.indexOf(observer) !== -1) {
			this.observers.splice(this.observers.indexOf(observer), 1)
		}

		if (!this.observers.length) {
			this.sleep()
		}
	}

	sleep () {
		this.sleeping = true
	}

	wakeup () {
		this.sleeping = false
	}

	notifyObservers (event, params) {
		for (let i = 0; i < this.observers.length; i++) {
			if (this.observers[i][event]) {
				this.observers[i][event].apply(this.observers[i], params || [])
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
		const toProcess = this.frameQueue.slice(0)
		this.frameQueue = []
		for (let i = 0; i < toProcess.length; i++) {
			toProcess[i]()
		}
	}
}

class DOMWatcher extends ObserverSubscriptionManager {
	constructor (options = {}) {
		super(options)

		// debounce - just need to know if a change occured, not every change
		this.mutationHandler = debounce((mutations, observer) => {
			this.observeDOM(this.options.shadowDOM || document.body)
		}, 25, {
			maxWait: 100
		})

		this.mutationObserver = new MutationObserver(this.mutationHandler, false)
	}

	subscribe (observer) {
		super.subscribe(observer)
		observer.watchDOM(this.options.shadowDOM || document.body)
	}

	wakeup () {
		super.wakeup()
		this.mutationObserver.observe(this.options.shadowDOM || document.body, {
			childList: true,
			subtree: true
		})
	}

	sleep () {
		super.sleep()
		this.mutationObserver.disconnect()
	}

	observeDOM (root) {
		this.notifyObservers('watchDOM', [root || this.options.shadowDOM || document.body])
	}
}

class ScrollWatcher extends ObserverSubscriptionManager {
	constructor (options = {}) {
		super(options)

		this.scrollElement = this.options.scrollElement || window
		this.lastscroll = 0
		this.scrolling = false
	}

	// use 'scroll' event to start scroll loop unless it's already looping
	trigger () {
		if (!this.scrolling) {
			this.scrollLoop()
		}
	}

	scrollLoop () {
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

	setOptions (options = {}) {
		this.sleep()
		this.scrollElement = options.scrollElement || window
		this.wakeup()
	}

	subscribe (observer) {
		super.subscribe(observer)
		observer.watchScroll()
	}

	wakeup () {
		super.wakeup()
		elementTools.on('theScrollWatcher', this.scrollElement, 'scroll', () => {
			this.trigger()
		})
	}

	sleep () {
		super.sleep()
		elementTools.off('theScrollWatcher', this.scrollElement, 'scroll')
	}

	inViewPort (element) {
		return elementTools.inViewPort(element, this.scrollElement)
	}

	watchScroll () {
		this.notifyObservers('watchScroll')
	}

	scrollTop (newTop) {
		if (this.scrollElement === window) {
			if (newTop !== undefined) {
				window.scrollTo(0, newTop)
			} else {
				return window.pageYOffset
			}
		} else {
			if (newTop !== undefined) {
				this.scrollElement.scrollTop = newTop
			} else {
				return this.scrollElement.scrollTop
			}
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

// keep track of who is using web workers and
// cleanup dangling worker when no subscribers remain
class WorkerWatcher extends ObserverSubscriptionManager {
	constructor (options) {
		super(options)
		this.workers = {}
	}

	registerWorker (id, codeOrURL) {
		if (!this.workers[id]) {
			// create a worker for the id if worker id is unknown

			let blobURL = codeOrURL

			let revoke = false
			if (!codeOrURL.match(/^(http|\/)/i)) {
				const blob = new Blob([codeOrURL], {
					type: 'text/javascript'
				})
				blobURL = URL.createObjectURL(blob)
				revoke = true
			}

			this.workers[id] = {
				worker: new Worker(blobURL),
				observers: []
			}

			if (revoke) {
				URL.revokeObjectURL(blobURL)
			}

			this.workers[id].worker.onmessage = (e) => {
				this.workerMessage(id, e)
			}
		}

		return this.workers[id].worker
	}

	subscribe (observer, id) {
		if (!this.workers[id]) {
			throw (new Error('worker ' + id + ' does not exist'))
		}
		const workerObservers = this.workers[id].observers
		workerObservers.push(observer)
		super.subscribe(observer)
	}

	unSubscribe (observer, id) {
		if (!this.workers[id]) {
			throw (new Error('worker ' + id + ' does not exist'))
		}

		const workerObservers = this.workers[id].observers
		if (workerObservers.indexOf(observer) !== -1) {
			workerObservers.splice(workerObservers.indexOf(observer), 1)
		}

		if (!workerObservers.length) {
			this.workers[id].worker.terminate()
			delete this.workers[id]
		}

		super.unSubscribe(observer)
	}

	workerMessage (id, e) {
		const workerObservers = this.workers[id].observers
		workerObservers.forEach((observer) => {
			if (observer.workerMessage) {
				observer.workerMessage(id, e)
			}
		})
	}

	wakeup () {
		super.wakeup()
	}

	sleep () {
		super.sleep()
	}
}

class ObservableObjectWatcher extends ObserverSubscriptionManager {
	constructor (options) {
		super(options)
		this.registeredObservableObjects = {}
	}

	getObservable (id) {
		return this.registeredObservableObjects[id] ? this.registeredObservableObjects[id].observable : undefined
	}

	observableStart (id, data) {
		const foundObservable = getObservable(id)

		// trying to define with data but already exists
		if (foundObservable && data !== undefined) {
			throw (new Error('ObservableObject ' + id + ' already exists, can\'t build.'))
		}

		if (!this.registeredObservableObjects[id]) { // not already managing observable
			if (foundObservable) { // add to service
				this.registeredObservableObjects[id] = {
					id: id,
					observable: foundObservable,
					observers: [],
					managed: false
				}
			} else { // make it
				this.registeredObservableObjects[id] = {
					id: id,
					observable: new ObservableObject(id, data),
					observers: [],
					managed: true
				}
			}
			this.registeredObservableObjects[id].observable.bind(this.constructor.name, this.notify.bind(this))
		}

		return this.registeredObservableObjects[id].observable
	}

	// delete an observable
	observableDestroy (id) {
		if (!this.registeredObservableObjects[id]) {
			throw (new Error('ObservableObject observableDestroy ' + id + ' does not exist'))
		}
		this.registeredObservableObjects[id].observable.unbind(this.constructor.name)
		this.registeredObservableObjects[id].observable.destroy()
		delete this.registeredObservableObjects[id]
	}

	subscribe (observer, id, data) {
		if (!this.registeredObservableObjects[id]) {
			this.observableStart(id, data)
		}
		this.registeredObservableObjects[id].observers.push(observer)
		super.subscribe(observer)
	}

	unSubscribe (observer, id) {
		if (!this.registeredObservableObjects[id]) {
			throw (new Error('ObservableObject unSubscribe ' + id + ' does not exist'))
		}

		const observers = this.registeredObservableObjects[id].observers
		if (observers.indexOf(observer) !== -1) {
			observers.splice(observers.indexOf(observer), 1)
		}

		if (!observers.length && this.registeredObservableObjects[id].managed) {
			this.observableDestroy(id)
		}

		super.unSubscribe(observer)
	}

	notify (id, type, path, newValue, previousValue) {
		if (!this.registeredObservableObjects[id]) {
			throw (new Error('ObservableObject notify ' + id + ' does not exist'))
		}
		const observers = this.registeredObservableObjects[id].observers
		observers.forEach((observer) => {
			if (observer.observableChanged) {
				observer.observableChanged(id, type, path, newValue, previousValue)
			}
		})
	}
}

// build subscription services

theDOMWatcher = new DOMWatcher()
theScrollWatcher = new ScrollWatcher()
theResizeWatcher = new ResizeWatcher()
theOrientationWatcher = new OrientationWatcher()
theWorkerWatcher = new WorkerWatcher()
theObservableObjectWatcher = new ObservableObjectWatcher()

export {
	DOMWatcher, theObservableObjectWatcher, theDOMWatcher, theScrollWatcher, theResizeWatcher, theOrientationWatcher, theWorkerWatcher
}
