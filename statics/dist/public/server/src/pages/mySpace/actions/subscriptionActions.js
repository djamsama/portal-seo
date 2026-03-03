"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscriptionsAll = exports.subscriptionSubmitSuccess = exports.subscriptionSubmitFailed = exports.subscriptionAllSubmitSuccess = exports.subscriptionAllSubmitFailed = exports.subscribe = exports.SUBSCRIPTION_SUBMIT_SUCCESS = exports.SUBSCRIPTION_SUBMIT_FAILED = void 0;
var _reactReduxToastr = require("react-redux-toastr");
var _subscriptionAjaxService = _interopRequireDefault(require("../../../services/impl/subscriptionAjaxService"));
var SUBSCRIPTION_SUBMIT_SUCCESS = exports.SUBSCRIPTION_SUBMIT_SUCCESS = "SUBSCRIPTION_SUBMIT_SUCCESS";
var SUBSCRIPTION_SUBMIT_FAILED = exports.SUBSCRIPTION_SUBMIT_FAILED = "SUBSCRIPTION_SUBMIT_FAILED";

/* eslint-disable no-undef, no-unused-vars */
var subscribe = exports.subscribe = function subscribe(locale, baseUrl, notificationsOps, mediaType, subscribed, universId, auto) {
  var subscriptionAjaxService = new _subscriptionAjaxService["default"](locale, baseUrl);
  // $FlowFixMe
  if (false) {
    return function (dispatch) {
      return subscriptionAjaxService.subscribe(mediaType, subscribed, universId, auto).then(function (_ref) {
        var data = _ref.data;
        dispatch(data.responseStatus === 200 ? subscriptionSubmitSuccess(notificationsOps, data, mediaType, subscribed, universId) : subscriptionSubmitFailed(notificationsOps, data, mediaType, subscribed, universId));
      });
    };
  }
};

/* eslint-disable no-undef, no-unused-vars */
var subscriptionsAll = exports.subscriptionsAll = function subscriptionsAll(notificationsOps, mediaType, subscribed, auto, isThematic) {
  // $FlowFixMe
  if (false) {
    var subscriptionAjaxService = new _subscriptionAjaxService["default"]();
    return function (dispatch) {
      return subscriptionAjaxService.subscriptions(mediaType, subscribed, isThematic, auto).then(function (_ref2) {
        var data = _ref2.data;
        dispatch(data.responseStatus === 200 ? subscriptionAllSubmitSuccess(notificationsOps, data, mediaType, subscribed) : subscriptionAllSubmitFailed(notificationsOps, data, mediaType, subscribed));
      });
    };
  }
};

/* eslint-enable no-undef, no-unused-vars */

var subscriptionSubmitSuccess = exports.subscriptionSubmitSuccess = function subscriptionSubmitSuccess(notificationsOps, data, mediaType, subscribed, universId) {
  _reactReduxToastr.toastr.success(notificationsOps && notificationsOps.success ? notificationsOps.success.title : "", notificationsOps && notificationsOps.success ? notificationsOps.success.message : "");
  return {
    type: SUBSCRIPTION_SUBMIT_SUCCESS,
    payload: {
      data: data,
      id: mediaType + universId,
      subscribed: subscribed
    }
  };
};
var subscriptionSubmitFailed = exports.subscriptionSubmitFailed = function subscriptionSubmitFailed(notificationsOps, data, mediaType, subscribed, universId) {
  _reactReduxToastr.toastr.error(notificationsOps && notificationsOps.error ? notificationsOps.error.title : "", notificationsOps && notificationsOps.error ? notificationsOps.error.message : "");
  return {
    type: SUBSCRIPTION_SUBMIT_FAILED,
    payload: {
      data: data,
      id: mediaType + universId,
      subscribed: subscribed
    }
  };
};

/* eslint-enable no-undef, no-unused-vars */

var subscriptionAllSubmitSuccess = exports.subscriptionAllSubmitSuccess = function subscriptionAllSubmitSuccess(notificationsOps, data, mediaType, subscribed) {
  _reactReduxToastr.toastr.success(notificationsOps && notificationsOps.success ? notificationsOps.success.title : "", notificationsOps && notificationsOps.success ? notificationsOps.success.message : "");
  return {
    type: SUBSCRIPTION_SUBMIT_SUCCESS,
    payload: {
      data: data,
      all: true,
      subscribed: subscribed
    }
  };
};
var subscriptionAllSubmitFailed = exports.subscriptionAllSubmitFailed = function subscriptionAllSubmitFailed(notificationsOps, data, mediaType, subscribed) {
  _reactReduxToastr.toastr.error(notificationsOps && notificationsOps.error ? notificationsOps.error.title : "", notificationsOps && notificationsOps.error ? notificationsOps.error.message : "");
  return {
    type: SUBSCRIPTION_SUBMIT_FAILED,
    payload: {
      data: data,
      all: true,
      subscriptions: data.content.subscriptions,
      subscribed: subscribed
    }
  };
};