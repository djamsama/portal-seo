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
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _mySpaceQuotationValidation = require("../../styles/mySpaceQuotationValidation");
var _quoteSummary = _interopRequireDefault(require("../quoteSummary"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Separator = _styledComponents["default"].div.withConfig({
  componentId: "sc-qdj3fj-0"
})(["border-bottom:5px solid #555;margin-top:45px;margin-bottom:20px;"]);
var QuoteInformation = /*#__PURE__*/function (_React$PureComponent) {
  function QuoteInformation() {
    (0, _classCallCheck2["default"])(this, QuoteInformation);
    return _callSuper(this, QuoteInformation, arguments);
  }
  (0, _inherits2["default"])(QuoteInformation, _React$PureComponent);
  return (0, _createClass2["default"])(QuoteInformation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        quoteAmount = _this$props.quoteAmount,
        advance = _this$props.advance,
        currency = _this$props.currency,
        totalAmount = _this$props.totalAmount;
      return totalAmount ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mySpaceQuotationValidation.Title, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_quoteDetails_title"
      })), /*#__PURE__*/_react["default"].createElement(_quoteSummary["default"], {
        quoteAmount: quoteAmount,
        advance: advance,
        currency: currency,
        totalAmount: totalAmount
      })) : /*#__PURE__*/_react["default"].createElement(Separator, null);
    }
  }]);
}(_react["default"].PureComponent);
var _default = exports["default"] = QuoteInformation;