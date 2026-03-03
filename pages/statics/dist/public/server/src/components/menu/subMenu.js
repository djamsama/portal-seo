"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubMenuComponent = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _responsive = _interopRequireDefault(require("../styles/responsive"));
var _contextComponent = require("../contextComponent");
var _menuUniverse = require("./menuUniverse");
var _universeGroup = require("./universeGroup");
var _universGroupSubMenu = require("./styles/universGroupSubMenu");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var SubMenuComponent = exports.SubMenuComponent = /*#__PURE__*/function (_ContextComponent) {
  function SubMenuComponent() {
    var _this;
    (0, _classCallCheck2["default"])(this, SubMenuComponent);
    _this = _callSuper(this, SubMenuComponent);
    _this.state = {
      expanded: false,
      selectedItem: undefined
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(SubMenuComponent, _ContextComponent);
  return (0, _createClass2["default"])(SubMenuComponent, [{
    key: "handleClick",
    value: function handleClick(item) {
      var expanded = this.state.expanded;
      this.setState({
        expanded: !expanded,
        selectedItem: item
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        item = _this$props.item,
        handleClose = _this$props.handleClose;
      var _this$state = this.state,
        expanded = _this$state.expanded,
        selectedItem = _this$state.selectedItem;
      var renderComponent = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);

      // Si le menu item est un produit on ferme les accordéon des universes
      var subMenuVisible = !item.id === "PRODUCTS";
      if (item.isLoading === false && this.props.currentMenu === item.id) {
        var generator = function generator(itemGen, index) {
          return /*#__PURE__*/_react["default"].createElement(_universGroupSubMenu.UniverseGroupExpanded, {
            key: index,
            item: item,
            className: itemGen === selectedItem ? "expanded" : "collapsed"
          }, /*#__PURE__*/_react["default"].createElement(_universeGroup.UniverseGroupItem, {
            isHome: false,
            noAccordeonLinkInsteadTo: itemGen.linkUrl,
            title: itemGen.label,
            items: itemGen.subMenuItems,
            noArrow: false,
            visible: subMenuVisible || selectedItem === itemGen.subMenuItems,
            defaultClose: !subMenuVisible,
            handleClick: function handleClick() {
              return _responsive["default"].isSmViewport() ? _this2.handleClick(itemGen) : undefined;
            },
            itemId: "subMenu".concat(itemGen.id)
          }));
        };
        renderComponent = /*#__PURE__*/_react["default"].createElement(_universGroupSubMenu.Div, {
          ref: this.props.componentRef,
          visible: this.props.visible,
          className: expanded ? "expanded" : "collapsed"
        }, /*#__PURE__*/_react["default"].createElement(_universGroupSubMenu.Container, null, /*#__PURE__*/_react["default"].createElement(_universGroupSubMenu.MenuRow, null, /*#__PURE__*/_react["default"].createElement(_universGroupSubMenu.Ul, null, /*#__PURE__*/_react["default"].createElement(_menuUniverse.MenuUniverseComponent, {
          isHome: false,
          menu: item,
          generator: generator,
          handleClose: handleClose
        })))));
      }
      return renderComponent;
    }
  }]);
}(_contextComponent.ContextComponent);