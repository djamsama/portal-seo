"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SUBMITFORMPREFAIL = exports.FORM_NAME = void 0;
var _reactRedux = require("react-redux");
var _reactIntl = require("react-intl");
var _reduxForm = require("redux-form");
var _index = _interopRequireDefault(require("../../components/quotationValidationForm/index"));
var _quotationValidationActions = require("../../actions/quotationValidationActions");
var FORM_NAME = exports.FORM_NAME = "QuotationValidationForm";
var SUBMITFORMPREFAIL = exports.SUBMITFORMPREFAIL = "MYSPACE_QUOTATION_VALIDATION/SUBMITFORMPREFAIL";

// On s'occupe de la partie redux-form tout d'abord.
var QuotationValidationFormContainer = (0, _reduxForm.reduxForm)({
  form: FORM_NAME,
  onSubmitFail: function onSubmitFail(errors, dispatch) {
    return dispatch({
      type: SUBMITFORMPREFAIL
    });
  }
})(_index["default"]);

// On definit une action pour mettre à jour les champs redux-form.
var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    setData: function setData(key, value) {
      return dispatch((0, _reduxForm.change)("QuotationValidationForm", key, value));
    },
    load: function load(value) {
      return dispatch((0, _quotationValidationActions.loadData)(value));
    },
    onSubmit: function onSubmit(values, context, leadContext, history, notificationsHelper) {
      return dispatch((0, _quotationValidationActions.submitForm)(values, context, leadContext, history, notificationsHelper));
    },
    setPhoneCode: function setPhoneCode(countryCode, fieldName, context, notificationsHelper) {
      return dispatch((0, _quotationValidationActions.setPhoneCode)(countryCode, fieldName, context, notificationsHelper));
    }
  };
};

// State to props.
var mapStateToProps = function mapStateToProps(state) {
  var sameDeliveryAddress = selector(state, "sameDeliveryAddress");
  var cgu = selector(state, "cgu");
  return {
    // cast to boolean
    // initialValues: state.quotationValidation.QuotationValidationForm
    initialValues: state.quotationValidation.leadsQuoteInformations,
    // Pour reduxform
    leadsQuoteInformations: state.quotationValidation.leadsQuoteInformations,
    sameDeliveryAddress: sameDeliveryAddress,
    cgu: cgu,
    isLoading: state.quotationValidation.isLoading
  };
};

// Selector: permet d'exposer la valeur redux-form de certain champs
var selector = (0, _reduxForm.formValueSelector)("QuotationValidationForm");
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactIntl.injectIntl)(QuotationValidationFormContainer));