"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuoteSummarySum = exports.QuoteSummarySeparator = exports.QuoteSummaryItem = exports.QuoteSummaryContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var QuoteSummaryContainer = exports.QuoteSummaryContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-fk5v4x-0"
})(["margin-bottom:30px;background-color:#f6f6f6;padding:1px 0px 1px 0px;"]);
var QuoteSummaryItem = exports.QuoteSummaryItem = _styledComponents["default"].div.withConfig({
  componentId: "sc-fk5v4x-1"
})(["margin:20px 16px;display:flex;justify-content:space-between;font-size:14px;"]);
var QuoteSummarySum = exports.QuoteSummarySum = _styledComponents["default"].div.withConfig({
  componentId: "sc-fk5v4x-2"
})(["margin:20px 16px;display:flex;justify-content:space-between;font-weight:bold;font-size:16px;"]);
var QuoteSummarySeparator = exports.QuoteSummarySeparator = _styledComponents["default"].div.withConfig({
  componentId: "sc-fk5v4x-3"
})(["border-bottom:1px solid #e9e9e9;"]);