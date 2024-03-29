window.sargassoScale = undefined

window.doBreakpoints = () => {
	const breakpoints = window.breakpoints || {
		widths: [{
			className: 'breakpoint-phone',
			maxWidth: 599
		}, {
			className: 'breakpoint-tablet',
			maxWidth: 904
		}, {
			className: 'breakpoint-desktop',
			maxWidth: undefined
		}]
	}
	const widths = []
	const classes = []
	widths.push(0)
	for (let i = 0; i < breakpoints.widths.length; i++) {
		if (breakpoints.widths[i].maxWidth) {
			widths.push(breakpoints.widths[i].maxWidth)
		}
		classes.push(breakpoints.widths[i].className)
	}
	widths.push(64000)

	if(!document.getElementById('breakpoint-rules')) {
		let css = '.show-hide{display:none;}\n'
		for (let i = 0; i < breakpoints.widths.length; i++) {
			const min = i > 0 ? breakpoints.widths[i-1].maxWidth + 1 : 0
			const max = i < breakpoints.widths.length - 1 ? breakpoints.widths[i].maxWidth : 64000
			css += '@media (min-width: '+min+'px) and (max-width: '+max+'px){'
			for(let c = 0; c < classes.length; c++) {
				if(c == i) {
					css += '.shown-' + breakpoints.widths[i].className + '{display:block;}\n'
					css += '.hidden-' + breakpoints.widths[i].className + '{display:none!important;}\n'
				}
				else {
					css += '.hidden-not-' + breakpoints.widths[c].className + '{display:none!important;}\n'
					css += '.shown-not-' + breakpoints.widths[c].className + '{display:block;}\n'
				}
			}
			css += '}'
		}
		const style = document.createElement('style')
		style.setAttribute('id','breakpoint-rules')
		style.type = 'text/css'
		style.innerHTML = css
		document.getElementsByTagName('head')[0].appendChild(style)
	}

	const ww = window.innerWidth
	const wh = window.innerHeight
	let newScale = classes[widths.length - 1]
	for (let i = 0; i < widths.length - 1; i++) {
		if (ww >= widths[i] && ww < widths[i + 1]) {
			newScale = classes[i]
			break
		}
	}

	if (wh > ww) {
		document.body.classList.remove('landscape')
		document.body.classList.add('portrait')
	} else {
		document.body.classList.remove('portrait')
		document.body.classList.add('landscape')
	}

	if(window.sargassoScale) {
		document.body.classList.remove(window.sargassoScale)
	}
	window.sargassoScale = newScale
	for(const c of classes) {
		if(c === newScale) {
			document.body.classList.remove('not-' + c)
		}
		else {
			document.body.classList.add('not-' + c)
		}
	}
	document.body.classList.add(window.sargassoScale)

	return newScale
}

window.doBreakpoints()
