"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _contextComponent = require("../contextComponent");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var SimpleSelect = /*#__PURE__*/function (_ContextComponent) {
  function SimpleSelect() {
    (0, _classCallCheck2["default"])(this, SimpleSelect);
    return _callSuper(this, SimpleSelect, arguments);
  }
  (0, _inherits2["default"])(SimpleSelect, _ContextComponent);
  return (0, _createClass2["default"])(SimpleSelect, [{
    key: "render",
    value: function render() {
      var options = this.props.options;
      if (options && options.length > 0) {
        return /*#__PURE__*/_react["default"].createElement("select", {
          onChange: this.props.onChange,
          value: this.props.value
        }, options.map(function (value) {
          return /*#__PURE__*/_react["default"].createElement("option", {
            value: value.id,
            key: value.label + value.id
          }, value.label);
        }));
      } else {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
      }
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = SimpleSelect;