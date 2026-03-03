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
var CatalogService = /*#__PURE__*/function (_RequestService) {
  function CatalogService(context) {
    (0, _classCallCheck2["default"])(this, CatalogService);
    if (!context) {
      throw new Error("Cannot do the request without context");
    }
    return _callSuper(this, CatalogService, [{
      baseUrl: context.config.portal.baseUrl
    }]);
  }
  (0, _inherits2["default"])(CatalogService, _RequestService);
  return (0, _createClass2["default"])(CatalogService, [{
    key: "getDescriptionTranslation",
    value: function getDescriptionTranslation(productId) {
      this.setParams({
        productId: productId
      });
      return this.get("/ajax/description.json");
    }

    /**
     * Récupération de la liste des fournisseurs et des boutons de demande.
     *
     * @param {*} sourceType Le type de demande
     * @param {*} sourceId   L'ID de la source de la demande
     * @param {*} pageTypeId L'ID du type de page visitée
     * @param {*} companyId  L'ID de la société
     */
  }, {
    key: "getCatalogButtons",
    value: function getCatalogButtons(sourceType, sourceId, pageTypeId, companyId) {
      this.setParams({
        sourceType: sourceType,
        sourceId: sourceId,
        pageTypeId: pageTypeId,
        companyId: companyId
      });
      return this.get("/ajax/request/catalogbuttons.json");
    }
  }, {
    key: "getProductsByIds",
    value: function getProductsByIds(ids) {
      /** Ne marche pas cree des IllegalArgumentException: Invalid character found in the request target cote Java */
      // this.setParams({
      //   productId: ids[0]
      // });
      var url = "/ajax/history.json";
      var idsParams = "";
      ids.map(function (id) {
        idsParams += "productIds=".concat(parseInt(id, 10).toString(), "&");
        return true;
      });
      idsParams = idsParams.substring(0, idsParams.length - 1);
      return this.get("".concat(url, "?").concat(idsParams));
    }
  }]);
}(_requestService["default"]);
var _default = exports["default"] = CatalogService;