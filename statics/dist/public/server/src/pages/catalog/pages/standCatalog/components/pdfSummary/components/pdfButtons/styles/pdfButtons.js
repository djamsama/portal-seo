"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PdfButtonsContainer = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../../../../../../../../components/styles/responsive");
var _templateObject, _templateObject2;
var PdfButtonsContainer = exports.PdfButtonsContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-1h6vndi-0"
})(["position:", ";top:", ";display:flex;width:367px;flex-direction:column;justify-content:center;align-items:center;", " ", ""], function (props) {
  return props.sticky ? "sticky" : "static";
}, function (props) {
  return props.sticky ? "80px" : "0";
}, _responsive.media.screenMdMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: ", ";\n    top: ", ";\n    padding: 20px 0px 0px 0px;\n    width: 100%;\n "])), function (props) {
  return props.sticky ? "sticky" : "static";
}, function (props) {
  return props.sticky ? "80px" : "10px";
}), _responsive.media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    position: static;\n    padding: 0px;\n    width: 100%;\n "]))));