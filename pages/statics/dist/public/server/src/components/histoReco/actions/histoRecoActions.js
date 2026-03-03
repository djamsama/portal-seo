"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductsSuccess = exports.getProductsError = exports.getProducts = exports.getNoProducts = exports.GET_PRODUCTS_SUCCESS = exports.GET_PRODUCTS_ERROR = exports.GET_NO_PRODUCTS = void 0;
var _standService = _interopRequireDefault(require("../../../services/impl/standService"));
var GET_PRODUCTS_SUCCESS = exports.GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
var GET_PRODUCTS_ERROR = exports.GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";
var GET_NO_PRODUCTS = exports.GET_NO_PRODUCTS = "GET_NO_PRODUCTS";
var getProductsSuccess = exports.getProductsSuccess = function getProductsSuccess(payload, context) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: {
      products: payload.content,
      context: context
    }
  };
};
var getProductsError = exports.getProductsError = function getProductsError(payload) {
  return {
    type: GET_PRODUCTS_ERROR,
    payload: {
      products: [],
      errors: payload.errors
    }
  };
};
var getNoProducts = exports.getNoProducts = function getNoProducts() {
  return {
    type: GET_NO_PRODUCTS,
    payload: {
      products: []
    }
  };
};
var getProducts = exports.getProducts = function getProducts(context, ids) {
  var standAjaxService = new _standService["default"](context);
  if (!ids || ids.length < 1) {
    return function (dispatch) {
      return dispatch(getNoProducts());
    };
  }
  return function (dispatch) {
    return standAjaxService.getProductsByIds(ids).then(function (_ref) {
      var data = _ref.data;
      if (!data || data.responseStatus !== 200) {
        return dispatch(getProductsError(data));
      }
      return dispatch(getProductsSuccess(data, context));
    });
  };
};