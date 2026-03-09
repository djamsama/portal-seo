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
var ThumbUpSVG = /*#__PURE__*/function (_Component) {
  function ThumbUpSVG() {
    (0, _classCallCheck2["default"])(this, ThumbUpSVG);
    return _callSuper(this, ThumbUpSVG, arguments);
  }
  (0, _inherits2["default"])(ThumbUpSVG, _Component);
  return (0, _createClass2["default"])(ThumbUpSVG, [{
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
      }, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "st1",
        points: "21.1,11.1 20.1,13.3 17.6,13.7 19.4,15.4 19,17.8 21.1,16.7 23.3,17.8 22.9,15.4 24.7,13.7     22.2,13.3   "
      }), /*#__PURE__*/_react["default"].createElement("path", {
        className: "st1",
        d: "M48.8,59.3h-3.4v-3h3.5h1c0.1-0.1,0.5-0.8,0.5-1.9c0-1.1-0.4-1.8-0.6-1.9h-4.4v-3h4.4h0.5    c0.1-0.1,0.6-0.7,0.6-1.9c0-1.1-0.5-1.8-0.7-1.9h-4.9v-3h4.9c0.1-0.1,0.6-0.7,0.6-1.9s-0.5-1.8-0.7-1.9L37,39v-0.7h-1.2v-4.2    c0-0.8,0.5-1.6,1.3-2.7c1.1-1.6,2.7-3.8,2.7-6.3c0-1.7-0.3-2.3-0.5-2.4h-2.4c-1.7,6.2-10.6,14.2-12.4,15.8v20.6    c2,0.5,3.4,1.8,4,2.6h2.1h18.4c0.1,0,0.4-0.5,0.4-1.2C49.3,59.8,49,59.4,48.8,59.3z"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "st1",
        points: "36.9,4.3 35.8,6.5 33.4,6.9 35.2,8.6 34.7,11.1 36.9,9.9 39.1,11.1 38.7,8.6 40.5,6.9 38,6.5   "
      }), /*#__PURE__*/_react["default"].createElement("path", {
        className: "st1",
        d: "M0,0v75h75V0H0z M31,5.3l3.5-0.5l1.6-3.2c0.3-0.7,1.3-0.7,1.6,0l1.6,3.2l3.5,0.5c0.6,0.1,0.9,0.5,0.9,0.8    c0,0.2-0.1,0.5-0.3,0.7l0,0l-2.6,2.5l0.6,3.5c0,0.1,0,0.2,0,0.2c0,0.5-0.3,0.9-0.8,0.9c-0.2,0-0.4-0.1-0.6-0.2l-3.1-1.6l-3.2,1.7    c-0.1,0.1-0.3,0.1-0.5,0.1c-0.5,0-0.8-0.4-0.8-0.9c0-0.1,0-0.1,0-0.2L33,9.3l-2.6-2.5c-0.1-0.1-0.3-0.4-0.3-0.7    C30.1,5.8,30.4,5.4,31,5.3z M14.4,12.9c0-0.3,0.2-0.7,0.8-0.8l3.5-0.5l1.6-3.2c0.3-0.7,1.3-0.7,1.6,0l1.6,3.2l3.5,0.5    c0.6,0.1,0.9,0.5,0.9,0.8c0,0.2-0.1,0.5-0.3,0.7l0,0L25,16.1l0.6,3.5c0,0.1,0,0.2,0,0.2c0,0.5-0.3,0.9-0.8,0.9    c-0.2,0-0.4-0.1-0.6-0.2l-3.1-1.6L18,20.5c-0.1,0.1-0.3,0.1-0.5,0.1c-0.5,0-0.8-0.4-0.8-0.9c0-0.1,0-0.1,0-0.2l0.6-3.6l-2.6-2.5    C14.6,13.5,14.4,13.2,14.4,12.9z M14.9,60.6h3v1.7h-3V60.6z M54,47.7c0,1.5-0.5,2.9-1.3,3.8c0.5,0.8,0.7,1.9,0.7,3    c0,1.7-0.6,3.2-1.5,4.1c0.3,0.6,0.4,1.3,0.4,2c0,2.3-1.5,4.2-3.4,4.2H30.5H28h-1.1L26.4,64c0-0.1-0.7-1.1-2-1.7v5.2h-8.8v-3h5.8    V39.3h-5.8v-3h6.7c3.2-2.8,11.4-10.7,11.8-15.3l0.1-1.4h5.3c0.3,0,3.2,0.2,3.2,5.4c0,3.5-1.9,6.2-3.2,8c-0.3,0.4-0.6,0.9-0.8,1.1    V36h11.6c2,0,3.6,2.1,3.6,4.9c0,1.3-0.4,2.5-1,3.4C53.6,45.2,54,46.4,54,47.7z M59.1,12.4l-2.6,2.5l0.6,3.5c0,0.1,0,0.2,0,0.2    c0,0.5-0.3,0.9-0.8,0.9c-0.2,0-0.4-0.1-0.6-0.2l-3.1-1.6l-3.2,1.7c-0.1,0.1-0.3,0.1-0.5,0.1c-0.5,0-0.8-0.4-0.8-0.9    c0-0.1,0-0.1,0-0.2l0.6-3.5l-2.6-2.5c-0.1-0.1-0.3-0.4-0.3-0.7c0-0.3,0.2-0.7,0.8-0.8l3.5-0.5l1.6-3.2c0.3-0.7,1.3-0.7,1.6,0    l1.6,3.2l3.5,0.5c0.6,0.1,0.9,0.5,0.9,0.8C59.5,12,59.4,12.2,59.1,12.4z"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "st1",
        points: "52.7,15.5 54.9,16.7 54.5,14.3 56.2,12.5 53.8,12.2 52.7,10 51.6,12.2 49.2,12.5 50.9,14.3     50.5,16.7   "
      })))));
    }
  }]);
}(_react.Component);
var _default = exports["default"] = ThumbUpSVG;