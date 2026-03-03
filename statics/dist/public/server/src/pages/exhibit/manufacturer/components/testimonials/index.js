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
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../components/formattedHTMLMessage"));
var _reactIntl = require("react-intl");
var _styledComponents = require("styled-components");
var _responsive = require("../../../../../components/styles/responsive");
var _slider = _interopRequireDefault(require("../../../../../components/slider"));
var _contextComponent = require("../../../../../components/contextComponent");
var _commonExhibit = require("../../../styles/commonExhibit");
var _templateObject, _templateObject2; // $FlowFixMe
// $FlowFixMe
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var flickitySliderCss = (0, _styledComponents.css)([".flickity-page-dots .dot{width:5px;height:5px;display:none;", "}.flickity-page-dots > li.dot.is-selected{width:5px !important;height:5px !important;display:none !important;", "}"], _responsive.media.screenLgMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      display: inline-block;\n  "]))), _responsive.media.screenLgMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      display: inline-block !important;\n  "]))));
var SMALL = "small";
var Testimonials = /*#__PURE__*/function (_ContextComponent) {
  function Testimonials(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Testimonials);
    _this = _callSuper(this, Testimonials, [props]);
    _this.handleResize = _this.handleResize.bind(_this);
    var isMobile = _this.context && _this.context.config ? _this.context.config.isMobile : false;
    var bp = isMobile ? SMALL : _responsive.breakPointsType.lg;
    if (false) {
      bp = (0, _responsive.getBreakpoint)() !== _responsive.breakPointsType.lg ? SMALL : _responsive.breakPointsType.lg;
    }
    _this.state = {
      currentBreakPoint: bp
    };
    return _this;
  }
  (0, _inherits2["default"])(Testimonials, _ContextComponent);
  return (0, _createClass2["default"])(Testimonials, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("resize", this.handleResize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      var bp = (0, _responsive.getBreakpoint)() !== _responsive.breakPointsType.lg ? SMALL : _responsive.breakPointsType.lg;
      if (bp !== this.state.currentBreakPoint) {
        this.setState({
          currentBreakPoint: bp
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var intl = this.props.intl;
      var _this$context$initDat = this.context.initData,
        nbTestimonials = _this$context$initDat.nbTestimonials,
        isOptimizationToFAFormEnabled = _this$context$initDat.isOptimizationToFAFormEnabled;
      var sitePath = this.context.config.portal.site.toLowerCase();
      var currentBreakPoint = this.state.currentBreakPoint;
      var ConditionalWrapper = _commonExhibit.EmptyDiv;
      var conditionalProps = {};
      if (currentBreakPoint !== _responsive.breakPointsType.lg) {
        ConditionalWrapper = _slider["default"];
        conditionalProps = {
          flickitySliderCss: flickitySliderCss,
          options: {
            prevNextButtons: false,
            pageDots: true,
            draggable: true,
            lazyLoad: false,
            reloadOnUpdate: true,
            resize: true,
            freeScrollFriction: 0.1,
            selectedAttraction: 0.2,
            friction: 0.8,
            cellAlign: "left"
          }
        };
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !isOptimizationToFAFormEnabled && /*#__PURE__*/_react["default"].createElement(_commonExhibit.ExhibitDifferenceSection, null, /*#__PURE__*/_react["default"].createElement(_commonExhibit.Title, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_fa_block_contactUs_title",
        values: {
          "0": this.context.config.portal.siteLabel
        }
      })), /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "fo_fa_block_contactUs_text",
        tagName: "p"
      }), /*#__PURE__*/_react["default"].createElement(_commonExhibit.ExhibitDifferenceBackgroundWrapper, null, /*#__PURE__*/_react["default"].createElement(_commonExhibit.ExhibitDifferenceBackground, {
        sources: [{
          srcset: "".concat("https://img.virtual-expo.com", "/media/ps/images/").concat(sitePath, "/exhibit/fa-form-bkg.webp")
        }, {
          srcset: "".concat("https://img.virtual-expo.com", "/media/ps/images/").concat(sitePath, "/exhibit/fa-form-bkg.jpg")
        }],
        src: "".concat("https://img.virtual-expo.com", "/media/ps/images/").concat(sitePath, "/exhibit/fa-form-bkg.jpg"),
        lazy: true
      }))), nbTestimonials > 0 && /*#__PURE__*/_react["default"].createElement(_commonExhibit.ExhibitAboutUsSection, null, /*#__PURE__*/_react["default"].createElement(_commonExhibit.Title, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_fa_block_testimonials_title"
      })), /*#__PURE__*/_react["default"].createElement(_commonExhibit.AboutUsWrapper, null, /*#__PURE__*/_react["default"].createElement(ConditionalWrapper, conditionalProps, intl.messages.fo_fa_block_testimonials_1 && /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "fo_fa_block_testimonials_1"
      }), intl.messages.fo_fa_block_testimonials_2 && /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "fo_fa_block_testimonials_2"
      }), intl.messages.fo_fa_block_testimonials_3 && /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "fo_fa_block_testimonials_3"
      }), intl.messages.fo_fa_block_testimonials_4 && /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "fo_fa_block_testimonials_4"
      })))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(Testimonials);