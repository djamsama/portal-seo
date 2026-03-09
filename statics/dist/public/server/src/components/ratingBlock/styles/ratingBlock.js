"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Review = exports.RequestDetailInfo = exports.Reactivity = exports.RatingDetails = exports.Rating = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../styles/responsive"));
var _templateObject, _templateObject2, _templateObject3;
var media = _responsive["default"].media();
var Rating = exports.Rating = _styledComponents["default"].div.withConfig({
  componentId: "sc-x0y97n-0"
})(["display:flex;", ""], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: 100%;\n    display: inline-block;\n  "]))));
var RequestDetailInfo = exports.RequestDetailInfo = _styledComponents["default"].div.withConfig({
  componentId: "sc-x0y97n-1"
})([""]);
var RatingDetails = exports.RatingDetails = _styledComponents["default"].div.withConfig({
  componentId: "sc-x0y97n-2"
})(["display:flex;", ""], media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 100%;\n  "]))));
var Review = exports.Review = _styledComponents["default"].span.withConfig({
  componentId: "sc-x0y97n-3"
})(["color:#999;font-size:0.85em;"]);
var Reactivity = exports.Reactivity = _styledComponents["default"].div.withConfig({
  componentId: "sc-x0y97n-4"
})(["font-size:0.95em;&:before{content:\"\f017\";font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;margin-right:5px;}", ""], media.screenXsMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 100%;\n    margin-top: 5px;\n  "]))));