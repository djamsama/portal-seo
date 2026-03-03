"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertBanner = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var AlertBanner = exports.AlertBanner = _styledComponents["default"].div.withConfig({
  componentId: "sc-ar8o2v-0"
})(["display:block;text-align:center;z-index:50;background-color:", ";font-weight:700;top:0;font-size:medium;width:100%;margin-bottom:0px;padding:0.4rem;&:hover{cursor:pointer;}"], function (props) {
  return props.theme.mainLight;
});