"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _veReactGpt = require("ve-react-gpt");
var _contextComponent = require("../../../contextComponent");
var _bannersHelper = require("../../../../helpers/bannersHelper");
var _headerBannerContent = require("./styles/headerBannerContent");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable global-require */ /* eslint-disable class-methods-use-this */ // $FlowFixMe: Not resolve css
var DELAY = 5000;
_veReactGpt.Bling.configure({
  renderWhenViewable: false
});
_veReactGpt.Bling.enableSingleRequest(true);
var HeaderBannerContent = /*#__PURE__*/function (_ContextComponent) {
  function HeaderBannerContent(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, HeaderBannerContent);
    _this = _callSuper(this, HeaderBannerContent, [props, context]);
    _this.setGPT = _this.setGPT.bind(_this);
    _this.renderBanners = _this.renderBanners.bind(_this);
    _this.BLOCK_SIZES = [1920, 330];
    _this.flkty = null;
    var portalBanner = context.initData.portalBanner;
    _this.portalBanner = portalBanner;
    _this.state = {
      gpts: _this.setGPT()
    };
    _veReactGpt.Bling.on(_veReactGpt.Events.SLOT_RENDER_ENDED, function () {
      _bannersHelper.BannersHelper.manageLinkIframeDfp("google_ads");
      // Je ne peux pas fixer ce probleme autrement...flickity applique un translateX
      // fantaisite au chargement, ce qui m'oblige à declencher un resize.
      _this.flkty.resize();
    });
    return _this;
  }
  (0, _inherits2["default"])(HeaderBannerContent, _ContextComponent);
  return (0, _createClass2["default"])(HeaderBannerContent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.flkty) {
        // eslint-disable-next-line func-names
        this.flkty.on("select", function () {
          var _this2 = this;
          // le comportement actuel des bannières est qu'elles continuent a être animées
          // même si l'utilisateur change de bannière (clique sur une pastille)
          // par defaut flickity ne le permet pas d'où le code ci-dessous
          if (this.player.state === "stopped") {
            setTimeout(function () {
              _this2.player.play();
            }, DELAY);
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _bannersHelper.BannersHelper.removeEvent();
    }

    /**
     * Creations des bannières via Google Publisher Tag
     */
  }, {
    key: "setGPT",
    value: function setGPT() {
      if (!false) {
        return null;
      }
      if (!this.portalBanner || this.portalBanner.nbBlock <= 0) {
        return null;
      }
      var _this$portalBanner = this.portalBanner,
        networkKey = _this$portalBanner.networkKey,
        blockSizes = _this$portalBanner.blockSizes,
        headerBannerBlocks = _this$portalBanner.headerBannerBlocks,
        customTargetingCriteria = _this$portalBanner.customTargetingCriteria;
      var sizes = Array.isArray(blockSizes) ? blockSizes : this.BLOCK_SIZES;
      var gpts = headerBannerBlocks.map(function (block) {
        var targetings = {};
        if (customTargetingCriteria) {
          Object.keys(customTargetingCriteria).forEach(function (key) {
            targetings[key] = customTargetingCriteria[key];
          });
        }
        var customTargeting = {};
        if (Object.keys(targetings).length > 0) {
          customTargeting.targeting = targetings;
        }
        var clientDim = null;
        if (window && window.innerWidth) {
          clientDim = _bannersHelper.BannersHelper.giveDimensionsFor(window.innerWidth);
        }
        return /*#__PURE__*/_react["default"].createElement(_headerBannerContent.WrapperGpt, {
          clientDim: clientDim,
          key: "div".concat(block.blockName)
        }, /*#__PURE__*/_react["default"].createElement(_veReactGpt.Bling, (0, _extends2["default"])({}, customTargeting, {
          id: block.blockName,
          adUnitPath: "".concat(networkKey, "/").concat(block.blockName),
          slotSize: sizes
        })));
      });
      return gpts;
    }

    /**
     *  Retourne la/les bannière(s)
     */
  }, {
    key: "renderBanners",
    value: function renderBanners() {
      var _this3 = this;
      var gpts = this.state.gpts;
      var flickityBanner = null;
      // Il y a plus d'une bannière on recupere Flickity pour les animer
      if (this.portalBanner.nbBlock >= 1) {
        var FlickityCompoent = require("react-flickity-component");
        var flickityOptions = {
          autoPlay: DELAY,
          freeScroll: true,
          wrapAround: true,
          pauseAutoPlayOnHover: false,
          reloadOnUpdate: true,
          prevNextButtons: false,
          selectedAttraction: 0.014,
          resize: true,
          cellAlign: "left",
          adaptiveHeight: true
        };
        var pageDots = true;
        if (this.portalBanner.nbBlock === 1) {
          pageDots = false;
        }
        flickityBanner = /*#__PURE__*/_react["default"].createElement(FlickityCompoent, {
          flickityRef: function flickityRef(c) {
            return _this3.flkty = c;
          },
          options: _objectSpread(_objectSpread({}, flickityOptions), {}, {
            pageDots: pageDots
          })
        }, gpts);
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, flickityBanner);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.portalBanner || this.portalBanner.nbBlock <= 0) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
      }
      var banners = "";
      if (false && this.portalBanner.nbBlock) {
        banners = this.renderBanners();
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, banners);
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = HeaderBannerContent;