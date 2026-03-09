"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TranslationLink = exports.TranslationIcon = exports.TranslationAction = exports.MessageTranslationIcon = exports.LineDiv = exports.DownloadLink = exports.BetaInfo = exports.AutoTranslationInfo = exports.AutoTranslationIcon = exports.AttachmentsUl = exports.AttachmentsDiv = exports.AttachmentLi = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _button = _interopRequireDefault(require("../../../styles/button"));
var _link = _interopRequireDefault(require("../../../styles/link"));
var AttachmentsDiv = exports.AttachmentsDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-1bpjjgd-0"
})(["overflow-x:auto;"]);
var AttachmentsUl = exports.AttachmentsUl = _styledComponents["default"].ul.withConfig({
  componentId: "sc-1bpjjgd-1"
})(["margin-left:0px;list-style:none;padding-left:0;", ";"], function (props) {
  return props.selector === "quotation" ? "display:flex" : "display:inline";
});
var LineDiv = exports.LineDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-1bpjjgd-2"
})(["height:1px;margin:10px 0 8px;background-color:#dadbdf;"]);
var DownloadLink = exports.DownloadLink = (0, _styledComponents["default"])(_link["default"]).withConfig({
  componentId: "sc-1bpjjgd-3"
})(["display:inline;margin-left:10px;color:", ";:hover{color:", ";}white-space:nowrap;"], function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLight;
});
var AttachmentLi = exports.AttachmentLi = _styledComponents["default"].li.withConfig({
  componentId: "sc-1bpjjgd-4"
})(["margin-top:-10px;overflow:hidden;text-overflow:ellipsis;cursor:pointer;.disabled{cursor:not-allowed;pointer-events:none;}"]);
var TranslationAction = exports.TranslationAction = _styledComponents["default"].div.withConfig({
  componentId: "sc-1bpjjgd-5"
})(["float:right;margin-top:2px;color:#555;"]);
var BetaInfo = exports.BetaInfo = _styledComponents["default"].span.withConfig({
  componentId: "sc-1bpjjgd-6"
})(["margin-left:5px;padding:3px 6px;font-size:0.85em;text-transform:uppercase;color:#fff;background-color:#1094e9;border-radius:0 4px 0 4px;cursor:default;"]);
var AutoTranslationInfo = exports.AutoTranslationInfo = _styledComponents["default"].span.withConfig({
  componentId: "sc-1bpjjgd-7"
})(["display:block;margin-top:5px;font-style:italic;color:#999;"]);
var TranslationIcon = exports.TranslationIcon = _styledComponents["default"].i.withConfig({
  componentId: "sc-1bpjjgd-8"
})(["display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;color:#999;padding-right:4px;"]);
var AutoTranslationIcon = exports.AutoTranslationIcon = (0, _styledComponents["default"])(TranslationIcon).withConfig({
  componentId: "sc-1bpjjgd-9"
})([":before{content:\"\f05a\";}"]);
var MessageTranslationIcon = exports.MessageTranslationIcon = (0, _styledComponents["default"])(TranslationIcon).withConfig({
  componentId: "sc-1bpjjgd-10"
})([":before{content:\"\f1ab\";}"]);
var TranslationLink = exports.TranslationLink = (0, _styledComponents["default"])(_button["default"]).withConfig({
  componentId: "sc-1bpjjgd-11"
})(["color:#555;padding:0;:hover{text-decoration:underline;color:#555;}"]);