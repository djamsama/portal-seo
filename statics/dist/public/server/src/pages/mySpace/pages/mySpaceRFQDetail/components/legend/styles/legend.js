"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PLegend = exports.LegendContainer = exports.ImgLegend = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var ImgLegend = exports.ImgLegend = _styledComponents["default"].img.withConfig({
  componentId: "sc-1b1nvrh-0"
})(["vertical-align:-2px;width:20px;margin-right:5px;"]);
var PLegend = exports.PLegend = _styledComponents["default"].p.withConfig({
  componentId: "sc-1b1nvrh-1"
})(["margin:30px;"]);
var LegendContainer = exports.LegendContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-1b1nvrh-2"
})(["padding-bottom:40px;"]);