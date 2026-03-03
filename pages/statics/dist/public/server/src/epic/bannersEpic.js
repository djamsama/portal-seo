"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bannersEpic = void 0;
var _operators = require("rxjs/operators");
var _reduxObservable = require("redux-observable");
var _rxjs = require("rxjs");
var _bannersService = _interopRequireDefault(require("../components/banners/services/bannersService"));
var _bannersActions = require("../components/banners/actions/bannersActions");
var bannersEpic = exports.bannersEpic = function bannersEpic(action$) {
  return action$.pipe((0, _reduxObservable.ofType)(_bannersActions.BANNERS_REQUEST_LOADING), (0, _operators.mergeMap)(function (_ref) {
    var payload = _ref.payload;
    var bannersRequest = new _bannersService["default"]();
    var companyId = payload.companyId,
      route = payload.route;
    return (0, _rxjs.from)(bannersRequest.getBanners(companyId, route)).pipe((0, _operators.map)(function (_ref2) {
      var response = _ref2.data.content;
      return (0, _bannersActions.bannersRequestSuccess)(response.bannerList);
    }), (0, _operators.catchError)(function (errors) {
      return (0, _rxjs.of)((0, _bannersActions.bannersRequestError)(errors));
    }));
  }), (0, _operators.catchError)(function (errors) {
    return (0, _rxjs.of)((0, _bannersActions.bannersRequestError)(errors));
  }));
};