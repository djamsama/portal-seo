"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submit = void 0;
var _reduxForm = require("redux-form");
var _modalToModifyRefusedQuoteService = _interopRequireDefault(require("../services/modalToModifyRefusedQuoteService"));
var submit = exports.submit = function submit(context, leadContext, values) {
  return new _modalToModifyRefusedQuoteService["default"](context).submit(leadContext, values).then(function (_ref) {
    var data = _ref.data;
    if (data.responseStatus !== 200) {
      throw new _reduxForm.SubmissionError({
        _error: data.errors[0]
      });
    }
  }, function (err) {
    throw new _reduxForm.SubmissionError(err);
  });
};