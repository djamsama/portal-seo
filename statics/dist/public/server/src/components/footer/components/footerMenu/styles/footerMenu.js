"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterMenuListItem = exports.FooterMenuList = exports.FooterMenuLink = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _link = _interopRequireDefault(require("../../../../styles/link"));
var _responsive = _interopRequireDefault(require("../../../../styles/responsive"));
var _templateObject;
var media = _responsive["default"].media();
var FooterMenuList = exports.FooterMenuList = _styledComponents["default"].ul.withConfig({
  componentId: "sc-kma7z9-0"
})(["min-width:270px;margin:0 0 0 60px;padding:10px 0;list-style:none;display:inline-block;vertical-align:top;text-align:left;", ";"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      display: none;\n  "]))));
var FooterMenuListItem = exports.FooterMenuListItem = _styledComponents["default"].li.withConfig({
  componentId: "sc-kma7z9-1"
})(["padding:1px 0;"]);
var FooterMenuLink = exports.FooterMenuLink = (0, _styledComponents["default"])(_link["default"]).withConfig({
  componentId: "sc-kma7z9-2"
})([""]);