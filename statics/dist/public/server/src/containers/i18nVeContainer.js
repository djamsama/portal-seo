"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _i18nVeActions = require("../actions/i18nVeActions.js");
var _i18nVe = require("../components/i18nVe");
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onLoadTranslations: function onLoadTranslations(language, route) {
      dispatch((0, _i18nVeActions.loadTranslations)(language, route));
    }
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(null, mapDispatchToProps)(_i18nVe.I18nVe);