"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.Legend = exports.Content = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _tile = _interopRequireDefault(require("../../../../../../../components/tile/tile"));
var _tile2 = require("../../../../../../../components/tile/styles/tile");
var Content = exports.Content = (0, _styledComponents["default"])(_tile["default"]).withConfig({
  componentId: "sc-1s658bg-0"
})(["width:100%;padding:0;margin-bottom:20px;margin-top:9px;border:1px solid #eee;", "{padding:10px 20px;background:#f6f6f6;}.rating{display:flex;justify-content:center;}"], _tile2.TileInset);
var Title = exports.Title = _styledComponents["default"].span.withConfig({
  componentId: "sc-1s658bg-1"
})(["font-family:\"Century Gothic\",Verdana,sans-serif;font-size:14px;font-weight:700;"]);
var Legend = exports.Legend = _styledComponents["default"].span.withConfig({
  componentId: "sc-1s658bg-2"
})(["display:flex;font-size:12px;font-weight:400;padding-top:10px;"]);