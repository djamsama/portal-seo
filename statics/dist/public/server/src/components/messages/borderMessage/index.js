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
var _borderMessage = require("./styles/borderMessage");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Gestion de l'habillage d'un message en fonction de sa direction
 * droite initiateur de la conversion
 * gauche réponse
 * info information Ve
 * si le message est passé sans direction il sera affiché en tant qu'info
 */
var BorderMessage = exports["default"] = /*#__PURE__*/function (_React$Component) {
  function BorderMessage(props) {
    (0, _classCallCheck2["default"])(this, BorderMessage);
    return _callSuper(this, BorderMessage, [props]);
  }
  (0, _inherits2["default"])(BorderMessage, _React$Component);
  return (0, _createClass2["default"])(BorderMessage, [{
    key: "render",
    value: function render() {
      var components = {
        right: _borderMessage.MessageDivRight,
        left: _borderMessage.MessageDivLeft,
        info: _borderMessage.MessageDivInfo
      };
      var ConversationTag = components[this.props.direction || "info"];
      return /*#__PURE__*/_react["default"].createElement(ConversationTag, null, this.props.children);
    }
  }]);
}(_react["default"].Component);
BorderMessage.propTypes = {
  direction: _propTypes["default"].string
};

// $FlowFixMe
BorderMessage.defaultProps = {
  direction: "info"
};