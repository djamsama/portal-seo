"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuotationPaymentWrapper = exports.QuotationPaymentWireHidden = exports.QuotationPaymentSeparator = exports.QuotationPaymentNotice = exports.QuotationPaymentChoice = exports.QuotationPaymentCardsLogos = exports.QuotationPaymentCardHidden = exports.QuotationPaymentAccordion = exports.FormSubTitle = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../components/styles/responsive"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var media = _responsive["default"].media();
var QuotationPaymentWrapper = exports.QuotationPaymentWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-25iwd4-0"
})(["", ";"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    padding-top: 5px;\n  "]))));
var QuotationPaymentNotice = exports.QuotationPaymentNotice = _styledComponents["default"].div.withConfig({
  componentId: "sc-25iwd4-1"
})(["margin-bottom:50px;i{width:13px;margin:10px 10px 0 0;}"]);
var QuotationPaymentAccordion = exports.QuotationPaymentAccordion = _styledComponents["default"].div.withConfig({
  componentId: "sc-25iwd4-2"
})(["background:#ffffff 0% 0% no-repeat padding-box;box-shadow:0px 5px 5px #0000001a;border:1px solid #eeeeee;opacity:1;.container input:checked ~ .section-wire{height:160px;}.container input:checked ~ .section-card{height:420px;}svg{margin:-10px 0 0 5px;.st0{fill:", ";}}button{margin-top:30px;}"], function (props) {
  return props.theme.mainLight;
});
var QuotationPaymentChoice = exports.QuotationPaymentChoice = _styledComponents["default"].div.withConfig({
  componentId: "sc-25iwd4-3"
})(["margin-top:10px;padding:30px 15px 15px 20px;display:flex;justify-content:flex-start;flex-wrap:wrap;font-family:Arial,Helvetica,sans-serif;font-size:14px;input{vertical-align:top;margin:3px 10px 0 0;}input[type=\"radio\"]{margin-bottom:20px;}"]);
var QuotationPaymentWireHidden = exports.QuotationPaymentWireHidden = _styledComponents["default"].div.withConfig({
  componentId: "sc-25iwd4-4"
})(["overflow:hidden;height:0;transition:0.25s;width:100%;padding-top:10px;button{max-width:336px;margin-bottom:25px;display:block;text-transform:uppercase;}"]);
var QuotationPaymentCardHidden = exports.QuotationPaymentCardHidden = _styledComponents["default"].div.withConfig({
  componentId: "sc-25iwd4-5"
})(["overflow:hidden;height:0;transition:0.6s;width:100%;margin-top:10px;input,label{display:block;i{margin-left:5px;}}input{font-size:0.9em;background-color:#f6f6f6;border:2px solid #e9e9e9;padding:8px 10px;", "}label{margin-top:20px;font-size:12px;font-weight:bold;line-height:1.2em;}.wide{width:350px;", ";}.narrow{max-width:120px;}button{max-width:336px;margin-bottom:25px;display:block;text-transform:uppercase;}"], media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n        font-size: 16px;\n    "]))), media.screenXsMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 240px;\n  "]))));
var QuotationPaymentSeparator = exports.QuotationPaymentSeparator = _styledComponents["default"].div.withConfig({
  componentId: "sc-25iwd4-6"
})(["border-bottom:1px solid #e9e9e9;"]);
var QuotationPaymentCardsLogos = exports.QuotationPaymentCardsLogos = _styledComponents["default"].div.withConfig({
  componentId: "sc-25iwd4-7"
})(["display:flex;", ";"], media.screenXsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  svg {\n    width: 40px;\n    margin-left: 2px;\n  }\n  "]))));
var FormSubTitle = exports.FormSubTitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-25iwd4-8"
})(["font-weight:700;margin-bottom:20px;font-size:1.167em;&.Delivery{padding-top:20px;}"]);