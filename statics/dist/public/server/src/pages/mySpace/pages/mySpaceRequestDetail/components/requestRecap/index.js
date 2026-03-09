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
var _reactIntl = require("react-intl");
var _contextComponent = require("../../../../../../components/contextComponent");
var _requestRecap = require("./styles/requestRecap");
var _productMainFeatureValues = _interopRequireDefault(require("../../../../../../components/product/productMainFeatureValues"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Composant gérant le rappel d'une rfq.
 */
var MySpaceRequestDetail = /*#__PURE__*/function (_ContextComponent) {
  function MySpaceRequestDetail(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, MySpaceRequestDetail);
    _this = _callSuper(this, MySpaceRequestDetail, [props, context]);
    _this.request = props.request;
    return _this;
  }
  (0, _inherits2["default"])(MySpaceRequestDetail, _ContextComponent);
  return (0, _createClass2["default"])(MySpaceRequestDetail, [{
    key: "render",
    value: function render() {
      var _this$context$initDat = this.context.initData,
        productLabel = _this$context$initDat.productLabel,
        productBrand = _this$context$initDat.productBrand,
        productLabelFeatureValues = _this$context$initDat.productLabelFeatureValues;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_requestRecap.Title, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_request_summary"
      })), /*#__PURE__*/_react["default"].createElement(_requestRecap.RequestContainer, null, /*#__PURE__*/_react["default"].createElement(_requestRecap.RequestDetailContainer, null, /*#__PURE__*/_react["default"].createElement(_requestRecap.SubTitle, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_request_wish"
      })), /*#__PURE__*/_react["default"].createElement(_requestRecap.List, null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("i", {
        className: this.request.quote ? "fa fa-check-square" : "fa fa-square"
      }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "global_request_receivequotelabel"
      })), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("i", {
        className: this.request.rate ? "fa fa-check-square" : "fa fa-square"
      }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "global_request_receiveratelabel"
      })), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("i", {
        className: this.request.documentation ? "fa fa-check-square" : "fa fa-square"
      }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "global_request_receivedoclabel"
      })), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("i", {
        className: this.request.question ? "fa fa-check-square" : "fa fa-square"
      }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "global_request_askaquestionlabel"
      })), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("i", {
        className: this.request.phoneReminder ? "fa fa-check-square" : "fa fa-square"
      }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "global_request_phonereminderlabel"
      }))), /*#__PURE__*/_react["default"].createElement(_requestRecap.RequestDetailContent, {
        dangerouslySetInnerHTML: {
          __html: this.request.message
        }
      }), /*#__PURE__*/_react["default"].createElement(_requestRecap.SubTitle, null, this.request.viewedContentTypeLabel), /*#__PURE__*/_react["default"].createElement(_requestRecap.ProductContainer, null, /*#__PURE__*/_react["default"].createElement("a", {
        href: this.request.elementUrl
      }, /*#__PURE__*/_react["default"].createElement("img", {
        alt: productLabel,
        src: this.request.imageLink
      })), /*#__PURE__*/_react["default"].createElement("a", {
        href: this.request.elementUrl,
        className: "spec"
      }, productLabel), /*#__PURE__*/_react["default"].createElement("a", {
        href: this.request.elementUrl,
        className: "model"
      }, productBrand), /*#__PURE__*/_react["default"].createElement(_productMainFeatureValues["default"], {
        featureValues: productLabelFeatureValues
      }), /*#__PURE__*/_react["default"].createElement("a", {
        className: "logo",
        href: this.request.elementUrl
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: this.request.parentRequestCompanyLogoLink ? this.request.parentRequestCompanyLogoLink : this.request.companyLogoLink,
        alt: this.request.parentRequestCompanyName ? this.request.parentRequestCompanyName : this.request.companyName
      }))))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = MySpaceRequestDetail;