"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleH1 = exports.MySpaceContainer = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../components/styles/responsive"));
var _templateObject, _templateObject2;
var media = _responsive["default"].media();
var mediaMinWidth = _responsive["default"].mediaMinWidth();
var MySpaceContainer = exports.MySpaceContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-1jaaqlt-0"
})(["margin-bottom:50px;width:970px;color:#555659;margin-left:auto;margin-right:auto;padding-left:25px;padding-right:25px;", " ", ";"], mediaMinWidth.screenMdMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      width: 1100px;\n      padding: 0;\n  "]))), media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    width: auto;\n  "]))));
var TitleH1 = exports.TitleH1 = _styledComponents["default"].h1.withConfig({
  componentId: "sc-1jaaqlt-1"
})(["text-align:center;margin-bottom:25px;margin-bottom:50px;font-family:\"Century Gothic\",Verdana,sans-serif;font-size:2.08em;font-weight:normal;"]);