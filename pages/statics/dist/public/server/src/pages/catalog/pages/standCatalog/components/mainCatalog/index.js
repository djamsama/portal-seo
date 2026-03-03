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
var _veDesignSystem = require("ve-design-system");
var _withGoogleAnalytics = require("../../../../../../hoc/withGoogleAnalytics");
var _contextComponent = require("../../../../../../components/contextComponent");
var _bookmarkContainer = _interopRequireDefault(require("../../../../../../components/bookmark/bookmarkLink/containers/bookmarkContainer"));
var _constants = require("../../../../../stand/components/constants");
var _mainCatalog = require("./styles/mainCatalog");
var _bookmarkActions = require("../../../../../../components/bookmark/bookmarkLink/actions/bookmarkActions");
var _catalogHelper = _interopRequireDefault(require("../helpers/catalogHelper"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var MainCatalog = /*#__PURE__*/function (_ContextComponent) {
  function MainCatalog(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, MainCatalog);
    _this = _callSuper(this, MainCatalog, [props, context]);
    _this.doTrackingGa = _this.doTrackingGa.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(MainCatalog, _ContextComponent);
  return (0, _createClass2["default"])(MainCatalog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$context;
      var _this$props = this.props,
        googleAnalytics = _this$props.googleAnalytics,
        catalogStandDetail = _this$props.catalogStandDetail;
      _catalogHelper["default"].initGa(googleAnalytics, catalogStandDetail, (_this$context = this.context) === null || _this$context === void 0 || (_this$context = _this$context.config) === null || _this$context === void 0 || (_this$context = _this$context.portal) === null || _this$context === void 0 ? void 0 : _this$context.baseUrl);
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
    key: "render",
    value: function render() {
      var _this2 = this;
      var catalogStandDetail = this.props.catalogStandDetail;
      if (false) {
        this.doTrackingGa();
      }
      if (catalogStandDetail) {
        var _this$context2;
        var pdfUrls = _catalogHelper["default"].getZoomsUrl(catalogStandDetail, (_this$context2 = this.context) === null || _this$context2 === void 0 || (_this$context2 = _this$context2.config) === null || _this$context2 === void 0 || (_this$context2 = _this$context2.portal) === null || _this$context2 === void 0 ? void 0 : _this$context2.baseUrl);
        return /*#__PURE__*/_react["default"].createElement(_mainCatalog.CatalogWrapper, null, /*#__PURE__*/_react["default"].createElement(_mainCatalog.CatalogThumbnailTile, null, /*#__PURE__*/_react["default"].createElement(_mainCatalog.StyledCatalogImg, null, /*#__PURE__*/_react["default"].createElement(_mainCatalog.StyledCatalogLink, {
          to: "".concat(pdfUrls === null || pdfUrls === void 0 ? void 0 : pdfUrls.zoomUrl, "#open"),
          onClick: function onClick() {
            _this2.handleClick(_constants.GOOGLE_ANALYTICS_EVENTS.CLICK_ZOOM);
          },
          encrypt: true
        }, /*#__PURE__*/_react["default"].createElement(_mainCatalog.AddBookmark, null, /*#__PURE__*/_react["default"].createElement(_bookmarkContainer["default"], {
          asComponent: true,
          type: _bookmarkActions.BOOKMARK_TYPE.PDF,
          productId: "".concat(catalogStandDetail === null || catalogStandDetail === void 0 ? void 0 : catalogStandDetail.catalogId)
        }, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Icon, {
          name: "heart",
          iconSize: 20
        }))), /*#__PURE__*/_react["default"].createElement("img", {
          src: pdfUrls === null || pdfUrls === void 0 ? void 0 : pdfUrls.imageUrl,
          alt: catalogStandDetail === null || catalogStandDetail === void 0 ? void 0 : catalogStandDetail.title
        }), /*#__PURE__*/_react["default"].createElement(_mainCatalog.PdfBookStyle, {
          className: ""
        }), /*#__PURE__*/_react["default"].createElement(_mainCatalog.CornerBottomLeft, {
          className: "corner"
        }), /*#__PURE__*/_react["default"].createElement(_mainCatalog.IconZoomStand, {
          className: "zoom"
        }), /*#__PURE__*/_react["default"].createElement(_mainCatalog.CornerPage, {
          className: "corner"
        })))));
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
    }
  }]);
}(_contextComponent.ContextComponent); // $FlowFixMe
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)(MainCatalog);