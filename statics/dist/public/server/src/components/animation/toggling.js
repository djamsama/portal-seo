"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TogglingComponent = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _contextComponent = require("../contextComponent");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable react/jsx-props-no-spreading */ /* eslint-disable no-return-assign */
/**
 * Classe behaviour permettant la gestion d'ouverture-fermeture d'un menu avec gestion du survol de la souris
 *
 * ATTENTION : afin de fonctionner correctement, le ou les éléments dont on doit gérer le survol ou non de la souris doit
 * contenir la propriété suivante sur un composant "styled" de préférence :
 *
 * ref={this.props.componentRef}
 */
var TogglingComponent = exports.TogglingComponent = /*#__PURE__*/function (_ContextComponent) {
  function TogglingComponent(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, TogglingComponent);
    _this = _callSuper(this, TogglingComponent, [props]);
    _this.leaveMarginBeforeClose = props.leaveMarginBeforeClose || 50;
    _this.state = {
      visible: _this.props.visible
    };
    _this.onLeave = _this.onLeave.bind(_this);
    return _this;
  }

  /**
   * Ajout d'un écouteur sur le mouvement de la souris, uniquement en mode client
   */
  (0, _inherits2["default"])(TogglingComponent, _ContextComponent);
  return (0, _createClass2["default"])(TogglingComponent, [{
    key: "_addListener",
    value: function _addListener() {
      if (false) {
        window.addEventListener("mousemove", this.onLeave);
      }
    }

    /**
     * Suppression du listener en cas de suppression de l'élément du DOM
     */
  }, {
    key: "_removeListener",
    value: function _removeListener() {
      if (false) {
        window.removeEventListener("mousemove", this.onLeave);
      }
    }

    /**
     * Méthode appelée lorsque l'écouteur sur les mouvements de souris.
     * Calcul de la position de la souris par rapport au menu ouvert.
     *
     * @param {*} ev
     */
  }, {
    key: "onLeave",
    value: function onLeave(ev) {
      var state = this.state;
      // Si l'élément représentant le menu ouvert n'est pas défini, ou si le menu n'est pas encore visible, pas de test...
      if (this.element === null || this.element === undefined || !state.visible) {
        return;
      }
      // Récupération des data de coordonnées de la souris et du rectangle de l'élément de menu
      var x = ev.clientX;
      var y = ev.clientY;
      var rect = this.element.getBoundingClientRect();
      var boundMinX = rect.left - this.leaveMarginBeforeClose;
      var boundMinY = rect.top - this.leaveMarginBeforeClose;
      var boundMaxX = rect.left + rect.width + this.leaveMarginBeforeClose;
      var boundMaxY = rect.top + rect.height + this.leaveMarginBeforeClose;
      // Test pour savoir si la souris est en dehors de la zone (tolérance incluse : leaveMarginBeforeClose)
      var out = x < (boundMinX > 0 ? boundMinX : 0) || x > boundMaxX || y < (boundMinY > 0 ? boundMinY : 0) || y > boundMaxY;
      // Si on est en dehors, alors on change le state, on enlève l'écouteur sur les mouvements de la souris
      if (out) {
        this.setState({
          visible: false
        });
        this._removeListener();
        // S'il existe une méthode onLeave définie par le parent, on l'appelle avec le state du component
        if (typeof this.props.onLeave === "function") {
          this.props.onLeave();
        }
      }
    }

    /**
     * Gestion de la mise à jour via les props ou le state de l'état de visibilité du component
     * La modification peut venir d'un changement de props ou de state, car l'action d'ouverture du menu peut se faire
     * à partir d'un composant du parent.
     * @param {*} nextProps
     * @param {*} nextState
     */
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // Si la propriété visible ou l'état visible est à true, on pose l'écouteur sur les mouvements de la souris
      if (this.state.visible === true) {
        this._addListener();
      }
    }
  }, {
    key: "componentWillUnmount",
    value:
    /**
     * En cas de suppression de l'élément du dom, on enlève de toutes façons l'écouteur sur les mouvements de la souris
     * @memberof TogglingComponent
     */
    function componentWillUnmount() {
      this._removeListener();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var Component = this.props.innerComponent;
      // $FlowFixMe
      return /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({}, this.props, {
        visible: this.state.visible,
        componentRef: function componentRef(elem) {
          return _this2.element = elem;
        }
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.visible !== state.visible) {
        return {
          visible: props.visible
        };
      }
      return null;
    }
  }]);
}(_contextComponent.ContextComponent);
TogglingComponent.propTypes = {
  innerComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
  /**
   * taille en pixel autour de la liste déroulante au delà de laquelle le franchissement par le curseur provoquera la fermeture
   */
  leaveMarginBeforeClose: _propTypes["default"].number,
  /**
   * Si true, le menu s'ouvre au survol de la souris
   * @default false
   */
  openOnHover: _propTypes["default"].bool,
  /**
   * Action à effectuer sur un clic d'un item de la liste déroulante
   */
  click: _propTypes["default"].func,
  /**
   * Action à effectuer sur un hover d'un item du menu
   */
  hover: _propTypes["default"].func
};

// $FlowFixMe
TogglingComponent.defaultProps = {
  openOnHover: false
};