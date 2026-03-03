"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _contextComponent = require("../contextComponent");
var _accordion = require("../animation/accordion");
var _responsive = _interopRequireDefault(require("../styles/responsive"));
var _link = require("../link");
var _universGroup = require("./styles/universGroup");
var _universGroupSubMenu = require("./styles/universGroupSubMenu");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // styles
var CategoryGroupItems = /*#__PURE__*/function (_ContextComponent) {
  function CategoryGroupItems() {
    (0, _classCallCheck2["default"])(this, CategoryGroupItems);
    return _callSuper(this, CategoryGroupItems, arguments);
  }
  (0, _inherits2["default"])(CategoryGroupItems, _ContextComponent);
  return (0, _createClass2["default"])(CategoryGroupItems, [{
    key: "renderCategoryUl",
    value:
    /**
     * Permet de désactiver l'animation sur la fermeture par défaut de l'accordéon
     */

    function renderCategoryUl() {
      var _this$props = this.props,
        isHome = _this$props.isHome,
        site = _this$props.site;
      var CategoryUl = isHome ? _universGroup.CategoryUl : _universGroupSubMenu.CategoryUl;
      var CategoryLi = isHome ? _universGroup.CategoryLi : _universGroupSubMenu.CategoryLi;
      var CategoryLink = isHome ? _universGroup.CategoryLink : _universGroupSubMenu.CategoryLink;
      return /*#__PURE__*/_react["default"].createElement(CategoryUl, {
        isHome: isHome
      }, this.props.items.map(function (item, index) {
        return /*#__PURE__*/_react["default"].createElement(CategoryLi, {
          key: item.label + index.toString(),
          isHome: isHome
        }, /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
          className: item && isHome && !item.linkUrl ? "univers-group-item" : "",
          component: CategoryLink,
          to: item.linkUrl,
          isHome: isHome,
          site: site
        }, item.label));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        parent = _this$props2.parent,
        isHome = _this$props2.isHome,
        items = _this$props2.items,
        defaultClose = _this$props2.defaultClose,
        visible = _this$props2.visible,
        handleClick = _this$props2.handleClick;
      var CategoryParent = isHome ? _universGroup.CategoryParent : _universGroupSubMenu.CategoryParent;
      var WrapperComponent = !_responsive["default"].isSmViewport() || isHome ? _accordion.Accordion : _react.Fragment;
      var WrapperComponentIsDefaultClose = !_responsive["default"].isSmViewport() || isHome ? {
        isDefaultClose: defaultClose
      } : {};
      var WrapperComponentIsVisible = !_responsive["default"].isSmViewport() || isHome ? {
        visible: visible
      } : {};
      return /*#__PURE__*/_react["default"].createElement("div", null, items && items.length > 1 && /*#__PURE__*/_react["default"].createElement(WrapperComponent, (0, _extends2["default"])({}, WrapperComponentIsVisible, WrapperComponentIsDefaultClose), !isHome && /*#__PURE__*/_react["default"].createElement(CategoryParent, {
        onClick: function onClick() {
          return handleClick();
        }
      }, parent), this.renderCategoryUl()), items && items.length <= 1 && this.renderCategoryUl());
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = CategoryGroupItems;