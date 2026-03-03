"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollTopContainer = exports.IconWith = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _veDesignSystem = require("ve-design-system");
var ScrollTopContainer = exports.ScrollTopContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-1v2i4tt-0"
})(["z-index:10;position:fixed !important;bottom:0;margin-bottom:140px !important;right:0;padding:15px;@media only screen and (max-width:768px){margin-bottom:110px !important;}"]);
var IconWith = exports.IconWith = (0, _styledComponents["default"])(_veDesignSystem.Icon).withConfig({
  componentId: "sc-1v2i4tt-1"
})(["stroke-width:5px;"]);