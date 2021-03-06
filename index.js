/*
	Sargasso

	Simple, Fast, Reactive, supervised Javascript controllers for html elements.

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes

	*/

import {
	registerSargassoClass, Sargasso
}
	from './lib/Sargasso.js'

import {
	elementTools
}
	from './lib/utils.js'

import {
	loadPageHandler, bootSargasso
}
	from './lib/boot.js'

import {
	theObservableObjectWatcher, theDOMWatcher, theScrollWatcher, theResizeWatcher, theOrientationWatcher, theWorkerWatcher
}
	from './lib/Services.js'

import {
	ObservableObject
}
	from './lib/ObservableObject'

import {
	html, render
}
	from 'lit-html/lit-html.js'

import {
	repeat
}
	from 'lit-html/directives/repeat.js'
import {
	cache
}
	from 'lit-html/directives/cache.js'
import {
	classMap
}
	from 'lit-html/directives/class-map.js'
import {
	ifDefined
}
	from 'lit-html/directives/if-defined'
import {
	guard
}
	from 'lit-html/directives/guard'
import {
	styleMap
}
	from 'lit-html/directives/style-map.js'
import {
	templateContent
}
	from 'lit-html/directives/template-content'
import {
	unsafeHTML
}
	from 'lit-html/directives/unsafe-html.js'
import {
	until
}
	from 'lit-html/directives/until.js'

const utils = {
	registerSargassoClass: registerSargassoClass,
	bootSargasso: bootSargasso,
	elementTools: elementTools
}

const services = {
	theDOMWatcher: theDOMWatcher,
	theScrollWatcher: theScrollWatcher,
	theResizeWatcher: theResizeWatcher,
	theOrientationWatcher: theOrientationWatcher,
	theWorkerWatcher: theWorkerWatcher,
	theObservableObjectWatcher: theObservableObjectWatcher
}

const lit = {
	html: html,
	render: render,
	repeat: repeat,
	cache: cache,
	classMap: classMap,
	ifDefined: ifDefined,
	guard: guard,
	styleMap: styleMap,
	templateContent: templateContent,
	unsafeHTML: unsafeHTML,
	until: until
}

export {
	Sargasso, utils, loadPageHandler, services, ObservableObject, lit
}
