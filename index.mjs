/*
	Sargasso

	Simple, Fast, Reactive, supervised Javascript controllers for html elements.

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes

	*/

import {
	registerSargassoClass, Sargasso, liveElements, registeredClasses
}
	from './lib/Sargasso'

import {
	validate, setValidator
}
	from './lib/checkArgs'

import {
	elementTools, elementMetaData
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

import {
	SargassoComponent
}
	from './lib/SargassoComponent'

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

const system = {
	liveElements: liveElements,
	registeredClasses: registeredClasses,
	elementMetaData: elementMetaData
}

export {
	Sargasso, utils, loadPageHandler, services, ObservableObject, SargassoComponent, system
}
