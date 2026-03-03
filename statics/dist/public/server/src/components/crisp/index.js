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
var _react = _interopRequireDefault(require("react"));
var _reactHelmet = require("react-helmet");
var _contextComponent = require("../contextComponent");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable react/no-danger */
var CrispWrapper = /*#__PURE__*/function (_ContextComponent) {
  function CrispWrapper() {
    (0, _classCallCheck2["default"])(this, CrispWrapper);
    return _callSuper(this, CrispWrapper, arguments);
  }
  (0, _inherits2["default"])(CrispWrapper, _ContextComponent);
  return (0, _createClass2["default"])(CrispWrapper, [{
    key: "render",
    value: function render() {
      var _this$context$initDat = this.context.initData,
        crispEnabled = _this$context$initDat.crispEnabled,
        crispId = _this$context$initDat.crispId,
        shopBrandUrl = _this$context$initDat.shopBrandUrl;
      var _this$props = this.props,
        shopProducts = _this$props.shopProducts,
        productShopLoaded = _this$props.productShopLoaded,
        productShop = _this$props.productShop,
        fa = _this$props.fa,
        legacy = _this$props.legacy;
      var scr = "window.$crisp=[];window.CRISP_WEBSITE_ID=\"".concat(crispId, "\"    ;(function(){d=document;s=d.createElement(\"script\");s.src=\"https://client.crisp.chat/l.js\";s.async=1;    d.getElementsByTagName(\"head\")[0].appendChild(s);})();");
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, crispEnabled && crispId && crispId !== "" && (productShopLoaded && productShop || shopProducts && shopProducts.length || fa || shopBrandUrl || legacy) && /*#__PURE__*/_react["default"].createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react["default"].createElement("script", {
        type: "text/javascript"
      }, scr)));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = CrispWrapper;