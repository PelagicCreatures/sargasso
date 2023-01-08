import {render as $8Ln3R$render, html as $8Ln3R$html} from "lit-html";

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
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequirea483"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequirea483"] = parcelRequire;
}
parcelRequire.register("8tgsd", function(module, exports) {

var $1L8e3 = parcelRequire("1L8e3");

var $aRDxW = parcelRequire("aRDxW");
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */ var Buffer = moduleExports ? $1L8e3.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
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
 */ var isBuffer = nativeIsBuffer || $aRDxW;
module.exports = isBuffer;

});
parcelRequire.register("1L8e3", function(module, exports) {

var $1ebaC = parcelRequire("1ebaC");
/** Detect free variable `self`. */ var $14808faa5f8c8a68$var$freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var $14808faa5f8c8a68$var$root = $1ebaC || $14808faa5f8c8a68$var$freeSelf || Function("return this")();
module.exports = $14808faa5f8c8a68$var$root;

});
parcelRequire.register("1ebaC", function(module, exports) {
/** Detect free variable `global` from Node.js. */ var $0e4fc3715c6357d7$var$freeGlobal = typeof $parcel$global == "object" && $parcel$global && $parcel$global.Object === Object && $parcel$global;
module.exports = $0e4fc3715c6357d7$var$freeGlobal;

});


parcelRequire.register("aRDxW", function(module, exports) {
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
 */ function $7e8d87b30ad52d63$var$stubFalse() {
    return false;
}
module.exports = $7e8d87b30ad52d63$var$stubFalse;

});


parcelRequire.register("c7VG6", function(module, exports) {

var $1ebaC = parcelRequire("1ebaC");
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && $1ebaC.process;
/** Used to access faster Node.js helpers. */ var nodeUtil = function() {
    try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) return types;
        // Legacy `process.binding('util')` for Node.js < 10.
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {}
}();
module.exports = nodeUtil;

});

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
**/ var $f607bceeeb5e2d09$exports = {};
var $0745e7b81ed4912f$exports = {};
var $7e1ecfdf389d92c6$exports = {};
var $7a2b2b2f83ad6f6d$exports = {};
var $ffe5cb85635c33de$exports = {};

var $1L8e3 = parcelRequire("1L8e3");
/** Built-in value references. */ var $ffe5cb85635c33de$var$Symbol = $1L8e3.Symbol;
$ffe5cb85635c33de$exports = $ffe5cb85635c33de$var$Symbol;


var $f8af86708420c403$exports = {};
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ function $f8af86708420c403$var$arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while(++index < length)result[index] = iteratee(array[index], index, array);
    return result;
}
$f8af86708420c403$exports = $f8af86708420c403$var$arrayMap;


var $34086da6808d3266$exports = {};
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
 */ var $34086da6808d3266$var$isArray = Array.isArray;
$34086da6808d3266$exports = $34086da6808d3266$var$isArray;


var $bec3d46dc1b60d6f$exports = {};
var $53ca50918c8f42fc$exports = {};

var $5e2c1a27e94c6356$exports = {};

/** Used for built-in method references. */ var $5e2c1a27e94c6356$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $5e2c1a27e94c6356$var$hasOwnProperty = $5e2c1a27e94c6356$var$objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var $5e2c1a27e94c6356$var$nativeObjectToString = $5e2c1a27e94c6356$var$objectProto.toString;
/** Built-in value references. */ var $5e2c1a27e94c6356$var$symToStringTag = $ffe5cb85635c33de$exports ? $ffe5cb85635c33de$exports.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function $5e2c1a27e94c6356$var$getRawTag(value) {
    var isOwn = $5e2c1a27e94c6356$var$hasOwnProperty.call(value, $5e2c1a27e94c6356$var$symToStringTag), tag = value[$5e2c1a27e94c6356$var$symToStringTag];
    try {
        value[$5e2c1a27e94c6356$var$symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = $5e2c1a27e94c6356$var$nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[$5e2c1a27e94c6356$var$symToStringTag] = tag;
        else delete value[$5e2c1a27e94c6356$var$symToStringTag];
    }
    return result;
}
$5e2c1a27e94c6356$exports = $5e2c1a27e94c6356$var$getRawTag;


var $52d77f049103ac4f$exports = {};
/** Used for built-in method references. */ var $52d77f049103ac4f$var$objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var $52d77f049103ac4f$var$nativeObjectToString = $52d77f049103ac4f$var$objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function $52d77f049103ac4f$var$objectToString(value) {
    return $52d77f049103ac4f$var$nativeObjectToString.call(value);
}
$52d77f049103ac4f$exports = $52d77f049103ac4f$var$objectToString;


/** `Object#toString` result references. */ var $53ca50918c8f42fc$var$nullTag = "[object Null]", $53ca50918c8f42fc$var$undefinedTag = "[object Undefined]";
/** Built-in value references. */ var $53ca50918c8f42fc$var$symToStringTag = $ffe5cb85635c33de$exports ? $ffe5cb85635c33de$exports.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function $53ca50918c8f42fc$var$baseGetTag(value) {
    if (value == null) return value === undefined ? $53ca50918c8f42fc$var$undefinedTag : $53ca50918c8f42fc$var$nullTag;
    return $53ca50918c8f42fc$var$symToStringTag && $53ca50918c8f42fc$var$symToStringTag in Object(value) ? $5e2c1a27e94c6356$exports(value) : $52d77f049103ac4f$exports(value);
}
$53ca50918c8f42fc$exports = $53ca50918c8f42fc$var$baseGetTag;


var $b368e37f27e03050$exports = {};
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
 */ function $b368e37f27e03050$var$isObjectLike(value) {
    return value != null && typeof value == "object";
}
$b368e37f27e03050$exports = $b368e37f27e03050$var$isObjectLike;


/** `Object#toString` result references. */ var $bec3d46dc1b60d6f$var$symbolTag = "[object Symbol]";
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
 */ function $bec3d46dc1b60d6f$var$isSymbol(value) {
    return typeof value == "symbol" || $b368e37f27e03050$exports(value) && $53ca50918c8f42fc$exports(value) == $bec3d46dc1b60d6f$var$symbolTag;
}
$bec3d46dc1b60d6f$exports = $bec3d46dc1b60d6f$var$isSymbol;


/** Used as references for various `Number` constants. */ var $7a2b2b2f83ad6f6d$var$INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */ var $7a2b2b2f83ad6f6d$var$symbolProto = $ffe5cb85635c33de$exports ? $ffe5cb85635c33de$exports.prototype : undefined, $7a2b2b2f83ad6f6d$var$symbolToString = $7a2b2b2f83ad6f6d$var$symbolProto ? $7a2b2b2f83ad6f6d$var$symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */ function $7a2b2b2f83ad6f6d$var$baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == "string") return value;
    if ($34086da6808d3266$exports(value)) // Recursively convert values (susceptible to call stack limits).
    return $f8af86708420c403$exports(value, $7a2b2b2f83ad6f6d$var$baseToString) + "";
    if ($bec3d46dc1b60d6f$exports(value)) return $7a2b2b2f83ad6f6d$var$symbolToString ? $7a2b2b2f83ad6f6d$var$symbolToString.call(value) : "";
    var result = value + "";
    return result == "0" && 1 / value == -$7a2b2b2f83ad6f6d$var$INFINITY ? "-0" : result;
}
$7a2b2b2f83ad6f6d$exports = $7a2b2b2f83ad6f6d$var$baseToString;


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
 */ function $7e1ecfdf389d92c6$var$toString(value) {
    return value == null ? "" : $7a2b2b2f83ad6f6d$exports(value);
}
$7e1ecfdf389d92c6$exports = $7e1ecfdf389d92c6$var$toString;


var $e7ead7ba38a53db3$exports = {};
var $4dfb89d706e7ff0e$exports = {};
var $3b4acbdc98e77351$exports = {};
var $217fc557cb76ee1f$exports = {};
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */ function $217fc557cb76ee1f$var$baseSlice(array, start, end) {
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
$217fc557cb76ee1f$exports = $217fc557cb76ee1f$var$baseSlice;


/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */ function $3b4acbdc98e77351$var$castSlice(array, start, end) {
    var length = array.length;
    end = end === undefined ? length : end;
    return !start && end >= length ? array : $217fc557cb76ee1f$exports(array, start, end);
}
$3b4acbdc98e77351$exports = $3b4acbdc98e77351$var$castSlice;


var $93f3a2ffd335ec40$exports = {};
/** Used to compose unicode character classes. */ var $93f3a2ffd335ec40$var$rsAstralRange = "\ud800-\udfff", $93f3a2ffd335ec40$var$rsComboMarksRange = "\\u0300-\\u036f", $93f3a2ffd335ec40$var$reComboHalfMarksRange = "\\ufe20-\\ufe2f", $93f3a2ffd335ec40$var$rsComboSymbolsRange = "\\u20d0-\\u20ff", $93f3a2ffd335ec40$var$rsComboRange = $93f3a2ffd335ec40$var$rsComboMarksRange + $93f3a2ffd335ec40$var$reComboHalfMarksRange + $93f3a2ffd335ec40$var$rsComboSymbolsRange, $93f3a2ffd335ec40$var$rsVarRange = "\\ufe0e\\ufe0f";
/** Used to compose unicode capture groups. */ var $93f3a2ffd335ec40$var$rsZWJ = "\\u200d";
/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */ var $93f3a2ffd335ec40$var$reHasUnicode = RegExp("[" + $93f3a2ffd335ec40$var$rsZWJ + $93f3a2ffd335ec40$var$rsAstralRange + $93f3a2ffd335ec40$var$rsComboRange + $93f3a2ffd335ec40$var$rsVarRange + "]");
/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */ function $93f3a2ffd335ec40$var$hasUnicode(string) {
    return $93f3a2ffd335ec40$var$reHasUnicode.test(string);
}
$93f3a2ffd335ec40$exports = $93f3a2ffd335ec40$var$hasUnicode;


var $b0e6c43a60da8e0f$exports = {};
var $9e19d9c70f58c6f3$exports = {};
/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function $9e19d9c70f58c6f3$var$asciiToArray(string) {
    return string.split("");
}
$9e19d9c70f58c6f3$exports = $9e19d9c70f58c6f3$var$asciiToArray;



var $0123e61a06da5fd2$exports = {};
/** Used to compose unicode character classes. */ var $0123e61a06da5fd2$var$rsAstralRange = "\ud800-\udfff", $0123e61a06da5fd2$var$rsComboMarksRange = "\\u0300-\\u036f", $0123e61a06da5fd2$var$reComboHalfMarksRange = "\\ufe20-\\ufe2f", $0123e61a06da5fd2$var$rsComboSymbolsRange = "\\u20d0-\\u20ff", $0123e61a06da5fd2$var$rsComboRange = $0123e61a06da5fd2$var$rsComboMarksRange + $0123e61a06da5fd2$var$reComboHalfMarksRange + $0123e61a06da5fd2$var$rsComboSymbolsRange, $0123e61a06da5fd2$var$rsVarRange = "\\ufe0e\\ufe0f";
/** Used to compose unicode capture groups. */ var $0123e61a06da5fd2$var$rsAstral = "[" + $0123e61a06da5fd2$var$rsAstralRange + "]", $0123e61a06da5fd2$var$rsCombo = "[" + $0123e61a06da5fd2$var$rsComboRange + "]", $0123e61a06da5fd2$var$rsFitz = "\ud83c[\udffb-\udfff]", $0123e61a06da5fd2$var$rsModifier = "(?:" + $0123e61a06da5fd2$var$rsCombo + "|" + $0123e61a06da5fd2$var$rsFitz + ")", $0123e61a06da5fd2$var$rsNonAstral = "[^" + $0123e61a06da5fd2$var$rsAstralRange + "]", $0123e61a06da5fd2$var$rsRegional = "(?:\ud83c[\udde6-\uddff]){2}", $0123e61a06da5fd2$var$rsSurrPair = "[\ud800-\udbff][\udc00-\udfff]", $0123e61a06da5fd2$var$rsZWJ = "\\u200d";
/** Used to compose unicode regexes. */ var $0123e61a06da5fd2$var$reOptMod = $0123e61a06da5fd2$var$rsModifier + "?", $0123e61a06da5fd2$var$rsOptVar = "[" + $0123e61a06da5fd2$var$rsVarRange + "]?", $0123e61a06da5fd2$var$rsOptJoin = "(?:" + $0123e61a06da5fd2$var$rsZWJ + "(?:" + [
    $0123e61a06da5fd2$var$rsNonAstral,
    $0123e61a06da5fd2$var$rsRegional,
    $0123e61a06da5fd2$var$rsSurrPair
].join("|") + ")" + $0123e61a06da5fd2$var$rsOptVar + $0123e61a06da5fd2$var$reOptMod + ")*", $0123e61a06da5fd2$var$rsSeq = $0123e61a06da5fd2$var$rsOptVar + $0123e61a06da5fd2$var$reOptMod + $0123e61a06da5fd2$var$rsOptJoin, $0123e61a06da5fd2$var$rsSymbol = "(?:" + [
    $0123e61a06da5fd2$var$rsNonAstral + $0123e61a06da5fd2$var$rsCombo + "?",
    $0123e61a06da5fd2$var$rsCombo,
    $0123e61a06da5fd2$var$rsRegional,
    $0123e61a06da5fd2$var$rsSurrPair,
    $0123e61a06da5fd2$var$rsAstral
].join("|") + ")";
/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */ var $0123e61a06da5fd2$var$reUnicode = RegExp($0123e61a06da5fd2$var$rsFitz + "(?=" + $0123e61a06da5fd2$var$rsFitz + ")|" + $0123e61a06da5fd2$var$rsSymbol + $0123e61a06da5fd2$var$rsSeq, "g");
/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function $0123e61a06da5fd2$var$unicodeToArray(string) {
    return string.match($0123e61a06da5fd2$var$reUnicode) || [];
}
$0123e61a06da5fd2$exports = $0123e61a06da5fd2$var$unicodeToArray;


/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function $b0e6c43a60da8e0f$var$stringToArray(string) {
    return $93f3a2ffd335ec40$exports(string) ? $0123e61a06da5fd2$exports(string) : $9e19d9c70f58c6f3$exports(string);
}
$b0e6c43a60da8e0f$exports = $b0e6c43a60da8e0f$var$stringToArray;



/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */ function $4dfb89d706e7ff0e$var$createCaseFirst(methodName) {
    return function(string) {
        string = $7e1ecfdf389d92c6$exports(string);
        var strSymbols = $93f3a2ffd335ec40$exports(string) ? $b0e6c43a60da8e0f$exports(string) : undefined;
        var chr = strSymbols ? strSymbols[0] : string.charAt(0);
        var trailing = strSymbols ? $3b4acbdc98e77351$exports(strSymbols, 1).join("") : string.slice(1);
        return chr[methodName]() + trailing;
    };
}
$4dfb89d706e7ff0e$exports = $4dfb89d706e7ff0e$var$createCaseFirst;


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
 */ var $e7ead7ba38a53db3$var$upperFirst = $4dfb89d706e7ff0e$exports("toUpperCase");
$e7ead7ba38a53db3$exports = $e7ead7ba38a53db3$var$upperFirst;


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
 */ function $0745e7b81ed4912f$var$capitalize(string) {
    return $e7ead7ba38a53db3$exports($7e1ecfdf389d92c6$exports(string).toLowerCase());
}
$0745e7b81ed4912f$exports = $0745e7b81ed4912f$var$capitalize;


var $05f54b383665cf57$exports = {};
var $1502142813b4d9a5$exports = {};
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
 */ function $1502142813b4d9a5$var$arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1, length = array == null ? 0 : array.length;
    if (initAccum && length) accumulator = array[++index];
    while(++index < length)accumulator = iteratee(accumulator, array[index], index, array);
    return accumulator;
}
$1502142813b4d9a5$exports = $1502142813b4d9a5$var$arrayReduce;


var $d655d6225e4a8e0f$exports = {};
var $e51659915f7a5703$exports = {};
var $b41e0ab485371d59$exports = {};
/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */ function $b41e0ab485371d59$var$basePropertyOf(object) {
    return function(key) {
        return object == null ? undefined : object[key];
    };
}
$b41e0ab485371d59$exports = $b41e0ab485371d59$var$basePropertyOf;


/** Used to map Latin Unicode letters to basic Latin letters. */ var $e51659915f7a5703$var$deburredLetters = {
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
 */ var $e51659915f7a5703$var$deburrLetter = $b41e0ab485371d59$exports($e51659915f7a5703$var$deburredLetters);
$e51659915f7a5703$exports = $e51659915f7a5703$var$deburrLetter;



/** Used to match Latin Unicode letters (excluding mathematical operators). */ var $d655d6225e4a8e0f$var$reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
/** Used to compose unicode character classes. */ var $d655d6225e4a8e0f$var$rsComboMarksRange = "\\u0300-\\u036f", $d655d6225e4a8e0f$var$reComboHalfMarksRange = "\\ufe20-\\ufe2f", $d655d6225e4a8e0f$var$rsComboSymbolsRange = "\\u20d0-\\u20ff", $d655d6225e4a8e0f$var$rsComboRange = $d655d6225e4a8e0f$var$rsComboMarksRange + $d655d6225e4a8e0f$var$reComboHalfMarksRange + $d655d6225e4a8e0f$var$rsComboSymbolsRange;
/** Used to compose unicode capture groups. */ var $d655d6225e4a8e0f$var$rsCombo = "[" + $d655d6225e4a8e0f$var$rsComboRange + "]";
/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */ var $d655d6225e4a8e0f$var$reComboMark = RegExp($d655d6225e4a8e0f$var$rsCombo, "g");
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
 */ function $d655d6225e4a8e0f$var$deburr(string) {
    string = $7e1ecfdf389d92c6$exports(string);
    return string && string.replace($d655d6225e4a8e0f$var$reLatin, $e51659915f7a5703$exports).replace($d655d6225e4a8e0f$var$reComboMark, "");
}
$d655d6225e4a8e0f$exports = $d655d6225e4a8e0f$var$deburr;


var $d9fa79f409c33b58$exports = {};
var $d14dc3c60062e2b2$exports = {};
/** Used to match words composed of alphanumeric characters. */ var $d14dc3c60062e2b2$var$reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */ function $d14dc3c60062e2b2$var$asciiWords(string) {
    return string.match($d14dc3c60062e2b2$var$reAsciiWord) || [];
}
$d14dc3c60062e2b2$exports = $d14dc3c60062e2b2$var$asciiWords;


var $fc2ee8078f991d8f$exports = {};
/** Used to detect strings that need a more robust regexp to match words. */ var $fc2ee8078f991d8f$var$reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */ function $fc2ee8078f991d8f$var$hasUnicodeWord(string) {
    return $fc2ee8078f991d8f$var$reHasUnicodeWord.test(string);
}
$fc2ee8078f991d8f$exports = $fc2ee8078f991d8f$var$hasUnicodeWord;



var $77e592970b837f45$exports = {};
/** Used to compose unicode character classes. */ var $77e592970b837f45$var$rsAstralRange = "\ud800-\udfff", $77e592970b837f45$var$rsComboMarksRange = "\\u0300-\\u036f", $77e592970b837f45$var$reComboHalfMarksRange = "\\ufe20-\\ufe2f", $77e592970b837f45$var$rsComboSymbolsRange = "\\u20d0-\\u20ff", $77e592970b837f45$var$rsComboRange = $77e592970b837f45$var$rsComboMarksRange + $77e592970b837f45$var$reComboHalfMarksRange + $77e592970b837f45$var$rsComboSymbolsRange, $77e592970b837f45$var$rsDingbatRange = "\\u2700-\\u27bf", $77e592970b837f45$var$rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", $77e592970b837f45$var$rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", $77e592970b837f45$var$rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", $77e592970b837f45$var$rsPunctuationRange = "\\u2000-\\u206f", $77e592970b837f45$var$rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", $77e592970b837f45$var$rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", $77e592970b837f45$var$rsVarRange = "\\ufe0e\\ufe0f", $77e592970b837f45$var$rsBreakRange = $77e592970b837f45$var$rsMathOpRange + $77e592970b837f45$var$rsNonCharRange + $77e592970b837f45$var$rsPunctuationRange + $77e592970b837f45$var$rsSpaceRange;
/** Used to compose unicode capture groups. */ var $77e592970b837f45$var$rsApos = "['’]", $77e592970b837f45$var$rsBreak = "[" + $77e592970b837f45$var$rsBreakRange + "]", $77e592970b837f45$var$rsCombo = "[" + $77e592970b837f45$var$rsComboRange + "]", $77e592970b837f45$var$rsDigits = "\\d+", $77e592970b837f45$var$rsDingbat = "[" + $77e592970b837f45$var$rsDingbatRange + "]", $77e592970b837f45$var$rsLower = "[" + $77e592970b837f45$var$rsLowerRange + "]", $77e592970b837f45$var$rsMisc = "[^" + $77e592970b837f45$var$rsAstralRange + $77e592970b837f45$var$rsBreakRange + $77e592970b837f45$var$rsDigits + $77e592970b837f45$var$rsDingbatRange + $77e592970b837f45$var$rsLowerRange + $77e592970b837f45$var$rsUpperRange + "]", $77e592970b837f45$var$rsFitz = "\ud83c[\udffb-\udfff]", $77e592970b837f45$var$rsModifier = "(?:" + $77e592970b837f45$var$rsCombo + "|" + $77e592970b837f45$var$rsFitz + ")", $77e592970b837f45$var$rsNonAstral = "[^" + $77e592970b837f45$var$rsAstralRange + "]", $77e592970b837f45$var$rsRegional = "(?:\ud83c[\udde6-\uddff]){2}", $77e592970b837f45$var$rsSurrPair = "[\ud800-\udbff][\udc00-\udfff]", $77e592970b837f45$var$rsUpper = "[" + $77e592970b837f45$var$rsUpperRange + "]", $77e592970b837f45$var$rsZWJ = "\\u200d";
/** Used to compose unicode regexes. */ var $77e592970b837f45$var$rsMiscLower = "(?:" + $77e592970b837f45$var$rsLower + "|" + $77e592970b837f45$var$rsMisc + ")", $77e592970b837f45$var$rsMiscUpper = "(?:" + $77e592970b837f45$var$rsUpper + "|" + $77e592970b837f45$var$rsMisc + ")", $77e592970b837f45$var$rsOptContrLower = "(?:" + $77e592970b837f45$var$rsApos + "(?:d|ll|m|re|s|t|ve))?", $77e592970b837f45$var$rsOptContrUpper = "(?:" + $77e592970b837f45$var$rsApos + "(?:D|LL|M|RE|S|T|VE))?", $77e592970b837f45$var$reOptMod = $77e592970b837f45$var$rsModifier + "?", $77e592970b837f45$var$rsOptVar = "[" + $77e592970b837f45$var$rsVarRange + "]?", $77e592970b837f45$var$rsOptJoin = "(?:" + $77e592970b837f45$var$rsZWJ + "(?:" + [
    $77e592970b837f45$var$rsNonAstral,
    $77e592970b837f45$var$rsRegional,
    $77e592970b837f45$var$rsSurrPair
].join("|") + ")" + $77e592970b837f45$var$rsOptVar + $77e592970b837f45$var$reOptMod + ")*", $77e592970b837f45$var$rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", $77e592970b837f45$var$rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", $77e592970b837f45$var$rsSeq = $77e592970b837f45$var$rsOptVar + $77e592970b837f45$var$reOptMod + $77e592970b837f45$var$rsOptJoin, $77e592970b837f45$var$rsEmoji = "(?:" + [
    $77e592970b837f45$var$rsDingbat,
    $77e592970b837f45$var$rsRegional,
    $77e592970b837f45$var$rsSurrPair
].join("|") + ")" + $77e592970b837f45$var$rsSeq;
/** Used to match complex or compound words. */ var $77e592970b837f45$var$reUnicodeWord = RegExp([
    $77e592970b837f45$var$rsUpper + "?" + $77e592970b837f45$var$rsLower + "+" + $77e592970b837f45$var$rsOptContrLower + "(?=" + [
        $77e592970b837f45$var$rsBreak,
        $77e592970b837f45$var$rsUpper,
        "$"
    ].join("|") + ")",
    $77e592970b837f45$var$rsMiscUpper + "+" + $77e592970b837f45$var$rsOptContrUpper + "(?=" + [
        $77e592970b837f45$var$rsBreak,
        $77e592970b837f45$var$rsUpper + $77e592970b837f45$var$rsMiscLower,
        "$"
    ].join("|") + ")",
    $77e592970b837f45$var$rsUpper + "?" + $77e592970b837f45$var$rsMiscLower + "+" + $77e592970b837f45$var$rsOptContrLower,
    $77e592970b837f45$var$rsUpper + "+" + $77e592970b837f45$var$rsOptContrUpper,
    $77e592970b837f45$var$rsOrdUpper,
    $77e592970b837f45$var$rsOrdLower,
    $77e592970b837f45$var$rsDigits,
    $77e592970b837f45$var$rsEmoji
].join("|"), "g");
/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */ function $77e592970b837f45$var$unicodeWords(string) {
    return string.match($77e592970b837f45$var$reUnicodeWord) || [];
}
$77e592970b837f45$exports = $77e592970b837f45$var$unicodeWords;


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
 */ function $d9fa79f409c33b58$var$words(string, pattern, guard) {
    string = $7e1ecfdf389d92c6$exports(string);
    pattern = guard ? undefined : pattern;
    if (pattern === undefined) return $fc2ee8078f991d8f$exports(string) ? $77e592970b837f45$exports(string) : $d14dc3c60062e2b2$exports(string);
    return string.match(pattern) || [];
}
$d9fa79f409c33b58$exports = $d9fa79f409c33b58$var$words;


/** Used to compose unicode capture groups. */ var $05f54b383665cf57$var$rsApos = "['’]";
/** Used to match apostrophes. */ var $05f54b383665cf57$var$reApos = RegExp($05f54b383665cf57$var$rsApos, "g");
/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */ function $05f54b383665cf57$var$createCompounder(callback) {
    return function(string) {
        return $1502142813b4d9a5$exports($d9fa79f409c33b58$exports($d655d6225e4a8e0f$exports(string).replace($05f54b383665cf57$var$reApos, "")), callback, "");
    };
}
$05f54b383665cf57$exports = $05f54b383665cf57$var$createCompounder;


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
 */ var $f607bceeeb5e2d09$var$camelCase = $05f54b383665cf57$exports(function(result, word, index) {
    word = word.toLowerCase();
    return result + (index ? $0745e7b81ed4912f$exports(word) : word);
});
$f607bceeeb5e2d09$exports = $f607bceeeb5e2d09$var$camelCase;


const $6f44ddd09e194478$var$validators = {};
const $6f44ddd09e194478$export$636d763ed7be9e97 = (name, fn)=>{
    $6f44ddd09e194478$var$validators[name] = fn;
};
$6f44ddd09e194478$export$636d763ed7be9e97("isDefined", (arg)=>{
    return arg !== undefined;
});
$6f44ddd09e194478$export$636d763ed7be9e97("isUnDefined", (arg)=>{
    return arg === undefined;
});
$6f44ddd09e194478$export$636d763ed7be9e97("isNull", (arg)=>{
    return arg === null;
});
$6f44ddd09e194478$export$636d763ed7be9e97("isElement", (arg)=>{
    return arg && (arg instanceof Element || arg instanceof Window);
});
$6f44ddd09e194478$export$636d763ed7be9e97("isEventTarget", (arg)=>{
    return arg && arg instanceof EventTarget;
});
$6f44ddd09e194478$export$636d763ed7be9e97("isString", (arg)=>{
    return arg && (typeof arg === "string" || arg instanceof String);
});
$6f44ddd09e194478$export$636d763ed7be9e97("isArray", (arg)=>{
    return arg && arg instanceof Array;
});
$6f44ddd09e194478$export$636d763ed7be9e97("notEmpty", (arg)=>{
    return arg instanceof Array ? arg.length !== 0 : arg !== "";
});
$6f44ddd09e194478$export$636d763ed7be9e97("isEmpty", (arg)=>{
    return arg === undefined || !arg || (arg instanceof Array ? arg.length === 0 : arg === "");
});
$6f44ddd09e194478$export$636d763ed7be9e97("isObject", (arg)=>{
    return arg && arg instanceof Object;
});
$6f44ddd09e194478$export$636d763ed7be9e97("isFunction", (arg)=>{
    return arg && typeof arg === "function";
});
// tests is an array of validators which must be all evaluate to true
// if top level element is an sub array then the sub array is evaluated as an 'or'
// ['this','and',['either','or']]
const $6f44ddd09e194478$export$a22775fa5e2eebd9 = (param, arg, tests)=>{
    // console.log(param, arg)
    const allOf = tests.map((test)=>{
        if (test instanceof Array) {
            const anyOf = test.map((orTest)=>{
                return $6f44ddd09e194478$var$validators[orTest] && $6f44ddd09e194478$var$validators[orTest](arg);
            });
            return anyOf.indexOf(true) !== -1;
        } else return $6f44ddd09e194478$var$validators[test] && $6f44ddd09e194478$var$validators[test](arg);
    });
    if (allOf.indexOf(false) !== -1) throw new Error("call to " + param + " invalid value: " + arg + " " + tests, 0 + allOf);
};


const $d6606c57579c6e5f$export$8350ba437fdadadb = new WeakMap();
const $d6606c57579c6e5f$var$hasClass = (element, cssClass)=>{
    (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("hasClass element", element, [
        "isDefined",
        "isElement"
    ]);
    (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("hasClass cssClass", cssClass, [
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
const $d6606c57579c6e5f$var$addClass = (element, addClasses)=>{
    (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("addClass element", element, [
        "isDefined",
        "isElement"
    ]);
    (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("addClass addClasses", addClasses, [
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
        if (!$d6606c57579c6e5f$var$hasClass(element, c)) element.classList.add(c);
    });
};
// removeClasses can be:
// a string 'someclass'
// a list delimited by comma or space 'class1 class3 class4'
// an array ['class1','class2']
const $d6606c57579c6e5f$var$removeClass = (element, removeClasses)=>{
    (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("removeClass element", element, [
        "isDefined",
        "isElement"
    ]);
    (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("removeClass removeClasses", removeClasses, [
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
        if ($d6606c57579c6e5f$var$hasClass(element, c)) element.classList.remove(c);
    });
};
const $d6606c57579c6e5f$var$isVisible = (element)=>{
    (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("isVisible element", element, [
        "isDefined",
        "isElement"
    ]);
    return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
};
const $d6606c57579c6e5f$var$inViewPort = (element, container = window)=>{
    (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("inViewPort element", element, [
        "isDefined",
        "isElement"
    ]);
    const rect = element.getBoundingClientRect();
    const visible = $d6606c57579c6e5f$var$isVisible(element);
    const aboveTheTop = rect.bottom < 0;
    let belowTheFold;
    if (container.self === window) belowTheFold = rect.top > (window.innerHeight || document.documentElement.clientHeight);
    else belowTheFold = rect.top > container.clientHeight;
    return visible && !belowTheFold && !aboveTheTop;
};
/*
	element: element to apply to
	css: JSON object with properties in kebab-case or camelCase (or even in snake_case and seperate words)
*/ const $d6606c57579c6e5f$var$css = (element, css)=>{
    (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("css element", element, [
        "isDefined",
        "isElement"
    ]);
    (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("css css", css, [
        "isDefined",
        [
            "isObject"
        ]
    ]);
    for(const prop in css)if (Object.prototype.hasOwnProperty.call(css, prop)) {
        const key = (0, (/*@__PURE__*/$parcel$interopDefault($f607bceeeb5e2d09$exports)))(prop);
        element.style[key] = css[prop] !== null ? css[prop] : null;
    }
};
const $d6606c57579c6e5f$var$setMetaData = (element, k, v)=>{
    (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("setMetaData element", element, [
        "isDefined",
        "isElement"
    ]);
    (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("setMetaData k", k, [
        "isDefined",
        "isString"
    ]);
    (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("setMetaData v", v, [
        [
            "isUnDefined",
            "isNull",
            "isString",
            "isObject"
        ]
    ]);
    const data = $d6606c57579c6e5f$export$8350ba437fdadadb.get(element) || {};
    if (v) data[k] = v;
    else delete data[k];
    $d6606c57579c6e5f$export$8350ba437fdadadb.set(element, data);
};
const $d6606c57579c6e5f$var$getMetaData = (element, k)=>{
    (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("getMetaData element", element, [
        "isDefined",
        "isElement"
    ]);
    (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("getMetaData k", k, [
        "isDefined",
        "isString"
    ]);
    const data = $d6606c57579c6e5f$export$8350ba437fdadadb.get(element) || {};
    if (k) return data[k];
    else return data;
};
const $d6606c57579c6e5f$var$on = function(uid, container, events, selector, fn, options, once) {
    // selector is optional
    if (typeof selector === "function") {
        once = options;
        options = fn;
        fn = selector;
        selector = undefined;
    }
    (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("on uid", uid, [
        "isDefined",
        "notEmpty"
    ]);
    (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("on container", container, [
        "isDefined",
        "isEventTarget"
    ]);
    (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("on events", events, [
        "isDefined",
        "isString"
    ]);
    (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("on fn", fn, [
        "isDefined",
        "isFunction"
    ]);
    (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("on selector", selector, [
        [
            "isEmpty",
            "isString"
        ]
    ]);
    const k = "on:" + uid + "-" + events + "-" + selector;
    if ($d6606c57579c6e5f$var$getMetaData(container, k)) {
        console.error("Error: Sargasso utils.on: duplicate event handler specification. %o %s", container, k);
        return;
    }
    const handler = (e)=>{
        if (once) $d6606c57579c6e5f$var$off(uid, container, events, selector);
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
    $d6606c57579c6e5f$var$setMetaData(container, k, data);
    events.split(/[\s,]+/).forEach((evt)=>{
        container.addEventListener(evt.trim(), data.fn, data.options);
    });
};
const $d6606c57579c6e5f$var$off = function(uid, container, events, selector) {
    (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("off uid", uid, [
        "isDefined",
        "notEmpty"
    ]);
    (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("off container", container, [
        "isDefined",
        "isEventTarget"
    ]);
    (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("off events", events, [
        "isDefined",
        "isString"
    ]);
    (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("off selector", selector, [
        [
            "isEmpty",
            "isString"
        ]
    ]);
    const k = "on:" + uid + "-" + events + "-" + selector;
    const data = $d6606c57579c6e5f$var$getMetaData(container, k);
    if (data) {
        events.split(/[\s,]+/).forEach((evt)=>{
            container.removeEventListener(evt.trim(), data.fn, data.options);
        });
        $d6606c57579c6e5f$var$setMetaData(container, k);
    }
};
// remove all (on,once) event handlers for element
const $d6606c57579c6e5f$var$offAll = function(container) {
    (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("offAll container", container, [
        "isDefined",
        "isEventTarget"
    ]);
    const data = $d6606c57579c6e5f$export$8350ba437fdadadb.get(container) || {};
    const handlers = [];
    for(const k in data){
        if (Object.prototype.hasOwnProperty.call(data, k)) {
            if (k.match(/^on:/)) handlers.push(k);
        }
    }
    handlers.forEach((k)=>{
        $d6606c57579c6e5f$var$off(data[k].uid, container, data[k].events, data[k].selector);
    });
};
const $d6606c57579c6e5f$var$once = function(uid, container, events, selector, fn, options) {
    if (typeof selector === "function") {
        options = fn;
        fn = selector;
        selector = undefined;
    }
    $d6606c57579c6e5f$var$on(uid, container, events, selector, fn, options, true);
};
const $d6606c57579c6e5f$export$6f53260fffa88f1c = {
    hasClass: $d6606c57579c6e5f$var$hasClass,
    addClass: $d6606c57579c6e5f$var$addClass,
    removeClass: $d6606c57579c6e5f$var$removeClass,
    isVisible: $d6606c57579c6e5f$var$isVisible,
    inViewPort: $d6606c57579c6e5f$var$inViewPort,
    setCSS: $d6606c57579c6e5f$var$css,
    setMetaData: $d6606c57579c6e5f$var$setMetaData,
    getMetaData: $d6606c57579c6e5f$var$getMetaData,
    on: $d6606c57579c6e5f$var$on,
    off: $d6606c57579c6e5f$var$off,
    once: $d6606c57579c6e5f$var$once,
    offAll: $d6606c57579c6e5f$var$offAll
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
var $9fe0242a38a556ef$exports = {};
var $816eb14f7bbed98c$exports = {};
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
 */ function $816eb14f7bbed98c$var$isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
}
$816eb14f7bbed98c$exports = $816eb14f7bbed98c$var$isObject;


var $9118210d01d43317$exports = {};

var $1L8e3 = parcelRequire("1L8e3");
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
 */ var $9118210d01d43317$var$now = function() {
    return $1L8e3.Date.now();
};
$9118210d01d43317$exports = $9118210d01d43317$var$now;


var $d26967c9d79595a6$exports = {};
var $f7bf55f7842b5f46$exports = {};
var $4acab59e3676128a$exports = {};
/** Used to match a single whitespace character. */ var $4acab59e3676128a$var$reWhitespace = /\s/;
/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */ function $4acab59e3676128a$var$trimmedEndIndex(string) {
    var index = string.length;
    while(index-- && $4acab59e3676128a$var$reWhitespace.test(string.charAt(index)));
    return index;
}
$4acab59e3676128a$exports = $4acab59e3676128a$var$trimmedEndIndex;


/** Used to match leading whitespace. */ var $f7bf55f7842b5f46$var$reTrimStart = /^\s+/;
/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */ function $f7bf55f7842b5f46$var$baseTrim(string) {
    return string ? string.slice(0, $4acab59e3676128a$exports(string) + 1).replace($f7bf55f7842b5f46$var$reTrimStart, "") : string;
}
$f7bf55f7842b5f46$exports = $f7bf55f7842b5f46$var$baseTrim;




/** Used as references for various `Number` constants. */ var $d26967c9d79595a6$var$NAN = 0 / 0;
/** Used to detect bad signed hexadecimal string values. */ var $d26967c9d79595a6$var$reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var $d26967c9d79595a6$var$reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var $d26967c9d79595a6$var$reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var $d26967c9d79595a6$var$freeParseInt = parseInt;
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
 */ function $d26967c9d79595a6$var$toNumber(value) {
    if (typeof value == "number") return value;
    if ($bec3d46dc1b60d6f$exports(value)) return $d26967c9d79595a6$var$NAN;
    if ($816eb14f7bbed98c$exports(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = $816eb14f7bbed98c$exports(other) ? other + "" : other;
    }
    if (typeof value != "string") return value === 0 ? value : +value;
    value = $f7bf55f7842b5f46$exports(value);
    var isBinary = $d26967c9d79595a6$var$reIsBinary.test(value);
    return isBinary || $d26967c9d79595a6$var$reIsOctal.test(value) ? $d26967c9d79595a6$var$freeParseInt(value.slice(2), isBinary ? 2 : 8) : $d26967c9d79595a6$var$reIsBadHex.test(value) ? $d26967c9d79595a6$var$NAN : +value;
}
$d26967c9d79595a6$exports = $d26967c9d79595a6$var$toNumber;


/** Error message constants. */ var $9fe0242a38a556ef$var$FUNC_ERROR_TEXT = "Expected a function";
/* Built-in method references for those with the same name as other `lodash` methods. */ var $9fe0242a38a556ef$var$nativeMax = Math.max, $9fe0242a38a556ef$var$nativeMin = Math.min;
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
 */ function $9fe0242a38a556ef$var$debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") throw new TypeError($9fe0242a38a556ef$var$FUNC_ERROR_TEXT);
    wait = $d26967c9d79595a6$exports(wait) || 0;
    if ($816eb14f7bbed98c$exports(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? $9fe0242a38a556ef$var$nativeMax($d26967c9d79595a6$exports(options.maxWait) || 0, wait) : maxWait;
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
        return maxing ? $9fe0242a38a556ef$var$nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = $9118210d01d43317$exports();
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
        return timerId === undefined ? result : trailingEdge($9118210d01d43317$exports());
    }
    function debounced() {
        var time = $9118210d01d43317$exports(), isInvoking = shouldInvoke(time);
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
$9fe0242a38a556ef$exports = $9fe0242a38a556ef$var$debounce;


/**
	ObservableObject

	Build an obserbable object

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020-2023 Michael Rhodes
**/ var $27b078180f7cecc3$exports = {};
var $af0478bf0a744a07$exports = {};
var $cbeb2879b695ddbc$exports = {};
var $db9f4a25626a9022$exports = {};
var $befa5ac17bc7d29a$exports = {};
var $2467bc0a63f137bd$exports = {};
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function $2467bc0a63f137bd$var$listCacheClear() {
    this.__data__ = [];
    this.size = 0;
}
$2467bc0a63f137bd$exports = $2467bc0a63f137bd$var$listCacheClear;


var $311c1cc022c49f6a$exports = {};
var $e411561080831e50$exports = {};
var $5f5d3f09cce3807e$exports = {};
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
 */ function $5f5d3f09cce3807e$var$eq(value, other) {
    return value === other || value !== value && other !== other;
}
$5f5d3f09cce3807e$exports = $5f5d3f09cce3807e$var$eq;


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function $e411561080831e50$var$assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if ($5f5d3f09cce3807e$exports(array[length][0], key)) return length;
    }
    return -1;
}
$e411561080831e50$exports = $e411561080831e50$var$assocIndexOf;


/** Used for built-in method references. */ var $311c1cc022c49f6a$var$arrayProto = Array.prototype;
/** Built-in value references. */ var $311c1cc022c49f6a$var$splice = $311c1cc022c49f6a$var$arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function $311c1cc022c49f6a$var$listCacheDelete(key) {
    var data = this.__data__, index = $e411561080831e50$exports(data, key);
    if (index < 0) return false;
    var lastIndex = data.length - 1;
    if (index == lastIndex) data.pop();
    else $311c1cc022c49f6a$var$splice.call(data, index, 1);
    --this.size;
    return true;
}
$311c1cc022c49f6a$exports = $311c1cc022c49f6a$var$listCacheDelete;


var $864f87a7fda9dcd7$exports = {};

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function $864f87a7fda9dcd7$var$listCacheGet(key) {
    var data = this.__data__, index = $e411561080831e50$exports(data, key);
    return index < 0 ? undefined : data[index][1];
}
$864f87a7fda9dcd7$exports = $864f87a7fda9dcd7$var$listCacheGet;


var $ea469776b64ae772$exports = {};

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function $ea469776b64ae772$var$listCacheHas(key) {
    return $e411561080831e50$exports(this.__data__, key) > -1;
}
$ea469776b64ae772$exports = $ea469776b64ae772$var$listCacheHas;


var $3109520e431d9815$exports = {};

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function $3109520e431d9815$var$listCacheSet(key, value) {
    var data = this.__data__, index = $e411561080831e50$exports(data, key);
    if (index < 0) {
        ++this.size;
        data.push([
            key,
            value
        ]);
    } else data[index][1] = value;
    return this;
}
$3109520e431d9815$exports = $3109520e431d9815$var$listCacheSet;


/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function $befa5ac17bc7d29a$var$ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `ListCache`.
$befa5ac17bc7d29a$var$ListCache.prototype.clear = $2467bc0a63f137bd$exports;
$befa5ac17bc7d29a$var$ListCache.prototype["delete"] = $311c1cc022c49f6a$exports;
$befa5ac17bc7d29a$var$ListCache.prototype.get = $864f87a7fda9dcd7$exports;
$befa5ac17bc7d29a$var$ListCache.prototype.has = $ea469776b64ae772$exports;
$befa5ac17bc7d29a$var$ListCache.prototype.set = $3109520e431d9815$exports;
$befa5ac17bc7d29a$exports = $befa5ac17bc7d29a$var$ListCache;


var $cc60611b30e8e31c$exports = {};

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */ function $cc60611b30e8e31c$var$stackClear() {
    this.__data__ = new $befa5ac17bc7d29a$exports;
    this.size = 0;
}
$cc60611b30e8e31c$exports = $cc60611b30e8e31c$var$stackClear;


var $face63b26bdedd60$exports = {};
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function $face63b26bdedd60$var$stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
}
$face63b26bdedd60$exports = $face63b26bdedd60$var$stackDelete;


var $d7803b2d82266dcd$exports = {};
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function $d7803b2d82266dcd$var$stackGet(key) {
    return this.__data__.get(key);
}
$d7803b2d82266dcd$exports = $d7803b2d82266dcd$var$stackGet;


var $9f0a792355e2347e$exports = {};
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function $9f0a792355e2347e$var$stackHas(key) {
    return this.__data__.has(key);
}
$9f0a792355e2347e$exports = $9f0a792355e2347e$var$stackHas;


var $c5f16e543d471460$exports = {};

var $ac35e0129841718c$exports = {};
var $e147fdecd23b4e69$exports = {};
var $56556b6db65e376c$exports = {};
var $8dab48d4f627075c$exports = {};


/** `Object#toString` result references. */ var $8dab48d4f627075c$var$asyncTag = "[object AsyncFunction]", $8dab48d4f627075c$var$funcTag = "[object Function]", $8dab48d4f627075c$var$genTag = "[object GeneratorFunction]", $8dab48d4f627075c$var$proxyTag = "[object Proxy]";
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
 */ function $8dab48d4f627075c$var$isFunction(value) {
    if (!$816eb14f7bbed98c$exports(value)) return false;
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = $53ca50918c8f42fc$exports(value);
    return tag == $8dab48d4f627075c$var$funcTag || tag == $8dab48d4f627075c$var$genTag || tag == $8dab48d4f627075c$var$asyncTag || tag == $8dab48d4f627075c$var$proxyTag;
}
$8dab48d4f627075c$exports = $8dab48d4f627075c$var$isFunction;


var $922735684a48c520$exports = {};
var $d69990299823c247$exports = {};

var $1L8e3 = parcelRequire("1L8e3");
/** Used to detect overreaching core-js shims. */ var $d69990299823c247$var$coreJsData = $1L8e3["__core-js_shared__"];
$d69990299823c247$exports = $d69990299823c247$var$coreJsData;


/** Used to detect methods masquerading as native. */ var $922735684a48c520$var$maskSrcKey = function() {
    var uid = /[^.]+$/.exec($d69990299823c247$exports && $d69990299823c247$exports.keys && $d69990299823c247$exports.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function $922735684a48c520$var$isMasked(func) {
    return !!$922735684a48c520$var$maskSrcKey && $922735684a48c520$var$maskSrcKey in func;
}
$922735684a48c520$exports = $922735684a48c520$var$isMasked;



var $1e323287d9dee311$exports = {};
/** Used for built-in method references. */ var $1e323287d9dee311$var$funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */ var $1e323287d9dee311$var$funcToString = $1e323287d9dee311$var$funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */ function $1e323287d9dee311$var$toSource(func) {
    if (func != null) {
        try {
            return $1e323287d9dee311$var$funcToString.call(func);
        } catch (e) {}
        try {
            return func + "";
        } catch (e1) {}
    }
    return "";
}
$1e323287d9dee311$exports = $1e323287d9dee311$var$toSource;


/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var $56556b6db65e376c$var$reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */ var $56556b6db65e376c$var$reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */ var $56556b6db65e376c$var$funcProto = Function.prototype, $56556b6db65e376c$var$objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var $56556b6db65e376c$var$funcToString = $56556b6db65e376c$var$funcProto.toString;
/** Used to check objects for own properties. */ var $56556b6db65e376c$var$hasOwnProperty = $56556b6db65e376c$var$objectProto.hasOwnProperty;
/** Used to detect if a method is native. */ var $56556b6db65e376c$var$reIsNative = RegExp("^" + $56556b6db65e376c$var$funcToString.call($56556b6db65e376c$var$hasOwnProperty).replace($56556b6db65e376c$var$reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function $56556b6db65e376c$var$baseIsNative(value) {
    if (!$816eb14f7bbed98c$exports(value) || $922735684a48c520$exports(value)) return false;
    var pattern = $8dab48d4f627075c$exports(value) ? $56556b6db65e376c$var$reIsNative : $56556b6db65e376c$var$reIsHostCtor;
    return pattern.test($1e323287d9dee311$exports(value));
}
$56556b6db65e376c$exports = $56556b6db65e376c$var$baseIsNative;


var $701faa75b360e2a3$exports = {};
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function $701faa75b360e2a3$var$getValue(object, key) {
    return object == null ? undefined : object[key];
}
$701faa75b360e2a3$exports = $701faa75b360e2a3$var$getValue;


/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function $e147fdecd23b4e69$var$getNative(object, key) {
    var value = $701faa75b360e2a3$exports(object, key);
    return $56556b6db65e376c$exports(value) ? value : undefined;
}
$e147fdecd23b4e69$exports = $e147fdecd23b4e69$var$getNative;



var $1L8e3 = parcelRequire("1L8e3");
/* Built-in method references that are verified to be native. */ var $ac35e0129841718c$var$Map = $e147fdecd23b4e69$exports($1L8e3, "Map");
$ac35e0129841718c$exports = $ac35e0129841718c$var$Map;


var $91f3b3dcdbb16fef$exports = {};
var $bc6818500c3ac2ae$exports = {};
var $65d79b91bc6e085b$exports = {};
var $823eca4cf944aae4$exports = {};
var $1ef3728df89a8e7b$exports = {};

/* Built-in method references that are verified to be native. */ var $1ef3728df89a8e7b$var$nativeCreate = $e147fdecd23b4e69$exports(Object, "create");
$1ef3728df89a8e7b$exports = $1ef3728df89a8e7b$var$nativeCreate;


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function $823eca4cf944aae4$var$hashClear() {
    this.__data__ = $1ef3728df89a8e7b$exports ? $1ef3728df89a8e7b$exports(null) : {};
    this.size = 0;
}
$823eca4cf944aae4$exports = $823eca4cf944aae4$var$hashClear;


var $539e82209077e9d6$exports = {};
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function $539e82209077e9d6$var$hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
}
$539e82209077e9d6$exports = $539e82209077e9d6$var$hashDelete;


var $3e56a861b4e1a8bc$exports = {};

/** Used to stand-in for `undefined` hash values. */ var $3e56a861b4e1a8bc$var$HASH_UNDEFINED = "__lodash_hash_undefined__";
/** Used for built-in method references. */ var $3e56a861b4e1a8bc$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $3e56a861b4e1a8bc$var$hasOwnProperty = $3e56a861b4e1a8bc$var$objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function $3e56a861b4e1a8bc$var$hashGet(key) {
    var data = this.__data__;
    if ($1ef3728df89a8e7b$exports) {
        var result = data[key];
        return result === $3e56a861b4e1a8bc$var$HASH_UNDEFINED ? undefined : result;
    }
    return $3e56a861b4e1a8bc$var$hasOwnProperty.call(data, key) ? data[key] : undefined;
}
$3e56a861b4e1a8bc$exports = $3e56a861b4e1a8bc$var$hashGet;


var $203a84547f7bfd91$exports = {};

/** Used for built-in method references. */ var $203a84547f7bfd91$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $203a84547f7bfd91$var$hasOwnProperty = $203a84547f7bfd91$var$objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function $203a84547f7bfd91$var$hashHas(key) {
    var data = this.__data__;
    return $1ef3728df89a8e7b$exports ? data[key] !== undefined : $203a84547f7bfd91$var$hasOwnProperty.call(data, key);
}
$203a84547f7bfd91$exports = $203a84547f7bfd91$var$hashHas;


var $888bbdf5456eb395$exports = {};

/** Used to stand-in for `undefined` hash values. */ var $888bbdf5456eb395$var$HASH_UNDEFINED = "__lodash_hash_undefined__";
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function $888bbdf5456eb395$var$hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = $1ef3728df89a8e7b$exports && value === undefined ? $888bbdf5456eb395$var$HASH_UNDEFINED : value;
    return this;
}
$888bbdf5456eb395$exports = $888bbdf5456eb395$var$hashSet;


/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function $65d79b91bc6e085b$var$Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `Hash`.
$65d79b91bc6e085b$var$Hash.prototype.clear = $823eca4cf944aae4$exports;
$65d79b91bc6e085b$var$Hash.prototype["delete"] = $539e82209077e9d6$exports;
$65d79b91bc6e085b$var$Hash.prototype.get = $3e56a861b4e1a8bc$exports;
$65d79b91bc6e085b$var$Hash.prototype.has = $203a84547f7bfd91$exports;
$65d79b91bc6e085b$var$Hash.prototype.set = $888bbdf5456eb395$exports;
$65d79b91bc6e085b$exports = $65d79b91bc6e085b$var$Hash;




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function $bc6818500c3ac2ae$var$mapCacheClear() {
    this.size = 0;
    this.__data__ = {
        "hash": new $65d79b91bc6e085b$exports,
        "map": new ($ac35e0129841718c$exports || $befa5ac17bc7d29a$exports),
        "string": new $65d79b91bc6e085b$exports
    };
}
$bc6818500c3ac2ae$exports = $bc6818500c3ac2ae$var$mapCacheClear;


var $9c1616a72133c793$exports = {};
var $b064397b7f702f73$exports = {};
var $2a9177b4614eab07$exports = {};
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function $2a9177b4614eab07$var$isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
$2a9177b4614eab07$exports = $2a9177b4614eab07$var$isKeyable;


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function $b064397b7f702f73$var$getMapData(map, key) {
    var data = map.__data__;
    return $2a9177b4614eab07$exports(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
$b064397b7f702f73$exports = $b064397b7f702f73$var$getMapData;


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function $9c1616a72133c793$var$mapCacheDelete(key) {
    var result = $b064397b7f702f73$exports(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
}
$9c1616a72133c793$exports = $9c1616a72133c793$var$mapCacheDelete;


var $16f75c65ee0ca1a4$exports = {};

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function $16f75c65ee0ca1a4$var$mapCacheGet(key) {
    return $b064397b7f702f73$exports(this, key).get(key);
}
$16f75c65ee0ca1a4$exports = $16f75c65ee0ca1a4$var$mapCacheGet;


var $36a03f82297621f4$exports = {};

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function $36a03f82297621f4$var$mapCacheHas(key) {
    return $b064397b7f702f73$exports(this, key).has(key);
}
$36a03f82297621f4$exports = $36a03f82297621f4$var$mapCacheHas;


var $94f0960fb87c327c$exports = {};

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function $94f0960fb87c327c$var$mapCacheSet(key, value) {
    var data = $b064397b7f702f73$exports(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
}
$94f0960fb87c327c$exports = $94f0960fb87c327c$var$mapCacheSet;


/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function $91f3b3dcdbb16fef$var$MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `MapCache`.
$91f3b3dcdbb16fef$var$MapCache.prototype.clear = $bc6818500c3ac2ae$exports;
$91f3b3dcdbb16fef$var$MapCache.prototype["delete"] = $9c1616a72133c793$exports;
$91f3b3dcdbb16fef$var$MapCache.prototype.get = $16f75c65ee0ca1a4$exports;
$91f3b3dcdbb16fef$var$MapCache.prototype.has = $36a03f82297621f4$exports;
$91f3b3dcdbb16fef$var$MapCache.prototype.set = $94f0960fb87c327c$exports;
$91f3b3dcdbb16fef$exports = $91f3b3dcdbb16fef$var$MapCache;


/** Used as the size to enable large array optimizations. */ var $c5f16e543d471460$var$LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */ function $c5f16e543d471460$var$stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof $befa5ac17bc7d29a$exports) {
        var pairs = data.__data__;
        if (!$ac35e0129841718c$exports || pairs.length < $c5f16e543d471460$var$LARGE_ARRAY_SIZE - 1) {
            pairs.push([
                key,
                value
            ]);
            this.size = ++data.size;
            return this;
        }
        data = this.__data__ = new $91f3b3dcdbb16fef$exports(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
}
$c5f16e543d471460$exports = $c5f16e543d471460$var$stackSet;


/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function $db9f4a25626a9022$var$Stack(entries) {
    var data = this.__data__ = new $befa5ac17bc7d29a$exports(entries);
    this.size = data.size;
}
// Add methods to `Stack`.
$db9f4a25626a9022$var$Stack.prototype.clear = $cc60611b30e8e31c$exports;
$db9f4a25626a9022$var$Stack.prototype["delete"] = $face63b26bdedd60$exports;
$db9f4a25626a9022$var$Stack.prototype.get = $d7803b2d82266dcd$exports;
$db9f4a25626a9022$var$Stack.prototype.has = $9f0a792355e2347e$exports;
$db9f4a25626a9022$var$Stack.prototype.set = $c5f16e543d471460$exports;
$db9f4a25626a9022$exports = $db9f4a25626a9022$var$Stack;


var $86d3b251fe0271e9$exports = {};
var $ecef678e691a1ada$exports = {};

var $0d28433c16edc771$exports = {};
/** Used to stand-in for `undefined` hash values. */ var $0d28433c16edc771$var$HASH_UNDEFINED = "__lodash_hash_undefined__";
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */ function $0d28433c16edc771$var$setCacheAdd(value) {
    this.__data__.set(value, $0d28433c16edc771$var$HASH_UNDEFINED);
    return this;
}
$0d28433c16edc771$exports = $0d28433c16edc771$var$setCacheAdd;


var $3d88d737c63a2726$exports = {};
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */ function $3d88d737c63a2726$var$setCacheHas(value) {
    return this.__data__.has(value);
}
$3d88d737c63a2726$exports = $3d88d737c63a2726$var$setCacheHas;


/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */ function $ecef678e691a1ada$var$SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new $91f3b3dcdbb16fef$exports;
    while(++index < length)this.add(values[index]);
}
// Add methods to `SetCache`.
$ecef678e691a1ada$var$SetCache.prototype.add = $ecef678e691a1ada$var$SetCache.prototype.push = $0d28433c16edc771$exports;
$ecef678e691a1ada$var$SetCache.prototype.has = $3d88d737c63a2726$exports;
$ecef678e691a1ada$exports = $ecef678e691a1ada$var$SetCache;


var $cf679d6e05fc8e6b$exports = {};
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */ function $cf679d6e05fc8e6b$var$arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (predicate(array[index], index, array)) return true;
    }
    return false;
}
$cf679d6e05fc8e6b$exports = $cf679d6e05fc8e6b$var$arraySome;


var $2bfbe69611785045$exports = {};
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function $2bfbe69611785045$var$cacheHas(cache, key) {
    return cache.has(key);
}
$2bfbe69611785045$exports = $2bfbe69611785045$var$cacheHas;


/** Used to compose bitmasks for value comparisons. */ var $86d3b251fe0271e9$var$COMPARE_PARTIAL_FLAG = 1, $86d3b251fe0271e9$var$COMPARE_UNORDERED_FLAG = 2;
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
 */ function $86d3b251fe0271e9$var$equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & $86d3b251fe0271e9$var$COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
    // Check that cyclic values are equal.
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
    var index = -1, result = true, seen = bitmask & $86d3b251fe0271e9$var$COMPARE_UNORDERED_FLAG ? new $ecef678e691a1ada$exports : undefined;
    stack.set(array, other);
    stack.set(other, array);
    // Ignore non-index properties.
    while(++index < arrLength){
        var arrValue = array[index], othValue = other[index];
        if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        if (compared !== undefined) {
            if (compared) continue;
            result = false;
            break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
            if (!$cf679d6e05fc8e6b$exports(other, function(othValue, othIndex) {
                if (!$2bfbe69611785045$exports(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
            })) {
                result = false;
                break;
            }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
        }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
}
$86d3b251fe0271e9$exports = $86d3b251fe0271e9$var$equalArrays;


var $93c61eea91a15499$exports = {};

var $d7c5d1af7d648e5b$exports = {};

var $1L8e3 = parcelRequire("1L8e3");
/** Built-in value references. */ var $d7c5d1af7d648e5b$var$Uint8Array = $1L8e3.Uint8Array;
$d7c5d1af7d648e5b$exports = $d7c5d1af7d648e5b$var$Uint8Array;




var $bc7976f0c7d7cba0$exports = {};
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */ function $bc7976f0c7d7cba0$var$mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
        result[++index] = [
            key,
            value
        ];
    });
    return result;
}
$bc7976f0c7d7cba0$exports = $bc7976f0c7d7cba0$var$mapToArray;


var $2d7ffe33955adfe5$exports = {};
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */ function $2d7ffe33955adfe5$var$setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
        result[++index] = value;
    });
    return result;
}
$2d7ffe33955adfe5$exports = $2d7ffe33955adfe5$var$setToArray;


/** Used to compose bitmasks for value comparisons. */ var $93c61eea91a15499$var$COMPARE_PARTIAL_FLAG = 1, $93c61eea91a15499$var$COMPARE_UNORDERED_FLAG = 2;
/** `Object#toString` result references. */ var $93c61eea91a15499$var$boolTag = "[object Boolean]", $93c61eea91a15499$var$dateTag = "[object Date]", $93c61eea91a15499$var$errorTag = "[object Error]", $93c61eea91a15499$var$mapTag = "[object Map]", $93c61eea91a15499$var$numberTag = "[object Number]", $93c61eea91a15499$var$regexpTag = "[object RegExp]", $93c61eea91a15499$var$setTag = "[object Set]", $93c61eea91a15499$var$stringTag = "[object String]", $93c61eea91a15499$var$symbolTag = "[object Symbol]";
var $93c61eea91a15499$var$arrayBufferTag = "[object ArrayBuffer]", $93c61eea91a15499$var$dataViewTag = "[object DataView]";
/** Used to convert symbols to primitives and strings. */ var $93c61eea91a15499$var$symbolProto = $ffe5cb85635c33de$exports ? $ffe5cb85635c33de$exports.prototype : undefined, $93c61eea91a15499$var$symbolValueOf = $93c61eea91a15499$var$symbolProto ? $93c61eea91a15499$var$symbolProto.valueOf : undefined;
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
 */ function $93c61eea91a15499$var$equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch(tag){
        case $93c61eea91a15499$var$dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
            object = object.buffer;
            other = other.buffer;
        case $93c61eea91a15499$var$arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new $d7c5d1af7d648e5b$exports(object), new $d7c5d1af7d648e5b$exports(other))) return false;
            return true;
        case $93c61eea91a15499$var$boolTag:
        case $93c61eea91a15499$var$dateTag:
        case $93c61eea91a15499$var$numberTag:
            // Coerce booleans to `1` or `0` and dates to milliseconds.
            // Invalid dates are coerced to `NaN`.
            return $5f5d3f09cce3807e$exports(+object, +other);
        case $93c61eea91a15499$var$errorTag:
            return object.name == other.name && object.message == other.message;
        case $93c61eea91a15499$var$regexpTag:
        case $93c61eea91a15499$var$stringTag:
            // Coerce regexes to strings and treat strings, primitives and objects,
            // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
            // for more details.
            return object == other + "";
        case $93c61eea91a15499$var$mapTag:
            var convert = $bc7976f0c7d7cba0$exports;
        case $93c61eea91a15499$var$setTag:
            var isPartial = bitmask & $93c61eea91a15499$var$COMPARE_PARTIAL_FLAG;
            convert || (convert = $2d7ffe33955adfe5$exports);
            if (object.size != other.size && !isPartial) return false;
            // Assume cyclic values are equal.
            var stacked = stack.get(object);
            if (stacked) return stacked == other;
            bitmask |= $93c61eea91a15499$var$COMPARE_UNORDERED_FLAG;
            // Recursively compare objects (susceptible to call stack limits).
            stack.set(object, other);
            var result = $86d3b251fe0271e9$exports(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
        case $93c61eea91a15499$var$symbolTag:
            if ($93c61eea91a15499$var$symbolValueOf) return $93c61eea91a15499$var$symbolValueOf.call(object) == $93c61eea91a15499$var$symbolValueOf.call(other);
    }
    return false;
}
$93c61eea91a15499$exports = $93c61eea91a15499$var$equalByTag;


var $388cd1ca7d9db2b7$exports = {};
var $a5f7c433610a9a42$exports = {};
var $3d758285e0b0d18f$exports = {};
var $a9924564df3a0325$exports = {};
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */ function $a9924564df3a0325$var$arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while(++index < length)array[offset + index] = values[index];
    return array;
}
$a9924564df3a0325$exports = $a9924564df3a0325$var$arrayPush;



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
 */ function $3d758285e0b0d18f$var$baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return $34086da6808d3266$exports(object) ? result : $a9924564df3a0325$exports(result, symbolsFunc(object));
}
$3d758285e0b0d18f$exports = $3d758285e0b0d18f$var$baseGetAllKeys;


var $2142565f1249577c$exports = {};
var $579e8f0f2fcd5d42$exports = {};
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */ function $579e8f0f2fcd5d42$var$arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while(++index < length){
        var value = array[index];
        if (predicate(value, index, array)) result[resIndex++] = value;
    }
    return result;
}
$579e8f0f2fcd5d42$exports = $579e8f0f2fcd5d42$var$arrayFilter;


var $61a4a782f4155429$exports = {};
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
 */ function $61a4a782f4155429$var$stubArray() {
    return [];
}
$61a4a782f4155429$exports = $61a4a782f4155429$var$stubArray;


/** Used for built-in method references. */ var $2142565f1249577c$var$objectProto = Object.prototype;
/** Built-in value references. */ var $2142565f1249577c$var$propertyIsEnumerable = $2142565f1249577c$var$objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */ var $2142565f1249577c$var$nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */ var $2142565f1249577c$var$getSymbols = !$2142565f1249577c$var$nativeGetSymbols ? $61a4a782f4155429$exports : function(object) {
    if (object == null) return [];
    object = Object(object);
    return $579e8f0f2fcd5d42$exports($2142565f1249577c$var$nativeGetSymbols(object), function(symbol) {
        return $2142565f1249577c$var$propertyIsEnumerable.call(object, symbol);
    });
};
$2142565f1249577c$exports = $2142565f1249577c$var$getSymbols;


var $0a8cba4f9091535c$exports = {};
var $cd22f820aa5dc5fd$exports = {};
var $871552966855d35d$exports = {};
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ function $871552966855d35d$var$baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n)result[index] = iteratee(index);
    return result;
}
$871552966855d35d$exports = $871552966855d35d$var$baseTimes;


var $53b6151ac72e62a2$exports = {};
var $2cc935ff0b1c0877$exports = {};


/** `Object#toString` result references. */ var $2cc935ff0b1c0877$var$argsTag = "[object Arguments]";
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */ function $2cc935ff0b1c0877$var$baseIsArguments(value) {
    return $b368e37f27e03050$exports(value) && $53ca50918c8f42fc$exports(value) == $2cc935ff0b1c0877$var$argsTag;
}
$2cc935ff0b1c0877$exports = $2cc935ff0b1c0877$var$baseIsArguments;



/** Used for built-in method references. */ var $53b6151ac72e62a2$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $53b6151ac72e62a2$var$hasOwnProperty = $53b6151ac72e62a2$var$objectProto.hasOwnProperty;
/** Built-in value references. */ var $53b6151ac72e62a2$var$propertyIsEnumerable = $53b6151ac72e62a2$var$objectProto.propertyIsEnumerable;
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
 */ var $53b6151ac72e62a2$var$isArguments = $2cc935ff0b1c0877$exports(function() {
    return arguments;
}()) ? $2cc935ff0b1c0877$exports : function(value) {
    return $b368e37f27e03050$exports(value) && $53b6151ac72e62a2$var$hasOwnProperty.call(value, "callee") && !$53b6151ac72e62a2$var$propertyIsEnumerable.call(value, "callee");
};
$53b6151ac72e62a2$exports = $53b6151ac72e62a2$var$isArguments;




var $8tgsd = parcelRequire("8tgsd");
var $b889575f7e4d9c4d$exports = {};
/** Used as references for various `Number` constants. */ var $b889575f7e4d9c4d$var$MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */ var $b889575f7e4d9c4d$var$reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function $b889575f7e4d9c4d$var$isIndex(value, length) {
    var type = typeof value;
    length = length == null ? $b889575f7e4d9c4d$var$MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && $b889575f7e4d9c4d$var$reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
$b889575f7e4d9c4d$exports = $b889575f7e4d9c4d$var$isIndex;


var $0fc5618c5023df76$exports = {};
var $b4a91e510df145c4$exports = {};

var $68aa96500b8a892d$exports = {};
/** Used as references for various `Number` constants. */ var $68aa96500b8a892d$var$MAX_SAFE_INTEGER = 9007199254740991;
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
 */ function $68aa96500b8a892d$var$isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= $68aa96500b8a892d$var$MAX_SAFE_INTEGER;
}
$68aa96500b8a892d$exports = $68aa96500b8a892d$var$isLength;



/** `Object#toString` result references. */ var $b4a91e510df145c4$var$argsTag = "[object Arguments]", $b4a91e510df145c4$var$arrayTag = "[object Array]", $b4a91e510df145c4$var$boolTag = "[object Boolean]", $b4a91e510df145c4$var$dateTag = "[object Date]", $b4a91e510df145c4$var$errorTag = "[object Error]", $b4a91e510df145c4$var$funcTag = "[object Function]", $b4a91e510df145c4$var$mapTag = "[object Map]", $b4a91e510df145c4$var$numberTag = "[object Number]", $b4a91e510df145c4$var$objectTag = "[object Object]", $b4a91e510df145c4$var$regexpTag = "[object RegExp]", $b4a91e510df145c4$var$setTag = "[object Set]", $b4a91e510df145c4$var$stringTag = "[object String]", $b4a91e510df145c4$var$weakMapTag = "[object WeakMap]";
var $b4a91e510df145c4$var$arrayBufferTag = "[object ArrayBuffer]", $b4a91e510df145c4$var$dataViewTag = "[object DataView]", $b4a91e510df145c4$var$float32Tag = "[object Float32Array]", $b4a91e510df145c4$var$float64Tag = "[object Float64Array]", $b4a91e510df145c4$var$int8Tag = "[object Int8Array]", $b4a91e510df145c4$var$int16Tag = "[object Int16Array]", $b4a91e510df145c4$var$int32Tag = "[object Int32Array]", $b4a91e510df145c4$var$uint8Tag = "[object Uint8Array]", $b4a91e510df145c4$var$uint8ClampedTag = "[object Uint8ClampedArray]", $b4a91e510df145c4$var$uint16Tag = "[object Uint16Array]", $b4a91e510df145c4$var$uint32Tag = "[object Uint32Array]";
/** Used to identify `toStringTag` values of typed arrays. */ var $b4a91e510df145c4$var$typedArrayTags = {};
$b4a91e510df145c4$var$typedArrayTags[$b4a91e510df145c4$var$float32Tag] = $b4a91e510df145c4$var$typedArrayTags[$b4a91e510df145c4$var$float64Tag] = $b4a91e510df145c4$var$typedArrayTags[$b4a91e510df145c4$var$int8Tag] = $b4a91e510df145c4$var$typedArrayTags[$b4a91e510df145c4$var$int16Tag] = $b4a91e510df145c4$var$typedArrayTags[$b4a91e510df145c4$var$int32Tag] = $b4a91e510df145c4$var$typedArrayTags[$b4a91e510df145c4$var$uint8Tag] = $b4a91e510df145c4$var$typedArrayTags[$b4a91e510df145c4$var$uint8ClampedTag] = $b4a91e510df145c4$var$typedArrayTags[$b4a91e510df145c4$var$uint16Tag] = $b4a91e510df145c4$var$typedArrayTags[$b4a91e510df145c4$var$uint32Tag] = true;
$b4a91e510df145c4$var$typedArrayTags[$b4a91e510df145c4$var$argsTag] = $b4a91e510df145c4$var$typedArrayTags[$b4a91e510df145c4$var$arrayTag] = $b4a91e510df145c4$var$typedArrayTags[$b4a91e510df145c4$var$arrayBufferTag] = $b4a91e510df145c4$var$typedArrayTags[$b4a91e510df145c4$var$boolTag] = $b4a91e510df145c4$var$typedArrayTags[$b4a91e510df145c4$var$dataViewTag] = $b4a91e510df145c4$var$typedArrayTags[$b4a91e510df145c4$var$dateTag] = $b4a91e510df145c4$var$typedArrayTags[$b4a91e510df145c4$var$errorTag] = $b4a91e510df145c4$var$typedArrayTags[$b4a91e510df145c4$var$funcTag] = $b4a91e510df145c4$var$typedArrayTags[$b4a91e510df145c4$var$mapTag] = $b4a91e510df145c4$var$typedArrayTags[$b4a91e510df145c4$var$numberTag] = $b4a91e510df145c4$var$typedArrayTags[$b4a91e510df145c4$var$objectTag] = $b4a91e510df145c4$var$typedArrayTags[$b4a91e510df145c4$var$regexpTag] = $b4a91e510df145c4$var$typedArrayTags[$b4a91e510df145c4$var$setTag] = $b4a91e510df145c4$var$typedArrayTags[$b4a91e510df145c4$var$stringTag] = $b4a91e510df145c4$var$typedArrayTags[$b4a91e510df145c4$var$weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */ function $b4a91e510df145c4$var$baseIsTypedArray(value) {
    return $b368e37f27e03050$exports(value) && $68aa96500b8a892d$exports(value.length) && !!$b4a91e510df145c4$var$typedArrayTags[$53ca50918c8f42fc$exports(value)];
}
$b4a91e510df145c4$exports = $b4a91e510df145c4$var$baseIsTypedArray;


var $c34f1ea9a80b4ed8$exports = {};
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */ function $c34f1ea9a80b4ed8$var$baseUnary(func) {
    return function(value) {
        return func(value);
    };
}
$c34f1ea9a80b4ed8$exports = $c34f1ea9a80b4ed8$var$baseUnary;



var $c7VG6 = parcelRequire("c7VG6");
/* Node.js helper references. */ var $0fc5618c5023df76$var$nodeIsTypedArray = $c7VG6 && $c7VG6.isTypedArray;
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
 */ var $0fc5618c5023df76$var$isTypedArray = $0fc5618c5023df76$var$nodeIsTypedArray ? $c34f1ea9a80b4ed8$exports($0fc5618c5023df76$var$nodeIsTypedArray) : $b4a91e510df145c4$exports;
$0fc5618c5023df76$exports = $0fc5618c5023df76$var$isTypedArray;


/** Used for built-in method references. */ var $cd22f820aa5dc5fd$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $cd22f820aa5dc5fd$var$hasOwnProperty = $cd22f820aa5dc5fd$var$objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function $cd22f820aa5dc5fd$var$arrayLikeKeys(value, inherited) {
    var isArr = $34086da6808d3266$exports(value), isArg = !isArr && $53b6151ac72e62a2$exports(value), isBuff = !isArr && !isArg && $8tgsd(value), isType = !isArr && !isArg && !isBuff && $0fc5618c5023df76$exports(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? $871552966855d35d$exports(value.length, String) : [], length = result.length;
    for(var key in value)if ((inherited || $cd22f820aa5dc5fd$var$hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    $b889575f7e4d9c4d$exports(key, length)))) result.push(key);
    return result;
}
$cd22f820aa5dc5fd$exports = $cd22f820aa5dc5fd$var$arrayLikeKeys;


var $a0f2c92b506ef13d$exports = {};
var $4dfb267a3233b84c$exports = {};
/** Used for built-in method references. */ var $4dfb267a3233b84c$var$objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function $4dfb267a3233b84c$var$isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || $4dfb267a3233b84c$var$objectProto;
    return value === proto;
}
$4dfb267a3233b84c$exports = $4dfb267a3233b84c$var$isPrototype;


var $231f64b1f6313b79$exports = {};
var $4822f24aac9b8a7c$exports = {};
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function $4822f24aac9b8a7c$var$overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
$4822f24aac9b8a7c$exports = $4822f24aac9b8a7c$var$overArg;


/* Built-in method references for those with the same name as other `lodash` methods. */ var $231f64b1f6313b79$var$nativeKeys = $4822f24aac9b8a7c$exports(Object.keys, Object);
$231f64b1f6313b79$exports = $231f64b1f6313b79$var$nativeKeys;


/** Used for built-in method references. */ var $a0f2c92b506ef13d$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $a0f2c92b506ef13d$var$hasOwnProperty = $a0f2c92b506ef13d$var$objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function $a0f2c92b506ef13d$var$baseKeys(object) {
    if (!$4dfb267a3233b84c$exports(object)) return $231f64b1f6313b79$exports(object);
    var result = [];
    for(var key in Object(object))if ($a0f2c92b506ef13d$var$hasOwnProperty.call(object, key) && key != "constructor") result.push(key);
    return result;
}
$a0f2c92b506ef13d$exports = $a0f2c92b506ef13d$var$baseKeys;


var $f12229829ffefc87$exports = {};


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
 */ function $f12229829ffefc87$var$isArrayLike(value) {
    return value != null && $68aa96500b8a892d$exports(value.length) && !$8dab48d4f627075c$exports(value);
}
$f12229829ffefc87$exports = $f12229829ffefc87$var$isArrayLike;


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
 */ function $0a8cba4f9091535c$var$keys(object) {
    return $f12229829ffefc87$exports(object) ? $cd22f820aa5dc5fd$exports(object) : $a0f2c92b506ef13d$exports(object);
}
$0a8cba4f9091535c$exports = $0a8cba4f9091535c$var$keys;


/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */ function $a5f7c433610a9a42$var$getAllKeys(object) {
    return $3d758285e0b0d18f$exports(object, $0a8cba4f9091535c$exports, $2142565f1249577c$exports);
}
$a5f7c433610a9a42$exports = $a5f7c433610a9a42$var$getAllKeys;


/** Used to compose bitmasks for value comparisons. */ var $388cd1ca7d9db2b7$var$COMPARE_PARTIAL_FLAG = 1;
/** Used for built-in method references. */ var $388cd1ca7d9db2b7$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $388cd1ca7d9db2b7$var$hasOwnProperty = $388cd1ca7d9db2b7$var$objectProto.hasOwnProperty;
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
 */ function $388cd1ca7d9db2b7$var$equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & $388cd1ca7d9db2b7$var$COMPARE_PARTIAL_FLAG, objProps = $a5f7c433610a9a42$exports(object), objLength = objProps.length, othProps = $a5f7c433610a9a42$exports(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) return false;
    var index = objLength;
    while(index--){
        var key = objProps[index];
        if (!(isPartial ? key in other : $388cd1ca7d9db2b7$var$hasOwnProperty.call(other, key))) return false;
    }
    // Check that cyclic values are equal.
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) return objStacked == other && othStacked == object;
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while(++index < objLength){
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
        }
        skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) result = false;
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
}
$388cd1ca7d9db2b7$exports = $388cd1ca7d9db2b7$var$equalObjects;


var $a2d6d557c826d8e7$exports = {};
var $b8aaa06ae0d87b56$exports = {};


var $1L8e3 = parcelRequire("1L8e3");
/* Built-in method references that are verified to be native. */ var $b8aaa06ae0d87b56$var$DataView = $e147fdecd23b4e69$exports($1L8e3, "DataView");
$b8aaa06ae0d87b56$exports = $b8aaa06ae0d87b56$var$DataView;



var $5669c796a37383ca$exports = {};


var $1L8e3 = parcelRequire("1L8e3");
/* Built-in method references that are verified to be native. */ var $5669c796a37383ca$var$Promise = $e147fdecd23b4e69$exports($1L8e3, "Promise");
$5669c796a37383ca$exports = $5669c796a37383ca$var$Promise;


var $320c314d4762cfb1$exports = {};


var $1L8e3 = parcelRequire("1L8e3");
/* Built-in method references that are verified to be native. */ var $320c314d4762cfb1$var$Set = $e147fdecd23b4e69$exports($1L8e3, "Set");
$320c314d4762cfb1$exports = $320c314d4762cfb1$var$Set;


var $23bacf134d92b468$exports = {};


var $1L8e3 = parcelRequire("1L8e3");
/* Built-in method references that are verified to be native. */ var $23bacf134d92b468$var$WeakMap = $e147fdecd23b4e69$exports($1L8e3, "WeakMap");
$23bacf134d92b468$exports = $23bacf134d92b468$var$WeakMap;




/** `Object#toString` result references. */ var $a2d6d557c826d8e7$var$mapTag = "[object Map]", $a2d6d557c826d8e7$var$objectTag = "[object Object]", $a2d6d557c826d8e7$var$promiseTag = "[object Promise]", $a2d6d557c826d8e7$var$setTag = "[object Set]", $a2d6d557c826d8e7$var$weakMapTag = "[object WeakMap]";
var $a2d6d557c826d8e7$var$dataViewTag = "[object DataView]";
/** Used to detect maps, sets, and weakmaps. */ var $a2d6d557c826d8e7$var$dataViewCtorString = $1e323287d9dee311$exports($b8aaa06ae0d87b56$exports), $a2d6d557c826d8e7$var$mapCtorString = $1e323287d9dee311$exports($ac35e0129841718c$exports), $a2d6d557c826d8e7$var$promiseCtorString = $1e323287d9dee311$exports($5669c796a37383ca$exports), $a2d6d557c826d8e7$var$setCtorString = $1e323287d9dee311$exports($320c314d4762cfb1$exports), $a2d6d557c826d8e7$var$weakMapCtorString = $1e323287d9dee311$exports($23bacf134d92b468$exports);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ var $a2d6d557c826d8e7$var$getTag = $53ca50918c8f42fc$exports;
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ($b8aaa06ae0d87b56$exports && $a2d6d557c826d8e7$var$getTag(new $b8aaa06ae0d87b56$exports(new ArrayBuffer(1))) != $a2d6d557c826d8e7$var$dataViewTag || $ac35e0129841718c$exports && $a2d6d557c826d8e7$var$getTag(new $ac35e0129841718c$exports) != $a2d6d557c826d8e7$var$mapTag || $5669c796a37383ca$exports && $a2d6d557c826d8e7$var$getTag($5669c796a37383ca$exports.resolve()) != $a2d6d557c826d8e7$var$promiseTag || $320c314d4762cfb1$exports && $a2d6d557c826d8e7$var$getTag(new $320c314d4762cfb1$exports) != $a2d6d557c826d8e7$var$setTag || $23bacf134d92b468$exports && $a2d6d557c826d8e7$var$getTag(new $23bacf134d92b468$exports) != $a2d6d557c826d8e7$var$weakMapTag) $a2d6d557c826d8e7$var$getTag = function(value) {
    var result = $53ca50918c8f42fc$exports(value), Ctor = result == $a2d6d557c826d8e7$var$objectTag ? value.constructor : undefined, ctorString = Ctor ? $1e323287d9dee311$exports(Ctor) : "";
    if (ctorString) switch(ctorString){
        case $a2d6d557c826d8e7$var$dataViewCtorString:
            return $a2d6d557c826d8e7$var$dataViewTag;
        case $a2d6d557c826d8e7$var$mapCtorString:
            return $a2d6d557c826d8e7$var$mapTag;
        case $a2d6d557c826d8e7$var$promiseCtorString:
            return $a2d6d557c826d8e7$var$promiseTag;
        case $a2d6d557c826d8e7$var$setCtorString:
            return $a2d6d557c826d8e7$var$setTag;
        case $a2d6d557c826d8e7$var$weakMapCtorString:
            return $a2d6d557c826d8e7$var$weakMapTag;
    }
    return result;
};
$a2d6d557c826d8e7$exports = $a2d6d557c826d8e7$var$getTag;




var $8tgsd = parcelRequire("8tgsd");

/** Used to compose bitmasks for value comparisons. */ var $cbeb2879b695ddbc$var$COMPARE_PARTIAL_FLAG = 1;
/** `Object#toString` result references. */ var $cbeb2879b695ddbc$var$argsTag = "[object Arguments]", $cbeb2879b695ddbc$var$arrayTag = "[object Array]", $cbeb2879b695ddbc$var$objectTag = "[object Object]";
/** Used for built-in method references. */ var $cbeb2879b695ddbc$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $cbeb2879b695ddbc$var$hasOwnProperty = $cbeb2879b695ddbc$var$objectProto.hasOwnProperty;
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
 */ function $cbeb2879b695ddbc$var$baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = $34086da6808d3266$exports(object), othIsArr = $34086da6808d3266$exports(other), objTag = objIsArr ? $cbeb2879b695ddbc$var$arrayTag : $a2d6d557c826d8e7$exports(object), othTag = othIsArr ? $cbeb2879b695ddbc$var$arrayTag : $a2d6d557c826d8e7$exports(other);
    objTag = objTag == $cbeb2879b695ddbc$var$argsTag ? $cbeb2879b695ddbc$var$objectTag : objTag;
    othTag = othTag == $cbeb2879b695ddbc$var$argsTag ? $cbeb2879b695ddbc$var$objectTag : othTag;
    var objIsObj = objTag == $cbeb2879b695ddbc$var$objectTag, othIsObj = othTag == $cbeb2879b695ddbc$var$objectTag, isSameTag = objTag == othTag;
    if (isSameTag && $8tgsd(object)) {
        if (!$8tgsd(other)) return false;
        objIsArr = true;
        objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
        stack || (stack = new $db9f4a25626a9022$exports);
        return objIsArr || $0fc5618c5023df76$exports(object) ? $86d3b251fe0271e9$exports(object, other, bitmask, customizer, equalFunc, stack) : $93c61eea91a15499$exports(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & $cbeb2879b695ddbc$var$COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && $cbeb2879b695ddbc$var$hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && $cbeb2879b695ddbc$var$hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new $db9f4a25626a9022$exports);
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
    }
    if (!isSameTag) return false;
    stack || (stack = new $db9f4a25626a9022$exports);
    return $388cd1ca7d9db2b7$exports(object, other, bitmask, customizer, equalFunc, stack);
}
$cbeb2879b695ddbc$exports = $cbeb2879b695ddbc$var$baseIsEqualDeep;



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
 */ function $af0478bf0a744a07$var$baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) return true;
    if (value == null || other == null || !$b368e37f27e03050$exports(value) && !$b368e37f27e03050$exports(other)) return value !== value && other !== other;
    return $cbeb2879b695ddbc$exports(value, other, bitmask, customizer, $af0478bf0a744a07$var$baseIsEqual, stack);
}
$af0478bf0a744a07$exports = $af0478bf0a744a07$var$baseIsEqual;


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
 */ function $27b078180f7cecc3$var$isEqual(value, other) {
    return $af0478bf0a744a07$exports(value, other);
}
$27b078180f7cecc3$exports = $27b078180f7cecc3$var$isEqual;


var $70f23c7c95ce5dd7$exports = {};
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
 */ var $70f23c7c95ce5dd7$var$ObservableSlim = function() {
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
    $70f23c7c95ce5dd7$exports = $70f23c7c95ce5dd7$var$ObservableSlim;
} catch (err) {}


/*
	build Proxy to observe changes to object properties
	*/ const $4bd7951ed406c253$var$registeredObservables = {};
const $4bd7951ed406c253$export$7ec259ba0528fb23 = (id)=>{
    return $4bd7951ed406c253$var$registeredObservables[id];
};
/*
	@class ObservableObject

	Base class for data binding. Implements Proxy and Reflect on an object so that
	changes can be observed and manages subscribing and notifying observers.

	*/ class $4bd7951ed406c253$export$b176171395436676 {
    /*
		@param { String } id - unique id 
		@param { Object } data - optional externally defined javascript object to observe
		@param { Object } options - optional, used by subclasses
		*/ constructor(id, data = {}, options = {}){
        this.id = id;
        if ($4bd7951ed406c253$var$registeredObservables[this.id]) throw new Error("ObservableObject " + id + " already exists.");
        this.bound = {} // watchers to sync on value change
        ;
        this.data = $70f23c7c95ce5dd7$exports.create(data, false, (changes)=>{
            this.sync(changes);
        });
        this.options = options;
        $4bd7951ed406c253$var$registeredObservables[this.id] = this;
    }
    /*
		@function destroy - remove all bindings
		*/ destroy() {
        $70f23c7c95ce5dd7$exports.pause(this.data);
        delete $4bd7951ed406c253$var$registeredObservables[this.id];
        delete this.data;
        Object.keys(this.bound).forEach((prop)=>{
            Object.keys(this.bound[prop]).forEach((id)=>{
                this.unbind(id, prop);
            });
        });
        $70f23c7c95ce5dd7$exports.remove(this.data);
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


let $04abf88b58b0ffcd$export$77e1d49fdb880d27;
let $04abf88b58b0ffcd$export$c7320459fd5267c0;
let $04abf88b58b0ffcd$export$497098c8185e6e33;
let $04abf88b58b0ffcd$export$296acd8d6f329fa3;
let $04abf88b58b0ffcd$export$fa28dfcc49831a91;
let $04abf88b58b0ffcd$export$788f7857dc8c77f5;
class $04abf88b58b0ffcd$var$ObserverSubscriptionManager {
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
class $04abf88b58b0ffcd$export$d36264ac4e7cee7d extends $04abf88b58b0ffcd$var$ObserverSubscriptionManager {
    constructor(options = {}){
        super(options);
        // debounce - just need to know if a change occured, not every change
        this.mutationHandler = (0, (/*@__PURE__*/$parcel$interopDefault($9fe0242a38a556ef$exports)))((mutations, observer)=>{
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
class $04abf88b58b0ffcd$var$ScrollWatcher extends $04abf88b58b0ffcd$var$ObserverSubscriptionManager {
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
        (0, $d6606c57579c6e5f$export$6f53260fffa88f1c).on("theScrollWatcher", this.scrollElement, "scroll", ()=>{
            this.trigger();
        });
    }
    sleep() {
        super.sleep();
        (0, $d6606c57579c6e5f$export$6f53260fffa88f1c).off("theScrollWatcher", this.scrollElement, "scroll");
    }
    inViewPort(element) {
        return (0, $d6606c57579c6e5f$export$6f53260fffa88f1c).inViewPort(element, this.scrollElement);
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
class $04abf88b58b0ffcd$var$ResizeWatcher extends $04abf88b58b0ffcd$var$ObserverSubscriptionManager {
    constructor(options){
        super(options);
        this.debounce = (0, (/*@__PURE__*/$parcel$interopDefault($9fe0242a38a556ef$exports)))(()=>{
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
class $04abf88b58b0ffcd$var$OrientationWatcher extends $04abf88b58b0ffcd$var$ObserverSubscriptionManager {
    constructor(options){
        super(options);
        if ("onorientationchange" in window) (0, $d6606c57579c6e5f$export$6f53260fffa88f1c).addClass(document.body, "have-orientation");
        else (0, $d6606c57579c6e5f$export$6f53260fffa88f1c).addClass(document.body, "no-orientation");
        this.debounce = (0, (/*@__PURE__*/$parcel$interopDefault($9fe0242a38a556ef$exports)))(()=>{
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
class $04abf88b58b0ffcd$var$WorkerWatcher extends $04abf88b58b0ffcd$var$ObserverSubscriptionManager {
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
class $04abf88b58b0ffcd$var$ObservableObjectWatcher extends $04abf88b58b0ffcd$var$ObserverSubscriptionManager {
    constructor(options){
        super(options);
        this.registeredObservableObjects = {};
    }
    getObservable(id) {
        return this.registeredObservableObjects[id] ? this.registeredObservableObjects[id].observable : undefined;
    }
    observableStart(id, data) {
        const foundObservable = (0, $4bd7951ed406c253$export$7ec259ba0528fb23)(id);
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
                observable: new (0, $4bd7951ed406c253$export$b176171395436676)(id, data),
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
$04abf88b58b0ffcd$export$77e1d49fdb880d27 = new $04abf88b58b0ffcd$export$d36264ac4e7cee7d();
$04abf88b58b0ffcd$export$c7320459fd5267c0 = new $04abf88b58b0ffcd$var$ScrollWatcher();
$04abf88b58b0ffcd$export$497098c8185e6e33 = new $04abf88b58b0ffcd$var$ResizeWatcher();
$04abf88b58b0ffcd$export$296acd8d6f329fa3 = new $04abf88b58b0ffcd$var$OrientationWatcher();
$04abf88b58b0ffcd$export$fa28dfcc49831a91 = new $04abf88b58b0ffcd$var$WorkerWatcher();
$04abf88b58b0ffcd$export$788f7857dc8c77f5 = new $04abf88b58b0ffcd$var$ObservableObjectWatcher();



var $31f21d7381765a96$exports = {};

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
 */ var $31f21d7381765a96$var$kebabCase = $05f54b383665cf57$exports(function(result, word, index) {
    return result + (index ? "-" : "") + word.toLowerCase();
});
$31f21d7381765a96$exports = $31f21d7381765a96$var$kebabCase;



let $a2dfa52ef2fbbb46$var$unique = 0 // unique IDs for controllers
;
const $a2dfa52ef2fbbb46$export$85e745b96b6487a7 = [] // instantiated controllers
;
const $a2dfa52ef2fbbb46$var$supportsCustomElements = "customElements" in window // browser supports custom elements
;
const $a2dfa52ef2fbbb46$export$ac297e650eeb1e78 = {};
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

	*/ const $a2dfa52ef2fbbb46$export$22044c20eef36040 = (className, object)=>{
    if ($a2dfa52ef2fbbb46$export$ac297e650eeb1e78[className]) throw new Error("Sargasso class " + className + " is already registered.");
    $a2dfa52ef2fbbb46$export$ac297e650eeb1e78[className] = object;
    if ($a2dfa52ef2fbbb46$var$supportsCustomElements) {
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
        const fn = new Function("registeredClasses", customElementClassFactory)($a2dfa52ef2fbbb46$export$ac297e650eeb1e78);
        const options = window.sargassoOptions || {};
        const prefix = typeof options.customElementPrefix !== "undefined" ? options.customElementPrefix : "sargasso-";
        customElements.define(prefix + (0, (/*@__PURE__*/$parcel$interopDefault($31f21d7381765a96$exports)))(className), fn);
    }
};
// the public event handlers to implement in subclasses
const $a2dfa52ef2fbbb46$var$eventNames = [
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
	*/ class $a2dfa52ef2fbbb46$export$d7944a94c1afb262 {
    constructor(element, options = {}){
        (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("Sargasso constructor element", element, [
            "isDefined",
            "isElement"
        ]);
        (0, $6f44ddd09e194478$export$a22775fa5e2eebd9)("Sargasso constructor options", options, [
            "isDefined",
            [
                "isObject"
            ]
        ]);
        this.uid = ++$a2dfa52ef2fbbb46$var$unique;
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
        this.render = (0, (/*@__PURE__*/$parcel$interopDefault($9fe0242a38a556ef$exports)))(()=>{
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
        $a2dfa52ef2fbbb46$export$85e745b96b6487a7.push(this);
        // if using shadow DOM, build a DOMWatcher to observe changes
        if (this._shadowDOM) {
            if (!this._shadowDOMWatcher) this._shadowDOMWatcher = new (0, $04abf88b58b0ffcd$export$d36264ac4e7cee7d)({
                shadowDOM: this._shadowRoot
            });
            this._shadowDOMWatcher.subscribe(this);
        }
        // subscribe to desired event services
        if (this.options.watchDOM) (0, $04abf88b58b0ffcd$export$77e1d49fdb880d27).subscribe(this);
        if (this.options.watchScroll || this.options.watchViewport) (0, $04abf88b58b0ffcd$export$c7320459fd5267c0).subscribe(this);
        if (this.options.watchResize || this.options.watchViewport) (0, $04abf88b58b0ffcd$export$497098c8185e6e33).subscribe(this);
        if (this.options.watchOrientation || this.options.watchViewport) (0, $04abf88b58b0ffcd$export$296acd8d6f329fa3).subscribe(this);
        /*
			listen for 'sargasso' events
			Call the method named in e.detail.sargassoEvent or call this.elementEvent
		*/ this.elementListener = (e)=>{
            if (e.detail && e.detail.sargassoEvent && $a2dfa52ef2fbbb46$var$eventNames.indexOf(e.detail.sargassoEvent) !== -1) this[e.detail.sargassoEvent].apply(this, e.detail.sargassoEventOptions || []);
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
        if (this.options.watchDOM) (0, $04abf88b58b0ffcd$export$77e1d49fdb880d27).unSubscribe(this);
        if (this.options.watchScroll || this.options.watchViewport) (0, $04abf88b58b0ffcd$export$c7320459fd5267c0).unSubscribe(this);
        if (this.options.watchResize || this.options.watchViewport) (0, $04abf88b58b0ffcd$export$497098c8185e6e33).unSubscribe(this);
        if (this.options.watchOrientation || this.options.watchViewport) (0, $04abf88b58b0ffcd$export$296acd8d6f329fa3).unSubscribe(this);
        this.element.removeEventListener("sargasso", this.elementListener);
        (0, $d6606c57579c6e5f$export$6f53260fffa88f1c).offAll(this.element) // remove all dangling event listeners created with on/once
        ;
        this._started = false;
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
		@param { String } id - id of worker started with this._workerstart()
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
    /****************************************************
	UTILITY METHODS - callable but normally not overriden
	*****************************************************/ /*
		@function setMetaData - Set metadata. Key value storage implemented as a weakMap
		@param { String } - key name for value
		@param { Object } - value or JSON object, null will remove from key from metadate
		*/ setMetaData(k, v) {
        (0, $d6606c57579c6e5f$export$6f53260fffa88f1c).setMetaData(this.element, k, v);
    }
    /*
		@function getMetaData - Retrieve metadata
		@param { String } key - name of value to return
		@return { Object } if key is found otherwise undefined
		*/ getMetaData(k) {
        return (0, $d6606c57579c6e5f$export$6f53260fffa88f1c).getMetaData(this.element, k);
    }
    /*
		@function on - add delegated event handler for this.element
		@param { String} evt - HTML element event name
		@param { String } selector - optional element query selector
		@param { Function } fn - event handler function
		@param { Object } [options] - for addEventListener
		*/ on(evt, selector, fn, options) {
        (0, $d6606c57579c6e5f$export$6f53260fffa88f1c).on(this.constructor.name + "-" + this.uid, this.element, evt, selector, fn, options);
    }
    /*
		@function off - Remove delegated event handler
		@param { String} evt - HTML element event name
		@param { String } [selector] - element query selector
		*/ off(evt, selector) {
        (0, $d6606c57579c6e5f$export$6f53260fffa88f1c).off(this.constructor.name + "-" + this.uid, this.element, evt, selector);
    }
    /*
		@function once - add delegated event handler for this.element witch executes only once
		@param { String} evt - HTML element event name
		@param { String } selector - optional element query selector
		@param { Function } fn - event handler function
		@param { Object } [options] - for addEventListener
		*/ once(evt, selector, fn, options) {
        (0, $d6606c57579c6e5f$export$6f53260fffa88f1c).once(this.constructor.name + "-" + this.uid, this.element, evt, selector, fn, options);
    }
    /*
		@function notifyAll - broadcast 'event' to all instantiated sargasso controllers
		@param { String } event - name of sargasso event
		@param { Object } params - array of params to attach to event
		*/ notifyAll(event, params) {
        if ($a2dfa52ef2fbbb46$var$eventNames.indexOf(event) === -1) throw new Error("invalid event name " + event);
        for(let i = 0; i < $a2dfa52ef2fbbb46$export$85e745b96b6487a7.length; i++){
            const peer = $a2dfa52ef2fbbb46$export$85e745b96b6487a7[i];
            if (peer !== this && peer[event]) peer[event].apply(peer, params);
        }
    }
    /*
		@function notifyElement - broadcast event to all sargasso controllers for 'this.element'
		@param { String } event - name of sargasso event
		@param { Object } params - array of params to attach to event
		*/ notifyElement(element, event, params) {
        if ($a2dfa52ef2fbbb46$var$eventNames.indexOf(event) === -1) throw new Error("invalid event name " + event);
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
        return (0, $d6606c57579c6e5f$export$6f53260fffa88f1c).hasClass(this.element, cssClass);
    }
    addClass(cssClasses) {
        (0, $d6606c57579c6e5f$export$6f53260fffa88f1c).addClass(this.element, cssClasses);
    }
    removeClass(cssClasses) {
        (0, $d6606c57579c6e5f$export$6f53260fffa88f1c).removeClass(this.element, cssClasses);
    }
    setCSS(cssObject) {
        (0, $d6606c57579c6e5f$export$6f53260fffa88f1c).setCSS(this.element, cssObject);
    }
    isVisible() {
        return (0, $d6606c57579c6e5f$export$6f53260fffa88f1c).isVisible(this.element);
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

		*/ workerStart(id, codeOrURL) {
        this._workers[id] = (0, $04abf88b58b0ffcd$export$fa28dfcc49831a91).registerWorker(id, codeOrURL);
        (0, $04abf88b58b0ffcd$export$fa28dfcc49831a91).subscribe(this, id);
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
        (0, $04abf88b58b0ffcd$export$788f7857dc8c77f5).subscribe(this, id, data);
        this._observables[id] = (0, $04abf88b58b0ffcd$export$788f7857dc8c77f5).getObservable(id);
        return this._observables[id];
    }
    observableStop(id) {
        if (this._observables[id]) {
            (0, $04abf88b58b0ffcd$export$788f7857dc8c77f5).unSubscribe(this, id);
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
            (0, $04abf88b58b0ffcd$export$fa28dfcc49831a91).unSubscribe(this, id);
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
        if ($a2dfa52ef2fbbb46$export$85e745b96b6487a7.indexOf(this) !== -1) $a2dfa52ef2fbbb46$export$85e745b96b6487a7.splice($a2dfa52ef2fbbb46$export$85e745b96b6487a7.indexOf(this), 1);
    }
    /****************************************************
	EVENT HOOK METHODS - normally not called or overriden
	*****************************************************/ /*
		@function watchDOM - hook called if options.watchDOM set and DOM changed
		*/ watchDOM(root) {
        if (root === this._shadowRoot) // something happend this element's my shadow DOM, tell in the DOM about it
        // so dom observers can take actions such as instantiating new sargasso
        // controllers, etc.
        (0, $04abf88b58b0ffcd$export$77e1d49fdb880d27).observeDOM(this._shadowRoot);
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
        if ((0, $04abf88b58b0ffcd$export$c7320459fd5267c0).inViewPort(this.element)) {
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
$a2dfa52ef2fbbb46$export$22044c20eef36040("Sargasso", $a2dfa52ef2fbbb46$export$d7944a94c1afb262);




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


class $c4dab3631bcf0e71$export$10307b0c33312dbb extends (0, $a2dfa52ef2fbbb46$export$d7944a94c1afb262) {
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
            if ((0, $04abf88b58b0ffcd$export$c7320459fd5267c0).inViewPort(element)) {
                const cls = element.getAttribute("data-lazy-sargasso-class").split(/\s*,\s*/);
                for(let j = 0; j < cls.length; j++){
                    const thing = new (0, $a2dfa52ef2fbbb46$export$ac297e650eeb1e78)[cls[j]](els[i]);
                    thing.start();
                }
                element.removeAttribute("data-lazy-sargasso-class");
            }
        }
    }
}
(0, $a2dfa52ef2fbbb46$export$22044c20eef36040)("LazyInstantiate", $c4dab3631bcf0e71$export$10307b0c33312dbb);


class $6d79acc30e030818$export$26b75d03ac531c24 extends (0, $a2dfa52ef2fbbb46$export$d7944a94c1afb262) {
    constructor(element, options = {}){
        super(element, {
            watchDOM: true,
            mortal: false
        });
        this.lazy = new (0, $c4dab3631bcf0e71$export$10307b0c33312dbb)(element, options);
    }
    start() {
        this.lazy.start();
        super.start();
    }
    instantiate(element) {
        const cls = element.getAttribute("data-sargasso-class").split(/\s*,\s*/);
        for(let i = 0; i < cls.length; i++)try {
            const thing = new (0, $a2dfa52ef2fbbb46$export$ac297e650eeb1e78)[cls[i]](element);
            thing.start();
        } catch (e) {
            console.log("error instantiating " + cls[i], e, (0, $a2dfa52ef2fbbb46$export$ac297e650eeb1e78));
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
        for(let i = 0; i < (0, $a2dfa52ef2fbbb46$export$85e745b96b6487a7).length; i++)if (!(0, $a2dfa52ef2fbbb46$export$85e745b96b6487a7)[i].options.immortal && !(0, $a2dfa52ef2fbbb46$export$85e745b96b6487a7)[i].options.isCustomElement && !document.body.contains((0, $a2dfa52ef2fbbb46$export$85e745b96b6487a7)[i].element)) toCleanup.push((0, $a2dfa52ef2fbbb46$export$85e745b96b6487a7)[i]);
        for(let i1 = 0; i1 < toCleanup.length; i1++)toCleanup[i1].destroy();
    }
}
(0, $a2dfa52ef2fbbb46$export$22044c20eef36040)("SargassoSupervisor", $6d79acc30e030818$export$26b75d03ac531c24);


/**
	Breakpoints

	Sargasso class that maintains css classes on the document body
	to be used in css rules for implementing visibility and
	responsive behavior

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020-2023 Michael Rhodes
**/ 

const $3b466f211d4b9a1d$export$f86ec3d89f756a21 = window.breakpoints || {
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
class $3b466f211d4b9a1d$export$c38d2c1bff643203 extends (0, $a2dfa52ef2fbbb46$export$d7944a94c1afb262) {
    constructor(element, options = {}){
        options.watchResize = true;
        super(element, options);
        this.options.widths = options.widths || $3b466f211d4b9a1d$export$f86ec3d89f756a21;
        this.scale = undefined;
        this.widths = [];
        this.classes = [];
        this.debouncedDetectGeometry = (0, (/*@__PURE__*/$parcel$interopDefault($9fe0242a38a556ef$exports)))(()=>{
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
(0, $a2dfa52ef2fbbb46$export$22044c20eef36040)("Breakpoints", $3b466f211d4b9a1d$export$c38d2c1bff643203);


/**
	HijaxLoader

	Sargasso class that captures links on the page and loads pages
	using AJAX only replacing elements on the page that are marked
	with data-hijax attributes.

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020-2023 Michael Rhodes
**/ 


class $f5869982bc3ea7c2$export$8c08cf4432b2f5b3 extends (0, $a2dfa52ef2fbbb46$export$d7944a94c1afb262) {
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
            (0, $d6606c57579c6e5f$export$6f53260fffa88f1c).addClass(document.body, "hijax-loading");
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
                (0, $04abf88b58b0ffcd$export$c7320459fd5267c0).scrollTop(0);
                this.mergePage(xhr.responseText);
                const oldPage = this.currentPage;
                const frame = ()=>{
                    this.notifyAll("newPage", [
                        oldPage,
                        location.pathname + location.search
                    ]);
                    (0, $d6606c57579c6e5f$export$6f53260fffa88f1c).removeClass(document.body, "hijax-loading");
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
        const fragment = $f5869982bc3ea7c2$var$makeFragment(doc[2]);
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
(0, $a2dfa52ef2fbbb46$export$22044c20eef36040)("HijaxLoader", $f5869982bc3ea7c2$export$8c08cf4432b2f5b3);
// shims for borked browsers
// =========================
const $f5869982bc3ea7c2$var$makeFragment = (html)=>{
    if (document.createRange && document.createRange().createContextualFragment) return document.createRange().createContextualFragment(html);
    const fragment = document.createDocumentFragment();
    const div = document.createElement("div");
    div.insertAdjacentHTML("afterBegin", html);
    fragment.appendChild(div);
    return fragment;
};



let $be4ac01db6cf9f9d$export$7869d9d42a3fc8a6;
const $be4ac01db6cf9f9d$export$80ed8a0252d89225 = (options = {})=>{
    if (options.scrollElement) (0, $04abf88b58b0ffcd$export$c7320459fd5267c0).setOptions(options);
    if (options.breakpoints) {
        const breakpoints = new (0, $3b466f211d4b9a1d$export$c38d2c1bff643203)(document.body, options.breakpoints);
        breakpoints.start();
    }
    if (options.hijax) {
        const hijax = new (0, $f5869982bc3ea7c2$export$8c08cf4432b2f5b3)(document.body, options.hijax);
        hijax.start();
        $be4ac01db6cf9f9d$export$7869d9d42a3fc8a6 = hijax.setPage.bind(hijax);
    } else $be4ac01db6cf9f9d$export$7869d9d42a3fc8a6 = (url)=>{
        document.location.href = url;
    };
    const supervisor = new (0, $6d79acc30e030818$export$26b75d03ac531c24)(document.body, options);
    supervisor.start(options);
    return supervisor;
};






class $1d13337eab472697$export$da2f2f1de028dda3 extends (0, $a2dfa52ef2fbbb46$export$d7944a94c1afb262) {
    constructor(element, options = {}){
        // default to shadow DOM unless otherwise specified by subclass
        options.shadowDOM = options.shadowDOM === undefined ? true : options.shadowDOM;
        // global options for subclasses
        options.componentOptions = window.sagassoComponentOptions || {};
        super(element, options);
        // attributes that trigger template rebuild and render
        this.templateAttributes = [];
        // attributes that trigger render only
        this.renderAttributes = [];
        // current attribute values
        this.templateOptions = {};
        // id of observable
        this.obervableId = (this._hostElement || this.element).getAttribute("data-observable-id");
        // destroyable instantiated objects
        this.toDestroy = [];
    }
    start() {
        super.start();
        // if defined start watching observable data to trigger render on changes
        if (this.obervableId) {
            this.observable = this.observableStart(this.obervableId);
            this.observableData = this.getObservableData(this.obervableId);
        }
        // trigger render on changes to host element attributes
        this.renderOptions = this.observableStart("SargassoComponent-" + this.uid, {});
        // cache host element template and render attribute values
        this.getAttributes();
        // set up mutation observer to watch attribute changes on host element
        this.watchAttributes();
        // args to pass to template function template(data, attributes, options) function
        // arg0 is the observable data
        // arg1 is the current values of the render attributes
        // arg2 is the component options
        this.setTemplateArgs([
            this.observableData ? this.observableData : undefined,
            this.renderOptions.data,
            this.options.componentOptions || {}
        ]);
        // build and install lit-html template
        this.setTemplate(this.buildTemplate()) // set template function
        ;
        // set renderer for template
        if (this._template) this.setRenderer((0, $8Ln3R$render));
    }
    watchAttributes() {
        // all attributes to observe
        this.allAttributes = this.templateAttributes.concat(this.renderAttributes);
        // watch for changes to host element attributes
        this.attributeObserver = new MutationObserver((mutations)=>{
            let needSync = false;
            let needRebuild = false;
            mutations.forEach((mutation)=>{
                if (mutation.type === "attributes") {
                    if (this.allAttributes.indexOf(mutation.attributeName) !== -1) {
                        needSync = true;
                        if (this.templateAttributes.indexOf(mutation.attributeName) !== -1) needRebuild = true;
                    }
                }
            });
            // attribute changed?
            if (needSync) {
                this.getAttributes();
                if (needRebuild) {
                    this.setTemplate(this.buildTemplate()) // set template function
                    ;
                    this.render();
                }
            }
        });
        // start mutation observer
        this.attributeObserver.observe(this._hostElement || this.element, {
            attributes: true
        });
    }
    getAttributes() {
        // update attribute values. changes will trigger render or template rebuild as needed
        for (const attr of this.templateAttributes){
            const val = (this._hostElement || this.element).getAttribute(attr) || (this._hostElement || this.element).hasAttribute(attr) || undefined;
            if (this.templateOptions[attr] !== val) this.templateOptions[attr] = val;
        }
        for (const attr1 of this.renderAttributes){
            const val1 = (this._hostElement || this.element).getAttribute(attr1) || (this._hostElement || this.element).hasAttribute(attr1) || undefined;
            if (this.renderOptions.data[attr1] !== val1) this.renderOptions.data[attr1] = val1;
        }
    }
    buildTemplate() {
        const template = (data, attributes, options)=>(0, $8Ln3R$html)`
			<div class="web-component-body">
				<p>using default buildTemplate - override buildTemplate to customize component markup</p>
				<pre>${this.obervableId}: ${JSON.stringify(data, "", 2)}</pre>
				<pre>attributes: ${JSON.stringify(attributes, "", 2)}</pre>
				<pre>options: ${JSON.stringify(options, "", 2)}</pre>
			</div>
		`;
        return template;
    }
    sleep() {
        if (this.toDestroy) for (const destroyable of this.toDestroy)destroyable.destroy();
        if (this.attributeObserver) this.attributeObserver.disconnect();
        super.sleep();
    }
    _render() {
        super._render();
        this.didRender();
    }
    didRender() {}
}
(0, $a2dfa52ef2fbbb46$export$22044c20eef36040)("SargassoComponent", $1d13337eab472697$export$da2f2f1de028dda3);


const $36a01d5a29783b8e$export$eab97d15b1788b8d = {
    registerSargassoClass: (0, $a2dfa52ef2fbbb46$export$22044c20eef36040),
    bootSargasso: (0, $be4ac01db6cf9f9d$export$80ed8a0252d89225),
    elementTools: (0, $d6606c57579c6e5f$export$6f53260fffa88f1c),
    validate: (0, $6f44ddd09e194478$export$a22775fa5e2eebd9),
    setValidator: (0, $6f44ddd09e194478$export$636d763ed7be9e97)
};
const $36a01d5a29783b8e$export$bce7a36871692cab = {
    theDOMWatcher: (0, $04abf88b58b0ffcd$export$77e1d49fdb880d27),
    theScrollWatcher: (0, $04abf88b58b0ffcd$export$c7320459fd5267c0),
    theResizeWatcher: (0, $04abf88b58b0ffcd$export$497098c8185e6e33),
    theOrientationWatcher: (0, $04abf88b58b0ffcd$export$296acd8d6f329fa3),
    theWorkerWatcher: (0, $04abf88b58b0ffcd$export$fa28dfcc49831a91),
    theObservableObjectWatcher: (0, $04abf88b58b0ffcd$export$788f7857dc8c77f5)
};
const $36a01d5a29783b8e$export$505f1cb98cb78c0d = {
    liveElements: (0, $a2dfa52ef2fbbb46$export$85e745b96b6487a7),
    registeredClasses: (0, $a2dfa52ef2fbbb46$export$ac297e650eeb1e78),
    elementMetaData: (0, $d6606c57579c6e5f$export$8350ba437fdadadb)
};


export {$36a01d5a29783b8e$export$eab97d15b1788b8d as utils, $36a01d5a29783b8e$export$bce7a36871692cab as services, $36a01d5a29783b8e$export$505f1cb98cb78c0d as system, $a2dfa52ef2fbbb46$export$d7944a94c1afb262 as Sargasso, $be4ac01db6cf9f9d$export$7869d9d42a3fc8a6 as loadPageHandler, $4bd7951ed406c253$export$b176171395436676 as ObservableObject, $1d13337eab472697$export$da2f2f1de028dda3 as SargassoComponent};
//# sourceMappingURL=sargasso.mjs.map
