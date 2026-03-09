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
var _boxItemSubTitle = require("./styles/boxItemSubTitle");
var _ratingBlock = _interopRequireDefault(require("../../../../../../components/ratingBlock"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Composant gérant l'affichage du sous titre dans le détail d'une demande
 */
var BoxItemSubTitle = /*#__PURE__*/function (_React$Component) {
  function BoxItemSubTitle(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, BoxItemSubTitle);
    _this = _callSuper(this, BoxItemSubTitle, [props]);
    _this.requestDetail = props.requestDetail;
    return _this;
  }
  (0, _inherits2["default"])(BoxItemSubTitle, _React$Component);
  return (0, _createClass2["default"])(BoxItemSubTitle, [{
    key: "render",
    value: function render() {
      var _this$requestDetail = this.requestDetail,
        sendedRequestDateFormatted = _this$requestDetail.sendedRequestDateFormatted,
        contactName = _this$requestDetail.contactName,
        downgradedReco = _this$requestDetail.downgradedReco;
      return /*#__PURE__*/_react["default"].createElement(_boxItemSubTitle.SubTitleDiv, null, /*#__PURE__*/_react["default"].createElement(_boxItemSubTitle.RequestDetailInfo, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_myspace_request_detail_sent",
        values: {
          0: sendedRequestDateFormatted,
          1: /*#__PURE__*/_react["default"].createElement("strong", null, contactName)
        }
      })), !downgradedReco && /*#__PURE__*/_react["default"].createElement(_boxItemSubTitle.RatingDiv, null, /*#__PURE__*/_react["default"].createElement(_ratingBlock["default"], {
        starSize: 24,
        hideRating: this.requestDetail.notation.hideRating,
        satisfactionRating: this.requestDetail.notation.satisfactionRating,
        reactivityInterval: this.requestDetail.notation.reactivityInterval,
        satisfactionCount: this.requestDetail.notation.satisfactionCount,
        disableReactivityTooltip: true
      })));
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(BoxItemSubTitle);