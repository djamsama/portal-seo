"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _pageLayoutCustom = _interopRequireDefault(require("../../layouts/pageLayoutCustom"));
var _formWrapper = require("./styles/formWrapper");
var _block = require("./styles/block");
var _requestElement = _interopRequireDefault(require("./components/requestElement"));
var _containers = _interopRequireDefault(require("./containers"));
var _requestFormTitle = _interopRequireDefault(require("./containers/requestFormTitle"));
var _confirmationSections = _interopRequireDefault(require("./components/confirmationSections"));
var _constants = require("./constants");
var _contextComponent = require("../../components/contextComponent");
var _recommendationsSection = _interopRequireDefault(require("./components/recommendationsSection"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable react/require-default-props */
var RequestPage = /*#__PURE__*/function (_ContextComponent) {
  function RequestPage() {
    (0, _classCallCheck2["default"])(this, RequestPage);
    return _callSuper(this, RequestPage, arguments);
  }
  (0, _inherits2["default"])(RequestPage, _ContextComponent);
  return (0, _createClass2["default"])(RequestPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var referer = false && document ? document.referrer : null;
      var _this$props = this.props,
        intl = _this$props.intl,
        stepId = _this$props.stepId,
        multiRequestConfirmation = _this$props.multiRequestConfirmation;
      return /*#__PURE__*/_react["default"].createElement(_pageLayoutCustom["default"], {
        brands: false
      }, /*#__PURE__*/_react["default"].createElement(_formWrapper.FormWrapperStyled, null, !_constants.LAST_STEPS_ID[stepId] && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_requestFormTitle["default"], {
        context: this.context
      }), /*#__PURE__*/_react["default"].createElement(_formWrapper.RequestFormWrapper, null, /*#__PURE__*/_react["default"].createElement(_formWrapper.MainContent, null, /*#__PURE__*/_react["default"].createElement(_containers["default"], this.props)), /*#__PURE__*/_react["default"].createElement(_formWrapper.SideContent, null, /*#__PURE__*/_react["default"].createElement(_requestElement["default"], null))), /*#__PURE__*/_react["default"].createElement(_block.PrivacyBlock, {
        dangerouslySetInnerHTML: {
          __html: intl.formatMessage({
            id: "Fo_Request_RequestForm_Policy_Message"
          })
        }
      }))), _constants.LAST_STEPS_ID[stepId] && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, multiRequestConfirmation && /*#__PURE__*/_react["default"].createElement(_confirmationSections["default"], (0, _extends2["default"])({}, this.props, {
        referer: referer,
        showGaDisplay: true
      })), !multiRequestConfirmation && /*#__PURE__*/_react["default"].createElement(_recommendationsSection["default"], (0, _extends2["default"])({}, this.props, {
        referer: referer
      }))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(RequestPage);