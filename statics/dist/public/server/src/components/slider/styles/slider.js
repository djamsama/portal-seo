"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSlider = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../styles/responsive");
var _productCard = require("../../product/productCard/styles/productCard");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var WrapperSlider = exports.WrapperSlider = _styledComponents["default"].div.withConfig({
  componentId: "sc-bid4yn-0"
})([".flickity-prev-next-button{&.previous{left:-45px;}&.next{right:-45px;}:disabled{display:none;}}", " .flickity-slider > div{width:90%;max-width:300px;padding-left:1em;padding-right:1em;margin-bottom:10px;", ";}", "{height:", " max-height:100%;", ";", ";", ";", ";}.flickity-page-dots:not(.manual){> .dot:nth-child(6) ~ .dot{width:6px;height:6px;margin-bottom:2px;}> .dot:nth-child(7) ~ .dot{width:4px;height:4px;margin-bottom:3px;}> .dot:nth-child(8) ~ .dot{display:none;}}.flickity-page-dots{bottom:-15px;z-index:2;", " > li.dot{transition:all 0.25s ease-in-out 0s;&.before-last{width:6px !important;height:6px !important;margin:0 8px 2px 8px !important;display:inline-block !important;}&.last{width:4px !important;height:4px !important;margin:0 8px 3px 8px !important;display:inline-block !important;}&.outside{width:0 !important;margin:0 !important;opacity:0;}&.inside{display:inline-block !important;}&.is-selected{width:10px !important;height:10px !important;margin:0 8px !important;display:inline-block !important;}}}", ""], _responsive.media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    .flickity-prev-next-button {\n      display: none;\n    }\n  "]))), function (props) {
  return props.minHeight ? "min-height: ".concat(props.minHeight, "px") : "";
}, _productCard.ProductImageWrapper, function (props) {
  return props.heightProductImageWrapper ? props.heightProductImageWrapper : "calc(21.66vw - 60.85px);";
}, _responsive.media.screenLgMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      height: calc(25vw - 63.1px);\n    "]))), _responsive.media.screenMdMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n      height: calc(35vw - 66.25px);\n    "]))), _responsive.media.screenSmMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n      height: calc(50vw - 72.25px);\n    "]))), _responsive.media.screenXsMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n      height: 60vw;\n    "]))), _responsive.media.screenMdMin(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n      display: block;\n      height: 40px;\n      line-height: 40px;\n      position: relative;\n      position: static;\n    "]))), function (props) {
  return props.flickitySliderCss;
});