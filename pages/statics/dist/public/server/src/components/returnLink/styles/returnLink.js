"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLink = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _link = _interopRequireDefault(require("../../styles/link"));
var StyledLink = exports.StyledLink = (0, _styledComponents["default"])(_link["default"]).withConfig({
  componentId: "sc-1ktynsc-0"
})(["color:", ";:hover{color:", ";text-decoration:underline;}i{padding-right:5px;}"], function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLight;
});