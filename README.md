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

This framework implements an asynchronous HIJAX page loading scheme which supports deep linking and lightning fast page loads where only content areas are updated between pages leaving css, js and wrapper elements intact. Sargasso objects are created and destroyed as needed when they appear or are removed from the DOM.

Performance is optimized with shared event listeners which are fully debounced during large updates and services are provided to schedule content changes using the browser's animation frame event loop resulting in smooth page updates.

This framework aims to use the advanced features of modern browsers to maximum effect leaving as much historical cruft in the past as possible. The result is lean and fast.

```npm install @pelagiccreatures/sargasso```

Bootstrap Sargasso (ES6):
---------------------------------
```
// import lib
import {
	bootSargasso, Sargasso, registerSargassoClass
} from 'sargasso'

// set options
let options = {
	hijax: {
		onError: (level, message) => {} // throw up an alert or something with message.
	}
}

// boot supervisors and HIJAX loader
let loadPageHandler = bootSargasso(options)

// define a custom class and register the classname
class MyClass extends Sargasso {}
registerSargassoClass('MyClass',MyClass)

```

Bootstrap Sargasso (ES5):
---------------------------------
The bundle exposes sargasso as a global so you can call the framework
* sargasso.Sargasso
* sargasso.registerSargassoClass
* sargasso.bootSargasso

```
<script src="/path/to/dist/sargasso.js">
<script>
	// set options
	let options = {
		hijax: {
			onError: (level, message) => {} // throw up an alert or something with message.
		}
	}

	// boot supervisors and HIJAX loader
	let loadPageHandler = sargasso.bootSargasso(options)
	class MyClass extends sargasso.Sargasso {}

	// define a custom class and register the classname
	sargasso.registerSargassoClass('MyClass',MyClass)
</script>
```

You can also use this cdn:
```
<script src="https://cdn.jsdelivr.net/npm/@pelagiccreatures/sargasso@0.5.10/dist/sargasso.js"></script>
```

### Adding Your Sargasso class to an HTML element

Mark the elements you want to be enhance but adding a data-sargasso-class attribute:

`<div data-sargasso-class="MyClass"></div>`

You can also defer the instantiation using the lazy method which will only start up the class when the element is visible in the viewport:

`<div data-lazy-sargasso-class="MyClass"></div>`

Sargasso watches the DOM for any elements with `data-sargasso-class`
and instantiates the sargasso object, hooking up the appropriate observers. When the underlying element is removed from the DOM it destroys any dangling sargasso objects.

### HIJAX
Is the function you should call to load a new page. Once loaded, new pages are merged with the current page only replacing elements marked with 'data-hijax="true"'. Sargasso automatically captures `<a href="..">` tags and calls the LoadPageHandler instead of letting the browser load pages. `LoadPageHandler(href)`

EG. instead of `location.href= '/home'`, use `LoadPageHandler('/home')`

Defining SubClasses:
--------------------
Your Sargasso subclasses can subscribe to event feeds to be notified of events.

The instance is associated with an element `this.element`

```
class MyClass extends Sargasso {
	constructor(element, options) {
		// subscribe to events
		super(element, {
			watchDOM: [true:false],
			watchScroll: [true:false],
			watchResize: [true:false],
			watchOrientation: [true:false],
			watchViewport: [true:false]
		})
	}

	// Methods that will be called when various events occur. Do only what you need to do.

	DOMChanged() {}      // called if 'watchDOM: true' when DOM changes
	didScroll() {}       // called if 'watchScroll: true' when scroll occurs
	didResize() {}       // called if 'watchResize: true' when resize changes
	enterViewport() {}   // called if 'watchViewport: true' when element is entering viewport
	exitViewport() {}    // called if 'watchViewport: true' when element is exiting viewport
	enterFullscreen() {} // called if 'watchOrientation: true' when user rotates phone or if setFullscreen is called
	exitFullscreen() {}  // called on exit fullscreen
	newPage(old,new)     // on a new page
	didBreakpoint()      // new screen width breakpoint
	elementEvent(e)      // this.element received an 'sargasso' event
}

registerSargassoClass('MyClass', MyClass)

```

### Sargasso Object Lifecycle

When the object is created the supervisor will call the `start()`` method of the object. You should use this hook to set up any element events you need to respond to such as clicking a button or key presses.

important properties:
this.element - the element we are controlling

Some useful methods:
this.hasClass('cssclass') 		// returns true if this.element has cssclass
this.addClass('cssclass') 		// add cssclass to this.element
this.removeClass('cssclass')	// remove cssclass to this.element
this.queueFrame(function)			// queue a function to execute that changes the DOM

```
	class MyButtonClass extends Sargasso {

		// listen for click
		start() {
			super.start()

			this.clicker = (e) => {
				this.clicked()
			}
			this.element.addEventListener('click', this.clicker, false)
		}

		// cleanup listener
		sleep() {
			this.element.removeEventListener('click', this.clicker)
			super.sleep()
		}

		// use an animation frame to mutate the DOM
		clicked() {
			let frame = () {
				this.addClass('clicked')
			}
			this.queueFrame(frame)
		}
	}

```

### Using Animation Frames

Don't do any long processes in the responsive callbacks or things might bog down the browser UI. To avoid any chaotic repaints you should only make DOM changes inside animation frames - see a lazy loading example below. You should offload any heavy weight processing to a web worker.

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
