"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeState = exports.HomeReducerName = exports.HomeReducer = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _homeActions = require("../actions/homeActions");
var _constants = require("../../../commons/constants");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var HomeReducerName = exports.HomeReducerName = "Home";
var HomeState = exports.HomeState = {
  projects: null,
  products: null,
  trends: null,
  emags: null,
  guides: null,
  submitting: false
};
var HomeReducer = exports.HomeReducer = function HomeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : HomeState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _homeActions.HOME_REQUEST_SUCCESS:
      {
        var _action$payload = action.payload,
          type = _action$payload.type,
          items = _action$payload.items;
        var projects = type === _constants.APPLICATION.PROJECTS.PARAMETER_NAME ? items : state.projects;
        var trends = type === _constants.APPLICATION.TRENDS.PARAMETER_NAME ? items : state.trends;
        var products = type === _constants.APPLICATION.PRODUCTS.PARAMETER_NAME ? items : state.products;
        var emags = type === _constants.APPLICATION.EMAGS.PARAMETER_NAME ? items : state.emags;
        var guides = type === _constants.APPLICATION.GUIDES.PARAMETER_NAME ? items : state.guides;
        return _objectSpread(_objectSpread({}, state), {}, {
          projects: projects,
          trends: trends,
          products: products,
          emags: emags,
          guides: guides,
          errors: null
        });
      }
    case _homeActions.HOME_REQUEST_ERROR:
      {
        var newState = _objectSpread({}, state);
        return _objectSpread(_objectSpread({}, newState), {}, {
          errors: action.payload.errors
        });
      }
    /*  dans l'etat actuel les etats submiting ne sont pas utilisés
    pour les utilisés decommenter ci dessous */
    /*
    case HOME_REQUEST_LOADING:
    case HOME_EMAGS_LOADING:
    case HOME_BUYING_GUIDE_LOADING: {
      const { type } = action.payload;
      const newState = { ...state };
      return {
        ...newState,
        submitting: type
      };
    }
    */
    default:
      return state;
  }
};