"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var NotFoundPageComponent = function NotFoundPageComponent() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "404"), /*#__PURE__*/_react["default"].createElement("h2", null, "Page not found, dude !"), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/"
  }, "Go back to the main page")));
};
var _default = exports["default"] = NotFoundPageComponent;