"use strict";

var _initiateState = require("../../../../initiateState");
var _bookmarkReducer = require("../bookmarkReducer");
var folders = require("../../../../../tools/utils-test/assets/myspace/myspacefolders.json");
describe("Bookmark Reducer", function () {
  it("reducer for TRASH_FOLDER_SUBMIT_SUCCESS", function () {
    var state = _initiateState.InitiateState;
    state.folders = folders;
    var action = {
      type: "TRASH_FOLDER_SUBMIT_SUCCESS",
      folders: folders[0],
      payload: {
        success: true
      }
    };
    state = (0, _bookmarkReducer.BookmarkReducer)(state, action);
    expect(state.folders).toEqual(folders);
  });
  it("reducer for BOOKMARK_SUBMIT_SUCCESS", function () {
    var state = _initiateState.InitiateState;
    var action = {
      type: "BOOKMARK_SUBMIT_SUCCESS",
      payload: {
        success: true,
        data: {}
      }
    };
    state = (0, _bookmarkReducer.BookmarkReducer)(state, action);
    expect(state.success).toEqual(true);
  });
  it("reducer for UPDATE_COMMENTS_SUBMIT_SUCCESS", function () {
    var state = _initiateState.InitiateState;
    state.folders = folders;
    var action = {
      type: "UPDATE_COMMENTS_SUBMIT_SUCCESS",
      payload: {
        success: true,
        data: {}
      }
    };
    state.folders = folders;
    state = (0, _bookmarkReducer.BookmarkReducer)(state, action);
    expect(state).toEqual(state);
  });
  it("reducer for FOLDER_SUBMIT_SUCCESS", function () {
    var state = _initiateState.InitiateState;
    state.folders = folders;
    var action = {
      type: "FOLDER_SUBMIT_SUCCESS",
      payload: {
        success: true,
        data: {}
      }
    };
    state.folders = folders;
    state = (0, _bookmarkReducer.BookmarkReducer)(state, action);
    expect(state).toEqual(state);
  });
  it("reducer for TRASH_BOOKMARK_SUBMIT_SUCCESS", function () {
    var state = _initiateState.InitiateState;
    state.folders = folders;
    var action = {
      type: "TRASH_BOOKMARK_SUBMIT_SUCCESS",
      payload: {
        success: true,
        data: {}
      }
    };
    state.folders = folders;
    state = (0, _bookmarkReducer.BookmarkReducer)(state, action);
    expect(state).toEqual(state);
  });
  it("reducer for MOVE_BOOKMARK_SUBMIT_SUCCESS", function () {
    var state = _initiateState.InitiateState;
    state.folders = folders;
    var action = {
      type: "MOVE_BOOKMARK_SUBMIT_SUCCESS",
      payload: {
        success: true,
        data: {}
      }
    };
    state.folders = folders;
    state = (0, _bookmarkReducer.BookmarkReducer)(state, action);
    expect(state).toEqual(state);
    action = {
      type: "MOVE_BOOKMARK_SUBMIT_SUCCESS",
      payload: {
        data: {
          folderId: 1013058
        },
        success: true
      },
      moveBookmarks: {
        bookmarkId: 160136,
        srcFolderId: 1013044,
        folderIds: [],
        newFolder: true,
        label: "nouveau folder"
      }
    };
    state = (0, _bookmarkReducer.BookmarkReducer)(state, action);
    expect(state).toEqual(state);
  });
  it("reducer for BOOKMARK_SUBMIT_FAILED", function () {
    var state = _initiateState.InitiateState;
    state.folders = folders;
    var action = {
      type: "BOOKMARK_SUBMIT_FAILED",
      payload: {
        success: false,
        data: {}
      }
    };
    state.folders = folders;
    state = (0, _bookmarkReducer.BookmarkReducer)(state, action);
    expect(state.success).toEqual(false);
  });
  it("reducer for LOAD_BOOKMARK", function () {
    var state = _initiateState.InitiateState;
    var action = {
      type: "LOAD_BOOKMARK",
      payload: {
        success: true,
        folders: folders
      }
    };
    state = (0, _bookmarkReducer.BookmarkReducer)(state, action);
    expect(state.folders).toEqual(folders);
  });
});