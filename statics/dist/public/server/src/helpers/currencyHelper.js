"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurrencyHelper = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _constants = require("../commons/constants");
/* eslint-disable no-restricted-properties */
/* eslint-disable no-param-reassign */
/* eslint no-console: ["error", { allow: ["error"] }] */function getCookieValue(a) {
  var b = document.cookie.match("(^|;)\\s*" + a + "\\s*=\\s*([^;]+)"); // eslint-disable-line
  return b ? b.pop() : "";
}
var CurrencyHelper = exports.CurrencyHelper = /*#__PURE__*/function () {
  function CurrencyHelper() {
    (0, _classCallCheck2["default"])(this, CurrencyHelper);
  }
  return (0, _createClass2["default"])(CurrencyHelper, null, [{
    key: "getDefault",
    value: function getDefault(locale) {
      var response = "EUR";
      if (typeof window !== "undefined") {
        var currencyFromCookie = "";
        var cookieName = "cur".concat(locale);
        currencyFromCookie = getCookieValue(cookieName);
        if (currencyFromCookie !== "") {
          response = currencyFromCookie;
        }
      }
      return response;
    }
  }, {
    key: "doLabel",
    value: function doLabel(price) {
      var currency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (!price || !price.price || !price.currency && currency) {
        return null;
      }
      var currentCurrency = currency || price.currency;
      return "".concat(price.price.toString()).concat(currentCurrency);
    }
  }, {
    key: "convert",
    value: function convert(price) {
      if (!price || !price.price || !price.currency) {
        return null;
      }
      return "".concat(price.price.toString()).concat(price.currency);
    }
  }, {
    key: "toPrecision",
    value: function toPrecision(number) {
      var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
      var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "up";
      precision -= Math.floor(number).toString().length;
      if (number < 0) {
        precision += 1;
      }
      var order = Math.pow(10, precision);
      number *= order;
      var option = direction === "down" ? "floor" : "ceil";
      return parseInt(Math[option].call(null, number) / order, 10);
    }

    /**
     *  Copy de la fonction d'arrondi http://gitlab.virtual-expo.com/java/ve-commons/blob/d3d2f1bbc626c8013689fdba96cff402a7c6cccc/src/main/java/com/ve/commons/helpers/impl/PriceHelperImpl.java
     *  TODO créer un service coté java pour ne pas dupliquer ce code et éviter les erreurs
     * @param {*} price
     * @param {*} roundSignificantDigit
     * @param {*} stepSignificantNumber
     */
  }, {
    key: "getRoundPrice",
    value: function getRoundPrice(price) {
      var roundSignificantDigit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
      var stepSignificantNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
      var currentPrice = typeof price === "number" ? price : parseFloat(price.replace(",", "."));
      if (currentPrice < 0) {
        currentPrice *= -1;
      }
      //  nombre de chiffres sur la partie entière./
      var numbersOfDigits = Math.trunc(currentPrice).toString().length;
      if (currentPrice >= stepSignificantNumber) {
        /** ** Le nombre est > 1000 */
        return CurrencyHelper.toPrecision(currentPrice);
      }

      /** ** Le nombre est < 1000 */
      var decimal = Math.round(currentPrice * 100 - parseInt(currentPrice, 10) * 100) / 100;
      var withDecimalPartLgt10 = false;
      if (decimal === 0) {
        // S'il n'existe pas de décimale, on enlève le .00 de la partie décimale
        currentPrice = parseInt(currentPrice, 10);
      } else if (numbersOfDigits === 1) {
        // Il y a une partie décimale
        // S'il n'y a qu'un seul chiffre sur la partie entière => on conserve la partie décimale
        numbersOfDigits += 2;
        withDecimalPartLgt10 = true;
      }

      // Cas où 3 chiffres sur la partie entière (Ex : 731.51 -> 740).
      if (!withDecimalPartLgt10 && numbersOfDigits === roundSignificantDigit) {
        numbersOfDigits -= 1;
      }

      // On arrondit
      var roundedPrice = CurrencyHelper.toPrecision(currentPrice, numbersOfDigits);
      if (withDecimalPartLgt10) {
        roundedPrice += decimal;
      }
      return roundedPrice;
    }

    /**
     * Formatage du libelé des devises
     *  TODO créer un service coté java pour ne pas dupliquer le code et éviter les erreurs
     *
     * @param {*} price
     * @param {*} currentCurrency
     * @param {*} locale
     */
  }, {
    key: "formatCurrency",
    value: function formatCurrency(price, currentCurrency, locale, digitNumber) {
      var label = {
        // Devises dont le formatage par Intl.NumberFormat est different de celui de ve
        CNY: {
          veCurrency: "CN¥",
          type: "symbol",
          replace: "CNY"
        },
        JPY: {
          veCurrency: "¥JP",
          type: "symbol",
          replace: "JPY"
        },
        BRL: {
          veCurrency: "R$",
          type: "code",
          replace: "BRL"
        },
        // Devises dont le formatage par Intl.NumberFormat est identique à celui de ve
        EUR: {
          veCurrency: "€",
          type: "symbol",
          replace: null
        },
        USD: {
          veCurrency: "$US",
          type: "symbol",
          replace: null
        },
        GBP: {
          veCurrency: "GBP",
          type: "code",
          replace: null
        },
        RUB: {
          veCurrency: "RUB",
          type: "code",
          replace: null
        },
        AUD: {
          veCurrency: "AUD",
          type: "code",
          replace: null
        },
        CAD: {
          veCurrency: "CAD",
          type: "code",
          replace: null
        },
        CHF: {
          veCurrency: "CHF",
          type: "code",
          replace: null
        },
        MXN: {
          veCurrency: "MXN",
          type: "code",
          replace: null
        },
        NZD: {
          veCurrency: "NZD",
          type: "code",
          replace: null
        }
      };
      var formattedPrice = null;
      var options = {
        style: "currency",
        currency: currentCurrency,
        currencyDisplay: label[currentCurrency] ? label[currentCurrency].type : "symbol",
        minimumFractionDigits: digitNumber !== null && digitNumber !== void 0 ? digitNumber : Number(price) !== parseInt(price, 10) ? 2 : 0
      };
      if (locale === "ja" && currentCurrency === "JPY") {
        // Pas de décimales en devise japonaise
        options.minimumFractionDigits = 0;
        options.maximumFractionDigits = 0;
      }
      try {
        if (!price || typeof price !== "number") {
          var _parts$find$value, _parts$find;
          var nf = new Intl.NumberFormat(locale, options);
          var parts = nf.formatToParts(0); // Pour recuperer la partie "currency"
          var currencyOnly = (_parts$find$value = (_parts$find = parts.find(function (p) {
            return p.type === "currency";
          })) === null || _parts$find === void 0 ? void 0 : _parts$find.value) !== null && _parts$find$value !== void 0 ? _parts$find$value : null;
          var meta = label[currentCurrency];
          if (currencyOnly && meta !== null && meta !== void 0 && meta.veCurrency && meta !== null && meta !== void 0 && meta.replace) {
            // Si "code" -> "veCurrency", renvoyer le veCurrency
            currencyOnly = meta.veCurrency;
          }
          return currencyOnly;
        }

        // Ajout de la devise au prix
        formattedPrice = new Intl.NumberFormat(locale, options).format(price);
        if (currentCurrency !== "" && label[currentCurrency] && label[currentCurrency].replace && label[currentCurrency].veCurrency) {
          formattedPrice = formattedPrice.replace(label[currentCurrency].replace, label[currentCurrency].veCurrency);
        }
      } catch (error) {
        console.error("FormatCurrency Error");
      }
      return formattedPrice;
    }
  }]);
}();
(0, _defineProperty2["default"])(CurrencyHelper, "promo", function (initPrice, discountItemPrice, seuil) {
  // Convertir en nombres pour s'assurer que les opérations sont correctes
  initPrice = Number(initPrice);
  discountItemPrice = Number(discountItemPrice);
  // Calculer le pourcentage de la réduction en s'assurant d'éviter les erreurs de précision en float
  var diffPrice = initPrice - discountItemPrice;
  var discountPercentage = diffPrice / initPrice * 100;
  var SEUIL = seuil || _constants.SEUIL_PROMO;
  // Verifier si le pourcentage de réduction dépasse le seuil
  if (discountPercentage < SEUIL) {
    return 0;
  }
  return Math.floor(discountPercentage); // retourne le pourcentage arrondi à l'entier le plus proche vers zéro (pour éviter les valeurs décimales)
});