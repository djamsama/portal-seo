"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemComments = exports.BookmarkTextArea = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var BookmarkTextArea = exports.BookmarkTextArea = _styledComponents["default"].textarea.withConfig({
  componentId: "sc-q3v4pm-0"
})(["width:96%;height:30px;padding:2%;font-size:11px;font-family:Verdana,sans-serif;color:#999999;border:#dadbdf solid 1px;resize:none;"]);
var ItemComments = exports.ItemComments = _styledComponents["default"].div.withConfig({
  componentId: "sc-q3v4pm-1"
})(["width:99.9%;margin:10px 0 0;text-align:center;"]);