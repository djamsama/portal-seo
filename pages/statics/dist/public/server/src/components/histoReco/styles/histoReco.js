"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledProductGroupTitle = exports.StyledOtherProductsButton = exports.SectionTitleWithoutMarginBottom = exports.SectionTitleText = exports.SectionLinkRight = exports.RemoveLink = exports.ProductGroupWrapper = exports.ProductGroupContainer = exports.OtherProductsButtonWrapper = exports.EmptyDiv = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _portalButton = _interopRequireDefault(require("../../styles/portalButton"));
var _sectionTitle = require("../../title/sectionTitle/styles/sectionTitle");
var ProductGroupWrapper = exports.ProductGroupWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1kcwpnj-0"
})(["display:block;width:100%;padding-top:10px;padding-bottom:30px;"]);
var StyledProductGroupTitle = exports.StyledProductGroupTitle = _styledComponents["default"].h3.withConfig({
  componentId: "sc-1kcwpnj-1"
})(["font-family:HurmeGeometricSans_No4_5_SemiBold,Arial,sans-serif;font-size:1.5em;text-transform:uppercase;"]);
var ProductGroupContainer = exports.ProductGroupContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-1kcwpnj-2"
})([".histo-product-tile{max-width:none;margin-bottom:30px;}.fadeOut{opacity:0;}margin-bottom:20px;& > button{color:pink;top:-38px;right:12px;transition:all ease-in-out 0.2s;position:absolute;}"]);
var OtherProductsButtonWrapper = exports.OtherProductsButtonWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1kcwpnj-3"
})(["display:flex;justify-content:center;margin-bottom:50px;"]);
var StyledOtherProductsButton = exports.StyledOtherProductsButton = (0, _styledComponents["default"])(_portalButton["default"]).withConfig({
  componentId: "sc-1kcwpnj-4"
})(["width:auto;border-radius:3px;padding-left:12px;padding-right:12px;font-family:Arial,sans-serif;i{margin-left:5px;}"]);
var EmptyDiv = exports.EmptyDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-1kcwpnj-5"
})([""]);
var SectionLinkRight = exports.SectionLinkRight = _styledComponents["default"].div.withConfig({
  componentId: "sc-1kcwpnj-6"
})(["text-align:right;margin:20px;"]);
var RemoveLink = exports.RemoveLink = _styledComponents["default"].a.withConfig({
  componentId: "sc-1kcwpnj-7"
})(["text-align:right;cursor:pointer;color:", ";:hover{text-decoration:underline;color:", ";}"], function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLight;
});
var SectionTitleWithoutMarginBottom = exports.SectionTitleWithoutMarginBottom = (0, _styledComponents["default"])(_sectionTitle.Title).withConfig({
  componentId: "sc-1kcwpnj-8"
})(["margin-bottom:0;"]);
var SectionTitleText = exports.SectionTitleText = _sectionTitle.Text;