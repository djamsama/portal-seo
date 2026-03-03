"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CongratulationValidationContentHeader = exports.CongratulationValidationContentFooter = exports.CongratulationValidationContentBody = exports.CongratulationValidationContent = exports.CongratulationValidationButton = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../components/styles/responsive"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var media = _responsive["default"].media();
var CongratulationValidationContent = exports.CongratulationValidationContent = _styledComponents["default"].section.withConfig({
  componentId: "sc-23py6g-0"
})(["margin-bottom:30px;text-align:center;margin-top:35px;padding:50px;background-color:#f6f6f6;border-radius:5px;"]);
var CongratulationValidationContentHeader = exports.CongratulationValidationContentHeader = _styledComponents["default"].header.withConfig({
  componentId: "sc-23py6g-1"
})(["font-size:14px;p{margin-bottom:0;font-size:16px;}h2{margin-bottom:10px;font-size:24px;font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;line-height:1em;text-transform:uppercase;color:", ";i{margin-right:10px;}.icon-green{color:#4cbb6c;}.icon-red{color:#d43030;}.icon-grey{color:#cccccc;}}"], function (props) {
  return props.theme.mainLight;
});
var CongratulationValidationContentFooter = exports.CongratulationValidationContentFooter = _styledComponents["default"].footer.withConfig({
  componentId: "sc-23py6g-2"
})(["h3{margin-top:50px;margin-bottom:30px;font-size:20px;font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;line-height:1em;color:", ";}ol{counter-reset:item;padding-left:0;max-width:460px;margin:0 auto;text-align:left;li{display:table;font-size:14px;margin-top:25px;position:relative;list-style-type:none;counter-increment:item;&:before{display:inline-block;width:1em;padding-right:0.5em;font-weight:bold;text-align:right;content:counter(item) \".\";}span{display:table-cell;}}}li.rassurance::after{position:absolute;display:block;text-align:center;width:30px;left:-40px;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;font-size:18px;top:calc(50% - 10px);color:", ";}li.rassurance1-card::after{content:\"\f2b7\";}li.rassurance1-wire::after{content:\"\f19c\";}li.rassurance2::after{content:\"\f0f6\";}li.rassurance3::after{content:\"\f2b5\";}"], function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLight;
});
var CongratulationValidationButton = exports.CongratulationValidationButton = _styledComponents["default"].div.withConfig({
  componentId: "sc-23py6g-3"
})(["text-align:center;margin-bottom:50px;"]);
var CongratulationValidationContentBody = exports.CongratulationValidationContentBody = _styledComponents["default"].dl.withConfig({
  componentId: "sc-23py6g-4"
})(["text-align:center;background-color:#ffffff;width:640px;margin:20px auto 0px auto;padding-top:10px;padding-bottom:10px;font-size:14px;", ";dd,dt{width:calc(50% - 10px);margin:5px 0;display:inline-block;", ";}dt{color:", ";text-align:right;", ";}dd{padding-left:5px;text-align:left;", ";}"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: auto;\n  "]))), media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      display: block;\n      width: auto;\n    "]))), function (props) {
  return props.theme.mainLight;
}, media.screenXsMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n      text-align: center;\n      margin: 8px 0 0 0;\n    "]))), media.screenXsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n      text-align: center;\n      margin: 0 0 8px 0;\n    "]))));