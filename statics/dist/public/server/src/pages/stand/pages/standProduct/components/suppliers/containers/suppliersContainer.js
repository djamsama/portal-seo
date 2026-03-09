"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _index = _interopRequireDefault(require("../index"));
var _suppliersActions = require("../../../../../../../actions/suppliersActions");
var _geolocActions = require("../../../../../../../actions/geolocActions");
var mapStateToProps = function mapStateToProps(application) {
  var _application$geoloc$g, _application$geoloc;
  return {
    isLoading: application.suppliers && application.suppliers.isLoading,
    suppliers: application.suppliers && application.suppliers.suppliers ? application.suppliers.suppliers : [],
    drdCustomer: application.suppliers && application.suppliers.drdCustomer ? application.suppliers.drdCustomer : false,
    geolocChanged: (_application$geoloc$g = (_application$geoloc = application.geoloc) === null || _application$geoloc === void 0 ? void 0 : _application$geoloc.geolocChanged) !== null && _application$geoloc$g !== void 0 ? _application$geoloc$g : false
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    getSuppliers: _suppliersActions.getSuppliers,
    setGeolocChanged: _geolocActions.setGeolocChanged
  }, dispatch);
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_index["default"]);