"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _picture = _interopRequireDefault(require("../picture"));
var _carousel = require("./styles/carousel");
var _mediaWrapper = _interopRequireDefault(require("./components/mediaWrapper"));
var _button = _interopRequireDefault(require("./components/button"));
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
// Modifier selon la structure du tableau passé au MediaWrapper
var Carousel = /*#__PURE__*/function (_React$Component) {
  function Carousel(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Carousel);
    _this = _callSuper(this, Carousel, [props]);
    _this.state = {
      slideIndex: 0,
      positionTracker: 0,
      totalSlides: 0,
      indexIsSet: false,
      touchStartX: 0,
      touchEndX: 0
    };
    _this.wrapperRef = /*#__PURE__*/_react["default"].createRef();
    _this.carouselRef = /*#__PURE__*/_react["default"].createRef();
    _this.previousSlide = _this.previousSlide.bind(_this);
    _this.nextSlide = _this.nextSlide.bind(_this);
    _this.handleUserResize = _this.handleUserResize.bind(_this);
    _this.getCarouselWidth = _this.getCarouselWidth.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.handleSwipe = _this.handleSwipe.bind(_this);
    _this.getTouchStartX = _this.getTouchStartX.bind(_this);
    _this.getTouchEndX = _this.getTouchEndX.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(Carousel, _React$Component);
  return (0, _createClass2["default"])(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var fullScreen = this.props.fullScreen;
      this.initCarousel();
      window.addEventListener("resize", this.handleUserResize);

      /*
        Navigation entre slides via les touches du clavier.
        Le focus est placé dans le conteneur du carousel en mode plein écran
        afin d'éviter l'ajout d'un eventListener global et d'écraser un focus
        existant si le carousel est intégré dans une page multi-composants.
      */
      if (fullScreen) {
        this.wrapperRef.current.focus();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.handleUserResize);
    }
  }, {
    key: "handleSwipe",
    value: function handleSwipe() {
      var _this$state = this.state,
        touchStartX = _this$state.touchStartX,
        touchEndX = _this$state.touchEndX;
      if (touchEndX < touchStartX) {
        this.nextSlide();
      } else if (touchEndX > touchStartX) {
        this.previousSlide();
      }
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(e) {
      if (e.key === "ArrowRight") {
        this.nextSlide();
      } else if (e.key === "ArrowLeft") {
        this.previousSlide();
      }
    }
  }, {
    key: "handleUserResize",
    value: function handleUserResize() {
      var slideIndex = this.state.slideIndex;
      var currentWidth = this.getCarouselWidth();
      var updatedPosition = -(slideIndex * currentWidth);
      this.setState({
        positionTracker: updatedPosition
      });
    }
  }, {
    key: "getCarouselWidth",
    value: function getCarouselWidth() {
      return this.carouselRef.current.getBoundingClientRect().width;
    }
  }, {
    key: "getTotalSlides",
    value: function getTotalSlides() {
      var media = this.props.media;
      return media.length;
    }

    /*
      Permet de désigner l'index du slide à afficher si passé dans props.
      Par défaut l'index est 0, le premier slide du tableau.
    */
  }, {
    key: "setSlideIndex",
    value: function setSlideIndex() {
      var slideIndex = this.props.slideIndex;
      return slideIndex || 0;
    }

    /*
      Effectue la transition pour afficher le slide correspondant à l'index.
      La valeur retourné doit être négative à cause du sens de défilement du carousel.
    */
  }, {
    key: "setSlidePosition",
    value: function setSlidePosition() {
      var slideWidth = this.getCarouselWidth();
      var slideIndex = this.setSlideIndex();
      return -(slideWidth * slideIndex);
    }
  }, {
    key: "getTouchStartX",
    value: function getTouchStartX(e) {
      var pressurePointX = e.changedTouches[0].pageX;
      this.setState({
        touchStartX: pressurePointX
      });
    }
  }, {
    key: "getTouchEndX",
    value: function () {
      var _getTouchEndX = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee(e) {
        var endX;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              endX = e.changedTouches[0].pageX;
              _context.n = 1;
              return this.setState({
                touchEndX: endX
              });
            case 1:
              this.handleSwipe();
            case 2:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function getTouchEndX(_x) {
        return _getTouchEndX.apply(this, arguments);
      }
      return getTouchEndX;
    }()
  }, {
    key: "initCarousel",
    value: function initCarousel() {
      this.setState({
        slideIndex: this.setSlideIndex(),
        positionTracker: this.setSlidePosition(),
        totalSlides: this.getTotalSlides()
      });
    }

    /*
      Permet d'activer le défilement en transition du carousel une fois que
      l'index du slide soit définit afin d'éviter la transition visible de 0 à n.
    */
  }, {
    key: "isCarouselAnimated",
    value: function isCarouselAnimated() {
      var animated = this.props.animated;
      if (animated) {
        this.setState({
          indexIsSet: true
        });
      }
    }
  }, {
    key: "previousSlide",
    value: function previousSlide() {
      var _this$state2 = this.state,
        positionTracker = _this$state2.positionTracker,
        slideIndex = _this$state2.slideIndex;
      if (slideIndex === 0) {
        return;
      }
      this.isCarouselAnimated();
      positionTracker += this.getCarouselWidth();
      slideIndex -= 1;
      this.setState({
        slideIndex: slideIndex,
        positionTracker: positionTracker
      });
    }
  }, {
    key: "nextSlide",
    value: function nextSlide() {
      var _this$state3 = this.state,
        positionTracker = _this$state3.positionTracker,
        slideIndex = _this$state3.slideIndex;
      var totalSlides = this.state.totalSlides;
      if (slideIndex === totalSlides - 1) {
        return;
      }
      this.isCarouselAnimated();
      positionTracker -= this.getCarouselWidth();
      slideIndex += 1;
      this.setState({
        slideIndex: slideIndex,
        positionTracker: positionTracker
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        media = _this$props.media,
        fullScreen = _this$props.fullScreen,
        parentState = _this$props.parentState,
        alt = _this$props.alt,
        intl = _this$props.intl;
      var _this$state4 = this.state,
        positionTracker = _this$state4.positionTracker,
        slideIndex = _this$state4.slideIndex,
        totalSlides = _this$state4.totalSlides,
        indexIsSet = _this$state4.indexIsSet;
      var hoveredInterface = parentState.hoveredInterface,
        hoverVisibility = parentState.hoverVisibility;

      // Faudra probablement adapter le contenu du MediaWrapper selon la structure des données

      return /*#__PURE__*/_react["default"].createElement(_carousel.Wrapper, {
        ref: this.wrapperRef,
        tabIndex: "0",
        onKeyDown: this.handleKeyPress
      }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
        isHoverable: hoveredInterface,
        isHovering: hoverVisibility,
        isActive: slideIndex === 0,
        direction: "left",
        handleTransition: this.previousSlide
      }), /*#__PURE__*/_react["default"].createElement(_carousel.Rail, null, /*#__PURE__*/_react["default"].createElement(_carousel.List, {
        ref: this.carouselRef,
        position: positionTracker,
        animationIsActive: indexIsSet,
        onTouchStart: this.getTouchStartX,
        onTouchEnd: this.getTouchEndX
      }, media.map(function (item, index) {
        return /*#__PURE__*/_react["default"].createElement(_mediaWrapper["default"], {
          key: item.pictureId,
          index: index,
          isFullScreen: fullScreen
        }, item.videoUrl &&
        /*#__PURE__*/
        // eslint-disable-next-line jsx-a11y/media-has-caption
        _react["default"].createElement("video", {
          controls: true
        }, /*#__PURE__*/_react["default"].createElement("source", {
          src: item.videoUrl,
          type: "video/mp4"
        })), item.pictureId && /*#__PURE__*/_react["default"].createElement(_picture["default"], {
          sources: [{
            srcset: item.webpPictureBigUrl
          }, {
            srcset: item.pictureMetaUrl
          }],
          src: item.pictureMetaUrl,
          alt: "".concat(alt || "").concat(index !== 0 ? " - ".concat(intl === null || intl === void 0 ? void 0 : intl.formatMessage({
            id: "fo_product_alt_image"
          }, {
            "0": index
          })) : ""),
          lazy: false
        }));
      }))), /*#__PURE__*/_react["default"].createElement(_button["default"], {
        isHoverable: hoveredInterface,
        isHovering: hoverVisibility,
        isActive: slideIndex === totalSlides - 1,
        direction: "right",
        handleTransition: this.nextSlide
      }));
    }
  }]);
}(_react["default"].Component);
Carousel.defaultProps = {
  animated: false,
  slideIndex: 0,
  fullScreen: false,
  parentState: {},
  alt: null
};
var _default = exports["default"] = (0, _reactIntl.injectIntl)(Carousel);