"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brandsEpic = void 0;
var _operators = require("rxjs/operators");
var _rxjs = require("rxjs");
var _reduxObservable = require("redux-observable");
var _brandsActions = require("../components/brands/actions/brandsActions");
var _brandsService = _interopRequireDefault(require("../components/brands/services/brandsService"));
var brandsEpic = exports.brandsEpic = function brandsEpic(action$) {
  return action$.pipe((0, _reduxObservable.ofType)(_brandsActions.BRANDS_REQUEST_LOADING), (0, _operators.mergeMap)(function () {
    var brandsRequest = new _brandsService["default"]();
    return (0, _rxjs.from)(brandsRequest.getBrands()).pipe((0, _operators.map)(function (_ref) {
      var response = _ref.data.content;
      return (0, _brandsActions.brandsRequestSuccess)(response.companyList);
    }), (0, _operators.catchError)(function (errors) {
      return (0, _rxjs.of)((0, _brandsActions.brandsRequestError)(errors));
    }));
  }), (0, _operators.catchError)(function (errors) {
    return (0, _rxjs.of)((0, _brandsActions.brandsRequestError)(errors));
  }));
};