"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnsubscribeChoiceDetail = exports.SectionMediaTypeTitle = exports.Container = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../../../../../../../../../components/styles/responsive");
var _templateObject;
var Container = exports.Container = _styledComponents["default"].div.withConfig({
  componentId: "sc-1hi0neh-0"
})(["display:grid;align-items:center;gap:3px;margin-top:10px;", ";"], _responsive.media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    gap: 10px"]))));
var SectionMediaTypeTitle = exports.SectionMediaTypeTitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-1hi0neh-1"
})(["display:inline-flex;align-items:center;gap:8px;align-items:baseline;"]);
var UnsubscribeChoiceDetail = exports.UnsubscribeChoiceDetail = _styledComponents["default"].h3.withConfig({
  componentId: "sc-1hi0neh-2"
})(["margin-top:0;text-align:left;font-size:16px;font-weight:700;color:#555555;"]);