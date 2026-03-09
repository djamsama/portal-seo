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
var _contextComponent = require("../../../../../../../../../../components/contextComponent");
var _globalHelper = require("../../../../../../../../../../helpers/globalHelper");
var _symbol = require("./styles/symbol");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Affichage des demandes réalisés
 *
 */
var _Symbol = /*#__PURE__*/function (_ContextComponent) {
  function _Symbol() {
    (0, _classCallCheck2["default"])(this, _Symbol);
    return _callSuper(this, _Symbol, arguments);
  }
  (0, _inherits2["default"])(_Symbol, _ContextComponent);
  return (0, _createClass2["default"])(_Symbol, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        color = _this$props.color,
        index = _this$props.index,
        txtDisplay = _this$props.txtDisplay;
      var isMobile = this.context && this.context.config ? this.context.config.isMobile : _globalHelper.GlobalHelper.isMobileDevice();
      return /*#__PURE__*/_react["default"].createElement(_symbol.SymbolWrapper, null, /*#__PURE__*/_react["default"].createElement(_symbol.StyledRate, {
        color: color
      }, "\u2605"), !isMobile && /*#__PURE__*/_react["default"].createElement(_symbol.TxtStar, null, txtDisplay && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_satisfaction_visitor_star_".concat(index)
      })));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = _Symbol;