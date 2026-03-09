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
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../../../components/formattedHTMLMessage"));
var _semanticUiReact = require("semantic-ui-react");
var _contextComponent = require("../../../../../../../components/contextComponent");
var _requestDetailList = _interopRequireDefault(require("./components/requestDetailList"));
var _requestSentConfirmationNotificationContainer = _interopRequireDefault(require("./components/requestSentConfirmationNotification/containers/requestSentConfirmationNotificationContainer"));
var _requestSendedConfirmation = require("./styles/requestSendedConfirmation");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable class-methods-use-this */ // $FlowFixMe
// $FlowFixMe
/* eslint-disable */
var RequestSendedConfirmation = /*#__PURE__*/function (_ContextComponent) {
  function RequestSendedConfirmation(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, RequestSendedConfirmation);
    _this = _callSuper(this, RequestSendedConfirmation, [props, context]);
    _this.site = context && context.config && context.config.portal && context.config.portal.site ? context.config.portal.site.toLowerCase() : "ae";
    return _this;
  }
  (0, _inherits2["default"])(RequestSendedConfirmation, _ContextComponent);
  return (0, _createClass2["default"])(RequestSendedConfirmation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        requestDetails = _this$props.requestDetails,
        requestRecoCompanies = _this$props.requestRecoCompanies,
        drdRequest = _this$props.drdRequest;
      return /*#__PURE__*/_react["default"].createElement(_requestSendedConfirmation.ConfirmationWhiteBlock, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid, {
        stackable: true,
        centered: true
      }, /*#__PURE__*/_react["default"].createElement(_requestSendedConfirmation.CustomGridRow, {
        noPaddinBottom: drdRequest
      }, /*#__PURE__*/_react["default"].createElement(_requestSendedConfirmation.ConfirmWrapper, null, /*#__PURE__*/_react["default"].createElement(_requestSendedConfirmation.ImageWrapper, null, /*#__PURE__*/_react["default"].createElement(_requestSendedConfirmation.ImgConfirm, {
        src: "".concat("https://img.virtual-expo.com", "/media/ps/images/").concat(this.site, "/request/success.svg"),
        alt: "",
        maxHeight: drdRequest ? "100px" : "inherit"
      })), /*#__PURE__*/_react["default"].createElement(_requestSendedConfirmation.SupplierBlock, null, /*#__PURE__*/_react["default"].createElement(_requestSendedConfirmation.TxtSupplier, {
        "data-cy": "request-success-message",
        className: drdRequest ? "drdRequestCustom" : ""
      }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "fo_myspace_request_authenticatedTitle".concat(requestDetails && requestDetails.length > 1 ? "_plural" : "")
      }))))), /*#__PURE__*/_react["default"].createElement(_requestSendedConfirmation.CustomGridRow, {
        noPaddinTop: drdRequest
      }, /*#__PURE__*/_react["default"].createElement(_requestSentConfirmationNotificationContainer["default"], {
        drdRequest: drdRequest
      })), drdRequest && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.GridRow, null, /*#__PURE__*/_react["default"].createElement(_requestDetailList["default"], {
        requestDetails: requestDetails
      })), requestRecoCompanies && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.GridRow, null, /*#__PURE__*/_react["default"].createElement(_requestSendedConfirmation.CompanyListContainer, null, /*#__PURE__*/_react["default"].createElement(_requestSendedConfirmation.CompanyListWrapper, null, /*#__PURE__*/_react["default"].createElement(_requestSendedConfirmation.Title, null, /*#__PURE__*/_react["default"].createElement("span", {
        className: "fa-stack"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-lightbulb-o fa-stack-1x"
      })), /*#__PURE__*/_react["default"].createElement("span", {
        className: "recoTitle"
      }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_request_selected_company_for_reco_title"
      }))), /*#__PURE__*/_react["default"].createElement(_requestSendedConfirmation.Subtitle, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_request_selected_company_for_reco_content"
      })), /*#__PURE__*/_react["default"].createElement(_requestSendedConfirmation.CompaniesContainer, null, requestRecoCompanies.map(function (rel) {
        return /*#__PURE__*/_react["default"].createElement(_requestSendedConfirmation.CompanyBlock, {
          key: rel.id
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "logo"
        }, /*#__PURE__*/_react["default"].createElement(_requestSendedConfirmation.Logo, {
          src: rel.imageUrl,
          alt: rel.name
        })), /*#__PURE__*/_react["default"].createElement("div", null, rel.name));
      })))))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = RequestSendedConfirmation;