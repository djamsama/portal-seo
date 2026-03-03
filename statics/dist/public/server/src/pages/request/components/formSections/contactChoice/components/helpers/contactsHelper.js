"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _react = _interopRequireDefault(require("react"));
var _globalHelper = require("../../../../../../../helpers/globalHelper");
var ContactHelper = exports["default"] = /*#__PURE__*/function () {
  function ContactHelper() {
    (0, _classCallCheck2["default"])(this, ContactHelper);
  }
  return (0, _createClass2["default"])(ContactHelper, null, [{
    key: "cutTxt",
    value: function cutTxt(txt) {
      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
      if (_globalHelper.GlobalHelper.isMobileDevice()) {
        return "".concat(txt);
      }
      var isHyphen = txt.indexOf("-") >= 0;
      var hyphen = isHyphen ? "" : "-";
      var texts = txt.split(" ");
      var newTexts = [];
      var _doCut = function doCut(text) {
        if (text.length > limit) {
          // Texte trop grand
          var posHyphen = text.indexOf("-");
          if (posHyphen > 0) {
            // On coupe on niveau des tirets s'il y en a
            var textsHyphen = text.split("-");
            for (var i = 0; i < textsHyphen.length - 1; i += 1) {
              // Encore trop long on coupe encore
              if (textsHyphen[i].length - 1 > limit) {
                _doCut(textsHyphen[i]);
              } else {
                newTexts.push("".concat(textsHyphen[i], "-"));
                newTexts.push(/*#__PURE__*/_react["default"].createElement("br", null));
              }
            }
            newTexts.push("".concat(textsHyphen[textsHyphen.length - 1], " "));
          } else {
            newTexts.push("".concat(text.substr(0, limit)).concat(hyphen));
            newTexts.push(/*#__PURE__*/_react["default"].createElement("br", null));
            newTexts.push("".concat(text.substr(limit, text.length), " "));
          }
        } else {
          newTexts.push("".concat(text, " "));
        }
        return true;
      };
      texts.map(_doCut);
      return newTexts.length > 0 ? newTexts : txt;
    }
  }]);
}();