import camelCase from 'lodash/camelCase'

import debounce from 'lodash/debounce'

import kebabCase from 'lodash/kebabCase'

import isEqual from 'lodash/isEqual'

import Cookies from 'js-cookie'

import {
	html, render
}
	from 'lit-html/lit-html.js'

/*
	import {
		asyncReplace
	}
		from 'lit-html/directives/async-replace.js'

	import {
		asyncAppend
	}
		from 'lit-html/directives/async-append.js'
*/
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
	repeat
}
	from 'lit-html/directives/repeat'

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
	unsafeSVG
}
	from 'lit-html/directives/unsafe-svg'

import {
	until
}
	from 'lit-html/directives/until.js'

const litHTML = {
	html: html,
	render: render,
	cache: cache,
	classMap: classMap,
	ifDefined: ifDefined,
	guard: guard,
	repeat: repeat,
	styleMap: styleMap,
	templateContent: templateContent,
	unsafeHTML: unsafeHTML,
	until: until
}

export {
	camelCase, debounce, kebabCase, isEqual, Cookies, litHTML
}
