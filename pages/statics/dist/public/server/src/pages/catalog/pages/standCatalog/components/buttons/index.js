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
var _veDesignSystem = require("ve-design-system");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../../components/formattedHTMLMessage"));
var _contextComponent = require("../../../../../../components/contextComponent");
var _buttons = require("./styles/buttons");
var _trackingGa = require("../../../../../../components/trackings/trackingGa");
var _trackingHelper = require("../../../../../../helpers/trackingHelper");
var _withGoogleAnalytics = require("../../../../../../hoc/withGoogleAnalytics");
var _constants = require("../../../../../stand/components/constants");
var _catalogTitle = require("../catalogTitle");
var _mainSupplierConnect = _interopRequireDefault(require("../../../../../stand/pages/standProduct/components/suppliers/components/mainSupplierConnect"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // $FlowFixMe
// $FlowFixMe
// TODO

var SOURCE_TYPE_CATALOG = "CATALOG";
var CatalogButtons = /*#__PURE__*/function (_ContextComponent) {
  function CatalogButtons(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, CatalogButtons);
    _this = _callSuper(this, CatalogButtons, [props, state]);
    _this.doTrackingGa = _this.doTrackingGa.bind(_this);
    _this.state = {
      trackingGaNotation: 0
    };
    return _this;
  }
  (0, _inherits2["default"])(CatalogButtons, _ContextComponent);
  return (0, _createClass2["default"])(CatalogButtons, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _initData$catalogStan;
      var _this$props = this.props,
        getCatalogButtons = _this$props.getCatalogButtons,
        pageTypeId = _this$props.pageTypeId;
      var _ref = this.context ? this.context : {},
        initData = _ref.initData;
      var _ref2 = initData || {},
        catalogId = _ref2.catalogId;
      var companyId = (initData === null || initData === void 0 || (_initData$catalogStan = initData.catalogStandDetail) === null || _initData$catalogStan === void 0 || (_initData$catalogStan = _initData$catalogStan.standListDTO) === null || _initData$catalogStan === void 0 ? void 0 : _initData$catalogStan.companyId) || undefined;
      getCatalogButtons(SOURCE_TYPE_CATALOG, catalogId, pageTypeId, companyId, this.context);
    }
  }, {
    key: "doTrackingGa",
    value: function doTrackingGa() {
      var _lastSupplier;
      var _this$props2 = this.props,
        catalogs = _this$props2.catalogs,
        itemType = _this$props2.itemType,
        googleAnalytics = _this$props2.googleAnalytics,
        GOOGLE_ANALYTICS_EVENTS = _this$props2.GOOGLE_ANALYTICS_EVENTS;
      var countDisplayPriceButton = 0;
      var countRequestPriceButton = 0;
      var lastSupplier = null;
      var priceSupplier = null;
      catalogs.forEach(function (supplier) {
        lastSupplier = supplier;
        if (!priceSupplier && supplier.productPrice) {
          priceSupplier = supplier;
        }
        if (supplier.requestButton) {
          // requestPrice
          if (supplier.requestButton.type === _constants.BUTTON_TYPE.RATE) {
            countRequestPriceButton += 1;
          }
          // displayPrice
          if (supplier.requestButton.type === _constants.BUTTON_TYPE.PRICE_LIST) {
            countDisplayPriceButton += 1;
          }
        }
        if (supplier.requestButtonPrice) {
          // requestPrice
          if (supplier.requestButtonPrice.type === _constants.BUTTON_TYPE.RATE) {
            countRequestPriceButton += 1;
          }
          // displayPrice
          if (supplier.requestButtonPrice.type === _constants.BUTTON_TYPE.PRICE_LIST) {
            countDisplayPriceButton += 1;
          }
        }
      });
      var type = _trackingHelper.TrackingHelper.getTypeFromContactType(((_lastSupplier = lastSupplier) === null || _lastSupplier === void 0 ? void 0 : _lastSupplier.type) || "");
      var labelRequestPriceButton = !countRequestPriceButton ? "None/".concat(type) : "".concat(countRequestPriceButton.toString(), "/").concat(type);
      var labelDisplayPriceButton = !countDisplayPriceButton ? "None/".concat(type) : "".concat(countDisplayPriceButton.toString(), "/").concat(type);
      var category = _trackingHelper.TrackingHelper.getSourceTypeFromRequest(itemType);
      if (googleAnalytics) {
        try {
          googleAnalytics.event({
            action: GOOGLE_ANALYTICS_EVENTS.REQUEST_PRICE_LIST_BUTTON,
            category: category,
            label: labelRequestPriceButton,
            nonInteraction: true
          });
          googleAnalytics.event({
            action: GOOGLE_ANALYTICS_EVENTS.DISPLAY_PRICE_LIST_BUTTON,
            category: category,
            label: labelDisplayPriceButton,
            nonInteraction: true
          });
          if (!priceSupplier) {
            priceSupplier = lastSupplier;
          }
          googleAnalytics.event({
            action: GOOGLE_ANALYTICS_EVENTS.DISPLAY_PRICE,
            category: category,
            label: _trackingHelper.TrackingHelper.getRequestPriceTypeFromRequest(itemType, priceSupplier || undefined),
            nonInteraction: true
          });
        } catch (error) {
          console.error("Tracking ga error");
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _mainCatalog$id;
      var _this$props3 = this.props,
        catalogs = _this$props3.catalogs,
        errors = _this$props3.errors,
        isLoading = _this$props3.isLoading,
        _this$props3$drdCusto = _this$props3.drdCustomer,
        drdCustomer = _this$props3$drdCusto === void 0 ? false : _this$props3$drdCusto,
        geolocChanged = _this$props3.geolocChanged,
        setGeolocChanged = _this$props3.setGeolocChanged,
        getCatalogButtons = _this$props3.getCatalogButtons,
        sourceId = _this$props3.sourceId,
        sourceType = _this$props3.sourceType,
        pageTypeId = _this$props3.pageTypeId,
        companyId = _this$props3.companyId,
        catalogStandDetail = _this$props3.catalogStandDetail,
        _this$props3$showTitl = _this$props3.showTitle,
        showTitle = _this$props3$showTitl === void 0 ? false : _this$props3$showTitl,
        noTopMargin = _this$props3.noTopMargin;
      var itemType = this.props.itemType || "";
      var clickThroughOrigin = this.context.initData.clickThroughOrigin;
      if (isLoading) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_buttons.PlaceHolderWrapper, {
          ref: this.props.refMainSupplier
        }, showTitle && /*#__PURE__*/_react["default"].createElement(_catalogTitle.CatalogTitle, {
          catalogStandDetail: catalogStandDetail
        }), /*#__PURE__*/_react["default"].createElement(_buttons.ButtonPlaceHolderWrapper, null, /*#__PURE__*/_react["default"].createElement(_buttons.ButtonPlaceHolder, null), /*#__PURE__*/_react["default"].createElement(_buttons.ButtonPlaceHolder, null))));
      }
      if (catalogs === undefined || catalogs.length <= 0) {
        return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_buttons.CatalogButtonsWrapper, {
          id: "SupplierButton",
          ref: this.props.refMainSupplier
        }));
      }
      var mainCatalog = catalogs[0];
      this.doTrackingGa();
      if (setGeolocChanged && geolocChanged === true) {
        getCatalogButtons(sourceType, sourceId, pageTypeId, companyId, this.context);
        setGeolocChanged(false);
      }
      return /*#__PURE__*/_react["default"].createElement(_buttons.CatalogButtonsWrapper, {
        id: "SupplierButton"
      }, mainCatalog && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, showTitle && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_catalogTitle.CatalogTitle, {
        catalogStandDetail: catalogStandDetail
      })), /*#__PURE__*/_react["default"].createElement(_buttons.MainSupplierWrapper, {
        noTopMargin: noTopMargin
      }, /*#__PURE__*/_react["default"].createElement(_mainSupplierConnect["default"], {
        supplier: mainCatalog,
        clickThroughOrigin: clickThroughOrigin,
        position: 1,
        refMainSupplier: this.props.refMainSupplier,
        drdCustomer: drdCustomer,
        catalog: true
      })), /*#__PURE__*/_react["default"].createElement(_trackingGa.TrackingGaDisplay, {
        action: _trackingHelper.TrackingHelper.getRequestTypeFromRequest("NOTATION_".concat(mainCatalog.type || ""), ""),
        category: _trackingHelper.TrackingHelper.getSourceTypeFromRequest(itemType),
        label: _trackingHelper.TrackingHelper.getLabelFromRequest(mainCatalog.satisfactionRating || 0),
        nonInteraction: true
      }), mainCatalog.type === "DEALER" && /*#__PURE__*/_react["default"].createElement(_trackingGa.TrackingGaDisplay, {
        action: "DisplayDistri",
        category: _trackingHelper.TrackingHelper.getSourceTypeFromRequest(itemType),
        label: (_mainCatalog$id = mainCatalog.id) === null || _mainCatalog$id === void 0 ? void 0 : _mainCatalog$id.toString(),
        nonInteraction: true
      })), errors && errors.length > 0 && /*#__PURE__*/_react["default"].createElement(_buttons.Error, null, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Icon, {
        name: "exclamation circle"
      }), /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "global_error_technical",
        tagName: "div"
      })));
    }
  }]);
}(_contextComponent.ContextComponent);
CatalogButtons.defaultProps = {
  isLoading: true
};
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)(CatalogButtons);