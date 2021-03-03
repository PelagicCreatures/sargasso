# @pelagiccreatures/sargasso

### Simple, Fast, Supervised Javascript Controller framework for Web Sites and Progressive Web Apps.

```
@author Michael Rhodes (except where noted)
@license MIT
Made in Barbados 🇧🇧 Copyright © 2020-2021 Michael Rhodes
```

Sargasso Makes HTML elements aware of events such as Document (DOM) insertions and deletions, HIJAX Page load, Scrolling, Resizing, Orientation and messages Managed Web Workers and elements allowing them to efficiently implement any behavior they need to perform.

One of the core features of this framework is to implement an asynchronous page loading scheme which supports deep linking and lightning fast page loads where only dynamic content areas are merged between page loads leaving css, js, web workers and wrapper elements intact. Sargasso controller instances are automatically created as needed when their element appears in the DOM and destroyed when their element is removed so everything is cleanly destroyed and all the trash is collected. Performance is further enhanced with shared event listening services which are fully debounced during large updates. Services are also provided to schedule content changes using the browser's **animation frame** event loop and managed **web workers** for simplified offloading of computation heavy tasks to a dedicated thread resulting in highly performant pages.

This is a very lightweight (27kb), pure ES6 framework (with only few dependencies) which aims to use the most advanced stable features of modern browsers to maximum effect leaving the historical cruft, kludges and code barnacles infesting older web frameworks behind. The result is lean, highly performant and clean library that simplifies the complex technologies behind modern progressive web apps and web sites.

Other Sargasso modules that build on this framework:
* [@pelagiccreatures/flyingfish: Lazy Loading Images](https://github.com/PelagicCreatures/flyingfish)
* [@pelagiccreatures/tropicbird: Material Design Element Controllers](https://github.com/PelagicCreatures/tropicbird)
* [@pelagiccreatures/molamola: Forms & Form Validation](https://github.com/PelagicCreatures/molamola)

### Status

API Stable

We are trying to keep this project as forward looking so as to not burden this framework with lots of obsolete junk and polyfills so while it will certainly not work on *every* ancient browser, it should work on any *reasonably* modern one. If you run into any problems, have questions, want to help or have any feedback let me know by opening a github issue.

### Why?

Progressive Web Apps and modern websites need a HIJAX scheme to load pages that is integrated with and can manage element behavior. The big name frameworks out there at the moment are not a very good fit for the work I am doing so I decided to roll my own to investigate the current state of browser capabilities.

### Usage Overview (Using CDN iife modules)

This simple example loads the framework using the CDN and defines a simple Sargasso element controller that says "Hi World!".

example/example1.html
```html
<!DOCTYPE html>
<html>
<head>
  <title>Example Sargasso Element</title>
</head>
<body>
  <h3>First Sargasso Element</h3>

  <sargasso-my-class id="custom">Using a custom element</sargasso-my-class>

  <div data-sargasso-class="MyClass" id="data-attribute">Using data attribute</div>

  <script src='https://cdn.jsdelivr.net/npm/@pelagiccreatures/sargasso/dist/sargasso.iife.js'></script>
  <script defer>
    window.onload = () => {

      // define MyClass as a subclass of Sargasso
      class MyClass extends SargassoModule.Sargasso {
        start() {
          // use an animation frame to set the element content
          this.queueFrame(() => {
            this.element.innerHTML = 'Hello World! (' + this.element.getAttribute('id') + ')'
          })
          super.start()
        }
      }

      // Register MyClass to the Sargasso framework
      SargassoModule.utils.registerSargassoClass('MyClass', MyClass)

      // Start Sargasso
      SargassoModule.utils.bootSargasso()
    }
  </script>
</body>
</html>
```
[Try It](https://jsfiddle.net/PelagicCreatures/yafdt2h1/10/)

Sargasso element controllers are javascript Objects that are subclasses of the framework's Sargasso class. Custom behavior is defined by overriding various methods of the base class.

#### Using data-sargasso-class to specify Sargasso classname
Alternately, Sargasso watches the DOM for any elements tagged with the `data-sargasso-class` attribute which can be one classname or a list of classnames

```html
<div data-sargasso-class="MyClass, MyOtherClass">This works in all browsers</div>
```

#### Custom Element tags to specify classname

Many browsers support custom elements ([current compatibility](https://caniuse.com/#feat=custom-elementsv1) so the preferred (faster and cleaner) syntax for sargasso elements is to use a custom element tag. The class name is the kebab-case of your subclass name so MyClass becomes sargasso-my-class:

```html
<sargasso-my-class>This works in <em>most</em> browsers</sargasso-my-class>
```

You can also defer the instantiation using the lazy method by tagging it with `data-lazy-sargasso-class` instead of `data-sargasso-class` which will only start up the class when the element is visible in the viewport.

### Sargasso Object Lifecycle

When a Sargasso element appears in the document, the framework supervisor will instantiate an object and call the `start()` method of the object. When removed from the DOM, 'sleep()' will be called allowing you can cleanup any resources or handlers you set up in start.  Beyond responding to scrolling, resize and other responsive events, you will probably want to interact with your element in some way. You should use the start hook to set up any element events you need to respond to such as clicking a button, responding to touch events or key presses, etc.

### Example with event handlers

example/example2.html
```html
<!DOCTYPE html>
<html>
<head>
  <title>Example Sargasso Element</title>
  <style>
    .container { margin-top: 150vh; margin-bottom: 33vh; }
    .container span { border: thin solid #333; border-radius: 1em; padding: 1em; }
    .clicked { color: red; }
    .float { position: fixed; bottom: 0px; right: 0px; width: 50%; float: right; }
    .float>pre { text-align: right; }
  </style>
</head>
<body>
  <h3>Sargasso Element Example</h3>
  <p>Element is aware of when it is scrolled into the viewport, removed from the document and implements a delegated click event which removes the element when triggered.</p>

  <p>Scroll down to see it in action</p>

  <div class='container'>
    <button data-sargasso-class="MyButtonClass">
      Hello World! Click me!
    </button>
  </div>

  <script src='https://cdn.jsdelivr.net/npm/@pelagiccreatures/sargasso/dist/sargasso.iife.js'></script>

  <script defer>
    window.onload = () => {
      class MyButtonClass extends SargassoModule.Sargasso {
        constructor(element, options = {}) {
          options.watchViewport = true // tell me when I am visible
          super(element, options) // important!
        }

        start() {
          super.start() // important!

          this.on('click', (e) => { // add click event handler
            e.preventDefault()
            this.clicked()
          })

          this.debug('MyButtonClass starting')
        }

        sleep() {
          this.debug('MyButtonClass sleep called')
          this.off('click') // cleanup click event handler
          super.sleep() // important!
        }

        enterViewport() {
          this.debug('MyButtonClass entered viewport!')
        }

        // use an animation frame to mutate the DOM
        clicked() {
          const frame = () => { // set up a DOM mutation
            this.debug('clicked!')
            this.addClass('clicked')
          }
          this.queueFrame(frame) // schedule it

          // remove it from the document to illustrate Sargasso lifecycle
          setTimeout(() => {
            this.debug('removing MyButtonClass element')
            this.element.remove()
          }, 2000)
        }

        debug(message) {
          document.getElementById('debug').append(message + '\n')
        }
      }

      SargassoModule.utils.registerSargassoClass('MyButtonClass', MyButtonClass)

      // Start Sargasso
      SargassoModule.utils.bootSargasso()
    }
  </script>

  <div class="float">
    <pre id="debug">
      Sargasso element event log
      ------
      ready
    </pre>
  </div>
</body>
</html>
```
[Try It](https://jsfiddle.net/PelagicCreatures/chfpkvs3/18/)

### Sargasso Base Class:

Your Sargasso subclasses can subscribe to event feeds in order to be notified of events.

**Methods to override as needed:** *don't forget to call super.xxx() in your subclass*

| method | description |
| ------ | ----------- |
| constructor(element, options = {}) | subscribe to services by setting options properties. All default to false so only set the ones you need `watchDOM`, `watchScroll`, `watchResize`, `watchOrientation`, `watchViewport` eg. {watchScroll:true} |
| start() | set up any interactions and event handlers |
| sleep() | remove any event handlers defined in start() and cleanup references |
| DOMChanged() | called when DOM changes if options 'watchDOM: true' was set in constructor |
| didScroll() | called when scroll occurs if options 'watchScroll: true' was set in constructor |
| didResize() | called when resize changes if options 'watchResize: true' was set in constructor |
| enterViewport() | called  when element is entering viewport if options 'watchViewport: true' was set in constructor |
| exitViewport() | called when element is exiting viewport if options 'watchViewport: true' was set in constructor |
| newPage(old, new) | on a new page |
| didBreakpoint() | new screen width breakpoint |
| workerOnMessage (id, data = {}) | id is the worker sending the message. Any payload from the worker `postMessage` is in data.xxx as defined by the worker |
| enterFullscreen() | called if options 'watchOrientation: true' when user rotates phone or if setFullscreen is called |
| exitFullscreen() | called on exit fullscreen |

**Properties**

| property | description |
| ------ | ----------- |
| this.element | the element we are controlling |


**Utility Methods:**

| method | description |
| ------ | ----------- |
| getMetaData(key) | return sargasso metadata associated with element (weak map) |
| setMetaData(key,value) | set a sargasso metadata property |
| hasClass('classname') | returns true if this.element has cssclass |
| addClass('classname') | add classname or array of classnames to this.element |
| removeClass('classname')  | remove classname or array of classnames to this.element |
| setCSS({})  | set css pairs defined in object on this.element |
| isVisible() | true if element is visible |
| queueFrame(function) | queue a function to execute that changes the DOM |
| workerStart(id, codeOrURL) | start a web worker with id. Ignored if worker id already installed (see https://github.com/PelagicCreatures/flyingfish for a shared worker example)|
| workerPostMessage(id, data {}) | send the worker tagged with `id` a message. the message must be an object which can have any structure you want to pass to the worker |
| on(container,fn) | attach undelegated event handler to container scoped to a css selector |
| once(container,fn) | attach undelegated event handler to container scoped to a css selector that executes only once (automatically removes event handler on first call) |
| off(container) | remove undelegated event handler to container scoped to css selector |
| on(container,selector,fn) | attach delegated event handler to container scoped to a css selector |
| once(container,selector,fn) | attach delegated event handler to container scoped to a css selector that executes only once (automatically removes event handler on first call) |
| off(container,selector) | remove delegated event handler to container scoped to css selector |

Don't forget you need to let sargasso know about your class:
```registerSargassoClass('MyClass', MyClass)```


### Progressive Web App HIJAX Page Load

When HIJAX is enabled, Sargasso automatically captures `<a href="..">` tags and calls the LoadPageHandler instead of allowing the browser load and replace entire pages natively. Usually a web site or app has a boilerplate html wrapper that is the same for every page and well defined content areas that change from page to page. When pages are loaded via HIJAX only the changed content is merged with the current page, replacing elements marked with `data-hijax` leaving heavy weight wrapper elements, persistent javascript, css and sargasso elements intact. You can define as many dynamic elements in the wrapper as needed. Following this scheme allows for deep linking, and search engine discovery while also speeding page load for real browsers.

The Sargasso supervisor takes care of cleaning up any instantiated Sargasso element controllers in the old content by calling sleep() before the content is removed then sargasso elements in the new content are instantiated and start() is called. That way Sargasso element controllers can be cleanly managed on progressive web app pages without leaving dangling event handlers and memory leaks.

You can optionally make any link be ignored by hijax by setting the `<a href=".." data-no-hijax>`. Offsite links and links with targets are automatically ignored.  

example/example3.html
```html
<!DOCTYPE html>
<html>
<head>
  <title>Example Sargasso Element</title>
</head>
<body>
  <p>This is static wrapper content which does not change from page to page because it's not in a hijaxed container.</p>

  <div id="navigation" data-hijax>
    <strong><a href="example3.html">Home</a></strong> | <a href="example3-1.html">Page 1</a> | <a href="example3-2.html">Page 2</a>
  </div>
  <hr>

  <div id="page-body" data-hijax>
    <p>Page content for home page</p>
    <sargasso-noisy id="content-home" data-log-it="newPage,sleep,stopWorker,destroy"></sargasso-noisy>
  </div>

  <div id="some-other-element" data-hijax>
    <p>This content also changes from page to page.</p>
  </div>

  <hr>

  <p>This is also static wrapper content. Maybe a footer.</p>

  <sargasso-noisy id="static-home" data-log-it="newPage,sleep,stopWorker,destroy"></sargasso-noisy>

  <script src='app-bundle.iife.js'></script>

  <script defer>
    window.onload = () => {
      let options = {
        hijax: {
          onError: (level, message) => {
            alert('Something went wrong. ' + message)
          }
        }
      }
      App.utils.bootSargasso(options)
    }
  </script>
</body>
</html>
```

**Note**: Hijax pages must be served over http/https. In the example directory of this repository is a python script for a simple server. Run `python localhost.py` then connect using a web browser `http://localhost:8000/example3.html` This example has an instrumented Sargasso class which logs events to illustrate the object lifecycle as pages come and go.

**Note**: data-hijax elements must have and ID and contain well formed child html elements.
```
<div id="nope" data-hijax>I'm just text. No child elements. Won't work.</div>
<div id="yup" data-hijax><p>I'm html. This works.</p></div>
```

#### Programatic page loading
`loadPageHandler(href)` is the utility function for programmatically loading a new page. EG. instead of `location.href= '/home'`, use `LoadPageHandler('/home')` This can be called to reload the page as well.

#### Finer content merging control
Set the `data-hijax-skip-unchanged` attribute on the hijax container and the content will remain static unless the markup is changed. This is useful if you have a Sargasso element that should remain instantiated and hold state when traversing several pages in a section.
```
<div id="test" data-hijax data-hijax-skip-unchanged>
  <p>This content also sometimes changes from page to page, otherwise leave it alone.</p>
</div>
```

Set `data-hijax-cache-key-selector` to a css selector of an element within the hijax container which has defined `data-hijax-cache-key-selector` to leave the content intact across pages until the key changes.
```
<div id="test" data-hijax data-hijax-cache-key-selector="#sub-element">
  <p id="sub-element" data-hijax-cache-key="some-key">This content uses a cache key to signal changes, otherwise leave it alone.</p>
</div>
```

### Using Animation Frames

To avoid any chaotic repaints you should only make Content or DOM changes inside animation frames - don't do any long processes in the responsive callbacks or things might bog down the browser UI. Sargasso.queueFrame maintains a list of pending page updates which are executed in order using the animation frame loop.

```javascript
this.queueFrame(()=>{
  this.removeClass('css-class,some-other-css-class')
  this.addClass('css-class,some-other-css-class')
  this.element.innerHTML = 'changed!'
})
```

### Using managed Web Workers
You should offload compute heavy tasks to a new thread when possible.

Sargasso controllers have built in managed Web Workers that can be defined in external scripts or inline code blobs simplifying the management of running workers.

The worker code runs when it receives an onmessage event.

A web worker, once installed, could be used by many instances so sargasso sets e.data.uid to the id on the instance that is invoking the worker which we need to pass back in the postMessage so we know who is who.

```javascript
startTask () {
  // this worker increments a counter every 3 seconds and posts a message back us
  const task = `let counters= {}
    onmessage = async (e) => {
      if(!counters[e.data.uid]) { counters[e.data.uid] = e.data.count }
      setInterval(()=>{
        self.postMessage({ uid: e.data.uid, count: ++counters[e.data.uid] })
      },30000)
    }`

  // register the worker
  this.workerStart('mytask', task)

  // start the worker working
  this.workerPostMessage('mytask', {
    count: 0
  })
}

workerOnMessage (id, data) {
  if(id === 'mytask') {
    this.queueFrame(()=>{
      this.element.innerHTML = data.count
    })
  }
  super.workerOnMessage(id, data)
}
```

### Serving modules from your project
```
npm install @pelagiccreatures/sargasso --save-dev
```

You can use the .iife.js bundles in the /dist directory of the \@PelagicCreatures modules by copying them to a public directory on your server and referencing them in script tags in your html.
```
node_modules/@PelagicCreatures/Sargasso/dist/sargasso.iife.js
```

-or-

You can also bundle sargasso modules with your own es6 code using rollup.

```
npm install npx -g
npm install rollup --save-dev
npm install @rollup/plugin-json --save-dev
npm install @rollup/plugin-commonjs --save-dev
npm install @rollup/plugin-node-resolve --save-dev
npm install rollup-plugin-terser --save-dev
```

app.js root browser javascript app for bundle
```javascript
import { Sargasso, utils, loadPageHandler } from '@pelagiccreatures/sargasso'

const boot = () => {
  utils.bootSargasso({})
}

class MyClass extends Sargasso {
  start() {
    this.queueFrame(() => {
      this.element.innerHTML += ' <strong>Started!</strong>'
    })
    super.start()
  }
}

// Register MyClass to the Sargasso framework
utils.registerSargassoClass('MyClass',MyClass)

export {
  boot
}
```

html
```html
<!DOCTYPE html>
  <body>
    <div data-sargasso-class="MyClass">Hello World</div>

    <script src="public/dist/js/userapp.iife.js" defer></script>
    <script defer>
      window.onload= () => {
        App.boot()
      }
    </script>
  </body>
</html>
```

#### Create a rollup config file
Set input and output ass needed.

rollup.config.js
```javascript
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'

import {
  terser
}
  from 'rollup-plugin-terser'

export default {
  input: './app.js', // <<< location of your es6 code

  output: {
    format: 'iife',
    file: 'public/dist/js/userapp.iife.js', // <<< where to save the browser bundle
    name: 'App', // <<< global variable where app.js exports are exposed
    sourcemap: true,
    compact: true
  },

  plugins: [
    json(),
    commonjs({}),
    nodeResolve({
      preferBuiltins: false,
      dedupe: (dep) => {
        return dep.match(/^(@pelagiccreatures|lodash|js-cookie)/)
      }
    }),
    terser({
      output: {
        comments: false
      }
    })
  ]
}
```

Make the bundle
```
npx rollup --no-treeshake --no-freeze -c rollup.config.js
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
