"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateFolder = exports.updateCommentsSubmitSuccess = exports.updateComments = exports.trashFolderSubmitSuccess = exports.trashFolder = exports.trashBookmarkSubmitSuccess = exports.trashBookmark = exports.moveBookmarks = exports.moveBookmarkSubmitSuccess = exports.loadFolders = exports.folderSubmitSuccess = exports.deleteBookmarks = exports.bookmarkSubmitSuccess = exports.bookmarkSubmitFailed = exports.UPDATE_COMMENTS_SUBMIT_SUCCESS = exports.TRASH_FOLDER_SUBMIT_SUCCESS = exports.TRASH_BOOKMARK_SUBMIT_SUCCESS = exports.MOVE_BOOKMARK_SUBMIT_SUCCESS = exports.LOAD_BOOKMARK = exports.FOLDER_SUBMIT_SUCCESS = exports.BOOKMARK_SUBMIT_SUCCESS = exports.BOOKMARK_SUBMIT_FAILED = void 0;
var _bookmarkAjaxService = _interopRequireDefault(require("../../../services/impl/bookmarkAjaxService"));
var FOLDER_SUBMIT_SUCCESS = exports.FOLDER_SUBMIT_SUCCESS = "FOLDER_SUBMIT_SUCCESS";
var BOOKMARK_SUBMIT_SUCCESS = exports.BOOKMARK_SUBMIT_SUCCESS = "BOOKMARK_SUBMIT_SUCCESS";
var TRASH_BOOKMARK_SUBMIT_SUCCESS = exports.TRASH_BOOKMARK_SUBMIT_SUCCESS = "TRASH_BOOKMARK_SUBMIT_SUCCESS";
var TRASH_FOLDER_SUBMIT_SUCCESS = exports.TRASH_FOLDER_SUBMIT_SUCCESS = "TRASH_FOLDER_SUBMIT_SUCCESS";
var UPDATE_COMMENTS_SUBMIT_SUCCESS = exports.UPDATE_COMMENTS_SUBMIT_SUCCESS = "UPDATE_COMMENTS_SUBMIT_SUCCESS";
var MOVE_BOOKMARK_SUBMIT_SUCCESS = exports.MOVE_BOOKMARK_SUBMIT_SUCCESS = "MOVE_BOOKMARK_SUBMIT_SUCCESS";
var BOOKMARK_SUBMIT_FAILED = exports.BOOKMARK_SUBMIT_FAILED = "BOOKMARK_SUBMIT_FAILED";
var LOAD_BOOKMARK = exports.LOAD_BOOKMARK = "LOAD_BOOKMARK";

/* eslint-disable no-undef, no-unused-vars */
var updateFolder = exports.updateFolder = function updateFolder(locale, baseUrl, folderId, label) {
  var bookmarkAjaxService = new _bookmarkAjaxService["default"](locale, baseUrl);
  // $FlowFixMe
  if (false) {
    return function (dispatch) {
      return bookmarkAjaxService.updateFolder(folderId, label).then(function (_ref) {
        var data = _ref.data;
        dispatch(data.responseStatus === 200 ? folderSubmitSuccess(folderId, label) : bookmarkSubmitFailed(folderId, label));
      });
    };
  }
};

/* eslint-disable no-undef, no-unused-vars */
var updateComments = exports.updateComments = function updateComments(locale, baseUrl, bookmarkId, folderId, comments) {
  var bookmarkAjaxService = new _bookmarkAjaxService["default"](locale, baseUrl);
  // $FlowFixMe
  if (false) {
    return function (dispatch) {
      return bookmarkAjaxService.updateComments(bookmarkId, folderId, comments).then(function (_ref2) {
        var data = _ref2.data;
        dispatch(data.responseStatus === 200 ? updateCommentsSubmitSuccess(bookmarkId, folderId, comments) : bookmarkSubmitFailed(folderId, ""));
      });
    };
  }
};

/* eslint-disable no-undef, no-unused-vars */
var moveBookmarks = exports.moveBookmarks = function moveBookmarks(locale, baseUrl, moveObject) {
  var bookmarkAjaxService = new _bookmarkAjaxService["default"](locale, baseUrl);
  // $FlowFixMe
  if (false) {
    return function (dispatch) {
      return bookmarkAjaxService.moveBookmarks(moveObject.bookmarkId, moveObject.srcFolderId, moveObject.folderIds, moveObject.newFolder, moveObject.label).then(function (_ref3) {
        var data = _ref3.data;
        dispatch(data.responseStatus === 200 ? moveBookmarkSubmitSuccess(moveObject, data.content) : bookmarkSubmitFailed(moveObject.srcFolderId, ""));
      });
    };
  }
};

/* eslint-enable no-undef, no-unused-vars */
var moveBookmarkSubmitSuccess = exports.moveBookmarkSubmitSuccess = function moveBookmarkSubmitSuccess(moveObject, responseContent) {
  return {
    type: MOVE_BOOKMARK_SUBMIT_SUCCESS,
    moveBookmarks: moveObject,
    payload: {
      data: responseContent,
      success: true
    }
  };
};

/* eslint-disable no-undef, no-unused-vars */
var deleteBookmarks = exports.deleteBookmarks = function deleteBookmarks(folderId, itemId) {
  var bookmarkAjaxService = new _bookmarkAjaxService["default"]();
  // $FlowFixMe
  if (false) {
    return function (dispatch) {
      return bookmarkAjaxService.deleteBookmarks(folderId, itemId).then(function (_ref4) {
        var data = _ref4.data;
        dispatch(data.responseStatus === 200 ? bookmarkSubmitSuccess(folderId, "") : bookmarkSubmitFailed(folderId, ""));
      });
    };
  }
};
/* eslint-disable no-undef, no-unused-vars */
var trashBookmark = exports.trashBookmark = function trashBookmark(locale, baseUrl, folderId, itemId) {
  var bookmarkAjaxService = new _bookmarkAjaxService["default"](locale, baseUrl);
  // $FlowFixMe
  if (false) {
    return function (dispatch) {
      return bookmarkAjaxService.deleteBookmarks(folderId, itemId).then(function (_ref5) {
        var data = _ref5.data;
        dispatch(data.responseStatus === 200 ? trashBookmarkSubmitSuccess(folderId, itemId) : bookmarkSubmitFailed(folderId, ""));
      });
    };
  }
};

/* eslint-enable no-undef, no-unused-vars */
var trashBookmarkSubmitSuccess = exports.trashBookmarkSubmitSuccess = function trashBookmarkSubmitSuccess(folderId, itemId) {
  return {
    type: TRASH_BOOKMARK_SUBMIT_SUCCESS,
    bookmark: {
      folderId: folderId,
      itemId: itemId
    },
    payload: {
      success: true
    }
  };
};

/* eslint-enable no-undef, no-unused-vars */
var folderSubmitSuccess = exports.folderSubmitSuccess = function folderSubmitSuccess(folderId, label) {
  return {
    type: FOLDER_SUBMIT_SUCCESS,
    payload: {
      success: true,
      data: {
        folderId: folderId,
        label: label
      }
    }
  };
};

/* eslint-enable no-undef, no-unused-vars */
var bookmarkSubmitSuccess = exports.bookmarkSubmitSuccess = function bookmarkSubmitSuccess(folderId, label) {
  return {
    type: BOOKMARK_SUBMIT_SUCCESS,
    payload: {
      success: true,
      data: {
        folderId: folderId,
        label: label
      }
    }
  };
};

/* eslint-disable no-undef, no-unused-vars */
var trashFolder = exports.trashFolder = function trashFolder(locale, baseUrl, folder) {
  var bookmarkAjaxService = new _bookmarkAjaxService["default"](locale, baseUrl);
  // $FlowFixMe
  if (false) {
    return function (dispatch) {
      return bookmarkAjaxService.deleteFolder(folder.id).then(function (_ref6) {
        var data = _ref6.data;
        dispatch(data.responseStatus === 200 ? trashFolderSubmitSuccess(folder) : bookmarkSubmitFailed(folder.id, ""));
      });
    };
  }
};

/* eslint-enable no-undef, no-unused-vars */
var trashFolderSubmitSuccess = exports.trashFolderSubmitSuccess = function trashFolderSubmitSuccess(folder) {
  return {
    type: TRASH_FOLDER_SUBMIT_SUCCESS,
    folder: folder,
    payload: {
      success: true
    }
  };
};

/* eslint-enable no-undef, no-unused-vars */
var updateCommentsSubmitSuccess = exports.updateCommentsSubmitSuccess = function updateCommentsSubmitSuccess(bookmarkId, folderId, comments) {
  return {
    type: UPDATE_COMMENTS_SUBMIT_SUCCESS,
    payload: {
      data: {
        bookmarkId: bookmarkId,
        folderId: folderId,
        comments: comments
      },
      success: true
    }
  };
};
var bookmarkSubmitFailed = exports.bookmarkSubmitFailed = function bookmarkSubmitFailed(folderId, label) {
  return {
    type: BOOKMARK_SUBMIT_FAILED,
    payload: {
      success: false,
      data: {
        folderId: folderId,
        label: label
      }
    }
  };
};

/* eslint-enable no-undef, no-unused-vars */
var loadFolders = exports.loadFolders = function loadFolders(folders) {
  return {
    type: LOAD_BOOKMARK,
    payload: {
      folders: folders
    }
  };
};