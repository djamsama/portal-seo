"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuppliersWrapperPlaceHolderConnect = exports.PlaceHolderPrice = exports.BlockWrapper = exports.BlockGroup = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../components/styles/responsive"));
var _supplierDetails = require("../../../../../../../components/supplierDetailsConnect/styles/supplierDetails");
var _suppliers = require("./suppliers");
var _templateObject, _templateObject2, _templateObject3;
var media = _responsive["default"].media();
var mediaResolution = _responsive["default"].mediaResolution();
var BlockWrapper = exports.BlockWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-rkoe4l-0"
})(["flex:1;position:relative;display:flex;gap:50px;flex-direction:row;flex-wrap:wrap;margin:50px 0px 10px 0;max-width:400px;", ""], media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: block;\n    width: 100%;\n    justify-content: space-evenly;\n    margin: 30px 0 10px 0;\n  "]))));
var BlockGroup = exports.BlockGroup = _styledComponents["default"].div.withConfig({
  componentId: "sc-rkoe4l-1"
})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;column-gap:50px;margin-bottom:50px;", "{&:first-child{margin-right:0px;}}", ";", ""], BlockWrapper, media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 0px;\n    flex-direction: column;\n    ", " {\n      &:first-child {\n        margin-right: 0px;\n        margin-top: 0px;\n      }\n    }\n  "])), BlockWrapper), mediaResolution.screen110dpi(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    column-gap: 25px;\n  "]))));
var SuppliersWrapperPlaceHolderConnect = exports.SuppliersWrapperPlaceHolderConnect = (0, _styledComponents["default"])(_suppliers.SuppliersWrapper).withConfig({
  componentId: "sc-rkoe4l-2"
})(["", ",", "{position:relative;overflow:hidden;background-color:rgb(246,246,246);border:none;border-radius:3px;min-height:24px;pointer-events:none;cursor:default;&:hover{background-color:rgb(246,246,246);}&:before{content:\"\";}&:after{position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background-image:linear-gradient( 90deg,rgba(255,255,255,0) 0,rgba(255,255,255,0.2) 20%,rgba(255,255,255,0.5) 60%,rgba(255,255,255,0) );animation:shimmer 2s infinite;content:\"\";}}", "{width:100%;height:280px;}"], _supplierDetails.QuotationButton, _supplierDetails.SupplierIdentityWrapper, BlockWrapper);
var PlaceHolderPrice = exports.PlaceHolderPrice = _styledComponents["default"].div.withConfig({
  componentId: "sc-rkoe4l-3"
})(["min-height:80px;height:80px;"]);