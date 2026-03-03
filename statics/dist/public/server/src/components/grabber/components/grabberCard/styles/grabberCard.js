"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GrabberProductCard = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../styles/responsive"));
var media = _responsive["default"].media();
var GrabberProductCard = exports.GrabberProductCard = _styledComponents["default"].div.withConfig({
  componentId: "sc-1f5veke-0"
})(["display:flex;flex-direction:column;justify-content:space-between;background:#fff;flex:1 1 270px;padding:10px;height:295px;box-shadow:0px 0px 5px 1px rgba(66,66,66,1);color:#555;position:relative;img{width:100%;max-height:70%;height:70%;max-width:100%;object-fit:cover;}&:hover{& > button{top:-5px;}}.ProductDescription{display:flex;justify-content:center;flex-direction:column;height:30%;text-align:center;text-transform:uppercase;}& > button{top:-38px;right:12px;transition:all ease-in-out 0.2s;position:absolute;"]);