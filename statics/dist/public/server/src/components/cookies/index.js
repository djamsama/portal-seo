"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _readOnlyError2 = _interopRequireDefault(require("@babel/runtime/helpers/readOnlyError"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@didomi/react");
var _contextComponent = require("../contextComponent");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var DidomiComponent = /*#__PURE__*/function (_ContextComponent) {
  function DidomiComponent(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, DidomiComponent);
    _this = _callSuper(this, DidomiComponent, [props, state]);
    _this.didomiObject = {};
    _this.onDidomiReady = _this.onDidomiReady.bind(_this);
    _this.consentHasChanged = _this.consentHasChanged.bind(_this);
    _this.setVendorStatus = _this.setVendorStatus.bind(_this);
    _this.setUserCookiesConsentStatus = _this.setUserCookiesConsentStatus.bind(_this);
    _this.doGa = _this.doGa.bind(_this);
    _this.queues = [];
    return _this;
  }

  /**
   * Called once we have the callback from the SDK informing that Didoni is loaded and ready
   */
  (0, _inherits2["default"])(DidomiComponent, _ContextComponent);
  return (0, _createClass2["default"])(DidomiComponent, [{
    key: "onDidomiReady",
    value: function onDidomiReady(didomi) {
      this.didomiObject = didomi;
      this.setVendorStatus();
      this.setUserCookiesConsentStatus();
    }
  }, {
    key: "doGa",
    value: function doGa(pushInQueue) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      if (!false) {
        return;
      }
      if (pushInQueue === "pushInQueue") {
        this.queues.push(args);
      }
      if ("gtag" in window) {
        while (this.queues.length !== 0) {
          var _window;
          var params = this.queues.shift();
          (_window = window).gtag.apply(_window, (0, _toConsumableArray2["default"])(params));
        }
      } else {
        // Si Google Analytics n'est pas encore chargé on réessaye dans 500 ms.
        setTimeout(this.doGa, 500, false);
      }
    }

    /**
     * Called everytime the consent changes
     */
  }, {
    key: "consentHasChanged",
    value: function consentHasChanged() {
      var gaConsent = this.didomiObject.getUserConsentStatusForVendor("c:googleana-4TXnJigR");
      if (gaConsent === true) {
        this.doGa("pushInQueue", ["consent", "update", {
          analytics_storage: "granted"
        }]);
        this.doGa("pushInQueue", ["js", new Date()]);
      } else {
        this.doGa("pushInQueue", ["consent", "update", {
          analytics_storage: "denied"
        }]);
        this.doGa("pushInQueue", ["js", new Date()]);
      }
      this.setVendorStatus();
      this.setUserCookiesConsentStatus();
    }
  }, {
    key: "setVendorStatus",
    value: function setVendorStatus() {
      var setVendorStatus = this.props.setVendorStatus;
      var status = this.didomiObject.getUserConsentStatusForVendor("google");
      setVendorStatus("google", status);
    }

    // On enregistre la valeur du consentement du visiteur pour les cookies de personnalisation du site web.
  }, {
    key: "setUserCookiesConsentStatus",
    value: function setUserCookiesConsentStatus() {
      var setUserCookiesConsentStatus = this.props.setUserCookiesConsentStatus;
      var isConsented = !window.didomiState || !window.didomiState.didomiPurposesConsentDenied || !window.didomiState.didomiPurposesConsentDenied.includes("cookiede-VJX99zxa");
      setUserCookiesConsentStatus("websiteCustomization", isConsented);
    }
  }, {
    key: "render",
    value: function render() {
      // DISABLE_DIDOMI : On désactive globalement didomi dans le cadre du beta test.
      var applyDidomiGlobally = false;
      var didomiKey = this.context && this.context.initData && this.context.initData.didomiKey ? this.context.initData.didomiKey : null;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, didomiKey && /*#__PURE__*/_react["default"].createElement(_react2.DidomiSDK, {
        apiKey: didomiKey,
        iabVersion: 2,
        onReady: this.onDidomiReady,
        onConsentChanged: this.consentHasChanged,
        gdprAppliesGlobally: applyDidomiGlobally
      }));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = DidomiComponent;