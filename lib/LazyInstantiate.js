/**
	LazyInstantiate

	Sargasso class watches the document for new content and instantiates
	Sargasso classes liested in element's data-lazy-sargasso-class only when
	the element scrolls into view
**/

import {
	Sargasso, registerSargassoClass, registeredClasses
}
	from './Sargasso'

import {
	elementTools
}
	from './utils'

import {
	theScrollWatcher
}
	from './Services'

class LazyInstantiate extends Sargasso {
	constructor (element, options = {}) {
		options.watchScroll = true
		options.watchResize = true
		super(element, options)
		this.mortal = false
	}

	didResize () {
		super.didResize()
		this.lazyHandler()
	}

	didScroll () {
		super.didScroll()
		this.lazyHandler()
	}

	// watch viewport and instantiate lazy-instantiate-responsive things when visible
	lazyHandler () {
		const els = document.querySelectorAll('[data-lazy-sargasso-class]')
		for (let i = 0; i < els.length; i++) {
			const element = els[i]
			if (theScrollWatcher.inViewPort(element)) {
				const cls = element.getAttribute('data-lazy-sargasso-class').split(/\s*,\s*/)
				for (let j = 0; j < cls.length; j++) {
					const thing = new registeredClasses[cls[j]](els[i])
					thing.start()
				}
				element.removeAttribute('data-lazy-sargasso-class')
			}
		}
	}
}

registerSargassoClass('LazyInstantiate', LazyInstantiate)

export {
	LazyInstantiate
}
