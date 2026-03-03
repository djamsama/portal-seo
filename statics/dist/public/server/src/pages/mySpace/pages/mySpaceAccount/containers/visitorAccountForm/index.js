"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _reactIntl = require("react-intl");
var _reduxForm = require("redux-form");
var _visitorAccountForm = _interopRequireDefault(require("../../components/visitorAccountForm"));
var _myspace = require("../../../../actions/myspace");
//composant
// On s'occupe de la partie redux-form tout d'abord.
var VisitorAccountFormContainer = (0, _reduxForm.reduxForm)({
  form: "VisitorAccountForm" // a unique identifier for this form
})(_visitorAccountForm["default"]);

// Et maintenant redux et react-intl

// On definit une action pour mettre à jour les champs redux-form.
var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    setData: function setData(key, value) {
      return dispatch((0, _reduxForm.change)("VisitorAccountForm", key, value));
    },
    load: function load(value) {
      return dispatch((0, _myspace.loadAccount)(value));
    }
  };
};

// State to props.
var mapStateToProps = function mapStateToProps(state) {
  // On ajoute les champs redux-form à exposer.
  var visitorTypeValue = selector(state, "visitorType");
  return {
    //cast to boolean
    visitorTypeValue: visitorTypeValue,
    initialValues: state.Account.data
  };
};

// Selector: permet d'exposer la valeur redux-form de certain champs
var selector = (0, _reduxForm.formValueSelector)("VisitorAccountForm");
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactIntl.injectIntl)(VisitorAccountFormContainer));