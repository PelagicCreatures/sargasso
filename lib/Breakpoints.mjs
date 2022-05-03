/**
	Breakpoints

	Sargasso class that maintains css classes on the document body
	to be used in css rules for implementing visibility and
	responsive behavior

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes
**/

import {
	Sargasso, registerSargassoClass
}
	from './Sargasso'

import debounce from 'lodash/debounce'

const materialBreakpoints = window.breakpoints || {
	widths: [{
		className: 'breakpoint-phone',
		maxWidth: 599
	}, {
		className: 'breakpoint-tablet',
		maxWidth: 904
	}, {
		className: 'breakpoint-desktop',
		maxWidth: undefined
	}]
}

class Breakpoints extends Sargasso {
	constructor (element, options = {}) {
		options.watchResize = true
		super(element, options)

		this.options.widths = options.widths || materialBreakpoints

		this.scale = undefined

		this.widths = []
		this.classes = []

		this.debouncedDetectGeometry = debounce(() => {
			this.detectGeometry()
		}, 100, {
			maxWait: 150
		})
	}

	start () {
		super.start()
		this.debouncedDetectGeometry()
	}

	didResize () {
		this.debouncedDetectGeometry()
	}

	detectGeometry () {
		const newScale = window.doBreakpoints(this.options.widths)

		if (newScale !== this.scale) {
			const frame = () => {
				this.notifyAll('didBreakpoint', [newScale])
			}
			this.queueFrame(frame)
		}

		this.scale = newScale
	}
}

registerSargassoClass('Breakpoints', Breakpoints)

export {
	Breakpoints, materialBreakpoints
}
