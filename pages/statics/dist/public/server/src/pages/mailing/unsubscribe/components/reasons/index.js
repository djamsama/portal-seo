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
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _reduxForm = require("redux-form");
var _veDesignSystem = require("ve-design-system");
var _contextComponent = require("../../../../../components/contextComponent");
var _fieldCheckbox = require("../../../../../components/fieldCheckbox");
var _form = require("../form/styles/form");
var _index = _interopRequireDefault(require("./components/unsubscribeFormConfirmation/index"));
var _mediaUnsubscribeOptions = _interopRequireDefault(require("./components/mediaUnsubscribeOptions"));
var _unsubscribeReasonHelper = _interopRequireDefault(require("./helpers/unsubscribeReasonHelper"));
var _form2 = require("./styles/form");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var UnsubscribeReasonsForm = /*#__PURE__*/function (_ContextComponent) {
  function UnsubscribeReasonsForm(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, UnsubscribeReasonsForm);
    _this = _callSuper(this, UnsubscribeReasonsForm, [props, state]);
    /**
     * Indique s'il s'agit de désinscription global/total
     * @param {number} value - La valeur de désinscription.
     */
    (0, _defineProperty2["default"])(_this, "onRadioOptionChange", function (option) {
      _this.setState(function (prevState) {
        return {
          selectedOption: option,
          formData: _objectSpread(_objectSpread({}, prevState.formData), {}, {
            globalUnsubscribe: option === 1
          })
        };
      });
    });
    _this.state = {
      selectedOption: 0,
      formData: {
        visitorToken: null,
        globalUnsubscribe: false,
        allMediaSubscriptions: null,
        reasonLabelIds: [],
        textReasonValue: []
      }
    };
    _this.clickSubmit = _this.clickSubmit.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(UnsubscribeReasonsForm, _ContextComponent);
  return (0, _createClass2["default"])(UnsubscribeReasonsForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var cancelationReasonForm = _unsubscribeReasonHelper["default"].getCancelationReasonForm(this.props, this.context);
      this.setState(function (prevState) {
        return {
          formData: _objectSpread(_objectSpread({}, prevState.formData), {}, {
            visitorToken: cancelationReasonForm.visitorToken,
            allMediaSubscriptions: cancelationReasonForm.allMediaSubscriptions
          })
        };
      });
    }

    /**
     * Soumet le formulaire de désinscription
     */
  }, {
    key: "clickSubmit",
    value: function clickSubmit(values) {
      var onSubmit = this.props.onSubmit;
      this.state.formData.reasonLabelIds = values.reasonLabelIds;
      this.state.formData.textReasonValue = values.textReasonValue;
      return onSubmit(_objectSpread({}, this.state.formData), this.context);
    }
  }, {
    key: "render",
    value: function render() {
      var site = this.context.config.portal.site.toLowerCase();
      var reasons = _unsubscribeReasonHelper["default"].getReasons(this.props, this.context);
      var initData = this.context.initData;
      var visitorEmail = initData.visitorEmail,
        globalLinksHome = initData.globalLinksHome;
      var _this$props = this.props,
        intl = _this$props.intl,
        submitting = _this$props.submitting,
        unsubscribed = _this$props.unsubscribed,
        handleSubmit = _this$props.handleSubmit;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !unsubscribed && /*#__PURE__*/_react["default"].createElement(_form2.StyledFormReason, {
        onSubmit: handleSubmit(this.clickSubmit)
      }, /*#__PURE__*/_react["default"].createElement(_form2.TitleH1Reason, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_unsubscribe_communications_manage_title"
      })), /*#__PURE__*/_react["default"].createElement(_mediaUnsubscribeOptions["default"], {
        site: site,
        onRadioOptionChange: this.onRadioOptionChange,
        selectedOption: this.state.selectedOption,
        allMediaSubscriptions: this.state.formData.allMediaSubscriptions
      }), /*#__PURE__*/_react["default"].createElement(_form.Container, null, /*#__PURE__*/_react["default"].createElement(_form2.TitleH2Reason, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_unsubscribe_leaving_us_question"
      })), /*#__PURE__*/_react["default"].createElement(_form2.SectionMessageReason, null, /*#__PURE__*/_react["default"].createElement(_form2.UnsubscribeMessageReason, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_unsubscribe_mail_reason_message"
      })), /*#__PURE__*/_react["default"].createElement(_form2.UnsubscribeMessageReason, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_unsubscribe_mail_reason_message_question"
      }))), /*#__PURE__*/_react["default"].createElement(_form2.ReasonsListContainer, {
        disabled: this.state.selectedOption === 0
      }, reasons === null || reasons === void 0 ? void 0 : reasons.map(function (reason) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
          key: reason.id
        }, /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
          name: "reasonLabelIds.".concat(reason.id),
          "data-cy": "reasonLabelIds_".concat(reason.id),
          component: _fieldCheckbox.CheckboxField,
          label: intl.formatMessage({
            id: reason.labelKey
          })
        }), reason.type === "TEXT" && /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
          name: "textReasonValue.".concat(reason.id),
          "data-cy": "textReasonValue_".concat(reason.id),
          component: "textarea",
          type: "textarea",
          rows: 6
        }));
      }))), /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        isBlock: true,
        type: "submit",
        isUnclickable: submitting,
        isDisabled: this.state.selectedOption === 0,
        isLoading: submitting,
        dataAttrs: [{
          name: "cy",
          value: "submit"
        }]
      }, intl.formatMessage({
        id: "foj_unsubscribe_mail_reason_submit"
      }))), unsubscribed && /*#__PURE__*/_react["default"].createElement(_index["default"], {
        visitorEmail: visitorEmail,
        globalLinksHome: visitorEmail
      }));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(UnsubscribeReasonsForm);