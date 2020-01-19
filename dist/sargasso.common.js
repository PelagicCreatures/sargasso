var sargasso =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: Sargasso, registerSargassoClass, bootSargasso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootSargasso", function() { return bootSargasso; });
/* harmony import */ var _lib_Sargasso_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/Sargasso.js */ "./lib/Sargasso.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sargasso", function() { return _lib_Sargasso_js__WEBPACK_IMPORTED_MODULE_0__["Sargasso"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerSargassoClass", function() { return _lib_Sargasso_js__WEBPACK_IMPORTED_MODULE_0__["registerSargassoClass"]; });

/* harmony import */ var _lib_SargassoSupervisor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/SargassoSupervisor.js */ "./lib/SargassoSupervisor.js");
/* harmony import */ var _lib_Breakpoints_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/Breakpoints.js */ "./lib/Breakpoints.js");
/* harmony import */ var _lib_HijaxLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/HijaxLoader.js */ "./lib/HijaxLoader.js");
/* harmony import */ var _lib_LazyBackground_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/LazyBackground.js */ "./lib/LazyBackground.js");
/* harmony import */ var _lib_Services_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/Services.js */ "./lib/Services.js");
/*
	Sargasso

	Simple, Fast, Reactive, supervised Javascript controllers for html elements.

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes

	*/






var loadPage;

var bootSargasso = function bootSargasso() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  Object(_lib_Services_js__WEBPACK_IMPORTED_MODULE_5__["startServices"])(options);
  var supervisor = new _lib_SargassoSupervisor_js__WEBPACK_IMPORTED_MODULE_1__["SargassoSupervisor"](document.body, options);
  supervisor.start(options);

  if (options.breakpoints) {
    var breakpoints = new _lib_Breakpoints_js__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"](document.body, options.breakpoints);
    breakpoints.start();
  }

  if (options.hijax) {
    var hijax = new _lib_HijaxLoader_js__WEBPACK_IMPORTED_MODULE_3__["HijaxLoader"](document.body, options.hijax);
    hijax.start();
    loadPage = hijax.setPage.bind(hijax);
  } else {
    loadPage = function loadPage(url) {
      document.location.href = url;
    };
  }

  return loadPage;
};



/***/ }),

/***/ "./lib/Breakpoints.js":
/*!****************************!*\
  !*** ./lib/Breakpoints.js ***!
  \****************************/
/*! exports provided: Breakpoints, materialBreakpoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breakpoints", function() { return Breakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materialBreakpoints", function() { return materialBreakpoints; });
/* harmony import */ var _Sargasso_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sargasso.js */ "./lib/Sargasso.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./lib/utils.js");
/* harmony import */ var _dependencies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dependencies */ "./lib/dependencies.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
	Breakpoints

	Sargasso class that maintains css classes on the document body
	to be used in css rules for implementing visibility and
	responsive behavior

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes
**/



var materialBreakpoints = [{
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

var Breakpoints =
/*#__PURE__*/
function (_Sargasso) {
  _inherits(Breakpoints, _Sargasso);

  function Breakpoints(element) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Breakpoints);

    options.watchResize = true;
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Breakpoints).call(this, element, options));

    if (options.widths) {
      _this.options.widths = options.widths;
    } else {
      _this.options.widths = materialBreakpoints;
    }

    _this.scale = undefined;
    _this.disabled = false;
    _this.forceScale = undefined;
    _this.orientation = undefined;
    _this.widths = [];
    _this.classes = [];
    return _this;
  }

  _createClass(Breakpoints, [{
    key: "start",
    value: function start() {
      _get(_getPrototypeOf(Breakpoints.prototype), "start", this).call(this);

      var css = '.show-hide{display:none;}\n';
      this.widths.push(0);

      for (var i = 0; i < this.options.widths.length; i++) {
        if (this.options.widths[i].maxWidth) {
          this.widths.push(this.options.widths[i].maxWidth);
        }

        this.classes.push(this.options.widths[i].className);
        css += '.' + this.options.widths[i].className + ' .hidden-' + this.options.widths[i].className + '{display:none;}\n';
        css += '.not-' + this.options.widths[i].className + ' .hidden-not-' + this.options.widths[i].className + '{display:none;}\n';
        css += '.' + this.options.widths[i].className + ' .shown-' + this.options.widths[i].className + '{display:block;}\n';
        css += '.not-' + this.options.widths[i].className + ' .shown-not-' + this.options.widths[i].className + '{display:block;}\n';
      }

      var style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = css;
      document.getElementsByTagName('head')[0].appendChild(style);
      this.detectGeometry();
    }
  }, {
    key: "didResize",
    value: function didResize() {
      _get(_getPrototypeOf(Breakpoints.prototype), "didResize", this).call(this);

      this.detectGeometry();
    }
  }, {
    key: "disableResponsive",
    value: function disableResponsive(scale) {
      _utils_js__WEBPACK_IMPORTED_MODULE_1__["elementTools"].addClass(document.body, 'disable-responsive');
      this.disabled = true;
      this.forceScale = scale;
      this.detectGeometry();
    }
  }, {
    key: "enableResponsive",
    value: function enableResponsive() {
      _utils_js__WEBPACK_IMPORTED_MODULE_1__["elementTools"].removeClass(document.body, 'disable-responsive');
      this.disabled = false;
      this.forceScale = '';
      this.detectGeometry();
    }
  }, {
    key: "detectGeometry",
    value: function detectGeometry() {
      var _this2 = this;

      var newScale = this.classes[this.widths.length - 1];

      if (this.disabled) {
        newScale = this.forceScale;
      } else {
        var ww = window.innerWidth;
        var wh = window.innerHeight;

        if (wh > ww) {
          if (this.orientation !== 'portrait') {
            var frame = function frame() {
              _utils_js__WEBPACK_IMPORTED_MODULE_1__["elementTools"].removeClass(document.body, 'landscape');
              _utils_js__WEBPACK_IMPORTED_MODULE_1__["elementTools"].addClass(document.body, 'portrait');
            };

            this.queueFrame(frame);
            this.orientation = 'portrait';
          }
        } else {
          if (this.orientation !== 'landscape') {
            var _frame = function _frame() {
              _utils_js__WEBPACK_IMPORTED_MODULE_1__["elementTools"].removeClass(document.body, 'portrait');
              _utils_js__WEBPACK_IMPORTED_MODULE_1__["elementTools"].addClass(document.body, 'landscape');
            };

            this.queueFrame(_frame);
            this.orientation = 'landscape';
          }
        }

        for (var i = 0; i < this.widths.length - 1; i++) {
          if (ww >= this.widths[i] && ww < this.widths[i + 1]) {
            newScale = this.classes[i];
            break;
          }
        }
      }

      var changed = 0;

      if (newScale !== this.scale) {
        ++changed;

        var _frame2 = function _frame2() {
          for (var _i = 0; _i < _this2.classes.length; _i++) {
            if (_this2.classes[_i] !== newScale) {
              _utils_js__WEBPACK_IMPORTED_MODULE_1__["elementTools"].addClass(document.body, 'not-' + _this2.classes[_i]);
              _utils_js__WEBPACK_IMPORTED_MODULE_1__["elementTools"].removeClass(document.body, _this2.classes[_i]);
              _utils_js__WEBPACK_IMPORTED_MODULE_1__["elementTools"].removeClass(document.body, 'shown-' + _this2.classes[_i]);
              _utils_js__WEBPACK_IMPORTED_MODULE_1__["elementTools"].removeClass(document.body, 'hidden-' + _this2.classes[_i]);
            } else {
              _utils_js__WEBPACK_IMPORTED_MODULE_1__["elementTools"].removeClass(document.body, 'not-' + _this2.classes[_i]);
            }
          }

          _utils_js__WEBPACK_IMPORTED_MODULE_1__["elementTools"].addClass(document.body, newScale);
          _utils_js__WEBPACK_IMPORTED_MODULE_1__["elementTools"].addClass(document.body, 'shown-' + newScale);
          _utils_js__WEBPACK_IMPORTED_MODULE_1__["elementTools"].addClass(document.body, 'hidden-' + newScale);

          _this2.notifyAll('didBreakpoint', [newScale]);
        };

        this.queueFrame(_frame2);
      }

      this.scale = newScale;

      if (changed) {
        this.setHints();
      }
    }
  }, {
    key: "setHints",
    value: function setHints() {
      var classes = '';

      if (this.scale) {
        if (classes) {
          classes += ' ';
        }

        classes += this.scale;
      }

      if (classes !== this.getCookie('responsive')) {
        this.setCookie('responsive', classes);
      }
    }
  }, {
    key: "getCookie",
    value: function getCookie(key) {
      return _dependencies__WEBPACK_IMPORTED_MODULE_2__["Cookies"].get(key);
    }
  }, {
    key: "setCookie",
    value: function setCookie(key, value, expires) {
      var options = {
        path: '/',
        domain: this.options.cookieDomain || null,
        expires: expires
      };
      _dependencies__WEBPACK_IMPORTED_MODULE_2__["Cookies"].set(key, value, options);
    }
  }, {
    key: "deleteCookie",
    value: function deleteCookie(key) {
      this.setCookie(key, null);
    }
  }]);

  return Breakpoints;
}(_Sargasso_js__WEBPACK_IMPORTED_MODULE_0__["Sargasso"]);

;
Object(_Sargasso_js__WEBPACK_IMPORTED_MODULE_0__["registerSargassoClass"])('Breakpoints', Breakpoints);


/***/ }),

/***/ "./lib/HijaxLoader.js":
/*!****************************!*\
  !*** ./lib/HijaxLoader.js ***!
  \****************************/
/*! exports provided: HijaxLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HijaxLoader", function() { return HijaxLoader; });
/* harmony import */ var _Sargasso_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sargasso.js */ "./lib/Sargasso.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./lib/utils.js");
/* harmony import */ var _Services_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services.js */ "./lib/Services.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
	HijaxLoader

	Sargasso class that captures links on the page and loads pages
	using AJAX only replacing elements on the page that are marked
	with data-hijax attributes.

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes
**/




var HijaxLoader =
/*#__PURE__*/
function (_Sargasso) {
  _inherits(HijaxLoader, _Sargasso);

  function HijaxLoader(element) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, HijaxLoader);

    options.watchDOM = true;
    _this = _possibleConstructorReturn(this, _getPrototypeOf(HijaxLoader).call(this, element, options));
    _this.mortal = false;
    _this.excludeRegex = new RegExp('^(//|http|javascript|mailto|#)', 'i');
    _this.currentPage = location.pathname + location.search;
    return _this;
  }

  _createClass(HijaxLoader, [{
    key: "start",
    value: function start() {
      var _this2 = this;

      _get(_getPrototypeOf(HijaxLoader.prototype), "start", this).call(this);

      window.addEventListener('popstate', function (e) {
        _this2.watchPopState(e);
      }, false);
    }
  }, {
    key: "DOMChanged",
    value: function DOMChanged() {
      _get(_getPrototypeOf(HijaxLoader.prototype), "DOMChanged", this).call(this);

      this.hijaxLinks();
    }
  }, {
    key: "watchPopState",
    value: function watchPopState(e) {
      if (location.pathname + location.search !== this.currentPage) {
        this.loadPage(location.pathname + location.search);
      }
    }
  }, {
    key: "hijaxLinks",
    value: function hijaxLinks() {
      var _this3 = this;

      var links = this.element.getElementsByTagName('a');

      var _loop = function _loop(i) {
        var link = links[i];
        var href = link.getAttribute('href');

        if (href && !link.getAttribute('data-hijaxed') && !link.getAttribute('target') && !link.getAttribute('data-no-hijax') && !_this3.excludeRegex.exec(href)) {
          link.setAttribute('data-hijaxed', true);
          link.addEventListener('click', function (e) {
            e.preventDefault();

            _this3.setPage(href);
          }, false);
        }
      };

      for (var i = 0; i < links.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "setPage",
    value: function setPage(url) {
      history.pushState(null, null, url);
      this.watchPopState();
    }
  }, {
    key: "loadPage",
    value: function loadPage(url) {
      var _this4 = this;

      var frame = function frame() {
        _utils_js__WEBPACK_IMPORTED_MODULE_1__["elementTools"].addClass(document.body, 'hijax-loading');
      };

      this.queueFrame(frame);

      if (this.options.onExitPage) {
        this.options.onExitPage();
      }

      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);

      if (this.options.onLoading) {
        xhr.onreadystatechange = this.options.onLoading;
      }

      xhr.onload = function () {
        if (xhr.status === 301 || xhr.status === 302 || xhr.getResponseHeader('Sargasso-Location')) {
          var loc = xhr.getResponseHeader('Sargasso-Location');

          _this4.setPage(loc);
        } else if (xhr.status === 200) {
          _Services_js__WEBPACK_IMPORTED_MODULE_2__["theScrollWatcher"].scrollTop(0);

          _this4.mergePage(xhr.responseText);

          var oldPage = _this4.currentPage;

          var _frame = function _frame() {
            _this4.notifyAll('newPage', [oldPage, location.pathname + location.search]);

            _utils_js__WEBPACK_IMPORTED_MODULE_1__["elementTools"].removeClass(document.body, 'hijax-loading');
          };

          _this4.queueFrame(_frame);

          _this4.currentPage = location.pathname + location.search;
        } else {
          var flashLevel = xhr.getResponseHeader('Sargasso-Flash-Level') || 'danger';
          var flashMessage = xhr.getResponseHeader('Sargasso-Flash-Message') || xhr.statusText;

          if (!flashMessage) {
            flashMessage = 'Could not connect to server.';
          }

          if (_this4.options.onError) {
            _this4.options.onError(flashLevel, flashMessage);
          } else {
            alert('Error loading page: ' + flashMessage);
          }
        }
      };

      xhr.send();
    }
  }, {
    key: "mergePage",
    value: function mergePage(html) {
      var _this5 = this;

      var doc = html.split(/(<body[^>]*>|<\/body>)/ig);
      var fragment = makeFragment(doc[2]);
      var containers = document.querySelectorAll('[data-hijax]');

      var _loop2 = function _loop2(i) {
        var container = containers[i];
        var id = containers[i].getAttribute('id');
        var replace = fragment.getElementById(id);

        var frame = function frame() {
          container.parentNode.replaceChild(replace, container);

          if (_this5.options.onEnterPage) {
            _this5.options.onEnterPage();
          }
        };

        _this5.queueFrame(frame);
      };

      for (var i = 0; i < containers.length; i++) {
        _loop2(i);
      }
    }
  }]);

  return HijaxLoader;
}(_Sargasso_js__WEBPACK_IMPORTED_MODULE_0__["Sargasso"]);

Object(_Sargasso_js__WEBPACK_IMPORTED_MODULE_0__["registerSargassoClass"])('HijaxLoader', HijaxLoader); // shims for borked browsers
// =========================

var makeFragment = function makeFragment(html) {
  if (document.createRange && document.createRange().createContextualFragment) {
    return document.createRange().createContextualFragment(html);
  }

  var fragment = document.createDocumentFragment();
  var div = document.createElement('div');
  div.insertAdjacentHTML('afterBegin', html);
  fragment.appendChild(div);
  return fragment;
};



/***/ }),

/***/ "./lib/LazyBackground.js":
/*!*******************************!*\
  !*** ./lib/LazyBackground.js ***!
  \*******************************/
/*! exports provided: LazyBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyBackground", function() { return LazyBackground; });
/* harmony import */ var _Sargasso_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sargasso.js */ "./lib/Sargasso.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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


var LazyBackground =
/*#__PURE__*/
function (_Sargasso) {
  _inherits(LazyBackground, _Sargasso);

  function LazyBackground(element) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, LazyBackground);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LazyBackground).call(this, element, {
      watchViewport: true
    }));
    _this.triggered = false;
    return _this;
  }

  _createClass(LazyBackground, [{
    key: "enterViewport",
    value: function enterViewport() {
      if (!this.triggered) {
        this.triggered = true;
        var offload = "onmessage = async (e) => {\n\t\t\t  const response = await fetch(e.data.url)\n\t\t\t  const blob = await response.blob()\n\t\t\t  self.postMessage({ uid: e.data.uid, blob: blob })\n\t\t\t}";
        this.workerStart('loader', offload);
        var imgUrl = this.element.getAttribute('data-src'); // not fully qualified...

        if (!imgUrl.match(/^http/)) {
          imgUrl = new URL(imgUrl, location.href).href;
        } // hand the url to the worker for loading


        this.workerPostMessage('loader', {
          url: imgUrl
        });
      }
    } // we got a message back from a worker

  }, {
    key: "workerOnMessage",
    value: function workerOnMessage(id, e) {
      var _this2 = this;

      if (id === 'loader') {
        if (e.data.uid === this.uid) {
          this.blobURL = URL.createObjectURL(e.data.blob);

          var frame = function frame() {
            _this2.element.style.backgroundImage = 'url(' + _this2.blobURL + ')';

            _this2.sleep(); // We're done. That was easy.

          };

          this.queueFrame(frame);
        }
      }

      _get(_getPrototypeOf(LazyBackground.prototype), "workerOnMessage", this).call(this, id, e);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.blobURL) {
        URL.revokeObjectURL(this.blobURL);
      }

      _get(_getPrototypeOf(LazyBackground.prototype), "destroy", this).call(this);
    }
  }]);

  return LazyBackground;
}(_Sargasso_js__WEBPACK_IMPORTED_MODULE_0__["Sargasso"]);

Object(_Sargasso_js__WEBPACK_IMPORTED_MODULE_0__["registerSargassoClass"])('LazyBackground', LazyBackground);


/***/ }),

/***/ "./lib/LazyInstantiate.js":
/*!********************************!*\
  !*** ./lib/LazyInstantiate.js ***!
  \********************************/
/*! exports provided: LazyInstantiate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyInstantiate", function() { return LazyInstantiate; });
/* harmony import */ var _Sargasso_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sargasso.js */ "./lib/Sargasso.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./lib/utils.js");
/* harmony import */ var _Services_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services.js */ "./lib/Services.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
	LazyInstantiate

	Sargasso class watches the document for new content and instantiates
	Sargasso classes liested in element's data-lazy-sargasso-class only when
	the element scrolls into view

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes
**/




var LazyInstantiate =
/*#__PURE__*/
function (_Sargasso) {
  _inherits(LazyInstantiate, _Sargasso);

  function LazyInstantiate(element) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, LazyInstantiate);

    options.watchScroll = true;
    options.watchResize = true;
    _this = _possibleConstructorReturn(this, _getPrototypeOf(LazyInstantiate).call(this, element, options));
    _this.mortal = false;
    return _this;
  }

  _createClass(LazyInstantiate, [{
    key: "didResize",
    value: function didResize() {
      _get(_getPrototypeOf(LazyInstantiate.prototype), "didResize", this).call(this);

      this.lazyHandler();
    }
  }, {
    key: "didScroll",
    value: function didScroll() {
      _get(_getPrototypeOf(LazyInstantiate.prototype), "didScroll", this).call(this);

      this.lazyHandler();
    } // watch viewport and instantiate lazy-instantiate-responsive things when visible

  }, {
    key: "lazyHandler",
    value: function lazyHandler() {
      var els = document.querySelectorAll('[data-lazy-sargasso-class]');

      for (var i = 0; i < els.length; i++) {
        var element = els[i];

        if (_Services_js__WEBPACK_IMPORTED_MODULE_2__["theScrollWatcher"].inViewPort(element)) {
          var cls = element.getAttribute('data-lazy-sargasso-class').split(/\s*,\s*/);

          for (var j = 0; j < cls.length; j++) {
            var thing = new _Sargasso_js__WEBPACK_IMPORTED_MODULE_0__["registeredClasses"][cls[j]](els[i]);
            thing.start();
          }

          element.removeAttribute('data-lazy-sargasso-class');
        }
      }
    }
  }]);

  return LazyInstantiate;
}(_Sargasso_js__WEBPACK_IMPORTED_MODULE_0__["Sargasso"]);

Object(_Sargasso_js__WEBPACK_IMPORTED_MODULE_0__["registerSargassoClass"])('LazyInstantiate', LazyInstantiate);


/***/ }),

/***/ "./lib/Sargasso.js":
/*!*************************!*\
  !*** ./lib/Sargasso.js ***!
  \*************************/
/*! exports provided: Sargasso, registerSargassoClass, liveElements, registeredClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sargasso", function() { return Sargasso; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSargassoClass", function() { return registerSargassoClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveElements", function() { return liveElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registeredClasses", function() { return registeredClasses; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./lib/utils.js");
/* harmony import */ var _Services_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services.js */ "./lib/Services.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
	Sargasso

	Base class for responsive Sargasso element controllers. Subclass this to
	define specific behavior. If you mutate the DOM in your code you
	should use frames for best results. EG. LazyBackground

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes
**/


var unique = 0;
var liveElements = [];
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

var registeredClasses = {};

var registerSargassoClass = function registerSargassoClass(className, object) {
  registeredClasses[className] = object;
};

var tracing = false;

var trace = function trace(obj, message, blob) {
  console.log(obj.constructor.name, obj.uid, message, blob || null);
};

var eventNames = ['DOMChanged', 'didScroll', 'didResize', 'didBreakpoint', 'enterViewport', 'exitViewport', 'enterFullscreen', 'exitFullscreen', 'newPage', 'elementEvent'];

var Sargasso =
/*#__PURE__*/
function () {
  function Sargasso(element) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Sargasso);

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

  _createClass(Sargasso, [{
    key: "start",
    value: function start() {
      var _this = this;

      if (tracing) trace(this, 'start'); // subscribe to desired event services

      if (this.options.watchDOM) {
        _Services_js__WEBPACK_IMPORTED_MODULE_1__["theDOMWatcher"].subscribe(this);
      }

      if (this.options.watchScroll || this.options.watchViewport) {
        _Services_js__WEBPACK_IMPORTED_MODULE_1__["theScrollWatcher"].subscribe(this);
      }

      if (this.options.watchResize || this.options.watchViewport) {
        _Services_js__WEBPACK_IMPORTED_MODULE_1__["theResizeWatcher"].subscribe(this);
      }

      if (this.options.watchOrientation || this.options.watchViewport) {
        _Services_js__WEBPACK_IMPORTED_MODULE_1__["theOrientationWatcher"].subscribe(this);
      }
      /*
      	listen for 'sargasso' events
      	Call the method named in e.detail.sargassoEvent or call this.elementEvent
      */


      this.elementListener = function (e) {
        if (e.detail && e.detail.sargassoEvent && eventNames.indexOf(e.detail.sargassoEvent) !== -1) {
          _this[e.detail.sargassoEvent].apply(_this, e.detail.sargassoEventOptions || []);
        } else {
          _this.elementEvent(e);
        }
      };

      this.element.addEventListener('sargasso', this.elementListener);
    }
  }, {
    key: "notifyAll",
    value: function notifyAll(event, params) {
      if (eventNames.indexOf(event) === -1) {
        throw new Error('invalid event name ' + event);
      }

      for (var i = 0; i < liveElements.length; i++) {
        var peer = liveElements[i];

        if (peer !== this && peer[event]) {
          peer[event].apply(peer, params);
        }
      }
    }
  }, {
    key: "notifyElement",
    value: function notifyElement(element, event, params) {
      if (eventNames.indexOf(event) === -1) {
        throw new Error('invalid event name ' + event);
      }

      for (var i = 0; i < this.element.registeredResponsiveControllers.length; i++) {
        var peer = this.element.registeredResponsiveControllers[i];

        if (peer !== this && peer[event]) {
          peer[event].apply(peer, params);
        }
      }
    }
    /*
    	manage the animation frame queue for this element
    */

  }, {
    key: "flushQueue",
    value: function flushQueue() {
      if (this.pendingAnimationFrame) {
        cancelAnimationFrame(this.pendingAnimationFrame);
        this.pendingAnimationFrame = undefined;
      }

      this.frameQueue = [];
    }
  }, {
    key: "processQueue",
    value: function processQueue() {
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

  }, {
    key: "queueFrame",
    value: function queueFrame(frame) {
      var _this2 = this;

      this.frameQueue.push(frame.bind(this));

      if (!this.pendingAnimationFrame) {
        this.pendingAnimationFrame = requestAnimationFrame(function () {
          _this2.processQueue();
        });
      }
    } // override this if you have any listeners to clean up that you started in your subclass

  }, {
    key: "sleep",
    value: function sleep() {
      if (this.options.watchDOM) {
        _Services_js__WEBPACK_IMPORTED_MODULE_1__["theDOMWatcher"].unSubscribe(this);
      }

      if (this.options.watchScroll || this.options.watchViewport) {
        _Services_js__WEBPACK_IMPORTED_MODULE_1__["theScrollWatcher"].unSubscribe(this);
      }

      if (this.options.watchResize || this.options.watchViewport) {
        _Services_js__WEBPACK_IMPORTED_MODULE_1__["theResizeWatcher"].unSubscribe(this);
      }

      if (this.options.watchOrientation || this.options.watchViewport) {
        _Services_js__WEBPACK_IMPORTED_MODULE_1__["theOrientationWatcher"].unSubscribe(this);
      }

      this.element.removeEventListener('sargasso', this.elementListener);
    } // called when this.element is removed from the DOM
    // you normally don't need to call this

  }, {
    key: "destroy",
    value: function destroy() {
      if (tracing) trace(this, 'destroy');
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
    } // these handlers are called by the event services - prolly should
    // leave these alone

  }, {
    key: "watchDOM",
    value: function watchDOM() {
      this.DOMChanged();
    }
  }, {
    key: "watchScroll",
    value: function watchScroll() {
      if (this.options.watchViewport) {
        this.inViewport();
      }

      this.didScroll();
    }
  }, {
    key: "watchResize",
    value: function watchResize() {
      if (this.options.watchViewport) {
        this.inViewport();
      }

      this.didResize();
    }
  }, {
    key: "watchOrientation",
    value: function watchOrientation() {
      if (window.orientation && (window.orientation === 90 || window.orientation === 270)) {
        this.wantFullscreen(true);
      } else {
        this.wantFullscreen(false);
      }
    }
  }, {
    key: "inViewport",
    value: function inViewport() {
      if (_Services_js__WEBPACK_IMPORTED_MODULE_1__["theScrollWatcher"].inViewPort(this.element)) {
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
    }
  }, {
    key: "wantFullscreen",
    // you can call this from a subclass controller such as an 'enlarge to full screen' button
    // otherwise if watchOrientation is set it will do this when phone is in lanscape
    // it would be nice to acually use the experimental requestFullScreen thing but
    // you can't do that on rotate at the moment, only on click.
    value: function wantFullscreen(want) {
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

  }, {
    key: "DOMChanged",
    value: function DOMChanged() {} // scroll occured

  }, {
    key: "didScroll",
    value: function didScroll() {} // resize occured

  }, {
    key: "didResize",
    value: function didResize() {} // new breakpoint

  }, {
    key: "didBreakpoint",
    value: function didBreakpoint() {} // element entered the viewport

  }, {
    key: "enterViewport",
    value: function enterViewport() {} // element exited the viewport

  }, {
    key: "exitViewport",
    value: function exitViewport() {} // element entered fullscreen

  }, {
    key: "enterFullscreen",
    value: function enterFullscreen() {} // element exited fullscreen

  }, {
    key: "exitFullscreen",
    value: function exitFullscreen() {} // page changed

  }, {
    key: "newPage",
    value: function newPage(oldPath, newPath) {} // element received a 'sargasso' custom event from somewhere

  }, {
    key: "elementEvent",
    value: function elementEvent(e) {} // element utilities

  }, {
    key: "hasClass",
    value: function hasClass(cssClass) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_0__["elementTools"].hasClass(this.element, cssClass);
    }
  }, {
    key: "addClass",
    value: function addClass(cssClass) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["elementTools"].addClass(this.element, cssClass);
    }
  }, {
    key: "removeClass",
    value: function removeClass(cssClass) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["elementTools"].removeClass(this.element, cssClass);
    }
  }, {
    key: "setCSS",
    value: function setCSS(cssObject) {// elementTools.setCSS(this.element, cssObject)
    }
  }, {
    key: "isVisible",
    value: function isVisible() {
      return _utils_js__WEBPACK_IMPORTED_MODULE_0__["elementTools"].isVisible(this.element);
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

  }, {
    key: "workerStart",
    value: function workerStart(id, codeOrURL) {
      this.workers[id] = _Services_js__WEBPACK_IMPORTED_MODULE_1__["theWorkerWatcher"].registerWorker(id, codeOrURL);
      _Services_js__WEBPACK_IMPORTED_MODULE_1__["theWorkerWatcher"].subscribe(this, id);
      return this.workers[id];
    }
  }, {
    key: "workerPostMessage",
    value: function workerPostMessage(id, message) {
      if (!message.uid) {
        message.uid = this.uid;
      }

      if (this.workers[id]) {
        this.workers[id].postMessage(message);
      }
    }
  }, {
    key: "workerMessage",
    value: function workerMessage(id, e) {
      if (e.data.uid === this.uid) {
        this.workerOnMessage(id, e);
      }
    } // subclass should overide this to listen to workers

  }, {
    key: "workerOnMessage",
    value: function workerOnMessage(e) {} // stop a worker

  }, {
    key: "stopWorker",
    value: function stopWorker(id) {
      if (this.workers[id]) {
        _Services_js__WEBPACK_IMPORTED_MODULE_1__["theWorkerWatcher"].unSubscribe(this, id);
        delete this.workers[id];
      }
    } // cleanup all workers

  }, {
    key: "stopAllWorkers",
    value: function stopAllWorkers() {
      for (var worker in this.workers) {
        this.stopWorker(worker);
      }
    } // experimental

  }, {
    key: "nativeRequestFullScreen",
    value: function nativeRequestFullScreen() {
      if (document.fullscreenElement) {
        if (document.fullscreenElement === this.element) {
          return;
        }

        document.exitFullscreen();
      }

      this.element.requestFullscreen();
    }
  }, {
    key: "nativeExitFullScreen",
    value: function nativeExitFullScreen() {
      if (document.fullscreenElement && document.fullscreenElement === this.element) {
        document.exitFullscreen();
      }
    }
  }]);

  return Sargasso;
}();



/***/ }),

/***/ "./lib/SargassoSupervisor.js":
/*!***********************************!*\
  !*** ./lib/SargassoSupervisor.js ***!
  \***********************************/
/*! exports provided: SargassoSupervisor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SargassoSupervisor", function() { return SargassoSupervisor; });
/* harmony import */ var _Sargasso_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sargasso.js */ "./lib/Sargasso.js");
/* harmony import */ var _LazyInstantiate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LazyInstantiate.js */ "./lib/LazyInstantiate.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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



var SargassoSupervisor =
/*#__PURE__*/
function (_Sargasso) {
  _inherits(SargassoSupervisor, _Sargasso);

  function SargassoSupervisor(element) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, SargassoSupervisor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SargassoSupervisor).call(this, element, {
      watchDOM: true
    }));
    _this.mortal = false;
    _this.lazy = new _LazyInstantiate_js__WEBPACK_IMPORTED_MODULE_1__["LazyInstantiate"](element, options);
    return _this;
  }

  _createClass(SargassoSupervisor, [{
    key: "start",
    value: function start() {
      this.lazy.start();

      _get(_getPrototypeOf(SargassoSupervisor.prototype), "start", this).call(this);
    }
  }, {
    key: "instantiate",
    value: function instantiate(element) {
      var cls = element.getAttribute('data-sargasso-class').split(/\s*,\s*/);

      for (var i = 0; i < cls.length; i++) {
        try {
          var thing = new _Sargasso_js__WEBPACK_IMPORTED_MODULE_0__["registeredClasses"][cls[i]](element);
          thing.start();
        } catch (e) {
          console.log('error instantiating ' + cls[i], e, _Sargasso_js__WEBPACK_IMPORTED_MODULE_0__["registeredClasses"]);
        }
      }

      element.removeAttribute('data-sargasso-class');
    }
  }, {
    key: "newPage",
    value: function newPage() {
      this.doIt();
    }
  }, {
    key: "DOMChanged",
    value: function DOMChanged() {
      this.doIt();
    }
  }, {
    key: "doIt",
    value: function doIt() {
      var elements = document.querySelectorAll('[data-sargasso-class]');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var element = _step.value;
          this.instantiate(element);
        } // check for dangling live elements and kill them

      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var toCleanup = [];

      for (var i = 0; i < _Sargasso_js__WEBPACK_IMPORTED_MODULE_0__["liveElements"].length; i++) {
        if (_Sargasso_js__WEBPACK_IMPORTED_MODULE_0__["liveElements"][i].mortal && !document.body.contains(_Sargasso_js__WEBPACK_IMPORTED_MODULE_0__["liveElements"][i].element)) {
          toCleanup.push(_Sargasso_js__WEBPACK_IMPORTED_MODULE_0__["liveElements"][i]);
        }
      }

      for (var _i = 0; _i < toCleanup.length; _i++) {
        toCleanup[_i].destroy();
      }
    }
  }]);

  return SargassoSupervisor;
}(_Sargasso_js__WEBPACK_IMPORTED_MODULE_0__["Sargasso"]);

Object(_Sargasso_js__WEBPACK_IMPORTED_MODULE_0__["registerSargassoClass"])('SargassoSupervisor', SargassoSupervisor);


/***/ }),

/***/ "./lib/Services.js":
/*!*************************!*\
  !*** ./lib/Services.js ***!
  \*************************/
/*! exports provided: startServices, theDOMWatcher, theScrollWatcher, theResizeWatcher, theOrientationWatcher, theWorkerWatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startServices", function() { return startServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theDOMWatcher", function() { return theDOMWatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theScrollWatcher", function() { return theScrollWatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theResizeWatcher", function() { return theResizeWatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theOrientationWatcher", function() { return theOrientationWatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theWorkerWatcher", function() { return theWorkerWatcher; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./lib/utils.js");
/* harmony import */ var _dependencies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dependencies */ "./lib/dependencies.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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


var tracing = false;

var trace = function trace(obj, message, blob) {
  console.log(obj.constructor.name, obj.uid, message, blob || null);
};

var ObserverSubscriptionManager =
/*#__PURE__*/
function () {
  function ObserverSubscriptionManager(options) {
    _classCallCheck(this, ObserverSubscriptionManager);

    this.options = options;
    this.observers = [];
    this.pendingAnimationFrame = undefined;
    this.frameQueue = [];
  }

  _createClass(ObserverSubscriptionManager, [{
    key: "subscribe",
    value: function subscribe(observer) {
      if (!this.observers.length) {
        this.wakeup();
      }

      this.observers.push(observer);
    }
  }, {
    key: "unSubscribe",
    value: function unSubscribe(observer) {
      if (tracing) trace(this, 'unSubscribe', observer);

      if (this.observers.indexOf(observer) !== -1) {
        this.observers.splice(this.observers.indexOf(observer), 1);
      }

      if (!this.observers.length) {
        this.sleep();
      }
    }
  }, {
    key: "sleep",
    value: function sleep() {
      if (tracing) trace(this, 'sleep');
    }
  }, {
    key: "wakeup",
    value: function wakeup() {
      if (tracing) trace(this, 'wakeup');
    }
  }, {
    key: "notifyObservers",
    value: function notifyObservers(event, params) {
      for (var i = 0; i < this.observers.length; i++) {
        if (this.observers[i][event]) {
          this.observers[i][event].apply(this.observers[i], params || []);
        }
      }
    }
  }, {
    key: "flushQueue",
    value: function flushQueue() {
      if (this.pendingAnimationFrame) {
        cancelAnimationFrame(this.pendingAnimationFrame);
        this.pendingAnimationFrame = undefined;
      }

      this.frameQueue = [];
    }
  }, {
    key: "queueFrame",
    value: function queueFrame(frame) {
      var _this = this;

      this.frameQueue.push(frame.bind(this));

      if (!this.pendingAnimationFrame) {
        this.pendingAnimationFrame = requestAnimationFrame(function () {
          _this.processQueue();
        });
      }
    }
  }, {
    key: "processQueue",
    value: function processQueue() {
      this.pendingAnimationFrame = undefined;
      var toProcess = this.frameQueue.slice(0);
      this.frameQueue = [];

      for (var i = 0; i < toProcess.length; i++) {
        toProcess[i]();
      }
    }
  }]);

  return ObserverSubscriptionManager;
}();

var DOMWatcher =
/*#__PURE__*/
function (_ObserverSubscription) {
  _inherits(DOMWatcher, _ObserverSubscription);

  function DOMWatcher(options) {
    var _this2;

    _classCallCheck(this, DOMWatcher);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(DOMWatcher).call(this, options)); // debounce - just need to know if a change occured, not every change

    _this2.mutationHandler = Object(_dependencies__WEBPACK_IMPORTED_MODULE_1__["debounce"])(function (mutations, observer) {
      _this2.observeDOM(mutations, observer);
    }, 100, {
      maxWait: 250
    });
    _this2.mutationObserver = new MutationObserver(_this2.mutationHandler, false);
    return _this2;
  }

  _createClass(DOMWatcher, [{
    key: "subscribe",
    value: function subscribe(observer) {
      _get(_getPrototypeOf(DOMWatcher.prototype), "subscribe", this).call(this, observer);

      observer.watchDOM();
    }
  }, {
    key: "wakeup",
    value: function wakeup() {
      _get(_getPrototypeOf(DOMWatcher.prototype), "wakeup", this).call(this);

      this.mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  }, {
    key: "sleep",
    value: function sleep() {
      _get(_getPrototypeOf(DOMWatcher.prototype), "sleep", this).call(this);

      this.mutationObserver.disconnect();
    }
  }, {
    key: "observeDOM",
    value: function observeDOM() {
      this.notifyObservers('watchDOM');
    }
  }]);

  return DOMWatcher;
}(ObserverSubscriptionManager);

var ScrollWatcher =
/*#__PURE__*/
function (_ObserverSubscription2) {
  _inherits(ScrollWatcher, _ObserverSubscription2);

  function ScrollWatcher(options) {
    var _this3;

    _classCallCheck(this, ScrollWatcher);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(ScrollWatcher).call(this, options));
    _this3.scrollElement = _this3.options.scrollElement || window;
    _this3.lastscroll = _this3.scrollTop();
    _this3.scrolling = false; // use 'scroll' event to start scroll loop unless it's already looping

    _this3.trigger = function () {
      if (!_this3.scrolling) {
        _this3.scrollLoop();
      }
    };

    _this3.scrollLoop = function () {
      if (_this3.lastscroll !== _this3.scrollTop()) {
        // are we still scrolling?
        _this3.scrolling = true;
        _this3.lastscroll = _this3.scrollTop();

        _this3.watchScroll(); // tell our observers


        var frame = function frame() {
          _this3.scrollLoop();
        };

        _this3.queueFrame(frame);
      } else {
        _this3.scrolling = false; // exit the scroll loop and wait for next 'scroll' event
      }
    };

    return _this3;
  }

  _createClass(ScrollWatcher, [{
    key: "subscribe",
    value: function subscribe(observer) {
      _get(_getPrototypeOf(ScrollWatcher.prototype), "subscribe", this).call(this, observer);

      observer.watchScroll();
    }
  }, {
    key: "wakeup",
    value: function wakeup() {
      _get(_getPrototypeOf(ScrollWatcher.prototype), "wakeup", this).call(this);

      this.scrollElement.addEventListener('scroll', this.trigger, false);
    }
  }, {
    key: "sleep",
    value: function sleep() {
      _get(_getPrototypeOf(ScrollWatcher.prototype), "sleep", this).call(this);

      this.scrollElement.removeEventListener('scroll', this.trigger);
    }
  }, {
    key: "inViewPort",
    value: function inViewPort(element) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_0__["elementTools"].inViewPort(element, this.scrollElement);
    }
  }, {
    key: "watchScroll",
    value: function watchScroll() {
      this.notifyObservers('watchScroll');
    }
  }, {
    key: "scrollTop",
    value: function scrollTop(newTop) {
      if (this.scrollElement === window) {
        if (newTop !== undefined) {
          window.scrollTo(0, newTop);
        } else {
          return window.pageYOffset;
        }
      } else {
        if (newTop !== undefined) {
          this.scrollElement.scrollTop = newTop;
        } else {
          return this.scrollElement.scrollTop;
        }
      }
    }
  }]);

  return ScrollWatcher;
}(ObserverSubscriptionManager);

var ResizeWatcher =
/*#__PURE__*/
function (_ObserverSubscription3) {
  _inherits(ResizeWatcher, _ObserverSubscription3);

  function ResizeWatcher(options) {
    var _this4;

    _classCallCheck(this, ResizeWatcher);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(ResizeWatcher).call(this, options));
    _this4.debounce = Object(_dependencies__WEBPACK_IMPORTED_MODULE_1__["debounce"])(function () {
      _this4.watchResize();
    }, 250);
    return _this4;
  }

  _createClass(ResizeWatcher, [{
    key: "subscribe",
    value: function subscribe(observer) {
      _get(_getPrototypeOf(ResizeWatcher.prototype), "subscribe", this).call(this, observer);

      observer.watchResize();
    }
  }, {
    key: "wakeup",
    value: function wakeup() {
      _get(_getPrototypeOf(ResizeWatcher.prototype), "wakeup", this).call(this);

      window.addEventListener('resize', this.debounce, false);
    }
  }, {
    key: "sleep",
    value: function sleep() {
      _get(_getPrototypeOf(ResizeWatcher.prototype), "sleep", this).call(this);

      window.removeEventListener('resize', this.debounce);
    }
  }, {
    key: "watchResize",
    value: function watchResize() {
      this.notifyObservers('watchResize');
    }
  }]);

  return ResizeWatcher;
}(ObserverSubscriptionManager);

var OrientationWatcher =
/*#__PURE__*/
function (_ObserverSubscription4) {
  _inherits(OrientationWatcher, _ObserverSubscription4);

  function OrientationWatcher(options) {
    var _this5;

    _classCallCheck(this, OrientationWatcher);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(OrientationWatcher).call(this, options));

    if ('onorientationchange' in window) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["elementTools"].addClass(document.body, 'have-orientation');
    } else {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["elementTools"].addClass(document.body, 'no-orientation');
    }

    _this5.debounce = Object(_dependencies__WEBPACK_IMPORTED_MODULE_1__["debounce"])(function () {
      _this5.watchOrientation();
    }, 250);
    return _this5;
  }

  _createClass(OrientationWatcher, [{
    key: "subscribe",
    value: function subscribe(observer) {
      _get(_getPrototypeOf(OrientationWatcher.prototype), "subscribe", this).call(this, observer);

      observer.watchOrientation();
    }
  }, {
    key: "wakeup",
    value: function wakeup() {
      _get(_getPrototypeOf(OrientationWatcher.prototype), "wakeup", this).call(this);

      if ('onorientationchange' in window) {
        window.addEventListener('orientationchange', this.debounce, false);
      }
    }
  }, {
    key: "sleep",
    value: function sleep() {
      _get(_getPrototypeOf(OrientationWatcher.prototype), "sleep", this).call(this);

      if ('onorientationchange' in window) {
        window.removeEventListener('orientationchange', this.debounce);
      }
    }
  }, {
    key: "watchOrientation",
    value: function watchOrientation() {
      this.notifyObservers('watchOrientation');
    }
  }]);

  return OrientationWatcher;
}(ObserverSubscriptionManager); // keep track of who is using web workers and
// cleanup dangling worker when no subscribers remain


var WorkerWatcher =
/*#__PURE__*/
function (_ObserverSubscription5) {
  _inherits(WorkerWatcher, _ObserverSubscription5);

  function WorkerWatcher(options) {
    var _this6;

    _classCallCheck(this, WorkerWatcher);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(WorkerWatcher).call(this, options));
    _this6.workers = {};
    return _this6;
  }

  _createClass(WorkerWatcher, [{
    key: "registerWorker",
    value: function registerWorker(id, codeOrURL) {
      var _this7 = this;

      if (!this.workers[id]) {
        // create a worker for the id if worker id is unknown
        var blobURL = codeOrURL;
        var revoke = false;

        if (!codeOrURL.match(/^(http|\/)/i)) {
          var blob = new Blob([codeOrURL], {
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

        this.workers[id].worker.onmessage = function (e) {
          _this7.workerMessage(id, e);
        };
      }

      return this.workers[id].worker;
    }
  }, {
    key: "subscribe",
    value: function subscribe(observer, id) {
      if (!this.workers[id]) {
        throw new Error('worker ' + id + ' does not exist');
      }

      var workerObservers = this.workers[id].observers;
      workerObservers.push(observer);

      _get(_getPrototypeOf(WorkerWatcher.prototype), "subscribe", this).call(this, observer);
    }
  }, {
    key: "unSubscribe",
    value: function unSubscribe(observer, id) {
      if (!this.workers[id]) {
        throw new Error('worker ' + id + ' does not exist');
      }

      var workerObservers = this.workers[id].observers;

      if (workerObservers.indexOf(observer) !== -1) {
        workerObservers.splice(workerObservers.indexOf(observer), 1);
      }

      if (!workerObservers.length) {
        this.workers[id].worker.terminate();
        delete this.workers[id];
      }

      _get(_getPrototypeOf(WorkerWatcher.prototype), "unSubscribe", this).call(this, observer);
    }
  }, {
    key: "workerMessage",
    value: function workerMessage(id, e) {
      this.notifyObservers('workerMessage', [id, e]);
    }
  }, {
    key: "wakeup",
    value: function wakeup() {
      _get(_getPrototypeOf(WorkerWatcher.prototype), "wakeup", this).call(this);
    }
  }, {
    key: "sleep",
    value: function sleep() {
      _get(_getPrototypeOf(WorkerWatcher.prototype), "sleep", this).call(this);
    }
  }]);

  return WorkerWatcher;
}(ObserverSubscriptionManager); // build subscription services


var theDOMWatcher, theScrollWatcher, theResizeWatcher, theOrientationWatcher, theWorkerWatcher;

var startServices = function startServices(options) {
  theDOMWatcher = new DOMWatcher(options);
  theScrollWatcher = new ScrollWatcher(options);
  theResizeWatcher = new ResizeWatcher(options);
  theOrientationWatcher = new OrientationWatcher(options);
  theWorkerWatcher = new WorkerWatcher(options);
};



/***/ }),

/***/ "./lib/dependencies.js":
/*!*****************************!*\
  !*** ./lib/dependencies.js ***!
  \*****************************/
/*! exports provided: camelCase, debounce, Cookies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cookies", function() { return Cookies; });
/* harmony import */ var _lodash_modularize_camelCase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lodash-modularize/camelCase.js */ "./lib/lodash-modularize/camelCase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "camelCase", function() { return _lodash_modularize_camelCase_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _lodash_modularize_debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lodash-modularize/debounce.js */ "./lib/lodash-modularize/debounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _lodash_modularize_debounce_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });


 // does not play well with rollup yet. TODO: revisit once js-cookie ES out of beta

var Cookies
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;

(function (factory) {
  Cookies = factory();
})(function () {
  function extend() {
    var i = 0;
    var result = {};

    for (; i < arguments.length; i++) {
      var attributes = arguments[i];

      for (var key in attributes) {
        result[key] = attributes[key];
      }
    }

    return result;
  }

  function decode(s) {
    return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
  }

  function init(converter) {
    function api() {}

    function set(key, value, attributes) {
      if (typeof document === 'undefined') {
        return;
      }

      attributes = extend({
        path: '/'
      }, api.defaults, attributes);

      if (typeof attributes.expires === 'number') {
        attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
      } // We're using "expires" because "max-age" is not supported by IE


      attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

      try {
        var result = JSON.stringify(value);

        if (/^[\{\[]/.test(result)) {
          value = result;
        }
      } catch (e) {}

      value = converter.write ? converter.write(value, key) : encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
      key = encodeURIComponent(String(key)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
      var stringifiedAttributes = '';

      for (var attributeName in attributes) {
        if (!attributes[attributeName]) {
          continue;
        }

        stringifiedAttributes += '; ' + attributeName;

        if (attributes[attributeName] === true) {
          continue;
        } // Considers RFC 6265 section 5.2:
        // ...
        // 3.  If the remaining unparsed-attributes contains a %x3B (";")
        //     character:
        // Consume the characters of the unparsed-attributes up to,
        // not including, the first %x3B (";") character.
        // ...


        stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
      }

      return document.cookie = key + '=' + value + stringifiedAttributes;
    }

    function get(key, json) {
      if (typeof document === 'undefined') {
        return;
      }

      var jar = {}; // To prevent the for loop in the first place assign an empty array
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
          cookie = (converter.read || converter)(cookie, name) || decode(cookie);

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
      return get(key, false
      /* read as raw */
      );
    };

    api.getJSON = function (key) {
      return get(key, true
      /* read as json */
      );
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
});



/***/ }),

/***/ "./lib/lodash-modularize/_Symbol.js":
/*!******************************************!*\
  !*** ./lib/lodash-modularize/_Symbol.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./lib/lodash-modularize/_root.js");

/** Built-in value references. */

var _Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;
/* harmony default export */ __webpack_exports__["default"] = (_Symbol);

/***/ }),

/***/ "./lib/lodash-modularize/_arrayMap.js":
/*!********************************************!*\
  !*** ./lib/lodash-modularize/_arrayMap.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (arrayMap);

/***/ }),

/***/ "./lib/lodash-modularize/_arrayReduce.js":
/*!***********************************************!*\
  !*** ./lib/lodash-modularize/_arrayReduce.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (arrayReduce);

/***/ }),

/***/ "./lib/lodash-modularize/_asciiToArray.js":
/*!************************************************!*\
  !*** ./lib/lodash-modularize/_asciiToArray.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (asciiToArray);

/***/ }),

/***/ "./lib/lodash-modularize/_asciiWords.js":
/*!**********************************************!*\
  !*** ./lib/lodash-modularize/_asciiWords.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (asciiWords);

/***/ }),

/***/ "./lib/lodash-modularize/_baseGetTag.js":
/*!**********************************************!*\
  !*** ./lib/lodash-modularize/_baseGetTag.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./lib/lodash-modularize/_Symbol.js");
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getRawTag.js */ "./lib/lodash-modularize/_getRawTag.js");
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_objectToString.js */ "./lib/lodash-modularize/_objectToString.js");



/** `Object#toString` result references. */

var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;
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

  return symToStringTag && symToStringTag in Object(value) ? Object(_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) : Object(_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (baseGetTag);

/***/ }),

/***/ "./lib/lodash-modularize/_basePropertyOf.js":
/*!**************************************************!*\
  !*** ./lib/lodash-modularize/_basePropertyOf.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function (key) {
    return object == null ? undefined : object[key];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (basePropertyOf);

/***/ }),

/***/ "./lib/lodash-modularize/_baseSlice.js":
/*!*********************************************!*\
  !*** ./lib/lodash-modularize/_baseSlice.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    start = -start > length ? 0 : length + start;
  }

  end = end > length ? length : end;

  if (end < 0) {
    end += length;
  }

  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);

  while (++index < length) {
    result[index] = array[index + start];
  }

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseSlice);

/***/ }),

/***/ "./lib/lodash-modularize/_baseToString.js":
/*!************************************************!*\
  !*** ./lib/lodash-modularize/_baseToString.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./lib/lodash-modularize/_Symbol.js");
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayMap.js */ "./lib/lodash-modularize/_arrayMap.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray.js */ "./lib/lodash-modularize/isArray.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isSymbol.js */ "./lib/lodash-modularize/isSymbol.js");




/** Used as references for various `Number` constants. */

var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
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

  if (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return Object(_arrayMap_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, baseToString) + '';
  }

  if (Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseToString);

/***/ }),

/***/ "./lib/lodash-modularize/_castSlice.js":
/*!*********************************************!*\
  !*** ./lib/lodash-modularize/_castSlice.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseSlice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseSlice.js */ "./lib/lodash-modularize/_baseSlice.js");

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
  return !start && end >= length ? array : Object(_baseSlice_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, start, end);
}

/* harmony default export */ __webpack_exports__["default"] = (castSlice);

/***/ }),

/***/ "./lib/lodash-modularize/_createCaseFirst.js":
/*!***************************************************!*\
  !*** ./lib/lodash-modularize/_createCaseFirst.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _castSlice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_castSlice.js */ "./lib/lodash-modularize/_castSlice.js");
/* harmony import */ var _hasUnicode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hasUnicode.js */ "./lib/lodash-modularize/_hasUnicode.js");
/* harmony import */ var _stringToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_stringToArray.js */ "./lib/lodash-modularize/_stringToArray.js");
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toString.js */ "./lib/lodash-modularize/toString.js");




/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */

function createCaseFirst(methodName) {
  return function (string) {
    string = Object(_toString_js__WEBPACK_IMPORTED_MODULE_3__["default"])(string);
    var strSymbols = Object(_hasUnicode_js__WEBPACK_IMPORTED_MODULE_1__["default"])(string) ? Object(_stringToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(string) : undefined;
    var chr = strSymbols ? strSymbols[0] : string.charAt(0);
    var trailing = strSymbols ? Object(_castSlice_js__WEBPACK_IMPORTED_MODULE_0__["default"])(strSymbols, 1).join('') : string.slice(1);
    return chr[methodName]() + trailing;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createCaseFirst);

/***/ }),

/***/ "./lib/lodash-modularize/_createCompounder.js":
/*!****************************************************!*\
  !*** ./lib/lodash-modularize/_createCompounder.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayReduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayReduce.js */ "./lib/lodash-modularize/_arrayReduce.js");
/* harmony import */ var _deburr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deburr.js */ "./lib/lodash-modularize/deburr.js");
/* harmony import */ var _words_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./words.js */ "./lib/lodash-modularize/words.js");



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
  return function (string) {
    return Object(_arrayReduce_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_words_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_deburr_js__WEBPACK_IMPORTED_MODULE_1__["default"])(string).replace(reApos, '')), callback, '');
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createCompounder);

/***/ }),

/***/ "./lib/lodash-modularize/_deburrLetter.js":
/*!************************************************!*\
  !*** ./lib/lodash-modularize/_deburrLetter.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basePropertyOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_basePropertyOf.js */ "./lib/lodash-modularize/_basePropertyOf.js");

/** Used to map Latin Unicode letters to basic Latin letters. */

var deburredLetters = {
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
  "\u0100": 'A',
  "\u0102": 'A',
  "\u0104": 'A',
  "\u0101": 'a',
  "\u0103": 'a',
  "\u0105": 'a',
  "\u0106": 'C',
  "\u0108": 'C',
  "\u010A": 'C',
  "\u010C": 'C',
  "\u0107": 'c',
  "\u0109": 'c',
  "\u010B": 'c',
  "\u010D": 'c',
  "\u010E": 'D',
  "\u0110": 'D',
  "\u010F": 'd',
  "\u0111": 'd',
  "\u0112": 'E',
  "\u0114": 'E',
  "\u0116": 'E',
  "\u0118": 'E',
  "\u011A": 'E',
  "\u0113": 'e',
  "\u0115": 'e',
  "\u0117": 'e',
  "\u0119": 'e',
  "\u011B": 'e',
  "\u011C": 'G',
  "\u011E": 'G',
  "\u0120": 'G',
  "\u0122": 'G',
  "\u011D": 'g',
  "\u011F": 'g',
  "\u0121": 'g',
  "\u0123": 'g',
  "\u0124": 'H',
  "\u0126": 'H',
  "\u0125": 'h',
  "\u0127": 'h',
  "\u0128": 'I',
  "\u012A": 'I',
  "\u012C": 'I',
  "\u012E": 'I',
  "\u0130": 'I',
  "\u0129": 'i',
  "\u012B": 'i',
  "\u012D": 'i',
  "\u012F": 'i',
  "\u0131": 'i',
  "\u0134": 'J',
  "\u0135": 'j',
  "\u0136": 'K',
  "\u0137": 'k',
  "\u0138": 'k',
  "\u0139": 'L',
  "\u013B": 'L',
  "\u013D": 'L',
  "\u013F": 'L',
  "\u0141": 'L',
  "\u013A": 'l',
  "\u013C": 'l',
  "\u013E": 'l',
  "\u0140": 'l',
  "\u0142": 'l',
  "\u0143": 'N',
  "\u0145": 'N',
  "\u0147": 'N',
  "\u014A": 'N',
  "\u0144": 'n',
  "\u0146": 'n',
  "\u0148": 'n',
  "\u014B": 'n',
  "\u014C": 'O',
  "\u014E": 'O',
  "\u0150": 'O',
  "\u014D": 'o',
  "\u014F": 'o',
  "\u0151": 'o',
  "\u0154": 'R',
  "\u0156": 'R',
  "\u0158": 'R',
  "\u0155": 'r',
  "\u0157": 'r',
  "\u0159": 'r',
  "\u015A": 'S',
  "\u015C": 'S',
  "\u015E": 'S',
  "\u0160": 'S',
  "\u015B": 's',
  "\u015D": 's',
  "\u015F": 's',
  "\u0161": 's',
  "\u0162": 'T',
  "\u0164": 'T',
  "\u0166": 'T',
  "\u0163": 't',
  "\u0165": 't',
  "\u0167": 't',
  "\u0168": 'U',
  "\u016A": 'U',
  "\u016C": 'U',
  "\u016E": 'U',
  "\u0170": 'U',
  "\u0172": 'U',
  "\u0169": 'u',
  "\u016B": 'u',
  "\u016D": 'u',
  "\u016F": 'u',
  "\u0171": 'u',
  "\u0173": 'u',
  "\u0174": 'W',
  "\u0175": 'w',
  "\u0176": 'Y',
  "\u0177": 'y',
  "\u0178": 'Y',
  "\u0179": 'Z',
  "\u017B": 'Z',
  "\u017D": 'Z',
  "\u017A": 'z',
  "\u017C": 'z',
  "\u017E": 'z',
  "\u0132": 'IJ',
  "\u0133": 'ij',
  "\u0152": 'Oe',
  "\u0153": 'oe',
  "\u0149": "'n",
  "\u017F": 's'
};
/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */

var deburrLetter = Object(_basePropertyOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(deburredLetters);
/* harmony default export */ __webpack_exports__["default"] = (deburrLetter);

/***/ }),

/***/ "./lib/lodash-modularize/_freeGlobal.js":
/*!**********************************************!*\
  !*** ./lib/lodash-modularize/_freeGlobal.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global && global.Object === Object && global;
/* harmony default export */ __webpack_exports__["default"] = (freeGlobal);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./lib/lodash-modularize/_getRawTag.js":
/*!*********************************************!*\
  !*** ./lib/lodash-modularize/_getRawTag.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./lib/lodash-modularize/_Symbol.js");

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

var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;
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

/* harmony default export */ __webpack_exports__["default"] = (getRawTag);

/***/ }),

/***/ "./lib/lodash-modularize/_hasUnicode.js":
/*!**********************************************!*\
  !*** ./lib/lodash-modularize/_hasUnicode.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used to compose unicode character classes. */
var rsAstralRange = "\\ud800-\\udfff",
    rsComboMarksRange = "\\u0300-\\u036f",
    reComboHalfMarksRange = "\\ufe20-\\ufe2f",
    rsComboSymbolsRange = "\\u20d0-\\u20ff",
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = "\\ufe0e\\ufe0f";
/** Used to compose unicode capture groups. */

var rsZWJ = "\\u200d";
/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */

var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');
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

/* harmony default export */ __webpack_exports__["default"] = (hasUnicode);

/***/ }),

/***/ "./lib/lodash-modularize/_hasUnicodeWord.js":
/*!**************************************************!*\
  !*** ./lib/lodash-modularize/_hasUnicodeWord.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
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

/* harmony default export */ __webpack_exports__["default"] = (hasUnicodeWord);

/***/ }),

/***/ "./lib/lodash-modularize/_objectToString.js":
/*!**************************************************!*\
  !*** ./lib/lodash-modularize/_objectToString.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["default"] = (objectToString);

/***/ }),

/***/ "./lib/lodash-modularize/_root.js":
/*!****************************************!*\
  !*** ./lib/lodash-modularize/_root.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "./lib/lodash-modularize/_freeGlobal.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();
/* harmony default export */ __webpack_exports__["default"] = (root);

/***/ }),

/***/ "./lib/lodash-modularize/_stringToArray.js":
/*!*************************************************!*\
  !*** ./lib/lodash-modularize/_stringToArray.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asciiToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_asciiToArray.js */ "./lib/lodash-modularize/_asciiToArray.js");
/* harmony import */ var _hasUnicode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hasUnicode.js */ "./lib/lodash-modularize/_hasUnicode.js");
/* harmony import */ var _unicodeToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_unicodeToArray.js */ "./lib/lodash-modularize/_unicodeToArray.js");



/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */

function stringToArray(string) {
  return Object(_hasUnicode_js__WEBPACK_IMPORTED_MODULE_1__["default"])(string) ? Object(_unicodeToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(string) : Object(_asciiToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(string);
}

/* harmony default export */ __webpack_exports__["default"] = (stringToArray);

/***/ }),

/***/ "./lib/lodash-modularize/_unicodeToArray.js":
/*!**************************************************!*\
  !*** ./lib/lodash-modularize/_unicodeToArray.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used to compose unicode character classes. */
var rsAstralRange = "\\ud800-\\udfff",
    rsComboMarksRange = "\\u0300-\\u036f",
    reComboHalfMarksRange = "\\ufe20-\\ufe2f",
    rsComboSymbolsRange = "\\u20d0-\\u20ff",
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = "\\ufe0e\\ufe0f";
/** Used to compose unicode capture groups. */

var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = "\\ud83c[\\udffb-\\udfff]",
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    rsZWJ = "\\u200d";
/** Used to compose unicode regexes. */

var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
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

/* harmony default export */ __webpack_exports__["default"] = (unicodeToArray);

/***/ }),

/***/ "./lib/lodash-modularize/_unicodeWords.js":
/*!************************************************!*\
  !*** ./lib/lodash-modularize/_unicodeWords.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used to compose unicode character classes. */
var rsAstralRange = "\\ud800-\\udfff",
    rsComboMarksRange = "\\u0300-\\u036f",
    reComboHalfMarksRange = "\\ufe20-\\ufe2f",
    rsComboSymbolsRange = "\\u20d0-\\u20ff",
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = "\\u2700-\\u27bf",
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = "\\u2000-\\u206f",
    rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = "\\ufe0e\\ufe0f",
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
/** Used to compose unicode capture groups. */

var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = "\\ud83c[\\udffb-\\udfff]",
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = "\\u200d";
/** Used to compose unicode regexes. */

var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;
/** Used to match complex or compound words. */

var reUnicodeWord = RegExp([rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')', rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')', rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower, rsUpper + '+' + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji].join('|'), 'g');
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

/* harmony default export */ __webpack_exports__["default"] = (unicodeWords);

/***/ }),

/***/ "./lib/lodash-modularize/camelCase.js":
/*!********************************************!*\
  !*** ./lib/lodash-modularize/camelCase.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _capitalize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalize.js */ "./lib/lodash-modularize/capitalize.js");
/* harmony import */ var _createCompounder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_createCompounder.js */ "./lib/lodash-modularize/_createCompounder.js");
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" include="camelCase,debounce"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */


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

var camelCase = Object(_createCompounder_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (result, word, index) {
  word = word.toLowerCase();
  return result + (index ? Object(_capitalize_js__WEBPACK_IMPORTED_MODULE_0__["default"])(word) : word);
});
/* harmony default export */ __webpack_exports__["default"] = (camelCase);

/***/ }),

/***/ "./lib/lodash-modularize/capitalize.js":
/*!*********************************************!*\
  !*** ./lib/lodash-modularize/capitalize.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toString.js */ "./lib/lodash-modularize/toString.js");
/* harmony import */ var _upperFirst_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upperFirst.js */ "./lib/lodash-modularize/upperFirst.js");


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
  return Object(_upperFirst_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_toString_js__WEBPACK_IMPORTED_MODULE_0__["default"])(string).toLowerCase());
}

/* harmony default export */ __webpack_exports__["default"] = (capitalize);

/***/ }),

/***/ "./lib/lodash-modularize/debounce.js":
/*!*******************************************!*\
  !*** ./lib/lodash-modularize/debounce.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./lib/lodash-modularize/isObject.js");
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./now.js */ "./lib/lodash-modularize/now.js");
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toNumber.js */ "./lib/lodash-modularize/toNumber.js");
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

  wait = Object(_toNumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(wait) || 0;

  if (Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(Object(_toNumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.maxWait) || 0, wait) : maxWait;
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
    lastInvokeTime = time; // Start the timer for the trailing edge.

    timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = Object(_now_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // Restart the timer.


    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
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
    return timerId === undefined ? result : trailingEdge(Object(_now_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
  }

  function debounced() {
    var time = Object(_now_js__WEBPACK_IMPORTED_MODULE_1__["default"])(),
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

/* harmony default export */ __webpack_exports__["default"] = (debounce);

/***/ }),

/***/ "./lib/lodash-modularize/deburr.js":
/*!*****************************************!*\
  !*** ./lib/lodash-modularize/deburr.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deburrLetter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_deburrLetter.js */ "./lib/lodash-modularize/_deburrLetter.js");
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toString.js */ "./lib/lodash-modularize/toString.js");


/** Used to match Latin Unicode letters (excluding mathematical operators). */

var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
/** Used to compose unicode character classes. */

var rsComboMarksRange = "\\u0300-\\u036f",
    reComboHalfMarksRange = "\\ufe20-\\ufe2f",
    rsComboSymbolsRange = "\\u20d0-\\u20ff",
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
/** Used to compose unicode capture groups. */

var rsCombo = '[' + rsComboRange + ']';
/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */

var reComboMark = RegExp(rsCombo, 'g');
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
  string = Object(_toString_js__WEBPACK_IMPORTED_MODULE_1__["default"])(string);
  return string && string.replace(reLatin, _deburrLetter_js__WEBPACK_IMPORTED_MODULE_0__["default"]).replace(reComboMark, '');
}

/* harmony default export */ __webpack_exports__["default"] = (deburr);

/***/ }),

/***/ "./lib/lodash-modularize/isArray.js":
/*!******************************************!*\
  !*** ./lib/lodash-modularize/isArray.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (isArray);

/***/ }),

/***/ "./lib/lodash-modularize/isObject.js":
/*!*******************************************!*\
  !*** ./lib/lodash-modularize/isObject.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  var type = _typeof(value);

  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ __webpack_exports__["default"] = (isObject);

/***/ }),

/***/ "./lib/lodash-modularize/isObjectLike.js":
/*!***********************************************!*\
  !*** ./lib/lodash-modularize/isObjectLike.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  return value != null && _typeof(value) == 'object';
}

/* harmony default export */ __webpack_exports__["default"] = (isObjectLike);

/***/ }),

/***/ "./lib/lodash-modularize/isSymbol.js":
/*!*******************************************!*\
  !*** ./lib/lodash-modularize/isSymbol.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "./lib/lodash-modularize/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./lib/lodash-modularize/isObjectLike.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



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
  return _typeof(value) == 'symbol' || Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) == symbolTag;
}

/* harmony default export */ __webpack_exports__["default"] = (isSymbol);

/***/ }),

/***/ "./lib/lodash-modularize/now.js":
/*!**************************************!*\
  !*** ./lib/lodash-modularize/now.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./lib/lodash-modularize/_root.js");

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

var now = function now() {
  return _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Date.now();
};

/* harmony default export */ __webpack_exports__["default"] = (now);

/***/ }),

/***/ "./lib/lodash-modularize/toNumber.js":
/*!*******************************************!*\
  !*** ./lib/lodash-modularize/toNumber.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./lib/lodash-modularize/isObject.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isSymbol.js */ "./lib/lodash-modularize/isSymbol.js");


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

  if (Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return NAN;
  }

  if (Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

/* harmony default export */ __webpack_exports__["default"] = (toNumber);

/***/ }),

/***/ "./lib/lodash-modularize/toString.js":
/*!*******************************************!*\
  !*** ./lib/lodash-modularize/toString.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseToString.js */ "./lib/lodash-modularize/_baseToString.js");

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
  return value == null ? '' : Object(_baseToString_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (toString);

/***/ }),

/***/ "./lib/lodash-modularize/upperFirst.js":
/*!*********************************************!*\
  !*** ./lib/lodash-modularize/upperFirst.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createCaseFirst_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createCaseFirst.js */ "./lib/lodash-modularize/_createCaseFirst.js");

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

var upperFirst = Object(_createCaseFirst_js__WEBPACK_IMPORTED_MODULE_0__["default"])('toUpperCase');
/* harmony default export */ __webpack_exports__["default"] = (upperFirst);

/***/ }),

/***/ "./lib/lodash-modularize/words.js":
/*!****************************************!*\
  !*** ./lib/lodash-modularize/words.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asciiWords_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_asciiWords.js */ "./lib/lodash-modularize/_asciiWords.js");
/* harmony import */ var _hasUnicodeWord_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hasUnicodeWord.js */ "./lib/lodash-modularize/_hasUnicodeWord.js");
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toString.js */ "./lib/lodash-modularize/toString.js");
/* harmony import */ var _unicodeWords_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_unicodeWords.js */ "./lib/lodash-modularize/_unicodeWords.js");




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
  string = Object(_toString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return Object(_hasUnicodeWord_js__WEBPACK_IMPORTED_MODULE_1__["default"])(string) ? Object(_unicodeWords_js__WEBPACK_IMPORTED_MODULE_3__["default"])(string) : Object(_asciiWords_js__WEBPACK_IMPORTED_MODULE_0__["default"])(string);
  }

  return string.match(pattern) || [];
}

/* harmony default export */ __webpack_exports__["default"] = (words);

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! exports provided: elementTools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementTools", function() { return elementTools; });
/* harmony import */ var _dependencies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dependencies */ "./lib/dependencies.js");
/**
	Utility routines for Sargasso classes

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020 Michael Rhodes
**/


var _hasClass = function _hasClass(element, cssClass) {
  var className = element.className || '';
  var classes = className.split(/\s+/);
  return classes.indexOf(cssClass) !== -1;
};

var _addClass = function _addClass(element, cssClass) {
  var className = element.className || '';
  var classes = className.split(/\s+/);

  if (classes.indexOf(cssClass) === -1) {
    classes.push(cssClass);
    element.className = classes.join(' ');
  }
};

var _removeClass = function _removeClass(element, cssClass) {
  var className = element.className || '';
  var classes = className.split(/\s+/);

  if (classes.indexOf(cssClass) !== -1) {
    classes.splice(classes.indexOf(cssClass), 1);
    element.className = classes.join(' ');
  }
};

var _isVisible = function _isVisible(element) {
  return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
};

var _inViewPort = function _inViewPort(element) {
  var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
  var rect = element.getBoundingClientRect();

  var visible = _isVisible(element);

  var aboveTheTop = rect.bottom < 0;
  var belowTheFold;

  if (container.self === window) {
    belowTheFold = rect.top > (window.innerHeight || document.documentElement.clientHeight);
  } else {
    belowTheFold = rect.top > container.clientHeight;
  } // console.log('_inViewPort', visible, belowTheFold, aboveTheTop)


  return visible && !belowTheFold && !aboveTheTop;
};
/*
	element: element to apply to
	css: JSON object with properties in kebab-case or camelCase (or even in snake_case and seperate words)
*/


var _css = function _css(element, css) {
  for (var prop in css) {
    var key = prop;

    if (key.match(/_- /)) {
      key = Object(_dependencies__WEBPACK_IMPORTED_MODULE_0__["camelCase"])(prop);
    }

    element.style[key] = css[prop];
  }
};

var elementTools = {
  hasClass: _hasClass,
  addClass: _addClass,
  removeClass: _removeClass,
  isVisible: _isVisible,
  inViewPort: _inViewPort // setCSS: _css

};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=sargasso.common.js.map