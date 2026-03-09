"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UniverseGroupItem = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _responsive = _interopRequireDefault(require("../styles/responsive"));
var _contextComponent = require("../contextComponent");
var _CategoryGroupItems = _interopRequireDefault(require("./CategoryGroupItems"));
var _universGroupSubMenu = require("./styles/universGroupSubMenu");
var _universGroup = require("./styles/universGroup");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable no-unused-expressions */
var UniverseGroupItem = exports.UniverseGroupItem = /*#__PURE__*/function (_ContextComponent) {
  function UniverseGroupItem(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, UniverseGroupItem);
    _this = _callSuper(this, UniverseGroupItem, [props, context]);
    _this.state = {
      visible: props.visible || false,
      // defaultClose permet de désactiver l'animation sur un état visible à false par défaut
      defaultClose: props.defaultClose || false
    };
    _this.click = _this.click.bind(_this);
    _this.goTo = _this.goTo.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(UniverseGroupItem, _ContextComponent);
  return (0, _createClass2["default"])(UniverseGroupItem, [{
    key: "click",
    value: function click() {
      var _this$props = this.props,
        handleClick = _this$props.handleClick,
        items = _this$props.items;
      var newState = {};
      // Sur le click on force la réactivation de l'animation de l'accordéon (uniquement si le menu n'est pas affiché en mode mobile).
      if (!_responsive["default"].isSmViewport()) {
        if (this.state.defaultClose === true) {
          newState.defaultClose = false;
        }
      }
      if (this.state.visible === undefined) {
        newState.visible = true;
      } else {
        newState.visible = !this.state.visible;
      }
      if (handleClick) {
        this.setState(newState, function () {
          handleClick(items);
        });
      } else {
        this.setState(newState);
      }
    }
  }, {
    key: "goTo",
    value: function goTo() {
      var _this$props2 = this.props,
        noAccordeonLinkInsteadTo = _this$props2.noAccordeonLinkInsteadTo,
        items = _this$props2.items;
      var link = noAccordeonLinkInsteadTo;
      if (!link && items && items.length === 1) {
        link = items[0].linkUrl;
      }
      if (document && link) {
        document.location.href = link;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props3 = this.props,
        title = _this$props3.title,
        isHome = _this$props3.isHome,
        noAccordeonLinkInsteadTo = _this$props3.noAccordeonLinkInsteadTo,
        itemId = _this$props3.itemId;
      var hasChildren = this.props.items && this.props.items.length > 1;
      var directLink = !(_responsive["default"].isSmViewport && hasChildren) && (noAccordeonLinkInsteadTo || this.props.items && this.props.items.length <= 1);
      var arrowClassName = "";
      if (!_responsive["default"].isSmViewport()) {
        arrowClassName = this.state.visible === undefined || !this.state.visible ? "fa fa-angle-down" : "fa fa-angle-up";
      } else {
        arrowClassName = "";
      }
      var Arrow = isHome ? _universGroup.Arrow : _universGroupSubMenu.Arrow;
      var UniverseGroupItemComponent = isHome ? _universGroup.UniverseGroupItemComponent : _universGroupSubMenu.UniverseGroupItemComponent;
      var UniverseGroupLabel = isHome ? _universGroup.UniverseGroupLabel : _universGroupSubMenu.UniverseGroupLabel;
      var site = this.context && this.context.config && this.context.config.portal ? this.context.config.portal.site.toLowerCase() : undefined;
      return /*#__PURE__*/_react["default"].createElement(UniverseGroupItemComponent, {
        isHome: isHome,
        onClick: function onClick() {
          return directLink ? _this2.goTo() : _this2.click();
        },
        "data-cy": itemId ? "universGroupItemCy_".concat(itemId) : "universGroupItemCy_".concat(title)
      }, /*#__PURE__*/_react["default"].createElement(UniverseGroupLabel, {
        isHome: isHome,
        onClick: function onClick() {
          return directLink ? _this2.goTo() : _this2.click();
        },
        site: site
      }, title), hasChildren && /*#__PURE__*/_react["default"].createElement(Arrow, {
        className: arrowClassName,
        isHome: isHome,
        onClick: function onClick() {
          return noAccordeonLinkInsteadTo ? _this2.goTo() : _this2.click();
        }
      }), hasChildren && this.props.noAccordeonLinkInsteadTo && /*#__PURE__*/_react["default"].createElement(_CategoryGroupItems["default"], {
        isHome: isHome,
        noAccordeonLinkInsteadTo: noAccordeonLinkInsteadTo,
        visible: this.state.visible,
        items: this.props.items,
        handleClick: this.click,
        defaultClose: _responsive["default"].isSmViewport && !isHome,
        parent: title,
        site: site
      }), hasChildren && !this.props.noAccordeonLinkInsteadTo && /*#__PURE__*/_react["default"].createElement(_CategoryGroupItems["default"], {
        isHome: isHome,
        visible: this.state.visible,
        items: this.props.items,
        defaultClose: this.state.defaultClose,
        parent: title,
        handleClick: this.click,
        site: site
      }));
    }
  }]);
}(_contextComponent.ContextComponent); // $FlowFixMe
UniverseGroupItem.defaultProps = {
  isHome: false,
  noAccordeonLinkInsteadTo: null
};