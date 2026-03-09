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
var _contextComponent = require("../../../../components/contextComponent");
var _ = _interopRequireDefault(require("../.."));
var _breadcrumbs = _interopRequireDefault(require("../../../../components/breadcrumbs"));
var _myspaceQuotations = _interopRequireDefault(require("../../components/myspaceQuotations"));
var _stringHelper = require("../../../../helpers/stringHelper");
var _constants = require("../../../../commons/constants");
var _mySpace = require("../../styles/mySpace");
var _boxItemHeader = _interopRequireDefault(require("../../components/boxItemHeader"));
var _history = _interopRequireDefault(require("./components/history"));
var _noResponse = _interopRequireDefault(require("./components/noResponse"));
var _rfqRecap = _interopRequireDefault(require("./components/rfqRecap"));
var _mySpaceDetail = require("../../styles/mySpaceDetail");
var _mySpaceRfqDetail = require("./styles/mySpaceRfqDetail");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Composant gérant la liste des demandes.
 */
var MySpaceRFQDetail = /*#__PURE__*/function (_ContextComponent) {
  function MySpaceRFQDetail(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, MySpaceRFQDetail);
    _this = _callSuper(this, MySpaceRFQDetail, [props, context]);
    _this.rfq = context && context.initData ? context.initData.rfq : props.rfq;
    _this.close = false;
    _this.quoteIdToView = parseInt(context.initData.quoteIdToView, 10);
    return _this;
  }
  (0, _inherits2["default"])(MySpaceRFQDetail, _ContextComponent);
  return (0, _createClass2["default"])(MySpaceRFQDetail, [{
    key: "render",
    value: function render() {
      var initData = this.context.initData;
      var titleRfq = _stringHelper.StringHelper.splitTo(this.rfq.title, 100);
      return /*#__PURE__*/_react["default"].createElement(_["default"], null, /*#__PURE__*/_react["default"].createElement(_mySpace.BoxItemRequest, null, /*#__PURE__*/_react["default"].createElement(_breadcrumbs["default"], {
        breadcrumbs: initData.breadCrumbList
      }), /*#__PURE__*/_react["default"].createElement(_boxItemHeader["default"], {
        puceType: "none",
        titleLabel: titleRfq
      }), /*#__PURE__*/_react["default"].createElement(_mySpaceRfqDetail.RfqBoxItemContent, null, /*#__PURE__*/_react["default"].createElement(_mySpaceDetail.TitleDiv, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_rfqDetail_pageSendOn",
        values: {
          "0": this.rfq.date
        }
      })), /*#__PURE__*/_react["default"].createElement(_mySpaceDetail.ContainerDiv, null, /*#__PURE__*/_react["default"].createElement(_mySpaceRfqDetail.FlewDivLeft, null, this.rfq && this.rfq.quotationList && this.rfq.quotationList.length > 0 && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_myspaceQuotations["default"], {
        quotations: this.rfq.quotationList,
        lead: this.rfq,
        leadContext: "rfq",
        quoteIdToView: this.quoteIdToView
      })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_rfqRecap["default"], {
        rfq: this.rfq,
        title: true
      }))), /*#__PURE__*/_react["default"].createElement(_mySpaceRfqDetail.FlewDivRight, null, this.rfq.supplierHistory && this.rfq.supplierHistory.length > 0 && /*#__PURE__*/_react["default"].createElement(_history["default"], {
        rfq: this.rfq
      }), (!this.rfq.supplierHistory || (this.rfq.supplierHistory && this.rfq.supplierHistory.length) < 1) && /*#__PURE__*/_react["default"].createElement(_noResponse["default"], {
        closed: this.rfq.status === _constants.RFQ_STATUS.CLOSED
      }))))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = MySpaceRFQDetail;