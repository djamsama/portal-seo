"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quotationValidationFailEpic = void 0;
var _operators = require("rxjs/operators");
var _reduxObservable = require("redux-observable");
var _constants = require("../commons/constants");
var _quotationValidationForm = require("../pages/mySpace/pages/mySpaceQuotationValidation/containers/quotationValidationForm");
var quotationValidationFailEpic = exports.quotationValidationFailEpic = function quotationValidationFailEpic(action$, state$, _ref) {
  var googleAnalytics = _ref.googleAnalytics;
  return action$.pipe((0, _reduxObservable.ofType)(_quotationValidationForm.SUBMITFORMPREFAIL), (0, _operators.tap)(function () {
    return googleAnalytics.event({
      category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
      action: _constants.GOOGLE_ANALYTICS_EVENTS.BUYING_FUNNEL,
      label: _constants.GOOGLE_ANALYTICS_EVENTS.DISPLAY_ERROR_ADRESS_FORM
    });
  }), (0, _operators.ignoreElements)());
};