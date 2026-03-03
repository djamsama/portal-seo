"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExhibitProductButtonTitle = exports.ExhibitProductButton = exports.ExhibitButtonLabel = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../../../../../../components/styles/responsive");
var _templateObject;
var ExhibitProductButton = exports.ExhibitProductButton = _styledComponents["default"].div.withConfig({
  componentId: "sc-8qyp72-0"
})(["cursor:pointer;align-items:center;padding:1.1rem;background:", ";color:#fff;border:none;height:100%;width:30%;", ";display:flex;flex-direction:column;"], function (props) {
  return props.theme.gradient;
}, _responsive.media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width :100%;\n  "]))));
var ExhibitProductButtonTitle = exports.ExhibitProductButtonTitle = _styledComponents["default"].span.withConfig({
  componentId: "sc-8qyp72-1"
})(["cursor:pointer;font-size:1.4em;font-weight:bold;text-transform:none;"]);
var ExhibitButtonLabel = exports.ExhibitButtonLabel = _styledComponents["default"].span.withConfig({
  componentId: "sc-8qyp72-2"
})(["cursor:pointer;font-size:0.833em;font-weight:normal;text-transform:none;"]);