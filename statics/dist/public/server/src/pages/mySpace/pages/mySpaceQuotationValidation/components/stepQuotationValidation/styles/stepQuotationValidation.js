"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StepList = exports.StepElement = exports.StepCount = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../components/styles/responsive"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
var media = _responsive["default"].media();
var StepList = exports.StepList = _styledComponents["default"].ul.withConfig({
  componentId: "sc-1ifgxy9-0"
})(["box-sizing:content-box;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:space-around;width:75%;margin:25px auto 50px;padding-left:0;position:relative;list-style:none;:after{content:'';width:70%;border-top:2px solid #e6e6e6;position:absolute;top:25px;z-index:-10;}", " ", " ", " ", ";"], media.screenLgMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""]))), media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])([""]))), media.screenMdMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])([""]))), media.screenXsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])([""]))));
var StepElement = exports.StepElement = _styledComponents["default"].li.withConfig({
  componentId: "sc-1ifgxy9-1"
})(["min-width:250px;font-size:1.167em;white-space:nowrap;color:", ";text-align:center;", " ", " ", " ", ";"], function (props) {
  return props.active ? "#555" : "rgba(85,85,85,.25);";
}, media.screenLgMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])([""]))), media.screenSmMin(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])([""]))), media.screenMdMin(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])([""]))), media.screenXsMin(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])([""]))));
var StepCount = exports.StepCount = _styledComponents["default"].span.withConfig({
  componentId: "sc-1ifgxy9-2"
})(["margin:auto;display:block;width:30px;min-width:30px;height:30px;font-weight:700;text-align:center;line-height:2.2em;color:#fff;background-color:", ";border:10px solid #fff;border-radius:30px;"], function (props) {
  return props.active ? props.theme.mainLight : props.theme.mainLightLighter;
});

// "#82c9f6"