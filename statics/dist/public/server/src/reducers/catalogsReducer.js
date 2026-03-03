"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogsReducer = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _catalogsActions = require("../actions/catalogsActions");
var _logger = _interopRequireDefault(require("../components/logger"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DEFAULT_CATALOGS_STATE = {
  isLoading: true
};
var CatalogsReducer = exports.CatalogsReducer = function CatalogsReducer() {
  var _action$payload, _action$payload2, _action$payload3, _action$payload6, _action$payload7, _action$payload8, _action$payload9;
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_CATALOGS_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _catalogsActions.CATALOGS_RETRIEVED:
      if ((_action$payload = action.payload) !== null && _action$payload !== void 0 && _action$payload.suppliers && ((_action$payload2 = action.payload) === null || _action$payload2 === void 0 || (_action$payload2 = _action$payload2.suppliers) === null || _action$payload2 === void 0 ? void 0 : _action$payload2.length) > 0 && (_action$payload3 = action.payload) !== null && _action$payload3 !== void 0 && _action$payload3.suppliers[0]) {
        var _action$payload4, _action$payload5;
        // eslint-disable-next-line no-param-reassign
        action.payload.suppliers[0].requestButton = (_action$payload4 = action.payload) === null || _action$payload4 === void 0 ? void 0 : _action$payload4.requestButton;
        // eslint-disable-next-line no-param-reassign
        action.payload.suppliers[0].requestButtonDoc = (_action$payload5 = action.payload) === null || _action$payload5 === void 0 ? void 0 : _action$payload5.requestButtonDoc;
      }
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        suppliers: (_action$payload6 = action.payload) === null || _action$payload6 === void 0 ? void 0 : _action$payload6.suppliers,
        requestButton: (_action$payload7 = action.payload) === null || _action$payload7 === void 0 ? void 0 : _action$payload7.requestButton,
        requestButtonDoc: (_action$payload8 = action.payload) === null || _action$payload8 === void 0 ? void 0 : _action$payload8.requestButtonDoc,
        drdCustomer: (_action$payload9 = action.payload) === null || _action$payload9 === void 0 ? void 0 : _action$payload9.drdCustomer
      });
    case _catalogsActions.CATALOGS_FAILURE:
      _logger["default"].error("CATALOGS_FAILURE:", action.payload);
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        suppliers: [],
        requestButton: undefined,
        requestButtonDoc: undefined,
        drdCustomer: false
      });
    default:
      {
        return state;
      }
  }
};