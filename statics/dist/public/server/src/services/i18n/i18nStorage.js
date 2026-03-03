"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveInStorage = exports.getFromStorage = void 0;
var _I18nCatalog = require("../../models/I18nCatalog");
/**
 * Sauvegarde l'element dans le stockage choisi(ici le localstorage du naviguateur)
 *
 * @param {*} key
 * @param {*} language le language de la page
 * @param {*} path le path de la route
 * @param {*} data la liste des messages à sauvegarder
 */
var saveInStorage = exports.saveInStorage = function saveInStorage(key, language, path, data) {
  localStorage.setItem("".concat(key, "_").concat(language, "_").concat(path.replace("/", "")), data);
};

/**
 * Recuperation de l'element dans le stockage.(ici le localstorage du naviguateur)
 *
 * @param {*} key
 * @param {*} language
 * @param {*} path
 */
var getFromStorage = exports.getFromStorage = function getFromStorage(key, language, path) {
  var response = new _I18nCatalog.I18nCatalog();
  if (path != null) {
    var _data = getLocalStorage(key, language, path);
    if (_data !== "") {
      response.getCatalogFromString(_data);
    }
  }
  return response;
};
function getLocalStorage(key, language, path) {
  var response = "";
  if (typeof localStorage !== "undefined") {
    var temp = localStorage.getItem("".concat(key, "_").concat(language, "_").concat(path.replace("/", "")));
    if (temp !== undefined && temp !== null) {
      response = temp;
    }
  }
  return response;
}