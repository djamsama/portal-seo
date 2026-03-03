"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledProductGroupTitle = exports.ProductGroupWrapper = exports.ProductGroupContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var ProductGroupWrapper = exports.ProductGroupWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1hnfiwd-0"
})(["display:block;width:100%;"]);
var StyledProductGroupTitle = exports.StyledProductGroupTitle = _styledComponents["default"].h3.withConfig({
  componentId: "sc-1hnfiwd-1"
})(["font-family:HurmeGeometricSans_No4_5_SemiBold,Arial,sans-serif;font-size:1.5em;text-transform:uppercase;"]);
var ProductGroupContainer = exports.ProductGroupContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-1hnfiwd-2"
})([".product-tile{max-width:none;margin-bottom:30px;}margin-bottom:45px;"]);