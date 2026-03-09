"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.SubTitle = exports.RequestDetailContent = exports.RequestDetailContainer = exports.RequestContainer = exports.ProductContainer = exports.List = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var List = exports.List = _styledComponents["default"].ul.withConfig({
  componentId: "sc-pnyrye-0"
})(["list-style:none;margin:0 0 20px 10px;padding-left:0px;li{padding:0px;margin-top:2.5px;}.fa{margin-right:5px;}.fa-check-square{color:#1094e9;}"]);
var Title = exports.Title = _styledComponents["default"].span.withConfig({
  componentId: "sc-pnyrye-1"
})(["font-family:\"Century Gothic\",Verdana,sans-serif;font-size:14px;font-weight:700;"]);
var SubTitle = exports.SubTitle = _styledComponents["default"].span.withConfig({
  componentId: "sc-pnyrye-2"
})(["font-weight:bold;"]);
var RequestDetailContainer = exports.RequestDetailContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-pnyrye-3"
})(["margin-top:10px;margin-bottom:10px;padding:20px;"]);
var RequestDetailContent = exports.RequestDetailContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-pnyrye-4"
})(["margin-bottom:20px;"]);
var RequestContainer = exports.RequestContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-pnyrye-5"
})(["border:1px solid #eee;-webkit-box-shadow:0 5px 5px rgba(0,0,0,0.1);box-shadow:0 5px 5px rgba(0,0,0,0.1);margin-bottom:20px;margin-top:9px;"]);
var ProductContainer = exports.ProductContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-pnyrye-6"
})(["border:1px solid #eee;-webkit-box-shadow:0 5px 5px rgba(0,0,0,0.1);box-shadow:0 5px 5px rgba(0,0,0,0.1);padding:10px;font-size:12px;line-height:1.5em;text-transform:uppercase;text-align:center;img{display:block;max-width:100%;margin:auto;margin-bottom:10px;}a{display:block;}.spec{color:#555;display:inline;}.model{color:#999;margin:0 5px 0 5px;display:inline;}.logo{margin-top:15px;}"]);