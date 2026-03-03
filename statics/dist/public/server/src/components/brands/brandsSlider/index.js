"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _responsive = require("../../styles/responsive");
var _slider = _interopRequireDefault(require("../../slider"));
var _contextComponent = require("../../contextComponent");
var _index = _interopRequireDefault(require("./components/brandItem/index"));
var _brandsSlider = require("./styles/brandsSlider");
var _trackingElement = require("../../../models/trackingElement");
var _withTracking = require("../../../hoc/withTracking");
var _constants = require("../../../commons/constants");
var _globalHelper = require("../../../helpers/globalHelper");
var _templateObject;
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Brands = /*#__PURE__*/function (_ContextComponent) {
  function Brands(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, Brands);
    _this = _callSuper(this, Brands, [props, context]);
    _this.state = {
      brands: props.brands
    };
    return _this;
  }
  (0, _inherits2["default"])(Brands, _ContextComponent);
  return (0, _createClass2["default"])(Brands, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        viewedPageId = _this$props.viewedPageId,
        doTracking = _this$props.doTracking,
        tracked = _this$props.tracked,
        TrackingHelper = _this$props.TrackingHelper;
      var brands = this.state.brands;
      var trackingElementsBrand = TrackingHelper.itemsToTrackingElements(brands, {
        pushed: true,
        elementTypeId: _constants.ELEMENT_TYPE.logo,
        placementId: 3,
        brand: true,
        displayMode: _constants.TRACKING_EVENTS.MODE_THUMBNAILS
      }, this.context);
      if (viewedPageId && doTracking && (!tracked || !TrackingHelper.isAlreadyTrack(trackingElementsBrand, tracked))) {
        doTracking(trackingElementsBrand, viewedPageId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var brands = this.state.brands;
      var isMobile = this.context && this.context.config ? this.context.config.isMobile : _globalHelper.GlobalHelper.isMobileDevice();
      var flickitySliderCss = (0, _styledComponents.css)([".flickity-prev-next-button{&.previous{left:10px;top:20px;}&.next{right:10px;top:20px;}:disabled{display:", ";}}", " .flickity-slider > div{width:60%;max-width:150px;}"], isMobile ? "none" : "inherit", _responsive.media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n        .flickity-prev-next-button {\n          display: none;\n        }\n     "]))));

      // Si pas de data on renvoie une div vide qui sert de placeholder, pour éviter les effets yoyo.
      if (brands.length > 0) {
        var options = {
          prevNextButtons: true,
          pageDots: false,
          draggable: true,
          autoPlay: true,
          lazyLoad: false,
          reloadOnUpdate: true,
          resize: true,
          cellAlign: "left",
          contain: true,
          wrapAround: true,
          percentPosition: false,
          selectedAttraction: 0.01,
          friction: 0.15
        };
        var autoRestart = true;
        var breakPoint = (0, _responsive.getBreakpoint)();
        if (breakPoint === _responsive.breakPointsType.lg && brands.length <= 9) {
          options.autoPlay = false;
          options.prevNextButtons = false;
          options.draggable = false;
          autoRestart = false;
        }
        if (breakPoint === _responsive.breakPointsType.md && brands.length <= 6) {
          options.autoPlay = false;
          options.prevNextButtons = false;
          options.draggable = false;
          autoRestart = false;
        }
        if (breakPoint === _responsive.breakPointsType.sm && brands.length <= 3) {
          options.autoPlay = false;
          options.draggable = false;
          options.prevNextButtons = false;
          autoRestart = false;
        }
        if ((breakPoint === _responsive.breakPointsType.xs || breakPoint === _responsive.breakPointsType.xxs) && brands.length <= 2) {
          options.autoPlay = false;
          options.draggable = false;
          options.prevNextButtons = false;
          autoRestart = false;
        }
        return /*#__PURE__*/_react["default"].createElement(_brandsSlider.BrandsContainer, null, /*#__PURE__*/_react["default"].createElement(_slider["default"], {
          flickitySliderCss: flickitySliderCss,
          autoRestart: autoRestart,
          indexOneOnResize: true,
          ref: function ref(c) {
            return _this2.slider = c;
          },
          options: options
        }, brands.map(function (item) {
          return (
            /*#__PURE__*/
            // FlowFixMe
            _react["default"].createElement(_index["default"], {
              item: item,
              key: item.id
            })
          );
        })));
      }
      return /*#__PURE__*/_react["default"].createElement(_brandsSlider.BrandsContainer, null, /*#__PURE__*/_react["default"].createElement("div", null));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withTracking.WithTracking)(Brands);