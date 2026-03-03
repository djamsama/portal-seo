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
var _constants = require("../../../constants");
var _requestBackFaqLink = _interopRequireDefault(require("../requestBackFaqLink"));
var _requestSendedConfirmation = _interopRequireDefault(require("./components/requestSendedConfirmation"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable no-plusplus */ /* eslint-disable react/require-default-props */
var RequestConfirmation = /*#__PURE__*/function (_ContextComponent) {
  function RequestConfirmation() {
    (0, _classCallCheck2["default"])(this, RequestConfirmation);
    return _callSuper(this, RequestConfirmation, arguments);
  }
  (0, _inherits2["default"])(RequestConfirmation, _ContextComponent);
  return (0, _createClass2["default"])(RequestConfirmation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        oldStep = _this$props.oldStep,
        category = _this$props.category,
        action = _this$props.action,
        referer = _this$props.referer,
        requestDetails = _this$props.requestDetails,
        requestRecoCompanies = _this$props.requestRecoCompanies,
        multiRequestConfirmation = _this$props.multiRequestConfirmation,
        showGaDisplay = _this$props.showGaDisplay;
      var drdRequest = this.context.initData.drdRequest;
      // on veut une trace GA par demande
      var gaTrackings = [];
      if (showGaDisplay) {
        if (multiRequestConfirmation && requestDetails) {
          for (var i = 0; i < requestDetails.length; i++) {
            var req = requestDetails[i];
            gaTrackings.push(/*#__PURE__*/_react["default"].createElement(_trackingGa.TrackingGaDisplay, {
              key: "TrackingGaDisplayMultiRequestConfirmation".concat(category || "").concat(action || "").concat(i),
              category: category,
              action: action,
              label: "Direct Submit MultiRequest",
              value: 0,
              universeId: req.universeId ? req.universeId.toString() : "",
              categoryId: req.categoryId,
              companyCommercialStatus: req.companyCommercialStatus,
              companyRank: req.companyRank,
              idpTextType: req.idpTextType,
              mainKwRefId: req.mainKwRefId ? req.mainKwRefId.toString() : "",
              companyId: req.companyId ? req.companyId.toString() : "",
              mainConceptId: req.mainConceptId ? req.mainConceptId.toString() : ""
            }));
          }
        } else {
          gaTrackings.push(/*#__PURE__*/_react["default"].createElement(_trackingGa.TrackingGaDisplay, {
            category: category,
            action: action,
            label: !oldStep || oldStep !== _constants.CHOICE_STEP_ID ? "Direct Submit" : "2Steps Submit",
            value: 0
          }));
        }
      } else {
        gaTrackings.push(/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null));
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_requestSendedConfirmation["default"], {
        requestDetails: requestDetails,
        requestRecoCompanies: requestRecoCompanies,
        drdRequest: drdRequest
      }), /*#__PURE__*/_react["default"].createElement(_requestBackFaqLink["default"], {
        referer: referer,
        oldStep: oldStep,
        requestTrackEvent: {
          category: category,
          action: action
        },
        requestConfirmation: true,
        drdRequest: drdRequest
      }), gaTrackings);
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = RequestConfirmation;