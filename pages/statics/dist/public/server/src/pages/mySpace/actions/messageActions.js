"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setFileState = exports.saveMessage = exports.messageSuccess = exports.messageReadSuccess = exports.messageError = exports.markAsReadMessages = exports.deleteAttachmentSuccess = exports.deleteAttachmentFailure = exports.deleteAttachment = exports["default"] = exports.addAttachmentSuccess = exports.addAttachmentFailure = exports.addAttachment = exports.MESSAGE_SUCCESS = exports.MESSAGE_SET_ATTACHMENT_FILE_STATE = exports.MESSAGE_SAVING = exports.MESSAGE_READ_SUCCESS = exports.MESSAGE_READING = exports.MESSAGE_ERROR = exports.MESSAGE_DELETE_ATTACHMENT_SUCCESS = exports.MESSAGE_DELETE_ATTACHMENT_FAILURE = exports.MESSAGE_DELETE_ATTACHMENT = exports.MESSAGE_ADD_ATTACHMENT_SUCCESS = exports.MESSAGE_ADD_ATTACHMENT_FAILURE = exports.MESSAGE_ADD_ATTACHMENT = void 0;
var _reactReduxToastr = require("react-redux-toastr");
var _reduxForm = require("redux-form");
var _messageService = _interopRequireDefault(require("../../../services/impl/messageService"));
/* eslint-disable no-undef */var MESSAGE_SAVING = exports.MESSAGE_SAVING = "MESSAGE_SAVING";
var MESSAGE_READING = exports.MESSAGE_READING = "MESSAGE_READING";
var MESSAGE_ERROR = exports.MESSAGE_ERROR = "MESSAGE_ERROR";
var MESSAGE_SUCCESS = exports.MESSAGE_SUCCESS = "MESSAGE_SUCCESS";
var MESSAGE_READ_SUCCESS = exports.MESSAGE_READ_SUCCESS = "MESSAGE_READ_SUCCESS";
var MESSAGE_ADD_ATTACHMENT = exports.MESSAGE_ADD_ATTACHMENT = "MESSAGE_ADD_ATTACHMENT";
var MESSAGE_ADD_ATTACHMENT_SUCCESS = exports.MESSAGE_ADD_ATTACHMENT_SUCCESS = "MESSAGE_ADD_ATTACHMENT_SUCCESS";
var MESSAGE_ADD_ATTACHMENT_FAILURE = exports.MESSAGE_ADD_ATTACHMENT_FAILURE = "MESSAGE_ADD_ATTACHMENT_FAILURE";
var MESSAGE_DELETE_ATTACHMENT = exports.MESSAGE_DELETE_ATTACHMENT = "MESSAGE_DELETE_ATTACHMENT";
var MESSAGE_DELETE_ATTACHMENT_SUCCESS = exports.MESSAGE_DELETE_ATTACHMENT_SUCCESS = "MESSAGE_DELETE_ATTACHMENT_SUCCESS";
var MESSAGE_DELETE_ATTACHMENT_FAILURE = exports.MESSAGE_DELETE_ATTACHMENT_FAILURE = "MESSAGE_DELETE_ATTACHMENT_FAILURE";
var MESSAGE_SET_ATTACHMENT_FILE_STATE = exports.MESSAGE_SET_ATTACHMENT_FILE_STATE = "MESSAGE_SET_ATTACHMENT_FILE_STATE";
var saveMessage = exports.saveMessage = function saveMessage(message, notification) {
  return {
    type: MESSAGE_SAVING,
    payload: {
      message: message,
      isLoading: true,
      notification: notification
    }
  };
};
var markAsReadMessages = exports.markAsReadMessages = function markAsReadMessages(rfqContractorId) {
  // $FlowFixMe
  if (false) {
    var messageService = new _messageService["default"]();
    return function (dispatch) {
      return messageService.markMessagesAsRead(rfqContractorId).then(function (_ref) {
        var data = _ref.data;
        dispatch(messageReadSuccess(data, rfqContractorId));
      });
    };
  }
};
var messageError = exports.messageError = function messageError(errors, message) {
  if (message) {
    if (message.msgs && message.msgs.error) {
      _reactReduxToastr.toastr.error("", message.msgs.error);
    } else _reactReduxToastr.toastr.error("", errors);
  }
  return {
    type: MESSAGE_ERROR,
    payload: {
      errors: errors,
      message: message,
      isSuccess: false,
      isLoading: false
    }
  };
};
var messageSuccess = exports.messageSuccess = function messageSuccess(response) {
  if (response && response.msgs && response.msgs.success) {
    _reactReduxToastr.toastr.success("", response.msgs.success);
  }
  return {
    type: MESSAGE_SUCCESS,
    payload: {
      isLoading: false,
      isSuccess: true,
      message: response.message
    }
  };
};
var messageReadSuccess = exports.messageReadSuccess = function messageReadSuccess(data, rfqContractorId) {
  return {
    type: MESSAGE_READ_SUCCESS,
    payload: {
      isLoading: false,
      isSuccess: true,
      rfqContractorId: rfqContractorId
    }
  };
};
var addAttachmentSuccess = exports.addAttachmentSuccess = function addAttachmentSuccess(fileName, data) {
  return {
    type: MESSAGE_ADD_ATTACHMENT_SUCCESS,
    payload: {
      fileName: fileName,
      data: data
    }
  };
};
var addAttachmentFailure = exports.addAttachmentFailure = function addAttachmentFailure(fileName, data) {
  return {
    type: MESSAGE_ADD_ATTACHMENT_FAILURE,
    payload: {
      fileName: fileName,
      data: data
    }
  };
};
var addAttachment = exports.addAttachment = function addAttachment(fileName, message, leadContext, callback) {
  var messageService = new _messageService["default"]();
  return function (dispatch) {
    return messageService.addAttachment(message, leadContext, callback).then(function (_ref2) {
      var data = _ref2.data;
      if (data.errors.length > 0 || data.responseStatus !== 200 && data.responseStatus !== 201) {
        // Un code retour différent de 200/201 ou un retour avec une liste d'erreurs est synonyme d'echec
        return dispatch(addAttachmentFailure(fileName, data));
      }
      // Sinon c'est un succès
      return dispatch(addAttachmentSuccess(fileName, data));
    })["catch"](function (error) {
      if (error.errors) {
        // Gestion des erreurs globales
        throw new _reduxForm.SubmissionError(error.errors);
      }
    });
  };
};
var setFileState = exports.setFileState = function setFileState(fileName, fileState) {
  return {
    type: MESSAGE_SET_ATTACHMENT_FILE_STATE,
    payload: {
      fileName: fileName,
      fileState: fileState
    }
  };
};
var deleteAttachmentSuccess = exports.deleteAttachmentSuccess = function deleteAttachmentSuccess(fileName, data) {
  return {
    type: MESSAGE_DELETE_ATTACHMENT_SUCCESS,
    payload: {
      fileName: fileName,
      data: data
    }
  };
};
var deleteAttachmentFailure = exports.deleteAttachmentFailure = function deleteAttachmentFailure(fileName, data) {
  return {
    type: MESSAGE_DELETE_ATTACHMENT_FAILURE,
    payload: {
      fileName: fileName,
      data: data
    }
  };
};
var deleteAttachment = exports.deleteAttachment = function deleteAttachment(fileName, message, leadContext) {
  var messageService = new _messageService["default"]();
  return function (dispatch) {
    return messageService.deleteAttachment(message, leadContext).then(function (_ref3) {
      var data = _ref3.data;
      if (data.errors.length > 0 || data.responseStatus !== 200 && data.responseStatus !== 201) {
        // Un code retour différent de 200/201 ou un retour avec une liste d'erreurs est synonyme d'echec
        return dispatch(deleteAttachmentFailure(fileName, data));
      }
      // Sinon c'est un succès
      return dispatch(deleteAttachmentSuccess(fileName, data));
    })["catch"](function (error) {
      if (error.errors) {
        // Gestion des erreurs globales
        throw new _reduxForm.SubmissionError(error.errors);
      }
    });
  };
};
var _default = exports["default"] = {};