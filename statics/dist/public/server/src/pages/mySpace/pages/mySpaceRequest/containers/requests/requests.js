"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _requests = _interopRequireDefault(require("../../components/requests"));
var _requestsActions = require("../../../../actions/requestsActions");
var mapStateToProps = function mapStateToProps(state) {
  return {
    requestsValues: state.Requests.data,
    isFetching: state.Requests.isFetching
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onRequestsFilterSubmit: function onRequestsFilterSubmit(requestFilters, context) {
      dispatch((0, _requestsActions.loadingRequest)());
      dispatch((0, _requestsActions.requestsFilterSubmit)(requestFilters, context));
    },
    loadRequests: function loadRequests(value) {
      dispatch((0, _requestsActions.loadRequest)(value));
    }
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_requests["default"]);