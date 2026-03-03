"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleWrapper = exports.Title = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var TitleWrapper = exports.TitleWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1axu73n-0"
})(["margin:30px 0 40px;padding:0 20px;font-size:1em;color:#555659;font-family:HurmeGeometricSans_SemiBold,sans-serif;text-transform:uppercase;"]);
var Title = exports.Title = _styledComponents["default"].span.withConfig({
  componentId: "sc-1axu73n-1"
})(["padding:0 20px;background-color:#f6f6f6;position:relative;bottom:-10px;"]);