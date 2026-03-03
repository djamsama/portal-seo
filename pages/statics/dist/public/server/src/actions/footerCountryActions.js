"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.countryRequestSuccess = exports.countryRequestLoad = exports.countryRequestError = exports.COUNTRY_REQUEST_SUCCESS = exports.COUNTRY_REQUEST_LOADING = exports.COUNTRY_REQUEST_ERROR = void 0;
var COUNTRY_REQUEST_LOADING = exports.COUNTRY_REQUEST_LOADING = "COUNTRY_REQUEST_LOADING";
var COUNTRY_REQUEST_ERROR = exports.COUNTRY_REQUEST_ERROR = "COUNTRY_REQUEST_ERROR";
var COUNTRY_REQUEST_SUCCESS = exports.COUNTRY_REQUEST_SUCCESS = "COUNTRY_REQUEST_SUCCESS";
var countryRequestLoad = exports.countryRequestLoad = function countryRequestLoad() {
  return {
    type: COUNTRY_REQUEST_LOADING,
    payload: {
      isLoading: true
    }
  };
};
var countryRequestError = exports.countryRequestError = function countryRequestError(errors) {
  return {
    type: COUNTRY_REQUEST_ERROR,
    payload: {
      errors: errors,
      isLoading: false
    }
  };
};
var countryRequestSuccess = exports.countryRequestSuccess = function countryRequestSuccess(footerCountries) {
  return {
    type: COUNTRY_REQUEST_SUCCESS,
    payload: {
      isLoading: false,
      footerCountries: footerCountries
    }
  };
};
var _default = exports["default"] = {};