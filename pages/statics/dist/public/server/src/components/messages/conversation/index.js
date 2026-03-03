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
var _messageContainer = _interopRequireDefault(require("../../../pages/mySpace/containers/messageContainer"));
var _conversation = require("./styles/conversation");
var _messageFullContainer = _interopRequireDefault(require("../messageFull/containers/messageFullContainer"));
var _responsive = require("../../styles/responsive");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable class-methods-use-this */ /* eslint-disable no-restricted-globals */ /* eslint-disable react/no-array-index-key */
/**
 *  Affichage d'une conversation
 */
var Conversation = exports["default"] = /*#__PURE__*/function (_React$Component) {
  function Conversation(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Conversation);
    _this = _callSuper(this, Conversation, [props]);
    _this.handleUpdateConversation = _this.handleUpdateConversation.bind(_this);
    _this.handleRemoveMessageConversation = _this.handleRemoveMessageConversation.bind(_this);
    _this.scrollLastMessage = _this.scrollLastMessage.bind(_this);
    _this.state = {
      conversation: props.conversation
    };
    _this.divHistory = null;
    return _this;
  }
  (0, _inherits2["default"])(Conversation, _React$Component);
  return (0, _createClass2["default"])(Conversation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.divHistory && typeof screen !== "undefined" && screen.width > _responsive.breakPoints.xs) {
        this.divHistory.scrollTop = this.divHistory.scrollHeight;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.divHistory && screen && screen.width > _responsive.breakPoints.xs) {
        this.divHistory.scrollTop = this.divHistory.scrollHeight;
      }
    }
  }, {
    key: "handleUpdateConversation",
    value:
    /**
     * Un message a été envoyé par le composant SendMessage
     * on le rajoute à la conversation
     *
     * @param {VeMessage} message
     */
    function handleUpdateConversation(message) {
      if (message.error !== true) {
        var conversation = this.state.conversation;
        if (conversation.history.filter(function (unMessage) {
          return unMessage.sentDate === message.sentDate;
        }).length == 0) {
          conversation.history.push(message);
        }
        if (this.divHistory) {
          this.divHistory.scrollTop = this.divHistory.scrollHeight;
        }
        this.setState({
          conversation: conversation
        });
      }
    }
  }, {
    key: "scrollLastMessage",
    value: function scrollLastMessage(element) {
      if (element && element.current && element.current.scrollHeight && screen && screen.width <= _responsive.breakPoints.xs) {
        element.current.scrollIntoView({
          behavior: "smooth",
          block: "end"
        });
      }
    }

    /**
     * Damned, le message a été envoyé par le composant SendMessage
     * mais il y a eu une erreur
     * on le supprime de la conversation
     *
     */
  }, {
    key: "handleRemoveMessageConversation",
    value: function handleRemoveMessageConversation() {
      var conversation = this.state.conversation;
      var msgCount = conversation.history.length;
      conversation.history = conversation.history.filter(function (history) {
        return history.error !== true;
      });
      if (msgCount > conversation.history.length) {
        this.setState({
          conversation: conversation
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var showSendFixed = true;
      var conversation = this.props.conversation;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_conversation.ConversationTitle, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_request_detail_conv_history_title",
        values: {
          "0": conversation.companyName
        }
      })), /*#__PURE__*/_react["default"].createElement(_conversation.ConversationContent, {
        customStyle: this.props.customStyle
      }, /*#__PURE__*/_react["default"].createElement(_conversation.ConversationHistory, {
        style: {
          scrollBehavior: "smooth"
        },
        ref: function ref(el) {
          _this2.divHistory = el;
        }
      },
      // Affichage des messages de la conversation
      this.state.conversation.history.map(function (message, index) {
        var uKey = ""; // Creation de la cle unique pour que react affiche les messages correctement
        if (message.id) {
          uKey += message.id.toString();
        } else {
          if (message.senderEmail) {
            uKey += message.senderEmail.toString();
          }
          if (message.recipientEmail) {
            uKey += message.senderEmail.toString();
          }
          {
            uKey += message.sentDate.toString();
          }
        }
        uKey += index.toString();
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
          key: "messageFullContainer".concat(uKey)
        }, /*#__PURE__*/_react["default"].createElement(_messageFullContainer["default"], {
          key: "messageFull".concat(uKey),
          message: message,
          id: "id".concat(uKey),
          context: conversation.context,
          companyName: conversation.companyName,
          leadContext: _this2.props.leadContext,
          visitorLanguage: _this2.props.visitorLanguage
        }));
      })), showSendFixed && /*#__PURE__*/_react["default"].createElement(_messageContainer["default"], {
        handleUpdateConversation: this.handleUpdateConversation,
        handleRemoveMessageConversation: this.handleRemoveMessageConversation,
        disable: this.props.disable,
        message: conversation.message,
        leadContext: this.props.leadContext,
        scrollLastMessage: this.scrollLastMessage
      })));
    }
  }]);
}(_react["default"].Component);
Conversation.propTypes = {};
// $FlowFixMe
Conversation.defaultProps = {};