"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quotationPayByCardEpic = void 0;
var _operators = require("rxjs/operators");
var _rxjs = require("rxjs");
var _reduxObservable = require("redux-observable");
var _reactReduxToastr = require("react-redux-toastr");
var _constants = require("../commons/constants");
var _quotationPaymentActions = require("../pages/mySpace/pages/mySpaceQuotationValidation/actions/quotationPaymentActions");
var _quotationPaymentService = _interopRequireDefault(require("../services/impl/quotationPaymentService"));
var _mangopayCardOrderService = _interopRequireDefault(require("../services/impl/mangopayCardOrderService"));
// $FlowFixMe
// $FlowFixMe
// $FlowFixMe
/**
 * Epic de gestion du paiement : appelé sur un événement de paiement par carte bancaire
 * @param {*} action$ Les actions écoutées
 */
var quotationPayByCardEpic = exports.quotationPayByCardEpic = function quotationPayByCardEpic(action$, state$, _ref) {
  var googleAnalytics = _ref.googleAnalytics;
  function getCardData(cardDataForm) {
    var _cardDataForm$cardNum, _cardDataForm$cardExp;
    return {
      cardNumber: cardDataForm === null || cardDataForm === void 0 || (_cardDataForm$cardNum = cardDataForm.cardNumber) === null || _cardDataForm$cardNum === void 0 ? void 0 : _cardDataForm$cardNum.replace(/\s+/g, ""),
      cardExpirationDate: cardDataForm === null || cardDataForm === void 0 || (_cardDataForm$cardExp = cardDataForm.cardExpiration) === null || _cardDataForm$cardExp === void 0 ? void 0 : _cardDataForm$cardExp.replace("/", ""),
      cardCvx: cardDataForm === null || cardDataForm === void 0 ? void 0 : cardDataForm.cardCVV,
      cardType: "CB_VISA_MASTERCARD"
    };
  }
  function displayError(msg, details) {
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
    _reactReduxToastr.toastr.clean();
    var err = msg;
    if (details != null && typeof details === "string") {
      err = details;
    }
    _reactReduxToastr.toastr.error(err, toastrOptions);
    return (0, _rxjs.of)({
      type: _quotationPaymentActions.PAYFAIL
    });
  }
  return action$.pipe((0, _reduxObservable.ofType)(_quotationPaymentActions.PAYBYCARD), (0, _operators.mergeMap)(function (_ref2) {
    var _ref2$payload = _ref2.payload,
      context = _ref2$payload.context,
      paymentDatas = _ref2$payload.paymentDatas,
      quoteId = _ref2$payload.quoteId,
      leadContext = _ref2$payload.leadContext,
      history = _ref2$payload.history,
      notificationsHelper = _ref2$payload.notificationsHelper;
    var quotationPaymentService = new _quotationPaymentService["default"](context);
    var mangopayCardOrderService = new _mangopayCardOrderService["default"]();
    var card = getCardData(paymentDatas);
    return (0, _rxjs.from)(
    // initialisation du paiement chez Mango et retourne un cardRegistrationData
    quotationPaymentService.prepareCardPayment(leadContext, quoteId)).pipe((0, _operators.mergeMap)(function (_ref3) {
      var data = _ref3.data;
      googleAnalytics.event({
        category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
        action: _constants.GOOGLE_ANALYTICS_EVENTS.BUYING_FUNNEL,
        label: _constants.GOOGLE_ANALYTICS_EVENTS.CLICK_BUTTON_PAY_BY_CB
      });
      var cardRegistrationData = data.content;
      // initialisation du paiement par CB
      mangopayCardOrderService.init(cardRegistrationData);
      return (0, _rxjs.from)(
      // creation CB et récupération du registrationData
      mangopayCardOrderService.tokenizeCard(card)).pipe((0, _operators.mergeMap)(function (retTokenizeCard) {
        // validation CB + declenchement du paiement
        mangopayCardOrderService.setRegistrationData(retTokenizeCard);
        // mangoPay.cardRegistration._cardRegisterData.registrationData=data;
        return (0, _rxjs.from)(quotationPaymentService.processCardPayment(leadContext, mangopayCardOrderService.getCardRegistrationData(), quoteId)).pipe(
        // eslint-disable-next-line no-shadow
        (0, _operators.mergeMap)(function (_ref4) {
          var data = _ref4.data;
          if (data.responseStatus === 500 || data.content && data.content.status === "REFUSED") {
            googleAnalytics.event({
              category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
              action: _constants.GOOGLE_ANALYTICS_EVENTS.BUYING_FUNNEL,
              label: _constants.GOOGLE_ANALYTICS_EVENTS.DISPLAY_CONFIRM_CB_ERROR
            });
            return displayError(notificationsHelper === null || notificationsHelper === void 0 ? void 0 : notificationsHelper.getErrorMsg(), data.errors && data.errors[0] ? data.errors[0].message : null);
          }
          _reactReduxToastr.toastr.clean();
          var redirectUrl = data.content.secureModeRedirectURL;
          return (0, _rxjs.of)((0, _quotationPaymentActions.payByCardSuccess)({
            redirectUrl: redirectUrl,
            quoteId: quoteId,
            leadContext: leadContext,
            history: history
          }));
        }), (0, _operators.catchError)(function (err) {
          return displayError(notificationsHelper === null || notificationsHelper === void 0 ? void 0 : notificationsHelper.getErrorMsg(), err);
        }));
      }), (0, _operators.catchError)(function (err) {
        return displayError(notificationsHelper === null || notificationsHelper === void 0 ? void 0 : notificationsHelper.getErrorMsg(), err);
      }));
    }), (0, _operators.catchError)(function (err) {
      return displayError(notificationsHelper === null || notificationsHelper === void 0 ? void 0 : notificationsHelper.getErrorMsg(), err);
    }));
  }));
};