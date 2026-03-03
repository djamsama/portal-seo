"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _slider = _interopRequireDefault(require("../../../../../../../../components/slider"));
var _constants = require("../../../../../../../../commons/constants");
var _contextComponent = require("../../../../../../../../components/contextComponent");
var _link = require("../../../../../../../../components/link");
var _productCard = _interopRequireDefault(require("../../../../../../../../components/product/productCard"));
var _withGoogleAnalytics = require("../../../../../../../../hoc/withGoogleAnalytics");
var _withTracking = require("../../../../../../../../hoc/withTracking");
var _trackingElement = require("../../../../../../../../models/trackingElement");
var _recommendedProductsList = require("./styles/recommendedProductsList");
var _styledLink = require("../../../../../../../../components/styles/styledLink");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var RecommendedProductsList = /*#__PURE__*/function (_ContextComponent) {
  function RecommendedProductsList() {
    (0, _classCallCheck2["default"])(this, RecommendedProductsList);
    return _callSuper(this, RecommendedProductsList, arguments);
  }
  (0, _inherits2["default"])(RecommendedProductsList, _ContextComponent);
  return (0, _createClass2["default"])(RecommendedProductsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        viewedPageId = _this$props.viewedPageId,
        doTracking = _this$props.doTracking,
        trackingDisabled = _this$props.trackingDisabled,
        tracked = _this$props.tracked,
        TrackingHelper = _this$props.TrackingHelper,
        recommendationList = _this$props.recommendationList;
      if (!trackingDisabled && viewedPageId && doTracking) {
        var trackingElements = TrackingHelper.itemsToTrackingElements(recommendationList, {
          pushed: false,
          elementTypeId: _constants.ELEMENT_TYPE.product,
          placementId: 0,
          displayMode: _constants.TRACKING_EVENTS.MODE_THUMBNAILS
        }, this.context);
        if (!tracked || !TrackingHelper.isAlreadyTrack(trackingElements, tracked)) {
          doTracking(trackingElements, viewedPageId);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var context = this.context;
      var pageTypeId = this.context.initData.pageTypeId;
      var _this$props2 = this.props,
        recommendationList = _this$props2.recommendationList,
        kwRefLink = _this$props2.kwRefLink,
        trackingDisabled = _this$props2.trackingDisabled;
      var _this$props3 = this.props,
        googleAnalytics = _this$props3.googleAnalytics,
        GOOGLE_ANALYTICS_EVENTS = _this$props3.GOOGLE_ANALYTICS_EVENTS;
      var dynamicPropsTrackingGa = trackingDisabled ? {} : {
        trackingGa: {
          category: GOOGLE_ANALYTICS_EVENTS.PRODUCT_CATEGORY,
          action: GOOGLE_ANALYTICS_EVENTS.CLICK_OTHER_PRODUCTS_OTHER_COMPANIES,
          label: GOOGLE_ANALYTICS_EVENTS.LABEL_SEE_PRODUCT_DETAIL
        }
      };
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_recommendedProductsList.RecommendedProductsWrapper, null, /*#__PURE__*/_react["default"].createElement(_slider["default"], {
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
      }, recommendationList.map(function (product, index) {
        var dynamicPropsTrackingElement = trackingDisabled ? {} : {
          trackingElement: new _trackingElement.TrackingElement({
            entityId: product.id,
            companyId: product && product.company ? product.company.id : null,
            elementTypeId: _constants.ELEMENT_TYPE.product,
            displayMode: _constants.TRACKING_EVENTS.MODE_THUMBNAILS,
            placementId: 0,
            pushed: false,
            // pushed
            eventType: _constants.TRACKING_EVENTS.EVENT_TYPE_CLICK,
            context: context
          })
        };
        return /*#__PURE__*/_react["default"].createElement(_productCard["default"], (0, _extends2["default"])({
          className: "card",
          trackingDisabled: trackingDisabled,
          key: product.id ? product.id : index,
          imageUrl: product.imageUrl,
          sources: [{
            srcset: product.webpImageUrl
          }, {
            srcset: product.imageUrl
          }],
          linkUrl: product.linkUrl,
          label: product.name,
          brand: product.brand,
          companyImageUrl: product.company ? product.company.imageUrl : "",
          companyLinkUrl: product.company ? product.company.linkUrl : "",
          companyName: product.company ? product.company.name : "",
          newProduct: product.newProduct,
          hasVideo: product.hasVideo,
          productPrice: product.productPrice,
          featureValues: product.featureValuesOrdered,
          innovation: product.innovation,
          productTagAssociationList: product.productTagAssociationList,
          pageTypeId: pageTypeId
        }, dynamicPropsTrackingGa, dynamicPropsTrackingElement));
      }))), kwRefLink && /*#__PURE__*/_react["default"].createElement(_styledLink.WrapperStyledLink, null, /*#__PURE__*/_react["default"].createElement(_styledLink.StyledLink, {
        as: _link.VeLink,
        to: kwRefLink,
        encrypt: true,
        onClick: function onClick() {
          googleAnalytics.event({
            category: GOOGLE_ANALYTICS_EVENTS.PRODUCT_CATEGORY,
            action: GOOGLE_ANALYTICS_EVENTS.CLICK_OTHER_PRODUCTS_OTHER_COMPANIES,
            label: GOOGLE_ANALYTICS_EVENTS.LABEL_SEE_ALL_PRODUCTS
          });
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_productpage_related_products_link"
      }, function (txt) {
        return txt;
      }))));
    }
  }]);
}(_contextComponent.ContextComponent);
RecommendedProductsList.defaultProps = {
  trackingDisabled: false
};
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)((0, _withTracking.WithTracking)(RecommendedProductsList));