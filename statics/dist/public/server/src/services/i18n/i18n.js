"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTranslation = void 0;
var _rxjs = require("rxjs");
var _i18nStorage = require("./i18nStorage");
var _I18nCatalog = require("../../models/I18nCatalog");
var _translationRequestSevice = require("../impl/translationRequestSevice");
/* MOCK */
// eslint-disable-next-line
var MockAdapter = require("axios-mock-adapter");
/* MOCK */

var getTranslation = exports.getTranslation = function getTranslation(_ref) {
  var language = _ref.language,
    route = _ref.route;
  var localI18n = (0, _i18nStorage.getFromStorage)("i18n", language, route);
  /* eslint-disable no-undef */
  // $FlowFixMe
  if (localI18n.version >= "\"0.0.1\"" && typeof language !== "undefined") {
    return (0, _rxjs.of)({
      data: localI18n.catalog.get(language)
    });
  }
  // Désactivation i18n
  // const data = require("../../../dist/public/locales/data.json");
  var data = {
    welcome: "welcome",
    infoTestComponent: "infoTestComponent",
    infoHomeComponent: "infoHomeComponent"
  };

  /* MOCK */
  var mock = new MockAdapter(_translationRequestSevice.translationRequestSevice.request);
  // Désactivation i18n
  // let mockData = data[language] || {
  var mockData = {
    welcome: "welcome",
    infoTestComponent: "infoTestComponent",
    infoHomeComponent: "infoHomeComponent"
  };
  mock.onPost("ajax/i18n/translate.json").reply(200, mockData);
  /* MOCK */

  return (0, _rxjs.from)(_translationRequestSevice.translationRequestSevice.post("ajax/i18n/translate.json", encodeURIComponent(JSON.stringify({
    i18n: data[language]
  }))));

  /* eslint-enable no-undef */
};