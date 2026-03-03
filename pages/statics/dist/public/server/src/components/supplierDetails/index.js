"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _supplierDetailsComponent = _interopRequireDefault(require("./supplierDetailsComponent"));
var mapStateToProps = function mapStateToProps(_ref) {
  var Application = _ref.Application;
  return {
    currentCurrency: Application.currentCurrency
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, null)(_supplierDetailsComponent["default"]);