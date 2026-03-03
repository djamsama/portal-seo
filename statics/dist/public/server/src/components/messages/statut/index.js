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
var _reactIntl = require("react-intl");
var _semanticUiReact = require("semantic-ui-react");
var _constants = require("../../../commons/constants");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Affichage du statut d'un message en fonction de qui l'a envoyer (initiator ou pas) et du statut du message
 */
var Statut = /*#__PURE__*/function (_React$Component) {
  function Statut(props) {
    (0, _classCallCheck2["default"])(this, Statut);
    return _callSuper(this, Statut, [props]);
  }
  (0, _inherits2["default"])(Statut, _React$Component);
  return (0, _createClass2["default"])(Statut, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        intl = _this$props.intl,
        message = _this$props.message;
      if (!message) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
      }
      if (message.infoMessage) {
        /*#__PURE__*/_react["default"].createElement("div", null, message.infoMessage);
      }
      var statut = {
        icon: "",
        text: ""
      };
      if (message.direction === _constants.INITIATOR_TO_RESPONDENT) {
        if (message.inProgress || message.status === "PENDING") {
          statut = {
            icon: "paper plane",
            text: intl.formatMessage({
              id: "foj_request_detail_conv_history_message_in_progress"
            })
          };
        } else if (message.readDate) {
          statut.icon = "check circle";
          statut.text = intl.formatMessage({
            id: "foj_request_detail_conv_history_message_read"
          }, {
            "0": message.readDate
          });
        } else {
          statut.icon = "check";
          if (message.readDate === null) {
            statut.text = message.recipientError ? intl.formatMessage({
              id: "foj_request_detail_conv_history_message_recipient_error"
            }) : intl.formatMessage({
              id: "foj_request_detail_conv_history_message_sent"
            });
          }
        }
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          color: "#999"
        }
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: statut.icon
      }), /*#__PURE__*/_react["default"].createElement("span", null, " ", statut.text));
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(Statut);