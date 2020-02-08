const elementTools = PelagicCreatures.Sargasso.utils.elementTools
const testElement = document.getElementById('test-element')

describe('Sargasso', function () {
	it('utils.hasClass', function () {
		expect(elementTools.hasClass(testElement, 'test-class')).to.be.false
	})
	it('utils.addClass', function () {
		elementTools.addClass(testElement, 'test-class')
		elementTools.addClass(testElement, 'test-class2')
		expect(elementTools.hasClass(testElement, 'test-class')).to.be.true
		expect(elementTools.hasClass(testElement, 'test-class2')).to.be.true
	})
	it('utils.removeClass', function () {
		elementTools.removeClass(testElement, 'test-class')
		expect(elementTools.hasClass(testElement, 'test-class')).to.be.false
		expect(elementTools.hasClass(testElement, 'test-class2')).to.be.true
		elementTools.removeClass(testElement, 'test-class2')
		expect(elementTools.hasClass(testElement, 'test-class2')).to.be.false
	})
	it('utils.isVisible', function () {
		expect(elementTools.isVisible(testElement)).to.be.true
		elementTools.addClass(testElement, 'hidden-display')
		expect(elementTools.isVisible(testElement)).to.be.false
		elementTools.removeClass(testElement, 'hidden-display')
	})
	it('utils.inViewPort', function () {
		expect(elementTools.inViewPort(testElement)).to.be.true
		elementTools.addClass(testElement, 'offscreen')
		expect(elementTools.inViewPort(testElement)).to.be.false
		elementTools.removeClass(testElement, 'offscreen')
	})
	it('utils.css', function () {
		const css = {
			backgroundColor: 'black',
			color: 'red',
			'border-color': 'pink',
			margin: 0
		}
		elementTools.setCSS(testElement, css)
		expect(testElement.style.backgroundColor, 'background-color').to.equal('black')
		expect(testElement.style.color, 'color').to.equal('red')
		expect(testElement.style.borderColor, 'border-color').to.equal('pink')
		expect(testElement.style.margin, 'margin').to.equal('0px')
	})
	it('utils.setMetaData', function () {
		elementTools.setMetaData(testElement, 'key', 'test')
		expect(elementTools.getMetaData(testElement, 'key')).to.equal('test')
		elementTools.setMetaData(testElement, 'key')
		expect(elementTools.getMetaData(testElement, 'key')).to.be.an('undefined')
	})
	it('util.on util.off', function () {
		const fn = sinon.spy()

		// test un delegated events
		elementTools.on('myid', testElement, 'click', null, fn)
		testElement.click()
		expect(fn.called).to.be.true

		fn.resetHistory()
		elementTools.off('myid', testElement, 'click', null)
		testElement.click()
		expect(fn.called).to.be.false

		// test delegated events
		fn.resetHistory()
		elementTools.on('myid', testElement, 'click', '.nested-element', fn)
		testElement.click() // click on container (ignored)
		document.querySelectorAll('.nested-element')[0].click()
		document.querySelectorAll('.nested-element')[1].click()
		expect(fn.callCount).to.equal(2)

		fn.resetHistory()
		elementTools.off('myid', testElement, 'click', '.nested-element')
		document.querySelectorAll('.nested-element')[0].click()
		document.querySelectorAll('.nested-element')[1].click()
		expect(fn.callCount).to.equal(0)
	})

	/*
		this exercises a lot of stuff
			class registration
			custom element registration
			custom element callbacks connectedCallback and disconnectedCallback
			class start, stop and destroy
	*/
	it('Sargasso instantiate/destroy using custom element tag', function () {
		let instantiated = false
		let start = false
		let sleep = false
		let destroy = false

		class InstrumentedSubclass extends PelagicCreatures.Sargasso.Sargasso {
			constructor () {
				super()
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
		const myClassInstance = elementTools.getMetaData(myElement, 'MyClass')
		expect(instantiated).to.be.true
		expect(start).to.be.true

		testElement.innerHTML = ''
		expect(sleep).to.be.true
		expect(destroy).to.be.true
	})
})
