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
	from './Sargasso.js'

import {
	elementTools
}
	from './utils.js'

import Cookies from 'es-cookie'

const materialBreakpoints = [{
	className: 'screen-xs',
	maxWidth: 599
}, {
	className: 'screen-sm',
	maxWidth: 1023
}, {
	className: 'screen-md',
	maxWidth: 1439
}, {
	className: 'screen-lg',
	maxWidth: 1999
}, {
	className: 'screen-xl',
	maxWidth: undefined
}]

class Breakpoints extends Sargasso {
	constructor (element, options = {}) {
		options.watchResize = true
		super(element, options)

		if (options.widths) {
			this.options.widths = options.widths
		} else {
			this.options.widths = materialBreakpoints
		}

		this.scale = undefined
		this.disabled = false
		this.forceScale = undefined
		this.orientation = undefined

		this.widths = []
		this.classes = []
	}

	start () {
		super.start()
		let css = '.show-hide{display:none;}\n'
		this.widths.push(0)
		for (let i = 0; i < this.options.widths.length; i++) {
			if (this.options.widths[i].maxWidth) {
				this.widths.push(this.options.widths[i].maxWidth)
			}
			this.classes.push(this.options.widths[i].className)

			css += '.' + this.options.widths[i].className + ' .hidden-' + this.options.widths[i].className + '{display:none;}\n'
			css += '.not-' + this.options.widths[i].className + ' .hidden-not-' + this.options.widths[i].className + '{display:none;}\n'
			css += '.' + this.options.widths[i].className + ' .shown-' + this.options.widths[i].className + '{display:block;}\n'
			css += '.not-' + this.options.widths[i].className + ' .shown-not-' + this.options.widths[i].className + '{display:block;}\n'
		}

		const style = document.createElement('style')
		style.type = 'text/css'
		style.innerHTML = css
		document.getElementsByTagName('head')[0].appendChild(style)
		this.detectGeometry()
	};

	didResize () {
		super.didResize()
		this.detectGeometry()
	}

	disableResponsive (scale) {
		elementTools.addClass(document.body, 'disable-responsive')
		this.disabled = true
		this.forceScale = scale
		this.detectGeometry()
	}

	enableResponsive () {
		elementTools.removeClass(document.body, 'disable-responsive')
		this.disabled = false
		this.forceScale = ''
		this.detectGeometry()
	}

	detectGeometry () {
		let newScale = this.classes[this.widths.length - 1]

		if (this.disabled) {
			newScale = this.forceScale
		} else {
			const ww = window.innerWidth
			const wh = window.innerHeight
			if (wh > ww) {
				if (this.orientation !== 'portrait') {
					const frame = () => {
						elementTools.removeClass(document.body, 'landscape')
						elementTools.addClass(document.body, 'portrait')
					}
					this.queueFrame(frame)
					this.orientation = 'portrait'
				}
			} else {
				if (this.orientation !== 'landscape') {
					const frame = () => {
						elementTools.removeClass(document.body, 'portrait')
						elementTools.addClass(document.body, 'landscape')
					}
					this.queueFrame(frame)
					this.orientation = 'landscape'
				}
			}
			for (let i = 0; i < this.widths.length - 1; i++) {
				if (ww >= this.widths[i] && ww < this.widths[i + 1]) {
					newScale = this.classes[i]
					break
				}
			}
		}

		let changed = 0

		if (newScale !== this.scale) {
			++changed
			const frame = () => {
				for (let i = 0; i < this.classes.length; i++) {
					if (this.classes[i] !== newScale) {
						elementTools.addClass(document.body, 'not-' + this.classes[i])
						elementTools.removeClass(document.body, this.classes[i])
						elementTools.removeClass(document.body, 'shown-' + this.classes[i])
						elementTools.removeClass(document.body, 'hidden-' + this.classes[i])
					} else {
						elementTools.removeClass(document.body, 'not-' + this.classes[i])
					}
				}
				elementTools.addClass(document.body, newScale)
				elementTools.addClass(document.body, 'shown-' + newScale)
				elementTools.addClass(document.body, 'hidden-' + newScale)

				this.notifyAll('didBreakpoint', [newScale])
			}
			this.queueFrame(frame)
		}

		this.scale = newScale

		if (changed) {
			this.setHints()
		}
	}

	setHints () {
		let classes = ''

		if (this.scale) {
			if (classes) {
				classes += ' '
			}
			classes += this.scale
		}

		if (classes !== this.getCookie('responsive')) {
			this.setCookie('responsive', classes)
		}
	};

	getCookie (key) {
		return Cookies.get(key)
	};

	setCookie (key, value, expires) {
		const options = {
			path: '/',
			domain: this.options.cookieDomain || null,
			expires: expires
		}
		Cookies.set(key, value, options)
	};

	deleteCookie (key) {
		this.setCookie(key, null)
	};
};

registerSargassoClass('Breakpoints', Breakpoints)

export {
	Breakpoints, materialBreakpoints
}
