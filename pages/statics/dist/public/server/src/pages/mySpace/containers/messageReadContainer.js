"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _messageActions = require("../actions/messageActions");
var _myspaceTab = _interopRequireDefault(require("../pages/mySpaceRFQDetail/components/history/components/myspaceTab"));
var mapStateToProps = function mapStateToProps(application) {
  return {
    messageRedux: application.message,
    visitorInfos: application.VisitorInfos
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onMarkAsReadMessages: function onMarkAsReadMessages(rfqContractorId) {
      dispatch((0, _messageActions.markAsReadMessages)(rfqContractorId));
    }
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_myspaceTab["default"]);