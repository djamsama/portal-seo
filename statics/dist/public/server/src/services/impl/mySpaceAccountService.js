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
var _reactCookie = require("react-cookie");
var _requestService = _interopRequireDefault(require("./requestService"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var MySpaceAccountService = /*#__PURE__*/function (_RequestService) {
  function MySpaceAccountService(context) {
    (0, _classCallCheck2["default"])(this, MySpaceAccountService);
    return _callSuper(this, MySpaceAccountService, [{
      baseUrl: context.config.portal.baseUrl
    }]);
  }
  (0, _inherits2["default"])(MySpaceAccountService, _RequestService);
  return (0, _createClass2["default"])(MySpaceAccountService, [{
    key: "login",
    value: function login(data, context) {
      return this.post(context.initData.ajaxMySpaceLoginUrl, data);
    }
  }, {
    key: "createAccount",
    value: function createAccount(data, context) {
      // On envoi la requête de MAJ au serveur.
      var url = context.initData.mySpaceAccountCreateUrl;
      return this.post(url, data);
    }
  }, {
    key: "updateAccount",
    value: function updateAccount(data, context) {
      var cookies = new _reactCookie.Cookies();
      // On définit le cookie de type de visiteur.
      if (data.visitorType) {
        if (data.visitorType === "Professionel") {
          cookies.set("TypeVis", "pro", {
            path: "/",
            domain: context.config.portal.domain
          });
        } else {
          cookies.set("TypeVis", "part", {
            path: "/",
            domain: context.config.portal.domain
          });
        }
      }

      // On envoi la requête de MAJ au serveur.
      var url = context.initData.mySpaceAccountUpdateUrl;
      return this.post(url, data);
    }
  }, {
    key: "resetPassword",
    value: function resetPassword(data, context) {
      var url = context.initData.mySpaceAccountResetPasswordUrl;
      return this.post(url, data);
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
var _default = exports["default"] = MySpaceAccountService;