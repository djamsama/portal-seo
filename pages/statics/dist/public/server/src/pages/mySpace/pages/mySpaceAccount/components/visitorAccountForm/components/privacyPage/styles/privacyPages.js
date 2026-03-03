"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrivacyPageWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../../../components/styles/responsive"));
var _templateObject;
var media = _responsive["default"].media();
var PrivacyPageWrapper = exports.PrivacyPageWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-9smm3l-0"
})(["width:700px;font-size:94%;line-height:1.7em;font-style:italic;margin:0 auto 10px;", ";a{text-decoration:none;}"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: 100%;\n  "]))));