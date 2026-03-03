"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STORAGE_TYPE = void 0;
exports.deleteAllItemFromStorage = deleteAllItemFromStorage;
exports.deleteFromStorage = deleteFromStorage;
exports.saveInStorage = exports.getFromStorage = void 0;
var _logger = _interopRequireDefault(require("../../components/logger"));
var STORAGE_TYPE = exports.STORAGE_TYPE = {
  ARRAY: "array",
  OBJECT: "object"
};

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
  var arrayCurrent = Object.entries(data);
  if (arrayCurrent.length > maxRecords) {
    arrayCurrent.shift();
    newData = Object.fromEntries(arrayCurrent);
  }
  newData.isFilled = true;
  window.localStorage.setItem("".concat(key, "_").concat(language), JSON.stringify(newData));
};
function getLocalStorage(key, language) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : STORAGE_TYPE.OBJECT;
  if (!window || typeof window.localStorage === "undefined") {
    return type === STORAGE_TYPE.ARRAY ? [] : {};
  }
  var response = type === STORAGE_TYPE.ARRAY ? [] : {
    isFilled: false
  };
  if (window && typeof window.localStorage !== "undefined") {
    var temp = window.localStorage.getItem("".concat(key, "_").concat(language));
    if (temp && temp !== undefined && temp !== null && temp[0] && temp[0] === "{") {
      try {
        response = JSON.parse(temp);
      } catch (error) {
        _logger["default"].error("Error on search history", error);
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

/**
 * Recuperation de l'element dans le stockage.(ici le localstorage du naviguateur)
 *
 * @param {*} key
 * @param {*} language
 * @param {*} path
 */
var getFromStorage = exports.getFromStorage = function getFromStorage(key, language) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : STORAGE_TYPE.OBJECT;
  var data = getLocalStorage(key, language, type);
  return data;
};