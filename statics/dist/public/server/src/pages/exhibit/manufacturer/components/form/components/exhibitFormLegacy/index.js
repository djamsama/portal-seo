"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _reduxForm = require("redux-form");
var _semanticUiReact = require("semantic-ui-react");
var _veDesignSystem = require("ve-design-system");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../../../components/formattedHTMLMessage"));
var _fieldSelect = require("../../../../../../../components/fieldSelect");
var _fieldCheckbox = require("../../../../../../../components/fieldCheckbox");
var _fieldWithLabel = _interopRequireDefault(require("../../../../../../../components/fieldWithLabel"));
var _fieldPhone = _interopRequireDefault(require("../../../../../../../components/fieldPhone"));
var _fieldWithLabel2 = require("../../../../../../../components/fieldWithLabel/styles/fieldWithLabel");
var _fieldWithError = require("../../../../../../../components/fieldWithError/styles/fieldWithError");
var _skills = _interopRequireDefault(require("../../../skills"));
var _confirmation = _interopRequireDefault(require("../../confirmation"));
var _exhibitFormLegacy = require("./styles/exhibitFormLegacy");
var _commonExhibit = require("../../../../../styles/commonExhibit");
var _constants = require("../../../../../../../commons/constants");
// $FlowFixMe
// $FlowFixMe
// $FlowFixMe
var ExhibitFormLegacy = function ExhibitFormLegacy(_ref) {
  var intl = _ref.intl,
    handleSubmit = _ref.handleSubmit,
    submitting = _ref.submitting,
    postReturnSuccess = _ref.postReturnSuccess,
    error = _ref.error,
    exhibitFormSubmissionError = _ref.exhibitFormSubmissionError,
    exhibitFormError = _ref.exhibitFormError,
    exhibitTextareaMaxLength = _ref.exhibitTextareaMaxLength,
    onChangePrefixCode = _ref.onChangePrefixCode,
    onChangeCivility = _ref.onChangeCivility,
    clickSubmit = _ref.clickSubmit,
    isFormError = _ref.isFormError,
    civilityState = _ref.civilityState,
    context = _ref.context,
    _ref$validators = _ref.validators,
    required = _ref$validators.required,
    email = _ref$validators.email,
    maxLength255 = _ref$validators.maxLength255;
  var _context$initData = context.initData,
    displayChinaSubtitle = _context$initData.displayChinaSubtitle,
    completeInEnglish = _context$initData.completeInEnglish,
    civilities = _context$initData.civilities,
    universSectors = _context$initData.universSectors,
    companyTypesLabels = _context$initData.companyTypesLabels,
    aboutUs = _context$initData.aboutUs,
    siteName = _context$initData.siteName,
    exhibitCommand = _context$initData.exhibitCommand,
    countryList = _context$initData.countryList,
    isOptimizationToFAFormEnabled = _context$initData.isOptimizationToFAFormEnabled;
  var sitePath = context.config.portal.site.toLowerCase();
  var phoneCodes = [];
  if (countryList) {
    countryList.sort(function (a, b) {
      return a.label.trim().localeCompare(b.label.trim());
    });
    countryList.map(function (_ref2) {
      var indicatifTel = _ref2.indicatifTel,
        label = _ref2.label;
      if (indicatifTel !== "") {
        phoneCodes.push({
          label: "+".concat(indicatifTel, " ").concat(label),
          value: "+".concat(indicatifTel)
        });
      }
      return true;
    });
  }
  return /*#__PURE__*/_react["default"].createElement(_exhibitFormLegacy.ExhibitFormSection, null, /*#__PURE__*/_react["default"].createElement(_exhibitFormLegacy.ExhibitFormWrapper, null, /*#__PURE__*/_react["default"].createElement(_exhibitFormLegacy.StyledForm, {
    id: "exhibitForm",
    onSubmit: handleSubmit(clickSubmit)
  }, error || exhibitFormSubmissionError && /*#__PURE__*/_react["default"].createElement("strong", {
    style: {
      color: "red"
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "global_error_technical"
  })), /*#__PURE__*/_react["default"].createElement(_exhibitFormLegacy.Title, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "fo_fa_block_form_title",
    values: {
      "0": context.config.portal.siteLabel
    }
  })), /*#__PURE__*/_react["default"].createElement(_exhibitFormLegacy.SubTitle, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "fo_fa_block_form_subtitle"
  }), displayChinaSubtitle && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "fo_fa_block_form_china_subtitle2",
    as: "p"
  })), /*#__PURE__*/_react["default"].createElement(_exhibitFormLegacy.Intro, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "fo_fa_block_form_subtitle2"
  }), completeInEnglish && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "fo_fa_block_form_complete",
    as: "p"
  })), /*#__PURE__*/_react["default"].createElement("fieldset", null, /*#__PURE__*/_react["default"].createElement("legend", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "fo_fa_block_form_label_contatc_info"
  })), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, {
    className: "title"
  }, /*#__PURE__*/_react["default"].createElement(_fieldWithLabel2.FieldLabel, {
    mandatory: !isOptimizationToFAFormEnabled
  }, intl.formatMessage({
    id: "fo_fa_block_form_label_civility"
  })), /*#__PURE__*/_react["default"].createElement("fieldset", {
    className: "civility"
  }, /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
    component: _veDesignSystem.Radio,
    type: "radio",
    id: "civilityId1",
    label: civilities[1],
    name: "civilityId",
    onClick: function onClick() {
      return onChangeCivility(1);
    },
    checked: civilityState === 1,
    value: "1",
    mandatory: true,
    validate: [required]
  }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
    component: _veDesignSystem.Radio,
    type: "radio",
    id: "civilityId2",
    label: civilities[2],
    name: "civilityId",
    onClick: function onClick() {
      return onChangeCivility(2);
    },
    checked: civilityState === 2,
    value: "2",
    mandatory: true,
    validate: [required]
  })), exhibitFormError && exhibitFormError[0] && exhibitFormError[0].submitionFailed && exhibitFormError[0].submitionFailed.civilityId && /*#__PURE__*/_react["default"].createElement(_fieldWithError.ErrorStyled, null, intl.formatMessage({
    id: exhibitFormError[0].submitionFailed.civilityId.id
  }))), /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
    name: "firstName",
    "data-cy": "firstName",
    component: "input",
    withFieldGroup: true,
    placeholder: intl.formatMessage({
      id: "fo_fa_block_form_placeholder_firstName"
    }),
    className: "type-text",
    label: intl.formatMessage({
      id: "fo_fa_block_form_label_firstName"
    }),
    validate: [required],
    mandatory: true,
    onClick: function onClick() {
      // NOTE: La gestion de isFormError doit être faite dans le parent si on veut conserver ce comportement
    }
  }), /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
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
  }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, {
    className: "email"
  }, /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
    type: "email",
    name: "email",
    label: intl.formatMessage({
      id: "fo_fa_block_form_label_email"
    }),
    placeholder: intl.formatMessage({
      id: "fo_fa_block_form_placeholder_email"
    }),
    mandatory: true,
    validate: [required, email, maxLength255]
  })), /*#__PURE__*/_react["default"].createElement(_fieldPhone["default"], (0, _extends2["default"])({
    mandatory: true,
    label: intl.formatMessage({
      id: "fo_fa_block_form_label_phone"
    }),
    numberFieldName: "phoneNumber",
    prefixFieldName: "phonePrefix",
    className: "phone"
  }, context.config.portal.language && context.config.portal.language.toLowerCase() === _constants.LOCALES.IT ? {
    classNamePhoneCode: "bottom20"
  } : {}, {
    tracking: false,
    phoneCodes: phoneCodes,
    placeHolder: intl.formatMessage({
      id: "fo_fa_block_form_placeholder_phone"
    }),
    placeHolderCode: intl.formatMessage({
      id: "fo_fa_block_form_placeholder_phone_code"
    }),
    onChangePrefixCode: onChangePrefixCode
  })), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
    name: "Country",
    component: "input",
    type: "hidden"
  }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
    name: "Language",
    component: "input",
    type: "hidden"
  })), /*#__PURE__*/_react["default"].createElement("fieldset", {
    className: "company-fieldset"
  }, /*#__PURE__*/_react["default"].createElement("legend", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "fo_fa_block_form_label_company_info"
  })), /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
    name: exhibitCommand && exhibitCommand.displayLocalCompanyName ? "localCompanyName" : "company",
    component: "input",
    withFieldGroup: true,
    className: "type-text",
    label: intl.formatMessage({
      id: "fo_fa_block_form_label_company_name"
    }),
    placeholder: intl.formatMessage({
      id: "fo_fa_block_form_placeholder_company_name"
    }),
    mandatory: true,
    validate: [required]
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
  }), exhibitCommand && exhibitCommand.displayLocalCompanyName && /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
    name: "company",
    component: "input",
    withFieldGroup: true,
    className: "type-text",
    label: intl.formatMessage({
      id: "fo_fa_block_form_label_english_company_name"
    }),
    mandatory: true,
    validate: [required]
  }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, {
    validate: [required],
    className: "sector"
  }, /*#__PURE__*/_react["default"].createElement(_fieldWithLabel2.FieldLabel, {
    mandatory: "true"
  }, intl.formatMessage({
    id: "fo_fa_block_form_label_univers"
  })), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
    name: "categoryId",
    "data-cy": "categoryId",
    component: _fieldSelect.SelectFieldNoFullScreen,
    validate: [required],
    mandatory: true,
    placeholder: intl.formatMessage({
      id: "fo_fa_block_form_placeholder"
    }),
    options: Object.keys(universSectors).map(function (item) {
      return {
        key: item,
        text: universSectors[item],
        value: item
      };
    })
  })), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, {
    validate: [required],
    className: "company-type"
  }, /*#__PURE__*/_react["default"].createElement(_fieldWithLabel2.FieldLabel, {
    mandatory: "true"
  }, intl.formatMessage({
    id: "fo_fa_block_form_label_company_type"
  })), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
    name: "businessCompanyTypeId",
    "data-cy": "businessCompanyTypeId",
    component: _fieldSelect.SelectFieldNoFullScreen,
    validate: [required],
    mandatory: true,
    placeholder: intl.formatMessage({
      id: "fo_fa_block_form_placeholder"
    }),
    options: Object.keys(companyTypesLabels).map(function (item) {
      return {
        key: item,
        text: companyTypesLabels[item],
        value: item
      };
    }),
    onClick: function onClick() {
      // NOTE: La gestion de isFormError doit être faite dans le parent si on veut conserver ce comportement
    }
  })), exhibitCommand && exhibitCommand.displayLocalCompanyName && /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
    name: "webSite",
    component: "input",
    withFieldGroup: true,
    className: "type-text",
    label: intl.formatMessage({
      id: "fo_fa_block_form_label_company_website"
    }),
    mandatory: true,
    validate: [required],
    onClick: function onClick() {
      // NOTE: La gestion de isFormError doit être faite dans le parent si on veut conserver ce comportement
    }
  })), /*#__PURE__*/_react["default"].createElement("fieldset", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, {
    className: "message"
  }, /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
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
  }))), /*#__PURE__*/_react["default"].createElement("fieldset", {
    className: "newsletter"
  }, /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
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
    isOptimizationToFAFormEnabled: !isOptimizationToFAFormEnabled
  })), /*#__PURE__*/_react["default"].createElement(_confirmation["default"], {
    open: postReturnSuccess
  }), /*#__PURE__*/_react["default"].createElement(_exhibitFormLegacy.ExhibitFormBackgroundWrapper, null, /*#__PURE__*/_react["default"].createElement(_exhibitFormLegacy.ExhibitFormBackground, {
    sources: [{
      srcset: "".concat("https://img.virtual-expo.com", "/media/ps/images/").concat(sitePath, "/exhibit/fa-form-bkg.webp")
    }, {
      srcset: "".concat("https://img.virtual-expo.com", "/media/ps/images/").concat(sitePath, "/exhibit/fa-form-bkg.jpg")
    }],
    src: "".concat("https://img.virtual-expo.com", "/media/ps/images/").concat(sitePath, "/exhibit/fa-form-bkg.jpg"),
    lazy: true
  })));
};
var _default = exports["default"] = ExhibitFormLegacy;