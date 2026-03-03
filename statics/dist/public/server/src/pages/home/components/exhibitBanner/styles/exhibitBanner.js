"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExhibitBannerWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../../../../components/styles/responsive");
var _link = require("../../../../../components/link");
var _templateObject;
var ExhibitBannerWrapper = exports.ExhibitBannerWrapper = (0, _styledComponents["default"])(_link.VeLink).withConfig({
  componentId: "sc-1uvsk32-0"
})(["", ";background-color:#fff;box-shadow:0 0px 4px -1px ", ";height:60px;margin:3% 0 3% 0;display:flex;align-items:center;justify-content:space-between;"], _responsive.media.screenMdMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n     width :100%;\n  "]))), function (props) {
  return props.theme.mainLight;
});