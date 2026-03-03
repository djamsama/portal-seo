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
var _semanticUiReact = require("semantic-ui-react");
var _veDesignSystem = require("ve-design-system");
var _contextComponent = require("../../../../../../../../components/contextComponent");
var _imageViewer = _interopRequireDefault(require("../../../../../../../../components/documentViewer/components/imageViewer"));
var _bookmarkContainer = _interopRequireDefault(require("../../../../../../../../components/bookmark/bookmarkLink/containers/bookmarkContainer"));
var _productOverview = require("./styles/productOverview");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // $FlowFixMe semantic 😖
var ProductOverview = /*#__PURE__*/function (_ContextComponent) {
  function ProductOverview(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, ProductOverview);
    _this = _callSuper(this, ProductOverview, [props, state]);
    _this.state = {
      preview: false
    };
    _this.baseUrl = _this.context.config.portal.baseUrl;
    _this.locale = _this.context.config.portal.locale;
    _this.openViewer = _this.openViewer.bind(_this);
    _this.retrieveViewerImage = _this.retrieveViewerImage.bind(_this);
    return _this;
  }

  /** Prévisualisation de l'image. */
  (0, _inherits2["default"])(ProductOverview, _ContextComponent);
  return (0, _createClass2["default"])(ProductOverview, [{
    key: "openViewer",
    value: function openViewer(open) {
      this.setState({
        preview: open
      });
    }

    /** Recupération de l'URL de l'image de grande résolution. */
  }, {
    key: "retrieveViewerImage",
    value: function retrieveViewerImage() {
      var imageUrl = this.props.imageUrl;
      if (imageUrl) {
        return imageUrl.replace("photo-mg", "photo-g");
      }
      return imageUrl;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
        _styles$colors;
      var _this$props = this.props,
        productId = _this$props.productId,
        label = _this$props.label,
        imageUrl = _this$props.imageUrl,
        brand = _this$props.brand,
        companyLogoUrl = _this$props.companyLogoUrl;
      var preview = this.state.preview;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_productOverview.ProductWrapper, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "imageWrapper"
      }, /*#__PURE__*/_react["default"].createElement(_productOverview.ProductWrapperImage, {
        onClick: function onClick() {
          return _this2.openViewer(true);
        }
      }, /*#__PURE__*/_react["default"].createElement(_productOverview.ProductImg, {
        src: imageUrl
      })), /*#__PURE__*/_react["default"].createElement(_bookmarkContainer["default"], {
        asIcon: true,
        productId: productId
      }), /*#__PURE__*/_react["default"].createElement(_productOverview.ZoomIn, {
        className: "zoomIn",
        onClick: function onClick() {
          return _this2.openViewer(true);
        }
      }, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Icon, {
        name: "search",
        iconColor: _veDesignSystem.styles === null || _veDesignSystem.styles === void 0 || (_styles$colors = _veDesignSystem.styles.colors) === null || _styles$colors === void 0 ? void 0 : _styles$colors.monochrome.white,
        iconSize: 20
      }))), /*#__PURE__*/_react["default"].createElement(_productOverview.ProductLabel, null, label), /*#__PURE__*/_react["default"].createElement(_productOverview.ProductBrand, null, brand), /*#__PURE__*/_react["default"].createElement(_productOverview.CompanyLogo, {
        src: companyLogoUrl
      })), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.TransitionablePortal, {
        open: preview,
        transition: {
          animation: "fade down",
          duration: 500
        }
      }, /*#__PURE__*/_react["default"].createElement(_productOverview.StyledModal, {
        open: preview,
        onClose: function onClose() {
          return _this2.openViewer(false);
        },
        closeIcon: true,
        closeOnDimmerClick: true
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "header"
      }, label, " ", brand), /*#__PURE__*/_react["default"].createElement(_imageViewer["default"], {
        fileName: label,
        url: this.retrieveViewerImage()
      }))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(ProductOverview);