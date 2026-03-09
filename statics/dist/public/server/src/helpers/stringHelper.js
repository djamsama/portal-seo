"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StringHelper = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var StringHelper = exports.StringHelper = /*#__PURE__*/function () {
  function StringHelper() {
    (0, _classCallCheck2["default"])(this, StringHelper);
  }
  return (0, _createClass2["default"])(StringHelper, null, [{
    key: "splitTo",
    value: function splitTo(chain, to) {
      var splitCharacter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : " ";
      var splitSymbol = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : " (...)";
      if (typeof chain !== "string") {
        throw new Error(" 'chain' must be a string");
      }
      if (typeof splitCharacter !== "string") {
        throw new Error(" 'splitcharacter' must be a string");
      }
      if (typeof splitSymbol !== "string") {
        throw new Error(" 'splitSymbol' must be a string");
      }
      if (typeof to !== "number") {
        throw new Error(" 'to' must be a number");
      }
      if (chain.length < to) {
        return chain;
      }
      for (var i = to; i > 1; i--) {
        var susbtrResult = chain.substr(i, 1);
        if (susbtrResult === splitCharacter) {
          return chain.substr(0, i) + splitSymbol;
        }
      }
      return chain.substr(0, to) + splitSymbol;
    }
  }, {
    key: "capitalize",
    value: function capitalize(sentence) {
      return sentence.toLowerCase().split(" ").map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(" ");
    }
  }, {
    key: "pluralize",
    value: function pluralize(sentence, language) {
      if (!sentence) return sentence; // gestion de valeur vide ou nulle

      var allWords = sentence.split(" ");
      var newSentence = allWords.map(function (word) {
        switch (language) {
          case "fr":
            return "".concat(word, "s");
          case "it":
            if (word.endsWith("o")) {
              return "".concat(word.slice(0, -1), "i");
            }
            if (word.endsWith("a")) {
              return "".concat(word.slice(0, -1), "e");
            }
            return "".concat(word, "i");
          case "es":
            if (word.endsWith("ón")) {
              return "".concat(word.slice(0, -2), "ones");
            }
            return word + (word.endsWith("z") ? "ces" : "s");
          case "de":
            if (["s", "ß", "z", "x"].some(function (end) {
              return word.endsWith(end);
            })) {
              return "".concat(word, "e");
            }
            if (["el", "er", "en"].some(function (end) {
              return word.endsWith(end);
            })) {
              return word;
            }
            return "".concat(word, "e");
          default:
            return "".concat(word, "s");
        }
      });
      return newSentence.join(" ").trim();
    }
  }]);
}();