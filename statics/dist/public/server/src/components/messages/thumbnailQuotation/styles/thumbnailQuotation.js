"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThumbnailName = exports.ThumbnailImg = exports.ThumbnailDiv = exports.IconDiv = exports.AttachmentName = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var ThumbnailImg = exports.ThumbnailImg = _styledComponents["default"].img.withConfig({
  componentId: "sc-1d1t7tt-0"
})(["max-width:80px;margin-top:-5px;"]);
var ThumbnailDiv = exports.ThumbnailDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-1d1t7tt-1"
})(["width:100px;"]);
var ThumbnailName = exports.ThumbnailName = _styledComponents["default"].p.withConfig({
  componentId: "sc-1d1t7tt-2"
})(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:85px;"]);
var AttachmentName = exports.AttachmentName = _styledComponents["default"].span.withConfig({
  componentId: "sc-1d1t7tt-3"
})(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-left:5px;"]);
var IconDiv = exports.IconDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-1d1t7tt-4"
})(["color:", ";"], function (props) {
  return props.theme.mainLight;
});