"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InitiateState = void 0;
var _currencyHelper = require("./helpers/currencyHelper");
var InitiateState = exports.InitiateState = function InitiateState() {
  var response = {};
  if (typeof window !== "undefined" && window.__preloadState__) {
    response = window.__preloadState__;
    response.Application.currentCurrency = _currencyHelper.CurrencyHelper.getDefault(response.Application.localeProp);
    response.Application.rates = 0;
    response.Application.currencies = [];
  } else {
    response = {
      Application: {
        isLoading: false,
        localeProp: "en",
        messages: {},
        location: null,
        searchMenuItems: [],
        extendedLanguage: false,
        autocompleteItems: [],
        currentCurrency: _currencyHelper.CurrencyHelper.getDefault("en"),
        rates: 0,
        currencies: [],
        catalogs: {}
      },
      Tracking: {
        viewedPagedId: null,
        elements: []
      }
    };
  }
  return response;
};