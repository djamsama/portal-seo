"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FORM_NAME = void 0;
var _reactRedux = require("react-redux");
var _reactIntl = require("react-intl");
var _reduxForm = require("redux-form");
var _index = _interopRequireDefault(require("../../components/quotationPaymentForm/index"));
var _quotationPaymentActions = require("../../actions/quotationPaymentActions");
var FORM_NAME = exports.FORM_NAME = "QuotationPaymentForm";

// On s'occupe de la partie redux-form tout d'abord.
var QuotationPaymentFormContainer = (0, _reduxForm.reduxForm)({
  form: FORM_NAME
})(_index["default"]);

// On definit une action pour mettre à jour les champs redux-form.
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setData: function setData(key, value) {
      return dispatch((0, _reduxForm.change)("QuotationPaymentForm", key, value));
    },
    load: function load(value) {
      return dispatch(loadData(value));
    },
    onSubmit: function onSubmit(context, paymentDatas, quoteId, leadContext, history, notificationsHelper) {
      return dispatch((0, _quotationPaymentActions.processPayment)(context, paymentDatas, quoteId, leadContext, history, notificationsHelper));
    }
  };
};
var mapStateToProps = function mapStateToProps(state) {
  var isLoading = state.quotationPaymentReducer != null ? state.quotationPaymentReducer.isLoading : false;
  return {
    leadsQuoteInformations: state.quotationValidation.leadsQuoteInformations,
    isLoading: isLoading
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactIntl.injectIntl)(QuotationPaymentFormContainer));