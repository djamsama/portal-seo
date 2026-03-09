"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleH2 = exports.SelectorFull = exports.SectionContainer = exports.LinkSelectorFull = exports.ItalicP = exports.DivSelectFull = exports.BlocCenterNoFloat = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../components/styles/responsive"));
var _templateObject, _templateObject2;
var media = _responsive["default"].media();
var SectionContainer = exports.SectionContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-k2q1z-0"
})(["width:95%;max-width:925px;margin-left:auto;margin-right:auto;padding-left:25px;padding-right:25px;"]);
var BlocCenterNoFloat = exports.BlocCenterNoFloat = _styledComponents["default"].div.withConfig({
  componentId: "sc-k2q1z-1"
})(["margin:auto;float:none;"]);
var TitleH2 = exports.TitleH2 = _styledComponents["default"].h2.withConfig({
  componentId: "sc-k2q1z-2"
})(["text-align:center;margin-bottom:20px;font-family:\"Century Gothic\",Verdana,sans-serif;font-size:1.65em;font-weight:normal;"]);
var ItalicP = exports.ItalicP = _styledComponents["default"].p.withConfig({
  componentId: "sc-k2q1z-3"
})(["text-align:center;font-style:italic;margin:0 0 10px;"]);
var DivSelectFull = exports.DivSelectFull = _styledComponents["default"].div.withConfig({
  componentId: "sc-k2q1z-4"
})(["text-align:right;margin-bottom:5px;", ""], media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    text-align: center;\n  "]))));
var SelectorFull = exports.SelectorFull = _styledComponents["default"].a.withConfig({
  componentId: "sc-k2q1z-5"
})(["color:#999999;"]);
var LinkSelectorFull = exports.LinkSelectorFull = _styledComponents["default"].span.withConfig({
  componentId: "sc-k2q1z-6"
})(["display:block;margin-bottom:10px;padding-left:25px;padding-right:25px;color:#999999;cursor:pointer;:hover{text-decoration:underline;}", ""], media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    text-align: center;\n  "]))));