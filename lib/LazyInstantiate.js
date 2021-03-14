/**
	LazyInstantiate

	Sargasso class watches the document for new content and instantiates
	Sargasso classes liested in element's data-lazy-sargasso-class only when
	the element scrolls into view

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes
**/

import {
	Sargasso, registerSargassoClass, registeredClasses
}
	from './Sargasso.js'

import {
	elementTools
}
	from './utils.js'

import {
	theScrollWatcher
}
	from './Services.js'

class LazyInstantiate extends Sargasso {
	constructor (element, options = {}) {
		options.watchScroll = true
		options.watchResize = true
		options.watchDOM = true
		options.immortal = true
		super(element, options)
	}

	didResize () {
		super.didResize()
		this.lazyHandler()
	}

	didScroll () {
		super.didScroll()
		this.lazyHandler()
	}

	DOMChanged (root) {
		super.DOMChanged(root)
		this.lazyHandler(root)
	}

	// watch viewport and instantiate lazy-instantiate-responsive things when visible
	lazyHandler (root = document) {
		const els = root.querySelectorAll('[data-lazy-sargasso-class]')
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
