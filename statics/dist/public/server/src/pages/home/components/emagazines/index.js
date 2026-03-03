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
var _styledComponents = require("styled-components");
var _contextComponent = require("../../../../components/contextComponent");
var _row = _interopRequireDefault(require("../../../../components/styles/row"));
var _emagTile = _interopRequireDefault(require("./emagTile"));
var _emagazines = require("./styles/emagazines");
var _sectionTitle = _interopRequireDefault(require("../../../../components/title/sectionTitle"));
var _constants = require("../../../../commons/constants");
var _withTracking = require("../../../../hoc/withTracking");
var _homeHelper = _interopRequireDefault(require("../helpers/homeHelper"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var minHeight = (0, _styledComponents.css)(["min-height:310px;"]);
var Emagazines = /*#__PURE__*/function (_ContextComponent) {
  function Emagazines(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, Emagazines);
    _this = _callSuper(this, Emagazines, [props, context]);
    _this.track = _this.track.bind(_this);
    _this._isMounted = false;
    if (!_this.pageTypeId && context && context.initData && context.initData.pageTypeId) {
      _this.pageTypeId = context.initData.pageTypeId;
    }
    return _this;
  }
  (0, _inherits2["default"])(Emagazines, _ContextComponent);
  return (0, _createClass2["default"])(Emagazines, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getEmags();
      this._listTracked = false;
      this._isMounted = false;
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
      var trackingElements = TrackingHelper.itemsToTrackingElements(items, {
        pushed: false,
        elementTypeId: _constants.ELEMENT_TYPE.emag,
        placementId: 0,
        displayMode: _constants.TRACKING_EVENTS.MODE_THUMBNAILS
      }, this.context);
      if (doTracking && viewedPageId && trackingElements) {
        doTracking(trackingElements, viewedPageId);
        this._listTracked = true;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var emags = this.props.emags;
      var nbEmags = emags ? emags.length : 0;
      if (!emags || nbEmags > 0) {
        return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_emagazines.TitleWrapper, null, /*#__PURE__*/_react["default"].createElement(_sectionTitle["default"], null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "fo_category_emag"
        }))), /*#__PURE__*/_react["default"].createElement(_row["default"], {
          minHeight: minHeight
        }, emags && this.track(emags), emags && emags.map(function (item, index) {
          return (
            /*#__PURE__*/
            // $FlowFixMe
            _react["default"].createElement(_emagTile["default"], {
              trackingElement: _homeHelper["default"].getTrackElementClick(item, _constants.ELEMENT_TYPE.emag, 0, _this2.pageTypeId),
              key: item.id + index.toString(),
              item: item,
              linkText: item.name,
              link: item.linkUrl ? item.linkUrl : null,
              dataCy: "emag".concat(index)
            })
          );
        })));
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withTracking.WithTracking)(Emagazines);