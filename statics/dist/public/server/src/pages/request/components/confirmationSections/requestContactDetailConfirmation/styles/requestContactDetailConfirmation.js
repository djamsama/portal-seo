"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperContact = exports.RequestContactWrapper = exports.RequestContactDetailWrapper = exports.ContactWhiteBlock = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../components/styles/responsive"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4; // $FlowFixMe
var media = _responsive["default"].media();
var RequestContactDetailWrapper = exports.RequestContactDetailWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1pauqdb-0"
})(["text-align:center;display:flex;flex-wrap:wrap;"]);
var RequestContactWrapper = exports.RequestContactWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1pauqdb-1"
})(["text-align:left;display:inline-block;width:100%;"]);
var ContactWhiteBlock = exports.ContactWhiteBlock = _styledComponents["default"].div.withConfig({
  componentId: "sc-1pauqdb-2"
})(["margin:auto;padding:20px;padding-top:20px;margin:5px auto;min-height:300px;width:1020px;", " ", " ", " overflow:hidden;position:relative;-webkit-transition:0.125s ease-in-out 0s;-moz-transition:0.125s ease-in-out 0s;-o-transition:0.125s ease-in-out 0s;transition:0.125s ease-in-out 0s;background-color:#fff;box-shadow:0 5px 5px rgba(0,0,0,0.1);"], media.screenLgMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: 970px;\n  "]))), media.screenMdMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    width:100%;\n  "]))), media.screenXsMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    min-width: inherit;\n    width:100%;\n  "]))));
var WrapperContact = exports.WrapperContact = _styledComponents["default"].div.withConfig({
  componentId: "sc-1pauqdb-3"
})(["display:block;", ""], media.screenXsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  display: block;\n  "]))));