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
var _reactLazyload = _interopRequireDefault(require("react-lazyload"));
var _newProjects = _interopRequireDefault(require("./components/newProjects"));
var _newTrends = _interopRequireDefault(require("./components/newTrends"));
var _emagazines = _interopRequireDefault(require("./components/emagazines"));
var _buyingGuide = _interopRequireDefault(require("./components/buyingGuide"));
var _newProducts = _interopRequireDefault(require("./components/newProducts"));
var _contextComponent = require("../../components/contextComponent");
var _pageLayout = _interopRequireDefault(require("../../layouts/pageLayout"));
var _menuHome = require("../../components/menu/menuHome");
var _specificSiteHelper = _interopRequireDefault(require("../../helpers/specificSiteHelper"));
var _withTracking = require("../../hoc/withTracking");
var _histoRecoContainer = _interopRequireDefault(require("../../components/histoReco/container/histoRecoContainer"));
var _home = require("./styles/home");
var _exhibitBanner = _interopRequireDefault(require("./components/exhibitBanner"));
var _homepageStats = _interopRequireDefault(require("./components/homepageStats"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var HomeComponent = /*#__PURE__*/function (_ContextComponent) {
  function HomeComponent(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, HomeComponent);
    _this = _callSuper(this, HomeComponent, [props, context]);
    if (!_this.pageTypeId && context && context.initData && context.initData.pageTypeId) {
      _this.pageTypeId = context.initData.pageTypeId;
    }
    _this.state = {
      tracked: false
    };
    return _this;
  }
  (0, _inherits2["default"])(HomeComponent, _ContextComponent);
  return (0, _createClass2["default"])(HomeComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var language = this.context.config.portal.language;
      var companyId = this.context.initData.companyId;
      var _this$props = this.props,
        getViewedPageId = _this$props.getViewedPageId,
        viewedPageId = _this$props.viewedPageId,
        isPricesAvailable = _this$props.isPricesAvailable;
      if (this.pageTypeId) {
        if (!viewedPageId) {
          getViewedPageId({
            pageTypeId: this.pageTypeId,
            elementList: []
          }, language.toLowerCase());
        }
      }
      if (companyId) {
        isPricesAvailable(companyId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var portal = this.context.config.portal;
      var _this$context$initDat = this.context.initData,
        displayBuyingGuides = _this$context$initDat.displayBuyingGuides,
        footerLinksSellProducts = _this$context$initDat.footerLinksSellProducts;
      var _this$props2 = this.props,
        getItems = _this$props2.getItems,
        getEmags = _this$props2.getEmags,
        getGuides = _this$props2.getGuides,
        guides = _this$props2.guides,
        products = _this$props2.products,
        projects = _this$props2.projects,
        trends = _this$props2.trends,
        emags = _this$props2.emags,
        viewedPageId = _this$props2.viewedPageId;
      var isExtendedLanguage = this.context.store.Application.extendedLanguage;
      // $FlowFixMe la props est injectée par le hoc et flow ne le sait pas
      var newProjectsComponent = _specificSiteHelper["default"].isSiteWithProject(portal, isExtendedLanguage) ?
      /*#__PURE__*/
      /* $FlowFixMe */
      _react["default"].createElement(_newProjects["default"], {
        getItems: getItems,
        projects: projects,
        viewedPageId: viewedPageId
      }) : "";
      var newEmagsComponent = _specificSiteHelper["default"].isSiteWithEmags(portal) ? /*#__PURE__*/_react["default"].createElement(_emagazines["default"], {
        getEmags: getEmags,
        emags: emags,
        viewedPageId: viewedPageId
      }) : /*#__PURE__*/_react["default"].createElement(_home.EmptyEmag, null);
      var newTrendsComponent = _specificSiteHelper["default"].isSiteWithTrends(isExtendedLanguage) ? /*#__PURE__*/_react["default"].createElement(_newTrends["default"], {
        getItems: getItems,
        trends: trends,
        viewedPageId: viewedPageId
      }) : "";
      return /*#__PURE__*/_react["default"].createElement(_pageLayout["default"], null, /*#__PURE__*/_react["default"].createElement(_homepageStats["default"], {
        site: portal.site.toLowerCase()
      }), /*#__PURE__*/_react["default"].createElement(_menuHome.MenuHome, null), /*#__PURE__*/_react["default"].createElement(_newProducts["default"], {
        getItems: getItems,
        products: products,
        viewedPageId: viewedPageId
      }), newProjectsComponent, newTrendsComponent, displayBuyingGuides && /*#__PURE__*/_react["default"].createElement(_buyingGuide["default"], {
        getGuides: getGuides,
        guides: guides,
        viewedPageId: viewedPageId
      }), /*#__PURE__*/_react["default"].createElement(_exhibitBanner["default"], {
        linksSellProducts: footerLinksSellProducts,
        encrypt: true
      }), newEmagsComponent, /*#__PURE__*/_react["default"].createElement(_reactLazyload["default"], {
        offset: 200,
        once: true
      }, /*#__PURE__*/_react["default"].createElement(_home.HistoWrapper, null, /*#__PURE__*/_react["default"].createElement(_histoRecoContainer["default"], {
        category: "HomePage"
      }))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withTracking.WithTracking)(HomeComponent);