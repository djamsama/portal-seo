"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterBackLink = exports.BackLinks = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _link = _interopRequireDefault(require("../../../../styles/link"));
var BackLinks = exports.BackLinks = _styledComponents["default"].span.withConfig({
  componentId: "sc-omcmkg-0"
})(["margin:40px 20px 20px 20px;text-align:center;font-size:14px;display:block;"]);
var FooterBackLink = exports.FooterBackLink = (0, _styledComponents["default"])(_link["default"]).withConfig({
  componentId: "sc-omcmkg-1"
})(["display:inline;color:#555555;:hover{color:#999999;}"]);