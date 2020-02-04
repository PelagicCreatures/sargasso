/*
	example ES6 app entrypoint for bundling a site app
*/

import {
	Sargasso, utils, loadPageHandler
}
	from '../index.js' // or more likely from '@pelagiccreatures/sargasso'

import {
	Noisy
}
	from '../lib/Noisy.js'

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

	workerOnMessage (id, data) {
		if (id === 'myworkId') {
			const frame = () => {
				this.element.innerHTML = data.result
			}
			this.queueFrame(frame)
		}
		super.workerOnMessage(id, data)
	}
}

utils.registerSargassoClass('myClass', myClass)

class MyButtonClass extends Sargasso {
	constructor (element, options = {}) {
		options.watchViewport = true // tell me when I am visible
		super(element, options) // important!
	}

	// listen for click
	start () {
		super.start() // important!
		this.clicker = (e) => {
			this.clicked()
		}
		this.element.addEventListener('click', this.clicker, false)
	}

	// cleanup listener
	sleep () {
		this.element.removeEventListener('click', this.clicker)
		super.sleep() // important!
	}

	// use an animation frame to mutate the DOM
	clicked () {
		const frame = () => { // set up a DOM mutation
			this.addClass('clicked')
			this.element.textContent = 'Clicked!'
		}
		this.queueFrame(frame) // schedule it
	}

	enterViewport () {
		// do some stuff such as modify element html or classes
		const frame = () => {
			this.element.textContent = 'Hello viewport! Click me!'
		}
		this.queueFrame(frame)
	}
}

utils.registerSargassoClass('MyButtonClass', MyButtonClass)

utils.bootSargasso({
	hijax: {
		onError: (level, message) => {
			alert('hijax error: ' + message)
		},
		onLoading: function () {},
		onExitPage: () => {
			utils.elementTools.off('myid', document.body, 'click', '.event-target')
		},
		onEnterPage: () => {}
	},
	breakpoints: {},
	scrollElement: document.getElementById('scroll-wrapper')
})

utils.elementTools.on('myid', document.body, 'click', '.event-target', (e) => {
	console.log('delegated')
}, true)

utils.elementTools.on('myid', document.querySelector('.event-target'), 'click', '', (e) => {
	console.log('undelegated')
}, true)

window.loadPageHandler = loadPageHandler
