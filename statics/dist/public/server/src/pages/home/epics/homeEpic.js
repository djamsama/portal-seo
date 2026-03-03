"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homeEpic = exports.homeEmagsEpic = exports.homeBuyingGuideEpic = void 0;
var _operators = require("rxjs/operators");
var _rxjs = require("rxjs");
var _reduxObservable = require("redux-observable");
var _homeHelper = _interopRequireDefault(require("../components/helpers/homeHelper"));
var _constants = require("../../../commons/constants");
var _homeActions = require("../actions/homeActions");
var _homeService = _interopRequireDefault(require("../../../services/impl/homeService"));
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
var homeEpic = exports.homeEpic = function homeEpic(action$, store) {
  return action$.pipe((0, _reduxObservable.ofType)(_homeActions.HOME_REQUEST_LOADING), (0, _operators.mergeMap)(function (action) {
    var homeService = new _homeService["default"]();
    var type = action && action.payload ? action.payload.type : null;
    if (!type) {
      return (0, _rxjs.of)((0, _homeActions.homeError)(new Error("Le type est manquant")));
    }
    return (0, _rxjs.from)(homeService.getItems(type)).pipe((0, _operators.mergeMap)(function (responses) {
      var pageSize = _constants.APPLICATION[type.toLocaleUpperCase()] ? _constants.APPLICATION[type.toLocaleUpperCase()].PAGE_SIZE : 0;
      var datas = _homeHelper["default"].mergeNewAndPushItems(responses, pageSize);
      return (0, _rxjs.of)((0, _homeActions.homeSuccess)(datas, type));
    }), (0, _operators.catchError)(function (errors) {
      return (0, _rxjs.of)((0, _homeActions.homeError)(errors));
    }));
  }), (0, _operators.catchError)(function (errors) {
    return (0, _rxjs.of)((0, _homeActions.homeError)(errors));
  }));
};
var homeBuyingGuideEpic = exports.homeBuyingGuideEpic = function homeBuyingGuideEpic(action$) {
  return action$.pipe((0, _reduxObservable.ofType)(_homeActions.HOME_BUYING_GUIDE_LOADING), (0, _operators.mergeMap)(function () {
    var homeService = new _homeService["default"]();
    return (0, _rxjs.from)(homeService.getGuides()).pipe((0, _operators.mergeMap)(function (response) {
      var items = response.data.content;
      return (0, _rxjs.of)((0, _homeActions.homeGuidesSuccess)(items));
    }), (0, _operators.catchError)(function (errors) {
      return (0, _rxjs.of)((0, _homeActions.homeError)(errors));
    }));
  }), (0, _operators.catchError)(function (errors) {
    return (0, _rxjs.of)((0, _homeActions.homeError)(errors));
  }));
};
var homeEmagsEpic = exports.homeEmagsEpic = function homeEmagsEpic(action$) {
  return action$.pipe((0, _reduxObservable.ofType)(_homeActions.HOME_EMAGS_LOADING), (0, _operators.mergeMap)(function () {
    var homeService = new _homeService["default"]();
    return (0, _rxjs.from)(homeService.getEmag()).pipe((0, _operators.mergeMap)(function (response) {
      var items = response.data.content;
      return (0, _rxjs.of)((0, _homeActions.homeEmagsSuccess)(items));
    }), (0, _operators.catchError)(function (errors) {
      return (0, _rxjs.of)((0, _homeActions.homeError)(errors));
    }));
  }), (0, _operators.catchError)(function (errors) {
    return (0, _rxjs.of)((0, _homeActions.homeError)(errors));
  }));
};