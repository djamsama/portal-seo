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
var _reactFlickityComponent = _interopRequireDefault(require("react-flickity-component"));
var _collapseVe = _interopRequireDefault(require("../collapse/collapseVe"));
var _contextComponent = require("../contextComponent");
var _link = require("../link");
var _menuThumbnail = require("./styles/menuThumbnail");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // $FlowFixMe
var MenuThumbnail = exports["default"] = /*#__PURE__*/function (_ContextComponent) {
  function MenuThumbnail(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, MenuThumbnail);
    _this = _callSuper(this, MenuThumbnail, [props, context]);
    _this.state = {
      items: {},
      visible: false,
      pending: false,
      sliderReady: false
    };
    _this.handleClick = _this.handleClick.bind(_this);
    _this.selectItem = _this.selectItem.bind(_this);
    _this.collapsed = _this.collapsed.bind(_this);
    _this.item = null;
    _this.coordX = 0;
    _this.expended = false;
    _this.doNotClick = false;
    _this.isMobile = context && context.config ? context.config.isMobile : false;
    return _this;
  }
  (0, _inherits2["default"])(MenuThumbnail, _ContextComponent);
  return (0, _createClass2["default"])(MenuThumbnail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      if (this.flkty) {
        this.setState({
          sliderReady: true
        });
        this.flkty.on("dragStart", function () {
          /** permet de ne pas ouvrir d'univers quand on swipe */
          _this2.doNotClick = true;
        });
        this.flkty.on("staticClick", function () {
          _this2.doNotClick = false;
        });
      }
    }

    /**
     * Lorsque pending est a true c'est qu'un univers était ouvert
     * et qu'on a cliqué sur un autre (le premier est fermé lorsqu'on arrive ici)
     */
  }, {
    key: "collapsed",
    value: function collapsed() {
      var pending = this.state.pending;
      if (pending) {
        this.setState({
          pending: false
        });
      }
    }

    /**
     * on a cliqué sur un univers
     *
     * @param {MenuItem} item
     */
  }, {
    key: "selectItem",
    value: function selectItem(item) {
      this.item = item;
      if (!this.doNotClick) {
        this.handleClick(item);
      }
    }

    /* Ouverture/fermeture des univers */
  }, {
    key: "handleClick",
    value: function handleClick(item) {
      if (this.doNotClick) {
        return;
      }
      // this.expended contient les li de l'univers cliqué
      this.expended = /*#__PURE__*/_react["default"].createElement(_menuThumbnail.Category, null, item && item.subMenuItems.map(function (subItem) {
        return /*#__PURE__*/_react["default"].createElement(_menuThumbnail.CategoryLi, {
          key: "subItem".concat(subItem.label)
        }, /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
          component: _menuThumbnail.UniversLink,
          to: subItem.linkUrl
        }, subItem.label));
      }));
      var pending = !!(this.state.visible && this.state.visible !== item.id); // pending =true quand un univers est ouvert, il faut d'abord le fermer
      var visible = !this.state.visible || this.state.visible !== item.id ? item.id : false; // visible contient l'id de l'univers qu'on veut ouvrir, on false si on veut le fermer
      this.setState({
        visible: visible,
        pending: pending
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$state = this.state,
        visible = _this$state.visible,
        pending = _this$state.pending,
        sliderReady = _this$state.sliderReady;
      var menuItem = this.props.menuItem;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_menuThumbnail.UniversThumbnail, {
        className: "univers thumbnail"
      }, /*#__PURE__*/_react["default"].createElement(_menuThumbnail.UniversThumbnailWrapper, null, /*#__PURE__*/_react["default"].createElement(_menuThumbnail.UniversThumbnailRow, {
        className: this.flkty || sliderReady ? "ready" : "loading"
      }, menuItem && menuItem.subMenuItems && menuItem.subMenuItems.length > 0 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !this.flkty && /*#__PURE__*/_react["default"].createElement(_menuThumbnail.UniversThumbnailPlaceHolder, null, /*#__PURE__*/_react["default"].createElement("div", null), " ", /*#__PURE__*/_react["default"].createElement("div", null), " ", /*#__PURE__*/_react["default"].createElement("div", null), " ", /*#__PURE__*/_react["default"].createElement("div", null), " ", /*#__PURE__*/_react["default"].createElement("div", null)), /*#__PURE__*/_react["default"].createElement(_reactFlickityComponent["default"], {
        options: {
          prevNextButtons: false,
          pageDots: false,
          draggable: true,
          reloadOnUpdate: false,
          cellAlign: "left",
          resize: true,
          contain: true,
          freeScrollFriction: 0.03,
          friction: 0.8,
          selectedAttraction: 0.8,
          freeScroll: this.isMobile,
          imagesLoaded: true,
          lazyLoad: true
        },
        flickityRef: function flickityRef(c) {
          _this3.flkty = c;
          _this3.setState({
            sliderReady: true
          });
        }
      }, menuItem && menuItem.subMenuItems.map(function (item) {
        var imgSrc = item.imageUrl ? item.imageUrl : "".concat("https://img.virtual-expo.com", "/media/images/common/transparent-bkg.png");
        return /*#__PURE__*/_react["default"].createElement(_menuThumbnail.CategoryWrapper, {
          key: "menu".concat(item.id),
          onClick: function onClick() {
            return _this3.selectItem(item);
          },
          dataCy: "universeMenuMobile".concat(item.id)
        }, /*#__PURE__*/_react["default"].createElement(_menuThumbnail.CategoryLink, null, /*#__PURE__*/_react["default"].createElement(_menuThumbnail.UniverseImg, {
          src: imgSrc,
          alt: item.label
        }), /*#__PURE__*/_react["default"].createElement(_menuThumbnail.LabelUniverse, {
          selected: _this3.state.visible === item.id
        }, /*#__PURE__*/_react["default"].createElement("p", null, item.label))));
      })))))), /*#__PURE__*/_react["default"].createElement(_collapseVe["default"], {
        onRest: function onRest() {
          _this3.collapsed();
        },
        isOpened: visible && !pending
      }, this.expended));
    }
  }]);
}(_contextComponent.ContextComponent);