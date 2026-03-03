"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StandCatalogState = exports.StandCatalogReducerName = exports.StandCatalogReducer = void 0;
/**
 * Reducer utile pour les StateData de java.
 */
var StandCatalogReducerName = exports.StandCatalogReducerName = "StandCatalog";
var StandCatalogState = exports.StandCatalogState = {};
var StandCatalogReducer = exports.StandCatalogReducer = function StandCatalogReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : StandCatalogState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    default:
      return state;
  }
};