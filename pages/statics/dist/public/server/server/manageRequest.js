"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.manageRequest = void 0;
var _reactRouterDom = require("react-router-dom");
var _history = require("history");
var _logger = _interopRequireDefault(require("../src/components/logger"));
var _renderResponse = require("./renderResponse");
var _routes = _interopRequireDefault(require("../src/routes"));
var _getErrorHtml = require("./getErrorHtml");
var manageRequest = exports.manageRequest = {
  handle: function handle(req) {
    var memoryHistory = (0, _history.createMemoryHistory)();
    var response;
    var currentRoute;
    var result = _routes["default"].some(function (route) {
      var match = (0, _reactRouterDom.matchPath)(req.config.url, route.path);
      if (match) {
        currentRoute = route;
      }
      return match;
    });
    if (!result) {
      response = {
        initialState: {},
        initialData: {},
        config: {},
        markup: "Route inconnue",
        route: (0, _renderResponse.emptyRoute)(),
        styledTags: "",
        status: true,
        metatags: {
          title: "",
          metatags: "",
          link: ""
        },
        language: {
          html: "",
          body: ""
        },
        scriptTagManager: "",
        scriptBaidu: ""
      };
    } else {
      var initialState;
      var initialData;
      var config;
      var markup = "";
      var route;
      var styledTags = "";
      var status;
      var metatags;
      var language;
      var scriptTagManager;
      var scriptBaidu;
      try {
        var _renderResponse$rende = _renderResponse.renderResponse.render(req, currentRoute, memoryHistory);
        initialState = _renderResponse$rende.initialState;
        initialData = _renderResponse$rende.initialData;
        config = _renderResponse$rende.config;
        markup = _renderResponse$rende.markup;
        route = _renderResponse$rende.route;
        styledTags = _renderResponse$rende.styledTags;
        metatags = _renderResponse$rende.metatags;
        language = _renderResponse$rende.language;
        scriptTagManager = _renderResponse$rende.scriptTagManager;
        if (markup === undefined) {
          markup = "";
        }
        response = {
          status: status,
          initialState: initialState,
          initialData: initialData,
          config: config,
          markup: markup,
          route: route,
          styledTags: styledTags,
          metatags: metatags,
          language: language,
          scriptTagManager: scriptTagManager,
          scriptBaidu: scriptBaidu
        };
      } catch (ex) {
        // Création de la variable error pour typer l'erreur
        var error = ex;
        _logger["default"].error("manageRequest", error);
        markup = (0, _getErrorHtml.getErrorHtml)(error);
        response = {
          status: false,
          ex: error,
          initialState: {},
          initialData: {},
          config: {},
          markup: markup,
          route: (0, _renderResponse.emptyRoute)(),
          styledTags: styledTags,
          metatags: metatags,
          language: {
            html: "",
            body: ""
          },
          scriptTagManager: "",
          scriptBaidu: ""
        };
      }
    }
    return response;
  }
};