"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _styledComponents = require("styled-components");
var _reduxThunk = require("redux-thunk");
var _context = require("../../../../../context");
var _theme = require("../../../../theme");
var _banners = _interopRequireDefault(require("../../../../banners"));
var _searchBox = _interopRequireDefault(require("../../searchBox"));
var _index = _interopRequireDefault(require("../index"));
var _logo = _interopRequireDefault(require("../../logo"));
var _adblockPixel = _interopRequireDefault(require("../../../../adblockPixel"));
var _brandsService = _interopRequireDefault(require("../../../../brands/services/brandsService.js"));
var _mockAdapter = require("../../../../../../tools/utils-test/mockAdapter.js");
var _mockContext = require("../../../../../../tools/utils-test/mockContext");
var _mockMenu = require("../../../../../../tools/utils-test/mockMenu");
// eslint-disable-next-line import/no-named-as-default

(0, _mockAdapter.doSomeMock)();
// eslint-disable-next-line no-underscore-dangle
if (typeof window.__preloadData__ === "undefined") {
  // eslint-disable-next-line no-underscore-dangle
  window.__preloadData__ = {
    ajaxCurrencyListUrl: "http://www.archiexpo.fr/ajax/currency/list.json"
  };
}
var t = _theme.theme.ae;
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var state = {
  Menu: _mockMenu.menu,
  Application: {
    currentCurrency: "fr"
  }
};
var store = mockStore(state);
var MockAdapter = require("axios-mock-adapter");
var brandsRequest = new _brandsService["default"](_mockContext.context);
var mockRequest = new MockAdapter(brandsRequest.request);
var mockPushedCompagny = require("../../../../../../tools/utils-test/assets/header/pushedCompanyList.json");
var mockCurrency = require("../../../../../../tools/utils-test/assets/header/currencyList.json");
var mockCheckAuth = require("../../../../../../tools/utils-test/assets/myspace/checkAuth.json");
mockRequest.onAny("/ajax/pushed-company/list.json").reply(200, mockPushedCompagny);
_mockAdapter.mock.onAny("http://www.archiexpo.fr/ajax/currency/list.json").reply(200, mockCurrency);
_mockAdapter.mock.onAny(/^\/ve-front-sso\/rest\/v1\.1\/external\/checkAuth\//).reply(200, mockCheckAuth);
test("header", function () {
  var searchMenuItems = [{
    menuLabelKey: "Fo_Layout_Header_ProductsTab",
    mode: "products",
    placeHolderLabelKey: "Foj_Header_Search_ProductsCount",
    selected: true
  }, {
    menuLabelKey: "Fo_Layout_Header_CatalogsTab",
    mode: "catalogs",
    placeHolderLabelKey: "Foj_Header_Search_CatalogsCount",
    selected: false
  }, {
    menuLabelKey: "Fo_Layout_Header_ProjectsTab",
    mode: "projects",
    placeHolderLabelKey: "Foj_Header_Search_ProjectCount",
    selected: false
  }, {
    menuLabelKey: "Fo_Layout_Header_TrendsTab",
    mode: "trends",
    placeHolderLabelKey: "Foj_Header_Search_TrendsCount",
    selected: false
  }];

  /* eslint-disable no-undef, no-unused-vars */
  var header = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: _mockContext.context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    locale: "EN",
    onChangeSearchMode: function onChangeSearchMode() {},
    searchMode: {
      placeHolderLabelKey: "placeHolderLabelKey",
      mode: "PRODUCTS",
      menuLabelKey: "testKey"
    },
    searchMenuItems: searchMenuItems,
    Menu: _mockMenu.menu,
    bannerEnabled: true
  })))));

  // Filtre d'exclusion adblock
  expect(header.find(_adblockPixel["default"])).toHaveLength(1);
  expect(header.find(_searchBox["default"]).exists()).toEqual(true);
  expect(header.find(_logo["default"]).exists()).toEqual(true);
  expect(header.find(_banners["default"]).exists()).toEqual(true);
});