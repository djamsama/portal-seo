"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _chalk = _interopRequireDefault(require("chalk"));
var _server = _interopRequireDefault(require("./server"));
// Chargement de the l'agent. cf(https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/install-nodejs-agent/#installing)
// eslint-disable-next-line no-unused-vars
var newrelic = require("newrelic");
var util = require("util");
var execAsync = util.promisify(require("child_process").exec);
var nodeEnv = process.env.NODE_ENV || "inconnu";
var babelEnv = process.env.BABEL_ENV || "inconnu";
var notifyEnable = process.env.NOTIFY_LOAD_ENABLE || null;
console.log(_chalk["default"].bgYellow(_chalk["default"].red("Environment : ") + _chalk["default"].blue.bold(nodeEnv)));
console.log(_chalk["default"].bgYellow(_chalk["default"].red("Environment babel : ") + _chalk["default"].blue.bold(babelEnv)));
(0, _server["default"])().then(function () {
  console.log("Server is up");
  if (notifyEnable === "1") {
    execAsync("notify-send startWatch 'Server reloaded'");
  }
})["catch"](function (error) {
  return console.log.error;
});