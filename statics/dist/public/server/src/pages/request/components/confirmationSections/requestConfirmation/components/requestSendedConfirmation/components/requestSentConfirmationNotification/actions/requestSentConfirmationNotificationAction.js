"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasMySpaceAccount = exports["default"] = void 0;
var _mySpaceAccountService = _interopRequireDefault(require("../../../../../../../../../../services/impl/mySpaceAccountService"));
/**
 * Verification de l'existence du compte mySpace du visiteur.
 * @param {*} context Le contexte
 */
var hasMySpaceAccount = exports.hasMySpaceAccount = function hasMySpaceAccount(context) {
  var mySpaceAccountService = new _mySpaceAccountService["default"](context);
  return function (dispatch) {
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
var _default = exports["default"] = {};