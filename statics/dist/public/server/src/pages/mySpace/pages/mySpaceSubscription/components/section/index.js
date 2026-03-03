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
var _contextComponent = require("../../../../../../components/contextComponent");
var _section = require("./styles/section");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var SectionSubscription = /*#__PURE__*/function (_ContextComponent) {
  function SectionSubscription() {
    (0, _classCallCheck2["default"])(this, SectionSubscription);
    return _callSuper(this, SectionSubscription, arguments);
  }
  (0, _inherits2["default"])(SectionSubscription, _ContextComponent);
  return (0, _createClass2["default"])(SectionSubscription, [{
    key: "render",
    value: function render() {
      var intl = this.props.intl;
      var _this$props = this.props,
        titleKey = _this$props.titleKey,
        h2Key = _this$props.h2Key;
      return /*#__PURE__*/_react["default"].createElement(_section.SectionContainer, null, /*#__PURE__*/_react["default"].createElement(_section.BlocCenterNoFloat, null, /*#__PURE__*/_react["default"].createElement(_section.TitleH2, null, intl.formatMessage({
        id: titleKey
      })), /*#__PURE__*/_react["default"].createElement(_section.ItalicP, null, intl.formatMessage({
        id: h2Key
      })), this.props.children));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(SectionSubscription);