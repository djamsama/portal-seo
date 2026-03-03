"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductTagSm = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _contextComponent = require("../../contextComponent");
var _tagIcon = require("../../styles/tagIcon");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var ProductTagSm = exports.ProductTagSm = /*#__PURE__*/function (_ContextComponent) {
  // Définition du composant ProductTagSm qui étend ContextComponent avec les types Props et State.

  function ProductTagSm(props, state) {
    (0, _classCallCheck2["default"])(this, ProductTagSm);
    // Constructeur du composant, prenant les props et l'état en paramètres pour initialiser le composant.
    return _callSuper(this, ProductTagSm, [props, state]); // Appel du constructeur du composant parent (ContextComponent) avec les props et l'état.
  }
  (0, _inherits2["default"])(ProductTagSm, _ContextComponent);
  return (0, _createClass2["default"])(ProductTagSm, [{
    key: "render",
    value: function render() {
      var productTagAssociationList = this.props.productTagAssociationList; // Destructuration des props pour extraire productTagAssociationList.

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (productTagAssociationList === null || productTagAssociationList === void 0 ? void 0 : productTagAssociationList.length) > 0 &&
      // Vérifie si productTagAssociationList contient au moins un élément avant de continuer.
      productTagAssociationList.map(function (tag, index) {
        // Parcourt la liste productTagAssociationList avec la méthode map, permettant de traiter chaque élément (tag).
        switch (tag.tagLabel) {
          // Utilisation d'une instruction switch pour vérifier la valeur de tagLabel.
          case "GREEN":
            // Si tagLabel est égal à "GREEN", retourne le composant GreenTagSm.
            return /*#__PURE__*/_react["default"].createElement(_tagIcon.GreenTagSm, {
              key: tag.tagId
            });
          // Retourne le composant GreenTagSm avec une clé unique (tagId) pour assurer un rendu correct dans la liste.
          default:
            // Si tagLabel ne correspond pas à "GREEN", exécution du cas par défaut.
            return null;
          // Retourne null, ce qui signifie qu'aucun composant ne sera rendu pour les tags qui ne sont pas "GREEN".
        }
      }));
    }
  }]);
}(_contextComponent.ContextComponent);