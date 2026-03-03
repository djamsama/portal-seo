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
var _reactIntl = require("react-intl");
var _constants = require("../../../commons/constants");
var _messageSender = require("./styles/messageSender");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable react/forbid-prop-types */
/** Composant d'affichage d'info sur un message reçu */
var MessageSender = exports["default"] = /*#__PURE__*/function (_React$Component) {
  function MessageSender(props) {
    (0, _classCallCheck2["default"])(this, MessageSender);
    return _callSuper(this, MessageSender, [props]);
  }
  (0, _inherits2["default"])(MessageSender, _React$Component);
  return (0, _createClass2["default"])(MessageSender, [{
    key: "renderInfoSender",
    value: function renderInfoSender(message) {
      if (message.senderEmail && this.props.message.direction !== _constants.INITIATOR_TO_RESPONDENT) {
        return message.companyName;
      }
      return message.senderEmail;
    }
  }, {
    key: "render",
    value: function render() {
      var components = {
        initiator: _messageSender.MessageSenderInitiatorDiv,
        respondent: _messageSender.MessageSenderResponderDiv
      };
      var message = this.props.message;
      if (!message) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
      }
      var componentName = this.props.message && this.props.message.direction === _constants.INITIATOR_TO_RESPONDENT ? "initiator" : "respondent";
      var _MessageSender = components[componentName];
      return /*#__PURE__*/_react["default"].createElement(_MessageSender, null, /*#__PURE__*/_react["default"].createElement("i", {
        className: "small clock outline icon"
      }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedDate, {
        month: "long",
        day: "2-digit",
        year: "numeric",
        value: new Date(message.sentDate)
      }), " ", /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedTime, {
        value: new Date(message.sentDate)
      }), /*#__PURE__*/_react["default"].createElement("div", null, this.renderInfoSender(message)));
    }
  }]);
}(_react["default"].Component);
MessageSender.propTypes = {
  message: _propTypes["default"].object.isRequired
};