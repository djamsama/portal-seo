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
var _withGoogleAnalytics = require("../../../../hoc/withGoogleAnalytics");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable no-console */ /* eslint-disable react/require-default-props */
/** Envoi de l'evenement ga display */
var TrackingGaDisplay = /*#__PURE__*/function (_Component) {
  function TrackingGaDisplay(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, TrackingGaDisplay);
    _this = _callSuper(this, TrackingGaDisplay, [props]);
    _this.sendEvent = _this.sendEvent.bind(_this);
    _this.state = {
      show: false
    };
    return _this;
  }
  (0, _inherits2["default"])(TrackingGaDisplay, _Component);
  return (0, _createClass2["default"])(TrackingGaDisplay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var force = this.props.force;
      var show = this.state.show;

      // l'evenement n'a pas déjà été envoyé ou on veut forcer le réaffichage
      if (false && (!show || force)) {
        // Envoi de l'evenement
        this.sendEvent();
      }
    }
  }, {
    key: "sendEvent",
    value: function sendEvent() {
      var _this$props = this.props,
        nonInteraction = _this$props.nonInteraction,
        transport = _this$props.transport,
        category = _this$props.category,
        action = _this$props.action,
        label = _this$props.label,
        value = _this$props.value,
        force = _this$props.force,
        googleAnalytics = _this$props.googleAnalytics,
        requestTrackEvent = _this$props.requestTrackEvent,
        universeId = _this$props.universeId,
        categoryId = _this$props.categoryId,
        companyCommercialStatus = _this$props.companyCommercialStatus,
        companyRank = _this$props.companyRank,
        idpTextType = _this$props.idpTextType,
        mainKwRefId = _this$props.mainKwRefId,
        companyId = _this$props.companyId,
        mainConceptId = _this$props.mainConceptId;
      var show = this.state.show;
      if (!googleAnalytics) {
        console.error("ga, undefined googleAnalytics");
        return;
      }
      var newEvent = !requestTrackEvent ? {
        label: label
      } : requestTrackEvent;
      if (typeof label !== "undefined") {
        newEvent.label = label;
      }
      if (typeof action !== "undefined") {
        newEvent.action = action;
      }
      if (typeof category !== "undefined") {
        newEvent.category = category;
      }
      if (typeof nonInteraction !== "undefined") {
        newEvent.nonInteraction = nonInteraction;
      }
      if (typeof transport !== "undefined") {
        newEvent.transport = transport;
      }
      if (typeof universeId !== "undefined") {
        newEvent.dimension4 = universeId;
      }
      if (typeof categoryId !== "undefined") {
        newEvent.dimension5 = categoryId;
      }
      if (typeof companyCommercialStatus !== "undefined") {
        newEvent.dimension6 = companyCommercialStatus;
      }
      if (typeof companyRank !== "undefined") {
        newEvent.dimension7 = companyRank;
      }
      if (typeof idpTextType !== "undefined") {
        newEvent.dimension8 = idpTextType;
      }
      if (typeof mainKwRefId !== "undefined") {
        newEvent.dimension9 = mainKwRefId;
      }
      if (typeof companyId !== "undefined") {
        newEvent.dimension10 = companyId;
      }
      if (typeof mainConceptId !== "undefined") {
        newEvent.dimension12 = mainConceptId;
      }

      // On n'a pas d'action ou pas de catégorie
      if (!newEvent.action || !newEvent.category) {
        console.error("ga, missing valid parameter");
        return;
      }
      if (action) {
        newEvent.action = action;
      }
      if (category) {
        newEvent.category = category;
      }

      // l'evenement n'a pas déjà été envoyé ou on veut forcer le réaffichage
      if (!show || force) {
        if (value !== undefined) {
          newEvent.value = value;
        }
        googleAnalytics.event(newEvent);
        // le display a été envoyé. On ne l'affichera plus sauf si on le force
        if (!show) {
          this.setState({
            show: true
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
    }
  }]);
}(_react.Component);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)(TrackingGaDisplay); // $FlowFixMe
TrackingGaDisplay.defaultProps = {
  force: false
};