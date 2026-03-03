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
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styles = require("./styles");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 *  Classe qui sert a afficher un spinner lors des chargement asynchrone d'element pour avertir l'utilisateur
 *
 *  Par defaut il s'agit d'un cercle gris de 50px.
 *  Suivant les props reçues on peut changer la taille, la couleur,
 *  le spinner lui meme, ajouter un calque.
 *
 */
var Loading = /*#__PURE__*/function (_React$Component) {
  function Loading(props) {
    (0, _classCallCheck2["default"])(this, Loading);
    return _callSuper(this, Loading, [props]);
  }
  (0, _inherits2["default"])(Loading, _React$Component);
  return (0, _createClass2["default"])(Loading, [{
    key: "renderLoading",
    value: function renderLoading() {
      var Wrapper = this.props.overlay && this.props.overlay === true ? _styles.DivOverlay : _styles.EmptyDiv;
      var _this$props = this.props,
        className = _this$props.className,
        position = _this$props.position;
      var spinner = this.props.src ? /*#__PURE__*/_react["default"].createElement(_styles.SpinIMG, {
        src: this.props.src
      }) : /*#__PURE__*/_react["default"].createElement(_styles.SpinnerSVG, {
        spinnerSize: this.props.spinnerSize,
        color: this.props.color,
        text: this.props.text ? this.props.text : "",
        viewBox: "0 0 66 66"
      });
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Wrapper, null), /*#__PURE__*/_react["default"].createElement(_styles.SpinnerWrapper, {
        className: className,
        position: position
      }, spinner));
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.active ? this.renderLoading() : /*#__PURE__*/_react["default"].createElement("div", null);
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = Loading;
Loading.propTypes = {
  /**
   *  Affichage ou non du loading, il est affiché quand active est à true
   * */
  active: _propTypes["default"].bool.isRequired,
  /**
   *  Pour ajouter un calque il faut ajouter la propriété overlay=true
   * */
  overlay: _propTypes["default"].bool,
  /**
   *  Pour mettre un image à la place du spinner par defaut, il faut mettre son url dans la propriété src
   * */
  src: _propTypes["default"].string,
  /**
   *  Changer la taille par defaut du spinner
   * */
  spinnerSize: _propTypes["default"].number,
  /**
   *  Changer la couleur par defaut du spinner
   * */
  color: _propTypes["default"].string,
  /**
   *  Changer le type de position du spinner:
   *  pour avoir une position absolute, position='absolute'
   * */
  position: _propTypes["default"].string,
  /**
   * Ajouter une class CSS au spinner.
   */
  className: _propTypes["default"].string
};

// $FlowFixMe
Loading.defaultProps = {
  spinnerSize: 100,
  color: "#67676f",
  position: "relative"
};