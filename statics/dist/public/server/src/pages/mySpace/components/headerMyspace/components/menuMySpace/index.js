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
var _contextComponent = require("../../../../../../components/contextComponent");
var _menuMySpace = require("./styles/menuMySpace");
var _link = require("../../../../../../components/link");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var MenuMySpace = /*#__PURE__*/function (_ContextComponent) {
  function MenuMySpace(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, MenuMySpace);
    _this = _callSuper(this, MenuMySpace, [props, context]);
    _this.getTabState = _this.getTabState.bind(_this);
    _this.state = {
      expanded: false
    };
    return _this;
  }

  /** Gestion de l'ouverture/fermeture du pseudo dropdown menu. */
  (0, _inherits2["default"])(MenuMySpace, _ContextComponent);
  return (0, _createClass2["default"])(MenuMySpace, [{
    key: "toggleNavDropdown",
    value: function toggleNavDropdown() {
      var expanded = this.state.expanded;
      this.setState({
        expanded: !expanded
      });
    }

    /**
     * Récupération de l'état d'un tab.
     * @param {*} key la clé du tab
     * @param {*} link le lien
     */
  }, {
    key: "getTabState",
    value: function getTabState(key) {
      if (this.currentTab === key) {
        return "active";
      }
      return "";
    }

    /**
     * Blur du dropdown menu si le click est en dehors de l'élément et de son contenu.
     * @param {CustomMouseEvent} event l'évènement
     */
  }, {
    key: "hideTabs",
    value: function hideTabs(event) {
      if (event.relatedTarget && event.relatedTarget.className && event.relatedTarget.className.includes("myspace-header-tab")) {
        return;
      }
      this.setState({
        expanded: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var mySpaceNavigationLinks = this.context.initData.mySpaceNavigationLinks;
      var expanded = this.state.expanded;
      var tabs = [{
        key: "fo_myspace_header_myProfileLabel",
        link: mySpaceNavigationLinks.accountUrl
      }, {
        key: "fo_myspace_header_mySubscriptionsLabel",
        link: mySpaceNavigationLinks.subscriptionUrl
      }, {
        key: "fo_myspace_header_myBookmarksLabel",
        link: mySpaceNavigationLinks.bookmarkUrl
      }, {
        key: "fo_myspace_header_myRequestsLabel",
        link: mySpaceNavigationLinks.requestUrl
      }];
      var current = tabs.find(function (element) {
        return element.link === _this2.context.initData.currentRouteContext.url;
      });
      this.currentTab = current ? current.key : tabs[3].key;
      return /*#__PURE__*/_react["default"].createElement(_menuMySpace.HeaderMySpaceNavContainer, null, /*#__PURE__*/_react["default"].createElement(_menuMySpace.MobileNavDropdown, {
        as: "button",
        onClick: function onClick() {
          return _this2.toggleNavDropdown();
        },
        className: "btn btn-nav-mobile",
        onBlur: function onBlur(e) {
          return _this2.hideTabs(e);
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: this.currentTab
      })), /*#__PURE__*/_react["default"].createElement("ul", {
        className: expanded ? "myspace-header-nav expanded" : "myspace-header-nav"
      }, tabs.map(function (tab) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: tab.key,
          className: _this2.getTabState(tab.key)
        }, /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
          to: tab.link,
          className: "myspace-header-tab"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: tab.key
        })));
      })));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = MenuMySpace;