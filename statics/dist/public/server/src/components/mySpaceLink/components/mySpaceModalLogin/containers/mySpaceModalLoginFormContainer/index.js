"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reduxForm = require("redux-form");
var _reactRedux = require("react-redux");
var _mySpaceModalLoginActions = require("../../actions/mySpaceModalLoginActions");
var _mySpaceModalLoginForm = _interopRequireDefault(require("../../components/mySpaceModalLoginForm"));
var MySpaceModalLoginFormContainer = (0, _reduxForm.reduxForm)({
  form: "MySpaceModalLoginForm"
})(_mySpaceModalLoginForm["default"]);

// Lier les évènements de la page aux actions.
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setData: function setData(key, value) {
      return dispatch((0, _reduxForm.change)("MySpaceModalLoginForm", key, value));
    },
    onSubmit: function onSubmit(values, context, redirectUrl, intl) {
      return dispatch((0, _mySpaceModalLoginActions.login)(values, context, redirectUrl, intl));
    }
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(null, mapDispatchToProps)(MySpaceModalLoginFormContainer);