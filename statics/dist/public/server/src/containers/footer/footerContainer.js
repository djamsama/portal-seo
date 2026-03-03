"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _footer = _interopRequireDefault(require("../../components/footer"));
var mapStateToProps = function mapStateToProps(_ref) {
  var Application = _ref.Application;
  return {};
};
var mapDispatchToProps = function mapDispatchToProps() {
  return {};
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_footer["default"]);