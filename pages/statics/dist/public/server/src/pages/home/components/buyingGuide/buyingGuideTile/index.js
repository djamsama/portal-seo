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
var _reactIntl = require("react-intl");
var _contextComponent = require("../../../../../components/contextComponent");
var _globalHelper = require("../../../../../helpers/globalHelper");
var _link = _interopRequireDefault(require("../../../../../components/styles/link"));
var _responsive = require("../../../../../components/styles/responsive");
var _buyingGuideTile = require("./styles/buyingGuideTile");
var _templateObject;
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var BuyingGuideTile = /*#__PURE__*/function (_ContextComponent) {
  function BuyingGuideTile(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, BuyingGuideTile);
    _this = _callSuper(this, BuyingGuideTile, [props, context]);
    _this.refImage = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }
  (0, _inherits2["default"])(BuyingGuideTile, _ContextComponent);
  return (0, _createClass2["default"])(BuyingGuideTile, [{
    key: "componentDidMount",
    value: function componentDidMount() {}

    // Ajout de la partie responsive des tuiles.
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        link = _this$props.link,
        item = _this$props.item,
        dataCy = _this$props.dataCy;
      var isMobile = this.context && this.context.config ? this.context.config.isMobile : _globalHelper.GlobalHelper.isMobileDevice();
      return /*#__PURE__*/_react["default"].createElement(_buyingGuideTile.WrapperDivTile, {
        dataCy: dataCy,
        mediaTemplates: BuyingGuideTile.getMediaTemplates,
        scaleRatio: isMobile ? 1 : 1.05
      }, /*#__PURE__*/_react["default"].createElement(_buyingGuideTile.WrapperContent, null, /*#__PURE__*/_react["default"].createElement(_buyingGuideTile.WrapperDivImage, {
        ref: this.refImage,
        height: "auto"
      }, /*#__PURE__*/_react["default"].createElement(_buyingGuideTile.LinkBuyingTileImage, {
        href: link,
        title: item.name
      }, /*#__PURE__*/_react["default"].createElement(_buyingGuideTile.BuyingTileDivImage, {
        src: item.imageUrl,
        alt: item.name
      }))), /*#__PURE__*/_react["default"].createElement(_buyingGuideTile.WrapperCaption, null, /*#__PURE__*/_react["default"].createElement(_buyingGuideTile.WrapperCaptionTitle, null, item.name), /*#__PURE__*/_react["default"].createElement(_buyingGuideTile.WrapperDescription, null, item.description), item.linkUrl != null && /*#__PURE__*/_react["default"].createElement(_buyingGuideTile.StyledGuideButton, {
        as: "a",
        href: item.linkUrl,
        target: "_blank"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_buying_guide_learn_more"
      })))));
    }
  }], [{
    key: "getMediaTemplates",
    value: function getMediaTemplates() {
      return (0, _styledComponents.css)(["width:calc(100% / 3);", ";"], _responsive.media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      width: 100%;\n    "]))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = BuyingGuideTile;