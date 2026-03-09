"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _brandsActions = require("../actions/brandsActions");
var _ = _interopRequireDefault(require("./.."));
var mapStateToProps = function mapStateToProps(application) {
  return {
    brandsInfo: application && application.brands ? application.brands : null,
    viewedPageId: application && application.Tracking && application.Tracking.viewedPagedId ? application.Tracking.viewedPagedId : null
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    onBrandsRequestLoad: _brandsActions.brandsRequestLoad
  }, dispatch);
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_["default"]);