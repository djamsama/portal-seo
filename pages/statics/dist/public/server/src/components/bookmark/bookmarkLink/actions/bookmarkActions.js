"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFromBookmarks = exports.isBookmarked = exports.hasMySpaceAccount = exports["default"] = exports.bookmarkDeleted = exports.bookmarkChecked = exports.bookmarkAdded = exports.addToBookmarks = exports.BOOKMARK_TYPE = exports.BOOKMARK_DELETED = exports.BOOKMARK_CHECKED = exports.BOOKMARK_ADDED = void 0;
var _mySpaceAccountService = _interopRequireDefault(require("../../../../services/impl/mySpaceAccountService"));
var _bookmarkAjaxService = _interopRequireDefault(require("../../../../services/impl/bookmarkAjaxService"));
var BOOKMARK_ADDED = exports.BOOKMARK_ADDED = "BOOKMARK_ADDED";
var BOOKMARK_DELETED = exports.BOOKMARK_DELETED = "BOOKMARK_DELETED";
var BOOKMARK_CHECKED = exports.BOOKMARK_CHECKED = "BOOKMARK_CHECKED";
var BOOKMARK_TYPE = exports.BOOKMARK_TYPE = {
  PRODUCT: "PRODUCT",
  PDF: "PDF",
  PDF_DETAILS: "PDF_DETAILS",
  PROJECT: "PROJECT",
  RFQ: "RFQ"
};

/**
 * Verification de l'existence du compte mySpace du visiteur.
 * @param {*} context Le contexte
 */
var hasMySpaceAccount = exports.hasMySpaceAccount = function hasMySpaceAccount(context) {
  var mySpaceAccountService = new _mySpaceAccountService["default"](context);
  return function () {
    return mySpaceAccountService.hasMySpaceAccount(context).then(function (_ref) {
      var data = _ref.data;
      if (data.responseStatus !== 200) {
        // Un code retour différent de 200 signifie que la communication avec le serveur a échoué
        throw new Error();
      }
      // Un réponse mal structurée résulte en erreur
      if (data === undefined || data.content === undefined || data.content.accountExists === undefined) {
        throw new Error();
      }
      // Sinon le serveur a bien renvoyé le résultat, on propage sa valeur
      return data.content.accountExists;
    });
  };
};

/**
 * Verification de la présence dans les favoris du visiteur.
 */
var isBookmarked = exports.isBookmarked = function isBookmarked(locale, baseUrl, entityId) {
  var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : BOOKMARK_TYPE.PRODUCT;
  var bookmarkService = new _bookmarkAjaxService["default"](locale, baseUrl);
  // $FlowFixMe
  return function (dispatch) {
    return bookmarkService.isBookmarked(entityId, type).then(function (_ref2) {
      var data = _ref2.data;
      if (data && (data.responseStatus === 200 || data.responseStatus === 201)) {
        // Un code retour en 2** signifie que la requête a été traité avec succès
        // eslint-disable-next-line no-use-before-define
        return dispatch(bookmarkChecked(entityId, data));
      }
      return undefined;
    });
  };
};

/** Bookmark ajouté. */
var bookmarkAdded = exports.bookmarkAdded = function bookmarkAdded(entityId, data) {
  return {
    type: BOOKMARK_ADDED,
    payload: {
      entityId: entityId,
      data: data
    }
  };
};

/** Bookmark supprimé. */
var bookmarkDeleted = exports.bookmarkDeleted = function bookmarkDeleted(entityId, data) {
  return {
    type: BOOKMARK_DELETED,
    payload: {
      entityId: entityId,
      data: data
    }
  };
};

/** Bookmark testé. */
var bookmarkChecked = exports.bookmarkChecked = function bookmarkChecked(entityId, data) {
  return {
    type: BOOKMARK_CHECKED,
    payload: {
      entityId: entityId,
      data: data
    }
  };
};

/**
 * Ajout du produit aux favoris.
 */
var addToBookmarks = exports.addToBookmarks = function addToBookmarks(locale, baseUrl, entityId) {
  var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : BOOKMARK_TYPE.PRODUCT;
  var bookmarkService = new _bookmarkAjaxService["default"](locale, baseUrl);
  // $FlowFixMe
  return function (dispatch) {
    return (
      // $FlowFixMe BOOKMARK_TYPE_TYPE est string
      bookmarkService.addBookmark(entityId, type, []).then(function (_ref3) {
        var data = _ref3.data;
        if (data && (data.responseStatus === 200 || data.responseStatus === 201)) {
          // Un code retour en 2** signifie que le produit a bien été ajouté aux favoris
          return dispatch(bookmarkAdded(entityId, data));
        }
        return undefined;
      })
    );
  };
};

/**
 * Ajout du produit aux favoris.
 */
var removeFromBookmarks = exports.removeFromBookmarks = function removeFromBookmarks(locale, baseUrl, entityId) {
  var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : BOOKMARK_TYPE.PRODUCT;
  var bookmarkService = new _bookmarkAjaxService["default"](locale, baseUrl);
  // $FlowFixMe
  return function (dispatch) {
    return (
      // $FlowFixMe BOOKMARK_TYPE_TYPE est string
      bookmarkService.deleteBookmark(entityId, type).then(function (_ref4) {
        var data = _ref4.data;
        if (data && (data.responseStatus === 200 || data.responseStatus === 201)) {
          // Un code retour en 2** signifie que le produit a bien été supprimé des favoris
          return dispatch(bookmarkDeleted(entityId, data));
        }
        return undefined;
      })
    );
  };
};
var _default = exports["default"] = {};