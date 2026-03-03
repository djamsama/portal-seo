"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledRate = exports.RateWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var RateWrapper = exports.RateWrapper = _styledComponents["default"].span.withConfig({
  componentId: "sc-132za8j-0"
})(["white-space:nowrap;"]);
var StyledRate = exports.StyledRate = _styledComponents["default"].span.withConfig({
  componentId: "sc-132za8j-1"
})(["font-family:\"Century Gothic\",Verdana,sans-serif;color:", ";font-size:", ";"], function (props) {
  return props.color;
}, function (props) {
  return props.size;
});