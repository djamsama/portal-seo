"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequestDocumentationWrapper = exports.IconWithColor = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _veDesignSystem = require("ve-design-system");
var IconWithColor = exports.IconWithColor = (0, _styledComponents["default"])(_veDesignSystem.Icon).withConfig({
  componentId: "sc-6lqh76-0"
})(["stroke:", ";"], function (props) {
  return props.theme.mainLight;
});
var RequestDocumentationWrapper = exports.RequestDocumentationWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-6lqh76-1"
})(["text-align:center;margin-bottom:20px;}"]);