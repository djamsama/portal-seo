"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuppliersWrapper = exports.SuppliersPlaceHolder = exports.SupplierTitle = exports.StyledIcon = exports.Error = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _veDesignSystem = require("ve-design-system");
var _responsive = _interopRequireDefault(require("../../../../../../../components/styles/responsive"));
var _mainSupplier = _interopRequireDefault(require("../components/mainSupplier"));
var _supplierDetails = require("../../../../../../../components/supplierDetails/styles/supplierDetails");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var media = _responsive["default"].media();
var mediaResolution = _responsive["default"].mediaResolution();
var SuppliersWrapper = exports.SuppliersWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1kx4add-0"
})(["display:flex;flex-direction:column;float:right;width:50%;padding:0 25px;position:relative;> div:last-child{border:none;}", ";", ";", " ", ""], media.screenLgMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: 50%;\n  "]))), media.screenMdMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 58%;\n  "]))), media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    float: none;\n    width: 100%;\n    padding: 0;\n  "]))), mediaResolution.screen110dpi(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 0;\n  "]))));
var SupplierTitle = exports.SupplierTitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-1kx4add-1"
})(["margin-bottom:10px;font-size:1.2em;font-weight:700;color:#999;", ""], media.screenSmMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    color: ", ";\n  "])), function (props) {
  return props.theme.mainLight;
}));
var SuppliersPlaceHolder = exports.SuppliersPlaceHolder = (0, _styledComponents["default"])(_mainSupplier["default"]).withConfig({
  componentId: "sc-1kx4add-2"
})(["", ",", ",", ",", ",", ",", "{position:relative;overflow:hidden;background-color:rgb(246,246,246);border:none;border-radius:3px;min-height:24px;pointer-events:none;cursor:default;&:hover{background-color:rgb(246,246,246);}&:before{content:\"\";}&:after{position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background-image:linear-gradient( 90deg,rgba(255,255,255,0) 0,rgba(255,255,255,0.2) 20%,rgba(255,255,255,0.5) 60%,rgba(255,255,255,0) );animation:shimmer 2s infinite;content:\"\";}}", "{width:30%;}", "{width:50%;}", ",", "{min-height:50px;> svg{display:none;}}", "{width:20%;margin-bottom:5px;color:transparent;}", "{width:40%;height:35px;}@keyframes shimmer{100%{transform:translateX(100%);}}"], _supplierDetails.Name, _supplierDetails.Location, _supplierDetails.PriceButton, _supplierDetails.QuotationButton, _supplierDetails.PriceLegend, _supplierDetails.PriceValue, _supplierDetails.Name, _supplierDetails.Location, _supplierDetails.PriceButton, _supplierDetails.QuotationButton, _supplierDetails.PriceLegend, _supplierDetails.PriceValue);
var Error = exports.Error = _styledComponents["default"].div.withConfig({
  componentId: "sc-1kx4add-3"
})(["opacity:0.5;text-align:center;i{font-size:4em;margin-bottom:10px;}"]);
var StyledIcon = exports.StyledIcon = (0, _styledComponents["default"])(_veDesignSystem.Icon).withConfig({
  componentId: "sc-1kx4add-4"
})(["float:right;"]);