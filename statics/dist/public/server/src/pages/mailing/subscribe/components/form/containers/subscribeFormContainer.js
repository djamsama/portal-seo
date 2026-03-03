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
var _subscribeActions = require("../actions/subscribeActions");
var SubscribeFormContainer = (0, _reduxForm.reduxForm)({
  form: "subscribeForm"
})(_index["default"]);
var clearForm = function clearForm(result, dispatch) {
  return dispatch((0, _reduxForm.reset)("subscribeForm"));
};

// On definit une action pour mettre à jour les champs redux-form.
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSubmit: function onSubmit(values, context) {
      return dispatch((0, _subscribeActions.submitForm)(values, context));
    },
    change: function change(field, value) {
      return dispatch((0, _reduxForm.change)(field, value));
    },
    onSubmitSuccess: clearForm
  };
};

// State to props.
var mapStateToProps = function mapStateToProps(state) {
  return {
    postReturnSuccess: state.subscribeReducer.postReturnSuccess,
    emagCheckbox: state.form.subscribeForm && state.form.subscribeForm.values && state.form.subscribeForm.values.emag,
    universeIdsCheckbox: state.form.subscribeForm && state.form.subscribeForm.values && state.form.subscribeForm.values.universeIds,
    dedicateCheckbox: state.form.subscribeForm && state.form.subscribeForm.values && state.form.subscribeForm.values.dedicate
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactIntl.injectIntl)(SubscribeFormContainer));