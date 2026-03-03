"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _searchBox = _interopRequireDefault(require("../../components/searchBox"));
var _searchMenuActions = require("../../actions/searchMenuActions");
var _searchBoxActions = require("../../actions/searchBoxActions");
var mapStateToProps = function mapStateToProps(_ref) {
  var Application = _ref.Application;
  return {
    searchMenuItems: Application.searchMenuItems,
    autocompleteItems: Application.autocompleteItems,
    locale: Application.localeProp,
    frequentlySearchedItems: Application.frequentlySearchedItems
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
    onSearchTextChange: function onSearchTextChange(text, type, context) {
      dispatch((0, _searchBoxActions.searchTextChange)(text, type, context));
    },
    onSubmit: function onSubmit(data) {
      dispatch((0, _searchMenuActions.businessType)(data));
    },
    onHideAutocomplete: function onHideAutocomplete() {
      dispatch((0, _searchBoxActions.resetSearchAutocomplete)());
    },
    onLoadSearchBox: function onLoadSearchBox(context) {
      dispatch((0, _searchBoxActions.loadFrequentlySearched)(context));
    }
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_searchBox["default"]);