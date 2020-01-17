class myClass extends sargasso.Sargasso {
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
		// define a pointless function
		const mySlowFunction = function (e) {
			const baseNumber = e.data
			let result = 0
			for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {
				result += Math.atan(i) * Math.tan(i)
			};
			postMessage('Done doing pointless math: ' + result)
		}

		const txtFunction = 'onmessage = ' + mySlowFunction.toString()

		// create the worker. managed by sargasso
		const worker = this.startWorker('myworkId', txtFunction)

		// listen to the worker
		worker.onmessage = (e) => {
			const frame = () => {
				this.element.innerHTML = e.data
			}
			this.queueFrame(frame)
		}

		// make the worker work
		worker.postMessage(12)
	}
}

sargasso.registerSargassoClass('myClass', myClass)

const loadPageHandler = sargasso.bootSargasso({
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
