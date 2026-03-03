"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _serverLogger = _interopRequireDefault(require("./server/serverLogger"));
var _clientLogger = _interopRequireDefault(require("./client/clientLogger"));
/* eslint-disable no-undef */
/**
 * Classe logger
 */
var Logger = /*#__PURE__*/function () {
  function Logger() {
    (0, _classCallCheck2["default"])(this, Logger);
    if (false) {
      this.logger = new _clientLogger["default"]();
    } else if (true) {
      this.logger = new _serverLogger["default"]();
    }
  }

  /**
   * log
   *
   * @param {*} title
   * @param {*} message
   */
  return (0, _createClass2["default"])(Logger, [{
    key: "log",
    value: function log(title, message) {
      this._log("log", title, message);
    }

    /**
     * info
     *
     * @param {*} title
     * @param {*} message
     */
  }, {
    key: "info",
    value: function info(title, message) {
      this._log("info", title, message);
    }

    /**
     * warn
     *
     * @param {*} title
     * @param {*} message
     */
  }, {
    key: "warn",
    value: function warn(title, message) {
      this._log("warn", title, message);
    }

    /**
     * error
     *
     * @param {*} title
     * @param {*} message
     */
  }, {
    key: "error",
    value: function error(title, message) {
      this._log("error", title, message);
    }

    /**
     * abstraction of _log
     *
     * @param {*} level
     * @param {*} title
     * @param {*} payload
     */
  }, {
    key: "_log",
    value: function _log(level, title, payload) {
      this.logger.log(level, title, payload);
    }
  }]);
}();
var logger = new Logger();
var _default = exports["default"] = logger;