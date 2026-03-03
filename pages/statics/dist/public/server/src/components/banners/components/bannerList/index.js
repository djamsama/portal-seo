"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _reactFlickityComponent = _interopRequireDefault(require("react-flickity-component"));
var _contextComponent = require("../../../contextComponent");
var _globalHelper = require("../../../../helpers/globalHelper");
var _bannerItem = _interopRequireDefault(require("./bannerItem"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var DELAY = 5000;
var flickityOptions = {
  autoPlay: DELAY,
  freeScroll: false,
  wrapAround: true,
  pauseAutoPlayOnHover: false,
  prevNextButtons: false,
  selectedAttraction: 0.014,
  resize: true,
  adaptiveHeight: true,
  imagesLoaded: true
};
function resize(selector) {
  var coeffHauteur = _globalHelper.GlobalHelper.isMobileOnly() ? 2.65 : 5.81;
  var width = "100vw";
  var height = "calc(100vw / ".concat(coeffHauteur, ")");
  var elements = document.querySelectorAll(selector);
  var i = 0;
  while (i < elements.length) {
    elements[i].style.width = "".concat(width);
    elements[i].style.height = "".concat(height);
    i += 1;
  }
}
function unsetMinHeight() {
  var adBr = document.querySelector(".adBr");
  adBr === null || adBr === void 0 || adBr.style.setProperty("min-height", "unset");
}

// Le composant flickity semblant bugué (après avoir essayé toutes les flickityOptions existantes il reste des problèmes d'affichage),
// on redimensionne tout à la main au chargement puis à chaque fois que la page est redimensionnée.
function resizeCarrousel() {
  resize("#header-br .br-list .br-item a img");
  resize("#header-br .br-tab .br-item-tab a img");
  resize("#header-br .flickity-viewport .br-tab");
  resize("#header-br .flickity-viewport");
  resize("#header-br .flickity-enabled");
  resize("#header-br .flickity-slider .is-selected .br-list");
  resize("#header-br .br-list");
  var brList = document.querySelector(".br-list");
  // eslint-disable-next-line eqeqeq
  if (brList !== null && brList.parentNode != undefined && brList.parentNode.parentNode !== null) {
    brList.parentNode.parentNode.style["max-width"] = "".concat(document.body.scrollWidth, "px");
  }
  unsetMinHeight();
}

// Fonction qui permet d'attendre que les éléments du DOM chargés par le composant flickity des bannnières soient présents.
function waitForElm(selector) {
  return new Promise(function (resolve) {
    if (document.querySelector(selector)) {
      resolve(document.querySelector(selector));
    }
    var observer = new MutationObserver(function () {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}
var Banners = /*#__PURE__*/function (_ContextComponent) {
  function Banners(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, Banners);
    _this = _callSuper(this, Banners, [props, context]);
    _this.state = {
      data: false
    };
    return _this;
  }
  (0, _inherits2["default"])(Banners, _ContextComponent);
  return (0, _createClass2["default"])(Banners, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2, _this$props3;
      var _this$props = this.props,
        banners = _this$props.bannersInfo.banners,
        bannersRequestLoad = _this$props.bannersRequestLoad;
      var _this$context = this.context,
        companyId = _this$context.initData.companyId,
        route = _this$context.config.route;
      var isBannersLoaded = banners && banners.length > 0;
      if (!isBannersLoaded) {
        bannersRequestLoad(companyId, route);
      }
      waitForElm(".br-list").then(function () {
        resizeCarrousel();
      });
      window.addEventListener("resize", function () {
        resizeCarrousel();
      });
      if (((_this$props2 = this.props) === null || _this$props2 === void 0 || (_this$props2 = _this$props2.bannersInfo) === null || _this$props2 === void 0 ? void 0 : _this$props2.bannerComplete) === true && ((_this$props3 = this.props) === null || _this$props3 === void 0 || (_this$props3 = _this$props3.bannersInfo) === null || _this$props3 === void 0 || (_this$props3 = _this$props3.banners) === null || _this$props3 === void 0 ? void 0 : _this$props3.length) === 0) {
        unsetMinHeight();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _bannersInfo$banners;
      var bannersInfo = this.props.bannersInfo;
      if ((bannersInfo === null || bannersInfo === void 0 ? void 0 : bannersInfo.bannerComplete) === true && (bannersInfo === null || bannersInfo === void 0 || (_bannersInfo$banners = bannersInfo.banners) === null || _bannersInfo$banners === void 0 ? void 0 : _bannersInfo$banners.length) === 0) {
        unsetMinHeight();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
        bannersInfo = _this$props4.bannersInfo,
        viewedPageId = _this$props4.viewedPageId,
        doTracking = _this$props4.doTracking;
      var banners = bannersInfo ? bannersInfo.banners : [];
      var pageTypeId = this.context.initData.pageTypeId;
      if (false && banners && banners.length > 0) {
        var pageDots = true;
        if (banners.length === 1) {
          pageDots = false;
        }
        var divClassType = _globalHelper.GlobalHelper.isTabletSmall() ? "br-tab" : "br-list";
        return /*#__PURE__*/_react["default"].createElement(_reactFlickityComponent["default"], {
          className: divClassType,
          options: _objectSpread(_objectSpread({}, flickityOptions), {}, {
            pageDots: pageDots
          })
        }, banners.map(function (banner) {
          return /*#__PURE__*/_react["default"].createElement(_bannerItem["default"], {
            key: banner.id,
            banner: banner,
            viewedPageId: viewedPageId,
            pageTypeId: pageTypeId,
            doTracking: doTracking
          });
        }));
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = Banners;