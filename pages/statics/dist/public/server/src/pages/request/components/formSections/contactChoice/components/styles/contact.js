"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidationBlock = exports.UpperName = exports.StyledPrice = exports.StyledPortalButtonRate = exports.StyledPortalButtonContact = exports.StyledPortalButton = exports.StyledIconGrey = exports.StyledIcon = exports.Small = exports.PriceWrapper = exports.LabelPrice = exports.BlockStarsWrapper = exports.BlockStarsMobileWrapper = exports.BlockStarsDesktopWrapper = exports.BlockStars = exports.BlockQuality = exports.BlockNameInline = exports.BlockName = exports.BlockLocalisationInline = exports.BlockLocalisation = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _semanticUiReact = require("semantic-ui-react");
var _portalButton = _interopRequireDefault(require("../../../../../../../components/styles/portalButton"));
var _invertedPortalButton = require("../../../../../../../components/styles/invertedPortalButton");
var _responsive = _interopRequireDefault(require("../../../../../../../components/styles/responsive"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject0, _templateObject1, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;
/* $FlowFixMe */
var media = _responsive["default"].media();
var screenXsMin = _responsive["default"].specificMaxMedia(640);
var StyledPrice = exports.StyledPrice = _styledComponents["default"].span.withConfig({
  componentId: "sc-dwhoch-0"
})(["font-size:", ";line-height:", ";font-weight:bold;color:", ";"], function (props) {
  return props.highLight === true ? "30px" : "20px";
}, function (props) {
  return props.highLight === true ? "1.2" : "inherit";
}, function (props) {
  return props.theme.mainLight;
});
var LabelPrice = exports.LabelPrice = _styledComponents["default"].span.withConfig({
  componentId: "sc-dwhoch-1"
})(["font-size:", ";content:", ";color:#999;"], function (props) {
  return props.highLight === true ? "16px" : "13px";
}, function (props) {
  return props.highLight === true ? "oui" : "non";
});
var BlockName = exports.BlockName = _styledComponents["default"].div.withConfig({
  componentId: "sc-dwhoch-2"
})(["text-transform:", ";font-size:", ";font-weight:bold;margin-bottom:", ";line-height:1em;word-wrap:", ";-webkit-hyphens:auto;-moz-hyphens:auto;-ms-hyphens:auto;hyphens:auto;", ""], function (props) {
  return props.highLight === true ? "uppercase" : "none";
}, function (props) {
  return props.highLight === true ? "2em" : "1.4em";
}, function (props) {
  return props.highLight === true ? "8px" : "inherit";
}, function (props) {
  return props.highLight === true ? "inherit" : "break-word";
}, screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      word-wrap: break-word;\n      text-align: center;\n  "]))));
var BlockQuality = exports.BlockQuality = _styledComponents["default"].div.withConfig({
  componentId: "sc-dwhoch-3"
})(["width:450px;margin-left:", ";", ";"], function (props) {
  return props.marginLeft ? props.marginLeft : "4px";
}, screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      width:150px;\n  "]))));
var BlockNameInline = exports.BlockNameInline = _styledComponents["default"].span.withConfig({
  componentId: "sc-dwhoch-4"
})(["font-size:2em;font-weight:bold;margin-right:20px;line-height:1em;word-wrap:break-word;-webkit-hyphens:auto;-moz-hyphens:auto;-ms-hyphens:auto;hyphens:auto;", ""], screenXsMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n      word-wrap: break-word;\n\n      max-width: 100%;\n      margin: auto;\n  "]))));
var PriceWrapper = exports.PriceWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-dwhoch-5"
})(["margin-left:", ";font-weight:bold;word-wrap:break-word;-webkit-hyphens:auto;-moz-hyphens:auto;-ms-hyphens:auto;hyphens:auto;", ""], function (props) {
  return props.highLight === true ? "inherit" : "20px";
}, screenXsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n      text-align: center;\n  "]))));
var BlockLocalisation = exports.BlockLocalisation = _styledComponents["default"].div.withConfig({
  componentId: "sc-dwhoch-6"
})(["font-size:", ";font-weight:bold;word-wrap:break-word;-webkit-hyphens:auto;-moz-hyphens:auto;-ms-hyphens:auto;hyphens:auto;margin-top:1px;text-align:left;", ""], function (props) {
  return props.highLight === true ? "20px" : "14px";
}, screenXsMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n      text-align: center;\n  "]))));
var BlockLocalisationInline = exports.BlockLocalisationInline = _styledComponents["default"].span.withConfig({
  componentId: "sc-dwhoch-7"
})(["font-size:20px;font-weight:bold;word-wrap:break-word;-webkit-hyphens:auto;-moz-hyphens:auto;-ms-hyphens:auto;hyphens:auto;", ""], screenXsMin(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n      text-align: center;\n      display: block;\n      margin-bottom: 20px;\n  "]))));
var StyledPortalButton = exports.StyledPortalButton = (0, _styledComponents["default"])(_portalButton["default"]).withConfig({
  componentId: "sc-dwhoch-8"
})(["padding:", ";min-width:", ";margin-left:", ";padding-left:2px;padding-right:2px;", ""], function (props) {
  return props.highLight === true ? "10px 0px" : "3px 0px";
}, function (props) {
  return "".concat(100 + props.addPixel, "px");
}, function (props) {
  return props.moveLeft === true ? "-60px" : "inherit";
}, screenXsMin(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n      margin: auto;\n      min-width: 100px;\n      word-wrap:break-word;\n  "]))));
var StyledPortalButtonContact = exports.StyledPortalButtonContact = (0, _styledComponents["default"])(_portalButton["default"]).withConfig({
  componentId: "sc-dwhoch-9"
})(["padding:", ";width:", ";min-width:", ";min-height:", ";margin-left:", ";margin-top:10px;font-size:", ";border-radius:4px;text-align:left;padding-left:15px;", ";", ";"], function (props) {
  return props.highLight === true ? "10px" : "3px";
}, function (props) {
  return props.contactDetail === true ? "100%" : "60%";
}, function (props) {
  return props.highLight === true ? "340px" : "230px";
}, function (props) {
  return props.highLight === true ? "50px" : "30px";
}, function (props) {
  return props.contactDetail === true ? "-40px" : "inherit";
}, function (props) {
  return props.highLight === true ? "18px" : "inherit";
}, screenXsMin(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n      margin: auto;\n      min-width: 175px;\n      max-width: 20em;\n    padding-left: 25px;\n    padding-right: 25px;\n  "]))), media.screenXxsMin(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n  margin: auto;\n  min-width: 150px;\n  max-width: 100%;\n  padding-left: 0px;\n  padding-right:0px;\n"]))));
var StyledPortalButtonRate = exports.StyledPortalButtonRate = (0, _styledComponents["default"])(_invertedPortalButton.InvertedPortalButton).withConfig({
  componentId: "sc-dwhoch-10"
})(["padding:", ";min-width:", ";margin-left:", ";padding-left:2px;padding-right:2px;word-wrap:break-word;text-transform:lowercase;", ""], function (props) {
  return props.highLight === true ? "10px 0px" : "3px 0px";
}, function (props) {
  return "".concat(100 + props.addPixel, "px");
}, function (props) {
  return props.moveLeft === true ? "-60px" : "inherit";
}, screenXsMin(_templateObject0 || (_templateObject0 = (0, _taggedTemplateLiteral2["default"])(["\n    margin: auto;\n    min-width: 100px;\n    word-wrap:break-word;\n"]))));
var BlockStars = exports.BlockStars = _styledComponents["default"].div.withConfig({
  componentId: "sc-dwhoch-11"
})(["margin-top:", ";", ""], function (props) {
  return props.highLight === true ? "5px" : "0";
}, screenXsMin(_templateObject1 || (_templateObject1 = (0, _taggedTemplateLiteral2["default"])(["\n      margin: auto;\n  "]))));
var BlockStarsWrapper = exports.BlockStarsWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-dwhoch-12"
})(["", ""], screenXsMin(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2["default"])(["\n      width: ", ";\n      margin: auto;\n  "])), function (props) {
  return props.highLight === true ? "110px" : "110px";
}));
var BlockStarsMobileWrapper = exports.BlockStarsMobileWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-dwhoch-13"
})(["display:none;", " .small{font-size:12px;}"], screenXsMin(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 110px;\n      display: inherit;\n      margin-bottom:20px;\n      margin: auto;\n  "]))));
var BlockStarsDesktopWrapper = exports.BlockStarsDesktopWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-dwhoch-14"
})(["display:inline-block;width:110px;", ""], screenXsMin(_templateObject12 || (_templateObject12 = (0, _taggedTemplateLiteral2["default"])(["\n      display: none;\n  "]))));
var ValidationBlock = exports.ValidationBlock = _styledComponents["default"].div.withConfig({
  componentId: "sc-dwhoch-15"
})(["padding-left:1rem;padding-right:1rem;margin-bottom:10px;", ";"], screenXsMin(_templateObject13 || (_templateObject13 = (0, _taggedTemplateLiteral2["default"])(["\n     padding-right: inherit;\n     margin-left:auto;\n     margin-right:auto;\n     max-width: 100%;\n  "]))));
var StyledIcon = exports.StyledIcon = (0, _styledComponents["default"])(_semanticUiReact.Icon).withConfig({
  componentId: "sc-dwhoch-16"
})(["padding-right:", ";", ";"], function (props) {
  return props.customPaddingright ? props.customPaddingright : "4rem";
}, screenXsMin(_templateObject14 || (_templateObject14 = (0, _taggedTemplateLiteral2["default"])(["\n     padding-right: inherit;\n  "]))));
var StyledIconGrey = exports.StyledIconGrey = (0, _styledComponents["default"])(StyledIcon).withConfig({
  componentId: "sc-dwhoch-17"
})(["color:grey !important;"]);
var Small = exports.Small = _styledComponents["default"].span.withConfig({
  componentId: "sc-dwhoch-18"
})(["font-size:12px;"]);
var UpperName = exports.UpperName = _styledComponents["default"].span.withConfig({
  componentId: "sc-dwhoch-19"
})(["text-transform:uppercase;"]);