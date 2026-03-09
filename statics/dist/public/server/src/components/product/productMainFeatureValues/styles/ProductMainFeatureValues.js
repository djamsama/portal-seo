"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FeatureValueContainer = exports.FeatureValue = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var FeatureValueContainer = exports.FeatureValueContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-cw67gy-0"
})(["text-transform:none;white-space:normal;padding-left:5px;margin-top:8px;"]);
var FeatureValue = exports.FeatureValue = _styledComponents["default"].span.withConfig({
  componentId: "sc-cw67gy-1"
})(["font-family:Arial,sans-serif;margin-right:10px;font-weight:400;display:", ";word-break:break-word;font-size:", ";color:#999;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;::before{margin-right:5px;content:\"\f02b\";font-family:FontAwesome;}"], function (props) {
  return props.displayFeatureValue || "inline-block";
}, function (props) {
  return props.smallTag ? "12px" : "1.071rem";
});