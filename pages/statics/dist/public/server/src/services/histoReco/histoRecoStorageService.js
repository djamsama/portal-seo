"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteAllItemFromStorage = deleteAllItemFromStorage;
exports.deleteFromStorage = deleteFromStorage;
exports.deleteItemFromStorage = deleteItemFromStorage;
exports.saveInStorage = exports.getFromStorage = void 0;
/**
 * Sauvegarde l'element dans le stockage choisi(ici le localstorage du naviguateur)
 *
 * @param {*} key
 * @param {*} language le language de la page
 * @param {*} path le path de la route
 * @param {*} data la liste des messages à sauvegarder
 */
var saveInStorage = exports.saveInStorage = function saveInStorage(key, language, data) {
  var max = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;
  if (!window || typeof window.localStorage === "undefined") {
    return;
  }
  var newData = data;
  var maxRecords = max || 5;
  if (newData.length > maxRecords) {
    // tableau
    newData.shift();
  }
  window.localStorage.setItem("".concat(key, "_").concat(language), JSON.stringify(newData));
};
function getLocalStorage(key, language, newId) {
  if (!window || typeof window.localStorage === "undefined") {
    return [];
  }
  var response = [];
  if (window && typeof window.localStorage !== "undefined") {
    var temp = window.localStorage.getItem("".concat(key, "_").concat(language));
    if (temp !== undefined && temp !== null) {
      response = JSON.parse(temp);
      if (newId) {
        response = response.filter(function (id) {
          return id !== newId;
        });
      }
    }
  }
  return response;
}
function deleteFromStorage(key, language) {
  saveInStorage(key, language, {
    isFilled: false
  });
  return true;
}
function deleteAllItemFromStorage(key, language) {
  if (window && typeof window.localStorage !== "undefined") {
    window.localStorage.removeItem("".concat(key, "_").concat(language));
    return true;
  }
  return false;
}
function deleteItemFromStorage(value, key, language) {
  var inStorage = getLocalStorage(key, language);
  var index = inStorage.indexOf(value);
  if (index > -1) {
    inStorage.splice(index, 1);
    if (inStorage.length === 0) {
      window.localStorage.removeItem("".concat(key, "_").concat(language));
    } else {
      window.localStorage.setItem("".concat(key, "_").concat(language), JSON.stringify(inStorage));
    }
  }
  return inStorage;
}

/**
 * Recuperation de l'element dans le stockage.(ici le localstorage du naviguateur)
 *
 * @param {*} key
 * @param {*} language
 * @param {*} path
 */
var getFromStorage = exports.getFromStorage = function getFromStorage(key, language) {
  var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var data = getLocalStorage(key, language, id);
  return data;
};