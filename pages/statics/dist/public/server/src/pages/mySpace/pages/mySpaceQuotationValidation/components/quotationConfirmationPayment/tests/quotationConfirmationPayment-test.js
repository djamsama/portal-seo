"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _ = _interopRequireDefault(require(".."));
var _quotationConfirmationPayment = require("../styles/quotationConfirmationPayment");
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
test("quotationConfirmationPaymentNoAdvance", function () {
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
  var quoteSummary = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    leadsQuoteInformations: leadsQuoteInformations
  }))), "fr");
  expect(quoteSummary.find(_quotationConfirmationPayment.CongratulationValidationContentFooter)).toHaveLength(1);
  expect(quoteSummary.find(_quotationConfirmationPayment.CongratulationValidationContentFooter).find("li")).toHaveLength(2);
});
test("quotationConfirmationPaymentCardAdvance", function () {
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
  var leadsQuoteInformationsAdvance = {
    leadsMyspaceUrl: "",
    quoteTransactionDTO: {
      totalAmount: 1456.789,
      advance: 10,
      currency: "EUR"
    }
  };
  var quoteSummary = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    leadsQuoteInformations: leadsQuoteInformationsAdvance
  }))), "fr");
  expect(quoteSummary.find(_quotationConfirmationPayment.CongratulationValidationContentFooter)).toHaveLength(1);
  expect(quoteSummary.find(_quotationConfirmationPayment.CongratulationValidationContentFooter).find("li")).toHaveLength(3);
});
test("quotationConfirmationPaymentWireAdvance", function () {
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
  var nowExpirationDate = Date.now();
  var leadsQuoteInformationsAdvance = {
    leadsMyspaceUrl: "",
    quoteTransactionDTO: {
      totalAmount: 1456.789,
      advance: 10,
      currency: "EUR"
    }
  };
  var bankwire = {
    iban: "12345678984560",
    reference: "123456780",
    expirationDate: nowExpirationDate
  };
  var quoteSummary = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    leadsQuoteInformations: leadsQuoteInformationsAdvance,
    bankwire: bankwire
  }))), "fr");
  expect(quoteSummary.find(_quotationConfirmationPayment.CongratulationValidationContentBody)).toHaveLength(1);
  expect(quoteSummary.find(_quotationConfirmationPayment.CongratulationValidationContentBody).find("rassurance3")).toHaveLength(0);
});
test("quotationConfirmationPaymentWireNoAdvance", function () {
  var nowExpirationDate = Date.now();
  var leadsQuoteInformations = {
    leadsMyspaceUrl: "url",
    quoteTransactionDTO: {
      totalAmount: 1456.789,
      advance: 1456.789,
      currency: "EUR"
    }
  };
  var bankwire = {
    iban: "12345678984560",
    reference: "123456780",
    expirationDate: nowExpirationDate
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
  var quoteSummary = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    leadsQuoteInformations: leadsQuoteInformations,
    bankwire: bankwire
  }))), "fr");
  expect(quoteSummary.find(_quotationConfirmationPayment.CongratulationValidationContentBody)).toHaveLength(1);
  expect(quoteSummary.find(_quotationConfirmationPayment.CongratulationValidationContentBody).find("rassurance3")).toHaveLength(0);
});