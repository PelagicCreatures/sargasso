/**
	Utility routines for Sargasso classes
**/

const camelcase = require('lodash/camelCase')

const _hasClass = (element, cssClass) => {
	const className = element.className || ''
	const classes = className.split(/\s+/)
	return classes.indexOf(cssClass) !== -1
}

const _addClass = (element, cssClass) => {
	const className = element.className || ''
	const classes = className.split(/\s+/)
	if (classes.indexOf(cssClass) === -1) {
		classes.push(cssClass)
		element.className = classes.join(' ')
	}
}

const _removeClass = (element, cssClass) => {
	const className = element.className || ''
	const classes = className.split(/\s+/)
	if (classes.indexOf(cssClass) !== -1) {
		classes.splice(classes.indexOf(cssClass), 1)
		element.className = classes.join(' ')
	}
}

const _isVisible = (element) => {
	return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length)
}

const _inViewPort = (element, container = window) => {
	const rect = element.getBoundingClientRect()
	const visible = _isVisible(element)
	const aboveTheTop = (rect.bottom < 0)
	const belowTheFold = (rect.top > (container.innerHeight || document.documentElement.clientHeight))

	return (visible && !belowTheFold && !aboveTheTop)
}

/*
	element: element to apply to
	css: JSON object with properties in kebab-case or camelCase (or even in snake_case and seperate words)
*/
const _css = (element, css) => {
	for (const prop in css) {
		let key = prop
		if (key.match(/_- /)) {
			key = camelcase(prop)
		}
		element.style[key] = css[prop]
	}
}

const elementTools = {
	hasClass: _hasClass,
	addClass: _addClass,
	removeClass: _removeClass,
	isVisible: _isVisible,
	inViewPort: _inViewPort,
	setCSS: _css
}

export {
	elementTools
}
