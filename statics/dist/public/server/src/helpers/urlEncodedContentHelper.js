"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _constants = require("../commons/constants");
/**
 * UrlEncodedContentHelper: Permet de générer un URLEncoded à partir d'un json
 */
var UrlEncodedContentHelper = exports["default"] = /*#__PURE__*/function () {
  function UrlEncodedContentHelper() {
    (0, _classCallCheck2["default"])(this, UrlEncodedContentHelper);
  }
  return (0, _createClass2["default"])(UrlEncodedContentHelper, null, [{
    key: "jsonToUrlEncoded",
    value:
    /**
     * @method jsonToUrlEncoded
     * @param {*} json
     * @return {string}
     */
    function jsonToUrlEncoded(json) {
      try {
        return Object.entries(json).map(function (x) {
          // Dans le cas d'un checkbox, la valeur est un object ou est null
          if (x[1] !== null && (0, _typeof2["default"])(x[1]) === "object") {
            var checkboxValue = {};
            // eslint-disable-next-line no-restricted-syntax
            // eslint-disable-next-line no-restricted-syntax, no-unused-vars
            for (var _i = 0, _Object$entries = Object.entries(x[1]); _i < _Object$entries.length; _i++) {
              var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];
              if (value) {
                checkboxValue[key] = value;
              }
            }
            return "".concat(encodeURIComponent(x[0]), "=").concat(encodeURIComponent(Object.keys(checkboxValue).join(",")));
          }
          return "".concat(encodeURIComponent(x[0]), "=").concat(encodeURIComponent(x[1]));
        }).join("&");
      } catch (e) {
        throw new Error("Erreur lors de l'encodage des param\xE8tres en json to formData:\n      ".concat(e));
      }
    }

    /** Le lien vers la companie doit-il être lié avec la page courante? */
  }, {
    key: "isUrlNoFollow",
    value: function isUrlNoFollow(context) {
      var portal = context.config.portal;
      var _context$initData = context.initData,
        isSubscriber = _context$initData.isSubscriber,
        subscriberPack = _context$initData.subscriberPack,
        betaTestDisabledSubscriberLink = _context$initData.betaTestDisabledSubscriberLink;
      return betaTestDisabledSubscriberLink && !(_constants.ROUTE_STAND_PRODUCTS_LIST === portal.route && isSubscriber) || subscriberPack === "STARTER";
    }

    /** L'URL de la companie doit-elle être encryptée? */
  }, {
    key: "isUrlEncrypted",
    value: function isUrlEncrypted(context) {
      var portal = context.config.portal;
      var _context$initData2 = context.initData,
        isSubscriber = _context$initData2.isSubscriber,
        betaTestDisabledSubscriberLink = _context$initData2.betaTestDisabledSubscriberLink;
      return !betaTestDisabledSubscriberLink && !(_constants.ROUTE_STAND_PRODUCTS_LIST === portal.route && isSubscriber);
    }

    /** L'URL de la companie doit-elle être présente ? */
  }, {
    key: "isUrlVisible",
    value: function isUrlVisible(context) {
      var isDowngraded = context.initData.isDowngraded;
      return !UrlEncodedContentHelper.isUrlNoFollow(context) && !isDowngraded;
    }
  }]);
}();