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
/** Service dédié à la recherche des kwrefs. */
var KwrefService = /*#__PURE__*/function (_RequestService) {
  /**
   * Base kwref URL.
   */

  function KwrefService(locale, baseUrl) {
    var _this;
    (0, _classCallCheck2["default"])(this, KwrefService);
    _this = _callSuper(this, KwrefService, [{
      baseUrl: baseUrl,
      locale: locale
    }]);
    _this.kwrefSearchUrl = "/ajax/kwrefsearch/";
    return _this;
  }

  /**
   * Récupération des produits recommandés pour un kwref et une société donnés.
   *  @param {number} kwrefId L'ID du kwref
   *  @param {number} companyId L'ID de la société
   *  @param {number} productId L'ID du produit
   */
  (0, _inherits2["default"])(KwrefService, _RequestService);
  return (0, _createClass2["default"])(KwrefService, [{
    key: "getRecommendedProducts",
    value: function getRecommendedProducts(kwrefId, companyId, productId) {
      return this.get("".concat(this.kwrefSearchUrl, "product/").concat(kwrefId, "/").concat(companyId, "/").concat(productId, "/stand.json"));
    }
  }]);
}(_requestService["default"]);
var _default = exports["default"] = KwrefService;