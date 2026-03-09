"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadCurrencySuccess = exports.loadCurrency = exports.getRatesSuccess = exports.getRatesLoad = exports["default"] = exports.currencyError = exports.convertCurrencySuccess = exports.convertCurrency = exports.clickCurrency = exports.changeCurrency = exports.LOAD_CURRENCY_SUCCESS = exports.GET_RATES_SUCCESS = exports.GET_RATES_LOADING = exports.CURRENCY_ERROR = exports.CONVERT_CURRENCY_SUCCESS = exports.CHECK_CURRENCY_SUCCESS = exports.CHANGE_CURRENCY = void 0;
var _currencyService = require("../services/impl/currencyService");
var LOAD_CURRENCY_SUCCESS = exports.LOAD_CURRENCY_SUCCESS = "LOAD_CURRENCY_SUCCESS";
var CHECK_CURRENCY_SUCCESS = exports.CHECK_CURRENCY_SUCCESS = "CHECK_CURRENCY_SUCCESS";
var CONVERT_CURRENCY_SUCCESS = exports.CONVERT_CURRENCY_SUCCESS = "CONVERT_CURRENCY_SUCCESS";
var CURRENCY_ERROR = exports.CURRENCY_ERROR = "CURRENCY_ERROR";
var CHANGE_CURRENCY = exports.CHANGE_CURRENCY = "changeCurrency";
var GET_RATES_SUCCESS = exports.GET_RATES_SUCCESS = "getRatesSuccess";
var GET_RATES_LOADING = exports.GET_RATES_LOADING = "gatRatesLoading";
var getRatesSuccess = exports.getRatesSuccess = function getRatesSuccess(rates) {
  return {
    type: GET_RATES_SUCCESS,
    payload: {
      rates: rates
    }
  };
};
var changeCurrency = exports.changeCurrency = function changeCurrency(currency, rates) {
  return {
    type: CHANGE_CURRENCY,
    payload: {
      currency: currency,
      rates: rates
    }
  };
};
var getRatesLoad = exports.getRatesLoad = function getRatesLoad() {
  return {
    type: GET_RATES_LOADING,
    payload: {
      isLoading: true
    }
  };
};
var clickCurrency = exports.clickCurrency = function clickCurrency(currency, context) {
  return function (dispatch) {
    _currencyService.CurrencyService.instance.setCurrency(currency, context);
    _currencyService.CurrencyService.instance.getRates().then(function (rates) {
      dispatch(changeCurrency(currency, rates));
    });
  };
};
var loadCurrencySuccess = exports.loadCurrencySuccess = function loadCurrencySuccess(data) {
  return {
    type: LOAD_CURRENCY_SUCCESS,
    payload: {
      data: data
    }
  };
};
var currencyError = exports.currencyError = function currencyError(errors) {
  return {
    type: CURRENCY_ERROR,
    payload: {
      errors: errors
    }
  };
};
var convertCurrencySuccess = exports.convertCurrencySuccess = function convertCurrencySuccess(price, currentCurrency, rates) {
  return {
    type: CONVERT_CURRENCY_SUCCESS,
    payload: {
      price: price,
      currentCurrency: currentCurrency,
      rates: rates
    }
  };
};
var loadCurrency = exports.loadCurrency = function loadCurrency() {
  if (false) {
    return function (dispatch) {
      return _currencyService.CurrencyService.instance.getCurrencyList().then(function (response) {
        dispatch(loadCurrencySuccess(response));
      })["catch"](function (error) {
        dispatch(currencyError(error));
      });
    };
  }
  return false;
};
var convertCurrency = exports.convertCurrency = function convertCurrency(price, currentCurrency, rates) {
  return function (dispatch) {
    return dispatch(convertCurrencySuccess(price, currentCurrency, rates));
  };
};
var _default = exports["default"] = {};