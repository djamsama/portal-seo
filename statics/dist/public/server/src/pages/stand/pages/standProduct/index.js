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
var _react = _interopRequireDefault(require("react"));
var _reactLazyload = _interopRequireDefault(require("react-lazyload"));
var _reactIntl = require("react-intl");
var _contextComponent = require("../../../../components/contextComponent");
var _encryptHelper = _interopRequireDefault(require("../../../../helpers/encryptHelper"));
var _stand = _interopRequireDefault(require("../../container/stand"));
var _pageLayout = _interopRequireDefault(require("../../../../layouts/pageLayout"));
var _productDetail = require("./styles/productDetail");
var Inovo = _interopRequireWildcard(require("../../../../components/styles/innovation"));
var _constants = require("../../../../commons/constants");
var _productSpecifications = _interopRequireDefault(require("./components/productSpecifications"));
var _productDescriptions = _interopRequireDefault(require("./components/productDescriptions"));
var _recommendedProductsContainer = _interopRequireDefault(require("./components/recommendedProducts/containers/recommendedProductsContainer"));
var _suppliersContainer = _interopRequireDefault(require("./components/suppliers/containers/suppliersContainer"));
var _imageViewer = _interopRequireDefault(require("../../../../components/imageViewer"));
var _video = _interopRequireDefault(require("../../../../components/video"));
var _productLabel = _interopRequireDefault(require("../../../../components/product/productLabel"));
var _index = require("./components/productTagBig/index");
var _catalogSectionContainer = _interopRequireDefault(require("./components/catalogSection/containers/catalogSectionContainer"));
var _exhibitionSection = _interopRequireDefault(require("./components/exhibitionSection"));
var _bookmarkContainer = _interopRequireDefault(require("../../../../components/bookmark/bookmarkLink/containers/bookmarkContainer"));
var _grabberLinkContainer = _interopRequireDefault(require("../../../../components/grabber/components/grabberLink/container/grabberLinkContainer"));
var _productGroup = _interopRequireDefault(require("../../components/productGroup"));
var _idpLink = _interopRequireDefault(require("./components/idpLink"));
var _allExhibitionsLink = _interopRequireDefault(require("./components/allExhibitionsLink"));
var _globalHelper = require("../../../../helpers/globalHelper");
var _constants2 = require("../../components/constants");
var _histoRecoContainer = _interopRequireDefault(require("../../../../components/histoReco/container/histoRecoContainer"));
var _crispWrapperConnect = _interopRequireDefault(require("../../../../components/crisp/crispWrapperConnect"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // Ce container importe le composent: import HistoReco from "~/components/histoReco";
var StandProduct = /*#__PURE__*/function (_ContextComponent) {
  function StandProduct(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, StandProduct);
    _this = _callSuper(this, StandProduct, [props, context]);
    _this.state = {
      isMobile: context && context.config ? context.config.isMobile : false
    };
    _this.refMainSupplier = /*#__PURE__*/_react["default"].createRef();
    _this.refProductInfoWrapper = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }
  (0, _inherits2["default"])(StandProduct, _ContextComponent);
  return (0, _createClass2["default"])(StandProduct, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isMobile: _globalHelper.GlobalHelper.isMobileOnly()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        showRelatedLinks = _this$props.showRelatedLinks,
        intl = _this$props.intl;
      var _this$context$initDat = this.context.initData,
        featureValues = _this$context$initDat.featureValues,
        specifications = _this$context$initDat.specifications,
        productStandDTO = _this$context$initDat.productStandDTO,
        labelDescriptionTranslation = _this$context$initDat.labelDescriptionTranslation,
        productLabel = _this$context$initDat.productLabel,
        productBrand = _this$context$initDat.productBrand,
        productLabelFeatureValues = _this$context$initDat.productLabelFeatureValues,
        linkedCatalogs = _this$context$initDat.linkedCatalogs,
        onlineExhibitions = _this$context$initDat.onlineExhibitions,
        hasMoreExhibitions = _this$context$initDat.hasMoreExhibitions,
        headerStandLinksNavCatalogs = _this$context$initDat.headerStandLinksNavCatalogs,
        headerStandLinksNavExhibit = _this$context$initDat.headerStandLinksNavExhibit,
        headerStandLinksNavProducts = _this$context$initDat.headerStandLinksNavProducts,
        productVideoUrl = _this$context$initDat.productVideoUrl,
        productVideo360Url = _this$context$initDat.productVideo360Url,
        productVideoThumbUrl = _this$context$initDat.productVideoThumbUrl,
        isDowngraded = _this$context$initDat.isDowngraded,
        mainProductGroup = _this$context$initDat.mainProductGroup,
        mainProducts = _this$context$initDat.mainProducts,
        displayGroupName = _this$context$initDat.displayGroupName,
        kwRefId = _this$context$initDat.kwRefId,
        productIdpLink = _this$context$initDat.productIdpLink,
        sourceType = _this$context$initDat.sourceType,
        pageTypeId = _this$context$initDat.pageTypeId,
        metaObject = _this$context$initDat.metaObject;
      var language = this.context.config.portal.language;
      var videoUrl = _globalHelper.GlobalHelper.isAllMobileDevice() && productVideo360Url ? productVideo360Url : productVideoUrl;
      var otherPictures = Object.values(productStandDTO.pictureViewerDataDto.pictureList);
      var inovo = productStandDTO.innovation;
      var hasVideo = productStandDTO.pictureViewerDataDto.hasVideo;
      var showBlockVideo = productVideoUrl !== undefined && typeof _constants2.NO_VIDEO_LANGUAGE[language] === "undefined";
      var hasOnlineExhibitions = onlineExhibitions && onlineExhibitions.length > 0;
      var closable = this.state.isMobile;
      return /*#__PURE__*/_react["default"].createElement(_pageLayout["default"], null, /*#__PURE__*/_react["default"].createElement(_stand["default"], {
        showRelatedLinks: showRelatedLinks,
        activeTab: "fo_headerStand_product_tab"
      }, /*#__PURE__*/_react["default"].createElement(_productDetail.ProductInfoWrapper, null, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_productDetail.NewVideoWrapper, null, productStandDTO.newProduct && /*#__PURE__*/_react["default"].createElement(_productDetail.NewFlag, null), productStandDTO.pictureViewerDataDto.hasVideo && /*#__PURE__*/_react["default"].createElement(_productDetail.VideoFlag, null), /*#__PURE__*/_react["default"].createElement(_index.ProductTagBig, {
        productTagAssociationList: productStandDTO.productTagAssociationList
      }))), /*#__PURE__*/_react["default"].createElement(_productDetail.ProductDetailTopWrapper, {
        scaleRatio: 1
      }, /*#__PURE__*/_react["default"].createElement(_productDetail.ProductDetailInset, null, /*#__PURE__*/_react["default"].createElement(_productDetail.ProductLabelWrapper, null, /*#__PURE__*/_react["default"].createElement(_productLabel["default"], {
        companyName: productStandDTO.companyName,
        label: productLabel,
        brand: productBrand,
        featureValues: productLabelFeatureValues
      })), /*#__PURE__*/_react["default"].createElement(_productDetail.ProductDetailTopImageWrapper, null, /*#__PURE__*/_react["default"].createElement(_imageViewer["default"], {
        picturesList: otherPictures,
        hasVideo: hasVideo,
        videoUrl: videoUrl,
        videoThumbUrl: productVideoThumbUrl,
        mainPictureMaxHeight: 500,
        productLabel: productLabel,
        brand: productBrand,
        gaCategory: _constants2.GOOGLE_ANALYTICS_EVENTS.CATEGORY_PRODUCT,
        metaObject: metaObject
      }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, inovo && inovo.type === _constants.INOVO_TYPES.WINNER && /*#__PURE__*/_react["default"].createElement(Inovo.InnovationBigWinner, {
        type: inovo.type
      }), inovo && inovo.type === _constants.INOVO_TYPES.NOMINEE && /*#__PURE__*/_react["default"].createElement(Inovo.InnovationBigNominee, {
        type: inovo.type
      }), inovo && inovo.type === _constants.INOVO_TYPES.INNOVATIVE && /*#__PURE__*/_react["default"].createElement(Inovo.InnovationBigInnovative, {
        type: inovo.type
      }))), /*#__PURE__*/_react["default"].createElement(_productDetail.AddLinks, null, /*#__PURE__*/_react["default"].createElement(_bookmarkContainer["default"], {
        asIcon: false,
        productId: productStandDTO.productId
      }), !_globalHelper.GlobalHelper.isMobileDevice() && /*#__PURE__*/_react["default"].createElement(_grabberLinkContainer["default"], {
        entityId: productStandDTO.productId,
        entityImageUrl: otherPictures && otherPictures[0] ? otherPictures[0].pictureMediumSmallUrl : "",
        entityLabel: productLabel
      }))), /*#__PURE__*/_react["default"].createElement(_suppliersContainer["default"], {
        sourceType: sourceType,
        pageTypeId: pageTypeId,
        sourceId: productStandDTO.productId,
        companyId: productStandDTO.companyId,
        itemType: productStandDTO.itemType,
        refMainSupplier: this.refMainSupplier,
        refProductInfoWrapper: this.refProductInfoWrapper
      })))), !isDowngraded &&
      /*#__PURE__*/
      //  $FlowFixMe la props est injectée par le hoc
      _react["default"].createElement(_idpLink["default"], {
        url: productIdpLink,
        companyName: productStandDTO.companyName,
        productId: productStandDTO.productId,
        companyId: productStandDTO.companyId
      }), /*#__PURE__*/_react["default"].createElement(_productDetail.ProductInfoWrapper, {
        ref: this.refProductInfoWrapper
      }, (Object.keys(featureValues).length > 0 || Object.keys(specifications).length > 0) && /*#__PURE__*/_react["default"].createElement(_productDetail.ProductInfoElementWrapper, {
        scaleRatio: 1,
        title: intl.formatMessage({
          id: "fo_product_detail_featureSection"
        }),
        titleAs: "h2",
        closable: closable
      }, /*#__PURE__*/_react["default"].createElement(_productSpecifications["default"], {
        featureValues: featureValues,
        specifications: specifications
      })), productStandDTO.description !== null && /*#__PURE__*/_react["default"].createElement(_productDetail.ProductInfoElementWrapper, {
        scaleRatio: 1,
        title: intl.formatMessage({
          id: "fo_product_detail_descriptionSection"
        }),
        titleAs: "h2",
        closable: closable
      }, /*#__PURE__*/_react["default"].createElement(_productDescriptions["default"], {
        context: this.context,
        description: productStandDTO.description,
        productId: productStandDTO.productId,
        hasTranslation: productStandDTO.hasTranslation,
        labelDescriptionTranslation: labelDescriptionTranslation
      })), showBlockVideo && /*#__PURE__*/_react["default"].createElement(_productDetail.ProductInfoElementWrapper, {
        scaleRatio: 1,
        title: intl.formatMessage({
          id: "FO_PRODUCT_DETAIL_VIDEOSECTION"
        }),
        titleAs: "h2",
        closable: closable
      }, /*#__PURE__*/_react["default"].createElement(_productDetail.ProductVideoWrapper, null, /*#__PURE__*/_react["default"].createElement(_video["default"], {
        thumbnail: productVideoThumbUrl,
        url: _encryptHelper["default"].decrypt(videoUrl)
      }))), headerStandLinksNavCatalogs && /*#__PURE__*/_react["default"].createElement(_productDetail.ProductInfoElementWrapper, {
        scaleRatio: 1,
        title: intl.formatMessage({
          id: "foj_product_detail_catalogSection"
        }),
        titleAs: "h2",
        closable: closable
      }, /*#__PURE__*/_react["default"].createElement(_catalogSectionContainer["default"], {
        catalogs: linkedCatalogs,
        catalogStandUrl: headerStandLinksNavCatalogs,
        companyName: productStandDTO.companyName,
        companyId: productStandDTO.companyId
      })), hasOnlineExhibitions && /*#__PURE__*/_react["default"].createElement(_productDetail.ProductInfoElementWrapper, {
        scaleRatio: 1,
        title: intl.formatMessage({
          id: "FOJ_PRODUCT_DETAIL_EXHIBITIONSECTION"
        }),
        titleAs: "h2",
        closable: closable
      }, /*#__PURE__*/_react["default"].createElement(_exhibitionSection["default"], {
        onlineExhibitions: onlineExhibitions
      }))), hasMoreExhibitions ? /*#__PURE__*/_react["default"].createElement(_allExhibitionsLink["default"], {
        url: headerStandLinksNavExhibit,
        text: intl.formatMessage({
          id: "foj_product_detail_salon_MoreInformation"
        })
      }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !isDowngraded &&
      /*#__PURE__*/
      // $FlowFixMe la props est injectée par le hoc
      _react["default"].createElement(_idpLink["default"], {
        url: productIdpLink,
        companyName: productStandDTO.companyName,
        productId: productStandDTO.productId,
        companyId: productStandDTO.companyId
      })), /*#__PURE__*/_react["default"].createElement(_crispWrapperConnect["default"], null), kwRefId && isDowngraded && /*#__PURE__*/_react["default"].createElement(_recommendedProductsContainer["default"], {
        kwrefId: kwRefId,
        companyId: productStandDTO.companyId,
        productId: productStandDTO.productId
      }), mainProducts.length > 0 &&
      /*#__PURE__*/
      // $FlowFixMe la props est injectée par le hoc
      _react["default"].createElement(_productGroup["default"], {
        companyName: productStandDTO.companyName,
        companyLink: headerStandLinksNavProducts,
        productGroup: mainProductGroup,
        products: mainProducts,
        displayGroupName: displayGroupName,
        companyId: productStandDTO.companyId
      }), /*#__PURE__*/_react["default"].createElement(_reactLazyload["default"], {
        offset: 200,
        once: true
      }, /*#__PURE__*/_react["default"].createElement(_histoRecoContainer["default"], {
        category: "Produit"
      }))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(StandProduct);