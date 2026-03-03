"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactIntl = require("react-intl");
var _react = _interopRequireDefault(require("react"));
var _link = require("../../../../../../../../components/link");
var _tile = require("./styles/tile");
/* eslint-disable max-len */var TileSection = function TileSection(props) {
  var catalogPictureUrl = props.catalogPictureUrl,
    catalogTitle = props.catalogTitle,
    catalogStandUrl = props.catalogStandUrl,
    catalogPages = props.catalogPages,
    _props$catalogLanguag = props.catalogLanguage,
    catalogLanguage = _props$catalogLanguag === void 0 ? "" : _props$catalogLanguag;
  return /*#__PURE__*/_react["default"].createElement(_tile.TileWrapper, {
    className: "col-lg-2 col-md-3 col-sm-4 col-xs-4"
  }, /*#__PURE__*/_react["default"].createElement(_tile.CataloguePreviewCard, {
    className: "catalogue-preview-card"
  }, catalogLanguage && /*#__PURE__*/_react["default"].createElement(_tile.Flag, {
    className: catalogLanguage
  }), /*#__PURE__*/_react["default"].createElement(_tile.DetailImageLink, {
    className: "detail-image-link"
  }, /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
    to: catalogStandUrl,
    encrypt: true
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: catalogPictureUrl,
    alt: catalogTitle
  }))), /*#__PURE__*/_react["default"].createElement(_tile.DetailImageContent, {
    className: "detail-image-content"
  }, /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
    to: catalogStandUrl,
    encrypt: true
  }, catalogTitle), /*#__PURE__*/_react["default"].createElement("p", null, catalogPages, "\xA0 ", /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "fo_common_label_page".concat(catalogPages <= 1 ? "" : "s")
  })))));
};
var _default = exports["default"] = TileSection;