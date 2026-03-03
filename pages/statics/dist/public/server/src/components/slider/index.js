"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _reactFlickityComponent = _interopRequireDefault(require("react-flickity-component"));
var _slider = require("./styles/slider");
var _navigationHelper = _interopRequireDefault(require("../../helpers/navigationHelper"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable func-names */ /* eslint-disable react/require-default-props */ // $FlowFixMe
var DELAY = 5000;
/**
 * Slider pour l'affichage de tuile en mode caroussel
 */
var Slider = /*#__PURE__*/function (_Component) {
  function Slider(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Slider);
    _this = _callSuper(this, Slider, [props]);
    _this.state = {
      sliderRdy: false,
      showPagedots: false
    };
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleThisFlickity = _this.handleThisFlickity.bind(_this);
    _this.handleFlickityEvents = _this.handleFlickityEvents.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(Slider, _Component);
  return (0, _createClass2["default"])(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleFlickityEvents(this.flkty);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.handleFlickityEvents(this.flkty, true);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$flkty, _this$flkty2, _this$flkty3, _this$flkty4;
      this === null || this === void 0 || (_this$flkty = this.flkty) === null || _this$flkty === void 0 || _this$flkty.off("dragMove");
      this === null || this === void 0 || (_this$flkty2 = this.flkty) === null || _this$flkty2 === void 0 || _this$flkty2.off("select");
      this === null || this === void 0 || (_this$flkty3 = this.flkty) === null || _this$flkty3 === void 0 || _this$flkty3.off("ready");
      this === null || this === void 0 || (_this$flkty4 = this.flkty) === null || _this$flkty4 === void 0 || _this$flkty4.off("resize");
    }

    /**
     * Gestion du click.
     * @param {*} e L'évènement utilisateur
     */
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var _this$flkty5 = this.flkty,
        pageDots = _this$flkty5.pageDots,
        selectedIndex = _this$flkty5.selectedIndex;
      var showPagedots = this.state.showPagedots;
      if (pageDots && showPagedots) {
        _navigationHelper["default"].dotClick(e, pageDots.dots, pageDots.holder, selectedIndex);
      }
    }
  }, {
    key: "handleThisFlickity",
    value: function handleThisFlickity(c) {
      if (!c) {
        return;
      }
      this.flkty = c;
      this.handleFlickityEvents(c);
    }
  }, {
    key: "handleFlickityEvents",
    value: function handleFlickityEvents(currentFlickity) {
      var _this$flkty6,
        _this3 = this;
      if (!currentFlickity) {
        return;
      }
      var _this$props = this.props,
        autoRestart = _this$props.autoRestart,
        indexOneOnResize = _this$props.indexOneOnResize,
        doNotClickWhenDrag = _this$props.doNotClickWhenDrag;
      currentFlickity === null || currentFlickity === void 0 || currentFlickity.on("dragMove", function () {
        var _this2 = this;
        var pageDots = currentFlickity.pageDots,
          selectedIndex = currentFlickity.selectedIndex;
        if (pageDots) {
          _navigationHelper["default"].nextDot(pageDots.dots, pageDots.holder, selectedIndex);
        }
        if (autoRestart) {
          if (this.player.state === "stopped") {
            setTimeout(function () {
              _this2.player.play();
            }, DELAY);
          }
        }
      });
      if (indexOneOnResize) {
        currentFlickity.on("resize", function () {
          currentFlickity.select(1);
        });
      }
      (_this$flkty6 = this.flkty) === null || _this$flkty6 === void 0 || _this$flkty6.on("ready", function () {
        _this3.setState({
          sliderRdy: true
        });
        if ((currentFlickity === null || currentFlickity === void 0 ? void 0 : currentFlickity.slides.length) > 1) {
          _this3.setState({
            showPagedots: true
          });
        }
      });
      if (autoRestart) {
        currentFlickity.on("select", function () {
          var _this4 = this;
          if (this.player.state === "stopped") {
            setTimeout(function () {
              _this4.player.play();
            }, DELAY);
          }
        });
      }
      if (doNotClickWhenDrag) {
        /** permet de ne pas ouvrir de lien  quand on swipe */
        currentFlickity.on("dragStart", function () {
          return _this3.flkty.slider.style.pointerEvents = "none";
        });
        currentFlickity.on("dragEnd", function () {
          return _this3.flkty.slider.style.pointerEvents = "auto";
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;
      var options = this.props.options;
      var _this$state = this.state,
        sliderRdy = _this$state.sliderRdy,
        showPagedots = _this$state.showPagedots;
      var opt = _objectSpread(_objectSpread({}, options), {}, {
        pageDots: options.pageDots && showPagedots
      });

      // Tant que flickity n'est pas pret on ne l'affiche pas, et on affiche les enfants pour eviter l'effet de decalage.
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, sliderRdy && /*#__PURE__*/_react["default"].createElement(_slider.WrapperSlider, (0, _extends2["default"])({}, this.props, {
        sliderRdy: sliderRdy,
        onClick: function onClick(e) {
          return _this5.handleClick(e);
        },
        showButtons: true
      }), /*#__PURE__*/_react["default"].createElement(_reactFlickityComponent["default"], (0, _extends2["default"])({}, this.props, {
        options: opt,
        flickityRef: function flickityRef(c) {
          return _this5.handleThisFlickity(c);
        }
      }))), !sliderRdy && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_slider.WrapperSlider, (0, _extends2["default"])({}, this.props, {
        sliderRdy: true,
        style: {
          height: "435px",
          overflow: "hidden"
        },
        onClick: function onClick(e) {
          return _this5.handleClick(e);
        }
      }), /*#__PURE__*/_react["default"].createElement(_reactFlickityComponent["default"], (0, _extends2["default"])({}, this.props, {
        style: {
          display: "none"
        },
        flickityRef: function flickityRef(c) {
          _this5.handleThisFlickity(c);
        }
      })))));
    }
  }]);
}(_react.Component);
var _default = exports["default"] = Slider;
Slider.defaultProps = {
  doNotClickWhenDrag: true
};