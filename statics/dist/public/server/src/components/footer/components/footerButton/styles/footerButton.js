"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterLinkWrapper = exports.FooterButtonLink = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _button = _interopRequireDefault(require("../../../../styles/button"));
var _link = _interopRequireDefault(require("../../../../styles/link"));
var _responsive = require("../../../../styles/responsive");
var _templateObject, _templateObject2;
var FooterLinkWrapper = exports.FooterLinkWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1e4k7y5-0"
})(["float:left;white-space:nowrap;display:flex;align-items:center;min-width:180px;max-width:200px;min-height:140px;text-transform:uppercase;background-color:#4d4d4d;border-right:#555 solid 1px;padding:0;", ""], _responsive.media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    justify-content: center;\n    padding: 7px 10px 0px;\n    white-space: break-spaces;\n    line-height: 1.2em;\n    max-width: none;\n    min-height: auto;\n    float: none;\n  "]))));
var FooterButtonLink = exports.FooterButtonLink = (0, _styledComponents["default"])(_link["default"]).withConfig({
  componentId: "sc-1e4k7y5-1"
})(["display:block;line-height:5em;text-transform:uppercase;width:100%;", ";border-top:none;border-left:", ";"], _responsive.media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    line-height: 2em;\n    border-top: ", ";\n    border-left: none;\n    padding-top: 7px;\n  "])), function (props) {
  return props.separator ? "rgba(255, 255, 255, 0.25) solid 1px" : "none";
}), function (props) {
  return props.separator ? "rgba(255, 255, 255, 0.25) solid 1px" : "none";
});