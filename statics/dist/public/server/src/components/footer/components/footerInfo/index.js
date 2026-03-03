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
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactLazyload = _interopRequireDefault(require("react-lazyload"));
var _link = require("../../../link");
var _responsive = _interopRequireDefault(require("../../../styles/responsive"));
var _contextComponent = require("../../../contextComponent");
var _footerInfo = require("./styles/footerInfo");
var _footerCountryContainer = _interopRequireDefault(require("../../../../containers/footer/footerCountryContainer"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var FooterInfo = /*#__PURE__*/function (_ContextComponent) {
  function FooterInfo(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, FooterInfo);
    _this = _callSuper(this, FooterInfo, [props, context]);
    var isMobile = context && context.config && typeof context.config.isMobile !== "undefined" ? context.config.isMobile : false;
    _this.state = {
      mobileDisplay: isMobile || _responsive["default"].isSmViewport()
    };
    _this.handleResize = _this.handleResize.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(FooterInfo, _ContextComponent);
  return (0, _createClass2["default"])(FooterInfo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Ecoute du resize pour la responsivité  desktop / mobile
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
      var _this$context$initDat = this.context.initData,
        footerCopyrightYear = _this$context$initDat.footerCopyrightYear,
        footerLinksTermsIndex = _this$context$initDat.footerLinksTermsIndex,
        footerLinksPrivacy = _this$context$initDat.footerLinksPrivacy,
        footerLinksCGU = _this$context$initDat.footerLinksCGU,
        footerLinksConsent = _this$context$initDat.footerLinksConsent,
        icp = _this$context$initDat.icp,
        icpUrl = _this$context$initDat.icpUrl,
        pdfCGUFullPath = _this$context$initDat.pdfCGUFullPath,
        pdfPrivacyFullPath = _this$context$initDat.pdfPrivacyFullPath;
      var Component = _footerInfo.FooterInfoLink;
      var footerMode = this.props.footerMode;
      var mobileDisplay = this.state.mobileDisplay;
      var directLinkCGUExists = false;
      var directLinkPrivacyExists = false;
      if (pdfCGUFullPath !== undefined && mobileDisplay) {
        directLinkCGUExists = true;
      }
      if (pdfPrivacyFullPath !== undefined && mobileDisplay) {
        directLinkPrivacyExists = true;
      }
      var pdfParams = "#view=fitH&toolbar=0&navpanes=0";
      return /*#__PURE__*/_react["default"].createElement(_footerInfo.FooterInfoWrapper, {
        footerMode: footerMode
      }, "\xA9 ", footerCopyrightYear, " \xA0", /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Fo_Layout_Footer_AllRightsReserved"
      }), "\xA0-", /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
        component: Component,
        to: footerLinksTermsIndex,
        encrypt: true
      }, "\xA0", /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Fo_Layout_Footer_Terms"
      }), " -"), /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
        component: Component,
        to: directLinkPrivacyExists ? "".concat(pdfPrivacyFullPath).concat(pdfParams) : footerLinksPrivacy,
        encrypt: true
      }, "\xA0", /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Fo_Layout_Footer_Privacy"
      }), " -"), /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
        component: Component,
        to: directLinkCGUExists ? "".concat(pdfCGUFullPath).concat(pdfParams) : footerLinksCGU,
        encrypt: true
      }, "\xA0", /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Fo_Layout_Footer_CGU"
      }), " -"), /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
        component: Component,
        to: footerLinksConsent,
        encrypt: true
      }, "\xA0", /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Fo_Layout_Footer_Consent"
      }), "\xA0-\xA0"), icpUrl && /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
        component: Component,
        to: icpUrl,
        encrypt: true,
        external: true
      }, "\xA0", /*#__PURE__*/_react["default"].createElement("span", {
        dangerouslySetInnerHTML: {
          __html: icp
        }
      }), "\xA0"), footerMode === "full" && /*#__PURE__*/_react["default"].createElement(_reactLazyload["default"], {
        offset: 100,
        once: true
      }, /*#__PURE__*/_react["default"].createElement(_footerCountryContainer["default"], null)));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = FooterInfo;
FooterInfo.propTypes = {
  /**
   * Callback changement de pays.
   */
  changeCountry: _propTypes["default"].func,
  /**
   * Pays selectionné (Valeur recuperée depuis la lecture des cookies par Java).
   */
  countrySelected: _propTypes["default"].string,
  footerCopyrightYear: _propTypes["default"].string,
  footerLinksTermsIndex: _propTypes["default"].string,
  icp: _propTypes["default"].string,
  icpUrl: _propTypes["default"].string,
  footerCountries: _propTypes["default"].arrayOf(_propTypes["default"].object)
};