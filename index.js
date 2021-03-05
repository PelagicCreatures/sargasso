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
	litHTML
}
	from './lib/dependencies'

const utils = {
	registerSargassoClass: registerSargassoClass,
	bootSargasso: bootSargasso,
	elementTools: elementTools,
	litHTML: litHTML
}

const services = {
	theDOMWatcher: theDOMWatcher,
	theScrollWatcher: theScrollWatcher,
	theResizeWatcher: theResizeWatcher,
	theOrientationWatcher: theOrientationWatcher,
	theWorkerWatcher: theWorkerWatcher,
	theObservableObjectWatcher: theObservableObjectWatcher
}

export {
	Sargasso, utils, loadPageHandler, services, ObservableObject
}
