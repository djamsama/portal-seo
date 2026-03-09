"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _reactIntl = require("react-intl");
var _quotationConfirmationPayment = _interopRequireDefault(require("../../components/quotationConfirmationPayment"));
var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {};
};

// eslint-disable-next-line flowtype/no-types-missing-file-annotation
var mapStateToProps = function mapStateToProps(application) {
  return {
    bankwire: application.quotationPaymentReducer && application.quotationPaymentReducer.bankwire ? application.quotationPaymentReducer.bankwire : null,
    transactionStatus: application.quotationPaymentReducer && application.quotationPaymentReducer.transactionStatus ? application.quotationPaymentReducer.transactionStatus : null,
    isLoading: application.quotationPaymentReducer && application.quotationPaymentReducer.isLoading
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactIntl.injectIntl)(_quotationConfirmationPayment["default"]));