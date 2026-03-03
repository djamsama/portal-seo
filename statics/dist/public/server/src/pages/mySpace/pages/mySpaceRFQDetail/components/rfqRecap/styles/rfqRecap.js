"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubTitle = exports.Liste = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var Liste = exports.Liste = _styledComponents["default"].ul.withConfig({
  componentId: "sc-1ls65qi-0"
})(["list-style:none;padding-left:0px;li{padding:0px;}"]);
var SubTitle = exports.SubTitle = _styledComponents["default"].span.withConfig({
  componentId: "sc-1ls65qi-1"
})(["font-weight:bold;"]);