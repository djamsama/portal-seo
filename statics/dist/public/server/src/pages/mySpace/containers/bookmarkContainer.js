"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _react = _interopRequireDefault(require("react"));
var _reactIntl = _interopRequireDefault(require("react-intl"));
var _mySpaceBookmarkContent = _interopRequireDefault(require("../pages/mySpaceBookmark/components/mySpaceBookmarkContent"));
var _bookmarkActions = require("../actions/bookmarkActions");
var _grabberActions = require("../../../actions/grabberActions");
var mapStateToProps = function mapStateToProps(_ref) {
  var Application = _ref.Application,
    bookmark = _ref.bookmark;
  return {
    bookmark: bookmark
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onBookmarkUpdate: function onBookmarkUpdate(locale, baseUrl, id, label) {
      dispatch((0, _bookmarkActions.updateFolder)(locale, baseUrl, id, label));
    },
    onFolderDelete: function onFolderDelete(locale, baseUrl, folder) {
      dispatch((0, _bookmarkActions.trashFolder)(locale, baseUrl, folder));
    },
    onBookmarkMoveFormSubmit: function onBookmarkMoveFormSubmit(locale, baseUrl, moveObject) {
      dispatch((0, _bookmarkActions.moveBookmarks)(locale, baseUrl, moveObject));
    },
    onBookmarkTrashFormSubmit: function onBookmarkTrashFormSubmit(locale, baseUrl, folderId, itemId) {
      dispatch((0, _bookmarkActions.trashBookmark)(locale, baseUrl, folderId, itemId));
    },
    onLoadFolder: function onLoadFolder(context) {
      var folders = context.initData.folders;
      dispatch((0, _bookmarkActions.loadFolders)(folders));
    },
    onAddProductToGrabber: function onAddProductToGrabber(productId, productImg, productDef, intl) {
      dispatch((0, _grabberActions.addProduct)(productId, productImg, productDef, intl));
    },
    onRemoveProductToGrabber: function onRemoveProductToGrabber(productId) {
      dispatch((0, _grabberActions.deleteOne)(productId));
    }
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_mySpaceBookmarkContent["default"]);