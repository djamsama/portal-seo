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
var _statut = _interopRequireDefault(require("../statut"));
var _messages = require("./styles/messages");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable react/forbid-prop-types */
/**
 * Affichage dun contenu d'un message
 */
var Message = exports["default"] = /*#__PURE__*/function (_React$Component) {
  function Message() {
    (0, _classCallCheck2["default"])(this, Message);
    return _callSuper(this, Message, arguments);
  }
  (0, _inherits2["default"])(Message, _React$Component);
  return (0, _createClass2["default"])(Message, [{
    key: "render",
    value: function render() {
      var message = this.props.message;
      var nameClass = !message.htmlContent && message.infoMessage ? "message infoMessage" : "message";
      return /*#__PURE__*/_react["default"].createElement(_messages.MessageWrapper, {
        className: nameClass
      }, !message.info && /*#__PURE__*/_react["default"].createElement(_statut["default"], {
        message: message
      }), !message.translated && message.htmlContent && /*#__PURE__*/_react["default"].createElement("div", {
        dangerouslySetInnerHTML: Message.createMarkup(message.htmlContent)
      }), message.translated && message.htmlContent && message.htmlTranslated && /*#__PURE__*/_react["default"].createElement("div", {
        dangerouslySetInnerHTML: Message.createMarkup(message.htmlTranslated)
      }), !message.htmlContent && message.infoMessage &&
      /*#__PURE__*/
      // eslint-disable-next-line react/no-danger
      _react["default"].createElement("div", {
        dangerouslySetInnerHTML: Message.createMarkupInfo(message)
      }));
    }
  }], [{
    key: "createMarkupInfo",
    value: function createMarkupInfo(message) {
      var attachments = message.quotations;
      var attachementsString = "";
      if (attachments) {
        // eslint-disable-next-line array-callback-return
        attachments.map(function (attachment, index) {
          attachementsString += "<span class=\"messageInfoAttachement\">\n                     ".concat(attachment.name, " ").concat(index + 1 < attachments.length ? ", " : "", "\n                  </span>");
        });
      }
      return {
        __html: message.infoMessage + attachementsString
      };
    }
  }, {
    key: "createMarkup",
    value: function createMarkup(html) {
      return {
        __html: html
      };
    }
  }]);
}(_react["default"].Component);
Message.propTypes = {
  message: _propTypes["default"].object.isRequired
};