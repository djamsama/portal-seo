"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _requestService = _interopRequireDefault(require("./requestService"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var BookmarkAjaxService = /*#__PURE__*/function (_RequestService) {
  /**
   * base url bookmark ajax
   */

  /**
   * base url bookmark anonyme ajax.
   */

  function BookmarkAjaxService(locale, baseUrl) {
    var _this;
    (0, _classCallCheck2["default"])(this, BookmarkAjaxService);
    _this = _callSuper(this, BookmarkAjaxService, [{
      baseUrl: baseUrl,
      locale: locale
    }]);
    _this.bookmarkUrl = "/ajax/myspace/secure/";
    _this.bookmarkWsBaseUrl = "/ajax/myspace/ws/";
    return _this;
  }

  /**
   * Création du dossier favori
   *
   * @param {number} bookmarkId Identifiant du favori dans lequel il sera ajouté
   * @param {number} srcFolderId Identifiant du dossier source du favori
   * @param {Array<number>} folderIds Liste des identifiants des dossiers sélectionnés pour ajouter le favori
   * @param {*} newFolder Nouveau dossier
   * @param {*} label label du dossier
   */
  (0, _inherits2["default"])(BookmarkAjaxService, _RequestService);
  return (0, _createClass2["default"])(BookmarkAjaxService, [{
    key: "createFolder",
    value: function createFolder(bookmarkId, srcFolderId, folderIds, newFolder, label) {
      return this.post("".concat(this.bookmarkUrl, "folder"), {
        bookmarkId: bookmarkId,
        srcFolderId: srcFolderId,
        folderIds: folderIds,
        newFolder: newFolder,
        label: label
      });
    }

    /**
     *  Mise à jour du label d'un dossier
     *
     * @param {number} id identifiant du dossier à mettre à jour
     * @param {string} label label mis à jour
     */
  }, {
    key: "updateFolder",
    value: function updateFolder(id, label) {
      return this.put("".concat(this.bookmarkUrl, "folder"), {
        id: id,
        label: label
      });
    }

    /**
     *  Suppression d'un dossier
     * @param {number} id identifiant du dossier à supprimer
     */
  }, {
    key: "deleteFolder",
    value: function deleteFolder(id) {
      return this["delete"]("".concat(this.bookmarkUrl, "folder/").concat(id));
    }

    /**
     *
     * @param {number} bookmarkId identifiant du favori
     * @param {number} folderId
     * @param {*} comments
     */
  }, {
    key: "updateComments",
    value: function updateComments(bookmarkId, folderId, comments) {
      return this.post("".concat(this.bookmarkUrl, "bookmarkUpdate"), {
        bookmarkId: bookmarkId,
        folderId: folderId,
        comments: comments
      });
    }
  }, {
    key: "moveBookmarks",
    value: function moveBookmarks(bookmarkId, srcFolderId, folderIds, newFolder, label) {
      return this.post("".concat(this.bookmarkUrl, "bookmark"), {
        bookmarkId: bookmarkId,
        srcFolderId: srcFolderId,
        folderIds: folderIds,
        newFolder: newFolder,
        label: label
      });
    }
  }, {
    key: "deleteBookmarks",
    value: function deleteBookmarks(folderId, itemId) {
      return this["delete"]("".concat(this.bookmarkUrl, "bookmark/").concat(folderId, "/").concat(itemId));
    }

    /** Suppression d'un favoris tous dossiers confondus à partir de son ID et de son type. */
  }, {
    key: "deleteBookmark",
    value: function deleteBookmark(entityId, entityType) {
      return this["delete"]("".concat(this.bookmarkUrl, "bookmark/entity/").concat(entityType, "/").concat(entityId));
    }

    /**
     * Ajout d'un élément au dossier "A classer" des favoris.
     * @param {*} itemId L'ID de l'élement
     */
  }, {
    key: "addBookmark",
    value: function addBookmark(entityId, entityType, folderIds) {
      return this.post("".concat(this.bookmarkWsBaseUrl, "bookmark"), {
        entityId: entityId,
        entityType: entityType,
        folderIds: folderIds
      });
    }

    /** Vérification de l'existance d'un favoris tous dossiers confondus à partir d'un ID d'entité et de son type. */
  }, {
    key: "isBookmarked",
    value: function isBookmarked(entityId, entityType) {
      // $FlowFixMe BOOKMARK_TYPE_TYPE est string
      return this.get("".concat(this.bookmarkUrl, "bookmark/entity/").concat(entityType, "/").concat(entityId));
    }
  }]);
}(_requestService["default"]);
var _default = exports["default"] = BookmarkAjaxService;