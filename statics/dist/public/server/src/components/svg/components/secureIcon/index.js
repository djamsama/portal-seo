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
var SecureIconSVG = /*#__PURE__*/function (_Component) {
  function SecureIconSVG() {
    (0, _classCallCheck2["default"])(this, SecureIconSVG);
    return _callSuper(this, SecureIconSVG, arguments);
  }
  (0, _inherits2["default"])(SecureIconSVG, _Component);
  return (0, _createClass2["default"])(SecureIconSVG, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_svg.SvgContainer, {
        className: this.props.className
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        id: "secure_icon",
        "data-name": "secure icon",
        xmlns: "http://www.w3.org/2000/svg",
        width: "22.266",
        height: "30",
        viewBox: "0 0 22.266 30"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        id: "Trac\xE9_53",
        "data-name": "Trac\xE9 53",
        d: "M86.712,298.879h-.618a8.488,8.488,0,0,0-8.49,8.466v3.711H76.117a.846.846,0,0,0-.847.844v16.134a.846.846,0,0,0,.847.844H96.689a.846.846,0,0,0,.847-.844V311.9a.846.846,0,0,0-.847-.844H95.2v-3.711A8.488,8.488,0,0,0,86.712,298.879ZM79.3,307.345a6.8,6.8,0,0,1,6.8-6.777h.618a6.8,6.8,0,0,1,6.8,6.777v3.711H79.3ZM95.842,327.19H76.964V312.745H95.842Z",
        transform: "translate(-75.27 -298.879)",
        className: "st0"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        id: "Trac\xE9_54",
        "data-name": "Trac\xE9 54",
        d: "M113.082,376.221a5,5,0,1,0,5,5A5,5,0,0,0,113.082,376.221Zm0,7.736a2.74,2.74,0,1,1,2.74-2.74A2.743,2.743,0,0,1,113.082,383.957Z",
        transform: "translate(-101.949 -360.807)",
        className: "st0"
      })));
    }
  }]);
}(_react.Component);
var _default = exports["default"] = SecureIconSVG;