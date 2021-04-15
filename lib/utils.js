/**
	Utility routines for Sargasso classes

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes
**/

import camelCase from 'lodash/camelCase'

import {
	validate
}
from './checkArgs'

const elementMetaData = new WeakMap()

const hasClass = (element, cssClass) => {
	validate('hasClass element', element, ['isDefined', 'isElement'])
	validate('hasClass cssClass', cssClass, ['isDefined', 'notEmpty', 'isString'])
	const className = element.className || ''
	const classes = className.split(/\s+/)
	return classes.indexOf(cssClass) !== -1
}

// addClasses can be:
// a string 'someclass'
// a list delimited by comma or space 'class1 class3 class4'
// an array ['class1','class2']
const addClass = (element, addClasses) => {
	validate('addClass element', element, ['isDefined', 'isElement'])
	validate('addClass addClasses', addClasses, ['isDefined', 'notEmpty', ['isString', 'isArray']])

	const className = element.className || ''
	const classes = className.split(/\s+/)

	if (!Array.isArray(addClasses)) {
		addClasses = addClasses.split(/[\s,]/)
	}

	addClasses.forEach((c) => {
		c = c.trim()
		if (classes.indexOf(c) === -1) {
			classes.push(c)
		}
	})

	element.className = classes.join(' ')
}

// removeClasses can be:
// a string 'someclass'
// a list delimited by comma or space 'class1 class3 class4'
// an array ['class1','class2']
const removeClass = (element, removeClasses) => {
	validate('removeClass element', element, ['isDefined', 'isElement'])
	validate('removeClass removeClasses', removeClasses, ['isDefined', 'notEmpty', ['isString', 'isArray']])

	const className = element.className || ''
	const classes = className.split(/\s+/)

	if (!Array.isArray(removeClasses)) {
		removeClasses = removeClasses.split(/[\s,]/)
	}

	removeClasses.forEach((c) => {
		c = c.trim()
		if (classes.indexOf(c) !== -1) {
			classes.splice(classes.indexOf(c), 1)
		}
	})

	element.className = classes.join(' ')
}

const isVisible = (element) => {
	validate('isVisible element', element, ['isDefined', 'isElement'])

	return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length)
}

const inViewPort = (element, container = window) => {
	validate('inViewPort element', element, ['isDefined', 'isElement'])

	const rect = element.getBoundingClientRect()
	const visible = isVisible(element)
	const aboveTheTop = (rect.bottom < 0)
	let belowTheFold

	if (container.self === window) {
		belowTheFold = (rect.top > (window.innerHeight || document.documentElement.clientHeight))
	}
	else {
		belowTheFold = (rect.top > container.clientHeight)
	}

	return (visible && !belowTheFold && !aboveTheTop)
}

/*
	element: element to apply to
	css: JSON object with properties in kebab-case or camelCase (or even in snake_case and seperate words)
*/

const css = (element, css) => {
	validate('css element', element, ['isDefined', 'isElement'])
	validate('css css', css, ['isDefined', ['isObject']])

	for (const prop in css) {
		if (Object.prototype.hasOwnProperty.call(css, prop)) {
			const key = camelCase(prop)
			element.style[key] = css[prop] !== null ? css[prop] : null
		}
	}
}

const setMetaData = (element, k, v) => {
	validate('setMetaData element', element, ['isDefined', 'isElement'])
	validate('setMetaData k', k, ['isDefined', 'isString'])

	const data = elementMetaData.get(element) || {}
	if (v) {
		data[k] = v
	}
	else {
		delete data[k]
	}
	elementMetaData.set(element, data)
}

const getMetaData = (element, k) => {
	validate('getMetaData element', element, ['isDefined', 'isElement'])
	validate('getMetaData k', k, ['isDefined', 'isString'])

	const data = elementMetaData.get(element) || {}
	if (k) {
		return data[k]
	}
	else {
		return data
	}
}

const on = function (uid, container, events, selector, fn, options, once) {
	// selector is optional
	if (typeof selector === 'function') {
		once = options
		options = fn
		fn = selector
		selector = undefined
	}
	validate('on uid', uid, ['isDefined', 'notEmpty'])
	validate('on container', container, ['isDefined', 'isEventTarget'])
	validate('on events', events, ['isDefined', 'isString'])
	validate('on fn', fn, ['isDefined', 'isFunction'])
	validate('on selector', selector, [
		['isEmpty', 'isString']
	])

	const k = 'on:' + uid + '-' + events + '-' + selector

	if (getMetaData(container, k)) { // duplicate event handler.
		console.error('Error: Sargasso utils.on: duplicate event handler specification. %o %s', container, k)
		return
	}

	const handler = (e) => {
		if (once) {
			off(uid, container, events, selector)
		}

		if (!selector) {
			fn(e)
		}
		else {
			Array.from(container.querySelectorAll(selector)).forEach((el) => {
				if (e.target === el || el.contains(e.target)) {
					fn(e, el)
				}
			})
		}
	}

	// store handler spec in metadata so we can gracefully remove it later
	const data = {
		uid: uid,
		events: events,
		selector: selector || undefined,
		fn: handler,
		options: options || false
	}

	setMetaData(container, k, data)

	events.split(/[\s,]+/).forEach((evt) => {
		container.addEventListener(evt.trim(), data.fn, data.options)
	})
}

const off = function (uid, container, events, selector) {
	validate('off uid', uid, ['isDefined', 'notEmpty'])
	validate('off container', container, ['isDefined', 'isEventTarget'])
	validate('off events', events, ['isDefined', 'isString'])
	validate('off selector', selector, [
		['isEmpty', 'isString']
	])

	const k = 'on:' + uid + '-' + events + '-' + selector
	const data = getMetaData(container, k)
	if (data) {
		events.split(/[\s,]+/).forEach((evt) => {
			container.removeEventListener(evt.trim(), data.fn, data.options)
		})
		setMetaData(container, k)
	}
}

// remove all (on,once) event handlers for element
const offAll = function (container) {
	validate('offAll container', container, ['isDefined', 'isEventTarget'])

	const data = elementMetaData.get(container) || {}
	const handlers = []

	for (const k in data) {
		if (Object.prototype.hasOwnProperty.call(data, k)) {
			if (k.match(/^on:/)) {
				handlers.push(k)
			}
		}
	}

	handlers.forEach((k) => {
		off(data[k].uid, container, data[k].events, data[k].selector)
	})
}

const once = function (uid, container, events, selector, fn, options) {
	if (typeof selector === 'function') {
		options = fn
		fn = selector
		selector = undefined
	}
	on(uid, container, events, selector, fn, options, true)
}

const elementTools = {
	hasClass: hasClass,
	addClass: addClass,
	removeClass: removeClass,
	isVisible: isVisible,
	inViewPort: inViewPort,
	setCSS: css,
	setMetaData: setMetaData,
	getMetaData: getMetaData,
	on: on,
	off: off,
	once: once,
	offAll: offAll
}

export {
	elementTools
}
