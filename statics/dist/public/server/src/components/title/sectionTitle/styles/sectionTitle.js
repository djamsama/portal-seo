"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.Text = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../../styles/responsive");
var _templateObject, _templateObject2;
var Title = exports.Title = _styledComponents["default"].h4.withConfig({
  componentId: "sc-e6uu0s-0"
})(["margin-top:30px;margin-bottom:40px;padding:0 20px;font-family:HurmeGeometricSans_No4_5_SemiBold,Arial,sans-serif;font-size:1.16em;text-transform:uppercase;border-bottom:1px solid #d3d3d3;position:relative;", ""], _responsive.media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    border-bottom: none;\n  "]))));
var Text = exports.Text = _styledComponents["default"].span.withConfig({
  componentId: "sc-e6uu0s-1"
})(["padding:0 20px;background-color:#f6f6f6;position:absolute;bottom:-10px;", ""], _responsive.media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n  "]))));