"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _quotationActions = require("../actions/quotationActions");
var _mySpaceMessageFullActions = require("../../../components/messages/messageFull/actions/mySpaceMessageFullActions");
var _quotation = _interopRequireDefault(require("../components/myspaceQuotations/components/quotation"));
var mapStateToProps = function mapStateToProps(state) {
  return {
    quotationRedux: state && state.quotation ? state.quotation.quotation : null,
    quoteIdToViewRedux: state && state.quotation ? state.quotation.quoteIdToView : null
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    saveQuotation: _quotationActions.saveQuotation,
    setQuoteIdToView: _mySpaceMessageFullActions.setQuoteIdToView
  }, dispatch);
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_quotation["default"]);