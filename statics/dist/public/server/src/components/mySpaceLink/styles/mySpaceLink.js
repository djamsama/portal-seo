"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperMyspaceLink = exports.UserInfo = exports.SpanLogout = exports.ProductLabelValue = exports.PopupDivHeader = exports.PopupContainer = exports.PLogout = exports.MySpaceSpanMy = exports.MySpaceSpanIconStartWhite2 = exports.MySpaceSpanIconStartWhite = exports.MySpaceLinkSpan = exports.MySpaceLinkContent = exports.MySpaceHeaderSpanIconSmallCross = exports.MySpaceHeaderIcon = exports.Icon = exports.CloseGray = exports.Big = exports.AccountSpanMy = exports.AccountLinkContent = exports.AccountLink = exports.AccountCloseContainer = exports.AccountClose = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../styles/responsive"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var media = _responsive["default"].media();
var headWidth = "11px;";
var headInnerWidth = "9px;";
var MySpaceHeaderIcon = exports.MySpaceHeaderIcon = _styledComponents["default"].i.withConfig({
  componentId: "sc-1ifw01i-0"
})(["text-align:center;margin-right:10px;min-width:15px;"]);
var MySpaceSpanIconStartWhite = exports.MySpaceSpanIconStartWhite = _styledComponents["default"].span.withConfig({
  componentId: "sc-1ifw01i-1"
})(["display:inline-block;vertical-align:middle;width:11px;height:14px;margin-top:5px;margin-right:3px;vertical-align:middle;font-size:30px;font-weight:bold;font-family:Arial,sans-serif;color:#fff;", ""], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: none;\n  "]))));
var MySpaceSpanIconStartWhite2 = exports.MySpaceSpanIconStartWhite2 = (0, _styledComponents["default"])(MySpaceHeaderIcon).withConfig({
  componentId: "sc-1ifw01i-2"
})(["background-image:url(", "/common/myspace/myspace-sprite.png);background-repeat:no-repeat;display:inline-block;width:11px;height:11px;background-position:-263px -1px;margin-right:3px;"], function (props) {
  return props.theme.pathImg;
});
var ProductLabelValue = exports.ProductLabelValue = _styledComponents["default"].span.withConfig({
  componentId: "sc-1ifw01i-3"
})(["font-family:Arial,sans-serif;display:inline-block;margin-right:10px;font-size:1.071rem;font-weight:400;color:#999;::before{margin-right:5px;content:\"\f069\";font-family:FontAwesome;}"]);
var MySpaceHeaderSpanIconSmallCross = exports.MySpaceHeaderSpanIconSmallCross = (0, _styledComponents["default"])(MySpaceSpanIconStartWhite).withConfig({
  componentId: "sc-1ifw01i-4"
})(["width:9px;height:9px;margin:0 0 0 5px;background-position:-15px -3px;"]);
var MySpaceSpanMy = exports.MySpaceSpanMy = _styledComponents["default"].span.withConfig({
  componentId: "sc-1ifw01i-5"
})(["color:", ";"], function (props) {
  return props.theme.mainLight;
});
var MySpaceLinkSpan = exports.MySpaceLinkSpan = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ifw01i-6"
})(["display:inline-block;"]);
var MySpaceLinkContent = exports.MySpaceLinkContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ifw01i-7"
})(["margin-right:50px;margin-left:50px;float:", ";font-size:1em;font-weight:", ";text-transform:uppercase;color:", ";cursor:pointer;", ";"], function (props) {
  return props.theme["float"];
}, function (props) {
  return props.theme.fontWeight;
}, function (props) {
  return props.theme.color;
}, media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      margin-right: 0px;\n      margin-left: 0px;\n    "]))));
var WrapperMyspaceLink = exports.WrapperMyspaceLink = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ifw01i-8"
})(["float:", ";"], function (props) {
  return props.theme["float"];
});
var PopupContainer = exports.PopupContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ifw01i-9"
})(["", ";"], media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    position: absolute;\n    padding: 10px;\n    height: 100%;\n    width: 100%;\n    top: 0px;\n    right: 0px;\n    background-color: ", ";\n    z-index: 2;\n  "])), function (props) {
  return props.theme.main;
}));
var PopupDivHeader = exports.PopupDivHeader = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ifw01i-10"
})(["padding:20px;color:#555659;background-color:#fff;position:relative;text-transform:none;font-weight:400;text-align:left;font-size:12px;line-height:1.5em;.signup{margin-top:10px;font-size:1.167em;a{color:", ";:hover{text-decoration:underline;}cursor:pointer;}}ul{list-style:none;padding-left:0px;&.links{li{font-size:0.9em;a{color:", ";}}}li{margin:0 0 5px;font-size:15px;a:hover{text-decoration:underline;}}}a{text-decoration:none;color:inherit;:visited{color:inherit;}}hr{margin:20px 0 20px 0;border:0;border-top:1px solid #e5e5e5;height:0;box-sizing:content-box;}", ";"], function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLight;
}, media.screenSmMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    color: #fff;\n    background-color: transparent;\n    padding: 20px;\n    h1 {\n      font-size: 25px;\n      margin: 10px 0;\n    }\n  "]))));
var Big = exports.Big = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ifw01i-11"
})(["font-size:20px;line-height:20px;padding-top:65px;", ";"], media.screenSmMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    padding-top: 0;\n  "]))));
var PLogout = exports.PLogout = _styledComponents["default"].p.withConfig({
  componentId: "sc-1ifw01i-12"
})(["margin:0;font-size:10px;text-align:right;"]);
var SpanLogout = exports.SpanLogout = _styledComponents["default"].span.withConfig({
  componentId: "sc-1ifw01i-13"
})(["margin:0 0 0 5px;cursor:pointer;"]);
var Icon = exports.Icon = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ifw01i-14"
})(["display:inline-block;background-image:url(", "/common/myspace/myspace-sprite.png);"], function (props) {
  return props.theme.pathImg;
});
var CloseGray = exports.CloseGray = (0, _styledComponents["default"])(Icon).withConfig({
  componentId: "sc-1ifw01i-15"
})(["background-position:-62px -148px;width:17px;height:17px;position:absolute;top:10px;right:15px;cursor:pointer;z-index:3;"]);
var AccountCloseContainer = exports.AccountCloseContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ifw01i-16"
})(["display:block;width:auto;height:60px;"]);
var AccountLink = exports.AccountLink = _styledComponents["default"].div.attrs(function () {
  return {
    "data-cy": "mobile-AccountLink"
  };
}).withConfig({
  componentId: "sc-1ifw01i-17"
})(["position:relative;box-sizing:border-box;display:inline-block;width:", ";height:", ";border-radius:100%;margin:5px;background-color:#fff;padding:1px;box-shadow:0 0 0 0 #fff inset,0 0 0 0 #fff;&:before{content:\"\";display:block;width:", ";height:", ";border-radius:100%;background-color:", ";box-shadow:0 0 1px 0 #fff inset,0 0 1px 0 #fff;}&:after{content:\"\";display:inline-block;background:", ";border-radius:100%;height:20px;width:19px;border:1px solid #fff;margin-left:-5px;}"], headWidth, headWidth, headInnerWidth, headInnerWidth, function (props) {
  return props.theme.main;
}, function (props) {
  return props.theme.main;
});
var AccountClose = exports.AccountClose = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ifw01i-18"
})(["position:relative;float:right;display:inline-block;width:22px;height:22px;min-width:22px;overflow:hidden;margin:15px 15px 25px 0px;z-index:1 &:hover{cursor:pointer;&::before,&::after{background-color:#fff;}}&::before,&::after{content:\"\";position:absolute;height:2px;width:100%;top:50%;left:0;margin-top:-1px;background-color:#fff !important;}&::before{transform:rotate(45deg);}&::after{transform:rotate(-45deg);}"]);
var AccountSpanMy = exports.AccountSpanMy = _styledComponents["default"].span.withConfig({
  componentId: "sc-1ifw01i-19"
})(["color:", ";"], function (props) {
  return props.theme.mainLight;
});
var UserInfo = exports.UserInfo = _styledComponents["default"].span.withConfig({
  componentId: "sc-1ifw01i-20"
})(["display:block;margin-top:5px;font-family:Arial,sans-serif;font-size:14px;font-style:normal;font-weight:400;"]);
var AccountLinkContent = exports.AccountLinkContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ifw01i-21"
})(["text-align:center;margin:0px 50px 10px 50px;font-size:1.2em;font-weight:", ";text-transform:uppercase;color:", ";cursor:pointer;"], function (props) {
  return props.theme.fontWeight;
}, function (props) {
  return props.theme.color;
});