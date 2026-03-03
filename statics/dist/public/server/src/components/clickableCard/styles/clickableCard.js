"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardWrapper = exports.CardBorder = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var CardBorder = exports.CardBorder = _styledComponents["default"].div.withConfig({
  componentId: "sc-1gprnsy-0"
})(["border:", ";opacity:", ";cursor:", ";border-radius:6px;box-sizing:border-box;"], function (props) {
  return props.selected ? "4px solid ".concat(props.theme.mainLight) : "4px solid transparent";
}, function (props) {
  return props.disabled ? "0.5" : "1";
}, function (props) {
  return props.disabled ? "" : "pointer";
});
var CardWrapper = exports.CardWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1gprnsy-1"
})(["display:flex;height:100%;position:relative;flex-direction:column;background-color:#fff;box-shadow:0 5px 5px rgba(0,0,0,0.1);transition:0.25s ease-in-out 0s;overflow:hidden;border-radius:3px;&:hover{box-shadow:0 5px 5px rgba(0,0,0,0.25);}i{border-radius:50%;border:2px solid rgba(0,0,0,0.1);width:2.1em;height:2.1em;display:flex;align-items:center;justify-content:center;background:", ";color:", ";position:absolute;top:8px;right:8px;}.field{display:none;}"], function (props) {
  return props.selected ? props.theme.mainLight : "0";
}, function (props) {
  return props.selected ? "rgb(255, 255, 255)" : "rgba(0, 0, 0, 0.1)";
});