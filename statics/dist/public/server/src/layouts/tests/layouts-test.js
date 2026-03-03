"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _styledComponents = require("styled-components");
var _reactRouter = require("react-router");
var _context = require("../../context");
var _pageLayoutWithRoute = require("../pageLayoutWithRoute");
var _theme = require("../../components/theme");
var _notFoundPage = _interopRequireDefault(require("../../components/notFoundPage"));
var _popinLayout = _interopRequireDefault(require("../popinLayout"));
var _mockAdapter = require("../../../tools/utils-test/mockAdapter.js");
// eslint-disable-next-line no-underscore-dangle
if (typeof window.__preloadData__ === "undefined") {
  // eslint-disable-next-line no-underscore-dangle
  window.__preloadData__ = {
    ajaxCurrencyListUrl: "http://www.archiexpo.fr/ajax/currency/list.json"
  };
}
var t = _theme.theme.ae;
var mockStore = (0, _reduxMockStore["default"])([]);
var InitiateState = function InitiateState() {
  var response = {
    Application: {
      localeProp: "en",
      searchMenuItems: [],
      extendedLanguage: false,
      autocompleteItems: []
    },
    Menu: {
      menuItems: []
    }
  };
  return response;
};
var store = mockStore(InitiateState);
var portal = {
  subDomain: "WORLD_WIDE_WEB",
  site: "AE",
  language: "FR",
  baseUrl: "archiexpo.fr",
  siteLabel: "archiexpo",
  tld: "fr",
  locale: "fr",
  domain: "archiexpo.fr"
};
var portalBanner = {
  HeaderBannerBlocks: [],
  pageLayoutWithRouteScript: "",
  nbBlock: 0
};
var initData = {
  portalBanner: portalBanner,
  autoCompleteUrl: "/ajax/search/autocomplete.json",
  globalLinksBaseCss: "http://static.virtual-expo.com/media/ps/build/css",
  globalLinksBaseImg: "http://img.archiexpo.fr",
  globalLinksBaseJs: "http://static.virtual-expo.com/media/ps/build/js",
  globalLinksBaseStatic: "http://static.virtual-expo.com",
  globalLinksBaseVideo: "http://video.archiexpo.fr",
  globalLinksHome: "http://www.archiexpo.fr",
  globalLinksProjectsRss: "http://projects.archiexpo.fr/rss",
  globalLinksTrendsRss: "http://trends.archiexpo.fr/rss",
  pageLayoutWithRouteHreflangUrls: {
    EN: "http://www.archiexpo.com/myspace/secure/bookmark",
    FR: "http://www.archiexpo.fr/myspace/secure/bookmark"
  },
  pageLayoutWithRouteLinksHomeProductsAjax: "http://www.archiexpo.fr/ajax/menu/products.html",
  pageLayoutWithRouteLinksLanguageLabels: {
    EN: "English",
    FR: "Français"
  },
  pageLayoutWithRouteLinksLanguageUrls: {
    FR: "http://www.archiexpo.fr/myspace/secure/bookmark"
  },
  pageLayoutWithRouteLinksNavExhibitOn: "http://www.archiexpo.fr/exhibit_on_archiexpo/subscription",
  pageLayoutWithRouteLinksNavHome: "http://www.archiexpo.fr/",
  pageLayoutWithRouteLinksNavHomeCatalog: "http://pdf.archiexpo.fr/",
  pageLayoutWithRouteLinksNavHomeEmagUrl: "http://emag.archiexpo.com/list",
  pageLayoutWithRouteLinksNavHomeProjects: "http://projects.archiexpo.fr/",
  pageLayoutWithRouteLinksNavHomeTrends: "http://trends.archiexpo.fr/",
  headerHreflangUrls: {},
  headerLinksHomeProductsAjax: "http://www.archiexpo.fr/ajax/menu/products.html",
  headerLinksLanguageLabels: {},
  headerLinksLanguageUrls: {},
  headerLinksNavcontactUs: "https://www.archiexpo.fr/contact_us",
  headerLinksNavHome: "http://www.archiexpo.fr/",
  headerLinksNavHomeCatalog: "http://pdf.archiexpo.fr/",
  headerLinksNavHomeEmagUrl: "http://emag.archiexpo.com/list",
  headerLinksNavHomeProjects: "http://projects.archiexpo.fr/",
  headerLinksNavHomeTrends: "http://trends.archiexpo.fr/",
  footerLinksAboutIndex: "http://www.archiexpo.fr/about.html",
  footerLinksCGU: "http://www.archiexpo.fr/cgu.html",
  footerLinksCompanyList: "http://www.archiexpo.fr/soc-A.html",
  footerLinksContactUs: "https://www.archiexpo.fr/contact_us",
  footerLinksExhibitorAccount: "https://secure.archiexpo.com/statsco-backoffice/views/synthesis.xhtml?lang=fr",
  footerLinksMyspace: "http://www.archiexpo.fr/myspace/secure/account",
  footerLinksPrivacy: "http://www.archiexpo.fr/privacy.html",
  footerCountries: [{
    id: 76,
    label: "France"
  }, {
    label: "Espagne"
  }],
  footerLinksSubscribeNewsletter: "http://www.archiexpo.fr/mailing/subscribe.html",
  footerLinksTermsIndex: "http://www.archiexpo.fr/terms.html",
  footerLinksVirtualExpo: "http://www.virtual-expo.com/",
  icp: "&#37122;ICP&#22791;16017613&#21495;-1",
  icpUrl: "http://www.miibeian.gov.cn/",
  homeDefaultMenu: "PRODUCTS",
  metaObject: {
    title: "un title"
  },
  homeMenu: [{
    id: "PRODUCTS",
    imageUrl: null,
    label: "Produits",
    linkUrl: "http://www.archiexpo.fr/",
    subMenuItems: []
  }, {
    id: "CATALOGS",
    imageUrl: null,
    label: "Catalogues",
    linkUrl: "http://pdf.archiexpo.fr/",
    subMenuItems: null
  }]
};
var context = {
  config: {
    portal: portal
  },
  initData: initData,
  cookies: {
    addChangeListener: function addChangeListener() {
      return true;
    },
    getAll: function getAll() {
      return true;
    },
    get: function get() {
      return true;
    },
    set: function set() {
      return true;
    },
    removeChangeListener: function removeChangeListener() {
      return true;
    }
  }
};
var routes = [{
  path: "/:lang?/notFound",
  component: _notFoundPage["default"],
  loadStateData: function loadStateData() {},
  loadData: function loadData() {},
  loadConfig: function loadConfig() {}
}];
var mockPushedCompagny = require("../../../tools/utils-test/assets/header/pushedCompanyList.json");
var mockCurrency = require("../../../tools/utils-test/assets/header/currencyList.json");
var mockCheckAuth = require("../../../tools/utils-test/assets/myspace/checkAuth.json");
_mockAdapter.mock.onGet("/ajax/pushed-company/list.json").reply(200, mockPushedCompagny);
_mockAdapter.mock.onGet("http://www.archiexpo.fr/ajax/currency/list.json").reply(200, mockCurrency);
(0, _mockAdapter.doMockSocial)();
_mockAdapter.mock.onGet(/^\/ve-front-sso\/rest\/v1\.2\/external\/checkAuth\//).reply(200, mockCheckAuth);

/**
 *  @jest-environment node
 */
test("testPageLayoutWithRoute", function () {
  var searchMenuItems = [{
    menuLabelKey: "Fo_Layout_PageLayoutWithRoute_ProductsTab",
    mode: "products",
    placeHolderLabelKey: "Foj_PageLayoutWithRoute_Search_ProductsCount",
    selected: true
  }, {
    menuLabelKey: "Fo_Layout_PageLayoutWithRoute_CatalogsTab",
    mode: "catalogs",
    placeHolderLabelKey: "Foj_PageLayoutWithRoute_Search_CatalogsCount",
    selected: false
  }, {
    menuLabelKey: "Fo_Layout_PageLayoutWithRoute_ProjectsTab",
    mode: "projects",
    placeHolderLabelKey: "Foj_PageLayoutWithRoute_Search_ProjectCount",
    selected: false
  }, {
    menuLabelKey: "Fo_Layout_PageLayoutWithRoute_TrendsTab",
    mode: "trends",
    placeHolderLabelKey: "Foj_PageLayoutWithRoute_Search_TrendsCount",
    selected: false
  }];

  /* eslint-disable no-undef, no-unused-vars */
  /**
   *  @jest-environment node
   */
  var pageLayoutWithRoute = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(_reactRouter.StaticRouter, {
    context: context,
    location: "/notFound"
  }, /*#__PURE__*/_react["default"].createElement(_pageLayoutWithRoute.PageLayoutWithRoute, {
    routes: routes,
    locale: "EN",
    onChangeSearchMode: function onChangeSearchMode() {},
    searchMode: {
      placeHolderLabelKey: "placeHolderLabelKey",
      mode: "PRODUCTS"
    },
    searchMenuItems: searchMenuItems,
    currentCurrency: "EUR"
  }))))));
  expect(pageLayoutWithRoute.find(_notFoundPage["default"]).exists()).toEqual(true);
  expect(pageLayoutWithRoute.find(_styledComponents.ThemeProvider).exists()).toEqual(true);
});
/**
 *  @jest-environment node
 */
test("test PopInLayout", function () {
  /* eslint-disable no-undef, no-unused-vars */
  var popInLayout = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_popinLayout["default"], null, /*#__PURE__*/_react["default"].createElement("p", null, "Test")));
  expect(popInLayout.find("div").exists()).toEqual(true);
});