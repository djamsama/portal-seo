"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UniverseGroupLabel = exports.UniverseGroupItemComponent = exports.UniverseGroupExpanded = exports.UniverseGroup = exports.Ul = exports.ParentMenu = exports.MenuRow = exports.MenuColumn = exports.Div = exports.Container = exports.CategoryUl = exports.CategoryParent = exports.CategoryLink = exports.CategoryLi = exports.Arrow = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../styles/responsive");
var _universGroup = require("./universGroup");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject0, _templateObject1, _templateObject10, _templateObject11;
var UniverseGroup = exports.UniverseGroup = _universGroup.UniverseGroup;
var UniverseGroupExpanded = exports.UniverseGroupExpanded = (0, _styledComponents["default"])(_universGroup.UniverseGroupExpanded).withConfig({
  componentId: "sc-1cundqn-0"
})(["display:flex;flex-direction:column;", ""], _responsive.media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n        border-top: none;\n        -webkit-tap-highlight-color: transparent;\n        padding: 9px 15px 9px 0;\n        background: ", ";\n        &.collapsed {\n          > li {\n            > div {\n              display: none;\n            }\n          }\n        }\n        &.expanded{\n          > li {\n            > div {\n              display: block;\n            }\n          }\n        }\n        > li {\n          display: flex;\n          padding: 0;\n          font-size: 1.5em;\n          > div {\n            position: absolute;\n            left: 100%;\n            top: 0;\n            bottom: 0;\n            width: 100%;\n            padding-top: 70px;\n            background: ", ";\n          }\n        }\n    "])), function (props) {
  return props.theme.mainDarkened;
}, function (props) {
  return props.theme.mainDarkened;
}));
var Arrow = exports.Arrow = (0, _styledComponents["default"])(_universGroup.Arrow).withConfig({
  componentId: "sc-1cundqn-1"
})(["", ""], _responsive.media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      float: none;\n      line-height: 2em;\n      margin-left: auto;\n      &:before {\n        content: \"\";\n        border: solid ", ";\n        border-width: 0 1px 1px 0;\n        display: inline-block;\n        padding: .3em;\n        transform: rotate(-45deg);\n      }\n    "])), function (props) {
  return props.theme.headerMobileSubMenu;
}));
var UniverseGroupItemComponent = exports.UniverseGroupItemComponent = (0, _styledComponents["default"])(_universGroup.UniverseGroupItemComponent).withConfig({
  componentId: "sc-1cundqn-2"
})(["font-size:12px;", ""], _responsive.media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n      .accordion {\n        position: relative;\n        z-index: 10;\n      }\n   "]))));
var CategoryUl = exports.CategoryUl = _universGroup.CategoryUl;
var Ul = exports.Ul = (0, _styledComponents["default"])(_universGroup.Ul).withConfig({
  componentId: "sc-1cundqn-3"
})(["", ""], _responsive.media.screenSmMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n          padding-left: 0;\n      "]))));
var MenuRow = exports.MenuRow = (0, _styledComponents["default"])(_universGroup.MenuRow).withConfig({
  componentId: "sc-1cundqn-4"
})(["", ""], _responsive.media.screenSmMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n        margin: 0;\n   "]))));
var MenuColumn = exports.MenuColumn = (0, _styledComponents["default"])(_universGroup.MenuColumn).withConfig({
  componentId: "sc-1cundqn-5"
})(["", ""], _responsive.media.screenSmMin(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 100%;\n      &:last-child {\n        > ul {\n          &:last-child {\n            border: none;\n          }\n        }\n      }\n    "]))));
var CategoryLi = exports.CategoryLi = (0, _styledComponents["default"])(_universGroup.CategoryLi).withConfig({
  componentId: "sc-1cundqn-6"
})(["", ""], _responsive.media.screenSmMin(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n      border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n      margin: 0 20px;\n      &:last-child {\n        border: none;\n      }\n      &:hover {\n        padding-left: 0;\n      }\n  "]))));
var CategoryLink = exports.CategoryLink = (0, _styledComponents["default"])(_universGroup.CategoryLink).withConfig({
  componentId: "sc-1cundqn-7"
})(["font-size:10px;", ""], _responsive.media.screenSmMin(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n      text-transform: none;\n      font-size: 1.3em;\n      padding: 11px 0 11px;\n      color:  ", ";\n      white-space: break-spaces;\n      font-weight: ", ";\n    "])), function (props) {
  return props.theme.headerMobileSubMenu;
}, function (props) {
  return "".concat(props.site) !== "di" ? "normal" : "bold";
}));
var UniverseGroupLabel = exports.UniverseGroupLabel = (0, _styledComponents["default"])(_universGroup.UniverseGroupLabel).withConfig({
  componentId: "sc-1cundqn-8"
})(["", ""], _responsive.media.screenSmMin(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n      width: auto;\n      color:  ", ";\n      font-size: 1.3em;\n      border-left: none;\n      padding-left: 0;\n      white-space: break-spaces;\n      line-height: 22px;\n      text-transform: lowercase;\n      &:first-letter {\n        text-transform: uppercase;\n      }\n      font-weight: ", ";\n   "])), function (props) {
  return props.theme.headerMobileSubMenu;
}, function (props) {
  return "".concat(props.site) !== "di" ? "normal" : "bold";
}));
var Div = exports.Div = (0, _styledComponents["default"])(_universGroup.Div).withConfig({
  componentId: "sc-1cundqn-9"
})(["", ""], _responsive.media.screenSmMin(_templateObject0 || (_templateObject0 = (0, _taggedTemplateLiteral2["default"])(["\n    transition: left 0.3s ease-in-out;\n    position: relative;\n    margin-top: -70px;\n    background: ", ";\n    box-shadow: none;\n    padding-top: 70px;\n    border-bottom: none;\n    height: 100%;\n    &.expanded{\n      left: -100%;\n    }\n  "])), function (props) {
  return props.theme.mainDarkened;
}));
var Container = exports.Container = (0, _styledComponents["default"])(_universGroup.Container).withConfig({
  componentId: "sc-1cundqn-10"
})(["", ""], _responsive.media.screenSmMin(_templateObject1 || (_templateObject1 = (0, _taggedTemplateLiteral2["default"])(["\n        width: 100%;\n        padding: 0;\n  "]))));
var CategoryParent = exports.CategoryParent = (0, _styledComponents["default"])(_universGroup.CategoryParent).withConfig({
  componentId: "sc-1cundqn-11"
})(["", ""], _responsive.media.screenSmMin(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2["default"])(["\n        display: block;\n        text-align: left;\n        background: ", ";\n        color: ", ";\n        text-transform: uppercase;\n        font-size: 1.3em;\n        margin: 5px 20px 15px 20px;\n        white-space: break-spaces;\n        text-indent: -20px;\n        padding-left: 20px;\n        cursor: pointer;\n        &:before {\n          content: \"\";\n          border: solid ", ";\n          border-width: 0 1px 1px 0;\n          display: inline-block;\n          padding: 0.3em;\n          transform: rotate(135deg);\n          margin-right: 10px;\n        }\n    "])), function (props) {
  return props.theme.mainDarkened;
}, function (props) {
  return props.theme.headerMobileParentMenu;
}, function (props) {
  return props.theme.headerMobileParentMenu;
}));
var ParentMenu = exports.ParentMenu = (0, _styledComponents["default"])(CategoryParent).withConfig({
  componentId: "sc-1cundqn-12"
})(["", ""], _responsive.media.screenSmMin(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2["default"])(["\n          display: block;\n          font-size: 1.8em;\n          margin-left: 25px;\n          margin-bottom: 15px;\n   "]))));