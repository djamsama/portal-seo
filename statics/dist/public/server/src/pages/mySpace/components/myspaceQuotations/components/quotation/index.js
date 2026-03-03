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
var _semanticUiReact = require("semantic-ui-react");
var _reactIntl = require("react-intl");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../../components/formattedHTMLMessage"));
var _constants = require("../../../../../../commons/constants");
var _viewerContainer = _interopRequireDefault(require("../../../../containers/viewerContainer"));
var _withGoogleAnalytics = require("../../../../../../hoc/withGoogleAnalytics");
var _myspaceQuotation = require("./styles/myspaceQuotation");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var statutQuotation = {
  OPENED: {
    components: _myspaceQuotation.DateStatusDiv,
    i18nStatusKey: "foj_myspace_request_quotation_sent_date",
    iconStatus: "clock outline",
    colorStatus: "#fb0",
    quotationDone: false,
    validated: false,
    purchase: true
  },
  SENT: {
    components: _myspaceQuotation.DateStatusDiv,
    i18nStatusKey: "foj_myspace_request_quotation_sent_date",
    iconStatus: "clock outline",
    colorStatus: "#fb0",
    quotationDone: false,
    validated: false,
    purchase: true
  },
  ACCEPTED: {
    components: _myspaceQuotation.DateStatusCheckedDiv,
    i18nStatusKey: "foj_myspace_requestDetail_quoteAccepted",
    iconStatus: "check circle",
    colorStatus: "#45b938",
    quotationDone: true,
    validated: true,
    purchase: false
  },
  BANK_CARD_ORDER_REFUSED: {
    components: _myspaceQuotation.DateStatusDiv,
    i18nStatusKey: "foj_myspace_leadDetail_card_order_refused",
    iconStatus: "times circle",
    colorStatus: "#c53535",
    quotationDone: true,
    validated: false,
    purchase: true
  },
  BANK_TRANSFER_ORDER_REFUSED: {
    components: _myspaceQuotation.DateStatusDiv,
    i18nStatusKey: "foj_myspace_leadDetail_transfer_order_refused",
    iconStatus: "times circle",
    colorStatus: "#c53535",
    quotationDone: true,
    validated: false,
    purchase: true
  },
  BANK_CARD_ORDER_PENDING: {
    components: _myspaceQuotation.DateStatusCheckedDiv,
    i18nStatusKey: "foj_myspace_leadDetail_card_order_pending",
    iconStatus: "clock outline",
    colorStatus: "#fb0",
    quotationDone: true,
    validated: false,
    purchase: false
  },
  BANK_TRANSFER_ORDER_PENDING: {
    components: _myspaceQuotation.DateStatusCheckedDiv,
    i18nStatusKey: "foj_myspace_leadDetail_transfer_order_pending",
    iconStatus: "clock outline",
    colorStatus: "#fb0",
    quotationDone: true,
    validated: false,
    purchase: false
  },
  BANK_CARD_ORDER_ACCEPTED: {
    components: _myspaceQuotation.DateStatusCheckedDiv,
    i18nStatusKey: "foj_myspace_leadDetail_card_order_accepted",
    iconStatus: "check circle",
    colorStatus: "#45b938",
    quotationDone: true,
    validated: true,
    purchase: false
  },
  BANK_TRANSFER_ORDER_ACCEPTED: {
    components: _myspaceQuotation.DateStatusCheckedDiv,
    i18nStatusKey: "foj_myspace_leadDetail_transfer_order_accepted",
    iconStatus: "check circle",
    colorStatus: "#45b938",
    quotationDone: true,
    validated: true,
    purchase: false
  },
  TO_MODIFY: {
    components: _myspaceQuotation.DateStatusDiv,
    i18nStatusKey: "foj_lead_quoteStatus_modifcation",
    iconStatus: "clock outline",
    colorStatus: "#fb0",
    quotationDone: false,
    validated: false,
    purchase: true
  },
  REFUSED: {
    components: _myspaceQuotation.DateStatusDiv,
    i18nStatusKey: "foj_myspace_requestDetail_quoteRefused",
    iconStatus: "times circle",
    colorStatus: "#c53535",
    quotationDone: true,
    validated: false,
    purchase: true
  }
};
/**
 * Composant gérant la liste des devis.
 */
var Quotation = /*#__PURE__*/function (_React$Component) {
  function Quotation(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Quotation);
    _this = _callSuper(this, Quotation, [props]);
    _this.handleAccept = _this.handleAccept.bind(_this);
    _this.handleRefuse = _this.handleRefuse.bind(_this);
    _this.saveQuotation = _this.saveQuotation.bind(_this);
    _this.handleOpenClose = _this.handleOpenClose.bind(_this);
    _this.openDocumentViewer = _this.openDocumentViewer.bind(_this);
    _this.closeDocumentViewer = _this.closeDocumentViewer.bind(_this);
    _this.state = {
      openAccept: false,
      openRefuse: false,
      loading: false,
      downloaded: false
    };
    return _this;
  }
  (0, _inherits2["default"])(Quotation, _React$Component);
  return (0, _createClass2["default"])(Quotation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        openViewer = _this$props.openViewer,
        quoteIdToViewRedux = _this$props.quoteIdToViewRedux;
      if (openViewer && !quoteIdToViewRedux) {
        this.openDocumentViewer();
      }
    }

    /**
     *
     * @param {*} quotation
     */
  }, {
    key: "handleAccept",
    value: function handleAccept(quotation) {
      this.setState({
        loading: true
      });
      quotation.next = null;
      quotation.previous = quotation.status;
      quotation.status = _constants.QUOTATION_STATUS.ACCEPTED;
      this.saveQuotation(quotation);
    }
  }, {
    key: "handleOpenClose",
    value: function handleOpenClose(who) {
      var quotation = this.props.quotation;
      if (quotation.rfqConversationStatus !== _constants.RFQ_STATUS.CLOSED) {
        Object.assign(who);
        this.setState(who);
      }
    }

    /**
     *
     * @param {*} quotation
     */
  }, {
    key: "handleRefuse",
    value: function handleRefuse(quotation) {
      this.setState({
        loading: true
      });
      quotation.next = null;
      quotation.previous = quotation.status;
      quotation.status = _constants.QUOTATION_STATUS.REFUSED;
      this.setState({
        openRefuse: true
      });
      this.saveQuotation(quotation);
    }

    /**
     *
     * @param {*} quotation
     */
  }, {
    key: "saveQuotation",
    value: function saveQuotation(quotation) {
      quotation.leadContext = this.props.leadContext;
      this.props.saveQuotation(quotation);
    }
  }, {
    key: "openDocumentViewer",
    value: function openDocumentViewer() {
      var _this$props2 = this.props,
        googleAnalytics = _this$props2.googleAnalytics,
        quotation = _this$props2.quotation,
        setQuoteIdToView = _this$props2.setQuoteIdToView;
      googleAnalytics.event({
        category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
        action: _constants.GOOGLE_ANALYTICS_EVENTS.QUOTE_VIEWER,
        label: _constants.GOOGLE_ANALYTICS_EVENTS.CLICK_BOUTON_QUOTE_VIEWER
      });
      setQuoteIdToView(quotation.id);
    }
  }, {
    key: "closeDocumentViewer",
    value: function closeDocumentViewer() {
      var setQuoteIdToView = this.props.setQuoteIdToView;
      setQuoteIdToView(null);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        intl = _this$props3.intl,
        quotation = _this$props3.quotation,
        lead = _this$props3.lead,
        leadContext = _this$props3.leadContext,
        quoteIdToViewRedux = _this$props3.quoteIdToViewRedux;
      var currentQuotation = quotation.combinedStatus ? statutQuotation[quotation.combinedStatus] : statutQuotation.SENT;

      /**
       * la date status du devis formaté
       * statusDateFormatted pour les request et
       * sentDate pour les rfq
       */
      var statusDate = quotation.statusDateFormatted ? quotation.statusDateFormatted : quotation.sentDate;
      var param = quotation.status === "TO_MODIFY" ? currentQuotation.i18nStatusKeyParams = {
        "0": statusDate
      } : {};
      /**
       * Les messages pour les notifications
       */
      quotation.msgs = {
        success: intl.formatMessage({
          id: "foj_myspace_requestDetail_popinQuoteSuccess"
        }),
        error: intl.formatMessage({
          id: "global_error_technical"
        }),
        downloaded: intl.formatMessage({
          id: "foj_myspace_request_quotation_downloaded"
        })
      };
      if (!currentQuotation) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
      }
      var status = currentQuotation.i18nStatusKey ? /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: currentQuotation.i18nStatusKey,
        values: param
      }) : "";
      var downloadContextUrl = leadContext === "rfq" ? "/rfq" : "";
      var quotationReceivedOn = intl.formatMessage({
        id: "foj_myspace_request_quotation_receipt_date"
      }, {
        "0": quotation.attachmentDto.dateFormatted
      });
      var internalError = intl.formatMessage({
        id: "foj_myspace_technical_error"
      });
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_viewerContainer["default"], {
        open: quoteIdToViewRedux == quotation.id,
        onClose: this.closeDocumentViewer,
        quotation: quotation,
        lead: lead,
        leadContext: leadContext,
        attachmentContext: "/myspace".concat(downloadContextUrl, "/openedQuote/").concat(quotation.attachmentDto.token)
      }), /*#__PURE__*/_react["default"].createElement(_myspaceQuotation.InsetDiv, {
        clickable: true,
        onClick: this.openDocumentViewer
      }, quotation.logoUrl && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_myspaceQuotation.ImgLogo, {
        src: quotation.logoUrl
      })), /*#__PURE__*/_react["default"].createElement(_myspaceQuotation.QuoteContentDiv, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon.Group, {
        size: "big",
        style: {
          margin: "0 0 0 8px",
          fontSize: "2.4em"
        }
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "file text outline",
        style: {
          color: "#cbcdcb"
        }
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "bars",
        size: "tiny",
        style: {
          left: "12px",
          top: "17px",
          color: "#cbcdcb"
        }
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: currentQuotation.iconStatus,
        corner: "top left",
        style: {
          left: "-8px",
          top: "-8px",
          color: currentQuotation.colorStatus
        }
      })), /*#__PURE__*/_react["default"].createElement(_myspaceQuotation.QuoteInformationDiv, null, /*#__PURE__*/_react["default"].createElement(_myspaceQuotation.QuoteNameDiv, null, quotation.attachmentDto.name), /*#__PURE__*/_react["default"].createElement(_myspaceQuotation.DateReceivedDiv, null, quotationReceivedOn), quotation.leadQuoteTransactionDto && /*#__PURE__*/_react["default"].createElement(_myspaceQuotation.CommandNumber, null, intl.formatMessage({
        id: "foj_myspace_leadDetail_command_number"
      }), " ", quotation.leadQuoteTransactionDto.commandNumber), /*#__PURE__*/_react["default"].createElement(_myspaceQuotation.DateStatusDiv, {
        style: {
          color: currentQuotation.colorStatus
        }
      }, status), quotation.next && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
        negative: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "attention"
      })), /*#__PURE__*/_react["default"].createElement("p", null, internalError))), /*#__PURE__*/_react["default"].createElement(_myspaceQuotation.OpenViewerDiv, null, /*#__PURE__*/_react["default"].createElement(_myspaceQuotation.OpenPDFViewerButton, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "search plus",
        style: {
          margin: "0"
        }
      }))))));
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = (0, _reactIntl.injectIntl)((0, _withGoogleAnalytics.withGoogleAnalytics)(Quotation));