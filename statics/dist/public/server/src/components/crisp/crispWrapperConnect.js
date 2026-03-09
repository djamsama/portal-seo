"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _index = _interopRequireDefault(require("./index"));
var mapStateToProps = function mapStateToProps(_ref) {
  var shopGate = _ref.shopGate;
  return {
    shopProducts: (shopGate === null || shopGate === void 0 ? void 0 : shopGate.shopProducts) || [],
    productShopLoaded: shopGate && shopGate.shopGate ? shopGate.shopGate.productShopLoaded : false,
    productShop: shopGate && shopGate.shopGate ? shopGate.shopGate.productShop : undefined,
    legacy: !!(shopGate && shopGate.shopGate && shopGate.shopGate.urlShop)
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, null)(_index["default"]);