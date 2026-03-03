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
var TimeFliesBySVG = /*#__PURE__*/function (_Component) {
  function TimeFliesBySVG() {
    (0, _classCallCheck2["default"])(this, TimeFliesBySVG);
    return _callSuper(this, TimeFliesBySVG, arguments);
  }
  (0, _inherits2["default"])(TimeFliesBySVG, _Component);
  return (0, _createClass2["default"])(TimeFliesBySVG, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_svg.SvgContainer, {
        className: this.props.className
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        version: "1.1",
        x: "0px",
        y: "0px",
        viewBox: "0 0 75 75",
        xmlSpace: "preserve"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Calque_1"
      }, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("rect", {
        className: "st0",
        width: "75",
        height: "75"
      }))), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Calque_2"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Calque_3"
      }, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
        className: "st1",
        d: "M63.8,38c0-10.1-8.2-18.3-18.3-18.3c-10.1,0-18.3,8.2-18.3,18.3c0,10.1,8.2,18.3,18.3,18.3    C55.6,56.3,63.8,48.1,63.8,38z M41.8,37.5l9.5-9.5l2.1,2.1l-8.2,8.2l4.2,4.2l-2.1,2.1l-6.1-6.1l0.8-0.8L41.8,37.5z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        className: "st1",
        d: "M0,0v75h75V0H0z M38.8,10h4v3h-4V10z M32.1,10h4v3h-4V10z M25,10h4v3h-4V10z M17.9,10h4v3h-4V10z M7.6,33.7    h8.7v3H7.6V33.7z M3.7,36.7H0.5v-3h3.2V36.7z M7.6,40.8h15v3h-15V40.8z M10,56.3h15v3H10V56.3z M28.9,66h-4v-3h4V66z M36.1,66h-4    v-3h4V66z M42.8,66h-4v-3h4V66z M29.7,59.3v-3h5c-2.3-1.4-4.3-3.2-6-5.3H17.9v-3h8.9c-1.6-3-2.5-6.4-2.5-10c0-0.4,0-0.8,0.1-1.3    h-4.1v-3h4.5c0.4-1.7,0.9-3.4,1.7-4.9H16.3v-3h11.8c1.3-1.9,2.9-3.5,4.8-4.9H10.8v-3h27.7V18c2.2-0.8,4.6-1.2,7.1-1.2    c11.7,0,21.3,9.5,21.3,21.3c0,11.7-9.5,21.3-21.3,21.3c-0.4,0-0.8,0-1.2-0.1v0.1H29.7z M45.5,66v-3c13.8,0,25-11.2,25-25    s-11.2-25-25-25v-3c15.4,0,28,12.5,28,28S61,66,45.5,66z"
      })))));
    }
  }]);
}(_react.Component);
var _default = exports["default"] = TimeFliesBySVG;