"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _reactIntl = require("react-intl");
var _reduxForm = require("redux-form");
var _index = _interopRequireDefault(require("../index"));
var _exhibitActions = require("../actions/exhibitActions");
var _trackingGa = require("../../../../../../components/trackings/trackingGa");
var _constants = require("../../../../../../commons/constants");
// $FlowFixMe
var ExhibitFormContainer = (0, _reduxForm.reduxForm)({
  form: _exhibitActions.EXHIBIT_MANUFACTURER_FORM_NAME,
  onSubmitFail: function onSubmitFail(errors, dispatch) {
    try {
      _trackingGa.TrackingGaErrors.sendErrorEvent(_constants.GOOGLE_ANALYTICS_EVENTS.FA_PAGE_CLICK_SEND_FORM.CATEGORY, _constants.GOOGLE_ANALYTICS_EVENTS.FA_PAGE_CLICK_SEND_FORM.ACTION, errors);
    } catch (error) {
      console.warn(" distributor ga error event not send");
    }
    return dispatch((0, _exhibitActions.formSubmitFailedAction)(errors));
  }
})(_index["default"]);
var clearForm = function clearForm(result, dispatch) {
  return dispatch((0, _reduxForm.reset)("exhibitForm"));
};

// On definit une action pour mettre à jour les champs redux-form.
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSubmit: function onSubmit(values, context) {
      return dispatch((0, _exhibitActions.submitForm)(values, context));
    },
    change: function change(field, value) {
      return dispatch((0, _reduxForm.change)(field, value));
    },
    onSubmitSuccess: clearForm
  };
};

// State to props.
var mapStateToProps = function mapStateToProps(state) {
  var exhibitFormError = state.exhibit && state.exhibit.exhibitFormError ? state.exhibit.exhibitFormError : null;
  var exhibitFormSubmissionError = state.exhibit && state.exhibit.exhibitFormSubmissionError ? state.exhibit.exhibitFormSubmissionError : null;
  return {
    exhibitFormError: exhibitFormError,
    exhibitFormSubmissionError: exhibitFormSubmissionError,
    postReturnSuccess: state.exhibit.postReturnSuccess
  };
};
// $FlowFixMe
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactIntl.injectIntl)(ExhibitFormContainer));