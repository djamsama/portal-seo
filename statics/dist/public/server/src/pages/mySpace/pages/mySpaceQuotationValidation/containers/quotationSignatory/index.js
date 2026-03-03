"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _quotationSigningActions = require("../../actions/quotationSigningActions");
var _quotationSignatory = _interopRequireDefault(require("../../components/quotationSignatory"));
var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    quotationSigning: function quotationSigning(values, leadContext, history, intl) {
      return dispatch((0, _quotationSigningActions.quotationSigning)(values, leadContext, history, intl));
    }
  };
};

// State to props.
var mapStateToProps = function mapStateToProps(state) {
  var isLoading = state.quotationSigning != null ? state.quotationSigning.isLoading : false;
  return {
    supplierName: state.quotationValidation.leadsQuoteInformations.supplierName,
    quotationSigningDate: state.quotationSigning == null ? "" : state.quotationSigning.quotationSigningDate,
    isLoading: isLoading
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_quotationSignatory["default"]);