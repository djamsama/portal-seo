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
var _reactDom = _interopRequireDefault(require("react-dom"));
var _zoomedImage = require("./styles/zoomedImage");
var _zoomHelper = require("../../helpers/zoomHelper");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var ZoomedImage = /*#__PURE__*/function (_Component) {
  function ZoomedImage(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ZoomedImage);
    _this = _callSuper(this, ZoomedImage, [props]);
    if (false) {
      _this.portalElement = document.getElementById("zoom-lens-custom");
    } else {
      _this.portalElement = null;
    }
    return _this;
  }
  (0, _inherits2["default"])(ZoomedImage, _Component);
  return (0, _createClass2["default"])(ZoomedImage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        imageUrl = _this$props.imageUrl,
        sources = _this$props.sources,
        isActive = _this$props.isActive,
        position = _this$props.position,
        imgDimensions = _this$props.imgDimensions,
        zoomedImageDimensions = _this$props.zoomedImageDimensions;
      var cursorOffset = (0, _zoomHelper.getLensCursorOffset)(imgDimensions, zoomedImageDimensions, imgDimensions);
      var positionOffset = (0, _zoomHelper.getPositionOffset)(cursorOffset, position, imgDimensions);
      var x = positionOffset.x * (zoomedImageDimensions.width / imgDimensions.width);
      var y = positionOffset.y * (zoomedImageDimensions.height / imgDimensions.height);
      if (false) {
        var enlargedImage = /*#__PURE__*/_reactDom["default"].createPortal(/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, isActive === true && /*#__PURE__*/_react["default"].createElement(_zoomedImage.ZoomWrapper, {
          width: imgDimensions.width,
          height: imgDimensions.height
        }, /*#__PURE__*/_react["default"].createElement(_zoomedImage.ZoomedPicture, {
          lazy: false,
          positionX: x,
          positionY: y,
          sources: sources,
          src: imageUrl
        }))), this.portalElement);
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, enlargedImage);
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
    }
  }]);
}(_react.Component);
ZoomedImage.defaultProps = {
  position: {
    x: 0,
    y: 0
  },
  imgDimensions: {
    height: 0,
    width: 0
  },
  isActive: false
};
var _default = exports["default"] = ZoomedImage;