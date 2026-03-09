"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledPrice = exports.StyledInfos = exports.StyledAskLink = exports.BlockPriceConnectWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../../../../../../../../components/styles/responsive");
var _templateObject, _templateObject2;
var StyledInfos = exports.StyledInfos = _styledComponents["default"].div.withConfig({
  componentId: "sc-1mooj4p-0"
})(["justify-content:flex-start;align-items:center;display:flex;font-size:14px;", ";& svg{vertical-align:middle;margin-left:5px;margin-bottom:5px;}"], _responsive.media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      max-width: 150px;\n "]))));
var StyledPrice = exports.StyledPrice = _styledComponents["default"].div.withConfig({
  componentId: "sc-1mooj4p-1"
})(["align-self:stretch;justify-content:flex-start;align-items:center;gap:20px;display:inline-flex;"]);
var StyledAskLink = exports.StyledAskLink = _styledComponents["default"].a.withConfig({
  componentId: "sc-1mooj4p-2"
})(["text-decoration:underline;cursor:pointer;color:", ";:hover{text-decoration:underline;color:", ";}"], function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLight;
});
var BlockPriceConnectWrapper = exports.BlockPriceConnectWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1mooj4p-3"
})(["margin-bottom:10px;> div{margin-top:10px;", ";}"], _responsive.media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      margin-top: 30px;  \n      margin-bottom: 20px;\n    "]))));