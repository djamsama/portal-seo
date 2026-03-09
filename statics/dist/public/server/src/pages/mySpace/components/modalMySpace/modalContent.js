"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubmitButtonRight = exports.SubmitButtonLeft = exports.SubmitButton = exports.PopUpMessage = exports.PTrashText = exports.PSmall = exports.PModalText = exports.PItalic = exports.ModalTrashDivContent = exports.ModalTextContent = exports.ModalShareDivContent = exports.ModalQuotationDivContent = exports.ModalDivFolder = exports.ModalDivContent = exports.ModalContentContainer = exports.ModalButtonRight = exports.ModalButton = exports.ModalActions = exports.LastLi = exports.InputTextElement = exports.InputShareButtonText = exports.InputCheckboxElement = exports.ImgQuote = exports.Icon = exports.HeaderModal = exports.DivButtonsContent = exports.CloseGray = exports.Clear = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var grey = "#dadbdf";
var ModalDivFolder = exports.ModalDivFolder = _styledComponents["default"].div.withConfig({
  componentId: "sc-8u2kcm-0"
})(["border-color:", ";background-color:#fff;color:#555;padding:8px;border-style:solid;border-width:1px;ul{list-style:none;padding:0px 0px 10px 0px;}li{margin:0 0 5px;white-space:nowrap;}"], grey);
var ModalDivContent = exports.ModalDivContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-8u2kcm-1"
})(["padding:5px 9px;text-align:left;word-wrap:break-word;position:relative;font-family:Arial,sans-serif;font-size:10.5px;min-width:150px;"]);
var ModalShareDivContent = exports.ModalShareDivContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-8u2kcm-2"
})(["text-align:left;padding:0 0px 20px;font-family:\"century gothic\";background-color:white;"]);
var ModalTrashDivContent = exports.ModalTrashDivContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-8u2kcm-3"
})(["font-family:\"Century Gothic\";max-width:620px;min-width:350px;max-height:200px;text-align:center;background-color:white;border:#dadbdf solid 1px;box-shadow:0 2px 10px rgba(0,0,0,0.2);"]);
var ModalQuotationDivContent = exports.ModalQuotationDivContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-8u2kcm-4"
})(["font-family:\"Century Gothic\";max-width:620px;min-width:350px;max-height:400px;text-align:center;background-color:white;border:#dadbdf solid 1px;box-shadow:0 2px 10px rgba(0,0,0,0.2);"]);
var ModalTextContent = exports.ModalTextContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-8u2kcm-5"
})(["padding:0px 15px 5px 15px;box-sizing:border-box;"]);
var ModalContentContainer = exports.ModalContentContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-8u2kcm-6"
})(["display:flex;"]);
var PSmall = exports.PSmall = _styledComponents["default"].p.withConfig({
  componentId: "sc-8u2kcm-7"
})(["margin:0px;font-size:13px;"]);
var PItalic = exports.PItalic = _styledComponents["default"].p.withConfig({
  componentId: "sc-8u2kcm-8"
})(["font-size:12px;font-style:italic;font-weight:400;"]);
var InputTextElement = exports.InputTextElement = _styledComponents["default"].input.withConfig({
  componentId: "sc-8u2kcm-9"
})(["box-sizing:border-box;padding:2px;font-size:11px;color:#999999;border:", " solid 1px;position:relative;top:1px;background-color:#f4f4f4;"], grey);
var InputShareButtonText = exports.InputShareButtonText = _styledComponents["default"].input.withConfig({
  componentId: "sc-8u2kcm-10"
})(["padding:5px 10px;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;-os-border-radius:3px;-ms-border-radius:3px;font-size:14px;color:#666;border-color:#c3c3c4 #efefef #f5f5f6 #e0e0e0;border-style:solid;border-width:1px;background-color:#f4f4f4;height:27px;"]);
var InputCheckboxElement = exports.InputCheckboxElement = _styledComponents["default"].input.withConfig({
  componentId: "sc-8u2kcm-11"
})(["margin:3px 3px 3px 0;position:relative;top:3px;"]);
var LastLi = exports.LastLi = _styledComponents["default"].li.withConfig({
  componentId: "sc-8u2kcm-12"
})([""]);
var PopUpMessage = exports.PopUpMessage = _styledComponents["default"].div.withConfig({
  componentId: "sc-8u2kcm-13"
})(["margin:0;padding:0;border:0;font:inherit;font-size:100%;vertical-align:baseline;"]);
var SubmitButton = exports.SubmitButton = _styledComponents["default"].input.withConfig({
  componentId: "sc-8u2kcm-14"
})(["text-align:center;margin:auto;padding:10px 15px;text-align:center;font:15px \"Century Gothic\",Verdana,sans-serif;color:#fff;background-color:#555;border:none;display:block;width:85%;border-radius:4px;cursor:pointer;"]);
var SubmitButtonRight = exports.SubmitButtonRight = (0, _styledComponents["default"])(SubmitButton).withConfig({
  componentId: "sc-8u2kcm-15"
})(["float:right;width:", ";"], function (props) {
  return props.widthButton ? props.widthButton : "45%";
});
var SubmitButtonLeft = exports.SubmitButtonLeft = (0, _styledComponents["default"])(SubmitButton).withConfig({
  componentId: "sc-8u2kcm-16"
})(["float:left;width:", ";"], function (props) {
  return props.widthButton ? props.widthButton : "45%";
});
var ModalButton = exports.ModalButton = _styledComponents["default"].button.withConfig({
  componentId: "sc-8u2kcm-17"
})(["text-align:center;margin:auto;padding:10px 15px;text-align:center;white-space:nowrap;font:15px \"Century Gothic\",Verdana,sans-serif;color:#fff;background-color:#555;border:none;display:block;width:", ";border-radius:4px;cursor:pointer;"], function (props) {
  return props.widthButton ? props.widthButton : "60%";
});
var ModalButtonRight = exports.ModalButtonRight = (0, _styledComponents["default"])(ModalButton).withConfig({
  componentId: "sc-8u2kcm-18"
})(["float:right;width:", ";"], function (props) {
  return props.widthButton ? props.widthButton : "45%";
});
var DivButtonsContent = exports.DivButtonsContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-8u2kcm-19"
})(["margin:auto;height:40px;max-width:500px;margin-bottom:8%;"]);

// Extend de `DivButtonsContent` afin de ne pas interférer
// avec `modalDeclineQuotation` et `modalAcceptQuotation`.
var ModalActions = exports.ModalActions = (0, _styledComponents["default"])(DivButtonsContent).withConfig({
  componentId: "sc-8u2kcm-20"
})(["> button{margin-right:20px;}> button:last-of-type{margin-right:0;}"]);
var Clear = exports.Clear = _styledComponents["default"].div.withConfig({
  componentId: "sc-8u2kcm-21"
})(["clear:both;float:none;"]);
var PTrashText = exports.PTrashText = _styledComponents["default"].p.withConfig({
  componentId: "sc-8u2kcm-22"
})(["margin:25px 0;font-size:14px;line-height:20px;"]);
var PModalText = exports.PModalText = _styledComponents["default"].div.withConfig({
  componentId: "sc-8u2kcm-23"
})(["margin:25px 0;font-size:14px;line-height:20px;textarea.error{border-color:red;}"]);
var HeaderModal = exports.HeaderModal = _styledComponents["default"].div.withConfig({
  componentId: "sc-8u2kcm-24"
})(["margin:0 0 20px;padding:10px 40px;font:18px \"Century Gothic\",Verdana,sans-serif;text-align:center;background-color:#f2f2f2;"]);

// @TODO: Modifier le lien img pour l'avoir calculé depuis un fichier générique comme theme
var Icon = exports.Icon = _styledComponents["default"].div.withConfig({
  componentId: "sc-8u2kcm-25"
})(["background-image:url(", "/common/myspace/myspace-sprite.png);display:inline-block;"], function (props) {
  return props.theme.pathImg;
});
var ImgQuote = exports.ImgQuote = _styledComponents["default"].img.withConfig({
  componentId: "sc-8u2kcm-26"
})(["content:", ";"], function (props) {
  return props.visible ? "url(".concat(props.theme.pathImg, "/common/myspace/signed.png)") : "url(".concat(props.theme.pathImg, "/common/myspace/sign-it.png)");
});
var CloseGray = exports.CloseGray = (0, _styledComponents["default"])(Icon).withConfig({
  componentId: "sc-8u2kcm-27"
})(["background-position:-62px -148px;width:17px;height:17px;position:absolute;top:5px;right:15px;cursor:pointer;z-index:3;"]);