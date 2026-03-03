"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleH2 = exports.TitleH1 = exports.MainWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var MainWrapper = exports.MainWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1gs8jyj-0"
})(["color:#555659;.inline-center{text-align:center;}.btn{display:inline-block;padding:7px 12px;font-size:1em;line-height:1.5em;text-align:center;white-space:nowrap;border:none;cursor:pointer;background-color:", ";}.success-actions{display:flex;justify-content:center;}p{margin:0 0 10px;}ol{width:95%;height:20px;margin:0 auto 10px;font-family:Arial,sans-serif;font-size:15px;overflow-x:auto;overflow-y:hidden;white-space:nowrap;}"], function (props) {
  return props.theme.mainLight;
});
var TitleH2 = exports.TitleH2 = _styledComponents["default"].h2.withConfig({
  componentId: "sc-1gs8jyj-1"
})(["margin-bottom:20px;margin-top:auto;font-family:\"Century Gothic\",Verdana,sans-serif;font-size:1.65em;line-height:inherit;font-weight:inherit;.fa{margin-right:5px;color:rgb(0,128,0);}&.success{margin-top:100px;}"]);
var TitleH1 = exports.TitleH1 = _styledComponents["default"].h1.withConfig({
  componentId: "sc-1gs8jyj-2"
})(["margin-bottom:50px;margin-top:auto;font-family:\"Century Gothic\",Verdana,sans-serif;font-size:2.08em;line-height:25px;font-weight:inherit;"]);