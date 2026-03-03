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
var _contextComponent = require("../../../../components/contextComponent");
var _row = _interopRequireDefault(require("../../../../components/styles/row"));
var _specificSiteHelper = _interopRequireDefault(require("../../../../helpers/specificSiteHelper"));
var _newslettersContainer = _interopRequireDefault(require("../../containers/newslettersContainer"));
var _ = _interopRequireDefault(require("../.."));
var _dedicate = _interopRequireDefault(require("./components/dedicate"));
var _emags = _interopRequireDefault(require("./components/emags"));
var _mySpaceSubscription = require("./styles/mySpaceSubscription");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 *  Point d'entre de la page subscription de Myspace
 */
var MySpaceSubscription = /*#__PURE__*/function (_ContextComponent) {
  function MySpaceSubscription() {
    (0, _classCallCheck2["default"])(this, MySpaceSubscription);
    return _callSuper(this, MySpaceSubscription, arguments);
  }
  (0, _inherits2["default"])(MySpaceSubscription, _ContextComponent);
  return (0, _createClass2["default"])(MySpaceSubscription, [{
    key: "render",
    value: function render() {
      var intl = this.props.intl;
      var emag = this.context.initData.emag;
      var portal = this.context.config.portal;
      return /*#__PURE__*/_react["default"].createElement(_["default"], null, /*#__PURE__*/_react["default"].createElement(_mySpaceSubscription.MySpaceContainer, null, /*#__PURE__*/_react["default"].createElement(_row["default"], null, /*#__PURE__*/_react["default"].createElement("br", {
        style: {
          clear: "both"
        }
      }), /*#__PURE__*/_react["default"].createElement(_mySpaceSubscription.TitleH1, null, intl.formatMessage({
        id: "foj_subscribe_mail_title"
      }))), /*#__PURE__*/_react["default"].createElement(_row["default"], null, /*#__PURE__*/_react["default"].createElement(_newslettersContainer["default"], null), emag && _specificSiteHelper["default"].isSiteWithNewsletterEmags(portal) && /*#__PURE__*/_react["default"].createElement(_emags["default"], null), /*#__PURE__*/_react["default"].createElement(_dedicate["default"], null))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(MySpaceSubscription);