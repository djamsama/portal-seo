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
var _formattedHTMLMessage = _interopRequireDefault(require("../formattedHTMLMessage"));
var _reactIntl = require("react-intl");
var _ratingBlock = require("./styles/ratingBlock");
var _popup = _interopRequireDefault(require("../popup"));
var _rate = _interopRequireDefault(require("../rate"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Composant gérant l'affichage du sous titre dans le détail d'une demande
 */
var RatingBlock = /*#__PURE__*/function (_React$Component) {
  function RatingBlock() {
    (0, _classCallCheck2["default"])(this, RatingBlock);
    return _callSuper(this, RatingBlock, arguments);
  }
  (0, _inherits2["default"])(RatingBlock, _React$Component);
  return (0, _createClass2["default"])(RatingBlock, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        hideRating = _this$props.hideRating,
        satisfactionCount = _this$props.satisfactionCount,
        satisfactionRating = _this$props.satisfactionRating,
        reactivityInterval = _this$props.reactivityInterval,
        disableReactivityTooltip = _this$props.disableReactivityTooltip,
        starSize = _this$props.starSize;
      if (hideRating) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
      }
      var reactivitycontent = !disableReactivityTooltip ? "foj_myspace_lead_rating_short_answer_time_" : "foj_myspace_lead_rating_answer_time_";
      return /*#__PURE__*/_react["default"].createElement(_ratingBlock.Rating, {
        className: "rating-container"
      }, /*#__PURE__*/_react["default"].createElement(_ratingBlock.RatingDetails, {
        className: "rating-detail"
      }, satisfactionCount ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "rating-star"
      }, /*#__PURE__*/_react["default"].createElement(_rate["default"], {
        count: 5,
        edit: false,
        value: satisfactionRating,
        size: starSize,
        color2: "#ffd700"
      })), /*#__PURE__*/_react["default"].createElement(_ratingBlock.Review, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_myspace_lead_rating_many_review",
        values: {
          "0": satisfactionCount
        }
      }))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ratingBlock.Review, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_myspace_lead_rating_no_review",
        values: {
          "0": satisfactionCount
        }
      })))), reactivityInterval && /*#__PURE__*/_react["default"].createElement(_popup["default"], {
        disabled: disableReactivityTooltip,
        on: "hover",
        basic: true,
        flowing: true,
        hoverable: true,
        position: "bottom right",
        contentstyle: {
          marginTop: "0"
        },
        trigger: /*#__PURE__*/_react["default"].createElement(_ratingBlock.Reactivity, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
          id: "".concat(reactivitycontent).concat(reactivityInterval.toLowerCase())
        }))
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "rating-tooltip"
      }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_myspace_lead_rating_answer_time_".concat(reactivityInterval.toLowerCase())
      }))));
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(RatingBlock);