"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleIcon = exports.Title = exports.SubTitle = exports.ExhibitTitleSection = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../components/styles/responsive"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var media = _responsive["default"].media();
var ExhibitTitleSection = exports.ExhibitTitleSection = _styledComponents["default"].section.withConfig({
  componentId: "sc-1yjjbrm-0"
})(["padding-top:60px;padding-bottom:30px;text-align:center;margin:0 2.5%;max-width:1920px;", ";"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    padding-top: 25px;\n    padding-bottom: 0;\n  "]))));
var Title = exports.Title = _styledComponents["default"].h2.withConfig({
  componentId: "sc-1yjjbrm-1"
})(["font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;font-size:2.75em;line-height:0.85em;text-transform:uppercase;letter-spacing:2px;color:", ";", ";"], function (props) {
  return props.theme.mainLight;
}, media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 1.6em;\n    line-height: 1;\n    margin-bottom: 0;\n  "]))));
var SubTitle = exports.SubTitle = _styledComponents["default"].span.withConfig({
  componentId: "sc-1yjjbrm-2"
})(["display:block;margin-top:10px;font-family:Century Gothic,Verdana,sans-serif;font-size:55%;text-transform:none;color:#555;", ";"], media.screenXsMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    font-weight: 100;\n  "]))));
var TitleIcon = exports.TitleIcon = _styledComponents["default"].i.withConfig({
  componentId: "sc-1yjjbrm-3"
})(["color:", ";margin-top:20px;padding:0 8px;font-size:3.5em;", ";"], function (props) {
  return props.theme.mainLight;
}, media.screenXsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-top: 0;\n  "]))));