"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvertedPortalButton = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _button = _interopRequireDefault(require("./button"));
var InvertedPortalButton = exports.InvertedPortalButton = (0, _styledComponents["default"])(_button["default"]).withConfig({
  componentId: "sc-1t1g81c-0"
})(["cursor:", ";clear:both;padding:10px 0px;font:15px \"Century Gothic\",Verdana,sans-serif;border:1px solid ", ";border-radius:0;background-color:#fff;color:", ";display:block;text-transform:uppercase;margin:auto;opacity:", ";width:100%;:hover{color:#fff;background-color:", ";-webkit-filter:brightness(110%);filter:brightness(110%);-webkit-transition:opacity 0.2s ease-out;transition:opacity 0.2s ease-out;-moz-transition:opacity 0.2s ease-out;-webkit-transition:opacity 0.2s ease-out;-o-transition:opacity 0.2s ease-out;}"], function (props) {
  return props.disabled ? "not-allowed" : "pointer";
}, function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.disabled ? ".25" : "1";
}, function (props) {
  return props.theme.mainLight;
});