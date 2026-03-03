"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageContainer = exports.Header = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var headerHeight = "48px;";
var buttonHeight = "36px;";
var Container = exports.Container = _styledComponents["default"].div.withConfig({
  componentId: "sc-xbfmo1-0"
})(["height:100%;position:relative;overflow:hidden;&:hover{.previewHeader{top:0;box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12),0 3px 1px -2px rgba(0,0,0,0.2);}.zoomFull,.zoomIn,.zoomOut{right:30px;}}.zoomFull,.zoomIn,.zoomOut{outline:none;border:none;position:absolute;right:-", ";width:", ";height:", ";border-radius:50%;align-self:center;text-align:center;background-color:rgb(241,241,241);color:rgb(95,99,104);box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12),0 3px 1px -2px rgba(0,0,0,0.2);&:hover{cursor:pointer;background-color:rgb(225,225,225);}}.zoomFull{transition:right 0.15s ease-out 0.15s;bottom:120px;}.zoomIn{transition:right 0.15s ease-out 0.1s;bottom:70px;}.zoomOut{transition:right 0.15s ease-out 0.05s;bottom:30px;}.imagePreview{transition:all 0.15s ease-out 0.05s;}"], buttonHeight, buttonHeight, buttonHeight);
var Header = exports.Header = _styledComponents["default"].div.withConfig({
  componentId: "sc-xbfmo1-1"
})(["transition:top 0.15s ease-out 0.05s;top:-", ";z-index:1;margin:0 0 10px;width:calc(100% - 10px);position:absolute;color:rgb(241,241,241);display:flex;height:", ";padding:0 16px;background-color:rgb(50,54,57);.name{font-family:Arial,sans-serif;font-size:1em;line-height:", ";margin-right:auto;}.btn{width:", ";height:", ";border-radius:50%;align-self:center;text-align:center;margin-right:5px;&:hover{background-color:rgb(95,99,104);cursor:pointer;}}"], headerHeight, headerHeight, headerHeight, buttonHeight, buttonHeight);
var ImageContainer = exports.ImageContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-xbfmo1-2"
})(["height:100%;overflow:scroll;position:relative;display:flex;margin:auto;.imageWrapper{display:inline-block;margin:auto;img{display:flex;margin:auto;}}"]);