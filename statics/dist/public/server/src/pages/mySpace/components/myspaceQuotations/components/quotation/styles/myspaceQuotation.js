"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleDiv = exports.QuoteNameDiv = exports.QuoteInformationDiv = exports.QuoteContentDiv = exports.QuotationButton = exports.OpenViewerDiv = exports.OpenPDFViewerButton = exports.InsetDiv = exports.ImgLogo = exports.DeclineButton = exports.DateStatusDiv = exports.DateStatusCheckedDiv = exports.DateReceivedDiv = exports.CustomDeclineButton = exports.CustomAcceptButton = exports.CommandNumber = exports.ActionsDiv = exports.AcceptButton = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
/* import Responsive from "~/components/styles/responsive";

const media = Responsive.media(); */

var InsetDiv = exports.InsetDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-1lojddi-0"
})(["margin-bottom:25px;padding:10px;text-align:left;background-color:#fff;border:1px solid #eee;-webkit-box-shadow:0 5px 5px rgba(0,0,0,0.1);box-shadow:0 5px 5px rgba(0,0,0,0.1);cursor:", ";"], function (props) {
  return props.clickable ? "pointer" : "inherit";
});
var QuoteNameDiv = exports.QuoteNameDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-1lojddi-1"
})(["margin-bottom:5px;font-size:14px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1em;"]);
var QuoteInformationDiv = exports.QuoteInformationDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-1lojddi-2"
})(["margin-left:15px;flex-grow:1;min-width:0;overflow:hidden;text-overflow:ellipsis;"]);
var QuoteContentDiv = exports.QuoteContentDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-1lojddi-3"
})(["display:flex;align-items:center;cursor:", ";"], function (props) {
  return props.clickable ? "pointer" : "inherit";
});
var DateReceivedDiv = exports.DateReceivedDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-1lojddi-4"
})(["color:#999;font-size:0.9em;line-height:12px;"]);
var CommandNumber = exports.CommandNumber = _styledComponents["default"].div.withConfig({
  componentId: "sc-1lojddi-5"
})(["color:#999;font-size:0.9em;line-height:12px;"]);
var DateStatusDiv = exports.DateStatusDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-1lojddi-6"
})(["font-size:0.9em;line-height:12px;"]);
var DateStatusCheckedDiv = exports.DateStatusCheckedDiv = (0, _styledComponents["default"])(DateStatusDiv).withConfig({
  componentId: "sc-1lojddi-7"
})(["color:#45b938;"]);
var OpenViewerDiv = exports.OpenViewerDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-1lojddi-8"
})(["display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;"]);
var ActionsDiv = exports.ActionsDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-1lojddi-9"
})(["display:block;justify-content:center;"]);
var QuotationButton = exports.QuotationButton = _styledComponents["default"].button.withConfig({
  componentId: "sc-1lojddi-10"
})(["display:inline-block;padding:7px 12px;font-size:1em;line-height:1.5em;text-align:center;white-space:nowrap;border:none;cursor:pointer;margin:10px 3px 0;font-family:\"Century Gothic\",Verdana,sans-serif;border-radius:4px;vertical-align:middle;-webkit-transition:0.25s ease-in-out 0s;transition:0.25s ease-in-out 0s;"]);
var OpenPDFViewerButton = exports.OpenPDFViewerButton = (0, _styledComponents["default"])(QuotationButton).withConfig({
  componentId: "sc-1lojddi-11"
})(["color:#fff;background-color:", ";white-space:normal;word-wrap:break-word;:hover{background-color:", ";}margin:0 0 0 5px;"], function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLightHover;
});
var AcceptButton = exports.AcceptButton = (0, _styledComponents["default"])(QuotationButton).withConfig({
  componentId: "sc-1lojddi-12"
})(["color:#fff;background-color:#555;border:1px solid #555;:hover{background-color:#959595;border:1px solid #aaa;}"]);
var DeclineButton = exports.DeclineButton = (0, _styledComponents["default"])(QuotationButton).withConfig({
  componentId: "sc-1lojddi-13"
})(["color:#555;background-color:transparent;border:1px solid #555;:hover{color:#aaa;border:1px solid #aaa;}"]);
var TitleDiv = exports.TitleDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-1lojddi-14"
})(["font-family:\"Century Gothic\",Verdana,sans-serif;font-size:14px;font-weight:700;padding-bottom:10px;"]);
var ImgLogo = exports.ImgLogo = _styledComponents["default"].img.withConfig({
  componentId: "sc-1lojddi-15"
})(["max-width:40px;"]);
var CustomAcceptButton = exports.CustomAcceptButton = (0, _styledComponents["default"])(AcceptButton).withConfig({
  componentId: "sc-1lojddi-16"
})(["&{disabled:", ";opacity:", ";cursor:", ";}"], function (props) {
  return props.disabled ? "disabled" : false;
}, function (props) {
  return props.disabled ? ".25" : "1";
}, function (props) {
  return props.disabled ? "not-allowed" : "pointer";
});
var CustomDeclineButton = exports.CustomDeclineButton = (0, _styledComponents["default"])(DeclineButton).withConfig({
  componentId: "sc-1lojddi-17"
})(["&{disabled:", ";opacity:", ";cursor:", ";}"], function (props) {
  return props.disabled ? "disabled" : false;
}, function (props) {
  return props.disabled ? ".25" : "1";
}, function (props) {
  return props.disabled ? "not-allowed" : "pointer";
});