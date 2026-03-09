"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var btoa = function btoa(str) {
  return Buffer.from(str, "binary").toString("base64");
};
var atob = function atob(str) {
  return Buffer.from(str, "base64").toString("binary");
};
/**
 * Encryption et décryption de chaîne de caractères
 *
 */
var EncryptHelper = /*#__PURE__*/function () {
  function EncryptHelper() {
    (0, _classCallCheck2["default"])(this, EncryptHelper);
  }
  return (0, _createClass2["default"])(EncryptHelper, null, [{
    key: "encrypt",
    value:
    /**
     * Encryption
     *
     * @param {*} chainToEncrypt
     *
     * return chainToEncrypt encryptée
     */
    function encrypt(chainToEncrypt) {
      if (!chainToEncrypt || typeof chainToEncrypt !== "string") {
        throw new Error("encrypt doit avoir un param1 valide et de type string");
      }
      var urlCryptedTemp = chainToEncrypt.replace("&amp;", "&");
      var encodedBytes = encodeURIComponent(urlCryptedTemp);
      var encodedString = btoa(encodedBytes);
      var listUrlCryptedSplit = [];
      for (var i = 0; i < encodedString.length; i += 3) {
        var lastIndex = i + 3;
        if (lastIndex > encodedString.length) {
          lastIndex = encodedString.length;
        }
        listUrlCryptedSplit.push(encodedString.substring(i, lastIndex));
      }
      listUrlCryptedSplit = listUrlCryptedSplit.reverse();
      return listUrlCryptedSplit.join("|");
    }

    /**
     * Decryption de chaine de caractère encrypté par EncryptHelper.encrypt
     *
     * @param {*} chainToDecrypt
     *
     * return chainToDecrypt décryptée
     */
  }, {
    key: "decrypt",
    value: function decrypt(chainToDecrypt) {
      if (!chainToDecrypt || typeof chainToDecrypt !== "string") {
        throw new Error("decrypt doit avoir un param1 valide et de type string");
      }
      var base64Regex = new RegExp("^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$");
      var chainToDecryptTemp = chainToDecrypt.split("|").reverse().join("");
      if (chainToDecryptTemp.match(base64Regex)) {
        chainToDecryptTemp = atob(chainToDecryptTemp);
      }
      return decodeURIComponent(chainToDecryptTemp);
    }
  }]);
}();
var _default = exports["default"] = EncryptHelper;