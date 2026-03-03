"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _react = _interopRequireWildcard(require("react"));
var _redux = require("redux");
var _grabber = _interopRequireDefault(require("../../components/grabber"));
var _grabberActions = require("../../actions/grabberActions");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var mapStateToProps = function mapStateToProps(application) {
  return application.grabber ? {
    products: application.grabber.products,
    expandedProps: application.grabber.products && application.grabber.products.length > 0
  } : {
    products: null,
    expandedProps: null
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    loadProducts: _grabberActions.loadProducts,
    deleteOne: _grabberActions.deleteOne,
    deleteAll: _grabberActions.deleteAll,
    addProduct: _grabberActions.addProduct
  }, dispatch);
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_grabber["default"]);