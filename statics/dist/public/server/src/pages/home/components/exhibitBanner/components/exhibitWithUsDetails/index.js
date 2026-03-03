"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _workWithUsContact = _interopRequireDefault(require("../../../../../../components/svg/components/workWithUs/workWithUsContact"));
var _workWithUsPublishProduct = _interopRequireDefault(require("../../../../../../components/svg/components/workWithUs/workWithUsPublishProduct"));
var _workWithUsOnlineSelling = _interopRequireDefault(require("../../../../../../components/svg/components/workWithUs/workWithUsOnlineSelling"));
var _exhibitWithUsDetails = require("./styles/exhibitWithUsDetails");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var ExhibitWithUsDetails = /*#__PURE__*/function (_PureComponent) {
  function ExhibitWithUsDetails() {
    (0, _classCallCheck2["default"])(this, ExhibitWithUsDetails);
    return _callSuper(this, ExhibitWithUsDetails, arguments);
  }
  (0, _inherits2["default"])(ExhibitWithUsDetails, _PureComponent);
  return (0, _createClass2["default"])(ExhibitWithUsDetails, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_exhibitWithUsDetails.ExhibitWithUsWrapper, null, /*#__PURE__*/_react["default"].createElement(_exhibitWithUsDetails.ContactUsDiv, null, /*#__PURE__*/_react["default"].createElement(_workWithUsContact["default"], null), /*#__PURE__*/_react["default"].createElement(_exhibitWithUsDetails.ContactUsTitle, null, /*#__PURE__*/_react["default"].createElement(_exhibitWithUsDetails.ContactUsSpanNumber, null, "1. "), /*#__PURE__*/_react["default"].createElement(_exhibitWithUsDetails.ContactUsSpanText, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_homepage_exhibitBanner_contactUsLabel"
      })))), /*#__PURE__*/_react["default"].createElement(_exhibitWithUsDetails.ContactUsDiv, null, /*#__PURE__*/_react["default"].createElement(_workWithUsPublishProduct["default"], null), /*#__PURE__*/_react["default"].createElement(_exhibitWithUsDetails.ContactUsTitle, null, /*#__PURE__*/_react["default"].createElement(_exhibitWithUsDetails.ContactUsSpanNumber, null, "2. "), /*#__PURE__*/_react["default"].createElement(_exhibitWithUsDetails.ContactUsSpanText, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_homepage_exhibitBanner_publishYourProductLabel"
      })))), /*#__PURE__*/_react["default"].createElement(_exhibitWithUsDetails.ContactUsDiv, null, /*#__PURE__*/_react["default"].createElement(_workWithUsOnlineSelling["default"], null), /*#__PURE__*/_react["default"].createElement(_exhibitWithUsDetails.ContactUsTitle, null, /*#__PURE__*/_react["default"].createElement(_exhibitWithUsDetails.ContactUsSpanNumber, null, "3. "), /*#__PURE__*/_react["default"].createElement(_exhibitWithUsDetails.ContactUsSpanText, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_homepage_exhibitBanner_startSellingOnlineLabel"
      })))));
    }
  }]);
}(_react.PureComponent);
var _default = exports["default"] = ExhibitWithUsDetails;