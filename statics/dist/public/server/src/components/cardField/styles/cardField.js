"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCardField = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../styles/responsive"));
var _templateObject;
var media = _responsive["default"].media();
var StyledCardField = exports.StyledCardField = _styledComponents["default"].div.withConfig({
  componentId: "sc-pxz6lp-0"
})(["border:none;display:grid;grid-auto-rows:1fr;label{cursor:pointer;margin:10px 12.5px;input{display:none;}input + div{background-color:white;border:2px solid transparent;box-shadow:0 0 8px rgba(0,0,0,0.1);color:#555;font-size:1.03em;height:100%;padding:15px 25px;text-align:center;", ";}input[type=\"checkbox\"]:checked + div{border-color:#bfbfbf;}input[type=\"radio\"]:checked + div{border-color:#1094e9;}input:checked + div{box-shadow:0 0 8px rgba(0,0,0,0.5);opacity:1;}}"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n        padding: 15px;\n        font-size: 0.9em;\n      "]))));