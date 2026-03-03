"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _reactIntl = _interopRequireDefault(require("react-intl"));
var _index = _interopRequireDefault(require("../index"));
var _grabberActions = require("../../../../../actions/grabberActions");
var mapStateToProps = function mapStateToProps(application) {
  return {
    grabberEntities: application.grabber ? application.grabber.products : []
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onAddToGrabber: function onAddToGrabber(productId, productImg, productDef, intl) {
      dispatch((0, _grabberActions.addProduct)(productId, productImg, productDef, intl));
    },
    onRemoveFromGrabber: function onRemoveFromGrabber(productId) {
      dispatch((0, _grabberActions.deleteOne)(productId));
    }
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_index["default"]);