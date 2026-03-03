"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfoText = exports.InfoSectionContainer = exports.InfoIcon = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var InfoSectionContainer = exports.InfoSectionContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-15f8o34-0"
})(["width:100%;padding:5px;background-color:#f2e6f9;display:flex;align-items:center;margin-bottom:30px;position:relative;.info-icon-container{position:absolute;top:-15px;left:0;width:30px;height:30px;display:flex;align-items:center;justify-content:center;background-color:white;border-radius:50%;color:#b151e2;font-size:16px;}"]);
var InfoText = exports.InfoText = _styledComponents["default"].div.withConfig({
  componentId: "sc-15f8o34-1"
})(["flex:1;padding:10px;box-sizing:border-box;.info-title{margin:0;font-family:\"Open Sans\",Arial,sans-serif;font-size:14px;line-height:25px;color:#b151e2;font-weight:bold;}.info-description{margin:0;font-family:\"Open Sans\",Arial,sans-serif;font-size:14px;line-height:17px;color:#151515;}"]);
var InfoIcon = exports.InfoIcon = _styledComponents["default"].div.withConfig({
  componentId: "sc-15f8o34-2"
})(["padding:10px;background:white;i{font-size:20px;color:#b151e2;}"]);