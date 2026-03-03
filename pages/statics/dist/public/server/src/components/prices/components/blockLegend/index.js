"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _formattedHTMLMessage = _interopRequireDefault(require("../../../formattedHTMLMessage"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var BlockLegend = exports["default"] = /*#__PURE__*/function (_React$Component) {
  function BlockLegend() {
    (0, _classCallCheck2["default"])(this, BlockLegend);
    return _callSuper(this, BlockLegend, arguments);
  }
  (0, _inherits2["default"])(BlockLegend, _React$Component);
  return (0, _createClass2["default"])(BlockLegend, [{
    key: "render",
    value: function render() {
      var productPrice = this.props.productPrice;
      var id = productPrice.priceTypeLabelKey;
      if (!id && productPrice && productPrice.priceType) {
        id = productPrice.priceType ? "global_price_fromLabel" : "fo_product_price_indicatedNoTaxPriceLabel";
      }
      if (!id) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "\xA0");
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: id
      }, function (txt) {
        return txt;
      }), " *");
    }
  }]);
}(_react["default"].Component);