const elementTools = PelagicCreatures.Sargasso.utils.elementTools
const testElement = document.getElementById('test-element')
const testElement1 = document.getElementById('test-element1')
describe('Sargasso', function () {
	it('utils.hasClass', function (done) {
		expect(elementTools.hasClass(testElement, 'test-class')).to.be.false
		setImmediate(done)
	})
	it('utils.addClass', function (done) {
		elementTools.addClass(testElement, 'test-class')
		elementTools.addClass(testElement, 'test-class2')
		expect(elementTools.hasClass(testElement, 'test-class')).to.be.true
		expect(elementTools.hasClass(testElement, 'test-class2')).to.be.true
		setImmediate(done)
	})
	it('utils.removeClass', function (done) {
		elementTools.removeClass(testElement, 'test-class')
		expect(elementTools.hasClass(testElement, 'test-class')).to.be.false
		expect(elementTools.hasClass(testElement, 'test-class2')).to.be.true
		elementTools.removeClass(testElement, 'test-class2')
		expect(elementTools.hasClass(testElement, 'test-class2')).to.be.false
		setImmediate(done)
	})
	it('utils.isVisible', function (done) {
		expect(elementTools.isVisible(testElement)).to.be.true
		elementTools.addClass(testElement, 'hidden-display')
		expect(elementTools.isVisible(testElement)).to.be.false
		elementTools.removeClass(testElement, 'hidden-display')
		setImmediate(done)
	})
	it('utils.inViewPort', function (done) {
		expect(elementTools.inViewPort(testElement)).to.be.true
		elementTools.addClass(document.querySelector('#spacer'), 'below-the-fold')
		expect(elementTools.inViewPort(testElement)).to.be.false
		elementTools.removeClass(document.querySelector('#spacer'), 'below-the-fold')
		setImmediate(done)
	})
	it('utils.css', function (done) {
		const css = {
			backgroundColor: 'rgb(238, 238, 238)',
			color: 'black',
			'border-color': 'pink'
		}
		elementTools.setCSS(testElement, css)
		expect(testElement.style.backgroundColor, 'background-color').to.equal('rgb(238, 238, 238)')
		expect(testElement.style.color, 'color').to.equal('black')
		expect(testElement.style.borderColor, 'border-color').to.equal('pink')
		setImmediate(done)
	})
	it('utils.setMetaData', function (done) {
		elementTools.setMetaData(testElement, 'key', 'test')
		expect(elementTools.getMetaData(testElement, 'key')).to.equal('test')
		elementTools.setMetaData(testElement, 'key')
		expect(elementTools.getMetaData(testElement, 'key')).to.be.an('undefined')
		setImmediate(done)
	})
	it('util.on util.off util.once', function (done) {
		const fn = sinon.spy()

		// test un delegated events
		elementTools.on('myid', testElement, 'click', null, fn)
		testElement.click()
		expect(fn.called).to.be.true

		fn.resetHistory()
		elementTools.off('myid', testElement, 'click', null)
		testElement.click()
		expect(fn.called).to.be.false

		// test once events
		fn.resetHistory()
		elementTools.once('myid', testElement, 'click', null, fn)
		testElement.click()
		expect(fn.called).to.be.true
		fn.resetHistory()
		testElement.click()
		expect(fn.called).to.be.false

		// test delegated events
		fn.resetHistory()
		elementTools.on('myid', testElement, 'click', '.nested-element', fn)
		testElement.click() // click on container (ignored)
		document.querySelectorAll('.nested-element')[0].click()
		document.querySelectorAll('.nested-element')[1].click()
		document.querySelectorAll('.deep-nested-element')[0].click()
		expect(fn.callCount).to.equal(3)

		fn.resetHistory()
		elementTools.off('myid', testElement, 'click', '.nested-element')
		document.querySelectorAll('.nested-element')[0].click()
		document.querySelectorAll('.nested-element')[1].click()
		expect(fn.callCount).to.equal(0)
		setImmediate(done)
	})

	/*
		exercises:
			class registration
			custom element registration
			custom element callbacks connectedCallback and disconnectedCallback
			class start, stop and destroy
	*/
	it('Sargasso instantiate/destroy using custom element tag', function (done) {
		let instantiated = false
		let start = false
		let sleep = false
		let destroy = false
		const didScroll = 0

		class InstrumentedSubclass extends PelagicCreatures.Sargasso.Sargasso {
			constructor (element, options) {
				super(element, {
					watchScroll: true
				})
				instantiated = true
			}

			start () {
				super.start()
				start = true
			}

			sleep () {
				sleep = true
				super.sleep()
			}

			destroy () {
				destroy = true
				super.destroy()
			}
		}

		PelagicCreatures.Sargasso.utils.registerSargassoClass('InstrumentedSubclass', InstrumentedSubclass)
		testElement.innerHTML = '<sargasso-instrumented-subclass id="my-element"></sargasso-instrumented-subclass>'
		const myElement = document.querySelector('#my-element')
		const myClassInstance = elementTools.getMetaData(myElement, 'InstrumentedSubclass')
		expect(instantiated).to.be.true
		expect(start).to.be.true

		testElement.innerHTML = '' // kill it
		expect(sleep).to.be.true
		expect(destroy).to.be.true
		setImmediate(done)
	})

	/*
		exercises:
			ObserverSubscriptionManager subscribe, unsubscribe
			ScrollWatcher scroll trigger and watch loop
		 	Sargasso.watchScroll, Sargasso.didScroll callback handling
	*/
	it('Sargasso watchScroll callback', function (done) {
		let didScroll = 0

		class InstrumentedScrollClass extends PelagicCreatures.Sargasso.Sargasso {
			constructor (element, options) {
				super(element, {
					watchScroll: true
				})
			}

			start () {
				super.start()
			}

			sleep () {
				super.sleep()
			}

			didScroll () {
				++didScroll
				if (didScroll > 1) {
					expect(didScroll).to.equal(2)
					expect(this.scrollTop()).to.equal(10)
					testElement.innerHTML = '' // kill it
					expect(PelagicCreatures.Sargasso.services.theScrollWatcher.observers.length).to.equal(1)
					window.scrollTo(0, 0)
					done()
				}
			}
		}

		PelagicCreatures.Sargasso.utils.registerSargassoClass('InstrumentedScrollClass', InstrumentedScrollClass)
		testElement.innerHTML = '<sargasso-instrumented-scroll-class id="my-element"></sargasso-instrumented-scroll-class>'
		const myElement = document.querySelector('#my-element')
		const myClassInstance = elementTools.getMetaData(myElement, 'InstrumentedScrollClass')
		expect(PelagicCreatures.Sargasso.services.theScrollWatcher.observers.length).to.equal(2)
		expect(didScroll).to.equal(1)
		window.scrollTo(0, 10)
	})

	/*
		excercises
			HijaxLoader
	*/
	it('Sargasso HijaxLoader', function (done) {
		class InstrumentedHijaxClass extends PelagicCreatures.Sargasso.Sargasso {
			newPage (oldPage, newPage) {
				if (newPage === '/tests/page1.html') {
					document.getElementById('back-link').click()
					testElement.innerHTML = '' // kill it
					done()
				}
			}
		}
		PelagicCreatures.Sargasso.utils.registerSargassoClass('InstrumentedHijaxClass', InstrumentedHijaxClass)
		testElement.innerHTML = '<sargasso-instrumented-hijax-class id="my-element"></sargasso-instrumented-hijax-class>'
		const myElement = document.querySelector('#my-element')
		const myClassInstance = elementTools.getMetaData(myElement, 'InstrumentedHijaxClass')
		PelagicCreatures.Sargasso.loadPageHandler('./page1.html')
	})

	/*
		excercises
			Supervisor
	*/
	it('Sargasso Supervisor Instantiate by data-sargasso-class', function (done) {
		class InstrumentedSupervisorTest extends PelagicCreatures.Sargasso.Sargasso {
			start () {
				super.start()
				testElement.innerHTML = '' // kill it
				setImmediate(done)
			}
		}
		PelagicCreatures.Sargasso.utils.registerSargassoClass('InstrumentedSupervisorTest', InstrumentedSupervisorTest)
		testElement.innerHTML = '<div id="my-element" data-sargasso-class="InstrumentedSupervisorTest"></div>'
	})

	/*
		excercises
			LazyInstantiate - insert element and scroll it into viewport to instantiate it
	*/
	it('Sargasso LazyInstantiate by data-lazy-sargasso-class', function (done) {
		class InstrumentedLazyTest extends PelagicCreatures.Sargasso.Sargasso {
			start () {
				super.start()
				testElement.innerHTML = '' // kill it
				window.scrollTo(0, 0)
				done()
			}
		}
		elementTools.addClass(document.querySelector('#spacer'), 'below-the-fold')
		PelagicCreatures.Sargasso.utils.registerSargassoClass('InstrumentedLazyTest', InstrumentedLazyTest)
		testElement.innerHTML = '<div id="my-element" data-lazy-sargasso-class="InstrumentedLazyTest"></div>'
		window.scrollTo(0, window.innerHeight)
	})

	/*
		excercises
			LazyInstantiate - container not visible, instantiate on reveal
	*/
	it('Sargasso LazyInstantiate by data-lazy-sargasso-class in hidden container', function (done) {
		class InstrumentedLazyRevealTest extends PelagicCreatures.Sargasso.Sargasso {
			start () {
				super.start()
				testElement1.innerHTML = '' // kill it
				elementTools.addClass(testElement1, 'hidden-display')
				done()
			}
		}
		PelagicCreatures.Sargasso.utils.registerSargassoClass('InstrumentedLazyRevealTest', InstrumentedLazyRevealTest)
		testElement1.innerHTML = '<div id="my-element" data-lazy-sargasso-class="InstrumentedLazyRevealTest"></div>'
		elementTools.removeClass(testElement1, 'hidden-display')
	})
})
