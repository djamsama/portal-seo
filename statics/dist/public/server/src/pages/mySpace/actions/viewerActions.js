"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasMySpaceAccount = exports["default"] = exports.HAS_MY_SPACE_ACCOUNT_SUCCESS = exports.HAS_MY_SPACE_ACCOUNT_FAILURE = void 0;
var _viewerService = _interopRequireDefault(require("../../../services/impl/viewerService"));
var HAS_MY_SPACE_ACCOUNT_SUCCESS = exports.HAS_MY_SPACE_ACCOUNT_SUCCESS = "HAS_MY_SPACE_ACCOUNT_SUCCESS";
var HAS_MY_SPACE_ACCOUNT_FAILURE = exports.HAS_MY_SPACE_ACCOUNT_FAILURE = "HAS_MY_SPACE_ACCOUNT_FAILURE";
/**
 * Verification de l'existence du compte mySpace du visiteur.
 * @param {*} context Le contexte
 */
var hasMySpaceAccount = exports.hasMySpaceAccount = function hasMySpaceAccount(context) {
  var viewerService = new _viewerService["default"]();
  return function (dispatch) {
    return viewerService.hasMySpaceAccount(context).then(function (_ref) {
      var data = _ref.data;
      if (data.responseStatus !== 200) {
        // Un code retour différent de 200 signifie que la communication avec le serveur a échoué
        throw new Error();
      }
      // Sinon le serveur a bien renvoyé le résultat, on propage sa valeur
      if (data === undefined || data.content === undefined || data.content.accountExists === undefined) {
        throw new Error();
      }
      return data.content.accountExists;
    });
  };
};
var _default = exports["default"] = {};