"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _currencyActions = require("../../../../actions/currencyActions");
var _priceComponent = _interopRequireDefault(require("./priceComponent"));
var mapStateToProps = function mapStateToProps(_ref) {
  var Application = _ref.Application,
    prices = _ref.prices;
  return {
    currentCurrency: Application.currentCurrency,
    currencyItems: Application.currencyItems,
    currencies: Application.currencies,
    rates: Application.rates,
    loadingRates: Application.loadingRates,
    locale: Application.localeProp,
    forceCurrency: Application.forceCurrency,
    isPricesAvailable: prices ? prices.isPricesAvailable : true,
    isPricesAvailableLoaded: prices ? prices.isPricesAvailableLoaded : false
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    loadCurrency: _currencyActions.loadCurrency,
    convertCurrency: _currencyActions.convertCurrency,
    getRatesLoad: _currencyActions.getRatesLoad
  }, dispatch);
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_priceComponent["default"]);