"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _withTracking = require("../../hoc/withTracking");
var _slider = _interopRequireDefault(require("../slider"));
var _contextComponent = require("../contextComponent");
var _histoReco = require("./styles/histoReco");
var _productCard = _interopRequireDefault(require("../product/productCard"));
var _constants = require("../../commons/constants");
var _withGoogleAnalytics = require("../../hoc/withGoogleAnalytics");
var _trackingElement = require("../../models/trackingElement");
var _histoRecoStorageService = require("../../services/histoReco/histoRecoStorageService");
var _trackingGa = require("../trackings/trackingGa");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // $FlowFixMe
var HistoReco = /*#__PURE__*/function (_ContextComponent) {
  function HistoReco(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, HistoReco);
    _this = _callSuper(this, HistoReco, [props, context]);
    _this.handleDelete = _this.handleDelete.bind(_this);
    _this.handleDeleteAll = _this.handleDeleteAll.bind(_this);
    _this.getProductsFromStorage = _this.getProductsFromStorage.bind(_this);
    _this.getProductsFromStorage = _this.getProductsFromStorage.bind(_this);
    _this.productsToDisplay = props.products;
    _this.state = {
      deleting: false,
      deletingAll: false,
      deletedAll: false
    };
    return _this;
  }
  (0, _inherits2["default"])(HistoReco, _ContextComponent);
  return (0, _createClass2["default"])(HistoReco, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.getProducts) {
        try {
          // on va demander au backend de retourner les ProductDTO a partir de la liste des ids sauvegarder
          var products = this.getProductsFromStorage();
          if (products && products.length > 0) {
            this.props.getProducts(this.context, products);
          }
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(" Erreur lors de la recuperation de l'historique  ", error);
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;
      if (this.state.deletingAll && !this.state.deletedAll) {
        setTimeout(function () {
          _this2.setState({
            deletedAll: true
          });
        }, 2000);
      }
    }
  }, {
    key: "getProductsFromStorage",
    value: function getProductsFromStorage() {
      try {
        var config = this.context.config;
        var locale = config && config.portal && config.portal.locale ? config.portal.locale : _constants.DEFAULT_LOCALE;
        return (0, _histoRecoStorageService.getFromStorage)(_constants.LOCAL_STORAGE_RECO_KEY, locale) || [];
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(" Erreur lors de la recuperation de l'historique  ", error);
        return [];
      }
    }
  }, {
    key: "handleDelete",
    value: function handleDelete(id) {
      var _this3 = this;
      // On enleve un produit de la liste des produits consultés
      var locale = this.context && this.context.config && this.context.config.portal && this.context.config.portal.locale ? this.context.config.portal.locale : _constants.DEFAULT_LOCALE;
      var histoProducts = (0, _histoRecoStorageService.deleteItemFromStorage)(id, _constants.LOCAL_STORAGE_RECO_KEY, locale);
      this.setState({
        deleting: id
      });
      setTimeout(function () {
        _this3.props.getProducts(_this3.context, histoProducts);
      }, 2100);
    }
  }, {
    key: "handleDeleteAll",
    value: function handleDeleteAll() {
      // On enleve tous les produits de la liste des produits consultés
      var locale = this.context && this.context.config && this.context.config.portal && this.context.config.portal.locale ? this.context.config.portal.locale : _constants.DEFAULT_LOCALE;
      (0, _histoRecoStorageService.deleteAllItemFromStorage)(_constants.LOCAL_STORAGE_RECO_KEY, locale);
      this.setState({
        deletingAll: true
      });
    }

    /**
     * Gestion du tracking statco
     */
  }, {
    key: "track",
    value: function track(items) {
      if (!items || this._listTracked) {
        return;
      }
      var _this$props = this.props,
        TrackingHelper = _this$props.TrackingHelper,
        doTracking = _this$props.doTracking,
        viewedPageId = _this$props.viewedPageId;
      if (items.length > 0 && TrackingHelper) {
        var trackingElements = TrackingHelper.itemsToTrackingElements(items, {
          pushed: false,
          elementTypeId: _constants.ELEMENT_TYPE.product,
          placementId: 1,
          displayMode: _constants.TRACKING_EVENTS.MODE_THUMBNAILS
        }, this.context);
        if (doTracking && viewedPageId && trackingElements) {
          doTracking(trackingElements, viewedPageId);
          this._listTracked = true;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var _this$props2 = this.props,
        products = _this$props2.products,
        GOOGLE_ANALYTICS_EVENTS = _this$props2.GOOGLE_ANALYTICS_EVENTS,
        intl = _this$props2.intl,
        category = _this$props2.category,
        waitPriceLoad = _this$props2.waitPriceLoad;
      var isWaitPriceLoad = waitPriceLoad === true;
      var context = this.context;
      var pageTypeId = context.initData.pageTypeId;
      var ConditionalWrapper = _histoReco.EmptyDiv;
      var conditionalProps = {};
      var FADE_OUT_CLASS = "fadeOut";
      // produits récupérés par en ajax
      this.productsToDisplay = products && products.length > 0 && !this.state.deletedAll ? products : [];
      if (this.productsToDisplay && this.productsToDisplay.length > 0) {
        /** Gestion du Slider  */
        ConditionalWrapper = _slider["default"];
        conditionalProps = {
          options: {
            prevNextButtons: true,
            pageDots: true,
            draggable: true,
            lazyLoad: false,
            reloadOnUpdate: true,
            resize: true,
            cellAlign: "left",
            contain: true,
            groupCells: "auto",
            freeScroll: false,
            freeScrollFriction: 0.1,
            selectedAttraction: 0.2,
            friction: 0.8
          }
        };
      }
      return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, this.productsToDisplay && this.productsToDisplay.length > 0 && /*#__PURE__*/_react["default"].createElement(_histoReco.ProductGroupWrapper, null, /*#__PURE__*/_react["default"].createElement(_histoReco.SectionTitleWithoutMarginBottom, null, /*#__PURE__*/_react["default"].createElement(_histoReco.SectionTitleText, {
        "data-cy": "histoRecoTitle"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_products_history_title"
      }))), /*#__PURE__*/_react["default"].createElement(_histoReco.SectionLinkRight, null, /*#__PURE__*/_react["default"].createElement(_histoReco.RemoveLink, {
        className: "forceCursor",
        onClick: this.handleDeleteAll
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_products_history_delete_all"
      }))), /*#__PURE__*/_react["default"].createElement(_histoReco.ProductGroupContainer, {
        "data-cy": "histoRecoCarousel"
      }, /*#__PURE__*/_react["default"].createElement(ConditionalWrapper, conditionalProps, this.productsToDisplay.map(function (product) {
        var sources = [{
          srcset: product.webpImageUrl
        }, {
          srcset: product.imageUrl
        }];
        var classNameProductCard = _this4.state.deleting === product.id || _this4.state.deletingAll ? " ".concat(FADE_OUT_CLASS, " ") : "";
        return /*#__PURE__*/_react["default"].createElement(_productCard["default"], {
          className: "histo-product-tile ".concat(classNameProductCard),
          label: product.name,
          brand: product.brand,
          imageUrl: product.imageUrl,
          sources: sources,
          linkUrl: product.linkUrl,
          newProduct: product.newProduct,
          hasVideo: product.hasVideo,
          productTagAssociationList: product.productTagAssociationList,
          productPrice: product.productPrice,
          featureValues: product.featureValuesOrdered,
          innovation: product.innovation,
          pageTypeId: pageTypeId,
          waitPriceLoad: isWaitPriceLoad,
          companyImageUrl: product && product.company ? product.company.imageUrl : "",
          companyLinkUrl: product.company ? product.company.linkUrl : "",
          companyName: product.company ? product.company.name : "",
          trackingGa: {
            category: GOOGLE_ANALYTICS_EVENTS.PRODUCT_CATEGORY,
            action: GOOGLE_ANALYTICS_EVENTS.CLICK_PRODUCTS_NAVIGATION_HISTORY,
            label: GOOGLE_ANALYTICS_EVENTS.LABEL_SEE_PRODUCT_DETAIL
          },
          trackingElement: new _trackingElement.TrackingElement({
            entityId: product.id,
            companyId: product.companyId,
            elementTypeId: _constants.ELEMENT_TYPE.product,
            displayMode: _constants.TRACKING_EVENTS.MODE_THUMBNAILS,
            placementId: 0,
            pushed: false,
            eventType: _constants.TRACKING_EVENTS.EVENT_TYPE_CLICK,
            context: context
          }),
          key: product.id,
          hasClosedTitle: intl.formatMessage({
            id: "foj_products_history_delete"
          }),
          hasClosed: function hasClosed() {
            return _this4.handleDelete(product.id);
          }
        });
      })))), this.productsToDisplay && this.productsToDisplay.length > 0 && this.track(this.productsToDisplay), this.productsToDisplay && this.productsToDisplay.length > 0 && /*#__PURE__*/_react["default"].createElement(_trackingGa.TrackingGaDisplay, {
        category: category,
        action: GOOGLE_ANALYTICS_EVENTS.DISPLAY_HISTO_PRODUCT,
        label: this.productsToDisplay.length.toString()
      }));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)((0, _reactIntl.injectIntl)((0, _withTracking.WithTracking)(HistoReco)));