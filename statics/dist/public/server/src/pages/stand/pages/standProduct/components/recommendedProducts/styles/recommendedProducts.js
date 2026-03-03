"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecommendedProductsPlaceHolder = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _productCard = require("../../../../../../../components/product/productCard/styles/productCard");
var RecommendedProductsPlaceHolder = exports.RecommendedProductsPlaceHolder = _styledComponents["default"].div.withConfig({
  componentId: "sc-r33l1x-0"
})(["", "{position:relative;overflow:hidden;background-color:rgb(246,246,246);border:none;border-radius:3px;min-height:24px;pointer-events:none;cursor:default;&:hover{background-color:rgb(246,246,246);}&:before{content:\"\";}&:after{position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background-image:linear-gradient( 90deg,rgba(255,255,255,0) 0,rgba(255,255,255,0.2) 20%,rgba(255,255,255,0.5) 60%,rgba(255,255,255,0) );animation:shimmer 2s infinite;content:\"\";}}", "{border:20px solid #fff;}", "{height:70px;}@keyframes shimmer{100%{transform:translateX(100%);}}"], _productCard.ProductImageWrapper, _productCard.ProductImageWrapper, _productCard.Caption);