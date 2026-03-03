"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _veDesignSystem = require("ve-design-system");
var _ = _interopRequireDefault(require(".."));
var _quotationConfirmation = require("../styles/quotationConfirmation");
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
test("quotationConfirmation", function () {
  var leadsQuoteInformations = {
    leadsMyspaceUrl: "url",
    quoteTransactionDTO: {
      totalAmount: 1456.789,
      advance: 1456.789,
      currency: "EUR"
    }
  };
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
  var quoteConfirmation = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    leadsQuoteInformations: leadsQuoteInformations
  }))), "fr");
  expect(quoteConfirmation.find(_quotationConfirmation.ConfirmationValidationContentHeader)).toHaveLength(1);
  expect(quoteConfirmation.find(_veDesignSystem.Button)).toHaveLength(1);
  expect(quoteConfirmation.find(_quotationConfirmation.ConfirmationValidationContentFooter)).toHaveLength(1);
  expect(quoteConfirmation.find(_quotationConfirmation.ConfirmationValidationContentFooter).find("li")).toHaveLength(3);
});