"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messageEpic = void 0;
var _operators = require("rxjs/operators");
var _rxjs = require("rxjs");
var _reduxObservable = require("redux-observable");
var _messageActions = require("../pages/mySpace/actions/messageActions");
var _messageService = _interopRequireDefault(require("../services/impl/messageService"));
// eslint-disable-next-line no-unused-vars
var messageEpic = exports.messageEpic = function messageEpic(action$) {
  var currentMessage = null;
  var currentResponse = null;
  var currentNotification = null;
  return action$.pipe((0, _reduxObservable.ofType)(_messageActions.MESSAGE_SAVING), (0, _operators.mergeMap)(function (action) {
    var messageService = new _messageService["default"]();
    currentMessage = action.payload.message;
    currentNotification = action.payload.notification;
    return (0, _rxjs.from)(messageService.saveMessage(action.payload.message).then(function (response) {
      currentResponse = response;
    })).pipe((0, _operators.mapTo)(function () {
      var response = currentResponse;
      if (response && response.data && response.data.responseStatus === 200) {
        if (currentNotification) {
          response.msgs = currentNotification;
        }
        if (currentMessage) {
          response.message = currentMessage;
          response.message.error = false;
        }
        return (0, _rxjs.of)((0, _messageActions.messageSuccess)(response));
      }
      if (currentMessage) {
        currentMessage.msgs = currentNotification;
        currentMessage.error = true;
      }
      return (0, _rxjs.of)((0, _messageActions.messageError)(new Error("Incorrect response from server"), currentMessage));
    }), (0, _operators.catchError)(function (errors) {
      if (currentMessage) {
        currentMessage.error = true;
      }
      return (0, _rxjs.of)((0, _messageActions.messageError)(errors, currentMessage));
    }));
  }), (0, _operators.catchError)(function (errors) {
    if (currentMessage) {
      currentMessage.error = true;
    }
    return (0, _rxjs.of)((0, _messageActions.messageError)(errors, currentMessage));
  }));
};