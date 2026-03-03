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
var _pdfButtons = require("./components/pdfButtons/styles/pdfButtons");
var _pdfSummary = require("./styles/pdfSummary");
var _contextComponent = require("../../../../../../components/contextComponent");
var _buttonsContainer = _interopRequireDefault(require("../buttons/containers/buttonsContainer"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // $FlowFixMe
var SOURCE_TYPE_CATALOG = "CATALOG";
var PdfSummary = /*#__PURE__*/function (_ContextComponent) {
  // $FlowFixMe

  function PdfSummary(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, PdfSummary);
    _this = _callSuper(this, PdfSummary, [props]);
    _this.toggleCollapse = _this.toggleCollapse.bind(_this);
    _this.toggleSticky = _this.toggleSticky.bind(_this);
    _this.state = {
      opened: false,
      height: 0,
      sticky: false
    };
    _this.elementRefContent = /*#__PURE__*/_react["default"].createRef();
    _this.refMainSupplier = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }
  (0, _inherits2["default"])(PdfSummary, _ContextComponent);
  return (0, _createClass2["default"])(PdfSummary, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var opened = this.state.opened;
      if (opened !== false) {
        this.setState({
          opened: false
        });
      }
      window.addEventListener("scroll", this.toggleSticky);
    }
  }, {
    key: "toggleSticky",
    value: function toggleSticky() {
      var sticky = this.state.sticky;
      if (window.pageYOffset >= 600) {
        if (sticky === false) {
          this.setState({
            sticky: true
          });
        }
      } else if (sticky !== false) {
        this.setState({
          sticky: false
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.toggleSticky);
    }
  }, {
    key: "toggleCollapse",
    value: function toggleCollapse() {
      var opened = this.state.opened;
      var readMoreComponents = this.elementRefContent.current.children;
      var componentScrollHeight = 0;
      Object.values(readMoreComponents).forEach(function (comp) {
        // $FlowFixMe
        componentScrollHeight += comp.scrollHeight;
      });
      this.setState({
        opened: !opened,
        height: componentScrollHeight + 100
      });
      if (opened) {
        var element = document.getElementById("sumcontent");
        // $FlowFixMe
        element.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$context$initDat = this.context.initData,
        productStandDTO = _this$context$initDat.productStandDTO,
        pageTypeId = _this$context$initDat.pageTypeId,
        catalogStandDetail = _this$context$initDat.catalogStandDetail;
      return /*#__PURE__*/_react["default"].createElement(_pdfSummary.PdfSummaryBody, null, /*#__PURE__*/_react["default"].createElement(_pdfSummary.PdfSummaryContainer, null, /*#__PURE__*/_react["default"].createElement(_pdfSummary.PdfSummaryTitle, null, catalogStandDetail.title), /*#__PURE__*/_react["default"].createElement(_pdfSummary.PdfSummarySubTitle, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_catalog_detail_summary"
      })), /*#__PURE__*/_react["default"].createElement(_pdfSummary.PdfSummaryDivider, null, /*#__PURE__*/_react["default"].createElement(_pdfSummary.PdfSummaryLine, null)), /*#__PURE__*/_react["default"].createElement(_pdfSummary.PdfSummaryContent, {
        id: "sumcontent",
        height: this.state.height,
        opened: this.state.opened
      }, /*#__PURE__*/_react["default"].createElement(_pdfSummary.PdfSummaryContentInner, {
        ref: this.elementRefContent,
        dangerouslySetInnerHTML: {
          __html: catalogStandDetail.summary
        }
      }), /*#__PURE__*/_react["default"].createElement(_pdfSummary.PdfSummaryMore, {
        opened: this.state.opened,
        onClick: this.toggleCollapse
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: this.state.opened ? "foj_catalog_detail_summary_less" : "foj_catalog_detail_summary_more"
      }), /*#__PURE__*/_react["default"].createElement("i", {
        className: this.state.opened ? "fa fa-angle-up" : "fa fa-angle-down"
      })))), /*#__PURE__*/_react["default"].createElement(_pdfButtons.PdfButtonsContainer, {
        sticky: this.state.sticky
      }, /*#__PURE__*/_react["default"].createElement(_buttonsContainer["default"], {
        catalogStandDetail: catalogStandDetail,
        sourceType: 1,
        pageTypeId: pageTypeId,
        sourceId: productStandDTO === null || productStandDTO === void 0 ? void 0 : productStandDTO.productId,
        companyId: productStandDTO === null || productStandDTO === void 0 ? void 0 : productStandDTO.companyId,
        itemType: SOURCE_TYPE_CATALOG,
        refMainSupplier: this.refMainSupplier,
        showTitle: false,
        noTopMargin: true
      })));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(PdfSummary);