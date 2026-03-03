"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _ = _interopRequireDefault(require(".."));
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
var space160 = String.fromCharCode(160);
var space8239 = String.fromCharCode(8239);
test("quoteSummaryNominalAdvanceEn", function () {
  var portal = {
    subDomain: "WORLD_WIDE_WEB",
    site: "AE",
    language: "FR",
    baseUrl: "archiexpo.fr",
    siteLabel: "archiexpo",
    tld: "fr",
    locale: "en",
    domain: "archiexpo.fr"
  };
  var context = {
    config: {
      portal: portal
    },
    initData: {}
  };
  var quoteSummary = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    currency: "EUR",
    quoteAmount: "123.356",
    totalAmount: "1456.789",
    advance: "12.453"
  }))), "en");
  expect(quoteSummary.find("#quoteAmountSummary").text()).toBe("€123.36");
  expect(quoteSummary.find("#totalAmountSummary").text()).toBe("€1,456.79");
  expect(quoteSummary.find("#advanceSummary").text()).toBe("€12.45");
  expect(quoteSummary.find("#amountSummary").text()).toBe("€12.45");
  context.config.portal.locale = "fr";
  var quoteSummaryFr = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    currency: "EUR",
    quoteAmount: "123.356",
    totalAmount: "1456.789",
    advance: "12.453"
  }))), "fr");
  expect(quoteSummaryFr.find("#totalAmountSummary").text()).toBe("1".concat(space8239, "456,79").concat(space160, "\u20AC"));
  expect(quoteSummaryFr.find("#quoteAmountSummary").text()).toBe("123,36".concat(space160, "\u20AC"));
  expect(quoteSummaryFr.find("#advanceSummary").text()).toBe("12,45".concat(space160, "\u20AC"));
});
test("quoteSummaryNominalNoAdvance", function () {
  var portal = {
    subDomain: "WORLD_WIDE_WEB",
    site: "AE",
    language: "FR",
    baseUrl: "archiexpo.fr",
    siteLabel: "archiexpo",
    tld: "fr",
    locale: "en",
    domain: "archiexpo.fr"
  };
  var context = {
    config: {
      portal: portal
    },
    initData: {}
  };
  var quoteSummary = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    currency: "EUR",
    quoteAmount: "123.356",
    totalAmount: "1456.789",
    advance: "1456.789"
  }))), "fr");
  expect(quoteSummary.find("#quoteAmountSummary").text()).toBe("€123.36");
  expect(quoteSummary.find("#totalAmountSummary").text()).toBe("€1,456.79");
  expect(quoteSummary.find("#advanceSummary").exists()).toEqual(false);
  expect(quoteSummary.find("#amountSummary").text()).toBe("€1,456.79");
  context.config.portal.locale = "fr";
  var quoteSummaryFr = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    currency: "EUR",
    quoteAmount: "123.356",
    totalAmount: "1456.789",
    advance: "1456.789"
  }))), "fr");
  expect(quoteSummaryFr.find("#totalAmountSummary").text()).toBe("1".concat(space8239, "456,79").concat(space160, "\u20AC"));
  expect(quoteSummaryFr.find("#quoteAmountSummary").text()).toBe("123,36".concat(space160, "\u20AC"));
  expect(quoteSummaryFr.find("#advanceSummary").exists()).toEqual(false);
  expect(quoteSummaryFr.find("#amountSummary").text()).toBe("1".concat(space8239, "456,79").concat(space160, "\u20AC"));
});