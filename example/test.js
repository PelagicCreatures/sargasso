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
		}
		this.queueFrame(frame)
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
