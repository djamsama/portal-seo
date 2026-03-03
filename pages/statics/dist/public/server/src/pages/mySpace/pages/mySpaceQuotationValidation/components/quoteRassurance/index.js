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
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../../components/formattedHTMLMessage"));
var _quoteRassurance = require("./styles/quoteRassurance");
var _help = _interopRequireDefault(require("../../../../../../components/svg/components/help"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var QuoteRassurance = /*#__PURE__*/function (_React$PureComponent) {
  function QuoteRassurance() {
    (0, _classCallCheck2["default"])(this, QuoteRassurance);
    return _callSuper(this, QuoteRassurance, arguments);
  }
  (0, _inherits2["default"])(QuoteRassurance, _React$PureComponent);
  return (0, _createClass2["default"])(QuoteRassurance, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_quoteRassurance.QuoteRassuranceContent, null, /*#__PURE__*/_react["default"].createElement(_quoteRassurance.QuoteRassuranceHelp, null, /*#__PURE__*/_react["default"].createElement(_help["default"], null)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_quoteRassurance.QuoteRassuranceQuestion, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_quoteDetails_question"
      })), /*#__PURE__*/_react["default"].createElement(_quoteRassurance.QuoteRassuranceTeam, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_quoteDetails_team"
      })), /*#__PURE__*/_react["default"].createElement(_quoteRassurance.QuoteRassuranceMail, null, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-envelope"
      }), /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_quoteDetails_mail"
      })), /*#__PURE__*/_react["default"].createElement(_quoteRassurance.QuoteRassuranceTel, null, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-phone"
      }), /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_quoteDetails_tel"
      }))));
    }
  }]);
}(_react["default"].PureComponent);
var _default = exports["default"] = QuoteRassurance;