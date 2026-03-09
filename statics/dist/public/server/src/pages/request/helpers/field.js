"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCommentFieldDefault = exports.getFieldsByName = void 0;
var _find = _interopRequireDefault(require("lodash/find"));
var getFieldsByName = exports.getFieldsByName = function getFieldsByName(fields, name) {
  return (0, _find["default"])(fields, function (field) {
    return field.name === name;
  });
};
var isCommentFieldDefault = exports.isCommentFieldDefault = function isCommentFieldDefault(newComment, defaultComment) {
  var _newComment$replace, _defaultComment$repla;
  var text1 = newComment === null || newComment === void 0 || (_newComment$replace = newComment.replace(/(\r\n|\n|\r)/gm, "")) === null || _newComment$replace === void 0 ? void 0 : _newComment$replace.replaceAll(" ", "");
  var text2 = defaultComment === null || defaultComment === void 0 || (_defaultComment$repla = defaultComment.replace(/(\r\n|\n|\r)/gm, "")) === null || _defaultComment$repla === void 0 ? void 0 : _defaultComment$repla.replaceAll(" ", "");
  // eslint-disable-next-line eqeqeq
  if (text1 == text2) {
    return true;
  }
  return false;
};