"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubMenuWrapper = exports.StyledColumn = exports.StyledArrow = exports.ExpandLink = exports.DirectLink = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireWildcard(require("../../styles/responsive"));
var _arrow = _interopRequireDefault(require("./arrow"));
var _link = _interopRequireDefault(require("./link"));
var _column = require("../../styles/column");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
// eslint-disable-next-line import/no-named-as-default-member
var oneRowMinMedia = _responsive["default"].specificMinMedia(1450);
// eslint-disable-next-line import/no-named-as-default-member
var desktopMin = _responsive["default"].specificMinMedia(1024);
var StyledColumn = exports.StyledColumn = (0, _styledComponents["default"])(_column.Column).withConfig({
  componentId: "sc-9w44si-0"
})(["background-color:", ";float:right;min-width:750px;padding-left:inherit;padding-right:inherit;ul{display:flex;flex-wrap:nowrap;li{padding:0;}}", ";", ";", ";", ";"], function (props) {
  return props.theme.main;
}, _responsive.media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    ul {\n      li{\n        padding:5px 0;\n      }\n    }\n  "]))), desktopMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    ul {\n      background-color:transparent !important;\n      li{\n        padding:0;\n      }\n    }\n  "]))), oneRowMinMedia(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n     width: 10px;\n  "]))), _responsive.media.screenSmMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    background: none;\n    float: none;\n    min-width: auto;\n    padding: 20px 10px 50px 10px;\n    width: 100%;\n    ul {\n      display: flex;\n    flex-direction: column;\n      li{\n        border-bottom: 1px solid ", ";\n        color: ", ";\n        &:active{\n          i{\n            color:", ";\n          }\n        }\n      }\n    &:last-child{\n      > ul {\n        &:last-child{\n          border-bottom: none;\n        }\n      }\n    }\n    &.link-shop-exist{\n      li:nth-last-child(2){\n      border-bottom: none;\n      }\n    }\n    }\n  "])), function (props) {
  return props.theme.headerMobileLinkBorder;
}, function (props) {
  return props.theme.headerMobileLight;
}, function (props) {
  return props.theme.headerMobileLinkIcon;
}));
var ExpandLink = exports.ExpandLink = _styledComponents["default"].a.withConfig({
  componentId: "sc-9w44si-1"
})(["", ";"], _responsive.media.screenSmMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 100%;\n    display: flex;\n    border: none;\n    color: ", ";\n    font-weight: ", ";\n    font-size: 1.37em;\n    cursor: pointer;\n    &:hover {\n      color: ", ";\n    }\n  "])), function (props) {
  return props.theme.headerMobileLink;
}, function (props) {
  return "".concat(props.site) !== "di" ? "normal" : "bold";
}, function (props) {
  return props.theme.headerMobileLink;
}));
var DirectLink = exports.DirectLink = (0, _styledComponents["default"])(_link["default"]).withConfig({
  componentId: "sc-9w44si-2"
})(["white-space:nowrap;", ";"], _responsive.media.screenSmMin(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 100%;\n    display: flex;\n    border: none;\n    color: ", ";\n    font-size: 1.37em;\n    padding: 0;\n    font-weight: ", ";\n    font-family: Arial,sans-serif;\n    cursor: pointer;\n    &:focus{\n      color:  ", ";\n    }\n    &:hover{\n      color:  ", ";\n    }\n  "])), function (props) {
  return props.theme.headerMobileLink;
}, function (props) {
  return "".concat(props.site) !== "di" ? "normal" : "bold";
}, function (props) {
  return props.theme.headerMobileLink;
}, function (props) {
  return props.theme.headerMobileLink;
}));
var SubMenuWrapper = exports.SubMenuWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-9w44si-3"
})(["display:inline-block;", ";"], _responsive.media.screenSmMin(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n    &:empty, &.collapsed {\n      left: 100%;\n    }\n    transition: all 0.3s ease-in-out;\n    position: absolute;\n    left: 0;\n    top: 0;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    -webkit-overflow-scrolling: touch;\n    height: calc(100% + 10px); /* 10px for scrollbar. */\n    width: calc(100% + 10px); /* 10px for scrollbar. */\n  "]))));
var StyledArrow = exports.StyledArrow = (0, _styledComponents["default"])(_arrow["default"]).withConfig({
  componentId: "sc-9w44si-4"
})(["", ";width:8px !important;height:8px !important;"], _responsive.media.screenSmMin(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: auto;\n    &:before {\n      content: \"\";\n      border: solid ", ";\n      border-width: 0 1px 1px 0;\n      display: inline-block;\n      padding: .3em;\n      transform: rotate(-45deg);\n      width:8px !important;\n      height:8px !important;\n    }\n    &.fa-spin {\n      &:before {\n        content: \"\f110\";\n        border: none;\n        padding: 2px 0;\n      }\n    }\n  "], ["\n    margin-left: auto;\n    &:before {\n      content: \"\";\n      border: solid ", ";\n      border-width: 0 1px 1px 0;\n      display: inline-block;\n      padding: .3em;\n      transform: rotate(-45deg);\n      width:8px !important;\n      height:8px !important;\n    }\n    &.fa-spin {\n      &:before {\n        content: \"\\f110\";\n        border: none;\n        padding: 2px 0;\n      }\n    }\n  "])), function (props) {
  return props.theme.headerMobileLinkIcon;
}));