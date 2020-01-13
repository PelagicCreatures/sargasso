/**
	SargassoSupervisor

	Sargasso class which watches the document for new content and instantiates
	Sargasso classes liested in element's data-sargasso-class attribute.
	Once instantiated, Sargasso objects are trash collected when element is
	removed from the DOM
**/

import {
	Sargasso, registerSargassoClass, liveElements, registeredClasses
}
	from './Sargasso'

import {
	LazyInstantiate
}
	from './LazyInstantiate'

class SargassoSupervisor extends Sargasso {
	constructor (element, options = {}) {
		super(element, {
			watchDOM: true
		})
		this.mortal = false
		this.lazy = new LazyInstantiate(element, options)
	}

	start () {
		this.lazy.start()
		super.start()
	}

	instantiate (element) {
		const cls = element.getAttribute('data-sargasso-class').split(/\s*,\s*/)
		for (let i = 0; i < cls.length; i++) {
			try {
				const thing = new registeredClasses[cls[i]](element)
				thing.start()
			} catch (e) {
				console.log('error instantiating ' + cls[i], e, registeredClasses)
			}
		}

		element.removeAttribute('data-sargasso-class')
	}

	newPage () {
		this.doIt()
	}

	DOMChanged () {
		this.doIt()
	}

	doIt () {
		const elements = document.querySelectorAll('[data-sargasso-class]')
		for (const element of elements) {
			this.instantiate(element)
		}

		// check for dangling live elements and kill them
		const toCleanup = []
		for (let i = 0; i < liveElements.length; i++) {
			if (liveElements[i].mortal && !document.body.contains(liveElements[i].element)) {
				toCleanup.push(liveElements[i])
			}
		}
		for (let i = 0; i < toCleanup.length; i++) {
			toCleanup[i].destroy()
		}
	}
}

registerSargassoClass('SargassoSupervisor', SargassoSupervisor)

export {
	SargassoSupervisor
}
