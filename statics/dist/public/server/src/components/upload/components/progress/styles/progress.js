"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = exports.Bar = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var ProgressBar = exports.ProgressBar = _styledComponents["default"].div.withConfig({
  componentId: "sc-hth6q6-0"
})(["width:100%;height:4px;background-color:#a0c2f3;border-radius:0;.Progress{background-color:#2b78e4;height:100%;margin:0;border-radius:0;}"]);
var Bar = exports.Bar = _styledComponents["default"].div.withConfig({
  componentId: "sc-hth6q6-1"
})(["width:", ";"], function (props) {
  return "".concat(props.progress, "%");
});