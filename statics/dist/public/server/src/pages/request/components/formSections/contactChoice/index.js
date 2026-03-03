"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _findIndex = _interopRequireDefault(require("lodash/findIndex"));
var _camelCase = _interopRequireDefault(require("lodash/camelCase"));
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../components/formattedHTMLMessage"));
var _contextComponent = require("../../../../../components/contextComponent");
var _contact = _interopRequireDefault(require("./components/contact"));
var _contactDetailHighlight = _interopRequireDefault(require("./components/contactDetailHighlight"));
var _returnButton = _interopRequireDefault(require("../../../../../components/returnButton"));
var _returnHelper = require("../../../helpers/returnHelper");
var _field = require("../../../helpers/field");
var _contactChoice = require("./styles/contactChoice");
var _notificationsHelper = _interopRequireDefault(require("../../../../../helpers/notificationsHelper"));
var _trackingGa = require("../../../../../components/trackings/trackingGa");
var _constants = require("../../../constants");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/** Demandes: step affichage de la liste des contacts */
var ContactChoiceComponent = /*#__PURE__*/function (_ContextComponent) {
  function ContactChoiceComponent(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, ContactChoiceComponent);
    _this = _callSuper(this, ContactChoiceComponent, [props, context]);
    _this.handleSubmitChoice = _this.handleSubmitChoice.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(ContactChoiceComponent, _ContextComponent);
  return (0, _createClass2["default"])(ContactChoiceComponent, [{
    key: "handleSubmitChoice",
    value: function handleSubmitChoice(val) {
      var _this$props = this.props,
        stepId = _this$props.stepId,
        intl = _this$props.intl,
        handleSubmitForm = _this$props.handleSubmitForm;
      var stepIdFormatted = (0, _camelCase["default"])(stepId);
      var msgs = new _notificationsHelper["default"](intl, null, "global_error_technical");
      var value = {};
      value[stepIdFormatted] = {
        contactId: val
      };
      handleSubmitForm(value, msgs);
    }

    /** Est ce que un des contact a un prix */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        fields = _this$props2.fields,
        contactChoiceFormTitle = _this$props2.contactChoiceFormTitle,
        requestTrackEvent = _this$props2.requestTrackEvent,
        submittingStep = _this$props2.submittingStep,
        errors = _this$props2.errors,
        requestType = _this$props2.requestType;
      var contactId = (0, _field.getFieldsByName)(fields, "contactId");
      var nb = contactId && contactId.data ? contactId.data.length : 0;
      var isPrice = ContactChoiceComponent.isPrice(contactId);
      var allContacts = contactId && contactId.data ? contactId.data : [];
      var notHighlightContacts = (0, _toConsumableArray2["default"])(allContacts);
      var highlightContact = notHighlightContacts.shift();
      var contacts = requestType === _constants.REQUEST_CONTACT_DETAIL ? notHighlightContacts : allContacts;
      var labelGa = requestTrackEvent && requestTrackEvent.label ? requestTrackEvent.label : "ShowDealerSelector";
      return /*#__PURE__*/_react["default"].createElement(_contactChoice.ContactChoiceWrapper, null, contactChoiceFormTitle && /*#__PURE__*/_react["default"].createElement(_contactChoice.Txt, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: contactChoiceFormTitle
      })), requestType === _constants.REQUEST_CONTACT_DETAIL && /*#__PURE__*/_react["default"].createElement(_contactDetailHighlight["default"], {
        requestType: requestType,
        handleSubmitChoice: this.handleSubmitChoice,
        isPrice: isPrice,
        contact: highlightContact,
        isLoading: submittingStep,
        highLight: true,
        nb: nb
      }), contacts && contacts.map(function (contact, index) {
        return /*#__PURE__*/_react["default"].createElement(_contact["default"], {
          requestTrackEvent: requestTrackEvent,
          labelGa: labelGa,
          requestType: requestType,
          handleSubmitChoice: _this2.handleSubmitChoice,
          key: contact.id,
          isPrice: isPrice,
          contact: contact,
          isLoading: submittingStep,
          highLight: index === 0 && requestType !== _constants.REQUEST_CONTACT_DETAIL,
          nb: nb
        });
      }), requestTrackEvent && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !submittingStep && !errors && /*#__PURE__*/_react["default"].createElement(_trackingGa.TrackingGaDisplay, {
        key: labelGa,
        requestTrackEvent: requestTrackEvent,
        label: labelGa,
        value: 0
      }), /*#__PURE__*/_react["default"].createElement(_trackingGa.TrackingGaExit, {
        category: requestTrackEvent.category,
        action: requestTrackEvent.action,
        label: _constants.GA_LABELS[_constants.AJAX_REQUEST_FORM_CONTACT_CHOICE_FORMATED].close,
        active: true
      })), allContacts.length === 0 && /*#__PURE__*/_react["default"].createElement(_returnButton["default"], {
        i18nkey: "fo_request_return_initial",
        goBackTo: _returnHelper.goBackTo
      }));
    }
  }], [{
    key: "isPrice",
    value: function isPrice(contactId) {
      if (contactId && contactId.data) {
        var copyData = (0, _toConsumableArray2["default"])(contactId.data);
        var notHighlights = copyData.splice(1);
        return (0, _findIndex["default"])(notHighlights, function (product) {
          return product.productPrice !== null && typeof product.productPrice !== "undefined";
        }) >= 0;
      }
      return false;
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = ContactChoiceComponent;