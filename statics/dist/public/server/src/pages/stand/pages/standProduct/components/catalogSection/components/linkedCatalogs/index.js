"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _withGoogleAnalytics = require("../../../../../../../../hoc/withGoogleAnalytics");
var _contextComponent = require("../../../../../../../../components/contextComponent");
var _catalogHelper = _interopRequireDefault(require("../../../../../../../catalog/pages/standCatalog/components/helpers/catalogHelper"));
var _linkedCatalogs = require("./styles/linkedCatalogs");
var _flagIcon = require("../../../../../../../../components/styles/flagIcon");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var LinkedCatalogs = /*#__PURE__*/function (_ContextComponent) {
  function LinkedCatalogs(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, LinkedCatalogs);
    _this = _callSuper(this, LinkedCatalogs, [props, context]);
    _this.doTrackingGa = _this.doTrackingGa.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(LinkedCatalogs, _ContextComponent);
  return (0, _createClass2["default"])(LinkedCatalogs, [{
    key: "handleClick",
    value: function handleClick(label) {
      var _this$props = this.props,
        googleAnalytics = _this$props.googleAnalytics,
        GOOGLE_ANALYTICS_EVENTS = _this$props.GOOGLE_ANALYTICS_EVENTS;
      googleAnalytics.event({
        category: GOOGLE_ANALYTICS_EVENTS.PRODUCT_CATEGORY,
        action: GOOGLE_ANALYTICS_EVENTS.CLICK_CONTENU,
        label: label
      });
    }
  }, {
    key: "doTrackingGa",
    value: function doTrackingGa() {
      var _this$props2 = this.props,
        catalogs = _this$props2.catalogs,
        googleAnalytics = _this$props2.googleAnalytics,
        GOOGLE_ANALYTICS_EVENTS = _this$props2.GOOGLE_ANALYTICS_EVENTS;
      if (googleAnalytics && this.context && this.context.initData && this.context.initData.productId) {
        var labelDisplayCatalog = !catalogs || catalogs.length === 0 ? "None/".concat(this.context.initData.productId) : "".concat(catalogs.length.toString(), "/").concat(this.context.initData.productId);
        googleAnalytics.event({
          action: GOOGLE_ANALYTICS_EVENTS.DISPLAY_CATALOG,
          category: GOOGLE_ANALYTICS_EVENTS.PRODUCT_CATEGORY,
          label: labelDisplayCatalog,
          nonInteraction: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props3 = this.props,
        catalogs = _this$props3.catalogs,
        companyName = _this$props3.companyName,
        catalogStandUrl = _this$props3.catalogStandUrl,
        displayLink = _this$props3.displayLink,
        GOOGLE_ANALYTICS_EVENTS = _this$props3.GOOGLE_ANALYTICS_EVENTS;
      if (false) {
        this.doTrackingGa();
      }
      if (catalogs.length) {
        return /*#__PURE__*/_react["default"].createElement(_linkedCatalogs.CatalogsWrapper, {
          "data-cy": "catalogsContent"
        }, catalogs.map(function (thumbnail) {
          var _this2$context;
          var visoUrl = _catalogHelper["default"].getCatalogUrl((thumbnail === null || thumbnail === void 0 ? void 0 : thumbnail.catalogStandUrl) || "", _this2 === null || _this2 === void 0 || (_this2$context = _this2.context) === null || _this2$context === void 0 || (_this2$context = _this2$context.config) === null || _this2$context === void 0 || (_this2$context = _this2$context.portal) === null || _this2$context === void 0 ? void 0 : _this2$context.baseUrl);
          if (visoUrl) {
            return /*#__PURE__*/_react["default"].createElement(_linkedCatalogs.CatalogThumbnailTile, {
              key: thumbnail.catalogId
            }, /*#__PURE__*/_react["default"].createElement(_linkedCatalogs.StyledCatalogImg, null, /*#__PURE__*/_react["default"].createElement(_linkedCatalogs.StyledCatalogLink, {
              to: "".concat(visoUrl, "#open").concat(_this2.context.initData.productId),
              onClick: function onClick() {
                return _this2.handleClick(GOOGLE_ANALYTICS_EVENTS.LABEL_DETAIL_CATALOGUE);
              },
              encrypt: true
            }, /*#__PURE__*/_react["default"].createElement("img", {
              src: thumbnail.catalogPictureUrl,
              alt: thumbnail.catalogTitle
            }))), /*#__PURE__*/_react["default"].createElement(_linkedCatalogs.StyledCatalogCaption, null, /*#__PURE__*/_react["default"].createElement(_linkedCatalogs.StyledCatalogTitleLink, {
              to: "".concat(visoUrl, "#open").concat(_this2.context.initData.productId),
              onClick: function onClick() {
                return _this2.handleClick(GOOGLE_ANALYTICS_EVENTS.LABEL_DETAIL_CATALOGUE);
              },
              encrypt: true
            }, thumbnail.catalogTitle), /*#__PURE__*/_react["default"].createElement(_linkedCatalogs.StyledCatalogPages, null, thumbnail.catalogPages, " ", /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
              id: "fo_common_label_pages"
            })), /*#__PURE__*/_react["default"].createElement(_flagIcon.FlagIcon24, {
              className: "".concat(thumbnail.catalogLanguage)
            })));
          }
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
            key: thumbnail.catalogId
          });
        }));
      }
      return /*#__PURE__*/_react["default"].createElement(_linkedCatalogs.EmptyCatalogWrapper, null, /*#__PURE__*/_react["default"].createElement(_linkedCatalogs.StyledEmptyCatalogIcon, {
        className: "fa fa-file-pdf"
      }), /*#__PURE__*/_react["default"].createElement(_linkedCatalogs.StyledEmptyCatalogDescription, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_product_detail_no_catalog_associated"
      })), displayLink && /*#__PURE__*/_react["default"].createElement(_linkedCatalogs.StyledEmptyCatalogLink, {
        to: catalogStandUrl,
        onClick: function onClick() {
          return _this2.handleClick(GOOGLE_ANALYTICS_EVENTS.LABEL_PLUS_CATALOGUE);
        },
        encrypt: true
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_product_detail_view_all_catalogs",
        values: [companyName]
      })));
    }
  }]);
}(_contextComponent.ContextComponent); // $FlowFixMe
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)(LinkedCatalogs); // $FlowFixMe
LinkedCatalogs.defaultProps = {
  catalogs: [],
  companyName: "",
  catalogStandUrl: ""
};