"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../styles/responsive"));
var _templateObject;
var media = _responsive["default"].media();
var MessageWrapper = exports.MessageWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-vef6c1-0"
})(["", ";white-space:normal;"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width:100%;\n    white-space: initial;\n    .infoMessage {\n      overflow: hidden;\n    }\n    .messageInfoAttachement {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: block;\n      padding: 10px;\n    }\n  "]))));