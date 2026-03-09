"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleH2 = exports.SelectorFull = exports.SectionContainer = exports.ItalicP = exports.DivSelectFull = exports.BlocCenterNoFloat = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var SectionContainer = exports.SectionContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-1dj8qbd-0"
})(["width:auto;@media screen and (min-width:970px){max-width:1920px;}"]);
var BlocCenterNoFloat = exports.BlocCenterNoFloat = _styledComponents["default"].div.withConfig({
  componentId: "sc-1dj8qbd-1"
})(["margin:auto;float:none;"]);
var TitleH2 = exports.TitleH2 = _styledComponents["default"].h2.withConfig({
  componentId: "sc-1dj8qbd-2"
})(["text-align:center;margin-bottom:20px;font-family:\"Century Gothic\",Verdana,sans-serif;font-size:1.65em;font-weight:normal;"]);
var ItalicP = exports.ItalicP = _styledComponents["default"].p.withConfig({
  componentId: "sc-1dj8qbd-3"
})(["text-align:center;font-style:italic;margin:0 0 10px;"]);
var DivSelectFull = exports.DivSelectFull = _styledComponents["default"].div.withConfig({
  componentId: "sc-1dj8qbd-4"
})(["text-align:right;"]);
var SelectorFull = exports.SelectorFull = _styledComponents["default"].a.withConfig({
  componentId: "sc-1dj8qbd-5"
})(["color:#999999;"]);