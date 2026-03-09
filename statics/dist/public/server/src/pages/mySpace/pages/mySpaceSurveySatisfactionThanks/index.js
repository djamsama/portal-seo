"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.VISITOR_CONTACTED = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../components/formattedHTMLMessage"));
var _contextComponent = require("../../../../components/contextComponent");
var _ = _interopRequireDefault(require("../.."));
var _satisfactionThanksWrapper = require("./styles/satisfactionThanksWrapper");
var _confirmationSections = _interopRequireDefault(require("../../../request/components/confirmationSections"));
var _recommendationsSection = _interopRequireDefault(require("../../../request/components/recommendationsSection"));
var _formWrapper = require("../../../request/styles/formWrapper");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var VISITOR_CONTACTED = exports.VISITOR_CONTACTED = {
  "1": "yes",
  "2": "no"
};
var MySpaceSurveySatisfactionThanks = /*#__PURE__*/function (_ContextComponent) {
  function MySpaceSurveySatisfactionThanks(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, MySpaceSurveySatisfactionThanks);
    _this = _callSuper(this, MySpaceSurveySatisfactionThanks, [props, context]);
    var match = props.match;
    var _match$params$visitor = match.params.visitorContacted,
      visitorContacted = _match$params$visitor === void 0 ? VISITOR_CONTACTED[1] : _match$params$visitor;
    _this.state = {
      visitorContacted: visitorContacted
    };
    return _this;
  }
  (0, _inherits2["default"])(MySpaceSurveySatisfactionThanks, _ContextComponent);
  return (0, _createClass2["default"])(MySpaceSurveySatisfactionThanks, [{
    key: "render",
    value: function render() {
      var _this$context$initDat = this.context.initData,
        mySpaceRequestDetailUrl = _this$context$initDat.mySpaceRequestDetailUrl,
        mySpaceRequestDetailLabelKey = _this$context$initDat.mySpaceRequestDetailLabelKey;
      var visitorContacted = this.state.visitorContacted;
      var multiRequestConfirmation = this.props.multiRequestConfirmation;
      var referer = false && document ? document.referrer : null;
      var label = {
        visitorContactedTitle: "foj_myspace_contacted_visitor_thanks_title",
        visitorContactedContent: "foj_myspace_contacted_visitor_thanks",
        visitorNotContactedTitle: "foj_myspace_not_contacted_visitor_reminder_thanks_title"
      };
      var title = label.visitorContactedTitle;
      if (visitorContacted === VISITOR_CONTACTED[2]) {
        title = label.visitorNotContactedTitle;
      }
      return /*#__PURE__*/_react["default"].createElement(_["default"], null, !multiRequestConfirmation && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_satisfactionThanksWrapper.SatisfactionThanksWrapper, null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_satisfactionThanksWrapper.ThanksTitle, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: title
      }))), /*#__PURE__*/_react["default"].createElement(_satisfactionThanksWrapper.ThanksButtonBloc, null, /*#__PURE__*/_react["default"].createElement(_satisfactionThanksWrapper.ThanksButtonExplanation, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_myspace_satisfaction_myspace_explanation"
      })), /*#__PURE__*/_react["default"].createElement(_satisfactionThanksWrapper.ThanksButton, null, /*#__PURE__*/_react["default"].createElement("a", {
        href: mySpaceRequestDetailUrl
      }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: mySpaceRequestDetailLabelKey
      }))))), /*#__PURE__*/_react["default"].createElement(_formWrapper.FormWrapperStyled, null, /*#__PURE__*/_react["default"].createElement(_recommendationsSection["default"], (0, _extends2["default"])({}, this.props, {
        referer: referer
      })))), multiRequestConfirmation && /*#__PURE__*/_react["default"].createElement(_confirmationSections["default"], (0, _extends2["default"])({}, this.props, {
        referer: referer,
        showGaDisplay: true
      })));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(MySpaceSurveySatisfactionThanks);