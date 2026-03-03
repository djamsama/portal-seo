"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.GlobalErrorWrapper = exports.GlobalErrorBlock = exports.ExhibitTestimonialsSection = exports.ExhibitDifferenceSection = exports.ExhibitDifferenceBackgroundWrapper = exports.ExhibitDifferenceBackground = exports.ExhibitAboutUsSection = exports.EmptyDiv = exports.AboutUsWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _picture = _interopRequireDefault(require("../../../components/picture"));
var _responsive = require("../../../components/styles/responsive");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var Title = exports.Title = _styledComponents["default"].h2.withConfig({
  componentId: "sc-1tzq7yd-0"
})(["flex:100%;display:flex;flex-direction:column;max-width:480px;margin:130px auto 0;line-height:1em;text-transform:uppercase;text-align:center;font-size:2.16em;&:after{content:\"\";margin:15px auto 20px;padding:0 75px;max-width:150px;}", ""], _responsive.media.screenMdMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      font-size:1.6em;\n    "]))));
var ExhibitTestimonialsSection = exports.ExhibitTestimonialsSection = _styledComponents["default"].section.withConfig({
  componentId: "sc-1tzq7yd-1"
})(["display:flex;flex-direction:column;justify-content:center;background:#f6f6f6;padding-top:50px;padding-bottom:50px;", "{color:#555;&:after{border-bottom:2px solid ", ";}}"], Title, function (props) {
  return props.theme.mainLight;
});
var ExhibitDifferenceSection = exports.ExhibitDifferenceSection = _styledComponents["default"].section.withConfig({
  componentId: "sc-1tzq7yd-2"
})(["display:flex;flex-direction:column;justify-content:center;color:#fff;border-bottom:50px solid #f6f6f6;position:relative;padding-bottom:50px;padding-top:50px;p{font-size:1.55em;line-height:1.45em;text-align:center;padding:0 20px;z-index:1;}", "{color:#fff;padding:0 20px;z-index:1;&:after{border-bottom:2px solid #fff;}}"], Title);
var ExhibitDifferenceBackgroundWrapper = exports.ExhibitDifferenceBackgroundWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1tzq7yd-3"
})(["position:absolute;top:0;height:100%;width:100%;clip-path:inset(0);"]);
var ExhibitDifferenceBackground = exports.ExhibitDifferenceBackground = (0, _styledComponents["default"])(_picture["default"]).withConfig({
  componentId: "sc-1tzq7yd-4"
})(["display:block;position:fixed;object-fit:cover;width:100%;height:100%;top:0;left:0;right:0;z-index:0;"]);
var ExhibitAboutUsSection = exports.ExhibitAboutUsSection = _styledComponents["default"].section.withConfig({
  componentId: "sc-1tzq7yd-5"
})(["display:flex;flex-direction:column;justify-content:center;background:#f6f6f6;padding-bottom:50px;overflow:hidden;", "{color:#555;&:after{border-bottom:2px solid ", ";}}padding-top:30px;"], Title, function (props) {
  return props.theme.mainLight;
});
var AboutUsWrapper = exports.AboutUsWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1tzq7yd-6"
})(["text-align:center;margin-top:50px;span{width:25%;}", " ", " ", " .testimonial{display:flex;flex-direction:column;padding:40px 50px;margin:40px 30px;margin-bottom:20px;box-shadow:0 5px 5px rgba(0,0,0,0.1);background:#fff;color:#555;", " div{height:100%;min-height:100%;}p{min-height:170px;overflow:hidden;font-size:1.45em;line-height:1.45em;margin-bottom:auto;}.underline{background-color:", ";height:2px;margin:30px auto 15px;max-width:50px;}.logo{height:60px;img{max-height:100%;object-fit:scale-down;max-width:100%;margin:auto;}}.name{margin:30px 0 5px;font-family:Georgia,Times,serif;font-size:1.66em;}.function{height:36px;font-size:1.25em;font-style:italic;color:#999;}}.flickity-slider{height:inherit;> div{height:100%;min-height:100%;display:flex;}}"], _responsive.media.screenLgMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    span {\n      width: 33%;\n    }\n  "]))), _responsive.media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    span {\n      width: 50%;\n    }\n  "]))), _responsive.media.screenXsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    span {\n      width: 100%;\n    }\n  "]))), _responsive.media.screenXsMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n      margin: 0;\n      margin-bottom: 20px;\n    "]))), function (props) {
  return props.theme.mainLight;
});
var EmptyDiv = exports.EmptyDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-1tzq7yd-7"
})(["display:flex;"]);
var GlobalErrorBlock = exports.GlobalErrorBlock = _styledComponents["default"].div.withConfig({
  componentId: "sc-1tzq7yd-8"
})(["margin-bottom:10px;"]);
var GlobalErrorWrapper = exports.GlobalErrorWrapper = _styledComponents["default"].span.withConfig({
  componentId: "sc-1tzq7yd-9"
})(["color:red;font-size:12px;float:none;font-style:italic;height:12px;line-height:16px;"]);