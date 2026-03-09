"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _index = _interopRequireDefault(require("../index"));
var _bookmarkActions = require("../actions/bookmarkActions");
var mapStateToProps = function mapStateToProps(application, ownProps) {
  var bookmarked = ownProps.bookmarked,
    productId = ownProps.productId;
  var productState = application && application.bookmarkLink ? application.bookmarkLink[productId] : null;
  return {
    visitorInfos: application.VisitorInfos,
    bookmarked: productState ? productState.bookmarked : bookmarked
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    hasMySpaceAccount: _bookmarkActions.hasMySpaceAccount,
    isBookmarked: _bookmarkActions.isBookmarked,
    addToBookmarks: _bookmarkActions.addToBookmarks,
    removeFromBookmarks: _bookmarkActions.removeFromBookmarks
  }, dispatch);
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_index["default"]);