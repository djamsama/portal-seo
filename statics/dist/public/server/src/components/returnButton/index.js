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
var _reactIntl = require("react-intl");
var _withGoogleAnalytics = require("../../hoc/withGoogleAnalytics");
var _invertedPortalButton = require("../styles/invertedPortalButton");
var _returnButton = require("./styles/returnButton");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable react/require-default-props */
var ReturnButton = /*#__PURE__*/function (_Component) {
  function ReturnButton(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, ReturnButton);
    _this = _callSuper(this, ReturnButton, [props, context]);
    _this.goBack = _this.goBack.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(ReturnButton, _Component);
  return (0, _createClass2["default"])(ReturnButton, [{
    key: "goBack",
    value: function goBack() {
      var _this$props = this.props,
        googleAnalytics = _this$props.googleAnalytics,
        event = _this$props.event,
        goBackCallBack = _this$props.goBackCallBack,
        goBackTo = _this$props.goBackTo;
      if (googleAnalytics && event) {
        googleAnalytics.event(event);
      }
      if (false) {
        if (goBackCallBack) {
          goBackCallBack();
        }
        if (goBackTo) {
          if (typeof goBackTo === "number") {
            window.history.go(goBackTo);
          } else {
            window.location.href = goBackTo;
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var i18nkey = this.props.i18nkey;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_returnButton.ButtonWrapper, null, /*#__PURE__*/_react["default"].createElement(_invertedPortalButton.InvertedPortalButton, {
        onClick: this.goBack
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: i18nkey
      }))));
    }
  }]);
}(_react.Component);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)(ReturnButton);
ReturnButton.defaultProps = {
  goBackTo: -1,
  goBackCallBack: undefined
};