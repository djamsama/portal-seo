"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UlDropDownCountry = exports.TextLabel = exports.ResponsiveSpan = exports.LiDropDownCountry = exports.FlagIcon = exports.DivDropDownCountryContent = exports.CountryMenu = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../../../styles/responsive");
var _constants = require("../../../../../commons/constants");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var ResponsiveSpan = exports.ResponsiveSpan = _styledComponents["default"].span.withConfig({
  componentId: "sc-1xcrij0-0"
})(["a{color:rgba(255,255,255,0.5);:hover{color:rgba(255,255,255,1.5);}}.fa{margin-left:5px;}", ""], _responsive.media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: 100%;\n    display: flex;\n    font-size: 1.17em;\n    height: 31px;\n    padding: 10px;\n    align-items: center;\n    a {\n      color: ", ";\n    &:active, &:hover {\n      color:", ";\n     }\n    }\n    .fa {\n      margin-left: auto;\n      &:before {\n        content: \"\";\n        border: solid  ", ";\n        border-width: 0 1px 1px 0;\n        display: inline-block;\n        padding: .3em;\n        transform: rotate(-45deg);\n      }\n    }\n  "])), function (props) {
  return props.theme.headerMobileCountryCurrencyMenu;
}, function (props) {
  return props.theme.headerMobileCountryCurrencyMenu;
}, function (props) {
  return props.theme.headerMobileCountryCurrencyMenu;
}));
var UlDropDownCountry = exports.UlDropDownCountry = _styledComponents["default"].ul.withConfig({
  componentId: "sc-1xcrij0-1"
})(["-webkit-transition:max-height 1s;transition:max-height 1s;-webkit-transition:max-height 1s;top:25px;margin:0;padding:5px 0px;list-style:none;"]);
var LiDropDownCountry = exports.LiDropDownCountry = _styledComponents["default"].li.withConfig({
  componentId: "sc-1xcrij0-2"
})(["padding:3px 9px;a{color:rgba(255,255,255,0.5);cursor:pointer;:hover{color:rgba(255,255,255,1.5);}}", ""], _responsive.media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 9px;\n    border-bottom: 1px solid ", ";\n    color: rgba(255, 255, 255, 0.7);\n    font-size: 1.17em;\n    &:last-child {\n      border: none;\n    }\n    a {\n      color: ", ";\n      :hover {\n        color: ", ";\n      }\n    }\n  "])), function (props) {
  return props.theme.headerMobileLinkBorder;
}, function (props) {
  return props.theme.headerMobileCountryCurrencySubMenu;
}, function (props) {
  return props.theme.headerMobileCountryCurrencySubMenu;
}));
var DivDropDownCountryContent = exports.DivDropDownCountryContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-1xcrij0-3"
})(["background-color:", ";border:rgba(255,255,255,0.5) solid 1px;", ""], function (props) {
  return props.theme.mainDark;
}, _responsive.media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    background: none;\n    border: none;\n  "]))));
var TextLabel = exports.TextLabel = _styledComponents["default"].span.withConfig({
  componentId: "sc-1xcrij0-4"
})(["font-family:Arial,sans-serif;font-size:12px;font-weight:400;", ""], _responsive.media.screenSmMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 1em;\n  "]))));
var CountryMenu = exports.CountryMenu = _styledComponents["default"].div.withConfig({
  componentId: "sc-1xcrij0-5"
})(["width:200%;display:flex;", "{display:flex;width:50%;}", "{width:50%;}"], ResponsiveSpan, DivDropDownCountryContent);
var FlagIcon = exports.FlagIcon = _styledComponents["default"].i.withConfig({
  componentId: "sc-1xcrij0-6"
})(["background-image:url(", ");width:16px;min-width:16px;height:11px;display:inline-block;background-repeat:no-repeat;margin-right:5px;"], _constants.FLAG_ICON_URL);