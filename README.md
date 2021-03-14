# [@pelagiccreatures/sargasso](https://www.npmjs.com/package/@pelagiccreatures/sargasso)

### Simple, Fast, Supervised Javascript Element Controllers framework for Web Sites and Progressive Web Apps.

```
@author Michael Rhodes (except where noted)
@license MIT
Made in Barbados 🇧🇧 Copyright © 2020-2021 Michael Rhodes
```

### Sargasso implements modern tools for:
* PWA (Progressive Web Apps)
* SPA (single-page applications)
* Web pages

### Key features
* Element controller management for creation and clean destruction of custom elements as content changes
* Fast, Debounced UI Events ('resize','scroll', etc.)
* PWA/SPA friendly event handlers for elements ('click', 'touch', etc.)
* Simplified CSS class & CSS style manipulation
* Web worker management and event subscriptions
* Templating & Rendering of element content which automatically re-renders when data changes

### Sargasso uses the latest javascript browser capabilities:
* Custom Elements
* Web Workers
* Weak Map metadata
* Animation Frames for clean page updates
* Proxy / Reflect for Observable data
* Template literals and rendering tools such as [lit-html](https://lit-html.polymer-project.org/)
* Shadow DOM

The result is lean (<50k), highly performant and clean library that simplifies the implementation of the complex technologies behind modern progressive web apps and web sites.

The Sargasso ecosystem includes modules for:

| NPM | Capabilities |
| --- | --- |
| [@pelagiccreatures/flyingfish](https://www.npmjs.com/package/@pelagiccreatures/flyingfish) | Lazy loaded images and element backgrounds using web workers |
| [@pelagiccreatures/tropicbird](https://www.npmjs.com/package/@pelagiccreatures/tropicbird) | PWA friendly Material Design components |
| [@pelagiccreatures/molamola](https://www.npmjs.com/package/@pelagiccreatures/molamola) | PWA friendly form validation & API payload management |

### Status

API Stable

We are trying to keep this project as forward looking so as to not burden this framework with lots of obsolete junk and polyfills so while it will probably not work on *every* ancient browser, it should work on any *reasonably* modern one. If you run into any problems, have questions, want to help or have any feedback let us know by opening a github issue.

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
[Try It](https://stackblitz.com/edit/sargasso-example-1)

Sargasso element controllers are javascript Objects that are subclasses of the framework's Sargasso class. Custom behavior is defined by overriding various methods of the base class.

#### Using data-sargasso-class to specify Sargasso classname
Alternately, Sargasso watches the DOM for any elements tagged with the `data-sargasso-class` attribute which can be one classname or a list of classnames.

```html
<div data-sargasso-class="MyClass, MyOtherClass">This works in all browsers</div>
```

#### Custom Element tags to specify classname

Many browsers support custom elements ([current compatibility](https://caniuse.com/#feat=custom-elementsv1) The class name is the kebab-case of your subclass name so MyClass becomes sargasso-my-class:

```html
<sargasso-my-class>This works in <em>almost all reasonably modern</em> browsers</sargasso-my-class>
```

You can also defer the instantiation using the lazy method by tagging it with `data-lazy-sargasso-class` instead of `data-sargasso-class` which will only start up the controller when the element becomes visible in the viewport.

### Sargasso Object Lifecycle

**tl;dr** The Sargasso Object life cycle is `constructor` > `start` > do stuff and until element removed from doc > `sleep` > `destroy`

When a Sargasso element appears in the document, the framework supervisor will instantiate an object and call the `start()` method of the object. When removed from the DOM, 'sleep()' will be called allowing cleanup of any resources or handlers set up in start (note that event listeners created with 'this.on' and 'this.once' are automatically cleaned up.)

### Example with event handlers

In this example `MyButtonClass` illustrates this object lifecycle and handling of UI event.

example/example2.html
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example Sargasso Element</title>
    <style>
      .container { margin-top: 150vh; margin-bottom: 33vh; }
      .clicked { color: red; }
    </style>
  </head>
  <body>
    <h3>Sargasso Element Example</h3>

    <p>
      Element is aware of when it is scrolled into the viewport, removed from the document and implements a click event which removes the element when triggered.
    </p>

    <p>Scroll down to see it in action</p>

    <div class="container">
      <button data-sargasso-class="MyButtonClass">
        Hello World!
      </button>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@pelagiccreatures/sargasso/dist/sargasso.iife.js"></script>

    <script defer>
      window.onload = () => {
        class MyButtonClass extends SargassoModule.Sargasso {
          constructor(element, options = {}) {
            options.watchViewport = true; // tell me when I am visible
            super(element, options); // important!
          }

          start() {
            this.once("click", e => {
              // add click event handler
              e.preventDefault();
              this.clicked();
            });
            super.start(); // important!
          }

          sleep() {
            this.queueFrame(() => {
              document.body.innerHTML = "I'm gone";
            })
            super.sleep();
          }

          enterViewport() {
            this.queueFrame(() => {
              this.element.innerHTML += " In viewport!  Click me!";
            });
          }

          // use an animation frame to mutate the DOM
          clicked() {
            const frame = () => {
              // set up a DOM mutation frame
              this.addClass("clicked");
              this.element.innerHTML += " Clicked!";
            };
            this.queueFrame(frame); // schedule it

            // remove it from the document to illustrate Sargasso lifecycle
            setTimeout(() => {
              this.element.remove();
            }, 1000);
          }
        }

        SargassoModule.utils.registerSargassoClass("MyButtonClass",MyButtonClass);

        // Start Sargasso
        SargassoModule.utils.bootSargasso();
      };
    </script>
  </body>
</html>
```
[Try It](https://stackblitz.com/edit/sargasso-example-2)

### Sargasso Class:

All Sargasso element controllers are sub classes of Sargasso

#### Properties
| property | description |
| -------- | ----------- |
| this.element | the element we are controlling |

Your Sargasso subclasses can subscribe to event feeds in order to be notified of events.

#### Overridable Methods
| method | description |
| ------ | ----------- |
| constructor(element, options = {}) | subscribe to services by setting appropriate options properties before calling `super(element,options)`. All default to false so only set the ones you need to know about `watchDOM`, `watchScroll`, `watchResize`, `watchOrientation`, `watchViewport` eg. `options.watchScroll = true` |
| start() | set up any interactions and event handlers for the element content such as click handlers, touch events, etc. Generally should call super.start() at head of function |
| sleep() | remove any event **foreign** event handlers defined in start() and cleanup references - event handlers created with 'this.on' and 'this.once' are automatically removed by sargasso. Generally should call super.sleep() at tail of function|

#### Handlers for sargasso managed events, override these as needed to perform any needed behavior:
| method | description |
| ------ | ----------- |
| DOMChanged(root) | called when DOM changes if options 'watchDOM: true' was set in constructor. `root` is root element where change occurred such as body or root element of a shadow dom |
| didScroll() | called when scroll occurs if options 'watchScroll: true' was set in constructor |
| didResize() | called when resize changes if options 'watchResize: true' was set in constructor |
| enterViewport() | called  when element is entering viewport if options 'watchViewport: true' was set in constructor |
| exitViewport() | called when element is exiting viewport if options 'watchViewport: true' was set in constructor |
| newPage(old, new) | on a new page |
| didBreakpoint() | new screen width breakpoint |
| workerOnMessage (id, data = {}) | `id` is the id of the worker sending the message (can have as many as you want). Any payload from the worker's `postMessage` call is in data.xxx as defined by the worker. |
| observableChanged(id, property, value) | if watching an observable object this is called on observable data change. `id` is the id of the observable (can have as many as you want) |
| enterFullscreen() | *experimental API in flux* called if options 'watchOrientation: true' when user rotates phone or if setFullscreen is called |
| exitFullscreen() | *experimental API in flux* called on exit fullscreen |

#### CSS Methods
| method | description |
| ------ | ----------- |
| hasClass('classname') | returns true if this.element has cssclass. |
| addClass('classname') | add classname or array of classnames to this.element eg: 'class1,class2' |
| removeClass('classname')  | remove classname or array of classnames from this.element eg: 'class1,class2' |
| setCSS({})  | set css pairs on this.element {'padding':'1em','margin':'2em'} |

#### Register Event Methods
| method | description |
| ------ | ----------- |
| on(container,fn) | attach an undelegated event handler to element |
| once(container,fn) | attach undelegated event handler to this.element that executes only once (automatically removes the event handler on first call) |
| off(container) | remove undelegated event handler from this.element |
| on(container,selector,fn) | attach delegated event handler scoped to a css selector for an element within this.element |
| once(container,selector,fn) | attach delegated event handler scoped to a css selector for an element within this.element that executes only once (automatically removes event handler on first call) |
| off(container,selector) | remove delegated event handler scoped to css selector for an element within this.element |

#### Utility Methods:
| method | description |
| ------ | ----------- |
| getMetaData(key) | return this.element's metadata value for key (implemented as a weak map.) Use this for any key value pairs you like. All data is destroyed when Sargasso object is destroyed. |
| setMetaData(key,value) | set this.element's metadata value for key |
| isVisible() | true if this.element is visible |

### Progressive Web Apps

When HIJAX is enabled, Sargasso automatically captures `<a href="..">` tags and calls the LoadPageHandler instead of allowing the browser load and replace entire pages natively. Usually a web site or app has a boilerplate html wrapper that is the same for every page with well defined content areas that change from page to page. When pages are loaded via HIJAX only the changed content is merged with the current page, replacing content in containers marked with `data-hijax` leaving heavy weight wrapper elements, persistent javascript, css and sargasso elements undisturbed. You can define as many dynamic elements in the wrapper as needed. Following this scheme allows for deep linking and search engine discovery while also speeding page load for an "app" like experience for real browsers.

The Sargasso supervisor takes care of cleaning up any instantiated Sargasso element controllers in the old content by calling sleep() before the content is removed then sargasso elements in the new content are instantiated and start() is called. That way Sargasso element controllers can be cleanly managed on progressive web app pages without leaving dangling event handlers and memory leaks.

You can optionally make any link be ignored by hijax by setting the `<a href=".." data-no-hijax>`. Offsite links and links with targets are automatically ignored.  

```html
<body>
  <p>this is static content like header and navigation</p>

  <div id="content" data-hijax>
    <p>This is dynamic - it changes from page to page</p>
  </div>

  <p>this is also static content such as a site wide footer</p>

  <script src='https://cdn.jsdelivr.net/npm/@pelagiccreatures/sargasso/dist/sargasso.iife.js'></script>
  <script defer>
    window.onload = () => {
      let options = {
        hijax: {
          onError: (level, message) => {
            alert('Something went wrong. ' + message)
          }
        }
      }
      SargassoModule.utils.bootSargasso(options)
    }
  </script>
</body>
```
[Try It](https://stackblitz.com/edit/sargasso-hijax)

**Note:** `data-hijax` elements must have and ID attribute defined and must contain well formed child html elements.

```html
<div id="nope" data-hijax>I'm just text. No child elements. Won't work.</div>
<div id="yup" data-hijax><p>I'm html. This works.</p></div>
```

#### Programatic Page Loading

`SargassoModule.loadPageHandler(href)` is the utility function for programmatically loading a new page. EG. instead of using `location.href= '/home'`, use `loadPageHandler('/home')` This can be called to reload the page as well.

#### Content Merging Fine Control

Set the `data-hijax-skip-unchanged` attribute on a hijax container and the content will remain static unless the markup is changed. This is useful if you have a Sargasso element that should remain instantiated and hold state when traversing several pages in a section but change when you move to a new section of the site.
```html
<div id="test" data-hijax data-hijax-skip-unchanged>
  <p>This content also sometimes changes from page to page, otherwise leave it alone.</p>
</div>
```

Set `data-hijax-cache-key-selector` to a css selector of an element within a hijax container which has defined `data-hijax-cache-key-selector` to leave the content intact across pages until the key value changes.
```html
<div id="test" data-hijax data-hijax-cache-key-selector="#sub-element">
  <p id="sub-element" data-hijax-cache-key="some-key">This content uses a cache key to signal changes, otherwise leave it alone.</p>
</div>
```

### Using Animation Frames

To avoid chaotic repaints, make Content or DOM changes inside animation frames - don't do any long processes in the responsive callbacks or things might bog down the browser UI. Sargasso.queueFrame maintains a list of pending page updates which are executed in order using the request animation frame loop.

| method | description |
| ------ | ----------- |
| queueFrame(function) | queue a function to execute that changes the DOM. To keep pages performant, the function should not be heavy weight or computationally intensive |

Example
```javascript
const frame = () => {
  this.removeClass('css-class,some-other-css-class')
  this.addClass('css-class,some-other-css-class')
  this.element.innerHTML = 'changed!'
}
this.queueFrame(frame)
```

### Web Components

[Using Shadow Dom](https://developers.google.com/web/fundamentals/web-components/shadowdom)

Sargasso controllers are web components. If you want to further encapsulate the element from the rest of the page, pass `options.shadowDOM = true` when calling `super(element,options)` in your Sargasso subclass constructor and Sargasso will create a shadow DOM for scoping styles and child elements to the element. Sargasso elements within the shadow DOM are under supervision (new elements are instantiated and destroyed as needed).

```
class MyClass extends SargassoModule.Sargasso {
	constructor(element, options = {}) {
		options.shadowDOM = true
		super(element, options)
	}

	start() {
		super.start()
	}
}
```

### ObservableObjects

Observable objects implement a notification scheme for tracking data changes. (the implementation is using javascript Proxy and Reflect) These objects can be shared across elements for real-time display of information.

| method | description |
| ------ | ----------- |
| observableStart (id, data) | start watching for changes in observable object. `id` is an application unique identifier for the shared data. `data` is an optional JS data object to initialize the values |
| observableStop (id) | stop watching for changes in observable data |
| getObservable (id) | get underlying ObservableObject instance for `id` |

```javascript
let args = { name: 'World!', cssClass: 'red' }
let observable = new SargassoModule.ObservableObject('shared-data', args)
```

Then bind a function to the observable instance which is called when the data changes:
```javascript
let watch = (id, property, value) => {
  console.log('id:' + id + ' property:' + property + ' is now:' + value)
}

observable.bind('uniqueID', watch)

// any changes to the data will trigger the watch function
observable.data.name = 'New Name'
observable.set('name','New Name') // same thing different syntax
```

Sargasso Elements can subscribe to ObservableObjects that are owned by the element or were defined externally.
```javascript
class MyClass extends SargassoModule.Sargasso {
  start() {
    super.start()
    this.observableStart('shared-data'); // find or create an observable with id 'shared-data'
  }

  observableChanged(id, property, value) {
    // Do something with the change like re-display the element with new values or something.
    // DON'T make a change to the data here tho or you will have an endless loop on your hands.
  }
}
```

### Templates and Rendering
Complete example of an element that renders on data updates using an ObservableObject and `li-html` templates.

| method | description |
| ------ | ----------- |
| setRenderer (renderer) | set a rendering function for rendering (such as lit-html render) |
| setTemplate (template) | set a template function for rendering (such as a lit-html template function) |
| setTemplateArgs (args) | set template arguments |
| render () | render template into element |

examples/example5.html
```html
<!DOCTYPE html>
<html>
<head>
  <title>Example Sargasso Element w/Data Observing &amp; Template rendering</title>
  <style>
    .red { color: #f00; }
    .green { color: #0f0; }
    .blue { color: #00f; }
  </style>
</head>
<body>
  <h3>Example Sargasso Element w/Data Observing &amp; Template rendering</h3>

  <sargasso-my-class></sargasso-my-class>

  <script src="https://cdn.jsdelivr.net/npm/@pelagiccreatures/sargasso/dist/sargasso.iife.js"></script>
  <script defer type="module">
    import {
      html,render
    } from 'https://unpkg.com/lit-html?module'

    import {
      repeat
    } from 'https://unpkg.com/lit-html/directives/repeat.js?module'

    window.onload = () => {

      let args = {
        name: 'World!',
        cssClass: 'red',
        list: [{id:1,name:'one'},{id:2,name:'two'},{id:3,name:'three'}]
      }
      let observed = new SargassoModule.ObservableObject('shared-data',args)

      // define MyClass as a subclass of Sargasso
      // sargasso will render the template when data in
      // observed ObservableObject is changed
      class MyClass extends SargassoModule.Sargasso {
        start() {
          super.start()
          // define a template
          this.setRenderer(render)
          this.setTemplate((args) => html`
            <p class=${args.cssClass}>Hello ${args.name} (${args.cssClass})</p>
            <strong>List</strong>
            <ul>
              ${repeat(args.list, (item) => item.id, (item, index) => html`
                <li>${index}: ${item.name}</li>
            `)}
            </ul>
          `)

          // hook up observable data
          this.setTemplateArgs(this.observableStart('shared-data'))
        }
      }

      // Register MyClass to the Sargasso framework
      SargassoModule.utils.registerSargassoClass('MyClass', MyClass)

      // Start Sargasso
      SargassoModule.utils.bootSargasso()

      // repeatedly and randomly change the observed data
      let classes = ['red','green','blue']
      let named = ['Bob','Carol','Ted','Alice']

      setInterval(()=>{
        observed.data.cssClass = classes[Math.floor(Math.random() * classes.length)]
        observed.data.name = named[Math.floor(Math.random() * named.length)]
      },1000)
    }
  </script>
</body>
</html>
```
[Try It](https://stackblitz.com/edit/sargasso-example-5)

### Using managed Web Workers
You should offload compute heavy tasks to a new thread when possible.

| method | description |
| ------ | ----------- |
| workerStart(id, codeOrURL) | start a web worker with id. Ignored if worker id already installed. |
| workerPostMessage(id, data {}) | send the worker tagged with `id` a message. the message must be an object which can have any structure you want to pass to the worker |

Sargasso controllers have built in managed Web Workers that can be defined in external scripts or inline code blobs simplifying the management of running workers.

The worker code runs when it receives an onmessage event.

A web worker, once installed, could be used by many instances so sargasso sets e.data.uid to the id on the instance that is invoking the worker which we need to pass back in the postMessage so we know who is who.

example/example4.html
```html
<!DOCTYPE html>
<html>
<head>
  <title>Example Sargasso Element</title>
</head>
<body>
  <h3>First Sargasso Element</h3>

  <sargasso-my-class data-name="custom" data-count-to="10">Will count to 10</sargasso-my-class>

  <div data-sargasso-class="MyClass" data-name="div" data-count-to="20">Will count to 20</div>

  <script src="https://cdn.jsdelivr.net/npm/@pelagiccreatures/sargasso/dist/sargasso.iife.js"></script>
  <script defer>
    window.onload = () => {

      // define MyClass as a subclass of Sargasso
      class MyClass extends SargassoModule.Sargasso {
        start() {
          super.start()

          // this worker increments a counter every second and posts a message back us
          const task = `let counters= {}
            onmessage = async (e) => {
              if(!counters[e.data.uid]) { counters[e.data.uid] = e.data.count }
              setInterval(()=>{
                self.postMessage({ uid: e.data.uid, me:e.data.me, count: ++counters[e.data.uid] })
              },1000)
            }`

          // register the worker
          this.workerStart('mytask', task)

          // start the worker working
          this.workerPostMessage('mytask', {
            me: this.element.getAttribute('data-name'),
            count: 0
          })
        }

        workerOnMessage (id, data) {
          if(id === 'mytask') { // only neeed to test this is running multiple workers
            if(data.count == this.element.getAttribute('data-count-to')) {
              this.stopWorker('mytask')
            }
            this.queueFrame(()=>{
              this.element.innerHTML = data.me + ' says ' + data.count
            })
          }
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
[Try It](https://stackblitz.com/edit/sargasso-example-4)


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
      },
      keep_classnames: true,
      keep_fnames: true
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
