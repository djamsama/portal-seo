"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogInfoWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../components/styles/responsive"));
var _templateObject, _templateObject2;
var media = _responsive["default"].media();
var CatalogInfoWrapper = exports.CatalogInfoWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1d44hlo-0"
})(["box-sizing:border-box;display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;background-color:#fff;box-shadow:0 5px 5px rgba(0,0,0,0.1);margin-bottom:20px;padding:20px;", " ", ""], media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n     grid-template-columns: 50% 50%;\n  "]))), media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n     grid-template-columns: 1fr;\n     grid-gap: 5px;\n     padding: 10px;\n  "]))));