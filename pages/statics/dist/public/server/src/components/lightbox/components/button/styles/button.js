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
var Btn = exports.Btn = _styledComponents["default"].button.withConfig({
  componentId: "sc-22ve7o-0"
})(["background-color:transparent;border:none;box-sizing:border-box;cursor:pointer;font-size:30px;line-height:0;margin:0 0 0 20px;outline:none;padding:0;text-decoration:none;-webkit-appearance:none;-moz-appearance:none;z-index:1;&:hover,&:focus{svg{fill:#fff;}}svg{fill:#696868;height:20px;transition:fill 0.5s;width:20px;", "}"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      height: 15px;\n      width: 15px;\n  "]))));