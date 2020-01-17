class myClass extends sargasso.Sargasso {
	constructor (element, options = {}) {
		options.watchViewport = true
		super(element, options)
	}

	enterViewport () { // do some stuff such as modify element html or classes
		const frame = () => {
			this.element.innerHTML = '<p>Hello There Viewport!'
			this.element.style.color = 'red'
			this.addClass('animated')
			this.addClass('tada')
			this.offLoadTask()
		}
		this.queueFrame(frame)
	}

	offLoadTask () {
		const code = `onmessage = function(e) {
									console.log('starting web worker work')
									for(let i = 0; i < e.data; i++){
										// do something 100k times
									}
									postMessage({status:'ok'})
								}`
		const worker = this.startWorker('myworkId', code)
		worker.onmessage = function (e) {
			this.element.innerHTML = 'done counting to 100k'
			this.stopWorker('myworkId')
		}
		worker.postMessage(1000000)
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
