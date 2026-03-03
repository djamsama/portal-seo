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
var _quotationContainer = _interopRequireDefault(require("../../containers/quotationContainer"));
var _myspaceQuotation = require("./components/quotation/styles/myspaceQuotation");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Composant gérant la liste des devis.
 */
var MySpaceQuotation = /*#__PURE__*/function (_React$Component) {
  function MySpaceQuotation() {
    (0, _classCallCheck2["default"])(this, MySpaceQuotation);
    return _callSuper(this, MySpaceQuotation, arguments);
  }
  (0, _inherits2["default"])(MySpaceQuotation, _React$Component);
  return (0, _createClass2["default"])(MySpaceQuotation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        quotations = _this$props.quotations,
        lead = _this$props.lead,
        leadContext = _this$props.leadContext,
        quoteIdToView = _this$props.quoteIdToView;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_myspaceQuotation.TitleDiv, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_request_quotation_received"
      })), quotations.map(function (quotation) {
        return /*#__PURE__*/_react["default"].createElement(_quotationContainer["default"], {
          key: "recapDevis".concat(quotation.id),
          quotation: quotation,
          lead: lead,
          leadContext: leadContext,
          openViewer: quoteIdToView === quotation.id
        });
      }));
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = MySpaceQuotation;