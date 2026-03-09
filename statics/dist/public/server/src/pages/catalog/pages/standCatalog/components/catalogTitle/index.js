"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogTitle = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _catalogTitle = require("./styles/catalogTitle");
// eslint-disable-next-line react/require-default-props
var CatalogTitle = exports.CatalogTitle = function CatalogTitle(props) {
  var catalogStandDetail = props.catalogStandDetail,
    _props$showMobile = props.showMobile,
    showMobile = _props$showMobile === void 0 ? false : _props$showMobile;
  return /*#__PURE__*/_react["default"].createElement(_catalogTitle.CatalogButtonsTitle, {
    showMobile: showMobile
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    id: "catalogue-preview-title"
  }, catalogStandDetail === null || catalogStandDetail === void 0 ? void 0 : catalogStandDetail.title, /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("span", {
    className: "catalogue-preview-page"
  }, /*#__PURE__*/_react["default"].createElement(_catalogTitle.CatalogPage, {
    id: "current-catalog-page"
  }, catalogStandDetail === null || catalogStandDetail === void 0 ? void 0 : catalogStandDetail.page), " /", /*#__PURE__*/_react["default"].createElement(_catalogTitle.CatalogNbPage, {
    className: "catalog-nb-pages"
  }, catalogStandDetail === null || catalogStandDetail === void 0 ? void 0 : catalogStandDetail.nbPages), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "fo_common_label_page".concat((catalogStandDetail === null || catalogStandDetail === void 0 ? void 0 : catalogStandDetail.nbPages) <= 1 ? "" : "s")
  }))));
};