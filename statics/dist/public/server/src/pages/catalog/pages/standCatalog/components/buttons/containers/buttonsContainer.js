"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _index = _interopRequireDefault(require("../index"));
var _catalogsActions = require("../../../../../../../actions/catalogsActions");
var _geolocActions = require("../../../../../../../actions/geolocActions");
var mapStateToProps = function mapStateToProps(application) {
  var _application$geoloc$g, _application$geoloc;
  return {
    isLoading: application.catalogs && application.catalogs.isLoading,
    catalogButtons: application.catalogs ? application.catalogs : {},
    catalogs: application.catalogs && application.catalogs.suppliers ? application.catalogs.suppliers : [],
    drdCustomer: application.catalogs && application.catalogs.drdCustomer ? application.catalogs.drdCustomer : false,
    geolocChanged: (_application$geoloc$g = (_application$geoloc = application.geoloc) === null || _application$geoloc === void 0 ? void 0 : _application$geoloc.geolocChanged) !== null && _application$geoloc$g !== void 0 ? _application$geoloc$g : false
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    getCatalogButtons: _catalogsActions.getCatalogButtons,
    setGeolocChanged: _geolocActions.setGeolocChanged
  }, dispatch);
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_index["default"]);