"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _styledComponents = require("styled-components");
var _reactFlickityComponent = _interopRequireDefault(require("react-flickity-component"));
var _contextComponent = require("../../../../components/contextComponent");
var _row = _interopRequireDefault(require("../../../../components/styles/row"));
var _emptyTile = _interopRequireDefault(require("./emptyTile"));
var _responsive = _interopRequireWildcard(require("../../../../components/styles/responsive"));
var _constants = require("../../../../commons/constants");
var _withGoogleAnalytics = require("../../../../hoc/withGoogleAnalytics");
var _withTracking = require("../../../../hoc/withTracking");
var _homeHelper = _interopRequireDefault(require("../helpers/homeHelper"));
var _newProducts = require("./styles/newProducts");
var _sectionTitle = _interopRequireDefault(require("../../../../components/title/sectionTitle"));
var _trackingElement = require("../../../../models/trackingElement");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var maxMedia754 = (0, _responsive.specificMaxMedia)(754);
var NewProducts = /*#__PURE__*/function (_ContextComponent) {
  function NewProducts(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, NewProducts);
    _this = _callSuper(this, NewProducts, [props, context]);
    _this.track = _this.track.bind(_this);
    _this.handleResize = _this.handleResize.bind(_this);
    if (!_this.pageTypeId && context && context.initData && context.initData.pageTypeId) {
      _this.pageTypeId = context.initData.pageTypeId;
    }
    _this.state = {
      listTracked: false,
      mobileDisplay: _responsive["default"].isSmViewport()
    };
    _this._isMounted = false;
    _this._listTracked = false;
    return _this;
  }
  (0, _inherits2["default"])(NewProducts, _ContextComponent);
  return (0, _createClass2["default"])(NewProducts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      if (this.props.getItems) {
        this.props.getItems(_constants.APPLICATION.PRODUCTS.PARAMETER_NAME);
      }
      window.addEventListener("resize", this.handleResize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
      this._isMounted = false;
      this._listTracked = false;
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      var mobileDisplay = this.state.mobileDisplay;
      // On ne met a jour l'état que si on bascule d'affichage (mobile <-> desktop) et qu'on n'est pas en train de re-rendre la vue
      if ((mobileDisplay && _responsive["default"].isXsViewport() || !mobileDisplay && !_responsive["default"].isXsViewport()) && this._isMounted) {
        return;
      }
      this.setState({
        mobileDisplay: _responsive["default"].isSmViewport()
      });
    }
  }, {
    key: "track",
    value: function track(items) {
      if (this._listTracked) {
        return;
      }
      var _this$props = this.props,
        TrackingHelper = _this$props.TrackingHelper,
        doTracking = _this$props.doTracking,
        viewedPageId = _this$props.viewedPageId;
      var naturalElements = [];
      var pushedElements = [];
      items.map(function (element) {
        if (element.pushed) {
          pushedElements.push(element);
        } else {
          naturalElements.push(element);
        }
        return true;
      });
      if (pushedElements.length > 0) {
        var trackingElements = TrackingHelper.itemsToTrackingElements(pushedElements, {
          pushed: true,
          elementTypeId: _constants.ELEMENT_TYPE.product,
          placementId: 0,
          displayMode: _constants.TRACKING_EVENTS.MODE_THUMBNAILS
        }, this.context);
        if (doTracking && viewedPageId && trackingElements) {
          doTracking(trackingElements, viewedPageId);
          this._listTracked = true;
        }
      }
      if (naturalElements.length > 0) {
        var _trackingElements = TrackingHelper.itemsToTrackingElements(naturalElements, {
          pushed: false,
          elementTypeId: _constants.ELEMENT_TYPE.product,
          placementId: 1,
          displayMode: _constants.TRACKING_EVENTS.MODE_THUMBNAILS
        }, this.context);
        if (doTracking && viewedPageId && _trackingElements) {
          doTracking(_trackingElements, viewedPageId);
          this._listTracked = true;
        }
      }
    }

    // Ajout de la partie responsive des tuiles. Attention à l'utilisation de CSS.
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        GOOGLE_ANALYTICS_EVENTS = _this$props2.GOOGLE_ANALYTICS_EVENTS,
        products = _this$props2.products;
      var mobileDisplay = this.state.mobileDisplay;
      var pageTypeId = this.context.initData.pageTypeId;
      var nbProduct = products ? products.length : 0;
      var wrapperProps = {};
      var WrapperComponent = _react.Fragment;
      var styles = {};
      if (mobileDisplay) {
        WrapperComponent = _reactFlickityComponent["default"];
        wrapperProps = {
          options: {
            prevNextButtons: false,
            pageDots: true,
            draggable: true,
            adaptiveHeight: false,
            freeScrollFriction: 0.03,
            lazyLoad: false,
            resize: true,
            contain: true,
            freeScroll: true
          },
          flickityRef: function flickityRef(c) {
            return _this2.flkty = c;
          }
        };
        styles = {
          width: "85%",
          maxWidth: "300px",
          minHeight: "450px"
        };
      }
      if (!products || nbProduct > 0) {
        return /*#__PURE__*/_react["default"].createElement(_newProducts.NewProductWrapper, null, /*#__PURE__*/_react["default"].createElement(_newProducts.TitleWrapper, null, /*#__PURE__*/_react["default"].createElement(_sectionTitle["default"], null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "foj_homepage_new_products_title"
        }))), /*#__PURE__*/_react["default"].createElement(_row["default"], null, /*#__PURE__*/_react["default"].createElement(WrapperComponent, wrapperProps, false && !products && !mobileDisplay && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, [1, 2, 3, 4, 5, 6].map(function (el) {
          return /*#__PURE__*/_react["default"].createElement(_emptyTile["default"], {
            mediaTemplates: NewProducts.getMediaTemplates(6),
            key: el
          });
        })), products && this.track(products), products && products.map(function (item, index) {
          return /*#__PURE__*/_react["default"].createElement(_newProducts.ProductHomeWrapper, {
            mobileDisplay: mobileDisplay,
            style: styles,
            key: "dv".concat(item.id).concat(index.toString())
          }, /*#__PURE__*/_react["default"].createElement(_newProducts.ProductCardHome, {
            nbProduct: nbProduct,
            isHomePage: true,
            getMediaTemplates: NewProducts.getMediaTemplates(nbProduct),
            className: "card",
            imageUrl: item.imageUrl,
            sources: [{
              srcset: item.webpImageUrl
            }, {
              srcset: item.imageUrl
            }],
            linkUrl: item.linkUrl,
            label: item.name,
            brand: item.brand,
            companyImageUrl: item && item.company ? item.company.imageUrl : "",
            companyLinkUrl: item.company ? item.company.linkUrl : "",
            companyName: item.company ? item.company.name : "",
            newProduct: item.newProduct,
            hasVideo: item.hasVideo,
            productTagAssociationList: item.productTagAssociationList,
            productPrice: item.productPrice,
            featureValues: item.featureValuesOrdered,
            innovation: item.innovation,
            waitPriceLoad: false,
            supplierName: item.supplierName,
            supplierLocalisation: item.supplierLocalisation,
            satisfactionCount: item.satisfactionCount,
            reactivityInterval: item.reactivityInterval,
            displayFeature: true,
            key: item.id + index.toString(),
            pageTypeId: pageTypeId,
            trackingElement: _homeHelper["default"].getTrackElementClick(item, _constants.ELEMENT_TYPE.product,
            // typeItem
            0,
            // placementId
            _this2.pageTypeId),
            trackingGa: {
              category: GOOGLE_ANALYTICS_EVENTS.HOME_PAGE_PRODUCT.CATEGORY,
              action: GOOGLE_ANALYTICS_EVENTS.HOME_PAGE_PRODUCT.ACTION,
              label: item.pushed ? GOOGLE_ANALYTICS_EVENTS.HOME_PAGE_PRODUCT.LABEL.PUSHED : GOOGLE_ANALYTICS_EVENTS.HOME_PAGE_PRODUCT.LABEL.NATURAL
            },
            scaleRatio: 1,
            isHighLight: item.pushed,
            dataCy: "newProduct".concat(index)
          }));
        }))));
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
    }
  }], [{
    key: "getMediaTemplates",
    value: function getMediaTemplates(nbProduct) {
      return (0, _styledComponents.css)(["width:auto;width:calc(100% / ", ")", ";max-width:calc(100% / ", ")", ";", " ", " ", " ", ";", ";"], nbProduct < 6 ? nbProduct : 6, nbProduct < 6 ? "!important" : "", nbProduct < 6 ? nbProduct : 6, nbProduct < 6 ? "!important" : "", _responsive.media.screenLgMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      width: calc(100% / ", ")", ";\n      max-width: calc(100% / ", ")", ";\n    "])), nbProduct < 5 ? nbProduct : 5, nbProduct < 5 ? "!important" : "", nbProduct < 5 ? nbProduct : 5, nbProduct < 5 ? "!important" : ""), _responsive.media.screenMdMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      width: calc(100% / 3);\n    "]))), _responsive.media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n        max-width: 100%;\n        width: 100%;\n    "]))), _responsive.media.screenXsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    max-width: 100%;\n        width: 100%;\n    "]))), maxMedia754(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n      max-width: 100%;\n        width: 100%;\n\n    "]))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)((0, _withTracking.WithTracking)(NewProducts));