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
var _contextComponent = require("../../../../../components/contextComponent");
var _trackingGa = require("../../../../../components/trackings/trackingGa");
var _withGoogleAnalytics = require("../../../../../hoc/withGoogleAnalytics");
var _constants = require("../../../constants");
var _requestFormTitle = _interopRequireDefault(require("../../../containers/requestFormTitle"));
var _formWrapper = require("../../../styles/formWrapper");
var _requestBackFaqLink = _interopRequireDefault(require("../requestBackFaqLink"));
var _contact = _interopRequireDefault(require("./components/contact"));
var _requestContactDetailConfirmation = require("./styles/requestContactDetailConfirmation");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable react/require-default-props */
var RequestContactDetailConfirmation = /*#__PURE__*/function (_ContextComponent) {
  function RequestContactDetailConfirmation() {
    (0, _classCallCheck2["default"])(this, RequestContactDetailConfirmation);
    return _callSuper(this, RequestContactDetailConfirmation, arguments);
  }
  (0, _inherits2["default"])(RequestContactDetailConfirmation, _ContextComponent);
  return (0, _createClass2["default"])(RequestContactDetailConfirmation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        stepTitle = _this$props.stepTitle,
        category = _this$props.category,
        action = _this$props.action,
        showGaDisplay = _this$props.showGaDisplay;
      var _this$props2 = this.props,
        contact = _this$props2.contact,
        mainContact = _this$props2.mainContact;
      var initData = this.context.initData;
      if (!contact && initData && initData.contact) {
        contact = initData.contact;
      }
      if (!mainContact && initData && initData.mainContact) {
        mainContact = initData.mainContact;
      }
      var title = stepTitle;
      var gaLabel = _constants.GA_LABELS[_constants.AJAX_REQUEST_CONTACT_CONFIRMATION_FORMATED].supplier;
      var requestCompany = initData.requestCompany;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_formWrapper.FormWrapperStyled, {
        wide: true
      }, /*#__PURE__*/_react["default"].createElement(_requestFormTitle["default"], {
        stepTitle: title
      }), /*#__PURE__*/_react["default"].createElement(_requestContactDetailConfirmation.RequestContactDetailWrapper, null, /*#__PURE__*/_react["default"].createElement(_requestContactDetailConfirmation.RequestContactWrapper, null, /*#__PURE__*/_react["default"].createElement(_requestContactDetailConfirmation.ContactWhiteBlock, null, /*#__PURE__*/_react["default"].createElement(_requestContactDetailConfirmation.WrapperContact, null, contact &&
      /*#__PURE__*/
      /* $FlowFixMe props injectées par le hoc */
      _react["default"].createElement(_contact["default"], {
        requestTrackEvent: {
          category: category,
          action: action
        },
        contact: contact,
        main: false,
        multiContact: !!mainContact
      }), mainContact &&
      /*#__PURE__*/
      /* $FlowFixMe props injectées par le hoc */
      _react["default"].createElement(_contact["default"], {
        requestTrackEvent: {
          category: category,
          action: action
        },
        contact: mainContact,
        main: true,
        multiContact: contact !== undefined,
        logoUrl: requestCompany.imageUrl
      }))), /*#__PURE__*/_react["default"].createElement(_requestBackFaqLink["default"], {
        requestTrackEvent: {
          category: category,
          action: action
        },
        requestConfirmation: false
      })))), showGaDisplay && /*#__PURE__*/_react["default"].createElement(_trackingGa.TrackingGaDisplay, {
        category: category,
        action: action,
        label: "Show ".concat(gaLabel),
        value: 0
      }));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)(RequestContactDetailConfirmation);