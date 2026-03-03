"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlaceHoder = exports["default"] = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _veDesignSystem = require("ve-design-system");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var StyledButton = (0, _styledComponents["default"])(_veDesignSystem.Button).withConfig({
  componentId: "sc-1wi75az-0"
})(["display:inline-block;padding:7px 12px;font-size:1em;line-height:1.7em;text-align:center;border:none;cursor:pointer;"]);
var placeHolder = (0, _styledComponents.css)(["> button{background-color:rgb(246,246,246);border:none;cursor:auto;&:hover{background-color:rgb(246,246,246);}&:before{content:\"\";}&:after{position:absolute;top:0;right:-25px;bottom:0;left:150px;transform:translateX(-100%);background-image:linear-gradient( 90deg,rgba(255,255,255,0) 0,rgba(255,255,255,0.2) 20%,rgba(255,255,255,0.5) 60%,rgba(255,255,255,0) );animation:shimmer 2s infinite;content:\"\";}& svg{display:none;}}"]);
var getPlaceHoder = exports.getPlaceHoder = function getPlaceHoder(props) {
  if (props.isPlaceHolder) return placeHolder;
  return "";
};
var _default = exports["default"] = StyledButton;