"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleDiv = exports.StyledDT = exports.StyledDL = exports.StyledDD = exports.DLContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var TitleDiv = exports.TitleDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-qb9q7i-0"
})(["font-family:Century Gothic,Verdana,sans-serif;font-size:1.16em;font-weight:700;max-width:", ";"], function (props) {
  return props.maxWidht ? props.maxWidht : "100%";
});
var DLContainer = exports.DLContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-qb9q7i-1"
})(["background-color:#eee;-webkit-box-shadow:0 5px 5px rgba(0,0,0,0.1);box-shadow:0 5px 5px rgba(0,0,0,0.1);"]);
var StyledDL = exports.StyledDL = _styledComponents["default"].dl.withConfig({
  componentId: "sc-qb9q7i-2"
})(["padding-left:2px;padding-right:2px;padding-bottom:2px;"]);
var StyledDT = exports.StyledDT = _styledComponents["default"].dt.withConfig({
  componentId: "sc-qb9q7i-3"
})(["font-weight:bold;padding:10px;"]);
var StyledDD = exports.StyledDD = _styledComponents["default"].dd.withConfig({
  componentId: "sc-qb9q7i-4"
})(["background-color:#fff;margin-inline-start:0px;padding:10px;"]);