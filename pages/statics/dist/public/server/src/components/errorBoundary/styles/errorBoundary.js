"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorPage = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var ErrorPage = exports.ErrorPage = _styledComponents["default"].div.withConfig({
  componentId: "sc-190ev7s-0"
})(["background-color:", ";height:100%;width:100%;position:absolute;#message{color:#fff;width:800px;margin:-20px -350px;position:absolute;top:40%;left:50%;}#message-left{font-size:20px;width:47%;margin:5px 0 0;padding:4px 3% 4px 0;text-align:right;float:left;border-right:#fff solid 1px;}#message-right{font-size:11px;width:47%;text-align:left;float:right;}#message-right p{margin:0;}.head{padding-top:120px;text-align:center;color:#eee;line-height:0;}.sub{text-align:center;font-size:10px;color:#aaa;font-style:italic;}.portal{font-size:20px;color:", ";:after{content:\"", "\";}}"], function (props) {
  return props.theme.main;
}, function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.siteLabel;
});