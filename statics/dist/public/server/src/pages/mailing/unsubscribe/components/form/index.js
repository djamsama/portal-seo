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
var _capitalize = _interopRequireDefault(require("lodash/capitalize"));
var _reactIntl = require("react-intl");
var _veDesignSystem = require("ve-design-system");
var _contextComponent = require("../../../../../components/contextComponent");
var _form = require("./styles/form");
var _fieldWithError = _interopRequireDefault(require("../../../../../components/fieldWithError"));
var _fieldValidators = require("../../../../../components/fieldWithError/validators/fieldValidators");
var _unsubscribeReasonsFormContainer = _interopRequireDefault(require("../reasons/containers/unsubscribeReasonsFormContainer"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var UnsubscribeForm = /*#__PURE__*/function (_ContextComponent) {
  function UnsubscribeForm(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, UnsubscribeForm);
    _this = _callSuper(this, UnsubscribeForm, [props]);
    _this.clickSubmit = _this.clickSubmit.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(UnsubscribeForm, _ContextComponent);
  return (0, _createClass2["default"])(UnsubscribeForm, [{
    key: "clickSubmit",
    value: function clickSubmit(values) {
      var onSubmit = this.props.onSubmit;
      return onSubmit(values, this.context);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var portal = this.context.config.portal;
      var _this$props = this.props,
        intl = _this$props.intl,
        submitting = _this$props.submitting,
        handleSubmit = _this$props.handleSubmit,
        error = _this$props.error,
        postReturnSuccess = _this$props.postReturnSuccess,
        content = _this$props.content;
      var renderPostUnsubscribeOkOrForm = function renderPostUnsubscribeOkOrForm() {
        var notEmptyToken = _this2.context.initData.notEmptyToken;
        if (postReturnSuccess || notEmptyToken === true) {
          return /*#__PURE__*/_react["default"].createElement(_unsubscribeReasonsFormContainer["default"], null);
        }
        return /*#__PURE__*/_react["default"].createElement(_form.StyledForm, {
          onSubmit: handleSubmit(_this2.clickSubmit)
        }, error && /*#__PURE__*/_react["default"].createElement("strong", {
          className: "error-message"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "global_error_technical"
        })), /*#__PURE__*/_react["default"].createElement(_form.TitleH1, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "fo_unsubscribe_all_mediatypes_label"
        })), /*#__PURE__*/_react["default"].createElement(_form.UnsubscribeMessage, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "fo_unsubscribe_mail_input_message",
          values: {
            "0": "".concat((0, _capitalize["default"])(portal.siteLabel))
          }
        })), /*#__PURE__*/_react["default"].createElement(_form.EmailWrapper, null, /*#__PURE__*/_react["default"].createElement(_fieldWithError["default"], {
          type: "email",
          name: "email",
          "data-cy": "email",
          placeholder: intl.formatMessage({
            id: "fo_unsubscribe_mail_input_emailplaceholder"
          }),
          validate: [_fieldValidators.email, _fieldValidators.maxLength255]
        })), /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
          isBlock: true,
          type: "submit",
          isUnclickable: submitting,
          isLoading: submitting,
          dataAttrs: [{
            name: "cy",
            value: "submit"
          }]
        }, intl.formatMessage({
          id: "foj_unsubscribe_mail_reason_submit"
        })));
      };
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, renderPostUnsubscribeOkOrForm());
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(UnsubscribeForm);