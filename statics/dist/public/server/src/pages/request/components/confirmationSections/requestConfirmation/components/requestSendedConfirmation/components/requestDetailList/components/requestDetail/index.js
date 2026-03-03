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
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../../../../../../../components/formattedHTMLMessage"));
var _supplierRating = _interopRequireDefault(require("../../../../../../../../../../../components/supplierDetails/components/supplierRating"));
var _supplierReactivity = _interopRequireDefault(require("../../../../../../../../../../../components/supplierDetails/components/supplierReactivity"));
var _contextComponent = require("../../../../../../../../../../../components/contextComponent");
var _requestDetail = require("./styles/requestDetail");
var _globalHelper = require("../../../../../../../../../../../helpers/globalHelper");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable react/require-default-props */
var isNotEmpty = function isNotEmpty(prop) {
  return prop && prop.length > 0;
};
var isSourceTypeProduct = function isSourceTypeProduct(prop) {
  return prop === "PRODUCT";
};

/** Affichage d'un contact avec ou sans prix, highlight ou pas ... */
var RequestDetailComponent = exports["default"] = /*#__PURE__*/function (_ContextComponent) {
  function RequestDetailComponent() {
    (0, _classCallCheck2["default"])(this, RequestDetailComponent);
    return _callSuper(this, RequestDetailComponent, arguments);
  }
  (0, _inherits2["default"])(RequestDetailComponent, _ContextComponent);
  return (0, _createClass2["default"])(RequestDetailComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        requestDetail = _this$props.requestDetail,
        nb = _this$props.nb;
      var isMobile = this.context && this.context.config ? this.context.config.isMobile : _globalHelper.GlobalHelper.isMobileDevice();
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "rowContainer"
      }, /*#__PURE__*/_react["default"].createElement(_requestDetail.Row, {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement(_requestDetail.Left, null, /*#__PURE__*/_react["default"].createElement(_requestDetail.ProductBlock, null, /*#__PURE__*/_react["default"].createElement(_requestDetail.ProductImage, null, /*#__PURE__*/_react["default"].createElement("img", {
        alt: requestDetail.elementProductName,
        src: requestDetail.imageLink
      })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_requestDetail.ProductDescription, null, isSourceTypeProduct(requestDetail.viewedContentType) && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, isNotEmpty(requestDetail.elementProductName) && requestDetail.elementProductName, isNotEmpty(requestDetail.elementModel) && /*#__PURE__*/_react["default"].createElement("div", null, requestDetail.elementModel))), /*#__PURE__*/_react["default"].createElement(_requestDetail.ProductCompanyImage, null, /*#__PURE__*/_react["default"].createElement("img", {
        alt: requestDetail.companyName,
        src: requestDetail.companyLogoLink
      }))))), /*#__PURE__*/_react["default"].createElement(_requestDetail.Vseparator, null), /*#__PURE__*/_react["default"].createElement(_requestDetail.Right, null, /*#__PURE__*/_react["default"].createElement(_requestDetail.CompanyBlock, null, /*#__PURE__*/_react["default"].createElement(_requestDetail.SendedToLabel, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_request_detail_contact_requested_title"
      })), /*#__PURE__*/_react["default"].createElement(_requestDetail.BlockNameLocalisation, null, /*#__PURE__*/_react["default"].createElement(_requestDetail.BlockName, null, requestDetail.contactName), requestDetail.localisation && /*#__PURE__*/_react["default"].createElement(_requestDetail.BlockLocalisation, null, " ", requestDetail.localisation, " ")), /*#__PURE__*/_react["default"].createElement(_requestDetail.BlockStarsWrapper, null, (requestDetail.notation.satisfactionCount || requestDetail.notation.reactivityInterval) && /*#__PURE__*/_react["default"].createElement(_requestDetail.BlockStars, null, requestDetail.notation.satisfactionCount && /*#__PURE__*/_react["default"].createElement(_requestDetail.BlockQuality, null, /*#__PURE__*/_react["default"].createElement(_supplierRating["default"], {
        wrap: true,
        supplier: requestDetail.notation,
        secondary: true
      })), requestDetail.notation.reactivityInterval && /*#__PURE__*/_react["default"].createElement(_requestDetail.BlockQuality, null, /*#__PURE__*/_react["default"].createElement(_supplierReactivity["default"], {
        supplier: requestDetail.notation,
        secondary: isMobile
      }))))))), nb > 1 && /*#__PURE__*/_react["default"].createElement(_requestDetail.Separator, null));
    }
  }]);
}(_contextComponent.ContextComponent);