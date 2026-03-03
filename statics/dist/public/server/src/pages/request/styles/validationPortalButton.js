"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidationPortalButton = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../components/styles/responsive"));
var _portalButton = _interopRequireDefault(require("../../../components/styles/portalButton"));
var _templateObject;
var media = _responsive["default"].media();
var ValidationPortalButton = exports.ValidationPortalButton = (0, _styledComponents["default"])(_portalButton["default"]).withConfig({
  componentId: "sc-1lcm7f0-0"
})(["&&&{margin:4em auto 0;width:30%;padding-left:5px;padding-right:5px;", ";}"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      width: 100%;\n    "]))));