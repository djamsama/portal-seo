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
var _rxjs = require("rxjs");
var _requestService = _interopRequireDefault(require("./requestService"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var MangopayCardOrderService = /*#__PURE__*/function (_RequestService) {
  function MangopayCardOrderService() {
    var _this;
    (0, _classCallCheck2["default"])(this, MangopayCardOrderService);
    _this = _callSuper(this, MangopayCardOrderService);
    _this.mangoPay = {};
    _this.mangoPay.cardRegistration = {};
    return _this;
  }
  (0, _inherits2["default"])(MangopayCardOrderService, _RequestService);
  return (0, _createClass2["default"])(MangopayCardOrderService, [{
    key: "init",
    value: function init(cardRegisterData) {
      this.mangoPay.cardRegistration._cardRegisterData = cardRegisterData;
    }
  }, {
    key: "setRegistrationData",
    value: function setRegistrationData(data) {
      this.mangoPay.cardRegistration._cardRegisterData.registrationData = data;
      this.mangoPay.cardRegistration.registrationData = data;
    }
  }, {
    key: "getCardRegistrationData",
    value: function getCardRegistrationData() {
      return this.mangoPay.cardRegistration._cardRegisterData;
    }

    /**
     * PRIVATE -- Returns true if browser is capable of making cross-origin Ajax calls
     */
  }, {
    key: "checkCorsSupport",
    value: function checkCorsSupport() {
      // Test if runtime is React Native
      return window.navigator.product === "ReactNative" ? true :
      // IE 10 and above, Firefox, Chrome, Opera etc.
      "withCredentials" in new XMLHttpRequest() ? true :
      // IE 8 and IE 9
      !!window.XDomainRequest;
    }

    /**
     * Gets Payline token for the card
     *
     * @param {object} cardData Sensitive card details {cardNumber, cardExpirationDate, cardCvx, cardType}
     */
  }, {
    key: "tokenizeCard",
    value: function tokenizeCard(cardData) {
      // Browser is not capable of making cross-origin Ajax calls
      if (!this.checkCorsSupport()) {
        throw new Error("Browser does not support making cross-origin Ajax calls"); // displayError(
      }
      // Get Payline token
      return (0, _rxjs.from)(this.tokenizationAjaxCall({
        // Payline expects POST
        type: "post",
        // Payline service URL obtained from the mangoPay.cardRegistration.init() call
        url: this.mangoPay.cardRegistration._cardRegisterData.cardRegistrationUrl,
        // Force CORS
        crossDomain: true,
        // Sensitive card data plus pre-registration data and access key received from the mangoPay.cardRegistration.init() call
        data: {
          data: this.mangoPay.cardRegistration._cardRegisterData.preregistrationData,
          accessKeyRef: this.mangoPay.cardRegistration._cardRegisterData.accessKey,
          cardNumber: cardData.cardNumber,
          cardExpirationDate: cardData.cardExpirationDate,
          cardCvx: cardData.cardCvx
        }
      }));
    }
  }, {
    key: "tokenizationAjaxCall",
    value: function tokenizationAjaxCall(settings) {
      return new Promise(function (resolve, reject) {
        // XMLHttpRequest object
        var xmlhttp = new XMLHttpRequest();
        // Put together input data as string
        var parameters = "";
        for (var key in settings.data) {
          parameters += "".concat((parameters.length > 0 ? "&" : "") + key, "=").concat(encodeURIComponent(settings.data[key]));
        }

        // URL to hit, with parameters added for GET request
        var url = settings.url;
        if (settings.type === "get") {
          url = settings.url + (settings.url.indexOf("?") > -1 ? "&" : "?") + parameters;
        }
        function _on_exception(req, exc) {
          var code;
          var msg;
          if (settings.crossDomain) {
            code = "001598";
            msg = "A cross-origin HTTP request failed";
          } else {
            code = "001597";
            msg = "An HTTP request failed";
          }
          if (exc && exc.message.length) {
            msg = "".concat(msg, ": ").concat(exc.message);
          }
          displayError(mangoPay._errorMsg, msg);
        }

        // Cross-domain requests in IE 7, 8 and 9 using XDomainRequest
        if (settings.crossDomain && !("withCredentials" in xmlhttp) && window.XDomainRequest) {
          var xdr = new XDomainRequest();
          xdr.onerror = function () {
            displayError(mangoPay._errorMsg, xdr);
          };
          xdr.onload = function () {
            // Something wrong, no data came back from Payline
            if (xdr.responseText !== null && xdr.responseText.indexOf("errorCode=") === 0 || xdr.responseText === null) {
              displayError(mangoPay._errorMsg, "Token processing error");
            }
            return xdr.responseText;
          };
          try {
            xdr.open("settings.type", url);
            xdr.send(settings.type === "post" ? parameters : null);
          } catch (e) {
            return _on_exception(xdr, e);
          }
          return;
        }

        // Open connection
        try {
          xmlhttp.open(settings.type, url, true);
        } catch (e) {
          return _on_exception(xmlhttp, e);
        }

        // Send extra header for POST request
        if (settings.type === "post") {
          xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        }

        // Send data
        try {
          xmlhttp.send(settings.type === "post" ? parameters : null);
        } catch (e) {
          return _on_exception(xmlhttp, e);
        }
        xmlhttp.onreadystatechange = function () {
          if (xmlhttp.readyState == 4) {
            if (/^2[0-9][0-9]$/.test(xmlhttp.status)) {
              // Something wrong, no data came back from Payline
              if (xmlhttp.responseText !== null && xmlhttp.responseText.indexOf("errorCode=") === 0 || xmlhttp.responseText === null) {
                return reject(new Error(""));
              }
              return resolve(xmlhttp.responseText);
            }
            return reject(new Error(""));
          }
        };
      });
    }
  }]);
}(_requestService["default"]);
var _default = exports["default"] = MangopayCardOrderService;