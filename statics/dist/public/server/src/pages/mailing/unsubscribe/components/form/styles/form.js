"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnsubscribeMessage = exports.TitleH1 = exports.StyledForm = exports.MailingListContainer = exports.EmailWrapper = exports.Container = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../../../../../components/styles/responsive");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject0, _templateObject1;
var TitleH1 = exports.TitleH1 = _styledComponents["default"].h1.withConfig({
  componentId: "sc-980o1y-0"
})(["text-align:center;font-family:HurmeGeometricSans_SemiBold;font-size:32px;font-weight:600;color:", ";", ";"], function (props) {
  return props.theme.mainLight;
}, _responsive.media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 22px;\n  "]))));
var MailingListContainer = exports.MailingListContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-980o1y-1"
})(["display:grid;grid-template-columns:1fr 1fr;gap:16px;width:100%;"]);
var UnsubscribeMessage = exports.UnsubscribeMessage = _styledComponents["default"].p.withConfig({
  componentId: "sc-980o1y-2"
})(["width:50%;margin:auto;text-align:center;padding-bottom:15px;", ";", ";", ";"], _responsive.media.screenLgMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 50%;\n    "]))), _responsive.media.screenMdMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 70%;\n    "]))), _responsive.media.screenSmMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 100%;\n    "]))));
var StyledForm = exports.StyledForm = _styledComponents["default"].form.withConfig({
  componentId: "sc-980o1y-3"
})(["flex:7;padding:10px 25px;box-sizing:border-box;z-index:5;color:#555;input:not([type=\"checkbox\"]){background-color:#f6f6f6;border:2px solid rgba(0,0,0,0.06);flex-grow:1;font:400 14px Arial;padding:8px 12px;text-align:left;}.field{display:flex;width:25%;margin:auto;padding-bottom:12px;", ";", ";", ";}button[type=\"submit\"]{width:auto;margin:auto;}"], _responsive.media.screenLgMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 33.33%;\n    "]))), _responsive.media.screenMdMin(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 50%;\n    "]))), _responsive.media.screenSmMin(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 100%;\n    "]))));
var EmailWrapper = exports.EmailWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-980o1y-4"
})(["align-self:center;width:25%;margin:auto;padding-bottom:10px;", ";", ";", ";"], _responsive.media.screenLgMin(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 33.33%;\n    "]))), _responsive.media.screenMdMin(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 50%;\n    "]))), _responsive.media.screenSmMin(_templateObject0 || (_templateObject0 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 100%;\n    "]))));
var Container = exports.Container = _styledComponents["default"].div.withConfig({
  componentId: "sc-980o1y-5"
})(["width:850px;background-color:white;border-radius:3px;padding:40px;gap:20px;margin:auto;margin-bottom:20px;", ";"], _responsive.media.screenSmMin(_templateObject1 || (_templateObject1 = (0, _taggedTemplateLiteral2["default"])(["\n  width: calc(100% - 50px);\n  padding: 20px 10px;\n  margin-bottom: 20px;\n  margin-top: 20px;"]))));