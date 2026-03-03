"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _react = _interopRequireDefault(require("react"));
var _constants = require("../commons/constants");
/**
 * Helper permettant de définir un ensemble de metadata spécifique au contexte courant (page type, etc.).
 */
var SpecificMetaHelper = /*#__PURE__*/function () {
  function SpecificMetaHelper() {
    (0, _classCallCheck2["default"])(this, SpecificMetaHelper);
  }
  return (0, _createClass2["default"])(SpecificMetaHelper, null, [{
    key: "getSpecificMeta",
    value:
    /**
     * Construction des meta spécifiques en fonction du type de page.
     */
    function getSpecificMeta(initData) {
      var pageTypeId = initData.pageTypeId;
      switch (pageTypeId) {
        case _constants.PAGE_TYPE_ID_PRODUCT:
          return this.getProductStandMeta(initData);
        default:
          return [];
      }
    }

    /**
     * Construction des meta spécifiques au stand produit.
     */
  }, {
    key: "getProductStandMeta",
    value: function getProductStandMeta(initData) {
      var _productStandDTO$pict;
      var productStandDTO = initData.productStandDTO,
        socialMediaTitle = initData.socialMediaTitle,
        socialMediaDescription = initData.socialMediaDescription,
        siteTwitterUrl = initData.siteTwitterUrl,
        currentRouteContext = initData.currentRouteContext;
      var specificMeta = [];
      specificMeta.push(/*#__PURE__*/_react["default"].createElement("meta", {
        key: "og:type",
        property: "og:type",
        content: "product"
      }), /*#__PURE__*/_react["default"].createElement("meta", {
        key: "og:title",
        property: "og:title",
        content: socialMediaTitle
      }), /*#__PURE__*/_react["default"].createElement("meta", {
        key: "og:description",
        property: "og:description",
        content: socialMediaDescription
      }), /*#__PURE__*/_react["default"].createElement("meta", {
        key: "twitter:card",
        property: "twitter:card",
        content: "product"
      }), /*#__PURE__*/_react["default"].createElement("meta", {
        key: "twitter:title",
        property: "twitter:title",
        content: socialMediaTitle
      }), /*#__PURE__*/_react["default"].createElement("meta", {
        key: "twitter:description",
        property: "twitter:description",
        content: socialMediaDescription
      }), /*#__PURE__*/_react["default"].createElement("meta", {
        key: "twitter:site",
        property: "twitter:site",
        content: siteTwitterUrl
      }), /*#__PURE__*/_react["default"].createElement("meta", {
        key: "viewport:mobile",
        name: "viewport",
        content: "width=device-width, initial-scale=1,minimum-scale=1, maximum-scale=1, user-scalable=0"
      }));

      // URL
      if (currentRouteContext && currentRouteContext.url) {
        specificMeta.push(/*#__PURE__*/_react["default"].createElement("meta", {
          key: "og:url",
          property: "og:url",
          content: currentRouteContext.url
        }));
      }

      // Image
      var pictures = productStandDTO && productStandDTO !== null && productStandDTO !== void 0 && productStandDTO.pictureViewerDataDto && productStandDTO !== null && productStandDTO !== void 0 && productStandDTO.pictureViewerDataDto.pictureList ? Object.values(productStandDTO === null || productStandDTO === void 0 || (_productStandDTO$pict = productStandDTO.pictureViewerDataDto) === null || _productStandDTO$pict === void 0 ? void 0 : _productStandDTO$pict.pictureList) : [];
      if (pictures && pictures[0] && pictures[0].pictureMetaUrl) {
        var pictureUrl = pictures[0].pictureMetaUrl;
        specificMeta.push(/*#__PURE__*/_react["default"].createElement("meta", {
          key: "og:image",
          property: "og:image",
          content: pictureUrl
        }), /*#__PURE__*/_react["default"].createElement("meta", {
          key: "twitter:image",
          property: "twitter:image",
          content: pictureUrl
        }));
      }
      return specificMeta;
    }
  }]);
}();
var _default = exports["default"] = SpecificMetaHelper;