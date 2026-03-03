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
var _responsive = _interopRequireDefault(require("../../../styles/responsive"));
var _mobileHeader = require("./styles/mobileHeader");
var _menu = _interopRequireDefault(require("./components/menu"));
var _logo = _interopRequireDefault(require("../logo"));
var _account = _interopRequireDefault(require("./components/account"));
var _searchContainer = _interopRequireDefault(require("../../../../containers/header/searchContainer"));
var _banners = _interopRequireDefault(require("../../../banners"));
var _contextComponent = require("../../../contextComponent");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/** Composant Header affiché sur mobile uniquement */
var MobileHeader = /*#__PURE__*/function (_ContextComponent) {
  function MobileHeader(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, MobileHeader);
    _this = _callSuper(this, MobileHeader, [props, state]);
    _this.handleScroll = _this.handleScroll.bind(_this);
    _this.getClassName = _this.getClassName.bind(_this);
    _this.state = {
      sticky: false,
      fixed: false,
      scrollPos: 0,
      scrollStartPos: 0,
      directionTop: false,
      top: 0
    };
    return _this;
  }

  /* Gestion du scroll. */
  (0, _inherits2["default"])(MobileHeader, _ContextComponent);
  return (0, _createClass2["default"])(MobileHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        scrollPos: -window.pageYOffset
      });
      if (_responsive["default"].isSmViewport()) {
        window.addEventListener("scroll", this.handleScroll);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "getClassName",
    value: function getClassName() {
      var _this$state = this.state,
        sticky = _this$state.sticky,
        fixed = _this$state.fixed;
      var className = "mobileHeaderWrapper";
      if (sticky) {
        className += " sticky";
      }
      if (fixed) {
        className += " top";
      }
      return className;
    }

    /**
     * Mise à jour de l'état du header en fonction du scroll de l'utilisateur :
     *  - scroll up : on affiche progressivement le header;
     *  - scroll down : on laisse disparaitre progressivement le header.
     */
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      var _this$state2 = this.state,
        scrollPos = _this$state2.scrollPos,
        scrollStartPos = _this$state2.scrollStartPos,
        directionTop = _this$state2.directionTop;
      var height = this.props.height;
      var currentScrollPos = window.pageYOffset;
      if (currentScrollPos > scrollPos) {
        // Scroll down
        if (directionTop) {
          // Changement de direction
          if (Math.abs(currentScrollPos - scrollStartPos) > height) {
            this.setState({
              directionTop: false,
              scrollStartPos: currentScrollPos
            });
          } else {
            this.setState({
              directionTop: false,
              scrollStartPos: this.element.getBoundingClientRect().top
            });
          }
        }
        if (currentScrollPos <= height) {
          // On n'interfère pas avec le scroll natif en haut de page
          this.setState({
            sticky: false,
            fixed: false,
            scrollPos: currentScrollPos
          });
          return;
        }
        var scrollAmount = currentScrollPos - scrollStartPos;
        if (scrollAmount < height) {
          // Le header disparait progressivement en suivant le scroll
          var scrollAmountPx = Math.min(scrollStartPos, currentScrollPos);
          this.setState({
            sticky: true,
            fixed: false,
            top: scrollAmountPx
          });
        }
      } else {
        // scroll up
        if (!directionTop) {
          // Changement de direction
          this.setState({
            directionTop: true
          });
          if (Math.abs(scrollStartPos - currentScrollPos) > height) {
            this.setState({
              scrollStartPos: currentScrollPos
            });
          } else {
            this.setState({
              scrollStartPos: height + this.element.getBoundingClientRect().top
            });
          }
          if (currentScrollPos <= height) {
            // On n'interfère pas avec le scroll natif en haut de page
            this.setState({
              sticky: false,
              fixed: false,
              scrollStartPos: height
            });
            return;
          }
        }
        var _scrollAmount = scrollStartPos - currentScrollPos;
        if (_scrollAmount <= height) {
          // Le header apparait progressivement en suivant le scroll
          var _scrollAmountPx = currentScrollPos + _scrollAmount - height;
          this.setState({
            sticky: true,
            fixed: false,
            top: _scrollAmountPx
          });
        } else {
          // Le header est figé en haut de page
          this.setState({
            sticky: false,
            fixed: true,
            top: 0
          });
        }
      }
      this.setState({
        scrollPos: currentScrollPos
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var top = this.state.top;
      var _this$props = this.props,
        height = _this$props.height,
        locale = _this$props.locale,
        currencyItems = _this$props.currencyItems,
        currentCurrency = _this$props.currentCurrency,
        onClickCurrency = _this$props.onClickCurrency,
        bannerEnabled = _this$props.bannerEnabled;
      var config = this.context.config;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_mobileHeader.HeaderPlaceHolder, {
        height: height
      }, /*#__PURE__*/_react["default"].createElement(_mobileHeader.HeaderWrapper, {
        ref: function ref(elem) {
          return _this2.element = elem;
        },
        height: height,
        positionY: top,
        className: this.getClassName()
      }, /*#__PURE__*/_react["default"].createElement(_mobileHeader.HeaderContent, null, /*#__PURE__*/_react["default"].createElement(_menu["default"], {
        locale: locale,
        currencyItems: currencyItems,
        currentCurrency: currentCurrency,
        onClickCurrency: onClickCurrency
      }), /*#__PURE__*/_react["default"].createElement(_logo["default"], {
        floating: true
      }), /*#__PURE__*/_react["default"].createElement(_mobileHeader.RightMenu, null, /*#__PURE__*/_react["default"].createElement(_account["default"], null), /*#__PURE__*/_react["default"].createElement(_searchContainer["default"], null))))), bannerEnabled && /*#__PURE__*/_react["default"].createElement(_banners["default"], {
        route: config.route
      }));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = MobileHeader;
MobileHeader.defaultProps = {
  height: 60,
  bannerEnabled: true
};