"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _bannersActions = require("../actions/bannersActions");
var _bannerList = _interopRequireDefault(require("../components/bannerList"));
var mapStateToProps = function mapStateToProps(application) {
  return {
    bannersInfo: application && application.banners ? application.banners : null,
    viewedPageId: application && application.Tracking && application.Tracking.viewedPagedId ? application.Tracking.viewedPagedId : null
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    bannersRequestLoad: _bannersActions.bannersRequestLoad
  }, dispatch);
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_bannerList["default"]);