"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkContainer = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../styles/responsive"));
var _templateObject;
var media = _responsive["default"].media();
var LinkContainer = exports.LinkContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-1g896de-0"
})(["cursor:pointer;outline:none;font-size:1.25em;color:", ";&:hover{text-decoration:underline;}.selected{.grabber-icon{&:after{content:\"\";position:absolute;background:", ";opacity:0.2;width:12px;height:12px;margin-top:8px;margin-left:-13px;border-radius:2px;z-index:0;}}}", ""], function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLight;
}, media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: none;\n  "]))));