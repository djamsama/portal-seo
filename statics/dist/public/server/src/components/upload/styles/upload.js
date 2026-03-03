"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadModalHeader = exports.UploadModalFooter = exports.UploadModalFilesList = exports.UploadModalContentContainer = exports.UploadModal = exports.ModalUploadDivContent = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _semanticUiReact = require("semantic-ui-react");
var _responsive = _interopRequireDefault(require("../../styles/responsive"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var uploadMaxMedia = _responsive["default"].specificMaxMedia(640);
var crossIcon = "\n    top: 0;\n    right: 0;\n    display: inline-block;\n    width: 18px;\n    height: 18px;\n    overflow: hidden;\n    opacity: 0.2;\n    margin: 10px;\n    &:hover {\n      opacity: 0.3;\n    }\n\n    &::before,\n    &::after {\n      content: \"\";\n      position: absolute;\n      height: 2px;\n      width: 100%;\n      top: 50%;\n      left: 0;\n      margin-top: -1px;\n      background-color: #000 !important;\n    }\n    &::before {\n      transform: rotate(45deg);\n    }\n    &::after {\n      transform: rotate(-45deg);\n    }\n";
var UploadModalHeader = exports.UploadModalHeader = _styledComponents["default"].div.withConfig({
  componentId: "sc-1c7h3sq-0"
})(["font:24px \"Century Gothic\",Verdana,sans-serif;text-align:center;margin-bottom:12px;"]);
var UploadModalFooter = exports.UploadModalFooter = _styledComponents["default"].div.withConfig({
  componentId: "sc-1c7h3sq-1"
})(["display:flex;justify-content:center;flex:1;width:100%;align-items:center;flex-direction:row;margin-top:20px;button{margin:0 5px;padding:12px;min-width:110px;&.cancel-btn{background-color:#ccc;}}", ";"], uploadMaxMedia(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin-top: auto;\n  "]))));
var UploadModalFilesList = exports.UploadModalFilesList = _styledComponents["default"].div.withConfig({
  componentId: "sc-1c7h3sq-2"
})(["width:100%;margin-top:10px;.Row{.FileDetails{width:100%;display:flex;flex-direction:row;line-height:20px;&:hover{.RemoveFile{visibility:visible;}}&:before{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;content:\"\f0c6\";font-size:20px;padding-right:10px;}.Filename{white-space:nowrap;text-overflow:ellipsis;max-width:100%;overflow:hidden;&.Validated{font-weight:700;}&.Failed{font-style:italic;text-decoration:line-through;color:red;}&.Pending{font-style:italic;}}}.RemoveFile{", " position:relative;margin:4px 0 0 8px;opacity:0.6;width:12px;height:12px;&:hover{opacity:0.4;cursor:pointer;}}}"], crossIcon);
var UploadModalContentContainer = exports.UploadModalContentContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-1c7h3sq-3"
})(["display:flex;flex-direction:column;flex:1;align-items:flex-start;text-align:left;overflow:hidden;.container{width:100%;}", ";"], uploadMaxMedia(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    overflow: visible;\n    margin-bottom: auto;\n  "]))));
var ModalUploadDivContent = exports.ModalUploadDivContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-1c7h3sq-4"
})(["display:flex;flex-direction:column;font-family:Arial,sans-serif;font-size:12px;text-align:center;color:#555;background-color:white;", ";.ProgressWrapper{display:flex;flex:1;flex-direction:row;align-items:center;margin-top:4px;}"], uploadMaxMedia(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    flex: 1;\n    margin: 10% 5% 5% 5%;\n    >div {\n      flex-grow: 0;\n    }\n  "]))));
var UploadModal = exports.UploadModal = _semanticUiReact.Modal ? (0, _styledComponents["default"])(_semanticUiReact.Modal).withConfig({
  componentId: "sc-1c7h3sq-5"
})(["&&&{border-radius:0;box-shadow:none;width:600px;overflow:hidden;", ";.close{", "}}overflow-y:auto;"], uploadMaxMedia(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n      /* Passage en full-screen. */\n      width: 100%;\n      height: 100%;\n      margin: -1em 0 0 0 !important;\n      .content {\n        display: flex;\n        height: 100%;\n      }\n    "]))), crossIcon) : "";