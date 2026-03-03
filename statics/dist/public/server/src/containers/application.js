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
var _reactRedux = require("react-redux");
var _reactIntl = require("react-intl");
var _context = require("../context");
var _i18nVeContainer = _interopRequireDefault(require("./i18nVeContainer"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var ApplicationComponent = /*#__PURE__*/function (_Component) {
  function ApplicationComponent() {
    (0, _classCallCheck2["default"])(this, ApplicationComponent);
    return _callSuper(this, ApplicationComponent, arguments);
  }
  (0, _inherits2["default"])(ApplicationComponent, _Component);
  return (0, _createClass2["default"])(ApplicationComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        language = _this$props.language,
        messages = _this$props.messages,
        children = _this$props.children,
        initData = _this$props.initData,
        config = _this$props.config;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactRedux.ReactReduxContext.Consumer, null, function (_ref) {
        var store = _ref.store;
        return /*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
          value: {
            initData: initData,
            config: config,
            store: store.getState()
          }
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.IntlProvider, {
          locale: language,
          key: language,
          messages: messages
        }, /*#__PURE__*/_react["default"].createElement(_i18nVeContainer["default"], null, children)));
      }));
    }
  }]);
}(_react.Component);
var mapStateToProps = function mapStateToProps(_ref2) {
  var Application = _ref2.Application;
  return {
    language: Application.localeProp,
    messages: Application.messages
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, null)(ApplicationComponent);