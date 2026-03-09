"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _svg = require("../../styles/svg");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var HelpSVG = /*#__PURE__*/function (_Component) {
  function HelpSVG() {
    (0, _classCallCheck2["default"])(this, HelpSVG);
    return _callSuper(this, HelpSVG, arguments);
  }
  (0, _inherits2["default"])(HelpSVG, _Component);
  return (0, _createClass2["default"])(HelpSVG, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_svg.SvgContainer, {
        className: this.props.className
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        id: "help_icon",
        "data-name": "help icon",
        xmlns: "http://www.w3.org/2000/svg",
        width: "31.526",
        height: "30",
        viewBox: "0 0 31.526 30"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        id: "Trac\xE9_55",
        "data-name": "Trac\xE9 55",
        className: "st0",
        d: "M978.109,355.067a11.633,11.633,0,0,0-11.6,10.965,7,7,0,0,0,2.835,13.408H970.5a.954.954,0,0,0,.954-.955v-12.1a.954.954,0,0,0-.954-.955h-1.152a7.013,7.013,0,0,0-.864.059,9.7,9.7,0,0,1,19.25,0,6.96,6.96,0,0,0-.864-.059h-1.152a.954.954,0,0,0-.954.955v12.1a.954.954,0,0,0,.954.955h1.152a6.989,6.989,0,0,0,1.228-.115,3.63,3.63,0,0,1-3.361,2.272h-2.652a2.514,2.514,0,0,0-2.322-1.56h-3.308a2.515,2.515,0,0,0,0,5.03h3.308a2.515,2.515,0,0,0,2.322-1.561h2.652a5.542,5.542,0,0,0,5.5-4.933,7,7,0,0,0-.532-12.541A11.633,11.633,0,0,0,978.109,355.067Zm-8.563,12.269v10.2h-.2a5.1,5.1,0,0,1,0-10.2Zm10.217,15.822h-3.308a.606.606,0,0,1,0-1.211h3.308a.606.606,0,0,1,0,1.211Zm12.2-10.724a5.1,5.1,0,0,1-5.094,5.1h-.2v-10.2h.2A5.1,5.1,0,0,1,991.964,372.434Z",
        transform: "translate(-962.346 -355.067)"
      })));
    }
  }]);
}(_react.Component);
var _default = exports["default"] = HelpSVG;