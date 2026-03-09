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
var _propTypes = _interopRequireDefault(require("prop-types"));
var _first = _interopRequireDefault(require("lodash/first"));
var _filter = _interopRequireDefault(require("lodash/filter"));
var _responsive = _interopRequireDefault(require("../styles/responsive"));
var _contextComponent = require("../contextComponent");
var _subMenu = require("./subMenu");
var _toggling = require("../animation/toggling");
var _link = require("../link");
var _withGoogleAnalytics = require("../../hoc/withGoogleAnalytics");
var _ul = _interopRequireDefault(require("./styles/ul"));
var _li = _interopRequireDefault(require("./styles/li"));
var _menuHeaderComponent = require("./styles/menuHeaderComponent");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // Styles
var RFQ = "RFQ";
var MenuHeaderComponent = /*#__PURE__*/function (_ContextComponent) {
  /**
   * @constructor
   * @param {MenuHeaderComponentProps} props
   * @param {*} context
   */
  function MenuHeaderComponent(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, MenuHeaderComponent);
    _this = _callSuper(this, MenuHeaderComponent, [props, context]);
    _this.toggleMobileMenu = _this.toggleMobileMenu.bind(_this);
    _this.toggleMenu = _this.toggleMenu.bind(_this);
    _this.resetMenu = _this.resetMenu.bind(_this);
    _this.selectMenu = _this.selectMenu.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);

    /**
     * Menu actuellement actif
     */
    _this.state = {
      selected: null,
      showMobileMenu: false,
      expanded: false
    };
    return _this;
  }

  /**
   * @return {MenuItem}  récupération du menuItem par id
   */
  (0, _inherits2["default"])(MenuHeaderComponent, _ContextComponent);
  return (0, _createClass2["default"])(MenuHeaderComponent, [{
    key: "_getMenuActive",
    value: function _getMenuActive() {
      var _this$props = this.props,
        menuItems = _this$props.menuItems,
        currentMenuItem = _this$props.currentMenuItem;
      return menuItems && (0, _first["default"])((0, _filter["default"])(menuItems, function (_ref) {
        var id = _ref.id;
        return id === currentMenuItem;
      })) || "";
    }
  }, {
    key: "handleClick",
    value: function handleClick(item) {
      var _this$props2 = this.props,
        googleAnalytics = _this$props2.googleAnalytics,
        GOOGLE_ANALYTICS_EVENTS = _this$props2.GOOGLE_ANALYTICS_EVENTS;
      if (item.id === RFQ && googleAnalytics && GOOGLE_ANALYTICS_EVENTS) {
        googleAnalytics.event({
          category: GOOGLE_ANALYTICS_EVENTS.RFQ_HEADER_MENU.CATEGORY,
          action: GOOGLE_ANALYTICS_EVENTS.RFQ_HEADER_MENU.ACTION,
          label: GOOGLE_ANALYTICS_EVENTS.RFQ_HEADER_MENU.LABEL
        });
      }
    }

    /**
     * Selection du menu
     * @param {MenuItem} item
     * @return {null}
     */
  }, {
    key: "selectMenu",
    value: function selectMenu(item) {
      if (item.id === this.state.selected && !_responsive["default"].isSmViewport()) {
        return;
      }
      var onSelectMenu = this.props.onSelectMenu;
      this.setState({
        selected: item.id,
        expanded: item.subMenuItemsActive
      });
      if (item.subMenuItemsActive) {
        this.props.loadMenu(item, onSelectMenu);
      }
    }

    /**
     * Reset du menu sur le onleave
     */
  }, {
    key: "resetMenu",
    value: function resetMenu() {
      this.props.resetMenu();
      // On reset aussi le state du selected
      this.setState({
        selected: null
      });
    }

    /** Ouverture/fermeture du sous-menu. */
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      var onSelectMenu = this.props.onSelectMenu;
      this.setState({
        expanded: !this.state.expanded
      });
      if (onSelectMenu) {
        onSelectMenu();
      }
    }

    /**
     * Methode du rendu de l'icone du menu
     * @param {MenuItem} item
     */
  }, {
    key: "toggleMobileMenu",
    value:
    /**
     * Afficher ou masquer le menu mobile(le elements masqués).
     */
    function toggleMobileMenu() {
      this.setState({
        showMobileMenu: !this.state.showMobileMenu
      });
    }

    /**
     * Methode du rendu du composant
     */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props3 = this.props,
        menuItems = _this$props3.menuItems,
        currentMenuItem = _this$props3.currentMenuItem;
      var expanded = this.state.expanded;
      var isMobile = this.context && this.context.config ? this.context.config.isMobile : false;
      var site = this.context && this.context.config && this.context.config.portal ? this.context.config.portal.site.toLowerCase() : undefined;
      if (menuItems && menuItems.length === 0) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
      }
      if (menuItems) {
        return /*#__PURE__*/_react["default"].createElement(_menuHeaderComponent.StyledColumn, {
          widthCustom: {
            lg: 6
          }
        }, /*#__PURE__*/_react["default"].createElement(_ul["default"], null, menuItems.map(function (item) {
          return /*#__PURE__*/_react["default"].createElement(_li["default"], {
            key: item.id
          }, /*#__PURE__*/_react["default"].createElement(_menuHeaderComponent.SubMenuWrapper, {
            className: expanded ? "expanded" : "collapsed"
          }, /*#__PURE__*/_react["default"].createElement(_toggling.TogglingComponent, {
            innerComponent: _subMenu.SubMenuComponent,
            visible: currentMenuItem === item.id,
            item: item,
            headerMenuSelected: currentMenuItem,
            currentMenu: currentMenuItem,
            onLeave: function onLeave() {
              if (!_responsive["default"].isSmViewport()) {
                _this2.resetMenu();
              }
            },
            handleClose: _this2.toggleMenu
          })), (!_responsive["default"].isSmViewport() && !isMobile || !item.subMenuItemsActive) && /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
            "data-cy": "directLinkHeader_".concat(item.id),
            component: _menuHeaderComponent.DirectLink,
            to: item.linkUrl,
            actif: _responsive["default"].isSmViewport() ? false : item.active,
            onMouseEnter: function onMouseEnter() {
              return _this2.selectMenu(item);
            },
            onClick: function onClick() {
              return _this2.handleClick(item);
            },
            encrypt: item.encryptLink,
            target: item.openInNewTab ? "_blank" : "_self",
            site: site
          }, item.label, MenuHeaderComponent._renderMenuIcon(item)), (_responsive["default"].isSmViewport() || isMobile) && item.subMenuItemsActive && /*#__PURE__*/_react["default"].createElement(_menuHeaderComponent.ExpandLink, {
            onClick: function onClick() {
              return _this2.selectMenu(item);
            },
            "data-cy": "ExpandLink".concat(item.id),
            site: site
          }, item.label, MenuHeaderComponent._renderMenuIcon(item)));
        })));
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
    }
  }], [{
    key: "_renderMenuIcon",
    value: function _renderMenuIcon(item) {
      if (item.subMenuItemsActive === false) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
      }
      if (item.isLoading === false && !_responsive["default"].isSmViewport()) {
        return /*#__PURE__*/_react["default"].createElement(_menuHeaderComponent.StyledArrow, {
          className: "fa fa-angle-down"
        });
      }
      if (item.isLoading === false && _responsive["default"].isSmViewport()) {
        return /*#__PURE__*/_react["default"].createElement(_menuHeaderComponent.StyledArrow, null);
      }
      return /*#__PURE__*/_react["default"].createElement(_menuHeaderComponent.StyledArrow, {
        className: "fa fa-spinner fa-spin"
      });
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)(MenuHeaderComponent); // $FlowFixMe
MenuHeaderComponent.propsType = {
  /**
   * Tableau des menus
   */
  menuItems: _propTypes["default"].array,
  /**
   * CurrentMenuItem est le menu survolé
   */
  currentMenuItem: _propTypes["default"].object
};