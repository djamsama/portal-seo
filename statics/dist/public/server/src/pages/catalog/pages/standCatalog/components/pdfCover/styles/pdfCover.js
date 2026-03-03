"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PdfCoverLink = exports.PdfCoverImage = exports.PdfCoverFooter = exports.PdfCoverContainer = exports.CatalogPage = exports.CatalogNbPage = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../../../../../../components/styles/responsive");
var _link = require("../../../../../../../components/link");
var _templateObject, _templateObject2, _templateObject3;
var PdfCoverContainer = exports.PdfCoverContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-c3fyu7-0"
})(["position:", ";top:", ";display:flex;padding-top:10px;flex-direction:column;justify-content:center;align-items:flex-start;gap:10px;img{width:368px;}", " ", " ", ""], function (props) {
  return props.sticky ? "sticky" : "static";
}, function (props) {
  return props.sticky ? "70px" : "0";
}, _responsive.media.screenMdMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n     img {\n      width: 268px;\n     }\n  "]))), _responsive.media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 0px;\n    position:static;\n     img {\n      width: 368px;\n     }\n\n  "]))), _responsive.media.screenXxsMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n     img {\n      width: 100%;\n     }\n    "]))));
var PdfCoverImage = exports.PdfCoverImage = _styledComponents["default"].div.withConfig({
  componentId: "sc-c3fyu7-1"
})(["display:flex;align-items:center;gap:10px;align-self:stretch;border:1px solid #bfbfbf;"]);
var PdfCoverFooter = exports.PdfCoverFooter = _styledComponents["default"].div.withConfig({
  componentId: "sc-c3fyu7-2"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;gap:10px;align-self:stretch;"]);
var CatalogPage = exports.CatalogPage = _styledComponents["default"].span.withConfig({
  componentId: "sc-c3fyu7-3"
})(["color:#999;text-align:center;font-family:Arial;font-size:15px;font-style:normal;font-weight:400;line-height:normal;"]);
var CatalogNbPage = exports.CatalogNbPage = _styledComponents["default"].span.withConfig({
  componentId: "sc-c3fyu7-4"
})(["color:#999;text-align:center;font-family:Arial;font-size:15px;font-style:normal;font-weight:400;line-height:normal;"]);
var PdfCoverLink = exports.PdfCoverLink = (0, _styledComponents["default"])(_link.VeLink).withConfig({
  componentId: "sc-c3fyu7-5"
})(["display:flex;justify-content:center;align-items:center;gap:5px;color:", ";text-align:center;font-family:Arial;font-size:15px;font-style:normal;font-weight:400;line-height:normal;"], function (props) {
  return props.theme.main;
});