var SargassoModule = (function (exports) {
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

	var _freeGlobal$1 = /*@__PURE__*/getDefaultExportFromCjs(_freeGlobal);

	var freeGlobal = _freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root$2 = freeGlobal || freeSelf || Function('return this')();

	var _root = root$2;

	var _root$1 = /*@__PURE__*/getDefaultExportFromCjs(_root);

	var root$1 = _root;

	/** Built-in value references. */
	var Symbol$3 = root$1.Symbol;

	var _Symbol = Symbol$3;

	var _Symbol$1 = /*@__PURE__*/getDefaultExportFromCjs(_Symbol);

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

	var _arrayMap$1 = /*@__PURE__*/getDefaultExportFromCjs(_arrayMap);

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

	var isArray$1 = Array.isArray;

	var isArray_1 = isArray$1;

	var isArray$2 = /*@__PURE__*/getDefaultExportFromCjs(isArray_1);

	var Symbol$2 = _Symbol;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto$1.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$1.toString;

	/** Built-in value references. */
	var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag$1(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
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

	var _getRawTag$1 = /*@__PURE__*/getDefaultExportFromCjs(_getRawTag);

	/** Used for built-in method references. */

	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

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

	var _objectToString$1 = /*@__PURE__*/getDefaultExportFromCjs(_objectToString);

	var Symbol$1 = _Symbol,
	    getRawTag = _getRawTag,
	    objectToString = _objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag$1(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	var _baseGetTag = baseGetTag$1;

	var _baseGetTag$1 = /*@__PURE__*/getDefaultExportFromCjs(_baseGetTag);

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

	function isObjectLike$1(value) {
	  return value != null && typeof value == 'object';
	}

	var isObjectLike_1 = isObjectLike$1;

	var isObjectLike$2 = /*@__PURE__*/getDefaultExportFromCjs(isObjectLike_1);

	var baseGetTag = _baseGetTag,
	    isObjectLike = isObjectLike_1;

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
	function isSymbol$2(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	var isSymbol_1 = isSymbol$2;

	var isSymbol$3 = /*@__PURE__*/getDefaultExportFromCjs(isSymbol_1);

	var Symbol = _Symbol,
	    arrayMap = _arrayMap,
	    isArray = isArray_1,
	    isSymbol$1 = isSymbol_1;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

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
	  if (isArray(value)) {
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

	var _baseToString$1 = /*@__PURE__*/getDefaultExportFromCjs(_baseToString);

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
	function toString$5(value) {
	  return value == null ? '' : baseToString(value);
	}

	var toString_1 = toString$5;

	var toString$6 = /*@__PURE__*/getDefaultExportFromCjs(toString_1);

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

	var _baseSlice$1 = /*@__PURE__*/getDefaultExportFromCjs(_baseSlice);

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

	var _castSlice$1 = /*@__PURE__*/getDefaultExportFromCjs(_castSlice);

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

	var _hasUnicode$1 = /*@__PURE__*/getDefaultExportFromCjs(_hasUnicode);

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

	var _asciiToArray$1 = /*@__PURE__*/getDefaultExportFromCjs(_asciiToArray);

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

	var _unicodeToArray$1 = /*@__PURE__*/getDefaultExportFromCjs(_unicodeToArray);

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

	var _stringToArray$1 = /*@__PURE__*/getDefaultExportFromCjs(_stringToArray);

	var castSlice = _castSlice,
	    hasUnicode = _hasUnicode,
	    stringToArray = _stringToArray,
	    toString$4 = toString_1;

	/**
	 * Creates a function like `_.lowerFirst`.
	 *
	 * @private
	 * @param {string} methodName The name of the `String` case method to use.
	 * @returns {Function} Returns the new case function.
	 */
	function createCaseFirst$1(methodName) {
	  return function(string) {
	    string = toString$4(string);

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

	var _createCaseFirst$1 = /*@__PURE__*/getDefaultExportFromCjs(_createCaseFirst);

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

	var upperFirst$2 = /*@__PURE__*/getDefaultExportFromCjs(upperFirst_1);

	var toString$3 = toString_1,
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
	  return upperFirst(toString$3(string).toLowerCase());
	}

	var capitalize_1 = capitalize$1;

	var capitalize$2 = /*@__PURE__*/getDefaultExportFromCjs(capitalize_1);

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

	var _arrayReduce$1 = /*@__PURE__*/getDefaultExportFromCjs(_arrayReduce);

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

	var _basePropertyOf$1 = /*@__PURE__*/getDefaultExportFromCjs(_basePropertyOf);

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

	var _deburrLetter$1 = /*@__PURE__*/getDefaultExportFromCjs(_deburrLetter);

	var deburrLetter = _deburrLetter,
	    toString$2 = toString_1;

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
	  string = toString$2(string);
	  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
	}

	var deburr_1 = deburr$1;

	var deburr$2 = /*@__PURE__*/getDefaultExportFromCjs(deburr_1);

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

	var _asciiWords$1 = /*@__PURE__*/getDefaultExportFromCjs(_asciiWords);

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

	var _hasUnicodeWord$1 = /*@__PURE__*/getDefaultExportFromCjs(_hasUnicodeWord);

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

	var _unicodeWords$1 = /*@__PURE__*/getDefaultExportFromCjs(_unicodeWords);

	var asciiWords = _asciiWords,
	    hasUnicodeWord = _hasUnicodeWord,
	    toString$1 = toString_1,
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
	  string = toString$1(string);
	  pattern = guard ? undefined : pattern;

	  if (pattern === undefined) {
	    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
	  }
	  return string.match(pattern) || [];
	}

	var words_1 = words$1;

	var words$2 = /*@__PURE__*/getDefaultExportFromCjs(words_1);

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

	var _createCompounder$1 = /*@__PURE__*/getDefaultExportFromCjs(_createCompounder);

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

	var camelCase$1 = /*@__PURE__*/getDefaultExportFromCjs(camelCase_1);

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
		Made in Barbados 🇧🇧 Copyright © 2020-2023 Michael Rhodes
	**/

	const elementMetaData = new WeakMap();

	const hasClass = (element, cssClass) => {
		validate('hasClass element', element, ['isDefined', 'isElement']);
		validate('hasClass cssClass', cssClass, ['isDefined', 'notEmpty', 'isString']);
		return element.classList.contains(cssClass)
	};

	// addClasses can be:
	// a string 'someclass'
	// a list delimited by comma or space 'class1 class3 class4'
	// an array ['class1','class2']
	const addClass = (element, addClasses) => {
		validate('addClass element', element, ['isDefined', 'isElement']);
		validate('addClass addClasses', addClasses, ['isDefined', 'notEmpty', ['isString', 'isArray']]);

		if (!Array.isArray(addClasses)) {
			addClasses = addClasses.split(/[\s,]/);
		}

		addClasses.forEach((c) => {
			c = c.trim();

			if(!hasClass(element,c)) {
				element.classList.add(c);
			}
		});
	};

	// removeClasses can be:
	// a string 'someclass'
	// a list delimited by comma or space 'class1 class3 class4'
	// an array ['class1','class2']
	const removeClass = (element, removeClasses) => {
		validate('removeClass element', element, ['isDefined', 'isElement']);
		validate('removeClass removeClasses', removeClasses, ['isDefined', 'notEmpty', ['isString', 'isArray']]);

		if (!Array.isArray(removeClasses)) {
			removeClasses = removeClasses.split(/[\s,]/);
		}

		removeClasses.forEach((c) => {
			c = c.trim();
			if(hasClass(element,c)) {
				element.classList.remove(c);
			}
		});
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
				const key = camelCase$1(prop);
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

	const once$1 = function (uid, container, events, selector, fn, options) {
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
		once: once$1,
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

	function isObject$2(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject$2;

	var isObject$3 = /*@__PURE__*/getDefaultExportFromCjs(isObject_1);

	var root = _root;

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
	  return root.Date.now();
	};

	var now_1 = now$1;

	var now$2 = /*@__PURE__*/getDefaultExportFromCjs(now_1);

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

	var _trimmedEndIndex$1 = /*@__PURE__*/getDefaultExportFromCjs(_trimmedEndIndex);

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

	var _baseTrim$1 = /*@__PURE__*/getDefaultExportFromCjs(_baseTrim);

	var baseTrim = _baseTrim,
	    isObject$1 = isObject_1,
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
	  if (isObject$1(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject$1(other) ? (other + '') : other;
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

	var toNumber$2 = /*@__PURE__*/getDefaultExportFromCjs(toNumber_1);

	var isObject = isObject_1,
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

	var debounce$1 = /*@__PURE__*/getDefaultExportFromCjs(debounce_1);

	var events$1 = {exports: {}};

	var events = events$1.exports;

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var R = typeof Reflect === 'object' ? Reflect : null;
	var ReflectApply = R && typeof R.apply === 'function'
	  ? R.apply
	  : function ReflectApply(target, receiver, args) {
	    return Function.prototype.apply.call(target, receiver, args);
	  };

	var ReflectOwnKeys;
	if (R && typeof R.ownKeys === 'function') {
	  ReflectOwnKeys = R.ownKeys;
	} else if (Object.getOwnPropertySymbols) {
	  ReflectOwnKeys = function ReflectOwnKeys(target) {
	    return Object.getOwnPropertyNames(target)
	      .concat(Object.getOwnPropertySymbols(target));
	  };
	} else {
	  ReflectOwnKeys = function ReflectOwnKeys(target) {
	    return Object.getOwnPropertyNames(target);
	  };
	}

	function ProcessEmitWarning(warning) {
	  if (console && console.warn) console.warn(warning);
	}

	var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
	  return value !== value;
	};

	function EventEmitter() {
	  EventEmitter.init.call(this);
	}
	events$1.exports = EventEmitter;
	var once_1 = events$1.exports.once = once;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._eventsCount = 0;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	var defaultMaxListeners = 10;

	function checkListener(listener) {
	  if (typeof listener !== 'function') {
	    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
	  }
	}

	Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
	  enumerable: true,
	  get: function() {
	    return defaultMaxListeners;
	  },
	  set: function(arg) {
	    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
	      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
	    }
	    defaultMaxListeners = arg;
	  }
	});

	EventEmitter.init = function() {

	  if (this._events === undefined ||
	      this._events === Object.getPrototypeOf(this)._events) {
	    this._events = Object.create(null);
	    this._eventsCount = 0;
	  }

	  this._maxListeners = this._maxListeners || undefined;
	};

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
	  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
	    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
	  }
	  this._maxListeners = n;
	  return this;
	};

	function _getMaxListeners(that) {
	  if (that._maxListeners === undefined)
	    return EventEmitter.defaultMaxListeners;
	  return that._maxListeners;
	}

	EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
	  return _getMaxListeners(this);
	};

	EventEmitter.prototype.emit = function emit(type) {
	  var args = [];
	  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
	  var doError = (type === 'error');

	  var events = this._events;
	  if (events !== undefined)
	    doError = (doError && events.error === undefined);
	  else if (!doError)
	    return false;

	  // If there is no 'error' event listener then throw.
	  if (doError) {
	    var er;
	    if (args.length > 0)
	      er = args[0];
	    if (er instanceof Error) {
	      // Note: The comments on the `throw` lines are intentional, they show
	      // up in Node's output if this results in an unhandled exception.
	      throw er; // Unhandled 'error' event
	    }
	    // At least give some kind of context to the user
	    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
	    err.context = er;
	    throw err; // Unhandled 'error' event
	  }

	  var handler = events[type];

	  if (handler === undefined)
	    return false;

	  if (typeof handler === 'function') {
	    ReflectApply(handler, this, args);
	  } else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      ReflectApply(listeners[i], this, args);
	  }

	  return true;
	};

	function _addListener(target, type, listener, prepend) {
	  var m;
	  var events;
	  var existing;

	  checkListener(listener);

	  events = target._events;
	  if (events === undefined) {
	    events = target._events = Object.create(null);
	    target._eventsCount = 0;
	  } else {
	    // To avoid recursion in the case that type === "newListener"! Before
	    // adding it to the listeners, first emit "newListener".
	    if (events.newListener !== undefined) {
	      target.emit('newListener', type,
	                  listener.listener ? listener.listener : listener);

	      // Re-assign `events` because a newListener handler could have caused the
	      // this._events to be assigned to a new object
	      events = target._events;
	    }
	    existing = events[type];
	  }

	  if (existing === undefined) {
	    // Optimize the case of one listener. Don't need the extra array object.
	    existing = events[type] = listener;
	    ++target._eventsCount;
	  } else {
	    if (typeof existing === 'function') {
	      // Adding the second element, need to change to array.
	      existing = events[type] =
	        prepend ? [listener, existing] : [existing, listener];
	      // If we've already got an array, just append.
	    } else if (prepend) {
	      existing.unshift(listener);
	    } else {
	      existing.push(listener);
	    }

	    // Check for listener leak
	    m = _getMaxListeners(target);
	    if (m > 0 && existing.length > m && !existing.warned) {
	      existing.warned = true;
	      // No error code for this since it is a Warning
	      // eslint-disable-next-line no-restricted-syntax
	      var w = new Error('Possible EventEmitter memory leak detected. ' +
	                          existing.length + ' ' + String(type) + ' listeners ' +
	                          'added. Use emitter.setMaxListeners() to ' +
	                          'increase limit');
	      w.name = 'MaxListenersExceededWarning';
	      w.emitter = target;
	      w.type = type;
	      w.count = existing.length;
	      ProcessEmitWarning(w);
	    }
	  }

	  return target;
	}

	EventEmitter.prototype.addListener = function addListener(type, listener) {
	  return _addListener(this, type, listener, false);
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.prependListener =
	    function prependListener(type, listener) {
	      return _addListener(this, type, listener, true);
	    };

	function onceWrapper() {
	  if (!this.fired) {
	    this.target.removeListener(this.type, this.wrapFn);
	    this.fired = true;
	    if (arguments.length === 0)
	      return this.listener.call(this.target);
	    return this.listener.apply(this.target, arguments);
	  }
	}

	function _onceWrap(target, type, listener) {
	  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
	  var wrapped = onceWrapper.bind(state);
	  wrapped.listener = listener;
	  state.wrapFn = wrapped;
	  return wrapped;
	}

	EventEmitter.prototype.once = function once(type, listener) {
	  checkListener(listener);
	  this.on(type, _onceWrap(this, type, listener));
	  return this;
	};

	EventEmitter.prototype.prependOnceListener =
	    function prependOnceListener(type, listener) {
	      checkListener(listener);
	      this.prependListener(type, _onceWrap(this, type, listener));
	      return this;
	    };

	// Emits a 'removeListener' event if and only if the listener was removed.
	EventEmitter.prototype.removeListener =
	    function removeListener(type, listener) {
	      var list, events, position, i, originalListener;

	      checkListener(listener);

	      events = this._events;
	      if (events === undefined)
	        return this;

	      list = events[type];
	      if (list === undefined)
	        return this;

	      if (list === listener || list.listener === listener) {
	        if (--this._eventsCount === 0)
	          this._events = Object.create(null);
	        else {
	          delete events[type];
	          if (events.removeListener)
	            this.emit('removeListener', type, list.listener || listener);
	        }
	      } else if (typeof list !== 'function') {
	        position = -1;

	        for (i = list.length - 1; i >= 0; i--) {
	          if (list[i] === listener || list[i].listener === listener) {
	            originalListener = list[i].listener;
	            position = i;
	            break;
	          }
	        }

	        if (position < 0)
	          return this;

	        if (position === 0)
	          list.shift();
	        else {
	          spliceOne(list, position);
	        }

	        if (list.length === 1)
	          events[type] = list[0];

	        if (events.removeListener !== undefined)
	          this.emit('removeListener', type, originalListener || listener);
	      }

	      return this;
	    };

	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

	EventEmitter.prototype.removeAllListeners =
	    function removeAllListeners(type) {
	      var listeners, events, i;

	      events = this._events;
	      if (events === undefined)
	        return this;

	      // not listening for removeListener, no need to emit
	      if (events.removeListener === undefined) {
	        if (arguments.length === 0) {
	          this._events = Object.create(null);
	          this._eventsCount = 0;
	        } else if (events[type] !== undefined) {
	          if (--this._eventsCount === 0)
	            this._events = Object.create(null);
	          else
	            delete events[type];
	        }
	        return this;
	      }

	      // emit removeListener for all listeners on all events
	      if (arguments.length === 0) {
	        var keys = Object.keys(events);
	        var key;
	        for (i = 0; i < keys.length; ++i) {
	          key = keys[i];
	          if (key === 'removeListener') continue;
	          this.removeAllListeners(key);
	        }
	        this.removeAllListeners('removeListener');
	        this._events = Object.create(null);
	        this._eventsCount = 0;
	        return this;
	      }

	      listeners = events[type];

	      if (typeof listeners === 'function') {
	        this.removeListener(type, listeners);
	      } else if (listeners !== undefined) {
	        // LIFO order
	        for (i = listeners.length - 1; i >= 0; i--) {
	          this.removeListener(type, listeners[i]);
	        }
	      }

	      return this;
	    };

	function _listeners(target, type, unwrap) {
	  var events = target._events;

	  if (events === undefined)
	    return [];

	  var evlistener = events[type];
	  if (evlistener === undefined)
	    return [];

	  if (typeof evlistener === 'function')
	    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

	  return unwrap ?
	    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
	}

	EventEmitter.prototype.listeners = function listeners(type) {
	  return _listeners(this, type, true);
	};

	EventEmitter.prototype.rawListeners = function rawListeners(type) {
	  return _listeners(this, type, false);
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  if (typeof emitter.listenerCount === 'function') {
	    return emitter.listenerCount(type);
	  } else {
	    return listenerCount.call(emitter, type);
	  }
	};

	EventEmitter.prototype.listenerCount = listenerCount;
	function listenerCount(type) {
	  var events = this._events;

	  if (events !== undefined) {
	    var evlistener = events[type];

	    if (typeof evlistener === 'function') {
	      return 1;
	    } else if (evlistener !== undefined) {
	      return evlistener.length;
	    }
	  }

	  return 0;
	}

	EventEmitter.prototype.eventNames = function eventNames() {
	  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
	};

	function arrayClone(arr, n) {
	  var copy = new Array(n);
	  for (var i = 0; i < n; ++i)
	    copy[i] = arr[i];
	  return copy;
	}

	function spliceOne(list, index) {
	  for (; index + 1 < list.length; index++)
	    list[index] = list[index + 1];
	  list.pop();
	}

	function unwrapListeners(arr) {
	  var ret = new Array(arr.length);
	  for (var i = 0; i < ret.length; ++i) {
	    ret[i] = arr[i].listener || arr[i];
	  }
	  return ret;
	}

	function once(emitter, name) {
	  return new Promise(function (resolve, reject) {
	    function errorListener(err) {
	      emitter.removeListener(name, resolver);
	      reject(err);
	    }

	    function resolver() {
	      if (typeof emitter.removeListener === 'function') {
	        emitter.removeListener('error', errorListener);
	      }
	      resolve([].slice.call(arguments));
	    };

	    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
	    if (name !== 'error') {
	      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
	    }
	  });
	}

	function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
	  if (typeof emitter.on === 'function') {
	    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
	  }
	}

	function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
	  if (typeof emitter.on === 'function') {
	    if (flags.once) {
	      emitter.once(name, listener);
	    } else {
	      emitter.on(name, listener);
	    }
	  } else if (typeof emitter.addEventListener === 'function') {
	    // EventTarget does not have `error` event semantics like Node
	    // EventEmitters, we do not listen for `error` events here.
	    emitter.addEventListener(name, function wrapListener(arg) {
	      // IE does not have builtin `{ once: true }` support so we
	      // have to do it manually.
	      if (flags.once) {
	        emitter.removeEventListener(name, wrapListener);
	      }
	      listener(arg);
	    });
	  } else {
	    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
	  }
	}

	var eventsExports = events$1.exports;
	var EventEmitter$1 = /*@__PURE__*/getDefaultExportFromCjs(eventsExports);

	var observableSlim$1 = {exports: {}};

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
	var observableSlim = observableSlim$1.exports;

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
	try { observableSlim$1.exports = ObservableSlim; } catch (err) {};

	var observableSlimExports = observableSlim$1.exports;
	var ObservableSlim$1 = /*@__PURE__*/getDefaultExportFromCjs(observableSlimExports);

	/**
		ObservableObject

		Build an obserbable object

		@author Michael Rhodes (except where noted)
		@license MIT
		Made in Barbados 🇧🇧 Copyright © 2020-2023 Michael Rhodes
	**/

	const registeredObservables = {};
	const getObservable = (id) => {
		return registeredObservables[id]
	};

	/*
		@class ObservableObject

		Base class for data binding. Implements deep Proxy and Reflect on an object so that
		changes can be observed and manages subscribing and notifying observers.
	*/

	class ObservableObject extends EventEmitter$1 {
		/*
			@param { String } id - unique id 
			@param { Object } data - optional externally defined javascript object to observe
			@param { Object } options - optional, used by subclasses
		*/
		constructor (id, data = {}, options = {}) {
			super();

			this.id = id;

			if (registeredObservables[this.id]) {
				throw (new Error('ObservableObject ' + id + ' already exists.'))
			}

			this.bound = {}; // watchers to sync on value change

			this.unproxied = data;
			
			this.data = ObservableSlim$1.create(data, false, (changes)=>{
				this.sync(changes, this.getSource());
			});

			this.options = options;

			registeredObservables[this.id] = this;
		}

		getSource () {
			return this.id
		}

		/*
			@function destroy - remove all bindings
		*/
		destroy () {
			ObservableSlim$1.pause(this.data);

			delete registeredObservables[this.id];
			delete this.data;
			Object.keys(this.bound).forEach((prop) => {
				Object.keys(this.bound[prop]).forEach((id) => {
					this.unbind(id, prop);
				});
			});

			ObservableSlim$1.remove(this.data);
		}

		/*
			@function getObservableData - return proxied data
		*/
		getObservableData () {
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
			if(property === '__proto__') { throw new Error('Invalid property name') }
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
		Made in Barbados 🇧🇧 Copyright © 2020-2023 Michael Rhodes

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
			this.mutationHandler = debounce$1((mutations, observer) => {
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

			this.debounce = debounce$1(() => {
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

			this.debounce = debounce$1(() => {
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

	var kebabCase$1 = /*@__PURE__*/getDefaultExportFromCjs(kebabCase_1);

	/**
		Sargasso

		Base class for responsive Sargasso element controllers. Subclass this to
		define specific behavior. If you mutate the DOM in your code you
		should use frames for best results.

		@author Michael Rhodes (except where noted)
		@license MIT
		Made in Barbados 🇧🇧 Copyright © 2020-2023 Michael Rhodes
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
			customElements.define(prefix + kebabCase$1(className), fn);
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

			this.render = debounce$1(() => {
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

			if (this.options.watchAttributes) {
				this.watchAttributes();
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

			if(this.attributeObserver) {
				this.attributeObserver.disconnect();
			}

			this.element.removeEventListener('sargasso', this.elementListener);

			elementTools.offAll(this.element); // remove all dangling event listeners created with on/once

			this._started = false;
		}

		watchAttributes () {
			this.attributeObserver = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					if (mutation.type === "attributes") {
						this.attributeChanged(mutation.attributeName);
					}
				});
			});

			this.attributeObserver.observe(this._hostElement || this.element, {
				attributes: true
			});
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
			@param { String } id - id of worker started with this.workerstart()
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

		attributeChanged(attribute) {}

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

			this.workerstart('pointless-stuff', mycode)

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

		// templates and rendering

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
			const args = this._templateArgs || [];
			return JSON.parse(JSON.stringify(args))
		}

		// this.render is a debounced call to this
		_render() {
			if (this._template && this.renderer) {
				this.renderer(this._template.apply(this, this.getTemplateArgs()), this.element);
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
		Made in Barbados 🇧🇧 Copyright © 2020-2023 Michael Rhodes
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
		Made in Barbados 🇧🇧 Copyright © 2020-2023 Michael Rhodes
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
		Made in Barbados 🇧🇧 Copyright © 2020-2023 Michael Rhodes
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

			this.debouncedDetectGeometry = debounce$1(() => {
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
		Made in Barbados 🇧🇧 Copyright © 2020-2023 Michael Rhodes
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

	var hasOwn = Object.prototype.hasOwnProperty;
	var toString = Object.prototype.toString;

	var foreach = function forEach (obj, fn, ctx) {
	    if (toString.call(fn) !== '[object Function]') {
	        throw new TypeError('iterator must be a function');
	    }
	    var l = obj.length;
	    if (l === +l) {
	        for (var i = 0; i < l; i++) {
	            fn.call(ctx, obj[i], i, obj);
	        }
	    } else {
	        for (var k in obj) {
	            if (hasOwn.call(obj, k)) {
	                fn.call(ctx, obj[k], k, obj);
	            }
	        }
	    }
	};

	var index = /*@__PURE__*/getDefaultExportFromCjs(foreach);

	'use strict';

	var each = foreach;
	var jsonPointer = api;


	/**
	 * Convenience wrapper around the api.
	 * Calls `.get` when called with an `object` and a `pointer`.
	 * Calls `.set` when also called with `value`.
	 * If only supplied `object`, returns a partially applied function, mapped to the object.
	 *
	 * @param {Object} obj
	 * @param {String|Array} pointer
	 * @param value
	 * @returns {*}
	 */

	function api (obj, pointer, value) {
	    // .set()
	    if (arguments.length === 3) {
	        return api.set(obj, pointer, value);
	    }
	    // .get()
	    if (arguments.length === 2) {
	        return api.get(obj, pointer);
	    }
	    // Return a partially applied function on `obj`.
	    var wrapped = api.bind(api, obj);

	    // Support for oo style
	    for (var name in api) {
	        if (api.hasOwnProperty(name)) {
	            wrapped[name] = api[name].bind(wrapped, obj);
	        }
	    }
	    return wrapped;
	}


	/**
	 * Lookup a json pointer in an object
	 *
	 * @param {Object} obj
	 * @param {String|Array} pointer
	 * @returns {*}
	 */
	api.get = function get (obj, pointer) {
	    var refTokens = Array.isArray(pointer) ? pointer : api.parse(pointer);

	    for (var i = 0; i < refTokens.length; ++i) {
	        var tok = refTokens[i];
	        if (!(typeof obj == 'object' && tok in obj)) {
	            throw new Error('Invalid reference token: ' + tok);
	        }
	        obj = obj[tok];
	    }
	    return obj;
	};

	/**
	 * Sets a value on an object
	 *
	 * @param {Object} obj
	 * @param {String|Array} pointer
	 * @param value
	 */
	api.set = function set (obj, pointer, value) {
	    var refTokens = Array.isArray(pointer) ? pointer : api.parse(pointer),
	      nextTok = refTokens[0];

	    if (refTokens.length === 0) {
	      throw Error('Can not set the root object');
	    }

	    for (var i = 0; i < refTokens.length - 1; ++i) {
	        var tok = refTokens[i];
	        if (typeof tok !== 'string' && typeof tok !== 'number') {
	          tok = String(tok);
	        }
	        if (tok === "__proto__" || tok === "constructor" || tok === "prototype") {
	            continue
	        }
	        if (tok === '-' && Array.isArray(obj)) {
	          tok = obj.length;
	        }
	        nextTok = refTokens[i + 1];

	        if (!(tok in obj)) {
	            if (nextTok.match(/^(\d+|-)$/)) {
	                obj[tok] = [];
	            } else {
	                obj[tok] = {};
	            }
	        }
	        obj = obj[tok];
	    }
	    if (nextTok === '-' && Array.isArray(obj)) {
	      nextTok = obj.length;
	    }
	    obj[nextTok] = value;
	    return this;
	};

	/**
	 * Removes an attribute
	 *
	 * @param {Object} obj
	 * @param {String|Array} pointer
	 */
	api.remove = function (obj, pointer) {
	    var refTokens = Array.isArray(pointer) ? pointer : api.parse(pointer);
	    var finalToken = refTokens[refTokens.length -1];
	    if (finalToken === undefined) {
	        throw new Error('Invalid JSON pointer for remove: "' + pointer + '"');
	    }

	    var parent = api.get(obj, refTokens.slice(0, -1));
	    if (Array.isArray(parent)) {
	      var index = +finalToken;
	      if (finalToken === '' && isNaN(index)) {
	        throw new Error('Invalid array index: "' + finalToken + '"');
	      }

	      Array.prototype.splice.call(parent, index, 1);
	    } else {
	      delete parent[finalToken];
	    }
	};

	/**
	 * Returns a (pointer -> value) dictionary for an object
	 *
	 * @param obj
	 * @param {function} descend
	 * @returns {}
	 */
	api.dict = function dict (obj, descend) {
	    var results = {};
	    api.walk(obj, function (value, pointer) {
	        results[pointer] = value;
	    }, descend);
	    return results;
	};

	/**
	 * Iterates over an object
	 * Iterator: function (value, pointer) {}
	 *
	 * @param obj
	 * @param {function} iterator
	 * @param {function} descend
	 */
	api.walk = function walk (obj, iterator, descend) {
	    var refTokens = [];

	    descend = descend || function (value) {
	        var type = Object.prototype.toString.call(value);
	        return type === '[object Object]' || type === '[object Array]';
	    };

	    (function next (cur) {
	        each(cur, function (value, key) {
	            refTokens.push(String(key));
	            if (descend(value)) {
	                next(value);
	            } else {
	                iterator(value, api.compile(refTokens));
	            }
	            refTokens.pop();
	        });
	    }(obj));
	};

	/**
	 * Tests if an object has a value for a json pointer
	 *
	 * @param obj
	 * @param pointer
	 * @returns {boolean}
	 */
	api.has = function has (obj, pointer) {
	    try {
	        api.get(obj, pointer);
	    } catch (e) {
	        return false;
	    }
	    return true;
	};

	/**
	 * Escapes a reference token
	 *
	 * @param str
	 * @returns {string}
	 */
	api.escape = function escape (str) {
	    return str.toString().replace(/~/g, '~0').replace(/\//g, '~1');
	};

	/**
	 * Unescapes a reference token
	 *
	 * @param str
	 * @returns {string}
	 */
	api.unescape = function unescape (str) {
	    return str.replace(/~1/g, '/').replace(/~0/g, '~');
	};

	/**
	 * Converts a json pointer into a array of reference tokens
	 *
	 * @param pointer
	 * @returns {Array}
	 */
	api.parse = function parse (pointer) {
	    if (pointer === '') { return []; }
	    if (pointer.charAt(0) !== '/') { throw new Error('Invalid JSON pointer: ' + pointer); }
	    return pointer.substring(1).split(/\//).map(api.unescape);
	};

	/**
	 * Builds a json pointer from a array of reference tokens
	 *
	 * @param refTokens
	 * @returns {string}
	 */
	api.compile = function compile (refTokens) {
	    if (refTokens.length === 0) { return ''; }
	    return '/' + refTokens.map(api.escape).join('/');
	};

	var pointer = /*@__PURE__*/getDefaultExportFromCjs(jsonPointer);

	const cloneObj = (source,dest) => {
		Object.keys(source).forEach((key) => {
			if(Array.isArray(source[key])){
				dest[key] = [];
				cloneObj(source[key],dest[key]);
			}
			else {
				if(typeof source[key] === 'object') {
					dest[key] = {};
					cloneObj(source[key],dest[key]);
				}
				else {
					dest[key] = source[key];
				}
			}
		});
	};

	/**
		ObservableClient

		Build an obserbable object that syncs with a server via socket.io

		@author Michael Rhodes (except where noted)
		@license MIT
		Made in Barbados 🇧🇧 Copyright © 2020-2023 Michael Rhodes
	**/

	class ObservableClient extends ObservableObject {

		constructor (id, data = {}, options = {}) {

			validate('ObservableClient constructor endpoint', options.endpoint, ['isDefined', 'isString']);

			super(id, data, options);

			this.socket = null;
			this.connected = false;

			this.socket = (options.io || io)(this.options.endpoint);

			this.socket.on('error', (err) => {
				this.emit('error', {
					message: 'socket error',
					error: err
				});
			});

			this.socket.on('connect_error', (err) => {
				this.emit('error', { message: 'connect_error', error: err });
				this.connected = false;
			});

			this.socket.on('disconnect', (reason) => {
				this.emit('error', { message: 'disconnect', reason: reason });
				this.connected = false;
			});

			this.socket.on('connect', () => {
				this.socket.emit('authenticate', this.id, this.getSource(), this.authenticateHandler.bind(this));
			});

			// listen for change events from server side
			this.socket.on('change', (event) => {			
				for(const change of event.changes) {
					const type = change.type;
					const path = change.currentPath;
					const newValue = change.newValue;
					const previousValue = change.previousValue;

					const ptr = '/' + path.replace(/\./g,'/');

					if(type === 'update' || type === 'add') {
						if(!pointer.has(this.unproxied, ptr) || (pointer.get(this.unproxied, ptr) !== newValue)) {
							pointer.set(this.unproxied, ptr, newValue);
						}
					}
					if(type === 'delete') {
						if(pointer.has(this.unproxied, ptr)) {
							pointer.remove(this.unproxied, ptr);
						}
					}
				}

				this.sync(event.changes, event.source);
				this.emit('sync_from_server');
			});

			if(!this.options.authoritative) {
				this.socket.on('init',(event) => {
					cloneObj(event.init, this.unproxied);
					this.sync(event.changes, event.source);
					this.emit('initialized');
				});
			}
		}

		authenticateHandler(result) {
			if (result.status !== 'ok') {
				this.emit('error', {
					message: 'ObservableClient authentication failed',
					error: result
				});
				return
			}

			// optionally send initial data to server
			if(this.options.authoritative) {
				this.socket.emit('init', {
					source: this.getSource(),
					init: this.unproxied,
					changes: [{type: 'init'}]
				});
			}

			this.connected = true;

			this.emit('status','connected');
		}

		getSource () {
			return super.getSource() + ':client:' + this.socket.id
		}

		destroy () {
			if (this.socket) {
				this.socket.disconnect(true);
			}

			super.destroy();
		}

		// notify observers
		sync(changes, source) {
			super.sync(changes);

			// propagate to server only if local change 
			if (source === this.getSource() && this.socket && this.connected) {
				this.socket.emit('change', {
					sourceId: this.getSource(),
					changes: changes
				}, (result) => {
					if (result.status !== 'ok') {
						this.emit('error', { message: 'sync error', response: result });
					}
					else {
						this.emit('status','sync ok');
					}
				});
			}
		}
	}

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
		setValidator: setValidator,
		getObservable: getObservable
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

	exports.ObservableClient = ObservableClient;
	exports.ObservableObject = ObservableObject;
	exports.Sargasso = Sargasso;
	exports.services = services;
	exports.system = system;
	exports.utils = utils;

	return exports;

})({});
