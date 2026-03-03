"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _context = require("../../../context");
var _index = _interopRequireDefault(require("../index"));
var _initiateState = require("../../../initiateState");
var _supplierDetailsQuote = require("../styles/supplierDetailsQuote");
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
var store = mockStore(_initiateState.InitiateState);
var context = {
  config: {
    portal: portal
  },
  initData: {},
  store: {}
};
var supplier = {
  companyName: "A supplier",
  location: "A city",
  rating: "3",
  reactivity: "24"
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
  var actions = supplierCard.find(_supplierDetailsQuote.Actions);

  /* Le Composant est cosntitué d'un bloc actions. */
  expect(actions).toHaveLength(1);
});