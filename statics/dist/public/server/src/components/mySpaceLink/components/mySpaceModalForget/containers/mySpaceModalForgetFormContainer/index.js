"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reduxForm = require("redux-form");
var _reactRedux = require("react-redux");
var _mySpaceModalForgetActions = require("../../actions/mySpaceModalForgetActions");
var _mySpaceModalForgetForm = _interopRequireDefault(require("../../components/mySpaceModalForgetForm"));
var MySpaceModalForgetFormContainer = (0, _reduxForm.reduxForm)({
  form: "MySpaceModalForgetForm"
})(_mySpaceModalForgetForm["default"]);
var mapStateToProps = function mapStateToProps(application) {
  return {
    success: application.mySpaceModalForgetReducer.success
  };
};

// Lier les évènements de la page aux actions.
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setData: function setData(key, value) {
      return dispatch((0, _reduxForm.change)("MySpaceModalForgetForm", key, value));
    },
    onSubmit: function onSubmit(values, context, intl) {
      dispatch((0, _mySpaceModalForgetActions.forget)(values, context, intl));
    }
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MySpaceModalForgetFormContainer);