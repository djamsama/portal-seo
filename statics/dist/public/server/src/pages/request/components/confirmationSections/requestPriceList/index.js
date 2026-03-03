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
var _contextComponent = require("../../../../../components/contextComponent");
var _documentViewerContainer = _interopRequireDefault(require("../../../../../containers/documentViewerContainer"));
var _requestFormTitle = _interopRequireDefault(require("../../../containers/requestFormTitle"));
var _requestElement = _interopRequireDefault(require("../../requestElement"));
var _requestPriceList = require("./styles/requestPriceList");
var _formWrapper = require("../../../styles/formWrapper");
var _withGoogleAnalytics = require("../../../../../hoc/withGoogleAnalytics");
var _trackingGa = require("../../../../../components/trackings/trackingGa");
var _constants = require("../../../constants");
var _returnButton = _interopRequireDefault(require("../../../../../components/returnButton"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/** Demandes: step affichage de la grille tarifaire. */
var RequestPriceList = /*#__PURE__*/function (_ContextComponent) {
  function RequestPriceList(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, RequestPriceList);
    _this = _callSuper(this, RequestPriceList, [props, context]);
    _this.goBack = _this.goBack.bind(_this);
    _this.state = {
      gaExit: true
    };
    return _this;
  }

  /** Retour au step initial. */
  (0, _inherits2["default"])(RequestPriceList, _ContextComponent);
  return (0, _createClass2["default"])(RequestPriceList, [{
    key: "goBack",
    value: function goBack() {
      var _this$props = this.props,
        googleAnalytics = _this$props.googleAnalytics,
        category = _this$props.category,
        action = _this$props.action;
      if (false) {
        if (googleAnalytics) {
          this.setState({
            gaExit: false
          });
          googleAnalytics.event({
            action: action,
            category: category,
            label: _constants.GA_LABELS[_constants.AJAX_REQUEST_PROSPECT_PRICE_LIST_FORMATED]["return"]
          });
        }
        window.history.go(-1);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        priceListContent = _this$props2.priceListContent,
        contact = _this$props2.contact,
        category = _this$props2.category,
        action = _this$props2.action,
        showGaDisplay = _this$props2.showGaDisplay;
      var gaExit = this.state;
      var goBackTo = -1;
      if (false && window) {
        goBackTo = window.document.referrer;
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_formWrapper.FormWrapperStyled, null, /*#__PURE__*/_react["default"].createElement(_requestFormTitle["default"], null), /*#__PURE__*/_react["default"].createElement(_formWrapper.RequestFormWrapper, null, /*#__PURE__*/_react["default"].createElement(_formWrapper.MainContent, null, /*#__PURE__*/_react["default"].createElement(_requestPriceList.PriceListWrapper, null, /*#__PURE__*/_react["default"].createElement(_requestPriceList.ContactWrapper, null, /*#__PURE__*/_react["default"].createElement(_requestPriceList.Contact, {
        supplier: contact !== undefined ? contact : this.context.initData.contact,
        secondary: true,
        trackingGa: {
          category: category,
          action: action,
          label: _constants.GA_LABELS[_constants.AJAX_REQUEST_PROSPECT_PRICE_LIST_FORMATED].clickBouton
        }
      })), /*#__PURE__*/_react["default"].createElement(_requestPriceList.MainWrapper, null, /*#__PURE__*/_react["default"].createElement(_requestPriceList.ViewerWrapper, null, /*#__PURE__*/_react["default"].createElement(_documentViewerContainer["default"], {
        open: true,
        fileName: "priceList.pdf",
        attachmentContext: priceListContent !== undefined ? priceListContent : this.context.initData.priceListContent,
        rawFile: true
      }))), /*#__PURE__*/_react["default"].createElement(_returnButton["default"], {
        i18nkey: "fo_request_return_initial",
        goBackTo: goBackTo,
        goBackCallBack: this.goBack
      }))), /*#__PURE__*/_react["default"].createElement(_formWrapper.SideContent, null, /*#__PURE__*/_react["default"].createElement(_requestElement["default"], null))), /*#__PURE__*/_react["default"].createElement(_requestPriceList.Disclaimer, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_pricelistviewer_disclaimer"
      })), showGaDisplay && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_trackingGa.TrackingGaDisplay, {
        category: category,
        action: action,
        label: _constants.GA_LABELS[_constants.AJAX_REQUEST_PROSPECT_PRICE_LIST_FORMATED].display,
        value: 0
      }), /*#__PURE__*/_react["default"].createElement(_trackingGa.TrackingGaExit, {
        category: category,
        action: action,
        label: _constants.GA_LABELS[_constants.AJAX_REQUEST_PROSPECT_PRICE_LIST_FORMATED].close,
        active: gaExit
      }))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)(RequestPriceList);