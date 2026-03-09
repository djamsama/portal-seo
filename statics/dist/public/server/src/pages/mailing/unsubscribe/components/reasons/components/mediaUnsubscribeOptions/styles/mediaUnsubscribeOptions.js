"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnsubscribePreferences = exports.UniversesListContainer = exports.SectionMediaTypeForm = exports.SectionMediaTypeDescription = exports.Container = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../../../../../../../components/styles/responsive");
var _templateObject, _templateObject2;
var Container = exports.Container = _styledComponents["default"].div.withConfig({
  componentId: "sc-1xk0jpa-0"
})(["width:850px;background-color:white;border-radius:3px;padding:40px;gap:20px;margin:auto;margin-bottom:40px;margin-top:40px;", ";"], _responsive.media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: calc(100% - 50px);\n  padding: 20px 10px;\n  margin-bottom: 20px;\n  margin-top: 20px;"]))));
var UnsubscribePreferences = exports.UnsubscribePreferences = _styledComponents["default"].div.withConfig({
  componentId: "sc-1xk0jpa-1"
})(["margin-bottom:20px;"]);
var SectionMediaTypeForm = exports.SectionMediaTypeForm = _styledComponents["default"].div.withConfig({
  componentId: "sc-1xk0jpa-2"
})(["padding:0 40px;opacity:", ";pointer-events:", ";"], function (_ref) {
  var selected = _ref.selected;
  return selected ? 1 : 0.5;
}, function (_ref2) {
  var selected = _ref2.selected;
  return selected ? "auto" : "none";
});
var UniversesListContainer = exports.UniversesListContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-1xk0jpa-3"
})(["display:grid;grid-template-columns:1fr 1fr;width:100%;", ";"], _responsive.media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  grid-template-columns: 1fr "]))));
var SectionMediaTypeDescription = exports.SectionMediaTypeDescription = _styledComponents["default"].div.withConfig({
  componentId: "sc-1xk0jpa-4"
})(["gap:10px;}"]);