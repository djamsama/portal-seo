"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalHelper = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _reactDeviceDetect = require("react-device-detect");
var GlobalHelper = exports.GlobalHelper = /*#__PURE__*/function () {
  function GlobalHelper() {
    (0, _classCallCheck2["default"])(this, GlobalHelper);
  }
  return (0, _createClass2["default"])(GlobalHelper, null, [{
    key: "isMobileDevice",
    value: function isMobileDevice() {
      return _reactDeviceDetect.isMobile;
    }
  }, {
    key: "mobilecheck",
    value: function mobilecheck() {
      return GlobalHelper.isMobileDevice();
    }
  }, {
    key: "isOsxMobileDevice",
    value: function isOsxMobileDevice() {
      return _reactDeviceDetect.isIOS && GlobalHelper.isMobileDevice();
    }
  }, {
    key: "isAllMobileDevice",
    value: function isAllMobileDevice() {
      return GlobalHelper.isMobileDevice();
    }

    /**
     * Returns true if device type is mobile
     */
  }, {
    key: "isMobileOnly",
    value: function isMobileOnly() {
      return _reactDeviceDetect.isMobileOnly;
    }
  }, {
    key: "isAndroidMobileApplication",
    value: function isAndroidMobileApplication() {
      var ua = _reactDeviceDetect.getUA;
      return /VE-PORTAL-APP-ANDROID/i.test(ua);
    }
  }, {
    key: "isTablette",
    value: function isTablette() {
      return _reactDeviceDetect.isTablet;
    }
  }, {
    key: "isMobileApplication",
    value: function isMobileApplication() {
      /* eslint-disable no-undef */
      // $FlowFixMe
      if (false && document && document.body) {
        return document.body.className.indexOf("mobile-app") >= 0;
      }
      return false;
    }
  }, {
    key: "isEdge",
    value: function isEdge() {
      return _reactDeviceDetect.isEdge;
    }
  }, {
    key: "isIE",
    value: function isIE() {
      return _reactDeviceDetect.isIE;
    }
  }, {
    key: "isSafari",
    value: function isSafari() {
      return _reactDeviceDetect.isSafari;
    }
  }, {
    key: "isMicrosoft",
    value: function isMicrosoft() {
      return GlobalHelper.isIE() || GlobalHelper.isEdge();
    }
  }, {
    key: "getUA",
    value: function getUA() {
      return _reactDeviceDetect.getUA;
    }

    // isAllMobile and isOsxMobileDevice dont work with safari browser
  }, {
    key: "isIOSMobileDevice",
    value: function isIOSMobileDevice() {
      return /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
    }
  }, {
    key: "isTabletSmall",
    value: function isTabletSmall() {
      var userAgent = navigator.userAgent.toLowerCase();
      return /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
    }
  }, {
    key: "isIosOnSafari",
    value: function isIosOnSafari() {
      return GlobalHelper.isSafari() && GlobalHelper.isIOSMobileDevice();
    }
  }, {
    key: "generateKey",
    value: function generateKey(pre) {
      return "".concat(pre, "_").concat(new Date().getTime(), "_").concat(Math.random());
    }

    /**
     * Tri les éléments d'un tableau aléatoirement.
     * @param {type} elements
     *
     * return un nouveau tableau random
     */
  }, {
    key: "shuffle",
    value: function shuffle(elements) {
      var newElements = (0, _toConsumableArray2["default"])(elements);
      return newElements.map(function (a) {
        return {
          sort: Math.random(),
          value: a
        };
      }).sort(function (a, b) {
        return a.sort - b.sort;
      }).map(function (a) {
        return a.value;
      });
    }
  }, {
    key: "isInViewPort",
    value: function isInViewPort(element) {
      if (window && element && document && document.documentElement) {
        var bounding = element.getBoundingClientRect();
        return bounding.top >= 0 && bounding.left >= 0 &&
        // $FlowFixMe
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        // $FlowFixMe
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth);
      }
      return false;
    }
  }, {
    key: "removeHtml",
    value: function removeHtml(htmlText) {
      var oneSpan = document.createElement("span");
      oneSpan.innerHTML = htmlText;
      var txt = oneSpan.textContent;
      return txt;
    }
  }]);
}();