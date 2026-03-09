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
var _standHeader = require("./styles/standHeader");
var _nav = _interopRequireDefault(require("./components/nav"));
var _popup = _interopRequireDefault(require("../../../../components/popup"));
var _link = require("../../../../components/link");
var _corporateVideo = _interopRequireDefault(require("./components/corporateVideo"));
var _urlEncodedContentHelper = _interopRequireDefault(require("../../../../helpers/urlEncodedContentHelper"));
var _constants = require("../../../../commons/constants");
var _withGoogleAnalytics = require("../../../../hoc/withGoogleAnalytics");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/** *
 * TODO  DEPLACER DANS UN DOSSIER COMMON
 */
var StandHeader = /*#__PURE__*/function (_ContextComponent) {
  function StandHeader(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, StandHeader);
    _this = _callSuper(this, StandHeader, [props, state]);
    _this.HeaderStandRef = /*#__PURE__*/_react["default"].createRef();
    _this.isUrlNoFollow = _this.isUrlNoFollow.bind(_this);
    _this.isUrlEncrypted = _this.isUrlEncrypted.bind(_this);
    _this.isUrlVisible = _this.isUrlVisible.bind(_this);
    _this.state = {
      sticked: false
    };
    return _this;
  }
  (0, _inherits2["default"])(StandHeader, _ContextComponent);
  return (0, _createClass2["default"])(StandHeader, [{
    key: "handleClick",
    value: function handleClick(clickThroughOrigin) {
      var _this$props = this.props,
        googleAnalytics = _this$props.googleAnalytics,
        GOOGLE_ANALYTICS_EVENTS = _this$props.GOOGLE_ANALYTICS_EVENTS;
      googleAnalytics.event({
        category: clickThroughOrigin,
        action: GOOGLE_ANALYTICS_EVENTS.CLICK_THROUGH_LOGO,
        label: GOOGLE_ANALYTICS_EVENTS.GO_TO_EXHIBITOR_AREA
      });
    }

    /** Le lien vers la companie doit-il être lié avec la page courante? */
  }, {
    key: "isUrlNoFollow",
    value: function isUrlNoFollow() {
      var portal = this.context.config.portal;
      var _this$context$initDat = this.context.initData,
        isSubscriber = _this$context$initDat.isSubscriber,
        subscriberPack = _this$context$initDat.subscriberPack,
        betaTestDisabledSubscriberLink = _this$context$initDat.betaTestDisabledSubscriberLink;
      return betaTestDisabledSubscriberLink && !(_constants.ROUTE_STAND_PRODUCTS_LIST === portal.route && isSubscriber) || subscriberPack === "STARTER";
    }

    /** L'URL de la companie doit-elle être encryptée? */
  }, {
    key: "isUrlEncrypted",
    value: function isUrlEncrypted() {
      var portal = this.context.config.portal;
      var _this$context$initDat2 = this.context.initData,
        isSubscriber = _this$context$initDat2.isSubscriber,
        betaTestDisabledSubscriberLink = _this$context$initDat2.betaTestDisabledSubscriberLink;
      return !betaTestDisabledSubscriberLink && !(_constants.ROUTE_STAND_PRODUCTS_LIST === portal.route && isSubscriber);
    }

    /** L'URL de la companie doit-elle être présente ? */
  }, {
    key: "isUrlVisible",
    value: function isUrlVisible() {
      var isDowngraded = this.context.initData.isDowngraded;
      return !this.isUrlNoFollow() && !isDowngraded;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        activeTab = _this$props2.activeTab,
        trackingElement = _this$props2.trackingElement;
      var _this$context$initDat3 = this.context.initData,
        globalLinksBaseImg = _this$context$initDat3.globalLinksBaseImg,
        companyLinkCad = _this$context$initDat3.companyLinkCad,
        companyClickThroughLogo = _this$context$initDat3.companyClickThroughLogo,
        companyClickThroughLink = _this$context$initDat3.companyClickThroughLink,
        companyWebSite = _this$context$initDat3.companyWebSite,
        groupCompanyName = _this$context$initDat3.groupCompanyName,
        clickThroughOrigin = _this$context$initDat3.clickThroughOrigin,
        headerStandCompanyName = _this$context$initDat3.headerStandCompanyName,
        headerStandCompanyImageUrl = _this$context$initDat3.headerStandCompanyImageUrl,
        headerStandCompanyPresGallery = _this$context$initDat3.headerStandCompanyPresGallery,
        isDowngraded = _this$context$initDat3.isDowngraded;
      var portal = this.context.config.portal;
      var companyImg = /*#__PURE__*/_react["default"].createElement(_standHeader.CompanyLogoImg, {
        id: "stand-logo",
        src: headerStandCompanyImageUrl,
        alt: "".concat(headerStandCompanyName, " - logo")
      });
      return /*#__PURE__*/_react["default"].createElement(_standHeader.HeaderStandWrapper, {
        gap: 0
      }, /*#__PURE__*/_react["default"].createElement(_standHeader.HeaderStandContainer, {
        className: "container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "stand-header-company"
      }, /*#__PURE__*/_react["default"].createElement(_popup["default"], {
        disabled: isDowngraded,
        on: "hover",
        flowing: true,
        hoverable: true,
        position: "bottom left",
        contentstyle: {
          marginTop: "0"
        },
        trigger: /*#__PURE__*/_react["default"].createElement(_standHeader.CompanyLogo, {
          className: "stand-header-logo"
        }, companyClickThroughLogo && !isDowngraded && /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
          to: companyWebSite,
          encrypt: _urlEncodedContentHelper["default"].isUrlEncrypted(this.context),
          displayHref: _urlEncodedContentHelper["default"].isUrlVisible(this.context),
          external: true,
          "data-clickthrough": companyClickThroughLogo,
          className: "link-cursor clickthrough-logo",
          target: "_blank",
          rel: _urlEncodedContentHelper["default"].isUrlNoFollow(this.context) ? "nofollow sponsored" : "",
          track: trackingElement,
          onClick: function onClick() {
            return _this2.handleClick(clickThroughOrigin);
          },
          dataCy: "companyLogoLink"
        }, companyImg), (!companyClickThroughLogo || isDowngraded) && companyImg)
      }, /*#__PURE__*/_react["default"].createElement(_standHeader.CompanyTooltip, {
        className: "stand-title-infos"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "stand-title-infos-content"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "stand-title-name"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "stand-entitled"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_headerStand_stand"
      })), clickThroughOrigin && /*#__PURE__*/_react["default"].createElement("span", {
        className: "stand-name"
      }, /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
        to: companyWebSite,
        encrypt: this.isUrlEncrypted(),
        displayHref: this.isUrlVisible(),
        external: true,
        "data-clickthrough": companyClickThroughLink,
        className: "link-cursor clickthrough-link",
        target: "_blank",
        track: trackingElement,
        onClick: function onClick() {
          return _this2.handleClick(clickThroughOrigin);
        }
      }, headerStandCompanyName))), groupCompanyName && /*#__PURE__*/_react["default"].createElement("div", {
        className: "stand-title-group"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_headerStand_group"
      }), /*#__PURE__*/_react["default"].createElement("span", {
        className: "stand-title-group-content"
      }, groupCompanyName))))), /*#__PURE__*/_react["default"].createElement(_standHeader.CompanyLinks, null, headerStandCompanyPresGallery && headerStandCompanyPresGallery.companyVideo && _constants.ROUTE_STAND_COMPANY !== portal.route && /*#__PURE__*/_react["default"].createElement(_corporateVideo["default"], {
        companyVideo: headerStandCompanyPresGallery.companyVideo,
        globalLinksBaseImg: globalLinksBaseImg
      }), companyLinkCad && companyLinkCad.length && /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
        to: companyLinkCad,
        encrypt: true,
        external: true,
        alt: "cad",
        className: "external link-cursor",
        target: "_blank"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        className: "stand-header-icons",
        src: "".concat(globalLinksBaseImg, "/media/ps/images/common/stand/cad-icon.gif"),
        alt: "cad"
      })))), /*#__PURE__*/_react["default"].createElement(_nav["default"], {
        activeTab: activeTab
      })));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)((0, _reactIntl.injectIntl)(StandHeader));