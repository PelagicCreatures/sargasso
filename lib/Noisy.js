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
		this.logIt('start')
		super.start()
		const task = `let counters= {}
			onmessage = async (e) => {
				if(!counters[e.data.uid]) { counters[e.data.uid] = e.data.count }

				setInterval(()=>{
					self.postMessage({ uid: e.data.uid, count: ++counters[e.data.uid] })
				},30000)
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
		this.logIt('will destroy')
		super.destroy()
	}

	DOMChanged () {
		this.logIt('DOMChanged')
		super.DOMChanged()
	}

	didScroll () {
		this.logIt('didScroll')
		super.didScroll()
	}

	didResize () {
		this.logIt('didResize')
		super.didResize()
	}

	enterViewport () {
		this.logIt('enterViewport')
		super.enterViewport()
	}

	exitViewport () {
		this.logIt('exitViewport')
		super.exitViewport()
	}

	enterFullscreen () {
		this.logIt('enterFullscreen')
		super.enterFullscreen()
	}

	exitFullscreen () {
		this.logIt('exitFullscreen')
		super.exitFullscreen()
	}

	newPage (old, newPage) {
		this.logIt('newPage')
		super.newPage()
	}

	didBreakpoint () {
		this.logIt('didBreakpoint')
		super.didBreakpoint()
	}

	elementEvent (e) {
		this.logIt('elementEvent')
		super.elementEvent()
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
