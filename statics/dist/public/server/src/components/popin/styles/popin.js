"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledPopin = void 0;
var _semanticUiReact = require("semantic-ui-react");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var StyledPopin = exports.StyledPopin = (0, _styledComponents["default"])(_semanticUiReact.Modal).withConfig({
  componentId: "sc-1w5jrt-0"
})(["&&{border-radius:0;box-shadow:none;overflow-y:auto;text-align:center;@media (max-width:400px){width:100%;height:100%;}.close{top:0;right:0;width:18px;height:18px;opacity:0.2;margin:10px;&:hover{opacity:0.3;}&::before,&::after{content:\"\";position:absolute;height:2px;width:100%;top:50%;left:0;margin-top:-1px;background-color:#000 !important;}&::before{transform:rotate(45deg);}&::after{transform:rotate(-45deg);}}h1{margin-bottom:30px;font-size:20px;color:#1094e9;font-family:Arial,sans-serif;font-weight:100;}}"]);