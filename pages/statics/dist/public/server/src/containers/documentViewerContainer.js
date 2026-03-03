"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _documentViewer = _interopRequireDefault(require("../components/documentViewer"));
var _documentViewerActions = require("../actions/documentViewerActions");
var mapStateToProps = function mapStateToProps(_ref) {
  var url = _ref.url;
  return {
    url: url
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    getFile: _documentViewerActions.getFile
  }, dispatch);
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_documentViewer["default"]);