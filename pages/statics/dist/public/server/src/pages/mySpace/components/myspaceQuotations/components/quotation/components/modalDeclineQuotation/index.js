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
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _modal = _interopRequireDefault(require("../../../../../../../../components/modal"));
var _modalContent = require("../../../../../modalMySpace/modalContent");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable react/require-default-props */
var SubmitButton = (0, _styledComponents["default"])(_modalContent.SubmitButton).withConfig({
  componentId: "sc-1mgevoj-0"
})(["&{disabled:", ";opacity:", ";cursor:", ";}"], function (props) {
  return props.disabled ? "disabled" : false;
}, function (props) {
  return props.disabled ? ".25" : "1";
}, function (props) {
  return props.disabled ? "not-allowed" : "pointer";
});
var ButtonsContent = (0, _styledComponents["default"])(_modalContent.DivButtonsContent).withConfig({
  componentId: "sc-1mgevoj-1"
})(["&{margin-bottom:3%;}"]);
/**
 * Contenu de la modale de refus d'un devis
 */
var ModalDeclineQuotation = /*#__PURE__*/function (_React$Component) {
  function ModalDeclineQuotation(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, ModalDeclineQuotation);
    _this = _callSuper(this, ModalDeclineQuotation, [props]);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    _this.handleRejectionReason = _this.handleRejectionReason.bind(_this);
    _this.quotation = props.quotation;
    _this.state = {
      rejectionReason: "",
      error: false
    };
    return _this;
  }
  (0, _inherits2["default"])(ModalDeclineQuotation, _React$Component);
  return (0, _createClass2["default"])(ModalDeclineQuotation, [{
    key: "handleSubmit",
    value:
    /**
     * Envoi du formulaire
     * @param {*} event
     */
    function handleSubmit(event) {
      event.preventDefault();
      if (this.state.rejectionReason.trim() == "") {
        this.setState({
          error: true
        });
        return;
      }
      if (this.props.handleRefuse) {
        this.props.handleRefuse(this.quotation);
      }
    }

    /**
     * Fermeture de la modale
     * @param {*} event
     */
  }, {
    key: "handleClose",
    value: function handleClose() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (event) {
        event.preventDefault();
      }
      if (this.props.handleOpenClose) {
        this.props.handleOpenClose({
          openRefuse: false
        });
      }
    }
  }, {
    key: "handleRejectionReason",
    value: function handleRejectionReason(event) {
      this.quotation.message = event.target.value;
      this.setState({
        rejectionReason: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var intl = this.props.intl;
      var error = this.state.error;
      return /*#__PURE__*/_react["default"].createElement(_modal["default"], {
        open: this.props.open
      }, /*#__PURE__*/_react["default"].createElement(_modalContent.ModalQuotationDivContent, null, /*#__PURE__*/_react["default"].createElement(_modalContent.HeaderModal, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_requestDetail_popinRefusedQuoteTitle"
      }), /*#__PURE__*/_react["default"].createElement(_modalContent.CloseGray, {
        onClick: this.handleClose
      })), /*#__PURE__*/_react["default"].createElement(_modalContent.ModalTextContent, null, /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_modalContent.PModalText, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_requestDetail_popinRefusedQuoteLabel"
      }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.TextArea, {
        value: this.state.rejectionReason,
        rows: 4,
        onChange: this.handleRejectionReason,
        style: {
          width: "90%"
        },
        className: error ? "error" : ""
      }))), /*#__PURE__*/_react["default"].createElement(ButtonsContent, null, /*#__PURE__*/_react["default"].createElement(SubmitButton, {
        type: "submit",
        widthButton: "35%",
        disabled: this.state.rejectionReason == "",
        value: intl.formatMessage({
          id: "foj_myspace_requestDetail_popinDeclineQuoteConfirmButton"
        })
      })), /*#__PURE__*/_react["default"].createElement(ButtonsContent, null, /*#__PURE__*/_react["default"].createElement(_modalContent.ModalButton, {
        onClick: this.handleClose
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_requestDetail_popinQuoteCancelButton"
      })))))))));
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(ModalDeclineQuotation);