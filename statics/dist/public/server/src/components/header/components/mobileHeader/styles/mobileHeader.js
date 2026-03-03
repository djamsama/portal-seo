"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RightMenu = exports.HeaderWrapper = exports.HeaderPlaceHolder = exports.HeaderContent = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../styles/responsive"));
var _templateObject, _templateObject2, _templateObject3;
var media = _responsive["default"].media();

// Non affiché par défaut (d'où le display:none), il est rendu visible par media query sur petit écran.
// Le pseudo element est la pour atténuer l'effet flash au dessu du header sur un scroll un peu brutal.
var HeaderWrapper = exports.HeaderWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-bljyyy-0"
})(["position:absolute;z-index:10;height:", ";width:100%;color:#fff;background-color:", ";box-shadow:0 5px 5px rgba(0,0,0,0.1);display:none;&:before{content:\"\";height:50px;background:", ";width:100%;position:absolute;top:-50px;}", " &.sticky{position:absolute;}&.top{position:fixed;top:0 !important;}", ""], function (props) {
  return "".concat(props.height, "px");
}, function (props) {
  return props.theme.main;
}, function (props) {
  return props.theme.main;
}, media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      display: flex;\n  "]))), media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  &.top {\n   z-index:5;\n  }\n"]))));
var HeaderContent = exports.HeaderContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-bljyyy-1"
})(["position:relative;display:flex;justify-content:space-between;align-items:center;width:100%;"]);
var HeaderPlaceHolder = exports.HeaderPlaceHolder = _styledComponents["default"].div.withConfig({
  componentId: "sc-bljyyy-2"
})(["display:none;height:", ";", ""], function (props) {
  return "".concat(props.height, "px");
}, media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n      display: block;\n  "]))));
var RightMenu = exports.RightMenu = _styledComponents["default"].div.withConfig({
  componentId: "sc-bljyyy-3"
})(["display:flex;height:100%;"]);