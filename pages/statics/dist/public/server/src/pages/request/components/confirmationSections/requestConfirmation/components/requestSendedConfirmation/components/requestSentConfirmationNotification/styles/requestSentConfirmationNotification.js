"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Txt = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../../../../components/styles/responsive"));
var _templateObject;
var specificMaxMedia = _responsive["default"].specificMaxMedia(600);
var Txt = exports.Txt = _styledComponents["default"].div.withConfig({
  componentId: "sc-1298poj-0"
})(["font-size:15px;font-family:Arial,sans-serif;text-align:center;width:100%;margin-left:50px;margin-right:50px;", " a{color:", ";:hover{color:", ";text-decoration:underline;}}", " strong{word-break:break-word;}"], specificMaxMedia(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: 20px;\n    margin-right: 20px;\n  "]))), function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.drdRequest && "\n    font-size: 16px;\n    color: #3C3C3C;\n    line-height: 1.7em;\n  ";
});