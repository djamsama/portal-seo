"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledModal = exports.QuoteNameDiv = exports.ProductContainer = exports.ModalMySpaceRow = exports.ModalMySpaceQuotationViewer = exports.ModalMySpaceQuotationActions = exports.ModalMySpaceDivContent = exports.InfoText = exports.DateDiv = exports.BadQuoteLink = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _semanticUiReact = require("semantic-ui-react");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _button = _interopRequireDefault(require("../../../../../components/styles/button"));
var _link = _interopRequireDefault(require("../../../../../components/styles/link"));
var _responsive = _interopRequireDefault(require("../../../../../components/styles/responsive"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var media = _responsive["default"].media();
var maxMedia = _responsive["default"].specificMaxMedia(1240);
var ModalMySpaceDivContent = exports.ModalMySpaceDivContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-rgpvn8-0"
})(["color:#555;text-align:center;font-family:Arial,sans-serif;font-size:12px;"]);
var ModalMySpaceRow = exports.ModalMySpaceRow = _styledComponents["default"].div.withConfig({
  componentId: "sc-rgpvn8-1"
})(["display:flex;height:100%;overflow:hidden;&&&{", "}"], media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      /* Le d\xE9tail de la commande passe sous la visionneuse. */\n      flex-direction: column;\n      overflow: visible;\n    "]))));
var ModalMySpaceQuotationViewer = exports.ModalMySpaceQuotationViewer = _styledComponents["default"].div.withConfig({
  componentId: "sc-rgpvn8-2"
})(["display:block;width:75%;position:relative;", " .loading{top:50%;margin-top:-20px;}.notHandled{display:flex;height:100%;align-items:center;justify-content:center;flex-direction:column;background:#f9f9f9;.downloadIcon{font-size:4em;color:#000;opacity:0.2;margin-bottom:10px;}}.error{display:flex;height:100%;align-items:center;justify-content:center;flex-direction:column;background:#f9f9f9;color:#000;opacity:0.2;.errorIcon{font-size:4em;margin-bottom:10px;}}"], media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      /* Le d\xE9tail de la commande passe sous la visionneuse. */\n      padding-top: 38px;\n      width: 100%;\n      border-bottom: 5px solid rgb(50, 54, 57);\n      min-height: 50%;\n    }\n  "]))));
var ModalMySpaceQuotationActions = exports.ModalMySpaceQuotationActions = _styledComponents["default"].div.withConfig({
  componentId: "sc-rgpvn8-3"
})(["line-height:18px;width:25%;margin-top:50px !important;padding-right:25px;padding-left:25px;", ""], media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n      /* Le d\xE9tail de la commande passe sous la visionneuse. */\n      width: 100%;\n    }\n  "]))));
var QuoteNameDiv = exports.QuoteNameDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-rgpvn8-4"
})(["margin-bottom:10px;font-family:Arial,sans-serif;font-size:18px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"]);
var DateDiv = exports.DateDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-rgpvn8-5"
})(["margin-bottom:25px;font-family:Arial,sans-serif;font-size:12px;"]);
var InfoText = exports.InfoText = _styledComponents["default"].div.withConfig({
  componentId: "sc-rgpvn8-6"
})(["margin:0 0 10px;font-family:Arial,sans-serif;font-size:12px;color:#555;ul{color:#999;margin:0 0 0 15px;padding:0;list-style:none;> li{margin-top:5px;&:before{color:", ";font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;display:inline-block;content:\"\f105\";margin-right:5px;}}}"], function (props) {
  return props.theme.mainLight;
});
var BadQuoteLink = exports.BadQuoteLink = (0, _styledComponents["default"])(_link["default"]).withConfig({
  componentId: "sc-rgpvn8-7"
})(["font-size:15px;text-align:left;white-space:initial;color:#1094e9;margin-top:12.5px;padding:7px 12px;line-height:1.5em;:hover{text-decoration:underline;color:#1094e9;}"]);
var StyledModal = exports.StyledModal = (0, _styledComponents["default"])(_semanticUiReact.Modal).withConfig({
  componentId: "sc-rgpvn8-8"
})(["&&&{border-radius:0;box-shadow:none;width:1200px;height:800px;", ";.close{top:0;right:0;display:inline-block;width:18px;height:18px;overflow:hidden;opacity:0.2;margin:10px;&:hover{opacity:0.3;&::before,&::after{background-color:#000;}}&::before,&::after{content:\"\";position:absolute;height:2px;width:100%;top:50%;left:0;margin-top:-1px;background-color:#000 !important;}&::before{transform:rotate(45deg);}&::after{transform:rotate(-45deg);}}}overflow-y:auto;"], maxMedia(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n      /* Passage en full-screen. */\n      width: 100%;\n      height: 100%;\n      margin: -1em 0 0 0 !important;\n    "]))));
var ProductContainer = exports.ProductContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-rgpvn8-9"
})(["border:1px solid #eee;-webkit-box-shadow:0 5px 5px rgba(0,0,0,0.1);box-shadow:0 5px 5px rgba(0,0,0,0.1);padding:10px;font-size:10px;line-height:12px;text-transform:uppercase;text-align:center;margin-bottom:25px;", ";img{display:block;max-width:100%;margin:auto;}a{display:block;}.spec{color:#555;}.model{color:#999;}.logo{margin-top:10px;}"], media.screenXsMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n      display: none;\n  "]))));