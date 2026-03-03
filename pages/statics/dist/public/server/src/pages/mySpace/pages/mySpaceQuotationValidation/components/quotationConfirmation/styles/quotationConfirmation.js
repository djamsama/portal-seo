"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfirmationValidationContentHeader = exports.ConfirmationValidationContentFooter = exports.ConfirmationValidationContent = exports.ConfirmationValidationButton = exports.BackToRequestButton = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var ConfirmationValidationContent = exports.ConfirmationValidationContent = _styledComponents["default"].section.withConfig({
  componentId: "sc-j2pe7n-0"
})(["margin-bottom:30px;text-align:center;margin-top:35px;padding:50px;background-color:#f6f6f6;border-radius:5px;"]);
var ConfirmationValidationContentHeader = exports.ConfirmationValidationContentHeader = _styledComponents["default"].header.withConfig({
  componentId: "sc-j2pe7n-1"
})(["font-size:14px;p{margin-bottom:0;font-size:16px;}h2{margin-bottom:10px;font-size:24px;font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;line-height:1em;text-transform:uppercase;color:", ";i{margin-right:10px;}.icon-check{color:#4cbb6c;}}"], function (props) {
  return props.theme.mainLight;
});
var ConfirmationValidationContentFooter = exports.ConfirmationValidationContentFooter = _styledComponents["default"].footer.withConfig({
  componentId: "sc-j2pe7n-2"
})(["h3{margin-top:50px;margin-bottom:30px;font-size:20px;font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;line-height:1em;color:", ";}ol{counter-reset:item;padding-left:0;max-width:460px;margin:0 auto;text-align:left;li{display:table;font-size:14px;margin-top:25px;position:relative;list-style-type:none;counter-increment:item;&:before{display:inline-block;width:1em;padding-right:0.5em;font-weight:bold;text-align:right;content:counter(item) \".\";}span{display:table-cell;}}}li.rassurance::after{position:absolute;display:block;text-align:center;width:30px;left:-40px;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;font-size:18px;top:calc(50% - 10px);color:", ";}li.rassurance1::after{content:\"\f2b7\";}li.rassurance2::after{content:\"\f0f6\";}li.rassurance3::after{content:\"\f09d\";}"], function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLight;
});
var ConfirmationValidationButton = exports.ConfirmationValidationButton = _styledComponents["default"].div.withConfig({
  componentId: "sc-j2pe7n-3"
})(["text-align:center;margin-bottom:50px;"]);
var BackToRequestButton = exports.BackToRequestButton = _styledComponents["default"].button.withConfig({
  componentId: "sc-j2pe7n-4"
})(["display:inline-block;padding:7px 12px;font-size:16px;font-weight:700;text-transform:capitalize;line-height:1.5em;text-align:center;white-space:nowrap;border:none;cursor:pointer;margin:10px 3px 0;font-family:\"Century Gothic\",Verdana,sans-serif;border-radius:4px;vertical-align:middle;-webkit-transition:0.25s ease-in-out 0s;transition:0.25s ease-in-out 0s;color:", ";background-color:#fff white-space:normal;word-wrap:break-word;border:2px solid ", ";:hover{background-color:", ";color :#fff;}:focus{outline:0;}"], function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLight;
});