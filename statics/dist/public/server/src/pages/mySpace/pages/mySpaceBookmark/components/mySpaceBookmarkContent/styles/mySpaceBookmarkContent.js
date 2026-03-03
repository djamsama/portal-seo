"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransitionGroupWrapper = exports.EmptyItemText = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactTransitionGroup = require("react-transition-group");
var _responsive = _interopRequireDefault(require("../../../../../../../components/styles/responsive"));
var _mySpace = require("../../../../../styles/mySpace");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var media = _responsive["default"].media();
var EmptyItemText = exports.EmptyItemText = (0, _styledComponents["default"])(_mySpace.EmptyItem).withConfig({
  componentId: "sc-jb18qt-0"
})(["", ";"], media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: 100%;\n    text-align: justify;\n  "]))));
var TransitionGroupWrapper = exports.TransitionGroupWrapper = (0, _styledComponents["default"])(_reactTransitionGroup.TransitionGroup).withConfig({
  componentId: "sc-jb18qt-1"
})(["display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;flex-wrap:wrap;width:100%;", ";> div{position:relative;min-height:435px;padding-left:25px;padding-right:25px;padding-bottom:40px;flex-basis:25%;max-width:25%;display:flex;flex-direction:column;transition:all 0.5s ease-in-out;&:empty{flex-basis:0;padding:0;}", ";", ";", ";}"], media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    justify-content: center;\n  "]))), media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n      min-height: 380px;\n      flex-basis: 33.33%;\n      max-width: 33.33%;\n    "]))), media.screenXsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n      flex-basis: 50%;\n      max-width: 50%;\n    "]))), media.screenXxsMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n      flex-basis: 100%;\n      max-width: 100%;\n    "]))));