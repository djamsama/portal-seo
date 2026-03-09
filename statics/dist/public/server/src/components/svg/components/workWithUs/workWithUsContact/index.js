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
var _svg = require("../../../styles/svg");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var ContactUsSVG = /*#__PURE__*/function (_Component) {
  function ContactUsSVG() {
    (0, _classCallCheck2["default"])(this, ContactUsSVG);
    return _callSuper(this, ContactUsSVG, arguments);
  }
  (0, _inherits2["default"])(ContactUsSVG, _Component);
  return (0, _createClass2["default"])(ContactUsSVG, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_svg.SvgContainer, null, /*#__PURE__*/_react["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        version: "1.1",
        x: "0px",
        y: "0px",
        viewBox: "0 0 200 200",
        xmlSpace: "preserve"
      }, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
        className: "st0",
        d: "M163.3,132.7c-1.4,0-2.8-0.6-3.9-1.6l-13.3-13.3H83.4c-8.2,0-14.8-6.6-14.8-14.8V48.2 c0-8.2,6.6-14.8,14.8-14.8h91c8.2,0,14.8,6.6,14.8,14.8V103c0,8.2-6.6,14.8-14.8,14.8h-5.6v9.4c0,2.2-1.3,4.2-3.4,5.1 C164.7,132.5,164,132.7,163.3,132.7z M83.4,38.5c-5.3,0-9.7,4.3-9.7,9.7V103c0,5.3,4.3,9.7,9.7,9.7h63.9c0.7,0,1.3, 0.3,1.8,0.8 l14,14c0.1,0.1,0.2,0.2,0.4,0.1c0.2-0.1,0.2-0.2,0.2-0.3v-12c0-1.4,1.1-2.6,2.6-2.6h8.2c5.3,0,9.7-4.3, 9.7-9.7V48.2 c0-5.3-4.3-9.7-9.7-9.7H83.4z"
      })), /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
        className: "st0",
        d: "M36.7,166.6c-0.7,0-1.4-0.1-2.1-0.4c-2-0.8-3.4-2.8-3.4-5v-9.4h-5.6c-8.2, 0-14.8-6.6-14.8-14.8V82.1 c0-8.2,6.6-14.8,14.8-14.8h43.8c1.4,0,2.6,1.1,2.6,2.6s-1.1,2.6-2.6, 2.6H25.6c-5.3,0-9.7,4.3-9.7,9.7V137c0,5.3,4.3,9.7,9.7,9.7 h8.2c1.4,0,2.6,1.1,2.6,2.6v12c0,0.1, 0,0.2,0.2,0.3c0.2,0.1,0.3,0,0.4-0.1l14-14c0.5-0.5,1.1-0.8,1.8-0.8h63.9 c5.3,0,9.7-4.3,9.7-9.7v-20c0-1.4,1.1-2.6,2.6-2.6s2.6,1.1,2.6,2.6v20c0,8.2-6.6,14.8-14.8,14.8H53.8L40.6,165 C39.5,166.1,38.1,166.6,36.7,166.6z"
      })))));
    }
  }]);
}(_react.Component);
var _default = exports["default"] = ContactUsSVG;