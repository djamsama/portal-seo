"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterWrapper = exports.FooterTopWrapper = exports.FooterBottomWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../styles/responsive"));
var _templateObject, _templateObject2;
var media = _responsive["default"].media();
var FooterWrapper = exports.FooterWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-11zytw-0"
})(["background-color:", ";margin-top:auto;", ";"], function (props) {
  return props.theme.footerLight;
}, media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 0;\n  "]))));
var FooterTopWrapper = exports.FooterTopWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-11zytw-1"
})(["color:white;text-align:center;"]);
var FooterBottomWrapper = exports.FooterBottomWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-11zytw-2"
})(["background-color:", ";color:rgba(255,255,255,0.25);", ";"], function (props) {
  return props.theme.footerMain;
}, media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    border: 0;\n    padding: 0;\n    min-height: 20px;\n    min-width: 159px;\n    max-width: 100%;\n  "]))));