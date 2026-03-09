"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.googleAnalytics = void 0;
exports.withGoogleAnalytics = withGoogleAnalytics;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _react = _interopRequireDefault(require("react"));
var _reactGa = _interopRequireDefault(require("react-ga"));
var _constants = require("../commons/constants");
var _constants2 = require("../pages/stand/components/constants");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
Object.assign(_constants.GOOGLE_ANALYTICS_EVENTS, _constants2.GOOGLE_ANALYTICS_EVENTS);
var queues = [];
var queuesGtag = [];
var baiduQueues = [];
var baiduFlag = 0;
function apply(type, label, gaParam) {
  if (!false) {
    return;
  }
  // Si une nouvelle action est demandée : l'ajouter dans la file d'attente.
  if (label && type) {
    queuesGtag.push({
      type: type,
      label: label,
      gaParam: gaParam
    });
  }
  if ("gtag" in window) {
    // Exécuter les actions dans la file d'attente.
    while (queuesGtag.length !== 0) {
      var call = queuesGtag.shift();
      if (call !== null && call !== void 0 && call.type) {
        window.gtag(call === null || call === void 0 ? void 0 : call.type, call === null || call === void 0 ? void 0 : call.label, call === null || call === void 0 ? void 0 : call.gaParam);
      }
    }
  } else {
    // Si Google Analytics n'est pas encore chargé : réessayer dans 500 ms.
    // $FlowFixMe
    setTimeout(apply, 500, "");
  }
}
function applyGa(func) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (!false) {
    return;
  }
  // Si une nouvelle action est demandée : l'ajouter dans la file d'attente.
  if (func !== "") {
    queues.push({
      func: func,
      args: args
    });
  }
  if ("ga" in window) {
    // Exécuter les actions dans la file d'attente.
    while (queues.length !== 0) {
      var call = queues.shift();
      _reactGa["default"][call.func].apply(_reactGa["default"], (0, _toConsumableArray2["default"])(call.args));
    }
  } else {
    // Si Google Analytics n'est pas encore chargé : réessayer dans 500 ms.
    setTimeout(applyGa, 500, "");
  }
}

/** *
 * Gestion des events baidu
 */
function applyBaidu(args) {
  if (!false) {
    return;
  }

  // Ajout dans la file d'attente
  if (args && (0, _typeof2["default"])(args) === "object") {
    baiduQueues.push(args);
  }
  if ("_hmt" in window) {
    while (baiduQueues.length !== 0) {
      var event = baiduQueues.shift();
      // la event sont les memes que ga sauf nonInteraction qu'il faut donc supprimer
      if (typeof event.nonInteraction !== "undefined") {
        delete event.nonInteraction;
      }
      var value = typeof event.value !== "undefined" ? event.value : null;
      var label = typeof event.label !== "undefined" ? event.label : "-";
      window._hmt.push(["_trackEvent", event.category, event.category, label, value]);
    }
  } else if (window.__config__.portal.locale === "zh" && baiduFlag < 10) {
    setTimeout(applyBaidu, 500, null);
    baiduFlag += 1;
  }
}
var googleAnalytics = exports.googleAnalytics = {
  set: function set(fieldsObject, trackerNames) {
    applyGa("set", [[fieldsObject, trackerNames]]);
  },
  pageview: function pageview(path, trackerNames, title) {
    var cleanedArguments = [];
    cleanedArguments.push(path);
    if (trackerNames) {
      cleanedArguments.push(trackerNames);
    }
    if (title) {
      cleanedArguments.push(title);
    }
    applyGa("pageview", [cleanedArguments]);
  },
  event: function event(args) {
    applyGa("event", [args]);
    // Ajout du baidu analytics pour les pages chinoises
    if (window && window.__config__ && window.__config__.portal && window.__config__.portal.locale === "zh") {
      applyBaidu(args);
    }
  },
  gtagEvent: function gtagEvent(type, label, args) {
    apply(type, label, args);
  }
};
function withGoogleAnalytics(Component) {
  // $FlowFixMe
  return /*#__PURE__*/function (_React$Component) {
    function WrapperComponent() {
      (0, _classCallCheck2["default"])(this, WrapperComponent);
      return _callSuper(this, WrapperComponent, arguments);
    }
    (0, _inherits2["default"])(WrapperComponent, _React$Component);
    return (0, _createClass2["default"])(WrapperComponent, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({}, this.props, {
          // $FlowFixMe
          googleAnalytics: googleAnalytics,
          GOOGLE_ANALYTICS_EVENTS: _constants.GOOGLE_ANALYTICS_EVENTS
        }));
      }
    }]);
  }(_react["default"].Component);
}