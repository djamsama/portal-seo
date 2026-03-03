"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _index = _interopRequireDefault(require("../index"));
// On a besoin de connecter ce composant uniquement au store redux qui est alimenté par le composant 'Suppliers'
var mapStateToProps = function mapStateToProps(application) {
  return {
    requestButtonDoc: application.suppliers && application.suppliers.requestButtonDoc ? application.suppliers.requestButtonDoc : null
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, {})(_index["default"]);