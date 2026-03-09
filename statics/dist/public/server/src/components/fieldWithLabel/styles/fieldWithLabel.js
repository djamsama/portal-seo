"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldLabel = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var FieldLabel = exports.FieldLabel = _styledComponents["default"].label.withConfig({
  componentId: "sc-1ifsafz-0"
})(["font-size:1em;line-height:2.25em;font-weight:700;text-align:left;+ div > input,+ div > textarea,+ div > select{margin-bottom:12px;}+ div.has-error > input,+ div.has-error > textarea,+ div.has-error > select{margin-bottom:0;}", ""], function (props) {
  return props.mandatory && (0, _styledComponents.css)([":after{content:\"*\";display:inline-block;padding-left:2px;}"]);
});