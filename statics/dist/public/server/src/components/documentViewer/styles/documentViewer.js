"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DownloadLink = exports.DocumentViewerDivContent = exports.DocumentPreview = void 0;
var _semanticUiReact = require("semantic-ui-react");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _button = _interopRequireDefault(require("../../styles/button"));
var _link = _interopRequireDefault(require("../../styles/link"));
var _responsive = _interopRequireDefault(require("../../styles/responsive"));
var media = _responsive["default"].media();
var maxMedia = _responsive["default"].specificMaxMedia(1240);
var DocumentPreview = exports.DocumentPreview = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ncq9ul-0"
})(["height:100%;"]);
var DocumentViewerDivContent = exports.DocumentViewerDivContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ncq9ul-1"
})(["height:100%;.loading{top:50%;margin-top:-20px;}.notHandled{display:flex;height:100%;align-items:center;justify-content:center;flex-direction:column;background:#f9f9f9;text-align:center;.downloadIcon{font-size:4em;color:#000;opacity:0.2;margin-bottom:10px;}}.error{display:flex;height:100%;align-items:center;justify-content:center;flex-direction:column;background:#f9f9f9;color:rgba(0,0,0,0.2);.errorIcon{font-size:4em;margin-bottom:10px;}}.notSupported{margin:30px;font-size:16px;}"]);
var DownloadLink = exports.DownloadLink = (0, _styledComponents["default"])(_link["default"]).withConfig({
  componentId: "sc-1ncq9ul-2"
})(["display:inline;margin-left:10px;color:", ";:hover{color:", ";}white-space:nowrap;"], function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLight;
});