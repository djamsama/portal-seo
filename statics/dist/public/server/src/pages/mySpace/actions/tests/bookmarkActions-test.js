"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof3 = require("@babel/runtime/helpers/typeof");
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var Action = _interopRequireWildcard(require("../bookmarkActions"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof3(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
// import * as Action  from '../bookmarkActions'

describe("Bookmark Actions", function () {
  it("folderSubmitSuccess", function () {
    var updateFolder = Action.folderSubmitSuccess(1, "label");
    expect(updateFolder.type).toEqual(Action.FOLDER_SUBMIT_SUCCESS);
  });
  it("bookmarkSubmitSuccess", function () {
    var bookmark = Action.bookmarkSubmitSuccess(1, "label");
    expect(bookmark.type).toEqual(Action.BOOKMARK_SUBMIT_SUCCESS);
  });
  it("trashBookmarkSubmitSuccess", function () {
    var trashBookmark = Action.trashBookmarkSubmitSuccess(1, 1);
    expect(trashBookmark.type).toEqual(Action.TRASH_BOOKMARK_SUBMIT_SUCCESS);
  });
  it("trashFolderSubmitSuccess", function () {
    var trashFolder = Action.trashFolderSubmitSuccess(1, 1);
    expect(trashFolder.type).toEqual(Action.TRASH_FOLDER_SUBMIT_SUCCESS);
  });
  it("updateCommentsSubmitSuccess", function () {
    var updateComments = Action.updateCommentsSubmitSuccess(1, 2, 3, "comment");
    expect(updateComments.type).toEqual(Action.UPDATE_COMMENTS_SUBMIT_SUCCESS);
  });
  it("loadFolders", function () {
    var loadFolders = Action.loadFolders([]);
    expect(loadFolders.type).toEqual(Action.LOAD_BOOKMARK);
  });
  it("bookmarkSubmitFailed", function () {
    var updateFolder = Action.bookmarkSubmitFailed([]);
    expect(updateFolder.type).toEqual(Action.BOOKMARK_SUBMIT_FAILED);
  });
  it("moveBookmarkSubmitSuccess", function () {
    var moveBookmarks = Action.moveBookmarkSubmitSuccess({});
    expect(moveBookmarks.type).toEqual(Action.MOVE_BOOKMARK_SUBMIT_SUCCESS);
  });
  it("trashFolder", function () {
    var trashFolder = Action.trashFolder("", "fr", 1, 1);
    expect((0, _typeof2["default"])(trashFolder)).toEqual("function");
  });
  it("updateFolder", function () {
    var updateFolder = Action.updateFolder(1, "label");
    expect((0, _typeof2["default"])(updateFolder)).toEqual("function");
  });
  it("updateComments", function () {
    var updateComments = Action.updateComments(1);
    expect((0, _typeof2["default"])(updateComments)).toEqual("function");
  });
  it("moveBookmarks", function () {
    var moveBookmarks = Action.moveBookmarks({});
    expect((0, _typeof2["default"])(moveBookmarks)).toEqual("function");
  });
  it("trashBookmark", function () {
    var trashBookmark = Action.trashBookmark("", "fr", 1, 1);
    expect((0, _typeof2["default"])(trashBookmark)).toEqual("function");
  });
  it("trashFolder", function () {
    var trashFolder = Action.trashFolder({
      id: 1
    });
    expect((0, _typeof2["default"])(trashFolder)).toEqual("function");
  });
});