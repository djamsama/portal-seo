"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExcerptWrapper = exports.CatalogExcerptWrapper = exports.CatalogExcerptImageWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../../../components/styles/responsive"));
var _templateObject;
var media = _responsive["default"].media();
var CatalogExcerptWrapper = exports.CatalogExcerptWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1alk0ro-0"
})(["padding:20px;display:flex;flex-direction:row;", ";"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n     flex-direction: column;\n  "]))));
var CatalogExcerptImageWrapper = exports.CatalogExcerptImageWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1alk0ro-1"
})(["margin:0 50px;cursor:pointer;flex:1 1 0px;text-align:center;&:hover{transform:scale(1.05);}& img{box-shadow:1px 1px 4px 1px #c1c1c1;max-width:100%;object-fit:scale-down;max-height:100%;margin:auto;}"]);
var ExcerptWrapper = exports.ExcerptWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1alk0ro-2"
})(["padding:10px;flex:4 1 0px;& p{font-size:1.25em;color:#555;overflow-wrap:break-word;margin:0 0 10px;&:before,&:after{content:' \" '; font-size: 150%; } } & a { font-weight: bold; color: #5eb5ff; text-decoration: none; cursor: pointer; &:hover { text-decoration: underline; font-weight: bold; color: #5eb5ff; } }"]);