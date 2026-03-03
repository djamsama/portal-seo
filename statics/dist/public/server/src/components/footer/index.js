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
var _component = _interopRequireDefault(require("@loadable/component"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _contextComponent = require("../contextComponent");
var _footerContent = _interopRequireDefault(require("./components/footerContent"));
var _footerFreeTax = _interopRequireDefault(require("./components/footerFreeTax"));
var _footerBackLinks = _interopRequireDefault(require("./components/footerBackLinks"));
var _footerLinks = _interopRequireDefault(require("./components/footerLinks"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Brands = (0, _component["default"])(function () {
  return import("../brands/containers/brandsContainer");
});
var FooterComponent = /*#__PURE__*/function (_ContextComponent) {
  function FooterComponent(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, FooterComponent);
    _this = _callSuper(this, FooterComponent, [props, context]);
    _this.state = {
      contentLoaded: false
    };

    // par défaut on affiche la farandole des marques.
    _this.showBrands = true;

    // on récupère la variable injectée depuis le mav java
    var displayBrandContainer = _this.context.initData.displayBrandContainer;

    // Si la propriété est définie depuis le controller on surcharge l'affichage de la farandole.
    if (displayBrandContainer !== undefined) {
      _this.showBrands = displayBrandContainer;
    }
    _this.handler = _this.handler.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(FooterComponent, _ContextComponent);
  return (0, _createClass2["default"])(FooterComponent, [{
    key: "handler",
    value: function handler() {
      this.setState({
        contentLoaded: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        footerMode = _this$props.footerMode,
        footerFreeTax = _this$props.footerFreeTax,
        customFooter = _this$props.customFooter;
      var contentLoaded = this.state.contentLoaded;
      var initData = this.context.initData;
      var footerBackLinks = !!(initData && initData.backLinks && initData.backLinks.length > 0);
      return /*#__PURE__*/_react["default"].createElement("div", null, footerMode === "custom" && customFooter, (footerMode === "full" && footerBackLinks || footerBackLinks) && /*#__PURE__*/_react["default"].createElement(_footerBackLinks["default"], null), (footerMode === "full" && footerFreeTax || footerFreeTax) && /*#__PURE__*/_react["default"].createElement(_footerFreeTax["default"], null), footerMode === "full" && this.showBrands && /*#__PURE__*/_react["default"].createElement(Brands, null), !contentLoaded && /*#__PURE__*/_react["default"].createElement(_footerLinks["default"], {
        footerMode: footerMode
      }), /*#__PURE__*/_react["default"].createElement(_footerContent["default"], {
        footerMode: footerMode,
        handler: this.handler
      }));
    }
  }]);
}(_contextComponent.ContextComponent);
FooterComponent.defaultProps = {
  footerMode: "full",
  footerFreeTax: true
};
var _default = exports["default"] = (0, _reactIntl.injectIntl)(FooterComponent);