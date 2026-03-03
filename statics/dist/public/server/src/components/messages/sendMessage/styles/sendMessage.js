"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextMessageTexteArea = exports.SendButtonDisable = exports.SendButton = exports.ContentDiv = exports.Attachments = exports.AttachButton = exports.ActionsBtnSend = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var buttonColor = "#4f8c51";
var ContentDiv = exports.ContentDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-1qgxm7v-0"
})(["padding:10px;background-color:#f4fcf6;border-bottom:2px solid #f4fcf6;"]);
var TextMessageTexteArea = exports.TextMessageTexteArea = _styledComponents["default"].textarea.withConfig({
  componentId: "sc-1qgxm7v-1"
})(["margin-top:0px;margin-bottom:0px;height:", ";resize:", ";width:100%;padding:5px 10px;text-align:", ";cursor:", ";background-color:#fff;border:none;outline:none;"], function (props) {
  return props.disabled ? "25px" : "130px";
}, function (props) {
  return props.disabled ? "none" : "vertical";
}, function (props) {
  return props.disabled ? "center" : "inherit";
}, function (props) {
  return props.disabled ? "not-allowed" : "inherit";
});
var ActionsBtnSend = exports.ActionsBtnSend = _styledComponents["default"].div.withConfig({
  componentId: "sc-1qgxm7v-2"
})(["display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;"]);
var SendButton = exports.SendButton = _styledComponents["default"].button.withConfig({
  componentId: "sc-1qgxm7v-3"
})(["color:#fff;background-color:", ";border:1px solid ", ";margin-top:10px;font:12px \"Century Gothic\",Verdana,sans-serif;border-radius:4px;white-space:normal;cursor:pointer;padding:6px 6px;"], buttonColor, buttonColor);
var SendButtonDisable = exports.SendButtonDisable = (0, _styledComponents["default"])(SendButton).withConfig({
  componentId: "sc-1qgxm7v-4"
})(["font:12px \"Century Gothic\",Verdana,sans-serif;color:#fff;background-color:", ";border:none;border-radius:4px;cursor:inherit;opacity:0.25;"], buttonColor);
var AttachButton = exports.AttachButton = (0, _styledComponents["default"])(SendButton).withConfig({
  componentId: "sc-1qgxm7v-5"
})(["background:none;color:", ";margin-left:5px;&:disabled{cursor:default;opacity:0.25;}"], buttonColor);
var Attachments = exports.Attachments = _styledComponents["default"].div.withConfig({
  componentId: "sc-1qgxm7v-6"
})([".Row{.FileDetails{width:100%;display:flex;flex-direction:row;&:before{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;content:\"\f0c6\";font-size:18px;padding-right:10px;}}}"]);