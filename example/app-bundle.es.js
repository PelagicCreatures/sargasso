/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" include="camelCase,debounce"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/*
	some libs we need to package in kludgy ways... TODO: revisit when these are modernized

	we only need a little bit of lodash and js-cookie is peculiar... the npm is not in sync with github.
*/
(function (factory) {
	var registeredInModuleLoader;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[i];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
	}

	function init (converter) {
		function api () {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ? converter.write(value, key) : encodeURIComponent(String(value))
				.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes)
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */)
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */)
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api
	}

	return init(function () {})
}));

const Cookies = window.Cookies;

/**
	Utility routines for Sargasso classes

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes
**/

const _hasClass = (element, cssClass) => {
	const className = element.className || '';
	const classes = className.split(/\s+/);
	return classes.indexOf(cssClass) !== -1
};

const _addClass = (element, cssClass) => {
	const className = element.className || '';
	const classes = className.split(/\s+/);
	if (classes.indexOf(cssClass) === -1) {
		classes.push(cssClass);
		element.className = classes.join(' ');
	}
};

const _removeClass = (element, cssClass) => {
	const className = element.className || '';
	const classes = className.split(/\s+/);
	if (classes.indexOf(cssClass) !== -1) {
		classes.splice(classes.indexOf(cssClass), 1);
		element.className = classes.join(' ');
	}
};

const _isVisible = (element) => {
	return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length)
};

const _inViewPort = (element, container = window) => {
	const rect = element.getBoundingClientRect();
	const visible = _isVisible(element);
	const aboveTheTop = (rect.bottom < 0);
	let belowTheFold;

	if (container.self === window) {
		belowTheFold = (rect.top > (window.innerHeight || document.documentElement.clientHeight));
	} else {
		belowTheFold = (rect.top > container.clientHeight);
	}

	// console.log('_inViewPort', visible, belowTheFold, aboveTheTop)

	return (visible && !belowTheFold && !aboveTheTop)
};

const elementTools = {
	hasClass: _hasClass,
	addClass: _addClass,
	removeClass: _removeClass,
	isVisible: _isVisible,
	inViewPort: _inViewPort
	// setCSS: _css
};

/**
	Shared event observers used by Sargasso classes.

	When these observers have subscribers they watch for events
	and notify the subscriber's specific event handler
	method when they occur.

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes

	Subscribers to these services must imlement handler methods
	EG. watchDOM, watchScroll, watchResize, watchOrientation
**/

class ObserverSubscriptionManager {
	constructor (options) {
		this.options = options;
		this.observers = [];
		this.pendingAnimationFrame = undefined;
		this.frameQueue = [];
	}

	subscribe (observer) {
		if (!this.observers.length) {
			this.wakeup();
		}
		this.observers.push(observer);
	}

	unSubscribe (observer) {

		if (this.observers.indexOf(observer) !== -1) {
			this.observers.splice(this.observers.indexOf(observer), 1);
		}

		if (!this.observers.length) {
			this.sleep();
		}
	}

	sleep () {
	}

	wakeup () {
	}

	notifyObservers (event, params) {
		for (let i = 0; i < this.observers.length; i++) {
			if (this.observers[i][event]) {
				this.observers[i][event].apply(this.observers[i], params || []);
			}
		}
	}

	flushQueue () {
		if (this.pendingAnimationFrame) {
			cancelAnimationFrame(this.pendingAnimationFrame);
			this.pendingAnimationFrame = undefined;
		}
		this.frameQueue = [];
	}

	queueFrame (frame) {
		this.frameQueue.push(frame.bind(this));
		if (!this.pendingAnimationFrame) {
			this.pendingAnimationFrame = requestAnimationFrame(() => {
				this.processQueue();
			});
		}
	}

	processQueue () {
		this.pendingAnimationFrame = undefined;
		var toProcess = this.frameQueue.slice(0);
		this.frameQueue = [];
		for (var i = 0; i < toProcess.length; i++) {
			toProcess[i]();
		}
	}
}

class DOMWatcher extends ObserverSubscriptionManager {
	constructor (options) {
		super(options);

		// debounce - just need to know if a change occured, not every change
		this.mutationHandler = debounce((mutations, observer) => {
			this.observeDOM(mutations, observer);
		}, 100, {
			maxWait: 250
		});

		this.mutationObserver = new MutationObserver(this.mutationHandler, false);
	}

	subscribe (observer) {
		super.subscribe(observer);
		observer.watchDOM();
	}

	wakeup () {
		super.wakeup();
		this.mutationObserver.observe(document.body, {
			childList: true,
			subtree: true
		});
	}

	sleep () {
		super.sleep();
		this.mutationObserver.disconnect();
	}

	observeDOM () {
		this.notifyObservers('watchDOM');
	}
}

class ScrollWatcher extends ObserverSubscriptionManager {
	constructor (options) {
		super(options);

		this.scrollElement = this.options.scrollElement || window;
		this.lastscroll = this.scrollTop();
		this.scrolling = false;

		// use 'scroll' event to start scroll loop unless it's already looping
		this.trigger = () => {
			if (!this.scrolling) {
				this.scrollLoop();
			}
		};

		this.scrollLoop = () => {
			if (this.lastscroll !== this.scrollTop()) { // are we still scrolling?
				this.scrolling = true;
				this.lastscroll = this.scrollTop();
				this.watchScroll(); // tell our observers
				const frame = () => {
					this.scrollLoop();
				};
				this.queueFrame(frame);
			} else {
				this.scrolling = false; // exit the scroll loop and wait for next 'scroll' event
			}
		};
	}

	subscribe (observer) {
		super.subscribe(observer);
		observer.watchScroll();
	}

	wakeup () {
		super.wakeup();
		this.scrollElement.addEventListener('scroll', this.trigger, false);
	}

	sleep () {
		super.sleep();
		this.scrollElement.removeEventListener('scroll', this.trigger);
	}

	inViewPort (element) {
		return elementTools.inViewPort(element, this.scrollElement)
	}

	watchScroll () {
		this.notifyObservers('watchScroll');
	}

	scrollTop (newTop) {
		if (this.scrollElement === window) {
			if (newTop !== undefined) {
				window.scrollTo(0, newTop);
			} else {
				return window.pageYOffset
			}
		} else {
			if (newTop !== undefined) {
				this.scrollElement.scrollTop = newTop;
			} else {
				return this.scrollElement.scrollTop
			}
		}
	}
}

class ResizeWatcher extends ObserverSubscriptionManager {
	constructor (options) {
		super(options);

		this.debounce = debounce(() => {
			this.watchResize();
		}, 250);
	}

	subscribe (observer) {
		super.subscribe(observer);
		observer.watchResize();
	}

	wakeup () {
		super.wakeup();
		window.addEventListener('resize', this.debounce, false);
	}

	sleep () {
		super.sleep();
		window.removeEventListener('resize', this.debounce);
	}

	watchResize () {
		this.notifyObservers('watchResize');
	}
}

class OrientationWatcher extends ObserverSubscriptionManager {
	constructor (options) {
		super(options);

		if ('onorientationchange' in window) {
			elementTools.addClass(document.body, 'have-orientation');
		} else {
			elementTools.addClass(document.body, 'no-orientation');
		}

		this.debounce = debounce(() => {
			this.watchOrientation();
		}, 250);
	}

	subscribe (observer) {
		super.subscribe(observer);
		observer.watchOrientation();
	}

	wakeup () {
		super.wakeup();
		if ('onorientationchange' in window) {
			window.addEventListener('orientationchange', this.debounce, false);
		}
	}

	sleep () {
		super.sleep();
		if ('onorientationchange' in window) {
			window.removeEventListener('orientationchange', this.debounce);
		}
	}

	watchOrientation () {
		this.notifyObservers('watchOrientation');
	}
}

// keep track of who is using web workers and
// cleanup dangling worker when no subscribers remain
class WorkerWatcher extends ObserverSubscriptionManager {
	constructor (options) {
		super(options);
		this.workers = {};
	}

	registerWorker (id, codeOrURL) {
		if (!this.workers[id]) {
			// create a worker for the id if worker id is unknown

			let blobURL = codeOrURL;

			let revoke = false;
			if (!codeOrURL.match(/^(http|\/)/i)) {
				const blob = new Blob([codeOrURL], {
					type: 'text/javascript'
				});
				blobURL = URL.createObjectURL(blob);
				revoke = true;
			}

			this.workers[id] = {
				worker: new Worker(blobURL),
				observers: []
			};

			if (revoke) {
				URL.revokeObjectURL(blobURL);
			}

			this.workers[id].worker.onmessage = (e) => {
				this.workerMessage(id, e);
			};
		}

		return this.workers[id].worker
	}

	subscribe (observer, id) {
		if (!this.workers[id]) {
			throw (new Error('worker ' + id + ' does not exist'))
		}
		const workerObservers = this.workers[id].observers;
		workerObservers.push(observer);
		super.subscribe(observer);
	}

	unSubscribe (observer, id) {
		if (!this.workers[id]) {
			throw (new Error('worker ' + id + ' does not exist'))
		}

		const workerObservers = this.workers[id].observers;
		if (workerObservers.indexOf(observer) !== -1) {
			workerObservers.splice(workerObservers.indexOf(observer), 1);
		}

		if (!workerObservers.length) {
			this.workers[id].worker.terminate();
			delete this.workers[id];
		}

		super.unSubscribe(observer);
	}

	workerMessage (id, e) {
		this.notifyObservers('workerMessage', [id, e]);
	}

	wakeup () {
		super.wakeup();
	}

	sleep () {
		super.sleep();
	}
}

// build subscription services

let theDOMWatcher, theScrollWatcher, theResizeWatcher, theOrientationWatcher, theWorkerWatcher;

const startServices = (options) => {
	theDOMWatcher = new DOMWatcher(options);
	theScrollWatcher = new ScrollWatcher(options);
	theResizeWatcher = new ResizeWatcher(options);
	theOrientationWatcher = new OrientationWatcher(options);
	theWorkerWatcher = new WorkerWatcher(options);
};

/**
	Sargasso

	Base class for responsive Sargasso element controllers. Subclass this to
	define specific behavior. If you mutate the DOM in your code you
	should use frames for best results. EG. LazyBackground

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes
**/

let unique = 0;
const liveElements = [];

/*
	All subclasses of Sargasso must register the class so that
	the SargassoSupervisor can instantiate them.

	EG.
		class mySubclass extends Sargasso {}
		registerSargassoClass('mySubclass',mySubclass)

	Then an instance of mySubclass will be attached to the element
	when it appears in the DOM:

		<div data-sargasso-class="mySubclass"></div>

*/

const registeredClasses = {};
const registerSargassoClass = (className, object) => {
	registeredClasses[className] = object;
};

const eventNames = [
	'DOMChanged', 'didScroll', 'didResize', 'didBreakpoint', 'enterViewport', 'exitViewport', 'enterFullscreen', 'exitFullscreen', 'newPage', 'elementEvent'
];

class Sargasso {
	constructor (element, options = {}) {
		this.uid = ++unique;
		this.element = element;
		this.options = options;
		this.pendingAnimationFrame = undefined;
		this.frameQueue = [];
		this.mortal = true;
		this.isInViewport = false;
		this.workers = {};

		if (!this.element.registeredResponsiveControllers) {
			this.element.registeredResponsiveControllers = [];
		}
		this.element.registeredResponsiveControllers.push(this);

		liveElements.push(this);
	}

	start () {

		// subscribe to desired event services

		if (this.options.watchDOM) {
			theDOMWatcher.subscribe(this);
		}

		if (this.options.watchScroll || this.options.watchViewport) {
			theScrollWatcher.subscribe(this);
		}

		if (this.options.watchResize || this.options.watchViewport) {
			theResizeWatcher.subscribe(this);
		}

		if (this.options.watchOrientation || this.options.watchViewport) {
			theOrientationWatcher.subscribe(this);
		}

		/*
			listen for 'sargasso' events
			Call the method named in e.detail.sargassoEvent or call this.elementEvent
		*/

		this.elementListener = (e) => {
			if (e.detail && e.detail.sargassoEvent && eventNames.indexOf(e.detail.sargassoEvent) !== -1) {
				this[e.detail.sargassoEvent].apply(this, e.detail.sargassoEventOptions || []);
			} else {
				this.elementEvent(e);
			}
		};

		this.element.addEventListener('sargasso', this.elementListener);
	}

	notifyAll (event, params) {
		if (eventNames.indexOf(event) === -1) {
			throw (new Error('invalid event name ' + event))
		}
		for (let i = 0; i < liveElements.length; i++) {
			const peer = liveElements[i];
			if (peer !== this && peer[event]) {
				peer[event].apply(peer, params);
			}
		}
	}

	notifyElement (element, event, params) {
		if (eventNames.indexOf(event) === -1) {
			throw (new Error('invalid event name ' + event))
		}
		for (let i = 0; i < this.element.registeredResponsiveControllers.length; i++) {
			const peer = this.element.registeredResponsiveControllers[i];
			if (peer !== this && peer[event]) {
				peer[event].apply(peer, params);
			}
		}
	}

	/*
		manage the animation frame queue for this element
	*/

	flushQueue () {
		if (this.pendingAnimationFrame) {
			cancelAnimationFrame(this.pendingAnimationFrame);
			this.pendingAnimationFrame = undefined;
		}
		this.frameQueue = [];
	}

	processQueue () {
		this.pendingAnimationFrame = undefined;
		var toProcess = this.frameQueue.slice(0);
		this.frameQueue = [];
		for (var i = 0; i < toProcess.length; i++) {
			toProcess[i]();
		}
	}

	/*
		queueFrame - schedule a task in the requestAnimation frame event loop

		Call this to queue functions that mutate the DOM (make changes to html)

		EG:
		let frame = () => {
			this.element.addClass('big')
		}
		this.queueFrame(frame)

		The frame will then be executed in the next requested animation frame
	*/

	queueFrame (frame) {
		this.frameQueue.push(frame.bind(this));
		if (!this.pendingAnimationFrame) {
			this.pendingAnimationFrame = requestAnimationFrame(() => {
				this.processQueue();
			});
		}
	}

	// override this if you have any listeners to clean up that you started in your subclass
	sleep () {
		if (this.options.watchDOM) {
			theDOMWatcher.unSubscribe(this);
		}

		if (this.options.watchScroll || this.options.watchViewport) {
			theScrollWatcher.unSubscribe(this);
		}

		if (this.options.watchResize || this.options.watchViewport) {
			theResizeWatcher.unSubscribe(this);
		}

		if (this.options.watchOrientation || this.options.watchViewport) {
			theOrientationWatcher.unSubscribe(this);
		}

		this.element.removeEventListener('sargasso', this.elementListener);
	}

	// called when this.element is removed from the DOM
	// you normally don't need to call this
	destroy () {

		this.flushQueue();

		this.sleep();

		this.stopAllWorkers();

		if (this.element.registeredResponsiveControllers) {
			if (this.element.registeredResponsiveControllers.indexOf(this) !== -1) {
				this.element.registeredResponsiveControllers.splice(this.element.registeredResponsiveControllers.indexOf(this), 1);
			}
		}

		this.element = null;

		if (liveElements.indexOf(this) !== -1) {
			liveElements.splice(liveElements.indexOf(this), 1);
		}
	}

	// these handlers are called by the event services - prolly should
	// leave these alone

	watchDOM () {
		this.DOMChanged();
	}

	watchScroll () {
		if (this.options.watchViewport) {
			this.inViewport();
		}

		this.didScroll();
	}

	watchResize () {
		if (this.options.watchViewport) {
			this.inViewport();
		}

		this.didResize();
	}

	watchOrientation () {
		if (window.orientation && (window.orientation === 90 || window.orientation === 270)) {
			this.wantFullscreen(true);
		} else {
			this.wantFullscreen(false);
		}
	}

	inViewport () {
		if (theScrollWatcher.inViewPort(this.element)) {
			if (!this.isInViewport) {
				this.enterViewport();
				this.isInViewport = true;
			}
		} else {
			if (this.isInViewport) {
				this.exitViewport();
				this.isInViewport = false;
			}
		}
	};

	// you can call this from a subclass controller such as an 'enlarge to full screen' button
	// otherwise if watchOrientation is set it will do this when phone is in lanscape
	// it would be nice to acually use the experimental requestFullScreen thing but
	// you can't do that on rotate at the moment, only on click.

	wantFullscreen (want) {
		if (want) {
			this.enterFullscreen();
		} else {
			this.exitFullscreen();
		}
	}

	/*
		Event Handlers:
		Override these methods in your subclass to take action on these events
	*/

	// something changed on the page
	DOMChanged () {}

	// scroll occured
	didScroll () {}

	// resize occured
	didResize () {}

	// new breakpoint
	didBreakpoint () {}

	// element entered the viewport
	enterViewport () {}

	// element exited the viewport
	exitViewport () {}

	// element entered fullscreen
	enterFullscreen () {}

	// element exited fullscreen
	exitFullscreen () {}

	// page changed
	newPage (oldPath, newPath) {}

	// element received a 'sargasso' custom event from somewhere
	elementEvent (e) {}

	// element utilities

	hasClass (cssClass) {
		return elementTools.hasClass(this.element, cssClass)
	}

	addClass (cssClass) {
		elementTools.addClass(this.element, cssClass);
	}

	removeClass (cssClass) {
		elementTools.removeClass(this.element, cssClass);
	}

	setCSS (cssObject) {
		// elementTools.setCSS(this.element, cssObject)
	}

	isVisible () {
		return elementTools.isVisible(this.element)
	}

	scrollTop (newTop) {
		return theScrollWatcher.scrollTop(newTop)
	}

	/*
		Worker management

		Offload compute heavy tasks to a new thread and listen for result

		Pass it a url of a web worker js file or create an inine web worker
		from string of raw code such as:

		let mycode = `onmessage = function (e) {
			const baseNumber = e.data
			let result = 0
			for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {
				result += Math.atan(i) * Math.tan(i)
			};
			postMessage('Done doing pointless math: ' + result)
		}`

		this.workerStart('pointless-math', mycode)

		this.workerPostMessage('pointless-math', 16)
	*/

	workerStart (id, codeOrURL) {
		this.workers[id] = theWorkerWatcher.registerWorker(id, codeOrURL);
		theWorkerWatcher.subscribe(this, id);
		return this.workers[id]
	}

	workerPostMessage (id, message) {
		if (!message.uid) {
			message.uid = this.uid;
		}
		if (this.workers[id]) {
			this.workers[id].postMessage(message);
		}
	}

	workerMessage (id, e) {
		if (e.data.uid === this.uid) {
			this.workerOnMessage(id, e);
		}
	}

	// subclass should overide this to listen to workers
	workerOnMessage (id, e) {

	}

	// stop a worker
	stopWorker (id) {
		if (this.workers[id]) {
			theWorkerWatcher.unSubscribe(this, id);
			delete this.workers[id];
		}
	}

	// cleanup all workers
	stopAllWorkers () {
		for (const worker in this.workers) {
			this.stopWorker(worker);
		}
	}

	// experimental

	nativeRequestFullScreen () {
		if (document.fullscreenElement) {
			if (document.fullscreenElement === this.element) {
				return
			}
			document.exitFullscreen();
		}

		this.element.requestFullscreen();
	}

	nativeExitFullScreen () {
		if (document.fullscreenElement && document.fullscreenElement === this.element) {
			document.exitFullscreen();
		}
	}
}

/**
	LazyInstantiate

	Sargasso class watches the document for new content and instantiates
	Sargasso classes liested in element's data-lazy-sargasso-class only when
	the element scrolls into view

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes
**/

class LazyInstantiate extends Sargasso {
	constructor (element, options = {}) {
		options.watchScroll = true;
		options.watchResize = true;
		super(element, options);
		this.mortal = false;
	}

	didResize () {
		super.didResize();
		this.lazyHandler();
	}

	didScroll () {
		super.didScroll();
		this.lazyHandler();
	}

	// watch viewport and instantiate lazy-instantiate-responsive things when visible
	lazyHandler () {
		const els = document.querySelectorAll('[data-lazy-sargasso-class]');
		for (let i = 0; i < els.length; i++) {
			const element = els[i];
			if (theScrollWatcher.inViewPort(element)) {
				const cls = element.getAttribute('data-lazy-sargasso-class').split(/\s*,\s*/);
				for (let j = 0; j < cls.length; j++) {
					const thing = new registeredClasses[cls[j]](els[i]);
					thing.start();
				}
				element.removeAttribute('data-lazy-sargasso-class');
			}
		}
	}
}

registerSargassoClass('LazyInstantiate', LazyInstantiate);

/**
	SargassoSupervisor

	Sargasso class which watches the document for new content and instantiates
	Sargasso classes liested in element's data-sargasso-class attribute.
	Once instantiated, Sargasso objects are trash collected when element is
	removed from the DOM

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes
**/

class SargassoSupervisor extends Sargasso {
	constructor (element, options = {}) {
		super(element, {
			watchDOM: true
		});
		this.mortal = false;
		this.lazy = new LazyInstantiate(element, options);
	}

	start () {
		this.lazy.start();
		super.start();
	}

	instantiate (element) {
		const cls = element.getAttribute('data-sargasso-class').split(/\s*,\s*/);
		for (let i = 0; i < cls.length; i++) {
			try {
				const thing = new registeredClasses[cls[i]](element);
				thing.start();
			} catch (e) {
				console.log('error instantiating ' + cls[i], e, registeredClasses);
			}
		}

		element.removeAttribute('data-sargasso-class');
	}

	newPage () {
		this.doIt();
	}

	DOMChanged () {
		this.doIt();
	}

	doIt () {
		const elements = document.querySelectorAll('[data-sargasso-class]');
		for (const element of elements) {
			this.instantiate(element);
		}

		// check for dangling live elements and kill them
		const toCleanup = [];
		for (let i = 0; i < liveElements.length; i++) {
			if (liveElements[i].mortal && !document.body.contains(liveElements[i].element)) {
				toCleanup.push(liveElements[i]);
			}
		}
		for (let i = 0; i < toCleanup.length; i++) {
			toCleanup[i].destroy();
		}
	}
}

registerSargassoClass('SargassoSupervisor', SargassoSupervisor);

/**
	Breakpoints

	Sargasso class that maintains css classes on the document body
	to be used in css rules for implementing visibility and
	responsive behavior

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes
**/

const materialBreakpoints = [{
	className: 'screen-xs',
	maxWidth: 599
}, {
	className: 'screen-sm',
	maxWidth: 1023
}, {
	className: 'screen-md',
	maxWidth: 1439
}, {
	className: 'screen-lg',
	maxWidth: 1999
}, {
	className: 'screen-xl',
	maxWidth: undefined
}];

class Breakpoints extends Sargasso {
	constructor (element, options = {}) {
		options.watchResize = true;
		super(element, options);

		if (options.widths) {
			this.options.widths = options.widths;
		} else {
			this.options.widths = materialBreakpoints;
		}

		this.scale = undefined;
		this.disabled = false;
		this.forceScale = undefined;
		this.orientation = undefined;

		this.widths = [];
		this.classes = [];
	}

	start () {
		super.start();
		let css = '.show-hide{display:none;}\n';
		this.widths.push(0);
		for (let i = 0; i < this.options.widths.length; i++) {
			if (this.options.widths[i].maxWidth) {
				this.widths.push(this.options.widths[i].maxWidth);
			}
			this.classes.push(this.options.widths[i].className);

			css += '.' + this.options.widths[i].className + ' .hidden-' + this.options.widths[i].className + '{display:none;}\n';
			css += '.not-' + this.options.widths[i].className + ' .hidden-not-' + this.options.widths[i].className + '{display:none;}\n';
			css += '.' + this.options.widths[i].className + ' .shown-' + this.options.widths[i].className + '{display:block;}\n';
			css += '.not-' + this.options.widths[i].className + ' .shown-not-' + this.options.widths[i].className + '{display:block;}\n';
		}

		const style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = css;
		document.getElementsByTagName('head')[0].appendChild(style);
		this.detectGeometry();
	};

	didResize () {
		super.didResize();
		this.detectGeometry();
	}

	disableResponsive (scale) {
		elementTools.addClass(document.body, 'disable-responsive');
		this.disabled = true;
		this.forceScale = scale;
		this.detectGeometry();
	}

	enableResponsive () {
		elementTools.removeClass(document.body, 'disable-responsive');
		this.disabled = false;
		this.forceScale = '';
		this.detectGeometry();
	}

	detectGeometry () {
		let newScale = this.classes[this.widths.length - 1];

		if (this.disabled) {
			newScale = this.forceScale;
		} else {
			const ww = window.innerWidth;
			const wh = window.innerHeight;
			if (wh > ww) {
				if (this.orientation !== 'portrait') {
					const frame = () => {
						elementTools.removeClass(document.body, 'landscape');
						elementTools.addClass(document.body, 'portrait');
					};
					this.queueFrame(frame);
					this.orientation = 'portrait';
				}
			} else {
				if (this.orientation !== 'landscape') {
					const frame = () => {
						elementTools.removeClass(document.body, 'portrait');
						elementTools.addClass(document.body, 'landscape');
					};
					this.queueFrame(frame);
					this.orientation = 'landscape';
				}
			}
			for (let i = 0; i < this.widths.length - 1; i++) {
				if (ww >= this.widths[i] && ww < this.widths[i + 1]) {
					newScale = this.classes[i];
					break
				}
			}
		}

		let changed = 0;

		if (newScale !== this.scale) {
			++changed;
			const frame = () => {
				for (let i = 0; i < this.classes.length; i++) {
					if (this.classes[i] !== newScale) {
						elementTools.addClass(document.body, 'not-' + this.classes[i]);
						elementTools.removeClass(document.body, this.classes[i]);
						elementTools.removeClass(document.body, 'shown-' + this.classes[i]);
						elementTools.removeClass(document.body, 'hidden-' + this.classes[i]);
					} else {
						elementTools.removeClass(document.body, 'not-' + this.classes[i]);
					}
				}
				elementTools.addClass(document.body, newScale);
				elementTools.addClass(document.body, 'shown-' + newScale);
				elementTools.addClass(document.body, 'hidden-' + newScale);

				this.notifyAll('didBreakpoint', [newScale]);
			};
			this.queueFrame(frame);
		}

		this.scale = newScale;

		if (changed) {
			this.setHints();
		}
	}

	setHints () {
		let classes = '';

		if (this.scale) {
			if (classes) {
				classes += ' ';
			}
			classes += this.scale;
		}

		if (classes !== this.getCookie('responsive')) {
			this.setCookie('responsive', classes);
		}
	};

	getCookie (key) {
		return Cookies.get(key)
	};

	setCookie (key, value, expires) {
		const options = {
			path: '/',
			domain: this.options.cookieDomain || null,
			expires: expires
		};
		Cookies.set(key, value, options);
	};

	deleteCookie (key) {
		this.setCookie(key, null);
	};
}
registerSargassoClass('Breakpoints', Breakpoints);

/**
	HijaxLoader

	Sargasso class that captures links on the page and loads pages
	using AJAX only replacing elements on the page that are marked
	with data-hijax attributes.

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes
**/

class HijaxLoader extends Sargasso {
	constructor (element, options = {}) {
		options.watchDOM = true;
		super(element, options);
		this.mortal = false;
		this.excludeRegex = new RegExp('^(//|http|javascript|mailto|#)', 'i');
		this.currentPage = location.pathname + location.search;
	}

	start () {
		super.start();
		window.addEventListener('popstate', (e) => {
			this.watchPopState(e);
		}, false);
	}

	DOMChanged () {
		super.DOMChanged();
		this.hijaxLinks();
	}

	watchPopState (e) {
		if (location.pathname + location.search !== this.currentPage) {
			this.loadPage(location.pathname + location.search);
		}
	}

	hijaxLinks () {
		const links = this.element.getElementsByTagName('a');
		for (let i = 0; i < links.length; i++) {
			const link = links[i];
			const href = link.getAttribute('href');
			if (href &&
				!link.getAttribute('data-hijaxed') &&
				!link.getAttribute('target') &&
				!link.getAttribute('data-no-hijax') &&
				!this.excludeRegex.exec(href)
			) {
				link.setAttribute('data-hijaxed', true);
				link.addEventListener('click', (e) => {
					e.preventDefault();
					this.setPage(href);
				}, false);
			}
		}
	}

	setPage (url) {
		history.pushState(null, null, url);
		this.watchPopState();
	}

	loadPage (url) {
		const frame = () => {
			elementTools.addClass(document.body, 'hijax-loading');
		};
		this.queueFrame(frame);
		if (this.options.onExitPage) {
			this.options.onExitPage();
		}
		const xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		if (this.options.onLoading) {
			xhr.onreadystatechange = this.options.onLoading;
		}
		xhr.onload = () => {
			if (xhr.status === 301 || xhr.status === 302 || xhr.getResponseHeader('Sargasso-Location')) {
				const loc = xhr.getResponseHeader('Sargasso-Location');
				this.setPage(loc);
			} else if (xhr.status === 200) {
				this.scrollTop(0);
				this.mergePage(xhr.responseText);
				const oldPage = this.currentPage;
				const frame = () => {
					this.notifyAll('newPage', [oldPage, location.pathname + location.search]);
					elementTools.removeClass(document.body, 'hijax-loading');
				};
				this.queueFrame(frame);
				this.currentPage = location.pathname + location.search;
			} else {
				const flashLevel = xhr.getResponseHeader('Sargasso-Flash-Level') || 'danger';
				let flashMessage = xhr.getResponseHeader('Sargasso-Flash-Message') || xhr.statusText;
				if (!flashMessage) {
					flashMessage = 'Could not connect to server.';
				}
				if (this.options.onError) {
					this.options.onError(flashLevel, flashMessage);
				} else {
					alert('Error loading page: ' + flashMessage);
				}
			}
		};
		xhr.send();
	}

	mergePage (html) {
		const doc = html.split(/(<body[^>]*>|<\/body>)/ig);
		const fragment = makeFragment(doc[2]);
		const containers = document.querySelectorAll('[data-hijax]');
		for (let i = 0; i < containers.length; i++) {
			const container = containers[i];
			const id = containers[i].getAttribute('id');
			const replace = fragment.getElementById(id);
			const frame = () => {
				container.parentNode.replaceChild(replace, container);
				if (this.options.onEnterPage) {
					this.options.onEnterPage();
				}
			};
			this.queueFrame(frame);
		}
	}
}

registerSargassoClass('HijaxLoader', HijaxLoader);

// shims for borked browsers
// =========================

const makeFragment = (html) => {
	if (document.createRange && document.createRange().createContextualFragment) {
		return document.createRange().createContextualFragment(html)
	}
	const fragment = document.createDocumentFragment();
	const div = document.createElement('div');
	div.insertAdjacentHTML('afterBegin', html);
	fragment.appendChild(div);
	return fragment
};

/**
	LazyBackground

	Sargasso class that impelments lazy loaded images using background-image which always
	fits image within its container's dimensions

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes

	The image is not loaded until visible in viewport

	<div class="my-container">
		div class="my-responsive-image" data-sargasso-class="LazyBackground" data-src="/path-to-image.jpg"></div>
	</div>

	.my-container { width: 30vw; height: 30vh; }
	.my-responsive-image {
		width:100%; height:100%; background-size: contain; background-repeat: no-repeat; background-position: center center;
	}

	To make image crop to fill the frame use:
		background-size: cover;

**/

class LazyBackground extends Sargasso {
	constructor (element, options = {}) {
		super(element, {
			watchViewport: true
		});
		this.triggered = false;
	}

	enterViewport () {
		if (!this.triggered) {
			this.triggered = true;

			const offload = `onmessage = async (e) => {
			  const response = await fetch(e.data.url)
			  const blob = await response.blob()
			  self.postMessage({ uid: e.data.uid, blob: blob })
			}`;

			this.workerStart('loader', offload);

			let imgUrl = this.element.getAttribute('data-src');

			// not fully qualified...
			if (!imgUrl.match(/^http/)) {
				imgUrl = new URL(imgUrl, location.href).href;
			}

			// hand the url to the worker for loading
			this.workerPostMessage('loader', {
				url: imgUrl
			});
		}
	}

	// we got a message back from a worker
	workerOnMessage (id, e) {
		if (id === 'loader') {
			if (e.data.uid === this.uid) {
				this.blobURL = URL.createObjectURL(e.data.blob);
				const frame = () => {
					this.element.style.backgroundImage = 'url(' + this.blobURL + ')';
					this.sleep(); // We're done. That was easy.
				};
				this.queueFrame(frame);
			}
		}
		super.workerOnMessage(id, e);
	}

	destroy () {
		if (this.blobURL) {
			URL.revokeObjectURL(this.blobURL);
		}
		super.destroy();
	}
}

registerSargassoClass('LazyBackground', LazyBackground);

/*
	Sargasso

	Simple, Fast, Reactive, supervised Javascript controllers for html elements.

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes

	*/

let loadPage;

const bootSargasso = (options = {}) => {
	startServices(options);
	const supervisor = new SargassoSupervisor(document.body, options);
	supervisor.start(options);
	if (options.breakpoints) {
		const breakpoints = new Breakpoints(document.body, options.breakpoints);
		breakpoints.start();
	}
	if (options.hijax) {
		const hijax = new HijaxLoader(document.body, options.hijax);
		hijax.start();
		loadPage = hijax.setPage.bind(hijax);
	} else {
		loadPage = (url) => {
			document.location.href = url;
		};
	}

	return loadPage
};

// don't really like this but the only way I can find that allows a common scope
// for es6 and cjs bundles... TODO: revisit this
if (window) {
	window.Sargasso = Sargasso;
	window.registerSargassoClass = registerSargassoClass;
	window.bootSargasso = bootSargasso;
}

/*
	example ES6 app entrypoint for bundling a site app
*/

class myClass extends Sargasso {
	constructor (element, options = {}) {
		options.watchViewport = true;
		super(element, options);
	}

	enterViewport () { // do some stuff such as modify element html or classes
		const frame = () => {
			this.element.innerHTML = '<p>Hello There Viewport! Now starting an offloaded task in web worker so things are still responsive here while I think.';
			this.element.style.color = 'red';
			this.addClass('animated');
			this.addClass('tada');
		};
		this.queueFrame(frame);
		this.offLoadTask();
	}

	offLoadTask () {
		// create the worker. managed by sargasso
		this.workerStart('myworkId', '/test-worker.js');

		// make the worker do work
		this.workerPostMessage('myworkId', {
			power: 12
		});
	}

	workerOnMessage (id, e) {
		if (id === 'myworkId') {
			const frame = () => {
				this.element.innerHTML = e.data.result;
			};
			this.queueFrame(frame);
		}
		super.workerOnMessage(id, e);
	}
}

registerSargassoClass('myClass', myClass);

const loadPageHandler = bootSargasso({
	hijax: {
		onError: (level, message) => {
			alert('hijax error: ' + message);
		},
		onLoading: function () {},
		onExitPage: () => {},
		onEnterPage: () => {}
	},
	breakpoints: {},
	scrollElement: document.getElementById('scroll-wrapper')
});

export { loadPageHandler };
