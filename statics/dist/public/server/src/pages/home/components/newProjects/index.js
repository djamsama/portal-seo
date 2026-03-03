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
var _newProjects = require("./styles/newProjects");
var _sectionTitle = _interopRequireDefault(require("../../../../components/title/sectionTitle"));
var _projectTile = _interopRequireDefault(require("./projectTile"));
var _constants = require("../../../../commons/constants");
var _withTracking = require("../../../../hoc/withTracking");
var _withGoogleAnalytics = require("../../../../hoc/withGoogleAnalytics");
var _homeHelper = _interopRequireDefault(require("../helpers/homeHelper"));
var _link = require("../../../../components/link");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var minHeight = (0, _styledComponents.css)(["min-height:310px;"]);
var NewProjects = /*#__PURE__*/function (_ContextComponent) {
  function NewProjects(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, NewProjects);
    _this = _callSuper(this, NewProjects, [props, context]);
    _this.track = _this.track.bind(_this);
    _this._isMounted = false;
    _this._isMounted = false;
    if (!_this.pageTypeId && context && context.initData && context.initData.pageTypeId) {
      _this.pageTypeId = context.initData.pageTypeId;
    }
    return _this;
  }
  (0, _inherits2["default"])(NewProjects, _ContextComponent);
  return (0, _createClass2["default"])(NewProjects, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      if (this.props.getItems) {
        this.props.getItems(_constants.APPLICATION.PROJECTS.PARAMETER_NAME);
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
      var _this$props = this.props,
        TrackingHelper = _this$props.TrackingHelper,
        doTracking = _this$props.doTracking,
        viewedPageId = _this$props.viewedPageId;
      if (this._listTracked || !TrackingHelper) {
        return;
      }
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
          elementTypeId: _constants.ELEMENT_TYPE.project,
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
          elementTypeId: _constants.ELEMENT_TYPE.project,
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
      var ProjectsLink = this.context.initData.ProjectsLink;
      var projects = this.props.projects;
      var nbProject = projects ? projects.length : 0;
      if (!projects || nbProject > 0) {
        return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_newProjects.TitleWrapper, null, /*#__PURE__*/_react["default"].createElement(_sectionTitle["default"], null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "foj_homepage_new_projects_title"
        }))), /*#__PURE__*/_react["default"].createElement(_row["default"], {
          minHeight: minHeight
        }, projects && this.track(projects), projects && projects.map(function (item, index) {
          return (
            /*#__PURE__*/
            // $FlowFixMe la props est injectée par le hoc et flow ne le sait pas
            _react["default"].createElement(_projectTile["default"], {
              key: item.id + index.toString(),
              item: item,
              linkText: item.brand,
              link: item.linkUrl,
              trackingElement: _homeHelper["default"].getTrackElementClick(item, _constants.ELEMENT_TYPE.project, 8, _this2.pageTypeId),
              dataCy: "newProject".concat(index)
            })
          );
        })), /*#__PURE__*/_react["default"].createElement(_newProjects.AllProjectsWrapper, null, /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
          component: _newProjects.AllProjectLink,
          to: ProjectsLink
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "foj_homepage_see_all_projects_Label"
        }), " ", /*#__PURE__*/_react["default"].createElement("i", {
          className: "fa fa-angle-right"
        }))));
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)((0, _withTracking.WithTracking)(NewProjects));