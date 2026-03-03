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
var _cvv = require("./styles/cvv");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var CVVSVG = /*#__PURE__*/function (_Component) {
  function CVVSVG() {
    (0, _classCallCheck2["default"])(this, CVVSVG);
    return _callSuper(this, CVVSVG, arguments);
  }
  (0, _inherits2["default"])(CVVSVG, _Component);
  return (0, _createClass2["default"])(CVVSVG, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_svg.SvgContainer, {
        className: this.props.className
      }, /*#__PURE__*/_react["default"].createElement(_cvv.CVVSvg, {
        id: "Layer_1",
        "data-name": "Layer 1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1869.4 1297"
      }, /*#__PURE__*/_react["default"].createElement("title", null, "Paiement-cvv-icon"), /*#__PURE__*/_react["default"].createElement("rect", {
        className: "cls-1",
        x: "356.2",
        y: "469.2",
        width: "1160.5",
        height: "153.8"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        className: "cls-1",
        d: "M531.3,1054.3v-35h810.5a157.7,157.7,0,0,0,157.5-157.5h0V428.9a157.7,157.7,0,0,0-157.5-157.5H531.3A157.7,157.7,0,0,0,373.8,428.9h0V861.8a157.7,157.7,0,0,0,157.5,157.5h0v35c-106.4,0-192.5-86.2-192.6-192.5h0V428.9c.1-106.3,86.2-192.5,192.6-192.5h810.5c106.3,0,192.5,86.2,192.5,192.5h0V861.8c0,106.3-86.2,192.5-192.5,192.5H531.3Z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        className: "cls-1",
        d: "M356.2,642.9a17.3,17.3,0,0,1-12.3-5.2h0a17.3,17.3,0,0,1-5.2-12.3h0V471.6a17.7,17.7,0,0,1,5.2-12.4h0a17.2,17.2,0,0,1,12.3-5.1H1516.8a17.6,17.6,0,0,1,12.4,5.1h0a18,18,0,0,1,5.1,12.4h0V625.4a17.6,17.6,0,0,1-5.1,12.3h0a17.7,17.7,0,0,1-12.4,5.2H356.2Zm1160.6-17.5v0ZM373.7,607.9H1499.3V489.1H373.7V607.9Z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        className: "cls-1",
        d: "M531.4,796.7a17.5,17.5,0,0,1-17.5-17.5h0a17.5,17.5,0,0,1,17.5-17.5h450a17.5,17.5,0,0,1,17.5,17.5h0a17.5,17.5,0,0,1-17.5,17.5h-450Z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        className: "cls-1",
        d: "M531.4,892.8a17.5,17.5,0,0,1-17.5-17.5h0a17.5,17.5,0,0,1,17.5-17.5H806.9a17.5,17.5,0,0,1,17.6,17.5h0a17.5,17.5,0,0,1-17.6,17.5H531.4Z"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        className: "cls-2",
        x: "1082.1",
        y: "693.4",
        width: "363.3",
        height: "199.54"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        className: "cls-3",
        d: "M1082.1,910.4a17.6,17.6,0,0,1-12.4-5.1h0a18,18,0,0,1-5.1-12.4h0V693.4a18,18,0,0,1,5.1-12.4h0a17.6,17.6,0,0,1,12.4-5.1h363.4a17.2,17.2,0,0,1,12.3,5.1h0a17.7,17.7,0,0,1,5.2,12.4h0V892.9a17.7,17.7,0,0,1-5.2,12.4h0a17.6,17.6,0,0,1-12.3,5.1H1082.1Zm363.4-17.5v0Zm-345.9-17.5H1428V710.9H1099.6V875.4Z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        className: "cls-1",
        d: "M1145.6,748.4l9,15.2c2.7,4.7,5.1,9.4,7.6,13.7h.3c2.5-4.9,4.7-9.6,7.2-14.1l8-14.8h31l-30.2,43.7,30.6,48.1h-32.3l-9.2-16.5c-2.6-4.5-4.9-9.2-7.1-13.9h-.6c-2.3,4.9-4.7,9.4-6.9,13.9l-8.7,16.5H1113l31.1-46.8-30.4-45Z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        className: "cls-1",
        d: "M1243.1,748.4l9,15.2,7.5,13.7h.4c2.4-4.9,4.7-9.6,7.1-14.1l8.1-14.8h31l-30.3,43.7,30.6,48.1h-32.2l-9.3-16.5c-2.6-4.5-4.8-9.2-7.1-13.9h-.6c-2.2,4.9-4.6,9.4-6.9,13.9l-8.6,16.5h-31.4l31.2-46.8-30.4-45Z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        className: "cls-1",
        d: "M1340.5,748.4l9,15.2c2.7,4.7,5.1,9.4,7.5,13.7h.4c2.5-4.9,4.7-9.6,7.2-14.1l8-14.8h31l-30.2,43.7,30.6,48.1h-32.3l-9.2-16.5c-2.6-4.5-4.9-9.2-7.1-13.9h-.6c-2.3,4.9-4.7,9.4-7,13.9l-8.6,16.5h-31.4l31.2-46.8-30.4-45Z"
      })));
    }
  }]);
}(_react.Component);
var _default = exports["default"] = CVVSVG;