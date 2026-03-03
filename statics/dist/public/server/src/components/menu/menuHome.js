"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuHome = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _first = _interopRequireDefault(require("lodash/first"));
var _filter = _interopRequireDefault(require("lodash/filter"));
var _contextComponent = require("../contextComponent");
var _universeGroup = require("./universeGroup");
var _universGroup = require("./styles/universGroup");
var _menuUniverse = require("./menuUniverse");
var _menuThumbnail = _interopRequireDefault(require("./menuThumbnail"));
var _responsive = _interopRequireDefault(require("../styles/responsive"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable flowtype/space-after-type-colon */
var MenuHome = exports.MenuHome = /*#__PURE__*/function (_ContextComponent) {
  function MenuHome(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, MenuHome);
    _this = _callSuper(this, MenuHome, [props, context]);
    _this.menuItems = _this.context.initData.menuItems;
    _this.subMenuItems = _this.context.initData.subMenuItems;
    _this.handleResize = _this.handleResize.bind(_this);
    _this.isSmViemport = _responsive["default"].isSmViewport();
    _this.menuItemActive = _this._getMenuActive();
    _this.isMobile = context && context.config ? context.config.isMobile : false;
    _this.state = {
      isSmViemport: _responsive["default"].isSmViewport() /* , afterDidMount: false */
    };
    return _this;
  }
  (0, _inherits2["default"])(MenuHome, _ContextComponent);
  return (0, _createClass2["default"])(MenuHome, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.isSmViemport = _responsive["default"].isSmViewport();
      window.addEventListener("resize", this.handleResize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      this.isSmViemport = _responsive["default"].isSmViewport();
      if (this.isSmViemport !== this.state.isSmViemport) {
        this.setState({
          isSmViemport: this.isSmViemport
        });
      }
    }
  }, {
    key: "_getMenuActive",
    value: function _getMenuActive() {
      var activeMenu = this.menuItems && (0, _first["default"])((0, _filter["default"])(this.menuItems, function (_ref) {
        var active = _ref.active;
        return active === true;
      })) || "";
      if (activeMenu && this.subMenuItems) {
        activeMenu.subMenuItemsActive = true;
        activeMenu.subMenuItems = this.subMenuItems;
      }
      return activeMenu;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$subMenuItems;
      var heightBlock = this.subMenuItems && ((_this$subMenuItems = this.subMenuItems) === null || _this$subMenuItems === void 0 ? void 0 : _this$subMenuItems.length) > 0 ? 49 * this.subMenuItems.length / 2 : 300;
      if ((_responsive["default"].isSmViewport() || this.isMobile) && this.menuItems !== undefined && this.menuItems && this.menuItems.length > 0 && this.menuItemActive !== undefined) {
        return /*#__PURE__*/_react["default"].createElement(_universGroup.PlaceHolderUniverseMobile, {
          isMobile: this.isMobile,
          heightBlock: heightBlock,
          "data-cy": "phm"
        }, /*#__PURE__*/_react["default"].createElement(_universGroup.OnlyMobile, {
          isMobile: this.isMobile
        }, /*#__PURE__*/_react["default"].createElement(_menuThumbnail["default"], {
          heightBlock: heightBlock,
          menuItem: this.menuItemActive
        })));
      }
      if (this.menuItems !== undefined && this.menuItems && this.menuItems.length > 0 && this.menuItemActive !== undefined) {
        var generator = function generator(item, index) {
          return /*#__PURE__*/_react["default"].createElement(_universGroup.UniverseGroup, {
            itemId: item.id,
            key: item.label + index,
            isHome: true
          }, /*#__PURE__*/_react["default"].createElement(_universeGroup.UniverseGroupItem, {
            itemId: item.id,
            title: item.label,
            items: item.subMenuItems,
            isHome: true,
            defaultClose: true
          }));
        };
        return /*#__PURE__*/_react["default"].createElement(_universGroup.PlaceHolderUniverse, {
          isMobile: this.isMobile,
          heightBlock: heightBlock,
          "data-cy": "phd"
        }, /*#__PURE__*/_react["default"].createElement(_universGroup.OnlyDesktop, null, /*#__PURE__*/_react["default"].createElement(_menuUniverse.MenuUniverseComponent, {
          menu: this.menuItemActive,
          generator: generator,
          isHome: true
        })));
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
    }
  }]);
}(_contextComponent.ContextComponent);