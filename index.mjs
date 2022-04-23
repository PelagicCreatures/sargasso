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
	from './lib/Sargasso'

import {
	validate, setValidator
}
	from './lib/checkArgs'

import {
	elementTools
}
	from './lib/utils'

import {
	loadPageHandler, bootSargasso
}
	from './lib/boot'

import {
	theObservableObjectWatcher, theDOMWatcher, theScrollWatcher, theResizeWatcher, theOrientationWatcher, theWorkerWatcher
}
	from './lib/Services'

import {
	ObservableObject
}
	from './lib/ObservableObject'

const utils = {
	registerSargassoClass: registerSargassoClass,
	bootSargasso: bootSargasso,
	elementTools: elementTools,
	validate: validate,
	setValidator: setValidator
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