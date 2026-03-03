"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadProducts = exports.grabberUpdate = exports.deleteOne = exports.deleteAll = exports["default"] = exports.addProduct = exports.GRABBER_UPDATE = void 0;
var _grabberService = require("../services/impl/grabberService");
var GRABBER_UPDATE = exports.GRABBER_UPDATE = "GRABBER_UPDATE";
var grabberUpdate = exports.grabberUpdate = function grabberUpdate(products) {
  return {
    type: GRABBER_UPDATE,
    payload: {
      products: products
    }
  };
};
var loadProducts = exports.loadProducts = function loadProducts() {
  return function (dispatch) {
    var service = new _grabberService.GrabberService();
    dispatch(grabberUpdate(service.loadProducts()));
  };
};
var deleteOne = exports.deleteOne = function deleteOne(productId) {
  return function (dispatch) {
    var service = new _grabberService.GrabberService();
    dispatch(grabberUpdate(service.deleteProduct(productId)));
  };
};
var deleteAll = exports.deleteAll = function deleteAll() {
  return function (dispatch) {
    var service = new _grabberService.GrabberService();
    service.deleteAllProducts();
    dispatch(grabberUpdate([]));
  };
};
var addProduct = exports.addProduct = function addProduct(productId, productImg, productDef, intl) {
  return function (dispatch) {
    var service = new _grabberService.GrabberService();
    dispatch(grabberUpdate(service.addProduct(productId, productImg, productDef, intl)));
  };
};
var _default = exports["default"] = {};