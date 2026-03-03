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
var _styledComponents = require("styled-components");
var _reactIntl = require("react-intl");
var _contextComponent = require("../../../../components/contextComponent");
var _row = _interopRequireDefault(require("../../../../components/styles/row"));
var _trendTile = _interopRequireDefault(require("./trendTile"));
var _newTrends = require("./styles/newTrends");
var _sectionTitle = _interopRequireDefault(require("../../../../components/title/sectionTitle"));
var _constants = require("../../../../commons/constants");
var _withTracking = require("../../../../hoc/withTracking");
var _homeHelper = _interopRequireDefault(require("../helpers/homeHelper"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var minHeight = (0, _styledComponents.css)(["min-height:310px;"]);
var NewTrends = /*#__PURE__*/function (_ContextComponent) {
  function NewTrends(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, NewTrends);
    _this = _callSuper(this, NewTrends, [props, context]);
    _this.track = _this.track.bind(_this);
    if (!_this.pageTypeId && context && context.initData && context.initData.pageTypeId) {
      _this.pageTypeId = context.initData.pageTypeId;
    }
    _this._isMounted = false;
    return _this;
  }
  (0, _inherits2["default"])(NewTrends, _ContextComponent);
  return (0, _createClass2["default"])(NewTrends, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.getItems) {
        this.props.getItems(_constants.APPLICATION.TRENDS.PARAMETER_NAME);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
      this._listTracked = false;
    }
  }, {
    key: "track",
    value: function track(items) {
      if (this._listTracked) {
        return;
      }
      var _this$props = this.props,
        TrackingHelper = _this$props.TrackingHelper,
        doTracking = _this$props.doTracking,
        viewedPageId = _this$props.viewedPageId;
      var naturalElements = [];
      var pushedElements = [];
      items.map(function (element) {
        if (element.pushed) {
          pushedElements.push(element);
        } else {
          naturalElements.push(element);
        }
        return true;
      });
      if (pushedElements.length > 0) {
        var trackingElements = TrackingHelper.itemsToTrackingElements(pushedElements, {
          pushed: true,
          elementTypeId: _constants.ELEMENT_TYPE.trends,
          placementId: 8,
          displayMode: _constants.TRACKING_EVENTS.MODE_THUMBNAILS
        }, this.context);
        if (doTracking && viewedPageId && trackingElements) {
          doTracking(trackingElements, viewedPageId);
          this._listTracked = true;
        }
      }
      if (naturalElements.length > 0) {
        var _trackingElements = TrackingHelper.itemsToTrackingElements(naturalElements, {
          pushed: false,
          elementTypeId: _constants.ELEMENT_TYPE.trends,
          placementId: 8,
          displayMode: _constants.TRACKING_EVENTS.MODE_THUMBNAILS
        }, this.context);
        if (doTracking && viewedPageId && _trackingElements) {
          doTracking(_trackingElements, viewedPageId);
          this._listTracked = true;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var trends = this.props.trends;
      var nbTrends = trends ? trends.length : 0;
      if (!trends || nbTrends > 0) {
        return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_newTrends.TitleWrapper, null, /*#__PURE__*/_react["default"].createElement(_sectionTitle["default"], null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "foj_homepage_new_trends_title"
        }))), /*#__PURE__*/_react["default"].createElement(_row["default"], {
          minHeight: minHeight
        }, trends && this.track(trends), trends && trends.map(function (item, index) {
          return (
            /*#__PURE__*/
            // $FlowFixMe
            _react["default"].createElement(_trendTile["default"], {
              trackingElement: _homeHelper["default"].getTrackElementClick(item, _constants.ELEMENT_TYPE.trends, 8, _this2.pageTypeId),
              key: item.id + index.toString(),
              item: item,
              linkText: item.brand,
              link: item.linkUrl ? item.linkUrl : null,
              dataCy: "newTrend".concat(index)
            })
          );
        })));
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withTracking.WithTracking)(NewTrends);