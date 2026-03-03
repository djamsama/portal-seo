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
var _reactIntl = require("react-intl");
var _veDesignSystem = require("ve-design-system");
var _contextComponent = require("../../../contextComponent");
var _grabberCard = require("./styles/grabberCard");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/** Composant permettant d'avoir l'apercu d'un produit dans le grabber. */
var GrabberCard = /*#__PURE__*/function (_ContextComponent) {
  function GrabberCard(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, GrabberCard);
    _this = _callSuper(this, GrabberCard, [props, state]);
    _this.state = {};
    return _this;
  }
  (0, _inherits2["default"])(GrabberCard, _ContextComponent);
  return (0, _createClass2["default"])(GrabberCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        intl = _this$props.intl,
        productDef = _this$props.productDef,
        productImage = _this$props.productImage,
        onDelete = _this$props.onDelete;
      return /*#__PURE__*/_react["default"].createElement(_grabberCard.GrabberProductCard, {
        className: "ProductCard"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: productImage,
        alt: productDef
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "ProductDescription"
      }, productDef), /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        iconButton: true,
        size: "small",
        themeColor: "light",
        onClick: onDelete
      }, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Icon, {
        name: "close"
      })));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(GrabberCard);