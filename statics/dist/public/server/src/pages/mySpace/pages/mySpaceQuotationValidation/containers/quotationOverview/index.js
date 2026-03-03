"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _reactIntl = require("react-intl");
var _quotationOverview = _interopRequireDefault(require("../../components/quotationOverview"));
var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {};
};

// State to props.
var mapStateToProps = function mapStateToProps(state, ownProps) {
  var downloadContextUrl = ownProps.leadContext === "rfq" ? "/rfq" : "";
  var token = state.quotationValidation.leadsQuoteInformations.attachmentDTO.token;
  var attachmentContext = "/myspace".concat(downloadContextUrl, "/openedQuote/").concat(token);
  return {
    quotationSigningDate: state.quotationSigning == null ? "" : state.quotationSigning.quotationSigningDate,
    attachmentContext: attachmentContext,
    fileName: state.quotationValidation.leadsQuoteInformations.attachmentDTO.name
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactIntl.injectIntl)(_quotationOverview["default"]));