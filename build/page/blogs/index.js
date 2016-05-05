"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=require("react"),_react2=_interopRequireDefault(_react);require("../../../lib/date");var Blogs=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){var e=this.props.blogs;return _react2["default"].createElement("div",{className:"content"},_react2["default"].createElement("ul",{className:"list"},e.map(function(e,t){return _react2["default"].createElement("li",{className:"item blog",key:t},_react2["default"].createElement("a",{className:"blog-title",href:"/blog/"+e.key},e.title),_react2["default"].createElement("span",{className:"time"},e.createTime.toString()),_react2["default"].createElement("div",{className:"blog-preview"},e.content),_react2["default"].createElement("div",{className:"blog-count"},_react2["default"].createElement("i",{className:"fa fa-commenting-o"}),_react2["default"].createElement("span",{className:"number"},e.counts.comment)))})))}}],[{key:"getMeta",value:function(){return{title:"廖仲武的博客 - Liaozhongwu's Blog",description:"廖仲武的博客 - Liaozhongwu's Blog",cssFile:["/vendor/font-awesome/css/font-awesome.min.css","/css/theme.css","/css/blogs/index.css"]}}}]),t}(_react2["default"].Component);exports["default"]=Blogs;