# @PelagicCreatures/Sargasso

### Simple, Fast, Supervised Javascript Controllers for HTML Elements.

[Demo Page](https://blog.PelagicCreatures.com/demos/sargasso)

Sargasso Makes HTML elements aware of events such as Document (DOM) insertions and deletions, HIJAX Page load, Scrolling, Resizing, Orientation and messages Managed Web Workers and elements allowing them to efficiently implement any behavior they need to perform.

One of the core features of this framework is to implement an asynchronous page loading scheme which supports deep linking and lightning fast page loads where only dynamic content areas are merged between page loads leaving css, js, web workers and wrapper elements intact. Sargasso controller instances are automatically created as needed when their element appears in the DOM and destroyed when their element is removed so everything is cleanly destroyed and all the trash is collected. Performance is further enhanced with shared event listening services which are fully debounced during large updates. Services are also provided to schedule content changes using the browser's **animation frame** event loop and managed **web workers** for simplified offloading of computation heavy tasks to a dedicated thread resulting in highly performant pages.

This is a very lightweight (27kb), pure ES6 framework (with only few dependencies) which aims to use the most advanced stable features of modern browsers to maximum effect leaving the historical cruft, kludges and code barnacles infesting older web frameworks behind. The result is lean, highly performant and clean library that simplifies the complex technologies behind modern progressive web apps and web sites.

Other Sargasso modules that build on this framework:
* [@pelagiccreatures/flyingfish: Lazy Loading Images](https://github.com/PelagicCreatures/flyingfish)
* [@pelagiccreatures/tropicbird: Material Design Element Controllers](https://github.com/PelagicCreatures/tropicbird)
* [@pelagiccreatures/molamola: Forms & Form Validation](https://github.com/PelagicCreatures/molamola)

### Status

Stable

If you are curious, have questions, want to help or have any feedback feel free to contact me by opening an issue.

I am being rather strict about trying to keep this module forward looking so as to not burden this framework with lots of obsolete junk and polyfills so while it will certainly not work on *every* browser, it should work on any *reasonably* modern one. If you run into any problems let me know. I am actively working on this so you are likely to get my attention pretty quickly by opening issues.

```
@author Michael Rhodes (except where noted)
@license MIT
Made in Barbados 🇧🇧
```

### Why?

Progressive Web Apps and modern websites need a HIJAX scheme to load pages that is integrated with and can manage element behavior. The big name frameworks out there at the moment are not a very good fit for the work I am doing so I decided to roll my own to investigate the current state of browser capabilities.

```npm install @pelagiccreatures/sargasso --save```

### An example Sargasso app:

The @pelagiccreatures/sargasso package exports:

* Sargasso - the sargasso super class
* utils.registerSargassoClass - function to register your sub classes
* utils.bootSargasso - start sargasso services and HIHAX

myApp.js
```javascript
import {Sargasso, utils} from '@pelagiccreatures/sargasso'
let options = {}
utils.bootSargasso(options)

class MyClass extends Sargasso { // This won't do very much...
  start() {
    this.element.innerHTML += ' <strong>Started!</strong>'
    super.start()
  }
}
utils.registerSargassoClass('MyClass',MyClass)
```

### Rollup your app and add script tag to HTML

#### 1. Install rollup
```
npm install --global rollup
npm install @rollup/plugin-commonjs --save-dev
npm install @rollup/plugin-json --save-dev
npm install @rollup/plugin-node-resolve --save-dev
```

#### 2. Define your bundle build options.

rollup.config.js
```javascript
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'

export default {
  input: './myApp.js', // <<< your app
  output: [{
    format: 'iife',
    name: 'App',
    file: './app-bundle.iife.js', // <<< script file to include in html
    sourcemap: true
  }],

  plugins: [
    json(),
    nodeResolve({
      preferBuiltins: false
    }),
    commonjs({
      namedExports: {}
    })
  ]
}
```

#### 3. Build it: `Run rollup -c rollup.config.js`

#### 4. Add it to your html

```html
<html>
  <head>
    <script src="/app-bundle.iife.js" defer></script>
  </head>
  <body>
    <sargasso-my-class>MyClass instance</sargasso-my-class>
  </body>
</html>
```

When you load the page the content of sargasso-my-class will be "MyClass instance **Started!**"

#### Custom Elements

Many browsers support custom elements ([current compatibility](https://caniuse.com/#feat=custom-elementsv1) so the preferred (faster and cleaner) syntax for sargasso elements is to use a custom element tag. The class name is the kebab-case of your subclass name so MyClass becomes sargasso-my-class:

```html
<sargasso-my-class>This works for MyClass in <em>most</em> browsers</sargasso-my-class>
```

#### Using data-sargasso-class
Alternately, Sargasso watches the DOM for any elements tagged with the `data-sargasso-class` attribute and instantiates the Sargasso class specified while hooking up the appropriate services. When the underlying element is removed from the DOM (loading a new page or something) it automatically destroys any dangling Sargasso objects.

```html
<div data-sargasso-class="MyClass">This works for MyClass in all browsers</div>
```

You can also defer the instantiation using the lazy method by tagging it with `data-lazy-sargasso-class` instead of `data-sargasso-class` which will only start up the class when the element is visible in the viewport.

### HIJAX

When HIJAX is enabled, Sargasso automatically captures `<a href="..">` tags and calls the LoadPageHandler instead of letting the browser load pages. You can make a link be ignored by hijax by setting the `<a href=".." data-no-hijax>`. Offsite links and links with targets are automatically ignored.  

`loadPageHandler(href)` is a utility function for programmatically loading a new page.

EG. instead of `location.href= '/home'`, use `LoadPageHandler('/home')`

This can be called to reload the page as well (won't add to history if same url as current url)

```javascript
import {Sargasso, utils, loadPageHandler} from '@pelagiccreatures/sargasso'

const preflightHandler = (url, cb) => {
	if(url === '/handled-by-pre-flight') {
		// special case page, we will handle it here
		return cb(null, true)
	}

	cb(null, false)
}

let options = {
  hijax: {
		onError: (level, message) => { alert('Something went wrong. ' + message) }
	},
	preFlight: preflightHandler
}
utils.bootSargasso(options)
```

#### Mark dynamic content

New pages are loaded via AJAX and are merged with the current page only replacing elements marked with `data-hijax` from the new page.

```
<html>
  <head>
  </head>
  <body>
    static stuff

    <div id="page-body" data-hijax>
      <p>this changes from page to page</p>
      <div>lots of html here</div>
    </div>

    more static stuff

    <div id="some-element" data-hijax>
      <p>this also changes from page to page</p>
    </div>

    more static stuff
  </body>
<html>
```

Note that data-hijax elements must have and ID and contain well formed child html elements.

```
<div id="nope" data-hijax>I'm just text. No child elements. Won't work.</div>
```

```
<div id="yup" data-hijax><p>I'm html. This works.</p></div>
```

### Sargasso Object Lifecycle

When the object is instantiated, the supervisor will call the `start()` method of the object.  Beyond responding to scrolling, resize and other responsive events, you will probably want to interact with your element in some way. You should use this hook to set up any element events you need to respond to such as clicking a button, responding to touch events or key presses, etc.

### Defining SubClasses:

Your Sargasso subclasses subscribe to event feeds to be notified of events.

**Methods to override as needed:** *don't forget to call super.xxx() in your subclass*

| method | description |
| ------ | ----------- |
| constructor(element, options = {}) | subscribe to services by setting options properties. All default to false so only set the ones you need `watchDOM`, `watchScroll`, `watchResize`, `watchOrientation`, `watchViewport` {xxx:true} |
| start() | set up any interactions and event handlers |
| sleep() | remove any event handlers defined in start() and cleanup references |
| DOMChanged() | called if options 'watchDOM: true' when DOM changes |
| didScroll() | called if options 'watchScroll: true' when scroll occurs |
| didResize() | called if options 'watchResize: true' when resize changes |
| enterViewport() | called if options 'watchViewport: true' when element is entering viewport |
| exitViewport() | called if options 'watchViewport: true' when element is exiting viewport |
| enterFullscreen()  | called if options 'watchOrientation: true' when user rotates phone or if setFullscreen is called |
| exitFullscreen()  | called on exit fullscreen |
| newPage(old, new) | on a new page |
| didBreakpoint() | new screen width breakpoint |
| elementEvent(e) | this.element received an 'sargasso' event |
| workerOnMessage (id, data = {}) | id is the worker sending the message. Any payload from the worker `postMessage` is in data.xxx as defined by the worker |


**Properties**


| property | description |
| ------ | ----------- |
| this.element | the element we are controlling |


**Utility Methods:**


| method | description |
| ------ | ----------- |
| getMetaData | return sargasso metadata associated with element (weak map) |
| setMetaData(key,value) | set a sargasso metadata property |
| hasClass('cssclass') | returns true if this.element has cssclass |
| addClass('cssclass') | add cssclass to this.element |
| removeClass('cssclass')  | remove cssclass to this.element |
| setCSS({})  | set css pairs defined in object on this.element |
| isVisible() | true if element is visible |
| scrollTop(newTop) | get and set the current scroll position |
| queueFrame(function) | queue a function to execute that changes the DOM |
| workerStart(id, codeOrURL) | start a web worker with id. Ignored if worker id already installed (see https://github.com/PelagicCreatures/flyingfish for a shared worker example)|
| workerPostMessage(id, data {}) | send the worker tagged with `id` a message. the message must be an object which can have any structure you want to pass to the worker |
| on(container,selector,fn) | attach delegated event handler to container scoped to a css selector |
| off(container,selector) | remove delegated event handler to container scoped to css selector |

Don't forget you need to let sargasso know about your class:
```registerSargassoClass('MyClass', MyClass)```

### Using Animation Frames

To avoid any chaotic repaints you should only make DOM changes inside animation frames - don't do any long processes in the responsive callbacks or things might bog down the browser UI.

```
class MyButtonClass extends Sargasso {
  constructor (element, options = {}) {
    options.watchViewport = true // tell me when I am visible
    super(element, options) // important!
  }

  // listen for click
  start () {
    super.start() // important!
    this.clicker = (e) => {
      this.clicked()
    }
    this.element.addEventListener('click', this.clicker, false)
  }

  // cleanup listener
  sleep () {
    this.element.removeEventListener('click', this.clicker)
    super.sleep() // important!
  }

  // use an animation frame to mutate the DOM
  clicked () {
    const frame = () => { // set up a DOM mutation
      this.addClass('clicked')
      this.element.textContent = 'Clicked!'
    }
    this.queueFrame(frame) // schedule it
  }

  enterViewport () {
    // do some stuff such as modify element html or classes
    const frame = () => {
      this.element.textContent = 'Hello viewport! Click me!'
    }
    this.queueFrame(frame)
  }
}

registerSargassoClass('MyButtonClass', MyButtonClass)

Then in HTML:

<style>
  .clicked { background-color:red; }
</style>

<button data-sargasso-class="MyButtonClass">Click me and I'll turn red!</button>
```

### Using managed Web Workers
You should offload compute heavy tasks to a new thread when possible.

Sargasso controllers have built in managed Web Workers that can be defined in external scripts or inline code blobs simplifying the management of running workers.

The worker code runs when it receives an onmessage event.

A web worker, once installed, could be used by many instances so sargasso sets e.data.uid to the id on the instance that is invoking the worker which we need to pass back in the postMessage so we know who is who.

```
class MySubClass extends Sargasso {

  ...

  someMethod() {

    /*
      myWorker can be the url of a worker script or
      inline code as in this example
    */

    let pointlessMath = `onmessage = function (e) {
      const baseNumber = e.data.power
      let result = 0
      for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {
        result += Math.atan(i) * Math.tan(i)
      };
      postMessage({
        uid: e.data.uid, // Important! always pass this back in the message
        result: 'Done doing pointless math: ' + result
      })
    }`

    // create the worker to be managed by sargasso and give it an id
    // the id can be unique to your task or shared by many sargasso
    // controller
    this.workerStart('pointlessMath', pointlessMath)

    let data = { power: 12 }
    this.workerPostMessage('pointlessMath', data) // send message to the worker
  }

  // listen for worker result
  workerOnMessage (id, data) {
    if (id === 'pointlessMath') {
      const frame = () => {
        this.element.innerHTML = data.result
      }
      this.queueFrame(frame)
    }
    super.workerOnMessage(id, data)
  }
}
```

### Tests

The hijax scheme does not work for file://xxx URIs so start a simple server on localhost:
```
python tests/localhost.py
```

Then run the tests:
```
npm test

-or-

point your browser to http://localhost:8000/tests/index.html to see it all in action
```
