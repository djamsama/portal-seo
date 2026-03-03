"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleDiv = exports.SubTitleDiv = exports.ImgNotation = exports.FlewDivRight = exports.FlewDiv = exports.ContainerDiv = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../components/styles/responsive"));
var _templateObject;
var media = _responsive["default"].mediaMinMaxWidth();
var ContainerDiv = exports.ContainerDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-1eaylhe-0"
})(["display:-ms-flex;display:-webkit-flex;display:flex;flex-wrap:wrap;max-width:100%;"]);
var FlewDiv = exports.FlewDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-1eaylhe-1"
})(["flex:1 0 200px;box-sizing:border-box;min-width:150px;"]);
var FlewDivRight = exports.FlewDivRight = (0, _styledComponents["default"])(FlewDiv).withConfig({
  componentId: "sc-1eaylhe-2"
})(["width:80%;min-width:550px;margin-left:5px;", ";"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: auto;\n    margin-right: auto;\n    min-width: 100%;\n  "]))));
var TitleDiv = exports.TitleDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-1eaylhe-3"
})(["font-family:\"Century Gothic\",Verdana,sans-serif;font-size:14px;font-weight:400;margin-bottom:15px;"]);
var SubTitleDiv = exports.SubTitleDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-1eaylhe-4"
})(["font-family:\"Century Gothic\",Verdana,sans-serif;font-size:14px;font-weight:400;margin-bottom:15px;margin-top:15px;display:flex;"]);
var ImgNotation = exports.ImgNotation = _styledComponents["default"].img.withConfig({
  componentId: "sc-1eaylhe-5"
})(["margin-left:10px;"]);