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
var _logoMySpace = require("./styles/logoMySpace");
var _labels = require("../../../../../../commons/labels");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var LogoMySpace = /*#__PURE__*/function (_ContextComponent) {
  function LogoMySpace() {
    (0, _classCallCheck2["default"])(this, LogoMySpace);
    return _callSuper(this, LogoMySpace, arguments);
  }
  (0, _inherits2["default"])(LogoMySpace, _ContextComponent);
  return (0, _createClass2["default"])(LogoMySpace, [{
    key: "render",
    value: function render() {
      var modal = this.props.modal;
      return /*#__PURE__*/_react["default"].createElement(_logoMySpace.LogoTitle, {
        modal: modal
      }, /*#__PURE__*/_react["default"].createElement(_logoMySpace.StarMySpace, {
        modal: modal
      }), /*#__PURE__*/_react["default"].createElement(_logoMySpace.TxtMcl, null, _labels.MY), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "global_casedsitelabel"
      }));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = LogoMySpace;