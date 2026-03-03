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
var _reactIntl = require("react-intl");
var _link = require("../../../../../link");
var _contextComponent = require("../../../../../contextComponent");
var _menuHeaderContainer = _interopRequireDefault(require("../../../../../../containers/menu/menuHeaderContainer"));
var _mySpaceLinkContainer = _interopRequireDefault(require("../../../../../../containers/header/mySpaceLinkContainer"));
var _selectedLanguage = _interopRequireDefault(require("../../../dropDownCountry/components/selectedLanguage"));
var _availableLanguages = _interopRequireDefault(require("../../../dropDownCountry/components/availableLanguages"));
var _selectedCurrency = _interopRequireDefault(require("../../../dropDownCurrency/components/selectedCurrency"));
var _availableCurrencies = _interopRequireDefault(require("../../../dropDownCurrency/components/availableCurrencies"));
var _menu = require("./styles/menu");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var MENU_ELEMENT = {
  LANGUAGE: "LANGUAGE",
  CURRENCY: "CURRENCY",
  MENU: "MENU"
};
/** Menu - version mobile. */
var Menu = /*#__PURE__*/function (_ContextComponent) {
  function Menu(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, Menu);
    _this = _callSuper(this, Menu, [props, state]);
    _this.state = {
      active: false,
      subMenuList: [],
      selected: undefined
    };
    _this.changeCurrency = _this.changeCurrency.bind(_this);
    _this.selectMenu = _this.selectMenu.bind(_this);
    _this.closeMenu = _this.closeMenu.bind(_this);
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(Menu, _ContextComponent);
  return (0, _createClass2["default"])(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("mousedown", this.handleClickOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }

    /** Fermeture du menu sur un click en dehors. */
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside(event) {
      if (this.menuElement && !this.menuElement.contains(event.target)) {
        this.setState({
          active: false
        });
      }
    }

    /** Mise à jour de la devise sur tous le site puis fermeture du sous-menu. */
  }, {
    key: "changeCurrency",
    value: function changeCurrency(currency, context) {
      var _this$props = this.props,
        onClickCurrency = _this$props.onClickCurrency,
        currentCurrency = _this$props.currentCurrency;
      onClickCurrency(currency, context, currentCurrency);
      this.setState({
        selected: undefined
      });
    }

    /** Sélection d'un élément du menu. Si un sous menu est défini, il prendra la place du menu. */
  }, {
    key: "selectMenu",
    value: function selectMenu() {
      var selected = this.state.selected;
      if (selected !== MENU_ELEMENT.MENU) {
        this.setState({
          selected: MENU_ELEMENT.MENU
        });
      } else {
        this.setState({
          selected: undefined
        });
      }
    }

    /** Fermeture du menu: réinitialisation des l'état des sous-menu et fermeture du panel. */
  }, {
    key: "closeMenu",
    value: function closeMenu() {
      this.setState({
        /* selected: undefined, */active: !this.state.active
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$state = this.state,
        active = _this$state.active,
        selected = _this$state.selected;
      var _this$props2 = this.props,
        intl = _this$props2.intl,
        locale = _this$props2.locale,
        currentCurrency = _this$props2.currentCurrency,
        currencyItems = _this$props2.currencyItems;
      var headerLinksNavcontactUs = this.context.initData.headerLinksNavcontactUs;
      return /*#__PURE__*/_react["default"].createElement(_menu.Wrapper, {
        ref: function ref(elem) {
          return _this2.menuElement = elem;
        }
      }, /*#__PURE__*/_react["default"].createElement(_menu.MenuLinkWrapper, {
        onClick: function onClick() {
          return _this2.closeMenu();
        },
        collapsed: !active
      }, /*#__PURE__*/_react["default"].createElement(_menu.MenuLinkBox, {
        "data-cy": "menuLinkBox"
      }, /*#__PURE__*/_react["default"].createElement(_menu.MenuLinkInner, {
        "data-cy": "menuLinkInner",
        className: active ? "is-active" : ""
      }))), /*#__PURE__*/_react["default"].createElement(_menu.MenuWrapper, {
        collapsed: !active
      }, /*#__PURE__*/_react["default"].createElement(_menu.Panels, null, /*#__PURE__*/_react["default"].createElement(_menu.MenuPanel, {
        className: selected ? "subMenuPanel" : "menuPanel"
      }, /*#__PURE__*/_react["default"].createElement(_selectedLanguage["default"], {
        lang: locale,
        isOpened: false,
        onClick: function onClick() {
          return _this2.setState({
            selected: MENU_ELEMENT.LANGUAGE
          });
        }
      }), /*#__PURE__*/_react["default"].createElement(_selectedCurrency["default"], {
        currentCurrency: currentCurrency,
        currencyItems: currencyItems,
        onClick: function onClick() {
          return _this2.setState({
            selected: MENU_ELEMENT.CURRENCY
          });
        }
      }), /*#__PURE__*/_react["default"].createElement(_menuHeaderContainer["default"], {
        onSelectMenu: this.selectMenu
      }), /*#__PURE__*/_react["default"].createElement(_mySpaceLinkContainer["default"], {
        asIcon: false,
        mobileDisplay: true
      }), /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
        component: _menu.Exhibit,
        to: headerLinksNavcontactUs,
        encrypt: true
      }, intl.formatMessage({
        id: "Fo_Layout_Header_Contact_Us"
      }))), /*#__PURE__*/_react["default"].createElement(_menu.LangMenuPanel, {
        className: selected !== MENU_ELEMENT.LANGUAGE ? "collapsed" : "expanded",
        "data-cy": "langMenuPanel"
      }, /*#__PURE__*/_react["default"].createElement(_availableLanguages["default"], {
        lang: locale
      })), /*#__PURE__*/_react["default"].createElement(_menu.CurrencyMenuPanel, {
        className: selected !== MENU_ELEMENT.CURRENCY ? "collapsed" : "expanded",
        "data-cy": "currencyMenuPanel"
      }, /*#__PURE__*/_react["default"].createElement(_availableCurrencies["default"], {
        currentCurrency: currentCurrency,
        currencyItems: currencyItems,
        onClick: this.changeCurrency
      })))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(Menu);
Menu.defaultProps = {};