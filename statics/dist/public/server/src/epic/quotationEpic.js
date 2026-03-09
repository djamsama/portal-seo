"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quotationEpic = void 0;
var _operators = require("rxjs/operators");
var _rxjs = require("rxjs");
var _reduxObservable = require("redux-observable");
var _quotationActions = require("../pages/mySpace/actions/quotationActions");
var _quotationService = _interopRequireDefault(require("../services/impl/quotationService"));
// eslint-disable-next-line no-unused-vars
var quotationEpic = exports.quotationEpic = function quotationEpic(action$) {
  var currentQuotation = "";
  var currentResponse = "";
  return action$.pipe((0, _reduxObservable.ofType)(_quotationActions.QUOTATION_SAVING), (0, _operators.mergeMap)(function (action) {
    var quotationService = new _quotationService["default"]();
    currentQuotation = action.payload.quotation;
    return (0, _rxjs.from)(quotationService.saveQuotation(action.payload.quotation).then(function (response) {
      currentResponse = response;
    }));
  }), (0, _operators.mapTo)(function () {
    var response = currentResponse;
    if (response && response.data && response.data.responseStatus === 200) {
      response.msgs = currentQuotation.msgs;
      (0, _rxjs.of)((0, _quotationActions.quotationSuccess)(response));
    } else {
      (0, _rxjs.of)((0, _quotationActions.quotationError)(new Error("Incorrect response from server"), currentQuotation));
    }
  }), (0, _operators.catchError)(function (errors) {
    return (0, _rxjs.of)((0, _quotationActions.quotationError)(errors, currentQuotation));
  }));
};