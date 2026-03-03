"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnsubscribeMessageReason = exports.TitleH2Reason = exports.TitleH1Reason = exports.StyledFormReason = exports.SectionMessageReason = exports.ReasonsListContainer = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../../../../../components/styles/responsive");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var TitleH1Reason = exports.TitleH1Reason = _styledComponents["default"].h1.withConfig({
  componentId: "sc-1elf0rt-0"
})(["text-align:center;font-family:HurmeGeometricSans_SemiBold;font-size:32px;font-weight:600;color:", ";", ";"], function (props) {
  return props.theme.mainLight;
}, _responsive.media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 22px;\n  "]))));
var TitleH2Reason = exports.TitleH2Reason = _styledComponents["default"].h2.withConfig({
  componentId: "sc-1elf0rt-1"
})(["text-align:left;font-family:Arial;font-size:20px;font-weight:700;line-height:23px;color:#555555;"]);
var UnsubscribeMessageReason = exports.UnsubscribeMessageReason = _styledComponents["default"].p.withConfig({
  componentId: "sc-1elf0rt-2"
})(["text-align:left;margin-bottom:0px;"]);
var StyledFormReason = exports.StyledFormReason = _styledComponents["default"].form.withConfig({
  componentId: "sc-1elf0rt-3"
})(["padding:20px;box-sizing:border-box;z-index:5;text-align:left;font-family:Arial;.field{padding-bottom:15px;}textarea{width:100%;margin-top:15px;border:2px solid #ebebeb;background-color:#f6f6f6;resize:none;}button[type=\"submit\"]{width:auto;margin:auto;margin-bottom:40px;}", ";"], _responsive.media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 0;\n\n  textarea {\n    margin-top: 0px;\n  }\n"]))));
var SectionMessageReason = exports.SectionMessageReason = _styledComponents["default"].div.withConfig({
  componentId: "sc-1elf0rt-4"
})(["display:grid;padding:0 20px;margin-top:20px;margin-bottom:20px;", ";"], _responsive.media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 0;\n  "]))));
var ReasonsListContainer = exports.ReasonsListContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-1elf0rt-5"
})(["padding:0 20px;opacity:", ";pointer-events:", ";label{line-height:14px;}", ";"], function (_ref) {
  var disabled = _ref.disabled;
  return disabled ? 0.5 : 1;
}, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled ? "none" : "auto";
}, _responsive.media.screenSmMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 0;\n"]))));