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
var _reactToPrint = _interopRequireDefault(require("react-to-print"));
var _reactIntl = require("react-intl");
var _veDesignSystem = require("ve-design-system");
var _imageViewer = require("./styles/imageViewer");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // $FlowFixMe
/**
 * Prévisualisation d'une image avec certaines options: téléchargement, impression,...
 */
var ImageViewer = /*#__PURE__*/function (_React$Component) {
  function ImageViewer(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, ImageViewer);
    _this = _callSuper(this, ImageViewer, [props, state]);
    _this.state = {
      imageStyle: {
        width: "100%"
      },
      size: 100
    };
    _this.zoomFit = _this.zoomFit.bind(_this);
    _this.zoomIn = _this.zoomIn.bind(_this);
    _this.zoomOut = _this.zoomOut.bind(_this);
    return _this;
  }

  /**
   * Adapte le niveau de zoom de l'image pour soit s'ajuster à la taille du container, soit passer a 100%.
   */
  (0, _inherits2["default"])(ImageViewer, _React$Component);
  return (0, _createClass2["default"])(ImageViewer, [{
    key: "zoomFit",
    value: function zoomFit() {
      var size = this.state.size;
      if (size === 100) {
        this.setState({
          imageStyle: {
            width: "auto"
          }
        });
      } else {
        this.setState({
          imageStyle: {
            width: "100%"
          }
        });
        this.setState({
          size: 100
        });
      }
    }

    /**
     * Zoom.
     */
  }, {
    key: "zoomIn",
    value: function zoomIn() {
      var size = this.state.size;
      var newSize = size + 25;
      this.setState({
        imageStyle: {
          width: "".concat(newSize, "%")
        }
      });
      this.setState({
        size: newSize
      });
    }

    /**
     * Dézoom.
     */
  }, {
    key: "zoomOut",
    value: function zoomOut() {
      var size = this.state.size;
      var newSize = Math.max(25, size - 25);
      this.setState({
        imageStyle: {
          width: "".concat(newSize, "%")
        }
      });
      this.setState({
        size: newSize
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _styles$colors,
        _styles$colors2,
        _styles$colors3,
        _styles$colors4,
        _this2 = this,
        _styles$colors9,
        _styles$colors0,
        _styles$colors1,
        _styles$colors10,
        _styles$colors11,
        _styles$colors12,
        _styles$colors13,
        _styles$colors14,
        _styles$colors15,
        _styles$colors16,
        _styles$colors17,
        _styles$colors18;
      var _this$props = this.props,
        intl = _this$props.intl,
        fileName = _this$props.fileName,
        url = _this$props.url;
      var _this$state = this.state,
        imageStyle = _this$state.imageStyle,
        size = _this$state.size;
      return /*#__PURE__*/_react["default"].createElement(_imageViewer.Container, {
        className: "imgViewer"
      }, /*#__PURE__*/_react["default"].createElement(_imageViewer.Header, {
        className: "previewHeader"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "name"
      }, fileName), /*#__PURE__*/_react["default"].createElement("a", {
        href: url,
        download: fileName,
        className: "btn",
        title: intl.formatMessage({
          id: "global_download"
        })
      }, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        className: "download",
        a11yLabel: intl.formatMessage({
          id: "global_download"
        }),
        iconButton: true,
        rounded: true,
        href: url,
        size: "small",
        rel: intl.formatMessage({
          id: "global_download"
        }),
        download: fileName,
        buttonColor: _veDesignSystem.styles === null || _veDesignSystem.styles === void 0 || (_styles$colors = _veDesignSystem.styles.colors) === null || _styles$colors === void 0 ? void 0 : _styles$colors.monochrome.white,
        color: _veDesignSystem.styles === null || _veDesignSystem.styles === void 0 || (_styles$colors2 = _veDesignSystem.styles.colors) === null || _styles$colors2 === void 0 ? void 0 : _styles$colors2.monochrome.grayDark4,
        buttonHoverColor: _veDesignSystem.styles === null || _veDesignSystem.styles === void 0 || (_styles$colors3 = _veDesignSystem.styles.colors) === null || _styles$colors3 === void 0 ? void 0 : _styles$colors3.monochrome.gray,
        iconColor: _veDesignSystem.styles === null || _veDesignSystem.styles === void 0 || (_styles$colors4 = _veDesignSystem.styles.colors) === null || _styles$colors4 === void 0 ? void 0 : _styles$colors4.monochrome.grayDark4
      }, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Icon, {
        name: "download"
      }))), /*#__PURE__*/_react["default"].createElement(_reactToPrint["default"], {
        trigger: function trigger() {
          var _styles$colors5, _styles$colors6, _styles$colors7, _styles$colors8;
          return /*#__PURE__*/_react["default"].createElement("span", {
            className: "btn"
          }, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
            a11yLabel: intl.formatMessage({
              id: "global_print"
            }),
            iconButton: true,
            rounded: true,
            href: "# ",
            size: "small",
            rel: intl.formatMessage({
              id: "global_print"
            }),
            buttonColor: _veDesignSystem.styles === null || _veDesignSystem.styles === void 0 || (_styles$colors5 = _veDesignSystem.styles.colors) === null || _styles$colors5 === void 0 ? void 0 : _styles$colors5.monochrome.white,
            color: _veDesignSystem.styles === null || _veDesignSystem.styles === void 0 || (_styles$colors6 = _veDesignSystem.styles.colors) === null || _styles$colors6 === void 0 ? void 0 : _styles$colors6.monochrome.grayDark4,
            buttonHoverColor: _veDesignSystem.styles === null || _veDesignSystem.styles === void 0 || (_styles$colors7 = _veDesignSystem.styles.colors) === null || _styles$colors7 === void 0 ? void 0 : _styles$colors7.monochrome.gray,
            iconColor: _veDesignSystem.styles === null || _veDesignSystem.styles === void 0 || (_styles$colors8 = _veDesignSystem.styles.colors) === null || _styles$colors8 === void 0 ? void 0 : _styles$colors8.monochrome.grayDark4,
            title: intl.formatMessage({
              id: "global_print"
            })
          }, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Icon, {
            name: "printer"
          })));
        },
        content: function content() {
          return _this2;
        }
      })), /*#__PURE__*/_react["default"].createElement(_imageViewer.ImageContainer, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "imageWrapper"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        className: "imagePreview",
        src: url,
        style: imageStyle,
        alt: fileName
      }))), /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        className: "zoomFull ".concat(size === 100 ? "fit" : ""),
        a11yLabel: "search",
        iconButton: true,
        rounded: true,
        onClick: this.zoomFit,
        size: "small",
        rel: "search",
        buttonColor: _veDesignSystem.styles === null || _veDesignSystem.styles === void 0 || (_styles$colors9 = _veDesignSystem.styles.colors) === null || _styles$colors9 === void 0 ? void 0 : _styles$colors9.monochrome.white,
        color: _veDesignSystem.styles === null || _veDesignSystem.styles === void 0 || (_styles$colors0 = _veDesignSystem.styles.colors) === null || _styles$colors0 === void 0 ? void 0 : _styles$colors0.monochrome.grayDark4,
        buttonHoverColor: _veDesignSystem.styles === null || _veDesignSystem.styles === void 0 || (_styles$colors1 = _veDesignSystem.styles.colors) === null || _styles$colors1 === void 0 ? void 0 : _styles$colors1.monochrome.gray,
        iconColor: _veDesignSystem.styles === null || _veDesignSystem.styles === void 0 || (_styles$colors10 = _veDesignSystem.styles.colors) === null || _styles$colors10 === void 0 ? void 0 : _styles$colors10.monochrome.grayDark4,
        title: "fit"
      }, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Icon, {
        name: "search"
      })), /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        className: "zoomIn",
        a11yLabel: "search",
        iconButton: true,
        rounded: true,
        onClick: this.zoomIn,
        size: "small",
        rel: "zoomIn",
        buttonColor: _veDesignSystem.styles === null || _veDesignSystem.styles === void 0 || (_styles$colors11 = _veDesignSystem.styles.colors) === null || _styles$colors11 === void 0 ? void 0 : _styles$colors11.monochrome.white,
        color: _veDesignSystem.styles === null || _veDesignSystem.styles === void 0 || (_styles$colors12 = _veDesignSystem.styles.colors) === null || _styles$colors12 === void 0 ? void 0 : _styles$colors12.monochrome.grayDark4,
        buttonHoverColor: _veDesignSystem.styles === null || _veDesignSystem.styles === void 0 || (_styles$colors13 = _veDesignSystem.styles.colors) === null || _styles$colors13 === void 0 ? void 0 : _styles$colors13.monochrome.gray,
        iconColor: _veDesignSystem.styles === null || _veDesignSystem.styles === void 0 || (_styles$colors14 = _veDesignSystem.styles.colors) === null || _styles$colors14 === void 0 ? void 0 : _styles$colors14.monochrome.grayDark4,
        title: "zoomIn"
      }, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Icon, {
        name: "search-plus"
      })), /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        className: "zoomOut",
        a11yLabel: "search",
        iconButton: true,
        rounded: true,
        onClick: this.zoomOut,
        size: "small",
        rel: "zoomOut",
        buttonColor: _veDesignSystem.styles === null || _veDesignSystem.styles === void 0 || (_styles$colors15 = _veDesignSystem.styles.colors) === null || _styles$colors15 === void 0 ? void 0 : _styles$colors15.monochrome.white,
        color: _veDesignSystem.styles === null || _veDesignSystem.styles === void 0 || (_styles$colors16 = _veDesignSystem.styles.colors) === null || _styles$colors16 === void 0 ? void 0 : _styles$colors16.monochrome.grayDark4,
        buttonHoverColor: _veDesignSystem.styles === null || _veDesignSystem.styles === void 0 || (_styles$colors17 = _veDesignSystem.styles.colors) === null || _styles$colors17 === void 0 ? void 0 : _styles$colors17.monochrome.gray,
        iconColor: _veDesignSystem.styles === null || _veDesignSystem.styles === void 0 || (_styles$colors18 = _veDesignSystem.styles.colors) === null || _styles$colors18 === void 0 ? void 0 : _styles$colors18.monochrome.grayDark4,
        title: "zoomOut"
      }, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Icon, {
        name: "search-minus"
      })));
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(ImageViewer);