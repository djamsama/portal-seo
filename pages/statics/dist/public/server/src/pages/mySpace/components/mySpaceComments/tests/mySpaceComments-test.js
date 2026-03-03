"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../index"));
var folders = require("../../../../../../tools/utils-test/assets/myspace/myspacefolders.json");
test("Commentaires ", function () {
  var onBookmarkCommentUpdate = function onBookmarkCommentUpdate() {};
  var comments = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    item: folders[0].bookmarks[0],
    folder: folders[0],
    onBookmarkCommentUpdate: onBookmarkCommentUpdate
  }));
  expect(comments.find("placeholder:foj_myspace_bookmark_comments").exists()).toEqual(false);
});