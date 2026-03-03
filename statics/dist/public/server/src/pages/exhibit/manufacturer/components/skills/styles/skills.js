"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.SkillCard = exports.ExhibitSkillsWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../components/styles/responsive"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
var media = _responsive["default"].media();
var ExhibitSkillsWrapper = exports.ExhibitSkillsWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-rsohv6-0"
})(["flex:5;z-index:5;display:flex;flex-wrap:wrap;justify-content:center;align-items:flex-start;align-content:flex-start;", ";", ";"], media.screenLgMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: 2.7%;\n  "]))), media.screenMdMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    flex: 100%;\n    margin-left: 0;\n    z-index:1;\n  "]))));
var Title = exports.Title = _styledComponents["default"].div.withConfig({
  componentId: "sc-rsohv6-1"
})(["flex:100%;display:flex;flex-direction:column;max-width:480px;margin:130px auto 0;color:#fff;line-height:1em;text-transform:uppercase;text-align:center;font-size:2.16em;&:after{content:\"\";margin:15px auto 20px;padding:0 75px;max-width:150px;border-bottom:2px solid #fff;", ";}", ";", ""], media.screenMdMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n      border-color: ", ";\n    "])), function (props) {
  return props.theme.mainLight;
}), media.screenMdMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    color: #555;\n    max-width: 100%;\n  "]))), media.screenXsMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 1.6em;\n    margin-top: 150px;\n  "]))));
var SkillCard = exports.SkillCard = _styledComponents["default"].div.withConfig({
  componentId: "sc-rsohv6-2"
})(["flex:calc(50% - 20px);padding:10px;margin:10px;display:flex;flex-direction:column;align-items:center;align-self:stretch;min-height:245px;background-color:#fff;text-align:center;max-width:240px;", " ", " img{max-width:80px;background-color:", ";}h3{color:", ";margin-top:10px;margin-bottom:0;font-family:Georgia,Times,serif;font-size:1.1em;line-height:1em;text-transform:uppercase;display:flex;flex-direction:column;&:after{content:\"\";margin:5px auto 10px;padding:0 25px;max-width:50px;border-bottom:2px solid #d8d8d8;}}p{color:#555;}"], media.screenMdMin(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n    flex: calc(33% - 20px);\n    min-height: 110px;\n    max-width: 350px;\n  "]))), media.screenXsMin(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n    flex: 100%;\n    padding: 0;\n  "]))), function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLight;
});