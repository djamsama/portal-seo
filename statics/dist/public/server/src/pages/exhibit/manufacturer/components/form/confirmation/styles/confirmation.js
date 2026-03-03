"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledModal = exports.ModalTextContent = exports.ModalContent = exports.ButtonWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _semanticUiReact = require("semantic-ui-react");
var ModalContent = exports.ModalContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-1m22kho-0"
})(["display:flex;flex-direction:column;font-family:\"Century Gothic\",Verdana,sans-serif;font-size:12px;text-align:center;color:#555;background-color:white;&:before{content:\"\";display:block;height:30px;background-image:url(", "/common/request-form/request-sprite.gif);background-position:0 -226px;background-repeat:no-repeat;margin:-21px 0 0 -21px;}&:after{content:\"\";display:block;background:url(", "/common/request-form/request-sprite.gif) no-repeat scroll left top transparent;height:30px;margin:15px 0 -21px -21px;}"], function (props) {
  return props.theme.pathImg;
}, function (props) {
  return props.theme.pathImg;
});
var ButtonWrapper = exports.ButtonWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1m22kho-1"
})(["margin:25px auto 0;width:auto;padding:10px 20px;"]);
var ModalTextContent = exports.ModalTextContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-1m22kho-2"
})(["padding:0px 15px 5px 15px;margin-top:20px;font-size:15px;text-align:center;line-height:20px;box-sizing:border-box;"]);
var StyledModal = exports.StyledModal = (0, _styledComponents["default"])(_semanticUiReact.Modal).withConfig({
  componentId: "sc-1m22kho-3"
})(["&&&{border-radius:0;box-shadow:none;width:600px;@media (max-width:640px){width:100%;height:100%;margin:-1em 0 0 0 !important;.modal-content-container{flex-direction:column;.captcha{align-self:center;}.benefits{> li{margin:25px 0;}.image{display:none;}}}}.close{top:0;right:0;display:inline-block;width:18px;height:18px;overflow:hidden;opacity:0.2;margin:10px;&:hover{opacity:0.3;&::before,&::after{background-color:#000;}}&::before,&::after{content:\"\";position:absolute;height:2px;width:100%;top:50%;left:0;margin-top:-1px;background-color:#000 !important;}&::before{transform:rotate(45deg);}&::after{transform:rotate(-45deg);}}}overflow-y:auto;"]);