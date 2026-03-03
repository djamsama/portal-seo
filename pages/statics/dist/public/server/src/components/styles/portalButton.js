"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _button = _interopRequireDefault(require("./button"));
var StyledPortalButton = (0, _styledComponents["default"])(_button["default"]).withConfig({
  componentId: "sc-gp01y-0"
})(["clear:both;padding:10px 0px;font:15px \"Century Gothic\",Verdana,sans-serif;border:none;border-radius:0;cursor:pointer;background-color:", ";margin:0;display:block;text-decoration:none;disabled:", ";opacity:", ";cursor:", ";width:100%;:hover{color:#fff;filter:brightness(110%);transition:opacity 0.2s ease-out;-moz-transition:opacity 0.2s ease-out;-webkit-transition:opacity 0.2s ease-out;-o-transition:opacity 0.2s ease-out;}&a:hover{text-decoration:none;}"], function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.disabled ? "disabled" : false;
}, function (props) {
  return props.disabled ? ".5" : "1";
}, function (props) {
  return props.disabled ? "not-allowed" : "pointer";
});
var _default = exports["default"] = StyledPortalButton;