"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=require("react"),_react2=_interopRequireDefault(_react),Base=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this))}return _inherits(t,e),_createClass(t,[{key:"renderTitle",value:function(){return this.props.title?_react2["default"].createElement("title",null,this.props.title):_react2["default"].createElement("title",null,"廖仲武的个人网站 - Liaozhongwu's Personal Website")}},{key:"renderDescription",value:function(){return this.props.description?_react2["default"].createElement("meta",{name:"description",content:this.props.description}):_react2["default"].createElement("meta",{name:"description",content:"廖仲武的个人网站 - Liaozhongwu's Personal Website"})}},{key:"renderMeta",value:function(){var e=[];return this.props.meta&&this.props.meta.map(function(t,r){e.push(_react2["default"].createElement("meta",{key:r,name:t.name,content:t.content}))}),e}},{key:"renderCss",value:function(){var e=[];return this.props.style&&e.push(_react2["default"].createElement("style",{key:"style"},this.props.styles)),this.props.cssFile&&this.props.cssFile.map(function(t,r){e.push(_react2["default"].createElement("link",{key:r,rel:"stylesheet",type:"text/css",href:t}))}),e}},{key:"renderJs",value:function(){var e=[];return this.props.APP_PROPS&&e.push(_react2["default"].createElement("script",{type:"text/javascript",key:"APP_PROPS",dangerouslySetInnerHTML:{__html:"window.APP_PROPS = "+JSON.stringify(this.props.APP_PROPS)}})),this.props.jsFile&&this.props.jsFile.map(function(t,r){e.push(_react2["default"].createElement("script",{key:r,type:"text/javascript",src:t}))}),e}},{key:"render",value:function(){return _react2["default"].createElement("html",null,_react2["default"].createElement("head",null,this.renderTitle(),_react2["default"].createElement("meta",{charSet:"utf-8"}),_react2["default"].createElement("meta",{httpEquiv:"Content-Type",content:"text/html; charset=UTF-8"}),_react2["default"].createElement("meta",{name:"author",content:"liaozhongwu<liaozhongwu95@163.com>"}),_react2["default"].createElement("meta",{name:"keywords",content:"廖仲武,个人网站,博客,liaozhongwu,blog"}),this.renderDescription(),_react2["default"].createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, user-scalable=0"}),this.renderMeta(),_react2["default"].createElement("link",{rel:"start",href:"http://www.liaozhongwu.com",title:"Home"}),this.renderCss(),_react2["default"].createElement("script",{type:"text/javascript",src:"https://cdn.bootcss.com/react/0.14.7/react.min.js"}),_react2["default"].createElement("script",{type:"text/javascript",src:"https://cdn.bootcss.com/react/0.14.7/react-dom.min.js"}),_react2["default"].createElement("script",{type:"text/javascript",src:"/vendor/ga.js"})),_react2["default"].createElement("body",null,_react2["default"].createElement("div",{className:"app",id:"app",dangerouslySetInnerHTML:{__html:this.props.content||""}}),this.renderJs()))}}]),t}(_react2["default"].Component);exports["default"]=Base;