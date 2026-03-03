"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.brandsRequestSuccess = exports.brandsRequestLoad = exports.brandsRequestError = exports.BRANDS_REQUEST_SUCCESS = exports.BRANDS_REQUEST_LOADING = exports.BRANDS_REQUEST_ERROR = void 0;
var BRANDS_REQUEST_LOADING = exports.BRANDS_REQUEST_LOADING = "BRANDS_REQUEST_LOADING";
var BRANDS_REQUEST_ERROR = exports.BRANDS_REQUEST_ERROR = "BRANDS_REQUEST_ERROR";
var BRANDS_REQUEST_SUCCESS = exports.BRANDS_REQUEST_SUCCESS = "BRANDS_REQUEST_SUCCESS";
var brandsRequestLoad = exports.brandsRequestLoad = function brandsRequestLoad() {
  return {
    type: BRANDS_REQUEST_LOADING,
    payload: {
      isLoading: true
    }
  };
};
var brandsRequestError = exports.brandsRequestError = function brandsRequestError(errors) {
  return {
    type: BRANDS_REQUEST_ERROR,
    payload: {
      errors: errors,
      isLoading: false
    }
  };
};
var brandsRequestSuccess = exports.brandsRequestSuccess = function brandsRequestSuccess(brands) {
  return {
    type: BRANDS_REQUEST_SUCCESS,
    payload: {
      isLoading: false,
      brands: brands
    }
  };
};
var _default = exports["default"] = {};