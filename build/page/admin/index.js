"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),_react=require("react"),_react2=_interopRequireDefault(_react),Admin=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"renderInput",value:function(){var e=this.props.blog,t=[];return e?(t.push(_react2["default"].createElement("div",{className:"form-group",key:"id"},_react2["default"].createElement("input",{className:"input block-level",type:"text",name:"id",placeholder:"id",defaultValue:e._id,readOnly:!0}))),t.push(_react2["default"].createElement("div",{className:"form-group",key:"key"},_react2["default"].createElement("input",{className:"input block-level",type:"text",name:"key",placeholder:"key",defaultValue:e.key}))),t.push(_react2["default"].createElement("div",{className:"form-group",key:"title"},_react2["default"].createElement("input",{className:"input block-level",type:"text",name:"title",placeholder:"title",defaultValue:e.title}))),t.push(_react2["default"].createElement("div",{className:"form-group",key:"content"},_react2["default"].createElement("textarea",{className:"textarea block-level",name:"content",placeholder:"content",defaultValue:e.content})))):(t.push(_react2["default"].createElement("div",{className:"form-group",key:"key"},_react2["default"].createElement("input",{className:"input block-level",type:"text",name:"key",placeholder:"key"}))),t.push(_react2["default"].createElement("div",{className:"form-group",key:"title"},_react2["default"].createElement("input",{className:"input block-level",type:"text",name:"title",placeholder:"title"}))),t.push(_react2["default"].createElement("div",{className:"form-group",key:"content"},_react2["default"].createElement("textarea",{className:"textarea block-level",name:"content",placeholder:"content"})))),t}},{key:"render",value:function(){return _react2["default"].createElement("div",{className:"content"},_react2["default"].createElement("form",{className:"form",action:"/blog/save",method:"post"},this.renderInput(),_react2["default"].createElement("div",{className:"form-group"},_react2["default"].createElement("input",{className:"input",type:"password",name:"password",placeholder:"password"})),_react2["default"].createElement("div",{className:"form-group"},_react2["default"].createElement("input",{className:"btn",type:"submit",value:"保存"}))))}}],[{key:"getMeta",value:function(){return{title:"编辑 - 廖仲武的博客 - Liaozhongwu's Blog",description:"编辑 - 廖仲武的博客 - Liaozhongwu's Blog",cssFile:["/css/theme.css","page/admin/index.css"]}}}]),t}(_react2["default"].Component);exports["default"]=Admin;