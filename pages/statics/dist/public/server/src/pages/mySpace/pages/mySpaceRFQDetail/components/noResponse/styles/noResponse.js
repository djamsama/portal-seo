"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleDiv = exports.NoRFQDiv = exports.ImgNoFound = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
// import Responsive from "~/components/styles/responsive";
// const mediaMinWidth = Responsive.mediaMinWidth();
var TitleDiv = exports.TitleDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-onb0i3-0"
})(["font-family:\"Century Gothic\",Verdana,sans-serif;font-size:14px;font-weight:700;"]);
var ImgNoFound = exports.ImgNoFound = _styledComponents["default"].img.withConfig({
  componentId: "sc-onb0i3-1"
})(["max-width:100%;padding:50px;"]);
var NoRFQDiv = exports.NoRFQDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-onb0i3-2"
})(["font-family:\"Century Gothic\",Verdana,sans-serif;font-style:italic;text-align:center;font-size:16px;padding-top:20px;padding-left:50px;padding-right:50px;"]);