function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
/*
	Sargasso

	Simple, Fast, Reactive, supervised Javascript controllers for html elements.

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes

	*/ /**
	Sargasso

	Base class for responsive Sargasso element controllers. Subclass this to
	define specific behavior. If you mutate the DOM in your code you
	should use frames for best results.

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020-2023 Michael Rhodes
**/ /**
	Utility routines for Sargasso classes

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020-2023 Michael Rhodes
**/ var $bd9a4487e89e9b7f$exports = {};
var $1fe7b7140fcf8f7e$exports = {};
var $4d9d2fa6bf96438c$exports = {};
var $ca52cd70f22ba1e9$exports = {};
var $a4a92e55c85898ef$exports = {};
var $8101beff1446c944$exports = {};
var $82f851726a988068$exports = {};
/** Detect free variable `global` from Node.js. */ var $82f851726a988068$var$freeGlobal = typeof $parcel$global == "object" && $parcel$global && $parcel$global.Object === Object && $parcel$global;
$82f851726a988068$exports = $82f851726a988068$var$freeGlobal;


/** Detect free variable `self`. */ var $8101beff1446c944$var$freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var $8101beff1446c944$var$root = $82f851726a988068$exports || $8101beff1446c944$var$freeSelf || Function("return this")();
$8101beff1446c944$exports = $8101beff1446c944$var$root;


/** Built-in value references. */ var $a4a92e55c85898ef$var$Symbol = $8101beff1446c944$exports.Symbol;
$a4a92e55c85898ef$exports = $a4a92e55c85898ef$var$Symbol;


var $121ced537c61e5e8$exports = {};
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ function $121ced537c61e5e8$var$arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while(++index < length)result[index] = iteratee(array[index], index, array);
    return result;
}
$121ced537c61e5e8$exports = $121ced537c61e5e8$var$arrayMap;


var $510fa7180867054c$exports = {};
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
 */ var $510fa7180867054c$var$isArray = Array.isArray;
$510fa7180867054c$exports = $510fa7180867054c$var$isArray;


var $feaeb29a5a25786c$exports = {};
var $1d94205848e4d87d$exports = {};

var $5e94ff245943c4ab$exports = {};

/** Used for built-in method references. */ var $5e94ff245943c4ab$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $5e94ff245943c4ab$var$hasOwnProperty = $5e94ff245943c4ab$var$objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var $5e94ff245943c4ab$var$nativeObjectToString = $5e94ff245943c4ab$var$objectProto.toString;
/** Built-in value references. */ var $5e94ff245943c4ab$var$symToStringTag = $a4a92e55c85898ef$exports ? $a4a92e55c85898ef$exports.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function $5e94ff245943c4ab$var$getRawTag(value) {
    var isOwn = $5e94ff245943c4ab$var$hasOwnProperty.call(value, $5e94ff245943c4ab$var$symToStringTag), tag = value[$5e94ff245943c4ab$var$symToStringTag];
    try {
        value[$5e94ff245943c4ab$var$symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = $5e94ff245943c4ab$var$nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[$5e94ff245943c4ab$var$symToStringTag] = tag;
        else delete value[$5e94ff245943c4ab$var$symToStringTag];
    }
    return result;
}
$5e94ff245943c4ab$exports = $5e94ff245943c4ab$var$getRawTag;


var $541fd5f83d4f2cc8$exports = {};
/** Used for built-in method references. */ var $541fd5f83d4f2cc8$var$objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var $541fd5f83d4f2cc8$var$nativeObjectToString = $541fd5f83d4f2cc8$var$objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function $541fd5f83d4f2cc8$var$objectToString(value) {
    return $541fd5f83d4f2cc8$var$nativeObjectToString.call(value);
}
$541fd5f83d4f2cc8$exports = $541fd5f83d4f2cc8$var$objectToString;


/** `Object#toString` result references. */ var $1d94205848e4d87d$var$nullTag = "[object Null]", $1d94205848e4d87d$var$undefinedTag = "[object Undefined]";
/** Built-in value references. */ var $1d94205848e4d87d$var$symToStringTag = $a4a92e55c85898ef$exports ? $a4a92e55c85898ef$exports.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function $1d94205848e4d87d$var$baseGetTag(value) {
    if (value == null) return value === undefined ? $1d94205848e4d87d$var$undefinedTag : $1d94205848e4d87d$var$nullTag;
    return $1d94205848e4d87d$var$symToStringTag && $1d94205848e4d87d$var$symToStringTag in Object(value) ? $5e94ff245943c4ab$exports(value) : $541fd5f83d4f2cc8$exports(value);
}
$1d94205848e4d87d$exports = $1d94205848e4d87d$var$baseGetTag;


var $8a048ca9ebc45a7b$exports = {};
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
 */ function $8a048ca9ebc45a7b$var$isObjectLike(value) {
    return value != null && typeof value == "object";
}
$8a048ca9ebc45a7b$exports = $8a048ca9ebc45a7b$var$isObjectLike;


/** `Object#toString` result references. */ var $feaeb29a5a25786c$var$symbolTag = "[object Symbol]";
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
 */ function $feaeb29a5a25786c$var$isSymbol(value) {
    return typeof value == "symbol" || $8a048ca9ebc45a7b$exports(value) && $1d94205848e4d87d$exports(value) == $feaeb29a5a25786c$var$symbolTag;
}
$feaeb29a5a25786c$exports = $feaeb29a5a25786c$var$isSymbol;


/** Used as references for various `Number` constants. */ var $ca52cd70f22ba1e9$var$INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */ var $ca52cd70f22ba1e9$var$symbolProto = $a4a92e55c85898ef$exports ? $a4a92e55c85898ef$exports.prototype : undefined, $ca52cd70f22ba1e9$var$symbolToString = $ca52cd70f22ba1e9$var$symbolProto ? $ca52cd70f22ba1e9$var$symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */ function $ca52cd70f22ba1e9$var$baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == "string") return value;
    if ($510fa7180867054c$exports(value)) // Recursively convert values (susceptible to call stack limits).
    return $121ced537c61e5e8$exports(value, $ca52cd70f22ba1e9$var$baseToString) + "";
    if ($feaeb29a5a25786c$exports(value)) return $ca52cd70f22ba1e9$var$symbolToString ? $ca52cd70f22ba1e9$var$symbolToString.call(value) : "";
    var result = value + "";
    return result == "0" && 1 / value == -$ca52cd70f22ba1e9$var$INFINITY ? "-0" : result;
}
$ca52cd70f22ba1e9$exports = $ca52cd70f22ba1e9$var$baseToString;


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
 */ function $4d9d2fa6bf96438c$var$toString(value) {
    return value == null ? "" : $ca52cd70f22ba1e9$exports(value);
}
$4d9d2fa6bf96438c$exports = $4d9d2fa6bf96438c$var$toString;


var $b2af79b3f30b711a$exports = {};
var $387c7f28cb7f9fe4$exports = {};
var $104b24dbed7c7c44$exports = {};
var $41d7ffb3d7644903$exports = {};
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */ function $41d7ffb3d7644903$var$baseSlice(array, start, end) {
    var index = -1, length = array.length;
    if (start < 0) start = -start > length ? 0 : length + start;
    end = end > length ? length : end;
    if (end < 0) end += length;
    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result = Array(length);
    while(++index < length)result[index] = array[index + start];
    return result;
}
$41d7ffb3d7644903$exports = $41d7ffb3d7644903$var$baseSlice;


/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */ function $104b24dbed7c7c44$var$castSlice(array, start, end) {
    var length = array.length;
    end = end === undefined ? length : end;
    return !start && end >= length ? array : $41d7ffb3d7644903$exports(array, start, end);
}
$104b24dbed7c7c44$exports = $104b24dbed7c7c44$var$castSlice;


var $871aa669feb0823b$exports = {};
/** Used to compose unicode character classes. */ var $871aa669feb0823b$var$rsAstralRange = "\ud800-\udfff", $871aa669feb0823b$var$rsComboMarksRange = "\\u0300-\\u036f", $871aa669feb0823b$var$reComboHalfMarksRange = "\\ufe20-\\ufe2f", $871aa669feb0823b$var$rsComboSymbolsRange = "\\u20d0-\\u20ff", $871aa669feb0823b$var$rsComboRange = $871aa669feb0823b$var$rsComboMarksRange + $871aa669feb0823b$var$reComboHalfMarksRange + $871aa669feb0823b$var$rsComboSymbolsRange, $871aa669feb0823b$var$rsVarRange = "\\ufe0e\\ufe0f";
/** Used to compose unicode capture groups. */ var $871aa669feb0823b$var$rsZWJ = "\\u200d";
/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */ var $871aa669feb0823b$var$reHasUnicode = RegExp("[" + $871aa669feb0823b$var$rsZWJ + $871aa669feb0823b$var$rsAstralRange + $871aa669feb0823b$var$rsComboRange + $871aa669feb0823b$var$rsVarRange + "]");
/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */ function $871aa669feb0823b$var$hasUnicode(string) {
    return $871aa669feb0823b$var$reHasUnicode.test(string);
}
$871aa669feb0823b$exports = $871aa669feb0823b$var$hasUnicode;


var $9d86cd16f07c38f7$exports = {};
var $57d825f9357373fd$exports = {};
/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function $57d825f9357373fd$var$asciiToArray(string) {
    return string.split("");
}
$57d825f9357373fd$exports = $57d825f9357373fd$var$asciiToArray;



var $971b61e4986555ca$exports = {};
/** Used to compose unicode character classes. */ var $971b61e4986555ca$var$rsAstralRange = "\ud800-\udfff", $971b61e4986555ca$var$rsComboMarksRange = "\\u0300-\\u036f", $971b61e4986555ca$var$reComboHalfMarksRange = "\\ufe20-\\ufe2f", $971b61e4986555ca$var$rsComboSymbolsRange = "\\u20d0-\\u20ff", $971b61e4986555ca$var$rsComboRange = $971b61e4986555ca$var$rsComboMarksRange + $971b61e4986555ca$var$reComboHalfMarksRange + $971b61e4986555ca$var$rsComboSymbolsRange, $971b61e4986555ca$var$rsVarRange = "\\ufe0e\\ufe0f";
/** Used to compose unicode capture groups. */ var $971b61e4986555ca$var$rsAstral = "[" + $971b61e4986555ca$var$rsAstralRange + "]", $971b61e4986555ca$var$rsCombo = "[" + $971b61e4986555ca$var$rsComboRange + "]", $971b61e4986555ca$var$rsFitz = "\ud83c[\udffb-\udfff]", $971b61e4986555ca$var$rsModifier = "(?:" + $971b61e4986555ca$var$rsCombo + "|" + $971b61e4986555ca$var$rsFitz + ")", $971b61e4986555ca$var$rsNonAstral = "[^" + $971b61e4986555ca$var$rsAstralRange + "]", $971b61e4986555ca$var$rsRegional = "(?:\ud83c[\udde6-\uddff]){2}", $971b61e4986555ca$var$rsSurrPair = "[\ud800-\udbff][\udc00-\udfff]", $971b61e4986555ca$var$rsZWJ = "\\u200d";
/** Used to compose unicode regexes. */ var $971b61e4986555ca$var$reOptMod = $971b61e4986555ca$var$rsModifier + "?", $971b61e4986555ca$var$rsOptVar = "[" + $971b61e4986555ca$var$rsVarRange + "]?", $971b61e4986555ca$var$rsOptJoin = "(?:" + $971b61e4986555ca$var$rsZWJ + "(?:" + [
    $971b61e4986555ca$var$rsNonAstral,
    $971b61e4986555ca$var$rsRegional,
    $971b61e4986555ca$var$rsSurrPair
].join("|") + ")" + $971b61e4986555ca$var$rsOptVar + $971b61e4986555ca$var$reOptMod + ")*", $971b61e4986555ca$var$rsSeq = $971b61e4986555ca$var$rsOptVar + $971b61e4986555ca$var$reOptMod + $971b61e4986555ca$var$rsOptJoin, $971b61e4986555ca$var$rsSymbol = "(?:" + [
    $971b61e4986555ca$var$rsNonAstral + $971b61e4986555ca$var$rsCombo + "?",
    $971b61e4986555ca$var$rsCombo,
    $971b61e4986555ca$var$rsRegional,
    $971b61e4986555ca$var$rsSurrPair,
    $971b61e4986555ca$var$rsAstral
].join("|") + ")";
/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */ var $971b61e4986555ca$var$reUnicode = RegExp($971b61e4986555ca$var$rsFitz + "(?=" + $971b61e4986555ca$var$rsFitz + ")|" + $971b61e4986555ca$var$rsSymbol + $971b61e4986555ca$var$rsSeq, "g");
/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function $971b61e4986555ca$var$unicodeToArray(string) {
    return string.match($971b61e4986555ca$var$reUnicode) || [];
}
$971b61e4986555ca$exports = $971b61e4986555ca$var$unicodeToArray;


/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function $9d86cd16f07c38f7$var$stringToArray(string) {
    return $871aa669feb0823b$exports(string) ? $971b61e4986555ca$exports(string) : $57d825f9357373fd$exports(string);
}
$9d86cd16f07c38f7$exports = $9d86cd16f07c38f7$var$stringToArray;



/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */ function $387c7f28cb7f9fe4$var$createCaseFirst(methodName) {
    return function(string) {
        string = $4d9d2fa6bf96438c$exports(string);
        var strSymbols = $871aa669feb0823b$exports(string) ? $9d86cd16f07c38f7$exports(string) : undefined;
        var chr = strSymbols ? strSymbols[0] : string.charAt(0);
        var trailing = strSymbols ? $104b24dbed7c7c44$exports(strSymbols, 1).join("") : string.slice(1);
        return chr[methodName]() + trailing;
    };
}
$387c7f28cb7f9fe4$exports = $387c7f28cb7f9fe4$var$createCaseFirst;


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
 */ var $b2af79b3f30b711a$var$upperFirst = $387c7f28cb7f9fe4$exports("toUpperCase");
$b2af79b3f30b711a$exports = $b2af79b3f30b711a$var$upperFirst;


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
 */ function $1fe7b7140fcf8f7e$var$capitalize(string) {
    return $b2af79b3f30b711a$exports($4d9d2fa6bf96438c$exports(string).toLowerCase());
}
$1fe7b7140fcf8f7e$exports = $1fe7b7140fcf8f7e$var$capitalize;


var $4df42f2cb76a6bb7$exports = {};
var $7f8c7293b1fd0883$exports = {};
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
 */ function $7f8c7293b1fd0883$var$arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1, length = array == null ? 0 : array.length;
    if (initAccum && length) accumulator = array[++index];
    while(++index < length)accumulator = iteratee(accumulator, array[index], index, array);
    return accumulator;
}
$7f8c7293b1fd0883$exports = $7f8c7293b1fd0883$var$arrayReduce;


var $4e6545555fb9faee$exports = {};
var $7fd38ff43ce47be5$exports = {};
var $b5a0b078a3f25103$exports = {};
/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */ function $b5a0b078a3f25103$var$basePropertyOf(object) {
    return function(key) {
        return object == null ? undefined : object[key];
    };
}
$b5a0b078a3f25103$exports = $b5a0b078a3f25103$var$basePropertyOf;


/** Used to map Latin Unicode letters to basic Latin letters. */ var $7fd38ff43ce47be5$var$deburredLetters = {
    // Latin-1 Supplement block.
    "\xc0": "A",
    "\xc1": "A",
    "\xc2": "A",
    "\xc3": "A",
    "\xc4": "A",
    "\xc5": "A",
    "\xe0": "a",
    "\xe1": "a",
    "\xe2": "a",
    "\xe3": "a",
    "\xe4": "a",
    "\xe5": "a",
    "\xc7": "C",
    "\xe7": "c",
    "\xd0": "D",
    "\xf0": "d",
    "\xc8": "E",
    "\xc9": "E",
    "\xca": "E",
    "\xcb": "E",
    "\xe8": "e",
    "\xe9": "e",
    "\xea": "e",
    "\xeb": "e",
    "\xcc": "I",
    "\xcd": "I",
    "\xce": "I",
    "\xcf": "I",
    "\xec": "i",
    "\xed": "i",
    "\xee": "i",
    "\xef": "i",
    "\xd1": "N",
    "\xf1": "n",
    "\xd2": "O",
    "\xd3": "O",
    "\xd4": "O",
    "\xd5": "O",
    "\xd6": "O",
    "\xd8": "O",
    "\xf2": "o",
    "\xf3": "o",
    "\xf4": "o",
    "\xf5": "o",
    "\xf6": "o",
    "\xf8": "o",
    "\xd9": "U",
    "\xda": "U",
    "\xdb": "U",
    "\xdc": "U",
    "\xf9": "u",
    "\xfa": "u",
    "\xfb": "u",
    "\xfc": "u",
    "\xdd": "Y",
    "\xfd": "y",
    "\xff": "y",
    "\xc6": "Ae",
    "\xe6": "ae",
    "\xde": "Th",
    "\xfe": "th",
    "\xdf": "ss",
    // Latin Extended-A block.
    "Ā": "A",
    "Ă": "A",
    "Ą": "A",
    "ā": "a",
    "ă": "a",
    "ą": "a",
    "Ć": "C",
    "Ĉ": "C",
    "Ċ": "C",
    "Č": "C",
    "ć": "c",
    "ĉ": "c",
    "ċ": "c",
    "č": "c",
    "Ď": "D",
    "Đ": "D",
    "ď": "d",
    "đ": "d",
    "Ē": "E",
    "Ĕ": "E",
    "Ė": "E",
    "Ę": "E",
    "Ě": "E",
    "ē": "e",
    "ĕ": "e",
    "ė": "e",
    "ę": "e",
    "ě": "e",
    "Ĝ": "G",
    "Ğ": "G",
    "Ġ": "G",
    "Ģ": "G",
    "ĝ": "g",
    "ğ": "g",
    "ġ": "g",
    "ģ": "g",
    "Ĥ": "H",
    "Ħ": "H",
    "ĥ": "h",
    "ħ": "h",
    "Ĩ": "I",
    "Ī": "I",
    "Ĭ": "I",
    "Į": "I",
    "İ": "I",
    "ĩ": "i",
    "ī": "i",
    "ĭ": "i",
    "į": "i",
    "ı": "i",
    "Ĵ": "J",
    "ĵ": "j",
    "Ķ": "K",
    "ķ": "k",
    "ĸ": "k",
    "Ĺ": "L",
    "Ļ": "L",
    "Ľ": "L",
    "Ŀ": "L",
    "Ł": "L",
    "ĺ": "l",
    "ļ": "l",
    "ľ": "l",
    "ŀ": "l",
    "ł": "l",
    "Ń": "N",
    "Ņ": "N",
    "Ň": "N",
    "Ŋ": "N",
    "ń": "n",
    "ņ": "n",
    "ň": "n",
    "ŋ": "n",
    "Ō": "O",
    "Ŏ": "O",
    "Ő": "O",
    "ō": "o",
    "ŏ": "o",
    "ő": "o",
    "Ŕ": "R",
    "Ŗ": "R",
    "Ř": "R",
    "ŕ": "r",
    "ŗ": "r",
    "ř": "r",
    "Ś": "S",
    "Ŝ": "S",
    "Ş": "S",
    "Š": "S",
    "ś": "s",
    "ŝ": "s",
    "ş": "s",
    "š": "s",
    "Ţ": "T",
    "Ť": "T",
    "Ŧ": "T",
    "ţ": "t",
    "ť": "t",
    "ŧ": "t",
    "Ũ": "U",
    "Ū": "U",
    "Ŭ": "U",
    "Ů": "U",
    "Ű": "U",
    "Ų": "U",
    "ũ": "u",
    "ū": "u",
    "ŭ": "u",
    "ů": "u",
    "ű": "u",
    "ų": "u",
    "Ŵ": "W",
    "ŵ": "w",
    "Ŷ": "Y",
    "ŷ": "y",
    "Ÿ": "Y",
    "Ź": "Z",
    "Ż": "Z",
    "Ž": "Z",
    "ź": "z",
    "ż": "z",
    "ž": "z",
    "Ĳ": "IJ",
    "ĳ": "ij",
    "Œ": "Oe",
    "œ": "oe",
    "ŉ": "'n",
    "ſ": "s"
};
/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */ var $7fd38ff43ce47be5$var$deburrLetter = $b5a0b078a3f25103$exports($7fd38ff43ce47be5$var$deburredLetters);
$7fd38ff43ce47be5$exports = $7fd38ff43ce47be5$var$deburrLetter;



/** Used to match Latin Unicode letters (excluding mathematical operators). */ var $4e6545555fb9faee$var$reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
/** Used to compose unicode character classes. */ var $4e6545555fb9faee$var$rsComboMarksRange = "\\u0300-\\u036f", $4e6545555fb9faee$var$reComboHalfMarksRange = "\\ufe20-\\ufe2f", $4e6545555fb9faee$var$rsComboSymbolsRange = "\\u20d0-\\u20ff", $4e6545555fb9faee$var$rsComboRange = $4e6545555fb9faee$var$rsComboMarksRange + $4e6545555fb9faee$var$reComboHalfMarksRange + $4e6545555fb9faee$var$rsComboSymbolsRange;
/** Used to compose unicode capture groups. */ var $4e6545555fb9faee$var$rsCombo = "[" + $4e6545555fb9faee$var$rsComboRange + "]";
/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */ var $4e6545555fb9faee$var$reComboMark = RegExp($4e6545555fb9faee$var$rsCombo, "g");
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
 */ function $4e6545555fb9faee$var$deburr(string) {
    string = $4d9d2fa6bf96438c$exports(string);
    return string && string.replace($4e6545555fb9faee$var$reLatin, $7fd38ff43ce47be5$exports).replace($4e6545555fb9faee$var$reComboMark, "");
}
$4e6545555fb9faee$exports = $4e6545555fb9faee$var$deburr;


var $302d41484714ab12$exports = {};
var $5ab95bfc4002b659$exports = {};
/** Used to match words composed of alphanumeric characters. */ var $5ab95bfc4002b659$var$reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */ function $5ab95bfc4002b659$var$asciiWords(string) {
    return string.match($5ab95bfc4002b659$var$reAsciiWord) || [];
}
$5ab95bfc4002b659$exports = $5ab95bfc4002b659$var$asciiWords;


var $16ffcee0fa1886af$exports = {};
/** Used to detect strings that need a more robust regexp to match words. */ var $16ffcee0fa1886af$var$reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */ function $16ffcee0fa1886af$var$hasUnicodeWord(string) {
    return $16ffcee0fa1886af$var$reHasUnicodeWord.test(string);
}
$16ffcee0fa1886af$exports = $16ffcee0fa1886af$var$hasUnicodeWord;



var $df2a7a2c9a1a46d1$exports = {};
/** Used to compose unicode character classes. */ var $df2a7a2c9a1a46d1$var$rsAstralRange = "\ud800-\udfff", $df2a7a2c9a1a46d1$var$rsComboMarksRange = "\\u0300-\\u036f", $df2a7a2c9a1a46d1$var$reComboHalfMarksRange = "\\ufe20-\\ufe2f", $df2a7a2c9a1a46d1$var$rsComboSymbolsRange = "\\u20d0-\\u20ff", $df2a7a2c9a1a46d1$var$rsComboRange = $df2a7a2c9a1a46d1$var$rsComboMarksRange + $df2a7a2c9a1a46d1$var$reComboHalfMarksRange + $df2a7a2c9a1a46d1$var$rsComboSymbolsRange, $df2a7a2c9a1a46d1$var$rsDingbatRange = "\\u2700-\\u27bf", $df2a7a2c9a1a46d1$var$rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", $df2a7a2c9a1a46d1$var$rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", $df2a7a2c9a1a46d1$var$rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", $df2a7a2c9a1a46d1$var$rsPunctuationRange = "\\u2000-\\u206f", $df2a7a2c9a1a46d1$var$rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", $df2a7a2c9a1a46d1$var$rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", $df2a7a2c9a1a46d1$var$rsVarRange = "\\ufe0e\\ufe0f", $df2a7a2c9a1a46d1$var$rsBreakRange = $df2a7a2c9a1a46d1$var$rsMathOpRange + $df2a7a2c9a1a46d1$var$rsNonCharRange + $df2a7a2c9a1a46d1$var$rsPunctuationRange + $df2a7a2c9a1a46d1$var$rsSpaceRange;
/** Used to compose unicode capture groups. */ var $df2a7a2c9a1a46d1$var$rsApos = "['’]", $df2a7a2c9a1a46d1$var$rsBreak = "[" + $df2a7a2c9a1a46d1$var$rsBreakRange + "]", $df2a7a2c9a1a46d1$var$rsCombo = "[" + $df2a7a2c9a1a46d1$var$rsComboRange + "]", $df2a7a2c9a1a46d1$var$rsDigits = "\\d+", $df2a7a2c9a1a46d1$var$rsDingbat = "[" + $df2a7a2c9a1a46d1$var$rsDingbatRange + "]", $df2a7a2c9a1a46d1$var$rsLower = "[" + $df2a7a2c9a1a46d1$var$rsLowerRange + "]", $df2a7a2c9a1a46d1$var$rsMisc = "[^" + $df2a7a2c9a1a46d1$var$rsAstralRange + $df2a7a2c9a1a46d1$var$rsBreakRange + $df2a7a2c9a1a46d1$var$rsDigits + $df2a7a2c9a1a46d1$var$rsDingbatRange + $df2a7a2c9a1a46d1$var$rsLowerRange + $df2a7a2c9a1a46d1$var$rsUpperRange + "]", $df2a7a2c9a1a46d1$var$rsFitz = "\ud83c[\udffb-\udfff]", $df2a7a2c9a1a46d1$var$rsModifier = "(?:" + $df2a7a2c9a1a46d1$var$rsCombo + "|" + $df2a7a2c9a1a46d1$var$rsFitz + ")", $df2a7a2c9a1a46d1$var$rsNonAstral = "[^" + $df2a7a2c9a1a46d1$var$rsAstralRange + "]", $df2a7a2c9a1a46d1$var$rsRegional = "(?:\ud83c[\udde6-\uddff]){2}", $df2a7a2c9a1a46d1$var$rsSurrPair = "[\ud800-\udbff][\udc00-\udfff]", $df2a7a2c9a1a46d1$var$rsUpper = "[" + $df2a7a2c9a1a46d1$var$rsUpperRange + "]", $df2a7a2c9a1a46d1$var$rsZWJ = "\\u200d";
/** Used to compose unicode regexes. */ var $df2a7a2c9a1a46d1$var$rsMiscLower = "(?:" + $df2a7a2c9a1a46d1$var$rsLower + "|" + $df2a7a2c9a1a46d1$var$rsMisc + ")", $df2a7a2c9a1a46d1$var$rsMiscUpper = "(?:" + $df2a7a2c9a1a46d1$var$rsUpper + "|" + $df2a7a2c9a1a46d1$var$rsMisc + ")", $df2a7a2c9a1a46d1$var$rsOptContrLower = "(?:" + $df2a7a2c9a1a46d1$var$rsApos + "(?:d|ll|m|re|s|t|ve))?", $df2a7a2c9a1a46d1$var$rsOptContrUpper = "(?:" + $df2a7a2c9a1a46d1$var$rsApos + "(?:D|LL|M|RE|S|T|VE))?", $df2a7a2c9a1a46d1$var$reOptMod = $df2a7a2c9a1a46d1$var$rsModifier + "?", $df2a7a2c9a1a46d1$var$rsOptVar = "[" + $df2a7a2c9a1a46d1$var$rsVarRange + "]?", $df2a7a2c9a1a46d1$var$rsOptJoin = "(?:" + $df2a7a2c9a1a46d1$var$rsZWJ + "(?:" + [
    $df2a7a2c9a1a46d1$var$rsNonAstral,
    $df2a7a2c9a1a46d1$var$rsRegional,
    $df2a7a2c9a1a46d1$var$rsSurrPair
].join("|") + ")" + $df2a7a2c9a1a46d1$var$rsOptVar + $df2a7a2c9a1a46d1$var$reOptMod + ")*", $df2a7a2c9a1a46d1$var$rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", $df2a7a2c9a1a46d1$var$rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", $df2a7a2c9a1a46d1$var$rsSeq = $df2a7a2c9a1a46d1$var$rsOptVar + $df2a7a2c9a1a46d1$var$reOptMod + $df2a7a2c9a1a46d1$var$rsOptJoin, $df2a7a2c9a1a46d1$var$rsEmoji = "(?:" + [
    $df2a7a2c9a1a46d1$var$rsDingbat,
    $df2a7a2c9a1a46d1$var$rsRegional,
    $df2a7a2c9a1a46d1$var$rsSurrPair
].join("|") + ")" + $df2a7a2c9a1a46d1$var$rsSeq;
/** Used to match complex or compound words. */ var $df2a7a2c9a1a46d1$var$reUnicodeWord = RegExp([
    $df2a7a2c9a1a46d1$var$rsUpper + "?" + $df2a7a2c9a1a46d1$var$rsLower + "+" + $df2a7a2c9a1a46d1$var$rsOptContrLower + "(?=" + [
        $df2a7a2c9a1a46d1$var$rsBreak,
        $df2a7a2c9a1a46d1$var$rsUpper,
        "$"
    ].join("|") + ")",
    $df2a7a2c9a1a46d1$var$rsMiscUpper + "+" + $df2a7a2c9a1a46d1$var$rsOptContrUpper + "(?=" + [
        $df2a7a2c9a1a46d1$var$rsBreak,
        $df2a7a2c9a1a46d1$var$rsUpper + $df2a7a2c9a1a46d1$var$rsMiscLower,
        "$"
    ].join("|") + ")",
    $df2a7a2c9a1a46d1$var$rsUpper + "?" + $df2a7a2c9a1a46d1$var$rsMiscLower + "+" + $df2a7a2c9a1a46d1$var$rsOptContrLower,
    $df2a7a2c9a1a46d1$var$rsUpper + "+" + $df2a7a2c9a1a46d1$var$rsOptContrUpper,
    $df2a7a2c9a1a46d1$var$rsOrdUpper,
    $df2a7a2c9a1a46d1$var$rsOrdLower,
    $df2a7a2c9a1a46d1$var$rsDigits,
    $df2a7a2c9a1a46d1$var$rsEmoji
].join("|"), "g");
/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */ function $df2a7a2c9a1a46d1$var$unicodeWords(string) {
    return string.match($df2a7a2c9a1a46d1$var$reUnicodeWord) || [];
}
$df2a7a2c9a1a46d1$exports = $df2a7a2c9a1a46d1$var$unicodeWords;


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
 */ function $302d41484714ab12$var$words(string, pattern, guard) {
    string = $4d9d2fa6bf96438c$exports(string);
    pattern = guard ? undefined : pattern;
    if (pattern === undefined) return $16ffcee0fa1886af$exports(string) ? $df2a7a2c9a1a46d1$exports(string) : $5ab95bfc4002b659$exports(string);
    return string.match(pattern) || [];
}
$302d41484714ab12$exports = $302d41484714ab12$var$words;


/** Used to compose unicode capture groups. */ var $4df42f2cb76a6bb7$var$rsApos = "['’]";
/** Used to match apostrophes. */ var $4df42f2cb76a6bb7$var$reApos = RegExp($4df42f2cb76a6bb7$var$rsApos, "g");
/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */ function $4df42f2cb76a6bb7$var$createCompounder(callback) {
    return function(string) {
        return $7f8c7293b1fd0883$exports($302d41484714ab12$exports($4e6545555fb9faee$exports(string).replace($4df42f2cb76a6bb7$var$reApos, "")), callback, "");
    };
}
$4df42f2cb76a6bb7$exports = $4df42f2cb76a6bb7$var$createCompounder;


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
 */ var $bd9a4487e89e9b7f$var$camelCase = $4df42f2cb76a6bb7$exports(function(result, word, index) {
    word = word.toLowerCase();
    return result + (index ? $1fe7b7140fcf8f7e$exports(word) : word);
});
$bd9a4487e89e9b7f$exports = $bd9a4487e89e9b7f$var$camelCase;


const $d058b9b16cf9cda3$var$validators = {};
const $d058b9b16cf9cda3$export$636d763ed7be9e97 = (name, fn)=>{
    $d058b9b16cf9cda3$var$validators[name] = fn;
};
$d058b9b16cf9cda3$export$636d763ed7be9e97("isDefined", (arg)=>{
    return arg !== undefined;
});
$d058b9b16cf9cda3$export$636d763ed7be9e97("isUnDefined", (arg)=>{
    return arg === undefined;
});
$d058b9b16cf9cda3$export$636d763ed7be9e97("isNull", (arg)=>{
    return arg === null;
});
$d058b9b16cf9cda3$export$636d763ed7be9e97("isElement", (arg)=>{
    return arg && (arg instanceof Element || arg instanceof Window);
});
$d058b9b16cf9cda3$export$636d763ed7be9e97("isEventTarget", (arg)=>{
    return arg && arg instanceof EventTarget;
});
$d058b9b16cf9cda3$export$636d763ed7be9e97("isString", (arg)=>{
    return arg && (typeof arg === "string" || arg instanceof String);
});
$d058b9b16cf9cda3$export$636d763ed7be9e97("isArray", (arg)=>{
    return arg && arg instanceof Array;
});
$d058b9b16cf9cda3$export$636d763ed7be9e97("notEmpty", (arg)=>{
    return arg instanceof Array ? arg.length !== 0 : arg !== "";
});
$d058b9b16cf9cda3$export$636d763ed7be9e97("isEmpty", (arg)=>{
    return arg === undefined || !arg || (arg instanceof Array ? arg.length === 0 : arg === "");
});
$d058b9b16cf9cda3$export$636d763ed7be9e97("isObject", (arg)=>{
    return arg && arg instanceof Object;
});
$d058b9b16cf9cda3$export$636d763ed7be9e97("isFunction", (arg)=>{
    return arg && typeof arg === "function";
});
// tests is an array of validators which must be all evaluate to true
// if top level element is an sub array then the sub array is evaluated as an 'or'
// ['this','and',['either','or']]
const $d058b9b16cf9cda3$export$a22775fa5e2eebd9 = (param, arg, tests)=>{
    // console.log(param, arg)
    const allOf = tests.map((test)=>{
        if (test instanceof Array) {
            const anyOf = test.map((orTest)=>{
                return $d058b9b16cf9cda3$var$validators[orTest] && $d058b9b16cf9cda3$var$validators[orTest](arg);
            });
            return anyOf.indexOf(true) !== -1;
        } else return $d058b9b16cf9cda3$var$validators[test] && $d058b9b16cf9cda3$var$validators[test](arg);
    });
    if (allOf.indexOf(false) !== -1) throw new Error("call to " + param + " invalid value: " + arg + " " + tests, 0 + allOf);
};


const $b17b0a5c39dee3e4$export$8350ba437fdadadb = new WeakMap();
const $b17b0a5c39dee3e4$var$hasClass = (element, cssClass)=>{
    (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("hasClass element", element, [
        "isDefined",
        "isElement"
    ]);
    (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("hasClass cssClass", cssClass, [
        "isDefined",
        "notEmpty",
        "isString"
    ]);
    return element.classList.contains(cssClass);
};
// addClasses can be:
// a string 'someclass'
// a list delimited by comma or space 'class1 class3 class4'
// an array ['class1','class2']
const $b17b0a5c39dee3e4$var$addClass = (element, addClasses)=>{
    (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("addClass element", element, [
        "isDefined",
        "isElement"
    ]);
    (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("addClass addClasses", addClasses, [
        "isDefined",
        "notEmpty",
        [
            "isString",
            "isArray"
        ]
    ]);
    if (!Array.isArray(addClasses)) addClasses = addClasses.split(/[\s,]/);
    addClasses.forEach((c)=>{
        c = c.trim();
        if (!$b17b0a5c39dee3e4$var$hasClass(element, c)) element.classList.add(c);
    });
};
// removeClasses can be:
// a string 'someclass'
// a list delimited by comma or space 'class1 class3 class4'
// an array ['class1','class2']
const $b17b0a5c39dee3e4$var$removeClass = (element, removeClasses)=>{
    (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("removeClass element", element, [
        "isDefined",
        "isElement"
    ]);
    (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("removeClass removeClasses", removeClasses, [
        "isDefined",
        "notEmpty",
        [
            "isString",
            "isArray"
        ]
    ]);
    if (!Array.isArray(removeClasses)) removeClasses = removeClasses.split(/[\s,]/);
    removeClasses.forEach((c)=>{
        c = c.trim();
        if ($b17b0a5c39dee3e4$var$hasClass(element, c)) element.classList.remove(c);
    });
};
const $b17b0a5c39dee3e4$var$isVisible = (element)=>{
    (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("isVisible element", element, [
        "isDefined",
        "isElement"
    ]);
    return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
};
const $b17b0a5c39dee3e4$var$inViewPort = (element, container = window)=>{
    (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("inViewPort element", element, [
        "isDefined",
        "isElement"
    ]);
    const rect = element.getBoundingClientRect();
    const visible = $b17b0a5c39dee3e4$var$isVisible(element);
    const aboveTheTop = rect.bottom < 0;
    let belowTheFold;
    if (container.self === window) belowTheFold = rect.top > (window.innerHeight || document.documentElement.clientHeight);
    else belowTheFold = rect.top > container.clientHeight;
    return visible && !belowTheFold && !aboveTheTop;
};
/*
	element: element to apply to
	css: JSON object with properties in kebab-case or camelCase (or even in snake_case and seperate words)
*/ const $b17b0a5c39dee3e4$var$css = (element, css)=>{
    (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("css element", element, [
        "isDefined",
        "isElement"
    ]);
    (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("css css", css, [
        "isDefined",
        [
            "isObject"
        ]
    ]);
    for(const prop in css)if (Object.prototype.hasOwnProperty.call(css, prop)) {
        const key = (0, (/*@__PURE__*/$parcel$interopDefault($bd9a4487e89e9b7f$exports)))(prop);
        element.style[key] = css[prop] !== null ? css[prop] : null;
    }
};
const $b17b0a5c39dee3e4$var$setMetaData = (element, k, v)=>{
    (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("setMetaData element", element, [
        "isDefined",
        "isElement"
    ]);
    (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("setMetaData k", k, [
        "isDefined",
        "isString"
    ]);
    (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("setMetaData v", v, [
        [
            "isUnDefined",
            "isNull",
            "isString",
            "isObject"
        ]
    ]);
    const data = $b17b0a5c39dee3e4$export$8350ba437fdadadb.get(element) || {};
    if (v) data[k] = v;
    else delete data[k];
    $b17b0a5c39dee3e4$export$8350ba437fdadadb.set(element, data);
};
const $b17b0a5c39dee3e4$var$getMetaData = (element, k)=>{
    (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("getMetaData element", element, [
        "isDefined",
        "isElement"
    ]);
    (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("getMetaData k", k, [
        "isDefined",
        "isString"
    ]);
    const data = $b17b0a5c39dee3e4$export$8350ba437fdadadb.get(element) || {};
    if (k) return data[k];
    else return data;
};
const $b17b0a5c39dee3e4$var$on = function(uid, container, events, selector, fn, options, once) {
    // selector is optional
    if (typeof selector === "function") {
        once = options;
        options = fn;
        fn = selector;
        selector = undefined;
    }
    (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("on uid", uid, [
        "isDefined",
        "notEmpty"
    ]);
    (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("on container", container, [
        "isDefined",
        "isEventTarget"
    ]);
    (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("on events", events, [
        "isDefined",
        "isString"
    ]);
    (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("on fn", fn, [
        "isDefined",
        "isFunction"
    ]);
    (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("on selector", selector, [
        [
            "isEmpty",
            "isString"
        ]
    ]);
    const k = "on:" + uid + "-" + events + "-" + selector;
    if ($b17b0a5c39dee3e4$var$getMetaData(container, k)) {
        console.error("Error: Sargasso utils.on: duplicate event handler specification. %o %s", container, k);
        return;
    }
    const handler = (e)=>{
        if (once) $b17b0a5c39dee3e4$var$off(uid, container, events, selector);
        if (!selector) fn(e);
        else Array.from(container.querySelectorAll(selector)).forEach((el)=>{
            if (e.target === el || el.contains(e.target)) fn(e, el);
        });
    };
    // store handler spec in metadata so we can gracefully remove it later
    const data = {
        uid: uid,
        events: events,
        selector: selector || undefined,
        fn: handler,
        options: options || false
    };
    $b17b0a5c39dee3e4$var$setMetaData(container, k, data);
    events.split(/[\s,]+/).forEach((evt)=>{
        container.addEventListener(evt.trim(), data.fn, data.options);
    });
};
const $b17b0a5c39dee3e4$var$off = function(uid, container, events, selector) {
    (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("off uid", uid, [
        "isDefined",
        "notEmpty"
    ]);
    (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("off container", container, [
        "isDefined",
        "isEventTarget"
    ]);
    (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("off events", events, [
        "isDefined",
        "isString"
    ]);
    (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("off selector", selector, [
        [
            "isEmpty",
            "isString"
        ]
    ]);
    const k = "on:" + uid + "-" + events + "-" + selector;
    const data = $b17b0a5c39dee3e4$var$getMetaData(container, k);
    if (data) {
        events.split(/[\s,]+/).forEach((evt)=>{
            container.removeEventListener(evt.trim(), data.fn, data.options);
        });
        $b17b0a5c39dee3e4$var$setMetaData(container, k);
    }
};
// remove all (on,once) event handlers for element
const $b17b0a5c39dee3e4$var$offAll = function(container) {
    (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("offAll container", container, [
        "isDefined",
        "isEventTarget"
    ]);
    const data = $b17b0a5c39dee3e4$export$8350ba437fdadadb.get(container) || {};
    const handlers = [];
    for(const k in data){
        if (Object.prototype.hasOwnProperty.call(data, k)) {
            if (k.match(/^on:/)) handlers.push(k);
        }
    }
    handlers.forEach((k)=>{
        $b17b0a5c39dee3e4$var$off(data[k].uid, container, data[k].events, data[k].selector);
    });
};
const $b17b0a5c39dee3e4$var$once = function(uid, container, events, selector, fn, options) {
    if (typeof selector === "function") {
        options = fn;
        fn = selector;
        selector = undefined;
    }
    $b17b0a5c39dee3e4$var$on(uid, container, events, selector, fn, options, true);
};
const $b17b0a5c39dee3e4$export$6f53260fffa88f1c = {
    hasClass: $b17b0a5c39dee3e4$var$hasClass,
    addClass: $b17b0a5c39dee3e4$var$addClass,
    removeClass: $b17b0a5c39dee3e4$var$removeClass,
    isVisible: $b17b0a5c39dee3e4$var$isVisible,
    inViewPort: $b17b0a5c39dee3e4$var$inViewPort,
    setCSS: $b17b0a5c39dee3e4$var$css,
    setMetaData: $b17b0a5c39dee3e4$var$setMetaData,
    getMetaData: $b17b0a5c39dee3e4$var$getMetaData,
    on: $b17b0a5c39dee3e4$var$on,
    off: $b17b0a5c39dee3e4$var$off,
    once: $b17b0a5c39dee3e4$var$once,
    offAll: $b17b0a5c39dee3e4$var$offAll
};


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
var $d840048267584034$exports = {};
var $374b147c67466a81$exports = {};
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
 */ function $374b147c67466a81$var$isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
}
$374b147c67466a81$exports = $374b147c67466a81$var$isObject;


var $b80ec2f88637d53c$exports = {};

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
 */ var $b80ec2f88637d53c$var$now = function() {
    return $8101beff1446c944$exports.Date.now();
};
$b80ec2f88637d53c$exports = $b80ec2f88637d53c$var$now;


var $655b9c4919f3b38e$exports = {};
var $e197af125161032b$exports = {};
var $e85b4eb7db201bc4$exports = {};
/** Used to match a single whitespace character. */ var $e85b4eb7db201bc4$var$reWhitespace = /\s/;
/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */ function $e85b4eb7db201bc4$var$trimmedEndIndex(string) {
    var index = string.length;
    while(index-- && $e85b4eb7db201bc4$var$reWhitespace.test(string.charAt(index)));
    return index;
}
$e85b4eb7db201bc4$exports = $e85b4eb7db201bc4$var$trimmedEndIndex;


/** Used to match leading whitespace. */ var $e197af125161032b$var$reTrimStart = /^\s+/;
/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */ function $e197af125161032b$var$baseTrim(string) {
    return string ? string.slice(0, $e85b4eb7db201bc4$exports(string) + 1).replace($e197af125161032b$var$reTrimStart, "") : string;
}
$e197af125161032b$exports = $e197af125161032b$var$baseTrim;




/** Used as references for various `Number` constants. */ var $655b9c4919f3b38e$var$NAN = 0 / 0;
/** Used to detect bad signed hexadecimal string values. */ var $655b9c4919f3b38e$var$reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var $655b9c4919f3b38e$var$reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var $655b9c4919f3b38e$var$reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var $655b9c4919f3b38e$var$freeParseInt = parseInt;
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
 */ function $655b9c4919f3b38e$var$toNumber(value) {
    if (typeof value == "number") return value;
    if ($feaeb29a5a25786c$exports(value)) return $655b9c4919f3b38e$var$NAN;
    if ($374b147c67466a81$exports(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = $374b147c67466a81$exports(other) ? other + "" : other;
    }
    if (typeof value != "string") return value === 0 ? value : +value;
    value = $e197af125161032b$exports(value);
    var isBinary = $655b9c4919f3b38e$var$reIsBinary.test(value);
    return isBinary || $655b9c4919f3b38e$var$reIsOctal.test(value) ? $655b9c4919f3b38e$var$freeParseInt(value.slice(2), isBinary ? 2 : 8) : $655b9c4919f3b38e$var$reIsBadHex.test(value) ? $655b9c4919f3b38e$var$NAN : +value;
}
$655b9c4919f3b38e$exports = $655b9c4919f3b38e$var$toNumber;


/** Error message constants. */ var $d840048267584034$var$FUNC_ERROR_TEXT = "Expected a function";
/* Built-in method references for those with the same name as other `lodash` methods. */ var $d840048267584034$var$nativeMax = Math.max, $d840048267584034$var$nativeMin = Math.min;
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
 */ function $d840048267584034$var$debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") throw new TypeError($d840048267584034$var$FUNC_ERROR_TEXT);
    wait = $655b9c4919f3b38e$exports(wait) || 0;
    if ($374b147c67466a81$exports(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? $d840048267584034$var$nativeMax($655b9c4919f3b38e$exports(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
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
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? $d840048267584034$var$nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = $b80ec2f88637d53c$exports();
        if (shouldInvoke(time)) return trailingEdge(time);
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) return invokeFunc(time);
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) clearTimeout(timerId);
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge($b80ec2f88637d53c$exports());
    }
    function debounced() {
        var time = $b80ec2f88637d53c$exports(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) return leadingEdge(lastCallTime);
            if (maxing) {
                // Handle invocations in a tight loop.
                clearTimeout(timerId);
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) timerId = setTimeout(timerExpired, wait);
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
$d840048267584034$exports = $d840048267584034$var$debounce;


/**
	ObservableObject

	Build an obserbable object

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020-2023 Michael Rhodes
**/ var $4dfc0303dc34d1bd$exports = {};
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
"use strict";
var $4dfc0303dc34d1bd$var$R = typeof Reflect === "object" ? Reflect : null;
var $4dfc0303dc34d1bd$var$ReflectApply = $4dfc0303dc34d1bd$var$R && typeof $4dfc0303dc34d1bd$var$R.apply === "function" ? $4dfc0303dc34d1bd$var$R.apply : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
};
var $4dfc0303dc34d1bd$var$ReflectOwnKeys;
if ($4dfc0303dc34d1bd$var$R && typeof $4dfc0303dc34d1bd$var$R.ownKeys === "function") $4dfc0303dc34d1bd$var$ReflectOwnKeys = $4dfc0303dc34d1bd$var$R.ownKeys;
else if (Object.getOwnPropertySymbols) $4dfc0303dc34d1bd$var$ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
};
else $4dfc0303dc34d1bd$var$ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
};
function $4dfc0303dc34d1bd$var$ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
}
var $4dfc0303dc34d1bd$var$NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
    return value !== value;
};
function $4dfc0303dc34d1bd$var$EventEmitter() {
    $4dfc0303dc34d1bd$var$EventEmitter.init.call(this);
}
$4dfc0303dc34d1bd$exports = $4dfc0303dc34d1bd$var$EventEmitter;
$4dfc0303dc34d1bd$exports.once = $4dfc0303dc34d1bd$var$once;
// Backwards-compat with node 0.10.x
$4dfc0303dc34d1bd$var$EventEmitter.EventEmitter = $4dfc0303dc34d1bd$var$EventEmitter;
$4dfc0303dc34d1bd$var$EventEmitter.prototype._events = undefined;
$4dfc0303dc34d1bd$var$EventEmitter.prototype._eventsCount = 0;
$4dfc0303dc34d1bd$var$EventEmitter.prototype._maxListeners = undefined;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var $4dfc0303dc34d1bd$var$defaultMaxListeners = 10;
function $4dfc0303dc34d1bd$var$checkListener(listener) {
    if (typeof listener !== "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
}
Object.defineProperty($4dfc0303dc34d1bd$var$EventEmitter, "defaultMaxListeners", {
    enumerable: true,
    get: function() {
        return $4dfc0303dc34d1bd$var$defaultMaxListeners;
    },
    set: function(arg) {
        if (typeof arg !== "number" || arg < 0 || $4dfc0303dc34d1bd$var$NumberIsNaN(arg)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
        $4dfc0303dc34d1bd$var$defaultMaxListeners = arg;
    }
});
$4dfc0303dc34d1bd$var$EventEmitter.init = function() {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
};
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
$4dfc0303dc34d1bd$var$EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || $4dfc0303dc34d1bd$var$NumberIsNaN(n)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
    this._maxListeners = n;
    return this;
};
function $4dfc0303dc34d1bd$var$_getMaxListeners(that) {
    if (that._maxListeners === undefined) return $4dfc0303dc34d1bd$var$EventEmitter.defaultMaxListeners;
    return that._maxListeners;
}
$4dfc0303dc34d1bd$var$EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return $4dfc0303dc34d1bd$var$_getMaxListeners(this);
};
$4dfc0303dc34d1bd$var$EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for(var i = 1; i < arguments.length; i++)args.push(arguments[i]);
    var doError = type === "error";
    var events = this._events;
    if (events !== undefined) doError = doError && events.error === undefined;
    else if (!doError) return false;
    // If there is no 'error' event listener then throw.
    if (doError) {
        var er;
        if (args.length > 0) er = args[0];
        if (er instanceof Error) // Note: The comments on the `throw` lines are intentional, they show
        // up in Node's output if this results in an unhandled exception.
        throw er; // Unhandled 'error' event
        // At least give some kind of context to the user
        var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
        err.context = er;
        throw err; // Unhandled 'error' event
    }
    var handler = events[type];
    if (handler === undefined) return false;
    if (typeof handler === "function") $4dfc0303dc34d1bd$var$ReflectApply(handler, this, args);
    else {
        var len = handler.length;
        var listeners = $4dfc0303dc34d1bd$var$arrayClone(handler, len);
        for(var i = 0; i < len; ++i)$4dfc0303dc34d1bd$var$ReflectApply(listeners[i], this, args);
    }
    return true;
};
function $4dfc0303dc34d1bd$var$_addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;
    $4dfc0303dc34d1bd$var$checkListener(listener);
    events = target._events;
    if (events === undefined) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
    } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener !== undefined) {
            target.emit("newListener", type, listener.listener ? listener.listener : listener);
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
        if (typeof existing === "function") // Adding the second element, need to change to array.
        existing = events[type] = prepend ? [
            listener,
            existing
        ] : [
            existing,
            listener
        ];
        else if (prepend) existing.unshift(listener);
        else existing.push(listener);
        // Check for listener leak
        m = $4dfc0303dc34d1bd$var$_getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            // No error code for this since it is a Warning
            // eslint-disable-next-line no-restricted-syntax
            var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners " + "added. Use emitter.setMaxListeners() to " + "increase limit");
            w.name = "MaxListenersExceededWarning";
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            $4dfc0303dc34d1bd$var$ProcessEmitWarning(w);
        }
    }
    return target;
}
$4dfc0303dc34d1bd$var$EventEmitter.prototype.addListener = function addListener(type, listener) {
    return $4dfc0303dc34d1bd$var$_addListener(this, type, listener, false);
};
$4dfc0303dc34d1bd$var$EventEmitter.prototype.on = $4dfc0303dc34d1bd$var$EventEmitter.prototype.addListener;
$4dfc0303dc34d1bd$var$EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return $4dfc0303dc34d1bd$var$_addListener(this, type, listener, true);
};
function $4dfc0303dc34d1bd$var$onceWrapper() {
    if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
    }
}
function $4dfc0303dc34d1bd$var$_onceWrap(target, type, listener) {
    var state = {
        fired: false,
        wrapFn: undefined,
        target: target,
        type: type,
        listener: listener
    };
    var wrapped = $4dfc0303dc34d1bd$var$onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
}
$4dfc0303dc34d1bd$var$EventEmitter.prototype.once = function once(type, listener) {
    $4dfc0303dc34d1bd$var$checkListener(listener);
    this.on(type, $4dfc0303dc34d1bd$var$_onceWrap(this, type, listener));
    return this;
};
$4dfc0303dc34d1bd$var$EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    $4dfc0303dc34d1bd$var$checkListener(listener);
    this.prependListener(type, $4dfc0303dc34d1bd$var$_onceWrap(this, type, listener));
    return this;
};
// Emits a 'removeListener' event if and only if the listener was removed.
$4dfc0303dc34d1bd$var$EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events, position, i, originalListener;
    $4dfc0303dc34d1bd$var$checkListener(listener);
    events = this._events;
    if (events === undefined) return this;
    list = events[type];
    if (list === undefined) return this;
    if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) this._events = Object.create(null);
        else {
            delete events[type];
            if (events.removeListener) this.emit("removeListener", type, list.listener || listener);
        }
    } else if (typeof list !== "function") {
        position = -1;
        for(i = list.length - 1; i >= 0; i--)if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
        }
        if (position < 0) return this;
        if (position === 0) list.shift();
        else $4dfc0303dc34d1bd$var$spliceOne(list, position);
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== undefined) this.emit("removeListener", type, originalListener || listener);
    }
    return this;
};
$4dfc0303dc34d1bd$var$EventEmitter.prototype.off = $4dfc0303dc34d1bd$var$EventEmitter.prototype.removeListener;
$4dfc0303dc34d1bd$var$EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events, i;
    events = this._events;
    if (events === undefined) return this;
    // not listening for removeListener, no need to emit
    if (events.removeListener === undefined) {
        if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
        } else if (events[type] !== undefined) {
            if (--this._eventsCount === 0) this._events = Object.create(null);
            else delete events[type];
        }
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for(i = 0; i < keys.length; ++i){
            key = keys[i];
            if (key === "removeListener") continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
    }
    listeners = events[type];
    if (typeof listeners === "function") this.removeListener(type, listeners);
    else if (listeners !== undefined) // LIFO order
    for(i = listeners.length - 1; i >= 0; i--)this.removeListener(type, listeners[i]);
    return this;
};
function $4dfc0303dc34d1bd$var$_listeners(target, type, unwrap) {
    var events = target._events;
    if (events === undefined) return [];
    var evlistener = events[type];
    if (evlistener === undefined) return [];
    if (typeof evlistener === "function") return unwrap ? [
        evlistener.listener || evlistener
    ] : [
        evlistener
    ];
    return unwrap ? $4dfc0303dc34d1bd$var$unwrapListeners(evlistener) : $4dfc0303dc34d1bd$var$arrayClone(evlistener, evlistener.length);
}
$4dfc0303dc34d1bd$var$EventEmitter.prototype.listeners = function listeners(type) {
    return $4dfc0303dc34d1bd$var$_listeners(this, type, true);
};
$4dfc0303dc34d1bd$var$EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return $4dfc0303dc34d1bd$var$_listeners(this, type, false);
};
$4dfc0303dc34d1bd$var$EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === "function") return emitter.listenerCount(type);
    else return $4dfc0303dc34d1bd$var$listenerCount.call(emitter, type);
};
$4dfc0303dc34d1bd$var$EventEmitter.prototype.listenerCount = $4dfc0303dc34d1bd$var$listenerCount;
function $4dfc0303dc34d1bd$var$listenerCount(type) {
    var events = this._events;
    if (events !== undefined) {
        var evlistener = events[type];
        if (typeof evlistener === "function") return 1;
        else if (evlistener !== undefined) return evlistener.length;
    }
    return 0;
}
$4dfc0303dc34d1bd$var$EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? $4dfc0303dc34d1bd$var$ReflectOwnKeys(this._events) : [];
};
function $4dfc0303dc34d1bd$var$arrayClone(arr, n) {
    var copy = new Array(n);
    for(var i = 0; i < n; ++i)copy[i] = arr[i];
    return copy;
}
function $4dfc0303dc34d1bd$var$spliceOne(list, index) {
    for(; index + 1 < list.length; index++)list[index] = list[index + 1];
    list.pop();
}
function $4dfc0303dc34d1bd$var$unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for(var i = 0; i < ret.length; ++i)ret[i] = arr[i].listener || arr[i];
    return ret;
}
function $4dfc0303dc34d1bd$var$once(emitter, name) {
    return new Promise(function(resolve, reject) {
        function errorListener(err) {
            emitter.removeListener(name, resolver);
            reject(err);
        }
        function resolver() {
            if (typeof emitter.removeListener === "function") emitter.removeListener("error", errorListener);
            resolve([].slice.call(arguments));
        }
        $4dfc0303dc34d1bd$var$eventTargetAgnosticAddListener(emitter, name, resolver, {
            once: true
        });
        if (name !== "error") $4dfc0303dc34d1bd$var$addErrorHandlerIfEventEmitter(emitter, errorListener, {
            once: true
        });
    });
}
function $4dfc0303dc34d1bd$var$addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === "function") $4dfc0303dc34d1bd$var$eventTargetAgnosticAddListener(emitter, "error", handler, flags);
}
function $4dfc0303dc34d1bd$var$eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === "function") {
        if (flags.once) emitter.once(name, listener);
        else emitter.on(name, listener);
    } else if (typeof emitter.addEventListener === "function") // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
        // IE does not have builtin `{ once: true }` support so we
        // have to do it manually.
        if (flags.once) emitter.removeEventListener(name, wrapListener);
        listener(arg);
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
}


var $abb58fc96c93bc30$exports = {};
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
 */ var $abb58fc96c93bc30$var$ObservableSlim = function() {
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
        return path.split(".").reduce(function(prev, curr) {
            return prev ? prev[curr] : undefined;
        }, obj || self);
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
	 */ var _create = function(target, domDelay, originalObservable, originalPath) {
        var observable = originalObservable || null;
        // record the nested path taken to access this object -- if there was no path then we provide the first empty entry
        var path = originalPath || [
            {
                "target": target,
                "property": ""
            }
        ];
        paths.push(path);
        // in order to accurately report the "previous value" of the "length" property on an Array
        // we must use a helper property because intercepting a length change is not always possible as of 8/13/2018 in
        // Chrome -- the new `length` value is already set by the time the `set` handler is invoked
        if (target instanceof Array) {
            if (!target.hasOwnProperty("__length")) Object.defineProperty(target, "__length", {
                enumerable: false,
                value: target.length,
                writable: true
            });
            else target.__length = target.length;
        }
        var changes = [];
        /**
		 * Returns a string of the nested path (in relation to the top-level observed object) of the property being modified or deleted.
		 * @param {object} target Plain object that we want to observe for changes.
		 * @param {string} property Property name.
		 * @param {boolean} [jsonPointer] Set to `true` if the string path should be formatted as a JSON pointer rather than with the dot notation
		 * (`false` as default).
		 * @returns {string} Nested path (e.g., `hello.testing.1.bar` or, if JSON pointer, `/hello/testing/1/bar`).
		 */ var _getPath = function(target, property, jsonPointer) {
            var fullPath = "";
            var lastTarget = null;
            // loop over each item in the path and append it to full path
            for(var i = 0; i < path.length; i++){
                // if the current object was a member of an array, it's possible that the array was at one point
                // mutated and would cause the position of the current object in that array to change. we perform an indexOf
                // lookup here to determine the current position of that object in the array before we add it to fullPath
                if (lastTarget instanceof Array && !isNaN(path[i].property)) path[i].property = lastTarget.indexOf(path[i].target);
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
            var domDelayIsNumber = typeof domDelay === "number";
            // execute observer functions on a 10ms setTimeout, this prevents the observer functions from being executed
            // separately on every change -- this is necessary because the observer functions will often trigger UI updates
            if (domDelayIsNumber || domDelay === true) setTimeout(function() {
                if (numChanges === changes.length) {
                    // we create a copy of changes before passing it to the observer functions because even if the observer function
                    // throws an error, we still need to ensure that changes is reset to an empty array so that old changes don't persist
                    var changesCopy = changes.slice(0);
                    changes = [];
                    // invoke any functions that are observing changes
                    for(var i = 0; i < observable.observers.length; i++)observable.observers[i](changesCopy);
                }
            }, domDelayIsNumber && domDelay > 0 ? domDelay : 10);
            else {
                // we create a copy of changes before passing it to the observer functions because even if the observer function
                // throws an error, we still need to ensure that changes is reset to an empty array so that old changes don't persist
                var changesCopy = changes.slice(0);
                changes = [];
                // invoke any functions that are observing changes
                for(var i = 0; i < observable.observers.length; i++)observable.observers[i](changesCopy);
            }
        };
        var handler = {
            get: function(target, property) {
                // implement a simple check for whether or not the object is a proxy, this helps the .create() method avoid
                // creating Proxies of Proxies.
                if (property === "__getTarget") return target;
                else if (property === "__isProxy") return true;
                else if (property === "__getParent") return function(i) {
                    if (typeof i === "undefined") var i = 1;
                    var parentPath = _getPath(target, "__getParent").split(".");
                    parentPath.splice(-(i + 1), i + 1);
                    return _getProperty(observable.parentProxy, parentPath.join("."));
                };
                else if (property === "__getPath") {
                    // strip off the 12 characters for ".__getParent"
                    var parentPath = _getPath(target, "__getParent");
                    return parentPath.slice(0, -12);
                }
                // for performance improvements, we assign this to a variable so we do not have to lookup the property value again
                var targetProp = target[property];
                if (target instanceof Date && targetProp instanceof Function && targetProp !== null) return targetProp.bind(target);
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
                        for(var i = 0, l = ttp.length; i < l; i++){
                            // if we find a proxy that was setup for this particular observable, then return that proxy
                            if (observable === ttp[i].observable) return ttp[i].proxy;
                        }
                    }
                    // if we're arrived here, then that means there is no proxy for the object the user just accessed, so we
                    // have to create a new proxy for it
                    // create a shallow copy of the path array -- if we didn't create a shallow copy then all nested objects would share the same path array and the path wouldn't be accurate
                    var newPath = path.slice(0);
                    newPath.push({
                        "target": targetProp,
                        "property": property
                    });
                    return _create(targetProp, domDelay, observable, newPath);
                } else return targetProp;
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
                    "type": "delete",
                    "target": target,
                    "property": property,
                    "newValue": null,
                    "previousValue": previousValue[property],
                    "currentPath": _getPath(target, property),
                    "jsonPointer": _getPath(target, property, true),
                    "proxy": proxy
                });
                if (originalChange === true) {
                    // perform the delete that we've trapped if changes are not paused for this observable
                    if (!observable.changesPaused) delete target[property];
                    for(var a = 0, l = targets.length; a < l; a++)if (target === targets[a]) break;
                    // loop over each proxy and see if the target for this change has any other proxies
                    var currentTargetProxy = targetsProxy[a] || [];
                    var b = currentTargetProxy.length;
                    while(b--)// if the same target has a different proxy
                    if (currentTargetProxy[b].proxy !== proxy) {
                        // !!IMPORTANT!! store the proxy as a duplicate proxy (dupProxy) -- this will adjust the behavior above appropriately (that is,
                        // prevent a change on dupProxy from re-triggering the same change on other proxies)
                        dupProxy = currentTargetProxy[b].proxy;
                        // make the same delete on the different proxy for the same target object. it is important that we make this change *after* we invoke the same change
                        // on any other proxies so that the previousValue can show up correct for the other proxies
                        delete currentTargetProxy[b].proxy[property];
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
                if (targetProp !== value || originalChange === false || property === "length" && target instanceof Array && target.__length !== value) {
                    var foundObservable = true;
                    var typeOfTargetProp = typeof targetProp;
                    // determine if we're adding something new or modifying some that already existed
                    var type = "update";
                    if (typeOfTargetProp === "undefined") type = "add";
                    // store the change that just occurred. it is important that we store the change before invoking the other proxies so that the previousValue is correct
                    changes.push({
                        "type": type,
                        "target": target,
                        "property": property,
                        "newValue": value,
                        "previousValue": receiver[property],
                        "currentPath": _getPath(target, property),
                        "jsonPointer": _getPath(target, property, true),
                        "proxy": proxy
                    });
                    // mutations of arrays via .push or .splice actually modify the .length before the set handler is invoked
                    // so in order to accurately report the correct previousValue for the .length, we have to use a helper property.
                    if (property === "length" && target instanceof Array && target.__length !== value) {
                        changes[changes.length - 1].previousValue = target.__length;
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
                        while(z--){
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
                            for(var b = 0, l = currentTargetProxy.length; b < l; b++)// if the same target has a different proxy
                            if (currentTargetProxy[b].proxy !== proxy) {
                                // !!IMPORTANT!! store the proxy as a duplicate proxy (dupProxy) -- this will adjust the behavior above appropriately (that is,
                                // prevent a change on dupProxy from re-triggering the same change on other proxies)
                                dupProxy = currentTargetProxy[b].proxy;
                                // invoke the same change on the different proxy for the same target object. it is important that we make this change *after* we invoke the same change
                                // on any other proxies so that the previousValue can show up correct for the other proxies
                                currentTargetProxy[b].proxy[property] = value;
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
                                    for(var i = 0, l = keys.length; i < l; i++){
                                        if (target[keys[i]] === targetProp) return;
                                    }
                                    var stillExists = false;
                                    // now we perform the more expensive search recursively through the target object.
                                    // if we find the targetProp (that was just overwritten) still exists somewhere else
                                    // further down in the object, then we still need to observe the targetProp on this observable.
                                    (function iterate(target) {
                                        var keys = Object.keys(target);
                                        for(var i = 0, l = keys.length; i < l; i++){
                                            var property = keys[i];
                                            var nestedTarget = target[property];
                                            if (nestedTarget instanceof Object && nestedTarget !== null) iterate(nestedTarget);
                                            if (nestedTarget === targetProp) {
                                                stillExists = true;
                                                return;
                                            }
                                        }
                                    })(target);
                                    // even though targetProp was overwritten, if it still exists somewhere else on the object,
                                    // then we don't want to remove the observable for that object (targetProp)
                                    if (stillExists === true) return;
                                    // loop over each property and recursively invoke the `iterate` function for any
                                    // objects nested on targetProp
                                    (function iterate(obj) {
                                        var keys = Object.keys(obj);
                                        for(var i = 0, l = keys.length; i < l; i++){
                                            var objProp = obj[keys[i]];
                                            if (objProp instanceof Object && objProp !== null) iterate(objProp);
                                        }
                                        // if there are any existing target objects (objects that we're already observing)...
                                        var c = -1;
                                        for(var i = 0, l = targets.length; i < l; i++)if (obj === targets[i]) {
                                            c = i;
                                            break;
                                        }
                                        if (c > -1) {
                                            // ...then we want to determine if the observables for that object match our current observable
                                            var currentTargetProxy = targetsProxy[c];
                                            var d = currentTargetProxy.length;
                                            while(d--)// if we do have an observable monitoring the object thats about to be overwritten
                                            // then we can remove that observable from the target object
                                            if (observable === currentTargetProxy[d].observable) {
                                                currentTargetProxy.splice(d, 1);
                                                break;
                                            }
                                            // if there are no more observables assigned to the target object, then we can remove
                                            // the target object altogether. this is necessary to prevent growing memory consumption particularly with large data sets
                                            if (currentTargetProxy.length == 0) // targetsProxy.splice(c,1);
                                            targets[c] = null;
                                        }
                                    })(targetProp);
                                }
                            }, 10000);
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
						}; */ }
                    if (foundObservable) // notify the observer functions that the target has been modified
                    _notifyObservers(changes.length);
                }
                return true;
            }
        };
        var __targetPosition = target.__targetPosition;
        if (!(__targetPosition > -1)) Object.defineProperty(target, "__targetPosition", {
            value: targets.length,
            writable: false,
            enumerable: false,
            configurable: false
        });
        // create the proxy that we'll use to observe any changes
        var proxy = new Proxy(target, handler);
        // we don't want to create a new observable if this function was invoked recursively
        if (observable === null) {
            observable = {
                "parentTarget": target,
                "domDelay": domDelay,
                "parentProxy": proxy,
                "observers": [],
                "paused": false,
                "path": path,
                "changesPaused": false
            };
            observables.push(observable);
        }
        // store the proxy we've created so it isn't re-created unnecessarily via get handler
        var proxyItem = {
            "target": target,
            "proxy": proxy,
            "observable": observable
        };
        // if we have already created a Proxy for this target object then we add it to the corresponding array
        // on targetsProxy (targets and targetsProxy work together as a Hash table indexed by the actual target object).
        if (__targetPosition > -1) {
            // the targets array is set to null for the position of this particular object, then we know that
            // the observable was removed some point in time for this object -- so we need to set the reference again
            if (targets[__targetPosition] === null) targets[__targetPosition] = target;
            targetsProxy[__targetPosition].push(proxyItem);
        // else this is a target object that we had not yet created a Proxy for, so we must add it to targets,
        // and push a new array on to targetsProxy containing the new Proxy
        } else {
            targets.push(target);
            targetsProxy.push([
                proxyItem
            ]);
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
	 */ return {
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
		 */ create: function(target, domDelay, observer) {
            // test if the target is a Proxy, if it is then we need to retrieve the original object behind the Proxy.
            // we do not allow creating proxies of proxies because -- given the recursive design of ObservableSlim -- it would lead to sharp increases in memory usage
            if (target.__isProxy === true) var target = target.__getTarget;
            // fire off the _create() method -- it will create a new observable and proxy and return the proxy
            var proxy = _create(target, domDelay);
            // assign the observer function
            if (typeof observer === "function") this.observe(proxy, observer);
            // recursively loop over all nested objects on the proxy we've just created
            // this will allow the top observable to observe any changes that occur on a nested object
            (function iterate(proxy) {
                var target = proxy.__getTarget;
                var keys = Object.keys(target);
                for(var i = 0, l = keys.length; i < l; i++){
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
		 */ observe: function(proxy, observer) {
            // loop over all the observables created by the _create() function
            var i = observables.length;
            while(i--)if (observables[i].parentProxy === proxy) {
                observables[i].observers.push(observer);
                break;
            }
        },
        /**
		 * Prevent any observer functions from being invoked when a change occurs to a proxy.
		 * @param {ProxyConstructor} proxy An ES6 `Proxy` created by the `create()` method.
		 * @returns {void} Does not return any value.
		 */ pause: function(proxy) {
            var i = observables.length;
            var foundMatch = false;
            while(i--)if (observables[i].parentProxy === proxy) {
                observables[i].paused = true;
                foundMatch = true;
                break;
            }
            if (foundMatch == false) throw new Error("ObseravableSlim could not pause observable -- matching proxy not found.");
        },
        /**
		 * Resume execution of any observer functions when a change is made to a proxy.
		 * @param {ProxyConstructor} proxy An ES6 `Proxy` created by the `create()` method.
		 * @returns {void} Does not return any value.
		 */ resume: function(proxy) {
            var i = observables.length;
            var foundMatch = false;
            while(i--)if (observables[i].parentProxy === proxy) {
                observables[i].paused = false;
                foundMatch = true;
                break;
            }
            if (foundMatch == false) throw new Error("ObseravableSlim could not resume observable -- matching proxy not found.");
        },
        /**
		 * Prevent any changes (i.e., `set`, and `deleteProperty`) from being written to the target object.
		 * However, the observer functions will still be invoked to let you know what changes **WOULD** have been made.
		 * This can be useful if the changes need to be approved by an external source before the changes take effect.
		 * @param {ProxyConstructor} proxy An ES6 `Proxy` created by the `create()` method.
		 * @returns {void} Does not return any value.
		 */ pauseChanges: function(proxy) {
            var i = observables.length;
            var foundMatch = false;
            while(i--)if (observables[i].parentProxy === proxy) {
                observables[i].changesPaused = true;
                foundMatch = true;
                break;
            }
            if (foundMatch == false) throw new Error("ObseravableSlim could not pause changes on observable -- matching proxy not found.");
        },
        /**
		 * Resume the changes that were taking place prior to the call to `pauseChanges()` method.
		 * @param {ProxyConstructor} proxy An ES6 `Proxy` created by the `create()` method.
		 * @returns {void} Does not return any value.
		 */ resumeChanges: function(proxy) {
            var i = observables.length;
            var foundMatch = false;
            while(i--)if (observables[i].parentProxy === proxy) {
                observables[i].changesPaused = false;
                foundMatch = true;
                break;
            }
            if (foundMatch == false) throw new Error("ObseravableSlim could not resume changes on observable -- matching proxy not found.");
        },
        /**
		 * Remove the observable and proxy thereby preventing any further callback observers for changes occurring to the target object.
		 * @param {ProxyConstructor} proxy An ES6 `Proxy` created by the `create()` method.
		 * @returns {void} Does not return any value.
		 */ remove: function(proxy) {
            var matchedObservable = null;
            var foundMatch = false;
            var c = observables.length;
            while(c--)if (observables[c].parentProxy === proxy) {
                matchedObservable = observables[c];
                foundMatch = true;
                break;
            }
            var a = targetsProxy.length;
            while(a--){
                var b = targetsProxy[a].length;
                while(b--)if (targetsProxy[a][b].observable === matchedObservable) {
                    targetsProxy[a].splice(b, 1);
                    // if there are no more proxies for this target object
                    // then we null out the position for this object on the targets array
                    // since we are essentially no longer observing this object.
                    // we do not splice it off the targets array, because if we re-observe the same
                    // object at a later time, the property __targetPosition cannot be redefined.
                    if (targetsProxy[a].length === 0) targets[a] = null;
                }
            }
            if (foundMatch === true) observables.splice(c, 1);
        }
    };
}();
// Export in a try catch to prevent this from erroring out on older browsers
try {
    $abb58fc96c93bc30$exports = $abb58fc96c93bc30$var$ObservableSlim;
} catch (err) {}


const $05b7f40ae55d062a$var$registeredObservables = {};
const $05b7f40ae55d062a$export$7ec259ba0528fb23 = (id)=>{
    return $05b7f40ae55d062a$var$registeredObservables[id];
};
/*
	@class ObservableObject

	Base class for data binding. Implements deep Proxy and Reflect on an object so that
	changes can be observed and manages subscribing and notifying observers.
*/ class $05b7f40ae55d062a$export$b176171395436676 extends (0, (/*@__PURE__*/$parcel$interopDefault($4dfc0303dc34d1bd$exports))) {
    /*
		@param { String } id - unique id 
		@param { Object } data - optional externally defined javascript object to observe
		@param { Object } options - optional, used by subclasses
	*/ constructor(id, data = {}, options = {}){
        super();
        this.id = id;
        if ($05b7f40ae55d062a$var$registeredObservables[this.id]) throw new Error("ObservableObject " + id + " already exists.");
        this.bound = {} // watchers to sync on value change
        ;
        this.unproxied = data;
        this.data = (0, (/*@__PURE__*/$parcel$interopDefault($abb58fc96c93bc30$exports))).create(data, false, (changes)=>{
            this.sync(changes, this.getSource());
        });
        this.options = options;
        $05b7f40ae55d062a$var$registeredObservables[this.id] = this;
    }
    getSource() {
        return this.id;
    }
    /*
		@function destroy - remove all bindings
	*/ destroy() {
        (0, (/*@__PURE__*/$parcel$interopDefault($abb58fc96c93bc30$exports))).pause(this.data);
        delete $05b7f40ae55d062a$var$registeredObservables[this.id];
        delete this.data;
        Object.keys(this.bound).forEach((prop)=>{
            Object.keys(this.bound[prop]).forEach((id)=>{
                this.unbind(id, prop);
            });
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($abb58fc96c93bc30$exports))).remove(this.data);
    }
    /*
		@function getObservableData - return proxied data
	*/ getObservableData() {
        return this.data;
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
	*/ bind(id, fn, property = "*") {
        if (property === "__proto__") throw new Error("Invalid property name");
        if (!this.bound[property]) this.bound[property] = {};
        this.bound[property][id] = fn;
        fn(this.id, "connect");
    }
    /*
		@function unbind - unattach observer
		@param { String } id - unique id of observer function
		@param { String } property - optional name of property being observed
	*/ unbind(id, property = "*") {
        this.bound[property][id](this.id, "disconnect");
        if (this.bound[property] && this.bound[property][id]) delete this.bound[property][id];
    }
    /*
		function sync - notify observers of property value change
		@param { String } property - property that changed
	*/ sync(changes) {
        for (const change of changes){
            const type = change.type;
            const path = change.currentPath;
            const newValue = change.newValue;
            const previousValue = change.previousValue;
            const channels = [];
            for(const p in this.bound)if (p === "*") channels.push(p);
            else {
                const re = new RegExp("^" + p.replace(".", "\\."));
                if (path.match(re)) channels.push(p);
            }
            for (const channel of channels)for(const subscriber in this.bound[channel])this.bound[channel][subscriber](this.id, type, path, newValue, previousValue);
        }
    }
}


let $d026517949359551$export$77e1d49fdb880d27;
let $d026517949359551$export$c7320459fd5267c0;
let $d026517949359551$export$497098c8185e6e33;
let $d026517949359551$export$296acd8d6f329fa3;
let $d026517949359551$export$fa28dfcc49831a91;
let $d026517949359551$export$788f7857dc8c77f5;
class $d026517949359551$var$ObserverSubscriptionManager {
    constructor(options){
        this.options = options;
        this.observers = [];
        this.pendingAnimationFrame = undefined;
        this.frameQueue = [];
        this.sleeping = true;
    }
    subscribe(observer) {
        if (!this.observers.length && this.sleeping) this.wakeup();
        this.observers.push(observer);
    }
    unSubscribe(observer) {
        if (this.observers.indexOf(observer) !== -1) this.observers.splice(this.observers.indexOf(observer), 1);
        if (!this.observers.length) this.sleep();
    }
    sleep() {
        this.sleeping = true;
    }
    wakeup() {
        this.sleeping = false;
    }
    notifyObservers(event, params) {
        for(let i = 0; i < this.observers.length; i++)if (this.observers[i][event]) this.observers[i][event].apply(this.observers[i], params || []);
    }
    flushQueue() {
        if (this.pendingAnimationFrame) {
            cancelAnimationFrame(this.pendingAnimationFrame);
            this.pendingAnimationFrame = undefined;
        }
        this.frameQueue = [];
    }
    queueFrame(frame) {
        this.frameQueue.push(frame.bind(this));
        if (!this.pendingAnimationFrame) this.pendingAnimationFrame = requestAnimationFrame(()=>{
            this.processQueue();
        });
    }
    processQueue() {
        this.pendingAnimationFrame = undefined;
        const toProcess = this.frameQueue.slice(0);
        this.frameQueue = [];
        for(let i = 0; i < toProcess.length; i++)toProcess[i]();
    }
}
class $d026517949359551$export$d36264ac4e7cee7d extends $d026517949359551$var$ObserverSubscriptionManager {
    constructor(options = {}){
        super(options);
        // debounce - just need to know if a change occured, not every change
        this.mutationHandler = (0, (/*@__PURE__*/$parcel$interopDefault($d840048267584034$exports)))((mutations, observer)=>{
            this.observeDOM(this.options.shadowDOM || document.body);
        }, 25, {
            maxWait: 100
        });
        this.mutationObserver = new MutationObserver(this.mutationHandler, false);
    }
    subscribe(observer) {
        super.subscribe(observer);
        observer.watchDOM(this.options.shadowDOM || document.body);
    }
    wakeup() {
        super.wakeup();
        this.mutationObserver.observe(this.options.shadowDOM || document.body, {
            childList: true,
            subtree: true
        });
    }
    sleep() {
        super.sleep();
        this.mutationObserver.disconnect();
    }
    observeDOM(root) {
        this.notifyObservers("watchDOM", [
            root || this.options.shadowDOM || document.body
        ]);
    }
}
class $d026517949359551$var$ScrollWatcher extends $d026517949359551$var$ObserverSubscriptionManager {
    constructor(options = {}){
        super(options);
        this.scrollElement = this.options.scrollElement || window;
        this.lastscroll = 0;
        this.scrolling = false;
    }
    // use 'scroll' event to start scroll loop unless it's already looping
    trigger() {
        if (!this.scrolling) this.scrollLoop();
    }
    scrollLoop() {
        if (this.lastscroll !== this.scrollTop()) {
            this.scrolling = true;
            this.lastscroll = this.scrollTop();
            this.watchScroll() // tell our observers
            ;
            const frame = ()=>{
                this.scrollLoop();
            };
            this.queueFrame(frame);
        } else this.scrolling = false // exit the scroll loop and wait for next 'scroll' event
        ;
    }
    setOptions(options = {}) {
        this.sleep();
        this.scrollElement = options.scrollElement || window;
        this.wakeup();
    }
    subscribe(observer) {
        super.subscribe(observer);
        observer.watchScroll();
    }
    wakeup() {
        super.wakeup();
        (0, $b17b0a5c39dee3e4$export$6f53260fffa88f1c).on("theScrollWatcher", this.scrollElement, "scroll", ()=>{
            this.trigger();
        });
    }
    sleep() {
        super.sleep();
        (0, $b17b0a5c39dee3e4$export$6f53260fffa88f1c).off("theScrollWatcher", this.scrollElement, "scroll");
    }
    inViewPort(element) {
        return (0, $b17b0a5c39dee3e4$export$6f53260fffa88f1c).inViewPort(element, this.scrollElement);
    }
    watchScroll() {
        this.notifyObservers("watchScroll");
    }
    scrollTop(newTop) {
        if (this.scrollElement === window) {
            if (newTop !== undefined) window.scrollTo(0, newTop);
            else return window.pageYOffset;
        } else {
            if (newTop !== undefined) this.scrollElement.scrollTop = newTop;
            else return this.scrollElement.scrollTop;
        }
    }
}
class $d026517949359551$var$ResizeWatcher extends $d026517949359551$var$ObserverSubscriptionManager {
    constructor(options){
        super(options);
        this.debounce = (0, (/*@__PURE__*/$parcel$interopDefault($d840048267584034$exports)))(()=>{
            this.watchResize();
        }, 250);
    }
    subscribe(observer) {
        super.subscribe(observer);
        observer.watchResize();
    }
    wakeup() {
        super.wakeup();
        window.addEventListener("resize", this.debounce, false);
    }
    sleep() {
        super.sleep();
        window.removeEventListener("resize", this.debounce);
    }
    watchResize() {
        this.notifyObservers("watchResize");
    }
}
class $d026517949359551$var$OrientationWatcher extends $d026517949359551$var$ObserverSubscriptionManager {
    constructor(options){
        super(options);
        if ("onorientationchange" in window) (0, $b17b0a5c39dee3e4$export$6f53260fffa88f1c).addClass(document.body, "have-orientation");
        else (0, $b17b0a5c39dee3e4$export$6f53260fffa88f1c).addClass(document.body, "no-orientation");
        this.debounce = (0, (/*@__PURE__*/$parcel$interopDefault($d840048267584034$exports)))(()=>{
            this.watchOrientation();
        }, 250);
    }
    subscribe(observer) {
        super.subscribe(observer);
        observer.watchOrientation();
    }
    wakeup() {
        super.wakeup();
        if ("onorientationchange" in window) window.addEventListener("orientationchange", this.debounce, false);
    }
    sleep() {
        super.sleep();
        if ("onorientationchange" in window) window.removeEventListener("orientationchange", this.debounce);
    }
    watchOrientation() {
        this.notifyObservers("watchOrientation");
    }
}
// keep track of who is using web workers and
// cleanup dangling worker when no subscribers remain
class $d026517949359551$var$WorkerWatcher extends $d026517949359551$var$ObserverSubscriptionManager {
    constructor(options){
        super(options);
        this.workers = {};
    }
    registerWorker(id, codeOrURL) {
        if (!this.workers[id]) {
            // create a worker for the id if worker id is unknown
            let blobURL = codeOrURL;
            let revoke = false;
            if (!codeOrURL.match(/^(http|\/)/i)) {
                const blob = new Blob([
                    codeOrURL
                ], {
                    type: "text/javascript"
                });
                blobURL = URL.createObjectURL(blob);
                revoke = true;
            }
            this.workers[id] = {
                worker: new Worker(blobURL),
                observers: []
            };
            if (revoke) URL.revokeObjectURL(blobURL);
            this.workers[id].worker.onmessage = (e)=>{
                this.workerMessage(id, e);
            };
        }
        return this.workers[id].worker;
    }
    subscribe(observer, id) {
        if (!this.workers[id]) throw new Error("worker " + id + " does not exist");
        const workerObservers = this.workers[id].observers;
        workerObservers.push(observer);
        super.subscribe(observer);
    }
    unSubscribe(observer, id) {
        if (!this.workers[id]) throw new Error("worker " + id + " does not exist");
        const workerObservers = this.workers[id].observers;
        if (workerObservers.indexOf(observer) !== -1) workerObservers.splice(workerObservers.indexOf(observer), 1);
        if (!workerObservers.length) {
            this.workers[id].worker.terminate();
            delete this.workers[id];
        }
        super.unSubscribe(observer);
    }
    workerMessage(id, e) {
        const workerObservers = this.workers[id].observers;
        workerObservers.forEach((observer)=>{
            if (observer.workerMessage) observer.workerMessage(id, e);
        });
    }
    wakeup() {
        super.wakeup();
    }
    sleep() {
        super.sleep();
    }
}
class $d026517949359551$var$ObservableObjectWatcher extends $d026517949359551$var$ObserverSubscriptionManager {
    constructor(options){
        super(options);
        this.registeredObservableObjects = {};
    }
    getObservable(id) {
        return this.registeredObservableObjects[id] ? this.registeredObservableObjects[id].observable : undefined;
    }
    observableStart(id, data) {
        const foundObservable = (0, $05b7f40ae55d062a$export$7ec259ba0528fb23)(id);
        // trying to define with data but already exists
        if (foundObservable && data !== undefined) throw new Error("ObservableObject " + id + " already exists, can't build.");
        if (!this.registeredObservableObjects[id]) {
            if (foundObservable) this.registeredObservableObjects[id] = {
                id: id,
                observable: foundObservable,
                observers: [],
                managed: false
            };
            else this.registeredObservableObjects[id] = {
                id: id,
                observable: new (0, $05b7f40ae55d062a$export$b176171395436676)(id, data),
                observers: [],
                managed: true
            };
            this.registeredObservableObjects[id].observable.bind(this.constructor.name, this.notify.bind(this));
        }
        return this.registeredObservableObjects[id].observable;
    }
    // delete an observable
    observableDestroy(id) {
        if (!this.registeredObservableObjects[id]) throw new Error("ObservableObject observableDestroy " + id + " does not exist");
        this.registeredObservableObjects[id].observable.unbind(this.constructor.name);
        this.registeredObservableObjects[id].observable.destroy();
        delete this.registeredObservableObjects[id];
    }
    subscribe(observer, id, data) {
        if (!this.registeredObservableObjects[id]) this.observableStart(id, data);
        this.registeredObservableObjects[id].observers.push(observer);
        super.subscribe(observer);
    }
    unSubscribe(observer, id) {
        if (!this.registeredObservableObjects[id]) throw new Error("ObservableObject unSubscribe " + id + " does not exist");
        const observers = this.registeredObservableObjects[id].observers;
        if (observers.indexOf(observer) !== -1) observers.splice(observers.indexOf(observer), 1);
        if (!observers.length && this.registeredObservableObjects[id].managed) this.observableDestroy(id);
        super.unSubscribe(observer);
    }
    notify(id, type, path, newValue, previousValue) {
        if (!this.registeredObservableObjects[id]) throw new Error("ObservableObject notify " + id + " does not exist");
        const observers = this.registeredObservableObjects[id].observers;
        observers.forEach((observer)=>{
            if (observer.observableChanged) observer.observableChanged(id, type, path, newValue, previousValue);
        });
    }
}
// build subscription services
$d026517949359551$export$77e1d49fdb880d27 = new $d026517949359551$export$d36264ac4e7cee7d();
$d026517949359551$export$c7320459fd5267c0 = new $d026517949359551$var$ScrollWatcher();
$d026517949359551$export$497098c8185e6e33 = new $d026517949359551$var$ResizeWatcher();
$d026517949359551$export$296acd8d6f329fa3 = new $d026517949359551$var$OrientationWatcher();
$d026517949359551$export$fa28dfcc49831a91 = new $d026517949359551$var$WorkerWatcher();
$d026517949359551$export$788f7857dc8c77f5 = new $d026517949359551$var$ObservableObjectWatcher();



var $b0f76f3730edf785$exports = {};

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
 */ var $b0f76f3730edf785$var$kebabCase = $4df42f2cb76a6bb7$exports(function(result, word, index) {
    return result + (index ? "-" : "") + word.toLowerCase();
});
$b0f76f3730edf785$exports = $b0f76f3730edf785$var$kebabCase;



let $cc2c9f710b8f1d9a$var$unique = 0 // unique IDs for controllers
;
const $cc2c9f710b8f1d9a$export$85e745b96b6487a7 = [] // instantiated controllers
;
const $cc2c9f710b8f1d9a$var$supportsCustomElements = "customElements" in window // browser supports custom elements
;
const $cc2c9f710b8f1d9a$export$ac297e650eeb1e78 = {};
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

	*/ const $cc2c9f710b8f1d9a$export$22044c20eef36040 = (className, object)=>{
    if ($cc2c9f710b8f1d9a$export$ac297e650eeb1e78[className]) throw new Error("Sargasso class " + className + " is already registered.");
    $cc2c9f710b8f1d9a$export$ac297e650eeb1e78[className] = object;
    if ($cc2c9f710b8f1d9a$var$supportsCustomElements) {
        /*
			for custom html element scheme <sargasso-class-name sargasso-other-class-name></sargasso-class-name>
			we define a factory to build a class that is a subclass of HTMLElement.
			The browser will instantiate this class when the element appears in the DOM
			allowing us to instantiate the required sargasso controller
			and cleanup when the html element is removed from the dom using
			connectedCallback and disconnectedCallback.

			This scheme allows us to keep the namespace of the element unpolluted with
			sargasso properties and methods.
		*/ const customElementClassFactory = `
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
        const fn = new Function("registeredClasses", customElementClassFactory)($cc2c9f710b8f1d9a$export$ac297e650eeb1e78);
        const options = window.sargassoOptions || {};
        const prefix = typeof options.customElementPrefix !== "undefined" ? options.customElementPrefix : "sargasso-";
        customElements.define(prefix + (0, (/*@__PURE__*/$parcel$interopDefault($b0f76f3730edf785$exports)))(className), fn);
    }
};
// the public event handlers to implement in subclasses
const $cc2c9f710b8f1d9a$var$eventNames = [
    "DOMChanged",
    "didScroll",
    "didResize",
    "didBreakpoint",
    "enterViewport",
    "exitViewport",
    "enterFullscreen",
    "exitFullscreen",
    "newPage",
    "elementEvent",
    "workerOnMessage",
    "observableChanged"
];
/*
	@class Sargasso -  the superclass for all element controllers
	*/ class $cc2c9f710b8f1d9a$export$d7944a94c1afb262 {
    constructor(element, options = {}){
        (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("Sargasso constructor element", element, [
            "isDefined",
            "isElement"
        ]);
        (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("Sargasso constructor options", options, [
            "isDefined",
            [
                "isObject"
            ]
        ]);
        this.uid = ++$cc2c9f710b8f1d9a$var$unique;
        this.element = element;
        if (options.shadowDOM) {
            this._shadowDOM = element.attachShadow({
                mode: "open"
            });
            this._shadowRoot = document.createElement("div");
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
        this.render = (0, (/*@__PURE__*/$parcel$interopDefault($d840048267584034$exports)))(()=>{
            this._render();
        }, 100, {
            maxWait: 250
        });
    }
    /*
		@function start - called when controller is instantiated

		Override this to perform any initialization such as event listeners

		Note: always call super.start() in at the top of your subclass start method
		*/ start() {
        const registeredResponsiveControllers = this.getMetaData("registeredResponsiveControllers") || [];
        registeredResponsiveControllers.push(this);
        this.setMetaData("registeredResponsiveControllers", registeredResponsiveControllers);
        this.setMetaData(this.constructor.name, this);
        $cc2c9f710b8f1d9a$export$85e745b96b6487a7.push(this);
        // if using shadow DOM, build a DOMWatcher to observe changes
        if (this._shadowDOM) {
            if (!this._shadowDOMWatcher) this._shadowDOMWatcher = new (0, $d026517949359551$export$d36264ac4e7cee7d)({
                shadowDOM: this._shadowRoot
            });
            this._shadowDOMWatcher.subscribe(this);
        }
        // subscribe to desired event services
        if (this.options.watchDOM) (0, $d026517949359551$export$77e1d49fdb880d27).subscribe(this);
        if (this.options.watchScroll || this.options.watchViewport) (0, $d026517949359551$export$c7320459fd5267c0).subscribe(this);
        if (this.options.watchResize || this.options.watchViewport) (0, $d026517949359551$export$497098c8185e6e33).subscribe(this);
        if (this.options.watchOrientation || this.options.watchViewport) (0, $d026517949359551$export$296acd8d6f329fa3).subscribe(this);
        if (this.options.watchAttributes) this.watchAttributes();
        /*
			listen for 'sargasso' events
			Call the method named in e.detail.sargassoEvent or call this.elementEvent
		*/ this.elementListener = (e)=>{
            if (e.detail && e.detail.sargassoEvent && $cc2c9f710b8f1d9a$var$eventNames.indexOf(e.detail.sargassoEvent) !== -1) this[e.detail.sargassoEvent].apply(this, e.detail.sargassoEventOptions || []);
            else this.elementEvent(e);
        };
        this.element.addEventListener("sargasso", this.elementListener);
        this._started = true;
    }
    /*
		@function sleep - override this to clean up any events or references in your subclass

		Called when element has been removed from DOM just before it is destroyed

		Note: always call super.sleep() at the end of your subclass sleep method
		*/ sleep() {
        if (this._shadowDOM) this._shadowDOMWatcher.unSubscribe(this);
        if (this.options.watchDOM) (0, $d026517949359551$export$77e1d49fdb880d27).unSubscribe(this);
        if (this.options.watchScroll || this.options.watchViewport) (0, $d026517949359551$export$c7320459fd5267c0).unSubscribe(this);
        if (this.options.watchResize || this.options.watchViewport) (0, $d026517949359551$export$497098c8185e6e33).unSubscribe(this);
        if (this.options.watchOrientation || this.options.watchViewport) (0, $d026517949359551$export$296acd8d6f329fa3).unSubscribe(this);
        if (this.attributeObserver) this.attributeObserver.disconnect();
        this.element.removeEventListener("sargasso", this.elementListener);
        (0, $b17b0a5c39dee3e4$export$6f53260fffa88f1c).offAll(this.element) // remove all dangling event listeners created with on/once
        ;
        this._started = false;
    }
    watchAttributes() {
        this.attributeObserver = new MutationObserver((mutations)=>{
            mutations.forEach((mutation)=>{
                if (mutation.type === "attributes") this.attributeChanged(mutation.attributeName);
            });
        });
        this.attributeObserver.observe(this._hostElement || this.element, {
            attributes: true
        });
    }
    /**************************************************************
	EVENT HOOKS - Override these methods in your subclass as needed
	***************************************************************/ /*
		@function DOMChanged - something changed on the page
		called if options.watchDOM set, override as needed.
		*/ DOMChanged(root) {}
    /*
		@function didScroll - scroll occured
		called if options.watchScroll set, override as needed.
		*/ didScroll() {}
    /*
		@function didResize - resize occured
		called if options.watchResize set, override as needed.
		*/ didResize() {}
    /*
		@function didBreakpoint - new breakpoint, override as needed.
		*/ didBreakpoint() {}
    /*
		@function enterViewport - element entered the viewport
		called if options.watchViewport set, override as needed.
		*/ enterViewport() {}
    /*
		@function exitViewport - element exited the viewport
		called if options.watchViewport set, override as needed.
		*/ exitViewport() {}
    /*
		@function enterFullscreen - element entered fullscreen, override as needed.
		*/ enterFullscreen() {}
    /*
		@function exitFullscreen - element exited fullscreen, override as needed.
		*/ exitFullscreen() {}
    /*
		@function newPage - page changed
		@param { String } oldPath - outgoing page
		@param { String } newPath - incoming page
		*/ newPage(oldPath, newPath) {}
    /*
		@function elementEvent - element received a 'sargasso' custom event from somewhere
		@param { Object } e - event
		*/ elementEvent(e) {}
    /*
		@function workerOnMessage - listen for worker postMessage event
		@param { String } id - id of worker started with this.workerstart()
		@param { Object } data - data received from worker
		*/ workerOnMessage(id, data) {}
    /*
		@function observableChange - listen for changes to observable object
		@param { String } id - id of observable
		@param { String } type - type of observable
		@param { String } path - path that changed
		@param { String } newValue - new value
		@param { String } previousValue - old value
		*/ observableChanged(id, type, path, newValue, previousValue) {
        this.render();
    }
    attributeChanged(attribute) {}
    /****************************************************
	UTILITY METHODS - callable but normally not overriden
	*****************************************************/ /*
		@function setMetaData - Set metadata. Key value storage implemented as a weakMap
		@param { String } - key name for value
		@param { Object } - value or JSON object, null will remove from key from metadate
		*/ setMetaData(k, v) {
        (0, $b17b0a5c39dee3e4$export$6f53260fffa88f1c).setMetaData(this.element, k, v);
    }
    /*
		@function getMetaData - Retrieve metadata
		@param { String } key - name of value to return
		@return { Object } if key is found otherwise undefined
		*/ getMetaData(k) {
        return (0, $b17b0a5c39dee3e4$export$6f53260fffa88f1c).getMetaData(this.element, k);
    }
    /*
		@function on - add delegated event handler for this.element
		@param { String} evt - HTML element event name
		@param { String } selector - optional element query selector
		@param { Function } fn - event handler function
		@param { Object } [options] - for addEventListener
		*/ on(evt, selector, fn, options) {
        (0, $b17b0a5c39dee3e4$export$6f53260fffa88f1c).on(this.constructor.name + "-" + this.uid, this.element, evt, selector, fn, options);
    }
    /*
		@function off - Remove delegated event handler
		@param { String} evt - HTML element event name
		@param { String } [selector] - element query selector
		*/ off(evt, selector) {
        (0, $b17b0a5c39dee3e4$export$6f53260fffa88f1c).off(this.constructor.name + "-" + this.uid, this.element, evt, selector);
    }
    /*
		@function once - add delegated event handler for this.element witch executes only once
		@param { String} evt - HTML element event name
		@param { String } selector - optional element query selector
		@param { Function } fn - event handler function
		@param { Object } [options] - for addEventListener
		*/ once(evt, selector, fn, options) {
        (0, $b17b0a5c39dee3e4$export$6f53260fffa88f1c).once(this.constructor.name + "-" + this.uid, this.element, evt, selector, fn, options);
    }
    /*
		@function notifyAll - broadcast 'event' to all instantiated sargasso controllers
		@param { String } event - name of sargasso event
		@param { Object } params - array of params to attach to event
		*/ notifyAll(event, params) {
        if ($cc2c9f710b8f1d9a$var$eventNames.indexOf(event) === -1) throw new Error("invalid event name " + event);
        for(let i = 0; i < $cc2c9f710b8f1d9a$export$85e745b96b6487a7.length; i++){
            const peer = $cc2c9f710b8f1d9a$export$85e745b96b6487a7[i];
            if (peer !== this && peer[event]) peer[event].apply(peer, params);
        }
    }
    /*
		@function notifyElement - broadcast event to all sargasso controllers for 'this.element'
		@param { String } event - name of sargasso event
		@param { Object } params - array of params to attach to event
		*/ notifyElement(element, event, params) {
        if ($cc2c9f710b8f1d9a$var$eventNames.indexOf(event) === -1) throw new Error("invalid event name " + event);
        const registeredResponsiveControllers = this.getMetaData("registeredResponsiveControllers");
        if (registeredResponsiveControllers) for(let i = 0; i < registeredResponsiveControllers.length; i++){
            const peer = registeredResponsiveControllers[i];
            if (peer !== this && peer[event]) peer[event].apply(peer, params);
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
		*/ queueFrame(frame) {
        this._frameQueue.push(frame.bind(this));
        if (!this._pendingAnimationFrame) this._pendingAnimationFrame = requestAnimationFrame(()=>{
            this._processQueue();
        });
    }
    /*
		@function wantFullscreen - request full screen
		you can call this from a subclass controller such as an 'enlarge to full screen' button
		otherwise if watchOrientation is set it will call this when phone is in landscape
		it would be nice to acually use the experimental requestFullScreen thing but
		you can't do that on rotate at the moment, only on click.
		*/ wantFullscreen(want) {
        if (want) this.enterFullscreen();
        else this.exitFullscreen();
    }
    /**********************************************************************
	ELEMENT UTILITIES - convienience methods for manipilating HTML elements
	***********************************************************************/ hasClass(cssClass) {
        return (0, $b17b0a5c39dee3e4$export$6f53260fffa88f1c).hasClass(this.element, cssClass);
    }
    addClass(cssClasses) {
        (0, $b17b0a5c39dee3e4$export$6f53260fffa88f1c).addClass(this.element, cssClasses);
    }
    removeClass(cssClasses) {
        (0, $b17b0a5c39dee3e4$export$6f53260fffa88f1c).removeClass(this.element, cssClasses);
    }
    setCSS(cssObject) {
        (0, $b17b0a5c39dee3e4$export$6f53260fffa88f1c).setCSS(this.element, cssObject);
    }
    isVisible() {
        return (0, $b17b0a5c39dee3e4$export$6f53260fffa88f1c).isVisible(this.element);
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

		*/ workerStart(id, codeOrURL) {
        this._workers[id] = (0, $d026517949359551$export$fa28dfcc49831a91).registerWorker(id, codeOrURL);
        (0, $d026517949359551$export$fa28dfcc49831a91).subscribe(this, id);
        return this._workers[id];
    }
    /*
		@function workerPostMessage - send a message to a running worker
		@param { String } id - id of worker
		@param { Object } message - data to send to worker
		*/ workerPostMessage(id, message) {
        if (!message.uid) message.uid = this.uid;
        if (this._workers[id]) this._workers[id].postMessage(message);
    }
    /************************************************
	observe observable objects
	get or set observable object by unique id
	obj optional external object
	*************************************************/ getObservable(id) {
        return this._observables[id];
    }
    getObservableData(id) {
        return this._observables[id].data;
    }
    observableStart(id, data) {
        (0, $d026517949359551$export$788f7857dc8c77f5).subscribe(this, id, data);
        this._observables[id] = (0, $d026517949359551$export$788f7857dc8c77f5).getObservable(id);
        return this._observables[id];
    }
    observableStop(id) {
        if (this._observables[id]) {
            (0, $d026517949359551$export$788f7857dc8c77f5).unSubscribe(this, id);
            delete this._observables[id];
        }
    }
    observableStopAll() {
        for(const id in this._observables)this.observableStop(id);
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
        return JSON.parse(JSON.stringify(args));
    }
    // this.render is a debounced call to this
    _render() {
        if (this._template && this.renderer) this.renderer(this._template.apply(this, this.getTemplateArgs()), this.element);
    }
    /************************************************
	PRIVATE METHODS: normally not called or overriden
	*************************************************/ /*
		@function _flushQueue - disgard all pending frames
		*/ _flushQueue() {
        if (this._pendingAnimationFrame) {
            cancelAnimationFrame(this._pendingAnimationFrame);
            this._pendingAnimationFrame = undefined;
        }
        this._frameQueue = [];
    }
    /*
		@function _flushQueue - execute pending frames
		*/ _processQueue() {
        this._pendingAnimationFrame = undefined;
        const toProcess = this._frameQueue.slice(0);
        this._frameQueue = [];
        for(let i = 0; i < toProcess.length; i++)toProcess[i]();
    }
    /*
		@function _stopWorker - stop a worker
		*/ _stopWorker(id) {
        if (this._workers[id]) {
            (0, $d026517949359551$export$fa28dfcc49831a91).unSubscribe(this, id);
            delete this._workers[id];
        }
    }
    /*
		@function _stopAllWorkers - cleanup all workers registered by me
		*/ _stopAllWorkers() {
        for(const worker in this._workers)this._stopWorker(worker);
    }
    /*
		@function destroy - called when this.element is removed from the DOM
		*/ destroy() {
        this._stopAllWorkers();
        this.observableStopAll();
        this._flushQueue();
        if (this._started) this.sleep();
        const registeredResponsiveControllers = this.getMetaData("registeredResponsiveControllers");
        if (registeredResponsiveControllers) {
            if (registeredResponsiveControllers.indexOf(this) !== -1) {
                registeredResponsiveControllers.splice(registeredResponsiveControllers.indexOf(this), 1);
                this.setMetaData("registeredResponsiveControllers", registeredResponsiveControllers);
            }
        }
        this.setMetaData(this.constructor.name, null);
        this.element = null;
        if ($cc2c9f710b8f1d9a$export$85e745b96b6487a7.indexOf(this) !== -1) $cc2c9f710b8f1d9a$export$85e745b96b6487a7.splice($cc2c9f710b8f1d9a$export$85e745b96b6487a7.indexOf(this), 1);
    }
    /****************************************************
	EVENT HOOK METHODS - normally not called or overriden
	*****************************************************/ /*
		@function watchDOM - hook called if options.watchDOM set and DOM changed
		*/ watchDOM(root) {
        if (root === this._shadowRoot) // something happend this element's my shadow DOM, tell in the DOM about it
        // so dom observers can take actions such as instantiating new sargasso
        // controllers, etc.
        (0, $d026517949359551$export$77e1d49fdb880d27).observeDOM(this._shadowRoot);
        else this.DOMChanged(root);
    }
    /*
		@function watchScroll - hook called if options.watchScroll set and Scroll Wrapper scrolled
		*/ watchScroll() {
        if (this.options.watchViewport) this.inViewport();
        this.didScroll();
    }
    /*
		@function watchResize - hook called if options.watchResize set and window changed size
		*/ watchResize() {
        if (this.options.watchViewport) this.inViewport();
        this.didResize();
    }
    /*
		@function watchOrientation - hook called if options.watchOrientation set and orientation changes
		*/ watchOrientation() {
        if (window.orientation && (window.orientation === 90 || window.orientation === -90)) this.wantFullscreen(true);
        else this.wantFullscreen(false);
    }
    /*
		@function inViewport - hook called if options.watchViewPort set and this.element enters viewport
		*/ inViewport() {
        if ((0, $d026517949359551$export$c7320459fd5267c0).inViewPort(this.element)) {
            if (!this._isInViewport) {
                this.enterViewport();
                this._isInViewport = true;
            }
        } else if (this._isInViewport) {
            this.exitViewport();
            this._isInViewport = false;
        }
    }
    /*
		@function workerMessage - hook called when worker posts a message
		*/ workerMessage(id, e) {
        if (e.data.uid === this.uid) this.workerOnMessage(id, e.data);
    }
    // experimental
    nativeRequestFullScreen() {
        if (document.fullscreenElement) {
            if (document.fullscreenElement === this.element) return;
            document.exitFullscreen();
        }
        this.element.requestFullscreen();
    }
    nativeExitFullScreen() {
        if (document.fullscreenElement && document.fullscreenElement === this.element) document.exitFullscreen();
    }
}
$cc2c9f710b8f1d9a$export$22044c20eef36040("Sargasso", $cc2c9f710b8f1d9a$export$d7944a94c1afb262);




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
/**
	LazyInstantiate

	Sargasso class watches the document for new content and instantiates
	Sargasso classes liested in element's data-lazy-sargasso-class only when
	the element scrolls into view

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020-2023 Michael Rhodes
**/ 


class $5c63bc90ab00148c$export$10307b0c33312dbb extends (0, $cc2c9f710b8f1d9a$export$d7944a94c1afb262) {
    constructor(element, options = {}){
        options.watchScroll = true;
        options.watchResize = true;
        options.watchDOM = true;
        options.immortal = true;
        super(element, options);
    }
    didResize() {
        super.didResize();
        this.lazyHandler();
    }
    didScroll() {
        super.didScroll();
        this.lazyHandler();
    }
    DOMChanged(root) {
        super.DOMChanged(root);
        this.lazyHandler(root);
    }
    // watch viewport and instantiate lazy-instantiate-responsive things when visible
    lazyHandler(root = document) {
        const els = root.querySelectorAll("[data-lazy-sargasso-class]");
        for(let i = 0; i < els.length; i++){
            const element = els[i];
            if ((0, $d026517949359551$export$c7320459fd5267c0).inViewPort(element)) {
                const cls = element.getAttribute("data-lazy-sargasso-class").split(/\s*,\s*/);
                for(let j = 0; j < cls.length; j++){
                    const thing = new (0, $cc2c9f710b8f1d9a$export$ac297e650eeb1e78)[cls[j]](els[i]);
                    thing.start();
                }
                element.removeAttribute("data-lazy-sargasso-class");
            }
        }
    }
}
(0, $cc2c9f710b8f1d9a$export$22044c20eef36040)("LazyInstantiate", $5c63bc90ab00148c$export$10307b0c33312dbb);


class $05b1fc629b3c6d05$export$26b75d03ac531c24 extends (0, $cc2c9f710b8f1d9a$export$d7944a94c1afb262) {
    constructor(element, options = {}){
        super(element, {
            watchDOM: true,
            mortal: false
        });
        this.lazy = new (0, $5c63bc90ab00148c$export$10307b0c33312dbb)(element, options);
    }
    start() {
        this.lazy.start();
        super.start();
    }
    instantiate(element) {
        const cls = element.getAttribute("data-sargasso-class").split(/\s*,\s*/);
        for(let i = 0; i < cls.length; i++)try {
            const thing = new (0, $cc2c9f710b8f1d9a$export$ac297e650eeb1e78)[cls[i]](element);
            thing.start();
        } catch (e) {
            console.log("error instantiating " + cls[i], e, (0, $cc2c9f710b8f1d9a$export$ac297e650eeb1e78));
        }
        element.removeAttribute("data-sargasso-class");
    }
    newPage() {
        this.doIt();
    }
    DOMChanged(root) {
        this.doIt(root);
    }
    doIt(root = document.body) {
        if (root.getAttribute("data-sargasso-class")) this.instantiate(root);
        const elements = root.querySelectorAll("[data-sargasso-class]");
        for (const element of elements)this.instantiate(element);
        // check for dangling live elements and kill them
        const toCleanup = [];
        for(let i = 0; i < (0, $cc2c9f710b8f1d9a$export$85e745b96b6487a7).length; i++)if (!(0, $cc2c9f710b8f1d9a$export$85e745b96b6487a7)[i].options.immortal && !(0, $cc2c9f710b8f1d9a$export$85e745b96b6487a7)[i].options.isCustomElement && !document.body.contains((0, $cc2c9f710b8f1d9a$export$85e745b96b6487a7)[i].element)) toCleanup.push((0, $cc2c9f710b8f1d9a$export$85e745b96b6487a7)[i]);
        for(let i = 0; i < toCleanup.length; i++)toCleanup[i].destroy();
    }
}
(0, $cc2c9f710b8f1d9a$export$22044c20eef36040)("SargassoSupervisor", $05b1fc629b3c6d05$export$26b75d03ac531c24);


/**
	Breakpoints

	Sargasso class that maintains css classes on the document body
	to be used in css rules for implementing visibility and
	responsive behavior

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020-2023 Michael Rhodes
**/ 

const $314aa6f7b1217a0b$export$f86ec3d89f756a21 = window.breakpoints || {
    widths: [
        {
            className: "breakpoint-phone",
            maxWidth: 599
        },
        {
            className: "breakpoint-tablet",
            maxWidth: 904
        },
        {
            className: "breakpoint-desktop",
            maxWidth: undefined
        }
    ]
};
class $314aa6f7b1217a0b$export$c38d2c1bff643203 extends (0, $cc2c9f710b8f1d9a$export$d7944a94c1afb262) {
    constructor(element, options = {}){
        options.watchResize = true;
        super(element, options);
        this.options.widths = options.widths || $314aa6f7b1217a0b$export$f86ec3d89f756a21;
        this.scale = undefined;
        this.widths = [];
        this.classes = [];
        this.debouncedDetectGeometry = (0, (/*@__PURE__*/$parcel$interopDefault($d840048267584034$exports)))(()=>{
            this.detectGeometry();
        }, 100, {
            maxWait: 150
        });
    }
    start() {
        super.start();
        this.debouncedDetectGeometry();
    }
    didResize() {
        this.debouncedDetectGeometry();
    }
    detectGeometry() {
        const newScale = window.doBreakpoints(this.options.widths);
        if (newScale !== this.scale) {
            const frame = ()=>{
                this.notifyAll("didBreakpoint", [
                    newScale
                ]);
            };
            this.queueFrame(frame);
        }
        this.scale = newScale;
    }
}
(0, $cc2c9f710b8f1d9a$export$22044c20eef36040)("Breakpoints", $314aa6f7b1217a0b$export$c38d2c1bff643203);


/**
	HijaxLoader

	Sargasso class that captures links on the page and loads pages
	using AJAX only replacing elements on the page that are marked
	with data-hijax attributes.

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020-2023 Michael Rhodes
**/ 


class $68e6185d374b41db$export$8c08cf4432b2f5b3 extends (0, $cc2c9f710b8f1d9a$export$d7944a94c1afb262) {
    constructor(element, options = {}){
        options.watchDOM = true;
        options.immortal = true;
        super(element, options);
        this.excludeRegex = new RegExp("^(//|http|javascript|mailto|#)", "i");
        this.currentPage = location.pathname + location.search;
        this.cachedMarkup = {};
    }
    start() {
        // set up hijax markup cache
        const containers = document.querySelectorAll("[data-hijax-skip-unchanged]");
        for(let i = 0; i < containers.length; i++){
            const container = containers[i];
            const id = container.getAttribute("id");
            this.cachedMarkup[id] = container.innerHTML;
        }
        super.start();
        window.addEventListener("popstate", (e)=>{
            this.watchPopState(e);
        }, false);
    }
    DOMChanged(root) {
        super.DOMChanged(root);
        this.hijaxLinks(root);
    }
    watchPopState(e) {
        if (location.pathname + location.search !== this.currentPage) this.preFlight(location.pathname + location.search);
    }
    hijaxLinks(fragment) {
        const links = fragment ? fragment.getElementsByTagName("a") : this.element.getElementsByTagName("a");
        for(let i = 0; i < links.length; i++){
            const link = links[i];
            const href = link.getAttribute("href");
            if (href && !link.getAttribute("data-hijaxed") && !link.getAttribute("target") && !link.hasAttribute("data-no-hijax") && !this.excludeRegex.exec(href)) {
                link.setAttribute("data-hijaxed", true);
                link.addEventListener("click", (e)=>{
                    e.preventDefault();
                    this.setPage(href);
                }, false);
            }
        }
    }
    setPage(url, reload) {
        if (url === this.currentPage || reload) this.preFlight(url);
        else {
            history.pushState(null, null, url);
            this.watchPopState();
        }
    }
    preFlight(url) {
        if (!this.options.preFlight) return this.loadPage(url);
        this.options.preFlight(url, (err, handled, rewrite)=>{
            if (err) {
                if (this.options.onError) this.options.onError("danger", err);
                else alert("Error loading page: " + err);
            }
            if (handled) this.currentPage = location.pathname + location.search;
            else this.loadPage(rewrite || url);
        });
    }
    loadPage(url) {
        const frame = ()=>{
            (0, $b17b0a5c39dee3e4$export$6f53260fffa88f1c).addClass(document.body, "hijax-loading");
        };
        this.queueFrame(frame);
        if (this.options.onExitPage) this.options.onExitPage();
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.setRequestHeader("Sargasso-Hijax", 1);
        xhr.setRequestHeader("x-digitopia-hijax", 1);
        if (this.options.onLoading) {
            this.options.onLoading();
            xhr.onreadystatechange = this.options.onLoading;
        }
        xhr.onload = ()=>{
            if (xhr.status === 301 || xhr.status === 302 || xhr.getResponseHeader("Sargasso-Location")) {
                const loc = xhr.getResponseHeader("Location") ? xhr.getResponseHeader("Location") : xhr.getResponseHeader("Sargasso-Location");
                this.setPage(loc);
            } else if (xhr.status === 200) {
                (0, $d026517949359551$export$c7320459fd5267c0).scrollTop(0);
                this.mergePage(xhr.responseText);
                const oldPage = this.currentPage;
                const frame = ()=>{
                    this.notifyAll("newPage", [
                        oldPage,
                        location.pathname + location.search
                    ]);
                    (0, $b17b0a5c39dee3e4$export$6f53260fffa88f1c).removeClass(document.body, "hijax-loading");
                };
                this.queueFrame(frame);
                this.currentPage = location.pathname + location.search;
            } else {
                const flashLevel = xhr.getResponseHeader("Sargasso-Flash-Level") || "danger";
                let flashMessage = xhr.getResponseHeader("Sargasso-Flash-Message") || xhr.statusText;
                if (!flashMessage) flashMessage = "Could not connect to server.";
                if (this.options.onError) this.options.onError(flashLevel, flashMessage);
                else alert("Error loading page: " + flashMessage);
            }
        };
        xhr.send();
    }
    processScripts(scripts) {
        Array.from(scripts).forEach((script)=>{
            script.remove();
            const id = script.getAttribute("id");
            if (!document.getElementById(id)) // script.onload = function () {}
            document.getElementsByTagName("head")[0].appendChild(script);
        });
    }
    mergePage(html) {
        const ephemerals = document.querySelectorAll("[data-ephemeral]");
        Array.from(ephemerals).forEach((ephemeral)=>{
            ephemeral.remove();
        });
        const doc = html.split(/(<body[^>]*>|<\/body>)/ig);
        const fragment = $68e6185d374b41db$var$makeFragment(doc[2]);
        const containers = document.querySelectorAll("[data-hijax]");
        for(let i = 0; i < containers.length; i++){
            const container = containers[i];
            const id = container.getAttribute("id");
            const replace = fragment.getElementById(id);
            // compare raw markup for changes
            if (container.hasAttribute("data-hijax-skip-unchanged")) {
                if (this.cachedMarkup[id] === replace.innerHTML) continue;
                this.cachedMarkup[id] = replace.innerHTML;
            }
            // use a key found in data-hijax-cache-key on a child element found by css selector defined in data-hijax-cache-key-selector
            const k = container.getAttribute("data-hijax-cache-key-selector");
            if (k) {
                if (replace.querySelector(k) && container.querySelector(k) && container.querySelector(k).getAttribute("data-hijax-cache-key") === replace.querySelector(k).getAttribute("data-hijax-cache-key")) continue;
            }
            this.processScripts(replace.querySelectorAll("script"));
            const frame = ()=>{
                container.parentNode.replaceChild(replace, container);
                if (this.options.onEnterPage) this.options.onEnterPage();
                this.hijaxLinks(replace);
            };
            this.queueFrame(frame);
        }
    }
}
(0, $cc2c9f710b8f1d9a$export$22044c20eef36040)("HijaxLoader", $68e6185d374b41db$export$8c08cf4432b2f5b3);
// shims for borked browsers
// =========================
const $68e6185d374b41db$var$makeFragment = (html)=>{
    if (document.createRange && document.createRange().createContextualFragment) return document.createRange().createContextualFragment(html);
    const fragment = document.createDocumentFragment();
    const div = document.createElement("div");
    div.insertAdjacentHTML("afterBegin", html);
    fragment.appendChild(div);
    return fragment;
};



let $9ab666cb428a37d6$export$7869d9d42a3fc8a6;
const $9ab666cb428a37d6$export$80ed8a0252d89225 = (options = {})=>{
    if (options.scrollElement) (0, $d026517949359551$export$c7320459fd5267c0).setOptions(options);
    if (options.breakpoints) {
        const breakpoints = new (0, $314aa6f7b1217a0b$export$c38d2c1bff643203)(document.body, options.breakpoints);
        breakpoints.start();
    }
    if (options.hijax) {
        const hijax = new (0, $68e6185d374b41db$export$8c08cf4432b2f5b3)(document.body, options.hijax);
        hijax.start();
        $9ab666cb428a37d6$export$7869d9d42a3fc8a6 = hijax.setPage.bind(hijax);
    } else $9ab666cb428a37d6$export$7869d9d42a3fc8a6 = (url)=>{
        document.location.href = url;
    };
    const supervisor = new (0, $05b1fc629b3c6d05$export$26b75d03ac531c24)(document.body, options);
    supervisor.start(options);
    return supervisor;
};




/**
	ObservableClient

	Build an obserbable object that syncs with a server via socket.io

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020-2023 Michael Rhodes
**/ 

var $3b107fc3e17ef5bd$exports = {};
"use strict";
var $ee35ae57d9f478a6$exports = {};
var $ee35ae57d9f478a6$var$hasOwn = Object.prototype.hasOwnProperty;
var $ee35ae57d9f478a6$var$toString = Object.prototype.toString;
$ee35ae57d9f478a6$exports = function forEach(obj, fn, ctx) {
    if ($ee35ae57d9f478a6$var$toString.call(fn) !== "[object Function]") throw new TypeError("iterator must be a function");
    var l = obj.length;
    if (l === +l) for(var i = 0; i < l; i++)fn.call(ctx, obj[i], i, obj);
    else {
        for(var k in obj)if ($ee35ae57d9f478a6$var$hasOwn.call(obj, k)) fn.call(ctx, obj[k], k, obj);
    }
};


$3b107fc3e17ef5bd$exports = $3b107fc3e17ef5bd$var$api;
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
 */ function $3b107fc3e17ef5bd$var$api(obj, pointer, value) {
    // .set()
    if (arguments.length === 3) return $3b107fc3e17ef5bd$var$api.set(obj, pointer, value);
    // .get()
    if (arguments.length === 2) return $3b107fc3e17ef5bd$var$api.get(obj, pointer);
    // Return a partially applied function on `obj`.
    var wrapped = $3b107fc3e17ef5bd$var$api.bind($3b107fc3e17ef5bd$var$api, obj);
    // Support for oo style
    for(var name in $3b107fc3e17ef5bd$var$api)if ($3b107fc3e17ef5bd$var$api.hasOwnProperty(name)) wrapped[name] = $3b107fc3e17ef5bd$var$api[name].bind(wrapped, obj);
    return wrapped;
}
/**
 * Lookup a json pointer in an object
 *
 * @param {Object} obj
 * @param {String|Array} pointer
 * @returns {*}
 */ $3b107fc3e17ef5bd$var$api.get = function get(obj, pointer) {
    var refTokens = Array.isArray(pointer) ? pointer : $3b107fc3e17ef5bd$var$api.parse(pointer);
    for(var i = 0; i < refTokens.length; ++i){
        var tok = refTokens[i];
        if (!(typeof obj == "object" && tok in obj)) throw new Error("Invalid reference token: " + tok);
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
 */ $3b107fc3e17ef5bd$var$api.set = function set(obj, pointer, value) {
    var refTokens = Array.isArray(pointer) ? pointer : $3b107fc3e17ef5bd$var$api.parse(pointer), nextTok = refTokens[0];
    if (refTokens.length === 0) throw Error("Can not set the root object");
    for(var i = 0; i < refTokens.length - 1; ++i){
        var tok = refTokens[i];
        if (typeof tok !== "string" && typeof tok !== "number") tok = String(tok);
        if (tok === "__proto__" || tok === "constructor" || tok === "prototype") continue;
        if (tok === "-" && Array.isArray(obj)) tok = obj.length;
        nextTok = refTokens[i + 1];
        if (!(tok in obj)) {
            if (nextTok.match(/^(\d+|-)$/)) obj[tok] = [];
            else obj[tok] = {};
        }
        obj = obj[tok];
    }
    if (nextTok === "-" && Array.isArray(obj)) nextTok = obj.length;
    obj[nextTok] = value;
    return this;
};
/**
 * Removes an attribute
 *
 * @param {Object} obj
 * @param {String|Array} pointer
 */ $3b107fc3e17ef5bd$var$api.remove = function(obj, pointer) {
    var refTokens = Array.isArray(pointer) ? pointer : $3b107fc3e17ef5bd$var$api.parse(pointer);
    var finalToken = refTokens[refTokens.length - 1];
    if (finalToken === undefined) throw new Error('Invalid JSON pointer for remove: "' + pointer + '"');
    var parent = $3b107fc3e17ef5bd$var$api.get(obj, refTokens.slice(0, -1));
    if (Array.isArray(parent)) {
        var index = +finalToken;
        if (finalToken === "" && isNaN(index)) throw new Error('Invalid array index: "' + finalToken + '"');
        Array.prototype.splice.call(parent, index, 1);
    } else delete parent[finalToken];
};
/**
 * Returns a (pointer -> value) dictionary for an object
 *
 * @param obj
 * @param {function} descend
 * @returns {}
 */ $3b107fc3e17ef5bd$var$api.dict = function dict(obj, descend) {
    var results = {};
    $3b107fc3e17ef5bd$var$api.walk(obj, function(value, pointer) {
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
 */ $3b107fc3e17ef5bd$var$api.walk = function walk(obj, iterator, descend) {
    var refTokens = [];
    descend = descend || function(value) {
        var type = Object.prototype.toString.call(value);
        return type === "[object Object]" || type === "[object Array]";
    };
    (function next(cur) {
        $ee35ae57d9f478a6$exports(cur, function(value, key) {
            refTokens.push(String(key));
            if (descend(value)) next(value);
            else iterator(value, $3b107fc3e17ef5bd$var$api.compile(refTokens));
            refTokens.pop();
        });
    })(obj);
};
/**
 * Tests if an object has a value for a json pointer
 *
 * @param obj
 * @param pointer
 * @returns {boolean}
 */ $3b107fc3e17ef5bd$var$api.has = function has(obj, pointer) {
    try {
        $3b107fc3e17ef5bd$var$api.get(obj, pointer);
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
 */ $3b107fc3e17ef5bd$var$api.escape = function escape(str) {
    return str.toString().replace(/~/g, "~0").replace(/\//g, "~1");
};
/**
 * Unescapes a reference token
 *
 * @param str
 * @returns {string}
 */ $3b107fc3e17ef5bd$var$api.unescape = function unescape(str) {
    return str.replace(/~1/g, "/").replace(/~0/g, "~");
};
/**
 * Converts a json pointer into a array of reference tokens
 *
 * @param pointer
 * @returns {Array}
 */ $3b107fc3e17ef5bd$var$api.parse = function parse(pointer) {
    if (pointer === "") return [];
    if (pointer.charAt(0) !== "/") throw new Error("Invalid JSON pointer: " + pointer);
    return pointer.substring(1).split(/\//).map($3b107fc3e17ef5bd$var$api.unescape);
};
/**
 * Builds a json pointer from a array of reference tokens
 *
 * @param refTokens
 * @returns {string}
 */ $3b107fc3e17ef5bd$var$api.compile = function compile(refTokens) {
    if (refTokens.length === 0) return "";
    return "/" + refTokens.map($3b107fc3e17ef5bd$var$api.escape).join("/");
};



const $6cc3a86e86a06450$export$2bddc7254d5a4249 = (source, dest)=>{
    Object.keys(source).forEach((key)=>{
        if (Array.isArray(source[key])) {
            dest[key] = [];
            $6cc3a86e86a06450$export$2bddc7254d5a4249(source[key], dest[key]);
        } else if (typeof source[key] === "object") {
            dest[key] = {};
            $6cc3a86e86a06450$export$2bddc7254d5a4249(source[key], dest[key]);
        } else dest[key] = source[key];
    });
};


class $f11df64d5740bdb1$export$8d7915f8e0cd6b7a extends (0, $05b7f40ae55d062a$export$b176171395436676) {
    constructor(id, data = {}, options = {}){
        (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9)("ObservableClient constructor endpoint", options.endpoint, [
            "isDefined",
            "isString"
        ]);
        super(id, data, options);
        this.socket = null;
        this.connected = false;
        this.socket = (options.io || io)(this.options.endpoint);
        this.socket.on("error", (err)=>{
            this.emit("error", {
                message: "socket error",
                error: err
            });
        });
        this.socket.on("connect_error", (err)=>{
            this.emit("error", {
                message: "connect_error",
                error: err
            });
            this.connected = false;
        });
        this.socket.on("disconnect", (reason)=>{
            this.emit("error", {
                message: "disconnect",
                reason: reason
            });
            this.connected = false;
        });
        this.socket.on("connect", ()=>{
            this.socket.emit("authenticate", this.id, this.getSource(), this.authenticateHandler.bind(this));
        });
        // listen for change events from server side
        this.socket.on("change", (event)=>{
            for (const change of event.changes){
                const type = change.type;
                const path = change.currentPath;
                const newValue = change.newValue;
                const previousValue = change.previousValue;
                const ptr = "/" + path.replace(/\./g, "/");
                if (type === "update" || type === "add") {
                    if (!(0, (/*@__PURE__*/$parcel$interopDefault($3b107fc3e17ef5bd$exports))).has(this.unproxied, ptr) || (0, (/*@__PURE__*/$parcel$interopDefault($3b107fc3e17ef5bd$exports))).get(this.unproxied, ptr) !== newValue) (0, (/*@__PURE__*/$parcel$interopDefault($3b107fc3e17ef5bd$exports))).set(this.unproxied, ptr, newValue);
                }
                if (type === "delete") {
                    if ((0, (/*@__PURE__*/$parcel$interopDefault($3b107fc3e17ef5bd$exports))).has(this.unproxied, ptr)) (0, (/*@__PURE__*/$parcel$interopDefault($3b107fc3e17ef5bd$exports))).remove(this.unproxied, ptr);
                }
            }
            this.sync(event.changes, event.source);
            this.emit("synced_change");
        });
        if (!this.options.authoritative) this.socket.on("init", (event)=>{
            (0, $6cc3a86e86a06450$export$2bddc7254d5a4249)(event.init, this.unproxied);
            this.sync(event.changes, event.source);
            this.emit("initialized");
        });
    }
    authenticateHandler(result) {
        if (result.status !== "ok") {
            this.emit("error", {
                message: "ObservableClient authentication failed",
                error: result
            });
            return;
        }
        // optionally send initial data to server
        if (this.options.authoritative) this.socket.emit("init", {
            source: this.getSource(),
            init: this.unproxied,
            changes: [
                {
                    type: "init"
                }
            ]
        });
        this.connected = true;
        this.emit("status", "connected");
    }
    getSource() {
        return super.getSource() + ":client:" + this.socket.id;
    }
    destroy() {
        if (this.socket) this.socket.disconnect(true);
        super.destroy();
    }
    // notify observers
    sync(changes, source) {
        super.sync(changes);
        // propagate to server only if local change 
        if (source === this.getSource() && this.socket && this.connected) this.socket.emit("change", {
            sourceId: this.getSource(),
            changes: changes
        }, (result)=>{
            if (result.status !== "ok") this.emit("error", {
                message: "sync error",
                response: result
            });
            else this.emit("status", "sync ok");
        });
    }
}


const $74781ab65e5661d8$export$eab97d15b1788b8d = {
    registerSargassoClass: (0, $cc2c9f710b8f1d9a$export$22044c20eef36040),
    bootSargasso: (0, $9ab666cb428a37d6$export$80ed8a0252d89225),
    elementTools: (0, $b17b0a5c39dee3e4$export$6f53260fffa88f1c),
    validate: (0, $d058b9b16cf9cda3$export$a22775fa5e2eebd9),
    setValidator: (0, $d058b9b16cf9cda3$export$636d763ed7be9e97)
};
const $74781ab65e5661d8$export$bce7a36871692cab = {
    theDOMWatcher: (0, $d026517949359551$export$77e1d49fdb880d27),
    theScrollWatcher: (0, $d026517949359551$export$c7320459fd5267c0),
    theResizeWatcher: (0, $d026517949359551$export$497098c8185e6e33),
    theOrientationWatcher: (0, $d026517949359551$export$296acd8d6f329fa3),
    theWorkerWatcher: (0, $d026517949359551$export$fa28dfcc49831a91),
    theObservableObjectWatcher: (0, $d026517949359551$export$788f7857dc8c77f5)
};
const $74781ab65e5661d8$export$505f1cb98cb78c0d = {
    liveElements: (0, $cc2c9f710b8f1d9a$export$85e745b96b6487a7),
    registeredClasses: (0, $cc2c9f710b8f1d9a$export$ac297e650eeb1e78),
    elementMetaData: (0, $b17b0a5c39dee3e4$export$8350ba437fdadadb)
};


export {$74781ab65e5661d8$export$eab97d15b1788b8d as utils, $74781ab65e5661d8$export$bce7a36871692cab as services, $74781ab65e5661d8$export$505f1cb98cb78c0d as system, $cc2c9f710b8f1d9a$export$d7944a94c1afb262 as Sargasso, $9ab666cb428a37d6$export$7869d9d42a3fc8a6 as loadPageHandler, $05b7f40ae55d062a$export$b176171395436676 as ObservableObject, $f11df64d5740bdb1$export$8d7915f8e0cd6b7a as ObservableClient};
//# sourceMappingURL=sargasso.mjs.map
