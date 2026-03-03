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
var _reactDom = _interopRequireDefault(require("react-dom"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Utilisation d'un portail react pour mettre le contenu de la modal dans un noeud externe.
 */
var PortalModal = /*#__PURE__*/function (_React$Component) {
  function PortalModal(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, PortalModal);
    _this = _callSuper(this, PortalModal, [props]);
    if (false) {
      _this.el = document.createElement("div");
      _this.modal = document.getElementById("modal");
    }
    return _this;
  }
  (0, _inherits2["default"])(PortalModal, _React$Component);
  return (0, _createClass2["default"])(PortalModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (false) {
        this.modal.appendChild(this.el);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (false) {
        this.modal.removeChild(this.el);
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (false) {
        return /*#__PURE__*/_reactDom["default"].createPortal(this.props.children, this.modal);
      } else {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
      }
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = PortalModal;