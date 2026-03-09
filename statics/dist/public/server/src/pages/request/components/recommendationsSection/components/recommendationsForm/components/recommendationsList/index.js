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
var _reduxForm = require("redux-form");
var _reactFlickityComponent = _interopRequireDefault(require("react-flickity-component"));
var _contextComponent = require("../../../../../../../../components/contextComponent");
var _withTracking = require("../../../../../../../../hoc/withTracking");
var _constants = require("../../../../../../../../commons/constants");
var _index = require("./components/fieldProduct/index");
var _recommendationsList = require("./styles/recommendationsList");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // import { type TrackingElement as TypeTrackingElement } from "~/models/trackingElement";
/**
 * Affichage des recommandations
 *
 */
var RecommendationsList = /*#__PURE__*/function (_ContextComponent) {
  function RecommendationsList() {
    (0, _classCallCheck2["default"])(this, RecommendationsList);
    return _callSuper(this, RecommendationsList, arguments);
  }
  (0, _inherits2["default"])(RecommendationsList, _ContextComponent);
  return (0, _createClass2["default"])(RecommendationsList, [{
    key: "render",
    value: function render() {
      var context = this.context;
      var _this$props = this.props,
        viewedPageId = _this$props.viewedPageId,
        doTracking = _this$props.doTracking,
        trackingDisabled = _this$props.trackingDisabled,
        tracked = _this$props.tracked,
        TrackingHelper = _this$props.TrackingHelper,
        relatedProducts = _this$props.relatedProducts,
        TrackingElement = _this$props.TrackingElement;
      var isMobile = this.context && this.context.config ? this.context.config.isMobile : false;
      var pageTypeId = this.context.initData.pageTypeId;

      /* const optionsTrackingElement = {
        pushed: false, // pushed
        eventType: TRACKING_EVENTS.EVENT_TYPE_CLICK,
        context
      }; */

      var dynamicPropsTrackingGa = trackingDisabled ? {} : {
        trackingGa: {
          category: this.props.category,
          action: this.props.action,
          label: "SeeProductDetail"
        }
      };
      if (!trackingDisabled && viewedPageId && doTracking) {
        var trackingElements = TrackingHelper.itemsToTrackingElements(relatedProducts, {
          pushed: false,
          elementTypeId: _constants.ELEMENT_TYPE.product,
          placementId: 0,
          displayMode: _constants.TRACKING_EVENTS.MODE_THUMBNAILS
        }, this.context);
        if (!tracked || !TrackingHelper.isAlreadyTrack(trackingElements, tracked)) {
          doTracking(trackingElements, viewedPageId);
        }
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_recommendationsList.RecommendationProductWrapper, null, isMobile === true && relatedProducts.length > 1 && /*#__PURE__*/_react["default"].createElement("div", {
        className: "productsContainer ".concat(relatedProducts.length === 1 && isMobile ? "mob-1" : "")
      }, /*#__PURE__*/_react["default"].createElement(_reactFlickityComponent["default"], {
        options: {
          prevNextButtons: false,
          pageDots: true,
          draggable: true,
          reloadOnUpdate: false,
          resize: true,
          contain: true,
          freeScroll: false
        }
      }, relatedProducts.map(function (product) {
        var dynamicPropsTrackingItem = trackingDisabled ? {} : {
          trackingElement: new TrackingElement({
            entityId: product.id,
            companyId: product.company.id,
            elementTypeId: _constants.ELEMENT_TYPE.product,
            displayMode: _constants.TRACKING_EVENTS.MODE_THUMBNAILS,
            placementId: 0,
            pushed: false,
            // pushed
            eventType: _constants.TRACKING_EVENTS.EVENT_TYPE_CLICK,
            context: context
          })
        };
        return /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            width: "260px",
            maxWidth: "270px"
          },
          key: product.id
        }, /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, (0, _extends2["default"])({
          name: "productCards.fieldCard-".concat(product.id),
          component: _index.ProductField,
          product: product,
          pageTypeId: pageTypeId
          //  optionsTrackingElement={optionsTrackingElement}
        }, dynamicPropsTrackingGa, dynamicPropsTrackingItem)));
      }))), (isMobile === false || relatedProducts.length <= 1) && /*#__PURE__*/_react["default"].createElement("div", {
        className: "productsContainer ".concat(relatedProducts.length === 1 && isMobile ? "mob-1" : "", " ").concat(!isMobile ? "no-mob" : "")
      }, relatedProducts.map(function (product) {
        var dynamicPropsTrackingItem = trackingDisabled ? {} : {
          trackingItem: {
            entityId: product.id,
            companyId: product.company.id,
            elementTypeId: _constants.ELEMENT_TYPE.product,
            displayMode: _constants.TRACKING_EVENTS.MODE_THUMBNAILS,
            placementId: 0
          }
        };
        return /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, (0, _extends2["default"])({
          name: "productCards.fieldCard-".concat(product.id),
          component: _index.ProductField,
          key: product.id,
          product: product,
          pageTypeId: pageTypeId
          // TODO verifie qu'il n'y a pas des cas ou on voulait modifier une partie du trackingElement avec optionsTrackingElement
          //  optionsTrackingElement={optionsTrackingElement}
        }, dynamicPropsTrackingGa, dynamicPropsTrackingItem));
      }))));
    }
  }]);
}(_contextComponent.ContextComponent);
RecommendationsList.defaultProps = {
  trackingDisabled: false
};
var _default = exports["default"] = (0, _withTracking.WithTracking)(RecommendationsList);