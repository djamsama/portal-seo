"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExhibitReducer = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _actionTypes = require("redux-form/lib/actionTypes");
var Action = _interopRequireWildcard(require("../actions/exhibitActions"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ExhibitReducer = exports.ExhibitReducer = function ExhibitReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    data: null,
    exhibitFormSubmissionError: null,
    exhibitFormError: null,
    postReturnSuccess: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case Action.SUBMITFORMSUCCESS:
      /* Reset du formulaire et ouverture de la confirmation. */
      return _objectSpread(_objectSpread({}, state), {}, {
        data: [],
        postReturnSuccess: action.payload.postReturnSuccess,
        exhibitFormError: null,
        exhibitFormSubmissionError: null
      });
    case Action.SUBMIT_EXHIBIT_FORM_ERRORS:
      /* Erreur lors de la soumission du form */
      return _objectSpread(_objectSpread({}, state), {}, {
        exhibitFormError: action.payload.errors
      });
    case Action.SUBMITFORMFAIL:
      /* Erreur la soumission du form retourne une erreur */
      return _objectSpread(_objectSpread({}, state), {}, {
        exhibitFormSubmissionError: "submission error"
      });
    case _actionTypes.CHANGE:
      if (action && action.meta && action.meta.form === Action.EXHIBIT_MANUFACTURER_FORM_NAME) {
        return _objectSpread(_objectSpread({}, state), {}, {
          exhibitFormError: null
        });
      }
      return state;
    default:
      return state;
  }
};