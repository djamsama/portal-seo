"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderMyspaceWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../components/styles/responsive"));
var _stickyContainer = _interopRequireDefault(require("../../../../../components/stickyContainer"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var media = _responsive["default"].media();
var HeaderMyspaceWrapper = exports.HeaderMyspaceWrapper = (0, _styledComponents["default"])(_stickyContainer["default"]).withConfig({
  componentId: "sc-9h8306-0"
})(["border-bottom:none;background-color:none;height:90px;&.sticky{border-bottom:1px solid #E2E3E7;background-color:#FFF;padding:0 25px;", " ", " ", "}", " ", " ", ""], media.screenLgMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      width: 100%;\n    "]))), media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      height: auto;\n      width: 100%;\n    "]))), media.screenXsMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n      padding: 0;\n    "]))), media.screenLgMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 970px;\n  "]))), media.screenSmMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    height: inherit;\n    width: auto;\n  "]))), media.screenMdMin(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n    height: auto;\n  "]))));