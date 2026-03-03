"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VeGeosuggestWrapper = exports.StyledIcon = exports.FormInput = exports.ErrorStyled = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _semanticUiReact = require("semantic-ui-react");
var ErrorStyled = exports.ErrorStyled = _styledComponents["default"].span.withConfig({
  componentId: "sc-p4drsn-0"
})(["color:red;font-size:10px;display:block;float:none;font-style:italic;"]);
var FormInput = exports.FormInput = _styledComponents["default"].div.withConfig({
  componentId: "sc-p4drsn-1"
})(["display:flex;flex-direction:column;span{display:flex;height:12px;line-height:16px;margin-top:0;}"]);
var VeGeosuggestWrapper = exports.VeGeosuggestWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-p4drsn-2"
})(["position:relative;&&&.has-error{input,textarea{&:focus{border:2px solid red;}border:2px solid red;}}"]);
var StyledIcon = exports.StyledIcon = (0, _styledComponents["default"])(_semanticUiReact.Icon).withConfig({
  componentId: "sc-p4drsn-3"
})(["position:absolute;right:0;top:7px;cursor:pointer;"]);