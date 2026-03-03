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
var _quoteSecured = require("./styles/quoteSecured");
var _secureIcon = _interopRequireDefault(require("../../../../../../components/svg/components/secureIcon"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var QuoteSecured = /*#__PURE__*/function (_React$PureComponent) {
  function QuoteSecured() {
    (0, _classCallCheck2["default"])(this, QuoteSecured);
    return _callSuper(this, QuoteSecured, arguments);
  }
  (0, _inherits2["default"])(QuoteSecured, _React$PureComponent);
  return (0, _createClass2["default"])(QuoteSecured, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_quoteSecured.QuotationRassurancePayment, null, /*#__PURE__*/_react["default"].createElement(_quoteSecured.QuotationRassurancePaymentLock, null, /*#__PURE__*/_react["default"].createElement(_secureIcon["default"], null)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_quoteSecured.QuotationRassurancePaymentTitle, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_quoteDetails_secured_title"
      })), /*#__PURE__*/_react["default"].createElement(_quoteSecured.QuotationRassurancePaymentText, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_quoteDetails_secured_text"
      }))));
    }
  }]);
}(_react["default"].PureComponent);
var _default = exports["default"] = QuoteSecured;