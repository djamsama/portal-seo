"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.myspaceLinkLogOutEpic = exports.myspaceLinkGetInfoEpic = void 0;
var _operators = require("rxjs/operators");
var _rxjs = require("rxjs");
var _reduxObservable = require("redux-observable");
var _myspaceLinkActions = require("../actions/myspaceLinkActions");
var _visitorAjaxService = _interopRequireDefault(require("../services/impl/visitorAjaxService"));
var myspaceLinkGetInfoEpic = exports.myspaceLinkGetInfoEpic = function myspaceLinkGetInfoEpic(action$) {
  return action$.pipe((0, _reduxObservable.ofType)(_myspaceLinkActions.MYSPACE_LINK_LOADING), (0, _operators.mergeMap)(function (action) {
    var visitorService = new _visitorAjaxService["default"]();
    var _action$payload = action.payload,
      token = _action$payload.token,
      site = _action$payload.site;
    return (0, _rxjs.from)(visitorService.getVisitorInfos(token, site)).pipe((0, _operators.mergeMap)(function (response) {
      // eslint-disable-next-line eqeqeq
      if (!response || !response.data || !response.data.responseStatus || response.data.responseStatus != 200) {
        return (0, _rxjs.of)((0, _myspaceLinkActions.myspaceLinkRequestError)(response && response.data ? response.data : response));
      }
      var visitorInfosResponse = response.data.content;
      return (0, _rxjs.of)((0, _myspaceLinkActions.myspaceLinkRequestSuccess)(visitorInfosResponse));
    }), (0, _operators.catchError)(function (errors) {
      return (0, _rxjs.of)((0, _myspaceLinkActions.myspaceLinkRequestError)(errors));
    }));
  }), (0, _operators.catchError)(function (errors) {
    return (0, _rxjs.of)((0, _myspaceLinkActions.myspaceLinkRequestError)(errors));
  }));
};
var myspaceLinkLogOutEpic = exports.myspaceLinkLogOutEpic = function myspaceLinkLogOutEpic(action$) {
  return action$.pipe((0, _reduxObservable.ofType)(_myspaceLinkActions.MYSPACE_LINK_LOGOUT), (0, _operators.mergeMap)(function () {
    var visitorService = new _visitorAjaxService["default"]();
    return (0, _rxjs.from)(visitorService.logOut()).pipe((0, _operators.mergeMap)(function (response) {
      if (!response) {
        return (0, _rxjs.of)((0, _myspaceLinkActions.myspaceLinkRequestError)(response));
      }
      var visitorInfosResponse = response.data.content;
      return (0, _rxjs.of)((0, _myspaceLinkActions.myspaceLinkLogOutSuccess)(visitorInfosResponse));
    }), (0, _operators.catchError)(function (errors) {
      return (0, _rxjs.of)((0, _myspaceLinkActions.myspaceLinkRequestError)(errors));
    }));
  }), (0, _operators.catchError)(function (errors) {
    return (0, _rxjs.of)((0, _myspaceLinkActions.myspaceLinkRequestError)(errors));
  }));
};