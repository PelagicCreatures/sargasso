class myClass extends sargasso.Sargasso {
	constructor (element, options = {}) {
		options.watchViewport = true
		super(element, options)
	}

	enterViewport () { // do some stuff such as modify element html or classes
		const frame = () => {
			this.element.innerHTML = '<p>Hello There Viewport! Starting offloaded task in web worker so things are still responsive here.'
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
		// do something lots of times
	}
	postMessage('done counting to ' + e.data)
}`
		const worker = this.startWorker('myworkId', code)
		worker.onmessage = (e) => {
			this.element.innerHTML = e.data
			this.stopWorker('myworkId')
		}
		worker.postMessage(10000000)
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
