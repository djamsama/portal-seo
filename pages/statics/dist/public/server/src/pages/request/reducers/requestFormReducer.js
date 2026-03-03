"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequestFormState = exports.RequestFormReducerName = exports.RequestFormReducer = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _camelCase = _interopRequireDefault(require("lodash/camelCase"));
var _requestFormActions = require("../actions/requestFormActions");
var _recommendationsFormActions = require("../components/recommendationsSection/components/recommendationsForm/actions/recommendationsFormActions");
var _constants = require("../constants");
var _trackingHelper = require("../../../helpers/trackingHelper");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var RequestFormReducerName = exports.RequestFormReducerName = "RequestForm";
var RequestFormState = exports.RequestFormState = {
  csrf: "",
  stepId: "",
  stepTitle: "",
  stepInfoLabel: "",
  stepSubmitUrl: "",
  requestType: null,
  stepSubmitButtonLabel: "",
  isFromChina: false,
  submittingStep: false,
  fields: [],
  requestTrackEventCategory: "",
  requestTrackEventAction: "",
  requestTrackEventLabel: "",
  count: {},
  contactChoiceFormTitle: null,
  relatedProducts: null,
  requestDetails: null,
  requestRecoCompanies: null,
  multiRequestConfirmation: false,
  relatedCompanies: null
};
var RequestFormReducer = exports.RequestFormReducer = function RequestFormReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : RequestFormState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var oldStep = state.stepId;
  switch (action.type) {
    case _requestFormActions.SUBMIT_REQUEST_FORM_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        submittingStep: true,
        errors: null
      });
    case _requestFormActions.SUBMIT_REQUEST_FORM_LAST_STEP_SUCCESS:
      return _objectSpread(_objectSpread(_objectSpread({}, state), action.payload.state), {}, {
        submittingStep: false
      }, {
        stepId: action.payload.state && action.payload.state.stepId ? action.payload.state.stepId : _constants.LAST_STEP_ID,
        priceListContent: action.payload.data.priceListContent,
        contact: action.payload.data.contact,
        mainContact: action.payload.data.mainContact,
        relatedProducts: action.payload.data.relatedProducts,
        requestDetails: action.payload.data.requestDetails,
        requestRecoCompanies: action.payload.data.requestRecoCompanies,
        oldStep: oldStep,
        errors: null
      });
    case _requestFormActions.SUBMIT_REQUEST_FORM_SUCCESS:
      {
        var _action$payload = action.payload,
          newBackendState = _action$payload.state,
          data = _action$payload.data;
        var contactChoiceFormTitle = data ? data.contactChoiceFormTitle : null;
        var stepIdFormatted = (0, _camelCase["default"])(state.stepId);
        var count = state.count;
        var requestType = state.requestType;
        if (!count) {
          count = {};
          count[stepIdFormatted] = 0;
        }
        var newStepState = {
          stepId: newBackendState.stepId,
          stepInfoLabel: newBackendState.stepInfoLabel,
          stepSubmitUrl: newBackendState.stepSubmitUrl,
          stepSubmitButtonLabel: newBackendState.stepSubmitButtonLabel,
          fields: newBackendState.fields,
          isFromChina: newBackendState.isFromChina,
          priceListContent: newBackendState.priceListContent,
          requestType: requestType,
          contactChoiceFormTitle: contactChoiceFormTitle,
          oldStep: oldStep,
          count: count,
          errors: null
        };
        if (newBackendState.requestTrackEventLabel) {
          newStepState.requestTrackEventLabel = newBackendState.requestTrackEventLabel;
        }

        // Le csrf et le stepTitle ne sont pas a redéfinir s'ils sont déjà définies
        if (newBackendState.csrf) {
          newStepState.csrf = newBackendState.csrf;
        }
        if (newBackendState.stepTitle) {
          newStepState.stepTitle = newBackendState.stepTitle;
        }
        return _objectSpread(_objectSpread(_objectSpread({}, state), {}, {
          count: count
        }, newStepState), {}, {
          submittingStep: false
        });
      }
    // Ajout de l'action de redux pour gérer le state submittingStep
    // cela permet de bloquer le multi-submit avec la gestion des erreurs serveurs (avec le SubmissionError très compliqué de faire autrement rapidement )
    case "@@redux-form/STOP_SUBMIT":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          submittingStep: false
        });
      }
    case _requestFormActions.SUBMIT_REQUEST_FORM_ERRORS:
      {
        var newState = _objectSpread({}, state);
        var _stepIdFormatted = (0, _camelCase["default"])(state.stepId);
        var _count = newState.count;
        if (!_count) {
          _count = {};
        }
        var counter = _trackingHelper.TrackingHelper.count(state.stepId, _count);
        _count[_stepIdFormatted] = counter.after;
        return _objectSpread(_objectSpread({}, newState), {}, {
          errors: action.payload.errors,
          submittingStep: false,
          count: _count
        });
      }
    case _recommendationsFormActions.SUBMIT_RECOMMENDATION_FORM_SUCCESS:
      {
        var _newState = _objectSpread({}, state);
        return _objectSpread(_objectSpread({}, _newState), {}, {
          multiRequestConfirmation: true,
          stepId: _constants.LAST_STEP_ID,
          requestDetails: action.payload.data.requestDetails,
          requestRecoCompanies: action.payload.data.requestRecoCompanies,
          submitting: false
        });
      }
    case _recommendationsFormActions.SUBMIT_RECOMMENDATION_FORM:
      {
        var _newState2 = _objectSpread({}, state);
        return _objectSpread(_objectSpread({}, _newState2), {}, {
          submitting: true,
          oldStep: oldStep
        });
      }
    case _recommendationsFormActions.SUBMIT_RECOMMENDATION_FORM_ERRORS:
      {
        var _newState3 = _objectSpread({}, state);
        return _objectSpread(_objectSpread({}, _newState3), {}, {
          submitting: false
        });
      }
    case "@@INIT":
      return _objectSpread(_objectSpread({}, RequestFormState), state);
    default:
      return state;
  }
};