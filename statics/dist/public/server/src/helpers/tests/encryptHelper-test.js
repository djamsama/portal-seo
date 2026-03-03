"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _encryptHelper = _interopRequireDefault(require("../encryptHelper"));
var decrypted = "http://www.archiexpo.fr/exhibit_on_archiexpo/subscription";
var encrypted = "==|vbg|dGl|mlw|Njc|1Yn|RnN|yUy|hwb|pZX|Y2h|2Fy|9uX|0X2|Yml|Ghp|Zle|lMk|ZnI|G8u".concat("|V4c|oaW|cmN|y5h|d3d|yRn|RiU|SUy|UzQ|0cC|aHR");
var decrypted2 = "http://www.google.fr?s=1&amp;s=2";
var encrypted2 = "Qy|lM0|NnM|SUy|NEM|zJT|M0Z|nIl|UuZ|nbG|b29|y5n|d3d|yRn|RiU|SUy|UzQ|0cC|aHR";
it("encryptHelper encrypt", function () {
  var testEncryptWithoutParam = function testEncryptWithoutParam() {
    _encryptHelper["default"].encrypt();
  };
  expect(testEncryptWithoutParam).toThrow("encrypt doit avoir un param1 valide et de type string");
  testEncryptWithoutParam = function testEncryptWithoutParam() {
    _encryptHelper["default"].encrypt(123);
  };
  expect(testEncryptWithoutParam).toThrow("encrypt doit avoir un param1 valide et de type string");
  var result = _encryptHelper["default"].encrypt(decrypted);
  expect(result).toEqual(encrypted);
  result = _encryptHelper["default"].encrypt(decrypted2);
  expect(result).toEqual(encrypted2);
});
it("encryptHelper decrypt", function () {
  var stringDecrypted = "une chaine a encrypter à&é?";
  var stringToDecrypt = "==|zRg|OSU|yVB|VDM|yNi|MCU|yVB|VDM|yMC|ciU|HRl|J5c|uY3|MGV|SUy|IwY|lJT|aW5|2hh|IwY|lJT|dW5";
  var testDecryptWithoutParam = function testDecryptWithoutParam() {
    _encryptHelper["default"].decrypt();
  };
  expect(testDecryptWithoutParam).toThrow("decrypt doit avoir un param1 valide et de type string");
  testDecryptWithoutParam = function testDecryptWithoutParam() {
    _encryptHelper["default"].decrypt(123);
  };
  expect(testDecryptWithoutParam).toThrow("decrypt doit avoir un param1 valide et de type string");
  var result = _encryptHelper["default"].decrypt(stringToDecrypt);
  expect(result).toEqual(stringDecrypted);
  result = _encryptHelper["default"].decrypt(encrypted);
  expect(result).toEqual(decrypted);
  decrypted2 = "http://www.google.fr?s=1&s=2";
  result = _encryptHelper["default"].decrypt(encrypted2);
  expect(result).toEqual(decrypted2);
});