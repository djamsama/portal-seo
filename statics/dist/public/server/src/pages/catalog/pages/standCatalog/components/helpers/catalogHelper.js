"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _constants = require("../../../../../stand/components/constants");
var CatalogHelper = exports["default"] = /*#__PURE__*/function () {
  function CatalogHelper() {
    (0, _classCallCheck2["default"])(this, CatalogHelper);
  }
  return (0, _createClass2["default"])(CatalogHelper, null, [{
    key: "getZoomsUrl",
    value: function getZoomsUrl(catalogStandDetail, baseUrl) {
      var _catalogStandDetail$f, _catalogStandDetail$f2;
      var imageExt = "_".concat(catalogStandDetail === null || catalogStandDetail === void 0 ? void 0 : catalogStandDetail.page, "mg.jpg");
      var imageUrl = catalogStandDetail === null || catalogStandDetail === void 0 || (_catalogStandDetail$f = catalogStandDetail.firstPictureUrl) === null || _catalogStandDetail$f === void 0 ? void 0 : _catalogStandDetail$f.replace("_1.jpg", imageExt);
      var fromReplace = "".concat(baseUrl, "/pdf");
      var toReplace = "".concat(baseUrl, "/viewerCatalog");
      var viewerUrl = catalogStandDetail === null || catalogStandDetail === void 0 || (_catalogStandDetail$f2 = catalogStandDetail.firstPageUrl) === null || _catalogStandDetail$f2 === void 0 ? void 0 : _catalogStandDetail$f2.replace(fromReplace, toReplace);
      return {
        zoomUrl: "".concat(viewerUrl),
        search: "".concat(viewerUrl, "#search"),
        imageUrl: imageUrl,
        viewerUrl: viewerUrl
      };
    }
  }, {
    key: "getCatalogUrl",
    value: function getCatalogUrl(url, baseUrl) {
      var toSearch = "".concat(baseUrl, "/pdf");
      var toReplace = "".concat(baseUrl, "/viewerCatalog");
      var visoUrl = toSearch && toReplace && url ? url === null || url === void 0 ? void 0 : url.replace(toSearch, toReplace) : "";
      return visoUrl;
    }
  }, {
    key: "getVIewverUrl",
    value: function getVIewverUrl(catalog, catalogImgSrc, baseUrl) {
      var _catalog$pageUrl;
      var currentSrcExt = "_".concat(catalog.pageNumber, "m.jpg");
      var imageSrc = catalogImgSrc === null || catalogImgSrc === void 0 ? void 0 : catalogImgSrc.replace("_1.jpg", currentSrcExt);
      var fromReplace = "".concat(baseUrl, "/pdf");
      var toReplace = "".concat(baseUrl, "/viewerCatalog");
      return {
        viewerUrl: (catalog === null || catalog === void 0 || (_catalog$pageUrl = catalog.pageUrl) === null || _catalog$pageUrl === void 0 ? void 0 : _catalog$pageUrl.replace(fromReplace, toReplace)) || "",
        imageSrc: imageSrc
      };
    }
  }, {
    key: "handleClick",
    value: function handleClick(googleAnalytics, label) {
      googleAnalytics === null || googleAnalytics === void 0 || googleAnalytics.event({
        category: _constants.GOOGLE_ANALYTICS_EVENTS.CATALOG_CATEGORY,
        action: _constants.GOOGLE_ANALYTICS_EVENTS.CLICK_ZOOM,
        label: label
      });
    }
  }, {
    key: "initGa",
    value: function initGa(googleAnalytics, catalogStandDetail, baseUrl) {
      var _this$context;
      var pdfUrls = this.getZoomsUrl(catalogStandDetail, baseUrl);
      var toReplace = "".concat((_this$context = this.context) === null || _this$context === void 0 || (_this$context = _this$context.config) === null || _this$context === void 0 || (_this$context = _this$context.portal) === null || _this$context === void 0 ? void 0 : _this$context.baseUrl, "/viewerCatalog");
      if (window.location.href.indexOf(toReplace) < 0 && (window.location.hash.indexOf("#open") === 0 || window.location.hash.indexOf("#search") === 0)) {
        var hash = "#open";
        if (window.location.hash.indexOf("#search") === 0) {
          hash = window.location.hash;
        }
        if (googleAnalytics) {
          googleAnalytics === null || googleAnalytics === void 0 || googleAnalytics.event({
            category: _constants.GOOGLE_ANALYTICS_EVENTS.CATALOG_CATEGORY,
            action: _constants.GOOGLE_ANALYTICS_EVENTS.CLICK_ZOOM,
            label: _constants.GOOGLE_ANALYTICS_EVENTS.CLICK_ZOOM
          });
        }
        window.location.href = "".concat(pdfUrls.zoomUrl, "?t=").concat(new Date().getTime()).concat(hash);
      }
    }
  }, {
    key: "doTrackingGa",
    value: function doTrackingGa(catalogStandDetail, googleAnalytics) {
      if (googleAnalytics && this.context && this.context.initData && catalogStandDetail) {
        googleAnalytics.event({
          action: _constants.GOOGLE_ANALYTICS_EVENTS.DISPLAY_CATALOG,
          category: _constants.GOOGLE_ANALYTICS_EVENTS.CATALOG_CATEGORY,
          label: _constants.GOOGLE_ANALYTICS_EVENTS.DISPLAY_CATALOG,
          nonInteraction: true
        });
      }
    }
  }]);
}();