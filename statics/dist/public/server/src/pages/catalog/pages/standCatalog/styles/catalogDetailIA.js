"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogTitleIA = exports.CatalogDetailIABody = exports.CatalogDetailIA = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../../../../components/styles/responsive");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
var CatalogDetailIA = exports.CatalogDetailIA = _styledComponents["default"].div.withConfig({
  componentId: "sc-2kfg42-0"
})(["display:flex;padding:30px 100px;flex-direction:column;align-items:center;align-self:stretch;background:#fff;box-shadow:0px 5px 5px 0px rgba(0,0,0,0.1);", " ", " ", ""], _responsive.media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 30px 20px;\n  "]))), _responsive.media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 30px 50px;\n  "]))), _responsive.media.screenXxsMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 30px 20px;\n  "]))));
var CatalogDetailIABody = exports.CatalogDetailIABody = _styledComponents["default"].div.withConfig({
  componentId: "sc-2kfg42-1"
})(["display:flex;align-items:flex-start;gap:50px;align-self:stretch;", ""], _responsive.media.screenXsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    flex-direction: column;\n    align-items: center;\n  "]))));
var CatalogTitleIA = exports.CatalogTitleIA = _styledComponents["default"].h1.withConfig({
  componentId: "sc-2kfg42-2"
})(["color:#555;font-family:\"HurmeGeometricSans_SemiBold\";font-size:30px;font-style:normal;font-weight:600;line-height:normal;align-self:stretch;white-space:normal;word-break:break-all;", " ", " ", ""], _responsive.mediaMinWidth.screenSmMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n     display: none;\n  "]))), _responsive.media.screenXsMin(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n    text-align: center;\n  "]))), _responsive.media.screenXxsMin(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 24px;\n  "]))));