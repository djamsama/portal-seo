"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _reduxForm = require("redux-form");
var _semanticUiReact = require("semantic-ui-react");
var _veDesignSystem = require("ve-design-system");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../../../components/formattedHTMLMessage"));
var _fieldSelect = require("../../../../../../../components/fieldSelect");
var _fieldCheckbox = require("../../../../../../../components/fieldCheckbox");
var _fieldWithLabel = _interopRequireDefault(require("../../../../../../../components/fieldWithLabel"));
var _fieldWithLabel2 = require("../../../../../../../components/fieldWithLabel/styles/fieldWithLabel");
var _FieldModernPhone = _interopRequireDefault(require("../../../../../../../components/FieldModernPhone"));
var _confirmation = _interopRequireDefault(require("../../confirmation"));
var _skills = _interopRequireDefault(require("../../../skills"));
var _exhibitFormOptimized = require("./styles/exhibitFormOptimized");
var _commonExhibit = require("../../../../../styles/commonExhibit");
// $FlowFixMe
// $FlowFixMe
// $FlowFixMe
var ExhibitFormOptimized = function ExhibitFormOptimized(_ref) {
  var intl = _ref.intl,
    handleSubmit = _ref.handleSubmit,
    submitting = _ref.submitting,
    postReturnSuccess = _ref.postReturnSuccess,
    error = _ref.error,
    exhibitFormSubmissionError = _ref.exhibitFormSubmissionError,
    exhibitTextareaMaxLength = _ref.exhibitTextareaMaxLength,
    onChangePrefixCode = _ref.onChangePrefixCode,
    clickSubmit = _ref.clickSubmit,
    isFormError = _ref.isFormError,
    context = _ref.context,
    _ref$validators = _ref.validators,
    required = _ref$validators.required,
    email = _ref$validators.email,
    maxLength255 = _ref$validators.maxLength255,
    requiredPhone = _ref$validators.requiredPhone;
  var _context$initData = context.initData,
    displayChinaSubtitle = _context$initData.displayChinaSubtitle,
    completeInEnglish = _context$initData.completeInEnglish,
    aboutUs = _context$initData.aboutUs,
    siteName = _context$initData.siteName,
    exhibitCommand = _context$initData.exhibitCommand,
    isOptimizationToFAFormEnabled = _context$initData.isOptimizationToFAFormEnabled,
    countryCode = _context$initData.countryCode;
  var sitePath = context.config.portal.site.toLowerCase();
  return /*#__PURE__*/_react["default"].createElement(_exhibitFormOptimized.NewExhibitFormSection, null, /*#__PURE__*/_react["default"].createElement(_exhibitFormOptimized.NewExhibitFormWrapper, null, /*#__PURE__*/_react["default"].createElement(_exhibitFormOptimized.NewStyledForm, {
    id: "exhibitForm",
    onSubmit: handleSubmit(clickSubmit)
  }, error || exhibitFormSubmissionError && /*#__PURE__*/_react["default"].createElement("strong", {
    style: {
      color: "red"
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "global_error_technical"
  })), /*#__PURE__*/_react["default"].createElement(_exhibitFormOptimized.FormHead, null, /*#__PURE__*/_react["default"].createElement(_exhibitFormOptimized.Title, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "fo_fa_block_form_title",
    values: {
      "0": context.config.portal.siteLabel
    }
  })), /*#__PURE__*/_react["default"].createElement(_exhibitFormOptimized.SubTitle, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "fo_fa_block_form_subtitle"
  }), displayChinaSubtitle && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "fo_fa_block_form_china_subtitle2",
    as: "p"
  })), /*#__PURE__*/_react["default"].createElement(_exhibitFormOptimized.Intro, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "fo_fa_block_form_subtitle2"
  }), completeInEnglish && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "fo_fa_block_form_complete",
    as: "p"
  }))), /*#__PURE__*/_react["default"].createElement("fieldset", null, /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
    name: "lastName",
    "data-cy": "lastName",
    component: "input",
    withFieldGroup: true,
    className: "type-text",
    label: intl.formatMessage({
      id: "fo_fa_block_form_label_lastName"
    }),
    placeholder: intl.formatMessage({
      id: "fo_fa_block_form_placeholder_lastName"
    }),
    mandatory: true,
    validate: [required]
  }), /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
    type: "email",
    component: "input",
    name: "email",
    withFieldGroup: true,
    label: intl.formatMessage({
      id: "fo_fa_block_form_label_email"
    }),
    placeholder: intl.formatMessage({
      id: "fo_fa_block_form_placeholder_email"
    }),
    mandatory: true,
    validate: [required, email, maxLength255]
  }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
    name: "phonePrefix",
    component: "input",
    type: "hidden"
  }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
    name: "phoneNumber",
    component: function component(_ref2) {
      var input = _ref2.input,
        meta = _ref2.meta;
      return /*#__PURE__*/_react["default"].createElement(_FieldModernPhone["default"], {
        input: input,
        name: "phoneNumber",
        meta: meta,
        countryCode: countryCode,
        label: intl.formatMessage({
          id: "fo_fa_block_form_label_phone"
        }),
        mandatory: true,
        tracking: false,
        placeholder: intl.formatMessage({
          id: "fo_fa_block_form_placeholder_phone"
        }),
        onChangePrefixCode: onChangePrefixCode
      });
    },
    validate: [requiredPhone]
  }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
    name: "Country",
    component: "input",
    type: "hidden"
  }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
    name: "Language",
    component: "input",
    type: "hidden"
  }), exhibitCommand && !exhibitCommand.displayLocalCompanyName && /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
    name: "webSite",
    component: "input",
    withFieldGroup: true,
    className: "type-text",
    label: intl.formatMessage({
      id: "fo_fa_block_form_label_company_website"
    }),
    placeholder: intl.formatMessage({
      id: "fo_fa_block_form_placeholder_company_website"
    }),
    mandatory: true,
    validate: [required],
    onClick: function onClick() {
      // NOTE: La gestion de isFormError doit être faite dans le parent si on veut conserver ce comportement
    }
  }), /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
    isHtmlLabel: true,
    withFieldGroup: true,
    name: "message",
    component: "textarea",
    placeholder: intl.formatMessage({
      id: "fo_fa_block_form_placeholder_message"
    }),
    type: "textarea",
    className: "type-textarea",
    validate: [exhibitTextareaMaxLength],
    label: intl.formatMessage({
      id: "fo_fa_block_form_label_message"
    }),
    rows: 6
  }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
    name: "aboNewletter",
    className: "type-checkbox",
    "data-cy": "aboNewletter",
    component: _fieldCheckbox.CheckboxField,
    label: intl.formatMessage({
      id: "fo_fa_block_form_checkbox_newletter"
    }, {
      "0": siteName
    })
  })), isFormError && /*#__PURE__*/_react["default"].createElement(_commonExhibit.GlobalErrorBlock, null, /*#__PURE__*/_react["default"].createElement(_commonExhibit.GlobalErrorWrapper, null, intl.formatMessage({
    id: "fo_fa_block_form_error_submit_message"
  }))), (error || exhibitFormSubmissionError) && /*#__PURE__*/_react["default"].createElement("strong", {
    style: {
      color: "red"
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "global_error_technical"
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
    id: "fo_fa_block_form_button_submint"
  }))), /*#__PURE__*/_react["default"].createElement(_skills["default"], {
    isOptimizationToFAFormEnabled: isOptimizationToFAFormEnabled
  })), /*#__PURE__*/_react["default"].createElement(_confirmation["default"], {
    open: postReturnSuccess
  }), /*#__PURE__*/_react["default"].createElement(_exhibitFormOptimized.NewExhibitFormBackgroundWrapper, null, /*#__PURE__*/_react["default"].createElement(_exhibitFormOptimized.NewExhibitFormBackground, {
    sources: [{
      srcset: "".concat("https://img.virtual-expo.com", "/media/ps/images/").concat(sitePath, "/exhibit/fa-form-bkg.webp")
    }, {
      srcset: "".concat("https://img.virtual-expo.com", "/media/ps/images/").concat(sitePath, "/exhibit/fa-form-bkg.jpg")
    }],
    src: "".concat("https://img.virtual-expo.com", "/media/ps/images/").concat(sitePath, "/exhibit/fa-form-bkg.jpg"),
    lazy: true
  })));
};
var _default = exports["default"] = ExhibitFormOptimized;