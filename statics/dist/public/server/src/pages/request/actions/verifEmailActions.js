"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onVerifEmail = void 0;
var _verifEmailService = _interopRequireDefault(require("../../../services/impl/verifEmailService"));
/* eslint-disable no-throw-literal */var onVerifEmail = exports.onVerifEmail = function onVerifEmail(values, csrfToken) {
  if (values && values.ajaxRequestForm && values.ajaxRequestForm.email && csrfToken) {
    var verifEmailService = new _verifEmailService["default"](csrfToken);
    return verifEmailService.verifEmail(values.ajaxRequestForm.email.replace(new RegExp("\\+", "g"), "%2B")).then(function (_ref) {
      var data = _ref.data;
      if (data && data.content) {
        // async validation de redux-form pour faire remonter l"erreur nécessite de throw sans erreur sous cette forme
        throw {
          ajaxRequestForm: {
            email: {
              id: null,
              txt: data.content,
              values: {},
              warning: true
            }
          }
        };
      }
    });
  }
  return Promise.resolve(true);
};