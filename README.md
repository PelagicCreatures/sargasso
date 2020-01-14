# @PelagicCreatures/Sargasso

### Simple, Fast, Supervised Javascript controllers for html elements.

[Demo Site](https://blog.myanti.social)

This framework is very lightweight, pure ES6 with only few dependencies

```
@author Michael Rhodes (except where noted)
@license MIT
Made in Barbados 🇧🇧
```

Sometimes HTML elements need a nervous system - with Sargasso classes many things are possible – Lazy Loading, size appropriate images and content, parallax scrolling effects, form validators, API endpoint controllers to name a few.

This framework implements a sophisticated HIJAX page loading scheme which supports deep linking and lightning fast page loads where only only content areas are updated between pages leaving css, js and wrapper elements intact.

Performance is optimized with shared event listeners which are fully debounced during large updates and services are provided to schedule content changes using the browser's animation frame event loop resulting in smooth page updates.

This framework aims to use the advanced features of modern browsers to maximum effect leaving as much historical cruft in the past as possible. The result is lean and fast.

```npm install @pelagiccreatures/sargasso```

Bootstrap Sargasso Objects in ES6:
---------------------------------
```
import {
	bootSargasso, Sargasso, registerSargassoClass
} from 'sargasso'

let options = {
	hijax: {
		onError: (level, message) => {} // throw up an alert or something with message.
	}
}

let loadPageHandler = bootSargasso(options)

class MyClass extends Sargasso {}
registerSargassoClass('MyClass',MyClass)

```

Bootstrap Sargasso Objects in ES5:
---------------------------------
The bundle exposes sargasso as a global so you can call the framework
* sargasso.Sargasso
* sargasso.registerSargassoClass
* sargasso.bootSargasso

```
<script src="/path/to/dist/sargasso.js">
<script>
	let loadPageHandler = sargasso.bootSargasso(options)
	class MyClass extends sargasso.Sargasso {}
	sargasso.registerSargassoClass('MyClass',MyClass)
</script>
```

You can also use this cdn:
```<script src="https://cdn.jsdelivr.net/npm/@pelagiccreatures/sargasso@0.5.10/dist/sargasso.js"></script>```


SargassoSupervisor then watches the DOM for any elements with 'data-sargasso-class'
and instantiates the object, hooking up the appropriate observers. It also destroys
any dangling objects when the underlying element is removed from the DOM.

`<div data-sargasso-class="MyClass"></div>`

You can also defer the instantiation using the lazy method:

`<div data-lazy-sargasso-class="MyClass"></div>`

If using Hijax Sargasso captures `<a href="..">` tags and calls the LoadPageHandler instead of letting the browser do it.  `LoadPageHandler(href)` is a function you should call to load a new page. New pages are merged with the current page replacing any elements marked with 'data-hijax="true"'

EG. instead of `location.href= '/home'`, use `LoadPageHandler('/home')`

Defining SubClasses:
--------------------
Your Sargasso subclasses can subscribe to event feeds to be notified of events.

```
class MyClass extends Sargasso {
	constructor(element, options) {
		super(element, {
			watchDOM: [true:false],
			watchScroll: [true:false],
			watchResize: [true:false],
			watchOrientation: [true:false],
			watchViewport: [true:false]
		})
	}

	// Methods that will be called when various events occur. Do what you need to do.

	DOMChanged() {}      // called if 'watchDOM: true' when DOM changes
	didScroll() {}       // called if 'watchScroll: true' when scroll occurs
	didResize() {}       // called if 'watchResize: true' when resize changes
	enterViewport() {}   // called if 'watchViewport: true' when element is entering viewport
	exitViewport() {}    // called if 'watchViewport: true' when element is exiting viewport
	enterFullscreen() {} // called if 'watchOrientation: true' when user rotates phone or if setFullscreen is called
	exitFullscreen() {}  // called on exit fullscreen
	newPage(old,new)     // on a new page
	didBreakpoint()      // new screen width breakpoint
	elementEvent(e)      // this.element receieved an 'sargasso' event
}

registerSargassoClass('MyClass', MyClass)

```

Don't do any long processes in these callbacks or things might bog down the browser UI. To avoid any chaotic repaints you should only make DOM changes inside animation frames - see a lazy loading example below.

```
class MyClass extends Sargasso {
	constructor(element,options = {}) {
		options.watchViewport = true
		super(element,options)
	}

	enterViewport() {
		// do some stuff such as modify element html or classes
		let frame = () => {
			this.element.innerHTML = '<p>Hello viewport!'
		}
		this.queueFrame(frame)
	}
}

registerSargassoClass('MyClass', MyClass)

```

### Viewing the Test Page in the example directory
To use Hijax you have to serve the files (window.popstate can't deal with file://) so run this in the project/example directory
```
python -m SimpleHTTPServer 8000
```

then point your browser to `http://localhost:8000/index.html`
