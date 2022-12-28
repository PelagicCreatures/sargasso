/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var $16e381b58a3d1b51$var$extendStatics = function(d1, b1) {
    $16e381b58a3d1b51$var$extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return $16e381b58a3d1b51$var$extendStatics(d1, b1);
};
function $16e381b58a3d1b51$export$a8ba968b8961cb8a(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    $16e381b58a3d1b51$var$extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var $16e381b58a3d1b51$export$18ce0697a983be9b = function() {
    $16e381b58a3d1b51$export$18ce0697a983be9b = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $16e381b58a3d1b51$export$18ce0697a983be9b.apply(this, arguments);
};
function $16e381b58a3d1b51$export$3c9a16f847548506(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function $16e381b58a3d1b51$export$29e00dfd3077644b(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function $16e381b58a3d1b51$export$d5ad3fd78186038f(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function $16e381b58a3d1b51$export$f1db080c865becb9(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function $16e381b58a3d1b51$export$1050f835b63b671e(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function $16e381b58a3d1b51$export$67ebef60e6f28a6(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var $16e381b58a3d1b51$export$45d3717a4c69092e = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function $16e381b58a3d1b51$export$f33643c0debef087(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) $16e381b58a3d1b51$export$45d3717a4c69092e(o, m, p);
}
function $16e381b58a3d1b51$export$19a8beecd37a4c45(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $16e381b58a3d1b51$export$8d051b38c9118094(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function $16e381b58a3d1b51$export$afc72e2116322959() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat($16e381b58a3d1b51$export$8d051b38c9118094(arguments[i]));
    return ar;
}
function $16e381b58a3d1b51$export$6388937ca91ccae8() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function $16e381b58a3d1b51$export$1216008129fb82ed(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function $16e381b58a3d1b51$export$10c90e4f7922046c(v) {
    return this instanceof $16e381b58a3d1b51$export$10c90e4f7922046c ? (this.v = v, this) : new $16e381b58a3d1b51$export$10c90e4f7922046c(v);
}
function $16e381b58a3d1b51$export$e427f37a30a4de9b(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof $16e381b58a3d1b51$export$10c90e4f7922046c ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function $16e381b58a3d1b51$export$bbd80228419bb833(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: $16e381b58a3d1b51$export$10c90e4f7922046c(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function $16e381b58a3d1b51$export$e3b29a3d6162315f(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof $16e381b58a3d1b51$export$19a8beecd37a4c45 === "function" ? $16e381b58a3d1b51$export$19a8beecd37a4c45(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v1) {
        Promise.resolve(v1).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function $16e381b58a3d1b51$export$4fb47efe1390b86f(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var $16e381b58a3d1b51$var$__setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function $16e381b58a3d1b51$export$c21735bcef00d192(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $16e381b58a3d1b51$export$45d3717a4c69092e(result, mod, k);
    }
    $16e381b58a3d1b51$var$__setModuleDefault(result, mod);
    return result;
}
function $16e381b58a3d1b51$export$da59b14a69baef04(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function $16e381b58a3d1b51$export$d5dcaf168c640c35(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function $16e381b58a3d1b51$export$d40a35129aaff81f(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function $16e381b58a3d1b51$export$81fdc39f203e4e04(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}



/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var $95868e8be030cef6$export$a81b11d69c993162 = /** @class */ function() {
    function MDCFoundation1(adapter) {
        if (adapter === void 0) adapter = {};
        this.adapter = adapter;
    }
    Object.defineProperty(MDCFoundation1, "cssClasses", {
        get: function() {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation1, "strings", {
        get: function() {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation1, "numbers", {
        get: function() {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation1, "defaultAdapter", {
        get: function() {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: false,
        configurable: true
    });
    MDCFoundation1.prototype.init = function() {
    // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation1.prototype.destroy = function() {
    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation1;
}();
var // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
$95868e8be030cef6$export$2e2bcd8739ae039 = $95868e8be030cef6$export$a81b11d69c993162;


var $806bdc5abe44e68c$export$c3670872e5a4af8e = /** @class */ function() {
    function MDCComponent1(root, foundation) {
        var args = [];
        for(var _i = 2; _i < arguments.length; _i++)args[_i - 2] = arguments[_i];
        this.root = root;
        this.initialize.apply(this, (0, $16e381b58a3d1b51$export$1216008129fb82ed)([], (0, $16e381b58a3d1b51$export$8d051b38c9118094)(args)));
        // Note that we initialize foundation here and not within the constructor's
        // default param so that this.root is defined and can be used within the
        // foundation class.
        this.foundation = foundation === undefined ? this.getDefaultFoundation() : foundation;
        this.foundation.init();
        this.initialSyncWithDOM();
    }
    MDCComponent1.attachTo = function(root) {
        // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
        // returns an instantiated component with its root set to that element. Also note that in the cases of
        // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
        // from getDefaultFoundation().
        return new MDCComponent1(root, new (0, $95868e8be030cef6$export$a81b11d69c993162)({}));
    };
    /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */ MDCComponent1.prototype.initialize = function() {
        var _args = [];
        for(var _i = 0; _i < arguments.length; _i++)_args[_i] = arguments[_i];
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.
    };
    MDCComponent1.prototype.getDefaultFoundation = function() {
        // Subclasses must override this method to return a properly configured foundation class for the
        // component.
        throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class");
    };
    MDCComponent1.prototype.initialSyncWithDOM = function() {
    // Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    };
    MDCComponent1.prototype.destroy = function() {
        // Subclasses may implement this method to release any resources / deregister any listeners they have
        // attached. An example of this might be deregistering a resize event from the window object.
        this.foundation.destroy();
    };
    MDCComponent1.prototype.listen = function(evtType, handler, options) {
        this.root.addEventListener(evtType, handler, options);
    };
    MDCComponent1.prototype.unlisten = function(evtType, handler, options) {
        this.root.removeEventListener(evtType, handler, options);
    };
    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
     */ MDCComponent1.prototype.emit = function(evtType, evtData, shouldBubble) {
        if (shouldBubble === void 0) shouldBubble = false;
        var evt;
        if (typeof CustomEvent === "function") evt = new CustomEvent(evtType, {
            bubbles: shouldBubble,
            detail: evtData
        });
        else {
            evt = document.createEvent("CustomEvent");
            evt.initCustomEvent(evtType, shouldBubble, false, evtData);
        }
        this.root.dispatchEvent(evt);
    };
    return MDCComponent1;
}();
var // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
$806bdc5abe44e68c$export$2e2bcd8739ae039 = $806bdc5abe44e68c$export$c3670872e5a4af8e;


function $090f00fee86c77f1$export$82e1592afef3b60f(globalObj) {
    if (globalObj === void 0) globalObj = window;
    return $090f00fee86c77f1$var$supportsPassiveOption(globalObj) ? {
        passive: true
    } : false;
}
function $090f00fee86c77f1$var$supportsPassiveOption(globalObj) {
    if (globalObj === void 0) globalObj = window;
    // See
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    var passiveSupported = false;
    try {
        var options = {
            // This function will be called when the browser
            // attempts to access the passive property.
            get passive () {
                passiveSupported = true;
                return false;
            }
        };
        var handler = function() {};
        globalObj.document.addEventListener("test", handler, options);
        globalObj.document.removeEventListener("test", handler, options);
    } catch (err) {
        passiveSupported = false;
    }
    return passiveSupported;
}


function $d0ad8581e3814672$export$ff7f7c97cdce86e(element, selector) {
    if (element.closest) return element.closest(selector);
    var el = element;
    while(el){
        if ($d0ad8581e3814672$export$de994efd351b291c(el, selector)) return el;
        el = el.parentElement;
    }
    return null;
}
function $d0ad8581e3814672$export$de994efd351b291c(element, selector) {
    var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}
function $d0ad8581e3814672$export$30f5493effae393e(element) {
    // Check the offsetParent. If the element inherits display: none from any
    // parent, the offsetParent property will be null (see
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).
    // This check ensures we only clone the node when necessary.
    var htmlEl = element;
    if (htmlEl.offsetParent !== null) return htmlEl.scrollWidth;
    var clone = htmlEl.cloneNode(true);
    clone.style.setProperty("position", "absolute");
    clone.style.setProperty("transform", "translate(-9999px, -9999px)");
    document.documentElement.appendChild(clone);
    var scrollWidth = clone.scrollWidth;
    document.documentElement.removeChild(clone);
    return scrollWidth;
}







var $9341c3cc46166487$export$c1c0562ec8379000 = {
    LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
    LABEL_REQUIRED: "mdc-floating-label--required",
    LABEL_SHAKE: "mdc-floating-label--shake",
    ROOT: "mdc-floating-label"
};


var $b976de9740360590$export$c260f97a6b4add0a = /** @class */ function(_super) {
    (0, $16e381b58a3d1b51$export$a8ba968b8961cb8a)(MDCFloatingLabelFoundation1, _super);
    function MDCFloatingLabelFoundation1(adapter) {
        var _this = _super.call(this, (0, $16e381b58a3d1b51$export$18ce0697a983be9b)((0, $16e381b58a3d1b51$export$18ce0697a983be9b)({}, MDCFloatingLabelFoundation1.defaultAdapter), adapter)) || this;
        _this.shakeAnimationEndHandler = function() {
            _this.handleShakeAnimationEnd();
        };
        return _this;
    }
    Object.defineProperty(MDCFloatingLabelFoundation1, "cssClasses", {
        get: function() {
            return 0, $9341c3cc46166487$export$c1c0562ec8379000;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFloatingLabelFoundation1, "defaultAdapter", {
        /**
         * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
         */ get: function() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function() {
                    return undefined;
                },
                removeClass: function() {
                    return undefined;
                },
                getWidth: function() {
                    return 0;
                },
                registerInteractionHandler: function() {
                    return undefined;
                },
                deregisterInteractionHandler: function() {
                    return undefined;
                }
            };
        // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCFloatingLabelFoundation1.prototype.init = function() {
        this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler);
    };
    MDCFloatingLabelFoundation1.prototype.destroy = function() {
        this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler);
    };
    /**
     * Returns the width of the label element.
     */ MDCFloatingLabelFoundation1.prototype.getWidth = function() {
        return this.adapter.getWidth();
    };
    /**
     * Styles the label to produce a shake animation to indicate an error.
     * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
     */ MDCFloatingLabelFoundation1.prototype.shake = function(shouldShake) {
        var LABEL_SHAKE = MDCFloatingLabelFoundation1.cssClasses.LABEL_SHAKE;
        if (shouldShake) this.adapter.addClass(LABEL_SHAKE);
        else this.adapter.removeClass(LABEL_SHAKE);
    };
    /**
     * Styles the label to float or dock.
     * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
     */ MDCFloatingLabelFoundation1.prototype.float = function(shouldFloat) {
        var _a = MDCFloatingLabelFoundation1.cssClasses, LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a.LABEL_SHAKE;
        if (shouldFloat) this.adapter.addClass(LABEL_FLOAT_ABOVE);
        else {
            this.adapter.removeClass(LABEL_FLOAT_ABOVE);
            this.adapter.removeClass(LABEL_SHAKE);
        }
    };
    /**
     * Styles the label as required.
     * @param isRequired If true, adds an asterisk to the label, indicating that it is required.
     */ MDCFloatingLabelFoundation1.prototype.setRequired = function(isRequired) {
        var LABEL_REQUIRED = MDCFloatingLabelFoundation1.cssClasses.LABEL_REQUIRED;
        if (isRequired) this.adapter.addClass(LABEL_REQUIRED);
        else this.adapter.removeClass(LABEL_REQUIRED);
    };
    MDCFloatingLabelFoundation1.prototype.handleShakeAnimationEnd = function() {
        var LABEL_SHAKE = MDCFloatingLabelFoundation1.cssClasses.LABEL_SHAKE;
        this.adapter.removeClass(LABEL_SHAKE);
    };
    return MDCFloatingLabelFoundation1;
}((0, $95868e8be030cef6$export$a81b11d69c993162));
var // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
$b976de9740360590$export$2e2bcd8739ae039 = $b976de9740360590$export$c260f97a6b4add0a;


var $2bd21098bb8c03d9$export$3a4076b02149b105 = /** @class */ function(_super) {
    (0, $16e381b58a3d1b51$export$a8ba968b8961cb8a)(MDCFloatingLabel1, _super);
    function MDCFloatingLabel1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCFloatingLabel1.attachTo = function(root) {
        return new MDCFloatingLabel1(root);
    };
    /**
     * Styles the label to produce the label shake for errors.
     * @param shouldShake If true, shakes the label by adding a CSS class; otherwise, stops shaking by removing the class.
     */ MDCFloatingLabel1.prototype.shake = function(shouldShake) {
        this.foundation.shake(shouldShake);
    };
    /**
     * Styles the label to float/dock.
     * @param shouldFloat If true, floats the label by adding a CSS class; otherwise, docks it by removing the class.
     */ MDCFloatingLabel1.prototype.float = function(shouldFloat) {
        this.foundation.float(shouldFloat);
    };
    /**
     * Styles the label as required.
     * @param isRequired If true, adds an asterisk to the label, indicating that it is required.
     */ MDCFloatingLabel1.prototype.setRequired = function(isRequired) {
        this.foundation.setRequired(isRequired);
    };
    MDCFloatingLabel1.prototype.getWidth = function() {
        return this.foundation.getWidth();
    };
    MDCFloatingLabel1.prototype.getDefaultFoundation = function() {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function(className) {
                return _this.root.classList.add(className);
            },
            removeClass: function(className) {
                return _this.root.classList.remove(className);
            },
            getWidth: function() {
                return (0, $d0ad8581e3814672$export$30f5493effae393e)(_this.root);
            },
            registerInteractionHandler: function(evtType, handler) {
                return _this.listen(evtType, handler);
            },
            deregisterInteractionHandler: function(evtType, handler) {
                return _this.unlisten(evtType, handler);
            }
        };
        // tslint:enable:object-literal-sort-keys
        return new (0, $b976de9740360590$export$c260f97a6b4add0a)(adapter);
    };
    return MDCFloatingLabel1;
}((0, $806bdc5abe44e68c$export$c3670872e5a4af8e));






/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var $b49c3ba0042e56f6$export$c1c0562ec8379000 = {
    LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
    LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"
};


var $52ab511aca05c80d$export$305b613fbe54f455 = /** @class */ function(_super) {
    (0, $16e381b58a3d1b51$export$a8ba968b8961cb8a)(MDCLineRippleFoundation1, _super);
    function MDCLineRippleFoundation1(adapter) {
        var _this = _super.call(this, (0, $16e381b58a3d1b51$export$18ce0697a983be9b)((0, $16e381b58a3d1b51$export$18ce0697a983be9b)({}, MDCLineRippleFoundation1.defaultAdapter), adapter)) || this;
        _this.transitionEndHandler = function(evt) {
            _this.handleTransitionEnd(evt);
        };
        return _this;
    }
    Object.defineProperty(MDCLineRippleFoundation1, "cssClasses", {
        get: function() {
            return 0, $b49c3ba0042e56f6$export$c1c0562ec8379000;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCLineRippleFoundation1, "defaultAdapter", {
        /**
         * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
         */ get: function() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function() {
                    return undefined;
                },
                removeClass: function() {
                    return undefined;
                },
                hasClass: function() {
                    return false;
                },
                setStyle: function() {
                    return undefined;
                },
                registerEventHandler: function() {
                    return undefined;
                },
                deregisterEventHandler: function() {
                    return undefined;
                }
            };
        // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCLineRippleFoundation1.prototype.init = function() {
        this.adapter.registerEventHandler("transitionend", this.transitionEndHandler);
    };
    MDCLineRippleFoundation1.prototype.destroy = function() {
        this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler);
    };
    MDCLineRippleFoundation1.prototype.activate = function() {
        this.adapter.removeClass((0, $b49c3ba0042e56f6$export$c1c0562ec8379000).LINE_RIPPLE_DEACTIVATING);
        this.adapter.addClass((0, $b49c3ba0042e56f6$export$c1c0562ec8379000).LINE_RIPPLE_ACTIVE);
    };
    MDCLineRippleFoundation1.prototype.setRippleCenter = function(xCoordinate) {
        this.adapter.setStyle("transform-origin", xCoordinate + "px center");
    };
    MDCLineRippleFoundation1.prototype.deactivate = function() {
        this.adapter.addClass((0, $b49c3ba0042e56f6$export$c1c0562ec8379000).LINE_RIPPLE_DEACTIVATING);
    };
    MDCLineRippleFoundation1.prototype.handleTransitionEnd = function(evt) {
        // Wait for the line ripple to be either transparent or opaque
        // before emitting the animation end event
        var isDeactivating = this.adapter.hasClass((0, $b49c3ba0042e56f6$export$c1c0562ec8379000).LINE_RIPPLE_DEACTIVATING);
        if (evt.propertyName === "opacity") {
            if (isDeactivating) {
                this.adapter.removeClass((0, $b49c3ba0042e56f6$export$c1c0562ec8379000).LINE_RIPPLE_ACTIVE);
                this.adapter.removeClass((0, $b49c3ba0042e56f6$export$c1c0562ec8379000).LINE_RIPPLE_DEACTIVATING);
            }
        }
    };
    return MDCLineRippleFoundation1;
}((0, $95868e8be030cef6$export$a81b11d69c993162));
var // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
$52ab511aca05c80d$export$2e2bcd8739ae039 = $52ab511aca05c80d$export$305b613fbe54f455;


var $e439909646f42de1$export$3b3bb7435b241cc2 = /** @class */ function(_super) {
    (0, $16e381b58a3d1b51$export$a8ba968b8961cb8a)(MDCLineRipple1, _super);
    function MDCLineRipple1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCLineRipple1.attachTo = function(root) {
        return new MDCLineRipple1(root);
    };
    /**
     * Activates the line ripple
     */ MDCLineRipple1.prototype.activate = function() {
        this.foundation.activate();
    };
    /**
     * Deactivates the line ripple
     */ MDCLineRipple1.prototype.deactivate = function() {
        this.foundation.deactivate();
    };
    /**
     * Sets the transform origin given a user's click location.
     * The `rippleCenter` is the x-coordinate of the middle of the ripple.
     */ MDCLineRipple1.prototype.setRippleCenter = function(xCoordinate) {
        this.foundation.setRippleCenter(xCoordinate);
    };
    MDCLineRipple1.prototype.getDefaultFoundation = function() {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function(className) {
                return _this.root.classList.add(className);
            },
            removeClass: function(className) {
                return _this.root.classList.remove(className);
            },
            hasClass: function(className) {
                return _this.root.classList.contains(className);
            },
            setStyle: function(propertyName, value) {
                return _this.root.style.setProperty(propertyName, value);
            },
            registerEventHandler: function(evtType, handler) {
                return _this.listen(evtType, handler);
            },
            deregisterEventHandler: function(evtType, handler) {
                return _this.unlisten(evtType, handler);
            }
        };
        // tslint:enable:object-literal-sort-keys
        return new (0, $52ab511aca05c80d$export$305b613fbe54f455)(adapter);
    };
    return MDCLineRipple1;
}((0, $806bdc5abe44e68c$export$c3670872e5a4af8e));





/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var $6290c29c75be7adb$export$21c51bc433c16634 = {
    NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
};
var $6290c29c75be7adb$export$1f6c9cc012ebacae = {
    // This should stay in sync with $mdc-notched-outline-padding * 2.
    NOTCH_ELEMENT_PADDING: 8
};
var $6290c29c75be7adb$export$c1c0562ec8379000 = {
    NO_LABEL: "mdc-notched-outline--no-label",
    OUTLINE_NOTCHED: "mdc-notched-outline--notched",
    OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
};





var $31412e1cb7eeab42$export$1416251f3c23f76c = /** @class */ function(_super) {
    (0, $16e381b58a3d1b51$export$a8ba968b8961cb8a)(MDCNotchedOutlineFoundation1, _super);
    function MDCNotchedOutlineFoundation1(adapter) {
        return _super.call(this, (0, $16e381b58a3d1b51$export$18ce0697a983be9b)((0, $16e381b58a3d1b51$export$18ce0697a983be9b)({}, MDCNotchedOutlineFoundation1.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCNotchedOutlineFoundation1, "strings", {
        get: function() {
            return 0, $6290c29c75be7adb$export$21c51bc433c16634;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation1, "cssClasses", {
        get: function() {
            return 0, $6290c29c75be7adb$export$c1c0562ec8379000;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation1, "numbers", {
        get: function() {
            return 0, $6290c29c75be7adb$export$1f6c9cc012ebacae;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation1, "defaultAdapter", {
        /**
         * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
         */ get: function() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function() {
                    return undefined;
                },
                removeClass: function() {
                    return undefined;
                },
                setNotchWidthProperty: function() {
                    return undefined;
                },
                removeNotchWidthProperty: function() {
                    return undefined;
                }
            };
        // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
     */ MDCNotchedOutlineFoundation1.prototype.notch = function(notchWidth) {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation1.cssClasses.OUTLINE_NOTCHED;
        if (notchWidth > 0) notchWidth += (0, $6290c29c75be7adb$export$1f6c9cc012ebacae).NOTCH_ELEMENT_PADDING; // Add padding from left/right.
        this.adapter.setNotchWidthProperty(notchWidth);
        this.adapter.addClass(OUTLINE_NOTCHED);
    };
    /**
     * Removes notched outline selector to close the notch in the outline.
     */ MDCNotchedOutlineFoundation1.prototype.closeNotch = function() {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation1.cssClasses.OUTLINE_NOTCHED;
        this.adapter.removeClass(OUTLINE_NOTCHED);
        this.adapter.removeNotchWidthProperty();
    };
    return MDCNotchedOutlineFoundation1;
}((0, $95868e8be030cef6$export$a81b11d69c993162));
var // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
$31412e1cb7eeab42$export$2e2bcd8739ae039 = $31412e1cb7eeab42$export$1416251f3c23f76c;


var $eae209998f1e4198$export$260070b3fef46e93 = /** @class */ function(_super) {
    (0, $16e381b58a3d1b51$export$a8ba968b8961cb8a)(MDCNotchedOutline1, _super);
    function MDCNotchedOutline1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCNotchedOutline1.attachTo = function(root) {
        return new MDCNotchedOutline1(root);
    };
    MDCNotchedOutline1.prototype.initialSyncWithDOM = function() {
        this.notchElement = this.root.querySelector((0, $6290c29c75be7adb$export$21c51bc433c16634).NOTCH_ELEMENT_SELECTOR);
        var label = this.root.querySelector("." + (0, $b976de9740360590$export$c260f97a6b4add0a).cssClasses.ROOT);
        if (label) {
            label.style.transitionDuration = "0s";
            this.root.classList.add((0, $6290c29c75be7adb$export$c1c0562ec8379000).OUTLINE_UPGRADED);
            requestAnimationFrame(function() {
                label.style.transitionDuration = "";
            });
        } else this.root.classList.add((0, $6290c29c75be7adb$export$c1c0562ec8379000).NO_LABEL);
    };
    /**
     * Updates classes and styles to open the notch to the specified width.
     * @param notchWidth The notch width in the outline.
     */ MDCNotchedOutline1.prototype.notch = function(notchWidth) {
        this.foundation.notch(notchWidth);
    };
    /**
     * Updates classes and styles to close the notch.
     */ MDCNotchedOutline1.prototype.closeNotch = function() {
        this.foundation.closeNotch();
    };
    MDCNotchedOutline1.prototype.getDefaultFoundation = function() {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function(className) {
                return _this.root.classList.add(className);
            },
            removeClass: function(className) {
                return _this.root.classList.remove(className);
            },
            setNotchWidthProperty: function(width) {
                _this.notchElement.style.setProperty("width", width + "px");
            },
            removeNotchWidthProperty: function() {
                _this.notchElement.style.removeProperty("width");
            }
        };
        // tslint:enable:object-literal-sort-keys
        return new (0, $31412e1cb7eeab42$export$1416251f3c23f76c)(adapter);
    };
    return MDCNotchedOutline1;
}((0, $806bdc5abe44e68c$export$c3670872e5a4af8e));








var $9540839d4baff811$export$c1c0562ec8379000 = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
    FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
    FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
    ROOT: "mdc-ripple-upgraded",
    UNBOUNDED: "mdc-ripple-upgraded--unbounded"
};
var $9540839d4baff811$export$21c51bc433c16634 = {
    VAR_FG_SCALE: "--mdc-ripple-fg-scale",
    VAR_FG_SIZE: "--mdc-ripple-fg-size",
    VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
    VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
    VAR_LEFT: "--mdc-ripple-left",
    VAR_TOP: "--mdc-ripple-top"
};
var $9540839d4baff811$export$1f6c9cc012ebacae = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300
};


/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */ var $b3bfc71a24d71d34$var$supportsCssVariables_;
function $b3bfc71a24d71d34$export$599ecc0c8c1caa3e(windowObj, forceRefresh) {
    if (forceRefresh === void 0) forceRefresh = false;
    var CSS = windowObj.CSS;
    var supportsCssVars = $b3bfc71a24d71d34$var$supportsCssVariables_;
    if (typeof $b3bfc71a24d71d34$var$supportsCssVariables_ === "boolean" && !forceRefresh) return $b3bfc71a24d71d34$var$supportsCssVariables_;
    var supportsFunctionPresent = CSS && typeof CSS.supports === "function";
    if (!supportsFunctionPresent) return false;
    var explicitlySupportsCssVars = CSS.supports("--css-vars", "yes");
    // See: https://bugs.webkit.org/show_bug.cgi?id=154669
    // See: README section on Safari
    var weAreFeatureDetectingSafari10plus = CSS.supports("(--css-vars: yes)") && CSS.supports("color", "#00000000");
    supportsCssVars = explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
    if (!forceRefresh) $b3bfc71a24d71d34$var$supportsCssVariables_ = supportsCssVars;
    return supportsCssVars;
}
function $b3bfc71a24d71d34$export$82f3563636a128ae(evt, pageOffset, clientRect) {
    if (!evt) return {
        x: 0,
        y: 0
    };
    var x = pageOffset.x, y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY;
    // Determine touch point relative to the ripple container.
    if (evt.type === "touchstart") {
        var touchEvent = evt;
        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    } else {
        var mouseEvent = evt;
        normalizedX = mouseEvent.pageX - documentX;
        normalizedY = mouseEvent.pageY - documentY;
    }
    return {
        x: normalizedX,
        y: normalizedY
    };
}


// Activation events registered on the root element of each instance for activation
var $9359f45d77124ccd$var$ACTIVATION_EVENT_TYPES = [
    "touchstart",
    "pointerdown",
    "mousedown",
    "keydown", 
];
// Deactivation events registered on documentElement when a pointer-related down event occurs
var $9359f45d77124ccd$var$POINTER_DEACTIVATION_EVENT_TYPES = [
    "touchend",
    "pointerup",
    "mouseup",
    "contextmenu", 
];
// simultaneous nested activations
var $9359f45d77124ccd$var$activatedTargets = [];
var $9359f45d77124ccd$export$fb5f028029d92ef5 = /** @class */ function(_super) {
    (0, $16e381b58a3d1b51$export$a8ba968b8961cb8a)(MDCRippleFoundation1, _super);
    function MDCRippleFoundation1(adapter) {
        var _this = _super.call(this, (0, $16e381b58a3d1b51$export$18ce0697a983be9b)((0, $16e381b58a3d1b51$export$18ce0697a983be9b)({}, MDCRippleFoundation1.defaultAdapter), adapter)) || this;
        _this.activationAnimationHasEnded = false;
        _this.activationTimer = 0;
        _this.fgDeactivationRemovalTimer = 0;
        _this.fgScale = "0";
        _this.frame = {
            width: 0,
            height: 0
        };
        _this.initialSize = 0;
        _this.layoutFrame = 0;
        _this.maxRadius = 0;
        _this.unboundedCoords = {
            left: 0,
            top: 0
        };
        _this.activationState = _this.defaultActivationState();
        _this.activationTimerCallback = function() {
            _this.activationAnimationHasEnded = true;
            _this.runDeactivationUXLogicIfReady();
        };
        _this.activateHandler = function(e) {
            _this.activateImpl(e);
        };
        _this.deactivateHandler = function() {
            _this.deactivateImpl();
        };
        _this.focusHandler = function() {
            _this.handleFocus();
        };
        _this.blurHandler = function() {
            _this.handleBlur();
        };
        _this.resizeHandler = function() {
            _this.layout();
        };
        return _this;
    }
    Object.defineProperty(MDCRippleFoundation1, "cssClasses", {
        get: function() {
            return 0, $9540839d4baff811$export$c1c0562ec8379000;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation1, "strings", {
        get: function() {
            return 0, $9540839d4baff811$export$21c51bc433c16634;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation1, "numbers", {
        get: function() {
            return 0, $9540839d4baff811$export$1f6c9cc012ebacae;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation1, "defaultAdapter", {
        get: function() {
            return {
                addClass: function() {
                    return undefined;
                },
                browserSupportsCssVars: function() {
                    return true;
                },
                computeBoundingRect: function() {
                    return {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0
                    };
                },
                containsEventTarget: function() {
                    return true;
                },
                deregisterDocumentInteractionHandler: function() {
                    return undefined;
                },
                deregisterInteractionHandler: function() {
                    return undefined;
                },
                deregisterResizeHandler: function() {
                    return undefined;
                },
                getWindowPageOffset: function() {
                    return {
                        x: 0,
                        y: 0
                    };
                },
                isSurfaceActive: function() {
                    return true;
                },
                isSurfaceDisabled: function() {
                    return true;
                },
                isUnbounded: function() {
                    return true;
                },
                registerDocumentInteractionHandler: function() {
                    return undefined;
                },
                registerInteractionHandler: function() {
                    return undefined;
                },
                registerResizeHandler: function() {
                    return undefined;
                },
                removeClass: function() {
                    return undefined;
                },
                updateCssVariable: function() {
                    return undefined;
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCRippleFoundation1.prototype.init = function() {
        var _this = this;
        var supportsPressRipple = this.supportsPressRipple();
        this.registerRootHandlers(supportsPressRipple);
        if (supportsPressRipple) {
            var _a = MDCRippleFoundation1.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
            requestAnimationFrame(function() {
                _this.adapter.addClass(ROOT_1);
                if (_this.adapter.isUnbounded()) {
                    _this.adapter.addClass(UNBOUNDED_1);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this.layoutInternal();
                }
            });
        }
    };
    MDCRippleFoundation1.prototype.destroy = function() {
        var _this = this;
        if (this.supportsPressRipple()) {
            if (this.activationTimer) {
                clearTimeout(this.activationTimer);
                this.activationTimer = 0;
                this.adapter.removeClass(MDCRippleFoundation1.cssClasses.FG_ACTIVATION);
            }
            if (this.fgDeactivationRemovalTimer) {
                clearTimeout(this.fgDeactivationRemovalTimer);
                this.fgDeactivationRemovalTimer = 0;
                this.adapter.removeClass(MDCRippleFoundation1.cssClasses.FG_DEACTIVATION);
            }
            var _a = MDCRippleFoundation1.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
            requestAnimationFrame(function() {
                _this.adapter.removeClass(ROOT_2);
                _this.adapter.removeClass(UNBOUNDED_2);
                _this.removeCssVars();
            });
        }
        this.deregisterRootHandlers();
        this.deregisterDeactivationHandlers();
    };
    /**
     * @param evt Optional event containing position information.
     */ MDCRippleFoundation1.prototype.activate = function(evt) {
        this.activateImpl(evt);
    };
    MDCRippleFoundation1.prototype.deactivate = function() {
        this.deactivateImpl();
    };
    MDCRippleFoundation1.prototype.layout = function() {
        var _this = this;
        if (this.layoutFrame) cancelAnimationFrame(this.layoutFrame);
        this.layoutFrame = requestAnimationFrame(function() {
            _this.layoutInternal();
            _this.layoutFrame = 0;
        });
    };
    MDCRippleFoundation1.prototype.setUnbounded = function(unbounded) {
        var UNBOUNDED = MDCRippleFoundation1.cssClasses.UNBOUNDED;
        if (unbounded) this.adapter.addClass(UNBOUNDED);
        else this.adapter.removeClass(UNBOUNDED);
    };
    MDCRippleFoundation1.prototype.handleFocus = function() {
        var _this = this;
        requestAnimationFrame(function() {
            return _this.adapter.addClass(MDCRippleFoundation1.cssClasses.BG_FOCUSED);
        });
    };
    MDCRippleFoundation1.prototype.handleBlur = function() {
        var _this = this;
        requestAnimationFrame(function() {
            return _this.adapter.removeClass(MDCRippleFoundation1.cssClasses.BG_FOCUSED);
        });
    };
    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     */ MDCRippleFoundation1.prototype.supportsPressRipple = function() {
        return this.adapter.browserSupportsCssVars();
    };
    MDCRippleFoundation1.prototype.defaultActivationState = function() {
        return {
            activationEvent: undefined,
            hasDeactivationUXRun: false,
            isActivated: false,
            isProgrammatic: false,
            wasActivatedByPointer: false,
            wasElementMadeActive: false
        };
    };
    /**
     * supportsPressRipple Passed from init to save a redundant function call
     */ MDCRippleFoundation1.prototype.registerRootHandlers = function(supportsPressRipple) {
        var e_1, _a;
        if (supportsPressRipple) {
            try {
                for(var ACTIVATION_EVENT_TYPES_1 = (0, $16e381b58a3d1b51$export$19a8beecd37a4c45)($9359f45d77124ccd$var$ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()){
                    var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
                    this.adapter.registerInteractionHandler(evtType, this.activateHandler);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a = ACTIVATION_EVENT_TYPES_1.return)) _a.call(ACTIVATION_EVENT_TYPES_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            if (this.adapter.isUnbounded()) this.adapter.registerResizeHandler(this.resizeHandler);
        }
        this.adapter.registerInteractionHandler("focus", this.focusHandler);
        this.adapter.registerInteractionHandler("blur", this.blurHandler);
    };
    MDCRippleFoundation1.prototype.registerDeactivationHandlers = function(evt) {
        var e_2, _a;
        if (evt.type === "keydown") this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
        else try {
            for(var POINTER_DEACTIVATION_EVENT_TYPES_1 = (0, $16e381b58a3d1b51$export$19a8beecd37a4c45)($9359f45d77124ccd$var$POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()){
                var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
                this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
            }
        } catch (e_2_1) {
            e_2 = {
                error: e_2_1
            };
        } finally{
            try {
                if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_1.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
            } finally{
                if (e_2) throw e_2.error;
            }
        }
    };
    MDCRippleFoundation1.prototype.deregisterRootHandlers = function() {
        var e_3, _a;
        try {
            for(var ACTIVATION_EVENT_TYPES_2 = (0, $16e381b58a3d1b51$export$19a8beecd37a4c45)($9359f45d77124ccd$var$ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()){
                var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
                this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
            }
        } catch (e_3_1) {
            e_3 = {
                error: e_3_1
            };
        } finally{
            try {
                if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a = ACTIVATION_EVENT_TYPES_2.return)) _a.call(ACTIVATION_EVENT_TYPES_2);
            } finally{
                if (e_3) throw e_3.error;
            }
        }
        this.adapter.deregisterInteractionHandler("focus", this.focusHandler);
        this.adapter.deregisterInteractionHandler("blur", this.blurHandler);
        if (this.adapter.isUnbounded()) this.adapter.deregisterResizeHandler(this.resizeHandler);
    };
    MDCRippleFoundation1.prototype.deregisterDeactivationHandlers = function() {
        var e_4, _a;
        this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
        try {
            for(var POINTER_DEACTIVATION_EVENT_TYPES_2 = (0, $16e381b58a3d1b51$export$19a8beecd37a4c45)($9359f45d77124ccd$var$POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()){
                var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
                this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
            }
        } catch (e_4_1) {
            e_4 = {
                error: e_4_1
            };
        } finally{
            try {
                if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_2.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
            } finally{
                if (e_4) throw e_4.error;
            }
        }
    };
    MDCRippleFoundation1.prototype.removeCssVars = function() {
        var _this = this;
        var rippleStrings = MDCRippleFoundation1.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function(key) {
            if (key.indexOf("VAR_") === 0) _this.adapter.updateCssVariable(rippleStrings[key], null);
        });
    };
    MDCRippleFoundation1.prototype.activateImpl = function(evt) {
        var _this = this;
        if (this.adapter.isSurfaceDisabled()) return;
        var activationState = this.activationState;
        if (activationState.isActivated) return;
        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
        var previousActivationEvent = this.previousActivationEvent;
        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
        if (isSameInteraction) return;
        activationState.isActivated = true;
        activationState.isProgrammatic = evt === undefined;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === "mousedown" || evt.type === "touchstart" || evt.type === "pointerdown");
        var hasActivatedChild = evt !== undefined && $9359f45d77124ccd$var$activatedTargets.length > 0 && $9359f45d77124ccd$var$activatedTargets.some(function(target) {
            return _this.adapter.containsEventTarget(target);
        });
        if (hasActivatedChild) {
            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
            this.resetActivationState();
            return;
        }
        if (evt !== undefined) {
            $9359f45d77124ccd$var$activatedTargets.push(evt.target);
            this.registerDeactivationHandlers(evt);
        }
        activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
        if (activationState.wasElementMadeActive) this.animateActivation();
        requestAnimationFrame(function() {
            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
            $9359f45d77124ccd$var$activatedTargets = [];
            if (!activationState.wasElementMadeActive && evt !== undefined && (evt.key === " " || evt.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
                if (activationState.wasElementMadeActive) _this.animateActivation();
            }
            if (!activationState.wasElementMadeActive) // Reset activation state immediately if element was not made active.
            _this.activationState = _this.defaultActivationState();
        });
    };
    MDCRippleFoundation1.prototype.checkElementMadeActive = function(evt) {
        return evt !== undefined && evt.type === "keydown" ? this.adapter.isSurfaceActive() : true;
    };
    MDCRippleFoundation1.prototype.animateActivation = function() {
        var _this = this;
        var _a = MDCRippleFoundation1.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
        var _b = MDCRippleFoundation1.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation1.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal();
        var translateStart = "";
        var translateEnd = "";
        if (!this.adapter.isUnbounded()) {
            var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
            translateStart = startPoint.x + "px, " + startPoint.y + "px";
            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
        }
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
        // Cancel any ongoing activation/deactivation animations
        clearTimeout(this.activationTimer);
        clearTimeout(this.fgDeactivationRemovalTimer);
        this.rmBoundedActivationClasses();
        this.adapter.removeClass(FG_DEACTIVATION);
        // Force layout in order to re-trigger the animation.
        this.adapter.computeBoundingRect();
        this.adapter.addClass(FG_ACTIVATION);
        this.activationTimer = setTimeout(function() {
            _this.activationTimerCallback();
        }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation1.prototype.getFgTranslationCoordinates = function() {
        var _a = this.activationState, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
        var startPoint;
        if (wasActivatedByPointer) startPoint = (0, $b3bfc71a24d71d34$export$82f3563636a128ae)(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
        else startPoint = {
            x: this.frame.width / 2,
            y: this.frame.height / 2
        };
        // Center the element around the start point.
        startPoint = {
            x: startPoint.x - this.initialSize / 2,
            y: startPoint.y - this.initialSize / 2
        };
        var endPoint = {
            x: this.frame.width / 2 - this.initialSize / 2,
            y: this.frame.height / 2 - this.initialSize / 2
        };
        return {
            startPoint: startPoint,
            endPoint: endPoint
        };
    };
    MDCRippleFoundation1.prototype.runDeactivationUXLogicIfReady = function() {
        var _this = this;
        // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.
        var FG_DEACTIVATION = MDCRippleFoundation1.cssClasses.FG_DEACTIVATION;
        var _a = this.activationState, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;
        if (activationHasEnded && this.activationAnimationHasEnded) {
            this.rmBoundedActivationClasses();
            this.adapter.addClass(FG_DEACTIVATION);
            this.fgDeactivationRemovalTimer = setTimeout(function() {
                _this.adapter.removeClass(FG_DEACTIVATION);
            }, (0, $9540839d4baff811$export$1f6c9cc012ebacae).FG_DEACTIVATION_MS);
        }
    };
    MDCRippleFoundation1.prototype.rmBoundedActivationClasses = function() {
        var FG_ACTIVATION = MDCRippleFoundation1.cssClasses.FG_ACTIVATION;
        this.adapter.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded = false;
        this.adapter.computeBoundingRect();
    };
    MDCRippleFoundation1.prototype.resetActivationState = function() {
        var _this = this;
        this.previousActivationEvent = this.activationState.activationEvent;
        this.activationState = this.defaultActivationState();
        // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
        setTimeout(function() {
            return _this.previousActivationEvent = undefined;
        }, MDCRippleFoundation1.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation1.prototype.deactivateImpl = function() {
        var _this = this;
        var activationState = this.activationState;
        // This can happen in scenarios such as when you have a keyup event that blurs the element.
        if (!activationState.isActivated) return;
        var state = (0, $16e381b58a3d1b51$export$18ce0697a983be9b)({}, activationState);
        if (activationState.isProgrammatic) {
            requestAnimationFrame(function() {
                _this.animateDeactivation(state);
            });
            this.resetActivationState();
        } else {
            this.deregisterDeactivationHandlers();
            requestAnimationFrame(function() {
                _this.activationState.hasDeactivationUXRun = true;
                _this.animateDeactivation(state);
                _this.resetActivationState();
            });
        }
    };
    MDCRippleFoundation1.prototype.animateDeactivation = function(_a) {
        var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
        if (wasActivatedByPointer || wasElementMadeActive) this.runDeactivationUXLogicIfReady();
    };
    MDCRippleFoundation1.prototype.layoutInternal = function() {
        var _this = this;
        this.frame = this.adapter.computeBoundingRect();
        var maxDim = Math.max(this.frame.height, this.frame.width);
        // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.
        var getBoundedRadius = function() {
            var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
            return hypotenuse + MDCRippleFoundation1.numbers.PADDING;
        };
        this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
        var initialSize = Math.floor(maxDim * MDCRippleFoundation1.numbers.INITIAL_ORIGIN_SCALE);
        // Unbounded ripple size should always be even number to equally center align.
        if (this.adapter.isUnbounded() && initialSize % 2 !== 0) this.initialSize = initialSize - 1;
        else this.initialSize = initialSize;
        this.fgScale = "" + this.maxRadius / this.initialSize;
        this.updateLayoutCssVars();
    };
    MDCRippleFoundation1.prototype.updateLayoutCssVars = function() {
        var _a = MDCRippleFoundation1.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
        this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
        this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
        if (this.adapter.isUnbounded()) {
            this.unboundedCoords = {
                left: Math.round(this.frame.width / 2 - this.initialSize / 2),
                top: Math.round(this.frame.height / 2 - this.initialSize / 2)
            };
            this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
            this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
        }
    };
    return MDCRippleFoundation1;
}((0, $95868e8be030cef6$export$a81b11d69c993162));
var // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
$9359f45d77124ccd$export$2e2bcd8739ae039 = $9359f45d77124ccd$export$fb5f028029d92ef5;



var $21fc886e11ffd00d$export$583ca2e118aa9669 = /** @class */ function(_super) {
    (0, $16e381b58a3d1b51$export$a8ba968b8961cb8a)(MDCRipple1, _super);
    function MDCRipple1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        return _this;
    }
    MDCRipple1.attachTo = function(root, opts) {
        if (opts === void 0) opts = {
            isUnbounded: undefined
        };
        var ripple = new MDCRipple1(root);
        // Only override unbounded behavior if option is explicitly specified
        if (opts.isUnbounded !== undefined) ripple.unbounded = opts.isUnbounded;
        return ripple;
    };
    MDCRipple1.createAdapter = function(instance) {
        return {
            addClass: function(className) {
                return instance.root.classList.add(className);
            },
            browserSupportsCssVars: function() {
                return $b3bfc71a24d71d34$export$599ecc0c8c1caa3e(window);
            },
            computeBoundingRect: function() {
                return instance.root.getBoundingClientRect();
            },
            containsEventTarget: function(target) {
                return instance.root.contains(target);
            },
            deregisterDocumentInteractionHandler: function(evtType, handler) {
                return document.documentElement.removeEventListener(evtType, handler, (0, $090f00fee86c77f1$export$82e1592afef3b60f)());
            },
            deregisterInteractionHandler: function(evtType, handler) {
                return instance.root.removeEventListener(evtType, handler, (0, $090f00fee86c77f1$export$82e1592afef3b60f)());
            },
            deregisterResizeHandler: function(handler) {
                return window.removeEventListener("resize", handler);
            },
            getWindowPageOffset: function() {
                return {
                    x: window.pageXOffset,
                    y: window.pageYOffset
                };
            },
            isSurfaceActive: function() {
                return (0, $d0ad8581e3814672$export$de994efd351b291c)(instance.root, ":active");
            },
            isSurfaceDisabled: function() {
                return Boolean(instance.disabled);
            },
            isUnbounded: function() {
                return Boolean(instance.unbounded);
            },
            registerDocumentInteractionHandler: function(evtType, handler) {
                return document.documentElement.addEventListener(evtType, handler, (0, $090f00fee86c77f1$export$82e1592afef3b60f)());
            },
            registerInteractionHandler: function(evtType, handler) {
                return instance.root.addEventListener(evtType, handler, (0, $090f00fee86c77f1$export$82e1592afef3b60f)());
            },
            registerResizeHandler: function(handler) {
                return window.addEventListener("resize", handler);
            },
            removeClass: function(className) {
                return instance.root.classList.remove(className);
            },
            updateCssVariable: function(varName, value) {
                return instance.root.style.setProperty(varName, value);
            }
        };
    };
    Object.defineProperty(MDCRipple1.prototype, "unbounded", {
        get: function() {
            return Boolean(this.isUnbounded);
        },
        set: function(unbounded) {
            this.isUnbounded = Boolean(unbounded);
            this.setUnbounded();
        },
        enumerable: false,
        configurable: true
    });
    MDCRipple1.prototype.activate = function() {
        this.foundation.activate();
    };
    MDCRipple1.prototype.deactivate = function() {
        this.foundation.deactivate();
    };
    MDCRipple1.prototype.layout = function() {
        this.foundation.layout();
    };
    MDCRipple1.prototype.getDefaultFoundation = function() {
        return new (0, $9359f45d77124ccd$export$fb5f028029d92ef5)(MDCRipple1.createAdapter(this));
    };
    MDCRipple1.prototype.initialSyncWithDOM = function() {
        var root = this.root;
        this.isUnbounded = "mdcRippleIsUnbounded" in root.dataset;
    };
    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     */ MDCRipple1.prototype.setUnbounded = function() {
        this.foundation.setUnbounded(Boolean(this.isUnbounded));
    };
    return MDCRipple1;
}((0, $806bdc5abe44e68c$export$c3670872e5a4af8e));







/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var $d2797fc671bb1a59$export$c1c0562ec8379000 = {
    ROOT: "mdc-text-field-character-counter"
};
var $d2797fc671bb1a59$export$21c51bc433c16634 = {
    ROOT_SELECTOR: "." + $d2797fc671bb1a59$export$c1c0562ec8379000.ROOT
};


var $7b78e89a602d960f$export$27efdf4e3af5729d = /** @class */ function(_super) {
    (0, $16e381b58a3d1b51$export$a8ba968b8961cb8a)(MDCTextFieldCharacterCounterFoundation1, _super);
    function MDCTextFieldCharacterCounterFoundation1(adapter) {
        return _super.call(this, (0, $16e381b58a3d1b51$export$18ce0697a983be9b)((0, $16e381b58a3d1b51$export$18ce0697a983be9b)({}, MDCTextFieldCharacterCounterFoundation1.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation1, "cssClasses", {
        get: function() {
            return 0, $d2797fc671bb1a59$export$c1c0562ec8379000;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation1, "strings", {
        get: function() {
            return 0, $d2797fc671bb1a59$export$21c51bc433c16634;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation1, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldCharacterCounterAdapter} for typing information on parameters and return types.
         */ get: function() {
            return {
                setContent: function() {
                    return undefined;
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldCharacterCounterFoundation1.prototype.setCounterValue = function(currentLength, maxLength) {
        currentLength = Math.min(currentLength, maxLength);
        this.adapter.setContent(currentLength + " / " + maxLength);
    };
    return MDCTextFieldCharacterCounterFoundation1;
}((0, $95868e8be030cef6$export$a81b11d69c993162));
var // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
$7b78e89a602d960f$export$2e2bcd8739ae039 = $7b78e89a602d960f$export$27efdf4e3af5729d;


var $1142fa50548b2b0c$export$f8bd4dbb17447937 = /** @class */ function(_super) {
    (0, $16e381b58a3d1b51$export$a8ba968b8961cb8a)(MDCTextFieldCharacterCounter1, _super);
    function MDCTextFieldCharacterCounter1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextFieldCharacterCounter1.attachTo = function(root) {
        return new MDCTextFieldCharacterCounter1(root);
    };
    Object.defineProperty(MDCTextFieldCharacterCounter1.prototype, "foundationForTextField", {
        // Provided for access by MDCTextField component
        get: function() {
            return this.foundation;
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldCharacterCounter1.prototype.getDefaultFoundation = function() {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            setContent: function(content) {
                _this.root.textContent = content;
            }
        };
        return new (0, $7b78e89a602d960f$export$27efdf4e3af5729d)(adapter);
    };
    return MDCTextFieldCharacterCounter1;
}((0, $806bdc5abe44e68c$export$c3670872e5a4af8e));



/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var $75c94222a6ed6a34$export$21c51bc433c16634 = {
    ARIA_CONTROLS: "aria-controls",
    ARIA_DESCRIBEDBY: "aria-describedby",
    INPUT_SELECTOR: ".mdc-text-field__input",
    LABEL_SELECTOR: ".mdc-floating-label",
    LEADING_ICON_SELECTOR: ".mdc-text-field__icon--leading",
    LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
    OUTLINE_SELECTOR: ".mdc-notched-outline",
    PREFIX_SELECTOR: ".mdc-text-field__affix--prefix",
    SUFFIX_SELECTOR: ".mdc-text-field__affix--suffix",
    TRAILING_ICON_SELECTOR: ".mdc-text-field__icon--trailing"
};
var $75c94222a6ed6a34$export$c1c0562ec8379000 = {
    DISABLED: "mdc-text-field--disabled",
    FOCUSED: "mdc-text-field--focused",
    HELPER_LINE: "mdc-text-field-helper-line",
    INVALID: "mdc-text-field--invalid",
    LABEL_FLOATING: "mdc-text-field--label-floating",
    NO_LABEL: "mdc-text-field--no-label",
    OUTLINED: "mdc-text-field--outlined",
    ROOT: "mdc-text-field",
    TEXTAREA: "mdc-text-field--textarea",
    WITH_LEADING_ICON: "mdc-text-field--with-leading-icon",
    WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon",
    WITH_INTERNAL_COUNTER: "mdc-text-field--with-internal-counter"
};
var $75c94222a6ed6a34$export$1f6c9cc012ebacae = {
    LABEL_SCALE: 0.75
};
/**
 * Whitelist based off of
 * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
 * under the "Validation-related attributes" section.
 */ var $75c94222a6ed6a34$export$b45590aaec0cdbc6 = [
    "pattern",
    "min",
    "max",
    "required",
    "step",
    "minlength",
    "maxlength", 
];
/**
 * Label should always float for these types as they show some UI even if value
 * is empty.
 */ var $75c94222a6ed6a34$export$51a97178494bc025 = [
    "color",
    "date",
    "datetime-local",
    "month",
    "range",
    "time",
    "week", 
];





var $57085af6a888a400$var$POINTERDOWN_EVENTS = [
    "mousedown",
    "touchstart"
];
var $57085af6a888a400$var$INTERACTION_EVENTS = [
    "click",
    "keydown"
];
var $57085af6a888a400$export$e62c196cd9ca6c2c = /** @class */ function(_super) {
    (0, $16e381b58a3d1b51$export$a8ba968b8961cb8a)(MDCTextFieldFoundation1, _super);
    /**
     * @param adapter
     * @param foundationMap Map from subcomponent names to their subfoundations.
     */ function MDCTextFieldFoundation1(adapter, foundationMap) {
        if (foundationMap === void 0) foundationMap = {};
        var _this = _super.call(this, (0, $16e381b58a3d1b51$export$18ce0697a983be9b)((0, $16e381b58a3d1b51$export$18ce0697a983be9b)({}, MDCTextFieldFoundation1.defaultAdapter), adapter)) || this;
        _this.isFocused = false;
        _this.receivedUserInput = false;
        _this.valid = true;
        _this.useNativeValidation = true;
        _this.validateOnValueChange = true;
        _this.helperText = foundationMap.helperText;
        _this.characterCounter = foundationMap.characterCounter;
        _this.leadingIcon = foundationMap.leadingIcon;
        _this.trailingIcon = foundationMap.trailingIcon;
        _this.inputFocusHandler = function() {
            _this.activateFocus();
        };
        _this.inputBlurHandler = function() {
            _this.deactivateFocus();
        };
        _this.inputInputHandler = function() {
            _this.handleInput();
        };
        _this.setPointerXOffset = function(evt) {
            _this.setTransformOrigin(evt);
        };
        _this.textFieldInteractionHandler = function() {
            _this.handleTextFieldInteraction();
        };
        _this.validationAttributeChangeHandler = function(attributesList) {
            _this.handleValidationAttributeChange(attributesList);
        };
        return _this;
    }
    Object.defineProperty(MDCTextFieldFoundation1, "cssClasses", {
        get: function() {
            return 0, $75c94222a6ed6a34$export$c1c0562ec8379000;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation1, "strings", {
        get: function() {
            return 0, $75c94222a6ed6a34$export$21c51bc433c16634;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation1, "numbers", {
        get: function() {
            return 0, $75c94222a6ed6a34$export$1f6c9cc012ebacae;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation1.prototype, "shouldAlwaysFloat", {
        get: function() {
            var type = this.getNativeInput().type;
            return (0, $75c94222a6ed6a34$export$51a97178494bc025).indexOf(type) >= 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation1.prototype, "shouldFloat", {
        get: function() {
            return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() || this.isBadInput();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation1.prototype, "shouldShake", {
        get: function() {
            return !this.isFocused && !this.isValid() && !!this.getValue();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation1, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldAdapter} for typing information on parameters and
         * return types.
         */ get: function() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function() {
                    return undefined;
                },
                removeClass: function() {
                    return undefined;
                },
                hasClass: function() {
                    return true;
                },
                setInputAttr: function() {
                    return undefined;
                },
                removeInputAttr: function() {
                    return undefined;
                },
                registerTextFieldInteractionHandler: function() {
                    return undefined;
                },
                deregisterTextFieldInteractionHandler: function() {
                    return undefined;
                },
                registerInputInteractionHandler: function() {
                    return undefined;
                },
                deregisterInputInteractionHandler: function() {
                    return undefined;
                },
                registerValidationAttributeChangeHandler: function() {
                    return new MutationObserver(function() {
                        return undefined;
                    });
                },
                deregisterValidationAttributeChangeHandler: function() {
                    return undefined;
                },
                getNativeInput: function() {
                    return null;
                },
                isFocused: function() {
                    return false;
                },
                activateLineRipple: function() {
                    return undefined;
                },
                deactivateLineRipple: function() {
                    return undefined;
                },
                setLineRippleTransformOrigin: function() {
                    return undefined;
                },
                shakeLabel: function() {
                    return undefined;
                },
                floatLabel: function() {
                    return undefined;
                },
                setLabelRequired: function() {
                    return undefined;
                },
                hasLabel: function() {
                    return false;
                },
                getLabelWidth: function() {
                    return 0;
                },
                hasOutline: function() {
                    return false;
                },
                notchOutline: function() {
                    return undefined;
                },
                closeOutline: function() {
                    return undefined;
                }
            };
        // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldFoundation1.prototype.init = function() {
        var e_1, _a, e_2, _b;
        if (this.adapter.hasLabel() && this.getNativeInput().required) this.adapter.setLabelRequired(true);
        if (this.adapter.isFocused()) this.inputFocusHandler();
        else if (this.adapter.hasLabel() && this.shouldFloat) {
            this.notchOutline(true);
            this.adapter.floatLabel(true);
            this.styleFloating(true);
        }
        this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler);
        this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler);
        this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
        try {
            for(var POINTERDOWN_EVENTS_1 = (0, $16e381b58a3d1b51$export$19a8beecd37a4c45)($57085af6a888a400$var$POINTERDOWN_EVENTS), POINTERDOWN_EVENTS_1_1 = POINTERDOWN_EVENTS_1.next(); !POINTERDOWN_EVENTS_1_1.done; POINTERDOWN_EVENTS_1_1 = POINTERDOWN_EVENTS_1.next()){
                var evtType = POINTERDOWN_EVENTS_1_1.value;
                this.adapter.registerInputInteractionHandler(evtType, this.setPointerXOffset);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (POINTERDOWN_EVENTS_1_1 && !POINTERDOWN_EVENTS_1_1.done && (_a = POINTERDOWN_EVENTS_1.return)) _a.call(POINTERDOWN_EVENTS_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        try {
            for(var INTERACTION_EVENTS_1 = (0, $16e381b58a3d1b51$export$19a8beecd37a4c45)($57085af6a888a400$var$INTERACTION_EVENTS), INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next(); !INTERACTION_EVENTS_1_1.done; INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next()){
                var evtType = INTERACTION_EVENTS_1_1.value;
                this.adapter.registerTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
            }
        } catch (e_2_1) {
            e_2 = {
                error: e_2_1
            };
        } finally{
            try {
                if (INTERACTION_EVENTS_1_1 && !INTERACTION_EVENTS_1_1.done && (_b = INTERACTION_EVENTS_1.return)) _b.call(INTERACTION_EVENTS_1);
            } finally{
                if (e_2) throw e_2.error;
            }
        }
        this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler);
        this.setcharacterCounter(this.getValue().length);
    };
    MDCTextFieldFoundation1.prototype.destroy = function() {
        var e_3, _a, e_4, _b;
        this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler);
        this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler);
        this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
        try {
            for(var POINTERDOWN_EVENTS_2 = (0, $16e381b58a3d1b51$export$19a8beecd37a4c45)($57085af6a888a400$var$POINTERDOWN_EVENTS), POINTERDOWN_EVENTS_2_1 = POINTERDOWN_EVENTS_2.next(); !POINTERDOWN_EVENTS_2_1.done; POINTERDOWN_EVENTS_2_1 = POINTERDOWN_EVENTS_2.next()){
                var evtType = POINTERDOWN_EVENTS_2_1.value;
                this.adapter.deregisterInputInteractionHandler(evtType, this.setPointerXOffset);
            }
        } catch (e_3_1) {
            e_3 = {
                error: e_3_1
            };
        } finally{
            try {
                if (POINTERDOWN_EVENTS_2_1 && !POINTERDOWN_EVENTS_2_1.done && (_a = POINTERDOWN_EVENTS_2.return)) _a.call(POINTERDOWN_EVENTS_2);
            } finally{
                if (e_3) throw e_3.error;
            }
        }
        try {
            for(var INTERACTION_EVENTS_2 = (0, $16e381b58a3d1b51$export$19a8beecd37a4c45)($57085af6a888a400$var$INTERACTION_EVENTS), INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next(); !INTERACTION_EVENTS_2_1.done; INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next()){
                var evtType = INTERACTION_EVENTS_2_1.value;
                this.adapter.deregisterTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
            }
        } catch (e_4_1) {
            e_4 = {
                error: e_4_1
            };
        } finally{
            try {
                if (INTERACTION_EVENTS_2_1 && !INTERACTION_EVENTS_2_1.done && (_b = INTERACTION_EVENTS_2.return)) _b.call(INTERACTION_EVENTS_2);
            } finally{
                if (e_4) throw e_4.error;
            }
        }
        this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    };
    /**
     * Handles user interactions with the Text Field.
     */ MDCTextFieldFoundation1.prototype.handleTextFieldInteraction = function() {
        var nativeInput = this.adapter.getNativeInput();
        if (nativeInput && nativeInput.disabled) return;
        this.receivedUserInput = true;
    };
    /**
     * Handles validation attribute changes
     */ MDCTextFieldFoundation1.prototype.handleValidationAttributeChange = function(attributesList) {
        var _this = this;
        attributesList.some(function(attributeName) {
            if ((0, $75c94222a6ed6a34$export$b45590aaec0cdbc6).indexOf(attributeName) > -1) {
                _this.styleValidity(true);
                _this.adapter.setLabelRequired(_this.getNativeInput().required);
                return true;
            }
            return false;
        });
        if (attributesList.indexOf("maxlength") > -1) this.setcharacterCounter(this.getValue().length);
    };
    /**
     * Opens/closes the notched outline.
     */ MDCTextFieldFoundation1.prototype.notchOutline = function(openNotch) {
        if (!this.adapter.hasOutline() || !this.adapter.hasLabel()) return;
        if (openNotch) {
            var labelWidth = this.adapter.getLabelWidth() * (0, $75c94222a6ed6a34$export$1f6c9cc012ebacae).LABEL_SCALE;
            this.adapter.notchOutline(labelWidth);
        } else this.adapter.closeOutline();
    };
    /**
     * Activates the text field focus state.
     */ MDCTextFieldFoundation1.prototype.activateFocus = function() {
        this.isFocused = true;
        this.styleFocused(this.isFocused);
        this.adapter.activateLineRipple();
        if (this.adapter.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter.floatLabel(this.shouldFloat);
            this.styleFloating(this.shouldFloat);
            this.adapter.shakeLabel(this.shouldShake);
        }
        if (this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid)) this.helperText.showToScreenReader();
    };
    /**
     * Sets the line ripple's transform origin, so that the line ripple activate
     * animation will animate out from the user's click location.
     */ MDCTextFieldFoundation1.prototype.setTransformOrigin = function(evt) {
        if (this.isDisabled() || this.adapter.hasOutline()) return;
        var touches = evt.touches;
        var targetEvent = touches ? touches[0] : evt;
        var targetClientRect = targetEvent.target.getBoundingClientRect();
        var normalizedX = targetEvent.clientX - targetClientRect.left;
        this.adapter.setLineRippleTransformOrigin(normalizedX);
    };
    /**
     * Handles input change of text input and text area.
     */ MDCTextFieldFoundation1.prototype.handleInput = function() {
        this.autoCompleteFocus();
        this.setcharacterCounter(this.getValue().length);
    };
    /**
     * Activates the Text Field's focus state in cases when the input value
     * changes without user input (e.g. programmatically).
     */ MDCTextFieldFoundation1.prototype.autoCompleteFocus = function() {
        if (!this.receivedUserInput) this.activateFocus();
    };
    /**
     * Deactivates the Text Field's focus state.
     */ MDCTextFieldFoundation1.prototype.deactivateFocus = function() {
        this.isFocused = false;
        this.adapter.deactivateLineRipple();
        var isValid = this.isValid();
        this.styleValidity(isValid);
        this.styleFocused(this.isFocused);
        if (this.adapter.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter.floatLabel(this.shouldFloat);
            this.styleFloating(this.shouldFloat);
            this.adapter.shakeLabel(this.shouldShake);
        }
        if (!this.shouldFloat) this.receivedUserInput = false;
    };
    MDCTextFieldFoundation1.prototype.getValue = function() {
        return this.getNativeInput().value;
    };
    /**
     * @param value The value to set on the input Element.
     */ MDCTextFieldFoundation1.prototype.setValue = function(value) {
        // Prevent Safari from moving the caret to the end of the input when the
        // value has not changed.
        if (this.getValue() !== value) this.getNativeInput().value = value;
        this.setcharacterCounter(value.length);
        if (this.validateOnValueChange) {
            var isValid = this.isValid();
            this.styleValidity(isValid);
        }
        if (this.adapter.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter.floatLabel(this.shouldFloat);
            this.styleFloating(this.shouldFloat);
            if (this.validateOnValueChange) this.adapter.shakeLabel(this.shouldShake);
        }
    };
    /**
     * @return The custom validity state, if set; otherwise, the result of a
     *     native validity check.
     */ MDCTextFieldFoundation1.prototype.isValid = function() {
        return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    };
    /**
     * @param isValid Sets the custom validity state of the Text Field.
     */ MDCTextFieldFoundation1.prototype.setValid = function(isValid) {
        this.valid = isValid;
        this.styleValidity(isValid);
        var shouldShake = !isValid && !this.isFocused && !!this.getValue();
        if (this.adapter.hasLabel()) this.adapter.shakeLabel(shouldShake);
    };
    /**
     * @param shouldValidate Whether or not validity should be updated on
     *     value change.
     */ MDCTextFieldFoundation1.prototype.setValidateOnValueChange = function(shouldValidate) {
        this.validateOnValueChange = shouldValidate;
    };
    /**
     * @return Whether or not validity should be updated on value change. `true`
     *     by default.
     */ MDCTextFieldFoundation1.prototype.getValidateOnValueChange = function() {
        return this.validateOnValueChange;
    };
    /**
     * Enables or disables the use of native validation. Use this for custom
     * validation.
     * @param useNativeValidation Set this to false to ignore native input
     *     validation.
     */ MDCTextFieldFoundation1.prototype.setUseNativeValidation = function(useNativeValidation) {
        this.useNativeValidation = useNativeValidation;
    };
    MDCTextFieldFoundation1.prototype.isDisabled = function() {
        return this.getNativeInput().disabled;
    };
    /**
     * @param disabled Sets the text-field disabled or enabled.
     */ MDCTextFieldFoundation1.prototype.setDisabled = function(disabled) {
        this.getNativeInput().disabled = disabled;
        this.styleDisabled(disabled);
    };
    /**
     * @param content Sets the content of the helper text.
     */ MDCTextFieldFoundation1.prototype.setHelperTextContent = function(content) {
        if (this.helperText) this.helperText.setContent(content);
    };
    /**
     * Sets the aria label of the leading icon.
     */ MDCTextFieldFoundation1.prototype.setLeadingIconAriaLabel = function(label) {
        if (this.leadingIcon) this.leadingIcon.setAriaLabel(label);
    };
    /**
     * Sets the text content of the leading icon.
     */ MDCTextFieldFoundation1.prototype.setLeadingIconContent = function(content) {
        if (this.leadingIcon) this.leadingIcon.setContent(content);
    };
    /**
     * Sets the aria label of the trailing icon.
     */ MDCTextFieldFoundation1.prototype.setTrailingIconAriaLabel = function(label) {
        if (this.trailingIcon) this.trailingIcon.setAriaLabel(label);
    };
    /**
     * Sets the text content of the trailing icon.
     */ MDCTextFieldFoundation1.prototype.setTrailingIconContent = function(content) {
        if (this.trailingIcon) this.trailingIcon.setContent(content);
    };
    /**
     * Sets character counter values that shows characters used and the total
     * character limit.
     */ MDCTextFieldFoundation1.prototype.setcharacterCounter = function(currentLength) {
        if (!this.characterCounter) return;
        var maxLength = this.getNativeInput().maxLength;
        if (maxLength === -1) throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
        this.characterCounter.setCounterValue(currentLength, maxLength);
    };
    /**
     * @return True if the Text Field input fails in converting the user-supplied
     *     value.
     */ MDCTextFieldFoundation1.prototype.isBadInput = function() {
        // The badInput property is not supported in IE 11 💩.
        return this.getNativeInput().validity.badInput || false;
    };
    /**
     * @return The result of native validity checking (ValidityState.valid).
     */ MDCTextFieldFoundation1.prototype.isNativeInputValid = function() {
        return this.getNativeInput().validity.valid;
    };
    /**
     * Styles the component based on the validity state.
     */ MDCTextFieldFoundation1.prototype.styleValidity = function(isValid) {
        var INVALID = MDCTextFieldFoundation1.cssClasses.INVALID;
        if (isValid) this.adapter.removeClass(INVALID);
        else this.adapter.addClass(INVALID);
        if (this.helperText) {
            this.helperText.setValidity(isValid);
            // We dynamically set or unset aria-describedby for validation helper text
            // only, based on whether the field is valid
            var helperTextValidation = this.helperText.isValidation();
            if (!helperTextValidation) return;
            var helperTextVisible = this.helperText.isVisible();
            var helperTextId = this.helperText.getId();
            if (helperTextVisible && helperTextId) this.adapter.setInputAttr((0, $75c94222a6ed6a34$export$21c51bc433c16634).ARIA_DESCRIBEDBY, helperTextId);
            else this.adapter.removeInputAttr((0, $75c94222a6ed6a34$export$21c51bc433c16634).ARIA_DESCRIBEDBY);
        }
    };
    /**
     * Styles the component based on the focused state.
     */ MDCTextFieldFoundation1.prototype.styleFocused = function(isFocused) {
        var FOCUSED = MDCTextFieldFoundation1.cssClasses.FOCUSED;
        if (isFocused) this.adapter.addClass(FOCUSED);
        else this.adapter.removeClass(FOCUSED);
    };
    /**
     * Styles the component based on the disabled state.
     */ MDCTextFieldFoundation1.prototype.styleDisabled = function(isDisabled) {
        var _a = MDCTextFieldFoundation1.cssClasses, DISABLED = _a.DISABLED, INVALID = _a.INVALID;
        if (isDisabled) {
            this.adapter.addClass(DISABLED);
            this.adapter.removeClass(INVALID);
        } else this.adapter.removeClass(DISABLED);
        if (this.leadingIcon) this.leadingIcon.setDisabled(isDisabled);
        if (this.trailingIcon) this.trailingIcon.setDisabled(isDisabled);
    };
    /**
     * Styles the component based on the label floating state.
     */ MDCTextFieldFoundation1.prototype.styleFloating = function(isFloating) {
        var LABEL_FLOATING = MDCTextFieldFoundation1.cssClasses.LABEL_FLOATING;
        if (isFloating) this.adapter.addClass(LABEL_FLOATING);
        else this.adapter.removeClass(LABEL_FLOATING);
    };
    /**
     * @return The native text input element from the host environment, or an
     *     object with the same shape for unit tests.
     */ MDCTextFieldFoundation1.prototype.getNativeInput = function() {
        // this.adapter may be undefined in foundation unit tests. This happens when
        // testdouble is creating a mock object and invokes the
        // shouldShake/shouldFloat getters (which in turn call getValue(), which
        // calls this method) before init() has been called from the MDCTextField
        // constructor. To work around that issue, we return a dummy object.
        var nativeInput = this.adapter ? this.adapter.getNativeInput() : null;
        return nativeInput || {
            disabled: false,
            maxLength: -1,
            required: false,
            type: "input",
            validity: {
                badInput: false,
                valid: true
            },
            value: ""
        };
    };
    return MDCTextFieldFoundation1;
}((0, $95868e8be030cef6$export$a81b11d69c993162));
var // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
$57085af6a888a400$export$2e2bcd8739ae039 = $57085af6a888a400$export$e62c196cd9ca6c2c;






/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var $fbd76a0f3c9d9a68$export$c1c0562ec8379000 = {
    HELPER_TEXT_PERSISTENT: "mdc-text-field-helper-text--persistent",
    HELPER_TEXT_VALIDATION_MSG: "mdc-text-field-helper-text--validation-msg",
    ROOT: "mdc-text-field-helper-text"
};
var $fbd76a0f3c9d9a68$export$21c51bc433c16634 = {
    ARIA_HIDDEN: "aria-hidden",
    ROLE: "role",
    ROOT_SELECTOR: "." + $fbd76a0f3c9d9a68$export$c1c0562ec8379000.ROOT
};


var $2d722c596beb7238$export$e07453e7c9edf74b = /** @class */ function(_super) {
    (0, $16e381b58a3d1b51$export$a8ba968b8961cb8a)(MDCTextFieldHelperTextFoundation1, _super);
    function MDCTextFieldHelperTextFoundation1(adapter) {
        return _super.call(this, (0, $16e381b58a3d1b51$export$18ce0697a983be9b)((0, $16e381b58a3d1b51$export$18ce0697a983be9b)({}, MDCTextFieldHelperTextFoundation1.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCTextFieldHelperTextFoundation1, "cssClasses", {
        get: function() {
            return 0, $fbd76a0f3c9d9a68$export$c1c0562ec8379000;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldHelperTextFoundation1, "strings", {
        get: function() {
            return 0, $fbd76a0f3c9d9a68$export$21c51bc433c16634;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldHelperTextFoundation1, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldHelperTextAdapter} for typing information on parameters and return types.
         */ get: function() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function() {
                    return undefined;
                },
                removeClass: function() {
                    return undefined;
                },
                hasClass: function() {
                    return false;
                },
                getAttr: function() {
                    return null;
                },
                setAttr: function() {
                    return undefined;
                },
                removeAttr: function() {
                    return undefined;
                },
                setContent: function() {
                    return undefined;
                }
            };
        // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldHelperTextFoundation1.prototype.getId = function() {
        return this.adapter.getAttr("id");
    };
    MDCTextFieldHelperTextFoundation1.prototype.isVisible = function() {
        return this.adapter.getAttr((0, $fbd76a0f3c9d9a68$export$21c51bc433c16634).ARIA_HIDDEN) !== "true";
    };
    /**
     * Sets the content of the helper text field.
     */ MDCTextFieldHelperTextFoundation1.prototype.setContent = function(content) {
        this.adapter.setContent(content);
    };
    MDCTextFieldHelperTextFoundation1.prototype.isPersistent = function() {
        return this.adapter.hasClass((0, $fbd76a0f3c9d9a68$export$c1c0562ec8379000).HELPER_TEXT_PERSISTENT);
    };
    /**
     * @param isPersistent Sets the persistency of the helper text.
     */ MDCTextFieldHelperTextFoundation1.prototype.setPersistent = function(isPersistent) {
        if (isPersistent) this.adapter.addClass((0, $fbd76a0f3c9d9a68$export$c1c0562ec8379000).HELPER_TEXT_PERSISTENT);
        else this.adapter.removeClass((0, $fbd76a0f3c9d9a68$export$c1c0562ec8379000).HELPER_TEXT_PERSISTENT);
    };
    /**
     * @return whether the helper text acts as an error validation message.
     */ MDCTextFieldHelperTextFoundation1.prototype.isValidation = function() {
        return this.adapter.hasClass((0, $fbd76a0f3c9d9a68$export$c1c0562ec8379000).HELPER_TEXT_VALIDATION_MSG);
    };
    /**
     * @param isValidation True to make the helper text act as an error validation message.
     */ MDCTextFieldHelperTextFoundation1.prototype.setValidation = function(isValidation) {
        if (isValidation) this.adapter.addClass((0, $fbd76a0f3c9d9a68$export$c1c0562ec8379000).HELPER_TEXT_VALIDATION_MSG);
        else this.adapter.removeClass((0, $fbd76a0f3c9d9a68$export$c1c0562ec8379000).HELPER_TEXT_VALIDATION_MSG);
    };
    /**
     * Makes the helper text visible to the screen reader.
     */ MDCTextFieldHelperTextFoundation1.prototype.showToScreenReader = function() {
        this.adapter.removeAttr((0, $fbd76a0f3c9d9a68$export$21c51bc433c16634).ARIA_HIDDEN);
    };
    /**
     * Sets the validity of the helper text based on the input validity.
     */ MDCTextFieldHelperTextFoundation1.prototype.setValidity = function(inputIsValid) {
        var helperTextIsPersistent = this.adapter.hasClass((0, $fbd76a0f3c9d9a68$export$c1c0562ec8379000).HELPER_TEXT_PERSISTENT);
        var helperTextIsValidationMsg = this.adapter.hasClass((0, $fbd76a0f3c9d9a68$export$c1c0562ec8379000).HELPER_TEXT_VALIDATION_MSG);
        var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;
        if (validationMsgNeedsDisplay) {
            this.showToScreenReader();
            // If role is already alert, refresh it to trigger another announcement
            // from screenreader.
            if (this.adapter.getAttr((0, $fbd76a0f3c9d9a68$export$21c51bc433c16634).ROLE) === "alert") this.refreshAlertRole();
            else this.adapter.setAttr((0, $fbd76a0f3c9d9a68$export$21c51bc433c16634).ROLE, "alert");
        } else this.adapter.removeAttr((0, $fbd76a0f3c9d9a68$export$21c51bc433c16634).ROLE);
        if (!helperTextIsPersistent && !validationMsgNeedsDisplay) this.hide();
    };
    /**
     * Hides the help text from screen readers.
     */ MDCTextFieldHelperTextFoundation1.prototype.hide = function() {
        this.adapter.setAttr((0, $fbd76a0f3c9d9a68$export$21c51bc433c16634).ARIA_HIDDEN, "true");
    };
    MDCTextFieldHelperTextFoundation1.prototype.refreshAlertRole = function() {
        var _this = this;
        this.adapter.removeAttr((0, $fbd76a0f3c9d9a68$export$21c51bc433c16634).ROLE);
        requestAnimationFrame(function() {
            _this.adapter.setAttr((0, $fbd76a0f3c9d9a68$export$21c51bc433c16634).ROLE, "alert");
        });
    };
    return MDCTextFieldHelperTextFoundation1;
}((0, $95868e8be030cef6$export$a81b11d69c993162));
var // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
$2d722c596beb7238$export$2e2bcd8739ae039 = $2d722c596beb7238$export$e07453e7c9edf74b;


var $5c8576d0bb20421f$export$325d864b20638bc4 = /** @class */ function(_super) {
    (0, $16e381b58a3d1b51$export$a8ba968b8961cb8a)(MDCTextFieldHelperText1, _super);
    function MDCTextFieldHelperText1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextFieldHelperText1.attachTo = function(root) {
        return new MDCTextFieldHelperText1(root);
    };
    Object.defineProperty(MDCTextFieldHelperText1.prototype, "foundationForTextField", {
        // Provided for access by MDCTextField component
        get: function() {
            return this.foundation;
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldHelperText1.prototype.getDefaultFoundation = function() {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function(className) {
                return _this.root.classList.add(className);
            },
            removeClass: function(className) {
                return _this.root.classList.remove(className);
            },
            hasClass: function(className) {
                return _this.root.classList.contains(className);
            },
            getAttr: function(attr) {
                return _this.root.getAttribute(attr);
            },
            setAttr: function(attr, value) {
                return _this.root.setAttribute(attr, value);
            },
            removeAttr: function(attr) {
                return _this.root.removeAttribute(attr);
            },
            setContent: function(content) {
                _this.root.textContent = content;
            }
        };
        // tslint:enable:object-literal-sort-keys
        return new (0, $2d722c596beb7238$export$e07453e7c9edf74b)(adapter);
    };
    return MDCTextFieldHelperText1;
}((0, $806bdc5abe44e68c$export$c3670872e5a4af8e));







/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var $8362a9a2257e4154$export$21c51bc433c16634 = {
    ICON_EVENT: "MDCTextField:icon",
    ICON_ROLE: "button"
};
var $8362a9a2257e4154$export$c1c0562ec8379000 = {
    ROOT: "mdc-text-field__icon"
};


var $8bbc99a0a3a732ba$var$INTERACTION_EVENTS = [
    "click",
    "keydown"
];
var $8bbc99a0a3a732ba$export$146409469202754b = /** @class */ function(_super) {
    (0, $16e381b58a3d1b51$export$a8ba968b8961cb8a)(MDCTextFieldIconFoundation1, _super);
    function MDCTextFieldIconFoundation1(adapter) {
        var _this = _super.call(this, (0, $16e381b58a3d1b51$export$18ce0697a983be9b)((0, $16e381b58a3d1b51$export$18ce0697a983be9b)({}, MDCTextFieldIconFoundation1.defaultAdapter), adapter)) || this;
        _this.savedTabIndex = null;
        _this.interactionHandler = function(evt) {
            _this.handleInteraction(evt);
        };
        return _this;
    }
    Object.defineProperty(MDCTextFieldIconFoundation1, "strings", {
        get: function() {
            return 0, $8362a9a2257e4154$export$21c51bc433c16634;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldIconFoundation1, "cssClasses", {
        get: function() {
            return 0, $8362a9a2257e4154$export$c1c0562ec8379000;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldIconFoundation1, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldIconAdapter} for typing information on parameters and return types.
         */ get: function() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                getAttr: function() {
                    return null;
                },
                setAttr: function() {
                    return undefined;
                },
                removeAttr: function() {
                    return undefined;
                },
                setContent: function() {
                    return undefined;
                },
                registerInteractionHandler: function() {
                    return undefined;
                },
                deregisterInteractionHandler: function() {
                    return undefined;
                },
                notifyIconAction: function() {
                    return undefined;
                }
            };
        // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldIconFoundation1.prototype.init = function() {
        var e_1, _a;
        this.savedTabIndex = this.adapter.getAttr("tabindex");
        try {
            for(var INTERACTION_EVENTS_1 = (0, $16e381b58a3d1b51$export$19a8beecd37a4c45)($8bbc99a0a3a732ba$var$INTERACTION_EVENTS), INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next(); !INTERACTION_EVENTS_1_1.done; INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next()){
                var evtType = INTERACTION_EVENTS_1_1.value;
                this.adapter.registerInteractionHandler(evtType, this.interactionHandler);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (INTERACTION_EVENTS_1_1 && !INTERACTION_EVENTS_1_1.done && (_a = INTERACTION_EVENTS_1.return)) _a.call(INTERACTION_EVENTS_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
    };
    MDCTextFieldIconFoundation1.prototype.destroy = function() {
        var e_2, _a;
        try {
            for(var INTERACTION_EVENTS_2 = (0, $16e381b58a3d1b51$export$19a8beecd37a4c45)($8bbc99a0a3a732ba$var$INTERACTION_EVENTS), INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next(); !INTERACTION_EVENTS_2_1.done; INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next()){
                var evtType = INTERACTION_EVENTS_2_1.value;
                this.adapter.deregisterInteractionHandler(evtType, this.interactionHandler);
            }
        } catch (e_2_1) {
            e_2 = {
                error: e_2_1
            };
        } finally{
            try {
                if (INTERACTION_EVENTS_2_1 && !INTERACTION_EVENTS_2_1.done && (_a = INTERACTION_EVENTS_2.return)) _a.call(INTERACTION_EVENTS_2);
            } finally{
                if (e_2) throw e_2.error;
            }
        }
    };
    MDCTextFieldIconFoundation1.prototype.setDisabled = function(disabled) {
        if (!this.savedTabIndex) return;
        if (disabled) {
            this.adapter.setAttr("tabindex", "-1");
            this.adapter.removeAttr("role");
        } else {
            this.adapter.setAttr("tabindex", this.savedTabIndex);
            this.adapter.setAttr("role", (0, $8362a9a2257e4154$export$21c51bc433c16634).ICON_ROLE);
        }
    };
    MDCTextFieldIconFoundation1.prototype.setAriaLabel = function(label) {
        this.adapter.setAttr("aria-label", label);
    };
    MDCTextFieldIconFoundation1.prototype.setContent = function(content) {
        this.adapter.setContent(content);
    };
    MDCTextFieldIconFoundation1.prototype.handleInteraction = function(evt) {
        var isEnterKey = evt.key === "Enter" || evt.keyCode === 13;
        if (evt.type === "click" || isEnterKey) {
            evt.preventDefault(); // stop click from causing host label to focus
            // input
            this.adapter.notifyIconAction();
        }
    };
    return MDCTextFieldIconFoundation1;
}((0, $95868e8be030cef6$export$a81b11d69c993162));
var // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
$8bbc99a0a3a732ba$export$2e2bcd8739ae039 = $8bbc99a0a3a732ba$export$146409469202754b;


var $a00881d11c86e7f7$export$6db271eca0d4404c = /** @class */ function(_super) {
    (0, $16e381b58a3d1b51$export$a8ba968b8961cb8a)(MDCTextFieldIcon1, _super);
    function MDCTextFieldIcon1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextFieldIcon1.attachTo = function(root) {
        return new MDCTextFieldIcon1(root);
    };
    Object.defineProperty(MDCTextFieldIcon1.prototype, "foundationForTextField", {
        // Provided for access by MDCTextField component
        get: function() {
            return this.foundation;
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldIcon1.prototype.getDefaultFoundation = function() {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            getAttr: function(attr) {
                return _this.root.getAttribute(attr);
            },
            setAttr: function(attr, value) {
                return _this.root.setAttribute(attr, value);
            },
            removeAttr: function(attr) {
                return _this.root.removeAttribute(attr);
            },
            setContent: function(content) {
                _this.root.textContent = content;
            },
            registerInteractionHandler: function(evtType, handler) {
                return _this.listen(evtType, handler);
            },
            deregisterInteractionHandler: function(evtType, handler) {
                return _this.unlisten(evtType, handler);
            },
            notifyIconAction: function() {
                return _this.emit((0, $8bbc99a0a3a732ba$export$146409469202754b).strings.ICON_EVENT, {} /* evtData */ , true);
            }
        };
        // tslint:enable:object-literal-sort-keys
        return new (0, $8bbc99a0a3a732ba$export$146409469202754b)(adapter);
    };
    return MDCTextFieldIcon1;
}((0, $806bdc5abe44e68c$export$c3670872e5a4af8e));


var $f9f797d2adda2586$export$a04d92ca833e40dd = /** @class */ function(_super) {
    (0, $16e381b58a3d1b51$export$a8ba968b8961cb8a)(MDCTextField1, _super);
    function MDCTextField1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextField1.attachTo = function(root) {
        return new MDCTextField1(root);
    };
    MDCTextField1.prototype.initialize = function(rippleFactory, lineRippleFactory, helperTextFactory, characterCounterFactory, iconFactory, labelFactory, outlineFactory) {
        if (rippleFactory === void 0) rippleFactory = function(el, foundation) {
            return new (0, $21fc886e11ffd00d$export$583ca2e118aa9669)(el, foundation);
        };
        if (lineRippleFactory === void 0) lineRippleFactory = function(el) {
            return new (0, $e439909646f42de1$export$3b3bb7435b241cc2)(el);
        };
        if (helperTextFactory === void 0) helperTextFactory = function(el) {
            return new (0, $5c8576d0bb20421f$export$325d864b20638bc4)(el);
        };
        if (characterCounterFactory === void 0) characterCounterFactory = function(el) {
            return new (0, $1142fa50548b2b0c$export$f8bd4dbb17447937)(el);
        };
        if (iconFactory === void 0) iconFactory = function(el) {
            return new (0, $a00881d11c86e7f7$export$6db271eca0d4404c)(el);
        };
        if (labelFactory === void 0) labelFactory = function(el) {
            return new (0, $2bd21098bb8c03d9$export$3a4076b02149b105)(el);
        };
        if (outlineFactory === void 0) outlineFactory = function(el) {
            return new (0, $eae209998f1e4198$export$260070b3fef46e93)(el);
        };
        this.input = this.root.querySelector((0, $75c94222a6ed6a34$export$21c51bc433c16634).INPUT_SELECTOR);
        var labelElement = this.root.querySelector((0, $75c94222a6ed6a34$export$21c51bc433c16634).LABEL_SELECTOR);
        this.label = labelElement ? labelFactory(labelElement) : null;
        var lineRippleElement = this.root.querySelector((0, $75c94222a6ed6a34$export$21c51bc433c16634).LINE_RIPPLE_SELECTOR);
        this.lineRipple = lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
        var outlineElement = this.root.querySelector((0, $75c94222a6ed6a34$export$21c51bc433c16634).OUTLINE_SELECTOR);
        this.outline = outlineElement ? outlineFactory(outlineElement) : null;
        // Helper text
        var helperTextStrings = (0, $2d722c596beb7238$export$e07453e7c9edf74b).strings;
        var nextElementSibling = this.root.nextElementSibling;
        var hasHelperLine = nextElementSibling && nextElementSibling.classList.contains((0, $75c94222a6ed6a34$export$c1c0562ec8379000).HELPER_LINE);
        var helperTextEl = hasHelperLine && nextElementSibling && nextElementSibling.querySelector(helperTextStrings.ROOT_SELECTOR);
        this.helperText = helperTextEl ? helperTextFactory(helperTextEl) : null;
        // Character counter
        var characterCounterStrings = (0, $7b78e89a602d960f$export$27efdf4e3af5729d).strings;
        var characterCounterEl = this.root.querySelector(characterCounterStrings.ROOT_SELECTOR);
        // If character counter is not found in root element search in sibling element.
        if (!characterCounterEl && hasHelperLine && nextElementSibling) characterCounterEl = nextElementSibling.querySelector(characterCounterStrings.ROOT_SELECTOR);
        this.characterCounter = characterCounterEl ? characterCounterFactory(characterCounterEl) : null;
        // Leading icon
        var leadingIconEl = this.root.querySelector((0, $75c94222a6ed6a34$export$21c51bc433c16634).LEADING_ICON_SELECTOR);
        this.leadingIcon = leadingIconEl ? iconFactory(leadingIconEl) : null;
        // Trailing icon
        var trailingIconEl = this.root.querySelector((0, $75c94222a6ed6a34$export$21c51bc433c16634).TRAILING_ICON_SELECTOR);
        this.trailingIcon = trailingIconEl ? iconFactory(trailingIconEl) : null;
        // Prefix and Suffix
        this.prefix = this.root.querySelector((0, $75c94222a6ed6a34$export$21c51bc433c16634).PREFIX_SELECTOR);
        this.suffix = this.root.querySelector((0, $75c94222a6ed6a34$export$21c51bc433c16634).SUFFIX_SELECTOR);
        this.ripple = this.createRipple(rippleFactory);
    };
    MDCTextField1.prototype.destroy = function() {
        if (this.ripple) this.ripple.destroy();
        if (this.lineRipple) this.lineRipple.destroy();
        if (this.helperText) this.helperText.destroy();
        if (this.characterCounter) this.characterCounter.destroy();
        if (this.leadingIcon) this.leadingIcon.destroy();
        if (this.trailingIcon) this.trailingIcon.destroy();
        if (this.label) this.label.destroy();
        if (this.outline) this.outline.destroy();
        _super.prototype.destroy.call(this);
    };
    /**
     * Initializes the Text Field's internal state based on the environment's
     * state.
     */ MDCTextField1.prototype.initialSyncWithDOM = function() {
        this.disabled = this.input.disabled;
    };
    Object.defineProperty(MDCTextField1.prototype, "value", {
        get: function() {
            return this.foundation.getValue();
        },
        /**
         * @param value The value to set on the input.
         */ set: function(value) {
            this.foundation.setValue(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "disabled", {
        get: function() {
            return this.foundation.isDisabled();
        },
        /**
         * @param disabled Sets the Text Field disabled or enabled.
         */ set: function(disabled) {
            this.foundation.setDisabled(disabled);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "valid", {
        get: function() {
            return this.foundation.isValid();
        },
        /**
         * @param valid Sets the Text Field valid or invalid.
         */ set: function(valid) {
            this.foundation.setValid(valid);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "required", {
        get: function() {
            return this.input.required;
        },
        /**
         * @param required Sets the Text Field to required.
         */ set: function(required) {
            this.input.required = required;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "pattern", {
        get: function() {
            return this.input.pattern;
        },
        /**
         * @param pattern Sets the input element's validation pattern.
         */ set: function(pattern) {
            this.input.pattern = pattern;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "minLength", {
        get: function() {
            return this.input.minLength;
        },
        /**
         * @param minLength Sets the input element's minLength.
         */ set: function(minLength) {
            this.input.minLength = minLength;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "maxLength", {
        get: function() {
            return this.input.maxLength;
        },
        /**
         * @param maxLength Sets the input element's maxLength.
         */ set: function(maxLength) {
            // Chrome throws exception if maxLength is set to a value less than zero
            if (maxLength < 0) this.input.removeAttribute("maxLength");
            else this.input.maxLength = maxLength;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "min", {
        get: function() {
            return this.input.min;
        },
        /**
         * @param min Sets the input element's min.
         */ set: function(min) {
            this.input.min = min;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "max", {
        get: function() {
            return this.input.max;
        },
        /**
         * @param max Sets the input element's max.
         */ set: function(max) {
            this.input.max = max;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "step", {
        get: function() {
            return this.input.step;
        },
        /**
         * @param step Sets the input element's step.
         */ set: function(step) {
            this.input.step = step;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "helperTextContent", {
        /**
         * Sets the helper text element content.
         */ set: function(content) {
            this.foundation.setHelperTextContent(content);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "leadingIconAriaLabel", {
        /**
         * Sets the aria label of the leading icon.
         */ set: function(label) {
            this.foundation.setLeadingIconAriaLabel(label);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "leadingIconContent", {
        /**
         * Sets the text content of the leading icon.
         */ set: function(content) {
            this.foundation.setLeadingIconContent(content);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "trailingIconAriaLabel", {
        /**
         * Sets the aria label of the trailing icon.
         */ set: function(label) {
            this.foundation.setTrailingIconAriaLabel(label);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "trailingIconContent", {
        /**
         * Sets the text content of the trailing icon.
         */ set: function(content) {
            this.foundation.setTrailingIconContent(content);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "useNativeValidation", {
        /**
         * Enables or disables the use of native validation. Use this for custom validation.
         * @param useNativeValidation Set this to false to ignore native input validation.
         */ set: function(useNativeValidation) {
            this.foundation.setUseNativeValidation(useNativeValidation);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "prefixText", {
        /**
         * Gets the text content of the prefix, or null if it does not exist.
         */ get: function() {
            return this.prefix ? this.prefix.textContent : null;
        },
        /**
         * Sets the text content of the prefix, if it exists.
         */ set: function(prefixText) {
            if (this.prefix) this.prefix.textContent = prefixText;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "suffixText", {
        /**
         * Gets the text content of the suffix, or null if it does not exist.
         */ get: function() {
            return this.suffix ? this.suffix.textContent : null;
        },
        /**
         * Sets the text content of the suffix, if it exists.
         */ set: function(suffixText) {
            if (this.suffix) this.suffix.textContent = suffixText;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Focuses the input element.
     */ MDCTextField1.prototype.focus = function() {
        this.input.focus();
    };
    /**
     * Recomputes the outline SVG path for the outline element.
     */ MDCTextField1.prototype.layout = function() {
        var openNotch = this.foundation.shouldFloat;
        this.foundation.notchOutline(openNotch);
    };
    MDCTextField1.prototype.getDefaultFoundation = function() {
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = (0, $16e381b58a3d1b51$export$18ce0697a983be9b)((0, $16e381b58a3d1b51$export$18ce0697a983be9b)((0, $16e381b58a3d1b51$export$18ce0697a983be9b)((0, $16e381b58a3d1b51$export$18ce0697a983be9b)((0, $16e381b58a3d1b51$export$18ce0697a983be9b)({}, this.getRootAdapterMethods()), this.getInputAdapterMethods()), this.getLabelAdapterMethods()), this.getLineRippleAdapterMethods()), this.getOutlineAdapterMethods());
        // tslint:enable:object-literal-sort-keys
        return new (0, $57085af6a888a400$export$e62c196cd9ca6c2c)(adapter, this.getFoundationMap());
    };
    MDCTextField1.prototype.getRootAdapterMethods = function() {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            addClass: function(className) {
                return _this.root.classList.add(className);
            },
            removeClass: function(className) {
                return _this.root.classList.remove(className);
            },
            hasClass: function(className) {
                return _this.root.classList.contains(className);
            },
            registerTextFieldInteractionHandler: function(evtType, handler) {
                _this.listen(evtType, handler);
            },
            deregisterTextFieldInteractionHandler: function(evtType, handler) {
                _this.unlisten(evtType, handler);
            },
            registerValidationAttributeChangeHandler: function(handler) {
                var getAttributesList = function(mutationsList) {
                    return mutationsList.map(function(mutation) {
                        return mutation.attributeName;
                    }).filter(function(attributeName) {
                        return attributeName;
                    });
                };
                var observer = new MutationObserver(function(mutationsList) {
                    return handler(getAttributesList(mutationsList));
                });
                var config = {
                    attributes: true
                };
                observer.observe(_this.input, config);
                return observer;
            },
            deregisterValidationAttributeChangeHandler: function(observer) {
                observer.disconnect();
            }
        };
    // tslint:enable:object-literal-sort-keys
    };
    MDCTextField1.prototype.getInputAdapterMethods = function() {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            getNativeInput: function() {
                return _this.input;
            },
            setInputAttr: function(attr, value) {
                _this.input.setAttribute(attr, value);
            },
            removeInputAttr: function(attr) {
                _this.input.removeAttribute(attr);
            },
            isFocused: function() {
                return document.activeElement === _this.input;
            },
            registerInputInteractionHandler: function(evtType, handler) {
                _this.input.addEventListener(evtType, handler, (0, $090f00fee86c77f1$export$82e1592afef3b60f)());
            },
            deregisterInputInteractionHandler: function(evtType, handler) {
                _this.input.removeEventListener(evtType, handler, (0, $090f00fee86c77f1$export$82e1592afef3b60f)());
            }
        };
    // tslint:enable:object-literal-sort-keys
    };
    MDCTextField1.prototype.getLabelAdapterMethods = function() {
        var _this = this;
        return {
            floatLabel: function(shouldFloat) {
                _this.label && _this.label.float(shouldFloat);
            },
            getLabelWidth: function() {
                return _this.label ? _this.label.getWidth() : 0;
            },
            hasLabel: function() {
                return Boolean(_this.label);
            },
            shakeLabel: function(shouldShake) {
                _this.label && _this.label.shake(shouldShake);
            },
            setLabelRequired: function(isRequired) {
                _this.label && _this.label.setRequired(isRequired);
            }
        };
    };
    MDCTextField1.prototype.getLineRippleAdapterMethods = function() {
        var _this = this;
        return {
            activateLineRipple: function() {
                if (_this.lineRipple) _this.lineRipple.activate();
            },
            deactivateLineRipple: function() {
                if (_this.lineRipple) _this.lineRipple.deactivate();
            },
            setLineRippleTransformOrigin: function(normalizedX) {
                if (_this.lineRipple) _this.lineRipple.setRippleCenter(normalizedX);
            }
        };
    };
    MDCTextField1.prototype.getOutlineAdapterMethods = function() {
        var _this = this;
        return {
            closeOutline: function() {
                _this.outline && _this.outline.closeNotch();
            },
            hasOutline: function() {
                return Boolean(_this.outline);
            },
            notchOutline: function(labelWidth) {
                _this.outline && _this.outline.notch(labelWidth);
            }
        };
    };
    /**
     * @return A map of all subcomponents to subfoundations.
     */ MDCTextField1.prototype.getFoundationMap = function() {
        return {
            characterCounter: this.characterCounter ? this.characterCounter.foundationForTextField : undefined,
            helperText: this.helperText ? this.helperText.foundationForTextField : undefined,
            leadingIcon: this.leadingIcon ? this.leadingIcon.foundationForTextField : undefined,
            trailingIcon: this.trailingIcon ? this.trailingIcon.foundationForTextField : undefined
        };
    };
    MDCTextField1.prototype.createRipple = function(rippleFactory) {
        var _this = this;
        var isTextArea = this.root.classList.contains((0, $75c94222a6ed6a34$export$c1c0562ec8379000).TEXTAREA);
        var isOutlined = this.root.classList.contains((0, $75c94222a6ed6a34$export$c1c0562ec8379000).OUTLINED);
        if (isTextArea || isOutlined) return null;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = (0, $16e381b58a3d1b51$export$18ce0697a983be9b)((0, $16e381b58a3d1b51$export$18ce0697a983be9b)({}, (0, $21fc886e11ffd00d$export$583ca2e118aa9669).createAdapter(this)), {
            isSurfaceActive: function() {
                return $d0ad8581e3814672$export$de994efd351b291c(_this.input, ":active");
            },
            registerInteractionHandler: function(evtType, handler) {
                _this.input.addEventListener(evtType, handler, (0, $090f00fee86c77f1$export$82e1592afef3b60f)());
            },
            deregisterInteractionHandler: function(evtType, handler) {
                _this.input.removeEventListener(evtType, handler, (0, $090f00fee86c77f1$export$82e1592afef3b60f)());
            }
        });
        // tslint:enable:object-literal-sort-keys
        return rippleFactory(this.root, new (0, $9359f45d77124ccd$export$fb5f028029d92ef5)(adapter));
    };
    return MDCTextField1;
}((0, $806bdc5abe44e68c$export$c3670872e5a4af8e));







export {$f9f797d2adda2586$export$a04d92ca833e40dd as MDCTextField, $1142fa50548b2b0c$export$f8bd4dbb17447937 as MDCTextFieldCharacterCounter, $a00881d11c86e7f7$export$6db271eca0d4404c as MDCTextFieldIcon};
//# sourceMappingURL=out.mjs.map
