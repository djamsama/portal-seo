"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _catalogExcerpt = _interopRequireDefault(require("./components/catalogExcerpt"));
var _context = require("../../../../../../context");
var _excerpt = require("./styles/excerpt");
var _catalogHelper = _interopRequireDefault(require("../helpers/catalogHelper"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
/* eslint-disable max-len */var ExcerptSection = function ExcerptSection(props) {
  var _context$config;
  var catalogExcerpts = props.catalogExcerpts,
    catalogTitle = props.catalogTitle,
    catalogImgSrc = props.catalogImgSrc,
    currentPage = props.currentPage,
    _props$marginTop = props.marginTop,
    marginTop = _props$marginTop === void 0 ? false : _props$marginTop;
  var context = (0, _react.useContext)(_context.AppContext);
  var baseUrl = context === null || context === void 0 || (_context$config = context.config) === null || _context$config === void 0 || (_context$config = _context$config.portal) === null || _context$config === void 0 ? void 0 : _context$config.baseUrl;
  return /*#__PURE__*/_react["default"].createElement(_excerpt.ExcerptWrapper, {
    marginTop: marginTop
  }, /*#__PURE__*/_react["default"].createElement(_excerpt.ExcerptTitle, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "fo_catalog_detail_extractsFromCatalogTitle"
  })), catalogExcerpts === null || catalogExcerpts === void 0 ? void 0 : catalogExcerpts.map(function (catalog) {
    var _CatalogHelper$getVIe = _catalogHelper["default"].getVIewverUrl(catalog, catalogImgSrc, baseUrl),
      viewerUrl = _CatalogHelper$getVIe.viewerUrl,
      imageSrc = _CatalogHelper$getVIe.imageSrc;
    return /*#__PURE__*/_react["default"].createElement(_catalogExcerpt["default"], {
      key: "eCatalog".concat(viewerUrl),
      catalogImgSrc: imageSrc,
      catalogTitle: catalogTitle,
      catalogUrl: viewerUrl,
      pageNumber: catalog.pageNumber,
      excerpt: catalog.content,
      currentPage: currentPage
    });
  }));
};
var _default = exports["default"] = ExcerptSection;