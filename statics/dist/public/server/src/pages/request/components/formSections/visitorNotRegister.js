"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _uuid = require("uuid");
var _reduxForm = require("redux-form");
var _semanticUiReact = require("semantic-ui-react");
var _reactIntl = require("react-intl");
var _veDesignSystem = require("ve-design-system");
var _fieldValidators = require("../../../../components/fieldWithError/validators/fieldValidators");
var _fieldSelect = require("../../../../components/fieldSelect");
var _fieldWithLabel = _interopRequireDefault(require("../../../../components/fieldWithLabel"));
var _fieldWithLabel2 = require("../../../../components/fieldWithLabel/styles/fieldWithLabel");
var _context = require("../../../../context");
var _field = require("../../helpers/field");
var _formWrapper = require("../../styles/formWrapper");
var _trackingGa = require("../../../../components/trackings/trackingGa");
var _constants = require("../../constants");
var _constants2 = require("../../../../commons/constants");
var _trackingGaConstant = require("../../../../commons/tracking/trackingGaConstant");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */ // $FlowFixMe
// minLength50 et requestFormFeatureToggle sont utilisé dans le béta test des demandes : FRONT_MODIF_REQUEST_FORM
var minLength50 = (0, _fieldValidators.minLength)(50, "foj_request_form_quote_project_detail_placeholder_mandatory");
var FormSectionVisitorNotRegister = function FormSectionVisitorNotRegister(props) {
  var submittingStep = props.submittingStep,
    fields = props.fields,
    requestType = props.requestType,
    stepInfoLabel = props.stepInfoLabel,
    requestTrackEvent = props.requestTrackEvent,
    showGaDisplay = props.showGaDisplay,
    setData = props.setData,
    asyncValidate = props.asyncValidate,
    intl = props.intl;
  var fieldEmail = (0, _field.getFieldsByName)(fields, "email");
  var fieldComment = (0, _field.getFieldsByName)(fields, "comment");
  var fieldChoices = (0, _field.getFieldsByName)(fields, "requestTypesChoices");
  var fieldBudgetId = (0, _field.getFieldsByName)(fields, "budgetId");
  var fieldCurrencyId = (0, _field.getFieldsByName)(fields, "currencyId");
  var fieldDelayId = (0, _field.getFieldsByName)(fields, "delayId");
  var fieldQuantity = (0, _field.getFieldsByName)(fields, "quantity");
  var budgetDefaultText = (0, _field.getFieldsByName)(fields, "budgetDefaultText");
  var delayDefaultText = (0, _field.getFieldsByName)(fields, "delayDefaultText");
  var placeHolderValue = fieldComment !== undefined && fieldComment.placeHolder && requestType === _constants2.REQUEST_BUTTON_TYPE.QUOTE ? fieldComment.placeHolder : intl.formatMessage({
    id: "foj_request_form_detail_product_placeholder"
  });

  // On change la value "placeHolder pour les demande de devis"
  if (requestType === _constants2.REQUEST_BUTTON_TYPE.QUOTE) {
    if (!fieldComment.temp && fieldComment !== null && fieldComment !== void 0 && fieldComment.value) {
      fieldComment.temp = JSON.parse(JSON.stringify(fieldComment === null || fieldComment === void 0 ? void 0 : fieldComment.value));
    }
    fieldComment.value = "";
  }
  var context = (0, _react.useContext)(_context.AppContext);
  var isMobile = context && context.config ? context.config.isMobile : false;
  var _useState = (0, _react.useState)(!!(fieldEmail && fieldEmail.name && fieldEmail.value)),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    initialError = _useState2[0],
    setInitialError = _useState2[1];
  var _useState3 = (0, _react.useState)(fieldEmail && fieldEmail.value ? fieldEmail.value : false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 1),
    initialEmailValue = _useState4[0];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    showCheckboxWarning = _useState6[0],
    setShowCheckboxWarning = _useState6[1];
  var _useState7 = (0, _react.useState)(""),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    rateQuoteChoice = _useState8[0],
    setRateQuoteChoice = _useState8[1];
  var _useState9 = (0, _react.useState)(!!(fieldComment && fieldComment.name && fieldComment.value)),
    _useState0 = (0, _slicedToArray2["default"])(_useState9, 2),
    initialCommentError = _useState0[0],
    setInitialCommentError = _useState0[1];
  var _useState1 = (0, _react.useState)(""),
    _useState10 = (0, _slicedToArray2["default"])(_useState1, 2),
    submittingClass = _useState10[0],
    setSubmittingClass = _useState10[1];
  var labelGaId = requestType === _constants.REQUEST_PRICE_LIST || requestType === _constants.REQUEST_CONTACT_DETAIL ? _constants.REQUEST_LOGIN_FORM : _constants.AJAX_REQUEST_FORM_FORMATED;
  var onChangeEmail = function onChangeEmail() {
    if (initialError) {
      setInitialError(false);
    }
  };
  var onChangeComment = function onChangeComment() {
    if (initialCommentError) {
      setInitialCommentError(false);
    }
  };
  (0, _react.useEffect)(function () {
    if (requestType === _constants2.REQUEST_BUTTON_TYPE.QUOTE && fieldComment) {
      var _window;
      var textareaValue = (_window = window) === null || _window === void 0 || (_window = _window.document) === null || _window === void 0 || (_window = _window.getElementsByName("".concat(_constants.STEP_ID_FORMATED.ajaxRequestForm, ".").concat(fieldComment.name))) === null || _window === void 0 || (_window = _window.item(0)) === null || _window === void 0 ? void 0 : _window.value;
      var nameClass = submittingStep && requestType === _constants2.REQUEST_BUTTON_TYPE.QUOTE && (textareaValue && (0, _field.isCommentFieldDefault)(textareaValue, placeHolderValue) || !textareaValue || textareaValue && fieldComment.temp && (0, _field.isCommentFieldDefault)(textareaValue, fieldComment.temp)) ? "submittingStep" : "";
      if (nameClass !== submittingClass) {
        setSubmittingClass(nameClass);
      }
    }
  }, [fieldComment, submittingStep]);
  var onChangeCheckbox = function onChangeCheckbox(e) {
    // $FlowFixMe
    if (e.target.name === "ajaxRequestForm.requestTypesChoices.RATE") {
      setData("ajaxRequestForm.requestTypesChoices.QUOTE", false);
      if (rateQuoteChoice === _constants2.REQUEST_BUTTON_TYPE.QUOTE) {
        setShowCheckboxWarning(true);
      }
      setRateQuoteChoice(_constants2.REQUEST_BUTTON_TYPE.RATE);
    }
    // $FlowFixMe
    if (e.target.name === "ajaxRequestForm.requestTypesChoices.QUOTE") {
      setData("ajaxRequestForm.requestTypesChoices.RATE", false);
      if (rateQuoteChoice === _constants2.REQUEST_BUTTON_TYPE.RATE) {
        setShowCheckboxWarning(true);
      }
      setRateQuoteChoice(_constants2.REQUEST_BUTTON_TYPE.QUOTE);
    }
  };
  var onInitEmail = function onInitEmail() {
    if (fieldEmail && fieldEmail.name && fieldEmail.value) {
      setData("ajaxRequestForm.".concat(fieldEmail.name), fieldEmail.value);
    }
  };
  var propsMeta = function propsMeta() {
    if (initialError && fieldEmail || fieldEmail && initialEmailValue && fieldEmail.value === initialEmailValue) {
      var meta = {};
      if (fieldEmail.errorMessage) {
        meta.error = {
          id: fieldEmail.errorMessage
        };
        meta.touched = true;
      }
      if (fieldEmail.warningMessage && fieldEmail.value === initialEmailValue) {
        meta.warning = {
          id: fieldEmail.warningMessage
        };
        meta.touched = true;
      }
      return initialError ? {
        meta: meta
      } : {};
    }
    return {};
  };
  (0, _react.useEffect)(function () {
    if (fieldCurrencyId && fieldCurrencyId.value) {
      setData("ajaxRequestForm.currencyId", fieldCurrencyId.value);
    }
    if (initialError && fieldEmail && fieldEmail.name && fieldEmail.value) {
      onInitEmail();
    }
    if (initialCommentError && fieldComment && fieldComment.name && fieldComment.value) {
      setData("ajaxRequestForm.".concat(fieldComment.name), fieldComment.value);
    }
  }, []);
  var renderField = function renderField(_ref) {
    var input = _ref.input,
      label = _ref.label,
      type = _ref.type,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      warning = _ref$meta.warning;
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({}, input, {
      placeholder: label,
      type: type,
      "data-cy": input.name
    })), label), error && /*#__PURE__*/_react["default"].createElement("span", null, error) || warning && /*#__PURE__*/_react["default"].createElement("span", null, warning));
  };
  if (fieldEmail) {
    fieldEmail.autoFocus = true;
    if (fieldEmail.value) {
      fieldEmail.autoFocus = false;
    }
  }
  if (fieldComment) {
    fieldComment.autoFocus = false;
    if (fieldEmail && !fieldEmail.autoFocus || !fieldEmail) {
      fieldComment.autoFocus = true;
    }
  }
  // Le champs commentaire n'est plus obligatoire.
  var commentMandatory = false;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("fieldset", null, stepInfoLabel && /*#__PURE__*/_react["default"].createElement("span", {
    className: "not-register-info"
  }, /*#__PURE__*/_react["default"].createElement("legend", {
    dangerouslySetInnerHTML: {
      __html: intl.formatMessage({
        id: stepInfoLabel
      })
    }
  })), fieldEmail && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, {
    className: "partialField forceLeft"
  }, /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], (0, _extends2["default"])({}, propsMeta(), {
    asyncValidate: asyncValidate,
    withFieldGroup: true,
    name: fieldEmail.name,
    component: "input",
    type: "email",
    label: fieldEmail.label,
    mandatory: fieldEmail.mandatory,
    autocomplete: "email",
    value: fieldEmail.value,
    onChange: function onChange() {
      return onChangeEmail();
    },
    placeholder: fieldEmail.placeHolder
  }))), fieldComment && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, {
    className: "textarea"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: submittingClass
  }, /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
    isHtmlLabel: true,
    withFieldGroup: true,
    mandatory: commentMandatory,
    name: fieldComment.name,
    id: fieldComment.name,
    component: "textarea",
    type: "textarea",
    validate: [],
    label: "".concat(fieldComment.label),
    info: true,
    placeholder: requestType === _constants2.REQUEST_BUTTON_TYPE.QUOTE ? placeHolderValue : fieldComment.placeHolder,
    value: requestType === _constants2.REQUEST_BUTTON_TYPE.QUOTE ? undefined : fieldComment.value,
    onChange: onChangeComment,
    rows: requestType === _constants2.REQUEST_BUTTON_TYPE.QUOTE ? 10 : 6,
    autoFocus: fieldComment.autoFocus
  })))), fieldChoices && fieldChoices.data && fieldChoices.data.length > 0 && /*#__PURE__*/_react["default"].createElement(_reduxForm.FormSection, {
    name: "requestTypesChoices"
  }, /*#__PURE__*/_react["default"].createElement("fieldset", {
    className: "checkbox"
  }, /*#__PURE__*/_react["default"].createElement("legend", null, fieldChoices.label), fieldChoices.data && fieldChoices.data.map(function (fieldChoice) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: (0, _uuid.v4)(),
      className: "choices"
    }, /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
      name: "".concat(fieldChoice.value),
      component: renderField,
      type: "checkbox",
      label: fieldChoice.label
      // $FlowFixMe
      ,
      onChange: onChangeCheckbox
    }));
  }), showCheckboxWarning && /*#__PURE__*/_react["default"].createElement(_formWrapper.WarningChoices, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "foj_request_form_choice_exclusive"
  })))), showGaDisplay && /*#__PURE__*/_react["default"].createElement(_trackingGa.TrackingGaDisplay, {
    label: _constants.GA_LABELS[labelGaId].display,
    value: 0,
    requestTrackEvent: requestTrackEvent
  }), /*#__PURE__*/_react["default"].createElement(_trackingGa.TrackingGaExit, {
    category: requestTrackEvent.category,
    action: requestTrackEvent.action,
    label: _constants.GA_LABELS[labelGaId].close,
    active: true
  }));
};
var _default = exports["default"] = (0, _reactIntl.injectIntl)(FormSectionVisitorNotRegister);