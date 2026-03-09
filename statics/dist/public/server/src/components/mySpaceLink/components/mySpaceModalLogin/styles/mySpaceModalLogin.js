"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledModal = exports.ModalMySpaceDivContent = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _semanticUiReact = require("semantic-ui-react");
var ModalMySpaceDivContent = exports.ModalMySpaceDivContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-1b8sre-0"
})(["color:#555;text-align:center;font-family:Arial,sans-serif;font-size:12px;"]);
var StyledModal = exports.StyledModal = (0, _styledComponents["default"])(_semanticUiReact.Modal).withConfig({
  componentId: "sc-1b8sre-1"
})(["&&&{border-radius:0;box-shadow:none;width:360px;@media (max-width:640px){width:100%;height:100%;margin:-1em 0 0 0 !important;}.close{top:0;right:0;display:inline-block;width:18px;height:18px;overflow:hidden;opacity:0.2;margin:10px;&:hover{opacity:0.3;&::before,&::after{background-color:#000;}}&::before,&::after{content:\"\";position:absolute;height:2px;width:100%;top:50%;left:0;margin-top:-1px;background-color:#000 !important;}&::before{transform:rotate(45deg);}&::after{transform:rotate(-45deg);}}}overflow-y:auto;"]);