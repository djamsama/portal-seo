"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExcerptWrapper = exports.ExcerptTitle = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var ExcerptWrapper = exports.ExcerptWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-f5f31y-0"
})(["background-color:#fff;box-shadow:0 5px 5px rgba(0,0,0,0.1);position:relative;", ""], function (props) {
  return props.marginTop ? "margin-top: 40px;" : "";
});
var ExcerptTitle = exports.ExcerptTitle = _styledComponents["default"].h2.withConfig({
  componentId: "sc-f5f31y-1"
})(["padding:10px 20px;font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;font-size:1.2em;text-transform:uppercase;color:#333;border-left:3px solid ", ";"], function (props) {
  return props.theme.mainLight;
});