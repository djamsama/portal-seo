"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TxtMcl = exports.StarMySpace = exports.LogoTitle = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../components/styles/responsive"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var media = _responsive["default"].media();
var LogoTitle = exports.LogoTitle = _styledComponents["default"].h1.withConfig({
  componentId: "sc-r2fvft-0"
})(["&&&{margin:", ";", "}", " ", " color:#555;white-space:nowrap;", ";", ";", ";h1{margin-top:20px;}}"], function (props) {
  return !props.modal ? "20px 0 0" : "0 0 30px 0";
}, function (props) {
  return props.modal && (0, _styledComponents.css)(["font-weight:700;"]);
}, function (props) {
  return props.modal && (0, _styledComponents.css)(["text-transform:uppercase;padding:8px 0 30px 0;border-bottom:1px solid #f6f6f6;font-size:2em;font:24px Arial,sans-serif;"]);
}, function (props) {
  return !props.modal && (0, _styledComponents.css)(["padding:0;font:30px \"Century Gothic\",Arial,sans-serif;float:left;"]);
}, media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin: 0;\n  "]))), media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])([""]))), media.screenMdMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    float: none;\n    text-align: center;"]))));
var StarMySpace = exports.StarMySpace = _styledComponents["default"].span.withConfig({
  componentId: "sc-r2fvft-1"
})(["width:29px;position:relative;background-image:url(", "/common/myspace/myspace-sprite.png);display:inline-block;", " ", ""], function (props) {
  return props.theme.pathImg;
}, function (props) {
  return props.modal && (0, _styledComponents.css)(["height:25px;background-position-x:-208px;background-position-y:-140px;"]);
}, function (props) {
  return !props.modal && (0, _styledComponents.css)(["height:27px;margin:0 10px 0 0;top:5px;background-position:-6px -142px;"]);
});
var TxtMcl = exports.TxtMcl = _styledComponents["default"].span.withConfig({
  componentId: "sc-r2fvft-2"
})(["color:", ";"], function (props) {
  return props.theme.mainLight;
});