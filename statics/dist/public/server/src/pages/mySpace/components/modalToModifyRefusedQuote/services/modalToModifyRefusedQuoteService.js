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
var _requestService = _interopRequireDefault(require("../../../../../services/impl/requestService"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var ModalToModifyRefusedQuoteService = exports["default"] = /*#__PURE__*/function (_RequestService) {
  function ModalToModifyRefusedQuoteService(context) {
    (0, _classCallCheck2["default"])(this, ModalToModifyRefusedQuoteService);
    return _callSuper(this, ModalToModifyRefusedQuoteService, [{
      baseUrl: context.config.portal.baseUrl
    }]);
  }
  (0, _inherits2["default"])(ModalToModifyRefusedQuoteService, _RequestService);
  return (0, _createClass2["default"])(ModalToModifyRefusedQuoteService, [{
    key: "submit",
    value: function submit(leadContext, values) {
      return this.post("/ajax/myspace/toModifyRefusedQuote/".concat(leadContext === "rfq" ? "RFQ" : "REQUEST"), values);
    }
  }]);
}(_requestService["default"]);