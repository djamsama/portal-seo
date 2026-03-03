"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_QUOTATION_STATE = exports.DEFAULT_MESSAGE_STATE = exports.DEFAULT_MENU_STATE = exports.DEFAULT_IS_PRICE_AVAILABLE_STATE = exports.DEFAULT_HISTORY_PRODUCTS_STATE = void 0;
var DEFAULT_MENU_STATE = exports.DEFAULT_MENU_STATE = {
  isLoading: false,
  menuItemActive: "",
  menuItems: []
};
var DEFAULT_QUOTATION_STATE = exports.DEFAULT_QUOTATION_STATE = {
  isLoading: false,
  quotation: {}
};
var DEFAULT_MESSAGE_STATE = exports.DEFAULT_MESSAGE_STATE = {
  isLoading: false,
  message: {}
};
var DEFAULT_IS_PRICE_AVAILABLE_STATE = exports.DEFAULT_IS_PRICE_AVAILABLE_STATE = {
  isLoading: false,
  isPricesAvailable: true,
  isPricesAvailableLoaded: false
};
var DEFAULT_HISTORY_PRODUCTS_STATE = exports.DEFAULT_HISTORY_PRODUCTS_STATE = {
  isLoading: false,
  products: [],
  productsById: null,
  submitting: false
};