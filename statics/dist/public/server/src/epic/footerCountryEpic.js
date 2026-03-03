"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countryEpic = void 0;
var _operators = require("rxjs/operators");
var _rxjs = require("rxjs");
var _reduxObservable = require("redux-observable");
var _footerCountryActions = require("../actions/footerCountryActions");
var _countrySelectorService = _interopRequireDefault(require("../services/impl/countrySelectorService"));
/* eslint-disable flowtype/no-types-missing-file-annotation */

// eslint-disable-next-line no-unused-vars
var countryEpic = exports.countryEpic = function countryEpic(action$) {
  return action$.pipe((0, _reduxObservable.ofType)(_footerCountryActions.COUNTRY_REQUEST_LOADING), (0, _operators.mergeMap)(function () {
    var countryService = new _countrySelectorService["default"]();
    return (0, _rxjs.from)(countryService.getCountry()).pipe((0, _operators.map)(function (_ref) {
      var response = _ref.data.content;
      return (0, _footerCountryActions.countryRequestSuccess)(response);
    }), (0, _operators.catchError)(function (errors) {
      return (0, _rxjs.of)((0, _footerCountryActions.countryRequestError)(errors));
    }));
  }), (0, _operators.catchError)(function (errors) {
    return (0, _rxjs.of)((0, _footerCountryActions.countryRequestError)(errors));
  }));
};