"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestsFilterSubmitSuccess = exports.requestsFilterSubmit = exports.loadingRequestSuccess = exports.loadingRequest = exports.loadRequest = exports.REQUESTS_FILTER_SUBMIT_SUCCESS = exports.LOAD_REQUEST_SUCCESS = exports.LOAD_REQUEST = void 0;
var _mySpaceRequestsService = _interopRequireDefault(require("../../../services/impl/mySpaceRequestsService"));
var REQUESTS_FILTER_SUBMIT_SUCCESS = exports.REQUESTS_FILTER_SUBMIT_SUCCESS = "REQUESTS_FILTER_SUBMIT_SUCCESS";
var LOAD_REQUEST = exports.LOAD_REQUEST = "LOAD_REQUEST";
var LOAD_REQUEST_SUCCESS = exports.LOAD_REQUEST_SUCCESS = "LOAD_REQUEST_SUCCESS";

/* eslint-disable no-undef, no-unused-vars */
var requestsFilterSubmit = exports.requestsFilterSubmit = function requestsFilterSubmit(requestFilters, context) {
  // $FlowFixMe
  if (false) {
    var mySpaceRequestService = new _mySpaceRequestsService["default"](context);
    return function (dispatch) {
      return mySpaceRequestService.filterRequests(requestFilters, context).then(function (_ref) {
        var data = _ref.data;
        dispatch(requestsFilterSubmitSuccess(data));
      });
    };
  }
};
var requestsFilterSubmitSuccess = exports.requestsFilterSubmitSuccess = function requestsFilterSubmitSuccess(data) {
  return {
    type: REQUESTS_FILTER_SUBMIT_SUCCESS,
    payload: {
      data: data
    }
  };
};
var loadRequest = exports.loadRequest = function loadRequest(data) {
  return function (dispatch) {
    dispatch(loadingRequest(data));
    dispatch(loadingRequestSuccess());
  };
};
var loadingRequestSuccess = exports.loadingRequestSuccess = function loadingRequestSuccess() {
  return {
    type: LOAD_REQUEST_SUCCESS
  };
};
var loadingRequest = exports.loadingRequest = function loadingRequest(data) {
  return {
    type: LOAD_REQUEST,
    payload: {
      data: data
    }
  };
};