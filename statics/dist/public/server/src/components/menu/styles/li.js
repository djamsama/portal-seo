"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../styles/responsive"));
var _templateObject;
var media = _responsive["default"].media();
var Li = _styledComponents["default"].li.withConfig({
  componentId: "sc-1yh1py6-0"
})(["display:inline;padding:5px 0;", ";"], media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    -webkit-tap-highlight-color: transparent;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n    color: rgba(255, 255, 255, 0.7);\n    padding: 10px 0;\n    &:last-child {\n      border: none;\n    }\n  "]))));
// @component
var _default = exports["default"] = Li;