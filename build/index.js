!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.oneUtils={})}(this,function(e){"use strict";var n=function(e){return"[object Object]"===Object.prototype.toString.call(e)},t=function(e){return"string"==typeof e},o=function(e){return"function"==typeof e},r=function(e){return void 0===e},i=p?{wx:wx,Page:Page,App:App,Component:Component}:{},c=i.wx,u=i.Page,a=i.App,s=i.Component,f={web:0,wxapp:1,node:2,webworker:3,unknown:"unknown"},l=function(e){return e.constructor.toString().match(/^function\s+(\w+)\s*\(\)\s*\{\s*\[native code\]\s*\}$/)[1]}(window||global),p=!!(c&&u&&a&&s),g=function(){return p?f.wxapp:"Window"===l?f.web:"Object"===l?f.node:-1!==["DedicatedWorkerGlobalScope","SharedWorkerGlobalScope","ServiceWorkerGlobalScope"].indexOf(l)?f.webworker:f.unknown},h=(function(){function e(e){this.value=e}function n(n){var t,o;function r(t,o){try{var c=n[t](o),u=c.value;u instanceof e?Promise.resolve(u.value).then(function(e){r("next",e)},function(e){r("throw",e)}):i(c.done?"return":"normal",c.value)}catch(e){i("throw",e)}}function i(e,n){switch(e){case"return":t.resolve({value:n,done:!0});break;case"throw":t.reject(n);break;default:t.resolve({value:n,done:!1})}(t=t.next)?r(t.key,t.arg):o=null}this._invoke=function(e,n){return new Promise(function(i,c){var u={key:e,arg:n,resolve:i,reject:c,next:null};o?o=o.next=u:(t=o=u,r(e,n))})},"function"!=typeof n.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(n.prototype[Symbol.asyncIterator]=function(){return this}),n.prototype.next=function(e){return this._invoke("next",e)},n.prototype.throw=function(e){return this._invoke("throw",e)},n.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}),w=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),m=i.wx,v=new(function(){function e(n){h(this,e),this.environment=g(),this.selector=n}return w(e,[{key:"querySelectorAll",value:function(e){return this.selector=e,this.environment===f.web&&(this.nodeList=document.querySelectorAll(e)),this.environment===f.wxapp&&(this.nodeList=m.createSelectorQuery().selectAll(e)),this}},{key:"querySelector",value:function(e){return this.selector=e,this.environment===f.web&&(this.nodeList=document.querySelector(e)),this.environment===f.wxapp&&(this.nodeList=m.createSelectorQuery().select(e)),this}},{key:"getBoundingClientRect",value:function(e){var t=this;return this.environment===f.web?(o(e)&&e(this.nodeList.getBoundingClientRect()),this.node.getBoundingClientRect()):this.environment===f.wxapp?new Promise(function(r,i){t.nodeList.boundingClientRect().exec(function(t){var i=n(t[0])?t[0]:t;o(e)&&e(i),r(i)})}):void 0}}]),e}()),y=new(function(){function e(){h(this,e),this.core=v}return w(e,[{key:"inject",value:function(){for(var e=this,t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];1===o.length&&n(o[0])&&Object.keys(o[0]).forEach(function(n){e.core[""+n]=o[0][n](f)});2===o.length&&(this.core[""+o[0]]=o[1](f))}}]),e}()),d=function(e){if(n(e)){var i=e.key,c=e.data,u=e.success,a=e.fail,s=(e.complete,e.sync);if(!t(i)&&!r(i))return!1;if(!t(c)||!n(c))return!1;if(!o(u)&&!s&&!r(a))return!1;if(!o(a)&&!s&&!r(a))return!1}return!1},x=function(){},b=function(){var e=getCurrentPages();return e[e.length-1].route},S=Object.prototype.hasOwnProperty,k=-1,P={},A={on:function(e,n,t){P[e]||(P[e]=[]);var o=config.nameSpace+"-uid-"+k++;return P[e].push({context:t,cb:n,token:o}),o},clearAll:function(){P={}},clear:function(e){P[e]&&delete P[e]},off:function(e){var n="string"==typeof e&&(S.call(P,e)||function(e){for(var n in P)if(S.call(P,n)&&0===n.indexOf(e))return!0;return!1}(e)),t=!n&&"string"==typeof e,o="function"==typeof e,r=null,i=!0,c=null;if(!n){for(r in P)if(S.call(P,r))for(var u=0,a=(c=P[r]).length;u<a;u++)t&&c[u].token===e?(c.splice(u,1),i=e):o&&c[u].cb===e&&(P[r].splice(u,1),i=!0);return i}A.clear(e)},once:function(e,n){P[e]||(P[e]=[]),P[e].push({context:this,cb:n,once:!0})},trigger:function(e,n,t){if(S.call(P,e))return!0===t?setTimeout(r,0):r(),!0;function o(e,n,t){function o(n){e.cb&&e.cb.call(e.context,n),e.once&&(e.cb=function(){})}if(!0===t)try{o(n)}catch(e){setTimeout((r=e,function(){throw r}),0)}var r;o(n)}function r(){if(S.call(P,e))for(var r=P[e],i=r.length,c=0;c<i;c++)o(r[c],n,t)}}},I={phoneNumber:/^[1][3,4,5,7,8][0-9]{9}$/,email:/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/,qq:/^[0-9]{5,10}$/},j=i.App,C=i.Page,O=i.wx,$=i.Component,L=A.on,q=A.off,W=A.trigger,_=A.once;e.isWxAppEnv=p,e.getEnv=g,e.isObject=n,e.isString=t,e.isFunction=o,e.isUndefined=r,e.isNumber=function(e){return"number"==typeof e},e.setItem=function(){if(d(itemInfo)){var e=itemInfo,n=e.key,t=e.data,o=(e.success,e.fail,e.complete,e.sync);try{return o?wx.setStorageSync(n,t):wx.setStorage(itemInfo)}catch(e){console.warn("请检查传入的参数是否正确"+itemInfo)}}console.warn("请检查传入的参数是否正确"+itemInfo)},e.getItem=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(d(e)){var n=e.key,t=(e.data,e.success,e.fail,e.complete,e.sync);try{return t?wx.getStorageSync(n):wx.getStorage(e)}catch(n){console.warn("请检查传入的参数是否正确"+e)}}console.warn("请检查传入的参数是否正确"+e)},e.removeAll=function(e){return e?wx.clearStorageSync():wx.clearStorage()},e.removeItem=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(d(e)){var n=info,t=n.key,o=(n.success,n.fail,n.complete,n.sync);try{o&&wx.removeStorageSync(t),wx.removeStorage(e)}catch(e){console.warn("请检查传入的参数是否正确"+info)}}console.warn("请检查传入的参数是否正确"+info)},e.getAll=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(d(e))try{return e.success,e.fail,e.complete,e.sync?wx.getStorageInfoSync():wx.getStorage(e)}catch(n){console.warn("请检查传入的参数是否正确"+e)}},e.isVaildItemParams=d,e.fetch=function(e){var n=e.url,t=e.method,o=e.data,r=e.header;return new Promise(function(e,i){return wx.request({url:n,data:o,method:t,header:r,success:e,fail:i,complete:x})})},e.getLoginCode=function(){return new Promise(function(e,n){return wx.login({success:e,fail:n,complete:x})})},e.getUserInfo=function(){return new Promise(function(e,n){return wx.getUserInfo({success:e,fail:n,complete:x})})},e.getJWD=function(){return new Promise(function(e,n){wx.getLocation({type:"wgs84",success:e,fail:n,complete:x})})},e.getSystemInfo=function(e){return new Promise(function(n,t){return wx["getSystemInfo"+(e?"Sync":"")]({success:n,fail:t})})},e.promisfy=function(e){return function(n){for(var t=arguments.length,o=Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];return new Promise(function(t,r){return e.apply(void 0,[Object.assign({},n,{success:t,fail:r})].concat(o))})}},e.getCurrentPageUrl=b,e.getCurrentPageUrlWithArgs=function(){var e=b(),n=currentPage.options,t=e+"?";for(var o in n)t+=o+"="+n[o]+"&";return t=t.substring(0,t.length-1)},e.$on=L,e.$off=q,e.$trigger=W,e.$once=_,e.regex=I,e.$log=function(e){return console.log(e)},e.App=j,e.wx=O,e.Page=C,e.Component=$,e.dom=v,e.adapter=y,Object.defineProperty(e,"__esModule",{value:!0})});
