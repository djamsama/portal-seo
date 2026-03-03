"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperLogo = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../styles/responsive"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var media = _responsive["default"].media();
var mediaMinWidth = _responsive["default"].mediaMinWidth();
var WrapperLogo = exports.WrapperLogo = _styledComponents["default"].div.withConfig({
  componentId: "sc-1x1c72q-0"
})(["text-align:center;svg:{max-width:278px;}", ";", ";", ";"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin-top: ", ";\n"])), function (props) {
  return props.floating ? "0px" : "-38px";
}), mediaMinWidth.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-top: ", ";\n"])), function (props) {
  return props.floating ? "0px" : "-28px";
}), mediaMinWidth.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-top: ", ";\n"])), function (props) {
  return props.floating ? "0px" : "-24px";
}));