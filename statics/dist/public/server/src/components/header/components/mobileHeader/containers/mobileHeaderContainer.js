"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _ = _interopRequireDefault(require("./.."));
var _searchMenuActions = require("../../../../../actions/searchMenuActions");
var _searchBoxActions = require("../../../../../actions/searchBoxActions");
var _currencyActions = require("../../../../../actions/currencyActions");
var mapStateToProps = function mapStateToProps(_ref) {
  var Application = _ref.Application;
  return {
    searchMenuItems: Application.searchMenuItems,
    locale: Application.localeProp,
    currentCurrency: Application.currentCurrency,
    currencyItems: Application.currencyItems
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSearchBoxSubmit: function onSearchBoxSubmit(text, type, context) {
      dispatch((0, _searchBoxActions.searchBoxSubmit)(text, type, context));
    },
    onChangeSearchMode: function onChangeSearchMode(mode) {
      dispatch((0, _searchMenuActions.changeSearchMode)(mode));
    },
    loadCurrency: function loadCurrency() {
      dispatch((0, _currencyActions.loadCurrency)());
    },
    onClickCurrency: function onClickCurrency(currency, context) {
      dispatch((0, _currencyActions.clickCurrency)(currency, context));
    }
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_["default"]);