"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.Panels = exports.MenuWrapper = exports.MenuPanel = exports.MenuLinkWrapper = exports.MenuLinkInner = exports.MenuLinkBox = exports.LangMenuPanel = exports.Exhibit = exports.CurrencyMenuPanel = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _mySpaceLink = require("../../../../../../mySpaceLink/styles/mySpaceLink");
var _responsive = require("../../../../../../styles/responsive");
var _templateObject;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
/** Style d'une barre. */
var barWidth = "19px;";
var barHeight = "1px;";
var barPosition = "-6px;";
var barStyle = (0, _styledComponents.css)(["position:absolute;width:", ";height:", ";transition-timing-function:ease;transition-duration:0.15s;transition-property:transform;border-radius:4px;background-color:#fff;"], barWidth, barHeight);
var Wrapper = exports.Wrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1qzmzjy-0"
})([""]);
var MenuLinkWrapper = exports.MenuLinkWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1qzmzjy-1"
})(["z-index:1001;display:inline-block;overflow:visible;margin:0;padding:17px;cursor:pointer;transition-timing-function:linear;transition-duration:0.15s;transition-property:opacity,filter;text-transform:none;color:inherit;border:0;padding-left:", ";transition:padding 0.3s ease-in-out;transition-delay:", ";position:", ";background-color:transparent;-webkit-tap-highlight-color:transparent;top:0;&:before{content:\"\";height:100%;width:100%;background-image:", ";display:", ";position:absolute;top:0;left:0;}"], function (props) {
  if (typeof CSS !== "undefined" && CSS.supports("padding-left", "min(314px, calc(85% - 36px))") === true) {
    return props.collapsed ? "17px" : "min(314px, calc(85% - 36px))";
  }
  return props.collapsed ? "17px" : "calc(85% - 36px)";
}, function (props) {
  return props.collapsed ? "0s" : "0.01s";
}, function (props) {
  return props.collapsed ? "absolute" : "fixed";
}, function (props) {
  return "linear-gradient(to bottom, ".concat(props.theme.mainDarkened, " 0%, ").concat(props.theme.mainDarkened, " 70%,\n         ").concat(props.theme.mainDarkened, "00)");
}, function (props) {
  return props.collapsed ? "none" : "block";
});
var MenuLinkBox = exports.MenuLinkBox = _styledComponents["default"].div.withConfig({
  componentId: "sc-1qzmzjy-2"
})(["position:relative;display:inline-block;width:", ";height:", ";"], barWidth, barWidth);
var MenuLinkInner = exports.MenuLinkInner = _styledComponents["default"].div.withConfig({
  componentId: "sc-1qzmzjy-3"
})(["", " transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);transition-duration:75ms;top:50%;display:block;margin-top:-1px;&:before,&:after{", " display:block;content:\"\";}&:before{transition:top 75ms ease 0.12s,opacity 75ms ease;top:", ";}&:after{transition:bottom 75ms ease 0.12s,transform 75ms cubic-bezier(0.55,0.055,0.675,0.19);bottom:", ";}&.is-active{transition-delay:0.12s;transition-timing-function:cubic-bezier(0.215,0.61,0.355,1);transform:rotate(45deg);background-color:", ";&:before{top:0;transition:top 75ms ease,opacity 75ms ease 0.12s;opacity:0;background-color:", ";}&:after{bottom:0;transition:bottom 75ms ease,transform 75ms cubic-bezier(0.215,0.61,0.355,1) 0.12s;transform:rotate(-90deg);background-color:", ";}}"], barStyle, barStyle, barPosition, barPosition, function (props) {
  return props.theme.headerMobileLink;
}, function (props) {
  return props.theme.headerMobileLink;
}, function (props) {
  return props.theme.headerMobileLink;
});
var MenuWrapper = exports.MenuWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1qzmzjy-4"
})(["transition:all 0.3s ease-in-out;width:85%;max-width:350px;margin-left:", ";position:fixed;display:flex;background:", ";box-shadow:2px 0px 5px 0px rgb(0 0 0 / 0.15);height:100vh;top:0;z-index:1000;padding-top:70px;overflow:hidden;", "{float:none;padding:0 10px 10px;}", "{float:none;}", "{display:block;color:", ";font-size:1.2em;text-transform:uppercase;}"], function (props) {
  if (typeof CSS !== "undefined" && CSS.supports("margin-left", "max(-350px,-85%)") === true) {
    return props.collapsed ? "max(-350px, -85%)" : "0";
  }
  return props.collapsed ? "-85%" : "0";
}, function (props) {
  return props.theme.mainDarkened;
}, _mySpaceLink.WrapperMyspaceLink, _mySpaceLink.MySpaceLinkContent, _mySpaceLink.MySpaceLinkSpan, function (props) {
  return props.theme.headerMobileSubMenu;
});
var Panels = exports.Panels = _styledComponents["default"].div.withConfig({
  componentId: "sc-1qzmzjy-5"
})(["width:200%;min-width:200%;display:flex;"]);
var MenuPanel = exports.MenuPanel = _styledComponents["default"].div.withConfig({
  componentId: "sc-1qzmzjy-6"
})(["width:50%;min-width:50%;padding:10px 20px;transition:margin 0.3s ease-in-out;white-space:nowrap;overflow:hidden;&.subMenuPanel{margin-left:-50%;}"]);
var LangMenuPanel = exports.LangMenuPanel = _styledComponents["default"].div.withConfig({
  componentId: "sc-1qzmzjy-7"
})(["width:50%;min-width:50%;padding:30px 20px;&.collapsed{visibility:hidden;min-width:0;width:0;padding:0;transition:all 0s ease-in-out 0.3s;}&.expanded{transition:all 0s ease-in-out 0s;}"]);
var CurrencyMenuPanel = exports.CurrencyMenuPanel = _styledComponents["default"].div.withConfig({
  componentId: "sc-1qzmzjy-8"
})(["width:50%;min-width:50%;padding:30px 20px;"]);
var Exhibit = exports.Exhibit = _styledComponents["default"].a.withConfig({
  componentId: "sc-1qzmzjy-9"
})(["color:", ";font-size:1.17em;padding-left:10px;cursor:pointer;white-space:break-spaces;display:block;text-align:center;text-transform:lowercase;&:first-letter{text-transform:uppercase;}border:1px solid #fff;padding:5px;border-radius:5px;", ";"], function (props) {
  return props.theme.headerMobileSubMenu;
}, _responsive.media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  border: 1px solid ", ";\n  "])), function (props) {
  return props.theme.headerMobileExhibitButtonBorder;
}));