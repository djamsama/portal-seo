"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeadlineWrapper = exports.ExhibitionsWrapper = exports.Divider = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var ExhibitionsWrapper = exports.ExhibitionsWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-t9fkl6-0"
})(["padding:20px;"]);
var HeadlineWrapper = exports.HeadlineWrapper = _styledComponents["default"].p.withConfig({
  componentId: "sc-t9fkl6-1"
})(["font:normal normal bold 12px/20px Arial;margin-bottom:30px;"]);
var Divider = exports.Divider = _styledComponents["default"].div.withConfig({
  componentId: "sc-t9fkl6-2"
})(["width:100%;border:1px solid #f6f6f6;margin-top:30px;margin-bottom:30px;"]);