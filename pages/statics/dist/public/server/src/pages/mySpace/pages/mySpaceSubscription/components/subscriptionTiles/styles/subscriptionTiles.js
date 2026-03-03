"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleWrapper = exports.Title = exports.TilesRowWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _tile = require("../../../../../../../components/tile/styles/tile");
var _responsive = _interopRequireDefault(require("../../../../../../../components/styles/responsive"));
var _templateObject;
var media = _responsive["default"].media();
var Title = exports.Title = _styledComponents["default"].span.withConfig({
  componentId: "sc-13z9xua-0"
})(["padding:0 20px;background-color:#f6f6f6;position:relative;bottom:-10px;"]);
var TitleWrapper = exports.TitleWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-13z9xua-1"
})(["margin:30px 0 40px;padding:0 20px;font-size:1.16em;border-bottom:1px solid #d3d3d3;color:#555659;font-family:HurmeGeometricSans_SemiBold,sans-serif;text-transform:uppercase;"]);
var TilesRowWrapper = exports.TilesRowWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-13z9xua-2"
})(["display:flex;flex-direction:row;flex-wrap:wrap;", "{float:none;max-height:none;margin-bottom:25px;", ";}"], _tile.TileWrapper, media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      flex-basis: ", ";\n      padding-left: 10px;\n      padding-right: 10px;\n  "])), function (props) {
  return props.isLarge === true ? "100%" : "50%";
}));