this.PelagicCreatures=this.PelagicCreatures||{},this.PelagicCreatures.Sargasso=function(e){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var s="object"==typeof t&&t&&t.Object===Object&&t,i="object"==typeof self&&self&&self.Object===Object&&self,n=s||i||Function("return this")(),r=n.Symbol;var o=function(e,t){for(var s=-1,i=null==e?0:e.length,n=Array(i);++s<i;)n[s]=t(e[s],s,e);return n},a=Array.isArray,l=Object.prototype,c=l.hasOwnProperty,u=l.toString,h=r?r.toStringTag:void 0;var d=function(e){var t=c.call(e,h),s=e[h];try{e[h]=void 0;var i=!0}catch(e){}var n=u.call(e);return i&&(t?e[h]=s:delete e[h]),n},p=Object.prototype.toString;var f=function(e){return p.call(e)},m=r?r.toStringTag:void 0;var g=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":m&&m in Object(e)?d(e):f(e)};var w=function(e){return null!=e&&"object"==typeof e};var v=function(e){return"symbol"==typeof e||w(e)&&"[object Symbol]"==g(e)},b=r?r.prototype:void 0,x=b?b.toString:void 0;var y=function e(t){if("string"==typeof t)return t;if(a(t))return o(t,e)+"";if(v(t))return x?x.call(t):"";var s=t+"";return"0"==s&&1/t==-1/0?"-0":s};var E=function(e){return null==e?"":y(e)};var C=function(e,t,s){var i=-1,n=e.length;t<0&&(t=-t>n?0:n+t),(s=s>n?n:s)<0&&(s+=n),n=t>s?0:s-t>>>0,t>>>=0;for(var r=Array(n);++i<n;)r[i]=e[i+t];return r};var k=function(e,t,s){var i=e.length;return s=void 0===s?i:s,!t&&s>=i?e:C(e,t,s)},O=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var S=function(e){return O.test(e)};var A=function(e){return e.split("")},R="[\\ud800-\\udfff]",F="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",L="\\ud83c[\\udffb-\\udfff]",M="[^\\ud800-\\udfff]",D="(?:\\ud83c[\\udde6-\\uddff]){2}",j="[\\ud800-\\udbff][\\udc00-\\udfff]",T="(?:"+F+"|"+L+")"+"?",z="[\\ufe0e\\ufe0f]?"+T+("(?:\\u200d(?:"+[M,D,j].join("|")+")[\\ufe0e\\ufe0f]?"+T+")*"),P="(?:"+[M+F+"?",F,D,j,R].join("|")+")",N=RegExp(L+"(?="+L+")|"+P+z,"g");var H=function(e){return e.match(N)||[]};var V=function(e){return S(e)?H(e):A(e)};var I=function(e){return function(t){t=E(t);var s=S(t)?V(t):void 0,i=s?s[0]:t.charAt(0),n=s?k(s,1).join(""):t.slice(1);return i[e]()+n}}("toUpperCase");var W=function(e){return I(E(e).toLowerCase())};var q=function(e,t,s,i){var n=-1,r=null==e?0:e.length;for(i&&r&&(s=e[++n]);++n<r;)s=t(s,e[n],n,e);return s};var U=function(e){return function(t){return null==e?void 0:e[t]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),B=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Q=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var Z=function(e){return(e=E(e))&&e.replace(B,U).replace(Q,"")},G=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var $=function(e){return e.match(G)||[]},J=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var Y=function(e){return J.test(e)},_="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",K="["+_+"]",X="\\d+",ee="[\\u2700-\\u27bf]",te="[a-z\\xdf-\\xf6\\xf8-\\xff]",se="[^\\ud800-\\udfff"+_+X+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",ie="(?:\\ud83c[\\udde6-\\uddff]){2}",ne="[\\ud800-\\udbff][\\udc00-\\udfff]",re="[A-Z\\xc0-\\xd6\\xd8-\\xde]",oe="(?:"+te+"|"+se+")",ae="(?:"+re+"|"+se+")",le="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",ce="[\\ufe0e\\ufe0f]?"+le+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",ie,ne].join("|")+")[\\ufe0e\\ufe0f]?"+le+")*"),ue="(?:"+[ee,ie,ne].join("|")+")"+ce,he=RegExp([re+"?"+te+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[K,re,"$"].join("|")+")",ae+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[K,re+oe,"$"].join("|")+")",re+"?"+oe+"+(?:['’](?:d|ll|m|re|s|t|ve))?",re+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",X,ue].join("|"),"g");var de=function(e){return e.match(he)||[]};var pe=function(e,t,s){return e=E(e),void 0===(t=s?void 0:t)?Y(e)?de(e):$(e):e.match(t)||[]},fe=RegExp("['’]","g");var me=function(e){return function(t){return q(pe(Z(t).replace(fe,"")),e,"")}},ge=me((function(e,t,s){return t=t.toLowerCase(),e+(s?W(t):t)}));var we=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ve=function(){return n.Date.now()},be=/^\s+|\s+$/g,xe=/^[-+]0x[0-9a-f]+$/i,ye=/^0b[01]+$/i,Ee=/^0o[0-7]+$/i,Ce=parseInt;var ke=function(e){if("number"==typeof e)return e;if(v(e))return NaN;if(we(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=we(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(be,"");var s=ye.test(e);return s||Ee.test(e)?Ce(e.slice(2),s?2:8):xe.test(e)?NaN:+e},Oe=Math.max,Se=Math.min;var Ae=function(e,t,s){var i,n,r,o,a,l,c=0,u=!1,h=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var s=i,r=n;return i=n=void 0,c=t,o=e.apply(r,s)}function f(e){return c=e,a=setTimeout(g,t),u?p(e):o}function m(e){var s=e-l;return void 0===l||s>=t||s<0||h&&e-c>=r}function g(){var e=ve();if(m(e))return w(e);a=setTimeout(g,function(e){var s=t-(e-l);return h?Se(s,r-(e-c)):s}(e))}function w(e){return a=void 0,d&&i?p(e):(i=n=void 0,o)}function v(){var e=ve(),s=m(e);if(i=arguments,n=this,l=e,s){if(void 0===a)return f(l);if(h)return clearTimeout(a),a=setTimeout(g,t),p(l)}return void 0===a&&(a=setTimeout(g,t)),o}return t=ke(t)||0,we(s)&&(u=!!s.leading,r=(h="maxWait"in s)?Oe(ke(s.maxWait)||0,t):r,d="trailing"in s?!!s.trailing:d),v.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=l=n=a=void 0},v.flush=function(){return void 0===a?o:w(ve())},v},Re=me((function(e,t,s){return e+(s?"-":"")+t.toLowerCase()})),Fe=function(e,t,s){return e(s={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&s.path)}},s.exports),s.exports}((function(e,t){!function(t){if(e.exports=t(),!!0){var s=window.Cookies,i=window.Cookies=t();i.noConflict=function(){return window.Cookies=s,i}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var s=arguments[e];for(var i in s)t[i]=s[i]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function s(i){function n(){}function r(t,s,r){if("undefined"!=typeof document){"number"==typeof(r=e({path:"/"},n.defaults,r)).expires&&(r.expires=new Date(1*new Date+864e5*r.expires)),r.expires=r.expires?r.expires.toUTCString():"";try{var o=JSON.stringify(s);/^[\{\[]/.test(o)&&(s=o)}catch(e){}s=i.write?i.write(s,t):encodeURIComponent(String(s)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var a="";for(var l in r)r[l]&&(a+="; "+l,!0!==r[l]&&(a+="="+r[l].split(";")[0]));return document.cookie=t+"="+s+a}}function o(e,s){if("undefined"!=typeof document){for(var n={},r=document.cookie?document.cookie.split("; "):[],o=0;o<r.length;o++){var a=r[o].split("="),l=a.slice(1).join("=");s||'"'!==l.charAt(0)||(l=l.slice(1,-1));try{var c=t(a[0]);if(l=(i.read||i)(l,c)||t(l),s)try{l=JSON.parse(l)}catch(e){}if(n[c]=l,e===c)break}catch(e){}}return e?n[e]:n}}return n.set=r,n.get=function(e){return o(e,!1)},n.getJSON=function(e){return o(e,!0)},n.remove=function(t,s){r(t,"",e(s,{expires:-1}))},n.defaults={},n.withConverter=s,n}((function(){}))}))}));const Le=new WeakMap,Me=e=>!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length),De=(e,t,s)=>{const i=Le.get(e)||{};s?i[t]=s:delete i[t],Le.set(e,i)},je=(e,t)=>(Le.get(e)||{})[t],Te={hasClass:(e,t)=>-1!==(e.className||"").split(/\s+/).indexOf(t),addClass:(e,t)=>{const s=(e.className||"").split(/\s+/);-1===s.indexOf(t)&&(s.push(t),e.className=s.join(" "))},removeClass:(e,t)=>{const s=(e.className||"").split(/\s+/);-1!==s.indexOf(t)&&(s.splice(s.indexOf(t),1),e.className=s.join(" "))},isVisible:Me,inViewPort:(e,t=window)=>{const s=e.getBoundingClientRect(),i=Me(e),n=s.bottom<0;let r;return r=t.self===window?s.top>(window.innerHeight||document.documentElement.clientHeight):s.top>t.clientHeight,i&&!r&&!n},setCSS:(e,t)=>{for(const s in t)if(t.hasOwnProperty(s)){const i=ge(s);e.style[i]=t[s]}},setMetaData:De,getMetaData:je,on:function(e,t,s,i,n,r){const o={fn:e=>{i?Array.from(t.querySelectorAll(i)).forEach(t=>{e.target===t&&n(e)}):e.target===t&&n(e)},options:r||!1};De(t,"on:"+e+"-"+s+"-"+i,o),s.split(/[\s,]+/).forEach(e=>{t.addEventListener(e,o.fn,o.options)})},off:function(e,t,s,i){const n="on:"+e+"-"+s+"-"+i,r=je(t,n);r&&(s.split(/[\s,]+/).forEach(e=>{t.removeEventListener(e,r.fn,r.options)}),De(t,n))}};class ze{constructor(e){this.options=e,this.observers=[],this.pendingAnimationFrame=void 0,this.frameQueue=[]}subscribe(e){this.observers.length||this.wakeup(),this.observers.push(e)}unSubscribe(e){-1!==this.observers.indexOf(e)&&this.observers.splice(this.observers.indexOf(e),1),this.observers.length||this.sleep()}sleep(){}wakeup(){}notifyObservers(e,t){for(let s=0;s<this.observers.length;s++)this.observers[s][e]&&this.observers[s][e].apply(this.observers[s],t||[])}flushQueue(){this.pendingAnimationFrame&&(cancelAnimationFrame(this.pendingAnimationFrame),this.pendingAnimationFrame=void 0),this.frameQueue=[]}queueFrame(e){this.frameQueue.push(e.bind(this)),this.pendingAnimationFrame||(this.pendingAnimationFrame=requestAnimationFrame(()=>{this.processQueue()}))}processQueue(){this.pendingAnimationFrame=void 0;var e=this.frameQueue.slice(0);this.frameQueue=[];for(var t=0;t<e.length;t++)e[t]()}}var Pe,Ne,He,Ve,Ie;Pe=new class extends ze{constructor(e){super(e),this.mutationHandler=Ae((e,t)=>{this.observeDOM(e,t)},100,{maxWait:250}),this.mutationObserver=new MutationObserver(this.mutationHandler,!1)}subscribe(e){super.subscribe(e),e.watchDOM()}wakeup(){super.wakeup(),this.mutationObserver.observe(document.body,{childList:!0,subtree:!0})}sleep(){super.sleep(),this.mutationObserver.disconnect()}observeDOM(){this.notifyObservers("watchDOM")}},Ne=new class extends ze{constructor(e={}){super(e),this.scrollElement=this.options.scrollElement||window,this.lastscroll=this.scrollTop(),this.scrolling=!1,this.trigger=()=>{this.scrolling||this.scrollLoop()},this.scrollLoop=()=>{if(this.lastscroll!==this.scrollTop()){this.scrolling=!0,this.lastscroll=this.scrollTop(),this.watchScroll();const e=()=>{this.scrollLoop()};this.queueFrame(e)}else this.scrolling=!1}}setOptions(e={}){this.sleep(),this.scrollElement=e.scrollElement||window,this.wakeup()}subscribe(e){super.subscribe(e),e.watchScroll()}wakeup(){super.wakeup(),this.scrollElement.addEventListener("scroll",this.trigger,!1)}sleep(){super.sleep(),this.scrollElement.removeEventListener("scroll",this.trigger)}inViewPort(e){return Te.inViewPort(e,this.scrollElement)}watchScroll(){this.notifyObservers("watchScroll")}scrollTop(e){if(this.scrollElement===window){if(void 0===e)return window.pageYOffset;window.scrollTo(0,e)}else{if(void 0===e)return this.scrollElement.scrollTop;this.scrollElement.scrollTop=e}}},He=new class extends ze{constructor(e){super(e),this.debounce=Ae(()=>{this.watchResize()},250)}subscribe(e){super.subscribe(e),e.watchResize()}wakeup(){super.wakeup(),window.addEventListener("resize",this.debounce,!1)}sleep(){super.sleep(),window.removeEventListener("resize",this.debounce)}watchResize(){this.notifyObservers("watchResize")}},Ve=new class extends ze{constructor(e){super(e),"onorientationchange"in window?Te.addClass(document.body,"have-orientation"):Te.addClass(document.body,"no-orientation"),this.debounce=Ae(()=>{this.watchOrientation()},250)}subscribe(e){super.subscribe(e),e.watchOrientation()}wakeup(){super.wakeup(),"onorientationchange"in window&&window.addEventListener("orientationchange",this.debounce,!1)}sleep(){super.sleep(),"onorientationchange"in window&&window.removeEventListener("orientationchange",this.debounce)}watchOrientation(){this.notifyObservers("watchOrientation")}},Ie=new class extends ze{constructor(e){super(e),this.workers={}}registerWorker(e,t){if(!this.workers[e]){let s=t,i=!1;if(!t.match(/^(http|\/)/i)){const e=new Blob([t],{type:"text/javascript"});s=URL.createObjectURL(e),i=!0}this.workers[e]={worker:new Worker(s),observers:[]},i&&URL.revokeObjectURL(s),this.workers[e].worker.onmessage=t=>{this.workerMessage(e,t)}}return this.workers[e].worker}subscribe(e,t){if(!this.workers[t])throw new Error("worker "+t+" does not exist");this.workers[t].observers.push(e),super.subscribe(e)}unSubscribe(e,t){if(!this.workers[t])throw new Error("worker "+t+" does not exist");const s=this.workers[t].observers;-1!==s.indexOf(e)&&s.splice(s.indexOf(e),1),s.length||(this.workers[t].worker.terminate(),delete this.workers[t]),super.unSubscribe(e)}workerMessage(e,t){this.notifyObservers("workerMessage",[e,t])}wakeup(){super.wakeup()}sleep(){super.sleep()}};let We=0;const qe=[],Ue="customElements"in window,Be={},Qe=(e,t)=>{if(Be[e]=t,Ue){const t=`\n\t\t\treturn class ${e}Element extends HTMLElement {\n\t\t\t\tconstructor(element, options = {}) {\n\t\t\t\t\tsuper()\n\t\t\t\t\tthis.helperClass= '${e}'\n\t\t\t\t\tthis.helper = null\n\t\t\t\t}\n\n\t\t\t\tconnectedCallback () {\n\t\t\t\t\tthis.helper = new registeredClasses[this.helperClass](this,{isCustomElement:true})\n\t\t\t\t\tthis.helper.start()\n\t\t\t\t}\n\n\t\t\t\tdisconnectedCallback () {\n\t\t\t\t\tthis.helper.destroy()\n\t\t\t\t\tthis.helper = null // nuke the reference for trash collection\n\t\t\t\t}\n\t\t\t}`;customElements.define("sargasso-"+Re(e),new Function("registeredClasses",t)(Be))}},Ze=["DOMChanged","didScroll","didResize","didBreakpoint","enterViewport","exitViewport","enterFullscreen","exitFullscreen","newPage","elementEvent"];class Ge{constructor(e,t={}){this.uid=++We,this.element=e,this.options=t,this.pendingAnimationFrame=void 0,this.frameQueue=[],this.isInViewport=!1,this.workers={},this.started=!1}start(){const e=this.getMetaData("registeredResponsiveControllers")||[];e.push(this),this.setMetaData("registeredResponsiveControllers",e),this.setMetaData(this.constructor.name,this),qe.push(this),this.options.watchDOM&&Pe.subscribe(this),(this.options.watchScroll||this.options.watchViewport)&&Ne.subscribe(this),(this.options.watchResize||this.options.watchViewport)&&He.subscribe(this),(this.options.watchOrientation||this.options.watchViewport)&&Ve.subscribe(this),this.elementListener=e=>{e.detail&&e.detail.sargassoEvent&&-1!==Ze.indexOf(e.detail.sargassoEvent)?this[e.detail.sargassoEvent].apply(this,e.detail.sargassoEventOptions||[]):this.elementEvent(e)},this.element.addEventListener("sargasso",this.elementListener),this.started=!0}sleep(){this.options.watchDOM&&Pe.unSubscribe(this),(this.options.watchScroll||this.options.watchViewport)&&Ne.unSubscribe(this),(this.options.watchResize||this.options.watchViewport)&&He.unSubscribe(this),(this.options.watchOrientation||this.options.watchViewport)&&Ve.unSubscribe(this),this.element.removeEventListener("sargasso",this.elementListener),this.started=!1}DOMChanged(){}didScroll(){}didResize(){}didBreakpoint(){}enterViewport(){}exitViewport(){}enterFullscreen(){}exitFullscreen(){}newPage(e,t){}elementEvent(e){}workerOnMessage(e,t){}setMetaData(e,t){Te.setMetaData(this.element,e,t)}getMetaData(e){return Te.getMetaData(this.element,e)}on(e,t,s,i){Te.on(this.constructor.name+"-"+this.uid,this.element,e,t,s,i)}off(e,t){Te.off(this.constructor.name+"-"+this.uid,this.element,e,t)}notifyAll(e,t){if(-1===Ze.indexOf(e))throw new Error("invalid event name "+e);for(let s=0;s<qe.length;s++){const i=qe[s];i!==this&&i[e]&&i[e].apply(i,t)}}notifyElement(e,t,s){if(-1===Ze.indexOf(t))throw new Error("invalid event name "+t);const i=this.getMetaData("registeredResponsiveControllers");if(i)for(let e=0;e<i.length;e++){const n=i[e];n!==this&&n[t]&&n[t].apply(n,s)}}queueFrame(e){this.frameQueue.push(e.bind(this)),this.pendingAnimationFrame||(this.pendingAnimationFrame=requestAnimationFrame(()=>{this.processQueue()}))}wantFullscreen(e){e?this.enterFullscreen():this.exitFullscreen()}hasClass(e){return Te.hasClass(this.element,e)}addClass(e){Te.addClass(this.element,e)}removeClass(e){Te.removeClass(this.element,e)}setCSS(e){Te.setCSS(this.element,e)}isVisible(){return Te.isVisible(this.element)}scrollTop(e){return Ne.scrollTop(e)}workerStart(e,t){return this.workers[e]=Ie.registerWorker(e,t),Ie.subscribe(this,e),this.workers[e]}workerPostMessage(e,t){t.uid||(t.uid=this.uid),this.workers[e]&&this.workers[e].postMessage(t)}flushQueue(){this.pendingAnimationFrame&&(cancelAnimationFrame(this.pendingAnimationFrame),this.pendingAnimationFrame=void 0),this.frameQueue=[]}processQueue(){this.pendingAnimationFrame=void 0;var e=this.frameQueue.slice(0);this.frameQueue=[];for(var t=0;t<e.length;t++)e[t]()}stopWorker(e){this.workers[e]&&(Ie.unSubscribe(this,e),delete this.workers[e])}stopAllWorkers(){for(const e in this.workers)this.stopWorker(e)}destroy(){this.stopAllWorkers(),this.flushQueue(),this.started&&this.sleep();const e=this.getMetaData("registeredResponsiveControllers");e&&-1!==e.indexOf(this)&&(e.splice(e.indexOf(this),1),this.setMetaData("registeredResponsiveControllers",e)),this.setMetaData(this.constructor.name,null),this.element=null,-1!==qe.indexOf(this)&&qe.splice(qe.indexOf(this),1)}watchDOM(){this.DOMChanged()}watchScroll(){this.options.watchViewport&&this.inViewport(),this.didScroll()}watchResize(){this.options.watchViewport&&this.inViewport(),this.didResize()}watchOrientation(){!window.orientation||90!==window.orientation&&270!==window.orientation?this.wantFullscreen(!1):this.wantFullscreen(!0)}inViewport(){Ne.inViewPort(this.element)?this.isInViewport||(this.enterViewport(),this.isInViewport=!0):this.isInViewport&&(this.exitViewport(),this.isInViewport=!1)}workerMessage(e,t){t.data.uid===this.uid&&this.workerOnMessage(e,t.data)}nativeRequestFullScreen(){if(document.fullscreenElement){if(document.fullscreenElement===this.element)return;document.exitFullscreen()}this.element.requestFullscreen()}nativeExitFullScreen(){document.fullscreenElement&&document.fullscreenElement===this.element&&document.exitFullscreen()}}Qe("Sargasso",Ge);class $e extends Ge{constructor(e,t={}){t.watchScroll=!0,t.watchResize=!0,t.watchDOM=!0,t.immortal=!0,super(e,t)}didResize(){super.didResize(),this.lazyHandler()}didScroll(){super.didScroll(),this.lazyHandler()}DOMChanged(){super.DOMChanged(),this.lazyHandler()}lazyHandler(){const e=document.querySelectorAll("[data-lazy-sargasso-class]");for(let t=0;t<e.length;t++){const s=e[t];if(Ne.inViewPort(s)){const i=s.getAttribute("data-lazy-sargasso-class").split(/\s*,\s*/);for(let s=0;s<i.length;s++){new Be[i[s]](e[t]).start()}s.removeAttribute("data-lazy-sargasso-class")}}}}Qe("LazyInstantiate",$e);class Je extends Ge{constructor(e,t={}){super(e,{watchDOM:!0,mortal:!1}),this.lazy=new $e(e,t)}start(){this.lazy.start(),super.start()}instantiate(e){const t=e.getAttribute("data-sargasso-class").split(/\s*,\s*/);for(let s=0;s<t.length;s++)try{new Be[t[s]](e).start()}catch(e){console.log("error instantiating "+t[s],e,Be)}e.removeAttribute("data-sargasso-class")}newPage(){this.doIt()}DOMChanged(){this.doIt()}doIt(){const e=document.querySelectorAll("[data-sargasso-class]");for(const t of e)this.instantiate(t);const t=[];for(let e=0;e<qe.length;e++)qe[e].options.immortal||qe[e].options.isCustomElement||document.body.contains(qe[e].element)||t.push(qe[e]);for(let e=0;e<t.length;e++)t[e].destroy()}}Qe("SargassoSupervisor",Je);const Ye=[{className:"screen-xs",maxWidth:599},{className:"screen-sm",maxWidth:1023},{className:"screen-md",maxWidth:1439},{className:"screen-lg",maxWidth:1999},{className:"screen-xl",maxWidth:void 0}];class _e extends Ge{constructor(e,t={}){t.watchResize=!0,super(e,t),t.widths?this.options.widths=t.widths:this.options.widths=Ye,this.scale=void 0,this.disabled=!1,this.forceScale=void 0,this.orientation=void 0,this.widths=[],this.classes=[]}start(){super.start();let e=".show-hide{display:none;}\n";this.widths.push(0);for(let t=0;t<this.options.widths.length;t++)this.options.widths[t].maxWidth&&this.widths.push(this.options.widths[t].maxWidth),this.classes.push(this.options.widths[t].className),e+="."+this.options.widths[t].className+" .hidden-"+this.options.widths[t].className+"{display:none;}\n",e+=".not-"+this.options.widths[t].className+" .hidden-not-"+this.options.widths[t].className+"{display:none;}\n",e+="."+this.options.widths[t].className+" .shown-"+this.options.widths[t].className+"{display:block;}\n",e+=".not-"+this.options.widths[t].className+" .shown-not-"+this.options.widths[t].className+"{display:block;}\n";const t=document.createElement("style");t.type="text/css",t.innerHTML=e,document.getElementsByTagName("head")[0].appendChild(t),this.detectGeometry()}didResize(){super.didResize(),this.detectGeometry()}disableResponsive(e){Te.addClass(document.body,"disable-responsive"),this.disabled=!0,this.forceScale=e,this.detectGeometry()}enableResponsive(){Te.removeClass(document.body,"disable-responsive"),this.disabled=!1,this.forceScale="",this.detectGeometry()}detectGeometry(){let e=this.classes[this.widths.length-1];if(this.disabled)e=this.forceScale;else{const t=window.innerWidth;if(window.innerHeight>t){if("portrait"!==this.orientation){const e=()=>{Te.removeClass(document.body,"landscape"),Te.addClass(document.body,"portrait")};this.queueFrame(e),this.orientation="portrait"}}else if("landscape"!==this.orientation){const e=()=>{Te.removeClass(document.body,"portrait"),Te.addClass(document.body,"landscape")};this.queueFrame(e),this.orientation="landscape"}for(let s=0;s<this.widths.length-1;s++)if(t>=this.widths[s]&&t<this.widths[s+1]){e=this.classes[s];break}}let t=0;if(e!==this.scale){++t;const s=()=>{for(let t=0;t<this.classes.length;t++)this.classes[t]!==e?(Te.addClass(document.body,"not-"+this.classes[t]),Te.removeClass(document.body,this.classes[t]),Te.removeClass(document.body,"shown-"+this.classes[t]),Te.removeClass(document.body,"hidden-"+this.classes[t])):Te.removeClass(document.body,"not-"+this.classes[t]);Te.addClass(document.body,e),Te.addClass(document.body,"shown-"+e),Te.addClass(document.body,"hidden-"+e),this.notifyAll("didBreakpoint",[e])};this.queueFrame(s)}this.scale=e,t&&this.setHints()}setHints(){let e="";this.scale&&(e&&(e+=" "),e+=this.scale),e!==this.getCookie("responsive")&&this.setCookie("responsive",e)}getCookie(e){return Fe.get(e)}setCookie(e,t,s){const i={path:"/",domain:this.options.cookieDomain||null,expires:s};Fe.set(e,t,i)}deleteCookie(e){this.setCookie(e,null)}}Qe("Breakpoints",_e);class Ke extends Ge{constructor(e,t={}){t.watchDOM=!0,t.immortal=!0,super(e,t),this.excludeRegex=new RegExp("^(//|http|javascript|mailto|#)","i"),this.currentPage=location.pathname+location.search}start(){super.start(),window.addEventListener("popstate",e=>{this.watchPopState(e)},!1)}DOMChanged(){super.DOMChanged(),this.hijaxLinks()}watchPopState(e){location.pathname+location.search!==this.currentPage&&this.preFlight(location.pathname+location.search)}hijaxLinks(e){const t=e?e.getElementsByTagName("a"):this.element.getElementsByTagName("a");for(let e=0;e<t.length;e++){const s=t[e],i=s.getAttribute("href");!i||s.getAttribute("data-hijaxed")||s.getAttribute("target")||s.hasAttribute("data-no-hijax")||this.excludeRegex.exec(i)||(s.setAttribute("data-hijaxed",!0),s.addEventListener("click",e=>{e.preventDefault(),this.setPage(i)},!1))}}setPage(e,t){e===this.currentPage||t?this.preFlight(e):(history.pushState(null,null,e),this.watchPopState())}preFlight(e){if(!this.options.preFlight)return this.loadPage(e);this.options.preFlight(e,(t,s)=>{t&&(this.options.onError?this.options.onError("danger",t):alert("Error loading page: "+t)),s?this.currentPage=location.pathname+location.search:this.loadPage(e)})}loadPage(e){this.queueFrame(()=>{Te.addClass(document.body,"hijax-loading")}),this.options.onExitPage&&this.options.onExitPage();const t=new XMLHttpRequest;t.open("GET",e),t.setRequestHeader("Sargasso-Hijax",1),t.setRequestHeader("x-digitopia-hijax",1),this.options.onLoading&&(t.onreadystatechange=this.options.onLoading),t.onload=()=>{if(301===t.status||302===t.status||t.getResponseHeader("Sargasso-Location")){const e=t.getResponseHeader("Location")?t.getResponseHeader("Location"):t.getResponseHeader("Sargasso-Location");this.setPage(e)}else if(200===t.status){this.scrollTop(0),this.mergePage(t.responseText);const e=this.currentPage,s=()=>{this.notifyAll("newPage",[e,location.pathname+location.search]),Te.removeClass(document.body,"hijax-loading")};this.queueFrame(s),this.currentPage=location.pathname+location.search}else{const e=t.getResponseHeader("Sargasso-Flash-Level")||"danger";let s=t.getResponseHeader("Sargasso-Flash-Message")||t.statusText;s||(s="Could not connect to server."),this.options.onError?this.options.onError(e,s):alert("Error loading page: "+s)}},t.send()}processScripts(e){Array.from(e).forEach(e=>{e.remove();const t=e.getAttribute("id");document.getElementById(t)||document.getElementsByTagName("head")[0].appendChild(e)})}mergePage(e){const t=document.querySelectorAll("[data-ephemeral]");Array.from(t).forEach(e=>{e.remove()});const s=e.split(/(<body[^>]*>|<\/body>)/gi),i=Xe(s[2]),n=document.querySelectorAll("[data-hijax]");for(let e=0;e<n.length;e++){const t=n[e],s=n[e].getAttribute("id"),r=i.getElementById(s);this.processScripts(r.querySelectorAll("script"));const o=()=>{t.parentNode.replaceChild(r,t),this.options.onEnterPage&&this.options.onEnterPage(),this.hijaxLinks(r)};this.queueFrame(o)}}}Qe("HijaxLoader",Ke);const Xe=e=>{if(document.createRange&&document.createRange().createContextualFragment)return document.createRange().createContextualFragment(e);const t=document.createDocumentFragment(),s=document.createElement("div");return s.insertAdjacentHTML("afterBegin",e),t.appendChild(s),t},et={registerSargassoClass:Qe,bootSargasso:(t={})=>{t.scrollElement&&Ne.setOptions(t);if(new Je(document.body,t).start(t),t.breakpoints){new _e(document.body,t.breakpoints).start()}if(t.hijax){const s=new Ke(document.body,t.hijax);s.start(),e.loadPageHandler=s.setPage.bind(s)}else e.loadPageHandler=e=>{document.location.href=e}},elementTools:Te},tt={theDOMWatcher:Pe,theScrollWatcher:Ne,theResizeWatcher:He,theOrientationWatcher:Ve,theWorkerWatcher:Ie};return e.Sargasso=Ge,e.services=tt,e.utils=et,e}({});
//# sourceMappingURL=sargasso.iife.js.map
