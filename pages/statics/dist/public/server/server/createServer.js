"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createServer = void 0;
var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _logger = _interopRequireDefault(require("../src/components/logger"));
var mustacheExpress = require("mustache-express");
var cookiesMiddleware = require("universal-cookie-express");
var _DEFAULT_ASSETS_PATH = "/dist";
/**
 *
 * @function
 * @param {string} assetsPath chemin de destination
 * @returns {express$Application} Application Express
 */
var createServer = exports.createServer = function createServer() {
  var assetsPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _DEFAULT_ASSETS_PATH;
  var d = new Date();
  process.on("uncaughtException", function (err) {
    return _logger["default"].log("".concat(d.toUTCString(), "=>createServer:uncaughtException:"), err);
  }).on("unhandledRejection", function (reason) {
    return _logger["default"].log("".concat(d.toUTCString(), "=> createServer:unhandledRejection:"), reason);
  }).on("warning", function (warning) {
    return _logger["default"].log("".concat(d.toUTCString(), "=>createServer:warning:"), warning);
  });
  var app = (0, _express["default"])();
  app.engine("html", mustacheExpress());
  app.set("view engine", "mustache");
  app.set("views", _path["default"].join(process.cwd(), assetsPath));
  app.set("inputRequestLimit", "100mb");
  app.use(cookiesMiddleware());
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  // define the folder that will be used for static assets
  app.use("/dyn", _express["default"]["static"](_path["default"].join(process.cwd(), assetsPath)));
  return app;
};