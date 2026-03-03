"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _comparator = _interopRequireDefault(require("../../components/comparator"));
var _comparatorAction = require("../../actions/comparatorAction");
var _grabberActions = require("../../../../../../actions/grabberActions");
var mapStateToProps = function mapStateToProps(state) {
  return {
    comparatorData: state.productsComparisonReducer.comparatorData,
    loaded: state.productsComparisonReducer.loaded
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getComparatorData: function getComparatorData(products, context) {
      dispatch((0, _comparatorAction.getComparatorData)(products, context));
    },
    deleteOne: function deleteOne(product) {
      dispatch((0, _grabberActions.deleteOne)(product));
    },
    setLoaded: function setLoaded() {
      dispatch((0, _comparatorAction.setLoaded)());
    }
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_comparator["default"]);