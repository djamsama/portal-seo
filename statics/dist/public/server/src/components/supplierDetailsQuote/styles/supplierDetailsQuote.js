"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperButtons = exports.SupplierDetailsWrapper = exports.Review = exports.RatingTooltip = exports.RatingDetails = exports.QuotationButton = exports.Actions = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../styles/responsive");
var _portalButton = _interopRequireDefault(require("../../styles/portalButton"));
var _constants = require("../../../commons/constants");
var _button = require("../../styles/button");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var mobileMedia = (0, _responsive.specificMaxMedia)(640);
var SupplierDetailsWrapper = exports.SupplierDetailsWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1e7g823-0"
})(["display:flex;flex-direction:column;height:0;"]);
var Actions = exports.Actions = _styledComponents["default"].div.withConfig({
  componentId: "sc-1e7g823-1"
})(["display:flex;flex-direction:column;margin-top:30px;margin-bottom:5px;> div{min-width:345px;border-radius:3px;padding:4px 0px;font-size:1.5em;margin:0 auto 0 0;", "}", " ", ";"], function (props) {
  return (0, _button.getPlaceHoder)(props);
}, _responsive.media.screenMdMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 20px;\n    min-width:345px;\n  "]))), mobileMedia(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 100%;\n    min-width: 100%;\n    > div {\n      min-width: 100%;\n    }\n  "]))));
var RatingTooltip = exports.RatingTooltip = _styledComponents["default"].div.withConfig({
  componentId: "sc-1e7g823-2"
})([""]);
var RatingDetails = exports.RatingDetails = _styledComponents["default"].div.withConfig({
  componentId: "sc-1e7g823-3"
})(["display:flex;flex-wrap:", ";z-index:0;> div{display:inline-block;}"], function (props) {
  return props.wrap ? "wrap" : "inherit";
});
var Review = exports.Review = _styledComponents["default"].span.withConfig({
  componentId: "sc-1e7g823-4"
})(["margin-left:5px;color:#999;font-size:1em;"]);
var QuotationButton = exports.QuotationButton = (0, _styledComponents["default"])(_portalButton["default"]).withConfig({
  componentId: "sc-1e7g823-5"
})(["position:relative;text-transform:none;border-radius:3px;font-family:Arial,sans-serif;border:1px solid ", ";&:before{content:", ";font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;margin-right:15px;position:absolute;left:15px;}"], function (props) {
  return props.theme.mainLight;
}, function (props) {
  return "\"".concat(props.type === _constants.REQUEST_BUTTON_TYPE.CONTACT_DETAILS ? "\f2bc" : "\f1ec", "\"");
});
var WrapperButtons = exports.WrapperButtons = _styledComponents["default"].div.withConfig({
  componentId: "sc-1e7g823-6"
})(["display:none;", " ", " ", " ", " @keyframes appearing-menu{from{visibility:visible;bottom:-50px;opacity:0;}to{visibility:visible;bottom:0px;opacity:1;}}@keyframes disappearing-menu{from{visibility:visible;bottom:0px;opacity:1;}to{visibility:visible;bottom:-50px;opacity:0;}}"], mobileMedia(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 100%;\n    min-width: 100%;\n\n    > a {\n        font: 18px Arial, sans-serif;\n        line-height: 1.2em ;\n      }\n    "]))), _responsive.media.screenXsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    position: fixed !important;\n    bottom: 0;\n    z-index: 999;\n    right: 0;\n    padding: 15px !important;\n    visibility: hidden;\n    opacity: 0;\n    animation: appearing-menu 1s forwards;\n  "]))), _responsive.media.screenXxsMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    position: fixed !important;\n    bottom: 0;\n    z-index: 999;\n    right: 0;\n    padding: 15px !important;\n    visibility: hidden;\n    opacity: 0;\n    animation: appearing-menu 1s forwards;\n  "]))), _responsive.media.screenMdMin(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    position: fixed !important;\n    bottom: 0;\n    z-index: 999;\n    right: 0;\n    padding: 15px !important;\n    visibility: hidden;\n    opacity: 0;\n    animation: appearing-menu 1s forwards;\n  "]))));