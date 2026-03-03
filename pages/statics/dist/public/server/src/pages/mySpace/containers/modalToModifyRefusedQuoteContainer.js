"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _reduxForm = require("redux-form");
var _modalToModifyRefusedQuoteAction = require("../components/modalToModifyRefusedQuote/actions/modalToModifyRefusedQuoteAction");
var _modalToModifyRefusedQuote = _interopRequireDefault(require("../components/modalToModifyRefusedQuote"));
var ModalToModifyRefusedQuoteContainer = (0, _reduxForm.reduxForm)({
  form: "ModalToModifyRefusedQuote"
})(_modalToModifyRefusedQuote["default"]);
var selector = (0, _reduxForm.formValueSelector)("ModalToModifyRefusedQuote");
var mapStateToProps = function mapStateToProps(state) {
  return selector(state, "status", "reasons");
};
var mapDispatchToProps = function mapDispatchToProps() {
  return {
    onSubmit: _modalToModifyRefusedQuoteAction.submit
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ModalToModifyRefusedQuoteContainer);