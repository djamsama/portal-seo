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
var _constants = require("../../../../commons/constants");
var _contextComponent = require("../../../../components/contextComponent");
var _ = _interopRequireDefault(require("../.."));
var _myspaceQuotations = _interopRequireDefault(require("../../components/myspaceQuotations"));
var _breadcrumbs = _interopRequireDefault(require("../../../../components/breadcrumbs"));
var _withGoogleAnalytics = require("../../../../hoc/withGoogleAnalytics");
var _mySpace = require("../../styles/mySpace");
var _boxItemHeader = _interopRequireDefault(require("../../components/boxItemHeader"));
var _boxItemSubTitle = _interopRequireDefault(require("./components/boxItemSubTitle"));
var _mySpaceRequestDetail = require("./styles/mySpaceRequestDetail");
var _mySpaceDetail = require("../../styles/mySpaceDetail");
var _personnalRating = _interopRequireDefault(require("./components/personnalRating"));
var _requestRecap = _interopRequireDefault(require("./components/requestRecap"));
var _conversation = _interopRequireDefault(require("../../../../components/messages/conversation"));
var _downgradedRecoInfo = _interopRequireDefault(require("./components/downgradedRecoInfo"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Composant gérant le détail d'une demande
 */
var MySpaceRequestDetail = /*#__PURE__*/function (_ContextComponent) {
  function MySpaceRequestDetail(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, MySpaceRequestDetail);
    _this = _callSuper(this, MySpaceRequestDetail, [props, context]);
    _this.requestDetail = context.initData.requestDetail;
    _this.baseUrlImg = context.initData.baseUrlImg;
    _this.quoteIdToView = parseInt(context.initData.quoteIdToView, 10);
    _this.breadCrumbList = context.initData.breadCrumbList;
    return _this;
  }
  (0, _inherits2["default"])(MySpaceRequestDetail, _ContextComponent);
  return (0, _createClass2["default"])(MySpaceRequestDetail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var googleAnalytics = this.props.googleAnalytics;
      googleAnalytics.event({
        category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
        action: _constants.GOOGLE_ANALYTICS_EVENTS.QUOTE_VIEWER,
        label: _constants.GOOGLE_ANALYTICS_EVENTS.DISPLAY_REQUEST_DETAIL
      });
    }
  }, {
    key: "render",
    value: function render() {
      var initData = this.context.initData;
      var conversation = {};
      conversation.companyName = this.requestDetail.companyName;
      conversation.history = this.requestDetail.history;
      conversation.message = {
        requestTokenId: initData.tokenId
      };
      return /*#__PURE__*/_react["default"].createElement(_["default"], null, /*#__PURE__*/_react["default"].createElement(_mySpace.BoxItemRequest, null, /*#__PURE__*/_react["default"].createElement(_breadcrumbs["default"], {
        breadcrumbs: this.breadCrumbList
      }), this.requestDetail.downgradedReco && /*#__PURE__*/_react["default"].createElement(_downgradedRecoInfo["default"], {
        requestDetail: this.requestDetail
      }), /*#__PURE__*/_react["default"].createElement(_boxItemHeader["default"], {
        puceType: "none",
        titleLabel: this.requestDetail.elementTitle
      }), /*#__PURE__*/_react["default"].createElement(_boxItemSubTitle["default"], {
        requestDetail: this.requestDetail,
        baseUrlImg: this.baseUrlImg
      }), /*#__PURE__*/_react["default"].createElement(_mySpaceRequestDetail.RequestBoxItemContent, null, /*#__PURE__*/_react["default"].createElement(_mySpaceDetail.ContainerDiv, null, /*#__PURE__*/_react["default"].createElement(_mySpaceRequestDetail.FlewDivLeft, null, this.requestDetail && this.requestDetail.notation && this.requestDetail.notation.personnalSatisfactionRating !== null && this.requestDetail.requestStatus !== "REFUSED" && /*#__PURE__*/_react["default"].createElement(_personnalRating["default"], {
        rating: this.requestDetail.notation.personnalSatisfactionRating,
        token: initData.tokenId
      }), this.requestDetail && this.requestDetail.quotationsList && this.requestDetail.quotationsList.length > 0 && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_myspaceQuotations["default"], {
        quotations: this.requestDetail.quotationsList,
        lead: this.requestDetail,
        leadContext: "request",
        quoteIdToView: this.quoteIdToView
      })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_requestRecap["default"], {
        request: this.requestDetail
      }))), /*#__PURE__*/_react["default"].createElement(_mySpaceRequestDetail.FlewDivRight, null, /*#__PURE__*/_react["default"].createElement(_conversation["default"], {
        disable: false,
        conversation: conversation,
        leadContext: "request",
        visitorLanguage: this.requestDetail.visitorLanguage
      }))))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)(MySpaceRequestDetail);