"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../styles/responsive"));
var _templateObject, _templateObject2;
var media = _responsive["default"].media();
var Link = _styledComponents["default"].a.withConfig({
  componentId: "sc-1n4acrd-0"
})(["border-bottom:", ";display:inline-block;padding:0 15px 18px;font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;vertical-align:bottom;font-size:1.2em;color:#fff;transition:0.25s ease-in-out 0s;position:relative;text-decoration:none;font-weight:bold;cursor:pointer;", ";:hover{border-bottom:", " solid 6px;color:#fff;", ";}&.moreMenu{font-size:2em;}"], function (props) {
  return props.actif ? "".concat(props.theme.mainLight, " solid 6px") : "6px solid transparent";
}, media.screenMdMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      padding: 0 10px 10px;\n  "]))), function (props) {
  return props.theme.mainLight;
}, media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      border-bottom: none;\n    "]))));
var _default = exports["default"] = Link;