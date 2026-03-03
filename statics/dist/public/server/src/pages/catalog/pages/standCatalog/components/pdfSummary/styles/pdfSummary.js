"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PdfSummaryTitle = exports.PdfSummarySubTitle = exports.PdfSummaryMore = exports.PdfSummaryLine = exports.PdfSummaryDivider = exports.PdfSummaryContentInner = exports.PdfSummaryContent = exports.PdfSummaryContainer = exports.PdfSummaryBody = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../../../../../../components/styles/responsive");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
var PdfSummaryBody = exports.PdfSummaryBody = _styledComponents["default"].div.withConfig({
  componentId: "sc-11tj9te-0"
})(["display:flex;align-items:flex-start;gap:50px;align-self:stretch;width:100%;", " ", ""], _responsive.media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    flex-direction: column;\n  "]))), _responsive.media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    align-items: center;\n  "]))));
var PdfSummaryContainer = exports.PdfSummaryContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-11tj9te-1"
})(["width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:10px;flex:1 0 0;align-self:stretch;", ""], _responsive.media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    order:1;\n  "]))));
var PdfSummaryTitle = exports.PdfSummaryTitle = _styledComponents["default"].h1.withConfig({
  componentId: "sc-11tj9te-2"
})(["color:#555;font-family:\"HurmeGeometricSans_SemiBold\";font-size:30px;font-style:normal;font-weight:600;line-height:normal;align-self:stretch;white-space:normal;word-break:break-all;", ""], _responsive.media.screenSmMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n     display: none;\n  "]))));
var PdfSummarySubTitle = exports.PdfSummarySubTitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-11tj9te-3"
})(["color:#555;font-family:\"HurmeGeometricSans_SemiBold\";font-size:14px;font-style:normal;font-weight:600;line-height:normal;align-self:stretch;"]);
var PdfSummaryDivider = exports.PdfSummaryDivider = _styledComponents["default"].div.withConfig({
  componentId: "sc-11tj9te-4"
})(["display:flex;padding:10px 0px;flex-direction:column;align-items:flex-start;gap:10px;align-self:stretch;", ""], _responsive.media.screenSmMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n     display: none;\n  "]))));
var PdfSummaryLine = exports.PdfSummaryLine = _styledComponents["default"].div.withConfig({
  componentId: "sc-11tj9te-5"
})(["width:100%;height:3px;background:#f6f6f6;", ""], _responsive.media.screenSmMin(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n     display: none;\n  "]))));
var PdfSummaryContent = exports.PdfSummaryContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-11tj9te-6"
})(["padding:10px 0px;flex-direction:column;align-items:flex-start;gap:10px;align-self:stretch;", ""], _responsive.media.screenSmMin(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n  position:relative;\n   display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: ", ";\n    overflow: ", ";\n    min-height:  ", ";\n  "])), function (props) {
  return props.opened ? "0" : "20";
}, function (props) {
  return props.opened ? "visible" : "hidden";
}, function (props) {
  return props.opened ? "".concat(props.height, "px") : "auto";
}));
var PdfSummaryMore = exports.PdfSummaryMore = _styledComponents["default"].div.withConfig({
  componentId: "sc-11tj9te-7"
})(["display:none;", ""], _responsive.media.screenSmMin(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n    display:flex;\n    width: 100%;\n    padding: 15px 0px;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n    position: ", ";\n    bottom: 0px;\n    background: linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #fff 100%);\n    color:", ";\n    font-family: Arial;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n  "])), function (props) {
  return props.opened ? "relative" : "absolute";
}, function (props) {
  return props.theme.main;
}));
var PdfSummaryContentInner = exports.PdfSummaryContentInner = _styledComponents["default"].div.withConfig({
  componentId: "sc-11tj9te-8"
})([""]);