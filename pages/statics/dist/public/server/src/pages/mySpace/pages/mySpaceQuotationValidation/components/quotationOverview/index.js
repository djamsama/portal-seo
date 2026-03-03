"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _documentViewerContainer = _interopRequireDefault(require("../../../../../../containers/documentViewerContainer"));
var _mySpaceQuotationValidation = require("../../styles/mySpaceQuotationValidation.js");
var _waterMarkValidation = _interopRequireDefault(require("../waterMarkValidation"));
var _quotationOverview = require("./styles/quotationOverview");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Composant permettant d'afficher le détail d'un devis
 */
var QuotationOverview = /*#__PURE__*/function (_Component) {
  function QuotationOverview(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, QuotationOverview);
    _this = _callSuper(this, QuotationOverview, [props, state]);
    _this.state = {
      dimensions: null
    };
    return _this;
  }
  (0, _inherits2["default"])(QuotationOverview, _Component);
  return (0, _createClass2["default"])(QuotationOverview, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.container) {
        this.setState({
          dimensions: {
            width: this.container.offsetWidth,
            height: this.container.offsetHeight
          }
        });
      }
    }

    /** Calcul de la position du watermark sur l'axe des abscisses. */
  }, {
    key: "getXPos",
    value: function getXPos() {
      var defaultWatermarkWidth = 320;
      var dimensions = this.state.dimensions;
      if (dimensions && dimensions.width) {
        return dimensions.width / 2;
      }
      return defaultWatermarkWidth / 2;
    }

    /** Calcul de la position du watermark sur l'axe des ordonnées. */
  }, {
    key: "getYPos",
    value: function getYPos() {
      var defaultWatermarkHeight = 145;
      var dimensions = this.state.dimensions;
      if (dimensions && dimensions.height) {
        return dimensions.height / 2;
      }
      return defaultWatermarkHeight / 2;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        validated = _this$props.validated,
        open = _this$props.open,
        fileName = _this$props.fileName,
        attachmentContext = _this$props.attachmentContext,
        withTitle = _this$props.withTitle,
        quotationSigningDate = _this$props.quotationSigningDate;
      return /*#__PURE__*/_react["default"].createElement(_quotationOverview.QuotationOverviewDiv, null, withTitle && /*#__PURE__*/_react["default"].createElement(_mySpaceQuotationValidation.MySpaceQuotationValidationTitle, null, fileName), /*#__PURE__*/_react["default"].createElement("div", {
        className: withTitle ? "WithTitle" : "NoTitle"
      }, /*#__PURE__*/_react["default"].createElement(_documentViewerContainer["default"], {
        open: open,
        fileName: fileName,
        attachmentContext: attachmentContext
      }), validated && /*#__PURE__*/_react["default"].createElement(_quotationOverview.QuotationWatermarkWrapper, {
        ref: function ref(el) {
          return _this2.container = el;
        },
        xpos: this.getXPos(),
        ypos: this.getYPos()
      }, /*#__PURE__*/_react["default"].createElement(_waterMarkValidation["default"], {
        quotationSigningDate: quotationSigningDate
      }))));
    }
  }]);
}(_react.Component);
var _default = exports["default"] = QuotationOverview;