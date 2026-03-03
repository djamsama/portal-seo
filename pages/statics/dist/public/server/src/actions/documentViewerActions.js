"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFile = exports["default"] = exports.VIEWER_GET_FILE = void 0;
var _viewerService = _interopRequireDefault(require("../services/impl/viewerService"));
var VIEWER_GET_FILE = exports.VIEWER_GET_FILE = "VIEWER_GET_FILE";

/**
 * Récupération d'un fichier sous forme de BLOB à partir de l'URL fournie.
 * @param {*} url L'URL d'accès au fichier
 */
var getFile = exports.getFile = function getFile(url) {
  var viewerService = new _viewerService["default"]();
  return function () {
    return viewerService.getFileData(url).then(function (_ref) {
      var data = _ref.data;
      return data;
    });
  };
};
var _default = exports["default"] = {};