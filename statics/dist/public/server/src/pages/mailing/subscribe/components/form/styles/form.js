"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLink = exports.StyledForm = exports.EmailWrapper = exports.EmagWrapper = exports.CheckboxPartnerWrapper = exports.CheckAllWrapper = exports.Cards = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../../../../../components/styles/responsive");
var _clickableCard = _interopRequireDefault(require("../../../../../../components/clickableCard"));
var _link = require("../../../../../../components/link");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject0, _templateObject1;
var Cards = exports.Cards = _styledComponents["default"].div.withConfig({
  componentId: "sc-xng7yi-0"
})(["width:100%;display:grid;grid-template-columns:repeat(6,1fr);grid-auto-rows:1fr;grid-gap:20px;", ";", ";", ";", ";label{padding-top:15px;padding-bottom:15px;text-transform:uppercase;cursor:inherit;}"], _responsive.media.screenLgMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    grid-template-columns: repeat(5, 1fr);\n  "]))), _responsive.media.screenMdMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    grid-template-columns: repeat(4, 1fr);\n  "]))), _responsive.media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    grid-template-columns: repeat(3, 1fr);\n  "]))), _responsive.media.screenXsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    grid-template-columns: repeat(2, 1fr);\n  "]))));
var CheckAllWrapper = exports.CheckAllWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-xng7yi-1"
})(["margin-bottom:10px;color:#999999;text-align:right;a{color:#999999;text-decoration:none;cursor:pointer;&:hover{text-decoration:underline;}}"]);
var CheckboxPartnerWrapper = exports.CheckboxPartnerWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-xng7yi-2"
})(["margin-bottom:50px;display:flex;justify-content:center;margin-top:50px;.field{margin-right:2px;margin-top:2px;}"]);
var StyledLink = exports.StyledLink = _styledComponents["default"].a.withConfig({
  componentId: "sc-xng7yi-3"
})(["color:", ";text-decoration:none;cursor:pointer;:hover{color:", ";}"], function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLight;
});
var StyledForm = exports.StyledForm = _styledComponents["default"].form.withConfig({
  componentId: "sc-xng7yi-4"
})(["flex:7;padding:10px 25px;box-sizing:border-box;background:#fff;z-index:5;color:#555;& > button{margin:0 auto 10px auto;}", " &{picture{display:flex;img{width:100%;height:100%;background-color:rgba(255,255,255,0);min-height:calc(16.66vw - 132.39px);", ";", ";", ";", ";}}}input{background-color:#f6f6f6;border:2px solid rgba(0,0,0,0.06);flex-grow:1;font:400 14px Arial;padding:8px 12px;text-align:left;}.cards-message{font-style:italic;padding-top:25px;margin-bottom:auto;}.error-message{color:rgb(255,0,0);}.newsletter-registration-msg{text-align:center;font-size:11px;line-height:13px;font-style:italic;color:#999;margin:0 auto 80px auto;}"], _clickableCard["default"], _responsive.media.screenLgMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n          min-height: calc(20vw - 134.64px);\n        "]))), _responsive.media.screenMdMin(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n          min-height: calc(25vw - 136.26px);\n        "]))), _responsive.media.screenSmMin(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n          min-height: calc(33.33vw - 149.06px);\n        "]))), _responsive.media.screenXsMin(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n          min-height: calc(50vw - 160px);\n        "]))));
var EmagWrapper = exports.EmagWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-xng7yi-5"
})(["margin-top:50px;"]);
var EmailWrapper = exports.EmailWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-xng7yi-6"
})(["align-self:center;width:25%;margin:auto;padding-bottom:10px;", ";", ";", ";"], _responsive.media.screenLgMin(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 33.33%;\n    "]))), _responsive.media.screenMdMin(_templateObject0 || (_templateObject0 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 50%;\n    "]))), _responsive.media.screenSmMin(_templateObject1 || (_templateObject1 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 100%;\n    "]))));