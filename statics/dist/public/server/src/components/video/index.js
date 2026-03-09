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
var _video = require("./styles/video");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Vidéo d'un produit
 */
var Video = /*#__PURE__*/function (_PureComponent) {
  function Video(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Video);
    _this = _callSuper(this, Video, [props]);
    _this.autoPlay = props.autoPlay;
    _this.autoScroll = false;
    _this.state = {
      autoPlay: props.autoPlay
    };
    return _this;
  }
  (0, _inherits2["default"])(Video, _PureComponent);
  return (0, _createClass2["default"])(Video, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var video = this.video;
      if (video) {
        video.setAttribute("controlsList", "nodownload noremoteplayback");
        video.setAttribute("disablePictureInPicture", "disablePictureInPicture");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        thumbnail = _this$props.thumbnail,
        url = _this$props.url;
      var autoPlay = this.state.autoPlay;
      return /*#__PURE__*/_react["default"].createElement(_video.StyledVideo, {
        ref: function ref(v) {
          _this2.video = v;
        },
        preload: "metadata",
        poster: thumbnail,
        controls: true,
        autoPlay: autoPlay,
        muted: autoPlay
      }, /*#__PURE__*/_react["default"].createElement("source", {
        src: url,
        type: "video/mp4"
      }));
    }
  }]);
}(_react.PureComponent);
Video.defaultProps = {
  thumbnail: null,
  url: null,
  autoPlay: false
};
var _default = exports["default"] = Video;