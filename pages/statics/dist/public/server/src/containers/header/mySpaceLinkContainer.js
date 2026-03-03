"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _myspaceLinkActions = require("../../actions/myspaceLinkActions");
var _mySpaceLink = _interopRequireDefault(require("../../components/mySpaceLink"));
var mapStateToProps = function mapStateToProps(application, ownProps) {
  return {
    visitor: application.VisitorInfos,
    theme: ownProps.theme
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    getInfos: _myspaceLinkActions.myspaceLinkRequestLoad,
    logout: _myspaceLinkActions.myspaceLinkLogOut
  }, dispatch);
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_mySpaceLink["default"]);