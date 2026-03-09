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
var QuotationService = /*#__PURE__*/function (_RequestService) {
  function QuotationService() {
    var _this;
    (0, _classCallCheck2["default"])(this, QuotationService);
    _this = _callSuper(this, QuotationService);
    _this.urlRfq = "/ajax/myspace/secure/rfq-quotation/changeQuoteStatus";
    _this.urlRequest = "/ajax/myspace/secure/request-quotation/changeQuoteStatus";
    return _this;
  }
  (0, _inherits2["default"])(QuotationService, _RequestService);
  return (0, _createClass2["default"])(QuotationService, [{
    key: "saveQuotation",
    value: function saveQuotation(leadQuotationSigning) {
      if (leadQuotationSigning.context === "request") {
        return this.saveRequestQuotation(leadQuotationSigning);
      }
      return this.saveRfqQuotation(leadQuotationSigning);
    }
  }, {
    key: "saveRfqQuotation",
    value: function saveRfqQuotation(leadQuotationSigning) {
      return this.put("".concat(this.urlRfq), leadQuotationSigning);
    }
  }, {
    key: "saveRequestQuotation",
    value: function saveRequestQuotation(leadQuotationSigning) {
      return this.put("".concat(this.urlRequest), leadQuotationSigning);
    }
  }]);
}(_requestService["default"]);
var _default = exports["default"] = QuotationService;