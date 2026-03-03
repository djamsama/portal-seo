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
var _reduxForm = require("redux-form");
var _veDesignSystem = require("ve-design-system");
var _contextComponent = require("../../../../../components/contextComponent");
var _picture = _interopRequireDefault(require("../../../../../components/picture"));
var _clickableCard = _interopRequireDefault(require("../../../../../components/clickableCard"));
var _form = require("./styles/form");
var _link = require("../../../../../components/link");
var _fieldWithError = _interopRequireDefault(require("../../../../../components/fieldWithError"));
var _subscribe = require("../../styles/subscribe");
var _fieldValidators = require("../../../../../components/fieldWithError/validators/fieldValidators");
var _fieldCheckbox = require("../../../../../components/fieldCheckbox");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var SubscribeForm = /*#__PURE__*/function (_ContextComponent) {
  function SubscribeForm(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, SubscribeForm);
    _this = _callSuper(this, SubscribeForm, [props]);
    _this.clickSubmit = _this.clickSubmit.bind(_this);
    _this.selectAll = _this.selectAll.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(SubscribeForm, _ContextComponent);
  return (0, _createClass2["default"])(SubscribeForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* Initialisation du form */
      var _this$context$initDat = this.context.initData,
        emailFromContext = _this$context$initDat.email,
        dedicateSubscription = _this$context$initDat.dedicateSubscription;
      if (emailFromContext !== undefined) {
        this.props.change("email", emailFromContext);
      }
      if (dedicateSubscription && dedicateSubscription.subscribed !== undefined) {
        this.props.change("dedicate", dedicateSubscription.subscribed);
      }
    }
  }, {
    key: "clickSubmit",
    value: function clickSubmit(values) {
      var onSubmit = this.props.onSubmit;
      return onSubmit(values, this.context);
    }
  }, {
    key: "selectAll",
    value: function selectAll() {
      var _this2 = this;
      var newslettersSubscription = this.context.initData.newslettersSubscription;
      newslettersSubscription.map(function (value) {
        return _this2.props.change("universeIds.".concat(value.universe.id.toString()), true);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$context$initDat2 = this.context.initData,
        newslettersSubscription = _this$context$initDat2.newslettersSubscription,
        emag = _this$context$initDat2.emag,
        globalLinksHome = _this$context$initDat2.globalLinksHome,
        emailFromContext = _this$context$initDat2.email,
        privacyPageUrl = _this$context$initDat2.privacyPageUrl,
        siteName = _this$context$initDat2.siteName,
        dedicateSubscription = _this$context$initDat2.dedicateSubscription,
        emagSubscription = _this$context$initDat2.emagSubscription;
      var portal = this.context.config.portal;
      var _this$props = this.props,
        intl = _this$props.intl,
        submitting = _this$props.submitting,
        handleSubmit = _this$props.handleSubmit,
        error = _this$props.error,
        postReturnSuccess = _this$props.postReturnSuccess,
        dedicateCheckbox = _this$props.dedicateCheckbox,
        emagCheckbox = _this$props.emagCheckbox;
      var renderPostSubscribeOkOrForm = function renderPostSubscribeOkOrForm() {
        if (postReturnSuccess) {
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_subscribe.TitleH2, {
            className: "success inline-center",
            "data-cy": "success"
          }, /*#__PURE__*/_react["default"].createElement("i", {
            className: "fa fa-check"
          }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: "foj_subscribe_mail_confirm_text"
          })), /*#__PURE__*/_react["default"].createElement("div", {
            className: "success-actions"
          }, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
            href: globalLinksHome,
            dataAttrs: [{
              name: "cy",
              value: "back"
            }]
          }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: "foj_subscribe_mail_confirm_backtohome"
          }))));
        }
        return /*#__PURE__*/_react["default"].createElement(_form.StyledForm, {
          onSubmit: handleSubmit(_this3.clickSubmit)
        }, error && /*#__PURE__*/_react["default"].createElement("strong", {
          className: "error-message"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "global_error_technical"
        })), /*#__PURE__*/_react["default"].createElement(_subscribe.TitleH1, {
          className: "inline-center"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "foj_subscribe_mail_title"
        })), !emailFromContext && /*#__PURE__*/_react["default"].createElement(_form.EmailWrapper, null, /*#__PURE__*/_react["default"].createElement(_fieldWithError["default"], {
          type: "email",
          name: "email",
          "data-cy": "email",
          placeholder: intl.formatMessage({
            id: "foj_subscribe_mail_form_emailplaceholder"
          }),
          validate: [_fieldValidators.email, _fieldValidators.maxLength255]
        })), /*#__PURE__*/_react["default"].createElement(_subscribe.TitleH2, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "foj_subscribe_newsletter_product_title"
        })), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "foj_subscribe_mail_form_details"
        })), /*#__PURE__*/_react["default"].createElement("p", {
          className: "cards-message"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "foj_subscribe_mail_newsletter_form_details"
        })), /*#__PURE__*/_react["default"].createElement(_form.CheckAllWrapper, null, /*#__PURE__*/_react["default"].createElement("a", {
          id: "checkAll",
          onClick: function onClick() {
            return _this3.selectAll();
          }
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "foj_subscribe_mail_newsletter_form_selectall"
        }))), newslettersSubscription && /*#__PURE__*/_react["default"].createElement(_form.Cards, null, newslettersSubscription.map(function (value) {
          return /*#__PURE__*/_react["default"].createElement(_clickableCard["default"], {
            key: value.imageUrl,
            checkboxName: "universeIds.".concat(value.universe.id.toString()),
            handleChange: _this3.props.change,
            selected: _this3.props.universeIdsCheckbox !== undefined && _this3.props.universeIdsCheckbox[value.universe.id.toString()],
            disabled: value.subscribed
          }, /*#__PURE__*/_react["default"].createElement(_picture["default"], {
            src: value.imageUrl,
            alt: value.universe.label,
            lazy: true,
            sources: [value.imageUrl]
          }), /*#__PURE__*/_react["default"].createElement("label", {
            className: "inline-center"
          }, value.universe.label));
        })), emag && portal && portal.site && portal.site.toLowerCase() !== "ag" && portal.site.toLowerCase() !== "ar" && portal.site.toLowerCase() !== "ne" && /*#__PURE__*/_react["default"].createElement(_form.EmagWrapper, null, /*#__PURE__*/_react["default"].createElement(_subscribe.TitleH2, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "foj_category_newsletter"
        }), "\xA0", /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "foj_category_emag"
        })), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "foj_subscribe_mail_emag_form_details"
        })), /*#__PURE__*/_react["default"].createElement(_clickableCard["default"], {
          checkboxName: "emag",
          handleChange: _this3.props.change,
          selected: emagCheckbox,
          disabled: emagSubscription && emagSubscription.subscribed
        }, /*#__PURE__*/_react["default"].createElement(_picture["default"], {
          src: emag.imageUrl,
          alt: "",
          lazy: true,
          sources: [emag.imageUrl]
        }))), /*#__PURE__*/_react["default"].createElement(_form.CheckboxPartnerWrapper, null, /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
          name: "dedicate",
          "data-cy": "dedicate",
          component: _fieldCheckbox.CheckboxField,
          defaultChecked: dedicateCheckbox,
          isDisabled: dedicateSubscription && dedicateSubscription.subscribed,
          label: intl.formatMessage({
            id: "foj_subscribe_newsletter_partner_checkbox"
          })
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
          id: "foj_subscribe_mail_form_submit"
        })), /*#__PURE__*/_react["default"].createElement("p", {
          className: "newsletter-registration-msg"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "foj_newsletter_registration_Policy_Message",
          values: {
            "0": /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
              component: _form.StyledLink,
              to: privacyPageUrl,
              external: true
            }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
              id: "foj_newsletter_registration_Policy_Message_Privacy"
            }), " "),
            "1": siteName
          }
        })));
      };
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, renderPostSubscribeOkOrForm());
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(SubscribeForm);