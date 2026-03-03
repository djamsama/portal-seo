"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _mySpaceMessageFullActions = require("../../actions/mySpaceMessageFullActions");
var _ = _interopRequireDefault(require("../.."));
// Lier les évènements de la page aux actions.
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    translate: _mySpaceMessageFullActions.translate,
    goBackToOriginalLanguage: _mySpaceMessageFullActions.goBackToOriginalLanguage,
    setQuoteIdToView: function setQuoteIdToView(id) {
      return dispatch((0, _mySpaceMessageFullActions.setQuoteIdToView)(id));
    }
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(null, mapDispatchToProps)(_["default"]);