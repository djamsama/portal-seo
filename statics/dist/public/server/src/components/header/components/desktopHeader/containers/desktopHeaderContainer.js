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
var mapStateToProps = function mapStateToProps(application, ownProps) {
  var didomiBannerEnabled = application.didomi && application.didomi.vendors && application.didomi.vendors.google !== undefined ? application.didomi.vendors.google : true; // la bonnière ne doit être affichée que si l'utilisateur a accepter le vendeur 'google'

  var layoutBannerEnabled = typeof (ownProps === null || ownProps === void 0 ? void 0 : ownProps.bannerEnabled) === "boolean" ? ownProps.bannerEnabled : true;
  return {
    searchMenuItems: application.Application.searchMenuItems,
    locale: application.Application.localeProp,
    bannerEnabled: didomiBannerEnabled && layoutBannerEnabled
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSearchBoxSubmit: function onSearchBoxSubmit(text, type, context) {
      dispatch((0, _searchBoxActions.searchBoxSubmit)(text, type, context));
    },
    onChangeSearchMode: function onChangeSearchMode(mode) {
      dispatch((0, _searchMenuActions.changeSearchMode)(mode));
    }
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_["default"]);