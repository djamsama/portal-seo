"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _button = _interopRequireDefault(require("../../../components/styles/button"));
var StyledMySpaceButton = (0, _styledComponents["default"])(_button["default"]).withConfig({
  componentId: "sc-1bztwmf-0"
})(["clear:both;padding:10px 12px;font:1em \"Century Gothic\",Verdana,sans-serif;border-radius:4px;color:#fff;background-color:", ";margin:0 auto;display:block;text-decoration:none;:hover{color:", ";background-color:", ";transition:opacity 0.2s ease-out;-moz-transition:opacity 0.2s ease-out;-webkit-transition:opacity 0.2s ease-out;-o-transition:opacity 0.2s ease-out;}"], function (props) {
  return props.isRecoDowngraded ? "#B151E2" : "#555";
}, function (props) {
  return props.isRecoDowngraded ? "#B151E2" : "#FFF";
}, function (props) {
  return props.isRecoDowngraded ? "#F2E6F9" : "#959595";
});
var _default = exports["default"] = StyledMySpaceButton;