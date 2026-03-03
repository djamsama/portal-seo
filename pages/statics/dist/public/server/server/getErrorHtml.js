"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getErrorHtml = void 0;
var getErrorHtml = exports.getErrorHtml = function getErrorHtml(ex) {
  return "<h1>Error!</h1><p>".concat(ex.message, "</p>");
};