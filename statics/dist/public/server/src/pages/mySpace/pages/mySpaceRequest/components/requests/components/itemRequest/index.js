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
var _contextComponent = require("../../../../../../../../components/contextComponent");
var _mySpaceButton = _interopRequireDefault(require("../../../../../../styles/mySpaceButton"));
var _productMainFeatureValues = _interopRequireDefault(require("../../../../../../../../components/product/productMainFeatureValues"));
var _itemRequest = require("./styles/itemRequest");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var RfqDefaultImageUrl = "".concat("https://img.virtual-expo.com", "/media/ps/images/common/myspace/rfq-thumb.png");

/**
 * Composant representant un element dans myspace(request etc..).
 */
var ItemRequest = /*#__PURE__*/function (_ContextComponent) {
  function ItemRequest(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, ItemRequest);
    _this = _callSuper(this, ItemRequest, [props, context]);
    var item = props.item;
    _this.element = null;
    _this.isRecoDowngraded = item.isRecoDowngraded;
    // DTO different en fonction de l'element
    if (item.entityType === "PRODUCT") {
      _this.element = item.productDTO;
    } else if (item.entityType === "PDF") {
      _this.element = item.pdfDTO;
    } else if (item.entityType === "PROJECT" || item.entityType === "TREND") {
      _this.element = item.projectDTO;
    } else if (item.entityType === "RFQ") {
      _this.element = item.rfqDTO;
    } else {
      throw new Error("Request type not handled");
    }
    return _this;
  }

  // enum('NEW','ON_HOLD','MORE_INFO','REFUSED','REQUEST','SENT','CLOSED')
  (0, _inherits2["default"])(ItemRequest, _ContextComponent);
  return (0, _createClass2["default"])(ItemRequest, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        item = _this$props.item,
        intl = _this$props.intl;
      var itemToDisable = false;
      var idMessage = "";
      if (this.element.status === "REFUSED" || this.element.status === "REQUEST" || this.element.status === "CLOSED" || this.element.status === "ON_HOLD" || this.element.status === "PENDING" || this.element.status === "NEW") {
        itemToDisable = true;
      }
      if (this.element.status === "REFUSED" || this.element.status === "REQUEST") {
        idMessage = "foj_myspace_request_rfqStatus_declined";
      }
      if (this.element.status === "CLOSED") {
        idMessage = "foj_myspace_request_rfqStatus_closed";
      }
      if (this.element.status === "ON_HOLD" || this.element.status === "NEW" || this.element.status === "PENDING") {
        idMessage = "foj_myspace_request_rfqStatus_moderated";
      }
      if (this.element) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_itemRequest.WrapperItemRequest, {
          itemToDisable: this.isRecoDowngraded
        }, /*#__PURE__*/_react["default"].createElement(_itemRequest.WrapperItemRequestContentBox, null, /*#__PURE__*/_react["default"].createElement(_itemRequest.OverlayBackground, {
          itemToDisable: itemToDisable
        }, /*#__PURE__*/_react["default"].createElement(_itemRequest.RequestType, null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", null, item.title))), /*#__PURE__*/_react["default"].createElement(_itemRequest.WrapperImageRequest, {
          itemToDisable: this.isRecoDowngraded
        }, item.newness && /*#__PURE__*/_react["default"].createElement(_itemRequest.Bell, null), /*#__PURE__*/_react["default"].createElement("a", {
          className: itemToDisable ? "request-details-link disabled" : "request-details-link",
          href: item.requestUrl
        }, /*#__PURE__*/_react["default"].createElement("img", {
          className: "request-opacity",
          alt: this.element.name,
          src: this.element.imageUrl || RfqDefaultImageUrl,
          loading: "lazy"
        }), this.isRecoDowngraded && /*#__PURE__*/_react["default"].createElement("div", {
          className: "centered"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "foj_myspace_label_requestRecoDowngraded"
        })))), /*#__PURE__*/_react["default"].createElement(_itemRequest.ItemTitle, null, /*#__PURE__*/_react["default"].createElement("a", {
          href: this.element.linkUrl,
          className: itemToDisable ? "disabled" : ""
        }, this.element.name), item.entityType === "PRODUCT" && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("a", {
          href: this.element.elementUrl,
          className: "model"
        }, this.element.brand), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_productMainFeatureValues["default"], {
          featureValues: this.element.featureValuesOrdered
        }), /*#__PURE__*/_react["default"].createElement("br", null))), /*#__PURE__*/_react["default"].createElement(_itemRequest.CompanyLogo, null, item.entityType !== "RFQ" && /*#__PURE__*/_react["default"].createElement("img", {
          src: item.companyLogoLink,
          alt: "logo"
        }))), (!itemToDisable || this.element.status === "CLOSED") && /*#__PURE__*/_react["default"].createElement(_mySpaceButton["default"], {
          as: "a",
          href: item.requestUrl,
          isRecoDowngraded: this.isRecoDowngraded
        }, item.entityType === "RFQ" && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "foj_myspace_request_button_rfqDetail"
        }), item.entityType !== "RFQ" && !this.isRecoDowngraded && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "foj_myspace_button_requestDetail"
        }), item.entityType !== "RFQ" && this.isRecoDowngraded && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "foj_myspace_button_requestRecoDowngradedDetail"
        })), itemToDisable && /*#__PURE__*/_react["default"].createElement(_itemRequest.Overlay, {
          className: this.element.status
        }, /*#__PURE__*/_react["default"].createElement("div", null, (this.element.status === "REFUSED" || this.element.status === "REQUEST") && /*#__PURE__*/_react["default"].createElement(_itemRequest.RefusedIcon, null), this.element.status === "CLOSED" && /*#__PURE__*/_react["default"].createElement(_itemRequest.StopCircleIcon, null), (this.element.status === "NEW" || this.element.status === "ON_HOLD" || this.element.status === "PENDING") && /*#__PURE__*/_react["default"].createElement(_itemRequest.HourGlassHalfIcon, null)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: idMessage,
          values: {
            0: "".concat(intl.formatDate(this.element.statusModifDate))
          }
        }))))));
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(ItemRequest);