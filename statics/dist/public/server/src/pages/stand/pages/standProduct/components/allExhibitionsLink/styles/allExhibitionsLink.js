"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperStyledLink = exports.StyledLink = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _link = require("../../../../../../../components/link");
var _responsive = _interopRequireDefault(require("../../../../../../../components/styles/responsive"));
var _templateObject;
var media = _responsive["default"].media();
var StyledLink = exports.StyledLink = (0, _styledComponents["default"])(_link.VeLink).withConfig({
  componentId: "sc-1lyeqov-0"
})(["color:", ";text-decoration:underline;"], function (props) {
  return props.theme.mainLight;
});
var WrapperStyledLink = exports.WrapperStyledLink = _styledComponents["default"].div.withConfig({
  componentId: "sc-1lyeqov-1"
})(["text-align:right;transform:translateY(-25px);", ";"], media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    transform: translateY(-15px);\n  "]))));