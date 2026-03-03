"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConversationTitle = exports.ConversationHistory = exports.ConversationContent = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../styles/responsive"));
var _templateObject;
var mediaMinWidth = _responsive["default"].mediaMinWidth();
var media = _responsive["default"].media();
var ConversationTitle = exports.ConversationTitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-16jnp83-0"
})(["font-family:\"Century Gothic\",Verdana,sans-serif;font-size:14px;font-weight:700;"]);
var ConversationContent = exports.ConversationContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-16jnp83-1"
})(["margin-top:10px;margin-bottom:50px;background-color:#fff;border:1px solid #eee;-webkit-box-shadow:0 5px 5px rgba(0,0,0,0.1);box-shadow:0 5px 5px rgba(0,0,0,0.1);.notifBlock{min-height:21px;display:block;max-height:60px;}.notificationContent{font-style:italic;}"]);
var ConversationHistory = exports.ConversationHistory = _styledComponents["default"].div.withConfig({
  componentId: "sc-16jnp83-2"
})(["max-height:380px;min-height:50px;padding:20px;overflow-y:auto;scroll-behavior:smooth;", ";"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    max-height: 100%;\n"]))));