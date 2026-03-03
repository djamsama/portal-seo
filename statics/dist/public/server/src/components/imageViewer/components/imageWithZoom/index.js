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
var _reactCursorPosition = _interopRequireDefault(require("react-cursor-position"));
var _zoom = require("./styles/zoom");
var _zoomedImage = _interopRequireDefault(require("./components/zoomedImage"));
var _zoomLens = _interopRequireDefault(require("./components/zoomLens"));
var _picture = _interopRequireDefault(require("../../../picture"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var ImageWithZoom = /*#__PURE__*/function (_Component) {
  function ImageWithZoom(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ImageWithZoom);
    _this = _callSuper(this, ImageWithZoom, [props]);
    _this.state = {
      imgDimensions: {
        height: 0,
        width: 0
      }
    };
    _this.onImgLoad = _this.onImgLoad.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(ImageWithZoom, _Component);
  return (0, _createClass2["default"])(ImageWithZoom, [{
    key: "onImgLoad",
    value: function onImgLoad(_ref) {
      var img = _ref.target;
      this.setState({
        imgDimensions: {
          height: img.offsetHeight,
          width: img.offsetWidth
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        sources = _this$props.sources,
        imageUrl = _this$props.imageUrl,
        zoomedImageSrcUrl = _this$props.zoomedImageSrcUrl,
        zoomedImageSources = _this$props.zoomedImageSources,
        alt = _this$props.alt,
        zoomedImageDimensions = _this$props.zoomedImageDimensions,
        lazy = _this$props.lazy,
        dataCy = _this$props.dataCy;
      var imgDimensions = this.state.imgDimensions;
      if (false) {
        return /*#__PURE__*/_react["default"].createElement(_zoom.ImageWithZoomWrapper, null, /*#__PURE__*/_react["default"].createElement(_zoom.ImageContainer, null, /*#__PURE__*/_react["default"].createElement(_reactCursorPosition["default"], null, /*#__PURE__*/_react["default"].createElement(_picture["default"], {
          sources: sources,
          alt: alt,
          "data-flickity-lazyload": imageUrl,
          onLoad: this.onImgLoad,
          lazy: lazy,
          dataCy: dataCy
        }), /*#__PURE__*/_react["default"].createElement(_zoomedImage["default"], {
          imgDimensions: imgDimensions,
          imageUrl: zoomedImageSrcUrl,
          sources: zoomedImageSources,
          zoomedImageDimensions: zoomedImageDimensions
        }), /*#__PURE__*/_react["default"].createElement(_zoomLens["default"], {
          zoomedImageDimensions: zoomedImageDimensions,
          imgDimensions: imgDimensions
        }))));
      }
      return /*#__PURE__*/_react["default"].createElement(_zoom.ImageWithZoomWrapper, null, /*#__PURE__*/_react["default"].createElement(_zoom.ImageContainer, null, /*#__PURE__*/_react["default"].createElement(_reactCursorPosition["default"], null, /*#__PURE__*/_react["default"].createElement(_picture["default"], {
        alt: alt,
        sources: sources,
        src: imageUrl,
        onLoad: this.onImgLoad,
        lazy: lazy
      }), /*#__PURE__*/_react["default"].createElement(_zoomLens["default"], {
        zoomedImageDimensions: zoomedImageDimensions,
        imgDimensions: imgDimensions
      }))));
    }
  }]);
}(_react.Component);
var _default = exports["default"] = ImageWithZoom;