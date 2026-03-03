"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _reactRedux = require("react-redux");
var _context = require("../../../context");
var _initiateState = require("../../../initiateState");
var _index = _interopRequireDefault(require("../index"));
var _newProducts = _interopRequireDefault(require("../components/newProducts"));
var _newProjects = _interopRequireDefault(require("../components/newProjects"));
var _newTrends = _interopRequireDefault(require("../components/newTrends"));
var _emagazines = _interopRequireDefault(require("../components/emagazines"));
var _mockAdapter = require("../../../../tools/utils-test/mockAdapter.js");
var _mockContext = require("../../../../tools/utils-test/mockContext");
/* eslint-disable no-undef, no-unused-vars */
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var store = mockStore(_initiateState.InitiateState);
store.getState = function () {
  return {
    Application: {
      extendedLanguage: false
    }
  };
};
var mockEmptyResponse = {
  responseStatus: 200,
  content: [],
  errors: [],
  functionalErrors: []
};
var mockProduct = require("../../../../tools/utils-test/assets/home/newProducts1.json");
var mockProject = require("../../../../tools/utils-test/assets/home/newProjects1.json");
var mockTrend = require("../../../../tools/utils-test/assets/home/newTrends1.json");
var mockEmags = require("../../../../tools/utils-test/assets/home/emagItems.json");
/** * mock recommendation */
(0, _mockAdapter.doSomeMock)();
/** mock trends */
var trendUri = "/ajax/home/new-trends/";
var trendUrl = new RegExp("".concat(trendUri, "/*"));
_mockAdapter.mock.onGet(trendUrl).reply(200, mockTrend);
var pushedTrendUri = "/ajax/home/pushed-trends/";
var pushedTrendUrl = new RegExp("$pushedTrendUri}/*");
_mockAdapter.mock.onGet(pushedTrendUrl).reply(200, mockEmptyResponse);

/** mock produits */
var productsUri = "/ajax/home/new-products/";
var productsUrl = new RegExp("".concat(trendUri, "/*"));
_mockAdapter.mock.onGet(productsUrl).reply(200, mockTrend);
var pushedProductsUri = "/ajax/home/pushed-products/";
var pushedProductsUrl = new RegExp("$pushedProductsUri}/*");
_mockAdapter.mock.onGet(pushedProductsUrl).reply(200, mockEmptyResponse);

/** mock projet */
var projectsUri = "/ajax/home/new-projects/";
var projectsUrl = new RegExp("".concat(projectsUri, "/*"));
_mockAdapter.mock.onGet(projectsUrl).reply(200, mockProject);
var pushedProjectsUri = "/ajax/home/pushed-products/";
var pushedProjectsUrl = new RegExp("".concat(pushedProjectsUri, "/*"));
_mockAdapter.mock.onGet(pushedProjectsUrl).reply(200, mockEmptyResponse);
_mockContext.context.store.Application = {
  extendedLanguage: false
};
var innerWidthInitial = global.window.innerWidth;
beforeEach(function () {
  global.window.innerWidth = 1040;
});
afterEach(function () {
  global.window.innerWidth = innerWidthInitial;
});
test("home", function () {
  var home = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: _mockContext.context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    getEmags: function getEmags() {},
    getItems: function getItems() {
      return mockProduct;
    }
  }))));

  /**  Temporairement desactivé le temps d'activer le SSR de loadable component */
  // expect(home.find(NewProducts).exists()).toEqual(true);
  // expect(home.find(NewProjects).exists()).toEqual(true);
  // expect(home.find(NewTrends).exists()).toEqual(true);
  // expect(home.find(Emagazines).exists()).toEqual(true);
});