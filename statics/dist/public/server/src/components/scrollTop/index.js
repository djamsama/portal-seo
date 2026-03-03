"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _veDesignSystem = require("ve-design-system");
var _scrollTop = require("./styles/scrollTop");
var _scrollTopHelper = require("../../helpers/scrollTopHelper");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // $FlowFixMe
var ScrollTop = /*#__PURE__*/function (_Component) {
  function ScrollTop(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ScrollTop);
    _this = _callSuper(this, ScrollTop, [props]);
    _this.toggleVisibility = _this.toggleVisibility.bind(_this);
    _this.state = {
      scrollingTop: false
    };
    return _this;
  }
  (0, _inherits2["default"])(ScrollTop, _Component);
  return (0, _createClass2["default"])(ScrollTop, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var scrollingTop = this.state.scrollingTop;
      if (scrollingTop !== false) {
        this.setState({
          scrollingTop: false
        });
      }
      window.addEventListener("scroll", this.toggleVisibility);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.toggleVisibility);
    }
  }, {
    key: "toggleVisibility",
    value: function toggleVisibility() {
      var scrollingTop = this.state.scrollingTop;
      if (window.pageYOffset >= 800) {
        if (scrollingTop === false) {
          this.setState({
            scrollingTop: true
          });
        }
      } else if (scrollingTop !== false) {
        this.setState({
          scrollingTop: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _styles$colors;
      var scrollingTop = this.state.scrollingTop;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, scrollingTop && /*#__PURE__*/_react["default"].createElement(_scrollTop.ScrollTopContainer, {
        show: scrollingTop
      }, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        iconButton: true,
        rounded: true,
        themeColor: "light",
        onClick: ScrollTop.smoothScrollToTop
      }, /*#__PURE__*/_react["default"].createElement(_scrollTop.IconWith, {
        iconColor: _veDesignSystem.styles === null || _veDesignSystem.styles === void 0 || (_styles$colors = _veDesignSystem.styles.colors) === null || _styles$colors === void 0 ? void 0 : _styles$colors.monochrome.white,
        name: "arrow-up",
        iconSize: 24
      }))));
    }
  }], [{
    key: "smoothScrollToTop",
    value: function smoothScrollToTop() {
      _scrollTopHelper.ScrollTopHelper.scrollToTop(600);
    }
  }]);
}(_react.Component);
var _default = exports["default"] = ScrollTop;