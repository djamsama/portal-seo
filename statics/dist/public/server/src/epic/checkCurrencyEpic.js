"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkCurrencyEpic = void 0;
var _operators = require("rxjs/operators");
var _rxjs = require("rxjs");
var _reduxObservable = require("redux-observable");
var _currencyActions = require("../actions/currencyActions");
var _currencyService = require("../services/impl/currencyService");
// eslint-disable-next-line no-unused-vars
var checkCurrencyEpic = exports.checkCurrencyEpic = function checkCurrencyEpic(action$, store) {
  return action$.pipe((0, _reduxObservable.ofType)(_currencyActions.GET_RATES_LOADING), (0, _operators.map)(function /* action: CurrencyAction */ () {
    return (0, _currencyActions.getRatesLoad)();
  }), (0, _operators.mergeMap)(function /* action: CurrencyAction */ () {
    return (0, _rxjs.from)(_currencyService.CurrencyService.instance.getRates());
  }), (0, _operators.mergeMap)(function (rates) {
    return (0, _rxjs.of)((0, _currencyActions.getRatesSuccess)(rates));
  }), (0, _operators.catchError)(function (errors) {
    return (0, _rxjs.of)((0, _currencyActions.currencyError)(errors));
  }));
};