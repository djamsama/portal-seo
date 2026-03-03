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
var _contextComponent = require("../../../../components/contextComponent");
var _catalog = _interopRequireDefault(require("../../container/catalog"));
var _pageLayout = _interopRequireDefault(require("../../../../layouts/pageLayout"));
var _excerpt = _interopRequireDefault(require("./components/excerpt"));
var _catalogDetail = require("./styles/catalogDetail");
var _buttonsContainer = _interopRequireDefault(require("./components/buttons/containers/buttonsContainer"));
var _mainCatalog = _interopRequireDefault(require("./components/mainCatalog"));
var _suppliersCatalogs = _interopRequireDefault(require("./components/suppliersCatalogs"));
var _catalogTitle = require("./components/catalogTitle");
var _pdfCover = _interopRequireDefault(require("./components/pdfCover"));
var _pdfSummary = _interopRequireDefault(require("./components/pdfSummary"));
var _catalogDetailIA = require("./styles/catalogDetailIA");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // $FlowFixMe
// import SupplierCatalogs from "../../components/suppliersCatalogs";
var SOURCE_TYPE_CATALOG = "CATALOG";
var StandCatalog = /*#__PURE__*/function (_ContextComponent) {
  function StandCatalog(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, StandCatalog);
    _this = _callSuper(this, StandCatalog, [props, context]);
    _this.refMainSupplier = /*#__PURE__*/_react["default"].createRef();
    _this.refProductInfoWrapper = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }
  (0, _inherits2["default"])(StandCatalog, _ContextComponent);
  return (0, _createClass2["default"])(StandCatalog, [{
    key: "renderCatalog",
    value: function renderCatalog() {
      var _catalogStandDetail$c2;
      var googleAnalytics = this.props.googleAnalytics;
      var _this$context$initDat = this.context.initData,
        productStandDTO = _this$context$initDat.productStandDTO,
        requestSourceType = _this$context$initDat.requestSourceType,
        pageTypeId = _this$context$initDat.pageTypeId,
        catalogStandDetail = _this$context$initDat.catalogStandDetail;
      var sourceType = requestSourceType;
      if (catalogStandDetail.summary) {
        var _catalogStandDetail$c;
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_catalogDetailIA.CatalogDetailIA, null, /*#__PURE__*/_react["default"].createElement(_catalogDetailIA.CatalogTitleIA, null, catalogStandDetail.title), /*#__PURE__*/_react["default"].createElement(_catalogDetailIA.CatalogDetailIABody, null, /*#__PURE__*/_react["default"].createElement(_pdfCover["default"], {
          catalogStandDetail: catalogStandDetail,
          googleAnalytics: googleAnalytics
        }), /*#__PURE__*/_react["default"].createElement(_pdfSummary["default"], {
          catalogStandDetail: catalogStandDetail
        }))), (catalogStandDetail === null || catalogStandDetail === void 0 || (_catalogStandDetail$c = catalogStandDetail.cleanedContent) === null || _catalogStandDetail$c === void 0 ? void 0 : _catalogStandDetail$c.length) > 0 && /*#__PURE__*/_react["default"].createElement(_excerpt["default"], {
          catalogExcerpts: catalogStandDetail.cleanedContent,
          catalogImgSrc: catalogStandDetail.firstPictureUrl,
          catalogFirstPageUrl: catalogStandDetail.firstPageUrl,
          catalogTitle: catalogStandDetail.title,
          currentPage: catalogStandDetail === null || catalogStandDetail === void 0 ? void 0 : catalogStandDetail.page,
          marginTop: true
        }));
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_catalogDetail.CatalogInfoWrapper, null, /*#__PURE__*/_react["default"].createElement(_catalogTitle.CatalogTitle, {
        catalogStandDetail: catalogStandDetail,
        showMobile: true
      }), /*#__PURE__*/_react["default"].createElement(_mainCatalog["default"], {
        catalogStandDetail: catalogStandDetail
      }), /*#__PURE__*/_react["default"].createElement(_buttonsContainer["default"], {
        catalogStandDetail: catalogStandDetail,
        sourceType: sourceType,
        pageTypeId: pageTypeId,
        sourceId: productStandDTO === null || productStandDTO === void 0 ? void 0 : productStandDTO.productId,
        companyId: productStandDTO === null || productStandDTO === void 0 ? void 0 : productStandDTO.companyId,
        itemType: SOURCE_TYPE_CATALOG,
        refMainSupplier: this.refMainSupplier,
        showTitle: true
      })), (catalogStandDetail === null || catalogStandDetail === void 0 || (_catalogStandDetail$c2 = catalogStandDetail.cleanedContent) === null || _catalogStandDetail$c2 === void 0 ? void 0 : _catalogStandDetail$c2.length) > 0 && /*#__PURE__*/_react["default"].createElement(_excerpt["default"], {
        catalogExcerpts: catalogStandDetail.cleanedContent,
        catalogImgSrc: catalogStandDetail.firstPictureUrl,
        catalogFirstPageUrl: catalogStandDetail.firstPageUrl,
        catalogTitle: catalogStandDetail.title,
        currentPage: catalogStandDetail === null || catalogStandDetail === void 0 ? void 0 : catalogStandDetail.page
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _catalogStandDetail$s, _catalogStandDetail$s2, _catalogStandDetail$s3, _catalogStandDetail$s4, _catalogStandDetail$s5, _catalogStandDetail$s6, _catalogStandDetail$s7, _catalogStandDetail$s8, _catalogStandDetail$s9;
      var _this$props = this.props,
        intl = _this$props.intl,
        showRelatedLinks = _this$props.showRelatedLinks;
      var catalogStandDetail = this.context.initData.catalogStandDetail;
      return /*#__PURE__*/_react["default"].createElement(_pageLayout["default"], null, /*#__PURE__*/_react["default"].createElement(_catalog["default"], {
        activeTab: "fo_headerStand_catalogs_tab",
        showRelatedLinks: showRelatedLinks
      }, this.renderCatalog(), (catalogStandDetail === null || catalogStandDetail === void 0 || (_catalogStandDetail$s = catalogStandDetail.standListDTO) === null || _catalogStandDetail$s === void 0 || (_catalogStandDetail$s = _catalogStandDetail$s.catalogs) === null || _catalogStandDetail$s === void 0 ? void 0 : _catalogStandDetail$s.length) > 0 && /*#__PURE__*/_react["default"].createElement(_suppliersCatalogs["default"], {
        catalogs: catalogStandDetail === null || catalogStandDetail === void 0 || (_catalogStandDetail$s2 = catalogStandDetail.standListDTO) === null || _catalogStandDetail$s2 === void 0 ? void 0 : _catalogStandDetail$s2.catalogs,
        companyId: catalogStandDetail === null || catalogStandDetail === void 0 || (_catalogStandDetail$s3 = catalogStandDetail.standListDTO) === null || _catalogStandDetail$s3 === void 0 ? void 0 : _catalogStandDetail$s3.companyId,
        companyName: catalogStandDetail === null || catalogStandDetail === void 0 || (_catalogStandDetail$s4 = catalogStandDetail.standListDTO) === null || _catalogStandDetail$s4 === void 0 ? void 0 : _catalogStandDetail$s4.companyName,
        titleSection: intl.formatMessage({
          id: "foj_catalog_stand_metaTitle"
        }, {
          "0": catalogStandDetail === null || catalogStandDetail === void 0 || (_catalogStandDetail$s5 = catalogStandDetail.standListDTO) === null || _catalogStandDetail$s5 === void 0 ? void 0 : _catalogStandDetail$s5.companyName
        })
      }), (catalogStandDetail === null || catalogStandDetail === void 0 || (_catalogStandDetail$s6 = catalogStandDetail.standListDTO) === null || _catalogStandDetail$s6 === void 0 || (_catalogStandDetail$s6 = _catalogStandDetail$s6.archivedCatalogs) === null || _catalogStandDetail$s6 === void 0 ? void 0 : _catalogStandDetail$s6.length) > 0 && /*#__PURE__*/_react["default"].createElement(_suppliersCatalogs["default"], {
        companyId: catalogStandDetail === null || catalogStandDetail === void 0 || (_catalogStandDetail$s7 = catalogStandDetail.standListDTO) === null || _catalogStandDetail$s7 === void 0 ? void 0 : _catalogStandDetail$s7.companyId,
        companyName: catalogStandDetail === null || catalogStandDetail === void 0 || (_catalogStandDetail$s8 = catalogStandDetail.standListDTO) === null || _catalogStandDetail$s8 === void 0 ? void 0 : _catalogStandDetail$s8.companyName,
        catalogs: catalogStandDetail === null || catalogStandDetail === void 0 || (_catalogStandDetail$s9 = catalogStandDetail.standListDTO) === null || _catalogStandDetail$s9 === void 0 ? void 0 : _catalogStandDetail$s9.archivedCatalogs,
        titleSection: intl.formatMessage({
          id: "fo_stand_catalog_archivedcatalog"
        }),
        archivedCatalogs: true
      })));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(StandCatalog);