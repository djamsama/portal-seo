"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledPopin = exports.StyledModalToModifyRefusedQuoteForm = exports.StyledCardField = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _popin = _interopRequireDefault(require("../../../../../components/popin"));
var _cardField = _interopRequireDefault(require("../../../../../components/cardField"));
var _responsive = _interopRequireDefault(require("../../../../../components/styles/responsive"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var media = _responsive["default"].media();
var StyledModalToModifyRefusedQuoteForm = exports.StyledModalToModifyRefusedQuoteForm = _styledComponents["default"].form.withConfig({
  componentId: "sc-12hg8rk-0"
})(["text-align:center;textarea{background-color:#f6f6f6;border:2px solid #e9e9e9;box-shadow:0 0 8px rgba(0,0,0,0.1);padding:8px 12px;width:100%;}"]);
var StyledPopin = exports.StyledPopin = (0, _styledComponents["default"])(_popin["default"]).withConfig({
  componentId: "sc-12hg8rk-1"
})(["width:700px;font-family:Arial,sans-serif;&&&{", ";", ";}h1{", ";}.quoteActions{margin-top:12.5px;display:flex;justify-content:center;}.quoteComment{padding:0 12.5px;textarea{resize:none;}}.quoteRoot{margin-bottom:30px;label{> div{word-break:break-word;}}}.quoteReasons{font-size:13px;label{flex:0 1 50%;padding:10px 12.5px;margin:0;", ";> div{opacity:1;word-break:break-word;}&:last-child{margin-bottom:15px;}}}.close.icon{top:0rem !important;right:0rem !important;}"], media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      width: 500px;\n    "]))), media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 100%;\n      height: 100%;\n      margin: -1em 0 0 0 !important;\n  "]))), media.screenXsMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n      margin-left: 50px;\n      margin-right: 50px;\n    "]))), media.screenSmMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n        flex: 0 1 100%;\n      "]))));
var StyledCardField = exports.StyledCardField = (0, _styledComponents["default"])(_cardField["default"]).withConfig({
  componentId: "sc-12hg8rk-2"
})(["display:flex;flex-wrap:wrap;label{flex:1 1 0px;min-width:40%;.quoteIcon{margin-bottom:10px;}}"]);