import {
	Sargasso, registerSargassoClass, bootSargasso
}
	from '../index.js'

class myClass extends Sargasso {
	constructor (element, options = {}) {
		options.watchViewport = true
		super(element, options)
	}

	enterViewport () { // do some stuff such as modify element html or classes
		const frame = () => {
			this.element.innerHTML = '<p>Hello There Viewport! Now starting an offloaded task in web worker so things are still responsive here while I think.'
			this.element.style.color = 'red'
			this.addClass('animated')
			this.addClass('tada')
		}
		this.queueFrame(frame)
		this.offLoadTask()
	}

	offLoadTask () {
		// create the worker. managed by sargasso
		this.workerStart('myworkId', '/test-worker.js')

		// make the worker do work
		this.workerPostMessage('myworkId', {
			power: 12
		})
	}

	workerOnMessage (id, e) {
		if (id === 'myworkId') {
			const frame = () => {
				this.element.innerHTML = e.data.result
			}
			this.queueFrame(frame)
		}
		super.workerOnMessage(id, e)
	}
}

registerSargassoClass('myClass', myClass)

const loadPageHandler = bootSargasso({
	hijax: {
		onError: (level, message) => {
			alert('hijax error: ' + message)
		},
		onLoading: function () {},
		onExitPage: () => {},
		onEnterPage: () => {}
	},
	breakpoints: {},
	scrollElement: document.getElementById('scroll-wrapper')
})

export {
	loadPageHandler
}
