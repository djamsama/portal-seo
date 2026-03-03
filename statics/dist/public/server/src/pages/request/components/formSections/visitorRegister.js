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
var _reduxForm = require("redux-form");
var _semanticUiReact = require("semantic-ui-react");
var _veDesignSystem = require("ve-design-system");
var _field = require("../../helpers/field");
var _reactGeosuggestHelper = require("../../../../helpers/reactGeosuggestHelper");
var _fieldWithLabel = _interopRequireDefault(require("../../../../components/fieldWithLabel"));
var _fieldSelect = require("../../../../components/fieldSelect");
var _fieldWithLabel2 = require("../../../../components/fieldWithLabel/styles/fieldWithLabel");
var _fieldCity = _interopRequireDefault(require("../../../../components/fieldCity"));
var _fieldReCaptcha = _interopRequireDefault(require("../../../../components/fieldReCaptcha"));
var _fieldPhone = _interopRequireDefault(require("../../../../components/fieldPhone"));
var _trackingGa = require("../../../../components/trackings/trackingGa");
var _context = require("../../../../context");
var _constants = require("../../constants");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
/* eslint-disable react/no-danger */ // $FlowFixMe
// import NotificationsHelper from "~/helpers/notificationsHelper";
var VISITOR_TYPE_PROFESSIONAL = "PROFESSIONAL";
var VISITOR_TYPE_PRIVATE = "PRIVATE_PERSON";
var autoFocusSetted = false;
var getAutofocus = function getAutofocus() {
  if (!autoFocusSetted) {
    autoFocusSetted = true;
    return true;
  }
  return false;
};
var FormSectionVisitorRegister = function FormSectionVisitorRegister(props) {
  var context = (0, _react.useContext)(_context.AppContext);
  var _useState = (0, _react.useState)(VISITOR_TYPE_PROFESSIONAL),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    visitorTypeValue = _useState2[0],
    setVisitorType = _useState2[1];
  var _recaptchaFieldRef = (0, _react.useRef)();
  var fields = props.fields,
    intl = props.intl,
    stepInfoLabel = props.stepInfoLabel,
    isFromChina = props.isFromChina,
    setData = props.setData,
    requestTrackEvent = props.requestTrackEvent,
    resetField = props.resetField,
    stepIdFormatted = props.stepIdFormatted,
    pristine = props.pristine,
    dirty = props.dirty,
    submittingStep = props.submittingStep,
    submitFailed = props.submitFailed;
  var fieldRecaptcha = (0, _field.getFieldsByName)(fields, "recaptcha");
  var fieldFirstName = (0, _field.getFieldsByName)(fields, "firstName");
  var fieldLastName = (0, _field.getFieldsByName)(fields, "lastName");
  var fieldCity = (0, _field.getFieldsByName)(fields, "searchCity");
  var fieldPhone = (0, _field.getFieldsByName)(fields, "phoneNumber");
  var fieldVisitorType = (0, _field.getFieldsByName)(fields, "visitorType");
  var fieldCompany = (0, _field.getFieldsByName)(fields, "company");
  var fieldCompanyWebSite = (0, _field.getFieldsByName)(fields, "companyWebSite");
  var fieldBusinessCompanyTypeId = (0, _field.getFieldsByName)(fields, "businessCompanyTypeId");
  var fieldBusinessSectorId = (0, _field.getFieldsByName)(fields, "businessSectorId");
  var fieldEmployeePositionId = (0, _field.getFieldsByName)(fields, "employeePositionId");
  var lat = (0, _field.getFieldsByName)(fields, "latitude");
  var lng = (0, _field.getFieldsByName)(fields, "longitude");
  var fieldPhoneCode = (0, _field.getFieldsByName)(fields, "phoneCode");
  var fieldCountry = (0, _field.getFieldsByName)(fields, "country");

  // Field Country pour le cas Chine
  var fieldCityChina = (0, _field.getFieldsByName)(fields, "city");
  if (false) {
    window.recaptchaOptions = {
      useRecaptchaNet: isFromChina
    };
  }

  /**
   * Quand un utilisateur ne saisie pas une valeur geosuggest de google
   * @param {string} userInput
   */
  var onSuggestNoResults = function onSuggestNoResults(userInput) {
    // reset des champs
    resetField("".concat(stepIdFormatted, ".city"));
    resetField("".concat(stepIdFormatted, ".cityLabel"));
    resetField("".concat(stepIdFormatted, ".country"));
    resetField("".concat(stepIdFormatted, ".latitude"));
    resetField("".concat(stepIdFormatted, ".longitude"));
    resetField("".concat(stepIdFormatted, ".administrativeArea"));
    // On set la valeur saisie
    setData("".concat(stepIdFormatted, ".city"), userInput);
  };
  (0, _react.useEffect)(function () {
    setData("".concat(stepIdFormatted, ".phoneCode"), "+".concat(context.initData.phoneCode));
  }, []);
  var phoneCodes = [];
  (0, _react.useEffect)(function () {
    var countryList = context.initData.countryList;
    if (countryList) {
      countryList.sort(function (a, b) {
        return a.label.trim().localeCompare(b.label.trim());
      });
      countryList.map(function (_ref) {
        var indicatifTel = _ref.indicatifTel,
          label = _ref.label;
        if (indicatifTel !== "") {
          phoneCodes.push({
            label: "+".concat(indicatifTel, " ").concat(label),
            value: "+".concat(indicatifTel)
          });
        }
        return true;
      });
    }
  });
  var onChangePrefixCode = function onChangePrefixCode(value) {
    setData("".concat(stepIdFormatted, ".phoneCode"), value);
  };

  /**
   * Quand on clic sur une suggestion
   * @param  {Object} suggest The suggest
   */
  var onSuggestSelect = function onSuggestSelect(suggest) {
    if (suggest !== undefined && !isFromChina) {
      var data = _reactGeosuggestHelper.ReactGeosuggestHelper.extractPlacesData(suggest.gmaps);
      setData("".concat(stepIdFormatted, ".cityLabel"), suggest.description);
      setData("".concat(stepIdFormatted, ".city"), data.city);
      setData("".concat(stepIdFormatted, ".country"), data.shortCountryName);
      setData("".concat(stepIdFormatted, ".latitude"), suggest.location.lat);
      setData("".concat(stepIdFormatted, ".longitude"), suggest.location.lng);
      setData("".concat(stepIdFormatted, ".administrativeArea"), data.administrativeArea);
    }
  };
  var onChangeVisitorType = function onChangeVisitorType(visitorType) {
    setVisitorType(visitorType);
    setData("".concat(stepIdFormatted, ".visitorType"), visitorType);
    if (visitorType === VISITOR_TYPE_PRIVATE) {
      resetField("".concat(stepIdFormatted, ".company"));
      resetField("".concat(stepIdFormatted, ".companyWebSite"));
      resetField("".concat(stepIdFormatted, ".businessCompanyTypeId"));
      resetField("".concat(stepIdFormatted, ".businessSectorId"));
    }
  };
  var onChangeSwitchVisitorType = function onChangeSwitchVisitorType(value) {
    if (value === false) {
      // C'est un pro
      setVisitorType(VISITOR_TYPE_PROFESSIONAL);
      setData("".concat(stepIdFormatted, ".visitorType"), VISITOR_TYPE_PROFESSIONAL);
    } else {
      // C'est un particulier.
      setVisitorType(VISITOR_TYPE_PRIVATE);
      setData("".concat(stepIdFormatted, ".visitorType"), VISITOR_TYPE_PRIVATE);
      resetField("".concat(stepIdFormatted, ".company"));
      resetField("".concat(stepIdFormatted, ".companyWebSite"));
      resetField("".concat(stepIdFormatted, ".businessCompanyTypeId"));
      resetField("".concat(stepIdFormatted, ".businessSectorId"));
    }
  };
  var onLoadRecaptcha = function onLoadRecaptcha() {
    if (_recaptchaFieldRef.current) {
      _recaptchaFieldRef.current.reset();
      _recaptchaFieldRef.current.execute();
    }
  };
  var recaptchaOnchangeValue = function recaptchaOnchangeValue(recaptchaToken) {
    if (recaptchaToken === null) {
      onLoadRecaptcha();
    } else {
      setData("".concat(stepIdFormatted, ".recaptcha"), recaptchaToken);
    }
  };

  // Après le montage du component on set la valeur du visitorType à la valeur du visitorType.value
  (0, _react.useEffect)(function () {
    if (fieldVisitorType && props.submitFailed === false && props.submittingStep === false) {
      onChangeVisitorType(fieldVisitorType.value || VISITOR_TYPE_PROFESSIONAL);
    }
    if (props.submitFailed && isFromChina) {
      // Si une erreur coté serveur s'est produite sur le form, on reset le captcha.
      if (_recaptchaFieldRef.current) {
        _recaptchaFieldRef.current.reset();
      }
    }
    if (fieldCity && fieldCity.value != null && !props.submitFailed && !isFromChina) {
      setData("".concat(stepIdFormatted, ".country"), fieldCountry.value);
      setData("".concat(stepIdFormatted, ".latitude"), lat.value);
      setData("".concat(stepIdFormatted, ".longitude"), lng.value);
      setData("".concat(stepIdFormatted, ".searchCity"), fieldCity.value);
      setData("".concat(stepIdFormatted, ".city"), fieldCity.value);
    } else if (isFromChina && fieldCountry && fieldCityChina) {
      setData("".concat(stepIdFormatted, ".city"), fieldCityChina.value);
      setData("".concat(stepIdFormatted, ".country"), fieldCountry.value);
    }
    // Pour initialiser certain à partir d'un tableau de fields
    if (pristine && dirty === false) {
      // Le cas chine
      if (isFromChina && fieldCountry && fieldCityChina) {
        setData("".concat(stepIdFormatted, ".city"), fieldCityChina.value);
        setData("".concat(stepIdFormatted, ".country"), fieldCountry.value);
        if (fieldPhoneCode) {
          setData("".concat(stepIdFormatted, ".phoneCode"), fieldPhoneCode.value);
        }
      } else {
        // On initialise le champ ville
        if (fieldCity) {
          setData("".concat(stepIdFormatted, ".searchCity"), fieldCity.value);
          setData("".concat(stepIdFormatted, ".city"), fieldCity.value);
        }
        // On initialise le champ prefix téléphone
        if (fieldPhoneCode && fieldPhone) {
          if (fieldPhone.value) {
            setData("".concat(stepIdFormatted, ".phoneNumber"), fieldPhone.value);
          }
          setData("".concat(stepIdFormatted, ".phoneCode"), fieldPhoneCode.value);
        }
      }
    }

    // Exec to load recaptcha
    if (fieldRecaptcha && isFromChina === false) {
      onLoadRecaptcha();
    }
  }, [submitFailed]);
  var _geoSuggest = /*#__PURE__*/_react["default"].createRef();
  var labelGa = stepIdFormatted === _constants.AJAX_REQUEST_VISITOR_REGISTER_PARTIAL_FORMATED ? _constants.GA_LABELS[_constants.AJAX_REQUEST_VISITOR_REGISTER_PARTIAL_FORMATED] : _constants.GA_LABELS[_constants.AJAX_REQUEST_VISITOR_REGISTER_FORMATED];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("legend", {
    dangerouslySetInnerHTML: {
      __html: stepInfoLabel
    }
  }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Group, {
    widths: "equal"
  }, fieldFirstName && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, null, /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
    withFieldGroup: true,
    name: fieldFirstName.name,
    component: "input",
    label: fieldFirstName.label,
    mandatoryWithoutValidation: fieldFirstName.mandatory,
    autoFocus: getAutofocus(),
    placeholder: fieldFirstName.placeHolder
  })), fieldLastName && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, null, /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
    withFieldGroup: true,
    name: fieldLastName.name,
    component: "input",
    label: fieldLastName.label,
    isHtmlLabel: true,
    mandatoryWithoutValidation: fieldLastName.mandatory,
    placeholder: fieldLastName.placeHolder,
    autoFocus: getAutofocus()
  }))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Group, {
    widths: "equal"
  }, fieldCity && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, null, /*#__PURE__*/_react["default"].createElement(_fieldCity["default"], {
    label: fieldCity.label,
    name: fieldCity.name,
    onSuggestSelect: onSuggestSelect,
    onSuggestNoResults: onSuggestNoResults,
    ref: function ref(el) {
      return _geoSuggest = el;
    },
    innerRef: _geoSuggest,
    chinaBuyer: isFromChina,
    countryListWithDetails: isFromChina && fieldCountry ? fieldCountry.data : [],
    mandatoryWithoutValidation: fieldCity.mandatory,
    types: ["(cities)"],
    placeHolder: fieldCity.placeHolder,
    autoFocus: getAutofocus(),
    initialValue: fieldCity.value
  }), stepIdFormatted === _constants.AJAX_REQUEST_VISITOR_REGISTER_PARTIAL_FORMATED && !submittingStep && /*#__PURE__*/_react["default"].createElement(_trackingGa.TrackingGaDisplay, {
    requestTrackEvent: requestTrackEvent,
    label: _constants.GA_LABELS[_constants.AJAX_REQUEST_VISITOR_REGISTER_PARTIAL_FORMATED].city
  })), !fieldCity && fieldCountry && fieldCityChina && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, null, /*#__PURE__*/_react["default"].createElement(_fieldCity["default"], {
    label: fieldCityChina.label,
    name: fieldCityChina.name,
    onSuggestSelect: onSuggestSelect,
    ref: function ref(el) {
      return _geoSuggest = el;
    },
    innerRef: _geoSuggest,
    chinaBuyer: isFromChina,
    countryListWithDetails: fieldCountry.data,
    mandatoryWithoutValidation: fieldCityChina.mandatory,
    autoComplete: "new-password",
    placeHolder: fieldCityChina.placeHolder,
    autoFocus: getAutofocus()
  }), stepIdFormatted === _constants.AJAX_REQUEST_VISITOR_REGISTER_PARTIAL_FORMATED && !submittingStep && /*#__PURE__*/_react["default"].createElement(_trackingGa.TrackingGaDisplay, {
    requestTrackEvent: requestTrackEvent,
    label: _constants.GA_LABELS[_constants.AJAX_REQUEST_VISITOR_REGISTER_PARTIAL_FORMATED].city
  })), fieldPhone && /*#__PURE__*/_react["default"].createElement(_fieldPhone["default"], {
    mandatoryWithoutValidation: fieldPhone.mandatory,
    label: fieldPhone.label,
    name: fieldPhone.name,
    className: stepIdFormatted === _constants.AJAX_REQUEST_VISITOR_REGISTER_PARTIAL_FORMATED ? "partialField" : "",
    autoFocus: getAutofocus(),
    numberFieldName: fieldPhone.name,
    prefixFieldName: fieldPhoneCode.name,
    phoneCodes: phoneCodes,
    placeHolder: fieldPhone.placeHolder ? fieldPhone.placeHolder : "",
    placeHolderCode: fieldPhoneCode.placeHolder ? fieldPhoneCode.placeHolder : "",
    tracking: stepIdFormatted === _constants.AJAX_REQUEST_VISITOR_REGISTER_PARTIAL_FORMATED && !submittingStep ? /*#__PURE__*/_react["default"].createElement(_trackingGa.TrackingGaDisplay, {
      requestTrackEvent: requestTrackEvent,
      label: _constants.GA_LABELS[_constants.AJAX_REQUEST_VISITOR_REGISTER_PARTIAL_FORMATED].phone
    }) : false,
    onChangePrefixCode: onChangePrefixCode,
    onFocusShowAll: true
  })), fieldVisitorType && /*#__PURE__*/_react["default"].createElement("div", {
    className: "visitorType"
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Group, null, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Switch, {
    themeColor: context.config.portal.site.toLowerCase(),
    activeThemeColor: context.config.portal.site.toLowerCase()
    // $FlowFixMe
    ,
    labelLeft: fieldVisitorType.data[0].label
    // $FlowFixMe
    ,
    labelRight: fieldVisitorType.data[1].label,
    callBack: onChangeSwitchVisitorType,
    initialValue: fieldVisitorType.value === VISITOR_TYPE_PRIVATE
  }))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Group, {
    widths: "equal"
  }, fieldCompany && visitorTypeValue !== VISITOR_TYPE_PRIVATE && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, {
    disabled: visitorTypeValue === VISITOR_TYPE_PRIVATE
  }, /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
    withFieldGroup: true,
    name: fieldCompany.name,
    component: "input",
    label: fieldCompany.label,
    mandatoryWithoutValidation: fieldCompany.mandatory && visitorTypeValue !== VISITOR_TYPE_PRIVATE,
    autocomplete: "organization",
    placeholder: fieldCompany.placeHolder,
    autoFocus: getAutofocus()
  })), fieldCompanyWebSite && visitorTypeValue !== VISITOR_TYPE_PRIVATE && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, {
    disabled: visitorTypeValue === VISITOR_TYPE_PRIVATE
  }, /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
    withFieldGroup: true,
    name: fieldCompanyWebSite.name,
    clearable: true,
    component: "input",
    label: fieldCompanyWebSite.label,
    isHtmlLabel: true,
    mandatoryWithoutValidation: fieldCompanyWebSite.mandatory && visitorTypeValue !== VISITOR_TYPE_PRIVATE,
    autocomplete: "url",
    placeholder: fieldCompanyWebSite.placeHolder,
    type: "url",
    autoFocus: getAutofocus()
  }))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Group, {
    widths: "equal"
  }, fieldBusinessCompanyTypeId && visitorTypeValue !== VISITOR_TYPE_PRIVATE && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, {
    disabled: visitorTypeValue === VISITOR_TYPE_PRIVATE
  }, /*#__PURE__*/_react["default"].createElement(_fieldWithLabel2.FieldLabel, {
    mandatory: fieldBusinessCompanyTypeId.mandatory
  }, fieldBusinessCompanyTypeId.label), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
    name: "businessCompanyTypeId",
    clearable: true,
    component: _fieldSelect.SelectField,
    validate: [],
    options: fieldBusinessCompanyTypeId.data && fieldBusinessCompanyTypeId.data.map(function (businessCompanyType) {
      return {
        key: businessCompanyType.value,
        text: intl.formatMessage({
          id: businessCompanyType.label
        }),
        value: businessCompanyType.value
      };
    }),
    mobileTitle: fieldBusinessCompanyTypeId.label
  })), fieldBusinessSectorId && visitorTypeValue !== VISITOR_TYPE_PRIVATE && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, {
    disabled: visitorTypeValue === VISITOR_TYPE_PRIVATE
  }, /*#__PURE__*/_react["default"].createElement(_fieldWithLabel2.FieldLabel, {
    mandatory: fieldBusinessSectorId.mandatory
  }, fieldBusinessSectorId.label), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
    name: fieldBusinessSectorId.name,
    clearable: true,
    component: _fieldSelect.SelectField,
    validate: [],
    options: fieldBusinessSectorId.data && fieldBusinessSectorId.data.map(function (businessSector) {
      return {
        key: businessSector.value,
        text: intl.formatMessage({
          id: businessSector.label
        }),
        value: businessSector.value
      };
    }),
    mobileTitle: fieldBusinessSectorId.label
  })), fieldEmployeePositionId && visitorTypeValue !== VISITOR_TYPE_PRIVATE && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, {
    disabled: visitorTypeValue === VISITOR_TYPE_PRIVATE
  }, /*#__PURE__*/_react["default"].createElement(_fieldWithLabel2.FieldLabel, {
    mandatory: fieldEmployeePositionId.mandatory
  }, fieldEmployeePositionId.label), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
    name: fieldEmployeePositionId.name,
    component: _fieldSelect.SelectField,
    validate: [],
    options: fieldEmployeePositionId.data && fieldEmployeePositionId.data.map(function (employeePosition) {
      return {
        key: employeePosition.value,
        text: intl.formatMessage({
          id: employeePosition.label
        }),
        value: employeePosition.value
      };
    }),
    mobileTitle: fieldEmployeePositionId.label
  }))), fieldRecaptcha && /*#__PURE__*/_react["default"].createElement(_fieldReCaptcha["default"], (0, _extends2["default"])({
    ref: _recaptchaFieldRef,
    mandatory: fieldRecaptcha.mandatory,
    name: fieldRecaptcha.name,
    className: "captcha",
    size: isFromChina ? "normal" : "invisible"
  }, isFromChina ? {} : {
    onChange: recaptchaOnchangeValue
  }, isFromChina ? {} : {
    onExpired: onLoadRecaptcha
  }, isFromChina ? {} : {
    onErrored: onLoadRecaptcha
  })), (fieldEmployeePositionId || fieldBusinessSectorId || fieldBusinessCompanyTypeId) && stepIdFormatted === _constants.AJAX_REQUEST_VISITOR_REGISTER_PARTIAL_FORMATED && !submittingStep && /*#__PURE__*/_react["default"].createElement(_trackingGa.TrackingGaDisplay, {
    requestTrackEvent: requestTrackEvent,
    label: _constants.GA_LABELS[_constants.AJAX_REQUEST_VISITOR_REGISTER_PARTIAL_FORMATED].other
  }), stepIdFormatted === _constants.AJAX_REQUEST_VISITOR_REGISTER_FORMATED && !submittingStep && /*#__PURE__*/_react["default"].createElement(_trackingGa.TrackingGaDisplay, {
    requestTrackEvent: requestTrackEvent,
    label: _constants.GA_LABELS[_constants.AJAX_REQUEST_VISITOR_REGISTER_FORMATED].display
  }), /*#__PURE__*/_react["default"].createElement(_trackingGa.TrackingGaExit, {
    category: requestTrackEvent.category,
    action: requestTrackEvent.action,
    label: labelGa.close,
    active: true
  }));
};
var _default = exports["default"] = FormSectionVisitorRegister;