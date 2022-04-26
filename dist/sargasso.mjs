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
parcelRequire.register("g9DJy", function(module, exports) {

var $9YxFa = parcelRequire("9YxFa");

var $88f3p = parcelRequire("88f3p");
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */ var Buffer = moduleExports ? $9YxFa.Buffer : undefined;
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
 */ var isBuffer = nativeIsBuffer || $88f3p;
module.exports = isBuffer;

});
parcelRequire.register("9YxFa", function(module, exports) {

var $6BDa9 = parcelRequire("6BDa9");
/** Detect free variable `self`. */ var $7433d465c46f159c$var$freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var $7433d465c46f159c$var$root = $6BDa9 || $7433d465c46f159c$var$freeSelf || Function('return this')();
module.exports = $7433d465c46f159c$var$root;

});
parcelRequire.register("6BDa9", function(module, exports) {
/** Detect free variable `global` from Node.js. */ var $4cf493ad068b6c35$var$freeGlobal = typeof $parcel$global == 'object' && $parcel$global && $parcel$global.Object === Object && $parcel$global;
module.exports = $4cf493ad068b6c35$var$freeGlobal;

});


parcelRequire.register("88f3p", function(module, exports) {
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
 */ function $5ebabf836e16dd33$var$stubFalse() {
    return false;
}
module.exports = $5ebabf836e16dd33$var$stubFalse;

});


parcelRequire.register("8mttB", function(module, exports) {

var $6BDa9 = parcelRequire("6BDa9");
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && $6BDa9.process;
/** Used to access faster Node.js helpers. */ var nodeUtil = function() {
    try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require('util').types;
        if (types) return types;
        // Legacy `process.binding('util')` for Node.js < 10.
        return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
}();
module.exports = nodeUtil;

});

var $e8919de24526985b$exports = {};
var $2d2b62336f9f6207$exports = {};
var $65b2df818a542e13$exports = {};
var $30c0accd4c25f150$exports = {};
var $ab1e9e4db6409106$exports = {};

var $9YxFa = parcelRequire("9YxFa");
/** Built-in value references. */ var $ab1e9e4db6409106$var$Symbol = $9YxFa.Symbol;
$ab1e9e4db6409106$exports = $ab1e9e4db6409106$var$Symbol;


var $5ff01c50dc1c6ed4$exports = {};
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ function $5ff01c50dc1c6ed4$var$arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while(++index < length)result[index] = iteratee(array[index], index, array);
    return result;
}
$5ff01c50dc1c6ed4$exports = $5ff01c50dc1c6ed4$var$arrayMap;


var $3f6ab8b9844a2fb4$exports = {};
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
 */ var $3f6ab8b9844a2fb4$var$isArray = Array.isArray;
$3f6ab8b9844a2fb4$exports = $3f6ab8b9844a2fb4$var$isArray;


var $52f0b33544ceb6d0$exports = {};
var $3fa59a4993df039a$exports = {};

var $1e5f794d20a941c4$exports = {};

/** Used for built-in method references. */ var $1e5f794d20a941c4$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $1e5f794d20a941c4$var$hasOwnProperty = $1e5f794d20a941c4$var$objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var $1e5f794d20a941c4$var$nativeObjectToString = $1e5f794d20a941c4$var$objectProto.toString;
/** Built-in value references. */ var $1e5f794d20a941c4$var$symToStringTag = $ab1e9e4db6409106$exports ? $ab1e9e4db6409106$exports.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function $1e5f794d20a941c4$var$getRawTag(value) {
    var isOwn = $1e5f794d20a941c4$var$hasOwnProperty.call(value, $1e5f794d20a941c4$var$symToStringTag), tag = value[$1e5f794d20a941c4$var$symToStringTag];
    try {
        value[$1e5f794d20a941c4$var$symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = $1e5f794d20a941c4$var$nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[$1e5f794d20a941c4$var$symToStringTag] = tag;
        else delete value[$1e5f794d20a941c4$var$symToStringTag];
    }
    return result;
}
$1e5f794d20a941c4$exports = $1e5f794d20a941c4$var$getRawTag;


var $676aaff17bb8b0c7$exports = {};
/** Used for built-in method references. */ var $676aaff17bb8b0c7$var$objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var $676aaff17bb8b0c7$var$nativeObjectToString = $676aaff17bb8b0c7$var$objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function $676aaff17bb8b0c7$var$objectToString(value) {
    return $676aaff17bb8b0c7$var$nativeObjectToString.call(value);
}
$676aaff17bb8b0c7$exports = $676aaff17bb8b0c7$var$objectToString;


/** `Object#toString` result references. */ var $3fa59a4993df039a$var$nullTag = '[object Null]', $3fa59a4993df039a$var$undefinedTag = '[object Undefined]';
/** Built-in value references. */ var $3fa59a4993df039a$var$symToStringTag = $ab1e9e4db6409106$exports ? $ab1e9e4db6409106$exports.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function $3fa59a4993df039a$var$baseGetTag(value) {
    if (value == null) return value === undefined ? $3fa59a4993df039a$var$undefinedTag : $3fa59a4993df039a$var$nullTag;
    return $3fa59a4993df039a$var$symToStringTag && $3fa59a4993df039a$var$symToStringTag in Object(value) ? $1e5f794d20a941c4$exports(value) : $676aaff17bb8b0c7$exports(value);
}
$3fa59a4993df039a$exports = $3fa59a4993df039a$var$baseGetTag;


var $901275e69ea06317$exports = {};
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
 */ function $901275e69ea06317$var$isObjectLike(value) {
    return value != null && typeof value == 'object';
}
$901275e69ea06317$exports = $901275e69ea06317$var$isObjectLike;


/** `Object#toString` result references. */ var $52f0b33544ceb6d0$var$symbolTag = '[object Symbol]';
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
 */ function $52f0b33544ceb6d0$var$isSymbol(value) {
    return typeof value == 'symbol' || $901275e69ea06317$exports(value) && $3fa59a4993df039a$exports(value) == $52f0b33544ceb6d0$var$symbolTag;
}
$52f0b33544ceb6d0$exports = $52f0b33544ceb6d0$var$isSymbol;


/** Used as references for various `Number` constants. */ var $30c0accd4c25f150$var$INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */ var $30c0accd4c25f150$var$symbolProto = $ab1e9e4db6409106$exports ? $ab1e9e4db6409106$exports.prototype : undefined, $30c0accd4c25f150$var$symbolToString = $30c0accd4c25f150$var$symbolProto ? $30c0accd4c25f150$var$symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */ function $30c0accd4c25f150$var$baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') return value;
    if ($3f6ab8b9844a2fb4$exports(value)) // Recursively convert values (susceptible to call stack limits).
    return $5ff01c50dc1c6ed4$exports(value, $30c0accd4c25f150$var$baseToString) + '';
    if ($52f0b33544ceb6d0$exports(value)) return $30c0accd4c25f150$var$symbolToString ? $30c0accd4c25f150$var$symbolToString.call(value) : '';
    var result = value + '';
    return result == '0' && 1 / value == -$30c0accd4c25f150$var$INFINITY ? '-0' : result;
}
$30c0accd4c25f150$exports = $30c0accd4c25f150$var$baseToString;


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
 */ function $65b2df818a542e13$var$toString(value) {
    return value == null ? '' : $30c0accd4c25f150$exports(value);
}
$65b2df818a542e13$exports = $65b2df818a542e13$var$toString;


var $4b15f96880b5defa$exports = {};
var $4a44b85fad599f22$exports = {};
var $69fd9e7b920a71b5$exports = {};
var $e3e8cfda359fe13c$exports = {};
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */ function $e3e8cfda359fe13c$var$baseSlice(array, start, end) {
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
$e3e8cfda359fe13c$exports = $e3e8cfda359fe13c$var$baseSlice;


/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */ function $69fd9e7b920a71b5$var$castSlice(array, start, end) {
    var length = array.length;
    end = end === undefined ? length : end;
    return !start && end >= length ? array : $e3e8cfda359fe13c$exports(array, start, end);
}
$69fd9e7b920a71b5$exports = $69fd9e7b920a71b5$var$castSlice;


var $c5113bb1d5fac6cc$exports = {};
/** Used to compose unicode character classes. */ var $c5113bb1d5fac6cc$var$rsAstralRange = '\\ud800-\\udfff', $c5113bb1d5fac6cc$var$rsComboMarksRange = '\\u0300-\\u036f', $c5113bb1d5fac6cc$var$reComboHalfMarksRange = '\\ufe20-\\ufe2f', $c5113bb1d5fac6cc$var$rsComboSymbolsRange = '\\u20d0-\\u20ff', $c5113bb1d5fac6cc$var$rsComboRange = $c5113bb1d5fac6cc$var$rsComboMarksRange + $c5113bb1d5fac6cc$var$reComboHalfMarksRange + $c5113bb1d5fac6cc$var$rsComboSymbolsRange, $c5113bb1d5fac6cc$var$rsVarRange = '\\ufe0e\\ufe0f';
/** Used to compose unicode capture groups. */ var $c5113bb1d5fac6cc$var$rsZWJ = '\\u200d';
/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */ var $c5113bb1d5fac6cc$var$reHasUnicode = RegExp('[' + $c5113bb1d5fac6cc$var$rsZWJ + $c5113bb1d5fac6cc$var$rsAstralRange + $c5113bb1d5fac6cc$var$rsComboRange + $c5113bb1d5fac6cc$var$rsVarRange + ']');
/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */ function $c5113bb1d5fac6cc$var$hasUnicode(string) {
    return $c5113bb1d5fac6cc$var$reHasUnicode.test(string);
}
$c5113bb1d5fac6cc$exports = $c5113bb1d5fac6cc$var$hasUnicode;


var $d948f07aa76ad693$exports = {};
var $9ddd627527eb4dc3$exports = {};
/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function $9ddd627527eb4dc3$var$asciiToArray(string) {
    return string.split('');
}
$9ddd627527eb4dc3$exports = $9ddd627527eb4dc3$var$asciiToArray;



var $13151fa0fa8a49ed$exports = {};
/** Used to compose unicode character classes. */ var $13151fa0fa8a49ed$var$rsAstralRange = '\\ud800-\\udfff', $13151fa0fa8a49ed$var$rsComboMarksRange = '\\u0300-\\u036f', $13151fa0fa8a49ed$var$reComboHalfMarksRange = '\\ufe20-\\ufe2f', $13151fa0fa8a49ed$var$rsComboSymbolsRange = '\\u20d0-\\u20ff', $13151fa0fa8a49ed$var$rsComboRange = $13151fa0fa8a49ed$var$rsComboMarksRange + $13151fa0fa8a49ed$var$reComboHalfMarksRange + $13151fa0fa8a49ed$var$rsComboSymbolsRange, $13151fa0fa8a49ed$var$rsVarRange = '\\ufe0e\\ufe0f';
/** Used to compose unicode capture groups. */ var $13151fa0fa8a49ed$var$rsAstral = '[' + $13151fa0fa8a49ed$var$rsAstralRange + ']', $13151fa0fa8a49ed$var$rsCombo = '[' + $13151fa0fa8a49ed$var$rsComboRange + ']', $13151fa0fa8a49ed$var$rsFitz = '\\ud83c[\\udffb-\\udfff]', $13151fa0fa8a49ed$var$rsModifier = '(?:' + $13151fa0fa8a49ed$var$rsCombo + '|' + $13151fa0fa8a49ed$var$rsFitz + ')', $13151fa0fa8a49ed$var$rsNonAstral = '[^' + $13151fa0fa8a49ed$var$rsAstralRange + ']', $13151fa0fa8a49ed$var$rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}', $13151fa0fa8a49ed$var$rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]', $13151fa0fa8a49ed$var$rsZWJ = '\\u200d';
/** Used to compose unicode regexes. */ var $13151fa0fa8a49ed$var$reOptMod = $13151fa0fa8a49ed$var$rsModifier + '?', $13151fa0fa8a49ed$var$rsOptVar = '[' + $13151fa0fa8a49ed$var$rsVarRange + ']?', $13151fa0fa8a49ed$var$rsOptJoin = '(?:' + $13151fa0fa8a49ed$var$rsZWJ + '(?:' + [
    $13151fa0fa8a49ed$var$rsNonAstral,
    $13151fa0fa8a49ed$var$rsRegional,
    $13151fa0fa8a49ed$var$rsSurrPair
].join('|') + ')' + $13151fa0fa8a49ed$var$rsOptVar + $13151fa0fa8a49ed$var$reOptMod + ')*', $13151fa0fa8a49ed$var$rsSeq = $13151fa0fa8a49ed$var$rsOptVar + $13151fa0fa8a49ed$var$reOptMod + $13151fa0fa8a49ed$var$rsOptJoin, $13151fa0fa8a49ed$var$rsSymbol = '(?:' + [
    $13151fa0fa8a49ed$var$rsNonAstral + $13151fa0fa8a49ed$var$rsCombo + '?',
    $13151fa0fa8a49ed$var$rsCombo,
    $13151fa0fa8a49ed$var$rsRegional,
    $13151fa0fa8a49ed$var$rsSurrPair,
    $13151fa0fa8a49ed$var$rsAstral
].join('|') + ')';
/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */ var $13151fa0fa8a49ed$var$reUnicode = RegExp($13151fa0fa8a49ed$var$rsFitz + '(?=' + $13151fa0fa8a49ed$var$rsFitz + ')|' + $13151fa0fa8a49ed$var$rsSymbol + $13151fa0fa8a49ed$var$rsSeq, 'g');
/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function $13151fa0fa8a49ed$var$unicodeToArray(string) {
    return string.match($13151fa0fa8a49ed$var$reUnicode) || [];
}
$13151fa0fa8a49ed$exports = $13151fa0fa8a49ed$var$unicodeToArray;


/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function $d948f07aa76ad693$var$stringToArray(string) {
    return $c5113bb1d5fac6cc$exports(string) ? $13151fa0fa8a49ed$exports(string) : $9ddd627527eb4dc3$exports(string);
}
$d948f07aa76ad693$exports = $d948f07aa76ad693$var$stringToArray;



/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */ function $4a44b85fad599f22$var$createCaseFirst(methodName) {
    return function(string) {
        string = $65b2df818a542e13$exports(string);
        var strSymbols = $c5113bb1d5fac6cc$exports(string) ? $d948f07aa76ad693$exports(string) : undefined;
        var chr = strSymbols ? strSymbols[0] : string.charAt(0);
        var trailing = strSymbols ? $69fd9e7b920a71b5$exports(strSymbols, 1).join('') : string.slice(1);
        return chr[methodName]() + trailing;
    };
}
$4a44b85fad599f22$exports = $4a44b85fad599f22$var$createCaseFirst;


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
 */ var $4b15f96880b5defa$var$upperFirst = $4a44b85fad599f22$exports('toUpperCase');
$4b15f96880b5defa$exports = $4b15f96880b5defa$var$upperFirst;


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
 */ function $2d2b62336f9f6207$var$capitalize(string) {
    return $4b15f96880b5defa$exports($65b2df818a542e13$exports(string).toLowerCase());
}
$2d2b62336f9f6207$exports = $2d2b62336f9f6207$var$capitalize;


var $ab2569b856935945$exports = {};
var $5576fd5d61766ae7$exports = {};
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
 */ function $5576fd5d61766ae7$var$arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1, length = array == null ? 0 : array.length;
    if (initAccum && length) accumulator = array[++index];
    while(++index < length)accumulator = iteratee(accumulator, array[index], index, array);
    return accumulator;
}
$5576fd5d61766ae7$exports = $5576fd5d61766ae7$var$arrayReduce;


var $6bde59346543e760$exports = {};
var $f7143d1fb160dc9c$exports = {};
var $017638449590e005$exports = {};
/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */ function $017638449590e005$var$basePropertyOf(object) {
    return function(key) {
        return object == null ? undefined : object[key];
    };
}
$017638449590e005$exports = $017638449590e005$var$basePropertyOf;


/** Used to map Latin Unicode letters to basic Latin letters. */ var $f7143d1fb160dc9c$var$deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',
    '\xc1': 'A',
    '\xc2': 'A',
    '\xc3': 'A',
    '\xc4': 'A',
    '\xc5': 'A',
    '\xe0': 'a',
    '\xe1': 'a',
    '\xe2': 'a',
    '\xe3': 'a',
    '\xe4': 'a',
    '\xe5': 'a',
    '\xc7': 'C',
    '\xe7': 'c',
    '\xd0': 'D',
    '\xf0': 'd',
    '\xc8': 'E',
    '\xc9': 'E',
    '\xca': 'E',
    '\xcb': 'E',
    '\xe8': 'e',
    '\xe9': 'e',
    '\xea': 'e',
    '\xeb': 'e',
    '\xcc': 'I',
    '\xcd': 'I',
    '\xce': 'I',
    '\xcf': 'I',
    '\xec': 'i',
    '\xed': 'i',
    '\xee': 'i',
    '\xef': 'i',
    '\xd1': 'N',
    '\xf1': 'n',
    '\xd2': 'O',
    '\xd3': 'O',
    '\xd4': 'O',
    '\xd5': 'O',
    '\xd6': 'O',
    '\xd8': 'O',
    '\xf2': 'o',
    '\xf3': 'o',
    '\xf4': 'o',
    '\xf5': 'o',
    '\xf6': 'o',
    '\xf8': 'o',
    '\xd9': 'U',
    '\xda': 'U',
    '\xdb': 'U',
    '\xdc': 'U',
    '\xf9': 'u',
    '\xfa': 'u',
    '\xfb': 'u',
    '\xfc': 'u',
    '\xdd': 'Y',
    '\xfd': 'y',
    '\xff': 'y',
    '\xc6': 'Ae',
    '\xe6': 'ae',
    '\xde': 'Th',
    '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',
    '\u0102': 'A',
    '\u0104': 'A',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u0105': 'a',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010a': 'C',
    '\u010c': 'C',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010b': 'c',
    '\u010d': 'c',
    '\u010e': 'D',
    '\u0110': 'D',
    '\u010f': 'd',
    '\u0111': 'd',
    '\u0112': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u0118': 'E',
    '\u011a': 'E',
    '\u0113': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u0119': 'e',
    '\u011b': 'e',
    '\u011c': 'G',
    '\u011e': 'G',
    '\u0120': 'G',
    '\u0122': 'G',
    '\u011d': 'g',
    '\u011f': 'g',
    '\u0121': 'g',
    '\u0123': 'g',
    '\u0124': 'H',
    '\u0126': 'H',
    '\u0125': 'h',
    '\u0127': 'h',
    '\u0128': 'I',
    '\u012a': 'I',
    '\u012c': 'I',
    '\u012e': 'I',
    '\u0130': 'I',
    '\u0129': 'i',
    '\u012b': 'i',
    '\u012d': 'i',
    '\u012f': 'i',
    '\u0131': 'i',
    '\u0134': 'J',
    '\u0135': 'j',
    '\u0136': 'K',
    '\u0137': 'k',
    '\u0138': 'k',
    '\u0139': 'L',
    '\u013b': 'L',
    '\u013d': 'L',
    '\u013f': 'L',
    '\u0141': 'L',
    '\u013a': 'l',
    '\u013c': 'l',
    '\u013e': 'l',
    '\u0140': 'l',
    '\u0142': 'l',
    '\u0143': 'N',
    '\u0145': 'N',
    '\u0147': 'N',
    '\u014a': 'N',
    '\u0144': 'n',
    '\u0146': 'n',
    '\u0148': 'n',
    '\u014b': 'n',
    '\u014c': 'O',
    '\u014e': 'O',
    '\u0150': 'O',
    '\u014d': 'o',
    '\u014f': 'o',
    '\u0151': 'o',
    '\u0154': 'R',
    '\u0156': 'R',
    '\u0158': 'R',
    '\u0155': 'r',
    '\u0157': 'r',
    '\u0159': 'r',
    '\u015a': 'S',
    '\u015c': 'S',
    '\u015e': 'S',
    '\u0160': 'S',
    '\u015b': 's',
    '\u015d': 's',
    '\u015f': 's',
    '\u0161': 's',
    '\u0162': 'T',
    '\u0164': 'T',
    '\u0166': 'T',
    '\u0163': 't',
    '\u0165': 't',
    '\u0167': 't',
    '\u0168': 'U',
    '\u016a': 'U',
    '\u016c': 'U',
    '\u016e': 'U',
    '\u0170': 'U',
    '\u0172': 'U',
    '\u0169': 'u',
    '\u016b': 'u',
    '\u016d': 'u',
    '\u016f': 'u',
    '\u0171': 'u',
    '\u0173': 'u',
    '\u0174': 'W',
    '\u0175': 'w',
    '\u0176': 'Y',
    '\u0177': 'y',
    '\u0178': 'Y',
    '\u0179': 'Z',
    '\u017b': 'Z',
    '\u017d': 'Z',
    '\u017a': 'z',
    '\u017c': 'z',
    '\u017e': 'z',
    '\u0132': 'IJ',
    '\u0133': 'ij',
    '\u0152': 'Oe',
    '\u0153': 'oe',
    '\u0149': "'n",
    '\u017f': 's'
};
/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */ var $f7143d1fb160dc9c$var$deburrLetter = $017638449590e005$exports($f7143d1fb160dc9c$var$deburredLetters);
$f7143d1fb160dc9c$exports = $f7143d1fb160dc9c$var$deburrLetter;



/** Used to match Latin Unicode letters (excluding mathematical operators). */ var $6bde59346543e760$var$reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
/** Used to compose unicode character classes. */ var $6bde59346543e760$var$rsComboMarksRange = '\\u0300-\\u036f', $6bde59346543e760$var$reComboHalfMarksRange = '\\ufe20-\\ufe2f', $6bde59346543e760$var$rsComboSymbolsRange = '\\u20d0-\\u20ff', $6bde59346543e760$var$rsComboRange = $6bde59346543e760$var$rsComboMarksRange + $6bde59346543e760$var$reComboHalfMarksRange + $6bde59346543e760$var$rsComboSymbolsRange;
/** Used to compose unicode capture groups. */ var $6bde59346543e760$var$rsCombo = '[' + $6bde59346543e760$var$rsComboRange + ']';
/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */ var $6bde59346543e760$var$reComboMark = RegExp($6bde59346543e760$var$rsCombo, 'g');
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
 */ function $6bde59346543e760$var$deburr(string) {
    string = $65b2df818a542e13$exports(string);
    return string && string.replace($6bde59346543e760$var$reLatin, $f7143d1fb160dc9c$exports).replace($6bde59346543e760$var$reComboMark, '');
}
$6bde59346543e760$exports = $6bde59346543e760$var$deburr;


var $911ca5c680a25185$exports = {};
var $166f9141c96e265e$exports = {};
/** Used to match words composed of alphanumeric characters. */ var $166f9141c96e265e$var$reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */ function $166f9141c96e265e$var$asciiWords(string) {
    return string.match($166f9141c96e265e$var$reAsciiWord) || [];
}
$166f9141c96e265e$exports = $166f9141c96e265e$var$asciiWords;


var $b2e45af12efde221$exports = {};
/** Used to detect strings that need a more robust regexp to match words. */ var $b2e45af12efde221$var$reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */ function $b2e45af12efde221$var$hasUnicodeWord(string) {
    return $b2e45af12efde221$var$reHasUnicodeWord.test(string);
}
$b2e45af12efde221$exports = $b2e45af12efde221$var$hasUnicodeWord;



var $37a2fe7d6487aaa0$exports = {};
/** Used to compose unicode character classes. */ var $37a2fe7d6487aaa0$var$rsAstralRange = '\\ud800-\\udfff', $37a2fe7d6487aaa0$var$rsComboMarksRange = '\\u0300-\\u036f', $37a2fe7d6487aaa0$var$reComboHalfMarksRange = '\\ufe20-\\ufe2f', $37a2fe7d6487aaa0$var$rsComboSymbolsRange = '\\u20d0-\\u20ff', $37a2fe7d6487aaa0$var$rsComboRange = $37a2fe7d6487aaa0$var$rsComboMarksRange + $37a2fe7d6487aaa0$var$reComboHalfMarksRange + $37a2fe7d6487aaa0$var$rsComboSymbolsRange, $37a2fe7d6487aaa0$var$rsDingbatRange = '\\u2700-\\u27bf', $37a2fe7d6487aaa0$var$rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff', $37a2fe7d6487aaa0$var$rsMathOpRange = '\\xac\\xb1\\xd7\\xf7', $37a2fe7d6487aaa0$var$rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf', $37a2fe7d6487aaa0$var$rsPunctuationRange = '\\u2000-\\u206f', $37a2fe7d6487aaa0$var$rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000', $37a2fe7d6487aaa0$var$rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde', $37a2fe7d6487aaa0$var$rsVarRange = '\\ufe0e\\ufe0f', $37a2fe7d6487aaa0$var$rsBreakRange = $37a2fe7d6487aaa0$var$rsMathOpRange + $37a2fe7d6487aaa0$var$rsNonCharRange + $37a2fe7d6487aaa0$var$rsPunctuationRange + $37a2fe7d6487aaa0$var$rsSpaceRange;
/** Used to compose unicode capture groups. */ var $37a2fe7d6487aaa0$var$rsApos = "['\u2019]", $37a2fe7d6487aaa0$var$rsBreak = '[' + $37a2fe7d6487aaa0$var$rsBreakRange + ']', $37a2fe7d6487aaa0$var$rsCombo = '[' + $37a2fe7d6487aaa0$var$rsComboRange + ']', $37a2fe7d6487aaa0$var$rsDigits = '\\d+', $37a2fe7d6487aaa0$var$rsDingbat = '[' + $37a2fe7d6487aaa0$var$rsDingbatRange + ']', $37a2fe7d6487aaa0$var$rsLower = '[' + $37a2fe7d6487aaa0$var$rsLowerRange + ']', $37a2fe7d6487aaa0$var$rsMisc = '[^' + $37a2fe7d6487aaa0$var$rsAstralRange + $37a2fe7d6487aaa0$var$rsBreakRange + $37a2fe7d6487aaa0$var$rsDigits + $37a2fe7d6487aaa0$var$rsDingbatRange + $37a2fe7d6487aaa0$var$rsLowerRange + $37a2fe7d6487aaa0$var$rsUpperRange + ']', $37a2fe7d6487aaa0$var$rsFitz = '\\ud83c[\\udffb-\\udfff]', $37a2fe7d6487aaa0$var$rsModifier = '(?:' + $37a2fe7d6487aaa0$var$rsCombo + '|' + $37a2fe7d6487aaa0$var$rsFitz + ')', $37a2fe7d6487aaa0$var$rsNonAstral = '[^' + $37a2fe7d6487aaa0$var$rsAstralRange + ']', $37a2fe7d6487aaa0$var$rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}', $37a2fe7d6487aaa0$var$rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]', $37a2fe7d6487aaa0$var$rsUpper = '[' + $37a2fe7d6487aaa0$var$rsUpperRange + ']', $37a2fe7d6487aaa0$var$rsZWJ = '\\u200d';
/** Used to compose unicode regexes. */ var $37a2fe7d6487aaa0$var$rsMiscLower = '(?:' + $37a2fe7d6487aaa0$var$rsLower + '|' + $37a2fe7d6487aaa0$var$rsMisc + ')', $37a2fe7d6487aaa0$var$rsMiscUpper = '(?:' + $37a2fe7d6487aaa0$var$rsUpper + '|' + $37a2fe7d6487aaa0$var$rsMisc + ')', $37a2fe7d6487aaa0$var$rsOptContrLower = '(?:' + $37a2fe7d6487aaa0$var$rsApos + '(?:d|ll|m|re|s|t|ve))?', $37a2fe7d6487aaa0$var$rsOptContrUpper = '(?:' + $37a2fe7d6487aaa0$var$rsApos + '(?:D|LL|M|RE|S|T|VE))?', $37a2fe7d6487aaa0$var$reOptMod = $37a2fe7d6487aaa0$var$rsModifier + '?', $37a2fe7d6487aaa0$var$rsOptVar = '[' + $37a2fe7d6487aaa0$var$rsVarRange + ']?', $37a2fe7d6487aaa0$var$rsOptJoin = '(?:' + $37a2fe7d6487aaa0$var$rsZWJ + '(?:' + [
    $37a2fe7d6487aaa0$var$rsNonAstral,
    $37a2fe7d6487aaa0$var$rsRegional,
    $37a2fe7d6487aaa0$var$rsSurrPair
].join('|') + ')' + $37a2fe7d6487aaa0$var$rsOptVar + $37a2fe7d6487aaa0$var$reOptMod + ')*', $37a2fe7d6487aaa0$var$rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])', $37a2fe7d6487aaa0$var$rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])', $37a2fe7d6487aaa0$var$rsSeq = $37a2fe7d6487aaa0$var$rsOptVar + $37a2fe7d6487aaa0$var$reOptMod + $37a2fe7d6487aaa0$var$rsOptJoin, $37a2fe7d6487aaa0$var$rsEmoji = '(?:' + [
    $37a2fe7d6487aaa0$var$rsDingbat,
    $37a2fe7d6487aaa0$var$rsRegional,
    $37a2fe7d6487aaa0$var$rsSurrPair
].join('|') + ')' + $37a2fe7d6487aaa0$var$rsSeq;
/** Used to match complex or compound words. */ var $37a2fe7d6487aaa0$var$reUnicodeWord = RegExp([
    $37a2fe7d6487aaa0$var$rsUpper + '?' + $37a2fe7d6487aaa0$var$rsLower + '+' + $37a2fe7d6487aaa0$var$rsOptContrLower + '(?=' + [
        $37a2fe7d6487aaa0$var$rsBreak,
        $37a2fe7d6487aaa0$var$rsUpper,
        '$'
    ].join('|') + ')',
    $37a2fe7d6487aaa0$var$rsMiscUpper + '+' + $37a2fe7d6487aaa0$var$rsOptContrUpper + '(?=' + [
        $37a2fe7d6487aaa0$var$rsBreak,
        $37a2fe7d6487aaa0$var$rsUpper + $37a2fe7d6487aaa0$var$rsMiscLower,
        '$'
    ].join('|') + ')',
    $37a2fe7d6487aaa0$var$rsUpper + '?' + $37a2fe7d6487aaa0$var$rsMiscLower + '+' + $37a2fe7d6487aaa0$var$rsOptContrLower,
    $37a2fe7d6487aaa0$var$rsUpper + '+' + $37a2fe7d6487aaa0$var$rsOptContrUpper,
    $37a2fe7d6487aaa0$var$rsOrdUpper,
    $37a2fe7d6487aaa0$var$rsOrdLower,
    $37a2fe7d6487aaa0$var$rsDigits,
    $37a2fe7d6487aaa0$var$rsEmoji
].join('|'), 'g');
/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */ function $37a2fe7d6487aaa0$var$unicodeWords(string) {
    return string.match($37a2fe7d6487aaa0$var$reUnicodeWord) || [];
}
$37a2fe7d6487aaa0$exports = $37a2fe7d6487aaa0$var$unicodeWords;


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
 */ function $911ca5c680a25185$var$words(string, pattern, guard) {
    string = $65b2df818a542e13$exports(string);
    pattern = guard ? undefined : pattern;
    if (pattern === undefined) return $b2e45af12efde221$exports(string) ? $37a2fe7d6487aaa0$exports(string) : $166f9141c96e265e$exports(string);
    return string.match(pattern) || [];
}
$911ca5c680a25185$exports = $911ca5c680a25185$var$words;


/** Used to compose unicode capture groups. */ var $ab2569b856935945$var$rsApos = "['\u2019]";
/** Used to match apostrophes. */ var $ab2569b856935945$var$reApos = RegExp($ab2569b856935945$var$rsApos, 'g');
/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */ function $ab2569b856935945$var$createCompounder(callback) {
    return function(string) {
        return $5576fd5d61766ae7$exports($911ca5c680a25185$exports($6bde59346543e760$exports(string).replace($ab2569b856935945$var$reApos, '')), callback, '');
    };
}
$ab2569b856935945$exports = $ab2569b856935945$var$createCompounder;


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
 */ var $e8919de24526985b$var$camelCase = $ab2569b856935945$exports(function(result, word, index) {
    word = word.toLowerCase();
    return result + (index ? $2d2b62336f9f6207$exports(word) : word);
});
$e8919de24526985b$exports = $e8919de24526985b$var$camelCase;


const $2db055cf8ef21bb4$var$validators = {};
const $2db055cf8ef21bb4$export$636d763ed7be9e97 = (name, fn)=>{
    $2db055cf8ef21bb4$var$validators[name] = fn;
};
$2db055cf8ef21bb4$export$636d763ed7be9e97('isDefined', (arg)=>{
    return arg !== undefined;
});
$2db055cf8ef21bb4$export$636d763ed7be9e97('isUnDefined', (arg)=>{
    return arg === undefined;
});
$2db055cf8ef21bb4$export$636d763ed7be9e97('isNull', (arg)=>{
    return arg === null;
});
$2db055cf8ef21bb4$export$636d763ed7be9e97('isElement', (arg)=>{
    return arg && (arg instanceof Element || arg instanceof Window);
});
$2db055cf8ef21bb4$export$636d763ed7be9e97('isEventTarget', (arg)=>{
    return arg && arg instanceof EventTarget;
});
$2db055cf8ef21bb4$export$636d763ed7be9e97('isString', (arg)=>{
    return arg && (typeof arg === 'string' || arg instanceof String);
});
$2db055cf8ef21bb4$export$636d763ed7be9e97('isArray', (arg)=>{
    return arg && arg instanceof Array;
});
$2db055cf8ef21bb4$export$636d763ed7be9e97('notEmpty', (arg)=>{
    return arg instanceof Array ? arg.length !== 0 : arg !== '';
});
$2db055cf8ef21bb4$export$636d763ed7be9e97('isEmpty', (arg)=>{
    return arg === undefined || !arg || (arg instanceof Array ? arg.length === 0 : arg === '');
});
$2db055cf8ef21bb4$export$636d763ed7be9e97('isObject', (arg)=>{
    return arg && arg instanceof Object;
});
$2db055cf8ef21bb4$export$636d763ed7be9e97('isFunction', (arg)=>{
    return arg && typeof arg === 'function';
});
// tests is an array of validators which must be all evaluate to true
// if top level element is an sub array then the sub array is evaluated as an 'or'
// ['this','and',['either','or']]
const $2db055cf8ef21bb4$export$a22775fa5e2eebd9 = (param, arg, tests)=>{
    // console.log(param, arg)
    const allOf = tests.map((test)=>{
        if (test instanceof Array) {
            const anyOf = test.map((orTest)=>{
                return $2db055cf8ef21bb4$var$validators[orTest] && $2db055cf8ef21bb4$var$validators[orTest](arg);
            });
            return anyOf.indexOf(true) !== -1;
        } else return $2db055cf8ef21bb4$var$validators[test] && $2db055cf8ef21bb4$var$validators[test](arg);
    });
    if (allOf.indexOf(false) !== -1) throw new Error('call to ' + param + ' invalid value: ' + arg + ' ' + tests, 0 + allOf);
};


const $fa90420f3b30b29c$var$elementMetaData = new WeakMap();
const $fa90420f3b30b29c$var$hasClass = (element, cssClass)=>{
    $2db055cf8ef21bb4$export$a22775fa5e2eebd9('hasClass element', element, [
        'isDefined',
        'isElement'
    ]);
    $2db055cf8ef21bb4$export$a22775fa5e2eebd9('hasClass cssClass', cssClass, [
        'isDefined',
        'notEmpty',
        'isString'
    ]);
    const className = element.className || '';
    const classes = className.split(/\s+/);
    return classes.indexOf(cssClass) !== -1;
};
// addClasses can be:
// a string 'someclass'
// a list delimited by comma or space 'class1 class3 class4'
// an array ['class1','class2']
const $fa90420f3b30b29c$var$addClass = (element, addClasses)=>{
    $2db055cf8ef21bb4$export$a22775fa5e2eebd9('addClass element', element, [
        'isDefined',
        'isElement'
    ]);
    $2db055cf8ef21bb4$export$a22775fa5e2eebd9('addClass addClasses', addClasses, [
        'isDefined',
        'notEmpty',
        [
            'isString',
            'isArray'
        ]
    ]);
    const className = element.className || '';
    const classes = className.split(/\s+/);
    if (!Array.isArray(addClasses)) addClasses = addClasses.split(/[\s,]/);
    addClasses.forEach((c)=>{
        c = c.trim();
        if (classes.indexOf(c) === -1) classes.push(c);
    });
    element.className = classes.join(' ');
};
// removeClasses can be:
// a string 'someclass'
// a list delimited by comma or space 'class1 class3 class4'
// an array ['class1','class2']
const $fa90420f3b30b29c$var$removeClass = (element, removeClasses)=>{
    $2db055cf8ef21bb4$export$a22775fa5e2eebd9('removeClass element', element, [
        'isDefined',
        'isElement'
    ]);
    $2db055cf8ef21bb4$export$a22775fa5e2eebd9('removeClass removeClasses', removeClasses, [
        'isDefined',
        'notEmpty',
        [
            'isString',
            'isArray'
        ]
    ]);
    const className = element.className || '';
    const classes = className.split(/\s+/);
    if (!Array.isArray(removeClasses)) removeClasses = removeClasses.split(/[\s,]/);
    removeClasses.forEach((c)=>{
        c = c.trim();
        if (classes.indexOf(c) !== -1) classes.splice(classes.indexOf(c), 1);
    });
    element.className = classes.join(' ');
};
const $fa90420f3b30b29c$var$isVisible = (element)=>{
    $2db055cf8ef21bb4$export$a22775fa5e2eebd9('isVisible element', element, [
        'isDefined',
        'isElement'
    ]);
    return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
};
const $fa90420f3b30b29c$var$inViewPort = (element, container = window)=>{
    $2db055cf8ef21bb4$export$a22775fa5e2eebd9('inViewPort element', element, [
        'isDefined',
        'isElement'
    ]);
    const rect = element.getBoundingClientRect();
    const visible = $fa90420f3b30b29c$var$isVisible(element);
    const aboveTheTop = rect.bottom < 0;
    let belowTheFold;
    if (container.self === window) belowTheFold = rect.top > (window.innerHeight || document.documentElement.clientHeight);
    else belowTheFold = rect.top > container.clientHeight;
    return visible && !belowTheFold && !aboveTheTop;
};
/*
	element: element to apply to
	css: JSON object with properties in kebab-case or camelCase (or even in snake_case and seperate words)
*/ const $fa90420f3b30b29c$var$css = (element, css)=>{
    $2db055cf8ef21bb4$export$a22775fa5e2eebd9('css element', element, [
        'isDefined',
        'isElement'
    ]);
    $2db055cf8ef21bb4$export$a22775fa5e2eebd9('css css', css, [
        'isDefined',
        [
            'isObject'
        ]
    ]);
    for(const prop in css)if (Object.prototype.hasOwnProperty.call(css, prop)) {
        const key = (/*@__PURE__*/$parcel$interopDefault($e8919de24526985b$exports))(prop);
        element.style[key] = css[prop] !== null ? css[prop] : null;
    }
};
const $fa90420f3b30b29c$var$setMetaData = (element, k, v)=>{
    $2db055cf8ef21bb4$export$a22775fa5e2eebd9('setMetaData element', element, [
        'isDefined',
        'isElement'
    ]);
    $2db055cf8ef21bb4$export$a22775fa5e2eebd9('setMetaData k', k, [
        'isDefined',
        'isString'
    ]);
    $2db055cf8ef21bb4$export$a22775fa5e2eebd9('setMetaData v', v, [
        [
            'isUnDefined',
            'isNull',
            'isString',
            'isObject'
        ]
    ]);
    const data = $fa90420f3b30b29c$var$elementMetaData.get(element) || {};
    if (v) data[k] = v;
    else delete data[k];
    $fa90420f3b30b29c$var$elementMetaData.set(element, data);
};
const $fa90420f3b30b29c$var$getMetaData = (element, k)=>{
    $2db055cf8ef21bb4$export$a22775fa5e2eebd9('getMetaData element', element, [
        'isDefined',
        'isElement'
    ]);
    $2db055cf8ef21bb4$export$a22775fa5e2eebd9('getMetaData k', k, [
        'isDefined',
        'isString'
    ]);
    const data = $fa90420f3b30b29c$var$elementMetaData.get(element) || {};
    if (k) return data[k];
    else return data;
};
const $fa90420f3b30b29c$var$on = function(uid, container, events, selector, fn, options, once) {
    // selector is optional
    if (typeof selector === 'function') {
        once = options;
        options = fn;
        fn = selector;
        selector = undefined;
    }
    $2db055cf8ef21bb4$export$a22775fa5e2eebd9('on uid', uid, [
        'isDefined',
        'notEmpty'
    ]);
    $2db055cf8ef21bb4$export$a22775fa5e2eebd9('on container', container, [
        'isDefined',
        'isEventTarget'
    ]);
    $2db055cf8ef21bb4$export$a22775fa5e2eebd9('on events', events, [
        'isDefined',
        'isString'
    ]);
    $2db055cf8ef21bb4$export$a22775fa5e2eebd9('on fn', fn, [
        'isDefined',
        'isFunction'
    ]);
    $2db055cf8ef21bb4$export$a22775fa5e2eebd9('on selector', selector, [
        [
            'isEmpty',
            'isString'
        ]
    ]);
    const k = 'on:' + uid + '-' + events + '-' + selector;
    if ($fa90420f3b30b29c$var$getMetaData(container, k)) {
        console.error('Error: Sargasso utils.on: duplicate event handler specification. %o %s', container, k);
        return;
    }
    const handler = (e)=>{
        if (once) $fa90420f3b30b29c$var$off(uid, container, events, selector);
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
    $fa90420f3b30b29c$var$setMetaData(container, k, data);
    events.split(/[\s,]+/).forEach((evt)=>{
        container.addEventListener(evt.trim(), data.fn, data.options);
    });
};
const $fa90420f3b30b29c$var$off = function(uid, container, events, selector) {
    $2db055cf8ef21bb4$export$a22775fa5e2eebd9('off uid', uid, [
        'isDefined',
        'notEmpty'
    ]);
    $2db055cf8ef21bb4$export$a22775fa5e2eebd9('off container', container, [
        'isDefined',
        'isEventTarget'
    ]);
    $2db055cf8ef21bb4$export$a22775fa5e2eebd9('off events', events, [
        'isDefined',
        'isString'
    ]);
    $2db055cf8ef21bb4$export$a22775fa5e2eebd9('off selector', selector, [
        [
            'isEmpty',
            'isString'
        ]
    ]);
    const k = 'on:' + uid + '-' + events + '-' + selector;
    const data = $fa90420f3b30b29c$var$getMetaData(container, k);
    if (data) {
        events.split(/[\s,]+/).forEach((evt)=>{
            container.removeEventListener(evt.trim(), data.fn, data.options);
        });
        $fa90420f3b30b29c$var$setMetaData(container, k);
    }
};
// remove all (on,once) event handlers for element
const $fa90420f3b30b29c$var$offAll = function(container) {
    $2db055cf8ef21bb4$export$a22775fa5e2eebd9('offAll container', container, [
        'isDefined',
        'isEventTarget'
    ]);
    const data = $fa90420f3b30b29c$var$elementMetaData.get(container) || {};
    const handlers = [];
    for(const k1 in data){
        if (Object.prototype.hasOwnProperty.call(data, k1)) {
            if (k1.match(/^on:/)) handlers.push(k1);
        }
    }
    handlers.forEach((k)=>{
        $fa90420f3b30b29c$var$off(data[k].uid, container, data[k].events, data[k].selector);
    });
};
const $fa90420f3b30b29c$var$once = function(uid, container, events, selector, fn, options) {
    if (typeof selector === 'function') {
        options = fn;
        fn = selector;
        selector = undefined;
    }
    $fa90420f3b30b29c$var$on(uid, container, events, selector, fn, options, true);
};
const $fa90420f3b30b29c$export$6f53260fffa88f1c = {
    hasClass: $fa90420f3b30b29c$var$hasClass,
    addClass: $fa90420f3b30b29c$var$addClass,
    removeClass: $fa90420f3b30b29c$var$removeClass,
    isVisible: $fa90420f3b30b29c$var$isVisible,
    inViewPort: $fa90420f3b30b29c$var$inViewPort,
    setCSS: $fa90420f3b30b29c$var$css,
    setMetaData: $fa90420f3b30b29c$var$setMetaData,
    getMetaData: $fa90420f3b30b29c$var$getMetaData,
    on: $fa90420f3b30b29c$var$on,
    off: $fa90420f3b30b29c$var$off,
    once: $fa90420f3b30b29c$var$once,
    offAll: $fa90420f3b30b29c$var$offAll
};



var $883871a813e4aea5$exports = {};
var $61831d66d49f5bc8$exports = {};
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
 */ function $61831d66d49f5bc8$var$isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}
$61831d66d49f5bc8$exports = $61831d66d49f5bc8$var$isObject;


var $841dde3de9d388fa$exports = {};

var $9YxFa = parcelRequire("9YxFa");
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
 */ var $841dde3de9d388fa$var$now = function() {
    return $9YxFa.Date.now();
};
$841dde3de9d388fa$exports = $841dde3de9d388fa$var$now;


var $713e6733c8c5a8d0$exports = {};
var $5e7fc60b36032c8f$exports = {};
var $a04415d864a367d3$exports = {};
/** Used to match a single whitespace character. */ var $a04415d864a367d3$var$reWhitespace = /\s/;
/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */ function $a04415d864a367d3$var$trimmedEndIndex(string) {
    var index = string.length;
    while(index-- && $a04415d864a367d3$var$reWhitespace.test(string.charAt(index)));
    return index;
}
$a04415d864a367d3$exports = $a04415d864a367d3$var$trimmedEndIndex;


/** Used to match leading whitespace. */ var $5e7fc60b36032c8f$var$reTrimStart = /^\s+/;
/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */ function $5e7fc60b36032c8f$var$baseTrim(string) {
    return string ? string.slice(0, $a04415d864a367d3$exports(string) + 1).replace($5e7fc60b36032c8f$var$reTrimStart, '') : string;
}
$5e7fc60b36032c8f$exports = $5e7fc60b36032c8f$var$baseTrim;




/** Used as references for various `Number` constants. */ var $713e6733c8c5a8d0$var$NAN = 0 / 0;
/** Used to detect bad signed hexadecimal string values. */ var $713e6733c8c5a8d0$var$reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var $713e6733c8c5a8d0$var$reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var $713e6733c8c5a8d0$var$reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var $713e6733c8c5a8d0$var$freeParseInt = parseInt;
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
 */ function $713e6733c8c5a8d0$var$toNumber(value) {
    if (typeof value == 'number') return value;
    if ($52f0b33544ceb6d0$exports(value)) return $713e6733c8c5a8d0$var$NAN;
    if ($61831d66d49f5bc8$exports(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = $61831d66d49f5bc8$exports(other) ? other + '' : other;
    }
    if (typeof value != 'string') return value === 0 ? value : +value;
    value = $5e7fc60b36032c8f$exports(value);
    var isBinary = $713e6733c8c5a8d0$var$reIsBinary.test(value);
    return isBinary || $713e6733c8c5a8d0$var$reIsOctal.test(value) ? $713e6733c8c5a8d0$var$freeParseInt(value.slice(2), isBinary ? 2 : 8) : $713e6733c8c5a8d0$var$reIsBadHex.test(value) ? $713e6733c8c5a8d0$var$NAN : +value;
}
$713e6733c8c5a8d0$exports = $713e6733c8c5a8d0$var$toNumber;


/** Error message constants. */ var $883871a813e4aea5$var$FUNC_ERROR_TEXT = 'Expected a function';
/* Built-in method references for those with the same name as other `lodash` methods. */ var $883871a813e4aea5$var$nativeMax = Math.max, $883871a813e4aea5$var$nativeMin = Math.min;
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
 */ function $883871a813e4aea5$var$debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != 'function') throw new TypeError($883871a813e4aea5$var$FUNC_ERROR_TEXT);
    wait = $713e6733c8c5a8d0$exports(wait) || 0;
    if ($61831d66d49f5bc8$exports(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? $883871a813e4aea5$var$nativeMax($713e6733c8c5a8d0$exports(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
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
        return maxing ? $883871a813e4aea5$var$nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = $841dde3de9d388fa$exports();
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
        return timerId === undefined ? result : trailingEdge($841dde3de9d388fa$exports());
    }
    function debounced() {
        var time = $841dde3de9d388fa$exports(), isInvoking = shouldInvoke(time);
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
$883871a813e4aea5$exports = $883871a813e4aea5$var$debounce;


var $b5efcd7a6974677c$exports = {};
var $f2b9c271f6c133ce$exports = {};
var $c63dbe6bd973accd$exports = {};
var $6845f9f18685431d$exports = {};
var $6b7a471622203bf9$exports = {};
var $2a0be47a438596ac$exports = {};
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function $2a0be47a438596ac$var$listCacheClear() {
    this.__data__ = [];
    this.size = 0;
}
$2a0be47a438596ac$exports = $2a0be47a438596ac$var$listCacheClear;


var $ac79231ef634f5e0$exports = {};
var $c60d13265ec489e2$exports = {};
var $48ff54fd1be35311$exports = {};
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
 */ function $48ff54fd1be35311$var$eq(value, other) {
    return value === other || value !== value && other !== other;
}
$48ff54fd1be35311$exports = $48ff54fd1be35311$var$eq;


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function $c60d13265ec489e2$var$assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if ($48ff54fd1be35311$exports(array[length][0], key)) return length;
    }
    return -1;
}
$c60d13265ec489e2$exports = $c60d13265ec489e2$var$assocIndexOf;


/** Used for built-in method references. */ var $ac79231ef634f5e0$var$arrayProto = Array.prototype;
/** Built-in value references. */ var $ac79231ef634f5e0$var$splice = $ac79231ef634f5e0$var$arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function $ac79231ef634f5e0$var$listCacheDelete(key) {
    var data = this.__data__, index = $c60d13265ec489e2$exports(data, key);
    if (index < 0) return false;
    var lastIndex = data.length - 1;
    if (index == lastIndex) data.pop();
    else $ac79231ef634f5e0$var$splice.call(data, index, 1);
    --this.size;
    return true;
}
$ac79231ef634f5e0$exports = $ac79231ef634f5e0$var$listCacheDelete;


var $996bc71bac84fef0$exports = {};

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function $996bc71bac84fef0$var$listCacheGet(key) {
    var data = this.__data__, index = $c60d13265ec489e2$exports(data, key);
    return index < 0 ? undefined : data[index][1];
}
$996bc71bac84fef0$exports = $996bc71bac84fef0$var$listCacheGet;


var $407dffa0a39ab196$exports = {};

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function $407dffa0a39ab196$var$listCacheHas(key) {
    return $c60d13265ec489e2$exports(this.__data__, key) > -1;
}
$407dffa0a39ab196$exports = $407dffa0a39ab196$var$listCacheHas;


var $83d922ec9ff5f5d9$exports = {};

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function $83d922ec9ff5f5d9$var$listCacheSet(key, value) {
    var data = this.__data__, index = $c60d13265ec489e2$exports(data, key);
    if (index < 0) {
        ++this.size;
        data.push([
            key,
            value
        ]);
    } else data[index][1] = value;
    return this;
}
$83d922ec9ff5f5d9$exports = $83d922ec9ff5f5d9$var$listCacheSet;


/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function $6b7a471622203bf9$var$ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `ListCache`.
$6b7a471622203bf9$var$ListCache.prototype.clear = $2a0be47a438596ac$exports;
$6b7a471622203bf9$var$ListCache.prototype['delete'] = $ac79231ef634f5e0$exports;
$6b7a471622203bf9$var$ListCache.prototype.get = $996bc71bac84fef0$exports;
$6b7a471622203bf9$var$ListCache.prototype.has = $407dffa0a39ab196$exports;
$6b7a471622203bf9$var$ListCache.prototype.set = $83d922ec9ff5f5d9$exports;
$6b7a471622203bf9$exports = $6b7a471622203bf9$var$ListCache;


var $40bd44a8e958aab0$exports = {};

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */ function $40bd44a8e958aab0$var$stackClear() {
    this.__data__ = new $6b7a471622203bf9$exports;
    this.size = 0;
}
$40bd44a8e958aab0$exports = $40bd44a8e958aab0$var$stackClear;


var $4c06927483707315$exports = {};
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function $4c06927483707315$var$stackDelete(key) {
    var data = this.__data__, result = data['delete'](key);
    this.size = data.size;
    return result;
}
$4c06927483707315$exports = $4c06927483707315$var$stackDelete;


var $25090cfaea2fb739$exports = {};
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function $25090cfaea2fb739$var$stackGet(key) {
    return this.__data__.get(key);
}
$25090cfaea2fb739$exports = $25090cfaea2fb739$var$stackGet;


var $6f0e83a9c5ab509a$exports = {};
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function $6f0e83a9c5ab509a$var$stackHas(key) {
    return this.__data__.has(key);
}
$6f0e83a9c5ab509a$exports = $6f0e83a9c5ab509a$var$stackHas;


var $b4834b266804cfa4$exports = {};

var $05957ea21bb1a9ad$exports = {};
var $991ed471436b8bad$exports = {};
var $9a69221254b4ac56$exports = {};
var $590f779a0c6efbce$exports = {};


/** `Object#toString` result references. */ var $590f779a0c6efbce$var$asyncTag = '[object AsyncFunction]', $590f779a0c6efbce$var$funcTag = '[object Function]', $590f779a0c6efbce$var$genTag = '[object GeneratorFunction]', $590f779a0c6efbce$var$proxyTag = '[object Proxy]';
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
 */ function $590f779a0c6efbce$var$isFunction(value) {
    if (!$61831d66d49f5bc8$exports(value)) return false;
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = $3fa59a4993df039a$exports(value);
    return tag == $590f779a0c6efbce$var$funcTag || tag == $590f779a0c6efbce$var$genTag || tag == $590f779a0c6efbce$var$asyncTag || tag == $590f779a0c6efbce$var$proxyTag;
}
$590f779a0c6efbce$exports = $590f779a0c6efbce$var$isFunction;


var $9ec348fb54b681c8$exports = {};
var $91ce128a81f48807$exports = {};

var $9YxFa = parcelRequire("9YxFa");
/** Used to detect overreaching core-js shims. */ var $91ce128a81f48807$var$coreJsData = $9YxFa["__core-js_shared__"];
$91ce128a81f48807$exports = $91ce128a81f48807$var$coreJsData;


/** Used to detect methods masquerading as native. */ var $9ec348fb54b681c8$var$maskSrcKey = function() {
    var uid = /[^.]+$/.exec($91ce128a81f48807$exports && $91ce128a81f48807$exports.keys && $91ce128a81f48807$exports.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function $9ec348fb54b681c8$var$isMasked(func) {
    return !!$9ec348fb54b681c8$var$maskSrcKey && $9ec348fb54b681c8$var$maskSrcKey in func;
}
$9ec348fb54b681c8$exports = $9ec348fb54b681c8$var$isMasked;



var $f9a5d028d2909aee$exports = {};
/** Used for built-in method references. */ var $f9a5d028d2909aee$var$funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */ var $f9a5d028d2909aee$var$funcToString = $f9a5d028d2909aee$var$funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */ function $f9a5d028d2909aee$var$toSource(func) {
    if (func != null) {
        try {
            return $f9a5d028d2909aee$var$funcToString.call(func);
        } catch (e) {}
        try {
            return func + '';
        } catch (e1) {}
    }
    return '';
}
$f9a5d028d2909aee$exports = $f9a5d028d2909aee$var$toSource;


/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var $9a69221254b4ac56$var$reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */ var $9a69221254b4ac56$var$reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */ var $9a69221254b4ac56$var$funcProto = Function.prototype, $9a69221254b4ac56$var$objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var $9a69221254b4ac56$var$funcToString = $9a69221254b4ac56$var$funcProto.toString;
/** Used to check objects for own properties. */ var $9a69221254b4ac56$var$hasOwnProperty = $9a69221254b4ac56$var$objectProto.hasOwnProperty;
/** Used to detect if a method is native. */ var $9a69221254b4ac56$var$reIsNative = RegExp('^' + $9a69221254b4ac56$var$funcToString.call($9a69221254b4ac56$var$hasOwnProperty).replace($9a69221254b4ac56$var$reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function $9a69221254b4ac56$var$baseIsNative(value) {
    if (!$61831d66d49f5bc8$exports(value) || $9ec348fb54b681c8$exports(value)) return false;
    var pattern = $590f779a0c6efbce$exports(value) ? $9a69221254b4ac56$var$reIsNative : $9a69221254b4ac56$var$reIsHostCtor;
    return pattern.test($f9a5d028d2909aee$exports(value));
}
$9a69221254b4ac56$exports = $9a69221254b4ac56$var$baseIsNative;


var $f48de26873a28672$exports = {};
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function $f48de26873a28672$var$getValue(object, key) {
    return object == null ? undefined : object[key];
}
$f48de26873a28672$exports = $f48de26873a28672$var$getValue;


/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function $991ed471436b8bad$var$getNative(object, key) {
    var value = $f48de26873a28672$exports(object, key);
    return $9a69221254b4ac56$exports(value) ? value : undefined;
}
$991ed471436b8bad$exports = $991ed471436b8bad$var$getNative;



var $9YxFa = parcelRequire("9YxFa");
/* Built-in method references that are verified to be native. */ var $05957ea21bb1a9ad$var$Map = $991ed471436b8bad$exports($9YxFa, 'Map');
$05957ea21bb1a9ad$exports = $05957ea21bb1a9ad$var$Map;


var $5e1024ff73030872$exports = {};
var $35c50f5430743770$exports = {};
var $a72ed51f9e9ae841$exports = {};
var $e8cb5336f471ed41$exports = {};
var $c96ef57787418f58$exports = {};

/* Built-in method references that are verified to be native. */ var $c96ef57787418f58$var$nativeCreate = $991ed471436b8bad$exports(Object, 'create');
$c96ef57787418f58$exports = $c96ef57787418f58$var$nativeCreate;


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function $e8cb5336f471ed41$var$hashClear() {
    this.__data__ = $c96ef57787418f58$exports ? $c96ef57787418f58$exports(null) : {};
    this.size = 0;
}
$e8cb5336f471ed41$exports = $e8cb5336f471ed41$var$hashClear;


var $6bae9f5a7ba64d9c$exports = {};
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function $6bae9f5a7ba64d9c$var$hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
}
$6bae9f5a7ba64d9c$exports = $6bae9f5a7ba64d9c$var$hashDelete;


var $4c0e7133ca71976e$exports = {};

/** Used to stand-in for `undefined` hash values. */ var $4c0e7133ca71976e$var$HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */ var $4c0e7133ca71976e$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $4c0e7133ca71976e$var$hasOwnProperty = $4c0e7133ca71976e$var$objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function $4c0e7133ca71976e$var$hashGet(key) {
    var data = this.__data__;
    if ($c96ef57787418f58$exports) {
        var result = data[key];
        return result === $4c0e7133ca71976e$var$HASH_UNDEFINED ? undefined : result;
    }
    return $4c0e7133ca71976e$var$hasOwnProperty.call(data, key) ? data[key] : undefined;
}
$4c0e7133ca71976e$exports = $4c0e7133ca71976e$var$hashGet;


var $1cdd0665b67a554b$exports = {};

/** Used for built-in method references. */ var $1cdd0665b67a554b$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $1cdd0665b67a554b$var$hasOwnProperty = $1cdd0665b67a554b$var$objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function $1cdd0665b67a554b$var$hashHas(key) {
    var data = this.__data__;
    return $c96ef57787418f58$exports ? data[key] !== undefined : $1cdd0665b67a554b$var$hasOwnProperty.call(data, key);
}
$1cdd0665b67a554b$exports = $1cdd0665b67a554b$var$hashHas;


var $6475872c844ddf8c$exports = {};

/** Used to stand-in for `undefined` hash values. */ var $6475872c844ddf8c$var$HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function $6475872c844ddf8c$var$hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = $c96ef57787418f58$exports && value === undefined ? $6475872c844ddf8c$var$HASH_UNDEFINED : value;
    return this;
}
$6475872c844ddf8c$exports = $6475872c844ddf8c$var$hashSet;


/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function $a72ed51f9e9ae841$var$Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `Hash`.
$a72ed51f9e9ae841$var$Hash.prototype.clear = $e8cb5336f471ed41$exports;
$a72ed51f9e9ae841$var$Hash.prototype['delete'] = $6bae9f5a7ba64d9c$exports;
$a72ed51f9e9ae841$var$Hash.prototype.get = $4c0e7133ca71976e$exports;
$a72ed51f9e9ae841$var$Hash.prototype.has = $1cdd0665b67a554b$exports;
$a72ed51f9e9ae841$var$Hash.prototype.set = $6475872c844ddf8c$exports;
$a72ed51f9e9ae841$exports = $a72ed51f9e9ae841$var$Hash;




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function $35c50f5430743770$var$mapCacheClear() {
    this.size = 0;
    this.__data__ = {
        'hash': new $a72ed51f9e9ae841$exports,
        'map': new ($05957ea21bb1a9ad$exports || $6b7a471622203bf9$exports),
        'string': new $a72ed51f9e9ae841$exports
    };
}
$35c50f5430743770$exports = $35c50f5430743770$var$mapCacheClear;


var $32b26bbc0af6676f$exports = {};
var $91681b02ef9f1979$exports = {};
var $f47de23d5a2cfbcc$exports = {};
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function $f47de23d5a2cfbcc$var$isKeyable(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
$f47de23d5a2cfbcc$exports = $f47de23d5a2cfbcc$var$isKeyable;


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function $91681b02ef9f1979$var$getMapData(map, key) {
    var data = map.__data__;
    return $f47de23d5a2cfbcc$exports(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
$91681b02ef9f1979$exports = $91681b02ef9f1979$var$getMapData;


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function $32b26bbc0af6676f$var$mapCacheDelete(key) {
    var result = $91681b02ef9f1979$exports(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
}
$32b26bbc0af6676f$exports = $32b26bbc0af6676f$var$mapCacheDelete;


var $f47c1ea606117dcd$exports = {};

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function $f47c1ea606117dcd$var$mapCacheGet(key) {
    return $91681b02ef9f1979$exports(this, key).get(key);
}
$f47c1ea606117dcd$exports = $f47c1ea606117dcd$var$mapCacheGet;


var $1324a014ccf248bc$exports = {};

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function $1324a014ccf248bc$var$mapCacheHas(key) {
    return $91681b02ef9f1979$exports(this, key).has(key);
}
$1324a014ccf248bc$exports = $1324a014ccf248bc$var$mapCacheHas;


var $3bf6fc8c901369ac$exports = {};

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function $3bf6fc8c901369ac$var$mapCacheSet(key, value) {
    var data = $91681b02ef9f1979$exports(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
}
$3bf6fc8c901369ac$exports = $3bf6fc8c901369ac$var$mapCacheSet;


/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function $5e1024ff73030872$var$MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `MapCache`.
$5e1024ff73030872$var$MapCache.prototype.clear = $35c50f5430743770$exports;
$5e1024ff73030872$var$MapCache.prototype['delete'] = $32b26bbc0af6676f$exports;
$5e1024ff73030872$var$MapCache.prototype.get = $f47c1ea606117dcd$exports;
$5e1024ff73030872$var$MapCache.prototype.has = $1324a014ccf248bc$exports;
$5e1024ff73030872$var$MapCache.prototype.set = $3bf6fc8c901369ac$exports;
$5e1024ff73030872$exports = $5e1024ff73030872$var$MapCache;


/** Used as the size to enable large array optimizations. */ var $b4834b266804cfa4$var$LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */ function $b4834b266804cfa4$var$stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof $6b7a471622203bf9$exports) {
        var pairs = data.__data__;
        if (!$05957ea21bb1a9ad$exports || pairs.length < $b4834b266804cfa4$var$LARGE_ARRAY_SIZE - 1) {
            pairs.push([
                key,
                value
            ]);
            this.size = ++data.size;
            return this;
        }
        data = this.__data__ = new $5e1024ff73030872$exports(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
}
$b4834b266804cfa4$exports = $b4834b266804cfa4$var$stackSet;


/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function $6845f9f18685431d$var$Stack(entries) {
    var data = this.__data__ = new $6b7a471622203bf9$exports(entries);
    this.size = data.size;
}
// Add methods to `Stack`.
$6845f9f18685431d$var$Stack.prototype.clear = $40bd44a8e958aab0$exports;
$6845f9f18685431d$var$Stack.prototype['delete'] = $4c06927483707315$exports;
$6845f9f18685431d$var$Stack.prototype.get = $25090cfaea2fb739$exports;
$6845f9f18685431d$var$Stack.prototype.has = $6f0e83a9c5ab509a$exports;
$6845f9f18685431d$var$Stack.prototype.set = $b4834b266804cfa4$exports;
$6845f9f18685431d$exports = $6845f9f18685431d$var$Stack;


var $843d31a03cacdf24$exports = {};
var $098d2bd48b74caea$exports = {};

var $85a5cbec0b048bbb$exports = {};
/** Used to stand-in for `undefined` hash values. */ var $85a5cbec0b048bbb$var$HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */ function $85a5cbec0b048bbb$var$setCacheAdd(value) {
    this.__data__.set(value, $85a5cbec0b048bbb$var$HASH_UNDEFINED);
    return this;
}
$85a5cbec0b048bbb$exports = $85a5cbec0b048bbb$var$setCacheAdd;


var $f7bee3088fc5d635$exports = {};
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */ function $f7bee3088fc5d635$var$setCacheHas(value) {
    return this.__data__.has(value);
}
$f7bee3088fc5d635$exports = $f7bee3088fc5d635$var$setCacheHas;


/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */ function $098d2bd48b74caea$var$SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new $5e1024ff73030872$exports;
    while(++index < length)this.add(values[index]);
}
// Add methods to `SetCache`.
$098d2bd48b74caea$var$SetCache.prototype.add = $098d2bd48b74caea$var$SetCache.prototype.push = $85a5cbec0b048bbb$exports;
$098d2bd48b74caea$var$SetCache.prototype.has = $f7bee3088fc5d635$exports;
$098d2bd48b74caea$exports = $098d2bd48b74caea$var$SetCache;


var $8b16a65c81b6e145$exports = {};
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */ function $8b16a65c81b6e145$var$arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (predicate(array[index], index, array)) return true;
    }
    return false;
}
$8b16a65c81b6e145$exports = $8b16a65c81b6e145$var$arraySome;


var $b94c3e7a1ed4659e$exports = {};
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function $b94c3e7a1ed4659e$var$cacheHas(cache, key) {
    return cache.has(key);
}
$b94c3e7a1ed4659e$exports = $b94c3e7a1ed4659e$var$cacheHas;


/** Used to compose bitmasks for value comparisons. */ var $843d31a03cacdf24$var$COMPARE_PARTIAL_FLAG = 1, $843d31a03cacdf24$var$COMPARE_UNORDERED_FLAG = 2;
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
 */ function $843d31a03cacdf24$var$equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & $843d31a03cacdf24$var$COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
    // Check that cyclic values are equal.
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
    var index = -1, result = true, seen = bitmask & $843d31a03cacdf24$var$COMPARE_UNORDERED_FLAG ? new $098d2bd48b74caea$exports : undefined;
    stack.set(array, other);
    stack.set(other, array);
    // Ignore non-index properties.
    while(++index < arrLength){
        var arrValue = array[index], othValue1 = other[index];
        if (customizer) var compared = isPartial ? customizer(othValue1, arrValue, index, other, array, stack) : customizer(arrValue, othValue1, index, array, other, stack);
        if (compared !== undefined) {
            if (compared) continue;
            result = false;
            break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
            if (!$8b16a65c81b6e145$exports(other, function(othValue, othIndex) {
                if (!$b94c3e7a1ed4659e$exports(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
            })) {
                result = false;
                break;
            }
        } else if (!(arrValue === othValue1 || equalFunc(arrValue, othValue1, bitmask, customizer, stack))) {
            result = false;
            break;
        }
    }
    stack['delete'](array);
    stack['delete'](other);
    return result;
}
$843d31a03cacdf24$exports = $843d31a03cacdf24$var$equalArrays;


var $154fbb2b3019daf8$exports = {};

var $62dea8796f76e723$exports = {};

var $9YxFa = parcelRequire("9YxFa");
/** Built-in value references. */ var $62dea8796f76e723$var$Uint8Array = $9YxFa.Uint8Array;
$62dea8796f76e723$exports = $62dea8796f76e723$var$Uint8Array;




var $4ce6beb521ecb775$exports = {};
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */ function $4ce6beb521ecb775$var$mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
        result[++index] = [
            key,
            value
        ];
    });
    return result;
}
$4ce6beb521ecb775$exports = $4ce6beb521ecb775$var$mapToArray;


var $91dafa51c89b43d8$exports = {};
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */ function $91dafa51c89b43d8$var$setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
        result[++index] = value;
    });
    return result;
}
$91dafa51c89b43d8$exports = $91dafa51c89b43d8$var$setToArray;


/** Used to compose bitmasks for value comparisons. */ var $154fbb2b3019daf8$var$COMPARE_PARTIAL_FLAG = 1, $154fbb2b3019daf8$var$COMPARE_UNORDERED_FLAG = 2;
/** `Object#toString` result references. */ var $154fbb2b3019daf8$var$boolTag = '[object Boolean]', $154fbb2b3019daf8$var$dateTag = '[object Date]', $154fbb2b3019daf8$var$errorTag = '[object Error]', $154fbb2b3019daf8$var$mapTag = '[object Map]', $154fbb2b3019daf8$var$numberTag = '[object Number]', $154fbb2b3019daf8$var$regexpTag = '[object RegExp]', $154fbb2b3019daf8$var$setTag = '[object Set]', $154fbb2b3019daf8$var$stringTag = '[object String]', $154fbb2b3019daf8$var$symbolTag = '[object Symbol]';
var $154fbb2b3019daf8$var$arrayBufferTag = '[object ArrayBuffer]', $154fbb2b3019daf8$var$dataViewTag = '[object DataView]';
/** Used to convert symbols to primitives and strings. */ var $154fbb2b3019daf8$var$symbolProto = $ab1e9e4db6409106$exports ? $ab1e9e4db6409106$exports.prototype : undefined, $154fbb2b3019daf8$var$symbolValueOf = $154fbb2b3019daf8$var$symbolProto ? $154fbb2b3019daf8$var$symbolProto.valueOf : undefined;
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
 */ function $154fbb2b3019daf8$var$equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch(tag){
        case $154fbb2b3019daf8$var$dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
            object = object.buffer;
            other = other.buffer;
        case $154fbb2b3019daf8$var$arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new $62dea8796f76e723$exports(object), new $62dea8796f76e723$exports(other))) return false;
            return true;
        case $154fbb2b3019daf8$var$boolTag:
        case $154fbb2b3019daf8$var$dateTag:
        case $154fbb2b3019daf8$var$numberTag:
            // Coerce booleans to `1` or `0` and dates to milliseconds.
            // Invalid dates are coerced to `NaN`.
            return $48ff54fd1be35311$exports(+object, +other);
        case $154fbb2b3019daf8$var$errorTag:
            return object.name == other.name && object.message == other.message;
        case $154fbb2b3019daf8$var$regexpTag:
        case $154fbb2b3019daf8$var$stringTag:
            // Coerce regexes to strings and treat strings, primitives and objects,
            // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
            // for more details.
            return object == other + '';
        case $154fbb2b3019daf8$var$mapTag:
            var convert = $4ce6beb521ecb775$exports;
        case $154fbb2b3019daf8$var$setTag:
            var isPartial = bitmask & $154fbb2b3019daf8$var$COMPARE_PARTIAL_FLAG;
            convert || (convert = $91dafa51c89b43d8$exports);
            if (object.size != other.size && !isPartial) return false;
            // Assume cyclic values are equal.
            var stacked = stack.get(object);
            if (stacked) return stacked == other;
            bitmask |= $154fbb2b3019daf8$var$COMPARE_UNORDERED_FLAG;
            // Recursively compare objects (susceptible to call stack limits).
            stack.set(object, other);
            var result = $843d31a03cacdf24$exports(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack['delete'](object);
            return result;
        case $154fbb2b3019daf8$var$symbolTag:
            if ($154fbb2b3019daf8$var$symbolValueOf) return $154fbb2b3019daf8$var$symbolValueOf.call(object) == $154fbb2b3019daf8$var$symbolValueOf.call(other);
    }
    return false;
}
$154fbb2b3019daf8$exports = $154fbb2b3019daf8$var$equalByTag;


var $a8ee97dad1c3fd6c$exports = {};
var $89d857d87a32471c$exports = {};
var $fb6bd41fc2325c66$exports = {};
var $62957c94ba0f5f6e$exports = {};
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */ function $62957c94ba0f5f6e$var$arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while(++index < length)array[offset + index] = values[index];
    return array;
}
$62957c94ba0f5f6e$exports = $62957c94ba0f5f6e$var$arrayPush;



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
 */ function $fb6bd41fc2325c66$var$baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return $3f6ab8b9844a2fb4$exports(object) ? result : $62957c94ba0f5f6e$exports(result, symbolsFunc(object));
}
$fb6bd41fc2325c66$exports = $fb6bd41fc2325c66$var$baseGetAllKeys;


var $20b6c37872d32058$exports = {};
var $50c58d495e6ee4a8$exports = {};
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */ function $50c58d495e6ee4a8$var$arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while(++index < length){
        var value = array[index];
        if (predicate(value, index, array)) result[resIndex++] = value;
    }
    return result;
}
$50c58d495e6ee4a8$exports = $50c58d495e6ee4a8$var$arrayFilter;


var $01c0ffecb6366a17$exports = {};
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
 */ function $01c0ffecb6366a17$var$stubArray() {
    return [];
}
$01c0ffecb6366a17$exports = $01c0ffecb6366a17$var$stubArray;


/** Used for built-in method references. */ var $20b6c37872d32058$var$objectProto = Object.prototype;
/** Built-in value references. */ var $20b6c37872d32058$var$propertyIsEnumerable = $20b6c37872d32058$var$objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */ var $20b6c37872d32058$var$nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */ var $20b6c37872d32058$var$getSymbols = !$20b6c37872d32058$var$nativeGetSymbols ? $01c0ffecb6366a17$exports : function(object) {
    if (object == null) return [];
    object = Object(object);
    return $50c58d495e6ee4a8$exports($20b6c37872d32058$var$nativeGetSymbols(object), function(symbol) {
        return $20b6c37872d32058$var$propertyIsEnumerable.call(object, symbol);
    });
};
$20b6c37872d32058$exports = $20b6c37872d32058$var$getSymbols;


var $d544ebec033bff33$exports = {};
var $31953fc5dec43f83$exports = {};
var $9b00395cc2f96f7b$exports = {};
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ function $9b00395cc2f96f7b$var$baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n)result[index] = iteratee(index);
    return result;
}
$9b00395cc2f96f7b$exports = $9b00395cc2f96f7b$var$baseTimes;


var $f579f7e749b68b6d$exports = {};
var $d2c843dfd109bf18$exports = {};


/** `Object#toString` result references. */ var $d2c843dfd109bf18$var$argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */ function $d2c843dfd109bf18$var$baseIsArguments(value) {
    return $901275e69ea06317$exports(value) && $3fa59a4993df039a$exports(value) == $d2c843dfd109bf18$var$argsTag;
}
$d2c843dfd109bf18$exports = $d2c843dfd109bf18$var$baseIsArguments;



/** Used for built-in method references. */ var $f579f7e749b68b6d$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $f579f7e749b68b6d$var$hasOwnProperty = $f579f7e749b68b6d$var$objectProto.hasOwnProperty;
/** Built-in value references. */ var $f579f7e749b68b6d$var$propertyIsEnumerable = $f579f7e749b68b6d$var$objectProto.propertyIsEnumerable;
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
 */ var $f579f7e749b68b6d$var$isArguments = $d2c843dfd109bf18$exports(function() {
    return arguments;
}()) ? $d2c843dfd109bf18$exports : function(value) {
    return $901275e69ea06317$exports(value) && $f579f7e749b68b6d$var$hasOwnProperty.call(value, 'callee') && !$f579f7e749b68b6d$var$propertyIsEnumerable.call(value, 'callee');
};
$f579f7e749b68b6d$exports = $f579f7e749b68b6d$var$isArguments;




var $g9DJy = parcelRequire("g9DJy");
var $4718c50ad460a227$exports = {};
/** Used as references for various `Number` constants. */ var $4718c50ad460a227$var$MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */ var $4718c50ad460a227$var$reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function $4718c50ad460a227$var$isIndex(value, length) {
    var type = typeof value;
    length = length == null ? $4718c50ad460a227$var$MAX_SAFE_INTEGER : length;
    return !!length && (type == 'number' || type != 'symbol' && $4718c50ad460a227$var$reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
$4718c50ad460a227$exports = $4718c50ad460a227$var$isIndex;


var $2bb28b2ead9a37a8$exports = {};
var $cd9e0f25de9658c3$exports = {};

var $c05170641dc55900$exports = {};
/** Used as references for various `Number` constants. */ var $c05170641dc55900$var$MAX_SAFE_INTEGER = 9007199254740991;
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
 */ function $c05170641dc55900$var$isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= $c05170641dc55900$var$MAX_SAFE_INTEGER;
}
$c05170641dc55900$exports = $c05170641dc55900$var$isLength;



/** `Object#toString` result references. */ var $cd9e0f25de9658c3$var$argsTag = '[object Arguments]', $cd9e0f25de9658c3$var$arrayTag = '[object Array]', $cd9e0f25de9658c3$var$boolTag = '[object Boolean]', $cd9e0f25de9658c3$var$dateTag = '[object Date]', $cd9e0f25de9658c3$var$errorTag = '[object Error]', $cd9e0f25de9658c3$var$funcTag = '[object Function]', $cd9e0f25de9658c3$var$mapTag = '[object Map]', $cd9e0f25de9658c3$var$numberTag = '[object Number]', $cd9e0f25de9658c3$var$objectTag = '[object Object]', $cd9e0f25de9658c3$var$regexpTag = '[object RegExp]', $cd9e0f25de9658c3$var$setTag = '[object Set]', $cd9e0f25de9658c3$var$stringTag = '[object String]', $cd9e0f25de9658c3$var$weakMapTag = '[object WeakMap]';
var $cd9e0f25de9658c3$var$arrayBufferTag = '[object ArrayBuffer]', $cd9e0f25de9658c3$var$dataViewTag = '[object DataView]', $cd9e0f25de9658c3$var$float32Tag = '[object Float32Array]', $cd9e0f25de9658c3$var$float64Tag = '[object Float64Array]', $cd9e0f25de9658c3$var$int8Tag = '[object Int8Array]', $cd9e0f25de9658c3$var$int16Tag = '[object Int16Array]', $cd9e0f25de9658c3$var$int32Tag = '[object Int32Array]', $cd9e0f25de9658c3$var$uint8Tag = '[object Uint8Array]', $cd9e0f25de9658c3$var$uint8ClampedTag = '[object Uint8ClampedArray]', $cd9e0f25de9658c3$var$uint16Tag = '[object Uint16Array]', $cd9e0f25de9658c3$var$uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */ var $cd9e0f25de9658c3$var$typedArrayTags = {};
$cd9e0f25de9658c3$var$typedArrayTags[$cd9e0f25de9658c3$var$float32Tag] = $cd9e0f25de9658c3$var$typedArrayTags[$cd9e0f25de9658c3$var$float64Tag] = $cd9e0f25de9658c3$var$typedArrayTags[$cd9e0f25de9658c3$var$int8Tag] = $cd9e0f25de9658c3$var$typedArrayTags[$cd9e0f25de9658c3$var$int16Tag] = $cd9e0f25de9658c3$var$typedArrayTags[$cd9e0f25de9658c3$var$int32Tag] = $cd9e0f25de9658c3$var$typedArrayTags[$cd9e0f25de9658c3$var$uint8Tag] = $cd9e0f25de9658c3$var$typedArrayTags[$cd9e0f25de9658c3$var$uint8ClampedTag] = $cd9e0f25de9658c3$var$typedArrayTags[$cd9e0f25de9658c3$var$uint16Tag] = $cd9e0f25de9658c3$var$typedArrayTags[$cd9e0f25de9658c3$var$uint32Tag] = true;
$cd9e0f25de9658c3$var$typedArrayTags[$cd9e0f25de9658c3$var$argsTag] = $cd9e0f25de9658c3$var$typedArrayTags[$cd9e0f25de9658c3$var$arrayTag] = $cd9e0f25de9658c3$var$typedArrayTags[$cd9e0f25de9658c3$var$arrayBufferTag] = $cd9e0f25de9658c3$var$typedArrayTags[$cd9e0f25de9658c3$var$boolTag] = $cd9e0f25de9658c3$var$typedArrayTags[$cd9e0f25de9658c3$var$dataViewTag] = $cd9e0f25de9658c3$var$typedArrayTags[$cd9e0f25de9658c3$var$dateTag] = $cd9e0f25de9658c3$var$typedArrayTags[$cd9e0f25de9658c3$var$errorTag] = $cd9e0f25de9658c3$var$typedArrayTags[$cd9e0f25de9658c3$var$funcTag] = $cd9e0f25de9658c3$var$typedArrayTags[$cd9e0f25de9658c3$var$mapTag] = $cd9e0f25de9658c3$var$typedArrayTags[$cd9e0f25de9658c3$var$numberTag] = $cd9e0f25de9658c3$var$typedArrayTags[$cd9e0f25de9658c3$var$objectTag] = $cd9e0f25de9658c3$var$typedArrayTags[$cd9e0f25de9658c3$var$regexpTag] = $cd9e0f25de9658c3$var$typedArrayTags[$cd9e0f25de9658c3$var$setTag] = $cd9e0f25de9658c3$var$typedArrayTags[$cd9e0f25de9658c3$var$stringTag] = $cd9e0f25de9658c3$var$typedArrayTags[$cd9e0f25de9658c3$var$weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */ function $cd9e0f25de9658c3$var$baseIsTypedArray(value) {
    return $901275e69ea06317$exports(value) && $c05170641dc55900$exports(value.length) && !!$cd9e0f25de9658c3$var$typedArrayTags[$3fa59a4993df039a$exports(value)];
}
$cd9e0f25de9658c3$exports = $cd9e0f25de9658c3$var$baseIsTypedArray;


var $c139985fecfa82e2$exports = {};
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */ function $c139985fecfa82e2$var$baseUnary(func) {
    return function(value) {
        return func(value);
    };
}
$c139985fecfa82e2$exports = $c139985fecfa82e2$var$baseUnary;



var $8mttB = parcelRequire("8mttB");
/* Node.js helper references. */ var $2bb28b2ead9a37a8$var$nodeIsTypedArray = $8mttB && $8mttB.isTypedArray;
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
 */ var $2bb28b2ead9a37a8$var$isTypedArray = $2bb28b2ead9a37a8$var$nodeIsTypedArray ? $c139985fecfa82e2$exports($2bb28b2ead9a37a8$var$nodeIsTypedArray) : $cd9e0f25de9658c3$exports;
$2bb28b2ead9a37a8$exports = $2bb28b2ead9a37a8$var$isTypedArray;


/** Used for built-in method references. */ var $31953fc5dec43f83$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $31953fc5dec43f83$var$hasOwnProperty = $31953fc5dec43f83$var$objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function $31953fc5dec43f83$var$arrayLikeKeys(value, inherited) {
    var isArr = $3f6ab8b9844a2fb4$exports(value), isArg = !isArr && $f579f7e749b68b6d$exports(value), isBuff = !isArr && !isArg && $g9DJy(value), isType = !isArr && !isArg && !isBuff && $2bb28b2ead9a37a8$exports(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? $9b00395cc2f96f7b$exports(value.length, String) : [], length = result.length;
    for(var key in value)if ((inherited || $31953fc5dec43f83$var$hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == 'length' || isBuff && (key == 'offset' || key == 'parent') || isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    $4718c50ad460a227$exports(key, length)))) result.push(key);
    return result;
}
$31953fc5dec43f83$exports = $31953fc5dec43f83$var$arrayLikeKeys;


var $d7450a550f8bd077$exports = {};
var $ec8cebbe31a50ab0$exports = {};
/** Used for built-in method references. */ var $ec8cebbe31a50ab0$var$objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function $ec8cebbe31a50ab0$var$isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == 'function' && Ctor.prototype || $ec8cebbe31a50ab0$var$objectProto;
    return value === proto;
}
$ec8cebbe31a50ab0$exports = $ec8cebbe31a50ab0$var$isPrototype;


var $88b8244124d385b0$exports = {};
var $71fdd1c5a835623b$exports = {};
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function $71fdd1c5a835623b$var$overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
$71fdd1c5a835623b$exports = $71fdd1c5a835623b$var$overArg;


/* Built-in method references for those with the same name as other `lodash` methods. */ var $88b8244124d385b0$var$nativeKeys = $71fdd1c5a835623b$exports(Object.keys, Object);
$88b8244124d385b0$exports = $88b8244124d385b0$var$nativeKeys;


/** Used for built-in method references. */ var $d7450a550f8bd077$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $d7450a550f8bd077$var$hasOwnProperty = $d7450a550f8bd077$var$objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function $d7450a550f8bd077$var$baseKeys(object) {
    if (!$ec8cebbe31a50ab0$exports(object)) return $88b8244124d385b0$exports(object);
    var result = [];
    for(var key in Object(object))if ($d7450a550f8bd077$var$hasOwnProperty.call(object, key) && key != 'constructor') result.push(key);
    return result;
}
$d7450a550f8bd077$exports = $d7450a550f8bd077$var$baseKeys;


var $bc0cd167c2fd8b52$exports = {};


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
 */ function $bc0cd167c2fd8b52$var$isArrayLike(value) {
    return value != null && $c05170641dc55900$exports(value.length) && !$590f779a0c6efbce$exports(value);
}
$bc0cd167c2fd8b52$exports = $bc0cd167c2fd8b52$var$isArrayLike;


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
 */ function $d544ebec033bff33$var$keys(object) {
    return $bc0cd167c2fd8b52$exports(object) ? $31953fc5dec43f83$exports(object) : $d7450a550f8bd077$exports(object);
}
$d544ebec033bff33$exports = $d544ebec033bff33$var$keys;


/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */ function $89d857d87a32471c$var$getAllKeys(object) {
    return $fb6bd41fc2325c66$exports(object, $d544ebec033bff33$exports, $20b6c37872d32058$exports);
}
$89d857d87a32471c$exports = $89d857d87a32471c$var$getAllKeys;


/** Used to compose bitmasks for value comparisons. */ var $a8ee97dad1c3fd6c$var$COMPARE_PARTIAL_FLAG = 1;
/** Used for built-in method references. */ var $a8ee97dad1c3fd6c$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $a8ee97dad1c3fd6c$var$hasOwnProperty = $a8ee97dad1c3fd6c$var$objectProto.hasOwnProperty;
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
 */ function $a8ee97dad1c3fd6c$var$equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & $a8ee97dad1c3fd6c$var$COMPARE_PARTIAL_FLAG, objProps = $89d857d87a32471c$exports(object), objLength = objProps.length, othProps = $89d857d87a32471c$exports(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) return false;
    var index = objLength;
    while(index--){
        var key = objProps[index];
        if (!(isPartial ? key in other : $a8ee97dad1c3fd6c$var$hasOwnProperty.call(other, key))) return false;
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
        skipCtor || (skipCtor = key == 'constructor');
    }
    if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) result = false;
    }
    stack['delete'](object);
    stack['delete'](other);
    return result;
}
$a8ee97dad1c3fd6c$exports = $a8ee97dad1c3fd6c$var$equalObjects;


var $d59209ce93ee22ab$exports = {};
var $2224cfb253c94a88$exports = {};


var $9YxFa = parcelRequire("9YxFa");
/* Built-in method references that are verified to be native. */ var $2224cfb253c94a88$var$DataView = $991ed471436b8bad$exports($9YxFa, 'DataView');
$2224cfb253c94a88$exports = $2224cfb253c94a88$var$DataView;



var $9dae146f32121137$exports = {};


var $9YxFa = parcelRequire("9YxFa");
/* Built-in method references that are verified to be native. */ var $9dae146f32121137$var$Promise = $991ed471436b8bad$exports($9YxFa, 'Promise');
$9dae146f32121137$exports = $9dae146f32121137$var$Promise;


var $463b94df14432c06$exports = {};


var $9YxFa = parcelRequire("9YxFa");
/* Built-in method references that are verified to be native. */ var $463b94df14432c06$var$Set = $991ed471436b8bad$exports($9YxFa, 'Set');
$463b94df14432c06$exports = $463b94df14432c06$var$Set;


var $5778ee132289aa29$exports = {};


var $9YxFa = parcelRequire("9YxFa");
/* Built-in method references that are verified to be native. */ var $5778ee132289aa29$var$WeakMap = $991ed471436b8bad$exports($9YxFa, 'WeakMap');
$5778ee132289aa29$exports = $5778ee132289aa29$var$WeakMap;




/** `Object#toString` result references. */ var $d59209ce93ee22ab$var$mapTag = '[object Map]', $d59209ce93ee22ab$var$objectTag = '[object Object]', $d59209ce93ee22ab$var$promiseTag = '[object Promise]', $d59209ce93ee22ab$var$setTag = '[object Set]', $d59209ce93ee22ab$var$weakMapTag = '[object WeakMap]';
var $d59209ce93ee22ab$var$dataViewTag = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */ var $d59209ce93ee22ab$var$dataViewCtorString = $f9a5d028d2909aee$exports($2224cfb253c94a88$exports), $d59209ce93ee22ab$var$mapCtorString = $f9a5d028d2909aee$exports($05957ea21bb1a9ad$exports), $d59209ce93ee22ab$var$promiseCtorString = $f9a5d028d2909aee$exports($9dae146f32121137$exports), $d59209ce93ee22ab$var$setCtorString = $f9a5d028d2909aee$exports($463b94df14432c06$exports), $d59209ce93ee22ab$var$weakMapCtorString = $f9a5d028d2909aee$exports($5778ee132289aa29$exports);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ var $d59209ce93ee22ab$var$getTag = $3fa59a4993df039a$exports;
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ($2224cfb253c94a88$exports && $d59209ce93ee22ab$var$getTag(new $2224cfb253c94a88$exports(new ArrayBuffer(1))) != $d59209ce93ee22ab$var$dataViewTag || $05957ea21bb1a9ad$exports && $d59209ce93ee22ab$var$getTag(new $05957ea21bb1a9ad$exports) != $d59209ce93ee22ab$var$mapTag || $9dae146f32121137$exports && $d59209ce93ee22ab$var$getTag($9dae146f32121137$exports.resolve()) != $d59209ce93ee22ab$var$promiseTag || $463b94df14432c06$exports && $d59209ce93ee22ab$var$getTag(new $463b94df14432c06$exports) != $d59209ce93ee22ab$var$setTag || $5778ee132289aa29$exports && $d59209ce93ee22ab$var$getTag(new $5778ee132289aa29$exports) != $d59209ce93ee22ab$var$weakMapTag) $d59209ce93ee22ab$var$getTag = function(value) {
    var result = $3fa59a4993df039a$exports(value), Ctor = result == $d59209ce93ee22ab$var$objectTag ? value.constructor : undefined, ctorString = Ctor ? $f9a5d028d2909aee$exports(Ctor) : '';
    if (ctorString) switch(ctorString){
        case $d59209ce93ee22ab$var$dataViewCtorString:
            return $d59209ce93ee22ab$var$dataViewTag;
        case $d59209ce93ee22ab$var$mapCtorString:
            return $d59209ce93ee22ab$var$mapTag;
        case $d59209ce93ee22ab$var$promiseCtorString:
            return $d59209ce93ee22ab$var$promiseTag;
        case $d59209ce93ee22ab$var$setCtorString:
            return $d59209ce93ee22ab$var$setTag;
        case $d59209ce93ee22ab$var$weakMapCtorString:
            return $d59209ce93ee22ab$var$weakMapTag;
    }
    return result;
};
$d59209ce93ee22ab$exports = $d59209ce93ee22ab$var$getTag;




var $g9DJy = parcelRequire("g9DJy");

/** Used to compose bitmasks for value comparisons. */ var $c63dbe6bd973accd$var$COMPARE_PARTIAL_FLAG = 1;
/** `Object#toString` result references. */ var $c63dbe6bd973accd$var$argsTag = '[object Arguments]', $c63dbe6bd973accd$var$arrayTag = '[object Array]', $c63dbe6bd973accd$var$objectTag = '[object Object]';
/** Used for built-in method references. */ var $c63dbe6bd973accd$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $c63dbe6bd973accd$var$hasOwnProperty = $c63dbe6bd973accd$var$objectProto.hasOwnProperty;
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
 */ function $c63dbe6bd973accd$var$baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = $3f6ab8b9844a2fb4$exports(object), othIsArr = $3f6ab8b9844a2fb4$exports(other), objTag = objIsArr ? $c63dbe6bd973accd$var$arrayTag : $d59209ce93ee22ab$exports(object), othTag = othIsArr ? $c63dbe6bd973accd$var$arrayTag : $d59209ce93ee22ab$exports(other);
    objTag = objTag == $c63dbe6bd973accd$var$argsTag ? $c63dbe6bd973accd$var$objectTag : objTag;
    othTag = othTag == $c63dbe6bd973accd$var$argsTag ? $c63dbe6bd973accd$var$objectTag : othTag;
    var objIsObj = objTag == $c63dbe6bd973accd$var$objectTag, othIsObj = othTag == $c63dbe6bd973accd$var$objectTag, isSameTag = objTag == othTag;
    if (isSameTag && $g9DJy(object)) {
        if (!$g9DJy(other)) return false;
        objIsArr = true;
        objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
        stack || (stack = new $6845f9f18685431d$exports);
        return objIsArr || $2bb28b2ead9a37a8$exports(object) ? $843d31a03cacdf24$exports(object, other, bitmask, customizer, equalFunc, stack) : $154fbb2b3019daf8$exports(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & $c63dbe6bd973accd$var$COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && $c63dbe6bd973accd$var$hasOwnProperty.call(object, '__wrapped__'), othIsWrapped = othIsObj && $c63dbe6bd973accd$var$hasOwnProperty.call(other, '__wrapped__');
        if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new $6845f9f18685431d$exports);
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
    }
    if (!isSameTag) return false;
    stack || (stack = new $6845f9f18685431d$exports);
    return $a8ee97dad1c3fd6c$exports(object, other, bitmask, customizer, equalFunc, stack);
}
$c63dbe6bd973accd$exports = $c63dbe6bd973accd$var$baseIsEqualDeep;



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
 */ function $f2b9c271f6c133ce$var$baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) return true;
    if (value == null || other == null || !$901275e69ea06317$exports(value) && !$901275e69ea06317$exports(other)) return value !== value && other !== other;
    return $c63dbe6bd973accd$exports(value, other, bitmask, customizer, $f2b9c271f6c133ce$var$baseIsEqual, stack);
}
$f2b9c271f6c133ce$exports = $f2b9c271f6c133ce$var$baseIsEqual;


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
 */ function $b5efcd7a6974677c$var$isEqual(value, other) {
    return $f2b9c271f6c133ce$exports(value, other);
}
$b5efcd7a6974677c$exports = $b5efcd7a6974677c$var$isEqual;


/*
	build Proxy to observe changes to object properties
	*/ const $792b173a6e02c603$var$registeredObservables = {};
const $792b173a6e02c603$export$7ec259ba0528fb23 = (id)=>{
    return $792b173a6e02c603$var$registeredObservables[id];
};
const $792b173a6e02c603$var$buildProxy = (self)=>{
    return {
        get (target, property) {
            const val = Reflect.get(target, property);
            if (val && typeof val === 'object') return new Proxy(val, $792b173a6e02c603$var$buildProxy(self));
            return val;
        },
        set (target, property, value) {
            self.sync(property);
            return Reflect.set(target, property, value);
        },
        deleteProperty (target, property) {
            self.sync(property);
            return Reflect.deleteProperty(target, property);
        }
    };
};
/*
	@class ObservableObject

	Base class for data binding. Implements Proxy and Reflect on an object so that
	changes can be observed and manages subscribing and notifying observers.

	*/ class $792b173a6e02c603$export$b176171395436676 {
    /*
		@param { String } id - unique id of
		@param { Object } data - optional externally defined javascript object to observe
		@param { Object } options - optional, used by subclasses
		*/ constructor(id, data = {}, options = {}){
        this.id = id;
        if ($792b173a6e02c603$var$registeredObservables[this.id]) throw new Error('ObservableObject ' + id + ' already exists.');
        this.bound = {} // watchers to sync on value change
        ;
        this.data = new Proxy(data, $792b173a6e02c603$var$buildProxy(this));
        this.options = options;
        $792b173a6e02c603$var$registeredObservables[this.id] = this;
    }
    /*
		@function destroy - remove all bindings
		*/ destroy() {
        delete $792b173a6e02c603$var$registeredObservables[this.id];
        delete this.data;
        Object.keys(this.bound).forEach((prop)=>{
            Object.keys(this.bound[prop]).forEach((id)=>{
                this.unbind(id, prop);
            });
        });
    }
    /*
		@function getBoundData - return object being observed
		*/ getBoundData() {
        return this.data;
    }
    /*
		@function set - set observed object property
		@param { String } property - observed object property to set
		@param value - string, array, object or whatever to assign to property
		*/ set(property, value) {
        if (!(/*@__PURE__*/$parcel$interopDefault($b5efcd7a6974677c$exports))(this.get(property), value)) this.data[property] = value;
    }
    /*
		@function get - get observed object property
		@param { String } property - observed object property to get
		*/ get(property) {
        return this.data[property];
    }
    /*
		@function delete - delete observed object property
		@param { String } property - observed object property to delete
		*/ delete(property) {
        delete this.data[property];
    }
    /*
		@function syncAll - sync all observed object properties
		*/ syncAll() {
        Object.keys(this.data || {}).forEach((k)=>{
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
		*/ bind(id, fn, property = '*') {
        if (!this.bound[property]) this.bound[property] = {};
        this.bound[property][id] = fn;
        Object.keys(this.data).forEach((k)=>{
            fn(this.id, k, this.get(k));
        });
    }
    /*
		@function unbind - unattach observer
		@param { String } id - unique id of observer function
		@param { String } property - optional name of property being observed
		*/ unbind(id, property = '*') {
        if (this.bound[property] && this.bound[property][id]) delete this.bound[property][id];
    }
    /*
		function sync - notify observers of property value change
		@param { String } property - property that changed
		*/ sync(property) {
        Object.keys(this.bound['*'] || {}).forEach((k)=>{
            this.bound['*'][k](this.id, property, this.get(property));
        });
        Object.keys(this.bound[property] || {}).forEach((k)=>{
            this.bound[property][k](this.id, property, this.get(property));
        });
    }
}


let $28e0c90eeff7adcf$export$77e1d49fdb880d27;
let $28e0c90eeff7adcf$export$c7320459fd5267c0;
let $28e0c90eeff7adcf$export$497098c8185e6e33;
let $28e0c90eeff7adcf$export$296acd8d6f329fa3;
let $28e0c90eeff7adcf$export$fa28dfcc49831a91;
let $28e0c90eeff7adcf$export$788f7857dc8c77f5;
class $28e0c90eeff7adcf$var$ObserverSubscriptionManager {
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
class $28e0c90eeff7adcf$export$d36264ac4e7cee7d extends $28e0c90eeff7adcf$var$ObserverSubscriptionManager {
    constructor(options = {}){
        super(options);
        // debounce - just need to know if a change occured, not every change
        this.mutationHandler = (/*@__PURE__*/$parcel$interopDefault($883871a813e4aea5$exports))((mutations, observer)=>{
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
        this.notifyObservers('watchDOM', [
            root || this.options.shadowDOM || document.body
        ]);
    }
}
class $28e0c90eeff7adcf$var$ScrollWatcher extends $28e0c90eeff7adcf$var$ObserverSubscriptionManager {
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
        $fa90420f3b30b29c$export$6f53260fffa88f1c.on('theScrollWatcher', this.scrollElement, 'scroll', ()=>{
            this.trigger();
        });
    }
    sleep() {
        super.sleep();
        $fa90420f3b30b29c$export$6f53260fffa88f1c.off('theScrollWatcher', this.scrollElement, 'scroll');
    }
    inViewPort(element) {
        return $fa90420f3b30b29c$export$6f53260fffa88f1c.inViewPort(element, this.scrollElement);
    }
    watchScroll() {
        this.notifyObservers('watchScroll');
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
class $28e0c90eeff7adcf$var$ResizeWatcher extends $28e0c90eeff7adcf$var$ObserverSubscriptionManager {
    constructor(options){
        super(options);
        this.debounce = (/*@__PURE__*/$parcel$interopDefault($883871a813e4aea5$exports))(()=>{
            this.watchResize();
        }, 250);
    }
    subscribe(observer) {
        super.subscribe(observer);
        observer.watchResize();
    }
    wakeup() {
        super.wakeup();
        window.addEventListener('resize', this.debounce, false);
    }
    sleep() {
        super.sleep();
        window.removeEventListener('resize', this.debounce);
    }
    watchResize() {
        this.notifyObservers('watchResize');
    }
}
class $28e0c90eeff7adcf$var$OrientationWatcher extends $28e0c90eeff7adcf$var$ObserverSubscriptionManager {
    constructor(options){
        super(options);
        if ('onorientationchange' in window) $fa90420f3b30b29c$export$6f53260fffa88f1c.addClass(document.body, 'have-orientation');
        else $fa90420f3b30b29c$export$6f53260fffa88f1c.addClass(document.body, 'no-orientation');
        this.debounce = (/*@__PURE__*/$parcel$interopDefault($883871a813e4aea5$exports))(()=>{
            this.watchOrientation();
        }, 250);
    }
    subscribe(observer) {
        super.subscribe(observer);
        observer.watchOrientation();
    }
    wakeup() {
        super.wakeup();
        if ('onorientationchange' in window) window.addEventListener('orientationchange', this.debounce, false);
    }
    sleep() {
        super.sleep();
        if ('onorientationchange' in window) window.removeEventListener('orientationchange', this.debounce);
    }
    watchOrientation() {
        this.notifyObservers('watchOrientation');
    }
}
// keep track of who is using web workers and
// cleanup dangling worker when no subscribers remain
class $28e0c90eeff7adcf$var$WorkerWatcher extends $28e0c90eeff7adcf$var$ObserverSubscriptionManager {
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
                    type: 'text/javascript'
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
        if (!this.workers[id]) throw new Error('worker ' + id + ' does not exist');
        const workerObservers = this.workers[id].observers;
        workerObservers.push(observer);
        super.subscribe(observer);
    }
    unSubscribe(observer, id) {
        if (!this.workers[id]) throw new Error('worker ' + id + ' does not exist');
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
class $28e0c90eeff7adcf$var$ObservableObjectWatcher extends $28e0c90eeff7adcf$var$ObserverSubscriptionManager {
    constructor(options){
        super(options);
        this.registeredObservableObjects = {};
    }
    getObservable(id) {
        return this.registeredObservableObjects[id] ? this.registeredObservableObjects[id].observable : undefined;
    }
    observableStart(id, data) {
        const foundObservable = $792b173a6e02c603$export$7ec259ba0528fb23(id);
        // trying to define with data but already exists
        if (foundObservable && data !== undefined) throw new Error('ObservableObject ' + id + ' already exists, can\'t build.');
        if (!this.registeredObservableObjects[id]) {
            if (foundObservable) this.registeredObservableObjects[id] = {
                id: id,
                observable: foundObservable,
                observers: [],
                managed: false
            };
            else this.registeredObservableObjects[id] = {
                id: id,
                observable: new $792b173a6e02c603$export$b176171395436676(id, data),
                observers: [],
                managed: true
            };
            this.registeredObservableObjects[id].observable.bind(this.constructor.name, this.notify.bind(this));
        }
        return this.registeredObservableObjects[id].observable;
    }
    // delete an observable
    observableDestroy(id) {
        if (!this.registeredObservableObjects[id]) throw new Error('ObservableObject observableDestroy ' + id + ' does not exist');
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
        if (!this.registeredObservableObjects[id]) throw new Error('ObservableObject unSubscribe ' + id + ' does not exist');
        const observers = this.registeredObservableObjects[id].observers;
        if (observers.indexOf(observer) !== -1) observers.splice(observers.indexOf(observer), 1);
        if (!observers.length && this.registeredObservableObjects[id].managed) this.observableDestroy(id);
        super.unSubscribe(observer);
    }
    notify(id, property, value, source) {
        if (!this.registeredObservableObjects[id]) throw new Error('ObservableObject notify ' + id + ' does not exist');
        const observers = this.registeredObservableObjects[id].observers;
        observers.forEach((observer)=>{
            if (observer.observableChanged) observer.observableChanged(id, property, value, source);
        });
    }
}
// build subscription services
$28e0c90eeff7adcf$export$77e1d49fdb880d27 = new $28e0c90eeff7adcf$export$d36264ac4e7cee7d();
$28e0c90eeff7adcf$export$c7320459fd5267c0 = new $28e0c90eeff7adcf$var$ScrollWatcher();
$28e0c90eeff7adcf$export$497098c8185e6e33 = new $28e0c90eeff7adcf$var$ResizeWatcher();
$28e0c90eeff7adcf$export$296acd8d6f329fa3 = new $28e0c90eeff7adcf$var$OrientationWatcher();
$28e0c90eeff7adcf$export$fa28dfcc49831a91 = new $28e0c90eeff7adcf$var$WorkerWatcher();
$28e0c90eeff7adcf$export$788f7857dc8c77f5 = new $28e0c90eeff7adcf$var$ObservableObjectWatcher();



var $735ab5a24260522e$exports = {};

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
 */ var $735ab5a24260522e$var$kebabCase = $ab2569b856935945$exports(function(result, word, index) {
    return result + (index ? '-' : '') + word.toLowerCase();
});
$735ab5a24260522e$exports = $735ab5a24260522e$var$kebabCase;



let $33c965f1983345d4$var$unique = 0 // unique IDs for controllers
;
const $33c965f1983345d4$export$85e745b96b6487a7 = [] // instantiated controllers
;
const $33c965f1983345d4$var$supportsCustomElements = 'customElements' in window // browser supports custom elements
;
const $33c965f1983345d4$export$ac297e650eeb1e78 = {};
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

	*/ const $33c965f1983345d4$export$22044c20eef36040 = (className, object)=>{
    if ($33c965f1983345d4$export$ac297e650eeb1e78[className]) throw new Error('Sargasso class ' + className + ' is already registered.');
    $33c965f1983345d4$export$ac297e650eeb1e78[className] = object;
    if ($33c965f1983345d4$var$supportsCustomElements) {
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
        const fn = new Function('registeredClasses', customElementClassFactory)($33c965f1983345d4$export$ac297e650eeb1e78);
        customElements.define('sargasso-' + (/*@__PURE__*/$parcel$interopDefault($735ab5a24260522e$exports))(className), fn);
    }
};
// the public event handlers to implement in subclasses
const $33c965f1983345d4$var$eventNames = [
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
	*/ class $33c965f1983345d4$export$d7944a94c1afb262 {
    constructor(element, options = {}){
        $2db055cf8ef21bb4$export$a22775fa5e2eebd9('Sargasso constructor element', element, [
            'isDefined',
            'isElement'
        ]);
        $2db055cf8ef21bb4$export$a22775fa5e2eebd9('Sargasso constructor options', options, [
            'isDefined',
            [
                'isObject'
            ]
        ]);
        this.uid = ++$33c965f1983345d4$var$unique;
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
        this.render = (/*@__PURE__*/$parcel$interopDefault($883871a813e4aea5$exports))(()=>{
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
        const registeredResponsiveControllers = this.getMetaData('registeredResponsiveControllers') || [];
        registeredResponsiveControllers.push(this);
        this.setMetaData('registeredResponsiveControllers', registeredResponsiveControllers);
        this.setMetaData(this.constructor.name, this);
        $33c965f1983345d4$export$85e745b96b6487a7.push(this);
        // if using shadow DOM, build a DOMWatcher to observe changes
        if (this._shadowDOM) {
            if (!this._shadowDOMWatcher) this._shadowDOMWatcher = new $28e0c90eeff7adcf$export$d36264ac4e7cee7d({
                shadowDOM: this._shadowRoot
            });
            this._shadowDOMWatcher.subscribe(this);
        }
        // subscribe to desired event services
        if (this.options.watchDOM) $28e0c90eeff7adcf$export$77e1d49fdb880d27.subscribe(this);
        if (this.options.watchScroll || this.options.watchViewport) $28e0c90eeff7adcf$export$c7320459fd5267c0.subscribe(this);
        if (this.options.watchResize || this.options.watchViewport) $28e0c90eeff7adcf$export$497098c8185e6e33.subscribe(this);
        if (this.options.watchOrientation || this.options.watchViewport) $28e0c90eeff7adcf$export$296acd8d6f329fa3.subscribe(this);
        /*
			listen for 'sargasso' events
			Call the method named in e.detail.sargassoEvent or call this.elementEvent
		*/ this.elementListener = (e)=>{
            if (e.detail && e.detail.sargassoEvent && $33c965f1983345d4$var$eventNames.indexOf(e.detail.sargassoEvent) !== -1) this[e.detail.sargassoEvent].apply(this, e.detail.sargassoEventOptions || []);
            else this.elementEvent(e);
        };
        this.element.addEventListener('sargasso', this.elementListener);
        this._started = true;
    }
    /*
		@function sleep - override this to clean up any events or references in your subclass

		Called when element has been removed from DOM just before it is destroyed

		Note: always call super.sleep() at the end of your subclass sleep method
		*/ sleep() {
        if (this._shadowDOM) this._shadowDOMWatcher.unSubscribe(this);
        if (this.options.watchDOM) $28e0c90eeff7adcf$export$77e1d49fdb880d27.unSubscribe(this);
        if (this.options.watchScroll || this.options.watchViewport) $28e0c90eeff7adcf$export$c7320459fd5267c0.unSubscribe(this);
        if (this.options.watchResize || this.options.watchViewport) $28e0c90eeff7adcf$export$497098c8185e6e33.unSubscribe(this);
        if (this.options.watchOrientation || this.options.watchViewport) $28e0c90eeff7adcf$export$296acd8d6f329fa3.unSubscribe(this);
        this.element.removeEventListener('sargasso', this.elementListener);
        $fa90420f3b30b29c$export$6f53260fffa88f1c.offAll(this.element) // remove all dangling event listeners created with on/once
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
		@param { String } property - property that changed
		@param { String } value - new value
		*/ observableChanged(id, property, value) {
        this.render();
    }
    /****************************************************
	UTILITY METHODS - callable but normally not overriden
	*****************************************************/ /*
		@function setMetaData - Set metadata. Key value storage implemented as a weakMap
		@param { String } - key name for value
		@param { Object } - value or JSON object, null will remove from key from metadate
		*/ setMetaData(k, v) {
        $fa90420f3b30b29c$export$6f53260fffa88f1c.setMetaData(this.element, k, v);
    }
    /*
		@function getMetaData - Retrieve metadata
		@param { String } key - name of value to return
		@return { Object } if key is found otherwise undefined
		*/ getMetaData(k) {
        return $fa90420f3b30b29c$export$6f53260fffa88f1c.getMetaData(this.element, k);
    }
    /*
		@function on - add delegated event handler for this.element
		@param { String} evt - HTML element event name
		@param { String } selector - optional element query selector
		@param { Function } fn - event handler function
		@param { Object } [options] - for addEventListener
		*/ on(evt, selector, fn, options) {
        $fa90420f3b30b29c$export$6f53260fffa88f1c.on(this.constructor.name + '-' + this.uid, this.element, evt, selector, fn, options);
    }
    /*
		@function off - Remove delegated event handler
		@param { String} evt - HTML element event name
		@param { String } [selector] - element query selector
		*/ off(evt, selector) {
        $fa90420f3b30b29c$export$6f53260fffa88f1c.off(this.constructor.name + '-' + this.uid, this.element, evt, selector);
    }
    /*
		@function once - add delegated event handler for this.element witch executes only once
		@param { String} evt - HTML element event name
		@param { String } selector - optional element query selector
		@param { Function } fn - event handler function
		@param { Object } [options] - for addEventListener
		*/ once(evt, selector, fn, options) {
        $fa90420f3b30b29c$export$6f53260fffa88f1c.once(this.constructor.name + '-' + this.uid, this.element, evt, selector, fn, options);
    }
    /*
		@function notifyAll - broadcast 'event' to all instantiated sargasso controllers
		@param { String } event - name of sargasso event
		@param { Object } params - array of params to attach to event
		*/ notifyAll(event, params) {
        if ($33c965f1983345d4$var$eventNames.indexOf(event) === -1) throw new Error('invalid event name ' + event);
        for(let i = 0; i < $33c965f1983345d4$export$85e745b96b6487a7.length; i++){
            const peer = $33c965f1983345d4$export$85e745b96b6487a7[i];
            if (peer !== this && peer[event]) peer[event].apply(peer, params);
        }
    }
    /*
		@function notifyElement - broadcast event to all sargasso controllers for 'this.element'
		@param { String } event - name of sargasso event
		@param { Object } params - array of params to attach to event
		*/ notifyElement(element, event, params) {
        if ($33c965f1983345d4$var$eventNames.indexOf(event) === -1) throw new Error('invalid event name ' + event);
        const registeredResponsiveControllers = this.getMetaData('registeredResponsiveControllers');
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
        return $fa90420f3b30b29c$export$6f53260fffa88f1c.hasClass(this.element, cssClass);
    }
    addClass(cssClasses) {
        $fa90420f3b30b29c$export$6f53260fffa88f1c.addClass(this.element, cssClasses);
    }
    removeClass(cssClasses) {
        $fa90420f3b30b29c$export$6f53260fffa88f1c.removeClass(this.element, cssClasses);
    }
    setCSS(cssObject) {
        $fa90420f3b30b29c$export$6f53260fffa88f1c.setCSS(this.element, cssObject);
    }
    isVisible() {
        return $fa90420f3b30b29c$export$6f53260fffa88f1c.isVisible(this.element);
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
        this._workers[id] = $28e0c90eeff7adcf$export$fa28dfcc49831a91.registerWorker(id, codeOrURL);
        $28e0c90eeff7adcf$export$fa28dfcc49831a91.subscribe(this, id);
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
    observableStart(id, data) {
        $28e0c90eeff7adcf$export$788f7857dc8c77f5.subscribe(this, id, data);
        this._observables[id] = $28e0c90eeff7adcf$export$788f7857dc8c77f5.getObservable(id);
        return this._observables[id];
    }
    observableStop(id) {
        if (this._observables[id]) {
            $28e0c90eeff7adcf$export$788f7857dc8c77f5.unSubscribe(this, id);
            delete this._observables[id];
        }
    }
    observableStopAll() {
        for(const id in this._observables)this.observableStop(id);
    }
    setTemplate(template) {
        this._template = template;
    }
    setRenderer(renderer) {
        this.renderer = renderer;
    }
    setTemplateArgs(args = {}) {
        this._templateArgs = args.constructor && args.constructor.name === 'ObservableObject' ? args.data : args;
        this.render();
    }
    getTemplateArgs() {
        return JSON.parse(JSON.stringify(this._templateArgs || {}));
    }
    // this.render is a debounced call to this
    _render() {
        if (this._template && this.renderer) this.renderer(this._template(this.getTemplateArgs()), this.element);
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
            $28e0c90eeff7adcf$export$fa28dfcc49831a91.unSubscribe(this, id);
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
        const registeredResponsiveControllers = this.getMetaData('registeredResponsiveControllers');
        if (registeredResponsiveControllers) {
            if (registeredResponsiveControllers.indexOf(this) !== -1) {
                registeredResponsiveControllers.splice(registeredResponsiveControllers.indexOf(this), 1);
                this.setMetaData('registeredResponsiveControllers', registeredResponsiveControllers);
            }
        }
        this.setMetaData(this.constructor.name, null);
        this.element = null;
        if ($33c965f1983345d4$export$85e745b96b6487a7.indexOf(this) !== -1) $33c965f1983345d4$export$85e745b96b6487a7.splice($33c965f1983345d4$export$85e745b96b6487a7.indexOf(this), 1);
    }
    /****************************************************
	EVENT HOOK METHODS - normally not called or overriden
	*****************************************************/ /*
		@function watchDOM - hook called if options.watchDOM set and DOM changed
		*/ watchDOM(root) {
        if (root === this._shadowRoot) // something happend this element's my shadow DOM, tell in the DOM about it
        // so dom observers can take actions such as instantiating new sargasso
        // controllers, etc.
        $28e0c90eeff7adcf$export$77e1d49fdb880d27.observeDOM(this._shadowRoot);
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
        if ($28e0c90eeff7adcf$export$c7320459fd5267c0.inViewPort(this.element)) {
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
$33c965f1983345d4$export$22044c20eef36040('Sargasso', $33c965f1983345d4$export$d7944a94c1afb262);








class $dee49f10614adc45$export$10307b0c33312dbb extends $33c965f1983345d4$export$d7944a94c1afb262 {
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
        const els = root.querySelectorAll('[data-lazy-sargasso-class]');
        for(let i = 0; i < els.length; i++){
            const element = els[i];
            if ($28e0c90eeff7adcf$export$c7320459fd5267c0.inViewPort(element)) {
                const cls = element.getAttribute('data-lazy-sargasso-class').split(/\s*,\s*/);
                for(let j = 0; j < cls.length; j++){
                    const thing = new $33c965f1983345d4$export$ac297e650eeb1e78[cls[j]](els[i]);
                    thing.start();
                }
                element.removeAttribute('data-lazy-sargasso-class');
            }
        }
    }
}
$33c965f1983345d4$export$22044c20eef36040('LazyInstantiate', $dee49f10614adc45$export$10307b0c33312dbb);


class $c1f611f425340a0a$export$26b75d03ac531c24 extends $33c965f1983345d4$export$d7944a94c1afb262 {
    constructor(element, options = {}){
        super(element, {
            watchDOM: true,
            mortal: false
        });
        this.lazy = new $dee49f10614adc45$export$10307b0c33312dbb(element, options);
    }
    start() {
        this.lazy.start();
        super.start();
    }
    instantiate(element) {
        const cls = element.getAttribute('data-sargasso-class').split(/\s*,\s*/);
        for(let i = 0; i < cls.length; i++)try {
            const thing = new $33c965f1983345d4$export$ac297e650eeb1e78[cls[i]](element);
            thing.start();
        } catch (e) {
            console.log('error instantiating ' + cls[i], e, $33c965f1983345d4$export$ac297e650eeb1e78);
        }
        element.removeAttribute('data-sargasso-class');
    }
    newPage() {
        this.doIt();
    }
    DOMChanged(root) {
        this.doIt(root);
    }
    doIt(root = document.body) {
        if (root.getAttribute('data-sargasso-class')) this.instantiate(root);
        const elements = root.querySelectorAll('[data-sargasso-class]');
        for (const element of elements)this.instantiate(element);
        // check for dangling live elements and kill them
        const toCleanup = [];
        for(let i = 0; i < $33c965f1983345d4$export$85e745b96b6487a7.length; i++)if (!$33c965f1983345d4$export$85e745b96b6487a7[i].options.immortal && !$33c965f1983345d4$export$85e745b96b6487a7[i].options.isCustomElement && !document.body.contains($33c965f1983345d4$export$85e745b96b6487a7[i].element)) toCleanup.push($33c965f1983345d4$export$85e745b96b6487a7[i]);
        for(let i1 = 0; i1 < toCleanup.length; i1++)toCleanup[i1].destroy();
    }
}
$33c965f1983345d4$export$22044c20eef36040('SargassoSupervisor', $c1f611f425340a0a$export$26b75d03ac531c24);




var $f6533fdb015b2a84$exports = {};
"use strict";
var $f6533fdb015b2a84$var$__assign = $f6533fdb015b2a84$exports && $f6533fdb015b2a84$exports.__assign || function() {
    $f6533fdb015b2a84$var$__assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $f6533fdb015b2a84$var$__assign.apply(this, arguments);
};
$f6533fdb015b2a84$exports.__esModule = true;
function $f6533fdb015b2a84$var$stringifyAttribute(name, value) {
    if (!value) return '';
    var stringified = '; ' + name;
    if (value === true) return stringified; // boolean attributes shouldn't have a value
    return stringified + '=' + value;
}
function $f6533fdb015b2a84$var$stringifyAttributes(attributes) {
    if (typeof attributes.expires === 'number') {
        var expires = new Date();
        expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
        attributes.expires = expires;
    }
    return $f6533fdb015b2a84$var$stringifyAttribute('Expires', attributes.expires ? attributes.expires.toUTCString() : '') + $f6533fdb015b2a84$var$stringifyAttribute('Domain', attributes.domain) + $f6533fdb015b2a84$var$stringifyAttribute('Path', attributes.path) + $f6533fdb015b2a84$var$stringifyAttribute('Secure', attributes.secure) + $f6533fdb015b2a84$var$stringifyAttribute('SameSite', attributes.sameSite);
}
function $f6533fdb015b2a84$var$encode(name, value, attributes) {
    return encodeURIComponent(name).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent) // allowed special characters
    .replace(/\(/g, '%28').replace(/\)/g, '%29') // replace opening and closing parens
     + '=' + encodeURIComponent(value)// allowed special characters
    .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent) + $f6533fdb015b2a84$var$stringifyAttributes(attributes);
}
$f6533fdb015b2a84$exports.encode = $f6533fdb015b2a84$var$encode;
function $f6533fdb015b2a84$var$parse(cookieString) {
    var result = {};
    var cookies = cookieString ? cookieString.split('; ') : [];
    var rdecode = /(%[\dA-F]{2})+/gi;
    for(var i = 0; i < cookies.length; i++){
        var parts = cookies[i].split('=');
        var cookie = parts.slice(1).join('=');
        if (cookie.charAt(0) === '"') cookie = cookie.slice(1, -1);
        try {
            var name_1 = parts[0].replace(rdecode, decodeURIComponent);
            result[name_1] = cookie.replace(rdecode, decodeURIComponent);
        } catch (e) {
        // ignore cookies with invalid name/value encoding
        }
    }
    return result;
}
$f6533fdb015b2a84$exports.parse = $f6533fdb015b2a84$var$parse;
function $f6533fdb015b2a84$var$getAll() {
    return $f6533fdb015b2a84$var$parse(document.cookie);
}
$f6533fdb015b2a84$exports.getAll = $f6533fdb015b2a84$var$getAll;
function $f6533fdb015b2a84$var$get(name) {
    return $f6533fdb015b2a84$var$getAll()[name];
}
$f6533fdb015b2a84$exports.get = $f6533fdb015b2a84$var$get;
function $f6533fdb015b2a84$var$set(name, value, attributes) {
    document.cookie = $f6533fdb015b2a84$var$encode(name, value, $f6533fdb015b2a84$var$__assign({
        path: '/'
    }, attributes));
}
$f6533fdb015b2a84$exports.set = $f6533fdb015b2a84$var$set;
function $f6533fdb015b2a84$var$remove(name, attributes) {
    $f6533fdb015b2a84$var$set(name, '', $f6533fdb015b2a84$var$__assign($f6533fdb015b2a84$var$__assign({}, attributes), {
        expires: -1
    }));
}
$f6533fdb015b2a84$exports.remove = $f6533fdb015b2a84$var$remove;


const $7f1bab351fef7d1e$export$f86ec3d89f756a21 = [
    {
        className: 'screen-xs',
        maxWidth: 599
    },
    {
        className: 'screen-sm',
        maxWidth: 1023
    },
    {
        className: 'screen-md',
        maxWidth: 1439
    },
    {
        className: 'screen-lg',
        maxWidth: 1999
    },
    {
        className: 'screen-xl',
        maxWidth: undefined
    }
];
class $7f1bab351fef7d1e$export$c38d2c1bff643203 extends $33c965f1983345d4$export$d7944a94c1afb262 {
    constructor(element, options = {}){
        options.watchResize = true;
        super(element, options);
        if (options.widths) this.options.widths = options.widths;
        else this.options.widths = $7f1bab351fef7d1e$export$f86ec3d89f756a21;
        this.scale = undefined;
        this.disabled = false;
        this.forceScale = undefined;
        this.orientation = undefined;
        this.widths = [];
        this.classes = [];
    }
    start() {
        super.start();
        let css = '.show-hide{display:none;}\n';
        this.widths.push(0);
        for(let i = 0; i < this.options.widths.length; i++){
            if (this.options.widths[i].maxWidth) this.widths.push(this.options.widths[i].maxWidth);
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
    }
    didResize() {
        super.didResize();
        this.detectGeometry();
    }
    disableResponsive(scale) {
        $fa90420f3b30b29c$export$6f53260fffa88f1c.addClass(document.body, 'disable-responsive');
        this.disabled = true;
        this.forceScale = scale;
        this.detectGeometry();
    }
    enableResponsive() {
        $fa90420f3b30b29c$export$6f53260fffa88f1c.removeClass(document.body, 'disable-responsive');
        this.disabled = false;
        this.forceScale = '';
        this.detectGeometry();
    }
    detectGeometry() {
        let newScale = this.classes[this.widths.length - 1];
        if (this.disabled) newScale = this.forceScale;
        else {
            const ww = window.innerWidth;
            const wh = window.innerHeight;
            if (wh > ww) {
                if (this.orientation !== 'portrait') {
                    const frame = ()=>{
                        $fa90420f3b30b29c$export$6f53260fffa88f1c.removeClass(document.body, 'landscape');
                        $fa90420f3b30b29c$export$6f53260fffa88f1c.addClass(document.body, 'portrait');
                    };
                    this.queueFrame(frame);
                    this.orientation = 'portrait';
                }
            } else if (this.orientation !== 'landscape') {
                const frame = ()=>{
                    $fa90420f3b30b29c$export$6f53260fffa88f1c.removeClass(document.body, 'portrait');
                    $fa90420f3b30b29c$export$6f53260fffa88f1c.addClass(document.body, 'landscape');
                };
                this.queueFrame(frame);
                this.orientation = 'landscape';
            }
            for(let i = 0; i < this.widths.length - 1; i++)if (ww >= this.widths[i] && ww < this.widths[i + 1]) {
                newScale = this.classes[i];
                break;
            }
        }
        let changed = 0;
        if (newScale !== this.scale) {
            ++changed;
            const frame = ()=>{
                for(let i = 0; i < this.classes.length; i++)if (this.classes[i] !== newScale) {
                    $fa90420f3b30b29c$export$6f53260fffa88f1c.addClass(document.body, 'not-' + this.classes[i]);
                    $fa90420f3b30b29c$export$6f53260fffa88f1c.removeClass(document.body, this.classes[i]);
                    $fa90420f3b30b29c$export$6f53260fffa88f1c.removeClass(document.body, 'shown-' + this.classes[i]);
                    $fa90420f3b30b29c$export$6f53260fffa88f1c.removeClass(document.body, 'hidden-' + this.classes[i]);
                } else $fa90420f3b30b29c$export$6f53260fffa88f1c.removeClass(document.body, 'not-' + this.classes[i]);
                $fa90420f3b30b29c$export$6f53260fffa88f1c.addClass(document.body, newScale);
                $fa90420f3b30b29c$export$6f53260fffa88f1c.addClass(document.body, 'shown-' + newScale);
                $fa90420f3b30b29c$export$6f53260fffa88f1c.addClass(document.body, 'hidden-' + newScale);
                this.notifyAll('didBreakpoint', [
                    newScale
                ]);
            };
            this.queueFrame(frame);
        }
        this.scale = newScale;
        if (changed) this.setHints();
    }
    setHints() {
        let classes = '';
        if (this.scale) {
            if (classes) classes += ' ';
            classes += this.scale;
        }
        if (classes !== this.getCookie('responsive')) this.setCookie('responsive', classes);
    }
    getCookie(key) {
        return $f6533fdb015b2a84$exports.get(key);
    }
    setCookie(key, value, expires) {
        const options = {
            path: '/',
            domain: this.options.cookieDomain || null,
            expires: expires
        };
        $f6533fdb015b2a84$exports.set(key, value, options);
    }
    deleteCookie(key) {
        this.setCookie(key, null);
    }
}
$33c965f1983345d4$export$22044c20eef36040('Breakpoints', $7f1bab351fef7d1e$export$c38d2c1bff643203);





class $9cff8617a0651eef$export$8c08cf4432b2f5b3 extends $33c965f1983345d4$export$d7944a94c1afb262 {
    constructor(element, options = {}){
        options.watchDOM = true;
        options.immortal = true;
        super(element, options);
        this.excludeRegex = new RegExp('^(//|http|javascript|mailto|#)', 'i');
        this.currentPage = location.pathname + location.search;
        this.cachedMarkup = {};
    }
    start() {
        // set up hijax markup cache
        const containers = document.querySelectorAll('[data-hijax-skip-unchanged]');
        for(let i = 0; i < containers.length; i++){
            const container = containers[i];
            const id = container.getAttribute('id');
            this.cachedMarkup[id] = container.innerHTML;
        }
        super.start();
        window.addEventListener('popstate', (e)=>{
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
        const links = fragment ? fragment.getElementsByTagName('a') : this.element.getElementsByTagName('a');
        for(let i = 0; i < links.length; i++){
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !link.getAttribute('data-hijaxed') && !link.getAttribute('target') && !link.hasAttribute('data-no-hijax') && !this.excludeRegex.exec(href)) {
                link.setAttribute('data-hijaxed', true);
                link.addEventListener('click', (e)=>{
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
                if (this.options.onError) this.options.onError('danger', err);
                else alert('Error loading page: ' + err);
            }
            if (handled) this.currentPage = location.pathname + location.search;
            else this.loadPage(rewrite || url);
        });
    }
    loadPage(url) {
        const frame1 = ()=>{
            $fa90420f3b30b29c$export$6f53260fffa88f1c.addClass(document.body, 'hijax-loading');
        };
        this.queueFrame(frame1);
        if (this.options.onExitPage) this.options.onExitPage();
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.setRequestHeader('Sargasso-Hijax', 1);
        xhr.setRequestHeader('x-digitopia-hijax', 1);
        if (this.options.onLoading) {
            this.options.onLoading();
            xhr.onreadystatechange = this.options.onLoading;
        }
        xhr.onload = ()=>{
            if (xhr.status === 301 || xhr.status === 302 || xhr.getResponseHeader('Sargasso-Location')) {
                const loc = xhr.getResponseHeader('Location') ? xhr.getResponseHeader('Location') : xhr.getResponseHeader('Sargasso-Location');
                this.setPage(loc);
            } else if (xhr.status === 200) {
                $28e0c90eeff7adcf$export$c7320459fd5267c0.scrollTop(0);
                this.mergePage(xhr.responseText);
                const oldPage = this.currentPage;
                const frame = ()=>{
                    this.notifyAll('newPage', [
                        oldPage,
                        location.pathname + location.search
                    ]);
                    $fa90420f3b30b29c$export$6f53260fffa88f1c.removeClass(document.body, 'hijax-loading');
                };
                this.queueFrame(frame);
                this.currentPage = location.pathname + location.search;
            } else {
                const flashLevel = xhr.getResponseHeader('Sargasso-Flash-Level') || 'danger';
                let flashMessage = xhr.getResponseHeader('Sargasso-Flash-Message') || xhr.statusText;
                if (!flashMessage) flashMessage = 'Could not connect to server.';
                if (this.options.onError) this.options.onError(flashLevel, flashMessage);
                else alert('Error loading page: ' + flashMessage);
            }
        };
        xhr.send();
    }
    processScripts(scripts) {
        Array.from(scripts).forEach((script)=>{
            script.remove();
            const id = script.getAttribute('id');
            if (!document.getElementById(id)) // script.onload = function () {}
            document.getElementsByTagName('head')[0].appendChild(script);
        });
    }
    mergePage(html) {
        const ephemerals = document.querySelectorAll('[data-ephemeral]');
        Array.from(ephemerals).forEach((ephemeral)=>{
            ephemeral.remove();
        });
        const doc = html.split(/(<body[^>]*>|<\/body>)/ig);
        const fragment = $9cff8617a0651eef$var$makeFragment(doc[2]);
        const containers = document.querySelectorAll('[data-hijax]');
        for(let i = 0; i < containers.length; i++){
            const container = containers[i];
            const id = container.getAttribute('id');
            const replace = fragment.getElementById(id);
            // compare raw markup for changes
            if (container.hasAttribute('data-hijax-skip-unchanged')) {
                if (this.cachedMarkup[id] === replace.innerHTML) continue;
                this.cachedMarkup[id] = replace.innerHTML;
            }
            // use a key found in data-hijax-cache-key on a child element found by css selector defined in data-hijax-cache-key-selector
            const k = container.getAttribute('data-hijax-cache-key-selector');
            if (k) {
                if (replace.querySelector(k) && container.querySelector(k) && container.querySelector(k).getAttribute('data-hijax-cache-key') === replace.querySelector(k).getAttribute('data-hijax-cache-key')) continue;
            }
            this.processScripts(replace.querySelectorAll('script'));
            const frame = ()=>{
                container.parentNode.replaceChild(replace, container);
                if (this.options.onEnterPage) this.options.onEnterPage();
                this.hijaxLinks(replace);
            };
            this.queueFrame(frame);
        }
    }
}
$33c965f1983345d4$export$22044c20eef36040('HijaxLoader', $9cff8617a0651eef$export$8c08cf4432b2f5b3);
// shims for borked browsers
// =========================
const $9cff8617a0651eef$var$makeFragment = (html)=>{
    if (document.createRange && document.createRange().createContextualFragment) return document.createRange().createContextualFragment(html);
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    div.insertAdjacentHTML('afterBegin', html);
    fragment.appendChild(div);
    return fragment;
};



let $454bbecc12774327$export$7869d9d42a3fc8a6;
const $454bbecc12774327$export$80ed8a0252d89225 = (options = {})=>{
    if (options.scrollElement) $28e0c90eeff7adcf$export$c7320459fd5267c0.setOptions(options);
    if (options.breakpoints) {
        const breakpoints = new $7f1bab351fef7d1e$export$c38d2c1bff643203(document.body, options.breakpoints);
        breakpoints.start();
    }
    if (options.hijax) {
        const hijax = new $9cff8617a0651eef$export$8c08cf4432b2f5b3(document.body, options.hijax);
        hijax.start();
        $454bbecc12774327$export$7869d9d42a3fc8a6 = hijax.setPage.bind(hijax);
    } else $454bbecc12774327$export$7869d9d42a3fc8a6 = (url)=>{
        document.location.href = url;
    };
    const supervisor = new $c1f611f425340a0a$export$26b75d03ac531c24(document.body, options);
    supervisor.start(options);
};




const $2935212e7130b60d$export$eab97d15b1788b8d = {
    registerSargassoClass: $33c965f1983345d4$export$22044c20eef36040,
    bootSargasso: $454bbecc12774327$export$80ed8a0252d89225,
    elementTools: $fa90420f3b30b29c$export$6f53260fffa88f1c,
    validate: $2db055cf8ef21bb4$export$a22775fa5e2eebd9,
    setValidator: $2db055cf8ef21bb4$export$636d763ed7be9e97
};
const $2935212e7130b60d$export$bce7a36871692cab = {
    theDOMWatcher: $28e0c90eeff7adcf$export$77e1d49fdb880d27,
    theScrollWatcher: $28e0c90eeff7adcf$export$c7320459fd5267c0,
    theResizeWatcher: $28e0c90eeff7adcf$export$497098c8185e6e33,
    theOrientationWatcher: $28e0c90eeff7adcf$export$296acd8d6f329fa3,
    theWorkerWatcher: $28e0c90eeff7adcf$export$fa28dfcc49831a91,
    theObservableObjectWatcher: $28e0c90eeff7adcf$export$788f7857dc8c77f5
};


export {$2935212e7130b60d$export$eab97d15b1788b8d as utils, $2935212e7130b60d$export$bce7a36871692cab as services, $33c965f1983345d4$export$d7944a94c1afb262 as Sargasso, $454bbecc12774327$export$7869d9d42a3fc8a6 as loadPageHandler, $792b173a6e02c603$export$b176171395436676 as ObservableObject};
//# sourceMappingURL=sargasso.mjs.map
