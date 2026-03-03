"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = exports.RequestDetailListWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../../../../components/styles/responsive"));
var _templateObject;
var specificMaxMedia = _responsive["default"].specificMaxMedia(600);
var RequestDetailListWrapper = exports.RequestDetailListWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-whn58i-0"
})(["margin-left:50px;margin-right:50px;width:100%;", ""], specificMaxMedia(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin: 10px auto;\n  "]))));
var Table = exports.Table = _styledComponents["default"].div.withConfig({
  componentId: "sc-whn58i-1"
})(["width:100%;"]);