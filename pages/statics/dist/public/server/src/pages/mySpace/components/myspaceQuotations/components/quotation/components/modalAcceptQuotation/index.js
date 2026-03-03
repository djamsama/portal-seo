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
var _propTypes = _interopRequireDefault(require("prop-types"));
var _modal = _interopRequireDefault(require("../../../../../../../../components/modal"));
var _modalContent = require("../../../../../modalMySpace/modalContent");
var _styledComponents = _interopRequireDefault(require("styled-components"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable react/require-default-props */
var SubmitButton = (0, _styledComponents["default"])(_modalContent.SubmitButton).withConfig({
  componentId: "sc-72w1yw-0"
})(["&{disabled:", ";opacity:", ";cursor:", ";}"], function (props) {
  return props.disabled ? "disabled" : false;
}, function (props) {
  return props.disabled ? ".25" : "1";
}, function (props) {
  return props.disabled ? "not-allowed" : "pointer";
});
var ButtonsContent = (0, _styledComponents["default"])(_modalContent.DivButtonsContent).withConfig({
  componentId: "sc-72w1yw-1"
})(["&{margin-bottom:3%;}"]);

/**
 * Contenu de la modale d'acceptation d'un devis
 */
var ModalAcceptQuotation = /*#__PURE__*/function (_React$Component) {
  function ModalAcceptQuotation(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, ModalAcceptQuotation);
    _this = _callSuper(this, ModalAcceptQuotation, [props, state]);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    _this.handleAcceptConditions = _this.handleAcceptConditions.bind(_this);
    _this.quotation = props.quotation;
    _this.state = {
      conditionsChecked: false
    };
    return _this;
  }
  (0, _inherits2["default"])(ModalAcceptQuotation, _React$Component);
  return (0, _createClass2["default"])(ModalAcceptQuotation, [{
    key: "handleSubmit",
    value:
    /**
     * Envoi du formulaire
     * @param {*} event
     */
    function handleSubmit(event) {
      event.preventDefault();
      if (this.state.conditionsChecked && this.props.handleAccept) {
        this.props.handleAccept(this.quotation);
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
          openAccept: false
        });
        this.setState({
          conditionsChecked: false
        });
      }
    }
  }, {
    key: "handleAcceptConditions",
    value: function handleAcceptConditions() {
      this.setState({
        conditionsChecked: !this.state.conditionsChecked
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var intl = this.props.intl;
      var messageAcceptCondition = intl.formatMessage({
        id: "foj_myspace_requestDetail_popinAcceptQuoteCheckbox"
      }).replace("@quoteName@", this.quotation && this.quotation.attachmentDto ? this.quotation.attachmentDto.name : "");
      return /*#__PURE__*/_react["default"].createElement(_modal["default"], {
        open: this.props.open
      }, /*#__PURE__*/_react["default"].createElement(_modalContent.ModalQuotationDivContent, null, /*#__PURE__*/_react["default"].createElement(_modalContent.HeaderModal, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_requestDetail_popinAcceptQuoteTitle"
      }), /*#__PURE__*/_react["default"].createElement(_modalContent.CloseGray, {
        onClick: this.handleClose
      })), /*#__PURE__*/_react["default"].createElement(_modalContent.ModalTextContent, null, /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_modalContent.ImgQuote, {
        visible: this.state.conditionsChecked
      }), /*#__PURE__*/_react["default"].createElement(_modalContent.PModalText, null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "checkbox",
        name: "conditions",
        defaultValue: "false",
        onChange: this.handleAcceptConditions
      }), messageAcceptCondition), /*#__PURE__*/_react["default"].createElement(ButtonsContent, null, /*#__PURE__*/_react["default"].createElement(SubmitButton, {
        type: "submit",
        disabled: !this.state.conditionsChecked,
        widthButton: "35%",
        value: intl.formatMessage({
          id: "foj_myspace_requestDetail_popinQuoteConfirmButton"
        })
      })), /*#__PURE__*/_react["default"].createElement(ButtonsContent, null, /*#__PURE__*/_react["default"].createElement(_modalContent.ModalButton, {
        onClick: function onClick(event) {
          return _this2.handleClose(event);
        },
        widthButton: "35%"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_requestDetail_popinQuoteCancelButton"
      })))))))));
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(ModalAcceptQuotation);
/* eslint react/forbid-prop-types: 0 */
ModalAcceptQuotation.propTypes = {
  /**
   *  CallBack pour fermer la popup up
   */
  handleOpenClose: _propTypes["default"].func,
  /**
   * current folder
   */
  quotation: _propTypes["default"].object.isRequired,
  /**
   * Est ce la modale doit etre ouverte
   */
  open: _propTypes["default"].bool.isRequired
};