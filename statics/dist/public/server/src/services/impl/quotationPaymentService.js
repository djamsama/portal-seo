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
var _requestService = _interopRequireDefault(require("./requestService"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var QuotationPaymentService = /*#__PURE__*/function (_RequestService) {
  function QuotationPaymentService(context) {
    var _context$config;
    (0, _classCallCheck2["default"])(this, QuotationPaymentService);
    return _callSuper(this, QuotationPaymentService, [{
      baseUrl: context === null || context === void 0 || (_context$config = context.config) === null || _context$config === void 0 || (_context$config = _context$config.portal) === null || _context$config === void 0 ? void 0 : _context$config.baseUrl
    }]);
  }
  (0, _inherits2["default"])(QuotationPaymentService, _RequestService);
  return (0, _createClass2["default"])(QuotationPaymentService, [{
    key: "prepareCardPayment",
    value: function prepareCardPayment(leadContext, quoteId) {
      var url = "ajax/myspace/secure/".concat(leadContext, "-quotation/initiateCardPayment");
      return this.post(url, {
        quoteId: quoteId
      });
    }
  }, {
    key: "processCardPayment",
    value: function processCardPayment(leadContext, cardRegistration, quoteId) {
      var url = "ajax/myspace/secure/".concat(leadContext, "-quotation/processCardPayment");
      cardRegistration.browserInfo = {};
      cardRegistration.browserInfo.language = navigator.language;
      cardRegistration.browserInfo.javaEnabled = navigator.javaEnabled();
      cardRegistration.browserInfo.timeZoneOffset = new Date().getTimezoneOffset();
      cardRegistration.browserInfo.javascriptEnabled = true;
      cardRegistration.browserInfo.screenWidth = window.screen.width;
      cardRegistration.browserInfo.screenHeight = window.screen.height;
      cardRegistration.browserInfo.colorDepth = window.screen.colorDepth;
      return this.put(url, {
        cardRegistration: cardRegistration,
        quoteId: quoteId
      });
    }
  }, {
    key: "processBankWirePayment",
    value: function processBankWirePayment(leadContext, quoteId) {
      var url = "ajax/myspace/secure/".concat(leadContext, "-quotation/processBankWirePayment");
      return this.put(url, quoteId);
    }
  }]);
}(_requestService["default"]);
var _default = exports["default"] = QuotationPaymentService;