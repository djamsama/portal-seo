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
var _breadcrumbs = _interopRequireDefault(require("../../components/breadcrumbs"));
var _contextComponent = require("../../components/contextComponent");
var _linkedData = _interopRequireDefault(require("../../components/linkedData"));
var _relatedLinks = _interopRequireDefault(require("../../components/relatedLinks"));
var _catalog = require("./styles/catalog");
var _standHeader = _interopRequireDefault(require("../stand/components/standHeader"));
var _withTracking = require("../../hoc/withTracking");
var _constants = require("../../commons/constants");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable array-callback-return */ /* eslint-disable no-param-reassign */ // TOPO  deplacer standHeader ?
var ELEMENT_TYPE_PDF = "pdf";
var Stand = /*#__PURE__*/function (_ContextComponent) {
  function Stand(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, Stand);
    // const catalogStandDetail = undefined;
    _this = _callSuper(this, Stand, [props, context]);
    _this.doTrack = _this.doTrack.bind(_this);
    _this.getTrackingElement = _this.getTrackingElement.bind(_this);
    if (!_this.pageTypeId && context && context.initData && context.initData.pageTypeId) {
      _this.pageTypeId = context.initData.pageTypeId;
    }
    _this.state = {
      breadCrumbList: context.initData.breadCrumbList,
      tracked: false
    };
    return _this;
  }
  (0, _inherits2["default"])(Stand, _ContextComponent);
  return (0, _createClass2["default"])(Stand, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // TRACKING C EST TODO
      var language = this.context.config.portal.language;
      var tracked = this.state.tracked;
      var _this$context$initDat = this.context.initData,
        trackingInfo = _this$context$initDat.trackingInfo,
        companyId = _this$context$initDat.companyId;
      var _this$props = this.props,
        getViewedPageId = _this$props.getViewedPageId,
        viewedPageId = _this$props.viewedPageId,
        TrackingHelper = _this$props.TrackingHelper,
        isPricesAvailable = _this$props.isPricesAvailable;
      if (this.pageTypeId) {
        if (!viewedPageId) {
          var elementList = trackingInfo ? trackingInfo.elementList : [];
          // $FlowFixMe
          var trackingInfoList = TrackingHelper.registerVisitContentList(elementList, ELEMENT_TYPE_PDF);
          // recuperation du getViewedPageId
          getViewedPageId({
            pageTypeId: this.pageTypeId,
            elementList: trackingInfoList
          }, language.toLowerCase());
        } else if (!tracked) {
          // Envoi du tracking view
          this.doTrack();
        }
      }
      if (companyId) {
        isPricesAvailable(companyId);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var tracked = this.state.tracked;
      if (!tracked) {
        // Envoi du tracking view
        this.doTrack();
      }
    }

    /**
     * Envoi du tracking view
     */
  }, {
    key: "doTrack",
    value: function doTrack() {
      var trackingInfo = this.context.initData.trackingInfo;
      var _this$props2 = this.props,
        doTracking = _this$props2.doTracking,
        viewedPageId = _this$props2.viewedPageId,
        TrackingHelper = _this$props2.TrackingHelper;
      // $FlowFixMe
      var trackingInfoList = TrackingHelper.registerVisitContentList(trackingInfo.elementList, ELEMENT_TYPE_PDF);
      var trackingElementList = new this.props.TrackingElement({
        elementList: trackingInfoList,
        pageTypeId: this.pageTypeId
      });
      trackingElementList.elementList.map(function (item) {
        item.placementId = 0;
        item.displayMode = _constants.TRACKING_EVENTS.MODE_DETAIL;
      });
      doTracking(trackingElementList, viewedPageId);
      this.setState({
        tracked: true
      });
    }
  }, {
    key: "getTrackingElement",
    value: function getTrackingElement() {
      var trackingInfo = this.context.initData.trackingInfo;
      var pageTypeId = this.context.initData.pageTypeId;
      var element = trackingInfo && trackingInfo.elementList ? trackingInfo.elementList[0] : null;
      var _ref = element || {
          companyId: null
        },
        companyId = _ref.companyId;
      var TrackingElement = this.props.TrackingElement;
      var trackingItem = {
        pushed: false,
        eventType: _constants.TRACKING_EVENTS.EVENT_TYPE_CLICK,
        pageTypeId: pageTypeId,
        clickThrough: true,
        entityId: companyId,
        companyId: companyId,
        elementTypeId: _constants.ELEMENT_TYPE.logo
      };

      // $FlowFixMe
      var trackingElement = new TrackingElement(trackingItem);
      return trackingElement;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        children = _this$props3.children,
        activeTab = _this$props3.activeTab,
        showRelatedLinks = _this$props3.showRelatedLinks;
      var breadCrumbList = this.state.breadCrumbList;
      var linkedData = this.context.initData.linkedData;
      // $FlowFixMe
      var trackingElement = this.getTrackingElement();
      return /*#__PURE__*/_react["default"].createElement(_catalog.StandWrapper, null, linkedData && /*#__PURE__*/_react["default"].createElement(_linkedData["default"], {
        linkedData: linkedData
      }), /*#__PURE__*/_react["default"].createElement(_breadcrumbs["default"], {
        breadcrumbs: breadCrumbList
      }), /*#__PURE__*/_react["default"].createElement(_standHeader["default"], {
        trackingElement: trackingElement,
        activeTab: activeTab
      }), children, showRelatedLinks === true && /*#__PURE__*/_react["default"].createElement(_relatedLinks["default"], null));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withTracking.WithTracking)(Stand);