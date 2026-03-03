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
var _checkAll = require("./styles/checkAll");
var _notificationsSubscriptionMySpaceHelper = _interopRequireDefault(require("../../helpers/notificationsSubscriptionMySpaceHelper"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var MEDIA_TYPE_NEWSLETTER = "NEWSLETTER";
/**
 * Subscription tout selectionner
 */
var CheckAll = /*#__PURE__*/function (_ContextComponent) {
  function CheckAll(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, CheckAll);
    _this = _callSuper(this, CheckAll, [props, context]);
    _this.handleCheckAll = _this.handleCheckAll.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(CheckAll, _ContextComponent);
  return (0, _createClass2["default"])(CheckAll, [{
    key: "handleCheckAll",
    value: function handleCheckAll() {
      var intl = this.props.intl;
      var nmshInstance = new _notificationsSubscriptionMySpaceHelper["default"](intl);
      var notificationsOps = nmshInstance.notificationOps()["default"];
      var isThemaTic = this.context && this.context.initData && this.context.initData.thematicSubscription ? true : false;
      this.props.onHandleCheckAll(notificationsOps.subscribe, MEDIA_TYPE_NEWSLETTER, true, isThemaTic, true);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var intl = this.props.intl;
      return /*#__PURE__*/_react["default"].createElement(_checkAll.DivSelectFull, null, /*#__PURE__*/_react["default"].createElement(_checkAll.LinkSelectorFull, {
        href: "#",
        title: intl.formatMessage({
          id: "foj_subscribe_mail_newsletter_form_selectall"
        }),
        onClick: function onClick() {
          _this2.handleCheckAll();
        }
      }, intl.formatMessage({
        id: "foj_subscribe_mail_newsletter_form_selectall"
      })));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(CheckAll);