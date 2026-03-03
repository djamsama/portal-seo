"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _readOnlyError2 = _interopRequireDefault(require("@babel/runtime/helpers/readOnlyError"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _formattedHTMLMessage = _interopRequireDefault(require("../../formattedHTMLMessage"));
var _link = require("../../link");
var _constants = require("../../../commons/constants");
var _contextComponent = require("../../contextComponent");
var _withGoogleAnalytics = require("../../../hoc/withGoogleAnalytics");
var _messageSender = _interopRequireDefault(require("../messageSender"));
var _borderMessage = _interopRequireDefault(require("../borderMessage"));
var _message = _interopRequireDefault(require("../message"));
var _thumbnailQuotation = _interopRequireDefault(require("../thumbnailQuotation"));
var _messageFull = require("./styles/messageFull");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Affichage d'un message et de ses pièces jointes
 */
var MessageFull = /*#__PURE__*/function (_ContextComponent) {
  function MessageFull(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, MessageFull);
    _this = _callSuper(this, MessageFull, [props]);
    _this.renderAttachmentsQuotations = _this.renderAttachmentsQuotations.bind(_this);
    _this.translate = _this.translate.bind(_this);
    _this.openViewer = _this.openViewer.bind(_this);
    _this.state = {
      message: _this.props.message
    };
    return _this;
  }
  (0, _inherits2["default"])(MessageFull, _ContextComponent);
  return (0, _createClass2["default"])(MessageFull, [{
    key: "openViewer",
    value: function openViewer(event, attachment) {
      var _this$props = this.props,
        googleAnalytics = _this$props.googleAnalytics,
        setQuoteIdToView = _this$props.setQuoteIdToView;
      googleAnalytics.event({
        category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
        action: _constants.GOOGLE_ANALYTICS_EVENTS.QUOTE_VIEWER,
        label: _constants.GOOGLE_ANALYTICS_EVENTS.CLICK_BOUTON_QUOTE_VIEWER
      });
      setQuoteIdToView(attachment.quoteId);
    }

    /**
     * Gestion de l'affichage des pièces jointes
     *
     * @param {VeMessage} message
     * @param {string} selector
     * @param {number} nb
     */
  }, {
    key: "renderAttachmentsQuotations",
    value: function renderAttachmentsQuotations(message, selector, nb) {
      var _this2 = this;
      var attachments = message["".concat(selector, "s")];
      var downloadUrl = {
        quotation: "openedQuote",
        invoice: "download",
        priceList: "download",
        attachment: "download"
      };
      var downloadContextUrl = this.props.leadContext === "rfq" ? "/rfq" : "";
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_messageFull.LineDiv, null), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: attachments.length <= 1 ? "foj_request_detail_conv_history_message_".concat(selector) : "foj_request_detail_conv_history_message_".concat(selector, "s"),
        values: {
          "0": nb
        }
      }), /*#__PURE__*/_react["default"].createElement(_messageFull.AttachmentsUl, {
        selector: selector
      }, attachments.map(function (attachment) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
          key: attachment.token
        }, selector !== "quotation" && /*#__PURE__*/_react["default"].createElement(_messageFull.AttachmentLi, null, /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
          component: _messageFull.DownloadLink,
          to: "/myspace".concat(downloadContextUrl, "/").concat(downloadUrl[selector], "/").concat(attachment.token),
          external: true,
          target: "_blank",
          rel: "noopener noreferrer",
          disabled: !attachment.path
        }, /*#__PURE__*/_react["default"].createElement(_thumbnailQuotation["default"], {
          attachment: attachment,
          selector: selector
        }))), selector === "quotation" && /*#__PURE__*/_react["default"].createElement(_messageFull.AttachmentLi, {
          onClick: function onClick(e) {
            _this2.openViewer(e, attachment);
          }
        }, /*#__PURE__*/_react["default"].createElement(_thumbnailQuotation["default"], {
          attachment: attachment,
          selector: selector
        })));
      })));
    }

    /**
     * Gestion de la traduction d'un message.
     */
  }, {
    key: "translate",
    value: function translate() {
      var _this3 = this;
      var message = this.state.message;
      var _this$props2 = this.props,
        goBackToOriginalLanguage = _this$props2.goBackToOriginalLanguage,
        translate = _this$props2.translate,
        visitorLanguage = _this$props2.visitorLanguage;
      if (message.translated) {
        goBackToOriginalLanguage(message.id, this.context).then(function () {
          message.translated = false;
          _this3.setState({
            message: message
          });
        });
      } else {
        translate(message.id, visitorLanguage, this.context).then(function (htmlTranslated) {
          message.htmlTranslated = htmlTranslated;
          message.translated = true;
          _this3.setState({
            message: message
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        intl = _this$props3.intl,
        visitorLanguage = _this$props3.visitorLanguage;
      var message = this.state.message;
      message.leadContext = this.props.leadContext;
      message.companyName = this.props.companyName;
      var direction = "info";
      if (message.direction) {
        direction = message.direction === _constants.INITIATOR_TO_RESPONDENT ? "right" : "left";
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "message",
        style: {
          overflow: "auto",
          marginBottom: "40px"
        }
      }, message.sentDate && /*#__PURE__*/_react["default"].createElement(_messageSender["default"], {
        message: message
      }), /*#__PURE__*/_react["default"].createElement(_borderMessage["default"], {
        message: message,
        direction: direction
      }, /*#__PURE__*/_react["default"].createElement(_message["default"], {
        message: message
      }), direction !== "info" && (message.attachments && message.attachments.length > 0 || message.quotations && message.quotations.length > 0 || message.priceLists && message.priceLists.length > 0 || message.invoices && message.invoices.length > 0) && /*#__PURE__*/_react["default"].createElement(_messageFull.AttachmentsDiv, null, message.quotations &&
      // Les devis
      message.quotations.length > 0 && this.renderAttachmentsQuotations(message, "quotation", message.quotations.length), message.priceLists &&
      // Les liste des prix
      message.priceLists.length > 0 && this.renderAttachmentsQuotations(message, "priceList", message.priceLists.length), message.invoices &&
      // Les factures
      message.invoices.length > 0 && this.renderAttachmentsQuotations(message, "invoice", message.invoices.length), message.attachments &&
      // Les autres pièces jointes
      message.attachments.length > 0 && this.renderAttachmentsQuotations(message, "attachment", message.attachments.length)), message.translated && /*#__PURE__*/_react["default"].createElement(_messageFull.AutoTranslationInfo, null, /*#__PURE__*/_react["default"].createElement(_messageFull.AutoTranslationIcon, null), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_leadDetail_conv_history_translation_alertTranslation"
      }))), message.direction === _constants.RESPONDENT_TO_INITIATOR && /*#__PURE__*/_react["default"].createElement(_messageFull.TranslationAction, null, /*#__PURE__*/_react["default"].createElement(_messageFull.MessageTranslationIcon, null), /*#__PURE__*/_react["default"].createElement(_messageFull.TranslationLink, {
        as: "a",
        onClick: this.translate
      }, !message.translated && /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_myspace_leadDetail_conv_history_translation_translate",
        values: {
          "0": intl.formatMessage({
            id: "global_language_".concat(visitorLanguage.toLowerCase())
          })
        }
      }), message.translated && /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_myspace_leadDetail_conv_history_translation_originalVersion"
      })), /*#__PURE__*/_react["default"].createElement(_messageFull.BetaInfo, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_leadDetail_conv_history_translation_beta"
      }))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)((0, _reactIntl.injectIntl)(MessageFull));