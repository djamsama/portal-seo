"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageWithZoomWrapper = exports.ImageContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../styles/responsive"));
var media = _responsive["default"].media();
var ImageWithZoomWrapper = exports.ImageWithZoomWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-179cy90-0"
})([""]);
var ImageContainer = exports.ImageContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-179cy90-1"
})(["margin-left:auto;margin-right:auto;width:fit-content;position:relative;"]);