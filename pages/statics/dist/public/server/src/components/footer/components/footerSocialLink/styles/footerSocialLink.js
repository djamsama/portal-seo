"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterSocialLinkWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../styles/responsive"));
var _templateObject;
var media = _responsive["default"].media();
var FooterSocialLinkWrapper = exports.FooterSocialLinkWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1sgrzr9-0"
})(["display:inline-block;padding-top:37px;", ";& > a{margin-right:5px;&:last-of-type{margin-right:0;}}"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: none;\n  "]))));