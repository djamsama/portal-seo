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
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _veDesignSystem = require("ve-design-system");
var _formattedHTMLMessage = _interopRequireDefault(require("../../formattedHTMLMessage"));
var _picture = _interopRequireDefault(require("../../picture"));
var _prices = require("../../prices");
var _supplierRating = _interopRequireDefault(require("../../supplierDetails/components/supplierRating"));
var _supplierReactivity = _interopRequireDefault(require("../../supplierDetails/components/supplierReactivity"));
var _tagIcon = require("../../styles/tagIcon");
var _index = require("../productTagSm/index");
var Inovo = _interopRequireWildcard(require("../../styles/innovation"));
var _constants = require("../../../commons/constants");
var _link = _interopRequireDefault(require("../../styles/link"));
var _link2 = require("../../link");
var _highLight = _interopRequireDefault(require("../../highLight"));
var _productCard = require("./styles/productCard");
var _withTracking = require("../../../hoc/withTracking");
var _withGoogleAnalytics = require("../../../hoc/withGoogleAnalytics");
var _productMainFeatureValues = _interopRequireDefault(require("../productMainFeatureValues"));
var _contextComponent = require("../../contextComponent");
var _currencyHelper = require("../../../helpers/currencyHelper");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // $FlowFixMe
/** Composant permettant d'avoir l'apercu d'un produit. */
var ProductCard = /*#__PURE__*/function (_ContextComponent) {
  function ProductCard(props, state) {
    var _this$context;
    var _this;
    (0, _classCallCheck2["default"])(this, ProductCard);
    _this = _callSuper(this, ProductCard, [props, state]);
    (0, _defineProperty2["default"])(_this, "handleMouseOut", function () {
      // Définir un délai avant de cacher les boutons
      _this.delayNavHideTimer = setTimeout(function () {
        _this.setState({
          showNav: false
        });
      }, 300); // 300 ms de délai
    });
    (0, _defineProperty2["default"])(_this, "handleMouseOver", function () {
      // Si le timer est défini, l'annuler
      if (_this.delayNavHideTimer) {
        clearTimeout(_this.delayNavHideTimer);
      }
      _this.setState({
        showNav: true
      });
    });
    _this.state = {
      selected: false,
      currentIndex: 0,
      showNav: false,
      images: props.imagesUrl ? props.imagesUrl : [props.imageUrl] || [],
      pictureSources: props.sources ? [props.sources] : []
    };
    _this.onClickProduct = _this.onClickProduct.bind(_this);
    _this.checkboxRef = /*#__PURE__*/_react["default"].createRef();
    _this.locale = (_this$context = _this.context) === null || _this$context === void 0 || (_this$context = _this$context.config) === null || _this$context === void 0 || (_this$context = _this$context.portal) === null || _this$context === void 0 ? void 0 : _this$context.locale;
    _this.delayNavHideTimer = null;
    return _this;
  }
  (0, _inherits2["default"])(ProductCard, _ContextComponent);
  return (0, _createClass2["default"])(ProductCard, [{
    key: "onClickProduct",
    value: function onClickProduct(e) {
      var _this$props = this.props,
        googleAnalytics = _this$props.googleAnalytics,
        trackingGa = _this$props.trackingGa,
        trackingDisabled = _this$props.trackingDisabled,
        selectable = _this$props.selectable,
        selected = _this$props.selected,
        onSelect = _this$props.onSelect;
      if (selectable && e.currentTarget.className.indexOf("productStandLink") < 0) {
        if (onSelect) {
          onSelect(!selected);
        }
        if (e.target.nodeName !== "INPUT") {
          e.preventDefault();
        }
      } else {
        if (trackingDisabled) {
          return;
        }
        if (googleAnalytics && trackingGa) {
          googleAnalytics.event({
            category: trackingGa.category,
            action: trackingGa.action,
            label: trackingGa.label
          });
        }
      }
    }
  }, {
    key: "goToIndex",
    value: function goToIndex(index, event) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      var currentIndex = this.state.currentIndex;
      var gotToIndex = index || index === 0 ? index : currentIndex + 1;
      if (gotToIndex > this.state.images.length - 1) {
        return;
      }
      if (gotToIndex < 0) {
        return;
      }
      this.setState({
        currentIndex: gotToIndex
      });
    }
  }, {
    key: "renderImageDot",
    value: function renderImageDot(index, event) {
      var _this2 = this;
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      return /*#__PURE__*/_react["default"].createElement(_productCard.CustomDot, {
        title: index,
        key: index,
        selected: this.state.currentIndex === index,
        onClick: function onClick(e) {
          _this2.goToIndex(index, e);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2,
        _this$state3,
        _this3 = this;
      var _this$props2 = this.props,
        className = _this$props2.className,
        linkUrl = _this$props2.linkUrl,
        _this$props2$isExtern = _this$props2.isExternalLink,
        isExternalLink = _this$props2$isExtern === void 0 ? false : _this$props2$isExtern,
        companyImageUrl = _this$props2.companyImageUrl,
        companyLinkUrl = _this$props2.companyLinkUrl,
        label = _this$props2.label,
        brand = _this$props2.brand,
        featureValues = _this$props2.featureValues,
        companyName = _this$props2.companyName,
        newProduct = _this$props2.newProduct,
        hasVideo = _this$props2.hasVideo,
        isHighLight = _this$props2.isHighLight,
        productPrice = _this$props2.productPrice,
        originalProductPrice = _this$props2.originalProductPrice,
        innovation = _this$props2.innovation,
        productTagAssociationList = _this$props2.productTagAssociationList,
        _this$props2$hasShop = _this$props2.hasShop,
        hasShop = _this$props2$hasShop === void 0 ? false : _this$props2$hasShop,
        waitPriceLoad = _this$props2.waitPriceLoad,
        supplierName = _this$props2.supplierName,
        supplierLocalisation = _this$props2.supplierLocalisation,
        supplierRanking = _this$props2.supplierRanking,
        satisfactionCount = _this$props2.satisfactionCount,
        reactivityInterval = _this$props2.reactivityInterval,
        selectable = _this$props2.selectable,
        selected = _this$props2.selected,
        trackingElement = _this$props2.trackingElement,
        trackingDisabled = _this$props2.trackingDisabled,
        displayFeature = _this$props2.displayFeature,
        reco = _this$props2.reco,
        getMediaTemplates = _this$props2.getMediaTemplates,
        isHomePage = _this$props2.isHomePage,
        scaleRatio = _this$props2.scaleRatio,
        dataCy = _this$props2.dataCy,
        hasClosed = _this$props2.hasClosed,
        hasClosedTitle = _this$props2.hasClosedTitle,
        _this$props2$labelFir = _this$props2.labelFirst,
        labelFirst = _this$props2$labelFir === void 0 ? true : _this$props2$labelFir,
        _this$props2$isVarian = _this$props2.isVariant,
        isVariant = _this$props2$isVarian === void 0 ? false : _this$props2$isVarian;
      var _this$state = this.state,
        images = _this$state.images,
        currentIndex = _this$state.currentIndex,
        showNav = _this$state.showNav,
        pictureSources = _this$state.pictureSources;
      var hasMoreThanOneImg = !!(this !== null && this !== void 0 && (_this$state2 = this.state) !== null && _this$state2 !== void 0 && (_this$state2 = _this$state2.images) !== null && _this$state2 !== void 0 && _this$state2.length && (this === null || this === void 0 || (_this$state3 = this.state) === null || _this$state3 === void 0 || (_this$state3 = _this$state3.images) === null || _this$state3 === void 0 ? void 0 : _this$state3.length) > 1);
      var imgNav = !!(hasMoreThanOneImg && showNav);
      var TagBlockPriceeHolder = hasShop ? _productCard.BlockPriceHolderShop : _productCard.BlockPriceHolder;
      var isPromo = originalProductPrice ? _currencyHelper.CurrencyHelper.promo(originalProductPrice.price, productPrice === null || productPrice === void 0 ? void 0 : productPrice.price) > 0 : false;
      return /*#__PURE__*/_react["default"].createElement(_productCard.Card, {
        mediaTemplates: getMediaTemplates,
        scaleRatio: scaleRatio,
        className: className,
        selected: selected,
        selectable: selectable,
        isHomePage: isHomePage,
        dataCy: dataCy,
        shop: hasShop
      }, /*#__PURE__*/_react["default"].createElement(_productCard.Product, {
        hasShop: hasShop
      }, isHighLight && /*#__PURE__*/_react["default"].createElement(_highLight["default"], null), /*#__PURE__*/_react["default"].createElement(_link2.VeLink, {
        component: _link["default"],
        to: linkUrl,
        onClick: function onClick(e) {
          return _this3.onClickProduct(e);
        },
        trackingDisabled: trackingDisabled,
        track: trackingElement,
        external: isExternalLink
      }, /*#__PURE__*/_react["default"].createElement(_productCard.Pictos, {
        selectable: selectable
      }, newProduct && /*#__PURE__*/_react["default"].createElement(_tagIcon.NewTagSm, null), hasVideo && /*#__PURE__*/_react["default"].createElement(_tagIcon.VideoTagSm, null), hasShop && /*#__PURE__*/_react["default"].createElement(_tagIcon.ShopTagSm, null), /*#__PURE__*/_react["default"].createElement(_index.ProductTagSm, {
        productTagAssociationList: productTagAssociationList
      })), isPromo && /*#__PURE__*/_react["default"].createElement(_productCard.Promo, null, /*#__PURE__*/_react["default"].createElement(_productCard.PromoBadge, null, " -", _currencyHelper.CurrencyHelper.promo(originalProductPrice === null || originalProductPrice === void 0 ? void 0 : originalProductPrice.price, productPrice === null || productPrice === void 0 ? void 0 : productPrice.price), "%")), isVariant && /*#__PURE__*/_react["default"].createElement(_productCard.VariantCountText, null, " + de choix"), selectable && /*#__PURE__*/_react["default"].createElement(_productCard.InputBackground, {
        selected: selected
      }, /*#__PURE__*/_react["default"].createElement(_productCard.Checkbox, {
        selected: selected
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "checkbox",
        checked: selected,
        ref: this.checkboxRef
      }), /*#__PURE__*/_react["default"].createElement("span", null), selected && /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-check"
      }))), /*#__PURE__*/_react["default"].createElement(_productCard.ProductImageWrapper, {
        companyName: companyName,
        shop: hasShop === true,
        onMouseOver: this.handleMouseOver,
        onMouseOut: this.handleMouseOut
      }, images[currentIndex] && /*#__PURE__*/_react["default"].createElement(_picture["default"], {
        sources: pictureSources[currentIndex],
        src: images[currentIndex],
        alt: "".concat(label, " ").concat(currentIndex + 1),
        style: {
          width: "100%"
        }
      }), innovation && innovation.type === _constants.INOVO_TYPES.WINNER && /*#__PURE__*/_react["default"].createElement(Inovo.InnovationSmallWinner, {
        type: innovation.type
      }), innovation && innovation.type === _constants.INOVO_TYPES.NOMINEE && /*#__PURE__*/_react["default"].createElement(Inovo.InnovationSmallNominee, {
        type: innovation.type
      }), innovation && innovation.type === _constants.INOVO_TYPES.INNOVATIVE && /*#__PURE__*/_react["default"].createElement(Inovo.InnovationSmallInnovative, {
        type: innovation.type
      }), imgNav && /*#__PURE__*/_react["default"].createElement(_productCard.Nav, null, /*#__PURE__*/_react["default"].createElement(_productCard.Prev, {
        onClick: function onClick(e) {
          _this3.goToIndex(currentIndex - 1, e);
        }
      }), /*#__PURE__*/_react["default"].createElement(_productCard.Next, {
        onClick: function onClick(e) {
          _this3.goToIndex(currentIndex + 1, e);
        }
      }))), hasMoreThanOneImg && /*#__PURE__*/_react["default"].createElement(_productCard.CustomDotWrapper, {
        onClick: function onClick(e) {
          _this3.renderImageDot(null, e);
        }
      }, images && (images === null || images === void 0 ? void 0 : images.length) && (images === null || images === void 0 ? void 0 : images.map(function (_, index) {
        return _this3.renderImageDot(index, null);
      })))), /*#__PURE__*/_react["default"].createElement("div", null, companyLinkUrl && !selectable && /*#__PURE__*/_react["default"].createElement(_productCard.Company, {
        href: companyLinkUrl
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: companyImageUrl,
        alt: companyName,
        loading: "lazy"
      })), companyLinkUrl && selectable && /*#__PURE__*/_react["default"].createElement(_link2.VeLink, {
        component: _productCard.Company,
        to: linkUrl,
        onClick: function onClick(e) {
          return _this3.onClickProduct(e);
        },
        trackingDisabled: trackingDisabled,
        track: trackingElement
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: companyImageUrl,
        alt: companyName,
        loading: "lazy"
      }))), /*#__PURE__*/_react["default"].createElement(_link2.VeLink, {
        component: _link["default"],
        to: linkUrl,
        onClick: function onClick(e) {
          return _this3.onClickProduct(e);
        },
        trackingDisabled: trackingDisabled,
        track: trackingElement,
        external: isExternalLink
      }, /*#__PURE__*/_react["default"].createElement(_productCard.Caption, {
        hasShop: hasShop
      }, labelFirst && /*#__PURE__*/_react["default"].createElement(_productCard.Label, {
        hasShop: hasShop
      }, label, " "), " ", brand && /*#__PURE__*/_react["default"].createElement(_productCard.Brand, {
        hasShop: hasShop,
        dangerouslySetInnerHTML: {
          __html: brand
        }
      }), !labelFirst && /*#__PURE__*/_react["default"].createElement(_productCard.Label, {
        hasShop: hasShop
      }, label, " "), displayFeature && /*#__PURE__*/_react["default"].createElement(_productMainFeatureValues["default"], {
        smallTag: "true",
        displayFeatureValue: "block",
        featureValues: featureValues
      })), /*#__PURE__*/_react["default"].createElement(TagBlockPriceeHolder, {
        addPaddingTop: !originalProductPrice
      }, productPrice && /*#__PURE__*/_react["default"].createElement(_prices.BlockPrice, {
        waitLoad: waitPriceLoad,
        isForceDisplay: !!hasShop,
        placeHolder: "42px"
      }, /*#__PURE__*/_react["default"].createElement(_productCard.PriceSection, {
        isLeft: hasShop
      }, /*#__PURE__*/_react["default"].createElement(_productCard.PriceValue, {
        hasShop: hasShop
      }, !hasShop && /*#__PURE__*/_react["default"].createElement(_prices.Price, {
        price: productPrice,
        waitLoad: waitPriceLoad
      }), " ", hasShop &&
      /*#__PURE__*/
      // C'est un truc sho
      _react["default"].createElement(_react["default"].Fragment, null, originalProductPrice && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_productCard.Strike, null, /*#__PURE__*/_react["default"].createElement(_prices.Price, {
        isForceDisplay: true,
        price: originalProductPrice,
        waitLoad: waitPriceLoad
      })), "  "), /*#__PURE__*/_react["default"].createElement(_prices.Price, {
        price: productPrice,
        waitLoad: waitPriceLoad,
        isForceDisplay: true
      })))))), supplierName && /*#__PURE__*/_react["default"].createElement(_productCard.SupplierInfo, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_product_card_supplier_title"
      }), /*#__PURE__*/_react["default"].createElement(_productCard.SupplierIdentity, null, /*#__PURE__*/_react["default"].createElement(_productCard.Name, null, supplierName), /*#__PURE__*/_react["default"].createElement(_productCard.Location, null, supplierLocalisation)), /*#__PURE__*/_react["default"].createElement(_productCard.SupplierRatingHolder, null, supplierRanking && /*#__PURE__*/_react["default"].createElement(_supplierRating["default"], {
        supplier: {
          satisfactionCount: satisfactionCount,
          satisfactionRating: supplierRanking
        },
        reco: reco,
        isReview: true
      })), reactivityInterval && /*#__PURE__*/_react["default"].createElement(_supplierReactivity["default"], {
        supplier: {
          reactivityInterval: reactivityInterval
        },
        secondary: true
      })))), reco && /*#__PURE__*/_react["default"].createElement(_link2.VeLink, {
        className: "productStandLink",
        component: _link["default"],
        to: linkUrl,
        onClick: function onClick(e) {
          return _this3.onClickProduct(e);
        },
        trackingDisabled: trackingDisabled,
        track: trackingElement,
        external: true
      }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_product_card_reco_stand_external_link"
      }), /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-external-link"
      })), hasClosed && /*#__PURE__*/_react["default"].createElement("div", {
        className: "cardWithClose",
        title: hasClosedTitle
      }, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        a11yLabel: hasClosedTitle,
        iconButton: true,
        size: "small",
        themeColor: "light",
        onClick: hasClosed
      }, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Icon, {
        name: "close"
      }))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)((0, _withTracking.WithTracking)(ProductCard));
ProductCard.defaultProps = {
  trackingDisabled: false,
  companyImageUrl: null,
  companyLinkUrl: null,
  companyName: null,
  featureValues: [],
  innovation: null,
  pageTypeId: null,
  viewedPageId: null,
  doTracking: null,
  TrackingElement: null,
  trackingElement: null,
  googleAnalytics: null,
  sources: undefined,
  waitPriceLoad: true,
  supplierName: null,
  supplierLocalisation: null,
  supplierRanking: null,
  satisfactionCount: null,
  reactivityInterval: null,
  selectable: false,
  selected: false,
  onSelect: null,
  displayFeature: true,
  reco: false,
  isHomePage: false,
  scaleRatio: 1,
  isHighLight: false,
  isVariant: false
};