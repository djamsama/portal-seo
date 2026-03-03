"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.Rail = exports.List = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var Wrapper = exports.Wrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-vthshv-0"
})(["height:100%;outline:none;position:relative;"]);
var Rail = exports.Rail = _styledComponents["default"].div.withConfig({
  componentId: "sc-vthshv-1"
})(["background-color:#171717;height:100%;overflow:hidden;"]);
var List = exports.List = _styledComponents["default"].ul.withConfig({
  componentId: "sc-vthshv-2"
})(["box-sizing:border-box;height:100%;line-height:0;list-style:none;margin:0;padding-left:0;white-space:nowrap;transform:translateX(", "px);transition-duration:", ";will-change:transform;"], function (props) {
  return props.position;
}, function (props) {
  return props.animationIsActive ? "0.5s" : "0";
});