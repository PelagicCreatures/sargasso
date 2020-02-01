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

const utils = {
	registerSargassoClass: registerSargassoClass,
	bootSargasso: bootSargasso,
	elementTools: elementTools,
	loadPageHandler: loadPageHandler
}

export {
	Sargasso, utils
}
