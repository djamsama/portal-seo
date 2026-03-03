"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomepageCounterWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../../../../components/styles/responsive");
var _templateObject;
var HomepageCounterWrapper = exports.HomepageCounterWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-8g7fn9-0"
})(["display:flex;flex-direction:row;width:100%;gap:80px;opacity:1;margin-top:10px;", ";@media (max-width:320px){gap:15px;}"], _responsive.media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      justify-content: center;\n      align-items: center;\n      gap: 20px;\n      padding-left: 26px;\n      padding-right: 26px;\n      margin-top: 16px;\n  "]))));