!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),i=r(o),a=n(2),u=r(a),s=n(13),c=r(s),f=window.APP_PROPS;u["default"].render(i["default"].createElement(c["default"],f),document.getElementById("app"))},function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},,function(e,t,n){(function(t){"use strict";function r(e){if(e=e||"",e.startsWith("/")||(e="/"+e),void 0!==("undefined"==typeof t?"undefined":o(t))){var r=function(){var t=n(6);return/^\/(css|img|js)\//.test(e)&&(e=e.replace(/\.[^\/]+$/,function(e){return"."+t+e})),{v:i+e}}();if("object"===("undefined"==typeof r?"undefined":o(r)))return r.v}return e}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},i="http://cdn.liaozhongwu.com";r.URL=i,e.exports=r}).call(t,n(5))},function(e,t){function n(){c&&a&&(c=!1,a.length?s=a.concat(s):f=-1,s.length&&r())}function r(){if(!c){var e=setTimeout(n);c=!0;for(var t=s.length;t;){for(a=s,s=[];++f<t;)a&&a[f].run();f=-1,t=s.length}a=null,c=!1,clearTimeout(e)}}function o(e,t){this.fun=e,this.array=t}function i(){}var a,u=e.exports={},s=[],c=!1,f=-1;u.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new o(e,t)),1!==s.length||c||setTimeout(r,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=i,u.addListener=i,u.once=i,u.off=i,u.removeListener=i,u.removeAllListeners=i,u.emit=i,u.binding=function(e){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(e){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},function(e,t){e.exports="25ff98"},,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),c=r(s),f=n(4),l=r(f),d=function(e){function t(e){o(this,t);var n=i(this,Object.getPrototypeOf(t).call(this));return n.state={index:e.index,animationState:"enter"},n}return a(t,e),u(t,null,[{key:"getMeta",value:function(){return{title:"廖仲武的个人网站 - Liaozhongwu's Personal Website",description:"廖仲武的个人网站 - Liaozhongwu's Personal Website",cssFile:["/css/theme.css","/css/index/index.css"],jsFile:["/js/index/index.js"]}}}]),u(t,[{key:"random",value:function(){for(var e=this.props.imgs,t=this.state.index;;){var n=Math.floor(e.length*Math.random());if(n!==t)return n}}},{key:"onChange",value:function(){var e=this;this.setState({animationState:"leave"},function(){setTimeout(function(){e.setState({index:e.random(),animationState:"enter"})},800)})}},{key:"render",value:function(){var e=this,t=this.props.imgs,n=this.state,r=n.index,o=n.animationState;return c["default"].createElement("div",{className:"main",onClick:function(t){return e.onChange()}},c["default"].createElement("img",{className:"background background-fade-"+o,src:(0,l["default"])(t[r])}),c["default"].createElement("div",{className:"box",onClick:function(e){return e.stopPropagation()}},c["default"].createElement("div",{className:"avatar"}),c["default"].createElement("p",null,"stay hungry. stay foolish."),c["default"].createElement("nav",{className:"nav"},c["default"].createElement("a",{href:"/"},"Home"),c["default"].createElement("a",{href:"/blogs"},"Blog"),c["default"].createElement("a",{href:"/about"},"About"))))}}]),t}(c["default"].Component);t["default"]=d}]);