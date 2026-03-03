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
var _reactCookie = require("react-cookie");
var _contextComponent = require("../contextComponent");
var _adblockPixel = require("./styles/adblockPixel");
var _cookies = require("../../commons/cookies");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var AdblockPixel = /*#__PURE__*/function (_ContextComponent) {
  function AdblockPixel(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, AdblockPixel);
    _this = _callSuper(this, AdblockPixel, [props, state]);

    // Pour eviter l'apparition puis la disparition d'éléments on considère qu'un blocker est actif par défaut
    _this.state = {
      adblockEnabled: true
    };
    _this.adBannerPixelRef = /*#__PURE__*/_react["default"].createRef();
    _this.handleCookie = _this.handleCookie.bind(_this);
    return _this;
  }

  /** Gestion de l'ajout/suppression du cookie relatif aux adBlockers. */
  (0, _inherits2["default"])(AdblockPixel, _ContextComponent);
  return (0, _createClass2["default"])(AdblockPixel, [{
    key: "handleCookie",
    value: function handleCookie(adblock) {
      var cookies = this.props.cookies;
      if (adblock) {
        cookies.set(_cookies.ADBLOCK_USER, adblock, {
          path: "/",
          domain: this.context.config.portal.domain
        });
      } else {
        cookies.remove(_cookies.ADBLOCK_USER, {
          path: "/",
          domain: this.context.config.portal.domain
        });
      }
    }

    /** L'état du pixel est conditionnée à la présence d'un adBlocker. */
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var enabled = this.adBannerPixelRef.offsetHeight === 0;
      this.setState({
        adblockEnabled: enabled
      });
      // Mise à jour des cookies
      this.handleCookie(enabled);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var adblockEnabled = this.state.adblockEnabled;
      if (adblockEnabled === false) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
      }
      return /*#__PURE__*/_react["default"].createElement(_adblockPixel.Pixel, {
        ref: function ref(r) {
          return _this2.adBannerPixelRef = r;
        },
        className: "adBanner"
      });
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactCookie.withCookies)(AdblockPixel);