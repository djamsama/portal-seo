"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainWrapperHeaderLess = exports.MainWrapper = exports.CssLayout = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../components/styles/responsive"));
var _templateObject;
var media = _responsive["default"].media();
var CssLayout = exports.CssLayout = _styledComponents["default"].div.withConfig({
  componentId: "sc-19e28ua-0"
})(["margin:0;padding:0;font-family:Arial,sans-serif;font-size:12px;line-height:1.5em;width:100%;min-height:100vh;display:flex;flex-direction:column;background-color:", ";"], function (props) {
  return props.theme.backgroundColor;
});
var MainWrapper = exports.MainWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-19e28ua-1"
})(["min-height:300px;position:relative;padding-left:", ";padding-right:", ";margin-left:", ";margin-right:", ";margin-bottom:", ";", ""], function (props) {
  return props.theme.paddingLeft;
}, function (props) {
  return props.theme.paddingRight;
}, function (props) {
  return props.theme.marginLeft;
}, function (props) {
  return props.theme.marginRight;
}, function (props) {
  return props.theme && props.theme.marginBottom ? props.theme.marginBottom : "unset";
}, media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: 0;\n    margin-right: 0;\n  "]))));
var MainWrapperHeaderLess = exports.MainWrapperHeaderLess = _styledComponents["default"].div.withConfig({
  componentId: "sc-19e28ua-2"
})(["min-height:300px;position:relative;padding-left:", ";padding-right:", ";margin-bottom:auto;"], function (props) {
  return props.theme.paddingLeft;
}, function (props) {
  return props.theme.paddingRight;
});