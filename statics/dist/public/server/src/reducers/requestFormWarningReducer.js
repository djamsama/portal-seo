"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorToWarning = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _reduxForm = require("redux-form");
var _containers = require("../pages/request/containers");
var _excluded = ["asyncErrors"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// redux-form ne gère pas les warning sur la validation asynchrone, uniquement les erreurs
// Donc on transforme les erreurs de type warning en warning

var doErrorToWarning = function doErrorToWarning(state, action) {
  switch (action.type) {
    case _reduxForm.actionTypes.STOP_ASYNC_VALIDATION:
      {
        var asyncErrors = state.asyncErrors,
          noErrors = (0, _objectWithoutProperties2["default"])(state, _excluded);
        var currentWarnings = action.payload || undefined;
        var warningsToTest = _objectSpread(_objectSpread({}, currentWarnings), asyncErrors);
        var warningsToReturn = {};
        Object.keys(warningsToTest).forEach(function (key) {
          var current = warningsToTest[key];
          if (current) {
            Object.keys(current).forEach(function (key2) {
              if (current[key2].warning) {
                warningsToReturn[key] = current;
              }
            });
          }
        });
        return _objectSpread(_objectSpread({}, noErrors), {}, {
          syncWarnings: warningsToReturn,
          asyncErrors: null
        });
      }
    default:
      return _objectSpread({}, state);
  }
};

/* Transformation des errors avec warning à true en warning  */
var formReducerObject = {};
formReducerObject[_containers.FORM_NAME] = doErrorToWarning; // pour FORM_NAME (demandes)
/*
 Pour ajouter des warning asynchrone a d'autres formulaire :
  formReducerObject[NomDunDeuxiemeFormalaire] = doErrorToWarning;
  formReducerObject[NomDuAutreFormalaire] = doErrorToWarning;
  ...
*/
// $FlowFixMe
var errorToWarning = exports.errorToWarning = _reduxForm.reducer.plugin(formReducerObject);