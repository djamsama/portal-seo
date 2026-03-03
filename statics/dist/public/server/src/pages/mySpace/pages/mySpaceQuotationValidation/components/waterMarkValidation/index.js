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
var _contextComponent = require("../../../../../../components/contextComponent");
var _logo = _interopRequireDefault(require("../../../../../../components/logo"));
var _reactIntl = require("react-intl");
var _WaterMarkValidation = require("./styles/WaterMarkValidation");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var WaterMarkValidation = /*#__PURE__*/function (_ContextComponent) {
  function WaterMarkValidation() {
    (0, _classCallCheck2["default"])(this, WaterMarkValidation);
    return _callSuper(this, WaterMarkValidation, arguments);
  }
  (0, _inherits2["default"])(WaterMarkValidation, _ContextComponent);
  return (0, _createClass2["default"])(WaterMarkValidation, [{
    key: "render",
    value: function render() {
      var config = this.context.config;
      var quotationSigningDate = this.props.quotationSigningDate;
      return /*#__PURE__*/_react["default"].createElement(_WaterMarkValidation.StampContainer, null, /*#__PURE__*/_react["default"].createElement(_logo["default"], {
        site: config.portal.site,
        floating: true
      }), /*#__PURE__*/_react["default"].createElement(_WaterMarkValidation.Stamp, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_quote_viewer_watermark",
        values: {
          "0": quotationSigningDate
        }
      })));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = WaterMarkValidation;