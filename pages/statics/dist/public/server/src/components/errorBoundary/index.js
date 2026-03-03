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
var _browser = require("@sentry/browser");
var _logger = _interopRequireDefault(require("../logger"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  function ErrorBoundary() {
    (0, _classCallCheck2["default"])(this, ErrorBoundary);
    return _callSuper(this, ErrorBoundary, arguments);
  }
  (0, _inherits2["default"])(ErrorBoundary, _React$Component);
  return (0, _createClass2["default"])(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      _logger["default"].error("error", error, info);

      // Remonter l'exception sur Sentry.
      (0, _browser.withScope)(function (scope) {
        scope.setExtra("error", {
          extra: info
        });
        (0, _browser.captureException)(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      // Ne plus afficher la page d'erreur.
      // TODO voir si on laisse comme ça.
      // Le risque est d'afficher un page blanche ou non fonctionnelle

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children);
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = ErrorBoundary;