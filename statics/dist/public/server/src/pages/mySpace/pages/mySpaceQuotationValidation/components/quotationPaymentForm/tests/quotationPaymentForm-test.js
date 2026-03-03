"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _reduxForm = require("redux-form");
var _history = require("history");
var _reactRouterDom = require("react-router-dom");
var _ = _interopRequireDefault(require(".."));
var _context = require("../../../../../../../context");
var _quotationPaymentForm = require("../styles/quotationPaymentForm");
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var InitiateState = function InitiateState() {
  return {};
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
var QuotationPaymentFormContainer = (0, _reduxForm.reduxForm)({
  form: "MySpaceSignInForm"
})(_["default"]);
test("quotationPaymentForm", function () {
  var context = {
    config: {
      portal: portal
    },
    initData: {
      cbAmountLimit: 10000000
    }
  };
  window.HTMLElement.prototype.scrollIntoView = function () {};
  var quoteTransaction = {
    currency: "EUR",
    quoteAmount: "123.356",
    totalAmount: "456.789",
    advance: "12.45"
  };
  var history = (0, _history.createMemoryHistory)();
  var route = "/some-route";
  history.push(route);
  var quotationPaymentForm = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Router, {
    history: history
  }, /*#__PURE__*/_react["default"].createElement(QuotationPaymentFormContainer, {
    quoteTransaction: quoteTransaction
  })))));
  expect(quotationPaymentForm.find(_quotationPaymentForm.QuotationPaymentWrapper)).toHaveLength(1);
  expect(quotationPaymentForm.find(_quotationPaymentForm.QuotationPaymentNotice)).toHaveLength(1);
  expect(quotationPaymentForm.find(_quotationPaymentForm.QuotationPaymentChoice)).toHaveLength(2);
  expect(quotationPaymentForm.find(_quotationPaymentForm.QuotationPaymentAccordion)).toHaveLength(1);
  expect(quotationPaymentForm.find(_quotationPaymentForm.QuotationPaymentWireHidden)).toHaveLength(1);
  expect(quotationPaymentForm.find(_quotationPaymentForm.QuotationPaymentCardHidden)).toHaveLength(1);
  expect(quotationPaymentForm.find(_quotationPaymentForm.QuotationPaymentSeparator)).toHaveLength(1);
  expect(quotationPaymentForm.find(_quotationPaymentForm.QuotationPaymentCardsLogos)).toHaveLength(1);
});
test("quotationPaymentForm no CB", function () {
  var context = {
    config: {
      portal: portal
    },
    initData: {
      cbAmountLimit: 10
    }
  };
  window.HTMLElement.prototype.scrollIntoView = function () {};
  var quoteTransaction = {
    currency: "EUR",
    quoteAmount: "123.356",
    totalAmount: "456.789",
    advance: "12.45"
  };
  var history = (0, _history.createMemoryHistory)();
  var route = "/some-route";
  history.push(route);
  var quotationPaymentForm = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Router, {
    history: history
  }, /*#__PURE__*/_react["default"].createElement(QuotationPaymentFormContainer, {
    quoteTransaction: quoteTransaction
  })))));
  expect(quotationPaymentForm.find(_quotationPaymentForm.QuotationPaymentWrapper)).toHaveLength(1);
  expect(quotationPaymentForm.find(_quotationPaymentForm.QuotationPaymentNotice)).toHaveLength(1);
  expect(quotationPaymentForm.find(_quotationPaymentForm.QuotationPaymentChoice)).toHaveLength(1);
  expect(quotationPaymentForm.find(_quotationPaymentForm.QuotationPaymentAccordion)).toHaveLength(1);
  expect(quotationPaymentForm.find(_quotationPaymentForm.QuotationPaymentWireHidden)).toHaveLength(1);
  expect(quotationPaymentForm.find(_quotationPaymentForm.QuotationPaymentCardHidden)).toHaveLength(0);
  expect(quotationPaymentForm.find(_quotationPaymentForm.QuotationPaymentSeparator)).toHaveLength(1);
  expect(quotationPaymentForm.find(_quotationPaymentForm.QuotationPaymentCardsLogos)).toHaveLength(0);
});
test("test quotationPaymentForm validation ok", function () {
  window.HTMLElement.prototype.scrollIntoView = function () {};
  var spySubmit = sinon.spy();
  var context = {
    config: {
      portal: portal
    },
    initData: {
      cbAmountLimit: 10000000
    }
  };
  var quoteTransaction = {
    currency: "EUR",
    quoteAmount: "123.356",
    totalAmount: "456.789",
    advance: "12.45"
  };
  var history = (0, _history.createMemoryHistory)();
  var route = "/some-route";
  history.push(route);
  var quotationPaymentForm = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Router, {
    history: history
  }, /*#__PURE__*/_react["default"].createElement(QuotationPaymentFormContainer, {
    quoteTransaction: quoteTransaction,
    handleSubmit: spySubmit
  })))));
  var cardName = quotationPaymentForm.find("input[name='payment.cardName']");
  var cardNumber = quotationPaymentForm.find("input[name='payment.cardNumber']");
  var cardExpiration = quotationPaymentForm.find("input[name='payment.cardExpiration']");
  var cardCVV = quotationPaymentForm.find("input[name='payment.cardCVV']");
  cardName.simulate("change", {
    target: {
      value: "nom"
    }
  });
  cardNumber.simulate("change", {
    target: {
      value: "1234567890123456"
    }
  });
  cardExpiration.simulate("change", {
    target: {
      value: "12/25"
    }
  });
  cardCVV.simulate("change", {
    target: {
      value: "123"
    }
  });
  quotationPaymentForm.simulate("submit");
  expect(spySubmit.notCalled).toBe(false);
});
test("test quotationPaymentForm validation ko", function () {
  window.HTMLElement.prototype.scrollIntoView = function () {};
  var spySubmit = sinon.spy();
  var context = {
    config: {
      portal: portal
    },
    initData: {
      cbAmountLimit: 10000000
    }
  };
  var quoteTransaction = {
    currency: "EUR",
    quoteAmount: "123.356",
    totalAmount: "456.789",
    advance: "12.456"
  };
  var history = (0, _history.createMemoryHistory)();
  var route = "/some-route";
  history.push(route);
  var quotationPaymentForm = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Router, {
    history: history
  }, /*#__PURE__*/_react["default"].createElement(QuotationPaymentFormContainer, {
    quoteTransaction: quoteTransaction,
    onSubmit: spySubmit
  })))));
  var cardName = quotationPaymentForm.find("input[name='payment.cardName']");
  var cardNumber = quotationPaymentForm.find("input[name='payment.cardNumber']");
  var cardExpiration = quotationPaymentForm.find("input[name='payment.cardExpiration']");
  var cardCVV = quotationPaymentForm.find("input[name='payment.cardCVV']");
  cardName.simulate("change", {
    target: {
      value: ""
    }
  });
  cardNumber.simulate("change", {
    target: {
      value: "1234567890123456"
    }
  });
  cardExpiration.simulate("change", {
    target: {
      value: "12/25"
    }
  });
  cardCVV.simulate("change", {
    target: {
      value: "123"
    }
  });
  quotationPaymentForm.simulate("submit");
  expect(spySubmit.notCalled).toBe(true);
  cardName.simulate("change", {
    target: {
      value: "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghija"
    }
  });
  quotationPaymentForm.simulate("submit");
  expect(spySubmit.notCalled).toBe(true);
  cardName.simulate("change", {
    target: {
      value: "nom"
    }
  });
  cardNumber.simulate("change", {
    target: {
      value: ""
    }
  });
  quotationPaymentForm.simulate("submit");
  expect(spySubmit.notCalled).toBe(true);
  cardNumber.simulate("change", {
    target: {
      value: "12345678901234567890"
    }
  });
  quotationPaymentForm.simulate("submit");
  expect(spySubmit.notCalled).toBe(true);
  cardNumber.simulate("change", {
    target: {
      value: "1234567890123456"
    }
  });
  cardExpiration.simulate("change", {
    target: {
      value: "1235"
    }
  });
  quotationPaymentForm.simulate("submit");
  expect(spySubmit.notCalled).toBe(true);
  cardExpiration.simulate("change", {
    target: {
      value: "12/25"
    }
  });
  cardCVV.simulate("change", {
    target: {
      value: "1"
    }
  });
  quotationPaymentForm.simulate("submit");
  expect(spySubmit.notCalled).toBe(true);
  cardCVV.simulate("change", {
    target: {
      value: "1234"
    }
  });
  quotationPaymentForm.simulate("submit");
  expect(spySubmit.notCalled).toBe(true);
});