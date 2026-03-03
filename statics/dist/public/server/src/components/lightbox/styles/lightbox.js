"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.Header = exports.Content = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var handleHeaderOpacity = function handleHeaderOpacity(op) {
  return op ? "1" : "0";
};
var Wrapper = exports.Wrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1l5f22s-0"
})(["background-color:#171717;display:flex;flex-direction:column;height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:1001;"]);
var Header = exports.Header = _styledComponents["default"].div.withConfig({
  componentId: "sc-1l5f22s-1"
})(["align-items:end;background-color:rgba(23,23,23,0.7);box-sizing:border-box;padding:7px 14px;color:#fff;display:flex;flex-basis:0;justify-content:space-between;position:", ";top:0;left:0;opacity:", ";transition:opacity 0.3s ease-out;width:100%;z-index:1;"], function (props) {
  return props.isHoverable ? "fixed" : "relative";
}, function (props) {
  return props.isHoverable ? handleHeaderOpacity(props.isHovering) : "1";
});
var Content = exports.Content = _styledComponents["default"].div.withConfig({
  componentId: "sc-1l5f22s-2"
})(["height:100%;"]);