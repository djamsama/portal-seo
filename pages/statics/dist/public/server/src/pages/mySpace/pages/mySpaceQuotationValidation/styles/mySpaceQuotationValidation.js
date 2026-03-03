"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.QuotationOverviewContentDiv = exports.MySpaceQuotationValidationWrapper = exports.MySpaceQuotationValidationTitle = exports.MySpaceQuotationValidationBottom = exports.ContinueButton = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _containerWide = _interopRequireDefault(require("../../../../../components/styles/containerWide"));
var _responsive = _interopRequireDefault(require("../../../../../components/styles/responsive"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var media = _responsive["default"].media();
var MySpaceQuotationValidationWrapper = exports.MySpaceQuotationValidationWrapper = (0, _styledComponents["default"])(_containerWide["default"]).withConfig({
  componentId: "sc-ie43cs-0"
})(["max-width:1110px;width:100%;color:rgb(85,85,85);padding-left:0;padding-right:0;", " ", ";.grid{", "}.logo{svg{max-width:274px;", " height:auto;margin-top:20px;}}.steps{", ";}.step2{.RightSide{", ";}}"], media.screenLgMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: 970px;\n  "]))), media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    width: auto;\n  "]))), media.screenLgMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n      margin-left: 0px;\n      margin-right: 0px;\n    "]))), media.screenLgMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n        max-width: 180px;\n      "]))), media.screenXsMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n      /* Passage des steps en lignes. */\n      flex-direction: column;\n      margin-left: auto;\n      margin-right: 0px;\n      &:after {\n        display: none;\n      }\n      .step {\n        display: flex;\n        align-items: center;\n        .stepCount {\n          margin: 0;\n        }\n      }\n    "]))), media.screenXsMin(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n        order: -1;\n      "]))));
var MySpaceQuotationValidationTitle = exports.MySpaceQuotationValidationTitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-ie43cs-1"
})(["margin-bottom:20px;padding-bottom:20px;font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;font-size:1.5em;text-transform:uppercase;border-bottom:5px solid #555;"]);
var QuotationOverviewContentDiv = exports.QuotationOverviewContentDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-ie43cs-2"
})(["margin-bottom:35px;"]);
var ContinueButton = exports.ContinueButton = _styledComponents["default"].a.withConfig({
  componentId: "sc-ie43cs-3"
})(["display:inline-block;padding:7px 12px;line-height:1.5em;text-align:center;white-space:nowrap;border:none;box-sizing:border-box;cursor:pointer;transition:0.25s ease-in-out 0s;width:100%;font-size:1.333em;font-weight:700;text-transform:uppercase;margin:0 0 10px;color:", ";background-color:#fff;border:2px solid ", ";:hover{color:#fff;background-color:", ";}}"], function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLight;
});
var Title = exports.Title = _styledComponents["default"].p.withConfig({
  componentId: "sc-ie43cs-4"
})(["margin-bottom:20px;padding-bottom:20px;font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;font-size:1.5em;text-transform:uppercase;border-bottom:5px solid #555;"]);
var MySpaceQuotationValidationBottom = exports.MySpaceQuotationValidationBottom = _styledComponents["default"].div.withConfig({
  componentId: "sc-ie43cs-5"
})(["display:flex;align-items:center;justify-content:center;flex-wrap:wrap;margin-top:25px;margin-bottom:25px;div{margin-left:10px;text-align:center;}"]);