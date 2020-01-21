import {
	Sargasso, registerSargassoClass
}
	from './Sargasso.js'

class Noisy extends Sargasso {
	constructor (element, options = {}) {
		super(element, {
			watchDOM: true,
			watchScroll: true,
			watchResize: true,
			watchViewport: true,
			watchOrientation: true
		})
		this.logIt('constructor')
	}

	start () {
		super.start()
		this.logIt('start')

		const task = `let counters= {}
			onmessage = async (e) => {
				if(!counters[e.data.uid]) { counters[e.data.uid] = e.data.count }

				setInterval(()=>{
					self.postMessage({ uid: e.data.uid, count: ++counters[e.data.uid] })
				},4000)
			}`

		this.workerStart('noisy', task)

		this.workerPostMessage('noisy', {
			count: 0
		})
	}

	sleep () {
		super.sleep()
		this.logIt('sleep')
	}

	destroy () {
		this.logIt('destroy')
		super.destroy()
	}

	DOMChanged () {
		super.DOMChanged()
		this.logIt('DOMChanged')
	}

	didScroll () {
		super.didScroll()
		this.logIt('didScroll')
	}

	didResize () {
		super.didResize()
		this.logIt('didResize')
	}

	enterViewport () {
		super.enterViewport()
		this.logIt('enterViewport')
	}

	exitViewport () {
		super.exitViewport()
		this.logIt('exitViewport')
	}

	enterFullscreen () {
		super.enterFullscreen()
		this.logIt('enterFullscreen')
	}

	exitFullscreen () {
		super.exitFullscreen()
		this.logIt('exitFullscreen')
	}

	newPage (old, newPage) {
		super.newPage()
		this.logIt('newPage')
	}

	didBreakpoint () {
		super.didBreakpoint()
		this.logIt('didBreakpoint')
	}

	elementEvent (e) {
		super.elementEvent()
		this.logIt('elementEvent')
	}

	workerOnMessage (id, data) {
		this.logIt('workerOnMessage ' + id + ' slowly counting... ' + data.count)
		super.workerOnMessage(id, data)
	}

	stopWorker (id) {
		this.logIt('stopWorker ' + id)
		super.stopWorker(id)
	}

	logIt (message) {
		console.log(this.constructor.name, this.element.id, this.uid, message)
	}
}

registerSargassoClass('Noisy', Noisy)

export {
	Noisy
}
