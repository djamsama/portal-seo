"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleWrapper = exports.Title = exports.GlobalBuyingLinkWrapper = exports.GlobalBuyingLink = exports.BuyingGuideWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _link = _interopRequireDefault(require("../../../../../components/styles/link"));
var _responsive = require("../../../../../components/styles/responsive");
var _templateObject;
var TitleWrapper = exports.TitleWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-aq1xs0-0"
})(["margin:30px 0 40px;padding:0 20px;font-size:1em;color:#555659;font-family:HurmeGeometricSans_SemiBold,sans-serif;text-transform:uppercase;"]);
var Title = exports.Title = _styledComponents["default"].span.withConfig({
  componentId: "sc-aq1xs0-1"
})(["padding:0 20px;background-color:#f6f6f6;position:relative;bottom:-10px;"]);
var GlobalBuyingLinkWrapper = exports.GlobalBuyingLinkWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-aq1xs0-2"
})(["display:flex;justify-content:flex-end;margin:10px 0px 0px 0px;", ";"], _responsive.media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      margin: 35px 0px 0px 0px;\n  "]))));
var GlobalBuyingLink = exports.GlobalBuyingLink = (0, _styledComponents["default"])(_link["default"]).withConfig({
  componentId: "sc-aq1xs0-3"
})(["width:auto;text-align:end;text-transform:none;font-size:1em;font-family:sans-serif;color:", ";&:hover{color:", ";text-decoration:underline;}"], function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLight;
});
var BuyingGuideWrapper = exports.BuyingGuideWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-aq1xs0-4"
})([""]);