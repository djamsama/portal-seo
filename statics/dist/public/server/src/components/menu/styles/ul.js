"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../styles/responsive"));
var _templateObject;
var media = _responsive["default"].media();
var Ul = _styledComponents["default"].ul.withConfig({
  componentId: "sc-19cvg16-0"
})(["margin-bottom:0;margin-top:18px;text-align:right;transition:0.25s ease-in-out 0s;text-transform:uppercase;text-align:left;float:right;padding-left:25px;padding-right:25px;box-sizing:border-box;list-style:none;display:block;background-color:", ";", ";"], function (props) {
  return props.theme.main;
}, media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      width: 100%;\n      padding-top: 0;\n      margin-top: 0;\n      text-align: right;\n      margin: 0;\n      padding: 0;\n      font-size: 0.85em;\n      text-align: center;\n      background: none;\n      display: flex;\n      flex-direction: column;\n  "]))));
// @component
var _default = exports["default"] = Ul;