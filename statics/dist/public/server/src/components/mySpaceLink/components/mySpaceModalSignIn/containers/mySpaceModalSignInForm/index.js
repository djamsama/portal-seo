"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _reactIntl = require("react-intl");
var _reduxForm = require("redux-form");
var _mySpaceModalSignInForm = _interopRequireDefault(require("../../components/mySpaceModalSignInForm"));
var _mySpaceSignInActions = require("../../actions/mySpaceSignInActions");
//composant
// On s'occupe de la partie redux-form tout d'abord.
var MySpaceModalSignFormContainer = (0, _reduxForm.reduxForm)({
  form: "MySpaceModalSignForm" // a unique identifier for this form
})(_mySpaceModalSignInForm["default"]);

// Et maintenant redux et react-intl

// On definit une action pour mettre à jour les champs redux-form.
var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    onSubmit: function onSubmit(values, context, notificationsHelper) {
      return dispatch((0, _mySpaceSignInActions.submitForm)(values, context, notificationsHelper));
    }
  };
};

// State to props.
var mapStateToProps = function mapStateToProps(state) {
  return {};
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactIntl.injectIntl)(MySpaceModalSignFormContainer));