"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoCompleteWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
// import { media } from "~/components/styles/responsive";

var AutoCompleteWrapper = exports.AutoCompleteWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-f7oc1u-0"
})([".no-suggestions{color:", ";padding:0.5rem;}.wrapper-suggestions{position:relative;}.suggestions{border:1px solid #999;border-top-width:0;list-style:none;margin-top:0;max-height:143px;overflow-y:auto;padding-left:0;width:", ";position:absolute;top:0;left:0;z-index:10;}.suggestions li{padding:0.5rem;background-color:#fbfbf9;color:", ";position:relative;}.suggestion-active,.suggestions li:hover{background-color:#3d4845;color:#fbfbf9;cursor:pointer;font-weight:700;}"], function (props) {
  return props.theme.footerLight;
}, function (props) {
  return props.wrapperWith ? "".concat(props.wrapperWith, "px") : "calc(250px + 1rem);";
}, function (props) {
  return props.theme.footerLight;
});