"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _veDesignSystem = require("ve-design-system");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../../components/formattedHTMLMessage"));
var _contextComponent = require("../../../../../../components/contextComponent");
var _suppliers = require("./styles/suppliers");
var _suppliersConnect = require("./styles/suppliersConnect");
var _mainSupplier = _interopRequireDefault(require("./components/mainSupplier"));
var _mainSupplierConnect = _interopRequireDefault(require("./components/mainSupplierConnect"));
var _trackingGa = require("../../../../../../components/trackings/trackingGa");
var _trackingHelper = require("../../../../../../helpers/trackingHelper");
var _withGoogleAnalytics = require("../../../../../../hoc/withGoogleAnalytics");
var _constants = require("../../../../components/constants");
var _blockPriceComponent = _interopRequireDefault(require("./components/blockPriceComponent"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable no-console */
var DELAY_TIMEOUT = 1100;
var Suppliers = /*#__PURE__*/function (_ContextComponent) {
  function Suppliers(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, Suppliers);
    _this = _callSuper(this, Suppliers, [props, state]);
    (0, _defineProperty2["default"])(_this, "syncLinks", function (suppliers) {
      var _list$find, _mainContact$requestB, _mainContact$requestB2;
      var list = Array.isArray(suppliers) ? suppliers : [];
      var _list = (0, _slicedToArray2["default"])(list, 1),
        firstSupplier = _list[0];
      var mainContact = (firstSupplier === null || firstSupplier === void 0 ? void 0 : firstSupplier.type) === "MAIN_CONTACT" ? firstSupplier : (_list$find = list.find(function (s) {
        return (s === null || s === void 0 ? void 0 : s.type) === "MAIN_CONTACT";
      })) !== null && _list$find !== void 0 ? _list$find : firstSupplier;
      var nextLinks = {
        label: "foj_request_links_request_price",
        url: ""
      };
      if (mainContact !== null && mainContact !== void 0 && (_mainContact$requestB = mainContact.requestButtonPrice) !== null && _mainContact$requestB !== void 0 && _mainContact$requestB.formUrl) {
        nextLinks.url = mainContact.requestButtonPrice.formUrl;
      } else if (mainContact !== null && mainContact !== void 0 && (_mainContact$requestB2 = mainContact.requestButton) !== null && _mainContact$requestB2 !== void 0 && _mainContact$requestB2.formUrl) {
        // nextLinks.label = "Devis sur demande"; Pour l'instant on garde le meme label
        nextLinks.url = mainContact.requestButton.formUrl;
      }
      _this.setState({
        priceOnRequestLink: nextLinks
      });
    });
    (0, _defineProperty2["default"])(_this, "willShowPriceBlock", function (condition) {
      var initDisplay = _this.nbDisplay;
      if (condition) {
        _this.nbDisplay += 1;
      }
      return initDisplay !== _this.nbDisplay;
    });
    _this.doTrackingGa = _this.doTrackingGa.bind(_this);
    _this.toogleDisplay = _this.toogleDisplay.bind(_this);
    _this.syncLinks = _this.syncLinks.bind(_this);
    _this.willShowPriceBlock = _this.willShowPriceBlock.bind(_this);
    _this.nbDisplay = 0;
    _this.unmounted = false;
    _this.state = {
      trackingGaNotation: 0,
      opened: false,
      priceOnRequestLink: {
        label: "foj_request_links_request_price",
        url: ""
      },
      mounted: false
    };
    return _this;
  }
  (0, _inherits2["default"])(Suppliers, _ContextComponent);
  return (0, _createClass2["default"])(Suppliers, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$context;
      var _this$props = this.props,
        getSuppliers = _this$props.getSuppliers,
        sourceId = _this$props.sourceId,
        sourceType = _this$props.sourceType,
        pageTypeId = _this$props.pageTypeId,
        companyId = _this$props.companyId;
      getSuppliers(sourceType, sourceId, pageTypeId, companyId, this.context);
      var isPOR = ((_this$context = this.context) === null || _this$context === void 0 || (_this$context = _this$context.initData) === null || _this$context === void 0 ? void 0 : _this$context.isPriceOnRequest) === true;
      this._unmounted = false;
      var updateMounted = function updateMounted(that) {
        if (that._unmounted) return;
        that.setState({
          mounted: isPOR
        });
      };
      var that = this;
      this._timeoutId = setTimeout(function () {
        updateMounted(that);
      }, DELAY_TIMEOUT);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.suppliers !== this.props.suppliers) {
        this.syncLinks(this.props.suppliers);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._unmounted = true;
      clearTimeout(this._timeoutId);
    }
  }, {
    key: "doTrackingGa",
    value: function doTrackingGa() {
      var _this$props2 = this.props,
        suppliers = _this$props2.suppliers,
        itemType = _this$props2.itemType,
        googleAnalytics = _this$props2.googleAnalytics,
        GOOGLE_ANALYTICS_EVENTS = _this$props2.GOOGLE_ANALYTICS_EVENTS;
      var countDisplayPriceButton = 0;
      var countRequestPriceButton = 0;
      var lastSupplier = null;
      var priceSupplier = null;
      suppliers.forEach(function (supplier) {
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
      var type = _trackingHelper.TrackingHelper.getTypeFromContactType(lastSupplier.type);
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
            label: _trackingHelper.TrackingHelper.getRequestPriceTypeFromRequest(itemType, priceSupplier),
            nonInteraction: true
          });
        } catch (error) {
          console.error("Tracking ga error");
        }
      }
    }
  }, {
    key: "toogleDisplay",
    value: function toogleDisplay() {
      var opened = this.state.opened;
      this.setState({
        opened: !opened
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$context3, _this$context4, _styles$colors;
      var _this$props3 = this.props,
        suppliers = _this$props3.suppliers,
        errors = _this$props3.errors,
        itemType = _this$props3.itemType,
        isLoading = _this$props3.isLoading,
        drdCustomer = _this$props3.drdCustomer,
        geolocChanged = _this$props3.geolocChanged,
        setGeolocChanged = _this$props3.setGeolocChanged,
        getSuppliers = _this$props3.getSuppliers,
        sourceId = _this$props3.sourceId,
        sourceType = _this$props3.sourceType,
        pageTypeId = _this$props3.pageTypeId,
        companyId = _this$props3.companyId;
      var portal = this.context.config.portal;
      var portalWithConnectBlock = this.context.initData.portalWithConnectBlock;
      var portalWithConnectBlockArray = portalWithConnectBlock !== undefined ? portalWithConnectBlock.split(",") : [];
      var clickThroughOrigin = this.context.initData.clickThroughOrigin;
      if (isLoading) {
        var _this$context2;
        var supplierPlaceHolder = {
          productPrice: {},
          requestButtonPrice: {},
          requestButton: {}
        };
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, portalWithConnectBlockArray.some(function (item) {
          return item.toLowerCase() === portal.site.toLowerCase();
        }) && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_suppliersConnect.SuppliersWrapperPlaceHolderConnect, {
          ref: this.props.refMainSupplier
        }, ((_this$context2 = this.context) === null || _this$context2 === void 0 || (_this$context2 = _this$context2.initData) === null || _this$context2 === void 0 ? void 0 : _this$context2.isPriceOnRequest) === true && /*#__PURE__*/_react["default"].createElement(_suppliersConnect.PlaceHolderPrice, null), /*#__PURE__*/_react["default"].createElement(_suppliersConnect.BlockGroup, null, /*#__PURE__*/_react["default"].createElement(_suppliersConnect.BlockWrapper, null, /*#__PURE__*/_react["default"].createElement(_mainSupplierConnect["default"], {
          clickThroughOrigin: clickThroughOrigin,
          position: 1,
          refMainSupplier: this.props.refMainSupplier,
          drdCustomer: drdCustomer
        })), /*#__PURE__*/_react["default"].createElement(_suppliersConnect.BlockWrapper, null)))), !portalWithConnectBlockArray.some(function (item) {
          return item.toLowerCase() === portal.site.toLowerCase();
        }) && /*#__PURE__*/_react["default"].createElement(_suppliers.SuppliersWrapper, {
          ref: this.props.refMainSupplier
        }, /*#__PURE__*/_react["default"].createElement(_suppliers.SuppliersPlaceHolder, {
          supplier: supplierPlaceHolder
        })));
      }
      if (suppliers === undefined || suppliers.length <= 0) {
        return /*#__PURE__*/_react["default"].createElement(_suppliers.SuppliersWrapper, {
          id: "SupplierButton",
          ref: this.props.refMainSupplier
        });
      }
      var mainSupplier = suppliers[0];
      this.doTrackingGa();
      if (geolocChanged === true) {
        getSuppliers(sourceType, sourceId, pageTypeId, companyId, this.context);
        setGeolocChanged(false);
      }
      return /*#__PURE__*/_react["default"].createElement(_suppliers.SuppliersWrapper, {
        id: "SupplierButton"
      }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, portalWithConnectBlockArray.some(function (item) {
        return item.toLowerCase() === portal.site.toLowerCase();
      }) && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this.willShowPriceBlock(mainSupplier && mainSupplier.productPrice !== null) && /*#__PURE__*/_react["default"].createElement(_blockPriceComponent["default"], {
        productPrice: mainSupplier.productPrice,
        portal: portal,
        priceOnRequestLink: this.state.priceOnRequestLink
      }), ((_this$context3 = this.context) === null || _this$context3 === void 0 || (_this$context3 = _this$context3.initData) === null || _this$context3 === void 0 ? void 0 : _this$context3.isPriceOnRequest) === true && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !this.state.mounted && /*#__PURE__*/_react["default"].createElement(_suppliersConnect.PlaceHolderPrice, null), this.state.mounted && this.nbDisplay === 0 && /*#__PURE__*/_react["default"].createElement(_blockPriceComponent["default"], {
        price: 0,
        portal: portal,
        priceOnRequestLink: this.state.priceOnRequestLink
      })), mainSupplier && /*#__PURE__*/_react["default"].createElement(_suppliersConnect.BlockGroup, null, /*#__PURE__*/_react["default"].createElement(_suppliersConnect.BlockWrapper, {
        "data-cy": "mainSupplier"
      }, /*#__PURE__*/_react["default"].createElement(_mainSupplierConnect["default"], {
        supplier: mainSupplier,
        clickThroughOrigin: clickThroughOrigin,
        position: 1,
        refMainSupplier: this.props.refMainSupplier,
        drdCustomer: drdCustomer
      })), /*#__PURE__*/_react["default"].createElement(_suppliersConnect.BlockWrapper, null))), !portalWithConnectBlockArray.some(function (item) {
        return item.toLowerCase() === portal.site.toLowerCase();
      }) && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_suppliers.SupplierTitle, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_request_button_main_supplier"
      }, function (txt) {
        return txt;
      })), /*#__PURE__*/_react["default"].createElement(_mainSupplier["default"], {
        supplier: mainSupplier,
        clickThroughOrigin: clickThroughOrigin,
        position: 1,
        refMainSupplier: this.props.refMainSupplier,
        drdCustomer: drdCustomer,
        connect: false
      }), " ", ((_this$context4 = this.context) === null || _this$context4 === void 0 || (_this$context4 = _this$context4.initData) === null || _this$context4 === void 0 ? void 0 : _this$context4.isPriceOnRequest) === true && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !this.state.mounted && /*#__PURE__*/_react["default"].createElement(_suppliersConnect.PlaceHolderPrice, null), this.state.mounted && this.nbDisplay === 0 && /*#__PURE__*/_react["default"].createElement(_blockPriceComponent["default"], {
        price: 0,
        portal: portal,
        priceOnRequestLink: this.state.priceOnRequestLink
      }))), /*#__PURE__*/_react["default"].createElement(_trackingGa.TrackingGaDisplay, {
        action: _trackingHelper.TrackingHelper.getRequestTypeFromRequest("NOTATION_".concat(mainSupplier.type)),
        category: _trackingHelper.TrackingHelper.getSourceTypeFromRequest(itemType),
        label: _trackingHelper.TrackingHelper.getLabelFromRequest(mainSupplier.satisfactionRating),
        nonInteraction: true
      }), mainSupplier.type === "DEALER" && /*#__PURE__*/_react["default"].createElement(_trackingGa.TrackingGaDisplay, {
        action: "DisplayDistri",
        category: _trackingHelper.TrackingHelper.getSourceTypeFromRequest(itemType),
        label: mainSupplier.id,
        nonInteraction: true
      })), errors && errors.length > 0 && /*#__PURE__*/_react["default"].createElement(_suppliers.Error, null, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Icon, {
        name: "exclamation-circle",
        iconSize: 18,
        iconColor: _veDesignSystem.styles === null || _veDesignSystem.styles === void 0 || (_styles$colors = _veDesignSystem.styles.colors) === null || _styles$colors === void 0 ? void 0 : _styles$colors.status.danger
      }), /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "global_error_technical",
        tagName: "div"
      })));
    }
  }]);
}(_contextComponent.ContextComponent);
Suppliers.defaultProps = {
  isLoading: true
};
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)(Suppliers);