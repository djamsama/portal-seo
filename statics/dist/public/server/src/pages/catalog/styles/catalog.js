"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StandWrapper = exports.RelatedLinksWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _tile = _interopRequireDefault(require("../../../components/tile/tile"));
var RelatedLinksWrapper = exports.RelatedLinksWrapper = (0, _styledComponents["default"])(_tile["default"]).withConfig({
  componentId: "sc-1o9lrao-0"
})(["width:100%;height:200px;color:black;float:none;margin:0 0 20px 0;padding:0;"]);
var StandWrapper = exports.StandWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1o9lrao-1"
})(["color:#555;"]);