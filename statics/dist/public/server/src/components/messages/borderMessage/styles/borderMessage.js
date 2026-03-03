"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageDivRight = exports.MessageDivLeft = exports.MessageDivInfo = exports.MessageDiv = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../styles/responsive"));
var _templateObject;
var media = _responsive["default"].media();
var MessageDiv = exports.MessageDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-ny6g4x-0"
})(["width:100%;padding:15px;margin:20px 0 0;border-radius:5px;position:relative;::before{content:\"\";width:0;height:0;border-style:solid;position:absolute;}::after{content:\"\";width:0;height:0;border-style:solid;position:absolute;}"]);
var MessageDivRight = exports.MessageDivRight = (0, _styledComponents["default"])(MessageDiv).withConfig({
  componentId: "sc-ny6g4x-1"
})(["border:2px solid #a5d6a7;background:#f4fcf6;float:right;::before{border-width:0 0 15px 25px;border-color:transparent transparent #a5d6a7 transparent;top:-15px;right:30px;}::after{border-width:0 0 12px 19px;border-color:transparent transparent #f4fcf6 transparent;top:-12px;right:32px;}"]);
var MessageDivLeft = exports.MessageDivLeft = (0, _styledComponents["default"])(MessageDiv).withConfig({
  componentId: "sc-ny6g4x-2"
})(["border:2px solid #e8e8e8;float:left;::before{content:\"\";border-width:15px 0 0 25px;border-color:transparent transparent transparent #e8e8e8;top:-15px;left:30px;}::after{border-width:11px 0 0 19px;border-color:transparent transparent transparent #fff;top:-11px;left:32px;}"]);
var MessageDivInfo = exports.MessageDivInfo = _styledComponents["default"].div.withConfig({
  componentId: "sc-ny6g4x-3"
})(["display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:10px 0px 10px 0px;padding:5px 10px;color:#546e7a;border:1px solid #546e7a;border-radius:5px;white-space:nowrap;width:100%;", ";::before{margin-right:10px;font-family:FontAwesome;font-size:1.5em;content:\"\f05a\";}"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    overflow: hidden;\n"]))));