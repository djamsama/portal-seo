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
var _productLabel = require("./styles/productLabel");
var _labelWrapper = _interopRequireDefault(require("./components/labelWrapper"));
var _productMainFeatureValues = _interopRequireDefault(require("../productMainFeatureValues"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable react/no-danger */
var ProductLabel = /*#__PURE__*/function (_PureComponent) {
  function ProductLabel() {
    (0, _classCallCheck2["default"])(this, ProductLabel);
    return _callSuper(this, ProductLabel, arguments);
  }
  (0, _inherits2["default"])(ProductLabel, _PureComponent);
  return (0, _createClass2["default"])(ProductLabel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        label = _this$props.label,
        brand = _this$props.brand,
        linkUrl = _this$props.linkUrl,
        featureValues = _this$props.featureValues,
        smallLabel = _this$props.smallLabel,
        smallTag = _this$props.smallTag,
        displayFeatureValue = _this$props.displayFeatureValue;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_productLabel.ProductLabelTitle, {
        smallLabel: smallLabel,
        "data-cy": "productTitle"
      }, /*#__PURE__*/_react["default"].createElement(_labelWrapper["default"], {
        label: label,
        brand: brand,
        linkUrl: linkUrl
      })), /*#__PURE__*/_react["default"].createElement(_productMainFeatureValues["default"], {
        smallTag: smallTag,
        displayFeatureValue: displayFeatureValue,
        featureValues: featureValues
      }));
    }
  }]);
}(_react.PureComponent);
var _default = exports["default"] = ProductLabel;
ProductLabel.defaultProps = {
  brand: null,
  linkUrl: null,
  featureValues: [],
  smallLabel: false,
  smallTag: false,
  displayFeatureValue: "inline-block"
};