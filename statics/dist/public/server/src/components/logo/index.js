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
var _contextComponent = require("../contextComponent");
var _link = require("../link");
var _logo = require("./styles/logo");
var _ae = _interopRequireDefault(require("./components/svg/ae"));
var _ar = _interopRequireDefault(require("./components/svg/ar"));
var _ag = _interopRequireDefault(require("./components/svg/ag"));
var _me = _interopRequireDefault(require("./components/svg/me"));
var _ne = _interopRequireDefault(require("./components/svg/ne"));
var _di = _interopRequireDefault(require("./components/svg/di"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var mappingLogo = {
  AE: /*#__PURE__*/_react["default"].createElement(_ae["default"], {
    expoColor: "black"
  }),
  AR: /*#__PURE__*/_react["default"].createElement(_ar["default"], {
    expoColor: "black"
  }),
  AG: /*#__PURE__*/_react["default"].createElement(_ag["default"], {
    expoColor: "black"
  }),
  ME: /*#__PURE__*/_react["default"].createElement(_me["default"], {
    expoColor: "black"
  }),
  NE: /*#__PURE__*/_react["default"].createElement(_ne["default"], {
    expoColor: "black"
  }),
  DI: /*#__PURE__*/_react["default"].createElement(_di["default"], {
    expoColor: "black"
  })
};
/**
 * Composant logo.
 */
var Logo = /*#__PURE__*/function (_ContextComponent) {
  function Logo() {
    (0, _classCallCheck2["default"])(this, Logo);
    return _callSuper(this, Logo, arguments);
  }
  (0, _inherits2["default"])(Logo, _ContextComponent);
  return (0, _createClass2["default"])(Logo, [{
    key: "render",
    value: function render() {
      // Recuperation du theme courant.
      var _this$props = this.props,
        floating = _this$props.floating,
        site = _this$props.site;
      var initData = this.context.initData;
      return /*#__PURE__*/_react["default"].createElement(_logo.WrapperLogo, {
        floating: floating,
        className: "logo inline-center",
        "data-cy": "logo"
      }, /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
        to: initData.globalLinksHome
      }, site && mappingLogo[site]));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = Logo;