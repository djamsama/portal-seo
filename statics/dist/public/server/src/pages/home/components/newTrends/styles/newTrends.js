"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrendTileWrapper = exports.TitleWrapper = exports.Title = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../../../../components/styles/responsive");
var _tile = _interopRequireDefault(require("../../../../../components/tile/tile"));
var _templateObject;
var TrendTileWrapper = exports.TrendTileWrapper = (0, _styledComponents["default"])(_tile["default"]).withConfig({
  componentId: "sc-17z9ou3-0"
})(["&&&{", ""], _responsive.media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n        margin: auto;\n    "]))));
var TitleWrapper = exports.TitleWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-17z9ou3-1"
})(["margin:30px 0 40px;padding:0 20px;font-size:1em;color:#555659;font-family:HurmeGeometricSans_SemiBold,sans-serif;text-transform:uppercase;"]);
var Title = exports.Title = _styledComponents["default"].span.withConfig({
  componentId: "sc-17z9ou3-2"
})(["padding:0 20px;background-color:#f6f6f6;position:relative;bottom:-10px;"]);