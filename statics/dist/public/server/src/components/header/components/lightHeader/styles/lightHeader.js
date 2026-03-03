"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoLightHeader = exports.HeaderWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _logo = _interopRequireDefault(require("../../logo"));
var _responsive = _interopRequireDefault(require("../../../../styles/responsive"));
var _templateObject, _templateObject2;
var media = _responsive["default"].media();
var HeaderWrapper = exports.HeaderWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-b222ue-0"
})(["z-index:10;height:", ";color:#fff;background-color:", ";box-shadow:0 5px 5px rgba(0,0,0,0.1);margin-bottom:40px;", ""], function (props) {
  return "".concat(props.height, "px");
}, function (props) {
  return props.theme.main;
}, media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    height: 60px;\n  "]))));
var LogoLightHeader = exports.LogoLightHeader = (0, _styledComponents["default"])(_logo["default"]).withConfig({
  componentId: "sc-b222ue-1"
})(["display:block;text-align:center;float:none;margin-top:0px;margin-bottom:0;justify-content:center;margin-left:0;margin-right:0;img{margin-top:20px;height:74px;}", ""], media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    img {\n      height: 44px;\n      margin-top: 6px;\n    }\n  "]))));