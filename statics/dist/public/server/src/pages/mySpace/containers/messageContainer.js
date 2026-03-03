"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _messageActions = require("../actions/messageActions");
var _sendMessage = _interopRequireDefault(require("../../../components/messages/sendMessage"));
var mapStateToProps = function mapStateToProps(application) {
  return {
    messageRedux: application.message,
    visitorInfos: application.VisitorInfos
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    saveMessage: _messageActions.saveMessage
  }, dispatch);
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_sendMessage["default"]);