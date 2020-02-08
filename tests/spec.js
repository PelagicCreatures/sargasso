describe('Sargasso', function () {
	it('utils.hasClass return false', function () {
		const elementTools = PelagicCreatures.Sargasso.utils.elementTools
		const testElement = document.getElementById('test-element')
		expect(elementTools.hasClass(testElement, 'test-class')).to.be.false
	})
	it('utils.addClass', function () {
		const testElement = document.getElementById('test-element')
		PelagicCreatures.Sargasso.utils.elementTools.addClass(testElement, 'test-class')
		expect(PelagicCreatures.Sargasso.utils.elementTools.hasClass(testElement, 'test-class')).to.be.true
	})
	it('utils.removeClass', function () {
		const testElement = document.getElementById('test-element')
		PelagicCreatures.Sargasso.utils.elementTools.removeClass(testElement, 'test-class')
		expect(PelagicCreatures.Sargasso.utils.elementTools.hasClass(testElement, 'test-class')).to.be.false
	})
	it('utils.isVisible', function () {
		const testElement = document.getElementById('test-element')
		expect(PelagicCreatures.Sargasso.utils.elementTools.isVisible(testElement)).to.be.true
		PelagicCreatures.Sargasso.utils.elementTools.addClass(testElement, 'hidden-display')
		expect(PelagicCreatures.Sargasso.utils.elementTools.isVisible(testElement)).to.be.false
		PelagicCreatures.Sargasso.utils.elementTools.removeClass(testElement, 'hidden-display')
	})
	it('utils.inViewPort', function () {
		const testElement = document.getElementById('test-element')
		expect(PelagicCreatures.Sargasso.utils.elementTools.inViewPort(testElement)).to.be.true
		PelagicCreatures.Sargasso.utils.elementTools.addClass(testElement, 'offscreen')
		expect(PelagicCreatures.Sargasso.utils.elementTools.inViewPort(testElement)).to.be.false
		PelagicCreatures.Sargasso.utils.elementTools.removeClass(testElement, 'offscreen')
	})
	it('utils.css', function () {
		const testElement = document.getElementById('test-element')
		const css = {
			backgroundColor: 'black',
			color: 'red',
			'border-color': 'pink',
			margin: 0
		}
		PelagicCreatures.Sargasso.utils.elementTools.setCSS(testElement, css)
		expect(testElement.style.backgroundColor, 'background-color').to.equal('black')
		expect(testElement.style.color, 'color').to.equal('red')
		expect(testElement.style.borderColor, 'border-color').to.equal('pink')
		expect(testElement.style.margin, 'margin').to.equal('0px')
	})
	it('utils.setMetaData', function () {
		const testElement = document.getElementById('test-element')
		PelagicCreatures.Sargasso.utils.elementTools.setMetaData(testElement, 'key', 'test')
		expect(PelagicCreatures.Sargasso.utils.elementTools.getMetaData(testElement, 'key')).to.equal('test')
		PelagicCreatures.Sargasso.utils.elementTools.setMetaData(testElement, 'key')
		expect(PelagicCreatures.Sargasso.utils.elementTools.getMetaData(testElement, 'key')).to.be.an('undefined')
	})
	it('util.on', function () {
		const testElement = document.getElementById('test-element')
		const fn = sinon.spy()
		PelagicCreatures.Sargasso.utils.elementTools.on('myid', testElement, 'click', null, fn)
		testElement.click()
		expect(fn.called).to.be.true

		fn.resetHistory()
		PelagicCreatures.Sargasso.utils.elementTools.off('myid', testElement, 'click', null)
		testElement.click()
		expect(fn.called).to.be.false
	})
})
