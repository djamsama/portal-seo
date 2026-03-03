"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
/* eslint-disable class-methods-use-this */var SITES_LANGUAGE_NO_EMAGS = {
  zh: true
};
var SITES_NO_EMAGS = {
  ar: true,
  ag: true,
  ne: true
};
var SITES_NEWSLETTER_NO_EMAGS = {
  ag: true,
  ar: true,
  ne: true
};
var SITES_NO_PROJECTS = {
  ne: true,
  me: true,
  ag: true,
  ar: true
};
var SITES_RSS_LINKS = {
  di: true,
  ae: true
};
var SpecificSiteHelper = /*#__PURE__*/function () {
  function SpecificSiteHelper() {
    (0, _classCallCheck2["default"])(this, SpecificSiteHelper);
  }
  return (0, _createClass2["default"])(SpecificSiteHelper, [{
    key: "isFunction",
    value:
    /**
     * Check si functionToCheck est vraiment une fonction
     *
     * @param {*} functionToCheck
     *
     * return true si functionToCheck est une fonction
     */
    function isFunction(functionToCheck) {
      return functionToCheck !== undefined && functionToCheck && {}.toString.call(functionToCheck) === "[object Function]";
    }

    /**
     * Check si le site courant doit afficher les projets
     *
     * @param {Portal} portal
     * @param {boolean} isExtendedLanguage
     *
     * return true si le site affiche des projets
     */
  }, {
    key: "isSiteWithProject",
    value: function isSiteWithProject(portal) {
      var isExtendedLanguage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!portal || !portal.site || isExtendedLanguage) {
        return false;
      }
      var codeSite = portal.site.toLowerCase();
      // Certains site n'ont pas de projet, dans ce cas il ne faut donc pas afficher les items "Projets", nouveau porjet ...
      return !(SITES_NO_PROJECTS[codeSite] !== undefined);
    }

    /**
     * Check si le site courant doit afficher les Emags
     *
     * @param {Portal} portal
     *
     * return true si le site affiche des Emags
     */
  }, {
    key: "isSiteWithEmags",
    value: function isSiteWithEmags(portal) {
      if (!portal || !portal.language) {
        return false;
      }
      var language = portal.language.toLowerCase();
      // Certains site n'ont pas d'emags, dans ce cas il ne faut donc pas afficher les items "Emags" ...
      var languageRestriction = !(SITES_LANGUAGE_NO_EMAGS[language] !== undefined);
      var codeSite = portal.site.toLowerCase();
      var siteRestriction = !(SITES_NO_EMAGS[codeSite] !== undefined);
      return siteRestriction && languageRestriction;
    }

    /**
     * Check si le site courant a des subscriptions aux Emags
     *
     * @param {Portal} portal
     *
     * return true si le site affiche des Emags
     */
  }, {
    key: "isSiteWithNewsletterEmags",
    value: function isSiteWithNewsletterEmags(portal) {
      if (!portal || !portal.site) {
        return false;
      }
      var codeSite = portal.site.toLowerCase();
      return typeof SITES_NEWSLETTER_NO_EMAGS[codeSite] === "undefined";
    }

    /**
     * Check si le site courant doit afficher des links alternate rss project dans le header
     *
     * @param {Portal} portal
     *
     * return true si le site doit afficher des links alternate rss project dans le header
     */
  }, {
    key: "isSiteWithHeaderProjectRssLink",
    value: function isSiteWithHeaderProjectRssLink(portal) {
      if (!portal || !portal.site) {
        return false;
      }
      var codeSite = portal.site.toLowerCase();
      return typeof SITES_RSS_LINKS[codeSite] !== "undefined";
    }

    /**
     * Check si le site doit afficher les Trends
     *
     * @param {boolean} isExtendedLanguage
     *
     * return true si le site affiche les Trends
     */
  }, {
    key: "isSiteWithTrends",
    value: function isSiteWithTrends() {
      var isExtendedLanguage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // Certains site n'ont pas de trends, dans ce cas il ne faut donc pas afficher les items "trends" ...
      return !(isExtendedLanguage === true);
    }

    /**
     * Check si le site courant à un language étendu
     *
     * @param {Store} store
     *
     * return true si le site à un language étendu
     */
  }, {
    key: "getExtendedLanguageFromStore",
    value: function getExtendedLanguageFromStore(store) {
      var veApplication = store && store.Application ? store.Application : {
        extendedLanguage: false
      };
      return veApplication.extendedLanguage;
    }
  }]);
}();
var specificSiteHelperInstance = new SpecificSiteHelper();
var _default = exports["default"] = specificSiteHelperInstance;