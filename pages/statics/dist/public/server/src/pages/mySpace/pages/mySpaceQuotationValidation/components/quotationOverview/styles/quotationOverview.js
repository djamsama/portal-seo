"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuotationWatermarkWrapper = exports.QuotationOverviewDiv = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var QuotationOverviewDiv = exports.QuotationOverviewDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-6rgqh2-0"
})(["height:100%;.WithTitle{margin-bottom:35px;height:800px;position:relative;background-color:#fff;border:1px solid #eee;\"-webkit-box-shadow\":05px5pxrgba(0,0,0,.1);box-shadow:0 5px 5px rgba(0,0,0,0.1);}.NoTitle{height:100%;}"]);
var QuotationWatermarkWrapper = exports.QuotationWatermarkWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-6rgqh2-1"
})(["position:absolute;right:50%;top:50%;margin-right:-", "px;margin-top:-", "px;"], function (props) {
  return props.xpos;
}, function (props) {
  return props.ypos;
});