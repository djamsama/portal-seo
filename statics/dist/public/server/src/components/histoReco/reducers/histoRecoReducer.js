"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HistoRecoReducer = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _histoRecoActions = require("../actions/histoRecoActions");
var _defaultState = require("../../../constants/defaultState");
var _histoRecoStorageService = require("../../../services/histoReco/histoRecoStorageService");
var _constants = require("../../../commons/constants");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var HistoRecoReducer = exports.HistoRecoReducer = function HistoRecoReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultState.DEFAULT_HISTORY_PRODUCTS_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newState = _objectSpread({}, state);
  switch (action.type) {
    case _histoRecoActions.GET_PRODUCTS_SUCCESS:
      try {
        // eslint-disable-next-line no-case-declarations
        var productsById = {};
        // eslint-disable-next-line no-case-declarations
        var products = action.payload ? action.payload.products : false;
        if (products) {
          // eslint-disable-next-line array-callback-return
          products.map(function (product) {
            if (product.id) {
              productsById[product.id] = product;
            }
          });
          newState.productsById = productsById;
          /** sort products */
          var context = action.payload ? action.payload.context : false;
          var config = context.config;
          var locale = config && config.portal && config.portal.locale ? config.portal.locale : _constants.DEFAULT_LOCALE;
          var productsFromStorage = (0, _histoRecoStorageService.getFromStorage)(_constants.LOCAL_STORAGE_RECO_KEY, locale) || [];
          var orderedProducts = [];
          if (productsById) {
            // eslint-disable-next-line array-callback-return
            productsFromStorage.reverse().map(function (product) {
              if (productsById[product]) {
                orderedProducts.push(productsById[product]);
              }
            });
            newState.products = [].concat(orderedProducts);
          }
          /** *********************************** */
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(" Impossible de recuperer les derniers elements consultés");
      }
      return newState;
    case _histoRecoActions.GET_PRODUCTS_ERROR:
      newState.products = false;
      newState.isProductsLoaded = true;
      return newState;
    case _histoRecoActions.GET_NO_PRODUCTS:
      newState.products = [];
      newState.isProductsLoaded = true;
      return newState;
    default:
      return state;
  }
};