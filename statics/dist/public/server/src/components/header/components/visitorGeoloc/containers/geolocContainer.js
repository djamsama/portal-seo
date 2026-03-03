"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _index = _interopRequireDefault(require("../index"));
var _geolocActions = require("../../../../../actions/geolocActions");
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    setGeolocChanged: _geolocActions.setGeolocChanged
  }, dispatch);
};
var _default = exports["default"] = (0, _reactRedux.connect)(null, mapDispatchToProps)(_index["default"]);