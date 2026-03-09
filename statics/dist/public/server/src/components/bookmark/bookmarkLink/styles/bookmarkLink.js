"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FavoriteLink = exports.Favorite = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var Favorite = exports.Favorite = _styledComponents["default"].div.withConfig({
  componentId: "sc-4aqdb4-0"
})(["position:absolute;top:12px;right:12px;cursor:pointer;margin:0px 0 0;border-radius:50%;width:30px;height:30px;display:inline-block;background-color:#ffffff;line-height:32px;padding-left:3px;box-shadow:0 0 5px 0 rgba(0,0,0,0.5);color:", ";transition:0.25s ease-in-out 0s;text-align:center;i.icon{font-size:19px;}&:hover,&.bookmarked{background-color:", ";color:#fff;}"], function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLight;
});
var FavoriteLink = exports.FavoriteLink = _styledComponents["default"].div.withConfig({
  componentId: "sc-4aqdb4-1"
})(["color:", ";cursor:pointer;outline:none;font-size:1.25em;&:hover{text-decoration:underline;}.bg{opacity:0.2;}"], function (props) {
  return props.theme.mainLight;
});