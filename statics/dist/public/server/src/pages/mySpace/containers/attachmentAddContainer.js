"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _messageActions = require("../actions/messageActions");
var _upload = _interopRequireDefault(require("../../../components/upload"));
var mapStateToProps = function mapStateToProps(application) {
  return {
    messageRedux: application.message ? application.message.message : null,
    fileState: application.message ? application.message.fileState : null
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    addAttachment: _messageActions.addAttachment,
    deleteAttachment: _messageActions.deleteAttachment,
    setFileState: _messageActions.setFileState
  }, dispatch);
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_upload["default"]);