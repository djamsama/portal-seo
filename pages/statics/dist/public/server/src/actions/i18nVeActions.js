"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translationsLoaded = exports.loadTranslations = exports["default"] = exports.TRANSLATIONS_LOADED = exports.LOAD_TRANSLATION = void 0;
var _I18nCatalog = require("../models/I18nCatalog");
var TRANSLATIONS_LOADED = exports.TRANSLATIONS_LOADED = "TRANSLATIONS_LOADED";
var LOAD_TRANSLATION = exports.LOAD_TRANSLATION = "LOAD_TRANSLATION";
var translationsLoaded = exports.translationsLoaded = function translationsLoaded(messages) {
  return {
    type: TRANSLATIONS_LOADED,
    payload: messages
  };
};
var loadTranslations = exports.loadTranslations = function loadTranslations(language, route) {
  return {
    type: LOAD_TRANSLATION,
    payload: {
      language: language,
      route: route
    }
  };
};
var _default = exports["default"] = {};