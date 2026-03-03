"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchWrapper = exports.SearchSection = exports.SearchLinkWrapper = exports.SearchLink = exports.SearchInputWrapper = exports.SearchClose = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../../../../../styles/responsive");
var _templateObject;
var glassWidth = "17px;";
var glassInnerWidth = "15px;";
var SearchLinkWrapper = exports.SearchLinkWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-epzqak-0"
})(["cursor:pointer;padding:14px 17px;"]);
var SearchLink = exports.SearchLink = _styledComponents["default"].div.withConfig({
  componentId: "sc-epzqak-1"
})(["position:relative;box-sizing:border-box;display:inline-block;width:", ";height:", ";border-radius:100%;margin:5px;background-color:#fff;padding:1px;box-shadow:0 0 0 0 #fff inset,0 0 0 0 #fff;&:before{content:\"\";height:1px;width:6px;background:#fff;position:absolute;top:16px;left:14px;transform:rotate(45deg);box-shadow:0 0 1px #fff;}&:after{content:\"\";display:block;width:", ";height:", ";border-radius:100%;background-color:", ";box-shadow:0 0 1px 0 #fff inset,0 0 1px 0 #fff;}"], glassWidth, glassWidth, glassInnerWidth, glassInnerWidth, function (props) {
  return props.theme.main;
});
var SearchWrapper = exports.SearchWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-epzqak-2"
})(["transition:all 0.3s ease-in-out;height:", ";max-height:", ";position:fixed;display:flex;color:black;background:#fff;box-shadow:2px 0px 5px 0px rgb(0 0 0 / 0.15);width:100%;top:0;left:0;overflow:hidden;", ""], function (props) {
  return props.collapsed ? "0" : "100%";
}, function (props) {
  return props.collapsed ? "0" : "100%";
}, _responsive.media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      z-index: 1200;\n  "]))));
var SearchSection = exports.SearchSection = _styledComponents["default"].div.withConfig({
  componentId: "sc-epzqak-3"
})(["width:100%;display:flex;justify-content:flex-end;"]);
var SearchInputWrapper = exports.SearchInputWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-epzqak-4"
})(["display:flex;width:100%;margin-top:30px;::after{content:\"\";position:absolute;left:0;bottom:0;height:1px;width:80%;margin-left:25px;border-bottom:1px solid #e5e5e5;}"]);
var SearchClose = exports.SearchClose = _styledComponents["default"].div.withConfig({
  componentId: "sc-epzqak-5"
})(["position:relative;margin:10px;width:22px;height:22px;min-width:22px;overflow:hidden;opacity:0.2;z-index:1;&:hover{opacity:0.3;cursor:pointer;&::before,&::after{background-color:#000;}}&::before,&::after{content:\"\";position:absolute;height:2px;width:100%;top:50%;left:0;margin-top:-1px;background-color:#000 !important;}&::before{transform:rotate(45deg);}&::after{transform:rotate(-45deg);}"]);