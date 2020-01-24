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
	SargassoSupervisor
}
	from './lib/SargassoSupervisor.js'

import {
	Breakpoints, materialBreakpoints
}
	from './lib/Breakpoints.js'

import {
	HijaxLoader
}
	from './lib/HijaxLoader.js'

import {
	startServices
}
	from './lib/Services.js'

import {
	elementTools
}
	from './lib/utils.js'

let loadPage

const bootSargasso = (options = {}) => {
	startServices(options)
	const supervisor = new SargassoSupervisor(document.body, options)
	supervisor.start(options)
	if (options.breakpoints) {
		const breakpoints = new Breakpoints(document.body, options.breakpoints)
		breakpoints.start()
	}
	if (options.hijax) {
		const hijax = new HijaxLoader(document.body, options.hijax)
		hijax.start()
		loadPage = hijax.setPage.bind(hijax)
	} else {
		loadPage = (url) => {
			document.location.href = url
		}
	}

	return loadPage
}

// don't really like this but the only way I can find that allows a common scope
// for es6 and cjs bundles... TODO: revisit this
if (window) {
	window.Sargasso = Sargasso
	window.registerSargassoClass = registerSargassoClass
	window.bootSargasso = bootSargasso
	window.elementTools = elementTools
}

export {
	Sargasso, registerSargassoClass, bootSargasso, elementTools
}
