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
var _subscriptionTiles = _interopRequireDefault(require("../subscriptionTiles"));
var _section = _interopRequireDefault(require("../section"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Subscription dedicate
 */
var MySpaceDedicate = /*#__PURE__*/function (_ContextComponent) {
  function MySpaceDedicate() {
    (0, _classCallCheck2["default"])(this, MySpaceDedicate);
    return _callSuper(this, MySpaceDedicate, arguments);
  }
  (0, _inherits2["default"])(MySpaceDedicate, _ContextComponent);
  return (0, _createClass2["default"])(MySpaceDedicate, [{
    key: "render",
    value: function render() {
      var dedicateSubscription = this.context.initData.dedicateSubscription;
      dedicateSubscription.name = "dedicate";
      return /*#__PURE__*/_react["default"].createElement(_section["default"], {
        titleKey: "foj_subscribe_mail_partner_form_title",
        h2Key: "foj_subscribe_mail_partner_form_details"
      }, /*#__PURE__*/_react["default"].createElement(_subscriptionTiles["default"], {
        data: [dedicateSubscription],
        isLarge: true
      }));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(MySpaceDedicate);