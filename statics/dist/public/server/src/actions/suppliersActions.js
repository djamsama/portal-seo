"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSuppliers = exports["default"] = exports.SUPPLIERS_RETRIEVED = exports.SUPPLIERS_FAILURE = void 0;
var _standService = _interopRequireDefault(require("../services/impl/standService"));
var SUPPLIERS_RETRIEVED = exports.SUPPLIERS_RETRIEVED = "SUPPLIERS_RETRIEVED";
var SUPPLIERS_FAILURE = exports.SUPPLIERS_FAILURE = "SUPPLIERS_FAILURE";

/** Fournisseurs remontés. */
var suppliersRetrieved = function suppliersRetrieved(content) {
  return {
    type: SUPPLIERS_RETRIEVED,
    payload: {
      isLoading: false,
      suppliers: content ? content.suppliers : [],
      requestButton: content ? content.requestButton : null,
      requestButtonDoc: content && content.requestButtonDoc ? content.requestButtonDoc : null,
      drdCustomer: content ? content.drdCustomer : null
    }
  };
};

/** Erreur lors de la remonté des fournisseurs. */
var suppliersFailure = function suppliersFailure(errors) {
  return {
    type: SUPPLIERS_RETRIEVED,
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
var getSuppliers = exports.getSuppliers = function getSuppliers(sourceType, sourceId, pageTypeId, companyId, context) {
  var standService = new _standService["default"](context);
  // $FlowFixMe
  return function (dispatch) {
    return standService.getSuppliers(sourceType, sourceId, pageTypeId, companyId).then(function (_ref) {
      var data = _ref.data;
      if (data && (data.responseStatus === 200 || data.responseStatus === 201)) {
        // Un code retour en 2** signifie que la requête a été traité avec succès
        return dispatch(suppliersRetrieved(data && data.content ? data.content.data : {}));
      }
      return dispatch(suppliersFailure(data && data.errors ? data.errors : []));
    });
  };
};
var _default = exports["default"] = {};