"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.goBackTo = void 0;
var returnValue = -1;
if (false && window) {
  var formUrl = "/request/form.html?token=";
  if (window.document.referrer) {
    returnValue = window.document.referrer;
  }
  if (window.document.location.href.indexOf(formUrl) >= 0 && window.document.referrer.indexOf(formUrl) >= 0) returnValue = -2;
}
var goBackTo = exports.goBackTo = returnValue;