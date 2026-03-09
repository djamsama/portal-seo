"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoIconWrapper = exports.StyledModal = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _semanticUiReact = require("semantic-ui-react");
var VideoIconWrapper = exports.VideoIconWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1429xrd-0"
})(["cursor:pointer;"]);
var StyledModal = exports.StyledModal = (0, _styledComponents["default"])(_semanticUiReact.Modal).withConfig({
  componentId: "sc-1429xrd-1"
})(["&&{text-align:center;background-color:black;width:fit-content !important;height:fit-content !important;}"]);