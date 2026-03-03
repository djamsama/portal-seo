"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _contextComponent = require("../../../contextComponent");
var _footerLinksSitesMap = require("./styles/footerLinksSitesMap");
var _link = require("../../../link");
var _constants = require("../../../../commons/constants");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable no-unused-vars */ /* eslint-disable no-restricted-syntax */
var FooterLinksSitesMap = /*#__PURE__*/function (_ContextComponent) {
  function FooterLinksSitesMap() {
    (0, _classCallCheck2["default"])(this, FooterLinksSitesMap);
    return _callSuper(this, FooterLinksSitesMap, arguments);
  }
  (0, _inherits2["default"])(FooterLinksSitesMap, _ContextComponent);
  return (0, _createClass2["default"])(FooterLinksSitesMap, [{
    key: "render",
    value: function render() {
      var _this = this;
      var _this$context$initDat = this.context.initData,
        footerLinksSitesMap = _this$context$initDat.footerLinksSitesMap,
        footerLinksVirtualExpo = _this$context$initDat.footerLinksVirtualExpo;
      var list = [];
      // $FlowFixMe
      for (var _i = 0, _Object$entries = Object.entries(footerLinksSitesMap); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        list.push({
          site: key,
          url: value
        });
      }
      var Component = _footerLinksSitesMap.FooterLinksSitesMapLogo;
      var isHome = this.context && this.context.config && this.context.config.route && this.context.config.route === _constants.ROUTE_HOME;
      return /*#__PURE__*/_react["default"].createElement(_footerLinksSitesMap.FooterLinksSitesMapWrapper, null, /*#__PURE__*/_react["default"].createElement(_footerLinksSitesMap.FooterLinksSitesMapWrapper, null, /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
        className: "ve",
        component: Component,
        to: footerLinksVirtualExpo,
        encrypt: !isHome,
        external: true
      }), list.map(function (value) {
        return /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
          key: "".concat(value === null || value === void 0 ? void 0 : value.site, "FooterLinksSitesMap"),
          className: value === null || value === void 0 ? void 0 : value.site,
          component: Component,
          to: value === null || value === void 0 ? void 0 : value.url,
          encrypt: !isHome || _this.context && _this.context.config && _this.context.config.portal && _this.context.config.portal.site && _this.context.config.portal.site.toLowerCase() === (value === null || value === void 0 ? void 0 : value.site.toLowerCase()),
          external: true
        });
      })));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = FooterLinksSitesMap;
FooterLinksSitesMap.propTypes = {
  footerLinksSitesMap: _propTypes["default"].string,
  footerLinksVirtualExpo: _propTypes["default"].string,
  // eslint-disable-next-line react/forbid-prop-types
  list: _propTypes["default"].object
};