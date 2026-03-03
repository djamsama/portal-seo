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
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../../components/formattedHTMLMessage"));
var _contextComponent = require("../../../../../../components/contextComponent");
var _quoteSummary = require("./styles/quoteSummary");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var QuoteSummary = /*#__PURE__*/function (_ContextComponent) {
  function QuoteSummary() {
    (0, _classCallCheck2["default"])(this, QuoteSummary);
    return _callSuper(this, QuoteSummary, arguments);
  }
  (0, _inherits2["default"])(QuoteSummary, _ContextComponent);
  return (0, _createClass2["default"])(QuoteSummary, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        quoteAmount = _this$props.quoteAmount,
        advance = _this$props.advance,
        currency = _this$props.currency,
        totalAmount = _this$props.totalAmount;
      return /*#__PURE__*/_react["default"].createElement(_quoteSummary.QuoteSummaryContainer, null, /*#__PURE__*/_react["default"].createElement(_quoteSummary.QuoteSummaryItem, null, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_quoteDetails_amount"
      })), /*#__PURE__*/_react["default"].createElement("span", {
        id: "quoteAmountSummary"
      }, new Intl.NumberFormat(this.context.config.portal.locale, {
        style: "currency",
        currency: currency
      }).format(quoteAmount))), /*#__PURE__*/_react["default"].createElement(_quoteSummary.QuoteSummaryItem, null, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_quoteDetails_taxedAmount"
      })), /*#__PURE__*/_react["default"].createElement("span", {
        id: "totalAmountSummary"
      }, new Intl.NumberFormat(this.context.config.portal.locale, {
        style: "currency",
        currency: currency
      }).format(totalAmount))), advance !== totalAmount && /*#__PURE__*/_react["default"].createElement(_quoteSummary.QuoteSummaryItem, null, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_quoteDetails_advance"
      })), /*#__PURE__*/_react["default"].createElement("span", {
        id: "advanceSummary"
      }, new Intl.NumberFormat(this.context.config.portal.locale, {
        style: "currency",
        currency: currency
      }).format(advance))), /*#__PURE__*/_react["default"].createElement(_quoteSummary.QuoteSummarySeparator, null), /*#__PURE__*/_react["default"].createElement(_quoteSummary.QuoteSummarySum, null, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_quoteDetails_toPay"
      })), /*#__PURE__*/_react["default"].createElement("span", {
        id: "amountSummary"
      }, new Intl.NumberFormat(this.context.config.portal.locale, {
        style: "currency",
        currency: currency
      }).format(advance))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = QuoteSummary;