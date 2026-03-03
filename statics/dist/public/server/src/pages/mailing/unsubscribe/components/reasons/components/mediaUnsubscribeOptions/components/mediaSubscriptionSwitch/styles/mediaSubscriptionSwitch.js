"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwitchRow = exports.SwitchLabel = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var SwitchRow = exports.SwitchRow = _styledComponents["default"].div.withConfig({
  componentId: "sc-1wta340-0"
})(["padding-left:15px;display:flex;align-items:center;justify-content:space-between;width:100%;border-bottom:1px solid #f6f6f6;padding-top:", ";padding-bottom:10px;"], function (_ref) {
  var hideLeftBorder = _ref.hideLeftBorder;
  return hideLeftBorder ? "0" : "10px";
});
var SwitchLabel = exports.SwitchLabel = _styledComponents["default"].span.withConfig({
  componentId: "sc-1wta340-1"
})(["font-size:12px;border-left:", ";color:", ";font-weight:", ";padding-left:10px;width:85%;word-wrap:break-word;overflow-wrap:break-word;display:inline-block;"], function (_ref2) {
  var hideLeftBorder = _ref2.hideLeftBorder,
    disabled = _ref2.disabled,
    theme = _ref2.theme;
  return hideLeftBorder ? "none" : disabled ? "#999999 solid 3px" : "".concat(theme.mainLight, " solid 3px");
}, function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled ? "#999999" : "#4d4d4d";
}, function (_ref4) {
  var disabled = _ref4.disabled,
    hideLeftBorder = _ref4.hideLeftBorder;
  return disabled || hideLeftBorder ? "normal" : 700;
});