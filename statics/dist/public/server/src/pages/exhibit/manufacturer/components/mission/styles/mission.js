"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.SubTitle = exports.ExhibitMissionWrapper = exports.ExhibitMissionSection = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../components/styles/responsive"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var media = _responsive["default"].media();
var ExhibitMissionSection = exports.ExhibitMissionSection = _styledComponents["default"].section.withConfig({
  componentId: "sc-mksk8g-0"
})(["display:flex;align-items:flex-end;background-color:#f6f6f6;position:relative;overflow:hidden;img{position:absolute;z-index:0;top:0;left:0;}", ""], media.screenMdMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    img {\n      display: none;\n    }\n  "]))));
var ExhibitMissionWrapper = exports.ExhibitMissionWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-mksk8g-1"
})(["width:50%;padding:50px 25px;margin-right:2.5%;margin-left:50%;background:linear-gradient(90deg,rgba(246,246,246,0) 0,#f6f6f6 10%,#f6f6f6);color:#555;z-index:1;", " a{margin-top:25px;text-transform:uppercase;width:fit-content;padding-left:15px;padding-right:15px;", "}p{line-height:1.21em;font-size:1.2em;}"], media.screenMdMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 100%;\n    margin-left: 2.5%;\n    text-align: center;\n  "]))), media.screenMdMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n      margin: 25px auto 0;\n    "]))));
var Title = exports.Title = _styledComponents["default"].h2.withConfig({
  componentId: "sc-mksk8g-2"
})(["font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;line-height:1em;text-transform:uppercase;font-size:2.16em;display:flex;flex-direction:column;margin-bottom:0;&:after{content:\"\";margin:15px auto 30px 0;padding:0 0 0 150px;max-width:150px;border-bottom:2px solid ", ";", "}"], function (props) {
  return props.theme.mainLight;
}, media.screenMdMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n      margin-left: auto;\n    "]))));
var SubTitle = exports.SubTitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-mksk8g-3"
})(["font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;font-size:1.44em;margin-bottom:10px;line-height:1em;text-transform:uppercase;"]);