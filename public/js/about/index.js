!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),i=r(o),u=n(2),a=r(u),c=n(3),s=r(c),f=window.APP_PROPS;a["default"].render(i["default"].createElement(s["default"],f),document.getElementById("app"))},function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=r(c),f=n(4),l=r(f),p=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),a(t,[{key:"renderList",value:function(){var e=this.props.abouts,t=[];return e.map(function(e,n){t.push(s["default"].createElement("div",{className:"form-group",key:n},s["default"].createElement("label",{className:"label"},e.title),s["default"].createElement("span",{className:"form-static",dangerouslySetInnerHTML:{__html:e.content}})))}),t}},{key:"render",value:function(){return s["default"].createElement("div",{className:"content"},s["default"].createElement("form",{className:"form"},this.renderList(),s["default"].createElement("img",{className:"qrcode-weixin",src:(0,l["default"])("/img/weixin.png")})))}}],[{key:"getMeta",value:function(){return{title:"廖仲武的个人信息 - Liaozhongwu's Personal Infomation",description:"廖仲武的个人信息 - Liaozhongwu's Personal Infomation",cssFile:["/css/theme.css","/css/about/index.css"]}}}]),t}(s["default"].Component);t["default"]=p},function(e,t,n){(function(t){"use strict";function r(e){return e=e||"",e.startsWith("/")||(e="/"+e),void 0!==("undefined"==typeof t?"undefined":o(t))?(/^\/(css|img|js)\//.test(e)&&(e=e.replace(/\.[^\/]+$/,function(e){return"."+u+e})),i+e):e}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},i="http://cdn.liaozhongwu.com",u=n(6);r.URL=i,e.exports=r}).call(t,n(5))},function(e,t){function n(){s=!1,u.length?c=u.concat(c):f=-1,c.length&&r()}function r(){if(!s){var e=setTimeout(n);s=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,s=!1,clearTimeout(e)}}function o(e,t){this.fun=e,this.array=t}function i(){}var u,a=e.exports={},c=[],s=!1,f=-1;a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new o(e,t)),1!==c.length||s||setTimeout(r,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=i,a.addListener=i,a.once=i,a.off=i,a.removeListener=i,a.removeAllListeners=i,a.emit=i,a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(e,t){e.exports="bce4a6"}]);