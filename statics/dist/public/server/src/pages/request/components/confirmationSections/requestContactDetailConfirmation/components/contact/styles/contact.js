"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLink = exports.StyledIconWrapper = exports.StyledIcon = exports.StyledCityText = exports.Row = exports.Right = exports.NameBlock = exports.Left = exports.DetailWrapper = exports.ContactTitle = exports.ContactDetailWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _semanticUiReact = require("semantic-ui-react");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _link = require("../../../../../../../../components/link");
var _responsive = _interopRequireDefault(require("../../../../../../../../components/styles/responsive"));
var _templateObject, _templateObject2, _templateObject3;
var media = _responsive["default"].media();
var ContactDetailWrapper = exports.ContactDetailWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1lff0yc-0"
})(["margin-right:10px;", ";"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: block;\n    padding-top: ", ";\n    border-top: ", ";\n    border-left:none;\n    padding-left:0;\n    margin-right: 0px;\n    padding-bottom: 20px;\n  "])), function (props) {
  return props.main === true && props.multiContact === true ? "20px" : "0";
}, function (props) {
  return props.main === true && props.multiContact === true ? "1px solid #F0F0F0" : "inherit";
}));
var Row = exports.Row = _styledComponents["default"].div.withConfig({
  componentId: "sc-1lff0yc-1"
})(["display:flex;font-size:16px;margin:20px;margin-left:10px;word-break:break-word;align-items:center;"]);
var DetailWrapper = exports.DetailWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1lff0yc-2"
})(["display:flex;justify-content:space-around;align-content:flex-start;align-items:center;margin-top:20px;", ""], media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    display: block;\n    margin-top: 0;\n  "]))));
var Left = exports.Left = _styledComponents["default"].div.withConfig({
  componentId: "sc-1lff0yc-3"
})(["flex:1;text-align:center;img{margin-top:20px;}"]);
var Right = exports.Right = _styledComponents["default"].div.withConfig({
  componentId: "sc-1lff0yc-4"
})(["border-left:1px solid ", ";flex:1;padding-left:50px;", ""], function (props) {
  return props.theme.mainLight;
}, media.screenXsMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    border-left: none;\n  "]))));
var StyledIconWrapper = exports.StyledIconWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1lff0yc-5"
})([""]);
var StyledIcon = exports.StyledIcon = (0, _styledComponents["default"])(_semanticUiReact.Icon).withConfig({
  componentId: "sc-1lff0yc-6"
})(["color:", ";"], function (props) {
  return props.theme.mainLight;
});
var NameBlock = exports.NameBlock = _styledComponents["default"].div.withConfig({
  componentId: "sc-1lff0yc-7"
})(["font-size:22px;font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;text-transform:capitalize;line-height:30px;margin-left:0;"]);
var StyledCityText = exports.StyledCityText = _styledComponents["default"].span.withConfig({
  componentId: "sc-1lff0yc-8"
})(["text-transform:capitalize;"]);
var StyledLink = exports.StyledLink = (0, _styledComponents["default"])(_link.VeLink).withConfig({
  componentId: "sc-1lff0yc-9"
})(["color:#555;font-weight:bold;:hover{color:", ";text-decoration:underline;}"], function (props) {
  return props.theme.mainLight;
});
var ContactTitle = exports.ContactTitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-1lff0yc-10"
})(["font-size:12px;font-family:Arial,sans-serif;color:#999999;"]);