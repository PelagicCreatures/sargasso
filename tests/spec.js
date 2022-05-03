

function makeNode(html) {
	const e = document.createElement('div')
	e.innerHTML = html
	return e.firstChild
}
/*
	container
		test element <- undelegated event
			nested element <- delegated event
				deep nested element
			nested element <- delegated event
*/

function wait(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


describe('Sargasso', function () {


	const testElement = document.createElement('div')
	testElement.setAttribute('id', 'test-element')
	const testElement1 = document.createElement('div')
	const nestedElement = document.createElement('div')
	const nestedElement2 = document.createElement('div')
	const deepNestedElement = document.createElement('div')
	nestedElement.appendChild(deepNestedElement)

	const container = document.getElementById('test-container')
	container.appendChild(testElement)
	testElement.appendChild(nestedElement)
	testElement.appendChild(nestedElement2)
	nestedElement.classList.add('nested-element')
	nestedElement2.classList.add('nested-element')


	it('utils.hasClass', function (done) {
		expect(SargassoModule.utils.elementTools.hasClass(testElement, 'test-class')).to.be.false
		setImmediate(done)
	})

	it('utils.addClass', function (done) {
		SargassoModule.utils.elementTools.addClass(testElement, 'test-class')
		SargassoModule.utils.elementTools.addClass(testElement, ['test-class2', 'test-class3'])
		expect(SargassoModule.utils.elementTools.hasClass(testElement, 'test-class')).to.be.true
		expect(SargassoModule.utils.elementTools.hasClass(testElement, 'test-class2')).to.be.true
		expect(SargassoModule.utils.elementTools.hasClass(testElement, 'test-class3')).to.be.true
		setImmediate(done)
	})

	it('utils.removeClass', function (done) {
		SargassoModule.utils.elementTools.removeClass(testElement, 'test-class')
		expect(SargassoModule.utils.elementTools.hasClass(testElement, 'test-class')).to.be.false
		expect(SargassoModule.utils.elementTools.hasClass(testElement, 'test-class2')).to.be.true
		SargassoModule.utils.elementTools.removeClass(testElement, ['test-class2', 'test-class3'])
		expect(SargassoModule.utils.elementTools.hasClass(testElement, 'test-class2')).to.be.false
		expect(SargassoModule.utils.elementTools.hasClass(testElement, 'test-class3')).to.be.false
		setImmediate(done)
	})

	it('utils.css', function (done) {
		let css = {
			backgroundColor: 'rgb(238, 238, 238)',
			color: 'black',
			'border-color': 'pink'
		}
		SargassoModule.utils.elementTools.setCSS(testElement, css)
		expect(testElement.style.backgroundColor, 'background-color').to.equal('rgb(238, 238, 238)')
		expect(testElement.style.color, 'color').to.equal('black')
		expect(testElement.style.borderColor, 'border-color').to.equal('pink')

		css = {
			backgroundColor: '',
			color: '',
			'border-color': ''
		}
		SargassoModule.utils.elementTools.setCSS(testElement, css)

		expect(testElement.style.backgroundColor).to.equal('')
		expect(testElement.style.color).to.equal('')
		expect(testElement.style.borderColor).to.equal('')

		setImmediate(done)
	})

	it('utils.setMetaData utils.getMetaData', function (done) {
		SargassoModule.utils.elementTools.setMetaData(testElement, 'key', 'test')
		expect(SargassoModule.utils.elementTools.getMetaData(testElement, 'key')).to.equal('test')
		SargassoModule.utils.elementTools.setMetaData(testElement, 'key')
		expect(SargassoModule.utils.elementTools.getMetaData(testElement, 'key')).to.be.an('undefined')
		setImmediate(done)
	})

	it('utils.isVisible', function (done) {
		expect(SargassoModule.utils.elementTools.isVisible(testElement)).to.be.true
		SargassoModule.utils.elementTools.addClass(testElement, 'hidden-display')
		expect(SargassoModule.utils.elementTools.isVisible(testElement)).to.be.false
		SargassoModule.utils.elementTools.removeClass(testElement, 'hidden-display')
		setImmediate(done)
	})

	it('utils.inViewPort', function (done) {
		expect(SargassoModule.utils.elementTools.inViewPort(testElement)).to.be.false
		window.scrollTo(0, window.innerHeight)
		expect(SargassoModule.utils.elementTools.inViewPort(testElement)).to.be.true
		window.scrollTo(0, 0)
		setImmediate(done)
	})

	it('utils.on undelegated', function (done) {
		const fn = sinon.spy()

		// on
		// test undelegated events - should see a click on the element or any of its child elements
		SargassoModule.utils.elementTools.on('myid', testElement, 'click', fn)
		testElement.click()
		expect(fn.called).to.be.true

		fn.resetHistory()
		nestedElement.click()
		expect(fn.callCount).to.equal(1)

		fn.resetHistory()
		nestedElement2.click()
		expect(fn.callCount).to.equal(1)

		fn.resetHistory()
		deepNestedElement.click()
		expect(fn.callCount).to.equal(1)
		setImmediate(done)
	})

	it('utils.off', function (done) {
		const fn = sinon.spy()

		// off
		fn.resetHistory()
		SargassoModule.utils.elementTools.off('myid', testElement, 'click')
		testElement.click()
		expect(fn.called).to.be.false
		setImmediate(done)
	})

	it('utils.once', function (done) {
		const fn = sinon.spy()

		// test once events are removed after trigger
		fn.resetHistory()
		SargassoModule.utils.elementTools.once('myid', testElement, 'click', fn)
		testElement.click()
		expect(fn.called).to.be.true

		fn.resetHistory()
		testElement.click()
		expect(fn.called).to.be.false
		setImmediate(done)
	})

	it('utils.on delegated', function (done) {
		const fn = sinon.spy()

		// test delegated events
		SargassoModule.utils.elementTools.on('myid', testElement, 'click', '.nested-element', fn)

		fn.resetHistory()
		testElement.click()
		expect(fn.callCount).to.equal(0)

		fn.resetHistory()
		nestedElement.click()
		expect(fn.callCount).to.equal(1)

		fn.resetHistory()
		deepNestedElement.click()
		expect(fn.callCount).to.equal(1)

		fn.resetHistory()
		nestedElement2.click()
		expect(fn.callCount).to.equal(1)

		fn.resetHistory()
		SargassoModule.utils.elementTools.off('myid', testElement, 'click', '.nested-element')
		nestedElement.click()
		nestedElement2.click()
		expect(fn.callCount).to.equal(0)
		setImmediate(done)
	})

	it('utils.offAll', function (done) {
		const fn = sinon.spy()

		// offAll - remove all sargasso handlers from element
		SargassoModule.utils.elementTools.on('myid', testElement, 'click', fn)
		SargassoModule.utils.elementTools.on('myid2', testElement, 'click', '.nested-element', fn)
		SargassoModule.utils.elementTools.once('myid3', testElement, 'click', fn)
		SargassoModule.utils.elementTools.offAll(testElement)
		fn.resetHistory()
		testElement.click()
		nestedElement.click()
		nestedElement2.click()
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

		class InstrumentedSubclass extends SargassoModule.Sargasso {
			constructor(element, options) {
				super(element, options)
				instantiated = true
			}

			start() {
				super.start()
				start = true
				setTimeout(() => {
					this.element.remove()
				}, 0)
			}

			sleep() {
				sleep = true
				super.sleep()
			}

			destroy() {
				destroy = true
				super.destroy()
				expect(instantiated).to.be.true
				expect(start).to.be.true
				expect(sleep).to.be.true
				expect(destroy).to.be.true
				done()
			}
		}

		SargassoModule.utils.registerSargassoClass('InstrumentedSubclass', InstrumentedSubclass)

		container.appendChild(makeNode('<sargasso-instrumented-subclass></sargasso-instrumented-subclass>'))
	})

	/*
			excercises
				Supervisor instantiate by data-sargasso-class w/multiple classes
		*/
	it('Sargasso Supervisor Instantiate 2 Sargasso classes by data-sargasso-class', function (done) {
		let count = 0

		class InstrumentedSupervisorTest extends SargassoModule.Sargasso {
			start() {
				super.start()
				if (++count === 2) {
					this.element.remove()
					done()
				}
			}
		}

		class InstrumentedSupervisorTest1 extends SargassoModule.Sargasso {
			start() {
				super.start()
				if (++count === 2) {
					this.element.remove()
					done()
				}
			}
		}

		SargassoModule.utils.registerSargassoClass('InstrumentedSupervisorTest', InstrumentedSupervisorTest)
		SargassoModule.utils.registerSargassoClass('InstrumentedSupervisorTest1', InstrumentedSupervisorTest1)
		container.appendChild(makeNode('<div data-sargasso-class="InstrumentedSupervisorTest,InstrumentedSupervisorTest1"></div>'))
	})

	/*
		excercises
			LazyInstantiate - insert element and scroll it into viewport to instantiate it
	*/
	it('Sargasso LazyInstantiate by data-lazy-sargasso-class', function (done) {
		class InstrumentedLazyTest extends SargassoModule.Sargasso {
			start() {
				super.start()
				window.scrollTo(0, 0)
				this.element.remove()
				done()
			}
		}
		SargassoModule.utils.registerSargassoClass('InstrumentedLazyTest', InstrumentedLazyTest)
		container.appendChild(makeNode('<div data-lazy-sargasso-class="InstrumentedLazyTest"></div>'))
		window.scrollTo(0, window.innerHeight)
	})

	/*
		exercises:
			ObserverSubscriptionManager subscribe, unsubscribe
			ScrollWatcher scroll trigger and watch loop
		 	Sargasso.watchScroll, Sargasso.didScroll callback handling
	*/
	it('Sargasso watchScroll', function (done) {
		class InstrumentedScrollClass extends SargassoModule.Sargasso {
			constructor(element, options) {
				super(element, {
					watchScroll: true
				})
				this.triggered = false
			}

			didScroll() {
				window.scrollTo(0, 0)
				if (!this.triggered) {
					this.triggered = true
					done()
				}
			}
		}
		SargassoModule.utils.registerSargassoClass('InstrumentedScrollClass', InstrumentedScrollClass)
		container.appendChild(makeNode('<sargasso-instrumented-scroll-class></sargasso-instrumented-scroll-class>'))
		window.scrollTo(0, 10)
	})

	it('Sargasso watchDOM', function (done) {
		class InstrumentedDOMClass extends SargassoModule.Sargasso {
			constructor(element, options) {
				super(element, {
					watchDOM: true
				})
				this.triggered = false
			}

			start() {
				super.start()
				container.appendChild(makeNode('<p></p>'))
			}

			DOMChanged() {
				if (!this.triggered) {
					this.triggered = true
					done()
				}
			}
		}

		SargassoModule.utils.registerSargassoClass('InstrumentedDOMClass', InstrumentedDOMClass)
		container.appendChild(makeNode('<sargasso-instrumented-dom-class></sargasso-instrumented-dom-class>'))
	})

	it('Sargasso watchResize', function (done) {
		class InstrumentedResizeClass extends SargassoModule.Sargasso {
			constructor(element, options) {
				super(element, {
					watchResize: true
				})
				this.triggered = false
			}

			start() {
				super.start()
				window.dispatchEvent(new Event('resize'))
			}

			didResize() {
				if (!this.triggered) {
					this.triggered = true
					done()
				}
			}
		}

		SargassoModule.utils.registerSargassoClass('InstrumentedResizeClass', InstrumentedResizeClass)
		container.appendChild(makeNode('<sargasso-instrumented-resize-class></sargasso-instrumented-resize-class>'))
	})

	it('Sargasso ObservableObject primitive', function (done) {
		const args = {
			hello: 'World!'
		}
		const observed = new SargassoModule.ObservableObject('shared-data', args)

		const count = {connect:0,update:0,disconnect:0}
		observed.bind('test-bind-1', (id, type, path, newValue, previousValue) => {
			++count[type]
		})

		observed.bind('test-bind-2', (id, type, path, newValue, previousValue) => {
			++count[type]
		})

		observed.bind('test-bind-3', (id, type, path, newValue, previousValue) => {
			++count[type]
		}, 'hello')

		expect(Object.keys(observed.bound['*']).length).to.equal(2)
		expect(Object.keys(observed.bound.hello).length).to.equal(1)

		expect(count['connect']).to.equal(3)

		observed.data.hello += '!'

		wait(10).then(()=>{
			expect(count['update']).to.equal(3)

			observed.unbind('test-bind-1')
			observed.unbind('test-bind-2')
			observed.unbind('test-bind-3', 'hello')

			observed.data.hello += '!'

			wait(10).then(()=>{
				expect(Object.keys(observed.bound['*']).length).to.equal(0)
				expect(count['update']).to.equal(3)
				done()
			})
		})
	})

	it('Sargasso observable', function (done) {
		const count = {connect:0,add:0,disconnect:0}
		class InstrumentedDOMClass extends SargassoModule.Sargasso {
			observableChanged(id, type, path, newValue, previousValue) {
				++count[type]
			}
		}

		const o = new InstrumentedDOMClass(document.createElement('div'))

		const observed = o.observableStart('observeable-id')

		observed.data.test = 1

		wait(10).then(()=>{
			expect(count['add']).to.equal(1)
			o.destroy()
			expect(SargassoModule.services.theObservableObjectWatcher.observers.length).to.equal(0)
			done()
		})
	})

	/*
		excercises
			HijaxLoader
	*/
	it('Sargasso HijaxLoader', function (done) {
		class InstrumentedHijaxClass extends SargassoModule.Sargasso {
			start() {
				super.start()
				SargassoModule.loadPageHandler('./page1.html')
			}

			newPage(oldPage, newPage) {
				if (newPage === '/tests/page1.html') {
					document.getElementById('back-link').click()
					this.element.remove()
					done()
				}
			}
		}
		SargassoModule.utils.registerSargassoClass('InstrumentedHijaxClass', InstrumentedHijaxClass)
		container.appendChild(makeNode('<sargasso-instrumented-hijax-class id="my-hijax-element"></sargasso-instrumented-hijax-class>'))
	})
})
