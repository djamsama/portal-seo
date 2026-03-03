"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _footerCountryActions = require("../../actions/footerCountryActions");
var _countryListSelector = _interopRequireDefault(require("../../components/footer/components/footerInfo/components/countryListSelector"));
var mapStateToProps = function mapStateToProps(application) {
  return {
    footerCountry: application.footerCountry
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    loadCountry: _footerCountryActions.countryRequestLoad
  }, dispatch);
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_countryListSelector["default"]);