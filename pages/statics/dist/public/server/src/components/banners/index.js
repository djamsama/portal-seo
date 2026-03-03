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
var _component = _interopRequireDefault(require("@loadable/component"));
var _contextComponent = require("../contextComponent");
var _banners = require("./styles/banners");
var _bannersHelper = require("../../helpers/bannersHelper");
var _responsive = require("../styles/responsive");
var _constants = require("../../commons/constants.js");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Banners = (0, _component["default"])(function () {
  return import("./containers/bannersContainer");
});
var HeaderBanner = /*#__PURE__*/function (_ContextComponent) {
  function HeaderBanner(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, HeaderBanner);
    _this = _callSuper(this, HeaderBanner, [props, context]);
    var portalBanner = context.initData.portalBanner;
    _this.portalBanner = portalBanner;
    return _this;
  }
  (0, _inherits2["default"])(HeaderBanner, _ContextComponent);
  return (0, _createClass2["default"])(HeaderBanner, [{
    key: "render",
    value: function render() {
      var route = this.props.route;
      var clientDim = _responsive.bannersSizes.sizes.Lg;
      if (route === _constants.ROUTE_EXHIBIT_MANUFACTURER || route === _constants.ROUTE_EXHIBIT_DISTRIBUTOR) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
      }
      if (false) {
        if (window && window.innerWidth) {
          clientDim = _bannersHelper.BannersHelper.giveDimensionsFor(window.innerWidth);
        }
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          margin: "auto",
          width: "100%",
          maxWidth: clientDim.w
        }
      }, /*#__PURE__*/_react["default"].createElement(_banners.BannersDiv, {
        clientDim: clientDim,
        className: "adBr",
        id: "header-br"
      }, /*#__PURE__*/_react["default"].createElement(Banners, null)));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = HeaderBanner;