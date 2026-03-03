"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BookmarkReducer = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var Action = _interopRequireWildcard(require("../actions/bookmarkActions"));
var _grabberActions = require("../../../actions/grabberActions");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } /* eslint-disable radix */
var BookmarkReducer = exports.BookmarkReducer = function BookmarkReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newState = _objectSpread({}, state);
  switch (action.type) {
    case Action.BOOKMARK_SUBMIT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        success: true,
        data: action.payload.data
      });
    /** **   Changement d'un commentaire d'un favori     *** */
    /* eslint-disable no-case-declarations */
    case Action.TRASH_FOLDER_SUBMIT_SUCCESS:
      var index = newState.folders.indexOf(action.folder);
      if (index !== -1) {
        newState.folders.splice(index, 1);
      }
      return _objectSpread(_objectSpread({}, newState), {}, {
        success: true
      });
    case Action.UPDATE_COMMENTS_SUBMIT_SUCCESS:
      if (action && action.payload && action.payload.data) {
        var _indexFolderSrc = newState.folders.map(function (f) {
          return f.id;
        }).indexOf(parseInt(action.payload.data.folderId));
        if (_indexFolderSrc !== -1) {
          var indexBoormark = newState.folders[_indexFolderSrc].bookmarks.map(function (b) {
            return b.id;
          }).indexOf(parseInt(action.payload.data.bookmarkId));
          if (indexBoormark !== -1) {
            newState.folders[_indexFolderSrc].bookmarks[indexBoormark].comments = action.payload.data.comments;
            return _objectSpread(_objectSpread({}, newState), {}, {
              success: true
            });
          }
        }
      }
      return state;
    case Action.FOLDER_SUBMIT_SUCCESS:
      if (action && action.payload && action.payload.data) {
        var _indexFolderSrc2 = newState.folders.map(function (f) {
          return f.id;
        }).indexOf(parseInt(action.payload.data.folderId));
        if (_indexFolderSrc2 !== -1) {
          newState.folders[_indexFolderSrc2].label = action.payload.data.label;
          return _objectSpread(_objectSpread({}, newState), {}, {
            success: true
          });
        }
      }
      return state;

    /** **          Suppression d'un favori           *** */
    case Action.TRASH_BOOKMARK_SUBMIT_SUCCESS:
      if (!action.bookmark) {
        return state;
      }
      var indexFolder = newState.folders.map(function (f) {
        return f.id;
      }).indexOf(action.bookmark.folderId);
      if (indexFolder !== -1) {
        // On a trouvé le dossier on cherche le favori
        var indexBookmark = newState.folders[indexFolder].bookmarks.map(function (b) {
          return b.id;
        }).indexOf(action.bookmark.itemId);
        if (indexBookmark !== -1) {
          // On a trouvé le favori on le supprime
          newState.folders[indexFolder].bookmarks.splice(indexBookmark, 1);
        }
      }
      return _objectSpread(_objectSpread({}, newState), {}, {
        success: true
      });

    /** **        Deplacement d'un favori           *** */
    case Action.MOVE_BOOKMARK_SUBMIT_SUCCESS:
      if (!action.moveBookmarks) {
        return state;
      }
      // Quel est le dossier de départ ?
      var indexFolderSrc = newState.folders.map(function (f) {
        return f.id;
      }).indexOf(parseInt(action.moveBookmarks.srcFolderId));
      // On n'a pas trouver le folder du bookmark à deplacer
      if (indexFolderSrc === -1) {
        return state;
      }
      // On recupere le bookmark a deplacer
      var indexBookmarkSrc = newState.folders[indexFolderSrc].bookmarks.map(function (b) {
        return b.id;
      }).indexOf(action.moveBookmarks.bookmarkId);
      // On n'a pas trouver le bookmark à déplacer
      if (indexBookmarkSrc === -1) {
        return state;
      }
      var bookmarkToMove = newState.folders[indexFolderSrc].bookmarks[indexBookmarkSrc];

      // On ajoute le bookmark dans les folders où il est à déplacer
      action.moveBookmarks.folderIds.map(function (folderId) {
        var index = newState.folders.map(function (f) {
          return f.id;
        }).indexOf(parseInt(folderId));
        if (index !== -1) {
          newState.folders[index].bookmarks.push(bookmarkToMove);
        }
      });

      // C'est le folder "favori à classer" on supprime le bookmark
      if (indexFolderSrc !== -1 && newState.folders[indexFolderSrc].defaultFolder) {
        var _indexBookmark = newState.folders[indexFolderSrc].bookmarks.map(function (b) {
          return b.id;
        }).indexOf(action.moveBookmarks.bookmarkId);
        if (_indexBookmark !== -1) {
          newState.folders[indexFolderSrc].bookmarks.splice(_indexBookmark, 1);
        }
      }
      // Il y a un nouveau folder
      if (action.payload.data && action.payload.data.folderId) {
        newState.folders.push({
          id: action.payload.data.folderId,
          bookmarks: [bookmarkToMove],
          defaultFolder: false,
          label: action.moveBookmarks.label,
          owner: null,
          shared: false,
          sharedWith: false
        });
      }
      return _objectSpread(_objectSpread({}, newState), {}, {
        success: true
      });
    case Action.BOOKMARK_SUBMIT_FAILED:
      return _objectSpread(_objectSpread({}, state), {}, {
        success: false,
        data: action.payload.data
      });
    /** **        on popule les favoris        *** */
    case Action.LOAD_BOOKMARK:
      return _objectSpread(_objectSpread({}, state), {}, {
        folders: action.payload.folders
      });
    /** **        on popule les favoris        *** */
    case _grabberActions.GRABBER_UPDATE:
      return _objectSpread(_objectSpread({}, state), {}, {
        products: action.payload.products
      });
    default:
      return state;
  }
};