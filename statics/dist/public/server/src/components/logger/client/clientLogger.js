"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
// import { createLogger, format, transports } from "winston";
/**
 * Classe logger
 */
var ClientLogger = /*#__PURE__*/function () {
  function ClientLogger() {
    (0, _classCallCheck2["default"])(this, ClientLogger);
    this.styleLog = {
      info: "color: gray; font-style: italic;",
      title:
      // eslint-disable-next-line max-len
      "font-size:24px;color:#778899;text-shadow:1px 3px 5px #CCC,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);"
    };

    // Instantiation de l'objet de debug par defaut.
    this.debug = require("debug")("logger");
  }

  /**
   * abstraction of _log
   *
   * @param {*} level
   * @param {*} title
   * @param {*} payload
   */
  return (0, _createClass2["default"])(ClientLogger, [{
    key: "log",
    value: function log(level, title, payload) {
      // Instantiation de l'objet de debug avec le bon titre.
      this.debug = require("debug")(title);
      this.debug.enabled = true;
      if (false) {
        // En dev on affiche tout le temps les debugs.
        this.debug("%s: %O", title, payload);
      } else {
        this.debug.log = console.error.bind(console);
        // Coté client: pas de log fichier: utilisation de debug + sentry.
        this.debug(title);
        this.debug(payload);
      }
    }
  }]);
}();
var _default = exports["default"] = ClientLogger;