"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTranslationEpic = void 0;
var _operators = require("rxjs/operators");
var _reduxObservable = require("redux-observable");
var _i18n = require("../services/i18n/i18n");
var _i18nStorage = require("../services/i18n/i18nStorage");
var _index = require("../actions/index");
var getTranslationEpic = exports.getTranslationEpic = function getTranslationEpic(action$) {
  return action$.pipe((0, _reduxObservable.ofType)(_index.LOAD_TRANSLATION), (0, _operators.mergeMap)(function (action) {
    return (0, _i18n.getTranslation)(action.payload).map(function (response) {
      var data = {};
      var _action$payload = action.payload,
        language = _action$payload.language,
        route = _action$payload.route;
      data[language] = response.data;
      (0, _i18nStorage.saveInStorage)("i18n", language, route, JSON.stringify({
        version: "\"0.0.1\"",
        data: data
      }) // eslint-disable-line
      );
      return {
        type: _index.TRANSLATIONS_LOADED,
        payload: data[language]
      };
    });
  }));
};