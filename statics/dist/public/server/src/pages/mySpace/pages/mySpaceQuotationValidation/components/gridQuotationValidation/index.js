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
var _gridQuotationValidation = require("./styles/gridQuotationValidation");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Composant permettant de gerer la grille des pages tunnel
 */
var GridQuotationValidation = /*#__PURE__*/function (_Component) {
  function GridQuotationValidation() {
    (0, _classCallCheck2["default"])(this, GridQuotationValidation);
    return _callSuper(this, GridQuotationValidation, arguments);
  }
  (0, _inherits2["default"])(GridQuotationValidation, _Component);
  return (0, _createClass2["default"])(GridQuotationValidation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        componentsClassName = _this$props.componentsClassName,
        componentsTop = _this$props.componentsTop,
        componentsLeft = _this$props.componentsLeft,
        componentsRight = _this$props.componentsRight;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, componentsTop), /*#__PURE__*/_react["default"].createElement(_gridQuotationValidation.FunnelBody, {
        className: componentsClassName
      }, /*#__PURE__*/_react["default"].createElement(_gridQuotationValidation.FirstPart, {
        className: "LeftSide"
      }, componentsLeft), componentsRight && /*#__PURE__*/_react["default"].createElement(_gridQuotationValidation.SecondPart, {
        id: "col-right",
        className: "RightSide"
      }, componentsRight)));
    }
  }]);
}(_react.Component);
var _default = exports["default"] = GridQuotationValidation;