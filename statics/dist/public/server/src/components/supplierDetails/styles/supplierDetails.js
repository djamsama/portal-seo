"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperButtons = exports.SupplierInfo = exports.SupplierIdentity = exports.SupplierDetailsWrapper = exports.Review = exports.Reactivity = exports.RatingTooltip = exports.RatingDetails = exports.Rating = exports.QuotationButton = exports.PriceWrapper = exports.PriceValue = exports.PriceLegend = exports.PriceButton = exports.Name = exports.Location = exports.IconWithColor = exports.ButtonWithCustomHover = exports.Actions = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _veDesignSystem = require("ve-design-system");
var _responsive = require("../../styles/responsive");
var _portalButton = _interopRequireDefault(require("../../styles/portalButton"));
var _invertedPortalButton = require("../../styles/invertedPortalButton");
var _constants = require("../../../commons/constants");
var _button = require("../../styles/button");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var mobileMedia = (0, _responsive.specificMaxMedia)(640);
var SupplierDetailsWrapper = exports.SupplierDetailsWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-cmi9pt-0"
})(["display:flex;flex-direction:column;"]);
var IconWithColor = exports.IconWithColor = (0, _styledComponents["default"])(_veDesignSystem.Icon).withConfig({
  componentId: "sc-cmi9pt-1"
})(["stroke:", ";"], function (props) {
  return props.theme.mainLight;
});
var SupplierInfo = exports.SupplierInfo = _styledComponents["default"].div.withConfig({
  componentId: "sc-cmi9pt-2"
})([""]);
var PriceWrapper = exports.PriceWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-cmi9pt-3"
})(["margin-top:30px;"]);
var PriceLegend = exports.PriceLegend = _styledComponents["default"].div.withConfig({
  componentId: "sc-cmi9pt-4"
})(["color:#999;"]);
var PriceValue = exports.PriceValue = _styledComponents["default"].div.withConfig({
  componentId: "sc-cmi9pt-5"
})(["font-size:30px;line-height:1;color:", ";font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;"], function (props) {
  return props.theme.mainLight;
});
var Actions = exports.Actions = _styledComponents["default"].div.withConfig({
  componentId: "sc-cmi9pt-6"
})(["display:flex;flex-direction:column;margin-top:36px;margin-bottom:5px;> div{min-width:345px;border-radius:3px;padding:4px 0px;font-size:1.5em;margin:0 auto 0 0;min-height:50px;", "}", " ", ";"], function (props) {
  return (0, _button.getPlaceHoder)(props);
}, _responsive.media.screenMdMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 20px;\n    min-width:345px;\n  "]))), mobileMedia(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 100%;\n    min-width: 100%;\n    > div {\n      min-width: 100%;\n    }\n  "]))));
var SupplierIdentity = exports.SupplierIdentity = _styledComponents["default"].div.withConfig({
  componentId: "sc-cmi9pt-7"
})(["display:flex;margin-bottom:15px;", ";"], mobileMedia(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    flex-direction: column;\n  "]))));
var Name = exports.Name = _styledComponents["default"].div.withConfig({
  componentId: "sc-cmi9pt-8"
})(["font-size:2em;line-height:1em;font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;"]);
var Location = exports.Location = _styledComponents["default"].div.withConfig({
  componentId: "sc-cmi9pt-9"
})(["margin-left:25px;font-size:1.5em;line-height:1.25em;font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;&:before{content:\"\f041\";font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;margin-right:5px;color:#999;}", ";"], mobileMedia(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: 0;\n  "]))));
var Rating = exports.Rating = _styledComponents["default"].div.withConfig({
  componentId: "sc-cmi9pt-10"
})(["display:flex;"]);
var Reactivity = exports.Reactivity = _styledComponents["default"].div.withConfig({
  componentId: "sc-cmi9pt-11"
})(["display:flex;align-items:center;padding-right:10px;&:before{content:\"\f017\";font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;margin-right:5px;}"]);
var RatingTooltip = exports.RatingTooltip = _styledComponents["default"].div.withConfig({
  componentId: "sc-cmi9pt-12"
})([""]);
var RatingDetails = exports.RatingDetails = _styledComponents["default"].div.withConfig({
  componentId: "sc-cmi9pt-13"
})(["display:flex;flex-wrap:", ";z-index:0;> div{display:inline-block;}"], function (props) {
  return props.wrap ? "wrap" : "inherit";
});
var Review = exports.Review = _styledComponents["default"].span.withConfig({
  componentId: "sc-cmi9pt-14"
})(["margin-left:5px;color:#999;font-size:1em;"]);
var PriceButton = exports.PriceButton = (0, _styledComponents["default"])(_invertedPortalButton.InvertedPortalButton).withConfig({
  componentId: "sc-cmi9pt-15"
})(["&:before{content:\"\f153\";font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;margin-right:15px;position:absolute;left:15px;}position:relative;text-transform:none;border-radius:3px;font-family:Arial,sans-serif;"]);
var QuotationButton = exports.QuotationButton = (0, _styledComponents["default"])(_portalButton["default"]).withConfig({
  componentId: "sc-cmi9pt-16"
})(["position:relative;text-transform:none;border-radius:3px;font-family:Arial,sans-serif;border:1px solid ", ";&:before{content:", ";font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;margin-right:15px;position:absolute;left:15px;}"], function (props) {
  return props.theme.mainLight;
}, function (props) {
  return "\"".concat(props.type === _constants.REQUEST_BUTTON_TYPE.CONTACT_DETAILS ? "\f2bc" : "\f1ec", "\"");
});
var ButtonWithCustomHover = exports.ButtonWithCustomHover = (0, _styledComponents["default"])(_veDesignSystem.Button).withConfig({
  componentId: "sc-cmi9pt-17"
})(["&:hover,&:focus{> svg{stroke:", ";}}"], function (props) {
  return props.theme.mainLightHover;
});
var WrapperButtons = exports.WrapperButtons = _styledComponents["default"].div.withConfig({
  componentId: "sc-cmi9pt-18"
})(["", ";"], mobileMedia(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 100%;\n    min-width: 100%;\n    > a {\n        font: 18px Arial, sans-serif;\n        line-height: 1.2em ;\n      }\n    "]))));