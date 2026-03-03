"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StampContainer = exports.Stamp = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../components/styles/responsive"));
var _templateObject, _templateObject2;
var media = _responsive["default"].media();
var Stamp = exports.Stamp = _styledComponents["default"].span.withConfig({
  componentId: "sc-muwk78-0"
})(["font-family:courier;font-size:1.6em;text-transform:uppercase;font-weight:bold;white-space:nowrap;color:#909090;", ";"], media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 1.2em;\n  "]))));
var StampContainer = exports.StampContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-muwk78-1"
})(["padding:15px 18px;border:2px dashed #909090;border-radius:5px;-webkit-transform:rotate(-25deg);transform:rotate(-25deg);pointer-events:none;background-color:rgba(255,255,255,0.75);.logo{svg{margin-top:5px;max-width:150px;height:auto;}}", ";"], media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 8px 15px;\n    .logo {\n      svg {\n        max-width: 100px;\n      }\n    }\n  "]))));