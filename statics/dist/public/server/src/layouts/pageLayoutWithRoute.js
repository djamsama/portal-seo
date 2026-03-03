"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageLayoutWithRoute = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _uniqueId = _interopRequireDefault(require("lodash/uniqueId"));
var _styledComponents = require("styled-components");
var _contextComponent = require("../components/contextComponent");
var _theme = require("../components/theme");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var routeWithSubRoutes = function routeWithSubRoutes(route) {
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    key: (0, _uniqueId["default"])(),
    exact: route.exact || false,
    path: route.path,
    component: route.component,
    render: route.render
  });
};
var PageLayoutWithRoute = exports.PageLayoutWithRoute = /*#__PURE__*/function (_ContextComponent) {
  function PageLayoutWithRoute() {
    (0, _classCallCheck2["default"])(this, PageLayoutWithRoute);
    return _callSuper(this, PageLayoutWithRoute, arguments);
  }
  (0, _inherits2["default"])(PageLayoutWithRoute, _ContextComponent);
  return (0, _createClass2["default"])(PageLayoutWithRoute, [{
    key: "getTheme",
    value:
    /**
     * Recuperation du theme en fonction du site courant
     */
    function getTheme() {
      var globalLinksBaseImg = this.context.initData.globalLinksBaseImg;
      var portal = this.context.config.portal;
      var domain = portal.site.toLowerCase() || "";
      var t = _theme.theme[domain] || _theme.theme.di;
      t.logo = t.logo[0] === "/" ? globalLinksBaseImg + t.logo : t.logo;
      return t;
    }
  }, {
    key: "render",
    value: function render() {
      var routes = this.props.routes;
      var t = this.getTheme();
      return /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
        theme: t
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, routes.map(function (route) {
        return routeWithSubRoutes(route);
      })));
    }
  }]);
}(_contextComponent.ContextComponent);