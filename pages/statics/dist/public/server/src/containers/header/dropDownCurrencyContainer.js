"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _dropDownCurrency = require("../../components/header/components/dropDownCurrency");
var _currencyActions = require("../../actions/currencyActions");
var mapStateToProps = function mapStateToProps(_ref) {
  var Application = _ref.Application;
  return {
    currentCurrency: Application.currentCurrency,
    currencyItems: Application.currencyItems,
    rates: Application.rates,
    currencies: Application.currencies
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onClick: function onClick(currency, context) {
      dispatch((0, _currencyActions.clickCurrency)(currency, context));
    },
    loadCurrency: function loadCurrency() {
      dispatch((0, _currencyActions.loadCurrency)());
    }
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_dropDownCurrency.DropDownCurrency);