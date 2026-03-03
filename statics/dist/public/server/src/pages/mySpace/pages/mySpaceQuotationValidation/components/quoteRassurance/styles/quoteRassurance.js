"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuoteRassuranceTel = exports.QuoteRassuranceTeam = exports.QuoteRassuranceQuestion = exports.QuoteRassuranceMail = exports.QuoteRassuranceHelp = exports.QuoteRassuranceContent = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var QuoteRassuranceContent = exports.QuoteRassuranceContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-1nzxhe-0"
})(["display:flex;justify-content:flex-start;padding-top:5px;margin:25px 0 20px 0;"]);
var QuoteRassuranceHelp = exports.QuoteRassuranceHelp = _styledComponents["default"].div.withConfig({
  componentId: "sc-1nzxhe-1"
})(["padding-right:20px;width:50px;text-align:center;.st0{fill:", ";}"], function (props) {
  return props.theme.mainLight;
});
var QuoteRassuranceQuestion = exports.QuoteRassuranceQuestion = _styledComponents["default"].div.withConfig({
  componentId: "sc-1nzxhe-2"
})(["font-size:16px;font-weight:bold;margin:0px 0 10px;"]);
var QuoteRassuranceTeam = exports.QuoteRassuranceTeam = _styledComponents["default"].div.withConfig({
  componentId: "sc-1nzxhe-3"
})(["margin-top:10px;"]);
var QuoteRassuranceMail = exports.QuoteRassuranceMail = _styledComponents["default"].div.withConfig({
  componentId: "sc-1nzxhe-4"
})(["margin-top:2px;display:flex;justify-content:flex-start;i{width:13px;margin:3px 10px 0 0;}"]);
var QuoteRassuranceTel = exports.QuoteRassuranceTel = _styledComponents["default"].div.withConfig({
  componentId: "sc-1nzxhe-5"
})(["margin-top:2px;display:flex;justify-content:flex-start;i{width:13px;margin:3px 10px 0 0;}"]);