"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPhoneCode = void 0;
var _reduxForm = require("redux-form");
var _reactReduxToastr = require("react-redux-toastr");
var _PhoneCodeService = _interopRequireDefault(require("../services/impl/PhoneCodeService"));
var setPhoneCode = exports.setPhoneCode = function setPhoneCode(_ref) {
  var formName = _ref.formName,
    countryCode = _ref.countryCode,
    fieldName = _ref.fieldName,
    context = _ref.context,
    notificationsHelper = _ref.notificationsHelper;
  var phoneCodeService = new _PhoneCodeService["default"](context);
  return function (dispatch) {
    return phoneCodeService.getPhoneCode(countryCode, context).then(function (_ref2) {
      var data = _ref2.data;
      if (data.errors.length > 0) {
        _reactReduxToastr.toastr.error(notificationsHelper.getErrorMsg());
      } else {
        dispatch((0, _reduxForm.change)(formName, fieldName, data.content));
      }
    });
  };
};