"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _reactIntl = require("react-intl");
var _histoRecoActions = require("../actions/histoRecoActions");
var _ = _interopRequireDefault(require("./.."));
// $FlowFixMe
var mapStateToProps = function mapStateToProps(_ref) {
  var histoRecoDatas = _ref.histoRecoDatas;
  return {
    products: histoRecoDatas ? histoRecoDatas.products : null,
    productsById: histoRecoDatas ? histoRecoDatas.productsById : null
  };
};
function mapDispatchToProps(dispatch) {
  return {
    getProducts: function getProducts(context, ids) {
      return dispatch((0, _histoRecoActions.getProducts)(context, ids));
    }
  };
}
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactIntl.injectIntl)(_["default"]));