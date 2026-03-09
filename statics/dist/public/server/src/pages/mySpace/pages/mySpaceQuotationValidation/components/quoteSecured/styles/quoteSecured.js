"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuotationRassurancePaymentTitle = exports.QuotationRassurancePaymentText = exports.QuotationRassurancePaymentLock = exports.QuotationRassurancePayment = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var QuotationRassurancePayment = exports.QuotationRassurancePayment = _styledComponents["default"].div.withConfig({
  componentId: "sc-156ze0x-0"
})(["display:flex;justify-content:flex-start;margin:50px 0 25px 0;"]);
var QuotationRassurancePaymentLock = exports.QuotationRassurancePaymentLock = _styledComponents["default"].div.withConfig({
  componentId: "sc-156ze0x-1"
})(["padding-right:20px;width:50px;text-align:center;.st0{fill:", ";}"], function (props) {
  return props.theme.mainLight;
});
var QuotationRassurancePaymentTitle = exports.QuotationRassurancePaymentTitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-156ze0x-2"
})(["font-size:16px;font-weight:bold;margin:0px 0 10px;"]);
var QuotationRassurancePaymentText = exports.QuotationRassurancePaymentText = _styledComponents["default"].div.withConfig({
  componentId: "sc-156ze0x-3"
})(["margin-top:10px;"]);