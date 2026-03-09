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
var _downgradedRecoInfo = require("./styles/downgradedRecoInfo");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Composant gérant l'affichage de la section d'information sur une demande reco dégradé.
 */
var DowngradedRecoInfo = /*#__PURE__*/function (_React$Component) {
  function DowngradedRecoInfo(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, DowngradedRecoInfo);
    _this = _callSuper(this, DowngradedRecoInfo, [props]);
    _this.requestDetail = props.requestDetail;
    return _this;
  }
  (0, _inherits2["default"])(DowngradedRecoInfo, _React$Component);
  return (0, _createClass2["default"])(DowngradedRecoInfo, [{
    key: "render",
    value: function render() {
      var _this$requestDetail = this.requestDetail,
        parentRequestCompanyName = _this$requestDetail.parentRequestCompanyName,
        companyName = _this$requestDetail.companyName,
        companyLogoLink = _this$requestDetail.companyLogoLink;
      return /*#__PURE__*/_react["default"].createElement(_downgradedRecoInfo.InfoSectionContainer, null, /*#__PURE__*/_react["default"].createElement("span", {
        className: "info-icon-container"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-info-circle"
      })), /*#__PURE__*/_react["default"].createElement(_downgradedRecoInfo.InfoText, null, /*#__PURE__*/_react["default"].createElement("p", {
        className: "info-title"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_myspace_request_detail_reco_downgraded_reminder_title"
      })), /*#__PURE__*/_react["default"].createElement("p", {
        className: "info-description"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_myspace_request_detail_reco_downgraded_reminder_sentence",
        values: {
          0: /*#__PURE__*/_react["default"].createElement("strong", null, parentRequestCompanyName),
          1: /*#__PURE__*/_react["default"].createElement("strong", null, companyName)
        }
      }))), /*#__PURE__*/_react["default"].createElement(_downgradedRecoInfo.InfoIcon, null, /*#__PURE__*/_react["default"].createElement("img", {
        alt: companyName,
        src: companyLogoLink,
        height: "40"
      })));
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(DowngradedRecoInfo);