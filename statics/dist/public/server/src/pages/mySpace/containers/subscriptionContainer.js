"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _myspaceTile = _interopRequireDefault(require("../pages/mySpaceSubscription/components/subscriptionTiles/components/myspaceTile"));
var _subscriptionActions = require("../actions/subscriptionActions");
var mapStateToProps = function mapStateToProps(_ref) {
  var subscriptions = _ref.subscriptions;
  return {
    subscriptions: subscriptions
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSubscriptionSubmit: function onSubscriptionSubmit(locale, baseUrl, intl, mediaType, subscribed, universId, auto) {
      dispatch((0, _subscriptionActions.subscribe)(locale, baseUrl, intl, mediaType, subscribed, universId, auto));
    }
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_myspaceTile["default"]);