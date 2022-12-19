var App = (function (exports) {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function getDefaultExportFromNamespaceIfPresent (n) {
		return n && Object.prototype.hasOwnProperty.call(n, 'default') ? n['default'] : n;
	}

	function getDefaultExportFromNamespaceIfNotNamed (n) {
		return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
	}

	function getAugmentedNamespace(n) {
	  if (n.__esModule) return n;
	  var f = n.default;
		if (typeof f == "function") {
			var a = function a () {
				if (this instanceof a) {
					var args = [null];
					args.push.apply(args, arguments);
					var Ctor = Function.bind.apply(f, args);
					return new Ctor();
				}
				return f.apply(this, arguments);
			};
			a.prototype = f.prototype;
	  } else a = {};
	  Object.defineProperty(a, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	/** Detect free variable `global` from Node.js. */

	var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	var _freeGlobal = freeGlobal$1;

	var freeGlobal = _freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root$9 = freeGlobal || freeSelf || Function('return this')();

	var _root = root$9;

	var root$8 = _root;

	/** Built-in value references. */
	var Symbol$4 = root$8.Symbol;

	var _Symbol = Symbol$4;

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */

	function arrayMap$1(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	var _arrayMap = arrayMap$1;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */

	var isArray$4 = Array.isArray;

	var isArray_1 = isArray$4;

	var Symbol$3 = _Symbol;

	/** Used for built-in method references. */
	var objectProto$b = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$8 = objectProto$b.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$b.toString;

	/** Built-in value references. */
	var symToStringTag$1 = Symbol$3 ? Symbol$3.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag$1(value) {
	  var isOwn = hasOwnProperty$8.call(value, symToStringTag$1),
	      tag = value[symToStringTag$1];

	  try {
	    value[symToStringTag$1] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString$1.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag$1] = tag;
	    } else {
	      delete value[symToStringTag$1];
	    }
	  }
	  return result;
	}

	var _getRawTag = getRawTag$1;

	/** Used for built-in method references. */

	var objectProto$a = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto$a.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString$1(value) {
	  return nativeObjectToString.call(value);
	}

	var _objectToString = objectToString$1;

	var Symbol$2 = _Symbol,
	    getRawTag = _getRawTag,
	    objectToString = _objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag$5(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	var _baseGetTag = baseGetTag$5;

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

	function isObjectLike$5(value) {
	  return value != null && typeof value == 'object';
	}

	var isObjectLike_1 = isObjectLike$5;

	var baseGetTag$4 = _baseGetTag,
	    isObjectLike$4 = isObjectLike_1;

	/** `Object#toString` result references. */
	var symbolTag$1 = '[object Symbol]';

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
	function isSymbol$2(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike$4(value) && baseGetTag$4(value) == symbolTag$1);
	}

	var isSymbol_1 = isSymbol$2;

	var Symbol$1 = _Symbol,
	    arrayMap = _arrayMap,
	    isArray$3 = isArray_1,
	    isSymbol$1 = isSymbol_1;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : undefined,
	    symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString$1(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray$3(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString$1) + '';
	  }
	  if (isSymbol$1(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	var _baseToString = baseToString$1;

	var baseToString = _baseToString;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString$4(value) {
	  return value == null ? '' : baseToString(value);
	}

	var toString_1 = toString$4;

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */

	function baseSlice$1(array, start, end) {
	  var index = -1,
	      length = array.length;

	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	var _baseSlice = baseSlice$1;

	var baseSlice = _baseSlice;

	/**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
	function castSlice$1(array, start, end) {
	  var length = array.length;
	  end = end === undefined ? length : end;
	  return (!start && end >= length) ? array : baseSlice(array, start, end);
	}

	var _castSlice = castSlice$1;

	/** Used to compose unicode character classes. */

	var rsAstralRange$2 = '\\ud800-\\udfff',
	    rsComboMarksRange$3 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$3 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$3 = '\\u20d0-\\u20ff',
	    rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3,
	    rsVarRange$2 = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsZWJ$2 = '\\u200d';

	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasUnicode = RegExp('[' + rsZWJ$2 + rsAstralRange$2  + rsComboRange$3 + rsVarRange$2 + ']');

	/**
	 * Checks if `string` contains Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	 */
	function hasUnicode$2(string) {
	  return reHasUnicode.test(string);
	}

	var _hasUnicode = hasUnicode$2;

	/**
	 * Converts an ASCII `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */

	function asciiToArray$1(string) {
	  return string.split('');
	}

	var _asciiToArray = asciiToArray$1;

	/** Used to compose unicode character classes. */

	var rsAstralRange$1 = '\\ud800-\\udfff',
	    rsComboMarksRange$2 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$2 = '\\u20d0-\\u20ff',
	    rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2,
	    rsVarRange$1 = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange$1 + ']',
	    rsCombo$2 = '[' + rsComboRange$2 + ']',
	    rsFitz$1 = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier$1 = '(?:' + rsCombo$2 + '|' + rsFitz$1 + ')',
	    rsNonAstral$1 = '[^' + rsAstralRange$1 + ']',
	    rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ$1 = '\\u200d';

	/** Used to compose unicode regexes. */
	var reOptMod$1 = rsModifier$1 + '?',
	    rsOptVar$1 = '[' + rsVarRange$1 + ']?',
	    rsOptJoin$1 = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*',
	    rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
	    rsSymbol = '(?:' + [rsNonAstral$1 + rsCombo$2 + '?', rsCombo$2, rsRegional$1, rsSurrPair$1, rsAstral].join('|') + ')';

	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reUnicode = RegExp(rsFitz$1 + '(?=' + rsFitz$1 + ')|' + rsSymbol + rsSeq$1, 'g');

	/**
	 * Converts a Unicode `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function unicodeToArray$1(string) {
	  return string.match(reUnicode) || [];
	}

	var _unicodeToArray = unicodeToArray$1;

	var asciiToArray = _asciiToArray,
	    hasUnicode$1 = _hasUnicode,
	    unicodeToArray = _unicodeToArray;

	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray$1(string) {
	  return hasUnicode$1(string)
	    ? unicodeToArray(string)
	    : asciiToArray(string);
	}

	var _stringToArray = stringToArray$1;

	var castSlice = _castSlice,
	    hasUnicode = _hasUnicode,
	    stringToArray = _stringToArray,
	    toString$3 = toString_1;

	/**
	 * Creates a function like `_.lowerFirst`.
	 *
	 * @private
	 * @param {string} methodName The name of the `String` case method to use.
	 * @returns {Function} Returns the new case function.
	 */
	function createCaseFirst$1(methodName) {
	  return function(string) {
	    string = toString$3(string);

	    var strSymbols = hasUnicode(string)
	      ? stringToArray(string)
	      : undefined;

	    var chr = strSymbols
	      ? strSymbols[0]
	      : string.charAt(0);

	    var trailing = strSymbols
	      ? castSlice(strSymbols, 1).join('')
	      : string.slice(1);

	    return chr[methodName]() + trailing;
	  };
	}

	var _createCaseFirst = createCaseFirst$1;

	var createCaseFirst = _createCaseFirst;

	/**
	 * Converts the first character of `string` to upper case.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.upperFirst('fred');
	 * // => 'Fred'
	 *
	 * _.upperFirst('FRED');
	 * // => 'FRED'
	 */
	var upperFirst$1 = createCaseFirst('toUpperCase');

	var upperFirst_1 = upperFirst$1;

	var toString$2 = toString_1,
	    upperFirst = upperFirst_1;

	/**
	 * Converts the first character of `string` to upper case and the remaining
	 * to lower case.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to capitalize.
	 * @returns {string} Returns the capitalized string.
	 * @example
	 *
	 * _.capitalize('FRED');
	 * // => 'Fred'
	 */
	function capitalize$1(string) {
	  return upperFirst(toString$2(string).toLowerCase());
	}

	var capitalize_1 = capitalize$1;

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */

	function arrayReduce$1(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	var _arrayReduce = arrayReduce$1;

	/**
	 * The base implementation of `_.propertyOf` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Function} Returns the new accessor function.
	 */

	function basePropertyOf$1(object) {
	  return function(key) {
	    return object == null ? undefined : object[key];
	  };
	}

	var _basePropertyOf = basePropertyOf$1;

	var basePropertyOf = _basePropertyOf;

	/** Used to map Latin Unicode letters to basic Latin letters. */
	var deburredLetters = {
	  // Latin-1 Supplement block.
	  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	  '\xc7': 'C',  '\xe7': 'c',
	  '\xd0': 'D',  '\xf0': 'd',
	  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	  '\xd1': 'N',  '\xf1': 'n',
	  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	  '\xc6': 'Ae', '\xe6': 'ae',
	  '\xde': 'Th', '\xfe': 'th',
	  '\xdf': 'ss',
	  // Latin Extended-A block.
	  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
	  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
	  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
	  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
	  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
	  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
	  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
	  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
	  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
	  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
	  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
	  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
	  '\u0134': 'J',  '\u0135': 'j',
	  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
	  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
	  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
	  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
	  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
	  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
	  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
	  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
	  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
	  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
	  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
	  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
	  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
	  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
	  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
	  '\u0174': 'W',  '\u0175': 'w',
	  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
	  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
	  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
	  '\u0132': 'IJ', '\u0133': 'ij',
	  '\u0152': 'Oe', '\u0153': 'oe',
	  '\u0149': "'n", '\u017f': 's'
	};

	/**
	 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
	 * letters to basic Latin letters.
	 *
	 * @private
	 * @param {string} letter The matched letter to deburr.
	 * @returns {string} Returns the deburred letter.
	 */
	var deburrLetter$1 = basePropertyOf(deburredLetters);

	var _deburrLetter = deburrLetter$1;

	var deburrLetter = _deburrLetter,
	    toString$1 = toString_1;

	/** Used to match Latin Unicode letters (excluding mathematical operators). */
	var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

	/** Used to compose unicode character classes. */
	var rsComboMarksRange$1 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
	    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1;

	/** Used to compose unicode capture groups. */
	var rsCombo$1 = '[' + rsComboRange$1 + ']';

	/**
	 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	 */
	var reComboMark = RegExp(rsCombo$1, 'g');

	/**
	 * Deburrs `string` by converting
	 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	 * letters to basic Latin letters and removing
	 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to deburr.
	 * @returns {string} Returns the deburred string.
	 * @example
	 *
	 * _.deburr('déjà vu');
	 * // => 'deja vu'
	 */
	function deburr$1(string) {
	  string = toString$1(string);
	  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
	}

	var deburr_1 = deburr$1;

	/** Used to match words composed of alphanumeric characters. */

	var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

	/**
	 * Splits an ASCII `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function asciiWords$1(string) {
	  return string.match(reAsciiWord) || [];
	}

	var _asciiWords = asciiWords$1;

	/** Used to detect strings that need a more robust regexp to match words. */

	var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

	/**
	 * Checks if `string` contains a word composed of Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a word is found, else `false`.
	 */
	function hasUnicodeWord$1(string) {
	  return reHasUnicodeWord.test(string);
	}

	var _hasUnicodeWord = hasUnicodeWord$1;

	/** Used to compose unicode character classes. */

	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	    rsDingbatRange = '\\u2700-\\u27bf',
	    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
	    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
	    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
	    rsPunctuationRange = '\\u2000-\\u206f',
	    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
	    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
	    rsVarRange = '\\ufe0e\\ufe0f',
	    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

	/** Used to compose unicode capture groups. */
	var rsApos$1 = "['\u2019]",
	    rsBreak = '[' + rsBreakRange + ']',
	    rsCombo = '[' + rsComboRange + ']',
	    rsDigits = '\\d+',
	    rsDingbat = '[' + rsDingbatRange + ']',
	    rsLower = '[' + rsLowerRange + ']',
	    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsUpper = '[' + rsUpperRange + ']',
	    rsZWJ = '\\u200d';

	/** Used to compose unicode regexes. */
	var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
	    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
	    rsOptContrLower = '(?:' + rsApos$1 + '(?:d|ll|m|re|s|t|ve))?',
	    rsOptContrUpper = '(?:' + rsApos$1 + '(?:D|LL|M|RE|S|T|VE))?',
	    reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
	    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

	/** Used to match complex or compound words. */
	var reUnicodeWord = RegExp([
	  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
	  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
	  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
	  rsUpper + '+' + rsOptContrUpper,
	  rsOrdUpper,
	  rsOrdLower,
	  rsDigits,
	  rsEmoji
	].join('|'), 'g');

	/**
	 * Splits a Unicode `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function unicodeWords$1(string) {
	  return string.match(reUnicodeWord) || [];
	}

	var _unicodeWords = unicodeWords$1;

	var asciiWords = _asciiWords,
	    hasUnicodeWord = _hasUnicodeWord,
	    toString = toString_1,
	    unicodeWords = _unicodeWords;

	/**
	 * Splits `string` into an array of its words.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to inspect.
	 * @param {RegExp|string} [pattern] The pattern to match words.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Array} Returns the words of `string`.
	 * @example
	 *
	 * _.words('fred, barney, & pebbles');
	 * // => ['fred', 'barney', 'pebbles']
	 *
	 * _.words('fred, barney, & pebbles', /[^, ]+/g);
	 * // => ['fred', 'barney', '&', 'pebbles']
	 */
	function words$1(string, pattern, guard) {
	  string = toString(string);
	  pattern = guard ? undefined : pattern;

	  if (pattern === undefined) {
	    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
	  }
	  return string.match(pattern) || [];
	}

	var words_1 = words$1;

	var arrayReduce = _arrayReduce,
	    deburr = deburr_1,
	    words = words_1;

	/** Used to compose unicode capture groups. */
	var rsApos = "['\u2019]";

	/** Used to match apostrophes. */
	var reApos = RegExp(rsApos, 'g');

	/**
	 * Creates a function like `_.camelCase`.
	 *
	 * @private
	 * @param {Function} callback The function to combine each word.
	 * @returns {Function} Returns the new compounder function.
	 */
	function createCompounder$2(callback) {
	  return function(string) {
	    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
	  };
	}

	var _createCompounder = createCompounder$2;

	var capitalize = capitalize_1,
	    createCompounder$1 = _createCompounder;

	/**
	 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the camel cased string.
	 * @example
	 *
	 * _.camelCase('Foo Bar');
	 * // => 'fooBar'
	 *
	 * _.camelCase('--foo-bar--');
	 * // => 'fooBar'
	 *
	 * _.camelCase('__FOO_BAR__');
	 * // => 'fooBar'
	 */
	var camelCase = createCompounder$1(function(result, word, index) {
	  word = word.toLowerCase();
	  return result + (index ? capitalize(word) : word);
	});

	var camelCase_1 = camelCase;

	const validators = {};

	const setValidator = (name, fn) => {
		validators[name] = fn;
	};

	setValidator('isDefined', (arg) => {
		return arg !== undefined
	});

	setValidator('isUnDefined', (arg) => {
		return arg === undefined
	});

	setValidator('isNull', (arg) => {
		return arg === null
	});

	setValidator('isElement', (arg) => {
		return arg && (arg instanceof Element || arg instanceof Window)
	});

	setValidator('isEventTarget', (arg) => {
		return arg && arg instanceof EventTarget
	});

	setValidator('isString', (arg) => {
		return arg && (typeof arg === 'string' || arg instanceof String)
	});

	setValidator('isArray', (arg) => {
		return arg && arg instanceof Array
	});

	setValidator('notEmpty', (arg) => {
		return arg instanceof Array ? arg.length !== 0 : arg !== ''
	});

	setValidator('isEmpty', (arg) => {
		return arg === undefined || !arg || (arg instanceof Array ? arg.length === 0 : arg === '')
	});

	setValidator('isObject', (arg) => {
		return arg && arg instanceof Object
	});

	setValidator('isFunction', (arg) => {
		return arg && typeof arg === 'function'
	});


	// tests is an array of validators which must be all evaluate to true
	// if top level element is an sub array then the sub array is evaluated as an 'or'
	// ['this','and',['either','or']]
	const validate = (param, arg, tests) => {
		// console.log(param, arg)
		const allOf = tests.map((test) => {
			if (test instanceof Array) {
				const anyOf = test.map((orTest) => {
					return validators[orTest] && validators[orTest](arg)
				});
				return anyOf.indexOf(true) !== -1
			}
			else {
				return validators[test] && validators[test](arg)
			}
		});

		if (allOf.indexOf(false) !== -1) {
			throw (new Error('call to ' + param + ' invalid value: ' + arg + ' ' + tests, +' ' + allOf))
		}
	};

	/**
		Utility routines for Sargasso classes

		@author Michael Rhodes (except where noted)
		@license MIT
		Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes
	**/

	const elementMetaData = new WeakMap();

	const hasClass = (element, cssClass) => {
		validate('hasClass element', element, ['isDefined', 'isElement']);
		validate('hasClass cssClass', cssClass, ['isDefined', 'notEmpty', 'isString']);
		const className = element.className || '';
		const classes = className.split(/\s+/);
		return classes.indexOf(cssClass) !== -1
	};

	// addClasses can be:
	// a string 'someclass'
	// a list delimited by comma or space 'class1 class3 class4'
	// an array ['class1','class2']
	const addClass = (element, addClasses) => {
		validate('addClass element', element, ['isDefined', 'isElement']);
		validate('addClass addClasses', addClasses, ['isDefined', 'notEmpty', ['isString', 'isArray']]);

		const className = element.className || '';
		const classes = className.split(/\s+/);

		if (!Array.isArray(addClasses)) {
			addClasses = addClasses.split(/[\s,]/);
		}

		addClasses.forEach((c) => {
			c = c.trim();
			if (classes.indexOf(c) === -1) {
				classes.push(c);
			}
		});

		element.className = classes.join(' ');
	};

	// removeClasses can be:
	// a string 'someclass'
	// a list delimited by comma or space 'class1 class3 class4'
	// an array ['class1','class2']
	const removeClass = (element, removeClasses) => {
		validate('removeClass element', element, ['isDefined', 'isElement']);
		validate('removeClass removeClasses', removeClasses, ['isDefined', 'notEmpty', ['isString', 'isArray']]);

		const className = element.className || '';
		const classes = className.split(/\s+/);

		if (!Array.isArray(removeClasses)) {
			removeClasses = removeClasses.split(/[\s,]/);
		}

		removeClasses.forEach((c) => {
			c = c.trim();
			if (classes.indexOf(c) !== -1) {
				classes.splice(classes.indexOf(c), 1);
			}
		});

		element.className = classes.join(' ');
	};

	const isVisible = (element) => {
		validate('isVisible element', element, ['isDefined', 'isElement']);

		return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length)
	};

	const inViewPort = (element, container = window) => {
		validate('inViewPort element', element, ['isDefined', 'isElement']);

		const rect = element.getBoundingClientRect();
		const visible = isVisible(element);
		const aboveTheTop = (rect.bottom < 0);
		let belowTheFold;

		if (container.self === window) {
			belowTheFold = (rect.top > (window.innerHeight || document.documentElement.clientHeight));
		}
		else {
			belowTheFold = (rect.top > container.clientHeight);
		}

		return (visible && !belowTheFold && !aboveTheTop)
	};

	/*
		element: element to apply to
		css: JSON object with properties in kebab-case or camelCase (or even in snake_case and seperate words)
	*/

	const css = (element, css) => {
		validate('css element', element, ['isDefined', 'isElement']);
		validate('css css', css, ['isDefined', ['isObject']]);

		for (const prop in css) {
			if (Object.prototype.hasOwnProperty.call(css, prop)) {
				const key = camelCase_1(prop);
				element.style[key] = css[prop] !== null ? css[prop] : null;
			}
		}
	};

	const setMetaData = (element, k, v) => {
		validate('setMetaData element', element, ['isDefined', 'isElement']);
		validate('setMetaData k', k, ['isDefined', 'isString']);
		validate('setMetaData v', v, [
			['isUnDefined', 'isNull', 'isString', 'isObject']
		]);
		const data = elementMetaData.get(element) || {};
		if (v) {
			data[k] = v;
		}
		else {
			delete data[k];
		}
		elementMetaData.set(element, data);
	};

	const getMetaData = (element, k) => {
		validate('getMetaData element', element, ['isDefined', 'isElement']);
		validate('getMetaData k', k, ['isDefined', 'isString']);

		const data = elementMetaData.get(element) || {};
		if (k) {
			return data[k]
		}
		else {
			return data
		}
	};

	const on = function (uid, container, events, selector, fn, options, once) {
		// selector is optional
		if (typeof selector === 'function') {
			once = options;
			options = fn;
			fn = selector;
			selector = undefined;
		}
		validate('on uid', uid, ['isDefined', 'notEmpty']);
		validate('on container', container, ['isDefined', 'isEventTarget']);
		validate('on events', events, ['isDefined', 'isString']);
		validate('on fn', fn, ['isDefined', 'isFunction']);
		validate('on selector', selector, [
			['isEmpty', 'isString']
		]);

		const k = 'on:' + uid + '-' + events + '-' + selector;

		if (getMetaData(container, k)) { // duplicate event handler.
			console.error('Error: Sargasso utils.on: duplicate event handler specification. %o %s', container, k);
			return
		}

		const handler = (e) => {
			if (once) {
				off(uid, container, events, selector);
			}

			if (!selector) {
				fn(e);
			}
			else {
				Array.from(container.querySelectorAll(selector)).forEach((el) => {
					if (e.target === el || el.contains(e.target)) {
						fn(e, el);
					}
				});
			}
		};

		// store handler spec in metadata so we can gracefully remove it later
		const data = {
			uid: uid,
			events: events,
			selector: selector || undefined,
			fn: handler,
			options: options || false
		};

		setMetaData(container, k, data);

		events.split(/[\s,]+/).forEach((evt) => {
			container.addEventListener(evt.trim(), data.fn, data.options);
		});
	};

	const off = function (uid, container, events, selector) {
		validate('off uid', uid, ['isDefined', 'notEmpty']);
		validate('off container', container, ['isDefined', 'isEventTarget']);
		validate('off events', events, ['isDefined', 'isString']);
		validate('off selector', selector, [
			['isEmpty', 'isString']
		]);

		const k = 'on:' + uid + '-' + events + '-' + selector;
		const data = getMetaData(container, k);
		if (data) {
			events.split(/[\s,]+/).forEach((evt) => {
				container.removeEventListener(evt.trim(), data.fn, data.options);
			});
			setMetaData(container, k);
		}
	};

	// remove all (on,once) event handlers for element
	const offAll = function (container) {
		validate('offAll container', container, ['isDefined', 'isEventTarget']);

		const data = elementMetaData.get(container) || {};
		const handlers = [];

		for (const k in data) {
			if (Object.prototype.hasOwnProperty.call(data, k)) {
				if (k.match(/^on:/)) {
					handlers.push(k);
				}
			}
		}

		handlers.forEach((k) => {
			off(data[k].uid, container, data[k].events, data[k].selector);
		});
	};

	const once = function (uid, container, events, selector, fn, options) {
		if (typeof selector === 'function') {
			options = fn;
			fn = selector;
			selector = undefined;
		}
		on(uid, container, events, selector, fn, options, true);
	};

	const elementTools = {
		hasClass: hasClass,
		addClass: addClass,
		removeClass: removeClass,
		isVisible: isVisible,
		inViewPort: inViewPort,
		setCSS: css,
		setMetaData: setMetaData,
		getMetaData: getMetaData,
		on: on,
		off: off,
		once: once,
		offAll: offAll
	};

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

	function isObject$4(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject$4;

	var root$7 = _root;

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
	var now$1 = function() {
	  return root$7.Date.now();
	};

	var now_1 = now$1;

	/** Used to match a single whitespace character. */

	var reWhitespace = /\s/;

	/**
	 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
	 * character of `string`.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {number} Returns the index of the last non-whitespace character.
	 */
	function trimmedEndIndex$1(string) {
	  var index = string.length;

	  while (index-- && reWhitespace.test(string.charAt(index))) {}
	  return index;
	}

	var _trimmedEndIndex = trimmedEndIndex$1;

	var trimmedEndIndex = _trimmedEndIndex;

	/** Used to match leading whitespace. */
	var reTrimStart = /^\s+/;

	/**
	 * The base implementation of `_.trim`.
	 *
	 * @private
	 * @param {string} string The string to trim.
	 * @returns {string} Returns the trimmed string.
	 */
	function baseTrim$1(string) {
	  return string
	    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
	    : string;
	}

	var _baseTrim = baseTrim$1;

	var baseTrim = _baseTrim,
	    isObject$3 = isObject_1,
	    isSymbol = isSymbol_1;

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

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
	function toNumber$1(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject$3(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject$3(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = baseTrim(value);
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	var toNumber_1 = toNumber$1;

	var isObject$2 = isObject_1,
	    now = now_1,
	    toNumber = toNumber_1;

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
	  if (isObject$2(options)) {
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
	        clearTimeout(timerId);
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

	var debounce_1 = debounce;

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */

	function listCacheClear$1() {
	  this.__data__ = [];
	  this.size = 0;
	}

	var _listCacheClear = listCacheClear$1;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */

	function eq$2(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	var eq_1 = eq$2;

	var eq$1 = eq_1;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf$4(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq$1(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	var _assocIndexOf = assocIndexOf$4;

	var assocIndexOf$3 = _assocIndexOf;

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete$1(key) {
	  var data = this.__data__,
	      index = assocIndexOf$3(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	var _listCacheDelete = listCacheDelete$1;

	var assocIndexOf$2 = _assocIndexOf;

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet$1(key) {
	  var data = this.__data__,
	      index = assocIndexOf$2(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	var _listCacheGet = listCacheGet$1;

	var assocIndexOf$1 = _assocIndexOf;

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas$1(key) {
	  return assocIndexOf$1(this.__data__, key) > -1;
	}

	var _listCacheHas = listCacheHas$1;

	var assocIndexOf = _assocIndexOf;

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet$1(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	var _listCacheSet = listCacheSet$1;

	var listCacheClear = _listCacheClear,
	    listCacheDelete = _listCacheDelete,
	    listCacheGet = _listCacheGet,
	    listCacheHas = _listCacheHas,
	    listCacheSet = _listCacheSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache$4(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache$4.prototype.clear = listCacheClear;
	ListCache$4.prototype['delete'] = listCacheDelete;
	ListCache$4.prototype.get = listCacheGet;
	ListCache$4.prototype.has = listCacheHas;
	ListCache$4.prototype.set = listCacheSet;

	var _ListCache = ListCache$4;

	var ListCache$3 = _ListCache;

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear$1() {
	  this.__data__ = new ListCache$3;
	  this.size = 0;
	}

	var _stackClear = stackClear$1;

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */

	function stackDelete$1(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	var _stackDelete = stackDelete$1;

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */

	function stackGet$1(key) {
	  return this.__data__.get(key);
	}

	var _stackGet = stackGet$1;

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */

	function stackHas$1(key) {
	  return this.__data__.has(key);
	}

	var _stackHas = stackHas$1;

	var baseGetTag$3 = _baseGetTag,
	    isObject$1 = isObject_1;

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag$1 = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction$2(value) {
	  if (!isObject$1(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag$3(value);
	  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	var isFunction_1 = isFunction$2;

	var root$6 = _root;

	/** Used to detect overreaching core-js shims. */
	var coreJsData$1 = root$6['__core-js_shared__'];

	var _coreJsData = coreJsData$1;

	var coreJsData = _coreJsData;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked$1(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	var _isMasked = isMasked$1;

	/** Used for built-in method references. */

	var funcProto$1 = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$1 = funcProto$1.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource$2(func) {
	  if (func != null) {
	    try {
	      return funcToString$1.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	var _toSource = toSource$2;

	var isFunction$1 = isFunction_1,
	    isMasked = _isMasked,
	    isObject = isObject_1,
	    toSource$1 = _toSource;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto$9 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty$7).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative$1(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource$1(value));
	}

	var _baseIsNative = baseIsNative$1;

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */

	function getValue$1(object, key) {
	  return object == null ? undefined : object[key];
	}

	var _getValue = getValue$1;

	var baseIsNative = _baseIsNative,
	    getValue = _getValue;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative$6(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	var _getNative = getNative$6;

	var getNative$5 = _getNative,
	    root$5 = _root;

	/* Built-in method references that are verified to be native. */
	var Map$3 = getNative$5(root$5, 'Map');

	var _Map = Map$3;

	var getNative$4 = _getNative;

	/* Built-in method references that are verified to be native. */
	var nativeCreate$4 = getNative$4(Object, 'create');

	var _nativeCreate = nativeCreate$4;

	var nativeCreate$3 = _nativeCreate;

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear$1() {
	  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
	  this.size = 0;
	}

	var _hashClear = hashClear$1;

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */

	function hashDelete$1(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _hashDelete = hashDelete$1;

	var nativeCreate$2 = _nativeCreate;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto$8 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet$1(key) {
	  var data = this.__data__;
	  if (nativeCreate$2) {
	    var result = data[key];
	    return result === HASH_UNDEFINED$2 ? undefined : result;
	  }
	  return hasOwnProperty$6.call(data, key) ? data[key] : undefined;
	}

	var _hashGet = hashGet$1;

	var nativeCreate$1 = _nativeCreate;

	/** Used for built-in method references. */
	var objectProto$7 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas$1(key) {
	  var data = this.__data__;
	  return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty$5.call(data, key);
	}

	var _hashHas = hashHas$1;

	var nativeCreate = _nativeCreate;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet$1(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
	  return this;
	}

	var _hashSet = hashSet$1;

	var hashClear = _hashClear,
	    hashDelete = _hashDelete,
	    hashGet = _hashGet,
	    hashHas = _hashHas,
	    hashSet = _hashSet;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash$1(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash$1.prototype.clear = hashClear;
	Hash$1.prototype['delete'] = hashDelete;
	Hash$1.prototype.get = hashGet;
	Hash$1.prototype.has = hashHas;
	Hash$1.prototype.set = hashSet;

	var _Hash = Hash$1;

	var Hash = _Hash,
	    ListCache$2 = _ListCache,
	    Map$2 = _Map;

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear$1() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map$2 || ListCache$2),
	    'string': new Hash
	  };
	}

	var _mapCacheClear = mapCacheClear$1;

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */

	function isKeyable$1(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	var _isKeyable = isKeyable$1;

	var isKeyable = _isKeyable;

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData$4(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	var _getMapData = getMapData$4;

	var getMapData$3 = _getMapData;

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete$1(key) {
	  var result = getMapData$3(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _mapCacheDelete = mapCacheDelete$1;

	var getMapData$2 = _getMapData;

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet$1(key) {
	  return getMapData$2(this, key).get(key);
	}

	var _mapCacheGet = mapCacheGet$1;

	var getMapData$1 = _getMapData;

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas$1(key) {
	  return getMapData$1(this, key).has(key);
	}

	var _mapCacheHas = mapCacheHas$1;

	var getMapData = _getMapData;

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet$1(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	var _mapCacheSet = mapCacheSet$1;

	var mapCacheClear = _mapCacheClear,
	    mapCacheDelete = _mapCacheDelete,
	    mapCacheGet = _mapCacheGet,
	    mapCacheHas = _mapCacheHas,
	    mapCacheSet = _mapCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache$2(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache$2.prototype.clear = mapCacheClear;
	MapCache$2.prototype['delete'] = mapCacheDelete;
	MapCache$2.prototype.get = mapCacheGet;
	MapCache$2.prototype.has = mapCacheHas;
	MapCache$2.prototype.set = mapCacheSet;

	var _MapCache = MapCache$2;

	var ListCache$1 = _ListCache,
	    Map$1 = _Map,
	    MapCache$1 = _MapCache;

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet$1(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache$1) {
	    var pairs = data.__data__;
	    if (!Map$1 || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache$1(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	var _stackSet = stackSet$1;

	var ListCache = _ListCache,
	    stackClear = _stackClear,
	    stackDelete = _stackDelete,
	    stackGet = _stackGet,
	    stackHas = _stackHas,
	    stackSet = _stackSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack$1(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack$1.prototype.clear = stackClear;
	Stack$1.prototype['delete'] = stackDelete;
	Stack$1.prototype.get = stackGet;
	Stack$1.prototype.has = stackHas;
	Stack$1.prototype.set = stackSet;

	var _Stack = Stack$1;

	/** Used to stand-in for `undefined` hash values. */

	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd$1(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	var _setCacheAdd = setCacheAdd$1;

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */

	function setCacheHas$1(value) {
	  return this.__data__.has(value);
	}

	var _setCacheHas = setCacheHas$1;

	var MapCache = _MapCache,
	    setCacheAdd = _setCacheAdd,
	    setCacheHas = _setCacheHas;

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache$1(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
	SetCache$1.prototype.has = setCacheHas;

	var _SetCache = SetCache$1;

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */

	function arraySome$1(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	var _arraySome = arraySome$1;

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */

	function cacheHas$1(cache, key) {
	  return cache.has(key);
	}

	var _cacheHas = cacheHas$1;

	var SetCache = _SetCache,
	    arraySome = _arraySome,
	    cacheHas = _cacheHas;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$3 = 1,
	    COMPARE_UNORDERED_FLAG$1 = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Check that cyclic values are equal.
	  var arrStacked = stack.get(array);
	  var othStacked = stack.get(other);
	  if (arrStacked && othStacked) {
	    return arrStacked == other && othStacked == array;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG$1) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	var _equalArrays = equalArrays$2;

	var root$4 = _root;

	/** Built-in value references. */
	var Uint8Array$1 = root$4.Uint8Array;

	var _Uint8Array = Uint8Array$1;

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */

	function mapToArray$1(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	var _mapToArray = mapToArray$1;

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */

	function setToArray$1(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	var _setToArray = setToArray$1;

	var Symbol = _Symbol,
	    Uint8Array = _Uint8Array,
	    eq = eq_1,
	    equalArrays$1 = _equalArrays,
	    mapToArray = _mapToArray,
	    setToArray = _setToArray;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$2 = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag$1 = '[object Boolean]',
	    dateTag$1 = '[object Date]',
	    errorTag$1 = '[object Error]',
	    mapTag$2 = '[object Map]',
	    numberTag$1 = '[object Number]',
	    regexpTag$1 = '[object RegExp]',
	    setTag$2 = '[object Set]',
	    stringTag$1 = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag$1 = '[object ArrayBuffer]',
	    dataViewTag$2 = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag$2:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag$1:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag$1:
	    case dateTag$1:
	    case numberTag$1:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag$1:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag$1:
	    case stringTag$1:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag$2:
	      var convert = mapToArray;

	    case setTag$2:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	var _equalByTag = equalByTag$1;

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */

	function arrayPush$1(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	var _arrayPush = arrayPush$1;

	var arrayPush = _arrayPush,
	    isArray$2 = isArray_1;

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys$1(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray$2(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	var _baseGetAllKeys = baseGetAllKeys$1;

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */

	function arrayFilter$1(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	var _arrayFilter = arrayFilter$1;

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */

	function stubArray$1() {
	  return [];
	}

	var stubArray_1 = stubArray$1;

	var arrayFilter = _arrayFilter,
	    stubArray = stubArray_1;

	/** Used for built-in method references. */
	var objectProto$6 = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols$1 = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable$1.call(object, symbol);
	  });
	};

	var _getSymbols = getSymbols$1;

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */

	function baseTimes$1(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	var _baseTimes = baseTimes$1;

	var baseGetTag$2 = _baseGetTag,
	    isObjectLike$3 = isObjectLike_1;

	/** `Object#toString` result references. */
	var argsTag$2 = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments$1(value) {
	  return isObjectLike$3(value) && baseGetTag$2(value) == argsTag$2;
	}

	var _baseIsArguments = baseIsArguments$1;

	var baseIsArguments = _baseIsArguments,
	    isObjectLike$2 = isObjectLike_1;

	/** Used for built-in method references. */
	var objectProto$5 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments$1 = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike$2(value) && hasOwnProperty$4.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	var isArguments_1 = isArguments$1;

	var isBufferExports = {};
	var isBuffer$2 = {
	  get exports(){ return isBufferExports; },
	  set exports(v){ isBufferExports = v; },
	};

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */

	function stubFalse() {
	  return false;
	}

	var stubFalse_1 = stubFalse;

	(function (module, exports) {
		var root = _root,
		    stubFalse = stubFalse_1;

		/** Detect free variable `exports`. */
		var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

		/** Detect free variable `module`. */
		var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

		/** Detect the popular CommonJS extension `module.exports`. */
		var moduleExports = freeModule && freeModule.exports === freeExports;

		/** Built-in value references. */
		var Buffer = moduleExports ? root.Buffer : undefined;

		/* Built-in method references for those with the same name as other `lodash` methods. */
		var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

		/**
		 * Checks if `value` is a buffer.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.3.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
		 * @example
		 *
		 * _.isBuffer(new Buffer(2));
		 * // => true
		 *
		 * _.isBuffer(new Uint8Array(2));
		 * // => false
		 */
		var isBuffer = nativeIsBuffer || stubFalse;

		module.exports = isBuffer;
	} (isBuffer$2, isBufferExports));

	var isBuffer_1 = isBufferExports;

	/** Used as references for various `Number` constants. */

	var MAX_SAFE_INTEGER$1 = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex$1(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER$1 : length;

	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}

	var _isIndex = isIndex$1;

	/** Used as references for various `Number` constants. */

	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength$2(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	var isLength_1 = isLength$2;

	var baseGetTag$1 = _baseGetTag,
	    isLength$1 = isLength_1,
	    isObjectLike$1 = isObjectLike_1;

	/** `Object#toString` result references. */
	var argsTag$1 = '[object Arguments]',
	    arrayTag$1 = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag$1 = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag$2 = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag$1 = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag$1 = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag$1 = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag$1] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag$2] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag$1] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag$1] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray$1(value) {
	  return isObjectLike$1(value) &&
	    isLength$1(value.length) && !!typedArrayTags[baseGetTag$1(value)];
	}

	var _baseIsTypedArray = baseIsTypedArray$1;

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */

	function baseUnary$1(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	var _baseUnary = baseUnary$1;

	var _nodeUtilExports = {};
	var _nodeUtil$1 = {
	  get exports(){ return _nodeUtilExports; },
	  set exports(v){ _nodeUtilExports = v; },
	};

	(function (module, exports) {
		var freeGlobal = _freeGlobal;

		/** Detect free variable `exports`. */
		var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

		/** Detect free variable `module`. */
		var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

		/** Detect the popular CommonJS extension `module.exports`. */
		var moduleExports = freeModule && freeModule.exports === freeExports;

		/** Detect free variable `process` from Node.js. */
		var freeProcess = moduleExports && freeGlobal.process;

		/** Used to access faster Node.js helpers. */
		var nodeUtil = (function() {
		  try {
		    // Use `util.types` for Node.js 10+.
		    var types = freeModule && freeModule.require && freeModule.require('util').types;

		    if (types) {
		      return types;
		    }

		    // Legacy `process.binding('util')` for Node.js < 10.
		    return freeProcess && freeProcess.binding && freeProcess.binding('util');
		  } catch (e) {}
		}());

		module.exports = nodeUtil;
	} (_nodeUtil$1, _nodeUtilExports));

	var _nodeUtil = _nodeUtilExports;

	var baseIsTypedArray = _baseIsTypedArray,
	    baseUnary = _baseUnary,
	    nodeUtil = _nodeUtilExports;

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray$2 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	var isTypedArray_1 = isTypedArray$2;

	var baseTimes = _baseTimes,
	    isArguments = isArguments_1,
	    isArray$1 = isArray_1,
	    isBuffer$1 = isBufferExports,
	    isIndex = _isIndex,
	    isTypedArray$1 = isTypedArray_1;

	/** Used for built-in method references. */
	var objectProto$4 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys$1(value, inherited) {
	  var isArr = isArray$1(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer$1(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray$1(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty$3.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _arrayLikeKeys = arrayLikeKeys$1;

	/** Used for built-in method references. */

	var objectProto$3 = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype$1(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$3;

	  return value === proto;
	}

	var _isPrototype = isPrototype$1;

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */

	function overArg$1(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	var _overArg = overArg$1;

	var overArg = _overArg;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys$1 = overArg(Object.keys, Object);

	var _nativeKeys = nativeKeys$1;

	var isPrototype = _isPrototype,
	    nativeKeys = _nativeKeys;

	/** Used for built-in method references. */
	var objectProto$2 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys$1(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty$2.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeys = baseKeys$1;

	var isFunction = isFunction_1,
	    isLength = isLength_1;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike$1(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	var isArrayLike_1 = isArrayLike$1;

	var arrayLikeKeys = _arrayLikeKeys,
	    baseKeys = _baseKeys,
	    isArrayLike = isArrayLike_1;

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys$1(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	var keys_1 = keys$1;

	var baseGetAllKeys = _baseGetAllKeys,
	    getSymbols = _getSymbols,
	    keys = keys_1;

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys$1(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	var _getAllKeys = getAllKeys$1;

	var getAllKeys = _getAllKeys;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$1 = 1;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
	      return false;
	    }
	  }
	  // Check that cyclic values are equal.
	  var objStacked = stack.get(object);
	  var othStacked = stack.get(other);
	  if (objStacked && othStacked) {
	    return objStacked == other && othStacked == object;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	var _equalObjects = equalObjects$1;

	var getNative$3 = _getNative,
	    root$3 = _root;

	/* Built-in method references that are verified to be native. */
	var DataView$1 = getNative$3(root$3, 'DataView');

	var _DataView = DataView$1;

	var getNative$2 = _getNative,
	    root$2 = _root;

	/* Built-in method references that are verified to be native. */
	var Promise$2 = getNative$2(root$2, 'Promise');

	var _Promise = Promise$2;

	var getNative$1 = _getNative,
	    root$1 = _root;

	/* Built-in method references that are verified to be native. */
	var Set$1 = getNative$1(root$1, 'Set');

	var _Set = Set$1;

	var getNative = _getNative,
	    root = _root;

	/* Built-in method references that are verified to be native. */
	var WeakMap$2 = getNative(root, 'WeakMap');

	var _WeakMap = WeakMap$2;

	var DataView = _DataView,
	    Map = _Map,
	    Promise$1 = _Promise,
	    Set = _Set,
	    WeakMap$1 = _WeakMap,
	    baseGetTag = _baseGetTag,
	    toSource = _toSource;

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag$1 = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise$1),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap$1);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag$1 = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag$1(new Map) != mapTag) ||
	    (Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag) ||
	    (Set && getTag$1(new Set) != setTag) ||
	    (WeakMap$1 && getTag$1(new WeakMap$1) != weakMapTag)) {
	  getTag$1 = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag$1 ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	var _getTag = getTag$1;

	var Stack = _Stack,
	    equalArrays = _equalArrays,
	    equalByTag = _equalByTag,
	    equalObjects = _equalObjects,
	    getTag = _getTag,
	    isArray = isArray_1,
	    isBuffer = isBufferExports,
	    isTypedArray = isTypedArray_1;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);

	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;

	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	var _baseIsEqualDeep = baseIsEqualDeep$1;

	var baseIsEqualDeep = _baseIsEqualDeep,
	    isObjectLike = isObjectLike_1;

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual$1(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$1, stack);
	}

	var _baseIsEqual = baseIsEqual$1;

	var baseIsEqual = _baseIsEqual;

	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are compared by strict equality, i.e. `===`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual(value, other) {
	  return baseIsEqual(value, other);
	}

	var isEqual_1 = isEqual;

	var observableSlimExports = {};
	var observableSlim = {
	  get exports(){ return observableSlimExports; },
	  set exports(v){ observableSlimExports = v; },
	};

	/*
	 * 	Observable Slim
	 *	Version 0.1.6
	 * 	https://github.com/elliotnb/observable-slim
	 *
	 * 	Licensed under the MIT license:
	 * 	http://www.opensource.org/licenses/MIT
	 *
	 *	Observable Slim is a singleton that allows you to observe changes made to an object and any nested
	 *	children of that object. It is intended to assist with one-way data binding, that is, in MVC parlance,
	 *	reflecting changes in the model to the view. Observable Slim aspires to be as lightweight and easily
	 *	understood as possible. Minifies down to roughly 3000 characters.
	 */

	var ObservableSlim = (function() {
		var paths = [];
		// An array that stores all of the observables created through the public create() method below.
		var observables = [];
		// An array of all the objects that we have assigned Proxies to
		var targets = [];

		// An array of arrays containing the Proxies created for each target object. targetsProxy is index-matched with
		// 'targets' -- together, the pair offer a Hash table where the key is not a string nor number, but the actual target object
		var targetsProxy = [];

		// this variable tracks duplicate proxies assigned to the same target.
		// the 'set' handler below will trigger the same change on all other Proxies tracking the same target.
		// however, in order to avoid an infinite loop of Proxies triggering and re-triggering one another, we use dupProxy
		// to track that a given Proxy was modified from the 'set' handler
		var dupProxy = null;

		var _getProperty = function(obj, path) {
			return path.split('.').reduce(function(prev, curr) {
				return prev ? prev[curr] : undefined
			}, obj || self)
		};

		/**
		 * Create a new ES6 `Proxy` whose changes we can observe through the `observe()` method.
		 * @param {object} target Plain object that we want to observe for changes.
		 * @param {boolean|number} domDelay If `true`, then the observed changes to `target` will be batched up on a 10ms delay (via `setTimeout()`).
		 * If `false`, then the `observer` function will be immediately invoked after each individual change made to `target`. It is helpful to set
		 * `domDelay` to `true` when your `observer` function makes DOM manipulations (fewer DOM redraws means better performance). If a number greater
		 * than zero, then it defines the DOM delay in milliseconds.
		 * @param {function(ObservableSlimChange[])} [observer] Function that will be invoked when a change is made to the proxy of `target`.
		 * When invoked, this function is passed a single argument: an array of `ObservableSlimChange` detailing each change that has been made.
		 * @param {object} originalObservable The original observable created by the user, exists for recursion purposes, allows one observable to observe
		 * change on any nested/child objects.
		 * @param {{target: object, property: string}[]} originalPath Array of objects, each object having the properties `target` and `property`:
		 * `target` is referring to the observed object itself and `property` referring to the name of that object in the nested structure.
		 * The path of the property in relation to the target on the original observable, exists for recursion purposes, allows one observable to observe
		 * change on any nested/child objects.
		 * @returns {ProxyConstructor} Proxy of the target object.
		 */
		var _create = function(target, domDelay, originalObservable, originalPath) {

			var observable = originalObservable || null;

			// record the nested path taken to access this object -- if there was no path then we provide the first empty entry
			var path = originalPath || [{"target":target,"property":""}];
			paths.push(path);

			// in order to accurately report the "previous value" of the "length" property on an Array
			// we must use a helper property because intercepting a length change is not always possible as of 8/13/2018 in
			// Chrome -- the new `length` value is already set by the time the `set` handler is invoked
			if (target instanceof Array) {
				if (!target.hasOwnProperty("__length"))
					Object.defineProperty(target, "__length", { enumerable: false, value: target.length, writable: true });
				else
					target.__length = target.length;
			}

			var changes = [];

			/**
			 * Returns a string of the nested path (in relation to the top-level observed object) of the property being modified or deleted.
			 * @param {object} target Plain object that we want to observe for changes.
			 * @param {string} property Property name.
			 * @param {boolean} [jsonPointer] Set to `true` if the string path should be formatted as a JSON pointer rather than with the dot notation
			 * (`false` as default).
			 * @returns {string} Nested path (e.g., `hello.testing.1.bar` or, if JSON pointer, `/hello/testing/1/bar`).
			 */
			var _getPath = function(target, property, jsonPointer) {

				var fullPath = "";
				var lastTarget = null;

				// loop over each item in the path and append it to full path
				for (var i = 0; i < path.length; i++) {

					// if the current object was a member of an array, it's possible that the array was at one point
					// mutated and would cause the position of the current object in that array to change. we perform an indexOf
					// lookup here to determine the current position of that object in the array before we add it to fullPath
					if (lastTarget instanceof Array && !isNaN(path[i].property)) {
						path[i].property = lastTarget.indexOf(path[i].target);
					}

					fullPath = fullPath + "." + path[i].property;
					lastTarget = path[i].target;
				}

				// add the current property
				fullPath = fullPath + "." + property;

				// remove the beginning two dots -- ..foo.bar becomes foo.bar (the first item in the nested chain doesn't have a property name)
				fullPath = fullPath.substring(2);

				if (jsonPointer === true) fullPath = "/" + fullPath.replace(/\./g, "/");

				return fullPath;
			};

			var _notifyObservers = function(numChanges) {

				// if the observable is paused, then we don't want to execute any of the observer functions
				if (observable.paused === true) return;

				var domDelayIsNumber = typeof domDelay === 'number';

				// execute observer functions on a 10ms setTimeout, this prevents the observer functions from being executed
				// separately on every change -- this is necessary because the observer functions will often trigger UI updates
	 			if (domDelayIsNumber || domDelay === true) {
					setTimeout(function() {
						if (numChanges === changes.length) {

							// we create a copy of changes before passing it to the observer functions because even if the observer function
							// throws an error, we still need to ensure that changes is reset to an empty array so that old changes don't persist
							var changesCopy = changes.slice(0);
							changes = [];

							// invoke any functions that are observing changes
							for (var i = 0; i < observable.observers.length; i++) observable.observers[i](changesCopy);

						}
					}, (domDelayIsNumber && domDelay > 0) ? domDelay : 10);
				} else {

					// we create a copy of changes before passing it to the observer functions because even if the observer function
					// throws an error, we still need to ensure that changes is reset to an empty array so that old changes don't persist
					var changesCopy = changes.slice(0);
					changes = [];

					// invoke any functions that are observing changes
					for (var i = 0; i < observable.observers.length; i++) observable.observers[i](changesCopy);

				}
			};

			var handler = {
				get: function(target, property) {

					// implement a simple check for whether or not the object is a proxy, this helps the .create() method avoid
					// creating Proxies of Proxies.
					if (property === "__getTarget") {
						return target;
					} else if (property === "__isProxy") {
						return true;
					// from the perspective of a given observable on a parent object, return the parent object of the given nested object
					} else if (property === "__getParent") {
						return function(i) {
							if (typeof i === "undefined") var i = 1;
							var parentPath = _getPath(target, "__getParent").split(".");
							parentPath.splice(-(i+1),(i+1));
							return _getProperty(observable.parentProxy, parentPath.join("."));
						}
					// return the full path of the current object relative to the parent observable
					} else if (property === "__getPath") {
						// strip off the 12 characters for ".__getParent"
						var parentPath = _getPath(target, "__getParent");
						return parentPath.slice(0, -12);
					}

					// for performance improvements, we assign this to a variable so we do not have to lookup the property value again
					var targetProp = target[property];
					if (target instanceof Date && targetProp instanceof Function && targetProp !== null) {
						return targetProp.bind(target);
					}

					// if we are traversing into a new object, then we want to record path to that object and return a new observable.
					// recursively returning a new observable allows us a single Observable.observe() to monitor all changes on
					// the target object and any objects nested within.
					if (targetProp instanceof Object && targetProp !== null && target.hasOwnProperty(property)) {

						// if we've found a proxy nested on the object, then we want to retrieve the original object behind that proxy
						if (targetProp.__isProxy === true) targetProp = targetProp.__getTarget;

						// if the object accessed by the user (targetProp) already has a __targetPosition AND the object
						// stored at target[targetProp.__targetPosition] is not null, then that means we are already observing this object
						// we might be able to return a proxy that we've already created for the object
						if (targetProp.__targetPosition > -1 && targets[targetProp.__targetPosition] !== null) {

							// loop over the proxies that we've created for this object
							var ttp = targetsProxy[targetProp.__targetPosition];
							for (var i = 0, l = ttp.length; i < l; i++) {

								// if we find a proxy that was setup for this particular observable, then return that proxy
								if (observable === ttp[i].observable) {
									return ttp[i].proxy;
								}
							}
						}

						// if we're arrived here, then that means there is no proxy for the object the user just accessed, so we
						// have to create a new proxy for it

						// create a shallow copy of the path array -- if we didn't create a shallow copy then all nested objects would share the same path array and the path wouldn't be accurate
						var newPath = path.slice(0);
						newPath.push({"target":targetProp,"property":property});
						return _create(targetProp, domDelay, observable, newPath);
					} else {
						return targetProp;
					}
				},
	 			deleteProperty: function(target, property) {

					// was this change an original change or was it a change that was re-triggered below
					var originalChange = true;
					if (dupProxy === proxy) {
						originalChange = false;
						dupProxy = null;
					}

					// in order to report what the previous value was, we must make a copy of it before it is deleted
					var previousValue = Object.assign({}, target);

					// record the deletion that just took place
					changes.push({
						"type":"delete"
						,"target":target
						,"property":property
						,"newValue":null
						,"previousValue":previousValue[property]
						,"currentPath":_getPath(target, property)
						,"jsonPointer":_getPath(target, property, true)
						,"proxy":proxy
					});

					if (originalChange === true) {

						// perform the delete that we've trapped if changes are not paused for this observable
						if (!observable.changesPaused) delete target[property];

						for (var a = 0, l = targets.length; a < l; a++) if (target === targets[a]) break;

						// loop over each proxy and see if the target for this change has any other proxies
						var currentTargetProxy = targetsProxy[a] || [];

						var b = currentTargetProxy.length;
						while (b--) {
							// if the same target has a different proxy
							if (currentTargetProxy[b].proxy !== proxy) {
								// !!IMPORTANT!! store the proxy as a duplicate proxy (dupProxy) -- this will adjust the behavior above appropriately (that is,
								// prevent a change on dupProxy from re-triggering the same change on other proxies)
								dupProxy = currentTargetProxy[b].proxy;

								// make the same delete on the different proxy for the same target object. it is important that we make this change *after* we invoke the same change
								// on any other proxies so that the previousValue can show up correct for the other proxies
								delete currentTargetProxy[b].proxy[property];
							}
						}

					}

					_notifyObservers(changes.length);

					return true;

				},
				set: function(target, property, value, receiver) {

					// if the value we're assigning is an object, then we want to ensure
					// that we're assigning the original object, not the proxy, in order to avoid mixing
					// the actual targets and proxies -- creates issues with path logging if we don't do this
					if (value && value.__isProxy) value = value.__getTarget;

					// was this change an original change or was it a change that was re-triggered below
					var originalChange = true;
					if (dupProxy === proxy) {
						originalChange = false;
						dupProxy = null;
					}

					// improve performance by saving direct references to the property
					var targetProp = target[property];

					// Only record this change if:
					// 	1. the new value differs from the old one
					//	2. OR if this proxy was not the original proxy to receive the change
					// 	3. OR the modified target is an array and the modified property is "length" and our helper property __length indicates that the array length has changed
					//
					// Regarding #3 above: mutations of arrays via .push or .splice actually modify the .length before the set handler is invoked
					// so in order to accurately report the correct previousValue for the .length, we have to use a helper property.
					if (targetProp !== value || originalChange === false || (property === "length" && target instanceof Array && target.__length !== value)) {

						var foundObservable = true;

						var typeOfTargetProp = (typeof targetProp);

						// determine if we're adding something new or modifying some that already existed
						var type = "update";
						if (typeOfTargetProp === "undefined") type = "add";

						// store the change that just occurred. it is important that we store the change before invoking the other proxies so that the previousValue is correct
						changes.push({
							"type":type
							,"target":target
							,"property":property
							,"newValue":value
							,"previousValue":receiver[property]
							,"currentPath":_getPath(target, property)
							,"jsonPointer":_getPath(target, property, true)
							,"proxy":proxy
						});

						// mutations of arrays via .push or .splice actually modify the .length before the set handler is invoked
						// so in order to accurately report the correct previousValue for the .length, we have to use a helper property.
						if (property === "length" && target instanceof Array && target.__length !== value) {
							changes[changes.length-1].previousValue = target.__length;
							target.__length = value;
						}

						// !!IMPORTANT!! if this proxy was the first proxy to receive the change, then we need to go check and see
						// if there are other proxies for the same project. if there are, then we will modify those proxies as well so the other
						// observers can be modified of the change that has occurred.
						if (originalChange === true) {

							// because the value actually differs than the previous value
							// we need to store the new value on the original target object,
							// but only as long as changes have not been paused
							if (!observable.changesPaused) target[property] = value;


							foundObservable = false;

							var targetPosition = target.__targetPosition;
							var z = targetsProxy[targetPosition].length;

							// find the parent target for this observable -- if the target for that observable has not been removed
							// from the targets array, then that means the observable is still active and we should notify the observers of this change
							while (z--) {
								if (observable === targetsProxy[targetPosition][z].observable) {
									if (targets[targetsProxy[targetPosition][z].observable.parentTarget.__targetPosition] !== null) {
										foundObservable = true;
										break;
									}
								}
							}

							// if we didn't find an observable for this proxy, then that means .remove(proxy) was likely invoked
							// so we no longer need to notify any observer function about the changes, but we still need to update the
							// value of the underlying original objects see below: target[property] = value;
							if (foundObservable) {

								// loop over each proxy and see if the target for this change has any other proxies
								var currentTargetProxy = targetsProxy[targetPosition];
								for (var b = 0, l = currentTargetProxy.length; b < l; b++) {
									// if the same target has a different proxy
									if (currentTargetProxy[b].proxy !== proxy) {

										// !!IMPORTANT!! store the proxy as a duplicate proxy (dupProxy) -- this will adjust the behavior above appropriately (that is,
										// prevent a change on dupProxy from re-triggering the same change on other proxies)
										dupProxy = currentTargetProxy[b].proxy;

										// invoke the same change on the different proxy for the same target object. it is important that we make this change *after* we invoke the same change
										// on any other proxies so that the previousValue can show up correct for the other proxies
										currentTargetProxy[b].proxy[property] = value;

									}
								}

								// if the property being overwritten is an object, then that means this observable
								// will need to stop monitoring this object and any nested objects underneath the overwritten object else they'll become
								// orphaned and grow memory usage. we execute this on a setTimeout so that the clean-up process does not block
								// the UI rendering -- there's no need to execute the clean up immediately
								setTimeout(function() {

									if (typeOfTargetProp === "object" && targetProp !== null) {

										// check if the to-be-overwritten target property still exists on the target object
										// if it does still exist on the object, then we don't want to stop observing it. this resolves
										// an issue where array .sort() triggers objects to be overwritten, but instead of being overwritten
										// and discarded, they are shuffled to a new position in the array
										var keys = Object.keys(target);
										for (var i = 0, l = keys.length; i < l; i++) {
											if (target[keys[i]] === targetProp) return;
										}

										var stillExists = false;

										// now we perform the more expensive search recursively through the target object.
										// if we find the targetProp (that was just overwritten) still exists somewhere else
										// further down in the object, then we still need to observe the targetProp on this observable.
										(function iterate(target) {
											var keys = Object.keys(target);
											for (var i = 0, l = keys.length; i < l; i++) {

												var property = keys[i];
												var nestedTarget = target[property];

												if (nestedTarget instanceof Object && nestedTarget !== null) iterate(nestedTarget);
												if (nestedTarget === targetProp) {
													stillExists = true;
													return;
												}
											};
										})(target);

										// even though targetProp was overwritten, if it still exists somewhere else on the object,
										// then we don't want to remove the observable for that object (targetProp)
										if (stillExists === true) return;

										// loop over each property and recursively invoke the `iterate` function for any
										// objects nested on targetProp
										(function iterate(obj) {

											var keys = Object.keys(obj);
											for (var i = 0, l = keys.length; i < l; i++) {
												var objProp = obj[keys[i]];
												if (objProp instanceof Object && objProp !== null) iterate(objProp);
											}

											// if there are any existing target objects (objects that we're already observing)...
											var c = -1;
											for (var i = 0, l = targets.length; i < l; i++) {
												if (obj === targets[i]) {
													c = i;
													break;
												}
											}
											if (c > -1) {

												// ...then we want to determine if the observables for that object match our current observable
												var currentTargetProxy = targetsProxy[c];
												var d = currentTargetProxy.length;

												while (d--) {
													// if we do have an observable monitoring the object thats about to be overwritten
													// then we can remove that observable from the target object
													if (observable === currentTargetProxy[d].observable) {
														currentTargetProxy.splice(d,1);
														break;
													}
												}

												// if there are no more observables assigned to the target object, then we can remove
												// the target object altogether. this is necessary to prevent growing memory consumption particularly with large data sets
												if (currentTargetProxy.length == 0) {
													// targetsProxy.splice(c,1);
													targets[c] = null;
												}
											}

										})(targetProp);
									}
								},10000);
							}

							// TO DO: the next block of code resolves test case #29, but it results in poor IE11 performance with very large objects.
							// UPDATE: need to re-evaluate IE11 performance due to major performance overhaul from 12/23/2018.
							//
							// if the value we've just set is an object, then we'll need to iterate over it in order to initialize the
							// observers/proxies on all nested children of the object
							/* if (value instanceof Object && value !== null) {
								(function iterate(proxy) {
									var target = proxy.__getTarget;
									var keys = Object.keys(target);
									for (var i = 0, l = keys.length; i < l; i++) {
										var property = keys[i];
										if (target[property] instanceof Object && target[property] !== null) iterate(proxy[property]);
									};
								})(proxy[property]);
							}; */

						};

						if (foundObservable) {
							// notify the observer functions that the target has been modified
							_notifyObservers(changes.length);
						}

					}
					return true;
				}
			};

			var __targetPosition = target.__targetPosition;
			if (!(__targetPosition > -1)) {
				Object.defineProperty(target, "__targetPosition", {
					value: targets.length
					,writable: false
					,enumerable: false
					,configurable: false
				});
			}

			// create the proxy that we'll use to observe any changes
			var proxy = new Proxy(target, handler);

			// we don't want to create a new observable if this function was invoked recursively
			if (observable === null) {
				observable = {"parentTarget":target, "domDelay":domDelay, "parentProxy":proxy, "observers":[],"paused":false,"path":path,"changesPaused":false};
				observables.push(observable);
			}

			// store the proxy we've created so it isn't re-created unnecessarily via get handler
			var proxyItem = {"target":target,"proxy":proxy,"observable":observable};

			// if we have already created a Proxy for this target object then we add it to the corresponding array
			// on targetsProxy (targets and targetsProxy work together as a Hash table indexed by the actual target object).
			if (__targetPosition > -1) {

				// the targets array is set to null for the position of this particular object, then we know that
				// the observable was removed some point in time for this object -- so we need to set the reference again
				if (targets[__targetPosition] === null) {
					targets[__targetPosition] = target;
				}

				targetsProxy[__targetPosition].push(proxyItem);

			// else this is a target object that we had not yet created a Proxy for, so we must add it to targets,
			// and push a new array on to targetsProxy containing the new Proxy
			} else {
				targets.push(target);
				targetsProxy.push([proxyItem]);
			}

			return proxy;
		};

		/**
		 * @typedef {object} ObservableSlimChange Observed change.
		 * @property {"add"|"update"|"delete"} type Change type.
		 * @property {string} property Property name.
		 * @property {string} currentPath Property path with the dot notation (e.g. `foo.0.bar`).
		 * @property {string} jsonPointer Property path with the JSON pointer syntax (e.g. `/foo/0/bar`). See https://datatracker.ietf.org/doc/html/rfc6901.
		 * @property {object} target Target object.
		 * @property {ProxyConstructor} proxy Proxy of the target object.
		 * @property {*} newValue New value of the property.
		 * @property {*} [previousValue] Previous value of the property
		 */

		return {
			/**
			 * Create a new ES6 `Proxy` whose changes we can observe through the `observe()` method.
			 * @param {object} target Plain object that we want to observe for changes.
			 * @param {boolean|number} domDelay If `true`, then the observed changes to `target` will be batched up on a 10ms delay (via `setTimeout()`).
			 * If `false`, then the `observer` function will be immediately invoked after each individual change made to `target`. It is helpful to set
			 * `domDelay` to `true` when your `observer` function makes DOM manipulations (fewer DOM redraws means better performance). If a number greater
			 * than zero, then it defines the DOM delay in milliseconds.
			 * @param {function(ObservableSlimChange[])} [observer] Function that will be invoked when a change is made to the proxy of `target`.
			 * When invoked, this function is passed a single argument: an array of `ObservableSlimChange` detailing each change that has been made.
			 * @returns {ProxyConstructor} Proxy of the target object.
			 */
			create: function(target, domDelay, observer) {

				// test if the target is a Proxy, if it is then we need to retrieve the original object behind the Proxy.
				// we do not allow creating proxies of proxies because -- given the recursive design of ObservableSlim -- it would lead to sharp increases in memory usage
				if (target.__isProxy === true) {
					var target = target.__getTarget;
					//if it is, then we should throw an error. we do not allow creating proxies of proxies
					// because -- given the recursive design of ObservableSlim -- it would lead to sharp increases in memory usage
					//throw new Error("ObservableSlim.create() cannot create a Proxy for a target object that is also a Proxy.");
				}

				// fire off the _create() method -- it will create a new observable and proxy and return the proxy
				var proxy = _create(target, domDelay);

				// assign the observer function
				if (typeof observer === "function") this.observe(proxy, observer);

				// recursively loop over all nested objects on the proxy we've just created
				// this will allow the top observable to observe any changes that occur on a nested object
				(function iterate(proxy) {
					var target = proxy.__getTarget;
					var keys  = Object.keys(target);
					for (var i = 0, l = keys.length; i < l; i++) {
						var property = keys[i];
						if (target[property] instanceof Object && target[property] !== null) iterate(proxy[property]);
					}
				})(proxy);

				return proxy;

			},

			/**
			 * Add a new observer function to an existing proxy.
			 * @param {ProxyConstructor} proxy An ES6 `Proxy` created by the `create()` method.
			 * @param {function(ObservableSlimChange[])} observer Function that will be invoked when a change is made to the proxy of `target`.
			 * When invoked, this function is passed a single argument: an array of `ObservableSlimChange` detailing each change that has been made.
			 * @returns {void} Does not return any value.
			 */
			observe: function(proxy, observer) {
				// loop over all the observables created by the _create() function
				var i = observables.length;
				while (i--) {
					if (observables[i].parentProxy === proxy) {
						observables[i].observers.push(observer);
						break;
					}
				};
			},

			/**
			 * Prevent any observer functions from being invoked when a change occurs to a proxy.
			 * @param {ProxyConstructor} proxy An ES6 `Proxy` created by the `create()` method.
			 * @returns {void} Does not return any value.
			 */
			pause: function(proxy) {
				var i = observables.length;
				var foundMatch = false;
				while (i--) {
					if (observables[i].parentProxy === proxy) {
						observables[i].paused = true;
						foundMatch = true;
						break;
					}
				};

				if (foundMatch == false) throw new Error("ObseravableSlim could not pause observable -- matching proxy not found.");
			},

			/**
			 * Resume execution of any observer functions when a change is made to a proxy.
			 * @param {ProxyConstructor} proxy An ES6 `Proxy` created by the `create()` method.
			 * @returns {void} Does not return any value.
			 */
			resume: function(proxy) {
				var i = observables.length;
				var foundMatch = false;
				while (i--) {
					if (observables[i].parentProxy === proxy) {
						observables[i].paused = false;
						foundMatch = true;
						break;
					}
				};

				if (foundMatch == false) throw new Error("ObseravableSlim could not resume observable -- matching proxy not found.");
			},

			/**
			 * Prevent any changes (i.e., `set`, and `deleteProperty`) from being written to the target object.
			 * However, the observer functions will still be invoked to let you know what changes **WOULD** have been made.
			 * This can be useful if the changes need to be approved by an external source before the changes take effect.
			 * @param {ProxyConstructor} proxy An ES6 `Proxy` created by the `create()` method.
			 * @returns {void} Does not return any value.
			 */
			pauseChanges: function(proxy){
				var i = observables.length;
				var foundMatch = false;
				while (i--) {
					if (observables[i].parentProxy === proxy) {
						observables[i].changesPaused = true;
						foundMatch = true;
						break;
					}
				};

				if (foundMatch == false) throw new Error("ObseravableSlim could not pause changes on observable -- matching proxy not found.");
			},

			/**
			 * Resume the changes that were taking place prior to the call to `pauseChanges()` method.
			 * @param {ProxyConstructor} proxy An ES6 `Proxy` created by the `create()` method.
			 * @returns {void} Does not return any value.
			 */
			resumeChanges: function(proxy){
				var i = observables.length;
				var foundMatch = false;
				while (i--) {
					if (observables[i].parentProxy === proxy) {
						observables[i].changesPaused = false;
						foundMatch = true;
						break;
					}
				};

				if (foundMatch == false) throw new Error("ObseravableSlim could not resume changes on observable -- matching proxy not found.");
			},

			/**
			 * Remove the observable and proxy thereby preventing any further callback observers for changes occurring to the target object.
			 * @param {ProxyConstructor} proxy An ES6 `Proxy` created by the `create()` method.
			 * @returns {void} Does not return any value.
			 */
			remove: function(proxy) {

				var matchedObservable = null;
				var foundMatch = false;

				var c = observables.length;
				while (c--) {
					if (observables[c].parentProxy === proxy) {
						matchedObservable = observables[c];
						foundMatch = true;
						break;
					}
				};

				var a = targetsProxy.length;
				while (a--) {
					var b = targetsProxy[a].length;
					while (b--) {
						if (targetsProxy[a][b].observable === matchedObservable) {
							targetsProxy[a].splice(b,1);

							// if there are no more proxies for this target object
							// then we null out the position for this object on the targets array
							// since we are essentially no longer observing this object.
							// we do not splice it off the targets array, because if we re-observe the same
							// object at a later time, the property __targetPosition cannot be redefined.
							if (targetsProxy[a].length === 0) {
								targets[a] = null;
							};
						}
					};
				};

				if (foundMatch === true) {
					observables.splice(c,1);
				}
			}
		};
	})();

	// Export in a try catch to prevent this from erroring out on older browsers
	try { observableSlim.exports = ObservableSlim; } catch (err) {};

	/*
		build Proxy to observe changes to object properties
		*/

	const registeredObservables = {};
	const getObservable = (id) => {
		return registeredObservables[id]
	};


	/*
		@class ObservableObject

		Base class for data binding. Implements Proxy and Reflect on an object so that
		changes can be observed and manages subscribing and notifying observers.

		*/
	class ObservableObject {
		/*
			@param { String } id - unique id of
			@param { Object } data - optional externally defined javascript object to observe
			@param { Object } options - optional, used by subclasses
			*/
		constructor (id, data = {}, options = {}) {
			this.id = id;

			if (registeredObservables[this.id]) {
				throw (new Error('ObservableObject ' + id + ' already exists.'))
			}

			this.bound = {}; // watchers to sync on value change

			this.data = observableSlimExports.create(data, false, (changes)=>{
				this.sync(changes);
			});

			this.options = options;

			registeredObservables[this.id] = this;
		}

		/*
			@function destroy - remove all bindings
			*/
		destroy () {
			observableSlimExports.pause(this.data);

			delete registeredObservables[this.id];
			delete this.data;
			Object.keys(this.bound).forEach((prop) => {
				Object.keys(this.bound[prop]).forEach((id) => {
					this.unbind(id, prop);
				});
			});

			observableSlimExports.remove(this.data);
		}

		/*
			@function getBoundData - return object being observed
			*/
		getBoundData () {
			return this.data
		}

		/*
			@function bind - attach a function to observe property changes
			@param { String } id - unique id of observer function
			@param { Function } fn - handler called when property changes
			@param { String } property - optional name of property to observe

			Handler function prototype:

			If property is not supplied, callback receives property and value
			(property, value) => {}

			Otherwise just the value is supplied
			(value) => {}
			*/
		bind (id, fn, property = '*') {
			if (!this.bound[property]) {
				this.bound[property] = {};
			}
			this.bound[property][id] = fn;

			fn(this.id, 'connect');
		}

		/*
			@function unbind - unattach observer
			@param { String } id - unique id of observer function
			@param { String } property - optional name of property being observed
			*/
		unbind (id, property = '*') {
			this.bound[property][id](this.id, 'disconnect');

			if (this.bound[property] && this.bound[property][id]) {
				delete this.bound[property][id];
			}
		}

		/*
			function sync - notify observers of property value change
			@param { String } property - property that changed
			*/
		sync (changes) {
			for(const change of changes) {
				const type = change.type;
				const path = change.currentPath;
				const newValue = change.newValue;
				const previousValue = change.previousValue;

				const channels = [];
				for(const p in this.bound) {
					if(p === '*') {
						channels.push(p);
					}
					else {
						const re = new RegExp('^' + p.replace('.','\\.'));
						if(path.match(re)) {
							channels.push(p);
						}
					}
				}

				for(const channel of channels) {
					for(const subscriber in this.bound[channel]) {
						this.bound[channel][subscriber](this.id, type, path, newValue, previousValue);
					}
				}
			}
		}
	}

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

	let theDOMWatcher;
	let theScrollWatcher;
	let theResizeWatcher;
	let theOrientationWatcher;
	let theWorkerWatcher;
	let theObservableObjectWatcher;

	class ObserverSubscriptionManager {
		constructor (options) {
			this.options = options;
			this.observers = [];
			this.pendingAnimationFrame = undefined;
			this.frameQueue = [];
			this.sleeping = true;
		}

		subscribe (observer) {
			if (!this.observers.length && this.sleeping) {
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
			this.sleeping = true;
		}

		wakeup () {
			this.sleeping = false;
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
			const toProcess = this.frameQueue.slice(0);
			this.frameQueue = [];
			for (let i = 0; i < toProcess.length; i++) {
				toProcess[i]();
			}
		}
	}

	class DOMWatcher extends ObserverSubscriptionManager {
		constructor (options = {}) {
			super(options);

			// debounce - just need to know if a change occured, not every change
			this.mutationHandler = debounce_1((mutations, observer) => {
				this.observeDOM(this.options.shadowDOM || document.body);
			}, 25, {
				maxWait: 100
			});

			this.mutationObserver = new MutationObserver(this.mutationHandler, false);
		}

		subscribe (observer) {
			super.subscribe(observer);
			observer.watchDOM(this.options.shadowDOM || document.body);
		}

		wakeup () {
			super.wakeup();
			this.mutationObserver.observe(this.options.shadowDOM || document.body, {
				childList: true,
				subtree: true
			});
		}

		sleep () {
			super.sleep();
			this.mutationObserver.disconnect();
		}

		observeDOM (root) {
			this.notifyObservers('watchDOM', [root || this.options.shadowDOM || document.body]);
		}
	}

	class ScrollWatcher extends ObserverSubscriptionManager {
		constructor (options = {}) {
			super(options);

			this.scrollElement = this.options.scrollElement || window;
			this.lastscroll = 0;
			this.scrolling = false;
		}

		// use 'scroll' event to start scroll loop unless it's already looping
		trigger () {
			if (!this.scrolling) {
				this.scrollLoop();
			}
		}

		scrollLoop () {
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
		}

		setOptions (options = {}) {
			this.sleep();
			this.scrollElement = options.scrollElement || window;
			this.wakeup();
		}

		subscribe (observer) {
			super.subscribe(observer);
			observer.watchScroll();
		}

		wakeup () {
			super.wakeup();
			elementTools.on('theScrollWatcher', this.scrollElement, 'scroll', () => {
				this.trigger();
			});
		}

		sleep () {
			super.sleep();
			elementTools.off('theScrollWatcher', this.scrollElement, 'scroll');
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

			this.debounce = debounce_1(() => {
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

			this.debounce = debounce_1(() => {
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
			const workerObservers = this.workers[id].observers;
			workerObservers.forEach((observer) => {
				if (observer.workerMessage) {
					observer.workerMessage(id, e);
				}
			});
		}

		wakeup () {
			super.wakeup();
		}

		sleep () {
			super.sleep();
		}
	}

	class ObservableObjectWatcher extends ObserverSubscriptionManager {
		constructor (options) {
			super(options);
			this.registeredObservableObjects = {};
		}

		getObservable (id) {
			return this.registeredObservableObjects[id] ? this.registeredObservableObjects[id].observable : undefined
		}

		observableStart (id, data) {
			const foundObservable = getObservable(id);

			// trying to define with data but already exists
			if (foundObservable && data !== undefined) {
				throw (new Error('ObservableObject ' + id + ' already exists, can\'t build.'))
			}

			if (!this.registeredObservableObjects[id]) { // not already managing observable
				if (foundObservable) { // add to service
					this.registeredObservableObjects[id] = {
						id: id,
						observable: foundObservable,
						observers: [],
						managed: false
					};
				} else { // make it
					this.registeredObservableObjects[id] = {
						id: id,
						observable: new ObservableObject(id, data),
						observers: [],
						managed: true
					};
				}
				this.registeredObservableObjects[id].observable.bind(this.constructor.name, this.notify.bind(this));
			}

			return this.registeredObservableObjects[id].observable
		}

		// delete an observable
		observableDestroy (id) {
			if (!this.registeredObservableObjects[id]) {
				throw (new Error('ObservableObject observableDestroy ' + id + ' does not exist'))
			}
			this.registeredObservableObjects[id].observable.unbind(this.constructor.name);
			this.registeredObservableObjects[id].observable.destroy();
			delete this.registeredObservableObjects[id];
		}

		subscribe (observer, id, data) {
			if (!this.registeredObservableObjects[id]) {
				this.observableStart(id, data);
			}
			this.registeredObservableObjects[id].observers.push(observer);
			super.subscribe(observer);
		}

		unSubscribe (observer, id) {
			if (!this.registeredObservableObjects[id]) {
				throw (new Error('ObservableObject unSubscribe ' + id + ' does not exist'))
			}

			const observers = this.registeredObservableObjects[id].observers;
			if (observers.indexOf(observer) !== -1) {
				observers.splice(observers.indexOf(observer), 1);
			}

			if (!observers.length && this.registeredObservableObjects[id].managed) {
				this.observableDestroy(id);
			}

			super.unSubscribe(observer);
		}

		notify (id, type, path, newValue, previousValue) {
			if (!this.registeredObservableObjects[id]) {
				throw (new Error('ObservableObject notify ' + id + ' does not exist'))
			}
			const observers = this.registeredObservableObjects[id].observers;
			observers.forEach((observer) => {
				if (observer.observableChanged) {
					observer.observableChanged(id, type, path, newValue, previousValue);
				}
			});
		}
	}

	// build subscription services

	theDOMWatcher = new DOMWatcher();
	theScrollWatcher = new ScrollWatcher();
	theResizeWatcher = new ResizeWatcher();
	theOrientationWatcher = new OrientationWatcher();
	theWorkerWatcher = new WorkerWatcher();
	theObservableObjectWatcher = new ObservableObjectWatcher();

	var createCompounder = _createCompounder;

	/**
	 * Converts `string` to
	 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the kebab cased string.
	 * @example
	 *
	 * _.kebabCase('Foo Bar');
	 * // => 'foo-bar'
	 *
	 * _.kebabCase('fooBar');
	 * // => 'foo-bar'
	 *
	 * _.kebabCase('__FOO_BAR__');
	 * // => 'foo-bar'
	 */
	var kebabCase = createCompounder(function(result, word, index) {
	  return result + (index ? '-' : '') + word.toLowerCase();
	});

	var kebabCase_1 = kebabCase;

	/**
		Sargasso

		Base class for responsive Sargasso element controllers. Subclass this to
		define specific behavior. If you mutate the DOM in your code you
		should use frames for best results.

		@author Michael Rhodes (except where noted)
		@license MIT
		Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes
	**/

	let unique = 0; // unique IDs for controllers
	const liveElements = []; // instantiated controllers

	const supportsCustomElements = ('customElements' in window); // browser supports custom elements

	const registeredClasses = {};

	/*
		@function registerSargassoClass
		@param { String } className - name of class
		@param { Object } object - class reference

		All subclasses of Sargasso must register the class so that
		the SargassoSupervisor can instantiate them.

		EG.
			class mySubclass extends Sargasso {}
			registerSargassoClass('mySubclass',mySubclass)

		Then an instance of mySubclass will be instantiated and attached to the element
		whenever it appears in the DOM usind data tag or custom element tag:

			<div data-sargasso-class="mySubclass"></div>

			- or -

			<sargasso-my-subclass></sargasso-my-subclass>

		*/
	const registerSargassoClass = (className, object) => {
		if (registeredClasses[className]) {
			throw (new Error('Sargasso class ' + className + ' is already registered.'))
		}

		registeredClasses[className] = object;

		if (supportsCustomElements) {
			/*
				for custom html element scheme <sargasso-class-name sargasso-other-class-name></sargasso-class-name>
				we define a factory to build a class that is a subclass of HTMLElement.
				The browser will instantiate this class when the element appears in the DOM
				allowing us to instantiate the required sargasso controller
				and cleanup when the html element is removed from the dom using
				connectedCallback and disconnectedCallback.

				This scheme allows us to keep the namespace of the element unpolluted with
				sargasso properties and methods.
			*/
			const customElementClassFactory =
				`
			return class ${className}Element extends HTMLElement {
				constructor(element, options = {}) {
					super()
					this.helperClass= '${className}'
					this.helpers = []
				}

				connectedCallback () {
					this.helpers.push(new registeredClasses[this.helperClass](this,{isCustomElement:true}))
					if (this.hasAttributes()) {
						for(let i = 0; i < this.attributes.length; i++) {
							if(this.attributes[i].name.match(/^sargasso-/)) {
								let classname = this.attributes[i].name.replace(/^sargasso-/,'').split('-').map(word=> word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('')
								if(!registeredClasses[classname]) {
									console.log('instantiate by attribute ' + this.attributes[i].name + ' > ' + classname + ' is not a sargasso class')
									continue
								}
								this.helpers.push(new registeredClasses[classname](this,{isCustomElement:true}))
							}
						}
					}

					this.helpers.forEach((helper) => {
						helper.start()
					})
				}

				disconnectedCallback () {
					this.helpers.forEach((helper) => {
						helper.sleep()
						helper.destroy()
				 	})
					this.helpers = [] // nuke the reference for trash collection
				}
			}`;

			const fn = new Function('registeredClasses', customElementClassFactory)(registeredClasses);

			const options = window.sargassoOptions || {};
			const prefix = typeof options.customElementPrefix !== 'undefined' ? options.customElementPrefix : 'sargasso-';
			customElements.define(prefix + kebabCase_1(className), fn);
		}
	};

	// the public event handlers to implement in subclasses
	const eventNames = [
		'DOMChanged',
		'didScroll',
		'didResize',
		'didBreakpoint',
		'enterViewport',
		'exitViewport',
		'enterFullscreen',
		'exitFullscreen',
		'newPage',
		'elementEvent',
		'workerOnMessage',
		'observableChanged'
	];

	/*
		@class Sargasso -  the superclass for all element controllers
		*/
	class Sargasso {
		constructor(element, options = {}) {
			validate('Sargasso constructor element', element, ['isDefined', 'isElement']);
			validate('Sargasso constructor options', options, ['isDefined', ['isObject']]);

			this.uid = ++unique;
			this.element = element;
			if (options.shadowDOM) {
				this._shadowDOM = element.attachShadow({
					mode: 'open'
				});
				this._shadowRoot = document.createElement('div');
				this._shadowDOM.append(this._shadowRoot);
				this._hostElement = this.element;
				this.element = this._shadowRoot;
			}
			this.options = options;
			this._pendingAnimationFrame = undefined;
			this._frameQueue = [];
			this._isInViewport = false;
			this._workers = {};
			this._observables = {};
			this._template = undefined;
			this._templateArgs = {};
			this._started = false;

			this.render = debounce_1(() => {
				this._render();
			}, 100, {
				maxWait: 250
			});
		}

		/*
			@function start - called when controller is instantiated

			Override this to perform any initialization such as event listeners

			Note: always call super.start() in at the top of your subclass start method
			*/
		start() {
			const registeredResponsiveControllers = this.getMetaData('registeredResponsiveControllers') || [];
			registeredResponsiveControllers.push(this);
			this.setMetaData('registeredResponsiveControllers', registeredResponsiveControllers);
			this.setMetaData(this.constructor.name, this);

			liveElements.push(this);

			// if using shadow DOM, build a DOMWatcher to observe changes
			if (this._shadowDOM) {
				if (!this._shadowDOMWatcher) {
					this._shadowDOMWatcher = new DOMWatcher({
						shadowDOM: this._shadowRoot
					});
				}
				this._shadowDOMWatcher.subscribe(this);
			}

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
				}
				else {
					this.elementEvent(e);
				}
			};

			this.element.addEventListener('sargasso', this.elementListener);

			this._started = true;
		}

		/*
			@function sleep - override this to clean up any events or references in your subclass

			Called when element has been removed from DOM just before it is destroyed

			Note: always call super.sleep() at the end of your subclass sleep method
			*/
		sleep() {
			if (this._shadowDOM) {
				this._shadowDOMWatcher.unSubscribe(this);
			}

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

			elementTools.offAll(this.element); // remove all dangling event listeners created with on/once

			this._started = false;
		}

		/**************************************************************
		EVENT HOOKS - Override these methods in your subclass as needed
		***************************************************************/

		/*
			@function DOMChanged - something changed on the page
			called if options.watchDOM set, override as needed.
			*/
		DOMChanged(root) {}

		/*
			@function didScroll - scroll occured
			called if options.watchScroll set, override as needed.
			*/
		didScroll() {}

		/*
			@function didResize - resize occured
			called if options.watchResize set, override as needed.
			*/
		didResize() {}

		/*
			@function didBreakpoint - new breakpoint, override as needed.
			*/
		didBreakpoint() {}

		/*
			@function enterViewport - element entered the viewport
			called if options.watchViewport set, override as needed.
			*/
		enterViewport() {}

		/*
			@function exitViewport - element exited the viewport
			called if options.watchViewport set, override as needed.
			*/
		exitViewport() {}

		/*
			@function enterFullscreen - element entered fullscreen, override as needed.
			*/
		enterFullscreen() {}

		/*
			@function exitFullscreen - element exited fullscreen, override as needed.
			*/
		exitFullscreen() {}

		/*
			@function newPage - page changed
			@param { String } oldPath - outgoing page
			@param { String } newPath - incoming page
			*/
		newPage(oldPath, newPath) {}

		/*
			@function elementEvent - element received a 'sargasso' custom event from somewhere
			@param { Object } e - event
			*/
		elementEvent(e) {}

		/*
			@function workerOnMessage - listen for worker postMessage event
			@param { String } id - id of worker started with this._workerstart()
			@param { Object } data - data received from worker
			*/
		workerOnMessage(id, data) {}

		/*
			@function observableChange - listen for changes to observable object
			@param { String } id - id of observable
			@param { String } type - type of observable
			@param { String } path - path that changed
			@param { String } newValue - new value
			@param { String } previousValue - old value
			*/
		observableChanged(id, type, path, newValue, previousValue) {
			this.render();
		}

		/****************************************************
		UTILITY METHODS - callable but normally not overriden
		*****************************************************/

		/*
			@function setMetaData - Set metadata. Key value storage implemented as a weakMap
			@param { String } - key name for value
			@param { Object } - value or JSON object, null will remove from key from metadate
			*/
		setMetaData(k, v) {
			elementTools.setMetaData(this.element, k, v);
		}

		/*
			@function getMetaData - Retrieve metadata
			@param { String } key - name of value to return
			@return { Object } if key is found otherwise undefined
			*/
		getMetaData(k) {
			return elementTools.getMetaData(this.element, k)
		}

		/*
			@function on - add delegated event handler for this.element
			@param { String} evt - HTML element event name
			@param { String } selector - optional element query selector
			@param { Function } fn - event handler function
			@param { Object } [options] - for addEventListener
			*/
		on(evt, selector, fn, options) {
			elementTools.on(this.constructor.name + '-' + this.uid, this.element, evt, selector, fn, options);
		}

		/*
			@function off - Remove delegated event handler
			@param { String} evt - HTML element event name
			@param { String } [selector] - element query selector
			*/
		off(evt, selector) {
			elementTools.off(this.constructor.name + '-' + this.uid, this.element, evt, selector);
		}

		/*
			@function once - add delegated event handler for this.element witch executes only once
			@param { String} evt - HTML element event name
			@param { String } selector - optional element query selector
			@param { Function } fn - event handler function
			@param { Object } [options] - for addEventListener
			*/
		once(evt, selector, fn, options) {
			elementTools.once(this.constructor.name + '-' + this.uid, this.element, evt, selector, fn, options);
		}

		/*
			@function notifyAll - broadcast 'event' to all instantiated sargasso controllers
			@param { String } event - name of sargasso event
			@param { Object } params - array of params to attach to event
			*/
		notifyAll(event, params) {
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

		/*
			@function notifyElement - broadcast event to all sargasso controllers for 'this.element'
			@param { String } event - name of sargasso event
			@param { Object } params - array of params to attach to event
			*/
		notifyElement(element, event, params) {
			if (eventNames.indexOf(event) === -1) {
				throw (new Error('invalid event name ' + event))
			}

			const registeredResponsiveControllers = this.getMetaData('registeredResponsiveControllers');
			if (registeredResponsiveControllers) {
				for (let i = 0; i < registeredResponsiveControllers.length; i++) {
					const peer = registeredResponsiveControllers[i];
					if (peer !== this && peer[event]) {
						peer[event].apply(peer, params);
					}
				}
			}
		}

		/*
			@function queueFrame - schedule a task in the requestAnimation frame event loop
			@param { function } frame - function to execute

			Call this to queue functions that mutate the DOM (make changes to html)

			EG:
			let frame = () => {
				this.element.addClass('big')
			}
			this.queueFrame(frame)

			The frame will then be executed in the next requested animation frame
			*/
		queueFrame(frame) {
			this._frameQueue.push(frame.bind(this));
			if (!this._pendingAnimationFrame) {
				this._pendingAnimationFrame = requestAnimationFrame(() => {
					this._processQueue();
				});
			}
		}

		/*
			@function wantFullscreen - request full screen
			you can call this from a subclass controller such as an 'enlarge to full screen' button
			otherwise if watchOrientation is set it will call this when phone is in landscape
			it would be nice to acually use the experimental requestFullScreen thing but
			you can't do that on rotate at the moment, only on click.
			*/
		wantFullscreen(want) {
			if (want) {
				this.enterFullscreen();
			}
			else {
				this.exitFullscreen();
			}
		}

		/**********************************************************************
		ELEMENT UTILITIES - convienience methods for manipilating HTML elements
		***********************************************************************/

		hasClass(cssClass) {
			return elementTools.hasClass(this.element, cssClass)
		}

		addClass(cssClasses) {
			elementTools.addClass(this.element, cssClasses);
		}

		removeClass(cssClasses) {
			elementTools.removeClass(this.element, cssClasses);
		}

		setCSS(cssObject) {
			elementTools.setCSS(this.element, cssObject);
		}

		isVisible() {
			return elementTools.isVisible(this.element)
		}

		/*
			@function workerStart - start a web worker
			@param { String } id - id of worker
			@param { String | Url } codeOrURL - javascript worker code or url to download shared worker code

			Offload compute heavy tasks to a new thread and listen for result

			Pass it a url of a web worker js file or create an inline web worker
			from string of raw code such as:

			let mycode = `onmessage = function (e) {
				// e.data contains whatever is passed by this.workerPostMessage()

				// do something here

				// when done send message back to sargasso controller:
				postMessage({
					uid: e.data.uid, // ALWAYS pass this back
					result: 'Done doing pointless stuff: ' + e.data.answer
				})
			}`

			this._workerstart('pointless-stuff', mycode)

			this.workerPostMessage('pointless-stuff', {answer:42})

			*/
		workerStart(id, codeOrURL) {
			this._workers[id] = theWorkerWatcher.registerWorker(id, codeOrURL);
			theWorkerWatcher.subscribe(this, id);
			return this._workers[id]
		}

		/*
			@function workerPostMessage - send a message to a running worker
			@param { String } id - id of worker
			@param { Object } message - data to send to worker
			*/
		workerPostMessage(id, message) {
			if (!message.uid) {
				message.uid = this.uid;
			}
			if (this._workers[id]) {
				this._workers[id].postMessage(message);
			}
		}

		/************************************************
		observe observable objects
		get or set observable object by unique id
		obj optional external object
		*************************************************/

		getObservable(id) {
			return this._observables[id]
		}

		getObservableData(id) {
			return this._observables[id].data
		}

		observableStart(id, data) {
			theObservableObjectWatcher.subscribe(this, id, data);
			this._observables[id] = theObservableObjectWatcher.getObservable(id);
			return this._observables[id]
		}

		observableStop(id) {
			if (this._observables[id]) {
				theObservableObjectWatcher.unSubscribe(this, id);
				delete this._observables[id];
			}
		}

		observableStopAll() {
			for (const id in this._observables) {
				this.observableStop(id);
			}
		}

		setTemplate(template) {
			this._template = template;
		}

		setRenderer(renderer) {
			this.renderer = renderer;
		}

		setTemplateArgs(args = {}) {
			this._templateArgs = args;
			this.render();
		}

		getTemplateArgs() {
			const args = this._templateArgs || {};
			return JSON.parse(JSON.stringify(args))
		}

		// this.render is a debounced call to this
		_render() {
			if (this._template && this.renderer) {
				this.renderer(this._template(this.getTemplateArgs()), this.element);
			}
		}

		/************************************************
		PRIVATE METHODS: normally not called or overriden
		*************************************************/

		/*
			@function _flushQueue - disgard all pending frames
			*/
		_flushQueue() {
			if (this._pendingAnimationFrame) {
				cancelAnimationFrame(this._pendingAnimationFrame);
				this._pendingAnimationFrame = undefined;
			}
			this._frameQueue = [];
		}

		/*
			@function _flushQueue - execute pending frames
			*/
		_processQueue() {
			this._pendingAnimationFrame = undefined;
			const toProcess = this._frameQueue.slice(0);
			this._frameQueue = [];
			for (let i = 0; i < toProcess.length; i++) {
				toProcess[i]();
			}
		}

		/*
			@function _stopWorker - stop a worker
			*/
		_stopWorker(id) {
			if (this._workers[id]) {
				theWorkerWatcher.unSubscribe(this, id);
				delete this._workers[id];
			}
		}

		/*
			@function _stopAllWorkers - cleanup all workers registered by me
			*/
		_stopAllWorkers() {
			for (const worker in this._workers) {
				this._stopWorker(worker);
			}
		}

		/*
			@function destroy - called when this.element is removed from the DOM
			*/
		destroy() {
			this._stopAllWorkers();
			this.observableStopAll();

			this._flushQueue();

			if (this._started) {
				this.sleep();
			}

			const registeredResponsiveControllers = this.getMetaData('registeredResponsiveControllers');
			if (registeredResponsiveControllers) {
				if (registeredResponsiveControllers.indexOf(this) !== -1) {
					registeredResponsiveControllers.splice(registeredResponsiveControllers.indexOf(this), 1);
					this.setMetaData('registeredResponsiveControllers', registeredResponsiveControllers);
				}
			}

			this.setMetaData(this.constructor.name, null);

			this.element = null;

			if (liveElements.indexOf(this) !== -1) {
				liveElements.splice(liveElements.indexOf(this), 1);
			}
		}

		/****************************************************
		EVENT HOOK METHODS - normally not called or overriden
		*****************************************************/

		/*
			@function watchDOM - hook called if options.watchDOM set and DOM changed
			*/
		watchDOM(root) {
			if (root === this._shadowRoot) {
				// something happend this element's my shadow DOM, tell in the DOM about it
				// so dom observers can take actions such as instantiating new sargasso
				// controllers, etc.
				theDOMWatcher.observeDOM(this._shadowRoot);
			}
			else {
				this.DOMChanged(root);
			}
		}

		/*
			@function watchScroll - hook called if options.watchScroll set and Scroll Wrapper scrolled
			*/
		watchScroll() {
			if (this.options.watchViewport) {
				this.inViewport();
			}

			this.didScroll();
		}

		/*
			@function watchResize - hook called if options.watchResize set and window changed size
			*/
		watchResize() {
			if (this.options.watchViewport) {
				this.inViewport();
			}

			this.didResize();
		}

		/*
			@function watchOrientation - hook called if options.watchOrientation set and orientation changes
			*/
		watchOrientation() {
			if (window.orientation && (window.orientation === 90 || window.orientation === -90)) {
				this.wantFullscreen(true);
			}
			else {
				this.wantFullscreen(false);
			}
		}

		/*
			@function inViewport - hook called if options.watchViewPort set and this.element enters viewport
			*/
		inViewport() {
			if (theScrollWatcher.inViewPort(this.element)) {
				if (!this._isInViewport) {
					this.enterViewport();
					this._isInViewport = true;
				}
			}
			else {
				if (this._isInViewport) {
					this.exitViewport();
					this._isInViewport = false;
				}
			}
		}

		/*
			@function workerMessage - hook called when worker posts a message
			*/
		workerMessage(id, e) {
			if (e.data.uid === this.uid) {
				this.workerOnMessage(id, e.data);
			}
		}

		// experimental

		nativeRequestFullScreen() {
			if (document.fullscreenElement) {
				if (document.fullscreenElement === this.element) {
					return
				}
				document.exitFullscreen();
			}

			this.element.requestFullscreen();
		}

		nativeExitFullScreen() {
			if (document.fullscreenElement && document.fullscreenElement === this.element) {
				document.exitFullscreen();
			}
		}
	}

	registerSargassoClass('Sargasso', Sargasso);

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
			options.watchDOM = true;
			options.immortal = true;
			super(element, options);
		}

		didResize () {
			super.didResize();
			this.lazyHandler();
		}

		didScroll () {
			super.didScroll();
			this.lazyHandler();
		}

		DOMChanged (root) {
			super.DOMChanged(root);
			this.lazyHandler(root);
		}

		// watch viewport and instantiate lazy-instantiate-responsive things when visible
		lazyHandler (root = document) {
			const els = root.querySelectorAll('[data-lazy-sargasso-class]');
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
				watchDOM: true,
				mortal: false
			});
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

		DOMChanged (root) {
			this.doIt(root);
		}

		doIt (root = document.body) {
			if (root.getAttribute('data-sargasso-class')) {
				this.instantiate(root);
			}

			const elements = root.querySelectorAll('[data-sargasso-class]');
			for (const element of elements) {
				this.instantiate(element);
			}

			// check for dangling live elements and kill them
			const toCleanup = [];
			for (let i = 0; i < liveElements.length; i++) {
				if (!liveElements[i].options.immortal && !liveElements[i].options.isCustomElement && !document.body.contains(liveElements[i].element)) {
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

	const materialBreakpoints = window.breakpoints || {
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
	};

	class Breakpoints extends Sargasso {
		constructor (element, options = {}) {
			options.watchResize = true;
			super(element, options);

			this.options.widths = options.widths || materialBreakpoints;

			this.scale = undefined;

			this.widths = [];
			this.classes = [];

			this.debouncedDetectGeometry = debounce_1(() => {
				this.detectGeometry();
			}, 100, {
				maxWait: 150
			});
		}

		start () {
			super.start();
			this.debouncedDetectGeometry();
		}

		didResize () {
			this.debouncedDetectGeometry();
		}

		detectGeometry () {
			const newScale = window.doBreakpoints(this.options.widths);

			if (newScale !== this.scale) {
				const frame = () => {
					this.notifyAll('didBreakpoint', [newScale]);
				};
				this.queueFrame(frame);
			}

			this.scale = newScale;
		}
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
			options.immortal = true;
			super(element, options);
			this.excludeRegex = new RegExp('^(//|http|javascript|mailto|#)', 'i');
			this.currentPage = location.pathname + location.search;
			this.cachedMarkup = {};
		}

		start () {
			// set up hijax markup cache
			const containers = document.querySelectorAll('[data-hijax-skip-unchanged]');
			for (let i = 0; i < containers.length; i++) {
				const container = containers[i];
				const id = container.getAttribute('id');
				this.cachedMarkup[id] = container.innerHTML;
			}

			super.start();
			window.addEventListener('popstate', (e) => {
				this.watchPopState(e);
			}, false);
		}

		DOMChanged (root) {
			super.DOMChanged(root);
			this.hijaxLinks(root);
		}

		watchPopState (e) {
			if (location.pathname + location.search !== this.currentPage) {
				this.preFlight(location.pathname + location.search);
			}
		}

		hijaxLinks (fragment) {
			const links = fragment ? fragment.getElementsByTagName('a') : this.element.getElementsByTagName('a');
			for (let i = 0; i < links.length; i++) {
				const link = links[i];
				const href = link.getAttribute('href');
				if (href &&
					!link.getAttribute('data-hijaxed') &&
					!link.getAttribute('target') &&
					!link.hasAttribute('data-no-hijax') &&
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

		setPage (url, reload) {
			if (url === this.currentPage || reload) {
				this.preFlight(url);
			} else {
				history.pushState(null, null, url);
				this.watchPopState();
			}
		}

		preFlight (url) {
			if (!this.options.preFlight) {
				return this.loadPage(url)
			}

			this.options.preFlight(url, (err, handled, rewrite) => {
				if (err) {
					if (this.options.onError) {
						this.options.onError('danger', err);
					} else {
						alert('Error loading page: ' + err);
					}
				}
				if (handled) {
					this.currentPage = location.pathname + location.search;
				} else {
					this.loadPage(rewrite || url);
				}
			});
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
			xhr.setRequestHeader('Sargasso-Hijax', 1);
			xhr.setRequestHeader('x-digitopia-hijax', 1);
			if (this.options.onLoading) {
				this.options.onLoading();
				xhr.onreadystatechange = this.options.onLoading;
			}
			xhr.onload = () => {
				if (xhr.status === 301 || xhr.status === 302 || xhr.getResponseHeader('Sargasso-Location')) {
					const loc = xhr.getResponseHeader('Location') ? xhr.getResponseHeader('Location') : xhr.getResponseHeader('Sargasso-Location');
					this.setPage(loc);
				} else if (xhr.status === 200) {
					theScrollWatcher.scrollTop(0);
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

		processScripts (scripts) {
			Array.from(scripts).forEach((script) => {
				script.remove();
				const id = script.getAttribute('id');
				if (!document.getElementById(id)) {
					// script.onload = function () {}
					document.getElementsByTagName('head')[0].appendChild(script);
				}
			});
		}

		mergePage (html) {
			const ephemerals = document.querySelectorAll('[data-ephemeral]');
			Array.from(ephemerals).forEach((ephemeral) => {
				ephemeral.remove();
			});

			const doc = html.split(/(<body[^>]*>|<\/body>)/ig);
			const fragment = makeFragment(doc[2]);
			const containers = document.querySelectorAll('[data-hijax]');
			for (let i = 0; i < containers.length; i++) {
				const container = containers[i];
				const id = container.getAttribute('id');
				const replace = fragment.getElementById(id);

				// compare raw markup for changes
				if (container.hasAttribute('data-hijax-skip-unchanged')) {
					if (this.cachedMarkup[id] === replace.innerHTML) { // unchanged
						continue
					}
					this.cachedMarkup[id] = replace.innerHTML;
				}

				// use a key found in data-hijax-cache-key on a child element found by css selector defined in data-hijax-cache-key-selector
				const k = container.getAttribute('data-hijax-cache-key-selector');
				if (k) {
					if (replace.querySelector(k) && container.querySelector(k) && container.querySelector(k).getAttribute('data-hijax-cache-key') === replace.querySelector(k).getAttribute('data-hijax-cache-key')) {
						continue
					}
				}

				this.processScripts(replace.querySelectorAll('script'));
				const frame = () => {
					container.parentNode.replaceChild(replace, container);
					if (this.options.onEnterPage) {
						this.options.onEnterPage();
					}
					this.hijaxLinks(replace);
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

	exports.loadPageHandler = void 0;

	const bootSargasso = (options = {}) => {
		if (options.scrollElement) {
			theScrollWatcher.setOptions(options);
		}
		if (options.breakpoints) {
			const breakpoints = new Breakpoints(document.body, options.breakpoints);
			breakpoints.start();
		}
		if (options.hijax) {
			const hijax = new HijaxLoader(document.body, options.hijax);
			hijax.start();
			exports.loadPageHandler = hijax.setPage.bind(hijax);
		} else {
			exports.loadPageHandler = (url) => {
				document.location.href = url;
			};
		}

		const supervisor = new SargassoSupervisor(document.body, options);
		supervisor.start(options);

		return supervisor
	};

	/*
		Sargasso

		Simple, Fast, Reactive, supervised Javascript controllers for html elements.

		@author Michael Rhodes (except where noted)
		@license MIT
		Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes

		*/

	const utils = {
		registerSargassoClass: registerSargassoClass,
		bootSargasso: bootSargasso,
		elementTools: elementTools,
		validate: validate,
		setValidator: setValidator
	};

	const services = {
		theDOMWatcher: theDOMWatcher,
		theScrollWatcher: theScrollWatcher,
		theResizeWatcher: theResizeWatcher,
		theOrientationWatcher: theOrientationWatcher,
		theWorkerWatcher: theWorkerWatcher,
		theObservableObjectWatcher: theObservableObjectWatcher
	};

	const system = {
		liveElements: liveElements,
		registeredClasses: registeredClasses,
		elementMetaData: elementMetaData
	};

	class Noisy extends Sargasso {
		constructor (element, options = {}) {
			super(element, {
				watchDOM: true,
				watchScroll: true,
				watchResize: true,
				watchViewport: true,
				watchOrientation: true
			});

			this.instrument = {};
			let logIt = [];
			if (this.element.getAttribute('data-log-it')) {
				logIt = this.element.getAttribute('data-log-it').split(/[ ,]+/);
			}
			logIt.forEach((k) => {
				this.instrument[k] = true;
			});

			if (this.instrument.constructor) {
				this.logIt('constructor');
			}
		}

		start () {
			this.logIt('start');
			super.start();
			const task = `let counters= {}
			onmessage = async (e) => {
				if(!counters[e.data.uid]) { counters[e.data.uid] = e.data.count }

				setInterval(()=>{
					self.postMessage({ uid: e.data.uid, count: ++counters[e.data.uid] })
				},30000)
			}`;

			this.workerStart('noisy', task);

			this.workerPostMessage('noisy', {
				count: 0
			});
		}

		sleep () {
			super.sleep();
			if (this.instrument.sleep) {
				this.logIt('sleep');
			}
		}

		destroy () {
			if (this.instrument.destroy) {
				this.logIt('will destroy');
			}
			super.destroy();
		}

		DOMChanged (root) {
			if (this.instrument.DOMChanged) {
				this.logIt('DOMChanged', root);
			}
			super.DOMChanged(root);
		}

		didScroll () {
			if (this.instrument.didScroll) {
				this.logIt('didScroll');
			}
			super.didScroll();
		}

		didResize () {
			if (this.instrument.didResize) {
				this.logIt('didResize');
			}
			super.didResize();
		}

		enterViewport () {
			if (this.instrument.enterVireport) {
				this.logIt('enterViewport');
			}
			super.enterViewport();
		}

		exitViewport () {
			if (this.instrument.exitViewport) {
				this.logIt('exitViewport');
			}
			super.exitViewport();
		}

		enterFullscreen () {
			if (this.instrument.enterFullscreen) {
				this.logIt('enterFullscreen');
			}
			super.enterFullscreen();
		}

		exitFullscreen () {
			if (this.instrument.exitFullscreen) {
				this.logIt('exitFullscreen');
			}
			super.exitFullscreen();
		}

		newPage (old, newPage) {
			if (this.instrument.newPage) {
				this.logIt('newPage');
			}
			super.newPage();
		}

		didBreakpoint () {
			if (this.instrument.didBreakpoint) {
				this.logIt('didBreakpoint');
			}
			super.didBreakpoint();
		}

		elementEvent (e) {
			if (this.instrument.elementEvent) {
				this.logIt('elementEvent');
			}
			super.elementEvent();
		}

		workerOnMessage (id, data) {
			if (this.instrument.workerOnMessage) {
				this.logIt('workerOnMessage ' + id + ' worker says ' + data.count);
			}
			super.workerOnMessage(id, data);
		}

		stopWorker (id) {
			if (this.instrument.stopWorker) {
				this.logIt('stopWorker ' + id);
			}
			super.stopWorker(id);
		}

		logIt (message) {
			if (document.getElementById('debug') && message !== 'DOMChanged') {
				document.getElementById('debug').append(this.constructor.name + ' ' + this.element.id + ' ' + message + '\n');
			} else {
				console.log(this.constructor.name, this.element.id, this.uid, message);
			}
		}
	}

	registerSargassoClass('Noisy', Noisy);

	/*
		example ES6 app entrypoint for bundling a site app
	*/

	exports.Sargasso = Sargasso;
	exports.utils = utils;

	return exports;

})({});
