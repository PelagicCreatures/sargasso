# @PelagicCreatures/Sargasso

### Simple, Fast, Supervised Javascript Controllers for HTML Elements.

[Demo Site](https://blog.myanti.social)

This is a very lightweight, pure ES6 framework (with only few dependencies) which aims to use the most advanced stable features of modern browsers to maximum effect leaving the historical cruft, kludges and code barnacles infesting older web frameworks behind. The result is lean, highly performant and clean code that simplifies the complex requirements of modern progressive web apps and web sites.

```
@author Michael Rhodes (except where noted)
@license MIT
Made in Barbados 🇧🇧
```

HTML elements sometimes need a nervous system to see and respond to what's going on around them - Sargasso element controllers are fully aware of their environment making many things  possible – HIJAX, lazy loading, screen size appropriate images and content, parallax scrolling effects, form validators, API endpoint controllers to name a few.

HIJAX made easy - this framework implements an asynchronous page loading scheme which supports deep linking and lightning fast page loads where only dynamic content areas are merged between pages leaving css, js, web workers and wrapper elements intact. Sargasso controller instances are managed as needed when their element appears in the DOM and destroyed when their element is removed.

Performance is optimized with shared event listeners which are fully debounced during large updates. Services are provided to schedule content changes using the browser's animation frame event loop and computation heavy tasks can be easily offloaded to managed web workers resulting in highly performant pages.

```npm install @pelagiccreatures/sargasso```

Bootstrap Sargasso (ES6):
-------------------------
```
// import lib
import {
	bootSargasso, Sargasso, registerSargassoClass
} from 'sargasso'

// bootSargasso is the function to call to start the framework
// Sargasso is the superclass of all sargasso controllers
// registerSargassoClass is a function to tell sargasso about your classes

// set options
let options = {
	hijax: {
		onError: (level, message) => {} // throw up an alert or something with message.
	}
}

// boot supervisors and HIJAX loader
let loadPageHandler = bootSargasso(options)

// define a custom class and register the classname so it can be supervised
class MyClass extends Sargasso {}
registerSargassoClass('MyClass',MyClass)

```

Bootstrap Sargasso (ES5):
---------------------------------
The bundle exposes `sargasso` as a global so you can call the framework
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

You can also use this cdn if you want:
```
<script src="https://cdn.jsdelivr.net/npm/@pelagiccreatures/sargasso/dist/sargasso.js"></script>
```

### Adding Your Sargasso class to an HTML element

Mark the elements you want to be enhance but adding a data-sargasso-class attribute:

`<div data-sargasso-class="MyClass"></div>`

You can also defer the instantiation using the lazy method which will only start up the class when the element is visible in the viewport:

`<div data-lazy-sargasso-class="MyClass"></div>`

Sargasso watches the DOM for any elements with `data-sargasso-class`
and instantiates the sargasso object, hooking up the appropriate observers. When the underlying element is removed from the DOM it destroys any dangling sargasso objects.

### HIJAX
bootSargasso returns the function `LoadPageHandler(href)` that you should call to load a new page programatically. Once loaded, new pages are merged with the current page only replacing elements marked with `data-hijax="true"`. Sargasso automatically captures `<a href="..">` tags and calls the LoadPageHandler instead of letting the browser load pages.

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

When the object is created the supervisor will call the `start()`` method of the object. You should use this hook to set up any element events you need to respond to such as clicking a button or key presses. Beyond responding to scrolling, resize and other responsive events, you will probably want to interact with your element in some way.

Properties
* this.element - the element we are controlling

Utility Methods:
* this.hasClass('cssclass') 		// returns true if this.element has cssclass
* this.addClass('cssclass') 		// add cssclass to this.element
* this.removeClass('cssclass')	// remove cssclass to this.element
* this.queueFrame(function)			// queue a function to execute that changes the DOM

Example Button Handler:

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

Then in HTML:

<style>
	.clicked { background-color:red; }
</style>

<button data-sargasso-class="MyButtonClass">Click me and I'll turn red!</button>
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

### Using managed Web Workers

Offload compute heavy tasks to a new thread and listen for result

Pass in a url of a web worker js file or create an inline web worker
from string of raw code.

```
class MySubClass extends Sargasso {

	...

	someMethod() {

		// define some code to run in the worker

		let mycode = `onmessage = function (e) {
			const baseNumber = e.data
			let result = 0
			for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {
				result += Math.atan(i) * Math.tan(i)
			};
			postMessage('Done doing pointless math: ' + result)
		}`

		// create the worker to be managed by sargasso and give it an id
		this.workerStart('myworkId', mycode)

		// make the worker do work
		this.workerPost('myworkId', 12)
	}

	// listen for worker events
	workerOnMessage (id, e) {
		if (id === 'myworkId') {
			const frame = () => {
				this.element.innerHTML = e.data
			}
			this.queueFrame(frame)
		}
		super.workerOnMessage(id, e)
	}
}
```


### Viewing the Test Page in the example directory
To use Hijax you have to serve the files (window.popstate can't deal with file://) so run SimpleHTTPServer in the project directory to see demo page
```
python -m SimpleHTTPServer 8000
```

then point your browser to `http://localhost:8000/index.html`
