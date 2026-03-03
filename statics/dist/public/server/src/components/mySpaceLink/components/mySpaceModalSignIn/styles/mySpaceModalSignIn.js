"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledModal = exports.MySpaceHeaderModal = exports.ModalMySpaceTerms = exports.ModalMySpaceDivContent = exports.ModalMySpaceBenefits = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _semanticUiReact = require("semantic-ui-react");
var MySpaceHeaderModal = exports.MySpaceHeaderModal = _styledComponents["default"].div.withConfig({
  componentId: "sc-nul10f-0"
})(["font:24px \"Century Gothic\",Verdana,sans-serif;text-align:center;"]);
var ModalMySpaceDivContent = exports.ModalMySpaceDivContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-nul10f-1"
})(["display:flex;flex-direction:column;font-family:Arial,sans-serif;font-size:12px;text-align:center;color:#555;background-color:white;"]);
var ModalMySpaceBenefits = exports.ModalMySpaceBenefits = _styledComponents["default"].div.withConfig({
  componentId: "sc-nul10f-2"
})(["display:flex;flex-direction:column;padding:5px 0 0 25px;overflow:hidden;.benefits{list-style:none;padding-left:0;> li + li{padding-top:5px;}p{font-size:1.167em;word-break:break-word;}.image{width:75px;height:75px;margin:auto;}}.title{font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;font-size:1.5em;text-transform:uppercase;word-break:break-word;color:#484848;}"]);
var ModalMySpaceTerms = exports.ModalMySpaceTerms = _styledComponents["default"].div.withConfig({
  componentId: "sc-nul10f-3"
})(["margin-top:20px;font-size:0.95em;line-height:1.2em;font-style:italic;color:#999;"]);
var StyledModal = exports.StyledModal = (0, _styledComponents["default"])(_semanticUiReact.Modal).withConfig({
  componentId: "sc-nul10f-4"
})(["&&&{border-radius:0;box-shadow:none;width:600px;@media (max-width:640px){width:100%;height:100%;margin:-1em 0 0 0 !important;.modal-content-container{flex-direction:column;.captcha{align-self:center;}.benefits{> li{margin:25px 0;}.image{display:none;}}}}.close{top:0;right:0;display:inline-block;width:18px;height:18px;overflow:hidden;opacity:0.2;margin:10px;&:hover{opacity:0.3;&::before,&::after{background-color:#000;}}&::before,&::after{content:\"\";position:absolute;height:2px;width:100%;top:50%;left:0;margin-top:-1px;background-color:#000 !important;}&::before{transform:rotate(45deg);}&::after{transform:rotate(-45deg);}}}overflow-y:auto;"]);