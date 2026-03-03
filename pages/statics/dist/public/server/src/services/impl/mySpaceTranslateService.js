"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _requestService = _interopRequireDefault(require("./requestService"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var MySpaceTranslateService = /*#__PURE__*/function (_RequestService) {
  function MySpaceTranslateService(context) {
    (0, _classCallCheck2["default"])(this, MySpaceTranslateService);
    return _callSuper(this, MySpaceTranslateService, [{
      baseUrl: context.config.portal.baseUrl
    }]);
  }

  /**
   * Traduit un message.
   * @param {Number} messageId l'identifiant du message.
   * @param {String} language la langue de traduction.
   * @param {Object} context le contexte.
   */
  (0, _inherits2["default"])(MySpaceTranslateService, _RequestService);
  return (0, _createClass2["default"])(MySpaceTranslateService, [{
    key: "translate",
    value: function translate(messageId, language, context) {
      return this.get(context.initData.translateUrl + messageId, {
        language: language
      });
    }

    /**
     * Retour au message d'origine.
     * @param {Number} messageId l'identifiant du message.
     * @param {Object} context le contexte.
     */
  }, {
    key: "goBackToOriginalLanguage",
    value: function goBackToOriginalLanguage(messageId, context) {
      return this.get(context.initData.goBackToOriginalLanguageUrl + messageId);
    }
  }]);
}(_requestService["default"]);
var _default = exports["default"] = MySpaceTranslateService;