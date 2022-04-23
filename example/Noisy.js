import {
	Sargasso, registerSargassoClass
}
	from '../lib/Sargasso'

class Noisy extends Sargasso {
	constructor (element, options = {}) {
		super(element, {
			watchDOM: true,
			watchScroll: true,
			watchResize: true,
			watchViewport: true,
			watchOrientation: true
		})

		this.instrument = {}
		let logIt = []
		if (this.element.getAttribute('data-log-it')) {
			logIt = this.element.getAttribute('data-log-it').split(/[ ,]+/)
		}
		logIt.forEach((k) => {
			this.instrument[k] = true
		})

		if (this.instrument.constructor) {
			this.logIt('constructor')
		}
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
		if (this.instrument.sleep) {
			this.logIt('sleep')
		}
	}

	destroy () {
		if (this.instrument.destroy) {
			this.logIt('will destroy')
		}
		super.destroy()
	}

	DOMChanged (root) {
		if (this.instrument.DOMChanged) {
			this.logIt('DOMChanged', root)
		}
		super.DOMChanged(root)
	}

	didScroll () {
		if (this.instrument.didScroll) {
			this.logIt('didScroll')
		}
		super.didScroll()
	}

	didResize () {
		if (this.instrument.didResize) {
			this.logIt('didResize')
		}
		super.didResize()
	}

	enterViewport () {
		if (this.instrument.enterVireport) {
			this.logIt('enterViewport')
		}
		super.enterViewport()
	}

	exitViewport () {
		if (this.instrument.exitViewport) {
			this.logIt('exitViewport')
		}
		super.exitViewport()
	}

	enterFullscreen () {
		if (this.instrument.enterFullscreen) {
			this.logIt('enterFullscreen')
		}
		super.enterFullscreen()
	}

	exitFullscreen () {
		if (this.instrument.exitFullscreen) {
			this.logIt('exitFullscreen')
		}
		super.exitFullscreen()
	}

	newPage (old, newPage) {
		if (this.instrument.newPage) {
			this.logIt('newPage')
		}
		super.newPage()
	}

	didBreakpoint () {
		if (this.instrument.didBreakpoint) {
			this.logIt('didBreakpoint')
		}
		super.didBreakpoint()
	}

	elementEvent (e) {
		if (this.instrument.elementEvent) {
			this.logIt('elementEvent')
		}
		super.elementEvent()
	}

	workerOnMessage (id, data) {
		if (this.instrument.workerOnMessage) {
			this.logIt('workerOnMessage ' + id + ' worker says ' + data.count)
		}
		super.workerOnMessage(id, data)
	}

	stopWorker (id) {
		if (this.instrument.stopWorker) {
			this.logIt('stopWorker ' + id)
		}
		super.stopWorker(id)
	}

	logIt (message) {
		if (document.getElementById('debug') && message !== 'DOMChanged') {
			document.getElementById('debug').append(this.constructor.name + ' ' + this.element.id + ' ' + message + '\n')
		} else {
			console.log(this.constructor.name, this.element.id, this.uid, message)
		}
	}
}

registerSargassoClass('Noisy', Noisy)

export {
	Noisy
}
