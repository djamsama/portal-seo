"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductLabelTitle = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var ProductLabelTitle = exports.ProductLabelTitle = _styledComponents["default"].span.withConfig({
  componentId: "sc-2mcr2-0"
})(["display:block;padding-bottom:", ";font-size:", ";line-height:1.1em;color:", ";"], function (props) {
  return props.smallLabel ? "0" : "10px";
}, function (props) {
  return props.smallLabel ? "14px" : "2.143rem";
}, function (props) {
  return props.smallLabel ? "#fff" : "#333";
});