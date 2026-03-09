"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecondPart = exports.FunnelBody = exports.FirstPart = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../components/styles/responsive"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var media = _responsive["default"].media();
var FunnelBody = exports.FunnelBody = _styledComponents["default"].div.withConfig({
  componentId: "sc-1i6eb20-0"
})(["display:flex;", ";"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    flex-direction: column;\n    margin-left: 20px;\n    margin-right: 20px;\n  "]))));
var FirstPart = exports.FirstPart = _styledComponents["default"].div.withConfig({
  componentId: "sc-1i6eb20-1"
})(["flex:7;padding-right:25px;", ";", ";"], media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    padding-right: 0;\n  "]))), media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    /* fifty/fifty. */\n    flex: 1 1 0px\n  "]))));
var SecondPart = exports.SecondPart = _styledComponents["default"].div.withConfig({
  componentId: "sc-1i6eb20-2"
})(["flex:3;padding-left:25px;", ";", ";"], media.screenXsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    padding-left: 0;\n  "]))), media.screenSmMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    /* fifty/fifty. */\n    flex: 1 1 0px;\n  "]))));