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
var _uuid = require("uuid");
var _reactIntl = require("react-intl");
var _constants = require("../../../commons/constants");
var _contextComponent = require("../../contextComponent");
var _sendMessage = require("./styles/sendMessage");
var _attachmentAddContainer = _interopRequireDefault(require("../../../pages/mySpace/containers/attachmentAddContainer"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var SenderFixed = /*#__PURE__*/function (_ContextComponent) {
  function SenderFixed(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, SenderFixed);
    _this = _callSuper(this, SenderFixed, [props, context]);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSendMessage = _this.handleSendMessage.bind(_this);
    _this.handleAddAttachment = _this.handleAddAttachment.bind(_this);
    _this.closeAttachmentModal = _this.closeAttachmentModal.bind(_this);
    _this.renderAttachments = _this.renderAttachments.bind(_this);
    _this.isError = _this.isError.bind(_this);
    _this.eltTextArea = /*#__PURE__*/_react["default"].createRef();
    _this.state = {
      uuid: (0, _uuid.v4)(),
      messageToSend: "",
      attachmentsOpened: false,
      files: []
    };
    return _this;
  }
  (0, _inherits2["default"])(SenderFixed, _ContextComponent);
  return (0, _createClass2["default"])(SenderFixed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var scrollLastMessage = this.props.scrollLastMessage;
      if (scrollLastMessage && this.eltTextArea) {
        scrollLastMessage(this.eltTextArea);
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var newMessage = event.currentTarget.value;
      if (newMessage !== this.state.messageToSend) {
        this.setState({
          messageToSend: newMessage
        });
      }
    }
  }, {
    key: "handleSendMessage",
    value: function handleSendMessage() {
      if (this.props.disable || this.state.messageToSend.trim() === "") {
        return;
      }
      if (this.props.saveMessage) {
        var intl = this.props.intl;
        var _notification = {
          success: intl.formatMessage({
            id: "foj_myspace_requestDetail_popinQuoteSuccess"
          }),
          error: intl.formatMessage({
            id: "global_error_technical"
          })
        };
        var initData = this.context.initData;
        var _this$state = this.state,
          files = _this$state.files,
          uuid = _this$state.uuid;
        var _newMessage = this.props.message;
        _newMessage.htmlContent = this.state.messageToSend;
        _newMessage.sentDate = Date.now();
        _newMessage.inProgress = true;
        _newMessage.direction = _constants.INITIATOR_TO_RESPONDENT;
        _newMessage.senderEmail = this.props.visitorInfos ? this.props.visitorInfos.email : "";
        var siteParam = initData.portalBean.site.toLowerCase();
        var filesPath = files.map(function (file) {
          return "".concat(_constants.FILER_MYSPACE_FOLDER + siteParam, "/").concat(uuid, "/").concat(file.path);
        });
        var filesName = files.map(function (file) {
          return {
            name: "".concat(file.name)
          };
        });
        _newMessage.attachments = filesName;
        _newMessage.attachmentPaths = filesPath;
        _newMessage.leadContext = this.props.leadContext;
        this.props.saveMessage(_newMessage, _notification);
        if (this.props.handleUpdateConversation) {
          this.props.handleUpdateConversation(_newMessage);
        }
        this.setState({
          messageToSend: "",
          files: []
        });
      }
    }
  }, {
    key: "handleAddAttachment",
    value: function handleAddAttachment() {
      if (this.props.disable || this.state.messageToSend.trim() == "") {
        return;
      }
      this.setState({
        attachmentsOpened: true
      });
    }
  }, {
    key: "closeAttachmentModal",
    value: function closeAttachmentModal() {
      this.setState({
        attachmentsOpened: false
      });
    }
  }, {
    key: "isError",
    value: function isError() {
      if (this.props.handleRemoveMessageConversation && this.props.message && this.props.messageRedux && this.props.message.error) {
        this.props.handleRemoveMessageConversation(this.props.message);
      }
    }

    /**
     * Affichage des pièces jointes validées par l'utilisateur.
     */
  }, {
    key: "renderAttachments",
    value: function renderAttachments(attachments) {
      this.setState({
        files: attachments
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      this.isError();
      var intl = this.props.intl;
      var placeholder = intl.formatMessage({
        id: this.props.disable ? "foj_myspace_rfqDetail_tab_history_statusClosed" : "foj_request_detail_send_message_placeholder"
      });
      var components = {
        disable: _sendMessage.SendButtonDisable,
        enable: _sendMessage.SendButton
      };
      var ButtonTag = this.state.messageToSend.trim().length > 0 && !this.props.disable ? components.enable : components.disable;
      return /*#__PURE__*/_react["default"].createElement(_sendMessage.ContentDiv, null, /*#__PURE__*/_react["default"].createElement(_sendMessage.TextMessageTexteArea, {
        className: "textarea",
        name: "sendMessageContent",
        id: "sendMessageContent",
        cols: "",
        rows: "5",
        placeholder: placeholder,
        onChange: function onChange($e) {
          return _this2.handleChange($e);
        },
        value: this.state.messageToSend,
        disabled: this.props.disable,
        ref: this.eltTextArea
      }), /*#__PURE__*/_react["default"].createElement(_sendMessage.Attachments, null, this.state.files.map(function (attachment) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: attachment.name,
          className: "Row"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "FileDetails"
        }, /*#__PURE__*/_react["default"].createElement("span", {
          className: "Filename"
        }, attachment.path)));
      })), /*#__PURE__*/_react["default"].createElement(_sendMessage.ActionsBtnSend, null, /*#__PURE__*/_react["default"].createElement(ButtonTag, {
        disabled: "",
        type: "button",
        name: "sendMessageButton",
        onClick: this.handleSendMessage
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_request_detail_send_message_action"
      })), /*#__PURE__*/_react["default"].createElement(_sendMessage.AttachButton, {
        disabled: this.state.attachmentsOpened || this.state.messageToSend.trim().length === 0 || this.props.disable,
        type: "button",
        name: "addAttachmentButton",
        onClick: this.handleAddAttachment,
        className: "attachments"
      }, intl.formatMessage({
        id: "foj_myspace_add_pj"
      }), /*#__PURE__*/_react["default"].createElement(_attachmentAddContainer["default"], {
        open: this.state.attachmentsOpened,
        handleClose: this.closeAttachmentModal,
        message: this.props.message,
        onValidateAttachments: this.renderAttachments,
        uuid: this.state.uuid,
        leadContext: this.props.leadContext
      }))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(SenderFixed);