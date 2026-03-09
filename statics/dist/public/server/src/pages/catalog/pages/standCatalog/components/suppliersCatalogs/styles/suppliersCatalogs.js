"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SupplierCatalogWrapper = exports.SupplierCatalogTitle = exports.CatalogGrid = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../components/styles/responsive"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var media = _responsive["default"].media();
var SupplierCatalogWrapper = exports.SupplierCatalogWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-rky5p4-0"
})(["& h2:first-child{margin-top:40px;}"]);
var SupplierCatalogTitle = exports.SupplierCatalogTitle = _styledComponents["default"].h2.withConfig({
  componentId: "sc-rky5p4-1"
})(["color:#2c3e7e;font-size:100%;&.notArchived{margin:40px 0 20px;font:normal 18px \"Century Gothic\",Verdana,sans-serif;color:#555555;}"]);
var CatalogGrid = exports.CatalogGrid = _styledComponents["default"].ol.withConfig({
  componentId: "sc-rky5p4-2"
})(["list-style:none;color:#232428;margin:0;padding:0;margin-left:-25px;margin-right:-25px;display:grid;grid-template-columns:repeat(5,1fr);", ";", ";", ";", ";"], media.screenLgMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  grid-template-columns: repeat(4, 1fr);\n"]))), media.screenMdMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n       grid-template-columns: repeat(3, 1fr);\n  "]))), media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n       grid-template-columns: repeat(2, 1fr);\n  "]))), media.screenXsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n      grid-template-columns: repeat(1, 1fr);\n  "]))));