"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuotationReducer = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _defaultState = require("../../../constants/defaultState");
var _quotationActions = require("../actions/quotationActions");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var QuotationReducer = exports.QuotationReducer = function QuotationReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultState.DEFAULT_QUOTATION_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newState = _objectSpread({}, state);
  switch (action.type) {
    case _quotationActions.QUOTATION_SAVING:
      {
        return _objectSpread(_objectSpread({}, newState), {}, {
          quotation: null
        });
      }
    case _quotationActions.QUOTATION_SUCCESS:
      {
        var payload = action.payload;
        return _objectSpread(_objectSpread({}, newState), {}, {
          isLoading: false,
          quotation: payload.quotation
        });
      }
    case _quotationActions.QUOTATION_ERROR:
      {
        var _action$payload = action.payload,
          errors = _action$payload.errors,
          quotation = _action$payload.quotation;
        return _objectSpread(_objectSpread({}, newState), {}, {
          isLoading: false,
          quotation: quotation,
          errors: errors
        });
      }
    case _quotationActions.QUOTATION_QUOTE_ID_TO_VIEW:
      {
        return _objectSpread(_objectSpread({}, newState), {}, {
          quoteIdToView: action.payload.quoteIdToView
        });
      }
    default:
      return newState;
  }
};