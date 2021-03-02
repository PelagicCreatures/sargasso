import {
	SargassoSupervisor
}
	from './SargassoSupervisor.js'

import {
	Breakpoints
}
	from './Breakpoints.js'

import {
	HijaxLoader
}
	from './HijaxLoader.js'

import {
	theScrollWatcher
}
	from './Services.js'

let loadPageHandler

const bootSargasso = (options = {}) => {
	if (options.scrollElement) {
		theScrollWatcher.setOptions(options)
	}
	if (options.breakpoints) {
		const breakpoints = new Breakpoints(document.body, options.breakpoints)
		breakpoints.start()
	}
	if (options.hijax) {
		const hijax = new HijaxLoader(document.body, options.hijax)
		hijax.start()
		loadPageHandler = hijax.setPage.bind(hijax)
	} else {
		loadPageHandler = (url) => {
			document.location.href = url
		}
	}

	const supervisor = new SargassoSupervisor(document.body, options)
	supervisor.start(options)
}

export {
	loadPageHandler, bootSargasso
}
