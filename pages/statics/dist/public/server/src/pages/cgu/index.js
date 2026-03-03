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
var _formattedHTMLMessage = _interopRequireDefault(require("../../components/formattedHTMLMessage"));
var _responsive = _interopRequireDefault(require("../../components/styles/responsive"));
var _themeLayout = require("../../layouts/styles/themeLayout");
var _pageLayout = _interopRequireDefault(require("../../layouts/pageLayout"));
var _contextComponent = require("../../components/contextComponent");
var _cgu = require("./styles/cgu");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var CGUPageComponent = /*#__PURE__*/function (_ContextComponent) {
  function CGUPageComponent(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, CGUPageComponent);
    _this = _callSuper(this, CGUPageComponent, [props, context]);
    var isMobile = context && context.config && typeof context.config.isMobile !== "undefined" ? context.config.isMobile : false;
    _this.state = {
      mobileDisplay: isMobile || _responsive["default"].isSmViewport()
    };
    _this.handleResize = _this.handleResize.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(CGUPageComponent, _ContextComponent);
  return (0, _createClass2["default"])(CGUPageComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Ecoute du resize pour la responsivité du header desktop / mobile
      window.addEventListener("resize", this.handleResize);
      this.setState({
        mobileDisplay: _responsive["default"].isSmViewport()
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      var mobileDisplay = this.state.mobileDisplay;
      var isMobile = this.context && this.context.config ? this.context.config.isMobile : false;
      // On ne met a jour l'état que si on bascule d'affichage (mobile <-> desktop)
      if (isMobile || mobileDisplay && _responsive["default"].isSmViewport() || !mobileDisplay && !_responsive["default"].isSmViewport()) {
        return;
      }
      this.setState({
        mobileDisplay: _responsive["default"].isSmViewport()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var mobileDisplay = this.state.mobileDisplay;
      var pdfCGUFullPath = this.context.initData.pdfCGUFullPath;
      if (!false) {
        return null;
      }
      if (mobileDisplay) {
        return /*#__PURE__*/_react["default"].createElement(_pageLayout["default"], {
          theme: _themeLayout.ThemeLayoutWhiteMain,
          brands: false
        }, /*#__PURE__*/_react["default"].createElement(_cgu.CGUWrapper, null, pdfCGUFullPath !== undefined && /*#__PURE__*/_react["default"].createElement(_cgu.VeCguLink, {
          to: "".concat(pdfCGUFullPath, "#view=fitH&toolbar=0&navpanes=0"),
          encrypt: true
        }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
          id: "fo_cgu_generalTerms_link"
        })), pdfCGUFullPath === undefined && /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
          id: "Fo_CGU_Content_Page"
        })));
      }
      return /*#__PURE__*/_react["default"].createElement(_pageLayout["default"], {
        theme: _themeLayout.ThemeLayoutWhiteMain,
        brands: false
      }, /*#__PURE__*/_react["default"].createElement(_cgu.CGUWrapper, null, pdfCGUFullPath !== undefined && /*#__PURE__*/_react["default"].createElement("iframe", {
        className: "cgu-file-pdf",
        type: "application/pdf",
        src: "".concat(pdfCGUFullPath, "#view=fitH&toolbar=0&navpanes=0"),
        title: "cgu-pdf"
      }), pdfCGUFullPath === undefined && /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "Fo_CGU_Content_Page"
      })));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = CGUPageComponent;