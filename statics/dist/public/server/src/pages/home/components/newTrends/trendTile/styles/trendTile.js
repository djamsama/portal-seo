"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrendTileWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../../../../../components/styles/responsive");
var _tile = _interopRequireDefault(require("../../../../../../components/tile/tile"));
var _templateObject;
var TrendTileWrapper = exports.TrendTileWrapper = (0, _styledComponents["default"])(_tile["default"]).withConfig({
  componentId: "sc-b9ebet-0"
})([".TileInset{overflow:visible;}&&&{", ""], _responsive.media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n        margin: auto;\n        width: 100%;\n    "]))));