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
var _webVitals = require("web-vitals");
var _withGoogleAnalytics = require("../../../../hoc/withGoogleAnalytics");
var _constants = require("../../../../commons/constants");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/** Envoi des webvitals. */
var WebVitalsGa = /*#__PURE__*/function (_Component) {
  function WebVitalsGa() {
    var _this;
    (0, _classCallCheck2["default"])(this, WebVitalsGa);
    _this = _callSuper(this, WebVitalsGa);
    _this.sendToGoogleAnalytics = _this.sendToGoogleAnalytics.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(WebVitalsGa, _Component);
  return (0, _createClass2["default"])(WebVitalsGa, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var googleAnalytics = this.props.googleAnalytics;
      if (false) {
        if (!googleAnalytics) {
          console.error("ga, googleAnalytics undefined");
          return;
        }
        var rand = Math.floor(Math.random() * _constants.WEB_VITALS_SAMPLE.of);
        // on garde WEB_VITALS_SAMPLE.take sur WEB_VITALS_SAMPLE.of Web Vitals
        if (rand < _constants.WEB_VITALS_SAMPLE.take) {
          (0, _webVitals.getCLS)(this.sendToGoogleAnalytics);
          (0, _webVitals.getFID)(this.sendToGoogleAnalytics);
          (0, _webVitals.getLCP)(this.sendToGoogleAnalytics);
          (0, _webVitals.getTTFB)(this.sendToGoogleAnalytics);
          (0, _webVitals.getFCP)(this.sendToGoogleAnalytics);
        }
      }
    }

    /**
     * Envoie de l'évènement a GA.
     */
  }, {
    key: "sendToGoogleAnalytics",
    value: function sendToGoogleAnalytics(_ref) {
      var name = _ref.name,
        delta = _ref.delta,
        id = _ref.id;
      var googleAnalytics = this.props.googleAnalytics;
      googleAnalytics.event({
        action: name,
        category: "Web Vitals",
        label: id,
        // Google Analytics metrics must be integers, so the value is rounded.
        // For CLS the value is first multiplied by 1000 for greater precision
        value: Math.round(name === "CLS" ? delta * 1000 : delta),
        // Use a non-interaction event to avoid affecting bounce rate.
        nonInteraction: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
    }
  }]);
}(_react.Component);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)(WebVitalsGa);
WebVitalsGa.defaultProps = {};