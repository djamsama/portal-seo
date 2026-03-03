"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageReducer = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _defaultState = require("../../../constants/defaultState");
var _messageActions = require("../actions/messageActions");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var MessageReducer = exports.MessageReducer = function MessageReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultState.DEFAULT_MESSAGE_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newState = _objectSpread({}, state);
  switch (action.type) {
    case _messageActions.MESSAGE_SAVING:
      {
        return _objectSpread(_objectSpread({}, newState), {}, {
          isLoading: true,
          message: null
        });
      }
    case _messageActions.MESSAGE_SUCCESS:
      {
        var payload = action.payload;
        return _objectSpread(_objectSpread({}, newState), {}, {
          isLoading: false,
          isSuccess: true,
          message: payload.message
        });
      }
    case _messageActions.MESSAGE_READ_SUCCESS:
      {
        var _payload = action.payload;
        return _objectSpread(_objectSpread({}, newState), {}, {
          isLoading: false,
          isSuccess: true,
          rfqContractorId: _payload.rfqContractorId
        });
      }
    case _messageActions.MESSAGE_ERROR:
      {
        var _action$payload = action.payload,
          errors = _action$payload.errors,
          message = _action$payload.message;
        return _objectSpread(_objectSpread({}, newState), {}, {
          isLoading: false,
          isSuccess: false,
          message: message,
          errors: errors
        });
      }
    case _messageActions.MESSAGE_ADD_ATTACHMENT:
      {
        var _payload2 = action.payload;
        return _objectSpread(_objectSpread({}, newState), {}, {
          isLoading: true,
          message: _payload2.message
        });
      }
    case _messageActions.MESSAGE_ADD_ATTACHMENT_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          // copy state
          fileState: _objectSpread(_objectSpread({}, state.fileState), {}, (0, _defineProperty2["default"])({}, action.payload.fileName, _objectSpread(_objectSpread({}, state.fileState[action.payload.fileName]), {}, {
            // copy that specific fileState's properties
            state: "SUCCESS" // update its `state` property
          })))
        });
      }
    case _messageActions.MESSAGE_DELETE_ATTACHMENT_SUCCESS:
      {
        delete newState.fileState[action.payload.fileName];
        return newState;
      }
    case _messageActions.MESSAGE_DELETE_ATTACHMENT_FAILURE:
    case _messageActions.MESSAGE_ADD_ATTACHMENT_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          // copy state
          fileState: _objectSpread(_objectSpread({}, state.fileState), {}, (0, _defineProperty2["default"])({}, action.payload.fileName, _objectSpread(_objectSpread({}, state.fileState[action.payload.fileName]), {}, {
            // copy that specific fileState's properties
            state: "FAILURE" // update its `state` property
          })))
        });
      }
    case _messageActions.MESSAGE_SET_ATTACHMENT_FILE_STATE:
      {
        // Mise à jour d'un état pour une entrée existante
        if (state.fileState !== undefined && state.fileState[action.payload.fileName] !== undefined) {
          return _objectSpread(_objectSpread({}, state), {}, {
            // copy state
            fileState: _objectSpread(_objectSpread({}, state.fileState), {}, (0, _defineProperty2["default"])({}, action.payload.fileName, _objectSpread(_objectSpread({}, state.fileState[action.payload.fileName]), {}, {
              // copy that specific fileState's properties
              state: action.payload.fileState // update its `state` property
            })))
          });
        }
        // Création d'une entrée dans le tableau avec un état donné
        return _objectSpread(_objectSpread({}, state), {}, {
          // copy state
          fileState: _objectSpread(_objectSpread({}, state.fileState), {}, (0, _defineProperty2["default"])({}, action.payload.fileName, {
            // update its `state` property
            state: action.payload.fileState
          }))
        });
      }
    default:
      return newState;
  }
};