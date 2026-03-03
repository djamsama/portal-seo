"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recommendationsFormEpic = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _operators = require("rxjs/operators");
var _rxjs = require("rxjs");
var _reduxObservable = require("redux-observable");
var _find = _interopRequireDefault(require("lodash/find"));
var _reduxForm = require("redux-form");
var _recommendationsFormActions = require("../pages/request/components/recommendationsSection/components/recommendationsForm/actions/recommendationsFormActions");
var _recommendationsFormService = _interopRequireDefault(require("../services/impl/recommendationsFormService"));
var _index = require("../pages/request/containers/index");
var _urlEncodedContentHelper = _interopRequireDefault(require("../helpers/urlEncodedContentHelper"));
var _i18nVeActions = require("../actions/i18nVeActions");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// eslint-disable-next-line no-unused-vars
var recommendationsFormEpic = exports.recommendationsFormEpic = function recommendationsFormEpic(action$, state$) {
  return action$.pipe((0, _reduxObservable.ofType)(_recommendationsFormActions.SUBMIT_RECOMMENDATION_FORM, state$), (0, _operators.mergeMap)(function (action) {
    var _action$payload = action.payload,
      values = _action$payload.values,
      stepName = _action$payload.stepName,
      msgs = _action$payload.msgs;
    var stepFields = state$.value.RequestForm.fields;
    var csrf = state$.value.RequestForm.csrf;
    var recommendationsForm = new _recommendationsFormService["default"](csrf);
    var stepUrl = state$.value.RequestForm.stepSubmitUrl;
    var token = (0, _find["default"])(stepFields, function (field) {
      return field.name === "token";
    });
    if (typeof token === "undefined") {
      return (0, _recommendationsFormActions.submitRecommendationGlobalErrors)(new Error("Le token est obligatoire"), msgs);
    }
    var selectedProductIds = [];
    if (values.productCards) {
      Object.keys(values.productCards).forEach(function (key) {
        if (values.productCards[key] === true) {
          selectedProductIds.push(key.replace("fieldCard-", ""));
        }
      });
    }
    var jsonValues = {};
    jsonValues = _objectSpread(_objectSpread({}, values), {}, {
      token: token.value,
      selectedProductIds: selectedProductIds.join()
    });
    var formDataUrlParams = _urlEncodedContentHelper["default"].jsonToUrlEncoded(jsonValues);
    return (0, _rxjs.from)(recommendationsForm.submit(stepUrl, formDataUrlParams)).pipe((0, _operators.mergeMap)(function (_ref) {
      var data = _ref.data;
      if (data.errors.length > 0) {
        return (0, _rxjs.of)((0, _recommendationsFormActions.submitRecommendationFormErrors)(stepName, data.errors, msgs));
      }
      if (data.content.state && data.content.state.messages) {
        return (0, _rxjs.concat)((0, _rxjs.of)((0, _i18nVeActions.translationsLoaded)(data.content.state.messages)), (0, _rxjs.of)((0, _recommendationsFormActions.submitRecommendationFormSuccess)(data.content)));
      }
      return (0, _rxjs.of)((0, _recommendationsFormActions.submitRecommendationFormSuccess)(data.content));
    }), (0, _operators.catchError)(function (err) {
      if (err instanceof _reduxForm.SubmissionError) {
        return (0, _rxjs.concat)((0, _rxjs.of)((0, _reduxForm.stopSubmit)(_index.FORM_NAME, err.errors)), (0, _rxjs.of)((0, _recommendationsFormActions.submitErrorLog)(_index.FORM_NAME, err, _reduxForm.stopSubmit)));
      }
      return (0, _rxjs.of)((0, _recommendationsFormActions.submitRecommendationGlobalErrors)(err, msgs));
    }));
  }), (0, _operators.catchError)(function (err) {
    if (err instanceof _reduxForm.SubmissionError) {
      return (0, _rxjs.concat)((0, _rxjs.of)((0, _reduxForm.stopSubmit)(_index.FORM_NAME, err.errors)), (0, _rxjs.of)((0, _recommendationsFormActions.submitErrorLog)(_index.FORM_NAME, err, _reduxForm.stopSubmit)));
    }
    return (0, _rxjs.of)((0, _recommendationsFormActions.submitRecommendationGlobalErrors)(err, null));
  }));
};