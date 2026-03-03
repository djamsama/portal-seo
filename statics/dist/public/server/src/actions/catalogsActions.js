"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPdfSuppliersASupprimer = exports.getCatalogButtons = exports["default"] = exports.CATALOGS_RETRIEVED = exports.CATALOGS_FAILURE = void 0;
var _catalogsService = _interopRequireDefault(require("../services/impl/catalogsService"));
var CATALOGS_RETRIEVED = exports.CATALOGS_RETRIEVED = "CATALOGS_RETRIEVED";
var CATALOGS_FAILURE = exports.CATALOGS_FAILURE = "SUPPLIERS_FAILURE";

/** Infos boutons remontés. */
var catalogButtonsRetrieved = function catalogButtonsRetrieved(content) {
  var _content$requestConta, _content$requestConta2, _content$requestConta3, _content$requestConta4, _content$requestConta5;
  return {
    type: CATALOGS_RETRIEVED,
    payload: {
      isLoading: false,
      suppliers: content ? content === null || content === void 0 || (_content$requestConta = content.requestContacts) === null || _content$requestConta === void 0 ? void 0 : _content$requestConta.requestContacts : [],
      requestButton: content ? content === null || content === void 0 || (_content$requestConta2 = content.requestContacts) === null || _content$requestConta2 === void 0 ? void 0 : _content$requestConta2.requestButton : null,
      requestButtonDoc: content && content !== null && content !== void 0 && (_content$requestConta3 = content.requestContacts) !== null && _content$requestConta3 !== void 0 && _content$requestConta3.requestButtonDoc ? content === null || content === void 0 || (_content$requestConta4 = content.requestContacts) === null || _content$requestConta4 === void 0 ? void 0 : _content$requestConta4.requestButtonDoc : null,
      drdCustomer: content ? content === null || content === void 0 || (_content$requestConta5 = content.requestContacts) === null || _content$requestConta5 === void 0 ? void 0 : _content$requestConta5.drdCustomer : null
    }
  };
};

/** Erreur lors de la remonté des fournisseurs. */
var catalogButtonsFailure = function catalogButtonsFailure(errors) {
  return {
    type: CATALOGS_RETRIEVED,
    payload: {
      isLoading: false,
      suppliers: [],
      requestButton: null,
      requestButtonDoc: null,
      drdCustomer: false,
      errors: errors
    }
  };
};

/**
 * Récupération de la liste des fournisseurs.
 *
 * @param {*} sourceType Le type de demande
 * @param {*} sourceId   L'ID de la source de la demande
 * @param {*} pageTypeId L'ID du type de page visitée
 * @param {*} companyId  L'ID de la société
 * @param {*} context    Le contexte
 */
var getCatalogButtons = exports.getCatalogButtons = function getCatalogButtons(sourceType, sourceId, pageTypeId, companyId, context) {
  var catalogService = new _catalogsService["default"](context);
  // $FlowFixMe
  return function (dispatch) {
    return catalogService.getCatalogButtons(sourceType, sourceId, pageTypeId, companyId).then(function (_ref) {
      var data = _ref.data;
      if (data && (data.responseStatus === 200 || data.responseStatus === 201)) {
        // Un code retour en 2** signifie que la requête a été traité avec succès
        return dispatch(catalogButtonsRetrieved(data && data.content ? data.content.data : {}));
      }
      return dispatch(catalogButtonsFailure(data && data.errors ? data.errors : []));
    });
  };
};

/**
 * Récupération de la liste des fournisseurs.
 *
 * @param {*} sourceType Le type de demande
 * @param {*} sourceId   L'ID de la source de la demande
 * @param {*} pageTypeId L'ID du type de page visitée
 * @param {*} companyId  L'ID de la société
 * @param {*} context    Le contexte
 */
var getPdfSuppliersASupprimer = exports.getPdfSuppliersASupprimer = function getPdfSuppliersASupprimer(sourceType, sourceId, pageTypeId, companyId, context) {
  var standService = new _catalogsService["default"](context);
  // $FlowFixMe
  return function (dispatch) {
    return standService.getCatalogButtons(sourceType, sourceId, pageTypeId, companyId).then(function (_ref2) {
      var data = _ref2.data;
      if (data && (data.responseStatus === 200 || data.responseStatus === 201)) {
        // Un code retour en 2** signifie que la requête a été traité avec succès
        return dispatch(catalogButtonsRetrieved(data && data.content ? data.content.data : {}));
      }
      return dispatch(catalogButtonsFailure(data && data.errors ? data.errors : []));
    });
  };
};
var _default = exports["default"] = {};