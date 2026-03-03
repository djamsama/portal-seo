"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _mySpaceComments = _interopRequireDefault(require("../components/mySpaceComments"));
var _bookmarkActions = require("../actions/bookmarkActions");
var mapStateToProps = function mapStateToProps(_ref) {
  var Application = _ref.Application,
    bookmark = _ref.bookmark;
  return {
    bookmark: bookmark
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onBookmarkCommentUpdate: function onBookmarkCommentUpdate(locale, baseUrl, bookmarkId, folderId, comments) {
      dispatch((0, _bookmarkActions.updateComments)(locale, baseUrl, bookmarkId, folderId, comments));
    }
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_mySpaceComments["default"]);