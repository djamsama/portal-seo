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
var _contextComponent = require("../contextComponent");
var _responsive = _interopRequireDefault(require("../styles/responsive"));
var _desktopHeaderContainer = _interopRequireDefault(require("./components/desktopHeader/containers/desktopHeaderContainer"));
var _mobileHeaderContainer = _interopRequireDefault(require("./components/mobileHeader/containers/mobileHeaderContainer"));
var _header = require("./styles/header");
var _currentEnv = _interopRequireDefault(require("./components/currentEnv"));
var _iNovoGrabber = require("./components/iNovoGrabber/styles/iNovoGrabber");
var _geolocContainer = _interopRequireDefault(require("./components/visitorGeoloc/containers/geolocContainer"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Composant header.
 */
var HeaderComponent = /*#__PURE__*/function (_ContextComponent) {
  function HeaderComponent(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, HeaderComponent);
    _this = _callSuper(this, HeaderComponent, [props, context]);
    var isMobile = context && context.config && typeof context.config.isMobile !== "undefined" ? context.config.isMobile : false;
    _this.state = {
      mobileDisplay: isMobile || _responsive["default"].isSmViewport()
    };
    _this.handleResize = _this.handleResize.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(HeaderComponent, _ContextComponent);
  return (0, _createClass2["default"])(HeaderComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var loadCurrency = this.props.loadCurrency;
      // Ecoute du resize pour la responsivité du header desktop / mobile
      window.addEventListener("resize", this.handleResize);
      // Chargement des devises quelque soit le header affiché
      if (loadCurrency) {
        this.props.loadCurrency();
      }
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
      var _this$context;
      var _this$props = this.props,
        hasFixedHeader = _this$props.hasFixedHeader,
        isWebsiteCustomizationCookieConsented = _this$props.isWebsiteCustomizationCookieConsented,
        bannerEnabled = _this$props.bannerEnabled;
      var mobileDisplay = this.state.mobileDisplay;
      var _ref = this.context && this.context.initData,
        isGpsGeolocEnabled = _ref.isGpsGeolocEnabled;
      var _ref2 = ((_this$context = this.context) === null || _this$context === void 0 ? void 0 : _this$context.initData) || {},
        _ref2$environmentMess = _ref2.environmentMessageDisplayed,
        environmentMessageDisplayed = _ref2$environmentMess === void 0 ? false : _ref2$environmentMess,
        currentEnvironmentName = _ref2.currentEnvironmentName,
        environmentMessage = _ref2.environmentMessage,
        _ref2$inovoGrabberEna = _ref2.inovoGrabberEnabled,
        inovoGrabberEnabled = _ref2$inovoGrabberEna === void 0 ? false : _ref2$inovoGrabberEna;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, environmentMessageDisplayed && /*#__PURE__*/_react["default"].createElement(_currentEnv["default"], {
        currentEnvironmentName: currentEnvironmentName,
        environmentMessage: environmentMessage
      }), isGpsGeolocEnabled && /*#__PURE__*/_react["default"].createElement(_geolocContainer["default"], {
        isWebsiteCustomizationCookieConsented: isWebsiteCustomizationCookieConsented
      }), /*#__PURE__*/_react["default"].createElement(_header.HeaderSwitcher, null, /*#__PURE__*/_react["default"].createElement("div", null, !mobileDisplay && /*#__PURE__*/_react["default"].createElement(_desktopHeaderContainer["default"], {
        fixed: hasFixedHeader,
        bannerEnabled: bannerEnabled
      })), /*#__PURE__*/_react["default"].createElement("div", null, mobileDisplay && /*#__PURE__*/_react["default"].createElement(_mobileHeaderContainer["default"], {
        bannerEnabled: bannerEnabled
      }))), inovoGrabberEnabled && !mobileDisplay && /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://www.i-novo-awards.com/",
        target: "_blank",
        rel: "noreferrer"
      }, /*#__PURE__*/_react["default"].createElement(_iNovoGrabber.INovoGrabber, null)));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = HeaderComponent;