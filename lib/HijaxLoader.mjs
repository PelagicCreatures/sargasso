/**
	HijaxLoader

	Sargasso class that captures links on the page and loads pages
	using AJAX only replacing elements on the page that are marked
	with data-hijax attributes.

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020-2023 Michael Rhodes
**/

import {
	Sargasso, registerSargassoClass
}
	from './Sargasso'

import {
	elementTools
}
	from './utils'

import {
	theScrollWatcher
}
	from './Services'

class HijaxLoader extends Sargasso {
	constructor (element, options = {}) {
		options.watchDOM = true
		options.immortal = true
		super(element, options)
		this.excludeRegex = new RegExp('^(//|http|javascript|mailto|#)', 'i')
		this.currentPage = location.pathname + location.search
		this.cachedMarkup = {}
	}

	start () {
		// set up hijax markup cache
		const containers = document.querySelectorAll('[data-hijax-skip-unchanged]')
		for (let i = 0; i < containers.length; i++) {
			const container = containers[i]
			const id = container.getAttribute('id')
			this.cachedMarkup[id] = container.innerHTML
		}

		super.start()
		window.addEventListener('popstate', (e) => {
			this.watchPopState(e)
		}, false)
	}

	DOMChanged (root) {
		super.DOMChanged(root)
		this.hijaxLinks(root)
	}

	watchPopState (e) {
		if (location.pathname + location.search !== this.currentPage) {
			this.preFlight(location.pathname + location.search)
		}
	}

	hijaxLinks (fragment) {
		const links = fragment ? fragment.getElementsByTagName('a') : this.element.getElementsByTagName('a')
		for (let i = 0; i < links.length; i++) {
			const link = links[i]
			const href = link.getAttribute('href')
			if (href &&
				!link.getAttribute('data-hijaxed') &&
				!link.getAttribute('target') &&
				!link.hasAttribute('data-no-hijax') &&
				!this.excludeRegex.exec(href)
			) {
				link.setAttribute('data-hijaxed', true)
				link.addEventListener('click', (e) => {
					e.preventDefault()
					this.setPage(href)
				}, false)
			}
		}
	}

	setPage (url, reload) {
		if (url === this.currentPage || reload) {
			this.preFlight(url)
		} else {
			history.pushState(null, null, url)
			this.watchPopState()
		}
	}

	preFlight (url) {
		if (!this.options.preFlight) {
			return this.loadPage(url)
		}

		this.options.preFlight(url, (err, handled, rewrite) => {
			if (err) {
				if (this.options.onError) {
					this.options.onError('danger', err)
				} else {
					alert('Error loading page: ' + err)
				}
			}
			if (handled) {
				this.currentPage = location.pathname + location.search
			} else {
				this.loadPage(rewrite || url)
			}
		})
	}

	loadPage (url) {
		const frame = () => {
			elementTools.addClass(document.body, 'hijax-loading')
		}
		this.queueFrame(frame)
		if (this.options.onExitPage) {
			this.options.onExitPage()
		}
		const xhr = new XMLHttpRequest()
		xhr.open('GET', url)
		xhr.setRequestHeader('Sargasso-Hijax', 1)
		xhr.setRequestHeader('x-digitopia-hijax', 1)
		if (this.options.onLoading) {
			this.options.onLoading()
			xhr.onreadystatechange = this.options.onLoading
		}
		xhr.onload = () => {
			if (xhr.status === 301 || xhr.status === 302 || xhr.getResponseHeader('Sargasso-Location')) {
				const loc = xhr.getResponseHeader('Location') ? xhr.getResponseHeader('Location') : xhr.getResponseHeader('Sargasso-Location')
				this.setPage(loc)
			} else if (xhr.status === 200) {
				theScrollWatcher.scrollTop(0)
				this.mergePage(xhr.responseText)
				const oldPage = this.currentPage
				const frame = () => {
					this.notifyAll('newPage', [oldPage, location.pathname + location.search])
					elementTools.removeClass(document.body, 'hijax-loading')
				}
				this.queueFrame(frame)
				this.currentPage = location.pathname + location.search
			} else {
				const flashLevel = xhr.getResponseHeader('Sargasso-Flash-Level') || 'danger'
				let flashMessage = xhr.getResponseHeader('Sargasso-Flash-Message') || xhr.statusText
				if (!flashMessage) {
					flashMessage = 'Could not connect to server.'
				}
				if (this.options.onError) {
					this.options.onError(flashLevel, flashMessage)
				} else {
					alert('Error loading page: ' + flashMessage)
				}
			}
		}
		xhr.send()
	}

	processScripts (scripts) {
		Array.from(scripts).forEach((script) => {
			script.remove()
			const id = script.getAttribute('id')
			if (!document.getElementById(id)) {
				// script.onload = function () {}
				document.getElementsByTagName('head')[0].appendChild(script)
			}
		})
	}

	mergePage (html) {
		const ephemerals = document.querySelectorAll('[data-ephemeral]')
		Array.from(ephemerals).forEach((ephemeral) => {
			ephemeral.remove()
		})

		const doc = html.split(/(<body[^>]*>|<\/body>)/ig)
		const fragment = makeFragment(doc[2])
		const containers = document.querySelectorAll('[data-hijax]')
		for (let i = 0; i < containers.length; i++) {
			const container = containers[i]
			const id = container.getAttribute('id')
			const replace = fragment.getElementById(id)

			// compare raw markup for changes
			if (container.hasAttribute('data-hijax-skip-unchanged')) {
				if (this.cachedMarkup[id] === replace.innerHTML) { // unchanged
					continue
				}
				this.cachedMarkup[id] = replace.innerHTML
			}

			// use a key found in data-hijax-cache-key on a child element found by css selector defined in data-hijax-cache-key-selector
			const k = container.getAttribute('data-hijax-cache-key-selector')
			if (k) {
				if (replace.querySelector(k) && container.querySelector(k) && container.querySelector(k).getAttribute('data-hijax-cache-key') === replace.querySelector(k).getAttribute('data-hijax-cache-key')) {
					continue
				}
			}

			this.processScripts(replace.querySelectorAll('script'))
			const frame = () => {
				container.parentNode.replaceChild(replace, container)
				if (this.options.onEnterPage) {
					this.options.onEnterPage()
				}
				this.hijaxLinks(replace)
			}
			this.queueFrame(frame)
		}
	}
}

registerSargassoClass('HijaxLoader', HijaxLoader)

// shims for borked browsers
// =========================

const makeFragment = (html) => {
	if (document.createRange && document.createRange().createContextualFragment) {
		return document.createRange().createContextualFragment(html)
	}
	const fragment = document.createDocumentFragment()
	const div = document.createElement('div')
	div.insertAdjacentHTML('afterBegin', html)
	fragment.appendChild(div)
	return fragment
}

export {
	HijaxLoader
}
