"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
/**
 * Classe logger
 */
var ServerLogger = /*#__PURE__*/function () {
  function ServerLogger() {
    (0, _classCallCheck2["default"])(this, ServerLogger);
    this.styleLog = {
      info: "color: gray; font-style: italic;",
      title: "font-size:24px;color:#778899;text-shadow:1px 3px 5px #CCC,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);"
    };

    // Instantiation de l'objet de debug par defaut.
    this.debug = require("debug")("logger");
    if (true) {
      var winston = require("winston");
      // Instantiation du logger winston avec le transport au format fichier.
      this.logger = winston.createLogger({
        format: winston.format.combine(winston.format.splat(), winston.format.json()),
        transports: [new winston.transports.File({
          filename: "comblog.log"
        })]
      });
    }
  }

  /**
   * abstraction of _log
   *
   * @param {*} level
   * @param {*} title
   * @param {*} payload
   */
  return (0, _createClass2["default"])(ServerLogger, [{
    key: "log",
    value: function log(level, title, payload) {
      var newrelic = require("newrelic");
      // Instantiation de l'objet de debug avec le bon titre.
      this.debug = require("debug")(title);
      this.debug.enabled = true;

      // eslint-disable-next-line no-undef
      if (false) {
        if (process.env.NEW_RELIC) {
          newrelic.noticeError(payload);
        }
        // En dev on affiche tout le temps les debugs.
        this.debug("%s: %O", title, payload);
        // Coté serveur: log dans un fichier.

        this.logger.error({
          level: level,
          message: "".concat(title, ": ").concat(payload)
        });
      } else {
        if (process.env.NEW_RELIC) {
          newrelic.noticeError(payload);
        }
        if (true) {
          // Coté serveur: log dans un fichier via winston.
          this.logger.log({
            level: level,
            message: "".concat(title, ": ").concat(payload)
          });
        }
      }
    }
  }]);
}();
var _default = exports["default"] = ServerLogger;