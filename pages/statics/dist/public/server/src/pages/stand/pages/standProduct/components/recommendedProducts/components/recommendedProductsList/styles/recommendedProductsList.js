"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledPortalButton = exports.RecommendedProductsWrapper = exports.ButtonWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _portalButton = _interopRequireDefault(require("../../../../../../../../../components/styles/portalButton"));
var ButtonWrapper = exports.ButtonWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1odrl5y-0"
})(["margin-bottom:50px;display:flex;justify-content:center;"]);
var StyledPortalButton = exports.StyledPortalButton = (0, _styledComponents["default"])(_portalButton["default"]).withConfig({
  componentId: "sc-1odrl5y-1"
})(["width:auto;border-radius:3px;padding-left:12px;padding-right:12px;font-family:Arial,sans-serif;"]);
var RecommendedProductsWrapper = exports.RecommendedProductsWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1odrl5y-2"
})([".card{max-width:none;margin-bottom:30px;.TileInset{width:270px;}}margin-bottom:45px;"]);