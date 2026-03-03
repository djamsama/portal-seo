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
var _formattedHTMLMessage = _interopRequireDefault(require("../../../formattedHTMLMessage"));
var _supplierDetails = require("../../styles/supplierDetails");
var _popup = _interopRequireDefault(require("../../../popup"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var SupplierReactivity = /*#__PURE__*/function (_PureComponent) {
  function SupplierReactivity() {
    (0, _classCallCheck2["default"])(this, SupplierReactivity);
    return _callSuper(this, SupplierReactivity, arguments);
  }
  (0, _inherits2["default"])(SupplierReactivity, _PureComponent);
  return (0, _createClass2["default"])(SupplierReactivity, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        supplier = _this$props.supplier,
        secondary = _this$props.secondary;
      return /*#__PURE__*/_react["default"].createElement(_supplierDetails.Reactivity, {
        className: "reactivity"
      }, secondary && /*#__PURE__*/_react["default"].createElement(_popup["default"], {
        on: "hover",
        flowing: true,
        hoverable: true,
        position: "top left",
        contentstyle: {
          marginTop: "0"
        },
        trigger: /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
          id: "foj_rating_answer_time_".concat(supplier.reactivityInterval.toLowerCase(), "_otherSuppliers")
        }))
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "reactivity-tooltip"
      }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_rating_answer_time_".concat(supplier.reactivityInterval.toLowerCase())
      }))), !secondary && /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_rating_answer_time_".concat(supplier.reactivityInterval.toLowerCase())
      }));
    }
  }]);
}(_react.PureComponent);
var _default = exports["default"] = SupplierReactivity;