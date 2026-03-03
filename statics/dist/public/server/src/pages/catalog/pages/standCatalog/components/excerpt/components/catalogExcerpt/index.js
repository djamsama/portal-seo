"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _withGoogleAnalytics = require("../../../../../../../../hoc/withGoogleAnalytics");
var _link = require("../../../../../../../../components/link");
var _catalogExcerpt = require("./styles/catalogExcerpt");
var _constants = require("../../../../../../../stand/components/constants");
var CatalogExcerpt = function CatalogExcerpt(props) {
  var page = props.pageNumber,
    excerpt = props.excerpt,
    catalogUrl = props.catalogUrl,
    catalogTitle = props.catalogTitle,
    catalogImgSrc = props.catalogImgSrc,
    currentPage = props.currentPage;
  var handleClickImage = function handleClickImage() {
    var googleAnalytics = props.googleAnalytics;
    if (page !== currentPage) {
      googleAnalytics.event({
        action: _constants.GOOGLE_ANALYTICS_EVENTS.CLICK_CAROUSEL_EXTRACT,
        category: _constants.GOOGLE_ANALYTICS_EVENTS.CATALOG_CATEGORY,
        label: _constants.GOOGLE_ANALYTICS_EVENTS.SEE_OPEN_VIEWER,
        nonInteraction: true
      });
    }
  };
  var handleClick = function handleClick(label) {
    var googleAnalytics = props.googleAnalytics;
    googleAnalytics.event({
      action: _constants.GOOGLE_ANALYTICS_EVENTS.OPEN_VIEWER,
      category: _constants.GOOGLE_ANALYTICS_EVENTS.CATALOG_CATEGORY,
      label: label,
      nonInteraction: true
    });
  };
  return /*#__PURE__*/_react["default"].createElement(_catalogExcerpt.CatalogExcerptWrapper, null, /*#__PURE__*/_react["default"].createElement(_catalogExcerpt.CatalogExcerptImageWrapper, {
    id: "thumbnail-page-".concat(page),
    "data-page": page,
    "data-url": catalogUrl,
    "data-title": catalogTitle
  }, /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
    to: "".concat(catalogUrl, "#open"),
    onClick: handleClickImage,
    encrypt: true
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: catalogImgSrc,
    alt: "".concat(catalogTitle, "-").concat(page)
  }))), /*#__PURE__*/_react["default"].createElement(_catalogExcerpt.ExcerptWrapper, null, /*#__PURE__*/_react["default"].createElement("p", {
    dangerouslySetInnerHTML: {
      __html: excerpt
    }
  }), /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
    to: "".concat(catalogUrl, "#open"),
    onClick: function onClick() {
      return handleClick(_constants.GOOGLE_ANALYTICS_EVENTS.CLICK_PDF_EXTRACT);
    },
    encrypt: true
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-angle-right"
  }), "\xA0", /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "foj_catalog_detail_pageCatalogLinkLabel",
    values: {
      "0": page
    }
  }))));
};
// $FlowFixMe
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)(CatalogExcerpt);