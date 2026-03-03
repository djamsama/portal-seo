"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverlayStyled = exports.IconStyled = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _veDesignSystem = require("ve-design-system");
var OverlayStyled = exports.OverlayStyled = _styledComponents["default"].div.withConfig({
  componentId: "sc-1saa92t-0"
})(["display:", ";position fixed;height:100%;width:100%!important;background-color:white;left:0;top:0;z-index:99999;overflow-y:scroll;.legend{display:block;padding:20px 20px 20px 20px;border-bottom:3px solid #F6F6F6;text-transform:uppercase;top:0;position:sticky;background-color:white;i.fa-close{position:absolute;text-align:right;right:15px;top:15px;font-size:25px;z-index:99999;}}ul{list-style:none;padding-left:20px;li{height:30px;width:100%;margin-top:15px;border-bottom:1px solid #F6F6F6;button{background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit;width:100%;text-align:left;}}}"], function (props) {
  return props.opened === true ? "block" : "none";
});
var IconStyled = exports.IconStyled = (0, _styledComponents["default"])(_veDesignSystem.Icon).withConfig({
  componentId: "sc-1saa92t-1"
})(["position:absolute;text-align:right;right:15px;top:15px;font-size:25px;"]);