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
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _reactLazyload = require("react-lazyload");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../../components/formattedHTMLMessage"));
var _contextComponent = require("../../../../../../components/contextComponent");
var _sectionTitle = _interopRequireDefault(require("../../../../../../components/title/sectionTitle"));
var _withGoogleAnalytics = require("../../../../../../hoc/withGoogleAnalytics");
var _withTracking = require("../../../../../../hoc/withTracking");
var _recommendedProductsList = _interopRequireDefault(require("./components/recommendedProductsList"));
var _recommendedProducts = require("./styles/recommendedProducts");
var _dec, _class;
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
// Lazy loading des recos, Le composant ne sera monté qu'a <offset>px du viewport.
var RecommendedProducts = (_dec = (0, _reactLazyload.lazyload)({
  once: true,
  offset: 500
}), _dec(_class = /*#__PURE__*/function (_ContextComponent) {
  function RecommendedProducts(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, RecommendedProducts);
    _this = _callSuper(this, RecommendedProducts, [props, state]);
    _this.state = {};
    _this.baseUrl = _this.context.config.portal.baseUrl;
    _this.locale = _this.context.config.portal.locale;
    return _this;
  }

  /** Récupération des produits une fois le composant monté. */
  (0, _inherits2["default"])(RecommendedProducts, _ContextComponent);
  return (0, _createClass2["default"])(RecommendedProducts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        getRecommendedProducts = _this$props.getRecommendedProducts,
        kwrefId = _this$props.kwrefId,
        companyId = _this$props.companyId,
        productId = _this$props.productId,
        activeSuppliers = _this$props.activeSuppliers;
      getRecommendedProducts(this.locale, this.baseUrl, kwrefId, companyId, productId, activeSuppliers);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        recommendationList = _this$props2.recommendationList,
        kwRefLink = _this$props2.kwRefLink,
        isLoading = _this$props2.isLoading,
        activeSuppliers = _this$props2.activeSuppliers;
      if (isLoading) {
        // On affiche max 12 recos, le CSS fait en sorte de n'afficher que 2 lignes de recos en fonction de la résolution
        var recommendedProductsPlaceHolder = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
        return /*#__PURE__*/_react["default"].createElement(_recommendedProducts.RecommendedProductsPlaceHolder, null, /*#__PURE__*/_react["default"].createElement(_sectionTitle["default"], null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
          id: "foj_productpage_related_products_title"
        }, function (txt) {
          return txt;
        })), /*#__PURE__*/_react["default"].createElement(_recommendedProductsList["default"], {
          trackingDisabled: true,
          kwRefLink: kwRefLink,
          recommendationList: recommendedProductsPlaceHolder
        }));
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, recommendationList && !(0, _isEmpty["default"])(recommendationList) && !activeSuppliers && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_sectionTitle["default"], null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_productpage_related_products_title"
      }, function (txt) {
        return txt;
      })), /*#__PURE__*/_react["default"].createElement(_recommendedProductsList["default"], {
        kwRefLink: kwRefLink,
        recommendationList: recommendationList
      })));
    }
  }]);
}(_contextComponent.ContextComponent)) || _class);
RecommendedProducts.defaultProps = {
  isLoading: true
};
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)((0, _withTracking.WithTracking)(RecommendedProducts));