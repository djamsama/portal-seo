"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BlockLegend", {
  enumerable: true,
  get: function get() {
    return _blockLegend["default"];
  }
});
Object.defineProperty(exports, "BlockPrice", {
  enumerable: true,
  get: function get() {
    return _blockPrice["default"];
  }
});
Object.defineProperty(exports, "Price", {
  enumerable: true,
  get: function get() {
    return _priceContainer["default"];
  }
});
var _priceContainer = _interopRequireDefault(require("./components/price/priceContainer"));
var _blockPrice = _interopRequireDefault(require("./components/blockPrice"));
var _blockLegend = _interopRequireDefault(require("./components/blockLegend"));