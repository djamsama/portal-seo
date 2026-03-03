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
var _pdfCover = require("./styles/pdfCover");
var _contextComponent = require("../../../../../../components/contextComponent");
var _constants = require("../../../../../stand/components/constants");
var _withGoogleAnalytics = require("../../../../../../hoc/withGoogleAnalytics");
var _withTracking = require("../../../../../../hoc/withTracking");
var _catalogHelper = _interopRequireDefault(require("../helpers/catalogHelper"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // $FlowFixMe
var PdfCover = /*#__PURE__*/function (_ContextComponent) {
  function PdfCover(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, PdfCover);
    _this = _callSuper(this, PdfCover, [props, context]);
    _this.doTrackingGa = _this.doTrackingGa.bind(_this);
    _this.toggleSticky = _this.toggleSticky.bind(_this);
    _this.state = {
      sticky: false
    };
    return _this;
  }
  (0, _inherits2["default"])(PdfCover, _ContextComponent);
  return (0, _createClass2["default"])(PdfCover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$context;
      var _this$props = this.props,
        googleAnalytics = _this$props.googleAnalytics,
        catalogStandDetail = _this$props.catalogStandDetail;
      _catalogHelper["default"].initGa(googleAnalytics, catalogStandDetail, (_this$context = this.context) === null || _this$context === void 0 || (_this$context = _this$context.config) === null || _this$context === void 0 || (_this$context = _this$context.portal) === null || _this$context === void 0 ? void 0 : _this$context.baseUrl);
      var sticky = this.state.sticky;
      if (sticky !== false) {
        this.setState({
          sticky: false
        });
      }
      window.addEventListener("scroll", this.toggleSticky);
    }
  }, {
    key: "handleClick",
    value: function handleClick(label) {
      var googleAnalytics = this.props.googleAnalytics;
      _catalogHelper["default"].handleClick(googleAnalytics, label);
    }
  }, {
    key: "doTrackingGa",
    value: function doTrackingGa() {
      var _this$props2 = this.props,
        catalogStandDetail = _this$props2.catalogStandDetail,
        googleAnalytics = _this$props2.googleAnalytics;
      _catalogHelper["default"].doTrackingGa(catalogStandDetail, googleAnalytics);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.toggleSticky);
    }
  }, {
    key: "toggleSticky",
    value: function toggleSticky() {
      var sticky = this.state.sticky;
      if (window.pageYOffset >= 600) {
        if (sticky === false) {
          this.setState({
            sticky: true
          });
        }
      } else if (sticky !== false) {
        this.setState({
          sticky: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _catalogStandDetail$f,
        _this$context2,
        _this2 = this;
      var catalogStandDetail = this.context.initData.catalogStandDetail;
      var imageExt = "_".concat(catalogStandDetail === null || catalogStandDetail === void 0 ? void 0 : catalogStandDetail.page, "mg.jpg");
      var imageUrl = catalogStandDetail === null || catalogStandDetail === void 0 || (_catalogStandDetail$f = catalogStandDetail.firstPictureUrl) === null || _catalogStandDetail$f === void 0 ? void 0 : _catalogStandDetail$f.replace("_1.jpg", imageExt);
      if (false) {
        this.doTrackingGa();
      }
      var pdfUrls = _catalogHelper["default"].getZoomsUrl(catalogStandDetail, (_this$context2 = this.context) === null || _this$context2 === void 0 || (_this$context2 = _this$context2.config) === null || _this$context2 === void 0 || (_this$context2 = _this$context2.portal) === null || _this$context2 === void 0 ? void 0 : _this$context2.baseUrl);
      return /*#__PURE__*/_react["default"].createElement(_pdfCover.PdfCoverContainer, {
        sticky: this.state.sticky
      }, " ", /*#__PURE__*/_react["default"].createElement(_pdfCover.PdfCoverImage, null, /*#__PURE__*/_react["default"].createElement("img", {
        src: imageUrl,
        alt: catalogStandDetail.title
      })), /*#__PURE__*/_react["default"].createElement(_pdfCover.PdfCoverFooter, null, /*#__PURE__*/_react["default"].createElement("span", {
        className: "catalogue-preview-page"
      }, /*#__PURE__*/_react["default"].createElement(_pdfCover.CatalogPage, {
        id: "current-catalog-page"
      }, catalogStandDetail === null || catalogStandDetail === void 0 ? void 0 : catalogStandDetail.page), " /", /*#__PURE__*/_react["default"].createElement(_pdfCover.CatalogNbPage, {
        className: "catalog-nb-pages"
      }, " ", catalogStandDetail === null || catalogStandDetail === void 0 ? void 0 : catalogStandDetail.nbPages, " ", /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_common_label_page".concat((catalogStandDetail === null || catalogStandDetail === void 0 ? void 0 : catalogStandDetail.nbPages) <= 1 ? "" : "s")
      }))), /*#__PURE__*/_react["default"].createElement(_pdfCover.PdfCoverLink, {
        to: "".concat(pdfUrls === null || pdfUrls === void 0 ? void 0 : pdfUrls.zoomUrl, "#open"),
        onClick: function onClick() {
          _this2.handleClick(_constants.GOOGLE_ANALYTICS_EVENTS.CLICK_ZOOM);
        }
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-search"
      }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_catalog_detail_view"
      }))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)((0, _reactIntl.injectIntl)((0, _withTracking.WithTracking)(PdfCover)));