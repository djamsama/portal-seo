"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccountLinkWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var headWidth = "11px;";
var headInnerWidth = "9px;";
var AccountLinkWrapper = exports.AccountLinkWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-18ujdzp-0"
})(["cursor:pointer;padding:13px 17px 7px;overflow:hidden;&:after{content:\"\";position:absolute;background:", ";height:10px;width:20px;top:40px;margin-left:-20px;}"], function (props) {
  return props.theme.main;
});