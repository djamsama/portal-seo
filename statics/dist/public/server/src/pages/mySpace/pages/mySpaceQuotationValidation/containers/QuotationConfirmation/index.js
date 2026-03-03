"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _reactIntl = require("react-intl");
var _quotationConfirmation = _interopRequireDefault(require("../../components/quotationConfirmation"));
var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {};
};

// State to props.
var mapStateToProps = function mapStateToProps(state) {
  return {
    leadsMyspaceUrl: state.quotationValidation.leadsQuoteInformations.leadsMyspaceUrl
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactIntl.injectIntl)(_quotationConfirmation["default"]));