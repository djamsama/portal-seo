"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Btn = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../styles/responsive"));
var _templateObject;
var media = _responsive["default"].media();
var handleOpacity = function handleOpacity(op) {
  return op ? "1" : "0";
};
var Btn = exports.Btn = _styledComponents["default"].button.withConfig({
  componentId: "sc-hinj8i-0"
})(["background-color:transparent;border:none;color:", ";cursor:pointer;font-size:70px;height:100px;line-height:0;margin:0;opacity:", ";outline:none;padding:10px;position:absolute;top:calc(50% - (100px / 2));text-decoration:none;transition:background-color 0.3s,opacity 0.3s ease-out;width:100px;-webkit-appearance:none;-moz-appearance:none;z-index:1;", " &:hover,&:focus{background-color:rgba(128,128,128,0.15);}&.left{left:0;}&.right{right:0;}"], function (props) {
  return props.isActive ? "#696868" : "#fff";
}, function (props) {
  return props.isHoverable ? handleOpacity(props.isHovering) : "1";
}, media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 30px;\n    height: 60px;\n    top: calc(50% - (60px / 2));\n    width: 40px;\n  "]))));