"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperButtons = exports.SupplierIntro = exports.SupplierInfo = exports.SupplierIdentityWrapper = exports.SupplierIdentity = exports.SupplierDetailsWrapper = exports.StyledFrame = exports.Review = exports.Reactivity = exports.RatingTooltip = exports.RatingDetails = exports.Rating = exports.QuotationButton = exports.PriceButton = exports.Name = exports.Location = exports.FreeQuotationTextWrapper = exports.FreeQuotation = exports.FrameSkeleton = exports.DocumentButton = exports.Actions = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _veDesignSystem = require("ve-design-system");
var _responsive = require("../../styles/responsive");
var _portalButton = _interopRequireDefault(require("../../styles/portalButton"));
var _invertedPortalButton = require("../../styles/invertedPortalButton");
var _constants = require("../../../commons/constants");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
var mobileMedia = (0, _responsive.specificMaxMedia)(640);
var mobileMediaXxxs = (0, _responsive.specificMaxMedia)(360);
var SupplierDetailsWrapper = exports.SupplierDetailsWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1u0qos1-0"
})(["width:100%;display:flex;gap:20px;flex-direction:column;", ";"], _responsive.media.screenMdMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: 100%;\n  "]))));
var PriceButton = exports.PriceButton = (0, _styledComponents["default"])(_invertedPortalButton.InvertedPortalButton).withConfig({
  componentId: "sc-1u0qos1-1"
})(["&:before{content:\"\f153\";font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;margin-right:15px;position:absolute;left:15px;}position:relative;text-transform:none;border-radius:3px;font-family:Arial,sans-serif;"]);
var SupplierIntro = exports.SupplierIntro = _styledComponents["default"].div.withConfig({
  componentId: "sc-1u0qos1-2"
})(["color:#555;font-family:Arial;font-size:12px;font-style:normal;font-weight:700;line-height:normal;"]);
var SupplierInfo = exports.SupplierInfo = _styledComponents["default"].div.withConfig({
  componentId: "sc-1u0qos1-3"
})(["display:flex;flex-direction:column;gap:5px;"]);
var Actions = exports.Actions = _styledComponents["default"].div.withConfig({
  componentId: "sc-1u0qos1-4"
})(["display:flex;flex-direction:column;> div{min-width:auto;width:100%;border-radius:3px;padding:4px 0px;font-size:1.5em;margin:0 auto 0 0;", "}", " ", ";"], _responsive.mediaResolution.screen110dpi(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      min-width: unset;\n    "]))), _responsive.media.screenMdMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 20px;\n  "]))), mobileMedia(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 100%;\n    min-width: 100%;\n    > div {\n      min-width: 100%;\n    }\n  "]))));
var SupplierIdentityWrapper = exports.SupplierIdentityWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1u0qos1-5"
})(["display:flex;align-items:baseline;&:before{content:\"\f2bc\";font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;margin-right:5px;width:15px;}> div{flex:1;}"]);
var SupplierIdentity = exports.SupplierIdentity = _styledComponents["default"].div.withConfig({
  componentId: "sc-1u0qos1-6"
})(["display:flex;flex-wrap:wrap;margin-bottom:15px;", ";"], mobileMedia(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    flex-direction: column;\n  "]))));
var Name = exports.Name = _styledComponents["default"].div.withConfig({
  componentId: "sc-1u0qos1-7"
})(["color:#555;font-size:1.2em;font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;font-weight:700;word-wrap:break-word;"]);
var Rating = exports.Rating = _styledComponents["default"].div.withConfig({
  componentId: "sc-1u0qos1-8"
})(["display:flex;"]);
var Reactivity = exports.Reactivity = _styledComponents["default"].div.withConfig({
  componentId: "sc-1u0qos1-9"
})(["display:flex;align-items:baseline;padding-right:10px;&:before{content:\"\f017\";font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;margin-right:5px;width:15px;}span{flex:1;}"]);
var RatingTooltip = exports.RatingTooltip = _styledComponents["default"].div.withConfig({
  componentId: "sc-1u0qos1-10"
})([""]);
var RatingDetails = exports.RatingDetails = _styledComponents["default"].div.withConfig({
  componentId: "sc-1u0qos1-11"
})(["font-size:1.2em;display:flex;gap:5px;align-item:center;flex-wrap:", ";z-index:0;> div{display:inline-block;}"], function (props) {
  return props.wrap ? "wrap" : "inherit";
});
var Review = exports.Review = _styledComponents["default"].span.withConfig({
  componentId: "sc-1u0qos1-12"
})(["margin-left:5px;color:#999;font-size:1em;"]);
var QuotationButton = exports.QuotationButton = (0, _styledComponents["default"])(_portalButton["default"]).withConfig({
  componentId: "sc-1u0qos1-13"
})(["position:relative;text-transform:none;border-radius:3px;font-family:Arial,sans-serif;border:1px solid ", ";&:before{content:", ";font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;margin-right:15px;position:absolute;left:15px;}"], function (props) {
  return props.theme.mainLight;
}, function (props) {
  return "\"".concat(props.type === _constants.REQUEST_BUTTON_TYPE.CONTACT_DETAILS ? "\f2bc" : "\f1ec", "\"");
});
var DocumentButton = exports.DocumentButton = (0, _styledComponents["default"])(_invertedPortalButton.InvertedPortalButton).withConfig({
  componentId: "sc-1u0qos1-14"
})(["position:relative;text-transform:none;border-radius:3px;font-family:Arial,sans-serif;border:1px solid ", ";&:before{content:", ";font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;margin-right:15px;position:absolute;left:15px;}"], function (props) {
  return props.theme.mainLight;
}, function (props) {
  return "\"".concat(props.type === _constants.REQUEST_BUTTON_TYPE.CONTACT_DETAILS ? "\f2bc" : "\f1ec", "\"");
});
var WrapperButtons = exports.WrapperButtons = _styledComponents["default"].div.withConfig({
  componentId: "sc-1u0qos1-15"
})(["", ";", ""], mobileMedia(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 100%;\n    min-width: 100%;\n    > a {\n        font: 18px Arial, sans-serif;\n        line-height: 1.2em ;\n      }\n    "]))), mobileMediaXxxs(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n    a {\n      padding: 0;\n      text-align: center;\n    }\n  "]))));
var FreeQuotation = exports.FreeQuotation = _styledComponents["default"].div.withConfig({
  componentId: "sc-1u0qos1-16"
})(["color:#555555;font-size:12px;font-family:Arial;font-weight:400;word-wrap:break-word;display:flex;align-items:baseline;&:before{content:\"\f185\";font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;margin-right:5px;width:15px;}"]);
var FreeQuotationTextWrapper = exports.FreeQuotationTextWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1u0qos1-17"
})(["flex:1;"]);
var StyledFrame = exports.StyledFrame = (0, _styledComponents["default"])(_veDesignSystem.Frame).withConfig({
  componentId: "sc-1u0qos1-18"
})(["height:100%;", ";"], mobileMedia(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n      padding-bottom: 0;\n  "]))));
var FrameSkeleton = exports.FrameSkeleton = (0, _styledComponents["default"])(StyledFrame).withConfig({
  componentId: "sc-1u0qos1-19"
})(["background-color:transparent;border-color:rgb(246,246,246);", ",", ",", ",", "{width:100%;position:relative;overflow:hidden;background-color:rgb(246,246,246);border:none;border-radius:3px;min-height:24px;pointer-events:none;cursor:default;&:hover{background-color:rgb(246,246,246);}&:before{content:\"\";}&:after{position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background-image:linear-gradient( 90deg,rgba(255,255,255,0) 0,rgba(255,255,255,0.2) 20%,rgba(255,255,255,0.5) 60%,rgba(255,255,255,0) );animation:shimmer 2s infinite;content:\"\";}}", "{height:48px;}span{color:transparent;}svg{display:none;}"], SupplierIntro, WrapperButtons, FreeQuotation, SupplierIdentityWrapper, WrapperButtons);
var Location = exports.Location = _styledComponents["default"].div.withConfig({
  componentId: "sc-1u0qos1-20"
})(["flex:0 0 100%;font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;&:before{content:\"\f041\";font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;margin-right:5px;color:#999;}", ";"], mobileMedia(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: 0;\n  "]))));