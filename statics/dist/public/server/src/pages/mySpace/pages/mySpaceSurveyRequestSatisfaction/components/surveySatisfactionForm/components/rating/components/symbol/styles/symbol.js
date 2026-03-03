"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TxtStar = exports.SymbolWrapper = exports.StyledRate = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../../../../../components/styles/responsive"));
var _templateObject;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var media = _responsive["default"].media();
var SymbolWrapper = exports.SymbolWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1h127vs-0"
})([""]);
var TxtStar = exports.TxtStar = _styledComponents["default"].div.withConfig({
  componentId: "sc-1h127vs-1"
})(["color:grey;overflow-wrap:anywhere;font-size:12px;text-align:center;width:100%;display:inline-block;"]);
var StyledRate = exports.StyledRate = _styledComponents["default"].div.withConfig({
  componentId: "sc-1h127vs-2"
})(["font-family:\"Century Gothic\",Verdana,sans-serif;color:", ";font-size:80px;", ""], function (props) {
  return props.color;
}, media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 40px;\n    "]))));