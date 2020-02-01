this.PelagicCreatures = this.PelagicCreatures || {};
this.PelagicCreatures.Sargasso = (function (exports) {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
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
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

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

	var _getRawTag = getRawTag;

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

	var _objectToString = objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

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
	    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
	}

	var isSymbol_1 = isSymbol;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

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
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	    rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsZWJ = '\\u200d';

	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

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
	    rsComboMarksRange$1 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
	    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
	    rsVarRange$1 = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange$1 + ']',
	    rsCombo = '[' + rsComboRange$1 + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange$1 + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ$1 = '\\u200d';

	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange$1 + ']?',
	    rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

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
	var rsComboMarksRange$2 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$2 = '\\u20d0-\\u20ff',
	    rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2;

	/** Used to compose unicode capture groups. */
	var rsCombo$1 = '[' + rsComboRange$2 + ']';

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
	var rsAstralRange$2 = '\\ud800-\\udfff',
	    rsComboMarksRange$3 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$3 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$3 = '\\u20d0-\\u20ff',
	    rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3,
	    rsDingbatRange = '\\u2700-\\u27bf',
	    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
	    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
	    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
	    rsPunctuationRange = '\\u2000-\\u206f',
	    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
	    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
	    rsVarRange$2 = '\\ufe0e\\ufe0f',
	    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

	/** Used to compose unicode capture groups. */
	var rsApos = "['\u2019]",
	    rsBreak = '[' + rsBreakRange + ']',
	    rsCombo$2 = '[' + rsComboRange$3 + ']',
	    rsDigits = '\\d+',
	    rsDingbat = '[' + rsDingbatRange + ']',
	    rsLower = '[' + rsLowerRange + ']',
	    rsMisc = '[^' + rsAstralRange$2 + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
	    rsFitz$1 = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier$1 = '(?:' + rsCombo$2 + '|' + rsFitz$1 + ')',
	    rsNonAstral$1 = '[^' + rsAstralRange$2 + ']',
	    rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsUpper = '[' + rsUpperRange + ']',
	    rsZWJ$2 = '\\u200d';

	/** Used to compose unicode regexes. */
	var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
	    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
	    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
	    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
	    reOptMod$1 = rsModifier$1 + '?',
	    rsOptVar$1 = '[' + rsVarRange$2 + ']?',
	    rsOptJoin$1 = '(?:' + rsZWJ$2 + '(?:' + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*',
	    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
	    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
	    rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
	    rsEmoji = '(?:' + [rsDingbat, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsSeq$1;

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
	var rsApos$1 = "['\u2019]";

	/** Used to match apostrophes. */
	var reApos = RegExp(rsApos$1, 'g');

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
	  value = value.replace(reTrim, '');
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

	var js_cookie = createCommonjsModule(function (module, exports) {
	(function (factory) {
		var registeredInModuleLoader;
		{
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
		Utility routines for Sargasso classes

		@author Michael Rhodes (except where noted)
		@license MIT
		Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes
	**/

	const elementMetaData = new WeakMap();

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

	/*
		element: element to apply to
		css: JSON object with properties in kebab-case or camelCase (or even in snake_case and seperate words)
	*/

	const _css = (element, css) => {
		for (const prop in css) {
			let key = prop;
			if (key.match(/_- /)) {
				key = camelCase_1(prop);
			}
			element.style[key] = css[prop];
		}
	};

	const _setMetaData = (element, k, v) => {
		const data = elementMetaData.get(element) || {};
		if (v) {
			data[k] = v;
		} else {
			delete data[k];
		}
		elementMetaData.set(element, data);
	};

	const _getMetaData = (element, k) => {
		const data = elementMetaData.get(element) || {};
		return data[k]
	};

	const elementTools = {
		hasClass: _hasClass,
		addClass: _addClass,
		removeClass: _removeClass,
		isVisible: _isVisible,
		inViewPort: _inViewPort,
		setCSS: _css,
		setMetaData: _setMetaData,
		getMetaData: _getMetaData
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
		should use frames for best results.

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

			const registeredResponsiveControllers = this.getMetaData('registeredResponsiveControllers') || [];
			registeredResponsiveControllers.push(this);
			this.setMetaData('registeredResponsiveControllers', registeredResponsiveControllers);
			this.setMetaData(this.constructor.name, this);

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

		setMetaData (k, v) {
			elementTools.setMetaData(this.element, k, v);
		}

		getMetaData (k) {
			return elementTools.getMetaData(this.element, k)
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
				this.workerOnMessage(id, e.data);
			}
		}

		// subclass should overide this to listen to workers
		workerOnMessage (id, data) {

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
				const id = containers[i].getAttribute('id');
				const replace = fragment.getElementById(id);
				this.processScripts(replace.querySelectorAll('script'));
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

	let loadPageHandler;

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
			loadPageHandler = hijax.setPage.bind(hijax);
		} else {
			loadPageHandler = (url) => {
				document.location.href = url;
			};
		}
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
		loadPageHandler: loadPageHandler
	};

	exports.Sargasso = Sargasso;
	exports.utils = utils;

	return exports;

}({}));
//# sourceMappingURL=sargasso.iife.js.map
