"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.RelatedLinksWrapper = exports.Links = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../styles/responsive"));
var _tile = _interopRequireDefault(require("../../tile/tile"));
var _tile2 = require("../../tile/styles/tile");
var _templateObject;
var media = _responsive["default"].media();
var RelatedLinksWrapper = exports.RelatedLinksWrapper = (0, _styledComponents["default"])(_tile["default"]).withConfig({
  componentId: "sc-18x2zy6-0"
})(["width:100%;margin:0 0 50px 0;padding:0;> ", "{text-align:left;padding:25px 50px;background-color:#eee;}"], _tile2.TileInset);
var Title = exports.Title = _styledComponents["default"].div.withConfig({
  componentId: "sc-18x2zy6-1"
})(["margin-bottom:20px;padding-bottom:10px;font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;font-size:1.4em;color:#555;border-bottom:1px solid #d3d3d3;"]);
var Links = exports.Links = _styledComponents["default"].ul.withConfig({
  componentId: "sc-18x2zy6-2"
})(["list-style:none;overflow:hidden;padding:0;", ";> li{display:inline-block;a{display:inline-block;margin:5px;padding:5px 10px;color:#555;background-color:#fff;border:1px solid #f2f2f2;border-radius:20px;}}}"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    columns: 1;\n  "]))));