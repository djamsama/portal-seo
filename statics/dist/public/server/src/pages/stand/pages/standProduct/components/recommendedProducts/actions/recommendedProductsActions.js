"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recommendedProductsRetrieved = exports.getRecommendedProducts = exports["default"] = exports.RECOMMENDED_PRODUCTS_RETRIEVED = void 0;
var _kwrefService = _interopRequireDefault(require("../../../../../../../services/impl/kwrefService"));
var RECOMMENDED_PRODUCTS_RETRIEVED = exports.RECOMMENDED_PRODUCTS_RETRIEVED = "RECOMMENDED_PRODUCTS_RETRIEVED";

/** Recos produits remontées. */
var recommendedProductsRetrieved = exports.recommendedProductsRetrieved = function recommendedProductsRetrieved(kwrefId, content, activeSuppliers) {
  return {
    type: RECOMMENDED_PRODUCTS_RETRIEVED,
    payload: {
      kwrefId: kwrefId,
      products: content.products,
      kwRefLink: content.kwRefLink,
      activeSuppliers: activeSuppliers
    }
  };
};

/**
 * Récupération de la liste des produits recommandés.
 * @param {string} locale La locale de l'utilisateur
 * @param {string} baseUrl L'URL de base
 * @param {number} kwrefId L'ID du kwref
 * @param {number} companyId L'ID dde la société
 * @param {number} productId L'ID du produit
 */
var getRecommendedProducts = exports.getRecommendedProducts = function getRecommendedProducts(locale, baseUrl, kwrefId, companyId, productId, activeSuppliers) {
  var kwrefService = new _kwrefService["default"](locale, baseUrl);
  // $FlowFixMe
  return function (dispatch) {
    if (!activeSuppliers) {
      return kwrefService.getRecommendedProducts(kwrefId, companyId, productId).then(function (_ref) {
        var data = _ref.data;
        if (data && (data.responseStatus === 200 || data.responseStatus === 201)) {
          // Un code retour en 2** signifie que la requête a été traité avec succès
          return dispatch(recommendedProductsRetrieved(kwrefId, data ? data.content : {}, activeSuppliers));
        }
        return undefined;
      });
    }
    return dispatch(recommendedProductsRetrieved(kwrefId, {}, activeSuppliers));
  };
};
var _default = exports["default"] = {};