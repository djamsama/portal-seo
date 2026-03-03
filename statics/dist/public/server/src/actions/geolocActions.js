"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setGeolocChanged = exports["default"] = exports.SET_GEOLOC_CHANGED = void 0;
var SET_GEOLOC_CHANGED = exports.SET_GEOLOC_CHANGED = "SET_GEOLOC_CHANGED";

/**
 * Met à jour le statut de changement de géolocalisation
 * @param {boolean} value - La valeur indiquant si la géolocalisation a changé
 * @returns {Object} - L'objet action avec le type et le payload
 */
var setGeolocChanged = exports.setGeolocChanged = function setGeolocChanged(value) {
  return {
    type: SET_GEOLOC_CHANGED,
    payload: value
  };
};
var _default = exports["default"] = {};