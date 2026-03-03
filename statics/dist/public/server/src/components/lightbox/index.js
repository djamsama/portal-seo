"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _readOnlyError2 = _interopRequireDefault(require("@babel/runtime/helpers/readOnlyError"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _productLabel = _interopRequireDefault(require("../product/productLabel"));
var _lightbox = require("./styles/lightbox");
var _button = _interopRequireDefault(require("./components/button"));
var _globalHelper = require("../../helpers/globalHelper");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Lightbox = /*#__PURE__*/function (_React$Component) {
  function Lightbox(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Lightbox);
    _this = _callSuper(this, Lightbox, [props]);
    _this.state = {
      hoverVisibility: false,
      hoveredInterface: false
    };
    _this.onClose = _this.onClose.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(Lightbox, _React$Component);
  return (0, _createClass2["default"])(Lightbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var hoveredInterface = this.props.hoveredInterface;
      if (hoveredInterface) {
        this.setState({
          hoveredInterface: true
        });
      }
      window.addEventListener("keyup", this.handleKeyPress);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("keyup", this.handleKeyPress);
    }
  }, {
    key: "onClose",
    value: function onClose() {
      var ToggleLightBox = this.props.ToggleLightBox;
      if (ToggleLightBox) {
        ToggleLightBox();
      }
    }
  }, {
    key: "handleMouseEnter",
    value: function handleMouseEnter() {
      this.setState({
        hoverVisibility: true
      });
    }
  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave() {
      this.setState({
        hoverVisibility: false
      });
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(e) {
      if (e.key === "Escape") {
        this.onClose();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        label = _this$props.label,
        brand = _this$props.brand,
        hoveredInterface = _this$props.hoveredInterface,
        render = _this$props.render;
      var hoverVisibility = this.state.hoverVisibility;
      return /*#__PURE__*/_react["default"].createElement(_lightbox.Wrapper, {
        onMouseEnter: hoveredInterface ? this.handleMouseEnter : null,
        onMouseLeave: hoveredInterface ? this.handleMouseLeave : null
      }, /*#__PURE__*/_react["default"].createElement(_lightbox.Header, {
        isHoverable: _globalHelper.GlobalHelper.isMobileDevice() ? false : hoveredInterface,
        isHovering: _globalHelper.GlobalHelper.isMobileDevice() ? false : hoverVisibility
      }, /*#__PURE__*/_react["default"].createElement(_productLabel["default"], {
        smallLabel: true,
        label: label,
        brand: brand
      }), /*#__PURE__*/_react["default"].createElement(_button["default"], {
        handleClose: this.onClose
      })), /*#__PURE__*/_react["default"].createElement(_lightbox.Content, null, render(this.state)));
    }
  }]);
}(_react["default"].Component);
Lightbox.defaultProps = {
  label: "",
  brand: "",
  hoveredInterface: false
};
var _default = exports["default"] = Lightbox;