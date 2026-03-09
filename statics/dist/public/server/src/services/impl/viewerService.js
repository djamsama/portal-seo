"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _requestService = _interopRequireDefault(require("./requestService"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var ViewerService = /*#__PURE__*/function (_RequestService) {
  function ViewerService() {
    (0, _classCallCheck2["default"])(this, ViewerService);
    return _callSuper(this, ViewerService, arguments);
  }
  (0, _inherits2["default"])(ViewerService, _RequestService);
  return (0, _createClass2["default"])(ViewerService, [{
    key: "getFileData",
    value:
    /**
     * Récupération des données du fichier dont le token est passé en paramètre.
     * @param {*} url L'URL permettant la récupération des données du fichier
     */
    function getFileData(url) {
      return this.getBlob(url);
    }

    /**
     * Le visiteur courant a-t-il un compte mySpace?
     * @param {*} context Le contexte
     */
  }, {
    key: "hasMySpaceAccount",
    value: function hasMySpaceAccount(context) {
      var url = context.initData.accountCheckUrl;
      return this.get(url);
    }
  }]);
}(_requestService["default"]);
var _default = exports["default"] = ViewerService;