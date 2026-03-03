"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../styles/responsive"));
var _templateObject;
var media = _responsive["default"].media();
var Wrapper = exports.Wrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1nbyqfw-0"
})(["top:", ";position:", ";width:100%;z-index:", ";left:", ";", ";"], function (props) {
  return props["float"] ? 0 : "auto";
}, function (props) {
  return props["float"] ? "fixed" : "relative";
}, function (props) {
  return props["float"] ? "10" : "auto";
}, function (props) {
  return props["float"] ? "0" : "auto";
}, media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n  "]))));