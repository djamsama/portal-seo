"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _addressOverview = _interopRequireDefault(require("../../components/addressOverview"));
var mapDispatchToProps = function mapDispatchToProps() {
  return {};
};

// State to props.
var mapStateToProps = function mapStateToProps(state) {
  return {
    deliveryAdress: state.quotationValidation.leadsQuoteInformations.deliveryAddress,
    billingAddress: state.quotationValidation.leadsQuoteInformations.billingAddress
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_addressOverview["default"]);