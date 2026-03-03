"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _reactIntl = require("react-intl");
var _reduxForm = require("redux-form");
var _surveySatisfactionForm = _interopRequireDefault(require("../../components/surveySatisfactionForm"));
var _surveySatisfactionActions = require("../../actions/surveySatisfactionActions");
var SurveySatisfactionFormContainer = (0, _reduxForm.reduxForm)({
  form: "SurveySatisfactionForm",
  // a unique identifier for this form
  initialValues: {
    currency: 1
  }
})(_surveySatisfactionForm["default"]);
var selector = (0, _reduxForm.formValueSelector)("SurveySatisfactionForm");

// Et maintenant redux et react-intl

// On definit une action pour mettre à jour les champs redux-form.
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setData: function setData(key, value) {
      return dispatch((0, _reduxForm.change)("SurveySatisfactionForm", key, value));
    },
    onSubmit: function onSubmit(values, thanksSurveyPageUrl, leadContext, notificationsHelper) {
      return dispatch((0, _surveySatisfactionActions.submitSurveyForm)(values, thanksSurveyPageUrl, leadContext, notificationsHelper));
    }
  };
};

// State to props.
var mapStateToProps = function mapStateToProps(state) {
  var purchasable = selector(state, "purchasable");
  var mandatoryComment = selector(state, "mandatoryComment");
  var commentReason = selector(state, "commentReason");
  var mandatoryCommentChecked = commentReason && commentReason !== "";
  var showAmount = purchasable === "YES";
  return {
    showAmount: showAmount,
    mandatoryComment: mandatoryComment,
    mandatoryCommentChecked: mandatoryCommentChecked
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactIntl.injectIntl)(SurveySatisfactionFormContainer));