"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnsubscribeMessageContainer = exports.UnsubscribeMessageConfirmation = exports.TitleH1Unsubscribe = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../../components/styles/responsive"));
var _templateObject, _templateObject2, _templateObject3;
var media = _responsive["default"].media();
var UnsubscribeMessageConfirmation = exports.UnsubscribeMessageConfirmation = _styledComponents["default"].div.withConfig({
  componentId: "sc-c9wbcg-0"
})(["width:100%;margin:auto;text-align:center;padding-bottom:15px;font-family:Arial;color:#555555;", ";", ";", ";"], media.screenLgMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      width: 50%;\n    "]))), media.screenMdMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 70%;\n    "]))), media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 100%;\n    "]))));
var TitleH1Unsubscribe = exports.TitleH1Unsubscribe = _styledComponents["default"].h1.withConfig({
  componentId: "sc-c9wbcg-1"
})(["text-align:center;color:", ";margin-bottom:20px;margin-top:50px;font-size:2.08em;font-weight:bold;"], function (props) {
  return props.theme.mainLight;
});
var UnsubscribeMessageContainer = exports.UnsubscribeMessageContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-c9wbcg-2"
})(["margin-bottom:20px;"]);