"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductTagBig = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _contextComponent = require("../../../../../../components/contextComponent");
var _productDetail = require("../../styles/productDetail");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var ProductTagBig = exports.ProductTagBig = /*#__PURE__*/function (_ContextComponent) {
  // Définition du composant ProductTagBig qui étend ContextComponent avec les propriétés Props et State
  function ProductTagBig(props, state) {
    (0, _classCallCheck2["default"])(this, ProductTagBig);
    // Constructeur du composant avec les propriétés et l'état
    return _callSuper(this, ProductTagBig, [props, state]); // Appel du constructeur parent avec les propriétés et l'état
  }
  (0, _inherits2["default"])(ProductTagBig, _ContextComponent);
  return (0, _createClass2["default"])(ProductTagBig, [{
    key: "render",
    value: function render() {
      var productTagAssociationList = this.props.productTagAssociationList; // Extraction de productTagAssociationList des props du composant

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (productTagAssociationList === null || productTagAssociationList === void 0 ? void 0 : productTagAssociationList.length) > 0 &&
      // Vérification si la liste d'associations n'est pas vide
      productTagAssociationList.map(function (tag, index) {
        var _tag$tagLabel;
        // Parcours de chaque élément de productTagAssociationList
        switch ((_tag$tagLabel = tag.tagLabel) === null || _tag$tagLabel === void 0 ? void 0 : _tag$tagLabel.toUpperCase()) {
          case "GREEN":
            // Si tagLabel est égal à "GREEN"
            return /*#__PURE__*/_react["default"].createElement(_productDetail.GreenFlag, {
              key: tag.tagId
            });
          // Retourne le composant GreenFlag pour cette étiquette avec une clé unique
          default:
            // Si tagLabel ne correspond pas à "GREEN"
            return null;
          // Retourne null (aucun affichage) pour les étiquettes qui ne sont pas définies
        }
      }));
    }
  }]);
}(_contextComponent.ContextComponent);