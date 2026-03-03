"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subtitle = exports.List = exports.Company = exports.AddressTitle = exports.AddressContent = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var List = exports.List = _styledComponents["default"].ul.withConfig({
  componentId: "sc-1gma81w-0"
})(["list-style:none;margin:0 0 20px 10px;padding-left:0px;li{padding:0px;margin-top:2.5px;}"]);
var AddressTitle = exports.AddressTitle = _styledComponents["default"].li.withConfig({
  componentId: "sc-1gma81w-1"
})(["display:flex;justify-content:space-between;a{float:right;}"]);
var Subtitle = exports.Subtitle = _styledComponents["default"].span.withConfig({
  componentId: "sc-1gma81w-2"
})(["margin-bottom:20px;font-size:1.167em;font-weight:700;"]);
var Company = exports.Company = _styledComponents["default"].li.withConfig({
  componentId: "sc-1gma81w-3"
})(["margin-bottom:5px;font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;font-size:1.333em;text-transform:uppercase;"]);
var AddressContent = exports.AddressContent = _styledComponents["default"].li.withConfig({
  componentId: "sc-1gma81w-4"
})(["margin:15px 0 !important;p{line-height:0.5;}.zipCodeAddress{line-height:1.2;}"]);