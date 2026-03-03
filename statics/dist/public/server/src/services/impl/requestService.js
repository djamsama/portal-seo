"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _axios = _interopRequireDefault(require("axios"));
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _startsWith = _interopRequireDefault(require("lodash/startsWith"));
var _constants = require("../../commons/constants");
var _defaultValues = require("../../constants/defaultValues");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } /* eslint-disable no-param-reassign */ /* eslint-disable no-underscore-dangle */
/**
 * Request Service
 */
var RequestService = /*#__PURE__*/function () {
  function RequestService(requestServiceParam) {
    (0, _classCallCheck2["default"])(this, RequestService);
    this.config = RequestService.getConfig(requestServiceParam);
    this.request = this.create(this.config);
  }

  /**
   * Check la validite de l'url de la requete
   *
   * @param {*} url
   */
  return (0, _createClass2["default"])(RequestService, [{
    key: "setParams",
    value:
    /**
     * set params
     *
     * @param {*} params
     */
    function setParams(params) {
      this.config.params = params;
      this.request = _axios["default"].create(this.config);
    }

    /**
     * set data
     *
     * @param {*} data
     */
  }, {
    key: "setData",
    value: function setData(data) {
      this.config.data = data;
      this.request = _axios["default"].create(this.config);
    }

    /**
     * creation/mise a jour de la request
     *
     * @param {*} config
     */
  }, {
    key: "create",
    value: function create() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.config;
      if (config.headers["Content-Type"] === "application/x-www-form-urlencoded") {
        config.headers = _objectSpread(_objectSpread({}, this.config.headers), {}, {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "text/html, */*; q=0.01",
          "X-Requested-With": "XMLHttpRequest"
        });
      }
      this.request = _axios["default"].create(config);
      return this.request;
    }

    /**
     * Requete get
     * @param {*} url
     */
  }, {
    key: "get",
    value: function get(url, params) {
      var parameters = params;
      if (parameters) {
        url += "?".concat(Object.keys(parameters).map(function (key) {
          return "".concat(key, "=").concat(parameters[key]);
        }).join("&"));
      }
      RequestService.checkUrl(url);
      return this.request.get(url);
    }

    /**
     * Requete get blob.
     * @param {*} url
     */
  }, {
    key: "getBlob",
    value: function getBlob(url, params) {
      var parameters = params;
      if (parameters) {
        url += "?".concat(Object.keys(parameters).map(function (key) {
          return "".concat(key, "=").concat(parameters[key]);
        }).join("&"));
      }
      RequestService.checkUrl(url);
      return this.request.get(url, {
        responseType: "blob"
      });
    }

    /**
     * Requete post
     * @param {*} url
     */
  }, {
    key: "post",
    value: function post(url, data) {
      RequestService.checkUrl(url);
      return this.request.post(url, data);
    }

    /**
     * Requete post
     * @param {*} url
     */
  }, {
    key: "postFormData",
    value: function postFormData(url, data, callback) {
      RequestService.checkUrl(url);
      return this.request.post(url, data, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        onUploadProgress: function onUploadProgress(e) {
          return callback(e);
        }
      });
    }

    /**
     * Requete put
     * @param {*} url
     */
  }, {
    key: "put",
    value: function put(url, data) {
      RequestService.checkUrl(url);
      return this.request.put(url, data);
    }

    /**
     * Requete delete
     * @param {*} url
     */
  }, {
    key: "delete",
    value: function _delete(url) {
      RequestService.checkUrl(url);
      return this.request["delete"](url);
    }
  }], [{
    key: "checkUrl",
    value: function checkUrl(url) {
      if (!url) {
        throw new Error("Cannot do the request without url");
      }
    }

    /**
     * Le headers de la requete
     *
     * @param {*} requestServiceParam
     *   => Content-Type = requestServiceParam.contentType
     *   => accept = requestServiceParam.accept
     */
  }, {
    key: "getHeaders",
    value: function getHeaders(requestServiceParam) {
      var headers = {};
      headers["Content-Type"] = requestServiceParam && requestServiceParam.contentType ? requestServiceParam.contentType : _defaultValues.DEFAULT_REQUEST_CONTENT_TYPE;
      headers.Accept = requestServiceParam && requestServiceParam.accept ? requestServiceParam.accept : _defaultValues.DEFAULT_REQUEST_ACCEPT;
      headers["X-Requested-With"] = requestServiceParam && requestServiceParam.xRequestedWith ? requestServiceParam.xRequestedWith : _defaultValues.DEFAULT_REQUEST_X_REQUESTED_WITH;
      if (requestServiceParam && requestServiceParam.csrfToken) {
        var _requestServiceParam$ = requestServiceParam.csrfToken,
          headerName = _requestServiceParam$.headerName,
          token = _requestServiceParam$.token;
        headers[headerName] = token;
      }
      return headers;
    }

    /**
     *  La config de la requete
     *
     * @param {*} requestServiceParam
     *   => Content-Type = requestServiceParam.contentType
     *   => accept = requestServiceParam.accept
     *   => url = requestServiceParam.url
     *   => params = requestServiceParam.params
     *   => baseUrl = requestServiceParam.baseUrl
     *   => xRequestedWith = requestServiceParam.xRequestedWith
     *   => data = requestServiceParam.data
     */
  }, {
    key: "getConfig",
    value: function getConfig(requestServiceParam) {
      var config = RequestService.manageBaseUrl(requestServiceParam);
      config.headers = RequestService.getHeaders(requestServiceParam);
      if (requestServiceParam && requestServiceParam.params && !(0, _isEmpty["default"])(requestServiceParam.params)) {
        config.params = requestServiceParam.params;
      }
      if (requestServiceParam && requestServiceParam.data && !(0, _isEmpty["default"])(requestServiceParam.data)) {
        config.data = requestServiceParam.data;
      }
      return config;
    }
  }, {
    key: "manageBaseUrl",
    value: function manageBaseUrl(requestServiceParam) {
      // Configuration de l'url
      // NB Attention la casse, java nous envoi dans la config "baseUrl" et axios attends "baseURL"
      var baseUrl = "";
      var www = typeof window !== "undefined" && window.__config__ && window.__config__.portal ? _constants.SUBDOMAINS[window.__config__.portal.subDomain] : _defaultValues.DEFAULT_SUBDOMAIN;

      // Dans certain cas (agriexo quand la locale et déjà dans l'url, pour appeler les service comme ve-front-sso )
      // on doit prendre le domain et pas baseUrl comme baseURL
      var domainParamName = requestServiceParam && requestServiceParam.isUseDomainInsteadOfBaseUrl ? "domain" : "baseUrl";
      var config = {};
      // L'objet a été construit avec le paramètre requestServiceParam, on l'utilise pour configurer l'url
      if (requestServiceParam && requestServiceParam[domainParamName]) {
        baseUrl = requestServiceParam[domainParamName];
      } else if (
      // requestServiceParam n'est pas défini, on l'utilise window.__config__ pour configurer l'url
      typeof window !== "undefined" && window.__config__ && window.__config__.portal && window.__config__.portal[domainParamName]) {
        baseUrl = window.__config__.portal[domainParamName];
      }
      if (baseUrl !== "") {
        // baseUrl a été défini, on gere le protocole
        var protocol = (0, _startsWith["default"])(baseUrl.trim(), _defaultValues.DEFAULT_PROTOCOL) ? "" : "".concat(_defaultValues.DEFAULT_PROTOCOL, "://").concat(www, ".");
        // et on met a jour la config d'axios
        config.baseURL = protocol + baseUrl;
      }
      return config;
    }
  }]);
}();
var _default = exports["default"] = RequestService;