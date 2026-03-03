"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _context = require("../../../context");
var _index = _interopRequireDefault(require("../index"));
var _prices = require("../../prices");
var _supplierDetails = require("../styles/supplierDetails");
var _mockAdapter = require("../../../../tools/utils-test/mockAdapter.js");
var _currencyHelper = require("../../../helpers/currencyHelper");
var InitiateState = function InitiateState() {
  var response = {
    Application: {
      localeProp: "en",
      messages: {},
      currentCurrency: _currencyHelper.CurrencyHelper.getDefault("en"),
      rates: 0,
      currencies: undefined
    }
  };
  return response;
};
(0, _mockAdapter.doSomeMock)();
/* eslint-disable no-undef, no-unused-vars */
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
var middlewares = [_reduxThunk.thunk];
var mockStore = (0, _reduxMockStore["default"])(middlewares);
var store = mockStore(InitiateState);
var context = {
  config: {
    portal: portal
  },
  initData: {},
  store: {}
};
var testPrice = {
  formattedPrice: "1 234 $",
  unitLabel: "kg"
};
var supplier = {
  companyName: "A supplier",
  location: "A city",
  rating: "3",
  reactivity: "24",
  productPrice: testPrice
};
/* On vérifie la structure d'une fiche produit. */
test("test supplierDetails structure", function () {
  var supplierCard = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    supplier: supplier
  }))));
  var supplierInfo = supplierCard.find(_supplierDetails.SupplierInfo);
  var priceWrapper = supplierCard.find(_supplierDetails.PriceWrapper);
  var actions = supplierCard.find(_supplierDetails.Actions);

  /* Le Composant est cosntitué d'un bloc info, prix et actions. */
  expect(supplierInfo).toHaveLength(1);
  expect(priceWrapper).toHaveLength(1);
  expect(actions).toHaveLength(1);

  /* Vérification des infos: identité. */
  expect(supplierInfo.find(_supplierDetails.Name).text()).toBe("A supplier");
  expect(supplierInfo.find(_supplierDetails.Location).text()).toBe("A city");

  /* Vérification du prix. */
  var price = priceWrapper.find(_prices.Price);
  expect(price).toHaveLength(1);
});