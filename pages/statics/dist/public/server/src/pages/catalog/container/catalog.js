"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _reactIntl = require("react-intl");
var _catalogActions = require("../actions/catalogActions");
var _ = _interopRequireDefault(require("./.."));
function mapDispatchToProps(dispatch) {
  return {
    isPricesAvailable: function isPricesAvailable(compagnyId) {
      return dispatch((0, _catalogActions.isPricesAvailable)(compagnyId));
    }
  };
}
var _default = exports["default"] = (0, _reactRedux.connect)(null, mapDispatchToProps)((0, _reactIntl.injectIntl)(_["default"]));