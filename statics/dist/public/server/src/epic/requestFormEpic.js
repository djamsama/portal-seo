"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestFormEpic = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _operators = require("rxjs/operators");
var _rxjs = require("rxjs");
var _reduxObservable = require("redux-observable");
var _find = _interopRequireDefault(require("lodash/find"));
var _reduxForm = require("redux-form");
var _requestFormActions = require("../pages/request/actions/requestFormActions");
var _requestFormService = _interopRequireDefault(require("../services/impl/requestFormService"));
var _requestFormReducer = require("../pages/request/reducers/requestFormReducer");
var _index = require("../pages/request/containers/index");
var _i18nVeActions = require("../actions/i18nVeActions");
var _constants = require("../pages/request/constants");
var _urlEncodedContentHelper = _interopRequireDefault(require("../helpers/urlEncodedContentHelper"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// eslint-disable-next-line no-unused-vars
var requestFormEpic = exports.requestFormEpic = function requestFormEpic(action$, state$) {
  return action$.pipe((0, _reduxObservable.ofType)(_requestFormActions.SUBMIT_REQUEST_FORM_REQUEST, state$), (0, _operators.mergeMap)(function (action) {
    // On  get le state dans le stream de l'action sinon on fait du memoize connard!!!
    var stepFields = state$.value.RequestForm.fields;
    var csrf = state$.value.RequestForm.csrf;
    var _action$payload = action.payload,
      values = _action$payload.values,
      stepName = _action$payload.stepName,
      msgs = _action$payload.msgs;
    var stepUrl = state$.value.RequestForm.stepSubmitUrl;
    var requestForm = new _requestFormService["default"](csrf);
    var token = (0, _find["default"])(stepFields, function (field) {
      return field.name === "token";
    });
    if (typeof token === "undefined") {
      return (0, _requestFormActions.submitRequestGlobalErrors)(new Error("Le token est obligatoire"), msgs);
    }
    var jsonValues = {};
    /** Fix moche sur le visitorType qui est parfois non défini... */
    if (stepName === _constants.AJAX_REQUEST_VISITOR_REGISTER_FORMATED && typeof values.visitorType === "undefined") {
      jsonValues = _objectSpread(_objectSpread({}, values), {}, {
        token: token.value,
        visitorType: "PROFESSIONAL"
      });
    } else {
      var selectedCompanyIds = values.requestCompanyRecoChoices ? values.requestCompanyRecoChoices.map(function (str) {
        return parseInt(str, 10);
      }) : [];
      jsonValues = _objectSpread(_objectSpread({}, values), {}, {
        token: token.value,
        selectedCompanyIds: selectedCompanyIds.join()
      });
    }
    var formDataUrlParams = _urlEncodedContentHelper["default"].jsonToUrlEncoded(jsonValues);
    return (0, _rxjs.from)(requestForm.setStep(stepUrl, formDataUrlParams)).pipe((0, _operators.mergeMap)(function (_ref) {
      var data = _ref.data;
      if (data.errors.length > 0) {
        return (0, _rxjs.of)((0, _requestFormActions.submitRequestFormErrors)(stepName, data.errors, msgs));
      }
      if (data.content && data.content.state && data.content.state.stepId && _constants.LAST_STEPS_ID[data.content.state.stepId]) {
        if (data.content.state && data.content.state.messages) {
          return (0, _rxjs.concat)((0, _rxjs.of)((0, _i18nVeActions.translationsLoaded)(data.content.state.messages)), (0, _rxjs.of)((0, _requestFormActions.submitRequestFormLastStepSuccess)(data.content)));
        }
        return (0, _rxjs.of)((0, _requestFormActions.submitRequestFormLastStepSuccess)(data.content));
      }
      if (data.content.state && data.content.state.messages) {
        return (0, _rxjs.concat)((0, _rxjs.of)((0, _i18nVeActions.translationsLoaded)(data.content.state.messages)), (0, _rxjs.of)((0, _requestFormActions.submitRequestFormSuccess)(data.content)));
      }
      return (0, _rxjs.of)((0, _requestFormActions.submitRequestFormSuccess)(data.content));
    }), (0, _operators.catchError)(function (err) {
      if (err instanceof _reduxForm.SubmissionError) {
        return (0, _rxjs.concat)((0, _rxjs.of)((0, _reduxForm.stopSubmit)(_index.FORM_NAME, err.errors)), (0, _rxjs.of)((0, _requestFormActions.submitErrorLog)(_index.FORM_NAME, err, _reduxForm.stopSubmit)));
      }
      return (0, _rxjs.of)((0, _requestFormActions.submitRequestGlobalErrors)(err, msgs));
    }));
  }), (0, _operators.catchError)(function (err) {
    if (err instanceof _reduxForm.SubmissionError) {
      return (0, _rxjs.concat)((0, _rxjs.of)((0, _reduxForm.stopSubmit)(_index.FORM_NAME, err.errors)), (0, _rxjs.of)((0, _requestFormActions.submitErrorLog)(_index.FORM_NAME, err, _reduxForm.stopSubmit)));
    }
    return (0, _rxjs.of)((0, _requestFormActions.submitRequestGlobalErrors)(err, null));
  }));
};