/**
	Utility routines for Sargasso classes

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes
**/

import {
	camelCase
}
	from './dependencies'

const elementMetaData = new WeakMap()

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
	let belowTheFold

	if (container.self === window) {
		belowTheFold = (rect.top > (window.innerHeight || document.documentElement.clientHeight))
	} else {
		belowTheFold = (rect.top > container.clientHeight)
	}

	// console.log('_inViewPort', visible, belowTheFold, aboveTheTop)

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
			key = camelCase(prop)
		}
		element.style[key] = css[prop]
	}
}

const _setMetaData = (element, k, v) => {
	const data = elementMetaData.get(element) || {}
	if (v) {
		data[k] = v
	} else {
		delete data[k]
	}
	elementMetaData.set(element, data)
}

const _getMetaData = (element, k) => {
	const data = elementMetaData.get(element) || {}
	return data[k]
}

function isFunction (fn) {
	return fn && {}.toString.call(fn) === '[object Function]'
}

const on = function (container, events, selector, fn) {
	const k = 'on:' + events + '-' + selector
	const handler = (e) => {
		if (isFunction(selector)) { // no selector, 3rd param is function
			fn = selector
			if (e.target === container) {
				fn(e)
			}
		} else {
			Array.from(container.querySelectorAll(selector)).forEach((el) => {
				if (e.target === el) {
					fn(e)
				}
			})
		}
	}
	_setMetaData(container, k, handler)
	events.split(/[\s,]+/).forEach((evt) => {
		container.addEventListener(evt, handler)
	})
}

const off = function (container, events, selector) {
	const k = 'on:' + events + '-' + selector
	const handler = _getMetaData(container, k)
	if (handler) {
		events.split(/[\s,]+/).forEach((evt) => {
			container.removeEventListener(evt, handler)
		})
		_setMetaData(container, k)
	}
}

const elementTools = {
	hasClass: _hasClass,
	addClass: _addClass,
	removeClass: _removeClass,
	isVisible: _isVisible,
	inViewPort: _inViewPort,
	setCSS: _css,
	setMetaData: _setMetaData,
	getMetaData: _getMetaData,
	on: on,
	off: off
}

export {
	elementTools
}
