"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderResponse = exports.emptyRoute = void 0;
var _react = _interopRequireDefault(require("react"));
var _server = require("react-dom/server");
var _reactRedux = require("react-redux");
var _reactRouter = require("react-router");
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _reactCookie = require("react-cookie");
var _reactHelmet = _interopRequireDefault(require("react-helmet"));
var _styledComponents = require("styled-components");
var _store = require("../src/store");
var _application = _interopRequireDefault(require("../src/containers/application"));
var _pageLayoutWithRoute = require("../src/layouts/pageLayoutWithRoute");
var _routes = _interopRequireDefault(require("../src/routes"));
var _notFoundPage = _interopRequireDefault(require("../src/components/notFoundPage"));
var _global = require("../src/components/styles/global");
var emptyRoute = exports.emptyRoute = function emptyRoute() {
  var route = {
    path: "/notFound",
    component: _notFoundPage["default"],
    loadStateData: function loadStateData() {},
    loadData: function loadData() {},
    loadConfig: function loadConfig() {}
  };
  return route;
};
var renderResponse = exports.renderResponse = {
  render: function render(req, currentRoute, memoryHistory) {
    var response;
    var initialState = {};
    var initialData = {};
    var config = {};
    var markup = "";
    var metatags = {};
    var language = {
      html: "",
      body: ""
    };
    var styledTags = "";
    var scriptTagManager = "";
    var scriptBaidu = "";
    if (currentRoute === undefined || (0, _isEmpty["default"])(currentRoute)) {
      response = {
        initialState: initialState,
        initialData: initialData,
        config: config,
        markup: markup,
        route: emptyRoute(),
        metatags: "",
        language: "",
        scriptTagManager: "",
        scriptBaidu: ""
      };
    } else {
      initialState = currentRoute.loadStateData(req) || {};
      initialData = currentRoute.loadData(req) || {};
      config = currentRoute.loadConfig(req) || {};
      var store = (0, _store.storeFactory)(memoryHistory, initialState);
      var routerContext = {};
      var sheet = new _styledComponents.ServerStyleSheet();
      try {
        markup = (0, _server.renderToString)(sheet.collectStyles(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
          store: store
        }, /*#__PURE__*/_react["default"].createElement(_reactCookie.CookiesProvider, {
          cookies: req.universalCookies
        }, /*#__PURE__*/_react["default"].createElement(_application["default"], {
          initData: initialData,
          config: config
        }, /*#__PURE__*/_react["default"].createElement(_reactRouter.StaticRouter, {
          context: routerContext,
          location: req.config.url
        }, /*#__PURE__*/_react["default"].createElement(_pageLayoutWithRoute.PageLayoutWithRoute, {
          routes: _routes["default"]
        })), /*#__PURE__*/_react["default"].createElement(_global.GlobalStyle, null))))));
        styledTags = sheet.getStyleTags();
      } finally {
        sheet.seal();
      }
      var helmet = _reactHelmet["default"].renderStatic();
      metatags = {
        title: helmet.title.toString(),
        metas: helmet.meta.toString(),
        link: helmet.link.toString()
      };
    }
    response = {
      initialState: initialState,
      initialData: initialData,
      config: config,
      markup: markup,
      route: currentRoute,
      styledTags: styledTags,
      metatags: metatags,
      language: language,
      scriptTagManager: scriptTagManager,
      scriptBaidu: scriptBaidu
    };
    return response;
  }
};