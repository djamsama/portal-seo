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
var _video = _interopRequireDefault(require("../../../../../../components/video"));
var _contextComponent = require("../../../../../../components/contextComponent");
var _globalHelper = require("../../../../../../helpers/globalHelper");
var _encryptHelper = _interopRequireDefault(require("../../../../../../helpers/encryptHelper"));
var _corporateVideo = require("./styles/corporateVideo");
var _withGoogleAnalytics = require("../../../../../../hoc/withGoogleAnalytics");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var CorporateVideo = /*#__PURE__*/function (_ContextComponent) {
  function CorporateVideo(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, CorporateVideo);
    _this = _callSuper(this, CorporateVideo, [props, state]);
    _this.state = {
      open: false
    };
    _this.openPopup = _this.openPopup.bind(_this);
    _this.closePopup = _this.closePopup.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(CorporateVideo, _ContextComponent);
  return (0, _createClass2["default"])(CorporateVideo, [{
    key: "openPopup",
    value: function openPopup() {
      var _this$props = this.props,
        googleAnalytics = _this$props.googleAnalytics,
        GOOGLE_ANALYTICS_EVENTS = _this$props.GOOGLE_ANALYTICS_EVENTS;
      if (googleAnalytics) {
        googleAnalytics.event({
          category: GOOGLE_ANALYTICS_EVENTS.PRODUCT_CATEGORY,
          action: GOOGLE_ANALYTICS_EVENTS.CLICK_VIDEO,
          label: GOOGLE_ANALYTICS_EVENTS.LABEL_WATCH_VIDEO
        });
      }
      this.setState({
        open: true
      });
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        companyVideo = _this$props2.companyVideo,
        globalLinksBaseImg = _this$props2.globalLinksBaseImg;
      var isMobile = this.context && this.context.config ? this.context.config.isMobile : _globalHelper.GlobalHelper.isAllMobileDevice();

      // Si on est en mode mobile et que la vidéo basse réso est dispo on l'affiche
      var videoUrl = isMobile && companyVideo.vr360Url ? companyVideo.vr360Url : companyVideo.vrUrl;
      var open = this.state.open;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_corporateVideo.VideoIconWrapper, {
        onClick: this.openPopup
      }, /*#__PURE__*/_react["default"].createElement("img", {
        className: "stand-header-icons video-corporate",
        src: "".concat(globalLinksBaseImg, "/media/ps/images/common/stand/video-icon.gif"),
        alt: "video corpo"
      })), /*#__PURE__*/_react["default"].createElement(_corporateVideo.StyledModal, {
        open: open,
        onClose: this.closePopup,
        closeIcon: true,
        closeOnDimmerClick: true
      }, /*#__PURE__*/_react["default"].createElement(_video["default"], {
        autoPlay: true,
        thumbnail: companyVideo.thumbUrl,
        url: _encryptHelper["default"].decrypt(videoUrl)
      })));
    }
  }]);
}(_contextComponent.ContextComponent); // $FlowFixMe
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)(CorporateVideo);