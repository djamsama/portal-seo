"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SupplierCatalogWrapper = exports.SupplierCatalogTitle = exports.CatalogGrid = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var SupplierCatalogWrapper = exports.SupplierCatalogWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-gfgmvl-0"
})(["& h2:first-child{margin-top:40px;}"]);
var SupplierCatalogTitle = exports.SupplierCatalogTitle = _styledComponents["default"].h2.withConfig({
  componentId: "sc-gfgmvl-1"
})(["color:#2c3e7e;font-size:100%;&.notArchived{margin:40px 0 20px;font:normal 18px \"Century Gothic\",Verdana,sans-serif;color:#555555;}"]);
var CatalogGrid = exports.CatalogGrid = _styledComponents["default"].ol.withConfig({
  componentId: "sc-gfgmvl-2"
})(["display:flex;flex-wrap:wrap;gap:40px;list-style:none;color:#232428;margin:0;padding:0;margin-left:-25px;margin-right:-25px;li{flex:1 1 min(300px,100%);width:auto;}"]);