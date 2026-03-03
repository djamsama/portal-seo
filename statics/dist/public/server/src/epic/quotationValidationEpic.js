"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quotationValidationEpic = void 0;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _operators = require("rxjs/operators");
var _rxjs = require("rxjs");
var _reduxObservable = require("redux-observable");
var _reactReduxToastr = require("react-redux-toastr");
var _reduxForm = require("redux-form");
var _constants = require("../commons/constants");
var _quotationValidationForm = require("../pages/mySpace/pages/mySpaceQuotationValidation/containers/quotationValidationForm");
var _quotationValidationActions = require("../pages/mySpace/pages/mySpaceQuotationValidation/actions/quotationValidationActions");
var _quotationValidationService = _interopRequireDefault(require("../services/impl/quotationValidationService"));
var quotationValidationEpic = exports.quotationValidationEpic = function quotationValidationEpic(action$, state$, _ref) {
  var googleAnalytics = _ref.googleAnalytics;
  return action$.pipe((0, _reduxObservable.ofType)(_quotationValidationActions.SUBMITFORM), (0, _operators.mergeMap)(function (_ref2) {
    var _ref2$payload = _ref2.payload,
      values = _ref2$payload.values,
      context = _ref2$payload.context,
      leadContext = _ref2$payload.leadContext,
      history = _ref2$payload.history,
      notificationsHelper = _ref2$payload.notificationsHelper;
    var quotationValidationService = new _quotationValidationService["default"](context);
    return (0, _rxjs.from)(quotationValidationService.sendAddress(values, context, leadContext).then(function (_ref3) {
      var data = _ref3.data;
      if (data.errors.length > 0) {
        googleAnalytics.event({
          category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
          action: _constants.GOOGLE_ANALYTICS_EVENTS.BUYING_FUNNEL,
          label: _constants.GOOGLE_ANALYTICS_EVENTS.DISPLAY_ERROR_ADRESS_FORM
        });
        return (0, _quotationValidationActions.submitFormFail)(data, notificationsHelper.getErrorMsg());
      }
      googleAnalytics.event({
        category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
        action: _constants.GOOGLE_ANALYTICS_EVENTS.BUYING_FUNNEL,
        label: _constants.GOOGLE_ANALYTICS_EVENTS.CLICK_BOUTON_SUBMIT_ADRESS_FORM
      });
      var updateResult = (0, _quotationValidationActions.updateLeadsQuoteInformation)(data.content);

      // Si le paiement est possible on oriente vers la version paiement du tunnel
      if (data.content.paymentEligibilityDto != null) {
        history.push("/myspace/secure/".concat(leadContext, "-quotation/validation/").concat(values.quoteId, "/step2Payment.html"));
      } else {
        history.push("/myspace/secure/".concat(leadContext, "-quotation/validation/").concat(values.quoteId, "/step2.html"));
      }
      return updateResult;
    })["catch"](function (error) {
      if ((0, _typeof2["default"])(error) === "object" && error.errors) {
        // Cas d'une erreur coté validation formulaire.
        throw error;
      } else {
        // Cas autre...
        _reactReduxToastr.toastr.error(notificationsHelper.getErrorMsg());
        return {
          type: _quotationValidationActions.SUBMITFORMFAIL
        };
      }
    })).pipe((0, _operators.catchError)(function (err) {
      return (0, _rxjs.of)(err instanceof _reduxForm.SubmissionError ? (0, _reduxForm.stopSubmit)(_quotationValidationForm.FORM_NAME, err.errors) : err);
    }));
  }));
};