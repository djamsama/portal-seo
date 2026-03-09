"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _newsletters = _interopRequireDefault(require("../pages/mySpaceSubscription/components/newsletters"));
var _subscriptionActions = require("../actions/subscriptionActions");
var mapStateToProps = function mapStateToProps(_ref) {
  var subscriptions = _ref.subscriptions;
  return {
    subscriptions: subscriptions
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onHandleCheckAll: function onHandleCheckAll(notificationsOps, mediaType, subscribed, isThemaTic, auto) {
      dispatch((0, _subscriptionActions.subscriptionsAll)(notificationsOps, mediaType, subscribed, isThemaTic, auto));
    }
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_newsletters["default"]);