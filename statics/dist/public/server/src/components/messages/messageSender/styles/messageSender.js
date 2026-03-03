"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageSenderResponderDiv = exports.MessageSenderInitiatorDiv = exports.MessageSenderDiv = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var MessageSenderDiv = exports.MessageSenderDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-1loxep-0"
})(["font-style:italic;font-family:Arial,sans-serif;font-size:12px;line-height:1.5em;display:block;color:#999;"]);
var MessageSenderInitiatorDiv = exports.MessageSenderInitiatorDiv = (0, _styledComponents["default"])(MessageSenderDiv).withConfig({
  componentId: "sc-1loxep-1"
})(["float:right;text-align:right;"]);
var MessageSenderResponderDiv = exports.MessageSenderResponderDiv = (0, _styledComponents["default"])(MessageSenderDiv).withConfig({
  componentId: "sc-1loxep-2"
})(["float:left;text-align:left;"]);