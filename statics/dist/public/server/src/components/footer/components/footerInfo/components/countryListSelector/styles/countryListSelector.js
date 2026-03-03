"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectCountryWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../styles/responsive"));
var _templateObject;
var media = _responsive["default"].media();
var SelectCountryWrapper = exports.SelectCountryWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1uvw7u1-0"
})(["display:inline-block;select{height:auto;padding:0;font-size:1em;color:#555659;background:rgba(255,255,255,0.75);border:rgba(255,255,255,0.75) solid 1px;border-radius:0;}", ";"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: none;\n  "]))));