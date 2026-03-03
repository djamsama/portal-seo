"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _ = _interopRequireDefault(require(".."));
var _quoteSummary = _interopRequireDefault(require("../../quoteSummary"));
var _context = require("../../../../../../../context");
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var InitiateState = function InitiateState() {
  var response = {
    Application: {},
    Account: {
      elements: []
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
var context = {
  config: {
    portal: portal
  },
  initData: {}
};
test("quoteInformationAdvance", function () {
  var quoteInformation = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    currency: "EUR",
    quoteAmount: "123.356",
    totalAmount: "456.789",
    advance: "12.456"
  }))));
  expect(quoteInformation.find(_quoteSummary["default"])).toHaveLength(1);
});
test("quoteInformationNoSummary", function () {
  var quoteInformation = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    currency: "EUR",
    quoteAmount: "123.356",
    totalAmount: 0,
    advance: "12.456"
  }))));
  expect(quoteInformation.find(_quoteSummary["default"])).toHaveLength(0);
});