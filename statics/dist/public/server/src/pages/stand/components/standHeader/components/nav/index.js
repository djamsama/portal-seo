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
var _contextComponent = require("../../../../../../components/contextComponent");
var _nav = require("./styles/nav");
var _specificSiteHelper = _interopRequireDefault(require("../../../../../../helpers/specificSiteHelper"));
var _link = require("../../../../../../components/link");
var _withGoogleAnalytics = require("../../../../../../hoc/withGoogleAnalytics");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // $FlowFixMe
var StandHeaderNav = /*#__PURE__*/function (_ContextComponent) {
  function StandHeaderNav(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, StandHeaderNav);
    _this = _callSuper(this, StandHeaderNav, [props, state]);
    _this.toggleNavDropdown = _this.toggleNavDropdown.bind(_this);
    _this.getTabState = _this.getTabState.bind(_this);
    _this.hideTabs = _this.hideTabs.bind(_this);
    _this.state = {
      expanded: false
    };
    return _this;
  }

  /** Gestion de l'ouverture/fermeture du pseudo dropdown menu. */
  (0, _inherits2["default"])(StandHeaderNav, _ContextComponent);
  return (0, _createClass2["default"])(StandHeaderNav, [{
    key: "toggleNavDropdown",
    value: function toggleNavDropdown() {
      var expanded = this.state.expanded;
      this.setState({
        expanded: !expanded
      });
    }

    /**
     * Récupération de l'état d'un tab.
     * @param {*} key la clé du tab
     * @param {*} link le lien
     */
  }, {
    key: "getTabState",
    value: function getTabState(key, link) {
      var activeTab = this.props.activeTab;
      if (activeTab === key) {
        return "active";
      }
      if (!link || link.length === 0) {
        return "disabled";
      }
      return "";
    }

    /**
     * Blur du dropdown menu si le click est en dehors de l'élément et de son contenu.
     * @param {CustomMouseEvent} event l'évènement
     */
  }, {
    key: "hideTabs",
    value: function hideTabs(event) {
      if (event.relatedTarget && event.relatedTarget.className && event.relatedTarget.className.includes("stand-header-tab")) {
        return;
      }
      this.setState({
        expanded: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        intl = _this$props.intl,
        activeTab = _this$props.activeTab,
        googleAnalytics = _this$props.googleAnalytics,
        GOOGLE_ANALYTICS_EVENTS = _this$props.GOOGLE_ANALYTICS_EVENTS;
      var expanded = this.state.expanded;
      var extendedLanguage = this.context.store.Application.extendedLanguage;
      var portal = this.context.config.portal;
      var clickThroughOrigin = this.context.initData.clickThroughOrigin;
      var tabs = [{
        key: "fo_headerStand_company_tab",
        link: this.context.initData.headerStandLinksNavCompanyTab,
        availableForExtendedLang: false,
        visibleIfEmpty: false,
        dataCy: "standHeaderNavCompany"
      }, {
        key: "fo_headerStand_product_tab",
        link: this.context.initData.headerStandLinksNavProducts,
        availableForExtendedLang: true,
        visibleIfEmpty: true,
        trackingLabel: GOOGLE_ANALYTICS_EVENTS.ONGLET_PRODUIT,
        dataCy: "standHeaderNavProducts"
      }, {
        key: "fo_headerStand_catalogs_tab",
        link: this.context.initData.headerStandLinksNavCatalogs,
        availableForExtendedLang: true,
        visibleIfEmpty: true,
        trackingLabel: GOOGLE_ANALYTICS_EVENTS.ONGLET_CATALOGUE,
        dataCy: "standHeaderNavCatalogs"
      }, {
        key: "Fo_Layout_Header_ProjectsTab",
        link: this.context.initData.headerStandLinksNavProjects,
        availableForExtendedLang: false,
        visibleIfEmpty: false,
        hidden: !_specificSiteHelper["default"].isSiteWithProject(portal),
        dataCy: "standHeaderNavProjects"
      }, {
        key: "Fo_Layout_Header_TrendsTab",
        link: this.context.initData.headerStandLinksNavTrends,
        availableForExtendedLang: false,
        visibleIfEmpty: true,
        trackingLabel: GOOGLE_ANALYTICS_EVENTS.ONGLET_NEWS,
        dataCy: "standHeaderNavNT"
      }, {
        key: "fo_headerStand_salon_tab",
        link: this.context.initData.headerStandLinksNavExhibit,
        availableForExtendedLang: false,
        visibleIfEmpty: true,
        trackingLabel: GOOGLE_ANALYTICS_EVENTS.ONGLET_SALON,
        dataCy: "standHeaderNavExhibitions"
      }];
      return /*#__PURE__*/_react["default"].createElement(_nav.HeaderStandNavContainer, null, /*#__PURE__*/_react["default"].createElement(_nav.MobileNavDropdown, {
        as: "button",
        onClick: function onClick() {
          return _this2.toggleNavDropdown();
        },
        className: "btn btn-nav-mobile",
        onBlur: function onBlur(e) {
          return _this2.hideTabs(e);
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: activeTab
      })), /*#__PURE__*/_react["default"].createElement("ul", {
        className: expanded ? "stand-header-nav expanded" : "stand-header-nav"
      }, tabs.filter(function (tab) {
        return (tab.visibleIfEmpty || tab.link && tab.link.length) && (
        // On filtre les tab dont les liens ne sont pas renseignés
        !extendedLanguage || tab.availableForExtendedLang) && (
        // On filtre les tab selon la langue actuelle
        typeof tab.hidden === "undefined" || tab.hidden === false);
      } // Critère d'affichage spécifique
      ).map(function (tab) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: tab.key,
          className: _this2.getTabState(tab.key, tab.link)
        }, /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
          to: tab.link,
          className: "stand-header-tab",
          onClick: function onClick() {
            if (tab.trackingLabel) {
              googleAnalytics.event({
                category: clickThroughOrigin,
                action: GOOGLE_ANALYTICS_EVENTS.CLICK_ONGLET,
                label: tab.trackingLabel
              });
            }
          },
          dataCy: tab.dataCy
        }, intl.formatMessage({
          id: tab.key
        })));
      })));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)((0, _reactIntl.injectIntl)(StandHeaderNav));