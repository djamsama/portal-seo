"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextComponent = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _context = require("../context");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * ContextComponent permet de récupérer le contexte passé à un parent par les props initData
 *
 * @export
 * @class ContextComponent
 * @extends {React.Component}
 */
var ContextComponent = exports.ContextComponent = /*#__PURE__*/function (_React$Component) {
  function ContextComponent() {
    (0, _classCallCheck2["default"])(this, ContextComponent);
    return _callSuper(this, ContextComponent, arguments);
  }
  (0, _inherits2["default"])(ContextComponent, _React$Component);
  return (0, _createClass2["default"])(ContextComponent);
}(_react["default"].Component);
ContextComponent.contextType = _context.AppContext;