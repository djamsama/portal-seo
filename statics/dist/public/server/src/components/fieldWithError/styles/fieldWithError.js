"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WarningStyled = exports.FormInput = exports.ErrorStyled = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var ErrorStyled = exports.ErrorStyled = _styledComponents["default"].span.withConfig({
  componentId: "sc-3nj955-0"
})(["color:red;font-size:10px;display:block;float:none;font-style:italic;height:0px;line-height:11px;"]);
var WarningStyled = exports.WarningStyled = (0, _styledComponents["default"])(ErrorStyled).withConfig({
  componentId: "sc-3nj955-1"
})(["color:orange;"]);
var FormInput = exports.FormInput = _styledComponents["default"].div.withConfig({
  componentId: "sc-3nj955-2"
})(["display:", ";flex-direction:column;span{display:", ";height:0px;line-height:11px;margin-top:3px;margin-bottom:12px;}&&&.has-error{input,textarea{&:focus{border:2px solid red;}border:2px solid red;}}"], function (props) {
  return props.doNotFlex ? "initial" : "flex";
}, function (props) {
  return props.doNotFlex ? "initial" : "flex";
});