"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = _interopRequireDefault(require("redux-thunk"));
var _styledComponents = require("styled-components");
var _context = require("../../../context");
var _index = _interopRequireDefault(require("../index"));
var _initiateState = require("../../../initiateState");
var _theme = require("../../theme");
var _supplierDetails = require("../styles/supplierDetails");
/* eslint-disable no-undef, no-unused-vars */
var t = _theme.theme.di;
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
var mockStore = (0, _reduxMockStore["default"])([]);
var store = mockStore(_initiateState.InitiateState);
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
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    supplier: supplier
  })))));
  var supplierInfo = supplierCard.find(_supplierDetails.SupplierInfo);
  var actions = supplierCard.find(_supplierDetails.Actions);

  /* Le Composant est cosntitué d'un bloc info, prix et actions. */
  expect(supplierInfo).toHaveLength(1);
  expect(actions).toHaveLength(1);

  /* Vérification des infos: identité. */
  expect(supplierInfo.find(_supplierDetails.Name).text()).toBe("A supplier");
});