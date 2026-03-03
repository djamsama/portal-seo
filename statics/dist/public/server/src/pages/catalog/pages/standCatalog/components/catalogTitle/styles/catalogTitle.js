"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledIcon = exports.Error = exports.CatalogPage = exports.CatalogNbPage = exports.CatalogButtonsWrapper = exports.CatalogButtonsTitle = exports.CatalogButtonsPlaceHolder = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _veDesignSystem = require("ve-design-system");
var _responsive = _interopRequireDefault(require("../../../../../../../components/styles/responsive"));
var _mainSupplier = _interopRequireDefault(require("../../buttons/components/mainSupplier"));
var _supplierDetails = require("../../../../../../../components/supplierDetails/styles/supplierDetails");
var _templateObject, _templateObject2;
var media = _responsive["default"].media();
var CatalogButtonsWrapper = exports.CatalogButtonsWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-nn7a4d-0"
})(["padding:20px;", ""], media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 15px;\n  "]))));
var CatalogButtonsTitle = exports.CatalogButtonsTitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-nn7a4d-1"
})(["display:", ";line-height:1.1em;color:#333;& span{font-weight:normal;color:#9a9a9a;font-size:15px;font-family:\"Century Gothic\",Verdana,sans-serif;}", " & h1{padding-bottom:0px;margin-bottom:0px;}"], function (props) {
  return props.showMobile ? "none" : "block";
}, media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    display:  ", ";\n    text-align: center;\n  "])), function (props) {
  return props.showMobile ? "block" : "none";
}));
var CatalogPage = exports.CatalogPage = _styledComponents["default"].span.withConfig({
  componentId: "sc-nn7a4d-2"
})(["font-size:15px;"]);
var CatalogNbPage = exports.CatalogNbPage = _styledComponents["default"].span.withConfig({
  componentId: "sc-nn7a4d-3"
})(["margin-right:5px;font-size:15px;"]);
var CatalogButtonsPlaceHolder = exports.CatalogButtonsPlaceHolder = (0, _styledComponents["default"])(_mainSupplier["default"]).withConfig({
  componentId: "sc-nn7a4d-4"
})(["", ",", ",", ",", ",", ",", "{position:relative;overflow:hidden;background-color:rgb(246,246,246);border:none;border-radius:3px;min-height:24px;pointer-events:none;cursor:default;&:hover{background-color:rgb(246,246,246);}&:before{content:\"\";}&:after{position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background-image:linear-gradient( 90deg,rgba(255,255,255,0) 0,rgba(255,255,255,0.2) 20%,rgba(255,255,255,0.5) 60%,rgba(255,255,255,0) );animation:shimmer 2s infinite;content:\"\";}}", "{width:30%;}", "{width:50%;}", ",", "{min-height:50px;> svg{display:none;}}", "{width:20%;margin-bottom:5px;color:transparent;}", "{width:40%;height:35px;}@keyframes shimmer{100%{transform:translateX(100%);}}"], _supplierDetails.Name, _supplierDetails.Location, _supplierDetails.PriceButton, _supplierDetails.QuotationButton, _supplierDetails.PriceLegend, _supplierDetails.PriceValue, _supplierDetails.Name, _supplierDetails.Location, _supplierDetails.PriceButton, _supplierDetails.QuotationButton, _supplierDetails.PriceLegend, _supplierDetails.PriceValue);
var Error = exports.Error = _styledComponents["default"].div.withConfig({
  componentId: "sc-nn7a4d-5"
})(["opacity:0.5;text-align:center;i{font-size:4em;margin-bottom:10px;}"]);
var StyledIcon = exports.StyledIcon = (0, _styledComponents["default"])(_veDesignSystem.Icon).withConfig({
  componentId: "sc-nn7a4d-6"
})(["float:right;"]);