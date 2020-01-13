/*
	Sargasso

	Simple, Fast, Reactive, supervised Javascript controllers for html elements.

	* @author Michael Rhodes (except where noted)
	* @license MIT
	* Made in Barbados 🇧🇧

	*/

import {
	registerSargassoClass, Sargasso
}
	from './lib/Sargasso'

import {
	SargassoSupervisor
}
	from './lib/SargassoSupervisor'

import {
	Breakpoints, materialBreakpoints
}
	from './lib/Breakpoints'

import {
	HijaxLoader
}
	from './lib/HijaxLoader'

import {
	LazyBackground
}
	from './lib/LazyBackground'

import {
	startServices
}
	from './lib/Services'

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

export {
	Sargasso,
	registerSargassoClass,
	bootSargasso
}
