"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterInfoWrapper = exports.FooterInfoLink = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _link = _interopRequireDefault(require("../../../../styles/link"));
var _responsive = _interopRequireDefault(require("../../../../styles/responsive"));
var _templateObject;
var media = _responsive["default"].media();
var FooterInfoWrapper = exports.FooterInfoWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1g6l0s7-0"
})(["padding:0 0 30px;text-align:center;padding-top:", ";padding-bottom:", ";", ";.lazyload-wrapper{display:inline;}"], function (props) {
  return props.footerMode === "custom" ? "30px" : "10px";
}, function (props) {
  return props.footerMode === "minimal" ? "10px" : "30px";
}, media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    padding-bottom: 10px;\n    padding-top: 10px;\n  "]))));
var FooterInfoLink = exports.FooterInfoLink = (0, _styledComponents["default"])(_link["default"]).withConfig({
  componentId: "sc-1g6l0s7-1"
})(["display:inline-block;color:inherit;"]);