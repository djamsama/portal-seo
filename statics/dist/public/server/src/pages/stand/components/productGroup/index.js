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
var _slider = _interopRequireDefault(require("../../../../components/slider"));
var _contextComponent = require("../../../../components/contextComponent");
var _productGroup = require("./styles/productGroup");
var _styledLink = require("../../../../components/styles/styledLink");
var _sectionTitle = require("../../../../components/title/sectionTitle/styles/sectionTitle");
var _productCard = _interopRequireDefault(require("../../../../components/product/productCard"));
var _link = require("../../../../components/link");
var _constants = require("../../../../commons/constants");
var _withGoogleAnalytics = require("../../../../hoc/withGoogleAnalytics");
var _trackingElement = require("../../../../models/trackingElement");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var ProductGroup = /*#__PURE__*/function (_ContextComponent) {
  function ProductGroup() {
    (0, _classCallCheck2["default"])(this, ProductGroup);
    return _callSuper(this, ProductGroup, arguments);
  }
  (0, _inherits2["default"])(ProductGroup, _ContextComponent);
  return (0, _createClass2["default"])(ProductGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        productGroup = _this$props.productGroup,
        products = _this$props.products,
        companyName = _this$props.companyName,
        companyLink = _this$props.companyLink,
        displayGroupName = _this$props.displayGroupName,
        companyId = _this$props.companyId,
        googleAnalytics = _this$props.googleAnalytics,
        GOOGLE_ANALYTICS_EVENTS = _this$props.GOOGLE_ANALYTICS_EVENTS;
      var context = this.context;
      var pageTypeId = context.initData.pageTypeId;
      return /*#__PURE__*/_react["default"].createElement(_productGroup.ProductGroupWrapper, null, /*#__PURE__*/_react["default"].createElement(_productGroup.StyledProductGroupTitle, {
        "data-cy": "otherProducts"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_product_detail_otherProducts",
        values: {
          "0": companyName
        }
      })), /*#__PURE__*/_react["default"].createElement(_sectionTitle.Title, {
        "data-cy": "otherProductsTitle"
      }, displayGroupName && /*#__PURE__*/_react["default"].createElement(_sectionTitle.Text, null, productGroup.groupName)), /*#__PURE__*/_react["default"].createElement(_productGroup.ProductGroupContainer, {
        "data-cy": "otherProductsCarousel"
      }, /*#__PURE__*/_react["default"].createElement(_slider["default"], {
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
      }, products.map(function (product) {
        var sources = [{
          srcset: product.webpImageUrl
        }, {
          srcset: product.imageUrl
        }];
        return /*#__PURE__*/_react["default"].createElement(_productCard["default"], {
          className: "product-tile",
          label: product.name,
          brand: product.brand,
          imageUrl: product.imageUrl,
          sources: sources,
          linkUrl: product.linkUrl,
          newProduct: product.newProduct,
          hasVideo: product.hasVideo,
          productPrice: product.productPrice,
          featureValues: product.mainFeatureValues,
          innovation: product.innovation,
          productTagAssociationList: product.productTagAssociationList,
          pageTypeId: pageTypeId,
          trackingGa: {
            category: GOOGLE_ANALYTICS_EVENTS.PRODUCT_CATEGORY,
            action: GOOGLE_ANALYTICS_EVENTS.CLICK_OTHER_PRODUCTS_SAME_COMPANY,
            label: GOOGLE_ANALYTICS_EVENTS.LABEL_SEE_PRODUCT_DETAIL
          },
          trackingElement: new _trackingElement.TrackingElement({
            entityId: product.id,
            companyId: companyId,
            elementTypeId: _constants.ELEMENT_TYPE.product,
            displayMode: _constants.TRACKING_EVENTS.MODE_THUMBNAILS,
            placementId: 0,
            pushed: false,
            // pushed
            eventType: _constants.TRACKING_EVENTS.EVENT_TYPE_CLICK,
            context: context
          }),
          key: product.id
        });
      }))), /*#__PURE__*/_react["default"].createElement(_styledLink.WrapperStyledLink, null, /*#__PURE__*/_react["default"].createElement(_styledLink.StyledLink, {
        as: _link.VeLink,
        to: companyLink,
        encrypt: true,
        onClick: function onClick() {
          googleAnalytics.event({
            category: GOOGLE_ANALYTICS_EVENTS.PRODUCT_CATEGORY,
            action: GOOGLE_ANALYTICS_EVENTS.CLICK_OTHER_PRODUCTS_SAME_COMPANY,
            label: GOOGLE_ANALYTICS_EVENTS.LABEL_SEE_ALL_PRODUCTS
          });
        },
        dataCy: "seeAllProducts"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_product_detail_seeOtherProducts",
        values: {
          "0": companyName
        }
      }), " ")));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)(ProductGroup);