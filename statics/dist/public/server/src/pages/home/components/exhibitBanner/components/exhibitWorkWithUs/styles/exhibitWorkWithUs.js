"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExhibitWorkWithUsTitle = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../../../../../../components/styles/responsive");
var _templateObject, _templateObject2;
var ExhibitWorkWithUsTitle = exports.ExhibitWorkWithUsTitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-1jjyahp-0"
})(["color:", ";font-weight:bold;font-size:1.5em;text-transform:none;text-align:center;padding-left:0.5em;", " ", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.mainLight;
}, _responsive.media.screenMdMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    padding:1.7rem 0 1.7rem 0.2rem;\n  "]))), _responsive.media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    display:none;\n  "]))));