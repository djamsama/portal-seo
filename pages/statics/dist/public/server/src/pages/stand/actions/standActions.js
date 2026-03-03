"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadDisplaySuccess = exports.loadDisplayError = exports.isPricesAvailable = exports.REQUEST_PRICES_SERVICE_SUCCESS = exports.REQUEST_PRICES_SERVICE_ERROR = void 0;
var _pricesService = _interopRequireDefault(require("../../../services/impl/pricesService"));
var REQUEST_PRICES_SERVICE_SUCCESS = exports.REQUEST_PRICES_SERVICE_SUCCESS = "REQUEST_PRICES_SERVICE_SUCCESS";
var REQUEST_PRICES_SERVICE_ERROR = exports.REQUEST_PRICES_SERVICE_ERROR = "REQUEST_PRICES_SERVICE_ERROR";
var loadDisplaySuccess = exports.loadDisplaySuccess = function loadDisplaySuccess(state) {
  return {
    type: REQUEST_PRICES_SERVICE_SUCCESS,
    payload: {
      isPricesAvailable: state ? state.isPricesAvailable : false
    }
  };
};
var loadDisplayError = exports.loadDisplayError = function loadDisplayError() {
  return {
    type: REQUEST_PRICES_SERVICE_ERROR,
    payload: {
      isPricesAvailable: false
    }
  };
};
var isPricesAvailable = exports.isPricesAvailable = function isPricesAvailable(compagnyId) {
  var pricesService = new _pricesService["default"]();
  if (false) {
    return function (dispatch) {
      return pricesService.isPricesAvailable(compagnyId).then(function (response) {
        if (response && response.data && response.data.content && response.data.responseStatus && response.data.responseStatus.toString()[0] === "2") {
          // Un code retour en 2** signifie que la requête a été traité avec succès
          return dispatch(loadDisplaySuccess(response.data.content.state));
        }
        return false;
      }, function () {
        dispatch(loadDisplayError());
      });
    };
  }
  return false;
};