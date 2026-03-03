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
var _stickyContainer = require("./styles/stickyContainer");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var StickyContainer = /*#__PURE__*/function (_Component) {
  function StickyContainer(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, StickyContainer);
    _this = _callSuper(this, StickyContainer, [props]);
    _this["float"] = _this["float"].bind(_this);
    _this.unFloat = _this.unFloat.bind(_this);
    _this.handleScroll = _this.handleScroll.bind(_this);
    _this.state = {
      floating: false,
      elementRef: /*#__PURE__*/_react["default"].createRef(),
      originalPos: 0
    };
    return _this;
  }
  (0, _inherits2["default"])(StickyContainer, _Component);
  return (0, _createClass2["default"])(StickyContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var floating = this.state.floating;
      if (floating !== false) {
        this.unFloat();
      }
      // Enregistrement de la position Y de l'élément sur la page lorsque il ne "float" pas
      this.setOriginalPosition();
      window.addEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "setOriginalPosition",
    value: function setOriginalPosition() {
      var elementRef = this.state.elementRef;
      this.setState({
        originalPos: window.scrollY + elementRef.current.getBoundingClientRect().y
      });
    }
  }, {
    key: "float",
    value: function _float() {
      this.setState({
        floating: true
      });
    }
  }, {
    key: "unFloat",
    value: function unFloat() {
      this.setState({
        floating: false
      });
    }

    /**
     * Fonction qui gere le mode d'affichage.
     */
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      var gap = this.props.gap;
      var _this$state = this.state,
        originalPos = _this$state.originalPos,
        floating = _this$state.floating;
      // Si on depasse la position Y originale du menu => float.
      if (window.scrollY + gap >= originalPos) {
        if (floating === false) {
          this["float"]();
        }
      } else if (floating !== false) {
        this.unFloat();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className;
      var _this$state2 = this.state,
        elementRef = _this$state2.elementRef,
        floating = _this$state2.floating;
      return /*#__PURE__*/_react["default"].createElement(_stickyContainer.Wrapper, {
        "float": floating,
        ref: elementRef,
        className: className + (floating ? " sticky" : "")
      }, children);
    }
  }]);
}(_react.Component);
var _default = exports["default"] = StickyContainer;