"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _context = require("../../../../../../context");
var _tile = _interopRequireDefault(require("./components/tile"));
var _suppliersCatalogs = require("./styles/suppliersCatalogs");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
/* eslint-disable max-len */var ExcerptSection = function ExcerptSection(props) {
  var _context$config;
  var catalogs = props.catalogs,
    titleSection = props.titleSection,
    _props$archivedCatalo = props.archivedCatalogs,
    archivedCatalogs = _props$archivedCatalo === void 0 ? false : _props$archivedCatalo;
  var context = (0, _react.useContext)(_context.AppContext);
  var currentLanguage = context === null || context === void 0 || (_context$config = context.config) === null || _context$config === void 0 || (_context$config = _context$config.portal) === null || _context$config === void 0 ? void 0 : _context$config.language;
  return /*#__PURE__*/_react["default"].createElement(_suppliersCatalogs.SupplierCatalogWrapper, null, /*#__PURE__*/_react["default"].createElement(_suppliersCatalogs.SupplierCatalogTitle, {
    id: "catalog-stand-title",
    className: archivedCatalogs ? "" : "notArchived"
  }, /*#__PURE__*/_react["default"].createElement("span", null, titleSection)), /*#__PURE__*/_react["default"].createElement(_suppliersCatalogs.CatalogGrid, {
    className: "catalogue-preview-others row"
  }, catalogs === null || catalogs === void 0 ? void 0 : catalogs.map(function (catalog) {
    catalog.toString(); // TODO SUPRIMMER
    return /*#__PURE__*/_react["default"].createElement(_tile["default"], {
      key: catalog.catalogStandUrl,
      catalogStandUrl: catalog.catalogStandUrl,
      catalogPictureUrl: catalog.catalogPictureUrl,
      catalogTitle: catalog.catalogTitle,
      catalogPages: catalog.catalogPages,
      catalogLanguage: catalog.catalogLanguage && currentLanguage !== catalog.catalogLanguage ? catalog.catalogLanguage : undefined
    });
  })));
};
var _default = exports["default"] = ExcerptSection;