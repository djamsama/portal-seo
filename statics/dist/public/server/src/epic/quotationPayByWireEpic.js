"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quotationPayByWireEpic = void 0;
var _operators = require("rxjs/operators");
var _rxjs = require("rxjs");
var _reduxObservable = require("redux-observable");
var _reactReduxToastr = require("react-redux-toastr");
var _constants = require("../commons/constants");
var _quotationPaymentActions = require("../pages/mySpace/pages/mySpaceQuotationValidation/actions/quotationPaymentActions");
var _quotationPaymentService = _interopRequireDefault(require("../services/impl/quotationPaymentService"));
/**
 * Epic de gestion du paiement : appelé sur un événement de paiement par carte bancaire
 * @param {*} action$ Les actions écoutées
 */
var quotationPayByWireEpic = exports.quotationPayByWireEpic = function quotationPayByWireEpic(action$, state$, _ref) {
  var googleAnalytics = _ref.googleAnalytics;
  function displayError(msg, err) {
    var toastrOptions = {
      maxOpened: 1,
      autoDismiss: true,
      timeOut: 0,
      // by setting to 0 it will prevent the auto close
      showCloseButton: true,
      // false by default
      progressBar: false,
      closeOnToastrClick: true,
      preventDuplicates: true
    };
    if (false) {
      // eslint-disable-next-line no-console
      console.error("Dev mode : err in quotationPayByWireEpic", err);
    }
    _reactReduxToastr.toastr.clean();
    _reactReduxToastr.toastr.error(msg, toastrOptions);
    return (0, _rxjs.of)({
      type: _quotationPaymentActions.PAYFAIL
    });
  }
  return action$.pipe((0, _reduxObservable.ofType)(_quotationPaymentActions.PAYBYWIRE), (0, _operators.mergeMap)(function (_ref2) {
    var _ref2$payload = _ref2.payload,
      context = _ref2$payload.context,
      quoteId = _ref2$payload.quoteId,
      leadContext = _ref2$payload.leadContext,
      history = _ref2$payload.history,
      notificationsHelper = _ref2$payload.notificationsHelper;
    var quotationPaymentService = new _quotationPaymentService["default"](context);
    return (0, _rxjs.from)(quotationPaymentService.processBankWirePayment(leadContext, quoteId)).pipe((0, _operators.mergeMap)(function (_ref3) {
      var data = _ref3.data;
      if (data.responseStatus === 500) {
        return displayError(notificationsHelper.getErrorMsg(), data.errors);
      }
      googleAnalytics === null || googleAnalytics === void 0 || googleAnalytics.event({
        category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
        action: _constants.GOOGLE_ANALYTICS_EVENTS.BUYING_FUNNEL,
        label: _constants.GOOGLE_ANALYTICS_EVENTS.CLICK_BUTTON_PAY_BY_WIRE
      });
      _reactReduxToastr.toastr.clean();
      var bankwire = data.content.bankwire;
      return (0, _rxjs.of)((0, _quotationPaymentActions.payByWireSuccess)({
        bankwire: bankwire,
        quoteId: quoteId,
        leadContext: leadContext,
        history: history
      }));
    }), (0, _operators.catchError)(function (err) {
      return displayError(notificationsHelper === null || notificationsHelper === void 0 ? void 0 : notificationsHelper.getErrorMsg(), err);
    }));
  }));
};