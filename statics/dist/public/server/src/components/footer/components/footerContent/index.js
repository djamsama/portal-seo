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
var _reactLazyload = _interopRequireDefault(require("react-lazyload"));
var _footerButtons = _interopRequireDefault(require("../footerButtons"));
var _footerSocialLink = _interopRequireDefault(require("../footerSocialLink"));
var _footerLinksSitesMap = _interopRequireDefault(require("../footerLinksSitesMap"));
var _index = _interopRequireDefault(require("../footerMenu/index"));
var _index2 = _interopRequireDefault(require("../footerInfo/index"));
var _contextComponent = require("../../../contextComponent");
var _constants = require("../../../../commons/constants");
var _footer = require("./styles/footer");
var _didomiConfig = _interopRequireDefault(require("../../../didomiConfig"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var FooterContent = /*#__PURE__*/function (_ContextComponent) {
  function FooterContent() {
    (0, _classCallCheck2["default"])(this, FooterContent);
    return _callSuper(this, FooterContent, arguments);
  }
  (0, _inherits2["default"])(FooterContent, _ContextComponent);
  return (0, _createClass2["default"])(FooterContent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var handler = this.props.handler;
      handler();
    }
  }, {
    key: "render",
    value: function render() {
      var footerMode = this.props.footerMode;
      var isHome = this.context && this.context.config && this.context.config.route && this.context.config.route === _constants.ROUTE_HOME;
      var didomiConfig = this.context.initData.didomiConfig;
      if (isHome) {
        return /*#__PURE__*/_react["default"].createElement(_footer.FooterWrapper, null, footerMode === "full" && /*#__PURE__*/_react["default"].createElement(_footer.FooterTopWrapper, null, /*#__PURE__*/_react["default"].createElement(_footerButtons["default"], null), /*#__PURE__*/_react["default"].createElement(_index["default"], null), /*#__PURE__*/_react["default"].createElement(_footerSocialLink["default"], null)), /*#__PURE__*/_react["default"].createElement(_footer.FooterBottomWrapper, null, footerMode === "full" && /*#__PURE__*/_react["default"].createElement(_footerLinksSitesMap["default"], null), /*#__PURE__*/_react["default"].createElement(_index2["default"], {
          footerMode: footerMode
        })), /*#__PURE__*/_react["default"].createElement(_didomiConfig["default"], {
          didomiConfig: didomiConfig
        }));
      }
      return /*#__PURE__*/_react["default"].createElement(_footer.FooterWrapper, null, /*#__PURE__*/_react["default"].createElement(_reactLazyload["default"], {
        offset: 100,
        once: true
      }, footerMode === "full" && /*#__PURE__*/_react["default"].createElement(_footer.FooterTopWrapper, null, /*#__PURE__*/_react["default"].createElement(_footerButtons["default"], null), /*#__PURE__*/_react["default"].createElement(_index["default"], null), /*#__PURE__*/_react["default"].createElement(_footerSocialLink["default"], null)), /*#__PURE__*/_react["default"].createElement(_footer.FooterBottomWrapper, null, footerMode === "full" && /*#__PURE__*/_react["default"].createElement(_footerLinksSitesMap["default"], null), /*#__PURE__*/_react["default"].createElement(_index2["default"], {
        footerMode: footerMode
      }))), /*#__PURE__*/_react["default"].createElement(_didomiConfig["default"], {
        didomiConfig: didomiConfig
      }));
    }
  }]);
}(_contextComponent.ContextComponent);
FooterContent.defaultProps = {
  footerMode: "full"
};
var _default = exports["default"] = FooterContent;