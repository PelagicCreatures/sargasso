# @PelagicCreatures/Sargasso

### Simple, Fast, Supervised Javascript Controllers for HTML Elements.

[Demo Page](https://blog.myanti.social/demos/sargasso)

Sargasso Makes HTML elements aware of events such as Document (DOM) insertions and deletions, HIJAX Page load, Scrolling, Resizing, Orientation and messages Managed Web Workers allowing them to efficiently implement any behavior they need to perform.

This is a very lightweight, pure ES6 framework (with only few dependencies) which aims to use the most advanced stable features of modern browsers to maximum effect leaving the historical cruft, kludges and code barnacles infesting older web frameworks behind. The result is lean, highly performant and clean library that simplifies the complex technologies behind modern progressive web apps and web sites.

```
@author Michael Rhodes (except where noted)
@license MIT
Made in Barbados 🇧🇧
```

Progressive Web Apps and modern websites need a HIJAX scheme. One of the core features of this framework is to implement an asynchronous page loading scheme which supports deep linking and lightning fast page loads where only dynamic content areas are merged between page loads leaving css, js, web workers and wrapper elements intact. Sargasso controller instances are automatically created as needed when their element appears in the DOM and destroyed when their element is removed so everything is cleanly destroyed and all the trash is collected.

Performance is further enhanced with shared event listening services which are fully debounced during large updates. Services are also provided to schedule content changes using the browser's **animation frame** event loop and managed **web workers** for offloading computation heavy tasks to a dedicated thread resulting in highly performant pages.

```npm install @pelagiccreatures/sargasso```

Bootstrap Sargasso:
-------------------
The ES and the CommonJS bundles both expose:

* Sargasso - the sargasso super class
* registerSargassoClass - function to register your sub classes
* bootSargasso - start sargasso services and HIHAX

[Most browsers](https://caniuse.com/#search=modules) are aware of ES6 and modules these days but but you can use the module/nomodule scheme to fall back to the common js bundle if needed.

```
<script type="module" src="https://cdn.jsdelivr.net/npm/@pelagiccreatures/sargasso/dist/sargasso.es.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@pelagiccreatures/sargasso/dist/sargasso.cjs.js" nomodule defer></script>
<script defer>
  ... your code here ...
</script>
```

In production you probably want to host the bundles yourself instead of using the CDN and probably even make your own bundles including your subclasses using webpack or rollup or something. See rollup section below.

For the '... your code here ...' part, it's the same in both cases. You need to at least start up the services.

```
<script>

  let options = {
    hijax: {
      onError: (level, message) => { alert('Something went wrong. ' + message) }
    }
  }

  // boot supervisors and HIJAX loader
  window.loadPageHandler = bootSargasso(options)

  // define a custom class and register the classname.
  class MyClass extends Sargasso {} // This won't do very much...
  registerSargassoClass('MyClass',MyClass)

</script>
```

### Adding Your Sargasso class to an HTML element

Sargasso watches the DOM for any elements tagged with the `data-sargasso-class` attribute and instantiates the Sargasso class specified while hooking up the appropriate services. When the underlying element is removed from the DOM (loading a new page or something) it automatically destroys any dangling Sargasso objects.

```
<div data-sargasso-class="MyClass">This element has a MyClass Sargasso controller</div>
```

You can also defer the instantiation using the lazy method by tagging it with `data-lazy-sargasso-class` instead of `data-sargasso-class` which will only start up the class when the element is visible in the viewport

### HIJAX
Sargasso automatically captures `<a href="..">` tags and calls the LoadPageHandler instead of letting the browser load pages. You can make a link be ignored by hijax by setting the `<a href=".." data-no-hijax>`. Offsite links and links with targets are automatically ignored. bootSargasso also returns the function `LoadPageHandler(href)`. You must call this to load a new page programatically.

EG. instead of `location.href= '/home'`, use `LoadPageHandler('/home')`

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

Note that data-hijax elements must have well formed child html elements. **Not** raw text like this:

```<div id="nope" data-hijax>I'm just text. No child elements. Won't work.</div>```


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
| css({})  | set css pairs defined in object on this.element |
| scrollTop(newTop) | get and set the current scroll position |
| queueFrame(function) | queue a function to execute that changes the DOM |
| workerStart(id, codeOrURL) | start a web worker with id. Ignored if worker id already installed (see https://github.com/PelagicCreatures/flyingfish for a shared worker example)|
| workerPostMessage(id, data {}) | send the worker tagged with `id` a message. the message must be an object which can have any structure you want to pass to the worker |


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

### Rollup ES6 Bundling

While you can use the libs in /dist in you project you would typically want to bundle your own ES6 (and perhaps commonJS) bundles to serve with your pages.

The example below is for the /example directory pages.

rollup.config.app.js
```
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'

export default {
  input: './example/app.js', // load the app root
  output: [{
    format: 'es',
    file: './example/app-bundle.es.js' // output the bundle
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

Run `rollup -c rollup.config.app.js` and you have an ES6 bundle which includes all your dependancies
