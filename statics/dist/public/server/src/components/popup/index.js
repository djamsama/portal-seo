"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _semanticUiReact = require("semantic-ui-react");
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable react/require-default-props */
var VePopup = exports["default"] = /*#__PURE__*/function (_React$Component) {
  function VePopup(props) {
    (0, _classCallCheck2["default"])(this, VePopup);
    return _callSuper(this, VePopup, [props]);
  }
  (0, _inherits2["default"])(VePopup, _React$Component);
  return (0, _createClass2["default"])(VePopup, [{
    key: "render",
    value: function render() {
      var contentstyle = this.props.contentstyle ? _objectSpread(_objectSpread({}, this.props.contentstyle), {}, {
        zIndex: 800
      }) : {
        zIndex: 800
      };
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Popup, (0, _extends2["default"])({}, this.props, {
        trigger: this.props.trigger,
        position: this.props.position,
        on: this.props.on ? this.props.on : "click",
        style: contentstyle,
        basic: this.props.basic
      }), this.props.children));
    }
  }]);
}(_react["default"].Component);
VePopup.propTypes = {
  /**
   * Propriété visible de l'élément
   */
  open: _propTypes["default"].bool,
  /**
   * Propriété trigger de l'élément, la popup y sera attachée
   */
  trigger: _propTypes["default"].element.isRequired,
  /**
   *  Propriété style de l'element, pour ajouter des styles
   */
  // eslint-disable-next-line react/forbid-prop-types
  contentstyle: _propTypes["default"].object,
  /**
   *  Contenu de la pop up
   */
  children: _propTypes["default"].element,
  /**
   *  Position de la pop up
   *  peut etre :'top left' 'top right' 'bottom right' 'bottom left' 'right center' 'left center' 'top center' 'bottom center'
   */
  position: _propTypes["default"].string
};

// $FlowFixMe
VePopup.defaultProps = {
  contentstyle: {},
  children: /*#__PURE__*/_react["default"].createElement("div", null),
  position: "bottom center",
  on: "click"
};