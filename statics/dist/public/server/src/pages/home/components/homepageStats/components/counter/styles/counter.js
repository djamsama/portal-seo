"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomepageCounterText = exports.HomepageCounterNumber = exports.HomepageCounterLabel = exports.HomepageCounter = exports.CounterIcon = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../../../../../../components/styles/responsive");
var _templateObject, _templateObject2, _templateObject3;
var HomepageCounter = exports.HomepageCounter = _styledComponents["default"].div.withConfig({
  componentId: "sc-hwbmny-0"
})(["display:flex;flex-direction:row;align-items:center;width:fit-content;gap:10px;opacity:1;"]);
var HomepageCounterText = exports.HomepageCounterText = _styledComponents["default"].div.withConfig({
  componentId: "sc-hwbmny-1"
})(["display:flex;flex-direction:column;width:fit-content;opacity:1;"]);
var HomepageCounterNumber = exports.HomepageCounterNumber = _styledComponents["default"].p.withConfig({
  componentId: "sc-hwbmny-2"
})(["color:#424242;opacity:1;font-family:Arial,sans-serif;font-size:36px;font-style:normal;font-weight:400;text-shadow:0 0.5px currentColor;line-height:100%;letter-spacing:0;display:flex;align-items:center;white-space:nowrap;margin:0;", ";"], _responsive.media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      font-size: 20px;\n  "]))));
var HomepageCounterLabel = exports.HomepageCounterLabel = _styledComponents["default"].p.withConfig({
  componentId: "sc-hwbmny-3"
})(["color:#555555;opacity:1;font-family:Arial,sans-serif;font-size:18px;font-style:normal;line-height:100%;letter-spacing:0;display:flex;align-items:center;white-space:nowrap;margin:0;", ";@media (max-width:320px){white-space:normal;}"], _responsive.media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      font-size: 10px;\n  "]))));
var CounterIcon = exports.CounterIcon = _styledComponents["default"].i.withConfig({
  componentId: "sc-hwbmny-4"
})(["width:64px !important;height:64px !important;display:inline-block;background-image:url(", ");background-repeat:no-repeat;background-size:contain;background-position:center;", ""], function (props) {
  return "".concat(props.theme.pathImg, "/common/pictos/").concat(props.icon);
}, _responsive.media.screenXsMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 36px !important;\n    height: 36px !important;\n  "]))));