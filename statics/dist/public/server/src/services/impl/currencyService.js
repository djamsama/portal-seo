"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurrencyService = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _reactCookie = require("react-cookie");
var _requestService = _interopRequireDefault(require("./requestService"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable class-methods-use-this */ /* eslint-disable no-fallthrough */
// eslint-disable-next-line no-unused-vars
var singleton = Symbol("Currency service singleton");
var singletonEnforcer = Symbol("Currency service singleton");
var CurrencyService = exports.CurrencyService = /*#__PURE__*/function (_RequestService) {
  function CurrencyService(enforcer) {
    var _this;
    (0, _classCallCheck2["default"])(this, CurrencyService);
    _this = _callSuper(this, CurrencyService);
    if (enforcer !== singletonEnforcer) throw new Error("Cannot construct singleton");
    // TODO récupérer l'url du backend
    _this.rateUrl = "/ajax/currency/rates.json";
    if (window.__preloadData__) {
      _this.url = window.__preloadData__.ajaxCurrencyListUrl;
    } else {
      _this.url = "";
    }
    return _this;
  }
  (0, _inherits2["default"])(CurrencyService, _RequestService);
  return (0, _createClass2["default"])(CurrencyService, [{
    key: "getCurrencyList",
    value: function getCurrencyList() {
      var _this2 = this;
      if (!this.url || this.url === "") {
        if (window && window.__preloadData__) {
          this.url = window.__preloadData__.ajaxCurrencyListUrl;
        } else return Promise.reject();
      }
      var request = this.get(this.url);
      var that = this;
      return new Promise(function (resolve, reject) {
        if (_this2.url === "") Promise.reject();
        request.then(function (response) {
          var data = response.data.content;
          var items = [];
          data.forEach(function (elt) {
            return items.push({
              value: elt.currency,
              label: elt.label
            });
          });
          that.items = items;
          resolve(items);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "getRatesList",
    value: function getRatesList() {
      var request = this.get(this.rateUrl);
      var that = this;
      return new Promise(function (resolve, reject) {
        request.then(function (response) {
          var data = response && response.data ? response.data.content : null;
          if (!data || Object.keys(data).length <= 0) {
            reject(new Error("rates unavailable"));
          }
          that.rates = data;
          resolve(data);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }

    // eslint-disable-next-line class-methods-use-this
  }, {
    key: "setCurrency",
    value: function setCurrency(currency, context) {
      var cookies = new _reactCookie.Cookies();
      var cookieName = "cur".concat(context.config.portal.locale);
      cookies.set(cookieName, currency, {
        path: "/",
        domain: context.config.portal.domain
      });
    }
  }, {
    key: "getRates",
    value: function getRates() {
      var _this3 = this;
      var that = this;
      // eslint-disable-next-line consistent-return
      return new Promise(function (resolve, reject) {
        if (that.rates) {
          return resolve(that.rates);
        }
        _this3.getRatesList().then(function (response) {
          if (response) {
            that.rates = response;
            return resolve(that.rates);
          }
          return reject(new Error("devise non prise en compte"));
        })["catch"](function () {
          return reject(new Error("devise non prise en compte"));
        });
      });
    }
  }], [{
    key: "instance",
    get: function get() {
      if (!this.singleton) {
        this.singleton = new CurrencyService(singletonEnforcer);
      }
      return this.singleton;
    }
  }]);
}(_requestService["default"]);