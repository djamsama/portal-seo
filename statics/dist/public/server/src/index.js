"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
var _history = require("history");
var _browser = _interopRequireWildcard(require("@sentry/browser"));
var Sentry = _browser;
var _react = _interopRequireDefault(require("react"));
var _reactCookie = require("react-cookie");
var _reactDeviceDetect = require("react-device-detect");
var _client = require("react-dom/client");
var _reactRedux = require("react-redux");
var _reactReduxToastr = _interopRequireDefault(require("react-redux-toastr"));
var _reactRouterDom = require("react-router-dom");
var _global = require("./components/styles/global");
var _trackingGa = require("./components/trackings/trackingGa");
var _application = _interopRequireDefault(require("./containers/application"));
var _pageLayoutWithRoute = require("./layouts/pageLayoutWithRoute");
var _routes = _interopRequireDefault(require("./routes"));
var _store = require("./store");
var _didomiContainer = _interopRequireDefault(require("./components/cookies/containers/didomiContainer"));
var _module;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var history = (0, _history.createBrowserHistory)();
var store = (0, _store.storeFactory)(history, null);
var initData = window.__preloadData__ || {};
var config = window.__config__ || {};
config.isMobile = _reactDeviceDetect.isMobile;
var sentryKey = config.sentryKey;
if (sentryKey !== undefined) {
  (0, _browser.init)({
    dsn: sentryKey,
    ignoreErrors: ["TypeError: Failed to fetch", "TypeError: NetworkError when attempting to fetch resource.", "ResizeObserver loop limit exceeded"],
    // Remplace l’intégration Breadcrumbs par une version sans patch de console.*
    integrations: function integrations(defaults) {
      return defaults.map(function (integration) {
        if (integration.name === "Breadcrumbs") {
          return new Sentry.Breadcrumbs({
            console: false,
            //  ne plus patcher console
            dom: true,
            fetch: true,
            history: true,
            xhr: true
          });
        }
        return integration;
      });
    }
  });
}
var element = document.getElementById("root");
var root;
var renderApp = function renderApp(Component) {
  if (!root) {
    root = (0, _client.hydrateRoot)(element, /*#__PURE__*/_react["default"].createElement(Component, null));
  } else {
    root.render(/*#__PURE__*/_react["default"].createElement(Component, null));
  }
};
var Application = function Application() {
  return /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_reactCookie.CookiesProvider, null, /*#__PURE__*/_react["default"].createElement(_application["default"], {
    initData: initData,
    config: config
  }, /*#__PURE__*/_react["default"].createElement(_didomiContainer["default"], null), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_pageLayoutWithRoute.PageLayoutWithRoute, {
    routes: _routes["default"]
  })), /*#__PURE__*/_react["default"].createElement(_global.GlobalStyle, null), /*#__PURE__*/_react["default"].createElement(_trackingGa.WebVitalsGa, null), /*#__PURE__*/_react["default"].createElement(_reactReduxToastr["default"], {
    timeOut: 3000,
    newestOnTop: false,
    position: "top-center",
    transitionIn: "fadeIn",
    transitionOut: "fadeOut",
    progressBar: true,
    closeOnToastrClick: true
  }))));
};
renderApp(Application);

// HMR Setup mais qui sert a rien puisque nodemon redemarre le serveur pour chaque changement
if ((_module = module) !== null && _module !== void 0 && _module.hot) {
  module.hot.accept("./containers/application", function () {
    var NextApp = _application["default"]["default"];
    renderApp(NextApp);
  });
}