"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GrabberWrapper = exports.GrabberProductDetails = exports.GrabberCounter = exports.GrabberActions = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../styles/responsive");
var _templateObject, _templateObject2, _templateObject3;
var grabberHeight = "46px";
var GrabberWrapper = exports.GrabberWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1qzij3l-0"
})(["background-color:", ";display:flex;align-items:center;justify-content:space-between;flex-direction:column;position:sticky;bottom:0;height:", ";width:100%;color:#fff;overflow:hidden;transition:height ease-in-out 0.2s;z-index:1000;box-shadow:0 0 5px 0 rgba(0,0,0,0.3);&.Hidden{height:0;}&:before{content:\"\";z-index:1;width:200vw;height:130vw;position:absolute;bottom:100%;margin-bottom:-12vw;background:", ";border-radius:50%;}.GrabberBtn{width:auto;outline:none;padding:0 10px;margin:auto 5px;font-family:Arial,sans-serif;font-size:12px;min-width:150px;&:before,&:after{font:normal normal normal 14px/1 FontAwesome;font-size:1.2em;text-rendering:auto;-webkit-font-smoothing:antialiased;}}&.expanded{height:400px;.grabberActions{&:after{content:\"\f078\";}}}.grabberActions{cursor:pointer;z-index:2;&:hover{.grabberCounter{opacity:0.5;}&:after{opacity:0.5;}}&:after{font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;content:\"\f077\";position:absolute;transition:opacity ease-in-out 0.2s;right:15px;line-height:", ";font-size:10px;}}", ";", ";", ";"], function (props) {
  return props.theme.footerMain;
}, grabberHeight, function (props) {
  return props.theme.footerLight;
}, grabberHeight, _responsive.media.screenLgMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  &:before {\n      margin-bottom: -12vw;\n    }\n  "]))), _responsive.media.screenMdMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  &:before {\n      margin-bottom: -14vw;\n    }\n  "]))), _responsive.media.screenXsMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    display: none;\n    &:before {\n      margin-bottom: -145px;\n    }\n  "]))));
var GrabberProductDetails = exports.GrabberProductDetails = _styledComponents["default"].div.withConfig({
  componentId: "sc-1qzij3l-1"
})(["display:block;position:relative;width:100%;height:100%;margin:20px 80px 30px 80px;z-index:2;.ProductDetailsWrapper{display:block;width:calc(100% - 160px);position:relative;margin:0px auto;}.ProductCard{border-radius:8px;margin:5px 7px 0 7px;outline:none;}.GrabberMoreProducts{height:295px;box-shadow:0px 0px 5px 1px rgba(66,66,66,1);color:#fff;margin:5px 7px 0 7px;border-radius:8px;display:flex !important;outline:none;padding:0px!important;.MoreProductCard{border-radius:7px;display:flex;height:100%;position:relative;overflow:hidden;flex-direction:column;justify-content:center;text-align:center;background:rgba(255,255,255,0.1);flex:1 1 270px;padding:0px;&:before{content:\"...\";margin-left:-10px;font-size:50px;position absolute;text-align:center;top:20px;width:100%;}}.GrabberMoreProducts > div{padding:0px;}}"]);
var GrabberActions = exports.GrabberActions = _styledComponents["default"].div.withConfig({
  componentId: "sc-1qzij3l-2"
})(["display:flex;align-items:center;justify-content:center;font-size:15px;height:", ";min-height:", ";width:100%;& button:first-of-type{margin-right:10px;}"], grabberHeight, grabberHeight);
var GrabberCounter = exports.GrabberCounter = _styledComponents["default"].div.withConfig({
  componentId: "sc-1qzij3l-3"
})(["padding-right:5px;transition:opacity ease-in-out 0.2s;"]);