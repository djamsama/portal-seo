"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExhibitWithUsWrapper = exports.ContactUsTitle = exports.ContactUsSpanText = exports.ContactUsSpanNumber = exports.ContactUsDiv = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../../../../../../components/styles/responsive");
var _templateObject, _templateObject2, _templateObject3;
var ExhibitWithUsWrapper = exports.ExhibitWithUsWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-xtr6ns-0"
})(["align-items:center;width:50%;display:flex;justify-content:space-evenly;font-size:1.167em;font-weight:normal;", " ", ";"], _responsive.media.screenMdMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width:66%;\n  margin: 0 0.5em;\n  "]))), _responsive.media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    display:none;\n  "]))));
var ContactUsDiv = exports.ContactUsDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-xtr6ns-1"
})(["text-align:center;display:inline-flex;align-items:center;svg{padding-right:5px;width:35px;height:35px;", ""], _responsive.media.screenMdMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 27px !important;\n  height: 27px !important;\n  "]))));
var ContactUsTitle = exports.ContactUsTitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-xtr6ns-2"
})(["display:flex;text-align:left !important;white-space:nowrap;"]);
var ContactUsSpanNumber = exports.ContactUsSpanNumber = _styledComponents["default"].span.withConfig({
  componentId: "sc-xtr6ns-3"
})(["font-weight:bold;padding-right:0.1rem;color:", ";"], function (props) {
  return props.theme.mainLight;
});
var ContactUsSpanText = exports.ContactUsSpanText = _styledComponents["default"].span.withConfig({
  componentId: "sc-xtr6ns-4"
})(["color:#555659;text-transform:none;"]);