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
		var a = Object.defineProperty({}, '__esModule', {value: true});
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

	function createCommonjsModule(fn) {
	  var module = { exports: {} };
		return fn(module, module.exports), module.exports;
	}

	function commonjsRequire (target) {
		throw new Error('Could not dynamically require "' + target + '". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.');
	}

	/** Detect free variable `global` from Node.js. */

	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	var _freeGlobal = freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = _freeGlobal || freeSelf || Function('return this')();

	var _root = root;

	/** Built-in value references. */
	var Symbol = _root.Symbol;

	var _Symbol = Symbol;

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	var _arrayMap = arrayMap;

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
	var isArray = Array.isArray;

	var isArray_1 = isArray;

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
	var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
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

	var _getRawTag = getRawTag;

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
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	var _objectToString = objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

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
	  return (symToStringTag && symToStringTag in Object(value))
	    ? _getRawTag(value)
	    : _objectToString(value);
	}

	var _baseGetTag = baseGetTag;

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

	var isObjectLike_1 = isObjectLike;

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
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag$1);
	}

	var isSymbol_1 = isSymbol;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
	    symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray_1(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return _arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol_1(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	var _baseToString = baseToString;

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
	function toString(value) {
	  return value == null ? '' : _baseToString(value);
	}

	var toString_1 = toString;

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
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

	var _baseSlice = baseSlice;

	/**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
	function castSlice(array, start, end) {
	  var length = array.length;
	  end = end === undefined ? length : end;
	  return (!start && end >= length) ? array : _baseSlice(array, start, end);
	}

	var _castSlice = castSlice;

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
	function hasUnicode(string) {
	  return reHasUnicode.test(string);
	}

	var _hasUnicode = hasUnicode;

	/**
	 * Converts an ASCII `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function asciiToArray(string) {
	  return string.split('');
	}

	var _asciiToArray = asciiToArray;

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
	function unicodeToArray(string) {
	  return string.match(reUnicode) || [];
	}

	var _unicodeToArray = unicodeToArray;

	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray(string) {
	  return _hasUnicode(string)
	    ? _unicodeToArray(string)
	    : _asciiToArray(string);
	}

	var _stringToArray = stringToArray;

	/**
	 * Creates a function like `_.lowerFirst`.
	 *
	 * @private
	 * @param {string} methodName The name of the `String` case method to use.
	 * @returns {Function} Returns the new case function.
	 */
	function createCaseFirst(methodName) {
	  return function(string) {
	    string = toString_1(string);

	    var strSymbols = _hasUnicode(string)
	      ? _stringToArray(string)
	      : undefined;

	    var chr = strSymbols
	      ? strSymbols[0]
	      : string.charAt(0);

	    var trailing = strSymbols
	      ? _castSlice(strSymbols, 1).join('')
	      : string.slice(1);

	    return chr[methodName]() + trailing;
	  };
	}

	var _createCaseFirst = createCaseFirst;

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
	var upperFirst = _createCaseFirst('toUpperCase');

	var upperFirst_1 = upperFirst;

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
	function capitalize(string) {
	  return upperFirst_1(toString_1(string).toLowerCase());
	}

	var capitalize_1 = capitalize;

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
	function arrayReduce(array, iteratee, accumulator, initAccum) {
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

	var _arrayReduce = arrayReduce;

	/**
	 * The base implementation of `_.propertyOf` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyOf(object) {
	  return function(key) {
	    return object == null ? undefined : object[key];
	  };
	}

	var _basePropertyOf = basePropertyOf;

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
	var deburrLetter = _basePropertyOf(deburredLetters);

	var _deburrLetter = deburrLetter;

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
	function deburr(string) {
	  string = toString_1(string);
	  return string && string.replace(reLatin, _deburrLetter).replace(reComboMark, '');
	}

	var deburr_1 = deburr;

	/** Used to match words composed of alphanumeric characters. */
	var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

	/**
	 * Splits an ASCII `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function asciiWords(string) {
	  return string.match(reAsciiWord) || [];
	}

	var _asciiWords = asciiWords;

	/** Used to detect strings that need a more robust regexp to match words. */
	var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

	/**
	 * Checks if `string` contains a word composed of Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a word is found, else `false`.
	 */
	function hasUnicodeWord(string) {
	  return reHasUnicodeWord.test(string);
	}

	var _hasUnicodeWord = hasUnicodeWord;

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
	function unicodeWords(string) {
	  return string.match(reUnicodeWord) || [];
	}

	var _unicodeWords = unicodeWords;

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
	function words(string, pattern, guard) {
	  string = toString_1(string);
	  pattern = guard ? undefined : pattern;

	  if (pattern === undefined) {
	    return _hasUnicodeWord(string) ? _unicodeWords(string) : _asciiWords(string);
	  }
	  return string.match(pattern) || [];
	}

	var words_1 = words;

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
	function createCompounder(callback) {
	  return function(string) {
	    return _arrayReduce(words_1(deburr_1(string).replace(reApos, '')), callback, '');
	  };
	}

	var _createCompounder = createCompounder;

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
	var camelCase = _createCompounder(function(result, word, index) {
	  word = word.toLowerCase();
	  return result + (index ? capitalize_1(word) : word);
	});

	var camelCase_1 = camelCase;

	/**
		Utility routines for Sargasso classes

		@author Michael Rhodes (except where noted)
		@license MIT
		Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes
	**/

	const elementMetaData = new WeakMap();

	const hasClass = (element, cssClass) => {
		const className = element.className || '';
		const classes = className.split(/\s+/);
		return classes.indexOf(cssClass) !== -1
	};

	// addClasses can be:
	// a string 'someclass'
	// a list delimited by comma or space 'class1 class3 class4'
	// an array ['class1','class2']
	const addClass = (element, addClasses) => {
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
		return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length)
	};

	const inViewPort = (element, container = window) => {
		const rect = element.getBoundingClientRect();
		const visible = isVisible(element);
		const aboveTheTop = (rect.bottom < 0);
		let belowTheFold;

		if (container.self === window) {
			belowTheFold = (rect.top > (window.innerHeight || document.documentElement.clientHeight));
		} else {
			belowTheFold = (rect.top > container.clientHeight);
		}

		return (visible && !belowTheFold && !aboveTheTop)
	};

	/*
		element: element to apply to
		css: JSON object with properties in kebab-case or camelCase (or even in snake_case and seperate words)
	*/

	const css = (element, css) => {
		for (const prop in css) {
			if (Object.prototype.hasOwnProperty.call(css, prop)) {
				const key = camelCase_1(prop);
				element.style[key] = css[prop] || null;
			}
		}
	};

	const setMetaData = (element, k, v) => {
		const data = elementMetaData.get(element) || {};
		if (v) {
			data[k] = v;
		} else {
			delete data[k];
		}
		elementMetaData.set(element, data);
	};

	const getMetaData = (element, k) => {
		const data = elementMetaData.get(element) || {};
		if (k) {
			return data[k]
		} else {
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
			} else {
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
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject;

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
	  return _root.Date.now();
	};

	var now_1 = now;

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
	function trimmedEndIndex(string) {
	  var index = string.length;

	  while (index-- && reWhitespace.test(string.charAt(index))) {}
	  return index;
	}

	var _trimmedEndIndex = trimmedEndIndex;

	/** Used to match leading whitespace. */
	var reTrimStart = /^\s+/;

	/**
	 * The base implementation of `_.trim`.
	 *
	 * @private
	 * @param {string} string The string to trim.
	 * @returns {string} Returns the trimmed string.
	 */
	function baseTrim(string) {
	  return string
	    ? string.slice(0, _trimmedEndIndex(string) + 1).replace(reTrimStart, '')
	    : string;
	}

	var _baseTrim = baseTrim;

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
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol_1(value)) {
	    return NAN;
	  }
	  if (isObject_1(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject_1(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = _baseTrim(value);
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	var toNumber_1 = toNumber;

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
	  wait = toNumber_1(wait) || 0;
	  if (isObject_1(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber_1(options.maxWait) || 0, wait) : maxWait;
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
	    var time = now_1();
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
	    return timerId === undefined ? result : trailingEdge(now_1());
	  }

	  function debounced() {
	    var time = now_1(),
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
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	var _listCacheClear = listCacheClear;

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
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	var eq_1 = eq;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq_1(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	var _assocIndexOf = assocIndexOf;

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
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

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

	var _listCacheDelete = listCacheDelete;

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	var _listCacheGet = listCacheGet;

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return _assocIndexOf(this.__data__, key) > -1;
	}

	var _listCacheHas = listCacheHas;

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
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	var _listCacheSet = listCacheSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = _listCacheClear;
	ListCache.prototype['delete'] = _listCacheDelete;
	ListCache.prototype.get = _listCacheGet;
	ListCache.prototype.has = _listCacheHas;
	ListCache.prototype.set = _listCacheSet;

	var _ListCache = ListCache;

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new _ListCache;
	  this.size = 0;
	}

	var _stackClear = stackClear;

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	var _stackDelete = stackDelete;

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	var _stackGet = stackGet;

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	var _stackHas = stackHas;

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
	function isFunction(value) {
	  if (!isObject_1(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = _baseGetTag(value);
	  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	var isFunction_1 = isFunction;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = _root['__core-js_shared__'];

	var _coreJsData = coreJsData;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	var _isMasked = isMasked;

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
	function toSource(func) {
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

	var _toSource = toSource;

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
	function baseIsNative(value) {
	  if (!isObject_1(value) || _isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(_toSource(value));
	}

	var _baseIsNative = baseIsNative;

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	var _getValue = getValue;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = _getValue(object, key);
	  return _baseIsNative(value) ? value : undefined;
	}

	var _getNative = getNative;

	/* Built-in method references that are verified to be native. */
	var Map = _getNative(_root, 'Map');

	var _Map = Map;

	/* Built-in method references that are verified to be native. */
	var nativeCreate = _getNative(Object, 'create');

	var _nativeCreate = nativeCreate;

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
	  this.size = 0;
	}

	var _hashClear = hashClear;

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
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _hashDelete = hashDelete;

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
	function hashGet(key) {
	  var data = this.__data__;
	  if (_nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED$2 ? undefined : result;
	  }
	  return hasOwnProperty$6.call(data, key) ? data[key] : undefined;
	}

	var _hashGet = hashGet;

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
	function hashHas(key) {
	  var data = this.__data__;
	  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$5.call(data, key);
	}

	var _hashHas = hashHas;

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
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
	  return this;
	}

	var _hashSet = hashSet;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = _hashClear;
	Hash.prototype['delete'] = _hashDelete;
	Hash.prototype.get = _hashGet;
	Hash.prototype.has = _hashHas;
	Hash.prototype.set = _hashSet;

	var _Hash = Hash;

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new _Hash,
	    'map': new (_Map || _ListCache),
	    'string': new _Hash
	  };
	}

	var _mapCacheClear = mapCacheClear;

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	var _isKeyable = isKeyable;

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return _isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	var _getMapData = getMapData;

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = _getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _mapCacheDelete = mapCacheDelete;

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return _getMapData(this, key).get(key);
	}

	var _mapCacheGet = mapCacheGet;

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return _getMapData(this, key).has(key);
	}

	var _mapCacheHas = mapCacheHas;

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
	function mapCacheSet(key, value) {
	  var data = _getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	var _mapCacheSet = mapCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = _mapCacheClear;
	MapCache.prototype['delete'] = _mapCacheDelete;
	MapCache.prototype.get = _mapCacheGet;
	MapCache.prototype.has = _mapCacheHas;
	MapCache.prototype.set = _mapCacheSet;

	var _MapCache = MapCache;

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
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof _ListCache) {
	    var pairs = data.__data__;
	    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new _MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	var _stackSet = stackSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new _ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = _stackClear;
	Stack.prototype['delete'] = _stackDelete;
	Stack.prototype.get = _stackGet;
	Stack.prototype.has = _stackHas;
	Stack.prototype.set = _stackSet;

	var _Stack = Stack;

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
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	var _setCacheAdd = setCacheAdd;

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	var _setCacheHas = setCacheHas;

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new _MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
	SetCache.prototype.has = _setCacheHas;

	var _SetCache = SetCache;

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
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	var _arraySome = arraySome;

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	var _cacheHas = cacheHas;

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
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
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
	      seen = (bitmask & COMPARE_UNORDERED_FLAG$1) ? new _SetCache : undefined;

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
	      if (!_arraySome(other, function(othValue, othIndex) {
	            if (!_cacheHas(seen, othIndex) &&
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

	var _equalArrays = equalArrays;

	/** Built-in value references. */
	var Uint8Array = _root.Uint8Array;

	var _Uint8Array = Uint8Array;

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	var _mapToArray = mapToArray;

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	var _setToArray = setToArray;

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
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
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
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
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
	          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag$1:
	    case dateTag$1:
	    case numberTag$1:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq_1(+object, +other);

	    case errorTag$1:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag$1:
	    case stringTag$1:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag$2:
	      var convert = _mapToArray;

	    case setTag$2:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
	      convert || (convert = _setToArray);

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
	      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	var _equalByTag = equalByTag;

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	var _arrayPush = arrayPush;

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
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
	}

	var _baseGetAllKeys = baseGetAllKeys;

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
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

	var _arrayFilter = arrayFilter;

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
	function stubArray() {
	  return [];
	}

	var stubArray_1 = stubArray;

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
	var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable$1.call(object, symbol);
	  });
	};

	var _getSymbols = getSymbols;

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	var _baseTimes = baseTimes;

	/** `Object#toString` result references. */
	var argsTag$2 = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike_1(value) && _baseGetTag(value) == argsTag$2;
	}

	var _baseIsArguments = baseIsArguments;

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
	var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
	  return isObjectLike_1(value) && hasOwnProperty$4.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	var isArguments_1 = isArguments;

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

	var isBuffer_1 = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? _root.Buffer : undefined;

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
	var isBuffer = nativeIsBuffer || stubFalse_1;

	module.exports = isBuffer;
	});

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
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER$1 : length;

	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}

	var _isIndex = isIndex;

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
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	var isLength_1 = isLength;

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
	function baseIsTypedArray(value) {
	  return isObjectLike_1(value) &&
	    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
	}

	var _baseIsTypedArray = baseIsTypedArray;

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	var _baseUnary = baseUnary;

	var _nodeUtil = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && _freeGlobal.process;

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
	});

	/* Node.js helper references. */
	var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

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
	var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

	var isTypedArray_1 = isTypedArray;

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
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray_1(value),
	      isArg = !isArr && isArguments_1(value),
	      isBuff = !isArr && !isArg && isBuffer_1(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? _baseTimes(value.length, String) : [],
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
	           _isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _arrayLikeKeys = arrayLikeKeys;

	/** Used for built-in method references. */
	var objectProto$3 = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$3;

	  return value === proto;
	}

	var _isPrototype = isPrototype;

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	var _overArg = overArg;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = _overArg(Object.keys, Object);

	var _nativeKeys = nativeKeys;

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
	function baseKeys(object) {
	  if (!_isPrototype(object)) {
	    return _nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty$2.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeys = baseKeys;

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
	function isArrayLike(value) {
	  return value != null && isLength_1(value.length) && !isFunction_1(value);
	}

	var isArrayLike_1 = isArrayLike;

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
	function keys(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
	}

	var keys_1 = keys;

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return _baseGetAllKeys(object, keys_1, _getSymbols);
	}

	var _getAllKeys = getAllKeys;

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
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1,
	      objProps = _getAllKeys(object),
	      objLength = objProps.length,
	      othProps = _getAllKeys(other),
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

	var _equalObjects = equalObjects;

	/* Built-in method references that are verified to be native. */
	var DataView = _getNative(_root, 'DataView');

	var _DataView = DataView;

	/* Built-in method references that are verified to be native. */
	var Promise$1 = _getNative(_root, 'Promise');

	var _Promise = Promise$1;

	/* Built-in method references that are verified to be native. */
	var Set = _getNative(_root, 'Set');

	var _Set = Set;

	/* Built-in method references that are verified to be native. */
	var WeakMap$1 = _getNative(_root, 'WeakMap');

	var _WeakMap = WeakMap$1;

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag$1 = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = _toSource(_DataView),
	    mapCtorString = _toSource(_Map),
	    promiseCtorString = _toSource(_Promise),
	    setCtorString = _toSource(_Set),
	    weakMapCtorString = _toSource(_WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = _baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (_Map && getTag(new _Map) != mapTag) ||
	    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
	    (_Set && getTag(new _Set) != setTag) ||
	    (_WeakMap && getTag(new _WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = _baseGetTag(value),
	        Ctor = result == objectTag$1 ? value.constructor : undefined,
	        ctorString = Ctor ? _toSource(Ctor) : '';

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

	var _getTag = getTag;

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
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray_1(object),
	      othIsArr = isArray_1(other),
	      objTag = objIsArr ? arrayTag : _getTag(object),
	      othTag = othIsArr ? arrayTag : _getTag(other);

	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;

	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer_1(object)) {
	    if (!isBuffer_1(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new _Stack);
	    return (objIsArr || isTypedArray_1(object))
	      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new _Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new _Stack);
	  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	var _baseIsEqualDeep = baseIsEqualDeep;

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
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
	    return value !== value && other !== other;
	  }
	  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	var _baseIsEqual = baseIsEqual;

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
	  return _baseIsEqual(value, other);
	}

	var isEqual_1 = isEqual;

	/*
		build Proxy to observe changes to object properties
		*/

	const registeredObservables = {};
	const getObservable = (id) => {
		return registeredObservables[id]
	};

	const objectConstructor = ({}).constructor;

	const buildProxy = (self) => {
		return {
			get (target, property) {
				const val = Reflect.get(target, property);
				if (val && typeof val === 'object') return new Proxy(val, buildProxy(self))
				return val
			},
			set (target, property, value) {
				self.sync(property);
				return Reflect.set(target, property, value)
			},
			deleteProperty (target, property) {
				self.sync(property);
				return Reflect.deleteProperty(target, property)
			}
		}
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

			this.data = new Proxy(data, buildProxy(this));

			this.options = options;

			registeredObservables[this.id] = this;
		}

		/*
			@function destroy - remove all bindings
			*/
		destroy () {
			delete registeredObservables[this.id];
			delete this.data;
			Object.keys(this.bound).forEach((prop) => {
				Object.keys(this.bound[prop]).forEach((k) => {
					this.unbind(prop, k);
				});
			});
		}

		/*
			@function getBoundData - return object being observed
			*/
		getBoundData () {
			return this.data
		}

		/*
			@function set - set observed object property
			@param { String } property - observed object property to set
			@param value - string, array, object or whatever to assign to property
			*/
		set (property, value) {
			if (!isEqual_1(this.get(property), value)) {
				this.data[property] = value;
			}
		}

		/*
			@function get - get observed object property
			@param { String } property - observed object property to get
			*/
		get (property) {
			return this.data[property]
		}

		/*
			@function delete - delete observed object property
			@param { String } property - observed object property to delete
			*/
		delete (property) {
			delete this.data[property];
		}

		/*
			@function syncAll - sync all observed object properties
			*/
		syncAll () {
			Object.keys(this.data || {}).forEach((k) => {
				this.sync(k);
			});
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
			Object.keys(this.data).forEach((k) => {
				fn(this.id, k, this.get(k));
			});
		}

		/*
			@function unbind - unattach observer
			@param { String } id - unique id of observer function
			@param { String } property - optional name of property being observed
			*/
		unbind (id, property = '*') {
			if (this.bound[property][id]) {
				delete this.bound[property][id];
			}
		}

		/*
			@function observers - return current observer count
			*/
		observers () {
			let c = 0;
			for (const id in this.bound) {
				if (this.bound.hasOwnProperty(id)) {
					c++;
				}
			}
			return c
		}

		/*
			function sync - notify observers of property value change
			@param { String } property - property that changed
			*/
		sync (property) {
			Object.keys(this.bound['*'] || {}).forEach((k) => {
				this.bound['*'][k](this.id, property, this.get(property));
			});
			Object.keys(this.bound[property] || {}).forEach((k) => {
				this.bound[property][k](this.id, property, this.get(property));
			});
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

		sleep () {}

		wakeup () {}

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
		constructor (options) {
			super(options);

			// debounce - just need to know if a change occured, not every change
			this.mutationHandler = debounce_1((mutations, observer) => {
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

		notify (id, property, value, source) {
			if (!this.registeredObservableObjects[id]) {
				throw (new Error('ObservableObject notify ' + id + ' does not exist'))
			}
			const observers = this.registeredObservableObjects[id].observers;
			observers.forEach((observer) => {
				if (observer.observableChanged) {
					observer.observableChanged(id, property, value, source);
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
	var kebabCase = _createCompounder(function(result, word, index) {
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
		registeredClasses[className] = object;
		if (supportsCustomElements) {
			/*
				for custom html element scheme <sargasso-class-name></sargasso-class-name>
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
					this.helper = null
				}

				connectedCallback () {
					this.helper = new registeredClasses[this.helperClass](this,{isCustomElement:true})
					this.helper.start()
				}

				disconnectedCallback () {
					this.helper.destroy()
					this.helper = null // nuke the reference for trash collection
				}
			}`;

			customElements.define('sargasso-' + kebabCase_1(className), new Function('registeredClasses', customElementClassFactory)(registeredClasses));
		}
	};

	// the public event handlers to implement in subclasses
	const eventNames = [
		'DOMChanged', 'didScroll', 'didResize', 'didBreakpoint', 'enterViewport', 'exitViewport', 'enterFullscreen', 'exitFullscreen', 'newPage', 'elementEvent'
	];

	/*
		@class Sargasso -  the superclass for all element controllers
		*/
	class Sargasso {
		constructor (element, options = {}) {
			this.uid = ++unique;
			this.element = element;
			this.options = options;
			this.pendingAnimationFrame = undefined;
			this.frameQueue = [];
			this.isInViewport = false;
			this.workers = {};
			this.observables = {};
			this.template = undefined;
			this.templateArgs = {};
			this.started = false;

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
		start () {
			const registeredResponsiveControllers = this.getMetaData('registeredResponsiveControllers') || [];
			registeredResponsiveControllers.push(this);
			this.setMetaData('registeredResponsiveControllers', registeredResponsiveControllers);
			this.setMetaData(this.constructor.name, this);

			liveElements.push(this);

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

			this.started = true;
		}

		/*
			@function sleep - override this to clean up any events or references in your subclass

			Called when element has been removed from DOM just before it is destroyed

			Note: always call super.sleep() at the end of your subclass sleep method
			*/
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

			elementTools.offAll(this.element); // remove all dangling event listeners created with on/once

			this.started = false;
		}

		/**************************************************************
		EVENT HOOKS - Override these methods in your subclass as needed
		***************************************************************/

		/*
			@function DOMChanged - something changed on the page
			called if options.watchDOM set, override as needed.
			*/
		DOMChanged () {}

		/*
			@function didScroll - scroll occured
			called if options.watchScroll set, override as needed.
			*/
		didScroll () {}

		/*
			@function didResize - resize occured
			called if options.watchResize set, override as needed.
			*/
		didResize () {}

		/*
			@function didBreakpoint - new breakpoint, override as needed.
			*/
		didBreakpoint () {}

		/*
			@function enterViewport - element entered the viewport
			called if options.watchViewport set, override as needed.
			*/
		enterViewport () {}

		/*
			@function exitViewport - element exited the viewport
			called if options.watchViewport set, override as needed.
			*/
		exitViewport () {}

		/*
			@function enterFullscreen - element entered fullscreen, override as needed.
			*/
		enterFullscreen () {}

		/*
			@function exitFullscreen - element exited fullscreen, override as needed.
			*/
		exitFullscreen () {}

		/*
			@function newPage - page changed
			@param { String } oldPath - outgoing page
			@param { String } newPath - incoming page
			*/
		newPage (oldPath, newPath) {}

		/*
			@function elementEvent - element received a 'sargasso' custom event from somewhere
			@param { Object } e - event
			*/
		elementEvent (e) {}

		/*
			@function workerOnMessage - listen for worker postMessage event
			@param { String } id - id of worker started with this.workerStart()
			@param { Object } data - data received from worker
			*/
		workerOnMessage (id, data) {}

		/*
			@function observableChange - listen for changes to observable object
			@param { String } id - id of observable
			@param { String } property - property that changed
			@param { String } value - new value
			*/
		observableChanged (id, property, value) {
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
		setMetaData (k, v) {
			elementTools.setMetaData(this.element, k, v);
		}

		/*
			@function getMetaData - Retrieve metadata
			@param { String } key - name of value to return
			@return { Object } if key is found otherwise undefined
			*/
		getMetaData (k) {
			return elementTools.getMetaData(this.element, k)
		}

		/*
			@function on - add delegated event handler for this.element
			@param { String} evt - HTML element event name
			@param { String } selector - optional element query selector
			@param { Function } fn - event handler function
			@param { Object } [options] - for addEventListener
			*/
		on (evt, selector, fn, options) {
			elementTools.on(this.constructor.name + '-' + this.uid, this.element, evt, selector, fn, options);
		}

		/*
			@function off - Remove delegated event handler
			@param { String} evt - HTML element event name
			@param { String } [selector] - element query selector
			*/
		off (evt, selector) {
			elementTools.off(this.constructor.name + '-' + this.uid, this.element, evt, selector);
		}

		/*
			@function once - add delegated event handler for this.element witch executes only once
			@param { String} evt - HTML element event name
			@param { String } selector - optional element query selector
			@param { Function } fn - event handler function
			@param { Object } [options] - for addEventListener
			*/
		once (evt, selector, fn, options) {
			elementTools.once(this.constructor.name + '-' + this.uid, this.element, evt, selector, fn, options);
		}

		/*
			@function notifyAll - broadcast 'event' to all instantiated sargasso controllers
			@param { String } event - name of sargasso event
			@param { Object } params - array of params to attach to event
			*/
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

		/*
			@function notifyElement - broadcast event to all sargasso controllers for 'this.element'
			@param { String } event - name of sargasso event
			@param { Object } params - array of params to attach to event
			*/
		notifyElement (element, event, params) {
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
		queueFrame (frame) {
			this.frameQueue.push(frame.bind(this));
			if (!this.pendingAnimationFrame) {
				this.pendingAnimationFrame = requestAnimationFrame(() => {
					this.processQueue();
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
		wantFullscreen (want) {
			if (want) {
				this.enterFullscreen();
			} else {
				this.exitFullscreen();
			}
		}

		/**********************************************************************
		ELEMENT UTILITIES - convienience methods for manipilating HTML elements
		***********************************************************************/

		hasClass (cssClass) {
			return elementTools.hasClass(this.element, cssClass)
		}

		addClass (cssClasses) {
			elementTools.addClass(this.element, cssClasses);
		}

		removeClass (cssClasses) {
			elementTools.removeClass(this.element, cssClasses);
		}

		setCSS (cssObject) {
			elementTools.setCSS(this.element, cssObject);
		}

		isVisible () {
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

			this.workerStart('pointless-stuff', mycode)

			this.workerPostMessage('pointless-stuff', {answer:42})

			*/
		workerStart (id, codeOrURL) {
			this.workers[id] = theWorkerWatcher.registerWorker(id, codeOrURL);
			theWorkerWatcher.subscribe(this, id);
			return this.workers[id]
		}

		/*
			@function workerPostMessage - send a message to a running worker
			@param { String } id - id of worker
			@param { Object } message - data to send to worker
			*/
		workerPostMessage (id, message) {
			if (!message.uid) {
				message.uid = this.uid;
			}
			if (this.workers[id]) {
				this.workers[id].postMessage(message);
			}
		}

		/************************************************
		observe observable objects
		get or set observable object by unique id
		obj optional external object
		*************************************************/

		getObservable (id) {
			return this.observables[id]
		}

		observableStart (id, data) {
			theObservableObjectWatcher.subscribe(this, id, data);
			this.observables[id] = theObservableObjectWatcher.getObservable(id);
			return this.observables[id]
		}

		observableStop (id) {
			if (this.observables[id]) {
				theObservableObjectWatcher.unSubscribe(this, id);
				delete this.observables[id];
			}
		}

		observableStopAll () {
			for (const id in this.observables) {
				this.observableStop(id);
			}
		}

		setTemplate (template) {
			this.template = template;
		}

		setRenderer (renderer) {
			this.renderer = renderer;
		}

		setTemplateArgs (args = {}) {
			this.templateArgs = args.constructor && args.constructor.name === 'ObservableObject' ? args.data : args;
			this.render();
		}

		getTemplateArgs () {
			return JSON.parse(JSON.stringify(this.templateArgs || {}))
		}

		// this.render is a debounced call to this
		_render () {
			if (this.template && this.renderer) {
				this.renderer(this.template(this.getTemplateArgs()), this.element);
			}
		}

		/************************************************
		PRIVATE METHODS: normally not called or overriden
		*************************************************/

		/*
			@function flushQueue - disgard all pending frames
			*/
		flushQueue () {
			if (this.pendingAnimationFrame) {
				cancelAnimationFrame(this.pendingAnimationFrame);
				this.pendingAnimationFrame = undefined;
			}
			this.frameQueue = [];
		}

		/*
			@function flushQueue - execute pending frames
			*/
		processQueue () {
			this.pendingAnimationFrame = undefined;
			const toProcess = this.frameQueue.slice(0);
			this.frameQueue = [];
			for (let i = 0; i < toProcess.length; i++) {
				toProcess[i]();
			}
		}

		/*
			@function stopWorker - stop a worker
			*/
		stopWorker (id) {
			if (this.workers[id]) {
				theWorkerWatcher.unSubscribe(this, id);
				delete this.workers[id];
			}
		}

		/*
			@function stopAllWorkers - cleanup all workers registered by me
			*/
		stopAllWorkers () {
			for (const worker in this.workers) {
				this.stopWorker(worker);
			}
		}

		/*
			@function destroy - called when this.element is removed from the DOM
			*/
		destroy () {
			this.stopAllWorkers();
			this.observableStopAll();

			this.flushQueue();

			if (this.started) {
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
		watchDOM () {
			this.DOMChanged();
		}

		/*
			@function watchScroll - hook called if options.watchScroll set and Scroll Wrapper scrolled
			*/
		watchScroll () {
			if (this.options.watchViewport) {
				this.inViewport();
			}

			this.didScroll();
		}

		/*
			@function watchResize - hook called if options.watchResize set and window changed size
			*/
		watchResize () {
			if (this.options.watchViewport) {
				this.inViewport();
			}

			this.didResize();
		}

		/*
			@function watchOrientation - hook called if options.watchOrientation set and orientation changes
			*/
		watchOrientation () {
			if (window.orientation && (window.orientation === 90 || window.orientation === -90)) {
				this.wantFullscreen(true);
			} else {
				this.wantFullscreen(false);
			}
		}

		/*
			@function inViewport - hook called if options.watchViewPort set and this.element enters viewport
			*/
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

		/*
			@function workerMessage - hook called when worker posts a message
			*/
		workerMessage (id, e) {
			if (e.data.uid === this.uid) {
				this.workerOnMessage(id, e.data);
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

		DOMChanged () {
			super.DOMChanged();
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

	/*!
	 * JavaScript Cookie v2.2.1
	 * https://github.com/js-cookie/js-cookie
	 *
	 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
	 * Released under the MIT license
	 */

	var js_cookie = createCommonjsModule(function (module, exports) {
	;(function (factory) {
		var registeredInModuleLoader;
		if (typeof undefined === 'function' && undefined.amd) {
			undefined(factory);
			registeredInModuleLoader = true;
		}
		if ('object' === 'object') {
			module.exports = factory();
			registeredInModuleLoader = true;
		}
		if (!registeredInModuleLoader) {
			var OldCookies = window.Cookies;
			var api = window.Cookies = factory();
			api.noConflict = function () {
				window.Cookies = OldCookies;
				return api;
			};
		}
	}(function () {
		function extend () {
			var i = 0;
			var result = {};
			for (; i < arguments.length; i++) {
				var attributes = arguments[ i ];
				for (var key in attributes) {
					result[key] = attributes[key];
				}
			}
			return result;
		}

		function decode (s) {
			return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
		}

		function init (converter) {
			function api() {}

			function set (key, value, attributes) {
				if (typeof document === 'undefined') {
					return;
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

				value = converter.write ?
					converter.write(value, key) :
					encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

				key = encodeURIComponent(String(key))
					.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
					.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';
				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
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

				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			function get (key, json) {
				if (typeof document === 'undefined') {
					return;
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
							break;
						}
					} catch (e) {}
				}

				return key ? jar[key] : jar;
			}

			api.set = set;
			api.get = function (key) {
				return get(key, false /* read as raw */);
			};
			api.getJSON = function (key) {
				return get(key, true /* read as json */);
			};
			api.remove = function (key, attributes) {
				set(key, '', extend(attributes, {
					expires: -1
				}));
			};

			api.defaults = {};

			api.withConverter = init;

			return api;
		}

		return init(function () {});
	}));
	});

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
			return js_cookie.get(key)
		};

		setCookie (key, value, expires) {
			const options = {
				path: '/',
				domain: this.options.cookieDomain || null,
				expires: expires
			};
			js_cookie.set(key, value, options);
		};

		deleteCookie (key) {
			this.setCookie(key, null);
		};
	};

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

		DOMChanged () {
			super.DOMChanged();
			this.hijaxLinks();
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
		elementTools: elementTools
	};

	const services = {
		theDOMWatcher: theDOMWatcher,
		theScrollWatcher: theScrollWatcher,
		theResizeWatcher: theResizeWatcher,
		theOrientationWatcher: theOrientationWatcher,
		theWorkerWatcher: theWorkerWatcher,
		theObservableObjectWatcher: theObservableObjectWatcher
	};

	exports.ObservableObject = ObservableObject;
	exports.Sargasso = Sargasso;
	exports.services = services;
	exports.utils = utils;

	Object.defineProperty(exports, '__esModule', { value: true });

	return exports;

}({}));
