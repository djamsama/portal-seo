"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReturnLinkWrapper = exports.LinkBlock = exports.FaqLinkWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../components/styles/responsive"));
var _templateObject, _templateObject2;
var media = _responsive["default"].media();
var LinkBlock = exports.LinkBlock = _styledComponents["default"].div.withConfig({
  componentId: "sc-15u8j3t-0"
})(["{display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;flex-wrap:wrap;margin:15px auto 15px;box-sizing:border-box;font-family:Arial;font-size:14px;max-width:1020px;}"]);
var ReturnLinkWrapper = exports.ReturnLinkWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-15u8j3t-1"
})(["margin:auto;text-align:left;max-height:inherit;width:40%;", ";"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: 80%;\n  "]))));
var FaqLinkWrapper = exports.FaqLinkWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-15u8j3t-2"
})(["margin:auto;text-align:right;max-height:", ";width:", ";", ";a{color:", ";:hover{color:", ";text-decoration:underline;}}"], function (props) {
  return props.maxHeight ? props.maxHeight : "inherit";
}, function (props) {
  return props.reco ? "100%" : "60%";
}, media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 20%;\n  "]))), function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLight;
});