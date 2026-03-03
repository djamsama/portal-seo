"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../styles/responsive"));
var _templateObject;
var specificMaxMedia = _responsive["default"].specificMaxMedia(600);
var ButtonWrapper = exports.ButtonWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-i75b5p-0"
})(["width:50%;", ";margin:auto;margin-top:40px;"], specificMaxMedia(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: 80%;\n  "]))));