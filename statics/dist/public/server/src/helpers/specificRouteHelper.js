"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _constants = require("../commons/constants");
var dropDownCountrys = {
  DropDownCountry: _constants.ROUTE_HOME
};
var SpecificRouteHelper = /*#__PURE__*/function () {
  function SpecificRouteHelper() {
    (0, _classCallCheck2["default"])(this, SpecificRouteHelper);
  }
  return (0, _createClass2["default"])(SpecificRouteHelper, [{
    key: "isSiteWithHeaderRssLink",
    value:
    /**
     * Check si le page courante doit afficher des links alternate rss dans le header
     *
     * @param {*} context
     *
     * return true si la page doit afficher des links alternate rss dans le header
     */

    function isSiteWithHeaderRssLink(context) {
      if (!context || !context.store || !context.config || !context.config.route) {
        return false;
      }
      var currentRoute = context.config.route;
      var isExtendedLanguage = context && context.store && context.store.Application ? context.store.Application.extendedLanguage : false;
      return (currentRoute === _constants.ROUTE_HOME || currentRoute === _constants.ROUTE_PROJECT_HOME || currentRoute === _constants.ROUTE_TRENDS_HOME || currentRoute === _constants.ROUTE_CATALOG) && !isExtendedLanguage;
    }

    /**
     *
     * @param {string} key nom de la classe qui appelle
     * @param {string} route nom de la route à tester
     *
     * return true si le lien n'est pas encrypté
     */
  }, {
    key: "isNotEncrypted",
    value: function isNotEncrypted(key, route) {
      return typeof dropDownCountrys[key] !== "undefined" && dropDownCountrys[key] === route;
    }
  }]);
}();
var specificRouteHelperInstance = new SpecificRouteHelper();
var _default = exports["default"] = specificRouteHelperInstance;