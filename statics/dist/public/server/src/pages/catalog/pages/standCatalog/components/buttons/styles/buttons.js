"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequestButtonDescription = exports.PlaceHolderWrapper = exports.MainSupplierWrapper = exports.Error = exports.CatalogButtonsWrapper = exports.CatalogButtonsPlaceHolder = exports.ButtonPlaceHolderWrapper = exports.ButtonPlaceHolder = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../components/styles/responsive"));
var _mainSupplier = _interopRequireDefault(require("../components/mainSupplier"));
var _supplierDetails = require("../../../../../../../components/supplierDetails/styles/supplierDetails");
var _templateObject;
var media = _responsive["default"].media();
var PlaceHolderWrapper = exports.PlaceHolderWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-16960cf-0"
})(["box-sizing:border-box;margin:20px;padding:20px;font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;font-size:2.5em;& h1{font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;font-size:30px;}"]);
var ButtonPlaceHolderWrapper = exports.ButtonPlaceHolderWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-16960cf-1"
})(["padding:10px 0;margin:10px 1;"]);
var ButtonPlaceHolder = exports.ButtonPlaceHolder = _styledComponents["default"].div.withConfig({
  componentId: "sc-16960cf-2"
})(["width:98%;border-radius:3px;padding:10px;margin:10px 0;box-sizing:border-box;height:50px !important;max-height:50px !important;position:relative;overflow:hidden;background-color:rgb(246,246,246);&:before{content:\"\";}&:after{position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background-image:linear-gradient( 90deg,rgba(255,255,255,0) 0,rgba(255,255,255,0.2) 20%,rgba(255,255,255,0.5) 60%,rgba(255,255,255,0) );animation:shimmer 2s infinite;content:\"\";}@keyframes shimmer{100%{transform:translateX(100%);}}"]);
var CatalogButtonsWrapper = exports.CatalogButtonsWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-16960cf-3"
})(["padding:20px;", ""], media.screenMdMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 0px;\n      > div > div > div > div { // reduire le bouton de demande de supplierDetail\n      min-width: 100%;\n  }\n  "]))));
var RequestButtonDescription = exports.RequestButtonDescription = _styledComponents["default"].span.withConfig({
  componentId: "sc-16960cf-4"
})(["font-size:15px;color:#999999;line-height:unset;"]);
var CatalogButtonsPlaceHolder = exports.CatalogButtonsPlaceHolder = (0, _styledComponents["default"])(_mainSupplier["default"]).withConfig({
  componentId: "sc-16960cf-5"
})(["", ",", ",", ",", ",", ",", "{position:relative;overflow:hidden;background-color:rgb(246,246,246);border:none;border-radius:3px;min-height:24px;pointer-events:none;cursor:default;&:hover{background-color:rgb(246,246,246);}&:before{content:\"\";}&:after{position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background-image:linear-gradient( 90deg,rgba(255,255,255,0) 0,rgba(255,255,255,0.2) 20%,rgba(255,255,255,0.5) 60%,rgba(255,255,255,0) );animation:shimmer 2s infinite;content:\"\";}}", "{width:30%;}", "{width:50%;}", ",", "{min-height:50px;> svg{display:none;}}", "{width:20%;margin-bottom:5px;color:transparent;}", "{width:40%;height:35px;}@keyframes shimmer{100%{transform:translateX(100%);}}"], _supplierDetails.Name, _supplierDetails.Location, _supplierDetails.PriceButton, _supplierDetails.QuotationButton, _supplierDetails.PriceLegend, _supplierDetails.PriceValue, _supplierDetails.Name, _supplierDetails.Location, _supplierDetails.PriceButton, _supplierDetails.QuotationButton, _supplierDetails.PriceLegend, _supplierDetails.PriceValue);
var Error = exports.Error = _styledComponents["default"].div.withConfig({
  componentId: "sc-16960cf-6"
})(["opacity:0.5;text-align:center;i{font-size:4em;margin-bottom:10px;}"]);
var MainSupplierWrapper = exports.MainSupplierWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-16960cf-7"
})(["margin:", " 0px 10px 0px;"], function (props) {
  return props.noTopMargin ? "0px" : "50px";
});