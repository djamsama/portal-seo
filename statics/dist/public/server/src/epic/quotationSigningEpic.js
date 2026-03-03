"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quotationSigningEpic = void 0;
var _operators = require("rxjs/operators");
var _rxjs = require("rxjs");
var _reduxObservable = require("redux-observable");
var _reactReduxToastr = require("react-redux-toastr");
var _constants = require("../commons/constants");
var _quotationSigningActions = require("../pages/mySpace/pages/mySpaceQuotationValidation/actions/quotationSigningActions");
var _quotationService = _interopRequireDefault(require("../services/impl/quotationService"));
var quotationSigningEpic = exports.quotationSigningEpic = function quotationSigningEpic(action$, state$, _ref) {
  var googleAnalytics = _ref.googleAnalytics;
  return action$.pipe((0, _reduxObservable.ofType)(_quotationSigningActions.SIGNING), (0, _operators.mergeMap)(function (_ref2) {
    var _ref2$payload = _ref2.payload,
      values = _ref2$payload.values,
      notificationsHelper = _ref2$payload.notificationsHelper,
      history = _ref2$payload.history,
      intl = _ref2$payload.intl;
    var quotationSigningService = new _quotationService["default"]();
    return (0, _rxjs.from)(quotationSigningService.saveQuotation(values).then(function (_ref3) {
      var data = _ref3.data;
      var options = {
        year: "numeric",
        month: "long",
        day: "2-digit"
      };
      if (data.content.statusDate) {
        googleAnalytics.event({
          category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
          action: _constants.GOOGLE_ANALYTICS_EVENTS.BUYING_FUNNEL,
          label: _constants.GOOGLE_ANALYTICS_EVENTS.CLICK_BOUTON_SIGN_FORM
        });
        var ret = {
          statusDate: intl.formatDate(data.content.statusDate, options),
          quoteId: values.quoteId,
          context: values.context
        };
        history.push("/myspace/secure/".concat(values.context, "-quotation/validation/").concat(values.quoteId, "/step3.html"));
        return (0, _quotationSigningActions.signingSuccess)(ret, history);
      }
      googleAnalytics.event({
        category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
        action: _constants.GOOGLE_ANALYTICS_EVENTS.BUYING_FUNNEL,
        label: _constants.GOOGLE_ANALYTICS_EVENTS.DISPLAY_ERROR_SIGN_FORM
      });
      _reactReduxToastr.toastr.error(notificationsHelper.getErrorMsg());
      return {
        type: _quotationSigningActions.SIGNINGFAIL
      };
    })["catch"](function () {
      googleAnalytics.event({
        category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
        action: _constants.GOOGLE_ANALYTICS_EVENTS.BUYING_FUNNEL,
        label: _constants.GOOGLE_ANALYTICS_EVENTS.DISPLAY_ERROR_SIGN_FORM
      });
      _reactReduxToastr.toastr.error(notificationsHelper.getErrorMsg());
      return {
        type: _quotationSigningActions.SIGNINGFAIL
      };
    }));
  }), (0, _operators.catchError)(function (err) {
    return (0, _rxjs.of)(err);
  }));
};