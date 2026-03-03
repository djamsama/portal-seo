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
var _reactHelmet = require("react-helmet");
var _reactIntl = require("react-intl");
var _constants = require("../../commons/constants");
var _contextComponent = require("../contextComponent");
var _specificMetaHelper = _interopRequireDefault(require("../../helpers/specificMetaHelper"));
var _specificRouteHelper = _interopRequireDefault(require("../../helpers/specificRouteHelper"));
var _specificSiteHelper = _interopRequireDefault(require("../../helpers/specificSiteHelper"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable no-restricted-syntax */ /* eslint-disable guard-for-in */
/**
 * Ajout dans le header des balises title, links et meta
 *
 */
var VeHelmet = /*#__PURE__*/function (_ContextComponent) {
  function VeHelmet() {
    (0, _classCallCheck2["default"])(this, VeHelmet);
    return _callSuper(this, VeHelmet, arguments);
  }
  (0, _inherits2["default"])(VeHelmet, _ContextComponent);
  return (0, _createClass2["default"])(VeHelmet, [{
    key: "renderAlternateRssLinks",
    value:
    /**
     *  Ajout des links rss
     *
     * @param {*} globalLinksTrendsRss
     * @param {*} globalLinksProjectsRss
     */
    function renderAlternateRssLinks(globalLinksTrendsRss, globalLinksProjectsRss) {
      var intl = this.props.intl;
      var portal = this.context.config.portal;
      var links = [];
      if (_specificRouteHelper["default"].isSiteWithHeaderRssLink(this.context)) {
        var title = intl ? "RSS -".concat(intl.formatMessage({
          id: "global_casedsitelabel"
        }), " -").concat(intl.formatMessage({
          id: "Fo_Layout_Header_TrendsTab"
        })) : "";
        links.push(/*#__PURE__*/_react["default"].createElement("link", {
          key: "linkTrendsRss",
          href: globalLinksTrendsRss,
          rel: "alternate",
          type: "application/rss+xml",
          title: title
        }));
        if (_specificSiteHelper["default"].isSiteWithHeaderProjectRssLink(portal)) {
          var titleProject = intl ? "RSS -".concat(intl.formatMessage({
            id: "global_casedsitelabel"
          }), " -").concat(intl.formatMessage({
            id: "Fo_Layout_Header_ProjectsTab"
          })) : "";
          links.push(/*#__PURE__*/_react["default"].createElement("link", {
            key: "linkProjectRss",
            href: globalLinksProjectsRss,
            rel: "alternate",
            type: "application/rss+xml",
            title: titleProject
          }));
        }
      }
      return links;
    }

    /**
     * Ajout des autres balises links
     *
     * @param {*} globalLinksBaseImg
     */
  }, {
    key: "render",
    value: function render() {
      var _this$context$initDat = this.context.initData,
        metaObject = _this$context$initDat.metaObject,
        headerHreflangUrls = _this$context$initDat.headerHreflangUrls,
        globalLinksTrendsRss = _this$context$initDat.globalLinksTrendsRss,
        globalLinksProjectsRss = _this$context$initDat.globalLinksProjectsRss,
        globalLinksBaseImg = _this$context$initDat.globalLinksBaseImg,
        canonicalUrlEmag = _this$context$initDat.canonicalUrlEmag,
        canonicalUrl = _this$context$initDat.canonicalUrl;
      var htmlAttributes = {};
      if (this.context && this.context.config && this.context.config.portal && this.context.config.portal.locale) {
        htmlAttributes.lang = this.context.config.portal.locale;
      }
      return /*#__PURE__*/_react["default"].createElement(_reactHelmet.Helmet, {
        htmlAttributes: htmlAttributes
      }, /*#__PURE__*/_react["default"].createElement("meta", {
        charset: "UTF-8"
      }), /*#__PURE__*/_react["default"].createElement("title", null, metaObject.title), /*#__PURE__*/_react["default"].createElement("meta", {
        name: "description",
        content: metaObject.description
      }), /*#__PURE__*/_react["default"].createElement("meta", {
        name: "keywords",
        content: metaObject.keywords
      }), _specificMetaHelper["default"].getSpecificMeta(this.context.initData), globalLinksBaseImg && VeHelmet.preConnectLinks(globalLinksBaseImg), metaObject.msvalidate01 && /*#__PURE__*/_react["default"].createElement("meta", {
        name: _constants.MS_VALIDATE_01,
        content: metaObject.msvalidate01
      }), metaObject.googleSiteVerification && /*#__PURE__*/_react["default"].createElement("meta", {
        name: _constants.GOOGLE_SITE_VERIFICATION,
        content: metaObject.googleSiteVerification
      }), metaObject.baiduSiteVerification && /*#__PURE__*/_react["default"].createElement("meta", {
        name: _constants.BAIDU_SITE_VERIFICATION,
        content: metaObject.baiduSiteVerification
      }), metaObject.robots && /*#__PURE__*/_react["default"].createElement("meta", {
        name: "robots",
        content: metaObject.robots
      }), /*#__PURE__*/_react["default"].createElement("meta", {
        name: "viewport",
        content: "initial-scale=1, width=device-width"
      }), /*#__PURE__*/_react["default"].createElement("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge"
      }), metaObject.robots && /*#__PURE__*/_react["default"].createElement("meta", {
        name: "robots",
        content: metaObject.robots
      }), headerHreflangUrls && VeHelmet.renderAlternateLanguageLinks(headerHreflangUrls), (globalLinksTrendsRss || globalLinksProjectsRss) && this.renderAlternateRssLinks(globalLinksTrendsRss, globalLinksProjectsRss), VeHelmet.renderCanonical(canonicalUrlEmag, canonicalUrl), globalLinksBaseImg && VeHelmet.renderOthersLink(globalLinksBaseImg));
    }
  }], [{
    key: "renderCanonical",
    value:
    /**
     *  Ajout des links canonical
     *
     * @param {*} canonicalUrlEmag
     * @param {*} canonicalUrl
     */
    function renderCanonical(canonicalUrlEmag, canonicalUrl) {
      var links = [];
      if (canonicalUrl) {
        // eslint-disable-next-line react/no-string-refs
        links.push(/*#__PURE__*/_react["default"].createElement("link", {
          key: "canonicalUrl",
          ref: "canonical",
          href: canonicalUrl
        }));
      }
      if (canonicalUrlEmag) {
        // eslint-disable-next-line react/no-string-refs
        links.push(/*#__PURE__*/_react["default"].createElement("link", {
          key: "canonicalUrlEmag",
          ref: "canonical",
          href: canonicalUrlEmag
        }));
      }
      return links;
    }

    /**
     * Initialisation des routes externes.
     *
     * @param {*} globalLinksBaseImg
     */
  }, {
    key: "preConnectLinks",
    value: function preConnectLinks(globalLinksBaseImg) {
      return [/*#__PURE__*/_react["default"].createElement("link", {
        key: "siteImgBaseUrl",
        rel: "preconnect",
        href: globalLinksBaseImg
      }), /*#__PURE__*/_react["default"].createElement("link", {
        key: "imgBaseUrl",
        rel: "preconnect",
        href: _constants.IMG_ROOT_URL
      }), /*#__PURE__*/_react["default"].createElement("link", {
        key: "staticBaseUrl",
        rel: "preconnect",
        href: _constants.STATIC_ROOT_URL
      })];
    }

    /**
     * Ajout des links hreflang
     *
     * @param {*} headerHreflangUrls
     */
  }, {
    key: "renderAlternateLanguageLinks",
    value: function renderAlternateLanguageLinks(headerHreflangUrls) {
      var links = [];
      // eslint-disable-next-line no-unused-vars
      for (var key in headerHreflangUrls) {
        links.push(/*#__PURE__*/_react["default"].createElement("link", {
          key: "alternate".concat(key),
          rel: "alternate",
          hrefLang: key.toLowerCase(),
          href: headerHreflangUrls[key]
        }));
      }
      return links;
    }
  }, {
    key: "renderOthersLink",
    value: function renderOthersLink(globalLinksBaseImg) {
      var links = [/*#__PURE__*/_react["default"].createElement("link", {
        key: "othersLink1",
        href: "".concat(globalLinksBaseImg, "/favicons/apple-touch-icon.png"),
        rel: "apple-touch-icon"
      }), /*#__PURE__*/_react["default"].createElement("link", {
        key: "othersLink2",
        href: "".concat(globalLinksBaseImg, "/favicons/favicon.ico"),
        rel: "icon",
        type: "image/x-icon"
      })];
      return links;
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(VeHelmet);