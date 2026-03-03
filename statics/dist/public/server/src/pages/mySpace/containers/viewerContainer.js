"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _mySpaceDocumentViewer = _interopRequireDefault(require("../components/mySpaceDocumentViewer"));
var _viewerActions = require("../actions/viewerActions");
var mapStateToProps = function mapStateToProps(application) {
  return {
    visitorInfos: application.VisitorInfos
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    hasMySpaceAccount: _viewerActions.hasMySpaceAccount
  }, dispatch);
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_mySpaceDocumentViewer["default"]);