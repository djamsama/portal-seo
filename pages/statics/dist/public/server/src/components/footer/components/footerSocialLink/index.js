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
var _filter = _interopRequireDefault(require("lodash/filter"));
var _veDesignSystem = require("ve-design-system");
var _contextComponent = require("../../../contextComponent");
var _socialLinksService = _interopRequireDefault(require("../../../../services/impl/socialLinksService"));
var _footerSocialLink = require("./styles/footerSocialLink");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // $FlowFixMe
var FooterSocialLink = /*#__PURE__*/function (_ContextComponent) {
  // Pour prévenir les setState sur les unmounted Component

  function FooterSocialLink(context) {
    var _this;
    (0, _classCallCheck2["default"])(this, FooterSocialLink);
    _this = _callSuper(this, FooterSocialLink, [context]);
    _this._isMounted = false;
    _this.state = {
      socialUrls: null
    };
    return _this;
  }
  (0, _inherits2["default"])(FooterSocialLink, _ContextComponent);
  return (0, _createClass2["default"])(FooterSocialLink, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this._isMounted = true;
      if (false) {
        // Appel ajax pour récupérer la liste des réseaux sociaux à afficher.
        var socialLinksService = new _socialLinksService["default"](this.context);
        // $FlowFixMe
        socialLinksService.getSocialLinks().then(function (response) {
          if (_this2._isMounted) {
            // On transforme les données pour en faire un tableau d'objets.
            var res = (0, _filter["default"])(response.data.content, function () {
              return true;
            });
            // On stock dans le state du composant.
            _this2.setState({
              socialUrls: res
            });
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var socialUrls = this.state.socialUrls;
      if (socialUrls !== null && socialUrls !== {}) {
        return /*#__PURE__*/_react["default"].createElement(_footerSocialLink.FooterSocialLinkWrapper, null, socialUrls.map(function (value) {
          var _styles$colors;
          return /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
            a11yLabel: value.cssClass,
            iconButton: true,
            rounded: true,
            href: value.url,
            target: "_blank",
            themeColor: "dark",
            size: "small",
            key: value.cssClass,
            rel: "noopener"
          }, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Icon, {
            name: value.cssClass,
            iconColor: _veDesignSystem.styles === null || _veDesignSystem.styles === void 0 || (_styles$colors = _veDesignSystem.styles.colors) === null || _styles$colors === void 0 ? void 0 : _styles$colors.monochrome.white
          }));
        }));
      }
      return /*#__PURE__*/_react["default"].createElement(_footerSocialLink.FooterSocialLinkWrapper, null);
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = FooterSocialLink;