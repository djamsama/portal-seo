"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.bannersRequestSuccess = exports.bannersRequestLoad = exports.bannersRequestError = exports.BANNERS_SEEN_SUCCESS = exports.BANNERS_REQUEST_SUCCESS = exports.BANNERS_REQUEST_LOADING = exports.BANNERS_REQUEST_ERROR = void 0;
var BANNERS_REQUEST_LOADING = exports.BANNERS_REQUEST_LOADING = "BANNERS_REQUEST_LOADING";
var BANNERS_REQUEST_ERROR = exports.BANNERS_REQUEST_ERROR = "BANNERS_REQUEST_ERROR";
var BANNERS_REQUEST_SUCCESS = exports.BANNERS_REQUEST_SUCCESS = "BANNERS_REQUEST_SUCCESS";
var BANNERS_SEEN_SUCCESS = exports.BANNERS_SEEN_SUCCESS = "BANNERS_SEEN_SUCCESS";

// eslint-disable-next-line max-len
var bannersRequestLoad = exports.bannersRequestLoad = function bannersRequestLoad(companyId, route) {
  return {
    type: BANNERS_REQUEST_LOADING,
    payload: {
      isLoading: true,
      companyId: companyId,
      route: route
    }
  };
};
var bannersRequestError = exports.bannersRequestError = function bannersRequestError(errors) {
  return {
    type: BANNERS_REQUEST_ERROR,
    payload: {
      errors: errors,
      isLoading: false
    }
  };
};
var bannersRequestSuccess = exports.bannersRequestSuccess = function bannersRequestSuccess(banners) {
  return {
    type: BANNERS_REQUEST_SUCCESS,
    payload: {
      isLoading: false,
      banners: banners
    }
  };
};
var _default = exports["default"] = {};