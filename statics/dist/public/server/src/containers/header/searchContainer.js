"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _search = _interopRequireDefault(require("../../components/header/components/mobileHeader/components/search"));
var _searchMenuActions = require("../../actions/searchMenuActions");
var _searchBoxActions = require("../../actions/searchBoxActions");
var mapStateToProps = function mapStateToProps(_ref) {
  var Application = _ref.Application;
  return {
    searchMenuItems: Application.searchMenuItems,
    locale: Application.localeProp
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSearchBoxSubmit: function onSearchBoxSubmit(text, type, context) {
      dispatch((0, _searchBoxActions.searchBoxSubmit)(text, type, context));
    },
    onSearchTextChange: function onSearchTextChange(text, type, context) {
      dispatch((0, _searchBoxActions.searchTextChange)(text, type, context));
    },
    onChangeSearchMode: function onChangeSearchMode(mode) {
      dispatch((0, _searchMenuActions.changeSearchMode)(mode));
    }
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_search["default"]);